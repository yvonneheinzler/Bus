const CACHE='bus-v8-abfahrt';
const CORE=['./','./index.html','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener('fetch',e=>{if(e.request.url.includes('maps.apple.com'))return;e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)))});
