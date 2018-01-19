const CACHE_NAME = 'kawaiifx-cache'
const urlsToCache = [
  'index.js',
  '../styles/index.css',
  '..//img/logo.png',
  '../img/mayuri.png'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response

      const fetchRequest = event.request.clone()
      return fetch(fetchRequest).then((response) => {
        if (
          !response ||
          response.status !== 200 ||
          response.type !== 'basic'
        ) {
          return response
        }

        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then((cache) => {
          caches.put(event.request, responseToCache)
        })

        return response
      })
    })
  )
})
