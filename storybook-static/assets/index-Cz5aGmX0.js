import{P as b}from"./index-BzjuzjN8.js";import{R as jn}from"./index-CTjT7uj6.js";function cn(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function u(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(a),!0).forEach(function(e){O(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):cn(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xt(t)}function pa(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function ga(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function ha(t,n,a){return n&&ga(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function Kt(t,n){return ka(t)||xa(t,n)||Fn(t,n)||Oa()}function ft(t){return ya(t)||wa(t)||Fn(t)||Aa()}function ya(t){if(Array.isArray(t))return zt(t)}function ka(t){if(Array.isArray(t))return t}function wa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xa(t,n){var a=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(t);!(r=(o=a.next()).done)&&(e.push(o.value),!(n&&e.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function Fn(t,n){if(t){if(typeof t=="string")return zt(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return zt(t,n)}}function zt(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function Aa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var un=function(){},Qt={},Dn={},Yn=null,$n={mark:un,measure:un};try{typeof window<"u"&&(Qt=window),typeof document<"u"&&(Dn=document),typeof MutationObserver<"u"&&(Yn=MutationObserver),typeof performance<"u"&&($n=performance)}catch{}var Pa=Qt.navigator||{},mn=Pa.userAgent,dn=mn===void 0?"":mn,D=Qt,h=Dn,vn=Yn,ut=$n;D.document;var z=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Un=~dn.indexOf("MSIE")||~dn.indexOf("Trident/"),mt,dt,vt,bt,pt,M="___FONT_AWESOME___",jt=16,Wn="fa",Hn="svg-inline--fa",G="data-fa-i2svg",Ft="data-fa-pseudo-element",Sa="data-fa-pseudo-element-pending",Jt="data-prefix",Zt="data-icon",bn="fontawesome-i2svg",Ea="async",Ca=["HTML","HEAD","STYLE","SCRIPT"],Xn=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",tn=[g,y];function lt(t){return new Proxy(t,{get:function(a,e){return e in a?a[e]:a[g]}})}var et=lt((mt={},O(mt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),O(mt,y,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),mt)),rt=lt((dt={},O(dt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(dt,y,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),dt)),it=lt((vt={},O(vt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(vt,y,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),vt)),Ia=lt((bt={},O(bt,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(bt,y,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),bt)),Na=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Gn="fa-layers-text",Ta=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_a=lt((pt={},O(pt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(pt,y,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),pt)),Vn=[1,2,3,4,5,6,7,8,9,10],Ma=Vn.concat([11,12,13,14,15,16,17,18,19,20]),La=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ot=new Set;Object.keys(rt[g]).map(ot.add.bind(ot));Object.keys(rt[y]).map(ot.add.bind(ot));var Ra=[].concat(tn,ft(ot),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(Vn.map(function(t){return"".concat(t,"x")})).concat(Ma.map(function(t){return"w-".concat(t)})),nt=D.FontAwesomeConfig||{};function za(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function ja(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var Fa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Fa.forEach(function(t){var n=Kt(t,2),a=n[0],e=n[1],r=ja(za(a));r!=null&&(nt[e]=r)})}var Bn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wn,replacementClass:Hn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};nt.familyPrefix&&(nt.cssPrefix=nt.familyPrefix);var J=u(u({},Bn),nt);J.autoReplaceSvg||(J.observeMutations=!1);var d={};Object.keys(Bn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(a){J[t]=a,at.forEach(function(e){return e(d)})},get:function(){return J[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){J.cssPrefix=n,at.forEach(function(a){return a(d)})},get:function(){return J.cssPrefix}});D.FontAwesomeConfig=d;var at=[];function Da(t){return at.push(t),function(){at.splice(at.indexOf(t),1)}}var F=jt,_={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ya(t){if(!(!t||!z)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var a=h.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return h.head.insertBefore(n,e),t}}var $a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){for(var t=12,n="";t-- >0;)n+=$a[Math.random()*62|0];return n}function Z(t){for(var n=[],a=(t||[]).length>>>0;a--;)n[a]=t[a];return n}function nn(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function qn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ua(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,'="').concat(qn(t[a]),'" ')},"").trim()}function St(t){return Object.keys(t||{}).reduce(function(n,a){return n+"".concat(a,": ").concat(t[a].trim(),";")},"")}function an(t){return t.size!==_.size||t.x!==_.x||t.y!==_.y||t.rotate!==_.rotate||t.flipX||t.flipY}function Wa(t){var n=t.transform,a=t.containerWidth,e=t.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Ha(t){var n=t.transform,a=t.width,e=a===void 0?jt:a,r=t.height,i=r===void 0?jt:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Un?f+="translate(".concat(n.x/F-e/2,"em, ").concat(n.y/F-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/F,"em), calc(-50% + ").concat(n.y/F,"em)) "):f+="translate(".concat(n.x/F,"em, ").concat(n.y/F,"em) "),f+="scale(".concat(n.size/F*(n.flipX?-1:1),", ").concat(n.size/F*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var Xa=`:root, :host {
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
}`;function Kn(){var t=Wn,n=Hn,a=d.cssPrefix,e=d.replacementClass,r=Xa;if(a!==t||e!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var pn=!1;function Tt(){d.autoAddCss&&!pn&&(Ya(Kn()),pn=!0)}var Ga={mixout:function(){return{dom:{css:Kn,insertCss:Tt}}},hooks:function(){return{beforeDOMElementCreation:function(){Tt()},beforeI2svg:function(){Tt()}}}},L=D||{};L[M]||(L[M]={});L[M].styles||(L[M].styles={});L[M].hooks||(L[M].hooks={});L[M].shims||(L[M].shims=[]);var N=L[M],Qn=[],Va=function t(){h.removeEventListener("DOMContentLoaded",t),At=1,Qn.map(function(n){return n()})},At=!1;z&&(At=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),At||h.addEventListener("DOMContentLoaded",Va));function Ba(t){z&&(At?setTimeout(t,0):Qn.push(t))}function ct(t){var n=t.tag,a=t.attributes,e=a===void 0?{}:a,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?qn(t):"<".concat(n," ").concat(Ua(e),">").concat(i.map(ct).join(""),"</").concat(n,">")}function gn(t,n,a){if(t&&t[n]&&t[n][a])return{prefix:n,iconName:a,icon:t[n][a]}}var _t=function(n,a,e,r){var i=Object.keys(n),o=i.length,s=a,f,c,l;for(e===void 0?(f=1,l=n[i[0]]):(f=0,l=e);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function qa(t){for(var n=[],a=0,e=t.length;a<e;){var r=t.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=t.charCodeAt(a++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),a--)}else n.push(r)}return n}function Dt(t){var n=qa(t);return n.length===1?n[0].toString(16):null}function Ka(t,n){var a=t.length,e=t.charCodeAt(n),r;return e>=55296&&e<=56319&&a>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function hn(t){return Object.keys(t).reduce(function(n,a){var e=t[a],r=!!e.icon;return r?n[e.iconName]=e.icon:n[a]=e,n},{})}function Yt(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=hn(n);typeof N.hooks.addPack=="function"&&!r?N.hooks.addPack(t,hn(n)):N.styles[t]=u(u({},N.styles[t]||{}),i),t==="fas"&&Yt("fa",n)}var gt,ht,yt,B=N.styles,Qa=N.shims,Ja=(gt={},O(gt,g,Object.values(it[g])),O(gt,y,Object.values(it[y])),gt),en=null,Jn={},Zn={},ta={},na={},aa={},Za=(ht={},O(ht,g,Object.keys(et[g])),O(ht,y,Object.keys(et[y])),ht);function te(t){return~Ra.indexOf(t)}function ne(t,n){var a=n.split("-"),e=a[0],r=a.slice(1).join("-");return e===t&&r!==""&&!te(r)?r:null}var ea=function(){var n=function(i){return _t(B,function(o,s,f){return o[f]=_t(s,i,{}),o},{})};Jn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Zn=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),aa=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in B||d.autoFetchSvg,e=_t(Qa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});ta=e.names,na=e.unicodes,en=Et(d.styleDefault,{family:d.familyDefault})};Da(function(t){en=Et(t.styleDefault,{family:d.familyDefault})});ea();function rn(t,n){return(Jn[t]||{})[n]}function ae(t,n){return(Zn[t]||{})[n]}function X(t,n){return(aa[t]||{})[n]}function ra(t){return ta[t]||{prefix:null,iconName:null}}function ee(t){var n=na[t],a=rn("fas",t);return n||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function Y(){return en}var on=function(){return{prefix:null,iconName:null,rest:[]}};function Et(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.family,e=a===void 0?g:a,r=et[e][t],i=rt[e][t]||rt[e][r],o=t in N.styles?t:null;return i||o||null}var yn=(yt={},O(yt,g,Object.keys(it[g])),O(yt,y,Object.keys(it[y])),yt);function Ct(t){var n,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(n={},O(n,g,"".concat(d.cssPrefix,"-").concat(g)),O(n,y,"".concat(d.cssPrefix,"-").concat(y)),n),o=null,s=g;(t.includes(i[g])||t.some(function(c){return yn[g].includes(c)}))&&(s=g),(t.includes(i[y])||t.some(function(c){return yn[y].includes(c)}))&&(s=y);var f=t.reduce(function(c,l){var m=ne(d.cssPrefix,l);if(B[l]?(l=Ja[s].includes(l)?Ia[s][l]:l,o=l,c.prefix=l):Za[s].indexOf(l)>-1?(o=l,c.prefix=Et(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==i[g]&&l!==i[y]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var v=o==="fa"?ra(c.iconName):{},p=X(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||p||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!B.far&&B.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},on());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(B.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=Y()||"fas"),f}var re=function(){function t(){pa(this,t),this.definitions={}}return ha(t,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),Yt(s,o[s]);var f=it[g][s];f&&Yt(f,o[s]),ea()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(a[s][m]=c)}),a[s][f]=c}),a}}]),t}(),kn=[],q={},Q={},ie=Object.keys(Q);function oe(t,n){var a=n.mixoutsTo;return kn=t,q={},Object.keys(Q).forEach(function(e){ie.indexOf(e)===-1&&delete Q[e]}),kn.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),xt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}e.provides&&e.provides(Q)}),a}function $t(t,n){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=q[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(e))}),n}function V(t){for(var n=arguments.length,a=new Array(n>1?n-1:0),e=1;e<n;e++)a[e-1]=arguments[e];var r=q[t]||[];r.forEach(function(i){i.apply(null,a)})}function R(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Q[t]?Q[t].apply(null,n):void 0}function Ut(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,a=t.prefix||Y();if(n)return n=X(a,n)||n,gn(ia.definitions,a,n)||gn(N.styles,a,n)}var ia=new re,se=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,V("noAuto")},fe={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(V("beforeI2svg",n),R("pseudoElements2svg",n),R("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Ba(function(){ce({autoReplaceSvgRoot:a}),V("watch",n)})}},le={icon:function(n){if(n===null)return null;if(xt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var a=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],e=Et(n[0]);return{prefix:e,iconName:X(e,a)||a}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Na))){var r=Ct(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||Y(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=Y();return{prefix:i,iconName:X(i,n)||n}}}},I={noAuto:se,config:d,dom:fe,parse:le,library:ia,findIconDefinition:Ut,toHtml:ct},ce=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.autoReplaceSvgRoot,e=a===void 0?h:a;(Object.keys(N.styles).length>0||d.autoFetchSvg)&&z&&d.autoReplaceSvg&&I.dom.i2svg({node:e})};function It(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(e){return ct(e)})}}),Object.defineProperty(t,"node",{get:function(){if(z){var e=h.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ue(t){var n=t.children,a=t.main,e=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(an(o)&&a.found&&!e.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=St(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function me(t){var n=t.prefix,a=t.iconName,e=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function sn(t){var n=t.icons,a=n.main,e=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,v=t.watchable,p=v===void 0?!1:v,w=e.found?e:a,E=w.width,x=w.height,P=r==="fak",k=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(j){return m.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(m.classes).join(" "),A={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(x)})},C=P&&!~m.classes.indexOf("fa-fw")?{width:"".concat(E/x*16*.0625,"em")}:{};p&&(A.attributes[G]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[f]}),delete A.attributes.title);var S=u(u({},A),{},{prefix:r,iconName:i,main:a,mask:e,maskId:c,transform:o,symbol:s,styles:u(u({},C),m.styles)}),U=e.found&&a.found?R("generateAbstractMask",S)||{children:[],attributes:{}}:R("generateAbstractIcon",S)||{children:[],attributes:{}},W=U.children,Nt=U.attributes;return S.children=W,S.attributes=Nt,s?me(S):ue(S)}function wn(t){var n=t.content,a=t.width,e=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[G]="");var l=u({},o.styles);an(r)&&(l.transform=Ha({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var m=St(l);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function de(t){var n=t.content,a=t.title,e=t.extra,r=u(u(u({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=St(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Mt=N.styles;function Wt(t){var n=t[0],a=t[1],e=t.slice(4),r=Kt(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:a,icon:o}}var ve={found:!1,width:512,height:512};function be(t,n){!Xn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Ht(t,n){var a=n;return n==="fa"&&d.styleDefault!==null&&(n=Y()),new Promise(function(e,r){if(R("missingIconAbstract"),a==="fa"){var i=ra(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Mt[n]&&Mt[n][t]){var o=Mt[n][t];return e(Wt(o))}be(t,n),e(u(u({},ve),{},{icon:d.showMissingIcons&&t?R("missingIconAbstract")||{}:{}}))})}var xn=function(){},Xt=d.measurePerformance&&ut&&ut.mark&&ut.measure?ut:{mark:xn,measure:xn},tt='FA "6.5.2"',pe=function(n){return Xt.mark("".concat(tt," ").concat(n," begins")),function(){return oa(n)}},oa=function(n){Xt.mark("".concat(tt," ").concat(n," ends")),Xt.measure("".concat(tt," ").concat(n),"".concat(tt," ").concat(n," begins"),"".concat(tt," ").concat(n," ends"))},fn={begin:pe,end:oa},kt=function(){};function An(t){var n=t.getAttribute?t.getAttribute(G):null;return typeof n=="string"}function ge(t){var n=t.getAttribute?t.getAttribute(Jt):null,a=t.getAttribute?t.getAttribute(Zt):null;return n&&a}function he(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function ye(){if(d.autoReplaceSvg===!0)return wt.replace;var t=wt[d.autoReplaceSvg];return t||wt.replace}function ke(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function we(t){return h.createElement(t)}function sa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.ceFn,e=a===void 0?t.tag==="svg"?ke:we:a;if(typeof t=="string")return h.createTextNode(t);var r=e(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(sa(o,{ceFn:e}))}),r}function xe(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var wt={replace:function(n){var a=n[0];if(a.parentNode)if(n[1].forEach(function(r){a.parentNode.insertBefore(sa(r),a)}),a.getAttribute(G)===null&&d.keepOriginalSource){var e=h.createComment(xe(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(n){var a=n[0],e=n[1];if(~nn(a).indexOf(d.replacementClass))return wt.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return ct(s)}).join(`
`);a.setAttribute(G,""),a.innerHTML=o}};function On(t){t()}function fa(t,n){var a=typeof n=="function"?n:kt;if(t.length===0)a();else{var e=On;d.mutateApproach===Ea&&(e=D.requestAnimationFrame||On),e(function(){var r=ye(),i=fn.begin("mutate");t.map(r),i(),a()})}}var ln=!1;function la(){ln=!0}function Gt(){ln=!1}var Ot=null;function Pn(t){if(vn&&d.observeMutations){var n=t.treeCallback,a=n===void 0?kt:n,e=t.nodeCallback,r=e===void 0?kt:e,i=t.pseudoElementsCallback,o=i===void 0?kt:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Ot=new vn(function(c){if(!ln){var l=Y();Z(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!An(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&An(m.target)&&~La.indexOf(m.attributeName))if(m.attributeName==="class"&&ge(m.target)){var v=Ct(nn(m.target)),p=v.prefix,w=v.iconName;m.target.setAttribute(Jt,p||l),w&&m.target.setAttribute(Zt,w)}else he(m.target)&&r(m.target)})}}),z&&Ot.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ae(){Ot&&Ot.disconnect()}function Oe(t){var n=t.getAttribute("style"),a=[];return n&&(a=n.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function Pe(t){var n=t.getAttribute("data-prefix"),a=t.getAttribute("data-icon"),e=t.innerText!==void 0?t.innerText.trim():"",r=Ct(nn(t));return r.prefix||(r.prefix=Y()),n&&a&&(r.prefix=n,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=ae(r.prefix,t.innerText)||rn(r.prefix,Dt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Se(t){var n=Z(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=t.getAttribute("title"),e=t.getAttribute("data-fa-title-id");return d.autoA11y&&(a?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(e||st()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ee(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Sn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Pe(t),e=a.iconName,r=a.prefix,i=a.rest,o=Se(t),s=$t("parseNodeAttributes",{},t),f=n.styleParser?Oe(t):[];return u({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:_,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ce=N.styles;function ca(t){var n=d.autoReplaceSvg==="nest"?Sn(t,{styleParser:!1}):Sn(t);return~n.extra.classes.indexOf(Gn)?R("generateLayersText",t,n):R("generateSvgReplacementMutation",t,n)}var $=new Set;tn.map(function(t){$.add("fa-".concat(t))});Object.keys(et[g]).map($.add.bind($));Object.keys(et[y]).map($.add.bind($));$=ft($);function En(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var a=h.documentElement.classList,e=function(m){return a.add("".concat(bn,"-").concat(m))},r=function(m){return a.remove("".concat(bn,"-").concat(m))},i=d.autoFetchSvg?$:tn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ce));i.includes("fa")||i.push("fa");var o=[".".concat(Gn,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Z(t.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=fn.begin("onTree"),c=s.reduce(function(l,m){try{var v=ca(m);v&&l.push(v)}catch(p){Xn||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(v){fa(v,function(){e("active"),e("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(v){f(),m(v)})})}function Ie(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ca(t).then(function(a){a&&fa([a],n)})}function Ne(t){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(n||{}).icon?n:Ut(n||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Ut(r||{})),t(e,u(u({},a),{},{mask:r}))}}var Te=function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?_:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,m=a.title,v=m===void 0?null:m,p=a.titleId,w=p===void 0?null:p,E=a.classes,x=E===void 0?[]:E,P=a.attributes,k=P===void 0?{}:P,A=a.styles,C=A===void 0?{}:A;if(n){var S=n.prefix,U=n.iconName,W=n.icon;return It(u({type:"icon"},n),function(){return V("beforeDOMElementCreation",{iconDefinition:n,params:a}),d.autoA11y&&(v?k["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(w||st()):(k["aria-hidden"]="true",k.focusable="false")),sn({icons:{main:Wt(W),mask:f?Wt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:U,transform:u(u({},_),r),symbol:o,title:v,maskId:l,titleId:w,extra:{attributes:k,styles:C,classes:x}})})}},_e={mixout:function(){return{icon:Ne(Te)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=En,a.nodeCallback=Ie,a}}},provides:function(n){n.i2svg=function(a){var e=a.node,r=e===void 0?h:e,i=a.callback,o=i===void 0?function(){}:i;return En(r,o)},n.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,m=e.maskId,v=e.extra;return new Promise(function(p,w){Promise.all([Ht(r,s),l.iconName?Ht(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var x=Kt(E,2),P=x[0],k=x[1];p([a,sn({icons:{main:P,mask:k},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=St(s);f.length>0&&(r.style=f);var c;return an(o)&&(c=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},Me={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return It({type:"layer"},function(){V("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ft(i)).join(" ")},children:o}]})}}}},Le={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,c=f===void 0?{}:f,l=e.styles,m=l===void 0?{}:l;return It({type:"counter",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:e}),de({content:a.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ft(s))}})})}}}},Re={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?_:r,o=e.title,s=o===void 0?null:o,f=e.classes,c=f===void 0?[]:f,l=e.attributes,m=l===void 0?{}:l,v=e.styles,p=v===void 0?{}:v;return It({type:"text",content:a},function(){return V("beforeDOMElementCreation",{content:a,params:e}),wn({content:a,transform:u(u({},_),i),title:s,extra:{attributes:m,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ft(c))}})})}}},provides:function(n){n.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Un){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,wn({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},ze=new RegExp('"',"ug"),Cn=[1105920,1112319];function je(t){var n=t.replace(ze,""),a=Ka(n,0),e=a>=Cn[0]&&a<=Cn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Dt(r?n[0]:n),isSecondary:e||r}}function In(t,n){var a="".concat(Sa).concat(n.replace(":","-"));return new Promise(function(e,r){if(t.getAttribute(a)!==null)return e();var i=Z(t.children),o=i.filter(function(W){return W.getAttribute(Ft)===n})[0],s=D.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Ta),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),e();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rt[v][f[2].toLowerCase()]:_a[v][c],w=je(m),E=w.value,x=w.isSecondary,P=f[0].startsWith("FontAwesome"),k=rn(p,E),A=k;if(P){var C=ee(E);C.iconName&&C.prefix&&(k=C.iconName,p=C.prefix)}if(k&&!x&&(!o||o.getAttribute(Jt)!==p||o.getAttribute(Zt)!==A)){t.setAttribute(a,A),o&&t.removeChild(o);var S=Ee(),U=S.extra;U.attributes[Ft]=n,Ht(k,p).then(function(W){var Nt=sn(u(u({},S),{},{icons:{main:W,mask:on()},prefix:p,iconName:A,extra:U,watchable:!0})),j=h.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(j,t.firstChild):t.appendChild(j),j.outerHTML=Nt.map(function(ba){return ct(ba)}).join(`
`),t.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Fe(t){return Promise.all([In(t,"::before"),In(t,"::after")])}function De(t){return t.parentNode!==document.head&&!~Ca.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ft)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Nn(t){if(z)return new Promise(function(n,a){var e=Z(t.querySelectorAll("*")).filter(De).map(Fe),r=fn.begin("searchPseudoElements");la(),Promise.all(e).then(function(){r(),Gt(),n()}).catch(function(){r(),Gt(),a()})})}var Ye={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Nn,a}}},provides:function(n){n.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?h:e;d.searchPseudoElements&&Nn(r)}}},Tn=!1,$e={mixout:function(){return{dom:{unwatch:function(){la(),Tn=!0}}}},hooks:function(){return{bootstrap:function(){Pn($t("mutationObserverCallbacks",{}))},noAuto:function(){Ae()},watch:function(a){var e=a.observeMutationsRoot;Tn?Gt():Pn($t("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},_n=function(n){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Ue={mixout:function(){return{parse:{transform:function(a){return _n(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=_n(r)),a}}},provides:function(n){n.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),p.path)}]}]}}}},Lt={x:0,y:0,width:"100%",height:"100%"};function Mn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function We(t){return t.tag==="g"?t.children:[t]}var He={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):on();return i.prefix||(i.prefix=Y()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(n){n.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,c=i.width,l=i.icon,m=o.width,v=o.icon,p=Wa({transform:f,containerWidth:m,iconWidth:c}),w={tag:"rect",attributes:u(u({},Lt),{},{fill:"white"})},E=l.children?{children:l.children.map(Mn)}:{},x={tag:"g",attributes:u({},p.inner),children:[Mn(u({tag:l.tag,attributes:u(u({},l.attributes),p.path)},E))]},P={tag:"g",attributes:u({},p.outer),children:[x]},k="mask-".concat(s||st()),A="clip-".concat(s||st()),C={tag:"mask",attributes:u(u({},Lt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,P]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:We(v)},C]};return e.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(k,")")},Lt)}),{children:e,attributes:r}}}},Xe={provides:function(n){var a=!1;D.matchMedia&&(a=D.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ge={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Ve=[Ga,_e,Me,Le,Re,Ye,$e,Ue,He,Xe,Ge];oe(Ve,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Vt=I.parse;I.findIconDefinition;I.toHtml;var Be=I.icon;I.layer;I.text;I.counter;function Ln(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),a.push.apply(a,e)}return a}function T(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?Ln(Object(a),!0).forEach(function(e){K(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ln(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}function Pt(t){"@babel/helpers - typeof";return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pt(t)}function K(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function qe(t,n){if(t==null)return{};var a={},e=Object.keys(t),r,i;for(i=0;i<e.length;i++)r=e[i],!(n.indexOf(r)>=0)&&(a[r]=t[r]);return a}function Ke(t,n){if(t==null)return{};var a=qe(t,n),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],!(n.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function Bt(t){return Qe(t)||Je(t)||Ze(t)||tr()}function Qe(t){if(Array.isArray(t))return qt(t)}function Je(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ze(t,n){if(t){if(typeof t=="string")return qt(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return qt(t,n)}}function qt(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function tr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(t){var n,a=t.beat,e=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,m=t.pulse,v=t.fixedWidth,p=t.inverse,w=t.border,E=t.listItem,x=t.flip,P=t.size,k=t.rotation,A=t.pull,C=(n={"fa-beat":a,"fa-fade":e,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":v,"fa-inverse":p,"fa-border":w,"fa-li":E,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},K(n,"fa-".concat(P),typeof P<"u"&&P!==null),K(n,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),K(n,"fa-pull-".concat(A),typeof A<"u"&&A!==null),K(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(C).map(function(S){return C[S]?S:null}).filter(function(S){return S})}function ar(t){return t=t-0,t===t}function ua(t){return ar(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,a){return a?a.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var er=["style"];function rr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ir(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,a){var e=a.indexOf(":"),r=ua(a.slice(0,e)),i=a.slice(e+1).trim();return r.startsWith("webkit")?n[rr(r)]=i:n[r]=i,n},{})}function ma(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var e=(n.children||[]).map(function(f){return ma(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,c){var l=n.attributes[c];switch(c){case"class":f.attrs.className=l,delete n.attributes.class;break;case"style":f.attrs.style=ir(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[ua(c)]=l}return f},{attrs:{}}),i=a.style,o=i===void 0?{}:i,s=Ke(a,er);return r.attrs.style=T(T({},r.attrs.style),o),t.apply(void 0,[n.tag,T(T({},r.attrs),s)].concat(Bt(e)))}var da=!1;try{da=!0}catch{}function or(){if(!da&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Rn(t){if(t&&Pt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vt.icon)return Vt.icon(t);if(t===null)return null;if(t&&Pt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Rt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?K({},t,n):{}}var zn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},va=jn.forwardRef(function(t,n){var a=T(T({},zn),t),e=a.icon,r=a.mask,i=a.symbol,o=a.className,s=a.title,f=a.titleId,c=a.maskId,l=Rn(e),m=Rt("classes",[].concat(Bt(nr(a)),Bt((o||"").split(" ")))),v=Rt("transform",typeof a.transform=="string"?Vt.transform(a.transform):a.transform),p=Rt("mask",Rn(r)),w=Be(l,T(T(T(T({},m),v),p),{},{symbol:i,title:s,titleId:f,maskId:c}));if(!w)return or("Could not find icon",l),null;var E=w.abstract,x={ref:n};return Object.keys(a).forEach(function(P){zn.hasOwnProperty(P)||(x[P]=a[P])}),sr(E[0],x)});va.displayName="FontAwesomeIcon";va.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};var sr=ma.bind(null,jn.createElement),cr={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},ur={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},mr={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},dr={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};export{va as F,mr as a,dr as b,cr as c,ur as f};
