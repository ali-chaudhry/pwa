const App = {
  serviceWorker: null,
  init() {
    if ("serviceWorker" in navigator) {
      //1. Register Service Worker
      navigator.serviceWorker
        .register("serviceWorker.js", { scope: "/" })
        .then((registration) => {
          App.serviceWorker =
            registration.installing ||
            registration.waiting ||
            registration.active;
          console.log(`Service Worker is registered.`);
        });

      // 2. See the page has service worker
      if (navigator.serviceWorker.controller) {
        console.log("Server worker found.");
      }

      // 3. Handle a new service worker registered
      navigator.serviceWorker.oncontrollerchange = (ev) => {
        console.log("New service worker activated.");
      };

      // 4. Unregister service workers
      // navigator.serviceWorker.getRegistrations().then(regs => {
      //   for (const reg of regs) 
      //   {
      //     reg.unregister().then(isUnReg => console.log(`Service Worker unregistered ${isUnReg ? "successfully" : "failed"}.`));
      //   }
      // });

      // 5. Listen service workers
    } else {
      console.error("Service Worker is not supported.");
    }
  },
};

document.addEventListener("DOMContentLoaded", App.init);
