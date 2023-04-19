import{S as e,T as t,e as n,n as o,t as r,M as s,o as i,U as a,p as c,c as l,j as u,g as f,i as d,b as p,q as h,V as m,H as y,I as g,L as b,W as w,l as v,X as O}from"./index-d94731c6.js";import{L as E}from"./index-21b4fff6.js";import{z as S,r as R,B as A,C,w as x,d as T,c as j,a3 as P,I as N,J as k,a as B,n as L,o as U,E as _,H as F,a4 as D,F as I,G as z,R as q,a5 as M,D as H}from"./index-a89a956f.js";import{P as J}from"./on-popup-reopen-6627da6a.js";function V(n,{args:o=[],done:r,canceled:s}){if(n){const i=n.apply(null,o);e(i)?i.then((e=>{e?r():s&&s()})).catch(t):i?r():s&&s()}else r()}function W(e){const t=S();t&&n(t.proxy,e)}const K={show:Boolean,zIndex:o,overlay:r,duration:o,teleport:[String,Object],lockScroll:r,lazyRender:r,beforeClose:Function,overlayStyle:Object,overlayClass:s,transitionAppear:Boolean,closeOnClickOverlay:r};function $(){const e=R(0),t=R(0),n=R(0),o=R(0),r=R(0),s=R(0),i=R(""),a=()=>{n.value=0,o.value=0,r.value=0,s.value=0,i.value=""};return{move:a=>{const c=a.touches[0];n.value=(c.clientX<0?0:c.clientX)-e.value,o.value=c.clientY-t.value,r.value=Math.abs(n.value),s.value=Math.abs(o.value);var l,u;(!i.value||r.value<10&&s.value<10)&&(i.value=(l=r.value,u=s.value,l>u?"horizontal":u>l?"vertical":""))},start:n=>{a(),e.value=n.touches[0].clientX,t.value=n.touches[0].clientY},reset:a,startX:e,startY:t,deltaX:n,deltaY:o,offsetX:r,offsetY:s,direction:i,isVertical:()=>"vertical"===i.value,isHorizontal:()=>"horizontal"===i.value}}let X=0;const G="van-overflow-hidden";function Y(e){const t=R(!1);return x(e,(e=>{e&&(t.value=e)}),{immediate:!0}),e=>()=>t.value?e():null}const[Q,Z]=l("overlay");const ee=p(T({name:Q,props:{show:Boolean,zIndex:o,duration:o,className:s,lockScroll:r,lazyRender:r,customStyle:Object},setup(e,{slots:t}){const o=R(),r=Y((()=>e.show||!e.lazyRender))((()=>{var r;const s=n(f(e.zIndex),e.customStyle);return d(e.duration)&&(s.animationDuration=`${e.duration}s`),N(j("div",{ref:o,style:s,class:[Z(),e.className]},[null==(r=t.default)?void 0:r.call(t)]),[[k,e.show]])}));return u("touchmove",(t=>{e.lockScroll&&c(t,!0)}),{target:o}),()=>j(P,{name:"van-fade",appear:!0},{default:r})}})),te=n({},K,{round:Boolean,position:h("center"),closeIcon:h("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:h("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[ne,oe]=l("popup");const re=p(T({name:ne,inheritAttrs:!1,props:te,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:o}){let r,s;const l=R(),f=R(),p=Y((()=>e.show||!e.lazyRender)),h=B((()=>{const t={zIndex:l.value};if(d(e.duration)){t["center"===e.position?"animationDuration":"transitionDuration"]=`${e.duration}s`}return t})),b=()=>{r||(r=!0,l.value=void 0!==e.zIndex?+e.zIndex:m(),t("open"))},w=()=>{r&&V(e.beforeClose,{done(){r=!1,t("close"),t("update:show",!1)}})},v=n=>{t("clickOverlay",n),e.closeOnClickOverlay&&w()},O=()=>{if(e.overlay)return j(ee,{show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:v},{default:o["overlay-content"]})},E=e=>{t("clickCloseIcon",e),w()},S=()=>{if(e.closeable)return j(g,{role:"button",tabindex:0,name:e.closeIcon,class:[oe("close-icon",e.closeIconPosition),y],classPrefix:e.iconPrefix,onClick:E},null)},T=()=>t("opened"),q=()=>t("closed"),M=e=>t("keydown",e),H=p((()=>{var t;const{round:r,position:s,safeAreaInsetTop:i,safeAreaInsetBottom:a}=e;return N(j("div",z({ref:f,style:h.value,role:"dialog",tabindex:0,class:[oe({round:r,[s]:s}),{"van-safe-area-top":i,"van-safe-area-bottom":a}],onKeydown:M},n),[null==(t=o.default)?void 0:t.call(o),S()]),[[k,e.show]])})),K=()=>{const{position:t,transition:n,transitionAppear:o}=e;return j(P,{name:n||("center"===t?"van-fade":`van-popup-slide-${t}`),appear:o,onAfterEnter:T,onAfterLeave:q},{default:H})};return x((()=>e.show),(e=>{e&&!r&&(b(),0===n.tabindex&&L((()=>{var e;null==(e=f.value)||e.focus()}))),!e&&r&&(r=!1,t("close"))})),W({popupRef:f}),function(e,t){const n=$(),o=t=>{n.move(t);const o=n.deltaY.value>0?"10":"01",r=a(t.target,e.value),{scrollHeight:s,offsetHeight:i,scrollTop:l}=r;let u="11";0===l?u=i>=s?"00":"01":l+i>=s&&(u="10"),"11"===u||!n.isVertical()||parseInt(u,2)&parseInt(o,2)||c(t,!0)},r=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",o,{passive:!1}),X||document.body.classList.add(G),X++},s=()=>{X&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",o),X--,X||document.body.classList.remove(G))},l=()=>t()&&s();i((()=>t()&&r())),A(l),C(l),x(t,(e=>{e?r():s()}))}(f,(()=>e.show&&e.lockScroll)),u("popstate",(()=>{e.closeOnPopstate&&(w(),s=!1)})),U((()=>{e.show&&b()})),_((()=>{s&&(t("update:show",!0),s=!1)})),A((()=>{e.show&&e.teleport&&(w(),s=!0)})),F(J,(()=>e.show)),()=>e.teleport?j(D,{to:e.teleport},{default:()=>[O(),K()]}):j(I,null,[O(),K()])}}));let se=0;const[ie,ae]=l("toast"),ce=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"];var le=T({name:ie,props:{icon:String,show:Boolean,type:h("text"),overlay:Boolean,message:o,iconSize:o,duration:w(2e3),position:h("middle"),teleport:[String,Object],wordBreak:String,className:s,iconPrefix:String,transition:h("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:s,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean},emits:["update:show"],setup(e,{emit:t,slots:n}){let o,r=!1;const s=()=>{const t=e.show&&e.forbidClick;r!==t&&(r=t,r?(se||document.body.classList.add("van-toast--unclickable"),se++):se&&(se--,se||document.body.classList.remove("van-toast--unclickable")))},i=e=>t("update:show",e),a=()=>{e.closeOnClick&&i(!1)},c=()=>clearTimeout(o),l=()=>{const{icon:t,type:n,iconSize:o,iconPrefix:r,loadingType:s}=e;return t||"success"===n||"fail"===n?j(g,{name:t||n,size:o,class:ae("icon"),classPrefix:r},null):"loading"===n?j(E,{class:ae("loading"),size:o,type:s},null):void 0},u=()=>{const{type:t,message:o}=e;return n.message?j("div",{class:ae("text")},[n.message()]):d(o)&&""!==o?"html"===t?j("div",{key:0,class:ae("text"),innerHTML:String(o)},null):j("div",{class:ae("text")},[o]):void 0};return x((()=>[e.show,e.forbidClick]),s),x((()=>[e.show,e.type,e.message,e.duration]),(()=>{c(),e.show&&e.duration>0&&(o=setTimeout((()=>{i(!1)}),e.duration))})),U(s),q(s),()=>j(re,z({class:[ae([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:a,onClosed:c,"onUpdate:show":i},b(e,ce)),{default:()=>[l(),u()]})}});let ue=[],fe=!1,de=n({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1});const pe=new Map;function he(){const{instance:e,unmount:t}=function(e){const t=M(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}({setup(){const e=R(""),{open:t,state:o,close:r,toggle:s}=function(){const e=H({show:!1}),t=t=>{e.show=t},o=o=>{n(e,o,{transitionAppear:!0}),t(!0)},r=()=>t(!1);return W({open:o,close:r,toggle:t}),{open:o,close:r,state:e,toggle:t}}(),i=()=>{};return x(e,(e=>{o.message=e})),S().render=()=>j(le,z(o,{onClosed:i,"onUpdate:show":s}),null),{open:t,close:r,message:e}}});return e}function me(e={}){if(!v)return{};const t=function(){if(!ue.length||fe){const e=he();ue.push(e)}return ue[ue.length-1]}(),o=O(r=e)?r:{message:r};var r;return t.open(n({},de,pe.get(o.type||de.type),o)),t}function ye(e,t){return function(){return e.apply(t,arguments)}}p(le);const{toString:ge}=Object.prototype,{getPrototypeOf:be}=Object,we=(ve=Object.create(null),e=>{const t=ge.call(e);return ve[t]||(ve[t]=t.slice(8,-1).toLowerCase())});var ve;const Oe=e=>(e=e.toLowerCase(),t=>we(t)===e),Ee=e=>t=>typeof t===e,{isArray:Se}=Array,Re=Ee("undefined");const Ae=Oe("ArrayBuffer");const Ce=Ee("string"),xe=Ee("function"),Te=Ee("number"),je=e=>null!==e&&"object"==typeof e,Pe=e=>{if("object"!==we(e))return!1;const t=be(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},Ne=Oe("Date"),ke=Oe("File"),Be=Oe("Blob"),Le=Oe("FileList"),Ue=Oe("URLSearchParams");function _e(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let o,r;if("object"!=typeof e&&(e=[e]),Se(e))for(o=0,r=e.length;o<r;o++)t.call(null,e[o],o,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let i;for(o=0;o<s;o++)i=r[o],t.call(null,e[i],i,e)}}function Fe(e,t){t=t.toLowerCase();const n=Object.keys(e);let o,r=n.length;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const De="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,Ie=e=>!Re(e)&&e!==De;const ze=(qe="undefined"!=typeof Uint8Array&&be(Uint8Array),e=>qe&&e instanceof qe);var qe;const Me=Oe("HTMLFormElement"),He=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Je=Oe("RegExp"),Ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),o={};_e(n,((n,r)=>{!1!==t(n,r,e)&&(o[r]=n)})),Object.defineProperties(e,o)},We="abcdefghijklmnopqrstuvwxyz",Ke="0123456789",$e={DIGIT:Ke,ALPHA:We,ALPHA_DIGIT:We+We.toUpperCase()+Ke};const Xe={isArray:Se,isArrayBuffer:Ae,isBuffer:function(e){return null!==e&&!Re(e)&&null!==e.constructor&&!Re(e.constructor)&&xe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||ge.call(e)===t||xe(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Ae(e.buffer),t},isString:Ce,isNumber:Te,isBoolean:e=>!0===e||!1===e,isObject:je,isPlainObject:Pe,isUndefined:Re,isDate:Ne,isFile:ke,isBlob:Be,isRegExp:Je,isFunction:xe,isStream:e=>je(e)&&xe(e.pipe),isURLSearchParams:Ue,isTypedArray:ze,isFileList:Le,forEach:_e,merge:function e(){const{caseless:t}=Ie(this)&&this||{},n={},o=(o,r)=>{const s=t&&Fe(n,r)||r;Pe(n[s])&&Pe(o)?n[s]=e(n[s],o):Pe(o)?n[s]=e({},o):Se(o)?n[s]=o.slice():n[s]=o};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&_e(arguments[r],o);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(_e(t,((t,o)=>{n&&xe(t)?e[o]=ye(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,o)=>{e.prototype=Object.create(t.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,o)=>{let r,s,i;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)i=r[s],o&&!o(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0);e=!1!==n&&be(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:we,kindOfTest:Oe,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const o=e.indexOf(t,n);return-1!==o&&o===n},toArray:e=>{if(!e)return null;if(Se(e))return e;let t=e.length;if(!Te(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=n.next())&&!o.done;){const n=o.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const o=[];for(;null!==(n=e.exec(t));)o.push(n);return o},isHTMLForm:Me,hasOwnProperty:He,hasOwnProp:He,reduceDescriptors:Ve,freezeMethods:e=>{Ve(e,((t,n)=>{if(xe(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const o=e[n];xe(o)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},o=e=>{e.forEach((e=>{n[e]=!0}))};return Se(e)?o(e):o(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:Fe,global:De,isContextDefined:Ie,ALPHABET:$e,generateString:(e=16,t=$e.ALPHA_DIGIT)=>{let n="";const{length:o}=t;for(;e--;)n+=t[Math.random()*o|0];return n},isSpecCompliantForm:function(e){return!!(e&&xe(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,o)=>{if(je(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[o]=e;const r=Se(e)?[]:{};return _e(e,((e,t)=>{const s=n(e,o+1);!Re(s)&&(r[t]=s)})),t[o]=void 0,r}}return e};return n(e,0)}};function Ge(e,t,n,o,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),o&&(this.request=o),r&&(this.response=r)}Xe.inherits(Ge,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Xe.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ye=Ge.prototype,Qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{Qe[e]={value:e}})),Object.defineProperties(Ge,Qe),Object.defineProperty(Ye,"isAxiosError",{value:!0}),Ge.from=(e,t,n,o,r,s)=>{const i=Object.create(Ye);return Xe.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),Ge.call(i,e.message,t,n,o,r),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function Ze(e){return Xe.isPlainObject(e)||Xe.isArray(e)}function et(e){return Xe.endsWith(e,"[]")?e.slice(0,-2):e}function tt(e,t,n){return e?e.concat(t).map((function(e,t){return e=et(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const nt=Xe.toFlatObject(Xe,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ot(e,t,n){if(!Xe.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const o=(n=Xe.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!Xe.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&Xe.isSpecCompliantForm(t);if(!Xe.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(Xe.isDate(e))return e.toISOString();if(!a&&Xe.isBlob(e))throw new Ge("Blob is not supported. Use a Buffer instead.");return Xe.isArrayBuffer(e)||Xe.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(Xe.endsWith(n,"{}"))n=o?n:n.slice(0,-2),e=JSON.stringify(e);else if(Xe.isArray(e)&&function(e){return Xe.isArray(e)&&!e.some(Ze)}(e)||(Xe.isFileList(e)||Xe.endsWith(n,"[]"))&&(a=Xe.toArray(e)))return n=et(n),a.forEach((function(e,o){!Xe.isUndefined(e)&&null!==e&&t.append(!0===i?tt([n],o,s):null===i?n:n+"[]",c(e))})),!1;return!!Ze(e)||(t.append(tt(r,n,s),c(e)),!1)}const u=[],f=Object.assign(nt,{defaultVisitor:l,convertValue:c,isVisitable:Ze});if(!Xe.isObject(e))throw new TypeError("data must be an object");return function e(n,o){if(!Xe.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+o.join("."));u.push(n),Xe.forEach(n,(function(n,s){!0===(!(Xe.isUndefined(n)||null===n)&&r.call(t,n,Xe.isString(s)?s.trim():s,o,f))&&e(n,o?o.concat(s):[s])})),u.pop()}}(e),t}function rt(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function st(e,t){this._pairs=[],e&&ot(e,this,t)}const it=st.prototype;function at(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ct(e,t,n){if(!t)return e;const o=n&&n.encode||at,r=n&&n.serialize;let s;if(s=r?r(t,n):Xe.isURLSearchParams(t)?t.toString():new st(t,n).toString(o),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}it.append=function(e,t){this._pairs.push([e,t])},it.toString=function(e){const t=e?function(t){return e.call(this,t,rt)}:rt;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const lt=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Xe.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ut={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ft={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:st,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function dt(e){function t(e,n,o,r){let s=e[r++];const i=Number.isFinite(+s),a=r>=e.length;if(s=!s&&Xe.isArray(o)?o.length:s,a)return Xe.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!i;o[s]&&Xe.isObject(o[s])||(o[s]=[]);return t(e,n,o[s],r)&&Xe.isArray(o[s])&&(o[s]=function(e){const t={},n=Object.keys(e);let o;const r=n.length;let s;for(o=0;o<r;o++)s=n[o],t[s]=e[s];return t}(o[s])),!i}if(Xe.isFormData(e)&&Xe.isFunction(e.entries)){const n={};return Xe.forEachEntry(e,((e,o)=>{t(function(e){return Xe.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),o,n,0)})),n}return null}const pt={"Content-Type":void 0};const ht={transitional:ut,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",o=n.indexOf("application/json")>-1,r=Xe.isObject(e);r&&Xe.isHTMLForm(e)&&(e=new FormData(e));if(Xe.isFormData(e))return o&&o?JSON.stringify(dt(e)):e;if(Xe.isArrayBuffer(e)||Xe.isBuffer(e)||Xe.isStream(e)||Xe.isFile(e)||Xe.isBlob(e))return e;if(Xe.isArrayBufferView(e))return e.buffer;if(Xe.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ot(e,new ft.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,o){return ft.isNode&&Xe.isBuffer(e)?(this.append(t,e.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=Xe.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ot(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||o?(t.setContentType("application/json",!1),function(e,t,n){if(Xe.isString(e))try{return(t||JSON.parse)(e),Xe.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ht.transitional,n=t&&t.forcedJSONParsing,o="json"===this.responseType;if(e&&Xe.isString(e)&&(n&&!this.responseType||o)){const n=!(t&&t.silentJSONParsing)&&o;try{return JSON.parse(e)}catch(r){if(n){if("SyntaxError"===r.name)throw Ge.from(r,Ge.ERR_BAD_RESPONSE,this,null,this.response);throw r}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Xe.forEach(["delete","get","head"],(function(e){ht.headers[e]={}})),Xe.forEach(["post","put","patch"],(function(e){ht.headers[e]=Xe.merge(pt)}));const mt=ht,yt=Xe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gt=Symbol("internals");function bt(e){return e&&String(e).trim().toLowerCase()}function wt(e){return!1===e||null==e?e:Xe.isArray(e)?e.map(wt):String(e)}function vt(e,t,n,o,r){return Xe.isFunction(o)?o.call(this,t,n):(r&&(t=n),Xe.isString(t)?Xe.isString(o)?-1!==t.indexOf(o):Xe.isRegExp(o)?o.test(t):void 0:void 0)}class Ot{constructor(e){e&&this.set(e)}set(e,t,n){const o=this;function r(e,t,n){const r=bt(t);if(!r)throw new Error("header name must be a non-empty string");const s=Xe.findKey(o,r);(!s||void 0===o[s]||!0===n||void 0===n&&!1!==o[s])&&(o[s||t]=wt(e))}const s=(e,t)=>Xe.forEach(e,((e,n)=>r(e,n,t)));return Xe.isPlainObject(e)||e instanceof this.constructor?s(e,t):Xe.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,o,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),o=e.substring(r+1).trim(),!n||t[n]&&yt[n]||("set-cookie"===n?t[n]?t[n].push(o):t[n]=[o]:t[n]=t[n]?t[n]+", "+o:o)})),t})(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=bt(e)){const n=Xe.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)t[o[1]]=o[2];return t}(e);if(Xe.isFunction(t))return t.call(this,e,n);if(Xe.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=bt(e)){const n=Xe.findKey(this,e);return!(!n||void 0===this[n]||t&&!vt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let o=!1;function r(e){if(e=bt(e)){const r=Xe.findKey(n,e);!r||t&&!vt(0,n[r],r,t)||(delete n[r],o=!0)}}return Xe.isArray(e)?e.forEach(r):r(e),o}clear(e){const t=Object.keys(this);let n=t.length,o=!1;for(;n--;){const r=t[n];e&&!vt(0,this[r],r,e,!0)||(delete this[r],o=!0)}return o}normalize(e){const t=this,n={};return Xe.forEach(this,((o,r)=>{const s=Xe.findKey(n,r);if(s)return t[s]=wt(o),void delete t[r];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();i!==r&&delete t[r],t[i]=wt(o),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return Xe.forEach(this,((n,o)=>{null!=n&&!1!==n&&(t[o]=e&&Xe.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[gt]=this[gt]={accessors:{}}).accessors,n=this.prototype;function o(e){const o=bt(e);t[o]||(!function(e,t){const n=Xe.toCamelCase(" "+t);["get","set","has"].forEach((o=>{Object.defineProperty(e,o+n,{value:function(e,n,r){return this[o].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[o]=!0)}return Xe.isArray(e)?e.forEach(o):o(e),this}}Ot.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Xe.freezeMethods(Ot.prototype),Xe.freezeMethods(Ot);const Et=Ot;function St(e,t){const n=this||mt,o=t||n,r=Et.from(o.headers);let s=o.data;return Xe.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function Rt(e){return!(!e||!e.__CANCEL__)}function At(e,t,n){Ge.call(this,null==e?"canceled":e,Ge.ERR_CANCELED,t,n),this.name="CanceledError"}Xe.inherits(At,Ge,{__CANCEL__:!0});const Ct=ft.isStandardBrowserEnv?{write:function(e,t,n,o,r,s){const i=[];i.push(e+"="+encodeURIComponent(t)),Xe.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Xe.isString(o)&&i.push("path="+o),Xe.isString(r)&&i.push("domain="+r),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function xt(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Tt=ft.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function o(n){let o=n;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=o(window.location.href),function(e){const t=Xe.isString(e)?o(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function jt(e,t){let n=0;const o=function(e,t){e=e||10;const n=new Array(e),o=new Array(e);let r,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=o[i];r||(r=c),n[s]=a,o[s]=c;let u=i,f=0;for(;u!==s;)f+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*f/d):void 0}}(50,250);return r=>{const s=r.loaded,i=r.lengthComputable?r.total:void 0,a=s-n,c=o(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}const Pt={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let o=e.data;const r=Et.from(e.headers).normalize(),s=e.responseType;let i;function a(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}Xe.isFormData(o)&&(ft.isStandardBrowserEnv||ft.isStandardBrowserWebWorkerEnv)&&r.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=xt(e.baseURL,e.url);function u(){if(!c)return;const o=Et.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new Ge("Request failed with status code "+n.status,[Ge.ERR_BAD_REQUEST,Ge.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:o,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),ct(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new Ge("Request aborted",Ge.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new Ge("Network Error",Ge.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const o=e.transitional||ut;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new Ge(t,o.clarifyTimeoutError?Ge.ETIMEDOUT:Ge.ECONNABORTED,e,c)),c=null},ft.isStandardBrowserEnv){const t=(e.withCredentials||Tt(l))&&e.xsrfCookieName&&Ct.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===o&&r.setContentType(null),"setRequestHeader"in c&&Xe.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),Xe.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",jt(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",jt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{c&&(n(!t||t.type?new At(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(l);f&&-1===ft.protocols.indexOf(f)?n(new Ge("Unsupported protocol "+f+":",Ge.ERR_BAD_REQUEST,e)):c.send(o||null)}))}};Xe.forEach(Pt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Nt=e=>{e=Xe.isArray(e)?e:[e];const{length:t}=e;let n,o;for(let r=0;r<t&&(n=e[r],!(o=Xe.isString(n)?Pt[n.toLowerCase()]:n));r++);if(!o){if(!1===o)throw new Ge(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(Xe.hasOwnProp(Pt,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!Xe.isFunction(o))throw new TypeError("adapter is not a function");return o};function kt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new At(null,e)}function Bt(e){kt(e),e.headers=Et.from(e.headers),e.data=St.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Nt(e.adapter||mt.adapter)(e).then((function(t){return kt(e),t.data=St.call(e,e.transformResponse,t),t.headers=Et.from(t.headers),t}),(function(t){return Rt(t)||(kt(e),t&&t.response&&(t.response.data=St.call(e,e.transformResponse,t.response),t.response.headers=Et.from(t.response.headers))),Promise.reject(t)}))}const Lt=e=>e instanceof Et?e.toJSON():e;function Ut(e,t){t=t||{};const n={};function o(e,t,n){return Xe.isPlainObject(e)&&Xe.isPlainObject(t)?Xe.merge.call({caseless:n},e,t):Xe.isPlainObject(t)?Xe.merge({},t):Xe.isArray(t)?t.slice():t}function r(e,t,n){return Xe.isUndefined(t)?Xe.isUndefined(e)?void 0:o(void 0,e,n):o(e,t,n)}function s(e,t){if(!Xe.isUndefined(t))return o(void 0,t)}function i(e,t){return Xe.isUndefined(t)?Xe.isUndefined(e)?void 0:o(void 0,e):o(void 0,t)}function a(n,r,s){return s in t?o(n,r):s in e?o(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>r(Lt(e),Lt(t),!0)};return Xe.forEach(Object.keys(e).concat(Object.keys(t)),(function(o){const s=c[o]||r,i=s(e[o],t[o],o);Xe.isUndefined(i)&&s!==a||(n[o]=i)})),n}const _t="1.3.5",Ft={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ft[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Dt={};Ft.transitional=function(e,t,n){return(o,r,s)=>{if(!1===e)throw new Ge(function(e,t){return"[Axios v1.3.5] Transitional option '"+e+"'"+t+(n?". "+n:"")}(r," has been removed"+(t?" in "+t:"")),Ge.ERR_DEPRECATED);return t&&!Dt[r]&&(Dt[r]=!0),!e||e(o,r,s)}};const It={assertOptions:function(e,t,n){if("object"!=typeof e)throw new Ge("options must be an object",Ge.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let r=o.length;for(;r-- >0;){const s=o[r],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new Ge("option "+s+" must be "+n,Ge.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Ge("Unknown option "+s,Ge.ERR_BAD_OPTION)}},validators:Ft},zt=It.validators;class qt{constructor(e){this.defaults=e,this.interceptors={request:new lt,response:new lt}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ut(this.defaults,t);const{transitional:n,paramsSerializer:o,headers:r}=t;let s;void 0!==n&&It.assertOptions(n,{silentJSONParsing:zt.transitional(zt.boolean),forcedJSONParsing:zt.transitional(zt.boolean),clarifyTimeoutError:zt.transitional(zt.boolean)},!1),null!=o&&(Xe.isFunction(o)?t.paramsSerializer={serialize:o}:It.assertOptions(o,{encode:zt.function,serialize:zt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=r&&Xe.merge(r.common,r[t.method]),s&&Xe.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=Et.concat(s,r);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,f=0;if(!a){const e=[Bt.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);f<u;)l=l.then(e[f++],e[f++]);return l}u=i.length;let d=t;for(f=0;f<u;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{l=Bt.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,u=c.length;f<u;)l=l.then(c[f++],c[f++]);return l}getUri(e){return ct(xt((e=Ut(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}Xe.forEach(["delete","get","head","options"],(function(e){qt.prototype[e]=function(t,n){return this.request(Ut(n||{},{method:e,url:t,data:(n||{}).data}))}})),Xe.forEach(["post","put","patch"],(function(e){function t(t){return function(n,o,r){return this.request(Ut(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:o}))}}qt.prototype[e]=t(),qt.prototype[e+"Form"]=t(!0)}));const Mt=qt;class Ht{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const o=new Promise((e=>{n.subscribe(e),t=e})).then(e);return o.cancel=function(){n.unsubscribe(t)},o},e((function(e,o,r){n.reason||(n.reason=new At(e,o,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ht((function(t){e=t})),cancel:e}}}const Jt=Ht;const Vt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vt).forEach((([e,t])=>{Vt[t]=e}));const Wt=Vt;const Kt=function e(t){const n=new Mt(t),o=ye(Mt.prototype.request,n);return Xe.extend(o,Mt.prototype,n,{allOwnKeys:!0}),Xe.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(Ut(t,n))},o}(mt);Kt.Axios=Mt,Kt.CanceledError=At,Kt.CancelToken=Jt,Kt.isCancel=Rt,Kt.VERSION=_t,Kt.toFormData=ot,Kt.AxiosError=Ge,Kt.Cancel=Kt.CanceledError,Kt.all=function(e){return Promise.all(e)},Kt.spread=function(e){return function(t){return e.apply(null,t)}},Kt.isAxiosError=function(e){return Xe.isObject(e)&&!0===e.isAxiosError},Kt.mergeConfig=Ut,Kt.AxiosHeaders=Et,Kt.formToJSON=e=>dt(Xe.isHTMLForm(e)?new FormData(e):e),Kt.HttpStatusCode=Wt,Kt.default=Kt;const $t=Kt.create({withCredentials:!1,timeout:5e3});function Xt(e,t){return $t(e,t)}$t.interceptors.request.use((e=>(e.url=`http://112.74.188.176:8080/${e.url}`,e)),(e=>Promise.reject(e))),$t.interceptors.response.use((e=>e.data),(e=>(me(e.message),Promise.reject(e.message))));export{re as P,W as a,Xt as b,V as c,$ as u};
