if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise((async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]}))},e=(e,a)=>{Promise.all(e.map(s)).then((s=>a(1===s.length?s[0]:s)))},a={require:Promise.resolve(e)};self.define=(e,n,i)=>{a[e]||(a[e]=Promise.resolve().then((()=>{let a={};const t={uri:location.origin+e.slice(1)};return Promise.all(n.map((e=>{switch(e){case"exports":return a;case"module":return t;default:return s(e)}}))).then((s=>{const e=i(...s);return a.default||(a.default=e),a}))})))}}define("./sw.js",["./workbox-e604aefe"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/chunks/1006.ff6bbd4ace3bf6f6dced.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2011.1ff864f144e5ccf11d46.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2058.6ed7804e6c719302b9c0.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2117.e56b4b1048fa0021f2ac.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2185.3d4c6895970ea577a555.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2516.51c53f0d4e3cb2a7ea1f.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2582.e67c2dec12bec0207de1.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2865.cd5b4ff60bab7ec71433.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2877.b1dea09ad472e34a0a1e.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2880.02bd0611021ba93a4440.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/2932.8286ea9a85bfbf3bbdfd.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3046.151e823903e341dff66f.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3196.060c7f79856b6a8c1b08.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3479.69b122badf01cff53675.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/34fce5f1.9b810ed8322ac1da5bbb.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3562.d9cab29126f89a9e90be.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3731.d3c499e4700aef720145.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3806.3d0c5c89ccddef9d4b18.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3954.31082b2833eef7f02322.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/3965.5ba1888409bffb06b66a.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/4208.9f8e8c7bfdb3a4ce93b8.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/4288.e4fbe6ae9119f9866df9.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/4543.ed049a6ccefb93b3ee97.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/4617.54fcca96f31bf89bd725.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/4774.90040897eb18b82f04a2.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/4905.3f7befec6466664dc420.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/5051.af30a9f37f1b87736d87.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/5095.3f486bd621eec6fb65a2.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/5999.d876596f5605615a10a7.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/6048.099d66dab78a1a119ffe.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/6074.8e8df9abc908e9971efd.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/6270.5850f917e403abbce46f.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/6400.6506975a6dc07974ae88.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/6560.6d07abdd45b83f6f9cbd.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/6608.75fb8c580f58698253c7.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/7419.7138adebe89008e2920f.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/7421.8e3d95f68fa1845ce5b2.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/7478.0546a0dbbee91015c90c.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/7733.5827a643915d1ed8384a.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/7896.b449157bfb2d7f271aeb.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/8014.e03f993b8ab6de2d1bf6.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/8290.bda67f1460f47f61329f.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/8451.f3768c25a0b8702d31e5.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/8493.560651dbe89d91e1ecb4.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/8550.18b646104fa9d7a2d190.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9097.1b5e37f4d4b65d135af8.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9112.f19ff11712836363df92.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9125.d1614899ab9dcf45fe64.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9169.abfeff39ea6c82eaef83.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9389.9509fbd8ae47ba9b7309.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9440.b725bc813c4bdf2b67a3.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9480.f7cc456cd5db6b9d08c7.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/964.84234a03d74d44a65ffe.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9740.123709c9ee39e7405ff1.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/9936.33acfbebf3bb86f6340c.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/framework-9260c7ce6eb8840e551e.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/main-d9876271ff0bbd7b45ca.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/pages/%5B...all%5D-a9fdbcb75db2b529f920.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/pages/_app-05502ec707ff4aa58e1f.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/pages/_error-03b271b409748e0f7dc7.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/pages/index-768e667f4046955bebe3.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/polyfills-381dbb3c33243b4920e6.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/chunks/webpack-01c9d6566569fcf8bd93.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/ghsyNsaSZK9q9lUy_Z5Da/_buildManifest.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/_next/static/ghsyNsaSZK9q9lUy_Z5Da/_ssgManifest.js",revision:"ghsyNsaSZK9q9lUy_Z5Da"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-128x128.png",revision:"d626cfe7c65e6e5403bcbb9d13aa5053"},{url:"/icons/icon-144x144.png",revision:"e53a506b62999dc7a4f8b7222f8c5add"},{url:"/icons/icon-152x152.png",revision:"18b3958440703a9ecd3c246a0f3f7c72"},{url:"/icons/icon-16x16.png",revision:"83703514f19796ee15151e450984416d"},{url:"/icons/icon-192x192.png",revision:"27dc12f66697a47b6a8b3ee25ba96257"},{url:"/icons/icon-32x32.png",revision:"25e2c6ee34840568012b32e4314278df"},{url:"/icons/icon-384x384.png",revision:"a40324a3fde2b0b26eeffd4f08bf8be8"},{url:"/icons/icon-512x512.png",revision:"93d6e8e15cfa78dfee55446f607d9a28"},{url:"/icons/icon-72x72.png",revision:"f2ffc41b3482888f3ae614e0dd2f6980"},{url:"/icons/icon-96x96.png",revision:"fba02a40f7ba6fc65be8a2f245480f6d"},{url:"/img/max.jpg",revision:"45fe580cd4fad5db01671ce43811190d"},{url:"/manifest.json",revision:"475d1dd9357a294213a78a1bb8420e0d"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:a,state:n})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new s.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:mp3|mp4)$/i,new s.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;const e=s.pathname;return!e.startsWith("/api/auth/")&&!!e.startsWith("/api/")}),new s.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
