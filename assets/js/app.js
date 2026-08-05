/* ==========================================================================
   AbhyasLab — application
   ========================================================================== */
(() => {
"use strict";

/* ---------------------------------------------------------------- helpers */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/* Task instructions are author-controlled course content. Escape everything,
   then restore only a few harmless inline formatting tags. This makes text
   such as <code>bool()</code> render as code instead of showing the tags. */
const inlineMarkup = (s) => esc(s == null ? "" : s)
  .replace(/&lt;(\/?)(code|strong|em)&gt;/gi, "<$1$2>");

/* trailing spaces and blank end-lines shouldn't fail a student */
const tidy = (s) => String(s == null ? "" : s)
  .replace(/\r\n/g, "\n")
  .split("\n").map(l => l.replace(/\s+$/, "")).join("\n")
  .replace(/\n+$/, "").replace(/^\n+/, "");

const pad = (n) => String(n).padStart(2, "0");

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 3600);
}

function credit() {
  return `<footer class="credit">
    <span>Created by <strong>${esc(CONFIG.author)}</strong></span>
    <a href="${esc(CONFIG.authorGithub)}" target="_blank" rel="noopener">GitHub</a>
    <a href="${esc(CONFIG.authorInstagram)}" target="_blank" rel="noopener">Instagram</a>
  </footer>`;
}

function guardNote(what) {
  if (!CONFIG.focusGuard || isFaculty()) return "";
  return `<div class="guard">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 L22 20 H2 Z M11 9h2v6h-2z m0 8h2v2h-2z"/></svg>
    <span>Stay on this tab. If you switch away, minimise, or open another window,
    ${what}. <b>Finish here first.</b></span>
  </div>`;
}

/* ---------------------------------------------------------------- content */
/* Every screen a student can reach, in the order they unlock. */
const STEPS = [];
COURSE.forEach((u, ui) => {
  u.topics.forEach((t, ti) => STEPS.push({
    kind: "topic", unitIdx: ui, unit: u.unit, unitTitle: u.unitTitle,
    no: ti + 1, id: t.id, title: t.title, summary: t.summary, data: t
  }));
  if (u.test) STEPS.push({
    kind: "test", unitIdx: ui, unit: u.unit, unitTitle: u.unitTitle,
    id: "test:" + u.unit, title: u.test.title || (u.unit + " Test"),
    summary: `${u.test.questions.length} questions · ${u.test.questions.length * u.test.marksPerQuestion} marks · ${u.test.durationMinutes} minutes`,
    data: u.test
  });
  if (u.project) STEPS.push({
    kind: "project", unitIdx: ui, unit: u.unit, unitTitle: u.unitTitle,
    id: "proj:" + u.unit, title: u.project.title, summary: u.project.summary, data: u.project
  });
});

const stepAt   = (i) => STEPS[i];
const indexOf_ = (id) => STEPS.findIndex(s => s.id === id);
const totalMarks = (test) => test.questions.length * test.marksPerQuestion;

/* ------------------------------------------------------------------ state */
const KEY_STUDENT = "abhyaslab.student";
const keyProgress = (id) => "abhyaslab.progress." + id;

let student  = null;
let progress = {};
let serverState = { progress: {}, tests: {}, projects: {}, summary: null };
let view     = { name: "dashboard", step: 0, facultyTab: "overview" };
let authMode = "login";
const chat   = [];

function loadStudent() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY_STUDENT) || "null");
    if (!saved || !saved.id || !saved.token) return null;
    if (!saved.expiresAt || Date.parse(saved.expiresAt) <= Date.now()) {
      localStorage.removeItem(KEY_STUDENT);
      return null;
    }
    return saved;
  } catch { return null; }
}
function saveStudent() {
  try { localStorage.setItem(KEY_STUDENT, JSON.stringify(student)); } catch {}
}
function clearStudent() {
  try { localStorage.removeItem(KEY_STUDENT); } catch {}
  student = null;
}
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(keyProgress(student.id)) || "{}"); }
  catch { return {}; }
}
function saveProgress() {
  if (isFaculty()) return;
  try { localStorage.setItem(keyProgress(student.id), JSON.stringify(progress)); } catch {}
}
function rec(id) {
  if (!progress[id]) progress[id] = { done: false, tasks: {}, mcqScore: 0, mcqTotal: 0, mcqPassed: false };
  if (!progress[id].tasks) progress[id].tasks = {};
  return progress[id];
}


/* ======================================================================
   THEMES

   One attribute on <html> repaints everything — sign-in, student screens,
   faculty console. The choice is kept in localStorage so the page never
   flashes the wrong colours on load, and mirrored to the Sheet so it follows
   the person to another device.
   ====================================================================== */

const THEMES = [
  { id: "classic-white", name: "Classic White", note: "Bright, clean and professional.",
    swatch: ["#FFFFFF", "#EDF0F6", "#1D4ED8", "#C9D2E4"] },
  { id: "dark-galaxy",   name: "Dark Galaxy",   note: "Focused dark mode with indigo highlights.",
    swatch: ["#0F1730", "#1C2A52", "#8B7DF0", "#EFEDE4"] },
  { id: "ocean-blue",    name: "Ocean Blue",    note: "Calming deep-ocean blue and cyan tones.",
    swatch: ["#07202E", "#134259", "#22D3EE", "#E6F4F9"] },
  { id: "forest-green",  name: "Forest Green",  note: "Natural green tones for long study sessions.",
    swatch: ["#0C1F16", "#193F2E", "#4ADE80", "#E8F3EC"] },
  { id: "sunset-warm",   name: "Sunset Warm",   note: "Warm amber and rose highlights.",
    swatch: ["#231311", "#452722", "#FBAF3F", "#F8EDE6"] }
];

const THEME_KEY = "abhyaslab.theme";
const DEFAULT_THEME = "dark-galaxy";

function currentTheme() {
  try { return localStorage.getItem(THEME_KEY) || DEFAULT_THEME; }
  catch { return DEFAULT_THEME; }
}

function applyTheme(id, animate) {
  const theme = THEMES.some(t => t.id === id) ? id : DEFAULT_THEME;
  const root = document.documentElement;
  if (animate) {
    root.classList.add("theme-anim");
    setTimeout(() => root.classList.remove("theme-anim"), 320);
  }
  root.setAttribute("data-theme", theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch {}

  const dots = $("#themeDots");
  if (dots) {
    const t = THEMES.find(x => x.id === theme);
    dots.innerHTML = t.swatch.map(c => `<i style="background:${c}"></i>`).join("");
  }
  return theme;
}

/* Runs before anything renders, so there is never a flash of the wrong theme. */
applyTheme(currentTheme(), false);

function openThemePicker() {
  const active = currentTheme();
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "themeModal";
  modal.innerHTML = `
    <div class="modal__box" role="dialog" aria-modal="true" aria-labelledby="themeTitle">
      <header class="modal__head">
        <div>
          <p class="modal__k">Appearance</p>
          <h3 class="modal__t" id="themeTitle">Choose theme</h3>
          <p class="modal__s">The same theme is used on the sign-in, student and faculty pages.</p>
        </div>
        <button class="modal__x" id="themeClose" aria-label="Close">&times;</button>
      </header>
      <div class="themelist">
        ${THEMES.map(t => `
          <button type="button" class="themecard ${t.id === active ? "is-active" : ""}" data-theme-id="${t.id}">
            <span class="themecard__swatch">${t.swatch.map(c => `<i style="background:${c}"></i>`).join("")}</span>
            <span class="themecard__main">
              <span class="themecard__t">${esc(t.name)}</span>
              <span class="themecard__s">${esc(t.note)}</span>
            </span>
            <span class="themecard__tick">&#10003;</span>
          </button>`).join("")}
      </div>
    </div>`;

  document.body.appendChild(modal);

  const close = () => modal.remove();
  $("#themeClose", modal).addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", function onKey(e) {
    if (e.key === "Escape") { close(); document.removeEventListener("keydown", onKey); }
  });

  $$("[data-theme-id]", modal).forEach(btn => btn.addEventListener("click", () => {
    const id = btn.dataset.themeId;
    applyTheme(id, true);
    $$(".themecard", modal).forEach(c => c.classList.toggle("is-active", c === btn));
    /* Remember it on the server too, but never block on it. */
    if (student && student.token) API.saveTheme(student, id).catch(() => {});
    setTimeout(close, 220);
  }));
}

const isFaculty = () => !!student && student.role === "faculty";

/* If this device has never picked a theme, use the one saved on the account. */
function adoptServerTheme(theme) {
  if (!theme) return;
  let chosen = null;
  try { chosen = localStorage.getItem(THEME_KEY); } catch {}
  if (!chosen) applyTheme(theme, false);
}

const SYNC = (() => {
  const skip = () => Promise.resolve({ ok: false, faculty: true });
  return {
    isLive: () => API.isLive(),
    progress: (row) => isFaculty() ? skip() : API.logProgress(student, row),
    test: (row) => isFaculty() ? skip() : API.logTest(student, row),
    project: (row) => isFaculty() ? skip() : API.submitProject(student, row),
    heartbeat: (row) => isFaculty() ? skip() : API.heartbeat(student, row),
    beacon: (row) => isFaculty() ? false : API.beacon(student, row),
    flag: (row) => isFaculty() ? skip() : API.flag(student, row)
  };
})();

function isUnlocked(i) {
  if (isFaculty()) return true;
  if (!CONFIG.lockingEnabled || i === 0) return true;
  const prev = progress[STEPS[i - 1].id];
  return !!(prev && prev.done);
}
const doneCount = () => STEPS.filter(s => progress[s.id] && progress[s.id].done).length;

function stepTypeOf(s) {
  if (!s) return "Topic";
  if (s.kind !== "topic") return s.kind === "test" ? "Test" : "Project";
  const id = String(s.id || "");
  const title = String(s.title || "").toLowerCase();
  if (/checkpoint/.test(id) || /checkpoint/.test(title)) return "Revision Checkpoint";
  if (/mini[-_ ]?project/.test(id) || /guided mini/.test(title)) return "Guided Mini-Project";
  return "Topic";
}

function progressSnapshot(s, r, event = "Progress updated") {
  return {
    unit: s.unit,
    stepId: s.id,
    stepType: stepTypeOf(s),
    stepName: s.title,
    mcqBest: Number(r.mcqScore || 0),
    mcqTotal: Number(r.mcqTotal || 0),
    tasksCompleted: Object.keys(r.tasks || {}).length,
    tasksTotal: (s.data.tasks || []).length,
    taskIds: Object.keys(r.tasks || {}),
    status: r.done ? "Completed" : ((r.mcqTotal || Object.keys(r.tasks || {}).length) ? "In Progress" : "Not Started"),
    lastEvent: event
  };
}

function sendProgressSnapshot(s, r, event) {
  if (isFaculty()) return Promise.resolve({ ok: false, faculty: true });
  return SYNC.progress(progressSnapshot(s, r, event));
}

function courseSchemaPayload() {
  return {
    version: typeof COURSE_META !== "undefined" ? COURSE_META.version : "",
    units: COURSE.map(unit => ({
      unit: unit.unit,
      title: unit.unitTitle,
      steps: unit.topics.map(topic => ({
        id: topic.id,
        type: stepTypeOf({ kind: "topic", id: topic.id, title: topic.title }),
        title: topic.title,
        tasksTotal: (topic.tasks || []).length
      })),
      testId: unit.test ? "test:" + unit.unit : "",
      projectId: unit.project ? "proj:" + unit.unit : ""
    }))
  };
}

function applyRemoteState(state) {
  if (!state || isFaculty()) return;
  serverState = state;

  Object.keys(state.progress || {}).forEach(stepId => {
    const p = state.progress[stepId];
    const r = rec(stepId);
    r.done = p.status === "Completed";
    r.mcqScore = Number(p.mcqBest || 0);
    r.mcqTotal = Number(p.mcqTotal || 0);
    r.mcqPassed = r.mcqTotal ? Math.round(r.mcqScore / r.mcqTotal * 100) >= CONFIG.mcqPassPercent : false;
    r.tasks = {};
    (p.taskIds || []).forEach(id => { r.tasks[id] = true; });
  });

  Object.keys(state.tests || {}).forEach(unit => {
    const t = state.tests[unit] || {};
    const id = "test:" + unit;
    if (t.resetAt && !(t.attempts || []).length) {
      delete progress[id];
      return;
    }
    if ((t.attempts || []).length || t.passed) {
      const r = rec(id);
      r.attempts = (t.attempts || []).length;
      r.best = t.best;
      r.total = t.total;
      r.done = !!t.passed;
    }
  });

  Object.keys(state.projects || {}).forEach(unit => {
    const p = state.projects[unit] || {};
    const id = "proj:" + unit;
    if (p.submissionStatus === "Reset") {
      delete progress[id];
      return;
    }
    if (p.submissionStatus) {
      const r = rec(id);
      r.done = true;
      r.link = p.url || "";
      r.at = p.submittedAt || new Date().toISOString();
      r.serverStatus = p.submissionStatus;
      r.approvedScore = p.approvedScore;
      r.facultyFeedback = p.facultyFeedback || "";
    }
  });
  saveProgress();
}

/* ======================================================================
   SESSION CLOCK
   Counts only the time the tab is actually in front, and reports it to the
   Session_Log tab so faculty see real time on task, not time since login.
   ====================================================================== */
const SESSION = { id: null, active: 0, lastTick: 0, lastSent: 0, timer: null };

function currentScreen() {
  if (view.name === "dashboard") return "Home";
  const s = stepAt(view.step);
  return s ? s.title : "Home";
}

