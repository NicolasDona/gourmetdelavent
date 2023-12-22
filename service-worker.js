// service-worker.js

const CACHE_NAME = 'my-cache';
const baseDir = './public/assets/img/img_big/';
const baseDir1 = './public/assets/img/thumb/';
const urlsToCache = [
  '/',
  './index.html',
  './public/assets/img/case-01.jpg',
  './public/assets/img/case-02.jpg',
  './public/assets/img/case-03.jpg',
  './public/assets/img/case-04.jpg',
  './public/assets/img/case-05.jpg',
  './public/assets/img/case-06.jpg',
  './public/assets/img/case-07.jpg',
  './public/assets/img/case-08.jpg',
  './public/assets/img/case-09.jpg',
  './public/assets/img/case-10.jpg',
  './public/assets/img/case-11.jpg',
  './public/assets/img/case-12.jpg',
  './public/assets/img/case-13.jpg',
  './public/assets/img/case-14.jpg',
  './public/assets/img/case-15.jpg',
  './public/assets/img/case-16.jpg',
  './public/assets/img/case-17.jpg',
  './public/assets/img/case-18.jpg',
  './public/assets/img/case-19.jpg',
  './public/assets/img/case-20.jpg',
  './public/assets/img/case-21.jpg',
  './public/assets/img/case-22.jpg',
  './public/assets/img/case-23.jpg',
  './public/assets/img/case-24.jpg',

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
