import{o as t,b as e,e as a,d as l,k as n,l as s,r,c as o,q as d,p as u,J as i,g as c,z as p,f,w as g,t as v,F as m,A as x,K as y,h as b,m as h,n as k,L as w,M as _,N as F,O as S,P as T}from"./vendor.334b0b9f.js";import{u as j,M as C,i as V,f as E}from"./index.83632b89.js";import{_ as M,a as z}from"./chevron-down.97d24cca.js";import{D as B,a as D,b as A,L as I,c as K,d as U,e as L,S as O,f as R,g as Y}from"./headlessui.esm.5c113eea.js";import{S as q}from"./Spinner.e9e738a2.js";const J={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},N=a("g",{fill:"none"},[a("path",{d:"M5 15l7-7l7 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var P={name:"heroicons-outline-chevron-up",render:function(a,l){return t(),e("svg",J,[N])}};const $=a("span",{class:"sr-only"},"Open menu",-1),G={class:"sticky top-0 overflow-y-auto overflow-x-hidden w-72 md:w-80 lg:custom-scroll sidebar-height"},H={class:"my-5 px-2 space-y-1 z-10"},Q={class:"pb-1"},W={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},X={class:"sr-only"},Z=b(" Docs settings "),tt={class:"relative mt-1"},et={class:"truncate"},at={class:"truncate"},lt={class:"relative mt-1"},nt={class:"truncate"},st={class:"truncate"},rt={class:"flex justify-between px-2"},ot=b("Show privates"),dt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ut={class:"sr-only"},it={class:"truncate"},ct={class:"truncate"},pt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},ft={class:"sr-only"},gt=b(" Classes "),vt={class:"truncate"},mt={class:"text-gray-800 dark:text-gray-100 py-2 text-md font-bold uppercase flex gap-1 items-center"},xt={class:"sr-only"},yt=b(" Typedefs "),bt={class:"truncate"};var ht=l({setup(l){var b,w,_,F,S;const T=n(),E=s(),q=j(),J=h(k).greater("lg"),N=r(!1),ht=r(),kt=o((()=>q.state.sources)),wt=o((()=>q.state.source)),_t=o((()=>q.state.tag)),Ft=o((()=>q.state.docs)),St=o((()=>q.state.branches)),Tt=o((()=>kt.value.find((t=>E.params.source===t.id)))),jt=r({source:null!=(w=null==(b=Tt.value)?void 0:b.source)?w:C,name:null!=(F=null==(_=Tt.value)?void 0:_.name)?F:C.name}),Ct=r(null!=(S=E.params.tag)?S:C.defaultTag),Vt=o((()=>{var t,e;return V.value?null==(t=Ft.value)?void 0:t.classes:null==(e=Ft.value)?void 0:e.classes.filter((t=>"private"!==t.access))})),Et=o((()=>{var t,e;return V.value?null==(t=Ft.value)?void 0:t.typedefs:null==(e=Ft.value)?void 0:e.typedefs.filter((t=>"private"!==t.access))}));return d(ht,(()=>N.value=!1)),u(J,(()=>N.value=!1),{immediate:!0}),i([jt,Ct],(async([t,e],[a,l])=>t!==a?(Ct.value=t.source.defaultTag,T.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:t.source.defaultTag,category:t.source.defaultFile.category,file:t.source.defaultFile.id}})):e!==l?T.push({name:"docs-source-tag-category-file",params:{source:t.source.id,tag:e,category:t.source.defaultFile.category,file:t.source.defaultFile.id}}):void 0)),(l,n)=>{var s,r,o;const d=M,u=z,i=P,b=c("router-link");return t(),e(m,null,[N.value?p("",!0):(t(),e("div",{key:0,class:["block fixed lg:hidden z-10 transition-transform transform-gpu",N.value?"translate-x-72 md:translate-x-80":null]},[a("button",{type:"button",class:"\n\t\t\t\trounded-md rounded-l-none rounded-tr-none\n\t\t\t\tp-3\n\t\t\t\tinline-flex\n\t\t\t\titems-center\n\t\t\t\tjustify-center\n\t\t\t\ttext-gray-200\n\t\t\t\tbg-discord-red-600\n\t\t\t\thover:bg-discord-red-630 hover:text-white\n\t\t\t\tfocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white\n\t\t\t","aria-controls":"sidebar-menu","aria-expanded":N.value,onClick:n[1]||(n[1]=t=>N.value=!N.value)},[$,a(d,{class:["h-6 w-6",{hidden:N.value,block:!N.value}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"])],2)),a("div",{ref:ht,class:["inline-block fixed lg:block lg:relative z-10 sidebar-color transition transform-gpu",N.value?"translate-x-0":"-translate-x-full lg:translate-x-0"]},[a("div",G,[a("nav",H,[a("ul",null,[a("li",Q,[a(f(B),{"default-open":!0},{default:g((({open:l})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",W,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",X,v(l?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),Z])])),_:2},1024),a(f(A),{as:"ul",class:"px-2 space-y-3"},{default:g((()=>[a("li",null,[a(f(I),{modelValue:jt.value,"onUpdate:modelValue":n[2]||(n[2]=t=>jt.value=t)},{default:g((({open:l})=>[a("div",tt,[a(f(K),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[a("span",et,v(jt.value.name),1),l?p("",!0):(t(),e(u,{key:0})),l?(t(),e(i,{key:1})):p("",!0)])),_:2},1024),a(f(U),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[(t(!0),e(m,null,x(f(kt),(l=>(t(),e(f(L),{key:l.source.id,class:"cursor-default",value:l},{default:g((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-red-500 text-gray-200":t}]},[a("span",at,v(l.name),1)],2)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(f(I),{modelValue:Ct.value,"onUpdate:modelValue":n[3]||(n[3]=t=>Ct.value=t)},{default:g((({open:l})=>[a("div",lt,[a(f(K),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\trelative\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tpy-1\n\t\t\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-between\n\t\t\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-200\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[a("span",nt,v(Ct.value),1),l?p("",!0):(t(),e(u,{key:0})),l?(t(),e(i,{key:1})):p("",!0)])),_:2},1024),a(f(U),{class:"\n\t\t\t\t\t\t\t\t\t\t\t\t\tabsolute\n\t\t\t\t\t\t\t\t\t\t\t\t\tw-full\n\t\t\t\t\t\t\t\t\t\t\t\t\tmt-1\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow-auto\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-base\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:text-white\n\t\t\t\t\t\t\t\t\t\t\t\t\tbg-gray-100\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:bg-[#1d1d1d]\n\t\t\t\t\t\t\t\t\t\t\t\t\trounded\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-h-60\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder\n\t\t\t\t\t\t\t\t\t\t\t\t\tdark:border-[#101010]\n\t\t\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\t\t\tz-40\n\t\t\t\t\t\t\t\t\t\t\t\t\tlg:custom-scroll\n\t\t\t\t\t\t\t\t\t\t\t\t"},{default:g((()=>[(t(!0),e(m,null,x(f(St),(l=>(t(),e(f(L),{key:l,class:"cursor-default",value:l},{default:g((({active:t})=>[a("li",{class:["px-3 py-1",{"bg-discord-red-500 text-gray-200":t}]},[a("span",st,v(l),1)],2)])),_:2},1032,["value"])))),128))])),_:1})])])),_:1},8,["modelValue"])]),a("li",null,[a(f(O),null,{default:g((()=>[a("div",rt,[a(f(R),{class:"mr-4 dark:text-gray-200"},{default:g((()=>[ot])),_:1}),a(f(Y),{modelValue:f(V),"onUpdate:modelValue":n[4]||(n[4]=t=>y(V)?V.value=t:null),class:["relative inline-flex h-6 items-center rounded-full w-11 focus:outline-none",f(V)?"bg-discord-red-500":"bg-gray-500"]},{default:g((()=>[a("span",{class:["inline-block w-4 h-4 bg-white rounded-full transition transform-gpu z-20",f(V)?"translate-x-6":"translate-x-1"]},null,2)])),_:1},8,["modelValue","class"])])])),_:1})])])),_:1})])),_:1})]),(t(!0),e(m,null,x(null==(s=f(Ft))?void 0:s.custom,((l,s)=>(t(),e("li",{key:s},[a(f(B),{"default-open":!0},{default:g((({open:r})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",dt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":r},[a("span",ut,v(r?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:r}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!r}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),a("span",it,v(l.name),1)])])),_:2},1024),a(f(A),{as:"ul"},{default:g((()=>[(t(!0),e(m,null,x(l.files,((l,r)=>{var o;return t(),e("li",{key:r},[a(b,{to:{name:"docs-source-tag-category-file",params:{source:null==(o=f(wt))?void 0:o.id,tag:f(_t),category:s,file:r}},class:"\n\t\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-red-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-red-530 text-gray-900",onClick:n[5]||(n[5]=t=>N.value=!1)},{default:g((()=>[a("span",ct,v("object"==typeof l?l.name:l),1)])),_:2},1032,["to"])])})),128))])),_:2},1024)])),_:2},1024)])))),128)),(null==(r=f(Vt))?void 0:r.length)?(t(),e(f(B),{key:0,as:"li","default-open":!0},{default:g((({open:l})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",pt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",ft,v(l?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),gt])])),_:2},1024),a(f(A),{as:"ul"},{default:g((()=>[(t(!0),e(m,null,x(f(Vt),(l=>{var s;return t(),e("li",{key:l.name},[a(b,{exact:"",to:{name:"docs-source-tag-class-class",params:{source:null==(s=f(wt))?void 0:s.id,tag:f(_t),class:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-red-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-red-530 text-gray-900",onClick:n[6]||(n[6]=t=>N.value=!1)},{default:g((()=>[a("span",vt,v(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):p("",!0),(null==(o=f(Et))?void 0:o.length)?(t(),e(f(B),{key:1,as:"li","default-open":!0},{default:g((({open:l})=>[a(f(D),{class:"w-full focus:outline-none",tabindex:"-1"},{default:g((()=>[a("div",mt,[a("button",{class:"leading-3 rounded-md p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-white","aria-expanded":l},[a("span",xt,v(l?"Shrink":"Expand"),1),a(d,{class:["inline-block",{hidden:l}],"aria-hidden":"true"},null,8,["class"]),a(u,{class:["inline-block",{hidden:!l}],"aria-hidden":"true"},null,8,["class"])],8,["aria-expanded"]),yt])])),_:2},1024),a(f(A),{as:"ul"},{default:g((()=>[(t(!0),e(m,null,x(f(Et),(l=>{var s;return t(),e("li",{key:l.name},[a(b,{exact:"",to:{name:"docs-source-tag-typedef-typedef",params:{source:null==(s=f(wt))?void 0:s.id,tag:f(_t),typedef:l.name}},class:"\n\t\t\t\t\t\t\t\t\t\ttext-gray-600\n\t\t\t\t\t\t\t\t\t\tdark:text-gray-300\n\t\t\t\t\t\t\t\t\t\tborder-l-4 border-transparent\n\t\t\t\t\t\t\t\t\t\trounded-sm\n\t\t\t\t\t\t\t\t\t\thover:border-l-4 hover:border-discord-red-500 hover:text-gray-800\n\t\t\t\t\t\t\t\t\t\tdark:hover:text-gray-100\n\t\t\t\t\t\t\t\t\t\tgroup\n\t\t\t\t\t\t\t\t\t\tflex\n\t\t\t\t\t\t\t\t\t\titems-center\n\t\t\t\t\t\t\t\t\t\tpx-3\n\t\t\t\t\t\t\t\t\t\tpy-2\n\t\t\t\t\t\t\t\t\t\ttext-sm\n\t\t\t\t\t\t\t\t\t\tfont-semibold\n\t\t\t\t\t\t\t\t\t\tfocus:outline-none\n\t\t\t\t\t\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-white\n\t\t\t\t\t\t\t\t\t","exact-active-class":"border-l-4 border-discord-red-530 text-gray-900",onClick:n[7]||(n[7]=t=>N.value=!1)},{default:g((()=>[a("span",bt,v(l.name),1)])),_:2},1032,["to"])])})),128))])),_:1})])),_:1})):p("",!0)])])])],2)],64)}}});const kt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},wt=a("g",{fill:"none"},[a("path",{d:"M8 7l4-4m0 0l4 4m-4-4v18",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var _t={name:"heroicons-outline-arrow-narrow-up",render:function(a,l){return t(),e("svg",kt,[wt])}};const Ft={class:"fixed bottom-0 right-0 pb-4"},St={class:"px-6 lg:px-8"};var Tt=l({setup:l=>(l,n)=>{const s=_t;return t(),e("div",Ft,[a("div",St,[a("button",{class:"\n\t\t\t\t\tbg-discord-red-500\n\t\t\t\t\thover:bg-discord-red-530\n\t\t\t\t\tdark:hover:bg-discord-red-560\n\t\t\t\t\ttext-gray-200\n\t\t\t\t\thover:text-white\n\t\t\t\t\trounded-md\n\t\t\t\t\tp-2\n\t\t\t\t\tleading-3\n\t\t\t\t\tfocus:outline-none\n\t\t\t\t\tfocus-visible:ring-1 focus-visible:ring-gray-200\n\t\t\t\t",onClick:n[1]||(n[1]=t=>{return null==(e=document.getElementById("container"))?void 0:e.scrollTo({top:0,behavior:"smooth"});var e})},[a(s,{class:"h-6 w-6"})])])])}});const jt={class:"lg:flex mx-auto w-full max-w-screen-2xl"},Ct={key:1,class:"mx-auto py-16 sm:px-8 lg:py-8 w-full text-center dark:text-gray-200"},Vt=b(" Couldn't load the documentation data. ");var Et=l({setup(l){const d=n(),i=s(),g=j(),{Ctrl_K:m}=w({passive:!1,onEventFired(t){t.ctrlKey&&"k"===t.key&&"keydown"===t.type&&t.preventDefault()}}),x=_({[C.id]:C}),y=r(!1),b=o((()=>g.state.source)),h=o((()=>g.state.tag)),k=o((()=>g.state.docs));F((()=>{const t=document.getElementById("container");S(t,"scroll",(()=>{t&&t.scrollTop>300?y.value=!0:y.value=!1}))})),u(m,(()=>{var t;null==(t=document.getElementById("search"))||t.focus()}));return T((()=>{(async()=>{var t,e,a,l,n,s,r,o,u,c,p,f,v,m,y,w,_,F,S,T;if("/"!==i.path)i.params.source&&i.params.tag&&((null==(t=k.value)?void 0:t.id)!==x[i.params.source].id||(null==(e=k.value)?void 0:e.tag)!==i.params.tag)&&(await g.dispatch({type:"fetchDocs",inputSource:null!=(a=x[i.params.source])?a:C,inputTag:null!=(l=i.params.tag)?l:h.value}),await g.dispatch({type:"fetchTags",currentSource:null!=(n=x[i.params.source])?n:C})),i.params.source&&x[i.params.source]?(g.commit({type:"setSource",source:x[i.params.source]}),i.params.tag?(g.commit({type:"setTag",tag:i.params.tag}),g.commit({type:"setSource",source:x[i.params.source]}),i.params.file||i.params.class||i.params.typedef||"docs-source-tag-search"===i.name||d.replace({name:"docs-source-tag-category-file",params:{source:null!=(y=null==(m=b.value)?void 0:m.id)?y:C.id,tag:null!=(w=h.value)?w:C.defaultTag,category:null!=(F=null==(_=b.value)?void 0:_.defaultFile.category)?F:C.defaultFile.category,file:null!=(T=null==(S=b.value)?void 0:S.defaultFile.id)?T:C.defaultFile.id}})):d.replace({name:"docs-source-tag-category-file",params:{source:null!=(r=null==(s=b.value)?void 0:s.id)?r:C.id,tag:(null==(o=b.value)?void 0:o.recentTag)||(null==(u=b.value)?void 0:u.defaultTag),category:null!=(p=null==(c=b.value)?void 0:c.defaultFile.category)?p:C.defaultFile.category,file:null!=(v=null==(f=b.value)?void 0:f.defaultFile.id)?v:C.defaultFile.id}})):d.replace({name:"docs-source-tag-category-file",params:{source:C.id,tag:C.defaultTag,category:C.defaultFile.category,file:C.defaultFile.id}})})()})),(l,n)=>{const s=c("router-view");return t(),e("div",null,[a("div",jt,[a(ht),f(k)?(t(),e(s,{key:l.$route.path})):f(E)?(t(),e("div",Ct,[Vt,a("pre",null,v(f(E).toString()),1)])):(t(),e(q,{key:2}))]),y.value?(t(),e(Tt,{key:0})):p("",!0)])}}});export{Et as default};