function beginSession() {
  if (isFaculty()) return;                      // no time tracking for faculty
  SESSION.id = String(student.id).replace(/\s+/g, "") + "-" + Date.now().toString(36);
  SESSION.active = 0;
  SESSION.lastTick = Date.now();
  SESSION.lastSent = 0;
  beat();
  SESSION.timer = setInterval(tickSession, 15000);
}

function tickSession() {
  const now = Date.now();
  if (document.visibilityState === "visible") SESSION.active += now - SESSION.lastTick;
  SESSION.lastTick = now;
  if (now - SESSION.lastSent >= (CONFIG.heartbeatSeconds || 120) * 1000) beat();
}

function beat() {
  if (!SESSION.id) return;
  SESSION.lastSent = Date.now();
  SYNC.heartbeat({ sessionId: SESSION.id, minutes: SESSION.active / 60000, screen: currentScreen() });
}

/* one last ping as the tab closes */
window.addEventListener("pagehide", () => {
  if (!SESSION.id || isFaculty()) return;
  const now = Date.now();
  if (document.visibilityState === "visible") SESSION.active += now - SESSION.lastTick;
  SYNC.beacon({ sessionId: SESSION.id, minutes: SESSION.active / 60000, screen: currentScreen() });
});

/* ======================================================================
   FOCUS GUARD
   Leave the tab mid-topic and that topic resets. Leave mid-test and the
   test is submitted where it stands.
   ====================================================================== */
const guard = { armed: false, step: -1, allowLeave: false, pending: null };

function armGuard(i, on) { guard.armed = !!on; guard.step = i; }

/* opening a link in a new tab is not cheating */
document.addEventListener("click", (e) => {
  const a = e.target.closest && e.target.closest('a[target="_blank"]');
  if (!a) return;
  guard.allowLeave = true;
  setTimeout(() => { guard.allowLeave = false; }, 4000);   // one trip only
}, true);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    if (guard.pending) {
      const msg = guard.pending;
      guard.pending = null;
      render();
      toast(msg);
    }
    return;
  }
  if (!CONFIG.focusGuard || !guard.armed || isFaculty()) return;
  if (guard.allowLeave) { guard.allowLeave = false; return; }

  const s = stepAt(guard.step);
  if (!s) return;

  if (s.kind === "test" && exam.running) {
    finishExam("You left the tab");
    SYNC.flag({ event: "Left the tab during a test", where: s.title,
                        detail: "Test submitted automatically" });
    guard.pending = "You left the tab, so the test was submitted.";
  } else if (s.kind === "topic") {
    delete progress[s.id];
    const resetRec = rec(s.id);
    saveProgress();
    sendProgressSnapshot(s, resetRec, "Topic progress reset after leaving the tab");
    SYNC.flag({ event: "Left the tab during a topic", where: s.title,
                detail: "Topic progress cleared" });
    guard.pending = "You left the tab. This topic's progress was cleared.";
  }
});

/* ======================================================================
   WELCOME SCREEN
   ====================================================================== */
const SCRIPT_LINES = [
  { t: '>>> ', cls: 'prompt', instant: true },
  { t: 'print("Concept To Code")' },
  { t: '\n' },
  { t: 'Concept To Code', cls: 'out', instant: true },
  { t: '\n>>> ', cls: 'prompt', instant: true },
  { t: 'run_python(in_browser=True)' },
  { t: '\nNothing to install. Start typing.', cls: 'out', instant: true }
];

function typeShell() {
  const box = $("#shellText");
  if (!box) return;
  const slow = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let li = 0, ci = 0, html = "";

  if (!slow) {
    box.innerHTML = SCRIPT_LINES
      .map(p => p.cls ? `<span class="${p.cls}">${esc(p.t)}</span>` : esc(p.t)).join("");
    const c = $("#caret"); if (c) c.style.display = "none";
    return;
  }
  (function step() {
    if (li >= SCRIPT_LINES.length) { const c = $("#caret"); if (c) c.style.display = "none"; return; }
    const part = SCRIPT_LINES[li];
    if (part.instant) {
      html += part.cls ? `<span class="${part.cls}">${esc(part.t)}</span>` : esc(part.t);
      li++; ci = 0;
      box.innerHTML = html;
      return setTimeout(step, 260);
    }
    ci++;
    box.innerHTML = html + `<span class="str">${esc(part.t.slice(0, ci))}</span>`;
    if (ci >= part.t.length) { html += `<span class="str">${esc(part.t)}</span>`; li++; ci = 0; return setTimeout(step, 240); }
    setTimeout(step, 42);
  })();
}

/* ======================================================================
   SIGN-IN, FIRST-TIME REGISTRATION AND 24-HOUR SESSIONS
   ====================================================================== */
let authCheckTimer = null;

function setAuthMode(mode) {
  authMode = mode === "register" ? "register" : "login";
  $$('[data-auth-mode]').forEach(btn => btn.classList.toggle("is-active", btn.dataset.authMode === authMode));
  const registering = authMode === "register";
  $("#registerFields").hidden = !registering;
  $("#confirmPinField").hidden = !registering;
  $("#regName").required = registering;
  $("#regEmail").required = registering;
  $("#regSection").required = registering;
  $("#regPin2").required = registering;
  $("#regPin").autocomplete = registering ? "new-password" : "current-password";
  $("#regRole").disabled = false;
  applyRoleFields();
  $("#regNote").classList.remove("is-bad");
}

/* Students and faculty need different fields when signing up. */
function applyRoleFields() {
  const registering = authMode === "register";
  const faculty = $("#regRole").value === "faculty";

  const sectionField = $("#regSection").closest(".field");
  const facultyField = $("#facultyFields");

  if (sectionField) sectionField.hidden = !registering || faculty;
  if (facultyField) facultyField.hidden = !registering || !faculty;
  $("#regSection").required = registering && !faculty;

  $("#authSubmit").textContent = !registering
    ? "Sign in"
    : (faculty ? "Create faculty account" : "Create student account");

  $("#regId").placeholder = faculty ? "F1024" : "S2026CS01";

  $("#regNote").textContent = !registering
    ? "Your sign-in stays active for 12 hours."
    : (faculty
        ? "Faculty IDs start with F. List the sections you teach, separated by commas."
        : "Student roll numbers start with S. Pick your section and choose a new four-digit PIN.");
}

$$('[data-auth-mode]').forEach(btn => btn.addEventListener("click", () => setAuthMode(btn.dataset.authMode)));

async function loadSections() {
  const select = $("#regSection");
  if (!select) return;
  select.innerHTML = '<option value="">Loading sections…</option>';
  const res = await API.listSections();
  if (!res || !res.ok) {
    select.innerHTML = '<option value="">No sections available</option>';
    return;
  }
  /* The backend sends plain strings; older builds sent objects. Accept both. */
  const sections = (res.sections || []).map(s => (typeof s === "string" ? s : s && s.name)).filter(Boolean);
  select.innerHTML = sections.length
    ? '<option value="">Choose your section</option>' +
      sections.map(name => `<option value="${esc(name)}">${esc(name)}</option>`).join("")
    : '<option value="">No sections yet — ask your faculty</option>';
}

$("#regRole").addEventListener("change", applyRoleFields);

$("#regForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const note = $("#regNote");
  const btn = $("#authSubmit");
  const id = $("#regId").value.trim();
  const pin = $("#regPin").value.trim();
  const role = $("#regRole").value;

  note.classList.remove("is-bad");
  if (!/^[A-Za-z][A-Za-z0-9_-]{2,29}$/.test(id)) {
    note.textContent = "Enter a valid account ID without spaces.";
    note.classList.add("is-bad");
    return;
  }
  if (!/^\d{4}$/.test(pin)) {
    note.textContent = "Enter your four-digit PIN.";
    note.classList.add("is-bad");
    return;
  }

  btn.disabled = true;
  note.innerHTML = '<span class="spin"></span> Checking your account…';

  let res;
  if (authMode === "register") {
    const name = $("#regName").value.trim();
    const email = $("#regEmail").value.trim();
    const section = $("#regSection").value;
    const confirmPin = $("#regPin2").value.trim();
    const needsSection = role !== "faculty";
    if (name.length < 3 || !email || (needsSection && !section) || pin !== confirmPin) {
      btn.disabled = false;
      note.textContent = pin !== confirmPin
        ? "The two PIN entries do not match."
        : (needsSection ? "Fill in your name, email and section." : "Fill in your name and email.");
      note.classList.add("is-bad");
      return;
    }
    if (role === "faculty") {
      const sections = ($("#regSections").value || "")
        .split(",").map(x => x.trim()).filter(Boolean);
      res = await API.registerFaculty({
        id, name, email, pin, sections,
        joinCode: ($("#regJoinCode").value || "").trim()
      });
    } else {
      res = await API.registerStudent({ id, name, email, section, pin });
    }
  } else {
    res = await API.login(role, id, pin);
  }
  btn.disabled = false;

  if (!res || !res.ok) {
    note.textContent = (res && res.error) || "Sign-in failed. Try again.";
    note.classList.add("is-bad");
    if (res && res.needsProfile) setAuthMode("register");
    return;
  }
  acceptAuthResponse(res);
});

function acceptAuthResponse(res) {
  const a = res.account || {};
  adoptServerTheme(res.theme);
  student = {
    id: a.id,
    name: a.name,
    email: a.email || "",
    section: a.section || "",
    role: a.role,
    status: a.status,
    token: res.token,
    expiresAt: res.expiresAt,
    since: new Date().toISOString()
  };
  saveStudent();
  progress = loadProgress();
  applyRemoteState(res.state);
  startApp();
}

function bindThemeButtons() {
  ["#themeBtn", "#themeBtnGate"].forEach(sel => {
    const btn = $(sel);
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", openThemePicker);
    }
  });
  applyTheme(currentTheme(), false);
}

function startApp() {
  bindThemeButtons();
  $("#gate").hidden = true;
  $("#app").hidden  = false;
  $("#whoName").textContent = student.name;
  $("#whoId").textContent = student.section ? `${student.id} · ${student.section}` : student.id;
  const firstUnit = COURSE[0];
  const firstRailHeader = $(".rail__unit");
  if (firstUnit && firstRailHeader) {
    const eyebrow = $(".rail__eyebrow", firstRailHeader);
    if (eyebrow) eyebrow.textContent = firstUnit.unit;
    $("#railUnitTitle").textContent = firstUnit.unitTitle;
  }
  $("#askBtn").hidden = !CONFIG.aiEnabled;
  const tag = $("#whoTag");
  if (tag) tag.hidden = !isFaculty();

  if (authCheckTimer) clearInterval(authCheckTimer);
  authCheckTimer = setInterval(verifyStudent, 5 * 60 * 1000);

  if (isFaculty()) {
    API.syncCourse(student, courseSchemaPayload());
    go({ name: "faculty", facultyTab: "overview" });
  } else {
    go({ name: "dashboard" });
    beginSession();
  }
}

async function verifyStudent() {
  if (!student || !student.token) return;
  const res = await API.resume(student);
  if (!res || !res.ok) {
    await logoutNow((res && res.error) || "Your session ended. Sign in again.");
    return;
  }
  student.name = res.account.name;
  student.email = res.account.email || "";
  student.section = res.account.section || "";
  student.status = res.account.status;
  student.expiresAt = res.expiresAt;
  saveStudent();
  applyRemoteState(res.state);
  if (!isFaculty()) paintRail();
}

async function logoutNow(message = "") {
  const old = student;
  if (old && old.token) API.logout(old);
  if (SESSION.timer) clearInterval(SESSION.timer);
  if (authCheckTimer) clearInterval(authCheckTimer);
  SESSION.id = null;
  clearStudent();
  $("#app").hidden = true;
  $("#gate").hidden = false;
  setAuthMode("login");
  $("#regForm").reset();
  await loadSections();
  typeShell();
  if (message) {
    $("#regNote").textContent = message;
    $("#regNote").classList.add("is-bad");
  }
  $("#regId").focus();
}

$("#logoutBtn").addEventListener("click", () => logoutNow("You have signed out."));

/* ======================================================================
   RAIL
   ====================================================================== */
const KIND_LABEL = { topic: "Topic", test: "Test", project: "Project" };

