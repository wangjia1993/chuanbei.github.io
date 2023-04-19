import{D as e,z as t,o as n,n as o,E as r,R as a,B as s,a6 as i,w as c,r as u,Q as l,a as d,H as f,u as p,P as m,d as v,c as h,C as g,y,G as b}from"./index-a89a956f.js";const w=e=>null!=e,x=e=>"function"==typeof e,$=e=>null!==e&&"object"==typeof e,O=e=>$(e)&&x(e.then)&&x(e.catch),C=e=>"[object Date]"===Object.prototype.toString.call(e)&&!Number.isNaN(e.getTime()),S=e=>"number"==typeof e||/^\d+(\.\d+)?$/.test(e);function k(){}const E=Object.assign,T="undefined"!=typeof window;function j(e,t){const n=t.split(".");let o=e;return n.forEach((e=>{var t;o=$(o)&&null!=(t=o[e])?t:""})),o}function L(e,t,n){return t.reduce(((t,o)=>(n&&void 0===e[o]||(t[o]=e[o]),t)),{})}const A=(e,t)=>JSON.stringify(e)===JSON.stringify(t),z=null,N=[Number,String],P={type:Boolean,default:!0},B=e=>({type:e,required:!0}),D=()=>({type:Array,default:()=>[]}),I=e=>({type:Number,default:e}),V=e=>({type:N,default:e}),H=e=>({type:String,default:e});var M="undefined"!=typeof window;function R(e){return M?requestAnimationFrame(e):-1}function Y(e){R((()=>R(e)))}var F=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),W=e=>{const t=p(e);if(t===window){const e=t.innerWidth,n=t.innerHeight;return F(e,n)}return(null==t?void 0:t.getBoundingClientRect)?t.getBoundingClientRect():F(0,0)};function q(e){const n=l(e,null);if(n){const e=t(),{link:o,unlink:r,internalChildren:s}=n;o(e),a((()=>r(e)));return{parent:n,index:d((()=>s.indexOf(e)))}}return{parent:null,index:u(-1)}}var J,Z,G=(e,t)=>{const n=e.indexOf(t);return-1===n?e.findIndex((e=>void 0!==t.key&&null!==t.key&&e.type===t.type&&e.key===t.key)):n};function Q(e,t,n){const o=function(e){const t=[],n=e=>{Array.isArray(e)&&e.forEach((e=>{var o;m(e)&&(t.push(e),(null==(o=e.component)?void 0:o.subTree)&&(t.push(e.component.subTree),n(e.component.subTree.children)),e.children&&n(e.children))}))};return n(e),t}(e.subTree.children);n.sort(((e,t)=>G(o,e.vnode)-G(o,t.vnode)));const r=n.map((e=>e.proxy));t.sort(((e,t)=>r.indexOf(e)-r.indexOf(t)))}function U(n){const o=e([]),r=e([]),a=t();return{children:o,linkChildren:e=>{f(n,Object.assign({link:e=>{e.proxy&&(r.push(e),o.push(e.proxy),Q(a,o,r))},unlink:e=>{const t=r.indexOf(e);o.splice(t,1),r.splice(t,1)},children:o,internalChildren:r},e))}}}function X(e){let t;n((()=>{e(),o((()=>{t=!0}))})),r((()=>{t&&e()}))}function _(e,t,n={}){if(!M)return;const{target:o=window,passive:r=!1,capture:u=!1}=n;let l,d=!1;const f=n=>{if(d)return;const o=p(n);o&&!l&&(o.addEventListener(e,t,{capture:u,passive:r}),l=!0)},m=n=>{if(d)return;const o=p(n);o&&l&&(o.removeEventListener(e,t,u),l=!1)};let v;return a((()=>m(o))),s((()=>m(o))),X((()=>f(o))),i(o)&&(v=c(o,((e,t)=>{m(t),f(e)}))),()=>{null==v||v(),m(o),d=!0}}var K,ee=/scroll|auto|overlay/i,te=M?window:void 0;function ne(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType}function oe(e,t=te){let n=e;for(;n&&n!==t&&ne(n);){const{overflowY:e}=window.getComputedStyle(n);if(ee.test(e))return n;n=n.parentNode}return t}function re(e,t=te){const o=u();return n((()=>{e.value&&(o.value=oe(e.value,t))})),o}function ae(){if(!K&&(K=u("visible"),M)){const e=()=>{K.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return K}function se(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function ie(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function ce(e){ie(window,e),ie(document.body,e)}function ue(e,t){if(e===window)return 0;const n=t?se(t):window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return W(e).top+n}T&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());function le(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&(e=>{e.stopPropagation()})(e)}function de(e){const t=p(e);if(!t)return!1;const n=window.getComputedStyle(t),o="none"===n.display,r=null===t.offsetParent&&"fixed"!==n.position;return o||r}const{width:fe,height:pe}=function(){if(!J&&(J=u(0),Z=u(0),M)){const e=()=>{J.value=window.innerWidth,Z.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:J,height:Z}}();function me(e){if(w(e))return S(e)?`${e}px`:String(e)}function ve(e){if(w(e)){if(Array.isArray(e))return{width:me(e[0]),height:me(e[1])};const t=me(e);return{width:t,height:t}}}function he(e){const t={};return void 0!==e&&(t.zIndex=+e),t}let ge;function ye(e){return+(e=e.replace(/rem/g,""))*function(){if(!ge){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;ge=parseFloat(t)}return ge}()}function be(e){if("number"==typeof e)return e;if(T){if(e.includes("rem"))return ye(e);if(e.includes("vw"))return function(e){return+(e=e.replace(/vw/g,""))*fe.value/100}(e);if(e.includes("vh"))return function(e){return+(e=e.replace(/vh/g,""))*pe.value/100}(e)}return parseFloat(e)}const we=/-(\w)/g,xe=e=>e.replace(we,((e,t)=>t.toUpperCase()));function $e(e,t=2){let n=e+"";for(;n.length<t;)n="0"+n;return n}const Oe=(e,t,n)=>Math.min(Math.max(e,t),n),{hasOwnProperty:Ce}=Object.prototype;function Se(e,t){return Object.keys(t).forEach((n=>{!function(e,t,n){const o=t[n];w(o)&&(Ce.call(e,n)&&$(o)?e[n]=Se(Object(e[n]),o):e[n]=o)}(e,t,n)})),e}const ke=u("zh-CN"),Ee=e({"zh-CN":{name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}});var Te={messages:()=>Ee[ke.value],use(e,t){ke.value=e,this.add({[e]:t})},add(e={}){Se(Ee,e)}};function je(e){const t=xe(e)+".";return(e,...n)=>{const o=Te.messages(),r=j(o,t+e)||j(o,e);return x(r)?r(...n):r}}function Le(e,t){return t?"string"==typeof t?` ${e}--${t}`:Array.isArray(t)?t.reduce(((t,n)=>t+Le(e,n)),""):Object.keys(t).reduce(((n,o)=>n+(t[o]?Le(e,o):"")),""):""}function Ae(e){return(t,n)=>(t&&"string"!=typeof t&&(n=t,t=""),`${t=t?`${e}__${t}`:e}${Le(t,n)}`)}function ze(e){const t=`van-${e}`;return[t,Ae(t),je(t)]}const Ne="van-hairline",Pe=`${Ne}--bottom`,Be=`${Ne}--surround`,De=`${Ne}--top-bottom`,Ie=`${Ne}-unset--top-bottom`,Ve="van-haptics-feedback";function He(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(xe(`-${n}`),e))},e}const[Me,Re]=ze("badge");const Ye=He(v({name:Me,props:{dot:Boolean,max:N,tag:H("div"),color:String,offset:Array,content:N,showZero:P,position:H("top-right")},setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:n,showZero:o}=e;return w(n)&&""!==n&&(o||0!==n&&"0"!==n)},o=()=>{const{dot:o,max:r,content:a}=e;if(!o&&n())return t.content?t.content():w(r)&&S(a)&&+a>+r?`${r}+`:a},r=e=>e.startsWith("-")?e.replace("-",""):`-${e}`,a=d((()=>{const n={background:e.color};if(e.offset){const[o,a]=e.offset,{position:s}=e,[i,c]=s.split("-");t.default?(n[i]="number"==typeof a?me("top"===i?a:-a):"top"===i?me(a):r(a),n[c]="number"==typeof o?me("left"===c?o:-o):"left"===c?me(o):r(o)):(n.marginTop=me(a),n.marginLeft=me(o))}return n})),s=()=>{if(n()||e.dot)return h("div",{class:Re([e.position,{dot:e.dot,fixed:!!t.default}]),style:a.value},[o()])};return()=>{if(t.default){const{tag:n}=e;return h(n,{class:Re("wrapper")},{default:()=>[t.default(),s()]})}return s()}}}));let Fe=2e3;const We=()=>++Fe,[qe,Je]=ze("config-provider"),Ze=Symbol(qe);v({name:qe,props:{tag:H("div"),theme:H("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String},setup(e,{slots:t}){const n=d((()=>function(e){const t={};return Object.keys(e).forEach((n=>{var o;t[`--van-${o=n,o.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")}`]=e[n]})),t}(E({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight))));if(T){const t=()=>{document.documentElement.classList.add(`van-theme-${e.theme}`)},n=(t=e.theme)=>{document.documentElement.classList.remove(`van-theme-${t}`)};c((()=>e.theme),((e,o)=>{o&&n(o),t()}),{immediate:!0}),r(t),s(n),g(n)}return f(Ze,e),y((()=>{var t;void 0!==e.zIndex&&(t=e.zIndex,Fe=t)})),()=>h(e.tag,{class:Je(),style:n.value},{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t)]}})}});const[Ge,Qe]=ze("icon");const Ue=He(v({name:Ge,props:{dot:Boolean,tag:H("i"),name:String,size:N,badge:N,color:String,badgeProps:Object,classPrefix:String},setup(e,{slots:t}){const n=l(Ze,null),o=d((()=>e.classPrefix||(null==n?void 0:n.iconPrefix)||Qe()));return()=>{const{tag:n,dot:r,name:a,size:s,badge:i,color:c}=e,u=(e=>null==e?void 0:e.includes("/"))(a);return h(Ye,b({dot:r,tag:n,class:[o.value,u?"":`${o.value}-${a}`],style:{color:c,fontSize:me(s)},content:i},e.badgeProps),{default:()=>{var e;return[null==(e=t.default)?void 0:e.call(t),u&&h("img",{class:Qe("image"),src:a},null)]}})}}}));export{Ye as A,Pe as B,U as C,ae as D,Y as E,me as F,De as G,Ve as H,Ue as I,ce as J,ue as K,L,z as M,A as N,Ie as O,$e as P,C as Q,Be as R,O as S,k as T,oe as U,We as V,I as W,$ as X,ve as Y,pe as a,He as b,ze as c,Oe as d,E as e,D as f,he as g,q as h,w as i,_ as j,se as k,T as l,B as m,N as n,X as o,le as p,H as q,R as r,ie as s,P as t,W as u,V as v,fe as w,re as x,be as y,de as z};
