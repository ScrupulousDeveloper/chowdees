self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/dome.modules/@beautify/app.css",
        "/dome.modules/@beautify/butler.css",
        "/dome.modules/@beautify/ispinner.css",
        "/dome.modules/@beautify/modal.css",
        "/dome.modules/@beautify/refresh.css",
        "/dome.modules/@beautify/spinner.css",
        "/dome.modules/@beautify/transition.css",
        "/dome.modules/@dome/balance.dome.js",
        "/dome.modules/@dome/dashboard.dome.js",
        "/dome.modules/@dome/demo.dome.js",
        "/dome.modules/@dome/history.dome.js",
        "/dome.modules/@dome/order.dome.js",
        "/dome.modules/@dome/profile.dome.js",
        "/dome.modules/@dome/pwa.dome.js",
        "/dome.modules/@dome/transactions.js",
        "/dome.modules/@dome/verify.dome.js",
        "/dome.modules/@mobile-detect/mobile-detect.min.js",
        "/dome.modules/@tailwind/tailwind.css",
        "/dome.modules/@typefaces/SF-Pro-Text-Medium.woff",
        "/dome.modules/@typefaces/SF-Pro-Text-Regular.woff",
        "/dome.routes/dashboard.html",
        "/dome.routes/profile.html",
        "/dome.routes/transactions.html",
        "/dome.routes/used.html",
        "/dome.routes/verify.html",
        "/dome.routes/@nested/dashboard-route.html",
        "/dome.routes/@nested/transactions-route.html",
        "https://scrupulousdeveloper.github.io/chowdees/dome.content/@images/feeding.png",
        "https://scrupulousdeveloper.github.io/chowdees/dome.content/@images/user.png",
        "/dome.content/@vectors/arrow.svg",
        "/dome.content/@vectors/back.svg",
        "/dome.content/@vectors/cafe.svg",
        "/dome.content/@vectors/cancel.svg",
        "/dome.content/@vectors/dashboard-active.svg",
        "/dome.content/@vectors/dashboard.svg",
        "/dome.content/@vectors/edit.svg",
        "/dome.content/@vectors/eraser.svg",
        "/dome.content/@vectors/inbox-active.svg",
        "/dome.content/@vectors/inbox.svg",
        "/dome.content/@vectors/profile-active.svg",
        "/dome.content/@vectors/profile.svg",
        "/dome.content/@vectors/qr.svg",
        "/dome.content/@vectors/receipt.svg",
        "/dome.content/@vectors/splash.svg",
        "/dome.content/@vectors/success.svg",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached response if it's available, otherwise fetch from network
      return response || fetch(event.request);
    })
  );
});
