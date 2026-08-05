/* ==========================================================================
   AbhyasLab — API client
 
   Three things make this fast, on top of the backend rewrite:
 
   1. In-flight de-duplication. If two parts of the screen ask for the same
      thing at the same moment, only one request leaves the browser.
   2. A short client-side cache, so flipping between faculty tabs is instant
      instead of costing a round trip each time.
   3. Faculty data arrives in five small calls instead of one enormous one, so
      the dashboard can paint as soon as the first lands.
   ========================================================================== */
 
const API = (() => {
 
  const live = () =>
    typeof CONFIG.endpoint === "string" && CONFIG.endpoint.includes("script.google.com");
 
  /* ---------------------------------------------------------- plumbing --- */
 
  const inflight = new Map();
  const cache = new Map();
 
  function cacheGet(key) {
    const hit = cache.get(key);
    if (!hit) return null;
    if (Date.now() > hit.until) { cache.delete(key); return null; }
    return hit.value;
  }
 
  function cachePut(key, value, ms) {
    cache.set(key, { value, until: Date.now() + ms });
  }
 
  function dropCache(prefix) {
    if (!prefix) return cache.clear();
    [...cache.keys()].filter(k => k.startsWith(prefix)).forEach(k => cache.delete(k));
  }
 
  async function post(payload, opts = {}) {
    if (!live()) return { ok: false, offline: true, error: "The backend is not connected." };
 
    const key = opts.cacheKey || null;
    if (key) {
      const hit = cacheGet(key);
      if (hit) return hit;
    }
 
    /* Collapse duplicate simultaneous requests into one. */
    const dedupe = key || JSON.stringify(payload);
    if (inflight.has(dedupe)) return inflight.get(dedupe);
 
    const run = (async () => {
      try {
        const res = await fetch(CONFIG.endpoint, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payload)
        });
        const text = await res.text();
        let data;
        try { data = JSON.parse(text); }
        catch { return { ok: false, error: "The server returned an unreadable response." }; }
        if (key && data && data.ok) cachePut(key, data, opts.ttl || 20000);
        return data;
      } catch {
        return { ok: false, error: "Could not reach the server. Check your connection." };
      } finally {
        inflight.delete(dedupe);
      }
    })();
 
    inflight.set(dedupe, run);
    return run;
  }
 
  /* Every authenticated call sends the ID too, so the server can find the
     account with one row read instead of searching for the token. */
  const auth = (a) => ({
    authToken: a && a.token ? a.token : "",
    accountId: a && a.id ? a.id : ""
  });
 
  /* Anything that changes a student clears the faculty views as well. */
  const afterWrite = () => { dropCache("fac"); dropCache("stu"); };
 
  return {
    isLive: live,
    clearCache: dropCache,
 
    /* ------------------------------------------------------- public ----- */
 
    listSections() {
      return post({ action: "sections" }, { cacheKey: "sections", ttl: 300000 });
    },
 
    registerStudent(d) {
      return post({
        action: "studentRegister",
        studentId: d.id, studentName: d.name, email: d.email,
        section: d.section, pin: d.pin, course: CONFIG.courseName
      });
    },
 
    registerFaculty(d) {
      return post({
        action: "facultyRegister",
        facultyId: d.id, facultyName: d.name, email: d.email,
        pin: d.pin, sections: d.sections || [], joinCode: d.joinCode || "",
        course: CONFIG.courseName
      });
    },
 
    login(role, id, pin) {
      return post({ action: "login", role, accountId: id, pin });
    },
 
    resume(a) { return post(Object.assign({ action: "resume" }, auth(a))); },
    logout(a) { dropCache(); return post(Object.assign({ action: "logout" }, auth(a))); },
 
    /* ------------------------------------------------------ student ----- */
 
    syncCourse(a, schema) {
      return post(Object.assign({ action: "syncCourse", schema }, auth(a)));
    },
 
    async logProgress(a, row) {
      const r = await post(Object.assign({
        action: "progress",
        unit: row.unit, stepId: row.stepId, stepType: row.stepType,
        stepName: row.stepName, mcqBest: row.mcqBest, mcqTotal: row.mcqTotal,
        tasksCompleted: row.tasksCompleted, tasksTotal: row.tasksTotal,
        taskIds: row.taskIds, status: row.status
      }, auth(a)));
      afterWrite();
      return r;
    },
 
    async logTest(a, row) {
      const r = await post(Object.assign({
        action: "test",
        unit: row.unit, stepId: row.stepId, testName: row.testName,
        score: row.score, total: row.total, percent: row.percent,
        result: row.result, reason: row.reason || "Submitted"
      }, auth(a)));
      afterWrite();
      return r;
    },
 
    async submitProject(a, row) {
      const r = await post(Object.assign({
        action: "project",
        unit: row.unit, stepId: row.stepId, projectName: row.projectName,
        submissionType: row.submissionType || "link", link: row.link || ""
      }, auth(a)));
      afterWrite();
      return r;
    },
 
    heartbeat(a, row) {
      return post(Object.assign({
        action: "heartbeat",
        sessionId: row.sessionId,
        minutes: Math.round(row.minutes * 10) / 10,
        screen: row.screen || ""
      }, auth(a)));
    },
 
    beacon(a, row) {
      if (!live() || !navigator.sendBeacon || !a || !a.token) return false;
      const body = JSON.stringify(Object.assign({
        action: "heartbeat",
        sessionId: row.sessionId,
        minutes: Math.round(row.minutes * 10) / 10,
        screen: row.screen || ""
      }, auth(a)));
      try {
        return navigator.sendBeacon(CONFIG.endpoint, new Blob([body], { type: "text/plain;charset=utf-8" }));
      } catch { return false; }
    },
 
    flag(a, row) {
      if (!CONFIG.integrityLogging) return Promise.resolve({ ok: false });
      return post(Object.assign({
        action: "flag", event: row.event, where: row.where || "", detail: row.detail || ""
      }, auth(a)));
    },
 
    ask(a, question, context, history) {
      return post(Object.assign({
        action: "ask", question, context, history: (history || []).slice(-6)
      }, auth(a)));
    },
 
    saveTheme(a, theme) {
      return post(Object.assign({ action: "theme", theme }, auth(a)));
    },
 
    /* ------------------------------------------------------ faculty ----- */
    /* Five small calls. The screen paints after the first one lands. */
 
    facultySummary(a) {
      return post(Object.assign({ action: "facultySummary" }, auth(a)),
        { cacheKey: "fac:summary", ttl: 15000 });
    },
 
    facultyStudents(a, q = {}) {
      const key = `fac:list:${q.page || 1}:${q.pageSize || 25}:${q.section || ""}:${q.status || ""}:${q.unit || ""}:${q.query || ""}:${q.sort || "name"}`;
      return post(Object.assign({
        action: "facultyStudents",
        page: q.page || 1, pageSize: q.pageSize || 25,
        section: q.section || "", status: q.status || "",
        unit: q.unit || "", query: q.query || "", sort: q.sort || "name"
      }, auth(a)), { cacheKey: key, ttl: 15000 });
    },
 
    facultyAttention(a) {
      return post(Object.assign({ action: "facultyAttention" }, auth(a)),
        { cacheKey: "fac:attention", ttl: 30000 });
    },
 
    facultyCharts(a) {
      return post(Object.assign({ action: "facultyCharts" }, auth(a)),
        { cacheKey: "fac:charts", ttl: 30000 });
    },
 
    facultyProjects(a) {
      return post(Object.assign({ action: "facultyProjects" }, auth(a)),
        { cacheKey: "fac:projects", ttl: 15000 });
    },
 
    facultyStudent(a, studentId, includeHistory = true) {
      return post(Object.assign({
        action: "facultyStudent", studentId, includeHistory
      }, auth(a)), { cacheKey: `fac:one:${studentId}:${includeHistory}`, ttl: 15000 });
    },
 
    async createSection(a, sectionName) {
      const r = await post(Object.assign({ action: "createSection", sectionName }, auth(a)));
      dropCache("sections"); dropCache("fac");
      return r;
    },
 
    async studentAction(a, studentId, operation, unit = "", confirmation = "") {
      const r = await post(Object.assign({
        action: "studentAction", studentId, operation, unit, confirmation
      }, auth(a)));
      afterWrite();
      return r;
    },
 
    async approveProject(a, studentId, unit, score, feedback) {
      const r = await post(Object.assign({
        action: "approveProject", studentId, unit, score, feedback
      }, auth(a)));
      afterWrite();
      return r;
    }
  };
})();
