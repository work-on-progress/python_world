/* ==========================================================================
   AbhyasLab — COURSE ASSEMBLY

   Units 1 to 6 are already wired up. A unit joins the course automatically as
   soon as its file has topics in it, so you can paste content into unit3.js
   and reload — nothing else to change.

   An empty or missing unit is skipped rather than breaking the site, so a
   half-finished upload still leaves a working page.

   SCRIPT ORDER IN index.html
     config.js → unit1…unit6.js → content.js → api.js → app.js
   ========================================================================== */

const COURSE_META = Object.freeze({
  version: "3.0.0",
  buildDate: "2026-07-31",
  slots: 6
});

const COURSE = (() => {
  const found = [];

  for (let n = 1; n <= COURSE_META.slots; n++) {
    const unit = (typeof window !== "undefined" ? window["UNIT_" + n] : null) ||
                 (typeof globalThis !== "undefined" ? globalThis["UNIT_" + n] : null);

    if (!unit) continue;                                   // file not loaded yet
    if (!Array.isArray(unit.topics) || !unit.topics.length) continue;  // still empty
    found.push(unit);
  }

  return found;
})();

/* -------------------------------------------------------------------------
   Validation. Anything wrong is reported once, clearly, in the console —
   duplicate IDs are the one mistake that silently corrupts a student's saved
   progress, so they are worth catching loudly.
   ------------------------------------------------------------------------- */
(function validate() {
  const topicIds = new Set();
  const taskIds = new Set();
  const errors = [];

  COURSE.forEach(unit => {
    if (!unit.unit) errors.push("A unit is missing its `unit` name.");

    unit.topics.forEach(topic => {
      if (!topic.id) errors.push(`${unit.unit}: a topic has no id.`);
      else if (topicIds.has(topic.id)) errors.push(`Duplicate topic id: ${topic.id}`);
      else topicIds.add(topic.id);

      (topic.tasks || []).forEach(task => {
        if (!task.id) errors.push(`${topic.id}: a task has no id.`);
        else if (taskIds.has(task.id)) errors.push(`Duplicate task id: ${task.id}`);
        else taskIds.add(task.id);
      });
    });

    if (unit.test) {
      (unit.test.questions || []).forEach((q, i) => {
        if (!(q.answer >= 0 && q.answer < (q.options || []).length)) {
          errors.push(`${unit.unit} test Q${i + 1}: the answer index is out of range.`);
        }
      });
    }
  });

  if (!COURSE.length) {
    console.warn("AbhyasLab: no units have content yet. Paste a unit into unit1.js and reload.");
    return;
  }

  if (errors.length) {
    console.error("AbhyasLab: course validation failed.", errors);
    return;
  }

  const topics = COURSE.reduce((a, u) => a + u.topics.length, 0);
  const tasks = COURSE.reduce((a, u) =>
    a + u.topics.reduce((b, t) => b + (t.tasks || []).length, 0), 0);

  console.info(
    `[AbhyasLab v${COURSE_META.version}] ${COURSE.length} unit(s) loaded`,
    { units: COURSE.map(u => u.unit), topics, tasks }
  );
})();