function paintRail() {
  let lastUnit = null;
  const unitMeta = new Map(COURSE.map(u => [u.unit, u]));

  const statsFor = (unitName) => {
    const items = STEPS.filter(step => step.unit === unitName);
    const done = items.filter(step => progress[step.id] && progress[step.id].done).length;
    return { done, total: items.length, percent: items.length ? done / items.length * 100 : 0 };
  };

  const courseHtml = STEPS.map((s, i) => {
    const r = progress[s.id];
    const done = r && r.done;
    const open = isUnlocked(i);
    const cur  = view.name === "step" && view.step === i;
    const next = STEPS[i + 1];
    const unitLast = !next || next.unit !== s.unit;
    const cls  = [
      "tnode",
      done ? "is-done" : (open ? "is-open" : "is-locked"),
      cur ? "is-current" : "",
      unitLast ? "is-unit-last" : ""
    ].join(" ");
    const glyph = done ? "&#10003;" : (open ? (s.kind === "topic" ? s.no : (s.kind === "test" ? "T" : "P")) : "&#128274;");
    const kicker = s.kind === "topic" ? `${esc(s.unit)} &middot; Topic ${s.no}` : `${esc(s.unit)} &middot; ${KIND_LABEL[s.kind]}`;

    let divider = "";
    if (lastUnit !== null && lastUnit !== s.unit) {
      const meta = unitMeta.get(s.unit) || { unit: s.unit, unitTitle: s.unit };
      const us = statsFor(s.unit);
      divider = `<li class="rail__unit-break" aria-label="${esc(meta.unit)}">
        <p class="rail__eyebrow">${esc(meta.unit)}</p>
        <h3 class="rail__title">${esc(meta.unitTitle)}</h3>
        <div class="rail__meter"><i style="width:${us.percent}%"></i></div>
        <p class="rail__count">${us.done} of ${us.total} complete</p>
      </li>`;
    }
    lastUnit = s.unit;

    return `${divider}<li class="${cls}">
      <span class="tnode__stamp" aria-hidden="true"><span>${glyph}</span></span>
      <button class="tnode__btn" data-goto="${i}" ${open ? "" : "disabled"}>
        <span class="tnode__k">${kicker}</span>
        <span class="tnode__t">${esc(s.title)}</span>
      </button>
    </li>`;
  }).join("");

  if (isFaculty()) {
    $(".rail__eyebrow").textContent = "Faculty";
    $("#railUnitTitle").textContent = "Section Dashboard";
    $("#railMeterFill").style.width = "100%";
    $("#railCount").textContent = "Authenticated faculty access";
    const facultyNav = [
      ["overview", "Dashboard"],
      ["students", "Students"],
      ["projects", "Project reviews"],
      ["sections", "Sections"]
    ].map(([tab, label]) => `<li class="tnode is-open ${view.name === "faculty" && view.facultyTab === tab ? "is-current" : ""}">
      <span class="tnode__stamp" aria-hidden="true"><span>F</span></span>
      <button class="tnode__btn" data-faculty-view="${tab}">
        <span class="tnode__k">Faculty console</span><span class="tnode__t">${label}</span>
      </button></li>`).join("");
    $("#railList").innerHTML = facultyNav + `<li class="rail__unit-break"><p class="rail__eyebrow">Course</p><h3 class="rail__title">Preview all learning steps</h3></li>` + courseHtml;
    return;
  }

  $("#railList").innerHTML = courseHtml;
  const first = COURSE[0];
  const firstStats = first ? statsFor(first.unit) : { done: 0, total: 0, percent: 0 };
  $("#railMeterFill").style.width = firstStats.percent + "%";
  $("#railCount").textContent = `${firstStats.done} of ${firstStats.total} complete`;
}

$("#railList").addEventListener("click", (e) => {
  const f = e.target.closest("[data-faculty-view]");
  if (f) { go({ name: "faculty", facultyTab: f.dataset.facultyView }); closeRail(); return; }
  const b = e.target.closest("[data-goto]");
  if (b) { go({ name: "step", step: +b.dataset.goto }); closeRail(); }
});

const openRail  = () => { $("#rail").classList.add("is-open"); $("#railScrim").hidden = false; $("#menuBtn").setAttribute("aria-expanded", "true"); };
const closeRail = () => { $("#rail").classList.remove("is-open"); $("#railScrim").hidden = true; $("#menuBtn").setAttribute("aria-expanded", "false"); };
$("#menuBtn").addEventListener("click", () => $("#rail").classList.contains("is-open") ? closeRail() : openRail());
$("#railScrim").addEventListener("click", closeRail);
$("#homeLink").addEventListener("click", (e) => {
  e.preventDefault();
  go(isFaculty() ? { name: "faculty", facultyTab: "overview" } : { name: "dashboard" });
});

/* ======================================================================
   ROUTER
   ====================================================================== */
function go(next) {
  if (exam.timerId) { clearInterval(exam.timerId); exam.timerId = null; }
  if (view.name === "step" && stepAt(view.step) && stepAt(view.step).kind === "test") resetExam();
  view = Object.assign({ step: 0 }, next);
  render();
  $("#main").scrollTop = 0;
  window.scrollTo(0, 0);
  $("#main").focus({ preventScroll: true });
}

function render() {
  paintRail();
  if (view.name === "faculty") {
    armGuard(-1, false);
    $("#askContext").textContent = "Faculty console";
    paintFacultyConsole(view.facultyTab || "overview");
    return;
  }
  if (view.name === "dashboard") { armGuard(-1, false); paintDashboard(); $("#askContext").textContent = "Overview"; return; }

  const i = view.step, s = stepAt(i);
  if (!s) return isFaculty() ? paintFacultyConsole("overview") : paintDashboard();
  $("#askContext").textContent = s.kind === "topic" ? "Topic " + s.no : KIND_LABEL[s.kind];

  if (s.kind === "topic")   { armGuard(i, true);  return paintTopic(i); }
  if (s.kind === "test")    { armGuard(i, exam.running); return paintTest(i); }
  if (s.kind === "project") { armGuard(i, false); return paintProject(i); }
}
/* ======================================================================
   FACULTY CONSOLE

   The dashboard loads in stages. Headline numbers arrive first and paint
   immediately; the student list, the charts and the attention list follow on
   their own. Nothing waits for anything else, so the screen is useful in
   about the time one small request takes rather than one huge one.
   ====================================================================== */

let facultyState = {
  tab: "overview",
  page: 1,
  pageSize: 25,
  section: "",
  status: "",
  query: "",
  sort: "name",
  summary: null
};

function facultyNavHtml(active) {
  return `<div class="faculty-tabs">${[
    ["overview", "Dashboard"],
    ["students", "Students"],
    ["charts", "Charts"],
    ["projects", "Project reviews"],
    ["sections", "Sections"]
  ].map(([tab, label]) =>
    `<button type="button" data-faculty-tab="${tab}" class="${active === tab ? "is-active" : ""}">${label}</button>`
  ).join("")}</div>`;
}

