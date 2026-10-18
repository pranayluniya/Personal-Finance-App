const CACHE_NAME = "money-passbook-v1792326883";
const ASSETS = ["./", "./index.html", "./bundle.js", "./manifest.json", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  e.respondWith(fetch(e.request).then((res) => { const clone = res.clone(); caches.open(CACHE_NAME).then((c) => c.put(e.request, clone)); return res; })
    .catch(() => caches.match(e.request).then((cached) => cached || caches.match("./index.html"))));
});
