// Progress shared by the home page and the "Moi" page: lesson percentages, badges, medal drawing.
// Needs js/activity.js (KL), js/icons.js (icon) and anglais/lessons.js (LESSONS).
const KLP = {
  progress() { try { return JSON.parse(localStorage.getItem("anglais-progress-v1") || "{}") || {}; } catch (e) { return {}; } },
  // same rules as the course page
  lessonPercent(L, P) {
    const p = P[L.id]; if (!p) return 0; const parts = [];
    (L.exercises || []).forEach((_, i) => parts.push(((p.ex || {})[i] || 0) / 100));
    if (L.vocab) parts.push((p.vocab || 0) / 100);
    if (L.dictation) parts.push(Object.keys(p.dict || {}).length / L.dictation.length);
    if (L.speak) parts.push(Object.keys(p.speak || {}).length / L.speak.length);
    if (L.writing) parts.push(p.write ? 1 : 0);
    return parts.length ? Math.round(100 * parts.reduce((a, b) => a + Math.min(1, b), 0) / parts.length) : 0;
  },
  // [id, icon, name, colour, how to earn it, earned?]
  badges(P) {
    const T = KL.read("totals", {}), streak = KL.streak(), best = Math.max(KL.read("bestStreak", 0), streak);
    const pc = (l) => KLP.lessonPercent(l, P), u1 = LESSONS.filter((l) => l.unit === "u1");
    return [
      ["first", "flag", "Premier pas", "#d9cdf6", "Ton premier exercice", (T.ex || 0) + (T.words || 0) + (T.dict || 0) + (T.speak || 0) > 0],
      ["streak3", "flame", "3 jours", "#ffd9c4", "3 jours d'affilée", best >= 3],
      ["lesson", "bookopen", "1re leçon", "#cfeee0", "Une leçon finie à 100 %", LESSONS.some((l) => pc(l) >= 100)],
      ["words50", "letters", "50 mots", "#d3e0fb", "50 mots trouvés au quiz", (T.words || 0) >= 50],
      ["ear", "headphones", "Oreille d'or", "#ffe9b0", "20 dictées réussies", (T.dict || 0) >= 20],
      ["voice", "mic", "Belle voix", "#f8d3e1", "20 phrases bien dites au micro", (T.speak || 0) >= 20],
      ["writer", "pencil", "Écrivain", "#dcefc6", "Un texte écrit en entier", (T.write || 0) >= 1],
      ["unit1", "trophy", "Unit 1 finie", "#f3dfb0", "Toute l'Unit 1 à 100 %", u1.every((l) => pc(l) >= 100)],
    ];
  },
  medal(ic, col) {
    return `<svg viewBox="0 0 100 110" aria-hidden="true"><path d="M30 4 h16 l10 34 -14 6z" fill="#7b68c4" stroke="#141414" stroke-width="3.5" stroke-linejoin="round"/><path d="M70 4 h-16 l-10 34 14 6z" fill="#ffd27a" stroke="#141414" stroke-width="3.5" stroke-linejoin="round"/>
  <circle cx="50" cy="70" r="34" fill="${col}" stroke="#141414" stroke-width="4"/><circle cx="50" cy="70" r="25" fill="none" stroke="#141414" stroke-width="2" stroke-dasharray="3 4" opacity=".5"/>
  ${icon(ic, "mi").replace("<svg ", '<svg x="29" y="49" width="42" height="42" ')}</svg>`;
  },
  // base64 that is safe in a link, for UTF-8 text
  enc(obj) { return btoa(unescape(encodeURIComponent(JSON.stringify(obj)))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); },
  dec(s) { try { return JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))))); } catch (e) { return null; } },
};
