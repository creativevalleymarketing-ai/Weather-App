self.addEventListener('install', (event) => {
    event.waitUntil(caches.open('weather-cache-v1'));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});
