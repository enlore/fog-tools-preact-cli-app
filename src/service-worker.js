// self
//   .addEventListener('install' || 'activate' || 'fetch' || )
//   .clients
//      .claim()
//
// const files = Array<string>(filePathsToCache)
//
// caches
//   .match(request)
//  .delete(key)
//  .keys()
//  .open(cacheName).then(cache)
//
//  cache.addAll(files)
//
// fetch()
//
// ev.respondWith()
// ev.waitUntil()
//
//
//////////// in app.js
//
// if ('caches' in window) { ... }
//
//  if ('serviceWorker' in navigator) {
//    navigator.serviceWorker
//             .register('./service-worker.js')
//             .then(function() { console.log('Service Worker Registered'); });
//  }
