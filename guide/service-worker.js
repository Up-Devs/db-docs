if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.215a03e6.css",revision:"9066b152b266a0d3940aa292f432aa4f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/16.0bb5b1e5.js",revision:"a4c5b33a1a198d36d3b044a4dadeded7"},{url:"assets/js/17.efd30d2f.js",revision:"49b43662f23eed33799b94811ffc45a7"},{url:"assets/js/app.3c684109.js",revision:"67f6f7b2132b837a46ca645b794dcb85"},{url:"assets/js/layout-Blog.be8ae81a.js",revision:"cbb78f2ea3003357f2a2bc6778745c14"},{url:"assets/js/layout-Layout.1998cff3.js",revision:"615af1cdfdb2892ed4c398bae9720f46"},{url:"assets/js/layout-NotFound.d937943a.js",revision:"8d185edde91003af7ef134fea8819980"},{url:"assets/js/layout-Slide.f80f02fe.js",revision:"af9f6e7d6daf4cd0646726bcf01b3847"},{url:"assets/js/page-CreatingyourfirstJsonDBclass.6b775775.js",revision:"c266645d86cfab4b190cd8485510d29a"},{url:"assets/js/page-CreatingyourfirstMongoDBclass.6ed6418d.js",revision:"64d32875b8339cfd29ccedc5341de9b3"},{url:"assets/js/page-GettingStarted.3bef0769.js",revision:"b67d29fe530eb4a2e1ae4a259004c827"},{url:"assets/js/page-Home.3a5437d2.js",revision:"4ecef982c7858c724d603a12cc9b2c39"},{url:"assets/js/page-InstallingNodejsandUp-DevsDB.0ef30339.js",revision:"b5cac2406f15f1c3dcfcacb34549d5ee"},{url:"assets/js/page-Welcome!.d934d5da.js",revision:"56d9aed699c30fe4e87c2c87e710c53c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fee4a75c.js",revision:"f389f9834b63a1265d745b7854e2d063"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.955cc1eb.js",revision:"fdae14f628d11cb64bd2c920a02b10f3"},{url:"assets/js/vendors~layout-Layout.8b4c64e1.js",revision:"1ae987997668799b6e39f0490a07d009"},{url:"assets/js/vendors~photo-swipe.0dce0e82.js",revision:"39008be69ff7a03cbc6acb3ed6da0762"},{url:"404.html",revision:"ead927ac08beb64a0fda08b799053cd9"},{url:"guide/index.html",revision:"63afab4c38460a0b510fa98aff79bdbb"},{url:"guide/jsonDB/first/index.html",revision:"df24ba94056efdaacba0d6fc9003a7d8"},{url:"guide/jsonDB/start/index.html",revision:"fff66f7480a10cc2e284ad7b5c926bbf"},{url:"guide/mongoDB/first/index.html",revision:"07e9665ce1d536c1d9b8e8bc19504e75"},{url:"guide/mongoDB/start/index.html",revision:"c5fc0a84b932620fa4d75b079d5d0452"},{url:"guide/start/installation/index.html",revision:"c7102b009ba731a9590195ac56e1540b"},{url:"index.html",revision:"1708eeb59b68bc0bd751b7d6b647ad0f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
