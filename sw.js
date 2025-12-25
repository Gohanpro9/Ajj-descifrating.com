const CACHE_NAME = "v0.5"

self.addEventListener("install", e => {
  self.skipWaiting()
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      cache.addAll([
        "./",
        "./index.html",
        "./App.js",
        "./sw.js",
        "./icon.png"
      ])
    )
  )
})

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  )
})
