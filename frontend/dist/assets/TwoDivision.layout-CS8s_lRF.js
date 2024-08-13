import{a as Yt,b as $t,r as L,u as Ut,s as ae,j as u,c as wn,R as Wt,O as An}from"./index-DeJVmANz.js";import{f as Nn}from"./apiFetching-D9uxTKnH.js";import{P as g}from"./index-B0pkD8hY.js";function On(){const e=Yt(),t=$t(f=>f.navMenu.uri),[n,a]=L.useState(window.innerWidth>768?"large":"small"),r=Ut();L.useEffect(()=>{const f=()=>{window.innerWidth<=768?a("small"):a("large")};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),L.useEffect(()=>{let f=o();i(f),e(ae({uri:f}))},[n,e]);const i=f=>{var c,m;(c=document.querySelector(".selected"))==null||c.classList.remove("selected"),(m=document.getElementById(f))==null||m.classList.add("selected")};function o(){let f="home",c=window.location.href.split("/");const m=["profile","read","feedback"],b=["","myself","relative","requests","donation-history"];let p=c[c.length-1];return b.includes(p)||m.includes(p)&&(f=p),f}const s=f=>{f.preventDefault(),e(wn()),Nn("GET","api/v1/general/signout").then(()=>{localStorage.setItem("userLogged",!1),r("/login")}).catch(()=>{alert("something went wrong"),localStorage.setItem("userLogged",!1),r("/login")})},l=f=>{if(["","myself","relative","requests","donation-history"].includes(t)){const p=document.getElementById("home");p==null||p.classList.remove("selected")}const m=document.getElementById(t),b=document.getElementById(f);m==null||m.classList.remove("selected"),b==null||b.classList.add("selected"),f!=="home"?(e(ae({uri:f})),L.startTransition(()=>r(`/${f}`))):(e(ae({uri:"home"})),L.startTransition(()=>r("/")))};return u.jsxs("div",{className:`info-sidebar-main-container ${n==="large"?"":"hidden"}`,children:[u.jsxs("div",{className:"info-section",children:[u.jsx("div",{className:"logo-container-info",children:u.jsx("img",{src:"image/logo-white.png",className:"image-logo-container",alt:"Logo"})}),u.jsx("p",{className:"name-website",children:"Bluebeads"})]}),u.jsx("hr",{}),u.jsxs("div",{className:"options",children:[u.jsxs("div",{className:"option-unit",id:"home",onClick:()=>l("home"),children:[u.jsx("div",{className:"logo-option-unit",children:u.jsx("i",{className:"fa-solid fa-droplet"})}),u.jsx("p",{className:"option-name",children:"Blood Donor"})]}),u.jsxs("div",{className:"option-unit",id:"profile",onClick:()=>l("profile"),children:[u.jsx("div",{className:"logo-option-unit",children:u.jsx("i",{className:"fa-solid fa-user"})}),u.jsx("p",{className:"option-name",children:"Profile"})]}),u.jsxs("div",{className:"option-unit",id:"read",onClick:()=>l("read"),children:[u.jsx("div",{className:"logo-option-unit",children:u.jsx("i",{className:"fa-solid fa-book-open-reader"})}),u.jsx("p",{className:"option-name",children:"Read"})]}),u.jsxs("div",{className:"option-unit",id:"feedback",onClick:()=>l("feedback"),children:[u.jsx("div",{className:"logo-option-unit",children:u.jsx("i",{className:"fa-solid fa-handshake"})}),u.jsx("p",{className:"option-name",children:"Feedback"})]}),u.jsxs("div",{className:"option-unit",id:"logout",onClick:s,children:[u.jsx("div",{className:"logo-option-unit",children:u.jsx("i",{className:"fa-solid fa-right-from-bracket"})}),u.jsx("p",{className:"option-name",children:"Logout"})]})]}),u.jsxs("div",{className:"style-inset",children:[u.jsx("hr",{}),u.jsxs("div",{className:"share-options",children:[u.jsx("h3",{className:"share-options-heading",children:"Share Now :"}),u.jsxs("div",{className:"all-icons",children:[u.jsx("a",{href:"whatsapp://send?text=https://example.com",children:u.jsx("i",{className:"fa-brands fa-whatsapp"})}),u.jsx("a",{href:"https://telegram.me/share/url?url=https://example.com&text=Check%20out%20this%20link:%20https://example.com",target:"_blank",children:u.jsx("i",{className:"fa-brands fa-telegram"})}),u.jsx("a",{href:"https://twitter.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20link:%20https://example.com",target:"_blank",children:u.jsx("i",{className:"fa-brands fa-twitter"})}),u.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://example.com",target:"_blank",children:u.jsx("i",{className:"fa-brands fa-facebook"})})]}),u.jsx("h3",{className:"description-share",children:"Let's Save Lives Together: Every Donation Saves Four Lives"})]})]})]})}const Sn=()=>{const e=Yt();$t(s=>s.navMenu.uri);const[t,n]=L.useState(window.innerWidth<=768?"small":"large"),a=Ut();L.useEffect(()=>{const s=()=>{window.innerWidth<=768?n("small"):n("large")};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]);const r=s=>{var f;const l=document.querySelector(".mobile-menu-selected");l==null||l.classList.remove("mobile-menu-selected"),(f=document.getElementById(s))==null||f.getElementsByClassName("nav-mobile-item-icon")[0].classList.add("mobile-menu-selected")};L.useEffect(()=>{window.innerWidth<=768&&n("small"),window.innerWidth>768&&n("large");const s={"":"mobile-home",myself:"mobile-home",relative:"mobile-home",requests:"mobile-home","donation-history":"mobile-home",home:"mobile-home",profile:"mobile-profile",read:"mobile-read",feedback:"mobile-feedback"};let l=i();r(s[l]),e(ae({uri:l}))},[t]);function i(){let s="home",l=window.location.href.split("/");if(l[l.length-1]!==""){let f=l[l.length-1];f!==""&&(s=f)}return s}function o(s){const l={"mobile-home":"","mobile-profile":"profile","mobile-read":"read","mobile-feedback":"feedback"},f=s.currentTarget.id;L.startTransition(()=>a(`/${l[f]}`)),e(ae({uri:l[f]})),r(f)}return u.jsxs("div",{className:`mobile-nav-container ${t==="small"?"":"hidden"}`,children:[u.jsxs("div",{className:"nav-mobile-item",id:"mobile-home",onClick:o,children:[u.jsx("div",{className:"nav-mobile-item-icon",children:u.jsx("i",{className:"fa-solid fa-home"})}),u.jsx("p",{className:"nav-mobile-item-name",children:"Home"})]}),u.jsxs("div",{className:"nav-mobile-item",id:"mobile-profile",onClick:o,children:[u.jsx("div",{className:"nav-mobile-item-icon",children:u.jsx("i",{className:"fa-solid fa-user"})}),u.jsx("p",{className:"nav-mobile-item-name",children:"Profile"})]}),u.jsxs("div",{className:"nav-mobile-item",id:"mobile-read",onClick:o,children:[u.jsx("div",{className:"nav-mobile-item-icon",children:u.jsx("i",{className:"fa-solid fa-book-open-reader"})}),u.jsx("p",{className:"nav-mobile-item-name",children:"Read"})]}),u.jsxs("div",{className:"nav-mobile-item",id:"mobile-feedback",onClick:o,children:[u.jsx("div",{className:"nav-mobile-item-icon",children:u.jsx("i",{className:"fa-solid fa-handshake"})}),u.jsx("p",{className:"nav-mobile-item-name",children:"Feedback"})]})]})};function dt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dt(Object(n),!0).forEach(function(a){O(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Oe(e){"@babel/helpers - typeof";return Oe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oe(e)}function En(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Pn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Cn(e,t,n){return t&&Pn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e,t){return jn(e)||Tn(e,t)||Ht(e,t)||Mn()}function ue(e){return In(e)||_n(e)||Ht(e)||Ln()}function In(e){if(Array.isArray(e))return De(e)}function jn(e){if(Array.isArray(e))return e}function _n(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Tn(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ht(e,t){if(e){if(typeof e=="string")return De(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return De(e,t)}}function De(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Ln(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vt=function(){},et={},Bt={},Gt=null,Xt={mark:vt,measure:vt};try{typeof window<"u"&&(et=window),typeof document<"u"&&(Bt=document),typeof MutationObserver<"u"&&(Gt=MutationObserver),typeof performance<"u"&&(Xt=performance)}catch{}var Rn=et.navigator||{},bt=Rn.userAgent,pt=bt===void 0?"":bt,$=et,y=Bt,gt=Gt,ve=Xt;$.document;var F=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",qt=~pt.indexOf("MSIE")||~pt.indexOf("Trident/"),be,pe,ge,he,ye,M="___FONT_AWESOME___",Ye=16,Vt="fa",Kt="svg-inline--fa",q="data-fa-i2svg",$e="data-fa-pseudo-element",zn="data-fa-pseudo-element-pending",tt="data-prefix",nt="data-icon",ht="fontawesome-i2svg",Fn="async",Dn=["HTML","HEAD","STYLE","SCRIPT"],Jt=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",at=[h,x];function me(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[h]}})}var oe=me((be={},O(be,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(be,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),be)),se=me((pe={},O(pe,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(pe,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),pe)),le=me((ge={},O(ge,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(ge,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ge)),Yn=me((he={},O(he,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(he,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),he)),$n=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Qt="fa-layers-text",Un=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Wn=me((ye={},O(ye,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(ye,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ye)),Zt=[1,2,3,4,5,6,7,8,9,10],Hn=Zt.concat([11,12,13,14,15,16,17,18,19,20]),Bn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fe=new Set;Object.keys(se[h]).map(fe.add.bind(fe));Object.keys(se[x]).map(fe.add.bind(fe));var Gn=[].concat(at,ue(fe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(Zt.map(function(e){return"".concat(e,"x")})).concat(Hn.map(function(e){return"w-".concat(e)})),re=$.FontAwesomeConfig||{};function Xn(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(y&&typeof y.querySelector=="function"){var Vn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Vn.forEach(function(e){var t=Ze(e,2),n=t[0],a=t[1],r=qn(Xn(n));r!=null&&(re[a]=r)})}var en={styleDefault:"solid",familyDefault:"classic",cssPrefix:Vt,replacementClass:Kt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};re.familyPrefix&&(re.cssPrefix=re.familyPrefix);var ee=d(d({},en),re);ee.autoReplaceSvg||(ee.observeMutations=!1);var v={};Object.keys(en).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(n){ee[e]=n,ie.forEach(function(a){return a(v)})},get:function(){return ee[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(t){ee.cssPrefix=t,ie.forEach(function(n){return n(v)})},get:function(){return ee.cssPrefix}});$.FontAwesomeConfig=v;var ie=[];function Kn(e){return ie.push(e),function(){ie.splice(ie.indexOf(e),1)}}var Y=Ye,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jn(e){if(!(!e||!F)){var t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=y.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(t,a),e}}var Qn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ce(){for(var e=12,t="";e-- >0;)t+=Qn[Math.random()*62|0];return t}function te(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function rt(e){return e.classList?te(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function tn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(tn(e[n]),'" ')},"").trim()}function Ce(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function it(e){return e.size!==T.size||e.x!==T.x||e.y!==T.y||e.rotate!==T.rotate||e.flipX||e.flipY}function ea(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function ta(e){var t=e.transform,n=e.width,a=n===void 0?Ye:n,r=e.height,i=r===void 0?Ye:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&qt?l+="translate(".concat(t.x/Y-a/2,"em, ").concat(t.y/Y-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Y,"em), calc(-50% + ").concat(t.y/Y,"em)) "):l+="translate(".concat(t.x/Y,"em, ").concat(t.y/Y,"em) "),l+="scale(".concat(t.size/Y*(t.flipX?-1:1),", ").concat(t.size/Y*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var na=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function nn(){var e=Vt,t=Kt,n=v.cssPrefix,a=v.replacementClass,r=na;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var yt=!1;function Le(){v.autoAddCss&&!yt&&(Jn(nn()),yt=!0)}var aa={mixout:function(){return{dom:{css:nn,insertCss:Le}}},hooks:function(){return{beforeDOMElementCreation:function(){Le()},beforeI2svg:function(){Le()}}}},R=$||{};R[M]||(R[M]={});R[M].styles||(R[M].styles={});R[M].hooks||(R[M].hooks={});R[M].shims||(R[M].shims=[]);var j=R[M],an=[],ra=function e(){y.removeEventListener("DOMContentLoaded",e),Se=1,an.map(function(t){return t()})},Se=!1;F&&(Se=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Se||y.addEventListener("DOMContentLoaded",ra));function ia(e){F&&(Se?setTimeout(e,0):an.push(e))}function de(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?tn(e):"<".concat(t," ").concat(Zn(a),">").concat(i.map(de).join(""),"</").concat(t,">")}function xt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Me=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=n,l,f,c;for(a===void 0?(l=1,c=t[i[0]]):(l=0,c=a);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function oa(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ue(e){var t=oa(e);return t.length===1?t[0].toString(16):null}function sa(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function kt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function We(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=kt(t);typeof j.hooks.addPack=="function"&&!r?j.hooks.addPack(e,kt(t)):j.styles[e]=d(d({},j.styles[e]||{}),i),e==="fas"&&We("fa",t)}var xe,ke,we,K=j.styles,la=j.shims,fa=(xe={},O(xe,h,Object.values(le[h])),O(xe,x,Object.values(le[x])),xe),ot=null,rn={},on={},sn={},ln={},fn={},ca=(ke={},O(ke,h,Object.keys(oe[h])),O(ke,x,Object.keys(oe[x])),ke);function ua(e){return~Gn.indexOf(e)}function ma(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!ua(r)?r:null}var cn=function(){var t=function(i){return Me(K,function(o,s,l){return o[l]=Me(s,i,{}),o},{})};rn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),on=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),fn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in K||v.autoFetchSvg,a=Me(la,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});sn=a.names,ln=a.unicodes,ot=Ie(v.styleDefault,{family:v.familyDefault})};Kn(function(e){ot=Ie(e.styleDefault,{family:v.familyDefault})});cn();function st(e,t){return(rn[e]||{})[t]}function da(e,t){return(on[e]||{})[t]}function X(e,t){return(fn[e]||{})[t]}function un(e){return sn[e]||{prefix:null,iconName:null}}function va(e){var t=ln[e],n=st("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return ot}var lt=function(){return{prefix:null,iconName:null,rest:[]}};function Ie(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?h:n,r=oe[a][e],i=se[a][e]||se[a][r],o=e in j.styles?e:null;return i||o||null}var wt=(we={},O(we,h,Object.keys(le[h])),O(we,x,Object.keys(le[x])),we);function je(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},O(t,h,"".concat(v.cssPrefix,"-").concat(h)),O(t,x,"".concat(v.cssPrefix,"-").concat(x)),t),o=null,s=h;(e.includes(i[h])||e.some(function(f){return wt[h].includes(f)}))&&(s=h),(e.includes(i[x])||e.some(function(f){return wt[x].includes(f)}))&&(s=x);var l=e.reduce(function(f,c){var m=ma(v.cssPrefix,c);if(K[c]?(c=fa[s].includes(c)?Yn[s][c]:c,o=c,f.prefix=c):ca[s].indexOf(c)>-1?(o=c,f.prefix=Ie(c,{family:s})):m?f.iconName=m:c!==v.replacementClass&&c!==i[h]&&c!==i[x]&&f.rest.push(c),!r&&f.prefix&&f.iconName){var b=o==="fa"?un(f.iconName):{},p=X(f.prefix,f.iconName);b.prefix&&(o=null),f.iconName=b.iconName||p||f.iconName,f.prefix=b.prefix||f.prefix,f.prefix==="far"&&!K.far&&K.fas&&!v.autoFetchSvg&&(f.prefix="fas")}return f},lt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===x&&(K.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=X(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=U()||"fas"),l}var ba=function(){function e(){En(this,e),this.definitions={}}return Cn(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),We(s,o[s]);var l=le[h][s];l&&We(l,o[s]),cn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),At=[],J={},Z={},pa=Object.keys(Z);function ga(e,t){var n=t.mixoutsTo;return At=e,J={},Object.keys(Z).forEach(function(a){pa.indexOf(a)===-1&&delete Z[a]}),At.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Oe(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){J[o]||(J[o]=[]),J[o].push(i[o])})}a.provides&&a.provides(Z)}),n}function He(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=J[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=J[e]||[];r.forEach(function(i){i.apply(null,n)})}function z(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Z[e]?Z[e].apply(null,t):void 0}function Be(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||U();if(t)return t=X(n,t)||t,xt(mn.definitions,n,t)||xt(j.styles,n,t)}var mn=new ba,ha=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,V("noAuto")},ya={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(V("beforeI2svg",t),z("pseudoElements2svg",t),z("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,ia(function(){ka({autoReplaceSvgRoot:n}),V("watch",t)})}},xa={icon:function(t){if(t===null)return null;if(Oe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:X(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Ie(t[0]);return{prefix:a,iconName:X(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(v.cssPrefix,"-"))>-1||t.match($n))){var r=je(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=U();return{prefix:i,iconName:X(i,t)||t}}}},I={noAuto:ha,config:v,dom:ya,parse:xa,library:mn,findIconDefinition:Be,toHtml:de},ka=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?y:n;(Object.keys(j.styles).length>0||v.autoFetchSvg)&&F&&v.autoReplaceSvg&&I.dom.i2svg({node:a})};function _e(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return de(a)})}}),Object.defineProperty(e,"node",{get:function(){if(F){var a=y.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function wa(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(it(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=Ce(d(d({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Aa(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:a}]}]}function ft(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,b=e.watchable,p=b===void 0?!1:b,w=a.found?a:n,P=w.width,A=w.height,S=r==="fak",k=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(D){return m.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(m.classes).join(" "),N={children:[],attributes:d(d({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(A)})},C=S&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/A*16*.0625,"em")}:{};p&&(N.attributes[q]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(c||ce())},children:[l]}),delete N.attributes.title);var E=d(d({},N),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:d(d({},C),m.styles)}),H=a.found&&n.found?z("generateAbstractMask",E)||{children:[],attributes:{}}:z("generateAbstractIcon",E)||{children:[],attributes:{}},B=H.children,Te=H.attributes;return E.children=B,E.attributes=Te,s?Aa(E):wa(E)}function Nt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[q]="");var c=d({},o.styles);it(r)&&(c.transform=ta({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Ce(c);m.length>0&&(f.style=m);var b=[];return b.push({tag:"span",attributes:f,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Na(e){var t=e.content,n=e.title,a=e.extra,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ce(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Re=j.styles;function Ge(e){var t=e[0],n=e[1],a=e.slice(4),r=Ze(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Oa={found:!1,width:512,height:512};function Sa(e,t){!Jt&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xe(e,t){var n=t;return t==="fa"&&v.styleDefault!==null&&(t=U()),new Promise(function(a,r){if(z("missingIconAbstract"),n==="fa"){var i=un(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Re[t]&&Re[t][e]){var o=Re[t][e];return a(Ge(o))}Sa(e,t),a(d(d({},Oa),{},{icon:v.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var Ot=function(){},qe=v.measurePerformance&&ve&&ve.mark&&ve.measure?ve:{mark:Ot,measure:Ot},ne='FA "6.5.2"',Ea=function(t){return qe.mark("".concat(ne," ").concat(t," begins")),function(){return dn(t)}},dn=function(t){qe.mark("".concat(ne," ").concat(t," ends")),qe.measure("".concat(ne," ").concat(t),"".concat(ne," ").concat(t," begins"),"".concat(ne," ").concat(t," ends"))},ct={begin:Ea,end:dn},Ae=function(){};function St(e){var t=e.getAttribute?e.getAttribute(q):null;return typeof t=="string"}function Pa(e){var t=e.getAttribute?e.getAttribute(tt):null,n=e.getAttribute?e.getAttribute(nt):null;return t&&n}function Ca(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Ia(){if(v.autoReplaceSvg===!0)return Ne.replace;var e=Ne[v.autoReplaceSvg];return e||Ne.replace}function ja(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function _a(e){return y.createElement(e)}function vn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?ja:_a:n;if(typeof e=="string")return y.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(vn(o,{ceFn:a}))}),r}function Ta(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ne={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(vn(r),n)}),n.getAttribute(q)===null&&v.keepOriginalSource){var a=y.createComment(Ta(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~rt(n).indexOf(v.replacementClass))return Ne.replace(t);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return de(s)}).join(`
`);n.setAttribute(q,""),n.innerHTML=o}};function Et(e){e()}function bn(e,t){var n=typeof t=="function"?t:Ae;if(e.length===0)n();else{var a=Et;v.mutateApproach===Fn&&(a=$.requestAnimationFrame||Et),a(function(){var r=Ia(),i=ct.begin("mutate");e.map(r),i(),n()})}}var ut=!1;function pn(){ut=!0}function Ve(){ut=!1}var Ee=null;function Pt(e){if(gt&&v.observeMutations){var t=e.treeCallback,n=t===void 0?Ae:t,a=e.nodeCallback,r=a===void 0?Ae:a,i=e.pseudoElementsCallback,o=i===void 0?Ae:i,s=e.observeMutationsRoot,l=s===void 0?y:s;Ee=new gt(function(f){if(!ut){var c=U();te(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!St(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&St(m.target)&&~Bn.indexOf(m.attributeName))if(m.attributeName==="class"&&Pa(m.target)){var b=je(rt(m.target)),p=b.prefix,w=b.iconName;m.target.setAttribute(tt,p||c),w&&m.target.setAttribute(nt,w)}else Ca(m.target)&&r(m.target)})}}),F&&Ee.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function La(){Ee&&Ee.disconnect()}function Ma(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ra(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=je(rt(e));return r.prefix||(r.prefix=U()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=da(r.prefix,e.innerText)||st(r.prefix,Ue(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function za(e){var t=te(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return v.autoA11y&&(n?t["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||ce()):(t["aria-hidden"]="true",t.focusable="false")),t}function Fa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ra(e),a=n.iconName,r=n.prefix,i=n.rest,o=za(e),s=He("parseNodeAttributes",{},e),l=t.styleParser?Ma(e):[];return d({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Da=j.styles;function gn(e){var t=v.autoReplaceSvg==="nest"?Ct(e,{styleParser:!1}):Ct(e);return~t.extra.classes.indexOf(Qt)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}var W=new Set;at.map(function(e){W.add("fa-".concat(e))});Object.keys(oe[h]).map(W.add.bind(W));Object.keys(oe[x]).map(W.add.bind(W));W=ue(W);function It(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var n=y.documentElement.classList,a=function(m){return n.add("".concat(ht,"-").concat(m))},r=function(m){return n.remove("".concat(ht,"-").concat(m))},i=v.autoFetchSvg?W:at.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Da));i.includes("fa")||i.push("fa");var o=[".".concat(Qt,":not([").concat(q,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=te(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=ct.begin("onTree"),f=s.reduce(function(c,m){try{var b=gn(m);b&&c.push(b)}catch(p){Jt||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(b){bn(b,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(b){l(),m(b)})})}function Ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;gn(e).then(function(n){n&&bn([n],t)})}function $a(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Be(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Be(r||{})),e(a,d(d({},n),{},{mask:r}))}}var Ua=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?T:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,b=m===void 0?null:m,p=n.titleId,w=p===void 0?null:p,P=n.classes,A=P===void 0?[]:P,S=n.attributes,k=S===void 0?{}:S,N=n.styles,C=N===void 0?{}:N;if(t){var E=t.prefix,H=t.iconName,B=t.icon;return _e(d({type:"icon"},t),function(){return V("beforeDOMElementCreation",{iconDefinition:t,params:n}),v.autoA11y&&(b?k["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(w||ce()):(k["aria-hidden"]="true",k.focusable="false")),ft({icons:{main:Ge(B),mask:l?Ge(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:H,transform:d(d({},T),r),symbol:o,title:b,maskId:c,titleId:w,extra:{attributes:k,styles:C,classes:A}})})}},Wa={mixout:function(){return{icon:$a(Ua)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=It,n.nodeCallback=Ya,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?y:a,i=n.callback,o=i===void 0?function(){}:i;return It(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,c=a.mask,m=a.maskId,b=a.extra;return new Promise(function(p,w){Promise.all([Xe(r,s),c.iconName?Xe(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var A=Ze(P,2),S=A[0],k=A[1];p([n,ft({icons:{main:S,mask:k},prefix:s,iconName:r,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ce(s);l.length>0&&(r.style=l);var f;return it(o)&&(f=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},Ha={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return _e({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(ue(i)).join(" ")},children:o}]})}}}},Ba={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,c=a.styles,m=c===void 0?{}:c;return _e({type:"counter",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),Na({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(ue(s))}})})}}}},Ga={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?T:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,c=a.attributes,m=c===void 0?{}:c,b=a.styles,p=b===void 0?{}:b;return _e({type:"text",content:n},function(){return V("beforeDOMElementCreation",{content:n,params:a}),Nt({content:n,transform:d(d({},T),i),title:s,extra:{attributes:m,styles:p,classes:["".concat(v.cssPrefix,"-layers-text")].concat(ue(f))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(qt){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Nt({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Xa=new RegExp('"',"ug"),jt=[1105920,1112319];function qa(e){var t=e.replace(Xa,""),n=sa(t,0),a=n>=jt[0]&&n<=jt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ue(r?t[0]:t),isSecondary:a||r}}function _t(e,t){var n="".concat(zn).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=te(e.children),o=i.filter(function(B){return B.getAttribute($e)===t})[0],s=$.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Un),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?x:h,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?se[b][l[2].toLowerCase()]:Wn[b][f],w=qa(m),P=w.value,A=w.isSecondary,S=l[0].startsWith("FontAwesome"),k=st(p,P),N=k;if(S){var C=va(P);C.iconName&&C.prefix&&(k=C.iconName,p=C.prefix)}if(k&&!A&&(!o||o.getAttribute(tt)!==p||o.getAttribute(nt)!==N)){e.setAttribute(n,N),o&&e.removeChild(o);var E=Fa(),H=E.extra;H.attributes[$e]=t,Xe(k,p).then(function(B){var Te=ft(d(d({},E),{},{icons:{main:B,mask:lt()},prefix:p,iconName:N,extra:H,watchable:!0})),D=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=Te.map(function(kn){return de(kn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Va(e){return Promise.all([_t(e,"::before"),_t(e,"::after")])}function Ka(e){return e.parentNode!==document.head&&!~Dn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute($e)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Tt(e){if(F)return new Promise(function(t,n){var a=te(e.querySelectorAll("*")).filter(Ka).map(Va),r=ct.begin("searchPseudoElements");pn(),Promise.all(a).then(function(){r(),Ve(),t()}).catch(function(){r(),Ve(),n()})})}var Ja={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Tt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?y:a;v.searchPseudoElements&&Tt(r)}}},Lt=!1,Qa={mixout:function(){return{dom:{unwatch:function(){pn(),Lt=!0}}}},hooks:function(){return{bootstrap:function(){Pt(He("mutationObserverCallbacks",{}))},noAuto:function(){La()},watch:function(n){var a=n.observeMutationsRoot;Lt?Ve():Pt(He("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Mt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Za={mixout:function(){return{parse:{transform:function(n){return Mt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Mt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},b={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:b};return{tag:"g",attributes:d({},p.outer),children:[{tag:"g",attributes:d({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:d(d({},a.icon.attributes),p.path)}]}]}}}},ze={x:0,y:0,width:"100%",height:"100%"};function Rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function er(e){return e.tag==="g"?e.children:[e]}var tr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?je(r.split(" ").map(function(o){return o.trim()})):lt();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,b=o.icon,p=ea({transform:l,containerWidth:m,iconWidth:f}),w={tag:"rect",attributes:d(d({},ze),{},{fill:"white"})},P=c.children?{children:c.children.map(Rt)}:{},A={tag:"g",attributes:d({},p.inner),children:[Rt(d({tag:c.tag,attributes:d(d({},c.attributes),p.path)},P))]},S={tag:"g",attributes:d({},p.outer),children:[A]},k="mask-".concat(s||ce()),N="clip-".concat(s||ce()),C={tag:"mask",attributes:d(d({},ze),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,S]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:er(b)},C]};return a.push(E,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(k,")")},ze)}),{children:a,attributes:r}}}},nr={provides:function(t){var n=!1;$.matchMedia&&(n=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ar={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},rr=[aa,Wa,Ha,Ba,Ga,Ja,Qa,Za,tr,nr,ar];ga(rr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Ke=I.parse;I.findIconDefinition;I.toHtml;var ir=I.icon;I.layer;I.text;I.counter;function zt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zt(Object(n),!0).forEach(function(a){Q(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pe(e)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function or(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function sr(e,t){if(e==null)return{};var n=or(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Je(e){return lr(e)||fr(e)||cr(e)||ur()}function lr(e){if(Array.isArray(e))return Qe(e)}function fr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function cr(e,t){if(e){if(typeof e=="string")return Qe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qe(e,t)}}function Qe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ur(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,c=e.spinReverse,m=e.pulse,b=e.fixedWidth,p=e.inverse,w=e.border,P=e.listItem,A=e.flip,S=e.size,k=e.rotation,N=e.pull,C=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":b,"fa-inverse":p,"fa-border":w,"fa-li":P,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},Q(t,"fa-".concat(S),typeof S<"u"&&S!==null),Q(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),Q(t,"fa-pull-".concat(N),typeof N<"u"&&N!==null),Q(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(C).map(function(E){return C[E]?E:null}).filter(function(E){return E})}function dr(e){return e=e-0,e===e}function hn(e){return dr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var vr=["style"];function br(e){return e.charAt(0).toUpperCase()+e.slice(1)}function pr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=hn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[br(r)]=i:t[r]=i,t},{})}function yn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return yn(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var c=t.attributes[f];switch(f){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=pr(c);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=c:l.attrs[hn(f)]=c}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=sr(n,vr);return r.attrs.style=_(_({},r.attrs.style),o),e.apply(void 0,[t.tag,_(_({},r.attrs),s)].concat(Je(a)))}var xn=!1;try{xn=!0}catch{}function gr(){if(!xn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ft(e){if(e&&Pe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ke.icon)return Ke.icon(e);if(e===null)return null;if(e&&Pe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Fe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}var Dt={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},mt=Wt.forwardRef(function(e,t){var n=_(_({},Dt),e),a=n.icon,r=n.mask,i=n.symbol,o=n.className,s=n.title,l=n.titleId,f=n.maskId,c=Ft(a),m=Fe("classes",[].concat(Je(mr(n)),Je((o||"").split(" ")))),b=Fe("transform",typeof n.transform=="string"?Ke.transform(n.transform):n.transform),p=Fe("mask",Ft(r)),w=ir(c,_(_(_(_({},m),b),p),{},{symbol:i,title:s,titleId:l,maskId:f}));if(!w)return gr("Could not find icon",c),null;var P=w.abstract,A={ref:t};return Object.keys(n).forEach(function(S){Dt.hasOwnProperty(S)||(A[S]=n[S])}),hr(P[0],A)});mt.displayName="FontAwesomeIcon";mt.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var hr=yn.bind(null,Wt.createElement),yr={prefix:"fas",iconName:"share-nodes",icon:[448,512,["share-alt"],"f1e0","M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]};function Ar(){const e=async()=>{const t={title:"Join Us in Saving Lives: Register as a Donor Today!",text:"Together, we can make a difference in emergencies. Your contribution could mean the world to someone facing a crisis. ",url:"https://blooddonorapi.shivamkrthakur.in/"};try{await navigator.share(t)}catch{alert("cannot share this page")}};return u.jsx(u.Fragment,{children:u.jsxs("div",{className:"mainarea",children:[u.jsx("div",{className:"sidebar-info",children:u.jsx(On,{})}),u.jsxs("div",{className:"mainarea-info",children:[u.jsxs("div",{className:"mobile-header-main-container",children:[u.jsxs("div",{className:"mobile-header-container",children:[u.jsx("img",{src:"image/logo-white.png"}),u.jsx("p",{children:"Bluebeads"})]}),u.jsx(mt,{icon:yr,className:"share-icon-mobile",onClick:e})]}),u.jsx(An,{}),u.jsx(Sn,{})]})]})})}export{Ar as default};
