if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.215a03e6.css",revision:"9066b152b266a0d3940aa292f432aa4f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/18.834a6059.js",revision:"407dc1af20bd2394ffb92a7efe9c5d9d"},{url:"assets/js/19.09ddcea6.js",revision:"efb55082f2dda54d96dd697334272f80"},{url:"assets/js/app.e6903b38.js",revision:"ccc6a71190b855b95d6b3d2404a71810"},{url:"assets/js/layout-Blog.be8ae81a.js",revision:"cbb78f2ea3003357f2a2bc6778745c14"},{url:"assets/js/layout-Layout.1998cff3.js",revision:"615af1cdfdb2892ed4c398bae9720f46"},{url:"assets/js/layout-NotFound.d937943a.js",revision:"8d185edde91003af7ef134fea8819980"},{url:"assets/js/layout-Slide.f80f02fe.js",revision:"af9f6e7d6daf4cd0646726bcf01b3847"},{url:"assets/js/page-CreatingyourfirstJsonDBclass.a0542fef.js",revision:"333da34c0a4e84cebcaa9c6891b8d4a5"},{url:"assets/js/page-CreatingyourfirstMongoDBclass.0ac07ba9.js",revision:"788a242c61abd50aab80df4e37d06e0a"},{url:"assets/js/page-GettingStarted.919eeaa9.js",revision:"7c34c20d7359a89f5717d347d2dde6d9"},{url:"assets/js/page-Home.3a5437d2.js",revision:"4ecef982c7858c724d603a12cc9b2c39"},{url:"assets/js/page-ImportingdatastoJsonDB.65826485.js",revision:"600ad9a79324130a83a839c7cd85ea7b"},{url:"assets/js/page-ImportingdatastoMongoDB.b59e2cfa.js",revision:"080032d44ec04ad8ca83372af12ffae3"},{url:"assets/js/page-InstallingNodejsandUp-DevsDB.2115729f.js",revision:"5021e57aa6985bbc9092f9aa90c04465"},{url:"assets/js/page-Welcome!.bec0ea52.js",revision:"aaa51f17e8caf912ef2cfc6f8fbd49a4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fee4a75c.js",revision:"f389f9834b63a1265d745b7854e2d063"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.955cc1eb.js",revision:"fdae14f628d11cb64bd2c920a02b10f3"},{url:"assets/js/vendors~layout-Layout.2a364318.js",revision:"47f7b7ba142aa004a2ee54449331e883"},{url:"assets/js/vendors~photo-swipe.29950414.js",revision:"c9526b4cb9077d20b6b29921718fb470"},{url:"404.html",revision:"c9921a17ce15debdd4189d6801a20d47"},{url:"guide/index.html",revision:"65e571f744a28d065dd1e84878f1600a"},{url:"guide/jsonDB/first/index.html",revision:"eca3a05f4d7afd3a834fae43bb8c395f"},{url:"guide/jsonDB/import/index.html",revision:"50ac4b92790435f624d3dab8c5aed4cd"},{url:"guide/jsonDB/start/index.html",revision:"24f0463ac9bfcb27e2d2a649868c8395"},{url:"guide/mongoDB/first/index.html",revision:"e4f8873a5f29721a39333436af5efcf0"},{url:"guide/mongoDB/import/index.html",revision:"1e127679b49c49e5f87b02b7b785c6b9"},{url:"guide/mongoDB/start/index.html",revision:"467f8d81f950b6e55e7f35a7f9697360"},{url:"guide/start/installation/index.html",revision:"0d16c70778822fa18b747a74de889454"},{url:"index.html",revision:"17d6f21ffd938b8cba32d2b85e741608"}],{}),e.cleanupOutdatedCaches()}));
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
