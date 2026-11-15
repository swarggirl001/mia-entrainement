// Offline copy of the English course. Bump CACHE when lessons.js or index.html change.
const CACHE = "anglais-v2";
const FILES = ["./", "lessons.js", "../manifest.webmanifest", "../icons/kalalab-192.png", "../icons/kalalab-apple-touch.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith("anglais-") && k !== CACHE).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Newest version when online, the saved copy when offline.
self.addEventListener("fetch", (e) => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  const key = req.mode === "navigate" ? "./" : req;
  e.respondWith(fetch(req).then((r) => {
    if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(key, copy)); }
    return r;
  }).catch(() => caches.match(key)));
});
