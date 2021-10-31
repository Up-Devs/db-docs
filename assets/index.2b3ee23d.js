import{s as t,r as e,c as s,a as n,u as o,d as r,o as a,b as l,e as i,t as c,f as d,g as u,w as h,h as p,i as m,j as g,k as f,l as v,m as b,n as w,p as x,q as y,v as k,x as _,y as M,z as S,F as j,A as C,T as R,B as D,C as T,D as O,E as A,G as z,H as $,I as E,V as L}from"./vendor.334b0b9f.js";const P=t=>{if(!t.ok)throw new Error("Failed to fetch docs data file from GitHub");return t.json()};const U=new Set(["gh-pages","web","docs"]);var B=new class{constructor(t){var e,s,n,o,r;this.options=t,this.id=this.options.id,this.name=this.options.name,this.global=this.options.global,this.repo=this.options.repo,this.defaultTag=null!=(e=this.options.defaultTag)?e:"main",this.defaultFile=null!=(s=this.options.defaultFile)?s:{category:"general",id:"welcome"},this.source=null!=(n=this.options.source)?n:`https://github.com/${this.repo}/blob/`,this.branchFilter=null!=(o=this.options.branchFilter)?o:t=>"main"!==t,this.tagFilter=null!=(r=this.options.tagFilter)?r:()=>!0,this.tags=null,this.recentTag=null}fetchTags(){return this.tags?Promise.resolve(this.tags):Promise.all([fetch(`https://api.github.com/repos/${this.repo}/branches`).then(P),fetch(`https://api.github.com/repos/${this.repo}/tags`).then(P)]).catch((t=>{if(localStorage[`source-${this.id}`]){console.error(t);const e=JSON.parse(localStorage[`source-${this.id}`]);return[e.branches,e.tags]}throw t})).then((e=>{const[s,n]=e;this.tags=[this.defaultTag],localStorage[`source-${this.id}`]=JSON.stringify({branches:s,tags:n});for(const t of s)t.name!==this.defaultTag&&this.branchFilter(t.name)&&this.tags.push(t.name);const o={};for(const r of n)if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`,s=t.patch(r.name);if(s<o[e])continue;o[e]=s}for(const r of n)if(r.name!==this.defaultTag&&this.tagFilter(r.name)){if(t.valid(r.name)){const e=`${t.major(r.name)}.${t.minor(r.name)}`;if(t.patch(r.name)<o[e])continue}this.tags.push(r.name)}return this.tags}))}async fetchDocs(t){const e=await fetch(`https://raw.githubusercontent.com/${this.repo}/docs/${t}.json`);return P(e)}}({id:"main",name:"Main library",global:"upDB",repo:"Up-Devs/up-devs.db",defaultTag:"main",branchFilter:t=>!U.has(t)&&!t.startsWith("dependabot"),tagFilter:e=>t.gte(e,"9.0.0")});const G=e(!1);class N{constructor(t,e){this.name=t.toLowerCase(),this.related=new Set([e])}addRelated(t){this.related.add(t)}matches(t){return t.includes(this.name)}}var W,I;(I=W||(W={}))[I.Class=0]="Class",I[I.Method=1]="Method",I[I.Property=2]="Property",I[I.Events=3]="Events",I[I.Typedefs=4]="Typedefs";class J{constructor(t,e,s,n,o,r){switch(this.name=t,this.type=e,this.parentName=s,this.parentType=n,this.access=o,this.scope=r,e){case 0:case 4:this.computedName=t;break;case 1:this.computedName=`${null!=s?s:""}.${t}()`;break;case 2:this.computedName=`${null!=s?s:""}.${t}`;break;case 3:this.computedName=`${null!=s?s:""}#${t}`}this.nameLowerCase=t.toLowerCase(),this.cleanedComputedName=this.computedName.replace(/[().#]/,"").toLowerCase()}get isPriority(){return 0===this.type||4===this.type}getLinkPath(){var t,e;if(4===this.type||4===this.parentType)return{name:"docs-source-tag-typedef-typedef",params:{typedef:null!=(t=this.parentName)?t:this.name}};const s={name:"docs-source-tag-class-class",params:{class:null!=(e=this.parentName)?e:this.name}};return 1!==this.type&&2!==this.type||(s.query={scrollTo:this.name}),3===this.type&&(s.query={scrollTo:`e-${this.name}`}),s}}const F=s((()=>K.state.searchIndex)),H=s((()=>K.state.searchRef));function V(t){const e=t.replace(/[\s().#]/g,"").toLowerCase();if(""===e)return[];let s=F.value.reduce(((t,s)=>{if(e.includes(s.name))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map);0===s.size&&e.length<10&&(s=F.value.reduce(((t,s)=>{if(s.name.includes(e))for(const e of s.related){const n=t.get(e);n?(n.numMatches+=1,n.lengthMatches+=s.name.length):t.set(e,{numMatches:1,lengthMatches:s.name.length})}return t}),new Map));return Array.from(s.entries()).map((([t,e])=>[H.value[t],e])).filter((([t])=>"private"!==t.access||G.value)).sort((([t,s],[n,o])=>{let r=0;return t.nameLowerCase===e?r+=t.isPriority?-10:-4:n.nameLowerCase===e&&(r+=n.isPriority?10:4),e.length>=7&&(t.cleanedComputedName.includes(e)&&(r-=30),n.cleanedComputedName.includes(e)&&(r+=30)),s.numMatches===o.numMatches&&(t.isPriority&&(r-=6),n.isPriority&&(r+=6),s.numMatches>1&&(r+=Math.abs(e.length-t.computedName.length)-Math.abs(e.length-n.computedName.length)),r+=o.lengthMatches-s.lengthMatches),o.numMatches-s.numMatches+r})).map((([t,e])=>t))}const Y=e(null),q=Symbol("docs"),K=n({state:{sources:[{source:B,name:B.name,id:B.id}],source:B,tag:B.defaultTag,docs:null,branches:[],file:null,stats:{downloads:`${225e6.toLocaleString()}+`,stars:`${11e3.toLocaleString()}+`,contributors:`${100..toLocaleString()}+`},searchIndex:[],searchRef:[]},mutations:{setSource(t,{source:e}){t.source=e},setTag(t,{tag:e}){t.tag=e},setDocs(t,{docs:e}){t.docs=e},setBranches(t,{branches:e}){t.branches=e},setFile(t,{file:e}){t.file=e},setStats(t,{stats:e}){t.stats=e},setSearchIndex(t,{searchIndex:e,searchRef:s}){t.searchIndex=e,t.searchRef=s}},actions:{fetchStats:async({commit:t})=>{let e=0,s=0,n=0;const o=t=>t.json(),r=()=>{},[a,l,i]=await Promise.all([fetch("https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/up-devs.db").then(o,r),fetch("https://api.github.com/repos/Up-Devs/up-devs.db").then(o,r),fetch("https://api.github.com/repos/Up-Devs/up-devs.db/stats/contributors").then(o,r)]);if(a){e=0;for(const t of a.downloads)e+=t.downloads}l&&(s=l.stargazers_count),i&&(n=i.length),t({type:"setStats",stats:{downloads:`${e.toLocaleString()}+`,stars:`${s.toLocaleString()}+`,contributors:`${n.toLocaleString()}+`}})},fetchDocs:async({commit:t},{inputSource:e,inputTag:s=e.defaultTag})=>{var n,o,r,a;let l;try{l=await e.fetchDocs(s)}catch(h){return t({type:"setDocs",docs:null}),t({type:"setTag",docs:null}),void(Y.value=h)}const i=[],c=[];let d=0;const u=(t,e,s,n,o,r)=>{const a=function(t){var e,s;return/^[_A-Z]+$/.test(t)?null!=(e=t.match(/[A-Z]+/g))?e:[]:null!=(s=t.match(/(([A-Z]{2,})(?=[A-Z]))|[A-Z][a-z]+|[a-z]+/g))?s:[]}(t),l=new J(t,e,s,n,o,r);i.push(l);const u=[];for(const i of a){const t=i.toLowerCase();let e=c.findIndex((e=>e.name===t));e>-1?c[e].addRelated(d):e=c.push(new N(t,d))-1,u.push(e)}return d+=1,u};for(const p of l.classes){const t=u(p.name,W.Class,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(n=p.methods)?n:[])u(s.name,W.Method,p.name,W.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(o=p.props)?o:[])u(s.name,W.Property,p.name,W.Class,s.access,s.scope),e.push(d-1);for(const s of null!=(r=p.events)?r:[])u(s.name,W.Events,p.name,W.Class,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}for(const p of l.typedefs){const t=u(p.name,W.Typedefs,void 0,void 0,p.access,p.scope),e=[];for(const s of null!=(a=p.props)?a:[])u(s.name,W.Property,p.name,W.Typedefs,s.access,s.scope),e.push(d-1);for(const s of t)for(const t of e)c[s].related.add(t)}t({type:"setSearchIndex",searchIndex:c,searchRef:i}),l.classes.sort(((t,e)=>t.name.localeCompare(e.name))),l.typedefs.sort(((t,e)=>t.name.localeCompare(e.name)));for(const p of l.classes)p.props&&p.props.sort(((t,e)=>t.name.localeCompare(e.name))),p.methods&&p.methods.sort(((t,e)=>t.name.localeCompare(e.name))),p.events&&p.events.sort(((t,e)=>t.name.localeCompare(e.name)));l.links={any:"https://flow.org/en/docs/types/any",string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",bigint:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",boolean:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean",symbol:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol",void:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",Object:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",Function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",function:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",Array:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",Set:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set",Map:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",Date:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",RegExp:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",Promise:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",Error:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error",EventEmitter:"https://nodejs.org/dist/latest/docs/api/events.html#events_class_eventemitter",Timeout:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_timeout",Immediate:"https://nodejs.org/dist/latest/docs/api/timers.html#timers_class_immediate",Buffer:"https://nodejs.org/dist/latest/docs/api/buffer.html#buffer_class_buffer",ReadableStream:"https://nodejs.org/dist/latest/docs/api/stream.html#stream_class_stream_readable",ChildProcess:"https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_class_childprocess",Worker:"https://nodejs.org/api/worker_threads.html#worker_threads_class_worker",MessagePort:"https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport",MongooseDocument:"https://mongoosejs.com/docs/documents.html",MongooseConnection:"https://mongoosejs.com/docs/connections.html",ConnectionOptions:"https://mongoosejs.com/docs/connections.html"},l.externals=l.externals||[],l.classes=l.classes||[],l.typedefs=l.typedefs||[];for(const p of l.externals)l.links[p.name]=p.see[0].replace(/\{@link\s+(.+?)\s*\}/i,"$1");for(const p of l.classes)l.links[p.name]={name:"docs-source-tag-class-class",params:{class:p.name}};for(const p of l.typedefs)l.links[p.name]={name:"docs-source-tag-typedef-typedef",params:{typedef:p.name}};"commando"===e.id&&(l.links.Message={name:"docs-source-tag-class-class",params:{source:"main",tag:"master",class:"Message"}}),l.global=e.global,l.source=e.source,l.id=e.id,l.tag=s,t({type:"setDocs",docs:l})},fetchTags:async({commit:t},{currentSource:e})=>{t({type:"setBranches",branches:await e.fetchTags()})}}});function Z(){return o(q)}var Q=r({setup(t){const e=Z(),n=s((()=>e.state.stats.downloads)),o=s((()=>e.state.stats.stars)),r=s((()=>e.state.stats.contributors));return(t,e)=>(a(),l("ul",null,[i("li",null,c(d(n))+" downloads",1),i("li",null,c(d(o))+" stars",1),i("li",null,c(d(r))+" contributors",1)]))}});const X={class:"bg-discord-red-560"},tt={class:"max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-200"},et=p("Up-Devs.DB"),st=i("p",{class:"mb-4"},"An useful data-base for your projects. Helpful for storing your datas.",-1),nt=i("p",{class:"mb-4"},"Website originally created by the discord.js team",-1),ot={class:"text-xs break-words-legacy"},rt=i("br",null,null,-1);var at=r({setup(t){const s=e("f46339866f6b7de2f896faf1cc05868228090ffe"),n=e(new Date(1635675840544).toUTCString());return(t,e)=>{const o=u("router-link");return a(),l("footer",X,[i("div",tt,[i("strong",null,[i(o,{to:"/"},{default:h((()=>[et])),_:1})]),st,nt,i(Q,{class:"mb-4"}),i("p",ot,[p(" commit: "+c(s.value),1),rt,p(" built at: "+c(n.value),1)])])])}}});const lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},it=i("g",{fill:"none"},[i("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ct={name:"heroicons-outline-external-link",render:function(t,e){return a(),l("svg",lt,[it])}};const dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ut=i("g",{fill:"none"},[i("path",{d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ht={name:"heroicons-outline-sun",render:function(t,e){return a(),l("svg",dt,[ut])}};const pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},mt=i("g",{fill:"none"},[i("path",{d:"M20.354 15.354A9 9 0 0 1 8.646 3.646A9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var gt={name:"heroicons-outline-moon",render:function(t,e){return a(),l("svg",pt,[mt])}};const ft={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},vt=i("g",{fill:"none"},[i("path",{d:"M21 21l-6-6m2-5a7 7 0 1 1-14 0a7 7 0 0 1 14 0z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var bt={name:"heroicons-outline-search",render:function(t,e){return a(),l("svg",ft,[vt])}};const wt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},xt=i("g",{fill:"none"},[i("path",{d:"M14 5l7 7m0 0l-7 7m7-7H3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var yt={name:"heroicons-outline-arrow-right",render:function(t,e){return a(),l("svg",wt,[xt])}};const kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_t=i("g",{fill:"none"},[i("path",{d:"M4 6h16M4 12h16M4 18h16",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Mt={name:"heroicons-outline-menu",render:function(t,e){return a(),l("svg",kt,[_t])}};const St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},jt=i("g",{fill:"none"},[i("path",{d:"M6 18L18 6M6 6l12 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Ct={name:"heroicons-outline-x",render:function(t,e){return a(),l("svg",St,[jt])}};const Rt=m({storageKey:"theme"}),Dt=g(Rt),Tt={class:"sticky top-0 z-20"},Ot={class:"bg-discord-red-560"},At={class:"max-w-7xl mx-auto px-2 sm:px-4 md:flex md:justify-between lg:px-8"},zt={class:"hidden md:flex md:py-2 md:space-x-4 lg:space-x-8","aria-label":"Global navigation"},$t=p(" Up-Devs.DB "),Et=p(" Documentation "),Lt=i("span",{class:"mr-2"},"GitHub",-1),Pt={href:"https://updevs-db.js.org/guide/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},Ut=i("span",{class:"mr-2"},"Guide",-1),Bt={class:"relative h-16 flex md:max-w-md md:w-full lg:max-w-lg"},Gt={class:"relative z-10 flex items-center md:hidden"},Nt={class:"relative z-0 flex-1 px-2 flex lg:gap-2 items-center justify-center md:justify-end"},Wt=i("label",{for:"search",class:"sr-only"},"Search",-1),It={class:"relative"},Jt={class:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center","aria-hidden":"true"},Ft={class:"relative z-10 flex items-center md:hidden"},Ht=i("span",{class:"sr-only"},"Open menu",-1),Vt={key:0,id:"mobile-menu",class:"md:hidden","aria-label":"Global navigation"},Yt={class:"pt-2 pb-3 px-2 space-y-1"},qt=p("Up-Devs.DB"),Kt=p("Documentation"),Zt=i("span",{class:"mr-2"},"Guide",-1),Qt=i("span",{class:"mr-2"},"Github",-1),Xt=i("span",{class:"mr-2"},"Guide",-1);var te=r({setup(t){const n=f(),o=v(),r=Z(),m=b(w).greater("md"),g=e(!1),D=e(),T=e(""),O=e(!1),A=e(-1),z=s((()=>{var t;return null==(t=r.state.source)?void 0:t.repo})),$=s((()=>(A.value=-1,V(T.value).slice(0,7)))),E=()=>{if($.value.length)return O.value=!1,A.value>=0?(n.push($.value[A.value].getLinkPath()),void(A.value=-1)):n.push({name:"docs-source-tag-search",query:{query:T.value}})},L=t=>{A.value+=1,A.value>Math.min(6,$.value.length-1)&&(A.value=0),t.preventDefault()},P=t=>{A.value-=1,A.value<0&&(A.value=Math.min(6,$.value.length-1)),t.preventDefault()},U=t=>{if(!t.target)return;const e=t.target.getAttribute("data-index");e&&(A.value=parseInt(e,10))};return x(m,(()=>g.value=!1)),y(D,(()=>{O.value=!1,A.value=-1})),(t,e)=>{const s=u("router-link"),n=ct,r=ht,m=gt,f=bt,v=yt,b=Mt,w=Ct;return a(),l("div",Tt,[i("header",Ot,[i("div",At,[i("nav",zt,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-red-600"},{default:h((()=>[$t])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t","active-class":"bg-discord-red-600"},{default:h((()=>[Et])),_:1}),i("a",{href:`https://github.com/${d(z)}`,class:"\n\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t",target:"_blank",rel:"noopener"},[Lt,i(n,{class:"h-5 w-5"})],8,["href"]),i("a",Pt,[Ut,i(n,{class:"h-5 w-5"})])]),i("div",Bt,[i("div",Gt,[i("button",{class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\thover:bg-discord-red-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-discord-red-630\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[1]||(e[1]=t=>d(Dt)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"])]),i("div",Nt,[i("button",{class:"\n\t\t\t\t\t\t\t\thidden\n\t\t\t\t\t\t\t\tmd:block\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\thover:bg-discord-red-630\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-1 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-label":"Switch to "+(d(Rt)?"light theme":"dark theme"),onClick:e[2]||(e[2]=t=>d(Dt)())},[d(Rt)?(a(),l(m,{key:1,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"})):(a(),l(r,{key:0,class:"fill-current text-gray-200 hover:text-white h-6 w-6","aria-hidden":"true"}))],8,["aria-label"]),"/"!==d(o).path?(a(),l("div",{key:0,ref:D,class:"w-full sm:max-w-lg lg:max-w-xs"},[Wt,i("div",It,[i("div",Jt,[i(f,{class:"h-5 w-5 text-gray-200"})]),k(i("input",{id:"search","onUpdate:modelValue":e[3]||(e[3]=t=>T.value=t),name:"search",class:"\n\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\tbg-discord-red-600\n\t\t\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\tpl-10\n\t\t\t\t\t\t\t\t\t\tpr-3\n\t\t\t\t\t\t\t\t\t\ttext-base text-white\n\t\t\t\t\t\t\t\t\t\tplaceholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\tfocus:text-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:placeholder-gray-200\n\t\t\t\t\t\t\t\t\t\tfocus:ring-2\n\t\t\t\t\t\t\t\t\t\tfocus:ring-inset\n\t\t\t\t\t\t\t\t\t\tfocus:ring-white\n\t\t\t\t\t\t\t\t\t\tlg:focus:ring-1\n\t\t\t\t\t\t\t\t\t",placeholder:"Search",type:"search",autocomplete:"off",autocapitalize:"off",autocorrect:"off",onFocus:e[4]||(e[4]=t=>O.value=!0),onInput:e[5]||(e[5]=t=>O.value=!0),onKeyup:M(E,["enter"]),onKeydown:[M(P,["up"]),M(L,["down"])]},null,40,["onKeyup","onKeydown"]),[[_,T.value]]),O.value&&T.value&&d($).length?(a(),l("div",{key:0,class:"absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center","aria-hidden":"true",onClick:E},[i(v,{class:"h-5 w-5 text-gray-200"})])):S("",!0),O.value&&T.value&&d($).length?(a(),l("div",{key:1,class:"absolute mt-1 w-full break-words-legacy border bg-discord-red-600 rounded-md",onMouseover:U},[i("ul",null,[(a(!0),l(j,null,C(d($),((t,n)=>(a(),l("li",{key:t.computedName,class:["\n\t\t\t\t\t\t\t\t\t\t\t\teven:bg-discord-red-560\n\t\t\t\t\t\t\t\t\t\t\t\tdark:even:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\t\t\thover:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\t\t\tdark:hover:bg-discord-red-660\n\t\t\t\t\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\t\t\t\t",{"ring-1 ring-gray-200 even:bg-discord-red-630 dark:even:bg-discord-red-660 bg-discord-red-630 dark:bg-discord-red-660":n===A.value}]},[i(s,{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-3\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:rounded-md\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus-visible:bg-discord-red-630\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:focus-visible:bg-discord-red-660\n\t\t\t\t\t\t\t\t\t\t\t\t",exact:"",to:t.getLinkPath(),"data-index":n,onClick:e[6]||(e[6]=t=>O.value=!1)},{default:h((()=>[p(c(t.computedName),1)])),_:2},1032,["to","data-index"])],2)))),128))])],32)):S("",!0)])],512)):S("",!0)]),i("div",Ft,[i("button",{type:"button",class:"\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tp-2\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t\t\t\t\t","aria-controls":"mobile-menu","aria-expanded":g.value,onClick:e[7]||(e[7]=t=>g.value=!g.value)},[Ht,i(b,{class:{hidden:g.value,block:!g.value},"aria-hidden":"true"},null,8,["class"]),i(w,{class:{block:g.value,hidden:!g.value},"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])])])]),i(R,{"enter-active-class":"transition transform-gpu duration-300 ease-out","enter-from-class":"translate-x-12 opacity-0","enter-to-class":"translate-x-0 opacity-100"},{default:h((()=>[g.value?(a(),l("nav",Vt,[i("div",Yt,[i(s,{to:"/",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[8]||(e[8]=t=>g.value=!g.value)},{default:h((()=>[qt])),_:1}),i(s,{to:"/docs",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[9]||(e[9]=t=>g.value=!g.value)},{default:h((()=>[Kt])),_:1}),i(s,{to:"https://updevs-db.js.org/guide/",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",onClick:e[10]||(e[10]=t=>g.value=!g.value)},{default:h((()=>[Zt,i(n,{class:"h-5 w-5 inline-block"})])),_:1}),i("a",{href:`https://github.com/${d(z)}`,class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[11]||(e[11]=t=>g.value=!g.value)},[Qt,i(n,{class:"h-5 w-5 inline-block"})],8,["href"]),i("a",{href:"https://updevs-db.js.org/guide",class:"\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\t\t\t\t\tblock\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t",target:"_blank",rel:"noopener",onClick:e[12]||(e[12]=t=>g.value=!g.value)},[Xt,i(n,{class:"h-5 w-5 inline-block"})])])])):S("",!0)])),_:1})])])}}});const ee={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},se=i("g",{fill:"none"},[i("path",{d:"M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ne={name:"heroicons-outline-download",render:function(t,e){return a(),l("svg",ee,[se])}};function oe(t={}){const{immediate:s=!0,onNeedRefresh:n,onOfflineReady:o}=t,r=e(!1),a=e(!1);return{updateServiceWorker:function(t={}){const{immediate:e=!1,onNeedRefresh:s,onOfflineReady:n}=t;let o;return"serviceWorker"in navigator&&(o=new D("/sw.js",{scope:"/"}),o.addEventListener("activated",(t=>{t.isUpdate?window.location.reload():null==n||n()})),o.register({immediate:e}).then((t=>t))),async(t=!0)=>{}}({immediate:s,onNeedRefresh(){r.value=!0,null==n||n()},onOfflineReady(){a.value=!0,null==o||o()}}),offlineReady:a,needRefresh:r}}const re={key:0,class:"fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-20"},ae={class:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},le={class:"p-2 rounded-lg bg-discord-red-600 dark:bg-discord-red-700 shadow-lg sm:p-3"},ie={class:"flex items-center justify-between flex-wrap"},ce={class:"w-0 flex-1 flex items-center"},de={class:"flex p-2 rounded-lg bg-discord-red-530 dark:bg-discord-red-630"},ue={class:"ml-3 font-medium text-white truncate"},he={class:"sm:hidden"},pe={class:"hidden sm:inline"},me={key:0,class:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},ge={class:"order-2 flex-shrink-0 sm:order-3 sm:ml-2"},fe=i("span",{class:"sr-only"},"Dismiss",-1);var ve=r({setup(t){const{offlineReady:e,needRefresh:s,updateServiceWorker:n}=oe(),o=()=>{e.value=!1,s.value=!1};return(t,r)=>{const u=ne,h=Ct;return d(e)||d(s)?(a(),l("div",re,[i("div",ae,[i("div",le,[i("div",ie,[i("div",ce,[i("span",de,[i(u,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})]),i("p",ue,[i("span",he,c(d(e)?"App ready to work offline.":"New content available."),1),i("span",pe,c(d(e)?"App ready to work offline.":"New content available, click refresh to update."),1)])]),d(s)?(a(),l("div",me,[i("button",{class:"\n\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tpx-4\n\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\tborder border-transparent\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\tfont-medium\n\t\t\t\t\t\t\t\ttext-gray-200\n\t\t\t\t\t\t\t\tbg-discord-red-530\n\t\t\t\t\t\t\t\tdark:bg-discord-red-630\n\t\t\t\t\t\t\t\thover:bg-discord-red-460\n\t\t\t\t\t\t\t\tdark:hover:bg-discord-red-600\n\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t",onClick:r[1]||(r[1]=t=>d(n)(!0))}," Refresh ")])):S("",!0),i("div",ge,[i("button",{type:"button",class:"-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white",onClick:o},[fe,i(h,{class:"fill-current text-gray-200 h-6 w-6","aria-hidden":"true"})])])])])])])):S("",!0)}}});const be={class:"min-h-full grid grid-layout"},we={id:"container",class:"grid grid-layout-container lg:custom-scroll"},xe={class:"bg-white dark:bg-[#1d1d1d]"};var ye=r({setup:t=>(Z().dispatch("fetchStats"),(t,e)=>{const s=u("router-view"),n=at;return a(),l(j,null,[i("div",be,[i(te),i("div",we,[i("div",xe,[i(s)]),i(n)])]),i(ve)],64)})});let ke;const _e={},Me=function(t,e){if(!e||0===e.length)return t();if(void 0===ke){const t=document.createElement("link").relList;ke=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if((t=`/${t}`)in _e)return;_e[t]=!0;const e=t.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${s}`))return;const n=document.createElement("link");return n.rel=e?"stylesheet":ke,e||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),e?new Promise(((t,e)=>{n.addEventListener("load",t),n.addEventListener("error",e)})):void 0}))).then((()=>t()))},Se={},je={id:"app"},Ce=i("img",{src:"https://user-images.githubusercontent.com/77716705/131206307-0840de3c-a3f7-48e8-9076-f97d163055c3.png"},null,-1);Se.render=function(t,e){return a(),l("div",je,[Ce])};const Re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},De=i("g",{fill:"none"},[i("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var Te={name:"heroicons-outline-clipboard-copy",render:function(t,e){return a(),l("svg",Re,[De])}};const Oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ae=i("g",{fill:"none"},[i("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var ze={name:"heroicons-outline-clipboard-check",render:function(t,e){return a(),l("svg",Oe,[Ae])}};const $e={class:"text-gray-200 bg-discord-red-560 p-4 md:text-lg mx-auto rounded-md shadow flex items-center"},Ee=i("span",{class:"hover:text-white mr-2"},"npm install up-devs.db",-1);var Le=r({setup(t){const s=e(),n=e(!1),o=T((t=>{t(),n.value=!1}),1e3),{show:r,hide:c}=O(s,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),d=async()=>{try{await navigator.clipboard.writeText("npm install up-devs.db"),r()}catch{}n.value=!0,o(c)};return(t,e)=>{const o=Te,r=ze;return a(),l("code",$e,[Ee,i("button",{ref:s,class:"focus:outline-none","aria-label":"Copy install command"},[n.value?(a(),l(r,{key:1,class:"inline-block fill-current text-discord-red-500 cursor-pointer mb-1","aria-hidden":"true",onClick:d})):(a(),l(o,{key:0,class:"inline-block fill-current text-gray-200 cursor-pointer hover:text-white mb-1","aria-hidden":"true",onClick:d}))],512)])}}});const Pe={class:"bg-discord-red-500 py-20"},Ue={class:"max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12"},Be={class:"\n\t\t\tprose prose-discord\n\t\t\tdark:prose-light\n\t\t\tlg:prose-lg\n\t\t\tpx-6\n\t\t\tmx-auto\n\t\t\tpb-8\n\t\t\tw-full\n\t\t\txl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl\n\t\t"},Ge=A('<div class="col-span-full"><h2>About</h2><p> Up-Devs.DB is a powerful Node.js module which can be used saving your datas in data-bases very easily. </p><p> Currently supports <img src="https://i.imgur.com/QT0aT7z.png" height="17" width="17" alt="Class icon"> <a href="/#/docs/main/main/class/JsonDB" rel="noopener">JSON database</a> and <img src="https://i.imgur.com/QT0aT7z.png" height="17" width="17" alt="Class icon"> <a href="/#/docs/main/main/class/MongoDB" rel="noopener">MongoDB</a>! </p></div><div><h2>Why?</h2><ul><li>Easy to use!</li><li>Has extra methods/properties!</li><li>Similar to <a href="https://www.npmjs.com/package/quick.db" target="_blank" rel="noopener">Quick.DB</a> and <a href="https://www.npmjs.com/package/quickmongo" target="_blank" rel="noopener">QuickMongo</a>!</li></ul></div>',2),Ne=i("h2",null,"Statistics",-1),We=i("p",{class:"text-center"},"... and growing!",-1);const Ie=[{name:"index",path:"/",component:r({setup(t){const e=Z();return s((()=>e.state.docs)).value||(e.dispatch("fetchDocs",{inputSource:B}),e.dispatch("fetchTags",{currentSource:B})),(t,e)=>(a(),l(j,null,[i("div",Pe,[i("div",Ue,[i(Se,{class:"filter drop-shadow-lg my-6"}),i(Le)])]),i("div",Be,[Ge,i("div",null,[Ne,i(Q),We])])],64))}}),props:!0},{path:"/docs",component:()=>Me((()=>import("./docs.35b75841.js")),["assets/docs.35b75841.js","assets/docs.675be814.css","assets/vendor.334b0b9f.js","assets/chevron-down.97d24cca.js","assets/headlessui.esm.5c113eea.js","assets/Spinner.e9e738a2.js","assets/Spinner.af24072b.css"]),children:[{name:"docs-source",path:":source",component:()=>Me((()=>import("./index.e705fb90.js")),["assets/index.e705fb90.js","assets/Spinner.e9e738a2.js","assets/Spinner.af24072b.css","assets/vendor.334b0b9f.js"]),props:!0},{name:"docs-source-tag-search",path:":source/:tag/search",component:()=>Me((()=>import("./search.5502c7d3.js")),["assets/search.5502c7d3.js","assets/search.055dc457.css","assets/vendor.334b0b9f.js"]),props:!0},{name:"docs-source-tag-category-file",path:":source/:tag/:category/:file",component:()=>Me((()=>import("./[file].76734128.js")),["assets/[file].76734128.js","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.b00919ac.js"]),props:!0},{name:"docs-source-tag-class-class",path:":source/:tag/class/:class",component:()=>Me((()=>import("./[class].98bcbed2.js")),["assets/[class].98bcbed2.js","assets/[class].32241939.css","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.b00919ac.js","assets/See.vue_vue&type=script&setup=true&lang.cd5cb398.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/chevron-down.97d24cca.js","assets/headlessui.esm.5c113eea.js"]),props:!0},{name:"docs-source-tag-typedef-typedef",path:":source/:tag/typedef/:typedef",component:()=>Me((()=>import("./[typedef].8e35f67e.js")),["assets/[typedef].8e35f67e.js","assets/vendor.334b0b9f.js","assets/SourceButton.vue_vue&type=script&setup=true&lang.b00919ac.js","assets/See.vue_vue&type=script&setup=true&lang.cd5cb398.js","assets/See.vue_vue&type=script&setup=true&lang.9c59f874.css","assets/headlessui.esm.5c113eea.js"]),props:!0}],props:!0},{name:"all",path:"/:all(.*)*",component:()=>Me((()=>import("./[...all].6c73002e.js")),["assets/[...all].6c73002e.js","assets/vendor.334b0b9f.js"]),props:!0}];var Je=z({history:$(),routes:Ie});const Fe=E(ye);Fe.use(K,q),Fe.use(Je),Fe.use(L),Fe.mount("#app");export{W as D,B as M,Te as _,ze as a,ct as b,Y as f,G as i,V as s,Z as u};