function facultyShell(tab, body) {
  const s = facultyState.summary;
  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">Faculty console</p>
      <h2 class="thead__t">${esc(student.name)}</h2>
      <p class="thead__s">${s
        ? `${esc((s.sections || []).join(", ") || "No sections yet")}${s.isAdmin ? " · Administrator" : ""}`
        : "Loading…"}</p>
    </header>
    ${facultyNavHtml(tab)}
    <div id="facultyBody">${body}</div>
    ${credit()}
  </div>`;
  $$('[data-faculty-tab]', $("#main")).forEach(b =>
    b.addEventListener("click", () => {
      facultyState.tab = b.dataset.facultyTab;
      facultyState.page = 1;
      paintFacultyConsole(facultyState.tab);
    }));
}

const skeleton = (n = 3) =>
  `<div>${Array.from({ length: n }, () => `<div class="skel skel--card"></div>`).join("")}</div>`;

async function paintFacultyConsole(tab = "overview") {
  if (!isFaculty()) return go({ name: "dashboard" });
  facultyState.tab = tab;

  facultyShell(tab, skeleton(tab === "overview" ? 4 : 3));

  /* Stage one: the headline numbers. Small, so this lands quickly. */
  const summary = await API.facultySummary(student);
  if (!summary || !summary.ok) {
    $("#facultyBody").innerHTML =
      `<div class="faculty-card"><b>Unavailable</b><span>${esc((summary && summary.error) || "Try again.")}</span></div>`;
    if (summary && /session/i.test(summary.error || "")) logoutNow(summary.error);
    return;
  }
  facultyState.summary = summary;
  facultyShell(tab, skeleton(2));

  if (tab === "students") return facultyStudentsTab();
  if (tab === "charts") return facultyChartsTab();
  if (tab === "projects") return facultyProjectsTab();
  if (tab === "sections") return facultySectionsTab();
  return facultyOverviewTab();
}

/* ------------------------------------------------------------ overview -- */

async function facultyOverviewTab() {
  const s = facultyState.summary.summary || {};
  const cards = [
    [s.total, "Students"],
    [s.active7, "Active this week"],
    [s.averagePercent + "%", "Average progress"],
    [s.completed, "Finished the course"],
    [s.notStarted, "Not started"],
    [s.blocked, "Blocked"],
    [s.hours + "h", "Total learning time"],
    [s.doubts, "Doubts asked"]
  ];

  $("#facultyBody").innerHTML = `
    <div class="faculty-grid">${cards.map(([v, l]) =>
      `<div class="faculty-card"><b>${esc(v == null ? 0 : v)}</b><span>${esc(l)}</span></div>`).join("")}</div>

    <div class="step"><span class="step__n">Now</span><h3 class="step__t">Students who need you</h3></div>
    <div id="attentionBox">${skeleton(2)}</div>

    <div class="step"><span class="step__n">Live</span><h3 class="step__t">Most recently active</h3></div>
    <div id="recentBox">${skeleton(2)}</div>`;

  /* Stages two and three run side by side, each painting as it arrives. */
  API.facultyAttention(student).then(res => {
    const box = $("#attentionBox");
    if (!box) return;
    if (!res || !res.ok) return box.innerHTML = `<div class="faculty-card"><span>Could not load.</span></div>`;
    const list = res.attention || [];
    box.innerHTML = list.length
      ? `<div class="attention">${list.slice(0, 8).map(a => `<div class="attn">
          <div class="attn__main">
            <div class="attn__n">${esc(a.name)} <small>· ${esc(a.section || "—")} · ${a.percent}%</small></div>
            <div class="attn__r">${esc(a.reasons.join(" · "))}</div>
          </div>
          <button data-view-student="${esc(a.id)}">Open</button>
        </div>`).join("")}${list.length > 8
          ? `<p class="pager__info">and ${list.length - 8} more</p>` : ""}</div>`
      : `<div class="faculty-card"><b>All clear</b><span>Nobody is flagged right now.</span></div>`;
    bindStudentOpeners();
  });

  API.facultyStudents(student, { page: 1, pageSize: 10, sort: "recent" }).then(res => {
    const box = $("#recentBox");
    if (!box) return;
    if (!res || !res.ok) return box.innerHTML = `<div class="faculty-card"><span>Could not load.</span></div>`;
    box.innerHTML = facultyStudentTable(res.students || [], false);
    bindStudentOpeners();
  });
}

/* ------------------------------------------------------------ students -- */

async function facultyStudentsTab() {
  const sections = facultyState.summary.sections || [];
  $("#facultyBody").innerHTML = `
    <div class="faculty-toolbar">
      <input id="facSearch" type="search" placeholder="Search ID, name or email" value="${esc(facultyState.query)}">
      <select id="facSection"><option value="">All my sections</option>${
        sections.map(x => `<option ${facultyState.section === x ? "selected" : ""}>${esc(x)}</option>`).join("")}</select>
      <select id="facStatus"><option value="">Any status</option>${
        ["Active", "Blocked"].map(x => `<option ${facultyState.status === x ? "selected" : ""}>${esc(x)}</option>`).join("")}</select>
      <select id="facSort">${
        [["name", "Name"], ["progress", "Progress"], ["recent", "Recently active"], ["minutes", "Time spent"], ["flags", "Flags"]]
          .map(([v, l]) => `<option value="${v}" ${facultyState.sort === v ? "selected" : ""}>${l}</option>`).join("")}</select>
      <button class="btn btn--quiet btn--sm" id="facRefresh">Refresh</button>
    </div>
    <div id="facTable">${skeleton(3)}</div>`;

  const run = () => loadFacultyPage();
  let timer;
  $("#facSearch").addEventListener("input", e => {
    clearTimeout(timer);
    timer = setTimeout(() => { facultyState.query = e.target.value.trim(); facultyState.page = 1; run(); }, 280);
  });
  $("#facSection").addEventListener("change", e => { facultyState.section = e.target.value; facultyState.page = 1; run(); });
  $("#facStatus").addEventListener("change", e => { facultyState.status = e.target.value; facultyState.page = 1; run(); });
  $("#facSort").addEventListener("change", e => { facultyState.sort = e.target.value; facultyState.page = 1; run(); });
  $("#facRefresh").addEventListener("click", () => { API.clearCache("fac"); run(); });

  run();
}

async function loadFacultyPage() {
  const box = $("#facTable");
  if (!box) return;
  box.innerHTML = skeleton(3);

  const res = await API.facultyStudents(student, facultyState);
  if (!res || !res.ok) {
    box.innerHTML = `<div class="faculty-card"><span>${esc((res && res.error) || "Could not load students.")}</span></div>`;
    return;
  }

  box.innerHTML = facultyStudentTable(res.students || [], true) + pagerHtml(res);
  bindStudentOpeners();
  bindStudentActions();

  $$('[data-page]', box).forEach(b => b.addEventListener("click", () => {
    facultyState.page = Number(b.dataset.page);
    loadFacultyPage();
  }));
}

function pagerHtml(res) {
  if (res.pages <= 1) {
    return `<div class="pager"><span class="pager__info">${res.total} student${res.total === 1 ? "" : "s"}</span></div>`;
  }
  const nums = [];
  const from = Math.max(1, res.page - 2), to = Math.min(res.pages, res.page + 2);
  for (let i = from; i <= to; i++) nums.push(i);

  return `<div class="pager">
    <span class="pager__info">${(res.page - 1) * res.pageSize + 1}–${Math.min(res.page * res.pageSize, res.total)} of ${res.total}</span>
    <button data-page="${res.page - 1}" ${res.page <= 1 ? "disabled" : ""}>Previous</button>
    ${nums.map(n => `<button data-page="${n}" class="${n === res.page ? "is-current" : ""}">${n}</button>`).join("")}
    <button data-page="${res.page + 1}" ${res.page >= res.pages ? "disabled" : ""}>Next</button>
  </div>`;
}

function facultyStudentTable(rows, actions) {
  if (!rows.length) {
    return `<div class="faculty-card"><b>Nobody yet</b><span>No students match this view.</span></div>`;
  }
  return `<div class="faculty-table-wrap"><table class="faculty-table">
    <thead><tr>
      <th>Student</th><th>Section</th><th>Status</th><th>Progress</th>
      <th>Currently on</th><th>Last active</th><th>Time</th>${actions ? "<th>Actions</th>" : ""}
    </tr></thead>
    <tbody>${rows.map(s => `<tr>
      <td><strong>${esc(s.name)}</strong><br><small>${esc(s.id)}${s.email ? " · " + esc(s.email) : ""}</small></td>
      <td>${esc(s.section || "—")}</td>
      <td><span class="status-chip" data-status="${esc(s.status)}">${esc(s.status)}</span>${
        s.flags >= 3 ? `<br><small style="color:var(--madder)">${s.flags} flags</small>` : ""}</td>
      <td><div class="faculty-progress">
        <div class="faculty-progress__bar"><i style="width:${Math.min(100, s.percent)}%"></i></div>
        <small>${s.percent}% · ${s.stepsDone}/${s.stepsTotal}</small>
      </div></td>
      <td>${esc(s.currentUnit || "—")}<br><small>${esc(s.currentStep || "Not started")}</small></td>
      <td>${s.lastActivity ? esc(shortDate(s.lastActivity)) : "—"}</td>
      <td><small>${Math.round(s.minutes)} min<br>${s.doubts} doubts</small></td>
      ${actions ? `<td><div class="actions">
        <button class="is-primary" data-view-student="${esc(s.id)}">View</button>
        ${s.status === "Blocked"
          ? `<button data-student-action="Unblock" data-id="${esc(s.id)}">Unblock</button>`
          : `<button data-student-action="Block" data-id="${esc(s.id)}">Block</button>`}
        <button data-student-action="Reset Unit" data-id="${esc(s.id)}">Reset unit</button>
        <button data-student-action="Reset All Progress" data-id="${esc(s.id)}">Clear all</button>
        <button class="is-danger" data-student-action="Delete Permanently" data-id="${esc(s.id)}">Delete</button>
      </div></td>` : ""}
    </tr>`).join("")}</tbody>
  </table></div>`;
}

function shortDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  const days = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (days === 0) return "Today " + d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  if (days === 1) return "Yesterday";
  if (days < 7) return days + " days ago";
  return d.toLocaleDateString();
}

function bindStudentOpeners() {
  $$('[data-view-student]', $("#main")).forEach(b =>
    b.addEventListener("click", () => openFacultyStudent(b.dataset.viewStudent)));
}

function bindStudentActions() {
  $$('[data-student-action]', $("#main")).forEach(b =>
    b.addEventListener("click", () => runFacultyStudentAction(b.dataset.studentAction, b.dataset.id)));
}

/* -------------------------------------------------------------- charts -- */

async function facultyChartsTab() {
  $("#facultyBody").innerHTML = skeleton(3);
  const res = await API.facultyCharts(student);
  if (!res || !res.ok) {
    $("#facultyBody").innerHTML = `<div class="faculty-card"><span>${esc((res && res.error) || "Charts unavailable.")}</span></div>`;
    return;
  }

  $("#facultyBody").innerHTML = `<div class="fcharts">
    ${barChart("How far the class has got", "Students in each 10% band of the course",
        res.bands.map((v, i) => ({ label: i === 10 ? "100%" : `${i * 10}s`, value: v })))}
    ${barChart("Where students are working", "How many are sitting in each unit right now",
        (res.byUnit || []).map(x => ({ label: x.unit || "—", value: x.students })), "bar--alt")}
    ${sectionChart(res.bySection || [])}
    ${donutChart(res.byStatus || [])}
  </div>
  <div class="step"><span class="step__n">Top</span><h3 class="step__t">Furthest along</h3></div>
  ${leaderTable(res.topStudents || [])}`;

  bindStudentOpeners();
}

/* Charts are hand-drawn SVG on purpose — no chart library to download, so the
   dashboard stays fast, works offline and follows the theme automatically. */
function barChart(title, sub, data, cls = "bar") {
  const max = Math.max(1, ...data.map(d => d.value));
  const w = 480, h = 200, pad = 34;
  const bw = (w - pad * 2) / Math.max(data.length, 1);

  return `<div class="fchart">
    <h4 class="fchart__t">${esc(title)}</h4>
    <p class="fchart__s">${esc(sub)}</p>
    <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">
      ${[0, 0.5, 1].map(f => `<line class="grid" x1="${pad}" x2="${w - 6}"
          y1="${h - pad - f * (h - pad * 1.6)}" y2="${h - pad - f * (h - pad * 1.6)}"/>`).join("")}
      <line class="axis" x1="${pad}" y1="${h - pad}" x2="${w - 6}" y2="${h - pad}"/>
      ${data.map((d, i) => {
        const bh = (d.value / max) * (h - pad * 1.6);
        const x = pad + i * bw + bw * 0.15;
        return `<rect class="${cls}" x="${x}" y="${h - pad - bh}" width="${bw * 0.7}" height="${Math.max(bh, d.value ? 2 : 0)}" rx="3"/>
          ${d.value ? `<text class="gvalue" x="${x + bw * 0.35}" y="${h - pad - bh - 5}" text-anchor="middle">${d.value}</text>` : ""}
          <text class="glabel" x="${x + bw * 0.35}" y="${h - pad + 15}" text-anchor="middle">${esc(String(d.label).slice(0, 8))}</text>`;
      }).join("")}
    </svg>
  </div>`;
}

function sectionChart(rows) {
  if (!rows.length) return `<div class="fchart"><h4 class="fchart__t">Sections</h4><p class="fchart__s">No sections yet.</p></div>`;
  const w = 480, rowH = 30, h = rows.length * rowH + 30;
  const barMax = w - 190;

  return `<div class="fchart">
    <h4 class="fchart__t">Section comparison</h4>
    <p class="fchart__s">Average progress, and how many students are in each</p>
    <svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Average progress per section">
      ${rows.map((r, i) => {
        const y = i * rowH + 14;
        const bw = Math.max((r.averagePercent / 100) * barMax, 2);
        return `<text class="glabel" x="0" y="${y + 12}">${esc(String(r.section).slice(0, 14))}</text>
          <rect class="grid" x="120" y="${y}" width="${barMax}" height="16" rx="4" fill="var(--indigo-700)" stroke="none"/>
          <rect class="bar" x="120" y="${y}" width="${bw}" height="16" rx="4"/>
          <text class="gvalue" x="${w - 4}" y="${y + 12}" text-anchor="end">${r.averagePercent}% · ${r.students}</text>`;
      }).join("")}
    </svg>
  </div>`;
}

function donutChart(rows) {
  const total = rows.reduce((a, r) => a + r.students, 0) || 1;
  const colours = ["var(--peacock)", "var(--madder)", "var(--marigold)", "var(--indigo-600)"];
  const cx = 90, cy = 90, r = 62, sw = 26;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  const arcs = rows.map((row, i) => {
    const frac = row.students / total;
    const dash = `${frac * circumference} ${circumference}`;
    const seg = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
        stroke="${colours[i % colours.length]}" stroke-width="${sw}"
        stroke-dasharray="${dash}" stroke-dashoffset="${-offset}"
        transform="rotate(-90 ${cx} ${cy})"/>`;
    offset += frac * circumference;
    return seg;
  }).join("");

  return `<div class="fchart">
    <h4 class="fchart__t">Account status</h4>
    <p class="fchart__s">Everyone in your sections</p>
    <svg viewBox="0 0 180 180" style="max-width:200px;margin:0 auto" role="img" aria-label="Status split">
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--indigo-700)" stroke-width="${sw}"/>
      ${arcs}
      <text class="donut__hole" x="${cx}" y="${cy - 2}" text-anchor="middle" font-size="26">${total}</text>
      <text class="donut__sub" x="${cx}" y="${cy + 18}" text-anchor="middle">students</text>
    </svg>
    <div class="legend">${rows.map((row, i) =>
      `<span><i style="background:${colours[i % colours.length]}"></i>${esc(row.status)} · ${row.students}</span>`).join("")}</div>
  </div>`;
}

function leaderTable(rows) {
  if (!rows.length) return `<div class="faculty-card"><span>No progress recorded yet.</span></div>`;
  return `<div class="faculty-table-wrap"><table class="faculty-table">
    <thead><tr><th>#</th><th>Student</th><th>Progress</th><th>Time</th><th></th></tr></thead>
    <tbody>${rows.map((s, i) => `<tr>
      <td>${i + 1}</td>
      <td><strong>${esc(s.name)}</strong><br><small>${esc(s.id)}</small></td>
      <td><div class="faculty-progress"><div class="faculty-progress__bar"><i style="width:${s.percent}%"></i></div><small>${s.percent}%</small></div></td>
      <td>${s.minutes} min</td>
      <td><button data-view-student="${esc(s.id)}">View</button></td>
    </tr>`).join("")}</tbody>
  </table></div>`;
}

/* ------------------------------------------------------------ projects -- */

async function facultyProjectsTab() {
  $("#facultyBody").innerHTML = skeleton(2);
  const res = await API.facultyProjects(student);
  if (!res || !res.ok) {
    $("#facultyBody").innerHTML = `<div class="faculty-card"><span>${esc((res && res.error) || "Could not load.")}</span></div>`;
    return;
  }
  const rows = res.projects || [];
  $("#facultyBody").innerHTML = rows.length
    ? `<div class="faculty-table-wrap"><table class="faculty-table">
        <thead><tr><th>Student</th><th>Unit</th><th>Submission</th><th>AI suggestion</th><th></th></tr></thead>
        <tbody>${rows.map(p => `<tr>
          <td><strong>${esc(p.studentName)}</strong><br><small>${esc(p.studentId)} · ${esc(p.section)}</small></td>
          <td>${esc(p.unit)}<br><small>${esc(p.projectName)}</small></td>
          <td><a href="${esc(p.link)}" target="_blank" rel="noopener">Open submission</a><br><small>${esc(shortDate(p.submittedAt))}</small></td>
          <td><strong>${p.suggestedScore === "" || p.suggestedScore == null ? "—" : esc(p.suggestedScore + "/100")}</strong>
              <br><small>${esc(String(p.aiSummary || "").slice(0, 160))}</small></td>
          <td><button class="btn btn--go btn--sm" data-approve data-id="${esc(p.studentId)}"
              data-unit="${esc(p.unit)}" data-score="${esc(p.suggestedScore || 0)}">Approve</button></td>
        </tr>`).join("")}</tbody></table></div>`
    : `<div class="faculty-card"><b>Nothing waiting</b><span>No projects need approval right now.</span></div>`;

  $$('[data-approve]', $("#main")).forEach(b => b.addEventListener("click", () =>
    approveFacultyProject(b.dataset.id, b.dataset.unit, b.dataset.score)));
}

/* ------------------------------------------------------------ sections -- */

async function facultySectionsTab() {
  const s = facultyState.summary;
  $("#facultyBody").innerHTML = `<div class="faculty-card">
      <h3>Your sections</h3>
      <p>Create a section once. It appears straight away in student registration and in your filters.</p>
      <div class="faculty-toolbar">
        <input id="newSection" placeholder="For example: CS 1st Year A">
        <button class="btn btn--go btn--sm" id="createSection">Create</button>
      </div>
      <p><strong>You manage:</strong> ${esc((s.sections || []).join(", ") || "None yet")}</p>
      ${s.isAdmin ? `<p><strong>All sections on the system:</strong> ${esc((s.allSections || []).join(", ") || "None")}</p>` : ""}
    </div>`;

  $("#createSection").addEventListener("click", async () => {
    const name = $("#newSection").value.trim();
    if (!name) return toast("Type a section name first.");
    const btn = $("#createSection");
    btn.disabled = true;
    const res = await API.createSection(student, name);
    btn.disabled = false;
    if (!res || !res.ok) return toast((res && res.error) || "Could not create that section.");
    toast("Section created.");
    facultyState.summary = null;
    paintFacultyConsole("sections");
  });
}

/* -------------------------------------------------------- one student --- */

