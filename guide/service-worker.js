if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.215a03e6.css",revision:"9066b152b266a0d3940aa292f432aa4f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/18.834a6059.js",revision:"407dc1af20bd2394ffb92a7efe9c5d9d"},{url:"assets/js/19.09ddcea6.js",revision:"efb55082f2dda54d96dd697334272f80"},{url:"assets/js/app.0e0326a8.js",revision:"b180c46b4054cf938bb7694f05e28b0e"},{url:"assets/js/layout-Blog.be8ae81a.js",revision:"cbb78f2ea3003357f2a2bc6778745c14"},{url:"assets/js/layout-Layout.1998cff3.js",revision:"615af1cdfdb2892ed4c398bae9720f46"},{url:"assets/js/layout-NotFound.d937943a.js",revision:"8d185edde91003af7ef134fea8819980"},{url:"assets/js/layout-Slide.f80f02fe.js",revision:"af9f6e7d6daf4cd0646726bcf01b3847"},{url:"assets/js/page-CreatingyourfirstJsonDBclass.42cd3c54.js",revision:"41d495a2769e1268456a5304d09b96d1"},{url:"assets/js/page-CreatingyourfirstMongoDBclass.25d625c9.js",revision:"d189468e25563d20d45a1bb9ca71bba0"},{url:"assets/js/page-GettingStarted.73a384ac.js",revision:"16168289d3fb9f2be6476387b7201cd6"},{url:"assets/js/page-Home.3a5437d2.js",revision:"4ecef982c7858c724d603a12cc9b2c39"},{url:"assets/js/page-ImportingdatastoJsonDB.6b627c3e.js",revision:"68d70bc53fb296a4dad634474be3f905"},{url:"assets/js/page-ImportingdatastoMongoDB.ab9b9ad9.js",revision:"ee320c6b76aa94931d3c60f0ab63ffd0"},{url:"assets/js/page-InstallingNodejsandUp-DevsDB.2115729f.js",revision:"5021e57aa6985bbc9092f9aa90c04465"},{url:"assets/js/page-Welcome!.bec0ea52.js",revision:"aaa51f17e8caf912ef2cfc6f8fbd49a4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fee4a75c.js",revision:"f389f9834b63a1265d745b7854e2d063"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.955cc1eb.js",revision:"fdae14f628d11cb64bd2c920a02b10f3"},{url:"assets/js/vendors~layout-Layout.2a364318.js",revision:"47f7b7ba142aa004a2ee54449331e883"},{url:"assets/js/vendors~photo-swipe.29950414.js",revision:"c9526b4cb9077d20b6b29921718fb470"},{url:"404.html",revision:"3107282a81881e8c6fd75cc8083c4c11"},{url:"guide/index.html",revision:"6ad1e158929aee7ea498fce2fd3b8610"},{url:"guide/jsonDB/first/index.html",revision:"4b3db1848e2d9f5a62103dd70cda0750"},{url:"guide/jsonDB/import/index.html",revision:"55c56ba8eabeb4fbaf878d6f5090f27a"},{url:"guide/jsonDB/index.html",revision:"8f7795aac6634a30c4bbd37420d65094"},{url:"guide/mongoDB/first/index.html",revision:"aa7c735177f435b3ce8a34204020160d"},{url:"guide/mongoDB/import/index.html",revision:"a8375a9c7761e0c6923298c0aa7832c3"},{url:"guide/mongoDB/index.html",revision:"418726659d0209f99de976dca51ee583"},{url:"guide/start/installation/index.html",revision:"7ff6df1b7d308e0ca90d28751fc65203"},{url:"index.html",revision:"83de2d21bf98bc02feb2ae3e026959bc"}],{}),e.cleanupOutdatedCaches()}));
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
