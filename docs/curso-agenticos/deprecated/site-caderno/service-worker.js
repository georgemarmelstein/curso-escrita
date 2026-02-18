/**
 * Service Worker - Caderno de Sistemas Agenticos
 * Provides offline functionality and caching
 */

const CACHE_NAME = 'agentes-caderno-v1';
const OFFLINE_URL = 'index.html';

// Assets to cache on install
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './css/caderno.css',
  './manifest.json'
];

// Install event - precache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Precaching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[SW] Skip waiting');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[SW] Precache failed:', error);
      })
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => {
      console.log('[SW] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Update cache with fresh response
            if (networkResponse.ok) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            // Network failed, return cached or offline page
            return cachedResponse || caches.match(OFFLINE_URL);
          });

        // Return cached response immediately, update in background
        return cachedResponse || fetchPromise;
      });
    })
  );
});
