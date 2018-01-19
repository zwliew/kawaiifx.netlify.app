const CACHE_NAME = 'kawaiiFX'

self.addEventListener('install', event => {
  event.waitUntil(async function() {
    const cache = await caches.open(CACHE_NAME)
    await cache.addAll([
      'index.html',
      'manifest.json',
      'scripts/index.js',
      'styles/index.css',
      'images/icon.png',
      'images/mayuri.png',
      'sounds/tuturu.mp3'
    ])
  }())
})

self.addEventListener('activate', event => {
  event.waitUntil(async function() {
    const cacheNames = await caches.keys()
    cacheNames.map(cacheName => {
      if (cacheName !== CACHE_NAME) return caches.delete(cacheName)
    })
  }())
})

self.addEventListener('fetch', event => {
  event.respondWith(async function() {
    const response = await caches.match(event.request)
    return response || fetch(event.request)
  }())
})
