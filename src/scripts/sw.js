self.addEventListener('install', (event) => {
  console.log('Installing Service Worker....')

  // Caching App Shell Resource
})

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker...')

  // DELETE OLD CAHCE
})

self.addEventListener('fetch', (event) => {
  // console.log(event.request)

  event.respondWith(fetch(event.request))
})