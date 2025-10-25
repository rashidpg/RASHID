self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('rashid-cache').then(cache => {
      return cache.addAll(['/', '/index.html', '/style.css', '/ai.js', '/about.html']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

