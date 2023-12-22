// service-worker.js

const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  './index.html',
//ajouter ici tout les fichiers qui seront téléchargé pour une utilisation offline (ex:css,js,bootstrap etc...)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
