import{r as v,ak as N,al as D,am as R,M as b,I,a7 as V,aj as z,o as W,d as P,x as F,b as h,c as x,e as T,g as M,w as q,X as E,T as X,n as $,a6 as G,p as H,i as J,k as O,t as K,f as Q,a5 as U}from"./entry.ba201657.js";function L(e){return D()?(R(e),!0):!1}function C(e){return typeof e=="function"?e():b(e)}const S=typeof window<"u"&&typeof document<"u",Y=Object.prototype.toString,Z=e=>Y.call(e)==="[object Object]",k=()=>{},ee=te();function te(){var e;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function oe(e,n,s={}){const{immediate:t=!0}=s,u=v(!1);let a=null;function d(){a&&(clearTimeout(a),a=null)}function r(){u.value=!1,d()}function i(...f){d(),u.value=!0,a=setTimeout(()=>{u.value=!1,a=null,e(...f)},C(n))}return t&&(u.value=!0,S&&i()),L(r),{isPending:N(u),start:i,stop:r}}function g(e){var n;const s=C(e);return(n=s==null?void 0:s.$el)!=null?n:s}const j=S?window:void 0,ne=S?window.navigator:void 0;function w(...e){let n,s,t,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([s,t,u]=e,n=j):[n,s,t,u]=e,!n)return k;Array.isArray(s)||(s=[s]),Array.isArray(t)||(t=[t]);const a=[],d=()=>{a.forEach(l=>l()),a.length=0},r=(l,m,o,c)=>(l.addEventListener(m,o,c),()=>l.removeEventListener(m,o,c)),i=V(()=>[g(n),C(u)],([l,m])=>{if(d(),!l)return;const o=Z(m)?{...m}:m;a.push(...s.flatMap(c=>t.map(p=>r(l,c,p,o))))},{immediate:!0,flush:"post"}),f=()=>{i(),d()};return L(f),f}let B=!1;function se(e,n,s={}){const{window:t=j,ignore:u=[],capture:a=!0,detectIframe:d=!1}=s;if(!t)return;ee&&!B&&(B=!0,Array.from(t.document.body.children).forEach(o=>o.addEventListener("click",k)),t.document.documentElement.addEventListener("click",k));let r=!0;const i=o=>u.some(c=>{if(typeof c=="string")return Array.from(t.document.querySelectorAll(c)).some(p=>p===o.target||o.composedPath().includes(p));{const p=g(c);return p&&(o.target===p||o.composedPath().includes(p))}}),l=[w(t,"click",o=>{const c=g(e);if(!(!c||c===o.target||o.composedPath().includes(c))){if(o.detail===0&&(r=!i(o)),!r){r=!0;return}n(o)}},{passive:!0,capture:a}),w(t,"pointerdown",o=>{const c=g(e);c&&(r=!o.composedPath().includes(c)&&!i(o))},{passive:!0}),d&&w(t,"blur",o=>{setTimeout(()=>{var c;const p=g(e);((c=t.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(p!=null&&p.contains(t.document.activeElement))&&n(o)},0)})].filter(Boolean);return()=>l.forEach(o=>o())}function ae(){const e=v(!1);return z()&&W(()=>{e.value=!0}),e}function ce(e){const n=ae();return I(()=>(n.value,!!e()))}function ue(e={}){const{navigator:n=ne,read:s=!1,source:t,copiedDuring:u=1500,legacy:a=!1}=e,d=ce(()=>n&&"clipboard"in n),r=I(()=>d.value||a),i=v(""),f=v(!1),l=oe(()=>f.value=!1,u);function m(){d.value?n.clipboard.readText().then(y=>{i.value=y}):i.value=p()}r.value&&s&&w(["copy","cut"],m);async function o(y=C(t)){r.value&&y!=null&&(d.value?await n.clipboard.writeText(y):c(y),i.value=y,f.value=!0,l.start())}function c(y){const _=document.createElement("textarea");_.value=y??"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function p(){var y,_,A;return(A=(_=(y=document==null?void 0:document.getSelection)==null?void 0:y.call(document))==null?void 0:_.toString())!=null?A:""}return{isSupported:r,text:i,copied:f,copy:o}}const re=e=>(H("data-v-75636234"),e=e(),J(),e),ie=re(()=>T("span",{class:"sr-only"},"Copy to clipboard",-1)),le={class:"icon-wrapper"},de=P({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,s=v(),{copy:t}=ue();se(s,()=>{a.value==="copied"&&(a.value="init")});const{prose:u}=F(),a=v("init"),d=r=>{t(n.content).then(()=>{a.value="copied"}).catch(i=>{console.warn("Couldn't copy to clipboard!",i)})};return(r,i)=>{const f=G;return h(),x("button",{ref_key:"copyButtonRef",ref:s,class:$([(e.show||a.value==="copied")&&"show"]),onClick:d},[ie,T("span",le,[M(X,{name:"fade"},{default:q(()=>{var l,m;return[a.value==="copied"?(h(),E(f,{key:0,name:(l=b(u).copyButton)==null?void 0:l.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),E(f,{key:1,name:(m=b(u).copyButton)==null?void 0:m.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const pe=O(de,[["__scopeId","data-v-75636234"]]),fe={key:0,class:"filename"},me=P({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=v(!1);return(s,t)=>{const u=pe;return h(),x("div",{class:$([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=a=>n.value=!0),onMouseleave:t[1]||(t[1]=a=>n.value=!1)},[e.filename?(h(),x("span",fe,K(e.filename),1)):Q("",!0),U(s.$slots,"default",{},void 0,!0),M(u,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const _e=O(me,[["__scopeId","data-v-bfc7416e"]]);export{_e as default};
