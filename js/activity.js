// What the learner did, kept on this phone only (localStorage, keys "kalalab.*").
// Read by the home page for the streak, the daily goals and the badges.
const KL = {
  key: (k) => "kalalab." + k,
  read(k, d) { try { const v = localStorage.getItem(KL.key(k)); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  write(k, v) { try { localStorage.setItem(KL.key(k), JSON.stringify(v)); } catch (e) {} },
  today(t = new Date()) { return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`; },
  // kind: "ex" (an exercise set checked), "words" (a quiz word found), "dict" (a dictation right), "speak" (a sentence said right), "write" (a text finished)
  log(kind, n = 1) {
    const t = KL.today();
    let day = KL.read("day", null);
    if (!day || day.date !== t) day = { date: t, ex: 0, words: 0, dict: 0, speak: 0, write: 0 };
    day[kind] = (day[kind] || 0) + n; KL.write("day", day);
    const tot = KL.read("totals", {}); tot[kind] = (tot[kind] || 0) + n; KL.write("totals", tot);
    const days = KL.read("days", []); if (!days.includes(t)) { days.push(t); KL.write("days", days.slice(-400)); }
    const s = KL.streak(); if (s > KL.read("bestStreak", 0)) KL.write("bestStreak", s);
  },
  todayCounts() { const d = KL.read("day", null); return d && d.date === KL.today() ? d : { ex: 0, words: 0, dict: 0, speak: 0, write: 0 }; },
  // consecutive days with some work, ending today (or yesterday if nothing yet today)
  streak() {
    const days = new Set(KL.read("days", [])); let n = 0; const d = new Date();
    if (!days.has(KL.today(d))) d.setDate(d.getDate() - 1);
    while (days.has(KL.today(d))) { n++; d.setDate(d.getDate() - 1); }
    return n;
  },
  // how to install KalaLab, for the device in hand (iPhone/iPad, Android, computer)
  installHow() {
    const ua = navigator.userAgent, ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    const how = ios ? "Sur iPhone ou iPad : ouvre ce site dans Safari, touche le bouton Partager, puis « Sur l'écran d'accueil »."
      : /Android/.test(ua) ? "Sur Android : ouvre ce site dans Chrome, touche ⋮ puis « Ajouter à l'écran d'accueil »."
      : "Sur ordinateur : dans Chrome ou Edge, clique sur l'icône d'installation au bout de la barre d'adresse.";
    return how + " KalaLab marche aussi sans internet.";
  },
  // the install button: it is always there. If the browser can install, it asks right away;
  // otherwise it shows the steps for this device (iPhone/iPad, Android, computer)
  setupInstall(btn, note) {
    let evt = null; const done = matchMedia("(display-mode: standalone)").matches || navigator.standalone;
    note.textContent = done ? "KalaLab est déjà installé sur cet appareil." : KL.installHow();
    btn.hidden = done;
    addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); evt = e; note.textContent = "Une icône KalaLab sur ton écran d'accueil. Elle s'ouvre en plein écran et marche aussi sans internet."; });
    addEventListener("appinstalled", () => { note.textContent = "C'est fait ! Cherche l'icône KalaLab sur ton écran d'accueil."; btn.hidden = true; });
    btn.addEventListener("click", async () => {
      if (evt) { evt.prompt(); await evt.userChoice; evt = null; return; }
      note.textContent = KL.installHow(); note.classList.remove("flash"); void note.offsetWidth; note.classList.add("flash");
    });
  },
  firstName() {
    const me = KL.read("me", null); if (me && me.first) return String(me.first).slice(0, 40);
    try { const m = JSON.parse(localStorage.getItem("mia.me") || "null"); if (m && m.first) return String(m.first).replace(/[<>&"'`\\]/g, "").slice(0, 40); } catch (e) {}
    return "";
  },
};