async function openFacultyStudent(studentId) {
  $("#main").innerHTML = `<div class="wrap"><div class="faculty-card"><span class="spin"></span> Loading…</div></div>`;
  const res = await API.facultyStudent(student, studentId, true);
  if (!res || !res.ok) {
    toast((res && res.error) || "Could not load that student.");
    return paintFacultyConsole(facultyState.tab);
  }

  const s = res.student;
  const a = s.account;
  const sum = s.summary;
  const units = Object.keys(s.state.tests || {});

  $("#main").innerHTML = `<div class="wrap">
    <button class="btn btn--quiet btn--sm" id="backToList">← Back</button>
    <header class="thead">
      <p class="thead__k">${esc(a.section || "No section")}</p>
      <h2 class="thead__t">${esc(a.name)}</h2>
      <p class="thead__s">${esc(a.id)} · ${esc(a.email || "no email")} · ${esc(sum.status)}</p>
    </header>

    <div class="faculty-grid">
      <div class="faculty-card"><b>${sum.percent}%</b><span>Course complete</span></div>
      <div class="faculty-card"><b>${sum.stepsDone}/${sum.stepsTotal}</b><span>Steps done</span></div>
      <div class="faculty-card"><b>${Math.round(sum.minutes)}</b><span>Minutes on site</span></div>
      <div class="faculty-card"><b>${sum.sessions}</b><span>Sessions</span></div>
      <div class="faculty-card"><b>${sum.doubts}</b><span>Doubts asked</span></div>
      <div class="faculty-card"><b>${sum.flags}</b><span>Integrity flags</span></div>
    </div>

    <div class="faculty-detail">
      <section><h4>Where they are</h4><dl>
        <dt>Currently on</dt><dd>${esc(sum.currentUnit || "—")} — ${esc(sum.currentStep || "Not started")}</dd>
        <dt>Units finished</dt><dd>${esc(sum.unitsCompleted || "None yet")}</dd>
        <dt>Last active</dt><dd>${sum.lastActivity ? esc(new Date(sum.lastActivity).toLocaleString()) : "—"}</dd>
      </dl></section>
      <section><h4>Tests</h4><dl>${units.length
        ? units.map(u => {
            const t = s.state.tests[u];
            return `<dt>${esc(u)}</dt><dd>${t.best}/${t.total} · ${t.passed ? "Passed" : "Not cleared"} · ${t.attempts} attempt${t.attempts === 1 ? "" : "s"}</dd>`;
          }).join("")
        : "<dd>No attempts yet.</dd>"}</dl></section>
      <section><h4>Projects</h4><dl>${Object.keys(s.state.projects || {}).length
        ? Object.keys(s.state.projects).map(u => {
            const p = s.state.projects[u];
            return `<dt>${esc(u)}</dt><dd>${esc(p.submissionStatus)}${p.approvedScore !== "" && p.approvedScore != null ? ` · ${p.approvedScore}/100` : ""}</dd>`;
          }).join("")
        : "<dd>Nothing submitted yet.</dd>"}</dl></section>
    </div>

    <div class="step"><span class="step__n">Do</span><h3 class="step__t">Faculty actions</h3></div>
    <div class="faculty-card">
      <div class="actions">
        ${sum.status === "Blocked"
          ? `<button data-student-action="Unblock" data-id="${esc(a.id)}">Unblock</button>`
          : `<button data-student-action="Block" data-id="${esc(a.id)}">Block</button>`}
        <button data-student-action="Reset Test" data-id="${esc(a.id)}">Reset a test</button>
        <button data-student-action="Reset Project" data-id="${esc(a.id)}">Reset a project</button>
        <button data-student-action="Reset Unit" data-id="${esc(a.id)}">Reset a whole unit</button>
        <button data-student-action="Reset All Progress" data-id="${esc(a.id)}">Clear all progress</button>
        <button class="is-danger" data-student-action="Delete Permanently" data-id="${esc(a.id)}">Delete account</button>
      </div>
    </div>

    ${historyBlock("Recent doubts", (s.doubts || []).slice().reverse(), d =>
      `<strong>${esc(d.question)}</strong><br><small>${esc(d.context)} · ${esc(shortDate(d.when))}</small>`)}
    ${historyBlock("Test history", s.tests || [], t =>
      `${esc(t.unit)} — ${t.score}/${t.total} (${t.percent}%) · ${esc(t.result)}<br><small>${esc(t.reason)} · ${esc(shortDate(t.when))}</small>`)}
    ${historyBlock("Integrity events", (s.integrity || []).slice().reverse(), i =>
      `${esc(i.event)}<br><small>${esc(i.where)} · ${esc(shortDate(i.when))}</small>`)}

    ${credit()}
  </div>`;

  $("#backToList").addEventListener("click", () => paintFacultyConsole(facultyState.tab));
  bindStudentActions();
}

function historyBlock(title, rows, render) {
  if (!rows || !rows.length) return "";
  return `<div class="step"><span class="step__n">Log</span><h3 class="step__t">${esc(title)}</h3></div>
    <div class="attention">${rows.slice(0, 12).map(r =>
      `<div class="attn" style="background:rgba(242,160,61,.08);border-left-color:var(--marigold)">
        <div class="attn__main">${render(r)}</div>
      </div>`).join("")}</div>`;
}

/* --------------------------------------------------------- actions ------ */

async function runFacultyStudentAction(operation, studentId) {
  let unit = "", confirmation = "";

  if (/^Reset (Test|Project|Unit)$/.test(operation)) {
    const units = COURSE.map(u => u.unit);
    unit = prompt(`Which unit? (${units.join(", ")})`, units[0] || "Unit 1") || "";
    if (!unit) return;
  }

  if (operation === "Delete Permanently") {
    confirmation = prompt(`This erases every trace of ${studentId}.\n\nType ${studentId} to confirm:`, "") || "";
    if (confirmation !== studentId) return toast("Deletion cancelled.");
  } else if (operation === "Reset All Progress") {
    if (!confirm(`Clear ALL progress for ${studentId}?\n\nThe account stays, but every topic, test and project is wiped.`)) return;
  } else if (!confirm(`${operation} — ${studentId}?`)) {
    return;
  }

  toast("Working…");
  const res = await API.studentAction(student, studentId, operation, unit, confirmation);
  if (!res || !res.ok) return toast((res && res.error) || "That action failed.");
  toast(res.result || "Done.");
  paintFacultyConsole(facultyState.tab);
}

async function approveFacultyProject(studentId, unit, suggested) {
  const raw = prompt("Approved score out of 100:", String(suggested || 0));
  if (raw == null) return;
  const score = Number(raw);
  if (!Number.isFinite(score) || score < 0 || score > 100) return toast("Enter a score from 0 to 100.");
  const feedback = prompt("Feedback the student will see:", "Reviewed and approved.");
  if (feedback == null) return;

  const res = await API.approveProject(student, studentId, unit, score, feedback);
  if (!res || !res.ok) return toast((res && res.error) || "Approval failed.");
  toast(res.result || "Approved.");
  paintFacultyConsole("projects");
}

/* ======================================================================
   DASHBOARD
   ====================================================================== */
function paintDashboard() {
  const n = doneCount();
  const nextIdx = STEPS.findIndex((s, i) => isUnlocked(i) && !(progress[s.id] && progress[s.id].done));
  const target  = nextIdx === -1 ? STEPS.length - 1 : nextIdx;
  const first   = esc(student.name.split(" ")[0]);

  const tasksPassed = STEPS.reduce((a, s) =>
    a + (s.kind === "topic" && progress[s.id] ? Object.keys(progress[s.id].tasks || {}).length : 0), 0);
  const testStep = STEPS.find(s => s.kind === "test");
  const testRec  = testStep ? progress[testStep.id] : null;

  $("#main").innerHTML = `<div class="wrap">
    <section class="hero">
      <p class="hero__k">${CONFIG.institution ? esc(CONFIG.institution) + " &middot; " : ""}${esc(CONFIG.courseName)}${isFaculty() ? " &middot; Faculty preview" : ""}</p>
      <h2 class="hero__t">${n === 0 ? "Welcome, " + first + "." : "Keep going, " + first + "."}</h2>
      <p class="hero__s">${n === 0
        ? "Read, answer, then write Python that runs on this page. Finish the topics, clear the unit test, submit the project."
        : (n === STEPS.length
            ? "Everything live right now is complete. More units are on the way."
            : "You've cleared " + n + " of " + STEPS.length + " steps. Next up: " + esc(STEPS[target].title) + ".")}</p>
      ${n < STEPS.length ? `<button class="btn btn--go" data-goto="${target}">${n === 0 ? "Start Topic 1" : "Continue"}</button>` : ""}
      <svg class="snake" viewBox="0 0 1200 90" aria-hidden="true">
        <g class="snake__g">
          <path class="snake__body" fill="none" stroke-linecap="round"
                d="M170 45 C140 22 116 68 86 45 S32 22 0 45">
            <animate attributeName="d" dur="1.5s" repeatCount="indefinite"
                     values="M170 45 C140 22 116 68 86 45 S32 22 0 45;
                             M170 45 C140 68 116 22 86 45 S32 68 0 45;
                             M170 45 C140 22 116 68 86 45 S32 22 0 45"/>
          </path>
          <path class="snake__tongue" d="M186 45 h13 m0 0 l6 -4 m-6 4 l6 4" fill="none" stroke-linecap="round"/>
          <ellipse class="snake__head" cx="174" cy="45" rx="13" ry="10"/>
          <circle class="snake__eye" cx="178" cy="41.5" r="2.1"/>
        </g>
      </svg>
    </section>

    ${isFaculty() ? `<div class="guard guard--info">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 5h2v2h-2zm0 4h2v6h-2z"/></svg>
      <span><b>Faculty preview.</b> Every topic, test and project is open. Nothing you do here
      is saved to the Sheet or kept in this browser — refresh and it all resets.</span>
    </div>` : ""}

    <div class="stats">
      <div class="stat"><b>${n}/${STEPS.length}</b><span>Steps complete</span></div>
      <div class="stat"><b>${tasksPassed}</b><span>Code tasks passed</span></div>
      <div class="stat"><b>${testRec && testRec.best != null ? testRec.best + "/" + testRec.total : "—"}</b><span>Unit test</span></div>
      <div class="stat stat--id"><b>${esc(student.id)}</b><span>Your roll number</span></div>
    </div>

    <div class="step"><span class="step__n">All</span><h3 class="step__t">Your progress</h3></div>
    <div class="prog">${STEPS.map((s, i) => progressRow(s, i)).join("")}</div>

    ${credit()}
  </div>`;

  $$("[data-goto]", $("#main")).forEach(b =>
    b.addEventListener("click", () => go({ name: "step", step: +b.dataset.goto })));
}

function progressRow(s, i) {
  const r = progress[s.id];
  const done = r && r.done;
  const open = isUnlocked(i);
  const glyph = done ? "&#10003;" : (open ? (s.kind === "topic" ? s.no : KIND_LABEL[s.kind][0]) : "&#128274;");

  let score = "", sub = "";
  if (s.kind === "topic") {
    const tasks = r ? Object.keys(r.tasks || {}).length : 0;
    sub = done ? "Complete" : (open ? "Ready to start" : "Locked");
    if (r && r.mcqTotal) score = `<b>${r.mcqScore}/${r.mcqTotal}</b>quiz`;
    if (s.data.tasks.length) score += `<span>${tasks}/${s.data.tasks.length} tasks</span>`;
  } else if (s.kind === "test") {
    sub = done ? "Passed" : (open ? "Ready — " + s.summary : "Finish every topic to unlock");
    if (r && r.best != null) score = `<b>${r.best}/${r.total}</b>attempt ${r.attempts}`;
  } else {
    sub = done ? "Submitted" : (open ? "Ready to submit" : "Pass the unit test to unlock");
    if (r && r.link) score = `<b>Sent</b>${new Date(r.at).toLocaleDateString()}`;
  }

  const cls = ["prow", done ? "is-done" : (open ? "is-open" : "")].join(" ");
  return `<button class="${cls}" data-goto="${i}" ${open ? "" : "disabled"}>
    <span class="prow__mark"><span>${glyph}</span></span>
    <span class="prow__main">
      <span class="prow__t">${esc(s.title)}</span>
      <span class="prow__s">${esc(s.unit)} &middot; ${sub}</span>
    </span>
    <span class="prow__score">${score}</span>
  </button>`;
}

/* ======================================================================
   TOPIC
   ====================================================================== */
