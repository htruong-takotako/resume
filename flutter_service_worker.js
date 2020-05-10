'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "927d49c54799198393befb6d922e2a44",
"/": "927d49c54799198393befb6d922e2a44",
"main.dart.js": "0d4b439d3362939facedfc92777a1b7f",
"favicon.png": "fcdb3e05d4a0d31608822b2d7efc16c7",
"icons/android-icon-192x192.png": "fbde33289bd8c01c56eebd6b82bb32d8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66dafb802c2a7e88a2233f4f5e5a6bb3",
"assets/LICENSE": "a6a11effa5e1ea7c86c7c2215ee786e5",
"assets/AssetManifest.json": "6e24a67d0866e08f19f43cafeb90e9eb",
"assets/FontManifest.json": "c5f8dd490279eb304bd660b7f9d179f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/manrope/static/Manrope-Regular.ttf": "4483dc803501b1c0fe5335a9143e710e",
"assets/fonts/roboto/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/fonts/lexend/LexendDeca-Regular.ttf": "d90b3bff9221bde91893bbc7a5083756",
"assets/fonts/opensans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/hieu_truong.jpg": "86f2397db02ab32889f987624f43d39c",
"assets/assets/website2.png": "4131e6629f4ea78f0c8b4dba3e24a585",
"assets/assets/devops2.png": "a0e32e9b5d60a5b927bf1b8bb6dee934",
"assets/assets/devops3.png": "9cc4b43ec36159f39bf9d59909c85b6e",
"assets/assets/website.png": "3e55426bc3ca23b2bac4a08816665647",
"assets/assets/autofabric.jpg": "59f2b961b8249ebc635085cdc0a0bcd5",
"assets/assets/Large-Triangles.svg": "7ec56c81ebe887de178f8dbc357cd749",
"assets/assets/hieuhieu.jpg": "dad672860f487e898ad8d20f77086f3e",
"assets/assets/tako_trial.flr": "a2407f55b161b6e5237a0b23052b2c95",
"assets/assets/ezgif.com-crop.gif": "279257eadbd4eeb1c4800c28209a9b54",
"assets/assets/devops.png": "132e89ca1d39417083058e5ce7bd5eef",
"assets/assets/hieu.jpg": "6998fb28bc0f4bd4274bc1de048bddeb",
"assets/assets/HTR.flr": "a23ed386bd5a13d320928d49fbaf42c0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
