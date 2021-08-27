import{d as e,r as t,c as s,p as n,g as l,o as r,b as a,f as o,e as d,w as i,t as c,F as u,A as p,h as m,z as v,m as y,n as f,k as h,l as g,C as b,D as k,M as x,I as w}from"./vendor.79db57bd.js";import{_ as T,m as $,h as _}from"./SourceButton.vue_vue&type=script&setup=true&lang.996ab9ff.js";import{i as j,u as q,_ as M,a as C}from"./index.26a4d9d5.js";import{_ as A,a as H,t as L,b as E,c as Z,d as S,p as D}from"./See.vue_vue&type=script&setup=true&lang.435ecf96.js";import{_ as I,a as P}from"./chevron-down.046bf525.js";import{a as B,b as V,D as R}from"./headlessui.esm.5f2b3dc4.js";function z(e){return`${"static"===e.scope?"s-":""}${e.name}`}const F={key:0},O={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},U={class:"sr-only"},G=m(" Properties "),J={class:"text-gray-200 text-sm font-semibold uppercase"},K={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},N={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},Q={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},W={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},X={key:1},Y={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ee={class:"sr-only"},te=m(" Methods "),se={class:"text-gray-200 text-sm font-semibold uppercase"},ne={key:0,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},le={key:1,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-green-500"},re={key:2,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},ae={key:3,class:"inline-flex items-center justify-center w-6 h-6 rounded-md bg-discord-red-500"},oe={key:2},de={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ie={class:"sr-only"},ce=m(" Events "),ue={key:0,class:"\n\t\t\t\t\t\t\t\ttext-gray-200 text-sm\n\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\tuppercase\n\t\t\t\t\t\t\t\tinline-flex\n\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\tjustify-center\n\t\t\t\t\t\t\t\tw-6\n\t\t\t\t\t\t\t\th-6\n\t\t\t\t\t\t\t\trounded-md\n\t\t\t\t\t\t\t\tbg-discord-red-500\n\t\t\t\t\t\t\t"};var pe=e({props:{properties:{type:Array,required:!1},methods:{type:Array,required:!1},events:{type:Array,required:!1}},setup(e){const h=e,g=y(f).greater("lg"),b=t(!1),k=s((()=>{var e;return j.value?h.properties:null==(e=h.properties)?void 0:e.filter((e=>"private"!==e.access))})),x=s((()=>{var e;return j.value?h.methods:null==(e=h.methods)?void 0:e.filter((e=>"private"!==e.access))})),w=s((()=>{var e;return j.value?h.events:null==(e=h.events)?void 0:e.filter((e=>"private"!==e.access))})),T=e=>{const t=document.getElementById(`doc-for-${e}`);null==t||t.scrollIntoView({behavior:"smooth",block:"start"})};return n(g,(()=>b.value=!0),{immediate:!0}),(t,s)=>{const n=I,y=P,f=l("router-link");return r(),a("div",{class:["grid sm:grid-cols-2 mb-10",e.events&&e.events.length?"md:grid-cols-3":null]},[o(k)&&o(k).length?(r(),a("div",F,[d(o(R),{"default-open":b.value},{default:i((({open:e})=>[d(o(B),{class:"focus:outline-none",tabindex:"-1"},{default:i((()=>[d("div",O,[d("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[d("span",U,c(e?"Shrink":"Expand"),1),d(n,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),d(y,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),G])])),_:2},1024),d(o(V),{as:"ul",class:"no-list !mt-0 pl-2"},{default:i((()=>[(r(!0),a(u,null,p(o(k),(e=>(r(),a("li",{key:o(z)(e),class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tmb-14\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-green-500\n\t\t\t\t\t\t",onClick:t=>T(o(z)(e))},[d(f,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(z)(e)}},class:"mx-2"},{default:i((()=>[m(c(e.name),1)])),_:2},1032,["to"]),d("span",J,["static"===e.scope?(r(),a("span",K,"S")):v("",!0),e.abstract?(r(),a("span",N,"A")):v("",!0),e.deprecated?(r(),a("span",Q,"D")):v("",!0),"private"===e.access?(r(),a("span",W,"P")):v("",!0)])],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):v("",!0),o(x)&&o(x).length?(r(),a("div",X,[d(o(R),{"default-open":b.value},{default:i((({open:e})=>[d(o(B),{class:"focus:outline-none",tabindex:"-1"},{default:i((()=>[d("div",Y,[d("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[d("span",ee,c(e?"Shrink":"Expand"),1),d(n,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),d(y,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),te])])),_:2},1024),d(o(V),{as:"ul",class:"no-list !mt-0 pl-2"},{default:i((()=>[(r(!0),a(u,null,p(o(x),(e=>(r(),a("li",{key:o(z)(e),class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-green-500\n\t\t\t\t\t\t",onClick:t=>T(o(z)(e))},[d(f,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(z)(e)}},class:"mx-2"},{default:i((()=>[m(c(e.name),1)])),_:2},1032,["to"]),d("span",se,["static"===e.scope?(r(),a("span",ne,"S")):v("",!0),e.abstract?(r(),a("span",le,"A")):v("",!0),e.deprecated?(r(),a("span",re,"D")):v("",!0),"private"===e.access?(r(),a("span",ae,"P")):v("",!0)])],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):v("",!0),o(w)&&o(w).length?(r(),a("div",oe,[d(o(R),{"default-open":b.value},{default:i((({open:e})=>[d(o(B),{class:"focus:outline-none",tabindex:"-1"},{default:i((()=>[d("div",de,[d("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":e},[d("span",ie,c(e?"Shrink":"Expand"),1),d(n,{class:["inline-block",{hidden:e}],"aria-hidden":"true"},null,8,["class"]),d(y,{class:["inline-block",{hidden:!e}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),ce])])),_:2},1024),d(o(V),{as:"ul",class:"no-list !mt-0 pl-2"},{default:i((()=>[(r(!0),a(u,null,p(o(w),(e=>(r(),a("li",{key:e.name,class:"\n\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-green-500\n\t\t\t\t\t\t",onClick:t=>T(`e-${e.name}`)},[d(f,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${e.name}`}},class:"mx-2"},{default:i((()=>[m(c(e.name),1)])),_:2},1032,["to"]),e.deprecated?(r(),a("span",ue,"D")):v("",!0)],8,["onClick"])))),128))])),_:1})])),_:1},8,["default-open"])])):v("",!0)],2)}}});const me={class:"flex items-center"},ve={class:"inline-block mr-2"},ye={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},fe={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},he={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},ge={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},be={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},ke={class:"grid pl-2.5"},xe={class:"font-semibold"},we=m(" Type: "),Te={key:1},$e=m(" Default: "),_e=d("div",{class:"w-full pr-32 lg:pr-96"},[d("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var je=e({props:{prop:{type:null,required:!0}},setup(e){const t=e,n=h(),y=g(),f=q(),b=s((()=>f.state.docs)),k=s((()=>$(Z(t.prop.description,b.value,n,y)))),x=s((()=>`${"static"===t.prop.scope?"s-":""}${t.prop.name}`));return(t,s)=>{const n=l("router-link");return r(),a(u,null,[d("div",{id:`doc-for-${o(x)}`,class:"scroll-to mb-8"},[d(T,{class:"float-right mt-8",meta:e.prop.meta},null,8,["meta"]),d("div",me,[d("h3",ve,[d(n,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(x)}}},{default:i((()=>[m("."+c(e.prop.name),1)])),_:1},8,["to"])]),d("span",ye,["static"===e.prop.scope?(r(),a("span",fe,"Static")):v("",!0),e.prop.readonly?(r(),a("span",he,"Read-only")):v("",!0),e.prop.deprecated?(r(),a("span",ge,"Deprecated")):v("",!0),"private"===e.prop.access?(r(),a("span",be,"Private")):v("",!0)])]),d("div",ke,[d("p",{class:"noprose",innerHTML:o(k)},null,8,["innerHTML"]),e.prop.props&&e.prop.props.length>0?(r(),a(A,{key:0,parameters:e.prop.props},null,8,["parameters"])):v("",!0),d("div",xe,[we,(r(!0),a(u,null,p(e.prop.type,(t=>(r(),a(H,{key:o(L)(t),names:t,nullable:e.prop.nullable},null,8,["names","nullable"])))),128))]),e.prop.default?(r(),a("div",Te,[$e,d("code",null,c(e.prop.default),1)])):v("",!0),e.prop.see?(r(),a(E,{key:2,see:e.prop.see},null,8,["see"])):v("",!0)])],8,["id"]),_e],64)}}});const qe={class:"grid"},Me={class:"overflow-x-auto lg:custom-scroll"},Ce={class:"relative"},Ae={class:"my-0 javascript"};var He=e({props:{code:{type:String,required:!0}},setup(e){const s=e,n=t(),l=t(!1),i=b((e=>{e(),l.value=!1}),1e3),{show:c,hide:u}=k(n,{theme:"discord",content:"Copied",trigger:"manual",hideOnClick:!1}),p=async()=>{try{await navigator.clipboard.writeText(s.code),c()}catch{}l.value=!0,i(u)};return(t,s)=>{const i=M,c=C;return r(),a("div",qe,[d("div",Me,[d("div",Ce,[d("pre",Ae,[d("code",{innerHTML:o(_).highlight(e.code,{language:"javascript"}).value},null,8,["innerHTML"])]),d("button",{ref:n,class:"\n\t\t\t\t\t\tabsolute\n\t\t\t\t\t\tright-0\n\t\t\t\t\t\ttop-0\n\t\t\t\t\t\tmt-4\n\t\t\t\t\t\tmr-4\n\t\t\t\t\t\tinline-block\n\t\t\t\t\t\thover:text-white\n\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-gray-200\n\t\t\t\t\t","aria-label":"Copy code"},[l.value?(r(),a(c,{key:1,class:"fill-current text-discord-green-600 dark:text-discord-green-500","aria-hidden":"true",onClick:p})):(r(),a(i,{key:0,class:"fill-current text-gray-700 dark:text-gray-200","aria-hidden":"true",onClick:p}))],512)])])])}}});const Le={class:"flex items-center"},Ee={class:"inline-block mr-2"},Ze=m(") "),Se={class:"space-x-2 text-gray-200 text-sm font-semibold uppercase pt-6"},De={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},Ie={key:1,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-green-500"},Pe={key:2,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Be={key:3,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},Ve={class:"grid pl-2.5"},Re={class:"font-semibold"},ze=m(" Returns: "),Fe={key:0},Oe={key:1},Ue={key:1,class:"font-semibold"},Ge=m(" Throws: "),Je={key:2,class:"font-semibold"},Ke=m(" Emits: "),Ne={key:0},Qe={key:3,class:"font-semibold mt-3"},We=m(" Examples: "),Xe=d("div",{class:"w-full pr-32 lg:pr-96"},[d("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var Ye=e({props:{method:{type:null,required:!0}},setup(e){const t=e,n=h(),y=g(),f=q(),b=s((()=>f.state.docs)),k=s((()=>$(Z(t.method.description,b.value,n,y)))),x=s((()=>$(Z(t.method.returns.description,b.value,n,y)))),w=s((()=>t.method.params?t.method.params.filter((e=>!e.name.includes("."))):null)),_=s((()=>t.method.emits?t.method.emits.map((e=>D(e.replace(/:event/i,""),b.value))):null)),j=s((()=>`${"static"===t.method.scope?"s-":""}${t.method.name}`));return(t,s)=>{const n=l("router-link");return r(),a(u,null,[d("div",{id:`doc-for-${o(j)}`,class:"scroll-to mb-8"},[d(T,{class:"float-right mt-9",meta:e.method.meta},null,8,["meta"]),d("div",Le,[d("h3",Ee,[d(n,{to:{name:"docs-source-tag-class-class",query:{scrollTo:o(j)}}},{default:i((()=>[m(" ."+c(e.method.name)+"(",1),(r(!0),a(u,null,p(o(w),(e=>(r(),a("span",{key:e.name,class:["method-param text-discord-green-560 dark:text-discord-green-300 opacity-90 dark:opacity-75",e.optional?"optional":""]},c(e.variable?"...":"")+c(e.name),3)))),128)),Ze])),_:1},8,["to"])]),d("span",Se,["static"===e.method.scope?(r(),a("span",De,"Static")):v("",!0),e.method.abstract?(r(),a("span",Ie,"Abstract")):v("",!0),e.method.deprecated?(r(),a("span",Pe,"Deprecated")):v("",!0),"private"===e.method.access?(r(),a("span",Be,"Private")):v("",!0)])]),d("div",Ve,[d("p",{class:"noprose",innerHTML:o(k)},null,8,["innerHTML"]),e.method.params?(r(),a(A,{key:0,parameters:e.method.params},null,8,["parameters"])):v("",!0),d("div",Re,[ze,e.method.returns&&Array.isArray(e.method.returns)?(r(),a("span",Fe,[(r(!0),a(u,null,p(e.method.returns,(e=>(r(),a(H,{key:o(L)(e),names:e},null,8,["names"])))),128))])):e.method.returns&&!Array.isArray(e.method.returns)?(r(),a("span",Oe,[(r(!0),a(u,null,p(e.method.returns.types||e.method.returns,(t=>(r(),a(H,{key:o(L)(t),names:t,variable:e.method.returns.variable,nullable:e.method.returns.nullable},null,8,["names","variable","nullable"])))),128))])):(r(),a(S,{key:2,type:["void"]})),e.method.returns&&!Array.isArray(e.method.returns)&&e.method.returns.description?(r(),a("p",{key:3,class:"noprose",innerHTML:o(x)},null,8,["innerHTML"])):v("",!0)]),e.method.throws?(r(),a("div",Ue,[Ge,(r(!0),a(u,null,p(e.method.throws,(e=>(r(),a(H,{key:e,names:e},null,8,["names"])))),128))])):v("",!0),o(_)?(r(),a("div",Je,[Ke,o(_).length>1?(r(),a("ul",Ne,[(r(!0),a(u,null,p(o(_),(e=>(r(),a("li",{key:e.text},[d(n,{to:e.link},{default:i((()=>[m(c(e.text),1)])),_:2},1032,["to"])])))),128))])):(r(),a(n,{key:1,to:o(_)[0].link},{default:i((()=>[m(c(o(_)[0].text),1)])),_:1},8,["to"]))])):v("",!0),e.method.examples?(r(),a("div",Qe,[We,(r(!0),a(u,null,p(e.method.examples,(e=>(r(),a(He,{key:e,class:"mt-3",code:e},null,8,["code"])))),128))])):v("",!0),e.method.see?(r(),a(E,{key:4,see:e.method.see},null,8,["see"])):v("",!0)])],8,["id"]),Xe],64)}}});const et={class:"flex items-center"},tt={class:"inline-block mr-2"},st={class:"text-gray-200 text-sm font-semibold uppercase pt-6"},nt={key:0,class:"inline-flex items-center px-2.5 py-0.5 rounded-md bg-discord-red-500"},lt={class:"grid pl-2.5"},rt=d("div",{class:"w-full pr-32 lg:pr-96"},[d("div",{class:"h-px bg-gradient-to-r from-gray-500 rounded-full"})],-1);var at=e({props:{event:{type:null,required:!0}},setup(e){const t=e,n=h(),p=g(),y=q(),f=s((()=>y.state.docs)),b=s((()=>$(Z(t.event.description,f.value,n,p))));return(t,s)=>{const n=l("router-link");return r(),a(u,null,[d("div",{id:`doc-for-e-${e.event.name}`,class:"scroll-to mb-8"},[d(T,{class:"float-right mt-8",meta:e.event.meta},null,8,["meta"]),d("div",et,[d("h3",tt,[d(n,{to:{name:"docs-source-tag-class-class",query:{scrollTo:`e-${e.event.name}`}}},{default:i((()=>[m(c(e.event.name),1)])),_:1},8,["to"])]),d("span",st,[e.event.deprecated?(r(),a("span",nt,"Deprecated")):v("",!0)])]),d("div",lt,[d("p",{class:"noprose",innerHTML:o(b)},null,8,["innerHTML"]),e.event.params&&e.event.params.length?(r(),a(A,{key:0,parameters:e.event.params},null,8,["parameters"])):v("",!0),e.event.see?(r(),a(E,{key:1,see:e.event.see},null,8,["see"])):v("",!0)])],8,["id"]),rt],64)}}});const ot={class:"mx-auto py-16 px-4 sm:px-8 lg:py-8 w-full"},dt={class:"prose prose-discord dark:prose-light break-words-legacy mx-auto max-w-4xl lg:max-w-full"},it={class:"font-bold !mt-3"},ct={key:0},ut=m(" extends "),pt={key:1},mt=m(" implements "),vt={key:1,class:"grid"},yt=d("h2",{class:"!mt-2"},"Constructor",-1),ft=m(");"),ht={key:2,class:"!mt-4"},gt={key:3},bt={key:4};var kt=e({setup(e){var n;_.configure({ignoreUnescapedHTML:!0});const l=h(),i=g(),y=q(),f=t(),b=s((()=>y.state.docs)),k=null==(n=b.value)?void 0:n.classes.find((e=>e.name===i.params.class)),M=s((()=>$(Z(null==k?void 0:k.description,b.value,l,i)))),C=s((()=>(null==k?void 0:k.construct)&&k.construct.params?k.construct.params.filter((e=>!e.name.includes("."))):null)),E=s((()=>{if(!(null==k?void 0:k.props))return null;let e=k.props;return j.value||(e=e.filter((e=>"private"!==e.access))),e.sort(((e,t)=>`${"static"===e.scope?"ZZZ":""}${e.name}`.localeCompare(`${"static"===t.scope?"ZZZ":""}${t.name}`)))})),D=s((()=>{if(!(null==k?void 0:k.methods))return null;let e=k.methods;return j.value||(e=e.filter((e=>"private"!==e.access))),e.sort(((e,t)=>`${"static"===e.scope?"ZZZ":""}${e.name}`.localeCompare(`${"static"===t.scope?"ZZZ":""}${t.name}`)))}));return x((()=>{const e=document.getElementById(`doc-for-${i.query.scrollTo}`);null==e||e.scrollIntoView({behavior:"smooth",block:"start"});const t=document.getElementById("container");!i.query.scrollTo&&t&&t.scrollTop>200&&t.scrollTo({top:0,behavior:"smooth"}),f.value&&_.highlightElement(f.value)})),w((()=>i.query.scrollTo),(()=>{const e=document.getElementById(`doc-for-${i.query.scrollTo}`);null==e||e.scrollIntoView({behavior:"smooth",block:"start"})})),(e,t)=>{var s,n,l,i,y,h,g,x,w,$,_,j,q,Z,I,P,B,V,R,F,O;return r(),a("div",ot,[d(T,{class:"float-right mt-2",meta:null==(s=o(k))?void 0:s.meta},null,8,["meta"]),d("div",dt,[d("h1",{id:`doc-for-${null==(n=o(k))?void 0:n.name}`,class:"!mb-3"},c(null==(l=o(k))?void 0:l.name),9,["id"]),d("p",it,[(null==(i=o(k))?void 0:i.extends)?(r(),a("span",ct,[ut,"string"==typeof(null==(y=o(k))?void 0:y.extends[0])?(r(),a(S,{key:0,type:null==(h=o(k))?void 0:h.extends},null,8,["type"])):(r(!0),a(u,{key:1},p(null==(g=o(k))?void 0:g.extends,(e=>(r(),a(H,{key:o(L)(e),names:e},null,8,["names"])))),128))])):v("",!0),(null==(x=o(k))?void 0:x.implements)?(r(),a("span",pt,[mt,"string"==typeof(null==(w=o(k))?void 0:w.implements[0])?(r(),a(S,{key:0,type:null==($=o(k))?void 0:$.implements},null,8,["type"])):(r(!0),a(u,{key:1},p(null==(_=o(k))?void 0:_.implements,(e=>(r(),a(H,{key:o(L)(e),names:e},null,8,["names"])))),128))])):v("",!0)]),(null==(j=o(k))?void 0:j.description)?(r(),a("p",{key:0,class:"!mb-2",innerHTML:o(M)},null,8,["innerHTML"])):v("",!0),(null==(q=o(k))?void 0:q.construct)?(r(),a("div",vt,[yt,d("pre",{ref:f,class:"javascript"},[d("code",null,[m("new "+c(null==(Z=o(b))?void 0:Z.global)+"."+c(null==(I=o(k))?void 0:I.name)+"(",1),(r(!0),a(u,null,p(o(C),((e,t)=>{var s,n;return r(),a("span",{key:e.name},c(e.name)+c((null!=(n=null==(s=o(C))?void 0:s.length)?n:1)-1!==t?", ":""),1)})),128)),ft])],512),o(k).construct.params?(r(),a(A,{key:0,parameters:o(k).construct.params},null,8,["parameters"])):v("",!0)])):v("",!0),d(pe,{properties:null==(P=o(k))?void 0:P.props,methods:null==(B=o(k))?void 0:B.methods,events:null==(V=o(k))?void 0:V.events},null,8,["properties","methods","events"]),o(E)&&o(E).length?(r(),a("h2",ht,"Properties")):v("",!0),(r(!0),a(u,null,p(o(E),(e=>(r(),a(je,{key:o(z)(e),prop:e},null,8,["prop"])))),128)),o(D)&&o(D).length?(r(),a("h2",gt,"Methods")):v("",!0),(r(!0),a(u,null,p(o(D),(e=>(r(),a(Ye,{key:o(z)(e),method:e},null,8,["method"])))),128)),(null==(R=o(k))?void 0:R.events)&&(null==(F=o(k))?void 0:F.events.length)?(r(),a("h2",bt,"Events")):v("",!0),(r(!0),a(u,null,p(null==(O=o(k))?void 0:O.events,(e=>(r(),a(at,{key:`e-${e.name}`,event:e},null,8,["event"])))),128))])])}}});export{kt as default};