function paintTopic(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id);

  const nb = t.notebookLM
    ? `<a class="nblink" href="${esc(t.notebookLM)}" target="_blank" rel="noopener">
         <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h13a3 3 0 0 1 3 3v15H7a3 3 0 0 1-3-3z"/></svg>
         Explore this topic in NotebookLM</a>`
    : "";

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(s.unit)} &middot; Topic ${s.no}</p>
      <h2 class="thead__t">${esc(t.title)}</h2>
      <p class="thead__s">${esc(t.summary)}</p>
    </header>

    ${guardNote("everything you've done in this topic is wiped and you start it again")}

    <div class="step"><span class="step__n">01</span><h3 class="step__t">Read the concept</h3></div>
    <article class="paper">${t.notes}${nb}</article>

    <div class="step">
      <span class="step__n">02</span><h3 class="step__t">Check yourself</h3>
      <span class="step__hint">${t.mcqs.length} questions &middot; ${CONFIG.mcqPassPercent}% to clear</span>
    </div>
    <div class="quiz" id="quiz"></div>
    <div class="quizbar" id="quizbar" hidden></div>

    ${t.tasks.length ? `<div class="step">
      <span class="step__n">03</span><h3 class="step__t">${t.tasks[0].kind === "confirm" ? "Do it on your machine" : "Write the code"}</h3>
      <span class="step__hint">${t.tasks.length} task${t.tasks.length > 1 ? "s" : ""}</span>
    </div><div id="tasks"></div>` : ""}

    <div class="finish" id="finish"></div>
    ${credit()}
  </div>`;

  paintQuiz(s, r);
  paintTasks(s, r);
  paintFinish(i);
}

/* -------------------------------------------------------------- quiz */
function paintQuiz(s, r) {
  const t = s.data;
  const old = $("#quiz");
  const box = old.cloneNode(false);          // fresh node = no stale click handlers
  old.replaceWith(box);
  const answered = {};

  box.innerHTML = t.mcqs.map((m, qi) => `
    <div class="q" data-q="${qi}">
      <p class="q__t"><span class="n">Q${qi + 1}</span>${m.q}</p>
      <div class="q__opts">
        ${m.options.map((o, oi) =>
          `<button class="opt" data-q="${qi}" data-o="${oi}">
             <span class="opt__key">${String.fromCharCode(65 + oi)}</span>
             <span>${o}</span>
           </button>`).join("")}
      </div>
      <p class="q__why" hidden></p>
    </div>`).join("");

  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".opt");
    if (!btn || btn.disabled) return;
    const qi = +btn.dataset.q, oi = +btn.dataset.o;
    if (answered[qi] !== undefined) return;

    const m = t.mcqs[qi];
    answered[qi] = oi === m.answer;
    const card = box.querySelector(`.q[data-q="${qi}"]`);

    $$(".opt", card).forEach(b => {
      b.disabled = true;
      const bo = +b.dataset.o;
      if (bo === m.answer) b.classList.add("is-right");
      else if (bo === oi)  b.classList.add("is-wrong");
    });

    const why = $(".q__why", card);
    why.innerHTML = (answered[qi] ? "<strong>Correct.</strong> " : "<strong>Not this one.</strong> ") + m.why;
    why.hidden = false;

    if (Object.keys(answered).length === t.mcqs.length) settleQuiz(s, r, answered);
  });

  if (r.mcqTotal) showQuizBar(s, r.mcqScore, r.mcqTotal, r.mcqPassed, true);
}

function settleQuiz(s, r, answered) {
  const t = s.data;
  const score = Object.values(answered).filter(Boolean).length;
  const total = t.mcqs.length;
  const pass  = Math.round(score / total * 100) >= CONFIG.mcqPassPercent;

  if (score >= r.mcqScore) { r.mcqScore = score; r.mcqTotal = total; }
  if (pass) r.mcqPassed = true;
  saveProgress();

  sendProgressSnapshot(s, r, pass ? "Quiz cleared" : "Quiz not cleared");

  showQuizBar(s, score, total, pass, false);
  paintFinish(indexOf_(s.id));
  paintRail();
}

function showQuizBar(s, score, total, pass, previous) {
  const bar = $("#quizbar");
  bar.hidden = false;
  bar.innerHTML = `
    <span class="quizbar__score">${previous ? "Best so far" : "You scored"} <b>${score}/${total}</b>
      &middot; ${pass ? "cleared" : "needs " + CONFIG.mcqPassPercent + "%"}</span>
    <button class="btn btn--quiet btn--sm" id="retry">Try the quiz again</button>`;
  $("#retry").addEventListener("click", () => {
    $("#quizbar").hidden = true;
    paintQuiz(s, rec(s.id));
  });
}

/* ------------------------------------------------------------- tasks */
function paintTasks(s, r) {
  const t = s.data;
  const host = $("#tasks");
  if (!host) return;

  host.innerHTML = t.tasks.map(task => {
    const passed = !!r.tasks[task.id];
    const levelBadge = task.level
      ? `<span class="task__level">${esc(task.level)}</span>`
      : "";
    const hintHtml = (task.hints || []).length
      ? `<div class="task__hints">${task.hints.map((hint, hintIndex) =>
          `<details class="task__hint">
             <summary>Hint ${hintIndex + 1}</summary>
             <p>${inlineMarkup(hint)}</p>
           </details>`).join("")}</div>`
      : "";

    if (task.kind === "confirm") {
      return `<section class="task task--confirm ${passed ? "is-passed" : ""}">
        <header class="task__head">
          ${levelBadge}
          <h4 class="task__t">${esc(task.title || "Practical activity")}<span class="task__pill">${passed ? "Completed" : "Not completed"}</span></h4>
          ${task.brief ? `<p class="task__b">${inlineMarkup(task.brief)}</p>` : ""}
          ${hintHtml}
        </header>
        <div class="confirm">
          <input type="checkbox" id="c_${task.id}" data-confirm="${task.id}" ${passed ? "checked" : ""}>
          <label for="c_${task.id}">${inlineMarkup(task.label || "I completed this activity.")}</label>
        </div>
      </section>`;
    }

    return `<section class="task ${passed ? "is-passed" : ""}" data-task="${task.id}">
      <header class="task__head">
        ${levelBadge}
        <h4 class="task__t">${esc(task.title)}<span class="task__pill">${passed ? "Passed" : "Not run yet"}</span></h4>
        <p class="task__b">${inlineMarkup(task.brief)}</p>
        ${hintHtml}
      </header>
      <div class="editor">
        <div class="editor__gutter" data-gutter></div>
        <textarea class="editor__ta" spellcheck="false" data-code>${esc(task.starter || "")}</textarea>
      </div>
      <div class="taskbar">
        <button class="btn btn--go btn--sm" data-run="${task.id}">Run code</button>
        <button class="btn btn--quiet btn--sm" data-reset="${task.id}">Reset</button>
        <span class="taskbar__status" data-status></span>
      </div>
      <div class="out" data-out hidden></div>
    </section>`;
  }).join("");

  $$("[data-confirm]", host).forEach(cb => cb.addEventListener("change", () => {
    if (cb.checked) r.tasks[cb.dataset.confirm] = true; else delete r.tasks[cb.dataset.confirm];
    saveProgress();
    sendProgressSnapshot(s, r, cb.checked ? "Practical activity completed" : "Practical activity unchecked");
    paintFinish(indexOf_(s.id));
    paintRail();
  }));

  $$(".task", host).forEach(sec => {
    const ta = $("[data-code]", sec);
    const gu = $("[data-gutter]", sec);
    const draw = () => {
      const n = ta.value.split("\n").length;
      gu.innerHTML = Array.from({ length: Math.max(n, 8) }, (_, k) => `<i>${k + 1}</i>`).join("");
      gu.scrollTop = ta.scrollTop;
    };
    ta.addEventListener("input", draw);
    ta.addEventListener("scroll", () => { gu.scrollTop = ta.scrollTop; });
    ta.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const a = ta.selectionStart, b = ta.selectionEnd;
        ta.value = ta.value.slice(0, a) + "    " + ta.value.slice(b);
        ta.selectionStart = ta.selectionEnd = a + 4;
        draw();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        $(`[data-run="${sec.dataset.task}"]`, sec).click();
      }
    });
    draw();
  });

  host.addEventListener("click", async (e) => {
    const resBtn = e.target.closest("[data-reset]");
    if (resBtn) {
      const task = t.tasks.find(x => x.id === resBtn.dataset.reset);
      const sec  = resBtn.closest(".task");
      const ta   = $("[data-code]", sec);
      ta.value = task.starter || "";
      ta.dispatchEvent(new Event("input"));
      $("[data-out]", sec).hidden = true;
      return;
    }
    const runBtn = e.target.closest("[data-run]");
    if (!runBtn) return;
    const task = t.tasks.find(x => x.id === runBtn.dataset.run);
    await runTask(s, r, task, runBtn.closest(".task"), runBtn);
  });
}

/* --------------------------------------------------- python in browser */
let pyPromise = null;
function bootPython() {
  if (pyPromise) return pyPromise;
  pyPromise = new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.src = CONFIG.pyodideUrl;
    el.onload = async () => {
      try { resolve(await loadPyodide({ indexURL: CONFIG.pyodideIndex })); }
      catch (err) { pyPromise = null; reject(err); }
    };
    el.onerror = () => { pyPromise = null; reject(new Error("The Python engine could not be downloaded. Check your internet connection and run again.")); };
    document.head.appendChild(el);
  });
  return pyPromise;
}

/* A student learning loops WILL write one that never ends. This watchdog
   traces the program and stops it after a few seconds, so the page never
   freezes and nobody loses their progress to a runaway while True. */
const WATCHDOG = `
import sys as _ab_sys, time as _ab_time

_ab_deadline = 0.0
_ab_ticks = 0
_ab_limit = 5.0

def _ab_guard(frame, event, arg):
    global _ab_ticks
    _ab_ticks += 1
    if (_ab_ticks & 1023) == 0 and _ab_time.time() > _ab_deadline:
        raise TimeoutError(
            "Your program ran for more than %d seconds and was stopped. "
            "Look for a loop that never ends - usually a counter you forgot to change."
            % int(_ab_limit))
    return _ab_guard

def _ab_run(src, ns, limit):
    global _ab_deadline, _ab_ticks, _ab_limit
    _ab_limit = limit
    _ab_deadline = _ab_time.time() + limit
    _ab_ticks = 0
    code = compile(src, "<your program>", "exec")
    _ab_sys.settrace(_ab_guard)
    try:
        exec(code, ns)
    finally:
        _ab_sys.settrace(None)
