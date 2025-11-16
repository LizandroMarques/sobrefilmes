// Nome do cache
const CACHE_NAME = "sobrefilmes-cache-v1";

// Lista de arquivos para cache inicial (pré-cache)
const URLS_TO_CACHE = ["/", "/index.html", "/manifest.json"];

// Instalação do service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Ativação (remove caches antigos)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cache) => cache !== CACHE_NAME)
            .map((cache) => caches.delete(cache))
        )
      )
  );
});

// Intercepta requisições e serve do cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).catch(() => {
          // fallback opcional
          return cached;
        })
      );
    })
  );
});
