import{d as t,a7 as e,a8 as n,M as i,b as a,j as s}from"./index-a89a956f.js";const l=t({__name:"IconFont",props:{name:{type:String,default:""},size:{type:[String,Number],default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""},classPrefix:{type:String,default:"nut-icon"},fontClassName:{type:String,default:"nutui-iconfont"},color:{type:String,default:""},tag:{type:String,default:"i"}},emits:["click"],setup(t,{emit:l}){var o;const r=t,c="nut-icon",u=e();n();const m=t=>{if(t)return isNaN(Number(t))?String(t):t+"px"},f=!!r.name&&-1!==r.name.indexOf("/");let d=i(f?"img":r.tag,{class:f?`${c}__img`:`${r.fontClassName} ${c} ${r.classPrefix}-${r.name}`,style:{color:r.color,fontSize:m(r.size),width:m(r.width||r.size),height:m(r.height||r.size)},onClick:t=>{l("click",t)},src:f?r.name:""},null==(o=u.default)?void 0:o.call(u));const g=()=>d;return(t,e)=>(a(),s(g))}});var o;(o=l).install=t=>{t.component("IconFont",o)};