`;

let watchdogReady = false;

async function runPython(code) {
  const py = await bootPython();
  const out = [], err = [];
  py.setStdout({ batched: (x) => out.push(x) });
  py.setStderr({ batched: (x) => err.push(x) });

  /* input() works, but a loop full of them should not trap the student
     in an endless chain of pop-up boxes */
  let asked = 0;
  try {
    py.setStdin({ stdin: () => {
      if (asked++ >= 25) return "";
      return window.prompt("Your program is asking for input:") || "";
    } });
  } catch {}

  if (!watchdogReady) {
    try { await py.runPythonAsync(WATCHDOG); watchdogReady = true; } catch {}
  }

  let error = null, ns = null;
  try {
    ns = py.globals.get("dict")();
    const limit = CONFIG.runTimeoutSeconds || 5;
    const runner = watchdogReady ? py.globals.get("_ab_run") : null;
    if (runner) { runner(code, ns, limit); runner.destroy(); }
    else await py.runPythonAsync(code, { globals: ns });
  } catch (e) {
    error = String((e && e.message) || e);
  } finally {
    if (ns && ns.destroy) try { ns.destroy(); } catch {}
  }
  return { stdout: out.join("\n"), stderr: err.join("\n"), error };
}

function humanError(raw) {
  const lines = String(raw).split("\n").filter(l => !/pyodide|_pyodide|<exec>|importlib|_ab_run|_ab_guard|settrace/i.test(l));
  return lines.join("\n").trim() || String(raw).trim();
}

function evaluate(task, source, stdout) {
  return (task.checks || []).map(c => {
    let ok = false, label = "";
    switch (c.type) {
      case "stdoutEquals":
        ok = tidy(stdout) === tidy(c.value);
        label = `Output is exactly: ${c.value.split("\n")[0]}${c.value.includes("\n") ? " …" : ""}`;
        break;
      case "stdoutContains":
        ok = tidy(stdout).includes(tidy(c.value));
        label = `Output contains: ${c.value}`;
        break;
      case "stdoutRegex":
        ok = new RegExp(c.pattern, c.flags || "m").test(tidy(stdout));
        label = c.message || "Output matches the required pattern";
        break;
      case "stdoutMinLines":
        ok = tidy(stdout).split("\n").filter(l => l.trim()).length >= c.value;
        label = c.message || `Prints at least ${c.value} lines`;
        break;
      case "stdoutLineCount":
        ok = tidy(stdout).split("\n").filter(l => l.trim()).length === c.value;
        label = c.message || `Prints exactly ${c.value} non-empty lines`;
        break;
      case "stdoutNumberEquals": {
        const actual = Number(tidy(stdout));
        const expected = Number(c.value);
        const tolerance = Number.isFinite(Number(c.tolerance)) ? Number(c.tolerance) : 1e-9;
        ok = Number.isFinite(actual) && Number.isFinite(expected) && Math.abs(actual - expected) <= tolerance;
        label = c.message || `Numerical output equals ${c.value}`;
        break;
      }
      case "sourceIncludes":
        ok = source.includes(c.value);
        label = c.message || `Code uses ${c.value}`;
        break;
      case "sourceNotIncludes":
        ok = !source.includes(c.value);
        label = c.message || `Code does not use ${c.value}`;
        break;
      case "sourceRegex":
        ok = new RegExp(c.pattern, c.flags || "m").test(source);
        label = c.message || "Code matches the required pattern";
        break;
      case "sourceNotRegex":
        ok = !new RegExp(c.pattern, c.flags || "m").test(source);
        label = c.message || "Code avoids the blocked pattern";
        break;
      case "sourceMinMatches":
        ok = (source.match(new RegExp(c.pattern, c.flags || "gm")) || []).length >= c.count;
        label = c.message || `Code contains at least ${c.count} of the required pattern`;
        break;
      case "sourceMinNonEmptyLines":
        ok = source.split("\n").filter(l => l.trim()).length >= c.value;
        label = c.message || `Code contains at least ${c.value} non-empty lines`;
        break;
      default:
        ok = true;
        label = "Checked";
    }
    return { ok, label };
  });
}

async function runTask(s, r, task, sec, btn) {
  const code   = $("[data-code]", sec).value;
  const outBox = $("[data-out]", sec);
  const status = $("[data-status]", sec);

  btn.disabled = true;
  status.innerHTML = '<span class="spin"></span> Starting Python…';
  outBox.hidden = false;
  outBox.innerHTML = '<span class="out__k">Terminal</span>Running…';

  let res;
  try {
    res = await runPython(code);
  } catch (err) {
    outBox.innerHTML = `<span class="out__k">Terminal</span><span class="out__err">${esc(err.message)}</span>`;
    status.textContent = "";
    btn.disabled = false;
    return;
  }

  const printed = res.stdout || "";
  let html = `<span class="out__k">Terminal</span>${printed ? esc(printed) : "(your program printed nothing)"}`;
  if (res.error) html += `\n<span class="out__err">${esc(humanError(res.error))}</span>`;
  else if (res.stderr) html += `\n<span class="out__err">${esc(res.stderr)}</span>`;

  const checks = res.error ? [] : evaluate(task, code, printed);
  const passed = !res.error && checks.length > 0 && checks.every(c => c.ok);

  if (checks.length) {
    html += `<ul class="checks">${checks.map(c =>
      `<li><b class="${c.ok ? "ok" : "no"}">${c.ok ? "&#10003;" : "&#10007;"}</b><span>${esc(c.label)}</span></li>`
    ).join("")}</ul>`;
  }
  outBox.innerHTML = html;

  const wasPassed = !!r.tasks[task.id];
  if (passed) {
    r.tasks[task.id] = true;
    sec.classList.add("is-passed");
    $(".task__pill", sec).textContent = "Passed";
    status.textContent = "All checks passed";
    saveProgress();
    if (!wasPassed) {
      toast("Task passed — nice.");
      sendProgressSnapshot(s, r, "Passed task: " + task.title);
    }
  } else {
    status.textContent = res.error ? "Python reported an error" : "Not passing yet";
  }

  btn.disabled = false;
  paintFinish(indexOf_(s.id));
  paintRail();
}

/* ---------------------------------------------------------- completion */
function paintFinish(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id);
  const tasksDone = t.tasks.every(x => r.tasks[x.id]);
  const complete  = r.mcqPassed && tasksDone;
  const box = $("#finish");
  if (!box) return;

  if (complete && !r.done) {
    r.done = true;
    saveProgress();
    sendProgressSnapshot(s, r, i + 1 < STEPS.length ? STEPS[i + 1].title + " unlocked" : "Unit complete");
    toast("Topic complete.");
  }

  const nextStep = STEPS[i + 1];
  box.className = "finish" + (complete ? " is-done" : "");
  box.innerHTML = complete
    ? `<div>
         <h4 class="finish__t">Topic ${s.no} cleared.</h4>
         <p class="finish__s">${nextStep ? esc(nextStep.title) + " is now open." : "That's everything live in this unit."}</p>
       </div>
       ${nextStep ? `<button class="btn btn--go" data-next="${i + 1}">Open ${esc(KIND_LABEL[nextStep.kind])}</button>`
                  : '<button class="btn btn--quiet" data-home>Back to your progress</button>'}`
    : `<div>
         <h4 class="finish__t">Still to do</h4>
         <p class="finish__s">${[
             r.mcqPassed ? null : "clear the quiz",
             tasksDone ? null : (t.tasks.length ? "pass every task above" : null)
           ].filter(Boolean).join(", ") || "nothing — you're done"}.</p>
       </div>`;

  const nb = $("[data-next]", box); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
  const hb = $("[data-home]", box); if (hb) hb.addEventListener("click", () => go({ name: "dashboard" }));
}

/* ======================================================================
   UNIT TEST
   ====================================================================== */
const exam = { running: false, answers: {}, endsAt: 0, timerId: null, result: null };

function resetExam() {
  exam.running = false; exam.answers = {}; exam.endsAt = 0; exam.result = null;
  if (exam.timerId) { clearInterval(exam.timerId); exam.timerId = null; }
}

function paintTest(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id);
  const total = totalMarks(t);
  const need  = Math.ceil(total * CONFIG.testPassPercent / 100);

  /* 1. results screen, straight after submitting */
  if (exam.result) return paintTestResult(i);

  /* 2. already passed earlier, and not currently sitting it */
  if (!exam.running && r.done) {
    const nextStep = STEPS[i + 1];
    $("#main").innerHTML = `<div class="wrap">
      <header class="thead">
        <p class="thead__k">${esc(s.unit)} &middot; Test</p>
        <h2 class="thead__t">${esc(t.title)}</h2>
      </header>
      <div class="result is-pass">
        <div class="result__big">${r.best}<span>/${r.total}</span></div>
        <div>
          <h4 class="result__t">Passed</h4>
          <p class="result__s">Best of ${r.attempts} attempt${r.attempts > 1 ? "s" : ""}. You needed ${need}.</p>
        </div>
        <button class="btn btn--quiet" id="retake">Sit it again</button>
      </div>
      ${nextStep ? `<div class="finish is-done">
        <div><h4 class="finish__t">Next</h4><p class="finish__s">${esc(nextStep.title)}</p></div>
        <button class="btn btn--go" data-next="${i + 1}">Open it</button></div>` : ""}
      ${credit()}
    </div>`;
    $("#retake").addEventListener("click", () => startExam(i));
    const nb = $("[data-next]"); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
    return;
  }

  /* 3. the briefing, before the clock starts */
  if (!exam.running) {
    $("#main").innerHTML = `<div class="wrap">
      <header class="thead">
        <p class="thead__k">${esc(s.unit)} &middot; Test</p>
        <h2 class="thead__t">${esc(t.title)}</h2>
        <p class="thead__s">${t.questions.length} questions &middot; ${t.marksPerQuestion} marks each &middot; ${total} marks total</p>
      </header>

      <article class="paper">
        <h4>Before you start</h4>
        <ul>
          <li>You have <strong>${t.durationMinutes} minutes</strong>. The clock starts when you press the button and does not pause.</li>
          <li>You need <strong>${need} out of ${total}</strong> (${CONFIG.testPassPercent}%) to pass.</li>
          <li>No feedback until you submit. You can change any answer before then.</li>
          <li>Unanswered questions score zero, so guess rather than leave a blank.</li>
          ${CONFIG.focusGuard ? "<li><strong>Do not leave this tab.</strong> Switching away, minimising, or opening another window submits the test immediately, with whatever you have answered so far.</li>" : ""}
          <li>Reloading the page abandons the attempt and starts you over.</li>
        </ul>
        ${r.attempts ? `<div class="callout"><strong>Previous attempts:</strong> ${r.attempts}. Best so far ${r.best}/${r.total}.</div>` : ""}
      </article>

      <div class="finish">
        <div><h4 class="finish__t">Ready?</h4><p class="finish__s">Sit somewhere quiet and give it ${t.durationMinutes} clear minutes.</p></div>
        <button class="btn btn--go" id="startExam">Start the test</button>
      </div>
      ${credit()}
    </div>`;
    $("#startExam").addEventListener("click", () => startExam(i));
    return;
  }

  /* 4. the paper itself */
  $("#main").innerHTML = `<div class="wrap">
    <div class="exam__bar">
      <span class="exam__clock" id="clock">--:--</span>
      <span class="exam__meta" id="answeredCount">0 / ${t.questions.length} answered</span>
      <button class="btn btn--go btn--sm" id="submitExam">Submit test</button>
    </div>
    ${guardNote("the test is submitted on the spot with whatever you have answered")}
    <div id="examQs">
      ${t.questions.map((q, qi) => `
        <div class="eq is-unanswered" data-q="${qi}">
          <p class="eq__t"><span class="eq__n">Q${qi + 1}</span><span>${q.q}</span><span class="eq__m">${t.marksPerQuestion} marks</span></p>
          <div class="eq__opts">
            ${q.options.map((o, oi) =>
              `<button class="opt" data-q="${qi}" data-o="${oi}">
                 <span class="opt__key">${String.fromCharCode(65 + oi)}</span><span>${o}</span>
               </button>`).join("")}
          </div>
        </div>`).join("")}
    </div>
    <div class="finish"><div><h4 class="finish__t">That's all ${t.questions.length}</h4>
      <p class="finish__s">Check anything you skipped, then submit.</p></div>
      <button class="btn btn--go" id="submitExam2">Submit test</button></div>
  </div>`;

  $("#examQs").addEventListener("click", (e) => {
    const b = e.target.closest(".opt");
    if (!b) return;
    const qi = +b.dataset.q;
    exam.answers[qi] = +b.dataset.o;
    const card = $(`.eq[data-q="${qi}"]`);
    $$(".opt", card).forEach(x => x.classList.remove("is-chosen"));
    b.classList.add("is-chosen");
    card.classList.remove("is-unanswered");
    card.classList.add("is-answered");
    $("#answeredCount").textContent = `${Object.keys(exam.answers).length} / ${t.questions.length} answered`;
  });

  const confirmSubmit = () => {
    const left = t.questions.length - Object.keys(exam.answers).length;
    if (left && !confirm(`${left} question${left > 1 ? "s are" : " is"} still unanswered. Submit anyway?`)) return;
    finishExam("Submitted");
    render();
  };
  $("#submitExam").addEventListener("click", confirmSubmit);
  $("#submitExam2").addEventListener("click", confirmSubmit);
  tickClock();
}

function startExam(i) {
  const t = stepAt(i).data;
  resetExam();
  exam.running = true;
  exam.endsAt = Date.now() + t.durationMinutes * 60000;
  armGuard(i, true);
  render();
  exam.timerId = setInterval(tickClock, 1000);
}

function tickClock() {
  const el = $("#clock");
  if (!el) return;
  const left = Math.max(0, exam.endsAt - Date.now());
  const m = Math.floor(left / 60000), sec = Math.floor(left % 60000 / 1000);
  el.textContent = `${pad(m)}:${pad(sec)}`;
  el.classList.toggle("is-low", left < 120000);
  if (left <= 0) {
    finishExam("Time ran out");
    SYNC.flag({ event: "Test ran out of time", where: currentScreen(), detail: "Auto-submitted" });
    render();
  }
}

function finishExam(reason) {
  if (!exam.running) return;
  exam.running = false;
  if (exam.timerId) { clearInterval(exam.timerId); exam.timerId = null; }

  const i = guard.step >= 0 ? guard.step : view.step;
  const s = stepAt(i), t = s.data, r = rec(s.id);

  let correct = 0;
  t.questions.forEach((q, qi) => { if (exam.answers[qi] === q.answer) correct++; });

  const total = totalMarks(t);
  const score = correct * t.marksPerQuestion;
  const pct   = Math.round(score / total * 100);
  const pass  = pct >= CONFIG.testPassPercent;

  r.attempts = (r.attempts || 0) + 1;
  r.total = total;
  if (r.best == null || score > r.best) r.best = score;
  if (pass) r.done = true;
  saveProgress();

  exam.result = { score, total, pct, pass, correct, reason, answers: Object.assign({}, exam.answers) };
  armGuard(i, false);

  SYNC.test({
    unit: s.unit, testName: t.title,
    score, total, percent: pct,
    result: pass ? "Pass" : "Fail",
    reason
  });
}

function paintTestResult(i) {
  const s = stepAt(i), t = s.data, r = rec(s.id), res = exam.result;
  const need = Math.ceil(res.total * CONFIG.testPassPercent / 100);
  const nextStep = STEPS[i + 1];

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(s.unit)} &middot; Test result</p>
      <h2 class="thead__t">${esc(t.title)}</h2>
    </header>

    <div class="result ${res.pass ? "is-pass" : ""}">
      <div class="result__big">${res.score}<span>/${res.total}</span></div>
      <div>
        <h4 class="result__t">${res.pass ? "Passed" : "Not cleared"}</h4>
        <p class="result__s">${res.correct} of ${t.questions.length} correct &middot; ${res.pct}% &middot; you needed ${need}.
        ${res.reason !== "Submitted" ? "<br><strong>" + esc(res.reason) + ".</strong>" : ""}</p>
      </div>
      ${res.pass && nextStep
        ? `<button class="btn btn--go" data-next="${i + 1}">Open the project</button>`
        : `<button class="btn btn--go" id="retake">Try again</button>`}
    </div>

    <div class="step"><span class="step__n">Review</span><h3 class="step__t">Every question</h3></div>
    ${t.questions.map((q, qi) => {
      const chose = res.answers[qi];
      const right = chose === q.answer;
      return `<div class="eq">
        <p class="eq__t"><span class="eq__n">Q${qi + 1}</span><span>${q.q}</span>
          <span class="eq__m">${right ? t.marksPerQuestion : 0}/${t.marksPerQuestion}</span></p>
        <div class="eq__opts">
          ${q.options.map((o, oi) => {
            let cls = "opt";
            if (oi === q.answer) cls += " is-key";
            else if (oi === chose) cls += " is-miss";
            return `<button class="${cls}" disabled>
              <span class="opt__key">${String.fromCharCode(65 + oi)}</span><span>${o}</span></button>`;
          }).join("")}
        </div>
        ${chose === undefined ? '<p class="q__why">You left this one blank.</p>' : ""}
      </div>`;
    }).join("")}
    ${credit()}
  </div>`;

  const rb = $("#retake"); if (rb) rb.addEventListener("click", () => startExam(i));
  const nb = $("[data-next]"); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
  paintRail();
}

/* ======================================================================
   UNIT PROJECT — ONE SUBMISSION, LINK OR DIRECT PYTHON FILE
   ====================================================================== */
