import{s as t,r as e,c as s,a as n,u as o,d as r,o as a,b as l,e as i,t as c,f as d,g as u,w as h,h as p,i as m,j as g,k as f,l as v,m as b,n as w,p as x,q as y,v as k,x as _,y as M,z as S,F as j,A as R,T as C,B as D,C as A,D as T,E as O,G as $,H as z,V as E}from"./vendor.79db57bd.js";const L=t=>{if(!t.ok)throw new Error("Failed to fetch docs data file from GitHub");return t.json()};const P=new Set(["gh-pages","web","docs"]);var U=new class{constructor(t){var e,s,n,o,r;this.options=t,this.id=this.options.id,this.name=this.options.name,this.global=this.options.global,this.repo=this.options.repo,this.defaultTag=null!=(e=this.options.defaultTag)?e:"main",this.defaultFile=null!=(s=this.options.defaultFile)?s:{category:"general",id:"welcome"},this.source=null!=(n=this.options.source)?n:`https://github.com/${this.repo}/blob/`,this.branchFilter=null!=(o=this.options.branchFilter)?o:t=>"main"!==t,this.tagFilter=null!=(r=this.options.tagFilter)?r:()=>!0,this.tags=null,this.recentTag=null}fetchTags(){return this.tags?Promise.resolve(this.tags):Promise.all([fetch(`https://api.github.com/repos/${this.repo}/branches`).then(L),fetch(`https://api.github.com/repos/${this.repo}/tags`).then(L)]).catch((t=>{if(localStorage[`source-${this.id}`]){console.error(t);const e=JSON.parse(localStorage[`source-${this.id}`]);return[e.branches,e.tags]}throw t})).then((e=>{const[s,n]=e;this.tags=[this.defaultTag],localStorage[`source-${this.id}`]=JSON.stringify({branches:s,tags:n});for(const t of s)t.name!==this.defaultTag&&this.branchFilter(t.name)&&this.tags.push(t.name);const o={};for(const r of n)if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`,s=t.patch(r.name);if(s<o[e])continue;o[e]=s}for(const r of n)if(r.name!==this.defaultTag&&this.tagFilter(r.name)){if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`;if(t.patch(r.name)<o[e])continue}this.tags.push(r.name)}return this.tags}))}async fetchDocs(t){const e=await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${t}.json`);return L(e)}}({id:"main",name:"Main library",global:"upDB",repo:"Up-Devs/up-devs.db",defaultTag:"main",branchFilter:t=>!P.has(t)&&!t.startsWith("dependabot"),tagFilter:e=>t.gte(e,"9.0.0")});const N=e(!1);class B{constructor(t,e){this.name=t.toLowerCase(),this.related=new Set([e])}addRelated(t){this.related.add(t)}matches(t){return t.includes(this.name)}}var W,G;(G=W||(W={}))[G.Class=0]="Class",G[G.Method=1]="Method",G[G.Property=2]="Property",G[G.Events=3]="Events",G[G.Typedefs=4]="Typedefs";class I{constructor(t,e,s,n,o,r){switch(this.name=t,this.type=e,this.parentName=s,this.parentType=n,this.access=o,this.scope=r,e){case 0:case 4:this.computedName=t;break;case 1:this.computedName=`${null!=s?s:""}.${t}()`;break;case 2:this.computedName=`${null!=s?s:""}.${t}`;break;case 3:this.computedName=`${null!=s?s:""}#${t}`}this.nameLowerCase=t.toLowerCase(),this.cleanedComputedName=this.computedName.replace(/[().#]/,"").toLowerCase()}get isPriority(){return 0===this.type||4===this.type}getLinkPath(){var t,e;if(4===this.type||4===this.parentType)return{name:"docs-source-tag-typedef-typedef",params:{typedef:null!=(t=this.parentName)?t:this.name}};const s={name:"docs-source-tag-class-class",params:{class:null!=(e=this.parentName)?e:this.name}};return 1!==this.type&&2!==this.type||(s.query={scrollTo:this.name}),3===this.type&&(s.query={scrollTo:`e-${this.name}`}),s}}const J=s((()=>q.state.searchIndex)),F=s((()=>q.state.searchRef));function H(t){const e=t.replace(/[\s().#]/g,"").toLowerCase();if(""===e)return[];let s=J.value.reduce(((t,s)=>{if(e.includes(s.name))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map);0===s.size&&e.length<10&&(s=J.value.reduce(((t,s)=>{if(s.name.includes(e))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map));return Array.from(s.entries()).map((([t,e])=>[F.value[t],e])).filter((([t])=>"private"!==t.access||N.value)).sort((([t,s],[n,o])=>{let r=0;return t.nameLowerCase===e?r+=t.isPriority?-10:-4:n.nameLowerCase===e&&(r+=n.isPriority?10:4),e.length>=7&&(t.cleanedComputedName.includes(e)&&(r-=30),n.cleanedComputedName.includes(e)&&(r+=30)),s.numMatches===o.numMatches&&(t.isPriority&&(r-=6),n.isPriority&&(r+=6),s.numMatches>1&&(r+=Math.abs(e.length-t.computedName.length)-Math.abs(e.length-n.computedName.length)),r+=o.lengthMatches-s.lengthMatches),o.numMatches-s.numMatches+r})).map((([t,e])=>t))}const V=e(null),Y=Symbol("docs"),q=n({state:{sources:[{source:U,name:U.name,id:U.id}],source:U,tag:U.defaultTag,docs:null,branches:[],file:null,stats:{downloads:`${225e6.toLocaleString()}+`,stars:`${11e3.toLocaleString()}+`,contributors:`${100..toLocaleString()}+`},searchIndex:[],searchRef:[]},mutations:{setSource(t,{source:e}){t.source=e},setTag(t,{tag:e}){t.tag=e},setDocs(t,{docs:e}){t.docs=e},setBranches(t,{branches:e}){t.branches=e},setFile(t,{file:e}){t.file=e},setStats(t,{stats:e}){t.stats=e},setSearchIndex(t,{searchIndex:e,searchRef:s}){t.searchIndex=e,t.searchRef=s}},actions:{fetchStats:async({commit:t})=>{let e=0,s=0,n=0;const o=t=>t.json(),r=()=>{},[a,l,i]=await Promise.all([fetch("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/up-devs.db").then(o,r),fetch("https://api.github.com/repos/Up-Devs/up-devs.db").then(o,r),fetch("https://api.github.com/repos/Up-Devs/up-devs.db/stats/contributors").then(o,r)]);if(a){e=0;for(const t of a.downloads)e+=t.downloads}l&&(s=l.stargazers_count),i&&(n=i.length),t({type:"setStats",stats:{downloads:`${e.toLocaleString()}+`,stars:`${s.toLocaleString()}+`,contributors:`${n.toLocaleString()}+`}})},fetchDocs:async({commit:t},{inputSource:e,inputTag:s=e.defaultTag})=>{var n,o,r,a;let l;try{l=await e.fetchDocs(s)}catch(h){return t({type:"setDocs",docs:null}),t({type:"setTag",docs:null}),void(V.value=h)}const i=[],c=[];let d=0;const u=(t,e,s,n,o,r)=>{const a=function(t){var e,s;return/^[_A-Z]+$/.test(t)?null!=(e=t.match(/[A-Z]+/g))?e:[]:null!=(s=t.match(/(([A-Z]{2,})(?=[A-Z]))|[A-Z][a-z]+|[a-z]+/g))?s:[]}(t),l=new I(t,e,s,n,o,r);i.push(l);const u=[];for(const i of a){const t=i.toLowerCase();let e=c.findIndex((e=>e.name===t));e>-1?c[e].addRelated(d):e=c.push(new B(t,d))-1,u.push(e)}return d+=1,u};for(const p of l.classes){const t=u(p.name,W.Class,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(n=p.methods)?n:[])u(s.name,W.Method,p.name,W.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(o=p.props)?o:[])u(s.name,W.Property,p.name,W.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(r=p.events)?r:[])u(s.name,W.Events,p.name,W.Class,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}for(const p of l.typedefs){const t=u(p.name,W.Typedefs,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(a=p.props)?a:[])u(s.name,W.Property,p.name,W.Typedefs,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}t({type:"setSearchIndex",searchIndex:c,searchRef:i}),l.classes.sort(((t,e)=>t.name.localeCompare(e.name))),l.typedefs.sort(((t,e)=>t.name.localeCompare(e.name)));for(const p of l.classes)p.props&&p.props.sort(((t,e)=>t.name.localeCompare(e.name))),p.methods&&p.methods.sort(((t,e)=>t.name.localeCompare(e.name))),p.events&&p.events.sort(((t,e)=>t.name.localeCompare(e.name)));l.links={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",bigint:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",symbol:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",void:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Set:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",RegExp:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",Error:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",Immediate:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_immediate",Buffer:"https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",ReadableStream:"https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",ChildProcess:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",Worker:"https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",MessagePort:"https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport"},l.externals=l.externals||[],l.classes=l.classes||[],l.typedefs=l.typedefs||[];for(const p of l.externals)l.links[p.name]=p.see[0].replace(/\{@link\s+(.+?)\s*\}/i,"$1");for(const p of l.classes)l.links[p.name]={name:"docs-source-tag-class-class",params:{class:p.name}};for(const p of l.typedefs)l.links[p.name]={name:"docs-source-tag-typedef-typedef",params:{typedef:p.name}};"commando"===e.id&&(l.links.Message={name:"docs-source-tag-class-class",params:{source:"main",tag:"master",class:"Message"}}),l.global=e.global,l.source=e.source,l.id=e.id,l.tag=s,t({type:"setDocs",docs:l})},fetchTags:async({commit:t},{currentSource:e})=>{t({type:"setBranches",branches:await e.fetchTags()})}}});function K(){return o(Y)}var Z=r({setup(t){const e=K(),n=s((()=>e.state.stats.downloads)),o=s((()=>e.state.stats.stars)),r=s((()=>e.state.stats.contributors));return(t,e)=>(a(),l("ul",null,[i("li",null,c(d(n))+" downloads",1),i("li",null,c(d(o))+" stars",1),i("li",null,c(d(r))+" contributors",1)]))}});const Q={class:"bg-discord-green-560"},X={class:"max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200"},tt=p("Up-Devs.DB"),et=i("p",{class:"mb-4"},"An API wrapper for the official Brawl Stars API",-1),st=i("p",{class:"mb-4"},"Website originally created by the discord.js team",-1),nt={class:"text-xs break-words-legacy"},ot=i("br",null,null,-1);var rt=r({setup(t){const s=e("a55c641766672c1d2772e64ea1067b96a223a619"),n=e(new Date(1630136314979).toUTCString());return(t,e)=>{const o=u("router-link");return a(),l("footer",Q,[i("div",X,[i("strong",null,[i(o,{to:"/"},{default:h((()=>[tt])),_:1})]),et,st,i(Z,{class:"mb-4"}),i("p",nt,[p(" commit: "+c(s.value),1),ot,p(" built at: "+c(n.value),1)])])])}}});const at={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},lt=i("g",{fill:"none"},[i("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var it={name:"heroicons-outline-external-link",render:function(t,e){return a(),l("svg",at,[lt])}};const ct={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},dt=i("g",{fill:"none"},[i("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ut={name:"heroicons-outline-sun",render:function(t,e){return a(),l("svg",ct,[dt])}};const ht={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},pt=i("g",{fill:"none"},[i("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var mt={name:"heroicons-outline-moon",render:function(t,e){return a(),l("svg",ht,[pt])}};const gt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ft=i("g",{fill:"none"},[i("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var vt={name:"heroicons-outline-search",render:function(t,e){return a(),l("svg",gt,[ft])}};const bt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},wt=i("g",{fill:"none"},[i("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var xt={name:"heroicons-outline-arrow-right",render:function(t,e){return a(),l("svg",bt,[wt])}};const yt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},kt=i("g",{fill:"none"},[i("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var _t={name:"heroicons-outline-menu",render:function(t,e){return a(),l("svg",yt,[kt])}};const Mt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},St=i("g",{fill:"none"},[i("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var jt={name:"heroicons-outline-x",render:function(t,e){return a(),l("svg",Mt,[St])}};const Rt=m({storageKey:"theme"}),Ct=g(Rt),Dt={class:"sticky top-0 z-20"},At={class:"bg-discord-green-560"},Tt={class:"max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8"},Ot={class:"hidden md:flex md:py-2 md:space-x-4 lg:space-x-8","aria-label":"Global navigation"},$t=p(" Up-Devs.DB "),zt=p(" Documentation "),Et=i("span",{class:"mr-2"},"GitHub",-1),Lt={class:"relative h-16 flex md:max-w-md md:w-full lg:max-w-lg"},Pt={class:"relative z-10 flex items-center md:hidden"},Ut={class:"relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end"},Nt=i("label",{for:"search",class:"sr-only"},"Search",-1),Bt={class:"relative"},Wt={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center","aria-hidden":"true"},Gt={class:"relative z-10 flex items-center md:hidden"},It=i("span",{class:"sr-only"},"Open menu",-1),Jt={key:0,id:"mobile-menu",class:"md:hidden","aria-label":"Global navigation"},Ft={class:"pt-2 pb-3 px-2 space-y-1"},Ht=p("Up-Devs.DB"),Vt=p("Documentation"),Yt=i("span",{class:"mr-2"},"Github",-1),qt=i("span",{class:"mr-2"},"Guide",-1);var Kt=r({setup(t){const n=f(),o=v(),r=K(),m=b(w).greater("md"),g=e(!1),D=e(),A=e(""),T=e(!1),O=e(-1),$=s((()=>{var t;return null==(t=r.state.source)?void 0:t.repo})),z=s((()=>(O.value=-1,H(A.value).slice(0,7)))),E=()=>{if(z.value.length)return T.value=!1,O.value>=0?(n.push(z.value[O.value].getLinkPath()),void(O.value=-1)):n.push({name:"docs-source-tag-search",query:{query:A.value}})},L=t=>{O.value+=1,O.value>Math.min(6,z.value.length-1)&&(O.value=0),t.preventDefault()},P=t=>{O.value-=1,O.value<0&&(O.value=Math.min(6,z.value.length-1)),t.preventDefault()},U=t=>{if(!t.target)return;const e=t.target.getAttribute("data-index");e&&(O.value=parseInt(e,10))};return x(m,(()=>g.value=!1)),y(D,(()=>{T.value=!1,O.value=-1})),(t,e)=>{const s=u("router-link"),n=it,r=ut,m=mt,f=vt,v=xt,b=_t,w=jt;return a(),l("div",Dt,[i("header",At,[i("div",Tt,[i("nav",Ot,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-green-600"},{default:h((()=>[$t])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-green-600"},{default:h((()=>[zt])),_:1}),i("a",{href:`https://github.com/${d($)}`,class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[Et,i(n,{class:"h-5 w-5"})],8,["href"])]),i("div",Lt,[i("div",Pt,[i("button",{class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\thover:bg-discord-green-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-discord-green-630\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[1]||(e[1]=t=>d(Ct)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"])]),i("div",Ut,[i("button",{class:"\n\t\t\t\t\t\t\t\thidden\n\t\t\t\t\t\t\t\tmd:block\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\thover:bg-discord-green-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-1 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[2]||(e[2]=t=>d(Ct)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"]),"/"!==d(o).path?(a(),l("div",{key:0,ref:D,class:"w-full sm:max-w-lg lg:max-w-xs"},[Nt,i("div",Bt,[i("div",Wt,[i(f,{class:"h-5 w-5 text-gray-200"})]),k(i("input",{id:"search","onUpdate:modelValue":e[3]||(e[3]=t=>A.value=t),name:"search",class:"\n\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\tbg-discord-green-600\n\t\t\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\tpl-10\n\t\t\t\t\t\t\t\t\t\tpr-3\n\t\t\t\t\t\t\t\t\t\ttext-base text-white\n\t\t\t\t\t\t\t\t\t\tplaceholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus:bg-discord-green-630\n\t\t\t\t\t\t\t\t\t\tfocus:text-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:placeholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:ring-2\n\t\t\t\t\t\t\t\t\t\tfocus:ring-inset\n\t\t\t\t\t\t\t\t\t\tfocus:ring-white\n\t\t\t\t\t\t\t\t\t\tlg:focus:ring-1\n\t\t\t\t\t\t\t\t\t",placeholder:"Search",type:"search",autocomplete:"off",autocapitalize:"off",autocorrect:"off",onFocus:e[4]||(e[4]=t=>T.value=!0),onInput:e[5]||(e[5]=t=>T.value=!0),onKeyup:M(E,["enter"]),onKeydown:[M(P,["up"]),M(L,["down"])]},null,40,["onKeyup","onKeydown"]),[[_,A.value]]),T.value&&A.value&&d(z).length?(a(),l("div",{key:0,class:"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center","aria-hidden":"true",onClick:E},[i(v,{class:"h-5 w-5 text-gray-200"})])):S("",!0),T.value&&A.value&&d(z).length?(a(),l("div",{key:1,class:"absolute mt-1 w-full break-words-legacy border bg-discord-green-600 rounded-md",onMouseover:U},[i("ul",null,[(a(!0),l(j,null,R(d(z),((t,n)=>(a(),l("li",{key:t.computedName,class:["\n\t\t\t\t\t\t\t\t\t\t\t\teven:bg-discord-green-560\n\t\t\t\t\t\t\t\t\t\t\t\tdark:even:bg-discord-green-630\n\t\t\t\t\t\t\t\t\t\t\t\thover:bg-discord-green-630\n\t\t\t\t\t\t\t\t\t\t\t\tdark:hover:bg-discord-green-660\n\t\t\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\t\t\t\t",{"ring-1 ring-gray-200 even:bg-discord-green-630 dark:even:bg-discord-green-660 bg-discord-green-630 dark:bg-discord-green-660":n===O.value}]},[i(s,{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-3\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:rounded-md\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:bg-discord-green-630\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:focus-visible:bg-discord-green-660\n\t\t\t\t\t\t\t\t\t\t\t\t",exact:"",to:t.getLinkPath(),"data-index":n,onClick:e[6]||(e[6]=t=>T.value=!1)},{default:h((()=>[p(c(t.computedName),1)])),_:2},1032,["to","data-index"])],2)))),128))])],32)):S("",!0)])],512)):S("",!0)]),i("div",Gt,[i("button",{type:"button",class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-controls":"mobile-menu","aria-expanded":g.value,onClick:e[7]||(e[7]=t=>g.value=!g.value)},[It,i(b,{class:{hidden:g.value,block:!g.value},"aria-hidden":"true"},null,8,["class"]),i(w,{class:{block:g.value,hidden:!g.value},"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])]),i(C,{"enter-active-class":"transition transform-gpu duration-300 ease-out","enter-from-class":"translate-x-12 opacity-0","enter-to-class":"translate-x-0 opacity-100"},{default:h((()=>[g.value?(a(),l("nav",Jt,[i("div",Ft,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[8]||(e[8]=t=>g.value=!g.value)},{default:h((()=>[Ht])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[9]||(e[9]=t=>g.value=!g.value)},{default:h((()=>[Vt])),_:1}),i("a",{href:`https://github.com/${d($)}`,class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[10]||(e[10]=t=>g.value=!g.value)},[Yt,i(n,{class:"h-5 w-5 inline-block"})],8,["href"]),i("a",{href:"https://updevs-db.js.org/guide",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-green-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[11]||(e[11]=t=>g.value=!g.value)},[qt,i(n,{class:"h-5 w-5 inline-block"})])])])):S("",!0)])),_:1})])])}}});const Zt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Qt=i("g",{fill:"none"},[i("path",{d:"M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Xt={name:"heroicons-outline-download",render:function(t,e){return a(),l("svg",Zt,[Qt])}};function te(t={}){const{immediate:s=!0,onNeedRefresh:n,onOfflineReady:o}=t,r=e(!1),a=e(!1);return{updateServiceWorker:function(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:n}=t;let o;return"serviceWorker"in navigator&&(o=new D("/sw.js",{scope:"/"}),o.addEventListener("activated",(t=>{t.isUpdate?window.location.reload():null==n||n()})),o.register({immediate:e}).then((t=>t))),async(t=!0)=>{}}({immediate:s,onNeedRefresh(){r.value=!0,null==n||n()},onOfflineReady(){a.value=!0,null==o||o()}}),offlineReady:a,needRefresh:r}}const ee={key:0,class:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"},se={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},ne={class:"p-2 rounded-lg bg-discord-green-600 dark:bg-discord-green-700 shadow-lg sm:p-3"},oe={class:"flex items-center justify-between flex-wrap"},re={class:"w-0 flex-1 flex items-center"},ae={class:"flex p-2 rounded-lg bg-discord-green-530 dark:bg-discord-green-630"},le={class:"ml-3 font-medium text-white truncate"},ie={class:"sm:hidden"},ce={class:"hidden sm:inline"},de={key:0,class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},ue={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-2"},he=i("span",{class:"sr-only"},"Dismiss",-1);var pe=r({setup(t){const{offlineReady:e,needRefresh:s,updateServiceWorker:n}=te(),o=()=>{e.value=!1,s.value=!1};return(t,r)=>{const u=Xt,h=jt;return d(e)||d(s)?(a(),l("div",ee,[i("div",se,[i("div",ne,[i("div",oe,[i("div",re,[i("span",ae,[i(u,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})]),i("p",le,[i("span",ie,c(d(e)?"App ready to work offline.":"New content available."),1),i("span",ce,c(d(e)?"App ready to work offline.":"New content available, click refresh to update."),1)])]),d(s)?(a(),l("div",de,[i("button",{class:"\n\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\tfont-medium\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\tbg-discord-green-530\n\t\t\t\t\t\t\t\tdark:bg-discord-green-630\n\t\t\t\t\t\t\t\thover:bg-discord-green-460\n\t\t\t\t\t\t\t\tdark:hover:bg-discord-green-600\n\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t",onClick:r[1]||(r[1]=t=>d(n)(!0))}," Refresh ")])):S("",!0),i("div",ue,[i("button",{type:"button",class:"-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",onClick:o},[he,i(h,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})])])])])])])):S("",!0)}}});const me={class:"min-h-full grid grid-layout"},ge={id:"container",class:"grid grid-layout-container lg:custom-scroll"},fe={class:"bg-white dark:bg-[#1d1d1d]"};var ve=r({setup:t=>(K().dispatch("fetchStats"),(t,e)=>{const s=u("router-view"),n=rt;return a(),l(j,null,[i("div",me,[i(Kt),i("div",ge,[i("div",fe,[i(s)]),i(n)])]),i(pe)],64)})});let be;const we={},xe=function(t,e){if(!e||0===e.length)return t();if(void 0===be){const t=document.createElement("link").relList;be=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if((t=`/${t}`)in we)return;we[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":be,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e?new Promise(((t,e)=>{n.addEventListener("load",t),n.addEventListener("error",e)})):void 0}))).then((()=>t()))},ye={},ke={class:"filter drop-shadow-lg my-6",style:{color:"white","font-size":"120px","font-weight":"bold"}};ye.render=function(t,e){return a(),l("h1",ke,"UpDevs.DB")};const _e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Me=i("g",{fill:"none"},[i("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Se={name:"heroicons-outline-clipboard-copy",render:function(t,e){return a(),l("svg",_e,[Me])}};const je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Re=i("g",{fill:"none"},[i("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Ce={name:"heroicons-outline-clipboard-check",render:function(t,e){return a(),l("svg",je,[Re])}};const De={class:"text-gray-200 bg-discord-green-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},Ae=i("span",{class:"hover:text-white mr-2"},"npm install up-devs.db",-1);var Te=r({setup(t){const s=e(),n=e(!1),o=A((t=>{t(),n.value=!1}),1e3),{show:r,hide:c}=T(s,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),d=async()=>{try{await navigator.clipboard.writeText("npm install up-devs.db"),r()}catch{}n.value=!0,o(c)};return(t,e)=>{const o=Se,r=Ce;return a(),l("code",De,[Ae,i("button",{ref:s,class:"focus:outline-none","aria-label":"Copy install command"},[n.value?(a(),l(r,{key:1,class:"inline-block fill-current text-discord-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:d})):(a(),l(o,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:d}))],512)])}}});const Oe={class:"bg-discord-green-500 py-20"},$e={class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12"},ze={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tlg:prose-lg\n\t\t\tpx-6\n\t\t\tmx-auto\n\t\t\tpb-8\n\t\t\tw-full\n\t\t\txl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl\n\t\t"},Ee=i("div",{class:"col-span-full"},[i("h2",null,"About"),i("p",null," Up-Devs.DB is a powerful Node.js module which can be used saving your datas in data-bases very easily. "),i("p",null," Currently only supports JSON database, but MongoDB is coming soon! ")],-1),Le=i("div",null,[i("h2",null,"Why?"),i("ul",null,[i("li",null,"Easy to use!"),i("li",null,"Has extra methods/properties!"),i("li",null,"Has a client, which is more easier then before!")])],-1),Pe=i("h2",null,"Statistics",-1),Ue=i("p",{class:"text-center"},"... and growing!",-1);const Ne=[{name:"index",path:"/",component:r({setup(t){const e=K();return s((()=>e.state.docs)).value||(e.dispatch("fetchDocs",{inputSource:U}),e.dispatch("fetchTags",{currentSource:U})),(t,e)=>(a(),l(j,null,[i("div",Oe,[i("div",$e,[i(ye,{class:"filter drop-shadow-lg my-6"}),i(Te)])]),i("div",ze,[Ee,Le,i("div",null,[Pe,i(Z),Ue])])],64))}}),props:!0},{path:"/docs",component:()=>xe((()=>import("./docs.2d9e0deb.js")),["assets/docs.2d9e0deb.js","assets/docs.675be814.css","assets/vendor.79db57bd.js","assets/chevron-down.046bf525.js","assets/headlessui.esm.5f2b3dc4.js","assets/Spinner.7403791c.js","assets/Spinner.af24072b.css"]),children:[{name:"docs-source",path:":source",component:()=>xe((()=>import("./index.011f1615.js")),["assets/index.011f1615.js","assets/Spinner.7403791c.js","assets/Spinner.af24072b.css","assets/vendor.79db57bd.js"]),props:!0},{name:"docs-source-tag-search",path:":source/:tag/search",component:()=>xe((()=>import("./search.54c5631f.js")),["assets/search.54c5631f.js","assets/search.055dc457.css","assets/vendor.79db57bd.js"]),props:!0},{name:"docs-source-tag-category-file",path:":source/:tag/:category/:file",component:()=>xe((()=>import("./[file].1e1bd090.js")),["assets/[file].1e1bd090.js","assets/vendor.79db57bd.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.2c0c3baf.js"]),props:!0},{name:"docs-source-tag-class-class",path:":source/:tag/class/:class",component:()=>xe((()=>import("./[class].3c68cfe1.js")),["assets/[class].3c68cfe1.js","assets/[class].32241939.css","assets/vendor.79db57bd.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.2c0c3baf.js","assets/See.vue_vue&type=script&setup=true&lang.e1212826.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/chevron-down.046bf525.js","assets/headlessui.esm.5f2b3dc4.js"]),props:!0},{name:"docs-source-tag-typedef-typedef",path:":source/:tag/typedef/:typedef",component:()=>xe((()=>import("./[typedef].8dc22697.js")),["assets/[typedef].8dc22697.js","assets/vendor.79db57bd.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.2c0c3baf.js","assets/See.vue_vue&type=script&setup=true&lang.e1212826.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/headlessui.esm.5f2b3dc4.js"]),props:!0}],props:!0},{name:"all",path:"/:all(.*)*",component:()=>xe((()=>import("./[...all].92bc89af.js")),["assets/[...all].92bc89af.js","assets/vendor.79db57bd.js"]),props:!0}];var Be=O({history:$(),routes:Ne});const We=z(ve);We.use(q,Y),We.use(Be),We.use(E),We.mount("#app");export{W as D,U as M,Se as _,Ce as a,it as b,V as f,N as i,H as s,K as u};
