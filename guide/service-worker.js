if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,r,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-282d8a9c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.215a03e6.css",revision:"9066b152b266a0d3940aa292f432aa4f"},{url:"assets/img/danger-dark.7b1d6aa1.svg",revision:"7b1d6aa1bdcf013d0edfe316ab770f8e"},{url:"assets/img/danger.b143eda2.svg",revision:"b143eda243548a9982491dca4c81eed5"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.f8a43cf6.svg",revision:"f8a43cf67fa96a27a078530a3a43253c"},{url:"assets/img/info.88826912.svg",revision:"88826912d81d91c9e2d03164cd1481a1"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.075a244c.svg",revision:"075a244c83d1403c167defe81b4d7fe7"},{url:"assets/img/tip.a2b80aa5.svg",revision:"a2b80aa50b769a26da12fe352322a657"},{url:"assets/img/warning-dark.aac7e30c.svg",revision:"aac7e30c5fafc6748e21f7a9ef546698"},{url:"assets/img/warning.ec428b6d.svg",revision:"ec428b6d6d45ac5d0c610f08d757f40f"},{url:"assets/js/14.bdd01900.js",revision:"acdf131fe492d6d2d9969808fbd3c968"},{url:"assets/js/15.c5639440.js",revision:"301a335800fada05544899df7a6bda63"},{url:"assets/js/app.048dcdfa.js",revision:"422c4307a2acae48eb462c6640ac02e3"},{url:"assets/js/layout-Blog.be8ae81a.js",revision:"cbb78f2ea3003357f2a2bc6778745c14"},{url:"assets/js/layout-Layout.1998cff3.js",revision:"615af1cdfdb2892ed4c398bae9720f46"},{url:"assets/js/layout-NotFound.d937943a.js",revision:"8d185edde91003af7ef134fea8819980"},{url:"assets/js/layout-Slide.f80f02fe.js",revision:"af9f6e7d6daf4cd0646726bcf01b3847"},{url:"assets/js/page-GettingStarted.909daa13.js",revision:"5d59b7c2aa16c3232d1f65beb5ce9bd1"},{url:"assets/js/page-Home.efa26f6f.js",revision:"2ee143654445f4125e1eb9910992b22c"},{url:"assets/js/page-InstallingNodejsandUp-DevsDB.12fbfc4d.js",revision:"482327895331d6f6a730657a52e54b89"},{url:"assets/js/page-Welcome!.915c46a6.js",revision:"8b8b32d3eeb1e8c64a9025c49b6bab82"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.fee4a75c.js",revision:"f389f9834b63a1265d745b7854e2d063"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.955cc1eb.js",revision:"fdae14f628d11cb64bd2c920a02b10f3"},{url:"assets/js/vendors~layout-Layout.eaae2369.js",revision:"1de29989c43f39d42261667643f35a86"},{url:"assets/js/vendors~photo-swipe.f334e358.js",revision:"b66fd2c36ef9c0d5489be612e300096b"},{url:"404.html",revision:"d852ef25275f522af388c1b53ab07d78"},{url:"guide/index.html",revision:"86229a3dcee658ecfd714dc8ab98a593"},{url:"guide/mongoDB/start/index.html",revision:"813cf3bf4f2be911cd94433397588c39"},{url:"guide/start/installation/index.html",revision:"c80ca2c1ceb7d154db2654ab460f03ad"},{url:"index.html",revision:"f13d384001ec1ba43c732f63ce99ff74"}],{}),e.cleanupOutdatedCaches()}));
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