function paintProject(i) {
  const s = stepAt(i), p = s.data, r = rec(s.id);
  const nextStep = STEPS[i + 1];
  const remote = (serverState.projects || {})[s.unit] || null;
  const submitted = remote && remote.submissionStatus && remote.submissionStatus !== "Reset";

  const reviewHtml = remote ? `<div class="project-review">
    <h5>Review status: ${esc(remote.submissionStatus || remote.aiStatus || "Submitted")}</h5>
    ${remote.approvedScore !== undefined && remote.approvedScore !== "" ? `<p><strong>Approved score:</strong> ${esc(remote.approvedScore)}/100</p>` : `<p>Your AI suggestion is visible to faculty. Your official score appears here only after faculty approval.</p>`}
    ${remote.facultyFeedback ? `<p><strong>Faculty feedback:</strong> ${esc(remote.facultyFeedback)}</p>` : ""}
    ${remote.aiSummary ? `<p><strong>Review summary:</strong> ${esc(remote.aiSummary)}</p>` : ""}
    ${remote.strengths ? `<p><strong>Strengths</strong></p><div>${esc(String(remote.strengths)).replace(/\n/g, "<br>")}</div>` : ""}
    ${remote.issues ? `<p><strong>Problems found</strong></p><div>${esc(String(remote.issues)).replace(/\n/g, "<br>")}</div>` : ""}
    ${remote.improvements ? `<p><strong>Improvements</strong></p><div>${esc(String(remote.improvements)).replace(/\n/g, "<br>")}</div>` : ""}
  </div>` : "";

  $("#main").innerHTML = `<div class="wrap">
    <header class="thead">
      <p class="thead__k">${esc(s.unit)} &middot; Project</p>
      <h2 class="thead__t">${esc(p.title)}</h2>
      <p class="thead__s">${esc(p.summary)}</p>
    </header>

    <article class="brief">${p.brief}</article>

    ${submitted ? `<div class="submitted">
      <h4 class="finish__t">Project submitted</h4>
      <p class="finish__s">Only one official submission is allowed. Faculty can reset it when another submission is required.</p>
      ${remote.url ? `<p><a href="${esc(remote.url)}" target="_blank" rel="noopener">Open submitted ${esc(remote.submissionType || "project")}</a></p>` : ""}
      ${remote.fileName ? `<p><strong>File:</strong> ${esc(remote.fileName)}</p>` : ""}
      ${reviewHtml}
      <div class="submit__row" style="margin-top:1rem">
        ${nextStep ? `<button class="btn btn--go btn--sm" data-next="${i + 1}">Continue to ${esc(nextStep.unit)}</button>`
                   : '<button class="btn btn--go btn--sm" data-home>Back to your progress</button>'}
      </div>
    </div>` : `<div class="submit">
      <h4>Submit your project once</h4>
      <p>Choose either a public GitHub/Google Drive link or upload one <code>.py</code> or <code>.ipynb</code> file. Direct files receive an automatic static AI review. The AI does not execute the program.</p>
      <div class="submit__choice">
        <section class="submit__pane">
          <h5>Option 1 — Public link</h5>
          <input id="projLink" type="url" placeholder="https://github.com/your-name/project" spellcheck="false">
          <button class="btn btn--go btn--sm" id="projLinkSend">Submit link</button>
        </section>
        <section class="submit__pane">
          <h5>Option 2 — Direct file</h5>
          <input id="projFile" type="file" accept=".py,.ipynb">
          <button class="btn btn--go btn--sm" id="projFileSend">Upload file</button>
          <p class="submit__note">Maximum size: 5 MB.</p>
        </section>
      </div>
      <p class="submit__note" id="projNote">Check everything carefully. Another submission is blocked unless faculty resets this unit project.</p>
    </div>`}
    ${credit()}
  </div>`;

  const linkBtn = $("#projLinkSend");
  if (linkBtn) linkBtn.addEventListener("click", () => submitProjectLink(i));
  const fileBtn = $("#projFileSend");
  if (fileBtn) fileBtn.addEventListener("click", () => submitProjectFile(i));
  const nb = $("[data-next]"); if (nb) nb.addEventListener("click", () => go({ name: "step", step: +nb.dataset.next }));
  const hb = $("[data-home]"); if (hb) hb.addEventListener("click", () => go({ name: "dashboard" }));
}

async function submitProjectLink(i) {
  const s = stepAt(i);
  const raw = $("#projLink").value.trim();
  const note = $("#projNote");
  let url;
  try { url = new URL(raw); }
  catch { note.textContent = "Enter a complete https:// link."; note.classList.add("is-bad"); return; }
  if (url.protocol !== "https:" || !CONFIG.projectHosts.some(h => url.hostname === h || url.hostname.endsWith("." + h))) {
    note.textContent = "Only secure GitHub or Google Drive links are accepted.";
    note.classList.add("is-bad");
    return;
  }
  if (!confirm(`Submit this link for ${s.unit}?\n\n${raw}\n\nYou cannot replace it unless faculty resets the project.`)) return;
  await sendProjectSubmission(i, { submissionType: "Link", link: raw });
}

async function submitProjectFile(i) {
  const s = stepAt(i);
  const file = $("#projFile").files[0];
  const note = $("#projNote");
  if (!file) { note.textContent = "Choose a .py or .ipynb file."; note.classList.add("is-bad"); return; }
  if (!/\.(py|ipynb)$/i.test(file.name)) { note.textContent = "Only .py and .ipynb files are accepted."; note.classList.add("is-bad"); return; }
  if (file.size > 5 * 1024 * 1024) { note.textContent = "The selected file is larger than 5 MB."; note.classList.add("is-bad"); return; }
  if (!confirm(`Upload ${file.name} for ${s.unit}?\n\nYou cannot replace it unless faculty resets the project.`)) return;
  note.innerHTML = '<span class="spin"></span> Reading and uploading your project…';
  const fileBase64 = await fileAsBase64(file);
  await sendProjectSubmission(i, { submissionType: "File", fileName: file.name, fileBase64 });
}

function fileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",").pop());
    reader.onerror = () => reject(new Error("The file could not be read."));
    reader.readAsDataURL(file);
  });
}

async function sendProjectSubmission(i, payload) {
  const s = stepAt(i), r = rec(s.id);
  const note = $("#projNote");
  const buttons = [$("#projLinkSend"), $("#projFileSend")].filter(Boolean);
  buttons.forEach(b => { b.disabled = true; });
  note.innerHTML = '<span class="spin"></span> Saving the official submission and preparing the review…';
  const res = await SYNC.project(Object.assign({ unit: s.unit, projectName: s.title }, payload));
  buttons.forEach(b => { b.disabled = false; });
  if (!res || !res.ok) {
    note.textContent = (res && res.error) || "The project could not be submitted.";
    note.classList.add("is-bad");
    return;
  }
  serverState.projects = serverState.projects || {};
  serverState.projects[s.unit] = res.submission;
  r.link = res.submission.url || "";
  r.at = res.submission.submittedAt || new Date().toISOString();
  r.done = true;
  r.serverStatus = res.submission.submissionStatus;
  saveProgress();
  toast(s.unit + " project submitted.");
  paintRail();
  render();
}

/* ======================================================================
   LEARNING WIDGETS
   Delegated once on #main, so anything dropped into a topic's notes just
   works. None of this affects a student's score — it is practice, not marks.
   ====================================================================== */
let matchPick = null;

$("#main").addEventListener("click", (e) => {
  const g = e.target.closest(".w-guess button[data-o]");   if (g) return doGuess(g);
  const f = e.target.closest(".w-flip__card");             if (f) return f.classList.toggle("is-open");
  const sp = e.target.closest(".w-spot__line button");     if (sp) return doSpot(sp);
  const m = e.target.closest(".w-match button");           if (m) return doMatch(m);
});

function doGuess(btn) {
  const box = btn.closest(".w-guess");
  if (box.classList.contains("is-done")) return;
  box.classList.add("is-done");
  const right = +box.dataset.answer;
  $$("button[data-o]", box).forEach(b => {
    b.disabled = true;
    if (+b.dataset.o === right) b.classList.add("is-right");
    else if (b === btn) b.classList.add("is-wrong");
  });
  const why = $(".w__why", box);
  if (why) why.classList.add("is-shown");
}

function doSpot(btn) {
  const box = btn.closest(".w-spot");
  if (box.classList.contains("is-done")) return;
  if (btn.hasAttribute("data-bad")) {
    box.classList.add("is-done");
    $$("button", box).forEach(b => { b.disabled = true; });
    btn.classList.add("is-right");
    const why = $(".w__why", box);
    if (why) why.classList.add("is-shown");
  } else {
    btn.classList.add("is-wrong");
    setTimeout(() => btn.classList.remove("is-wrong"), 700);
  }
}

function doMatch(btn) {
  if (btn.disabled) return;
  const box = btn.closest(".w-match");

  if (matchPick && matchPick.el === btn) {
    btn.classList.remove("is-pick");
    matchPick = null;
    return;
  }
  if (!matchPick || matchPick.box !== box || matchPick.el.parentElement === btn.parentElement) {
    if (matchPick) matchPick.el.classList.remove("is-pick");
    matchPick = { el: btn, box };
    btn.classList.add("is-pick");
    return;
  }

  const first = matchPick.el;
  first.classList.remove("is-pick");
  matchPick = null;

  if (first.dataset.pair === btn.dataset.pair) {
    [first, btn].forEach(b => { b.classList.add("is-right"); b.disabled = true; });
    if (!$$(".w-match button:not([disabled])", box).length) {
      const why = $(".w__why", box);
      if (why) why.classList.add("is-shown");
      toast("All matched.");
    }
  } else {
    [first, btn].forEach(b => b.classList.add("is-wrong"));
    setTimeout(() => [first, btn].forEach(b => b.classList.remove("is-wrong")), 650);
  }
}

/* ======================================================================
   TYPE IT YOURSELF
   One capture-phase listener on the document, so it applies to every code
   editor on the page — including ones created later when a topic is opened.
   Set ALLOW_PASTE to true if you ever want to switch this off.
   ====================================================================== */
const ALLOW_PASTE = false;

if (!ALLOW_PASTE) {
  ["paste", "copy", "cut", "drop", "dragover", "contextmenu"].forEach(evt =>
    document.addEventListener(evt, (e) => {
      const el = e.target;
      if (!el || !el.closest || !el.closest(".editor")) return;
      e.preventDefault();
      e.stopPropagation();
      if (evt === "paste") {
        toast("Type the code yourself — pasting is off here.");
        flagPaste();
      }
    }, true)
  );
}

/* one flag a minute at most, so a frustrated student doesn't fill the log */
let lastPasteFlag = 0;
function flagPaste() {
  if (!student) return;
  const now = Date.now();
  if (now - lastPasteFlag < 60000) return;
  lastPasteFlag = now;
  SYNC.flag({ event: "Paste blocked in the code editor", where: currentScreen(),
              detail: "Student tried to paste code" });
}

/* ======================================================================
   ASK A DOUBT
   ====================================================================== */
const askPanel = $("#askPanel"), askLog = $("#askLog"), askInput = $("#askInput");

function bubble(role, text) {
  const d = document.createElement("div");
  d.className = "bub bub--" + role;
  d.innerHTML = role === "ai" ? mdLite(text) : esc(text);
  askLog.appendChild(d);
  askLog.scrollTop = askLog.scrollHeight;
  return d;
}

function mdLite(s) {
  let h = esc(s);
  h = h.replace(/```(?:\w+)?\n([\s\S]*?)```/g, (m, c) => `<pre><code>${c}</code></pre>`);
  h = h.replace(/`([^`\n]+)`/g, "<code>$1</code>");
  h = h.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  h = h.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br>");
  return "<p>" + h + "</p>";
}

function openAsk() {
  askPanel.hidden = false;
  $("#askBtn").hidden = true;
  $("#askBtn").setAttribute("aria-expanded", "true");
  if (!askLog.childElementCount) {
    const where = view.name === "step" && stepAt(view.step) ? stepAt(view.step).title : COURSE[0].unit;
    bubble("sys", "Asking about " + where);
    bubble("ai", "Ask me anything from this topic — a word you didn't follow, an error message you got, or why your output looks wrong. I'll explain it, but I won't type your task answers for you.");
  }
  askInput.focus();
}
function closeAsk() {
  askPanel.hidden = true;
  $("#askBtn").hidden = !CONFIG.aiEnabled;
  $("#askBtn").setAttribute("aria-expanded", "false");
}
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !askPanel.hidden) closeAsk(); });

$("#askBtn").addEventListener("click", openAsk);
$("#askClose").addEventListener("click", closeAsk);
askInput.addEventListener("input", () => { askInput.style.height = "auto"; askInput.style.height = Math.min(askInput.scrollHeight, 112) + "px"; });
askInput.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); $("#askForm").requestSubmit(); } });

$("#askForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const q = askInput.value.trim();
  if (!q) return;

  if (exam.running) {
    bubble("sys", "The helper is closed during a test.");
    askInput.value = "";
    return;
  }
  if (!API.isLive()) {
    bubble("me", q); askInput.value = "";
    bubble("sys", "The AI helper isn't connected yet. Ask your faculty to finish the Apps Script setup.");
    return;
  }

  bubble("me", q);
  chat.push({ role: "user", text: q });
  askInput.value = ""; askInput.style.height = "auto";
  $("#askSend").disabled = true;

  const thinking = bubble("ai", "…");
  thinking.innerHTML = '<span class="spin"></span>';

  const s = view.name === "step" ? stepAt(view.step) : null;
  const context = s && s.kind === "topic"
    ? `${s.unit} — Topic: ${s.title}. ${s.summary} Tasks in this topic: ${s.data.tasks.map(x => x.title).join("; ")}`
    : `${COURSE[0].unit}: ${COURSE[0].unitTitle}`;

  const res = await API.ask(student, q, context, chat);
  thinking.remove();

  if (res && res.ok && res.reply) {
    bubble("ai", res.reply);
    chat.push({ role: "model", text: res.reply });
  } else {
    bubble("sys", (res && res.error) || "No answer came back. Try once more in a moment.");
  }
  $("#askSend").disabled = false;
});

/* ======================================================================
   BOOT
   ====================================================================== */
(async function boot() {
  setAuthMode("login");
  await loadSections();
  student = loadStudent();
  if (student && student.id) {
    progress = loadProgress();
    const res = await API.resume(student);
    if (res && res.ok) {
      student.name = res.account.name;
      student.email = res.account.email || "";
      student.section = res.account.section || "";
      student.role = res.account.role;
      student.status = res.account.status;
      student.expiresAt = res.expiresAt;
      saveStudent();
      applyRemoteState(res.state);
      startApp();
      return;
    }
    clearStudent();
  }
  $("#gate").hidden = false;
  typeShell();
  $("#regId").focus();
})();

})();
