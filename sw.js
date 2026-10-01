const PREFIX = 'guitar-trained-trial-';
const CACHE = PREFIX + 'DPcbnI7G';
const BASE = new URL('./', self.location.href);
const START = new URL('index.html', BASE).href;
function cacheWarning(error) {
  console.warn('Trial offline cache unavailable; online listening remains available:', error);
}
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll([BASE.href, START, new URL('manifest.json', BASE).href])).catch(cacheWarning));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE)
    .map(key => caches.delete(key)))).catch(cacheWarning).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== BASE.origin || !url.pathname.startsWith(BASE.pathname)) return;
  event.respondWith((async () => {
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, copy)).catch(cacheWarning));
      }
      return response;
    } catch (error) {
      let saved;
      try {
        const cache = await caches.open(CACHE);
        saved = await cache.match(event.request) || (event.request.mode === 'navigate' ? await cache.match(START) : undefined);
      } catch (cacheError) { cacheWarning(cacheError); }
      if (saved) return saved;
      console.warn('Trial resource unavailable offline:', url.pathname, error);
      return new Response('This trial resource is unavailable offline. Reconnect and retry.', { status: 503, headers: { 'Content-Type': 'text/plain' } });
    }
  })());
});
