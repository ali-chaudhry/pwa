// My first service worker
self.addEventListener('install', (ev) => {
    console.log('Server worker installed.');
});

self.addEventListener('activate', (ev) => {
    console.log('Server worker activated.');
})

self.addEventListener('fetch', (ev) => {
    console.log('Intercepted Http request', ev.request);
})

self.addEventListener('message', (ev) => {
// message from webpage
})