// Service Worker: makes the app work offline. Own files: network first (so updates arrive), cache as fallback.
const CACHE = 'fitter-dev-v1';
const ASSETS = ['./', './index.html', './style.css', './app.js', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const store = res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; };
  if (url.origin === location.origin) {
    e.respondWith(fetch(e.request).then(store).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
  } else if (url.hostname.endsWith('googleapis.com') || url.hostname.endsWith('gstatic.com')) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(store)));
  }
});
