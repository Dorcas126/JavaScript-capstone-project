(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),a=t(645),o=t.n(a)()(i());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&family=Pacifico&display=swap);"]),o.push([n.id,'* {\n  margin: 0;\n  box-sizing: border-box;\n  font-family: "Heebo", sans-serif;\n  text-decoration: none;\n  transition: 0.3s ease-in;\n}\n\n:root {\n  --primary-dark: #0d0d0f;\n  --secondary-dark: #8f9196;\n  --primary-red: #eb1c24;\n}\n\nbody {\n  background-color: var(--primary-dark);\n  overflow-x: hidden;\n}\n\nheader {\n  height: 2cm;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  background-color: var(--primary-dark);\n  z-index: 4;\n  border-bottom: 2px solid var(--secondary-dark);\n  border-radius: 3px;\n}\n\n.logo-movie {\n  margin-left: 20px;\n  height: 100%;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  color: var(--primary-red);\n  font-size: 20px;\n}\n\n.logo-movie span {\n  font-family: "Pacifico", cursive;\n}\n\n.logo-movie a {\n  display: flex;\n  font-size: 36px;\n  font-weight: 900;\n  align-items: center;\n  height: 100%;\n  color: white;\n  border: 0;\n}\n\n.logo-movie a span {\n  color: var(--primary-red);\n}\n\nnav {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  position: relative;\n  justify-content: space-between;\n}\n\nnav ul li {\n  color: white;\n  text-decoration: none;\n  padding: 4px 6px 4px 6px;\n  border-radius: 10px;\n  font-weight: 700;\n}\n\n.nav ul li.active {\n  background-color: var(--primary-red);\n}\n\n.ham {\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: transform 200ms;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  margin-right: 2rem;\n}\n\n.hamRotate.active {\n  transform: rotate(45deg);\n}\n\n.hamRotate180.active {\n  transform: rotate(180deg);\n}\n\n.line {\n  fill: none;\n  transition: stroke-dasharray 200ms, stroke-dashoffset 200ms;\n  stroke: white;\n  stroke-width: 5.5;\n  stroke-linecap: round;\n}\n\n.ham1 .top {\n  stroke-dasharray: 40 139;\n}\n\n.ham1 .bottom {\n  stroke-dasharray: 40 180;\n}\n\n.ham1.active .top {\n  stroke-dashoffset: -98px;\n}\n\n.ham1.active .bottom {\n  stroke-dashoffset: -138px;\n}\n\n.loader {\n  height: 12cm;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.pagnate-box {\n  white-space: nowrap;\n  width: fit-content;\n}\n\n.pagnate-box div {\n  height: 1cm;\n  width: 1cm;\n  border-radius: 100%;\n  border: 2px solid var(--primary-red);\n  display: inline-flex;\n  color: white;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.pagnate-box div.active {\n  background-color: var(--primary-red);\n}\n\n.spinner {\n  position: relative;\n  width: 56px;\n  height: 56px;\n}\n\n.spinner > div {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 13.4px solid rgba(235, 28, 36, 0.1);\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: spinner-g7vlvwmd 0.52s linear infinite;\n  z-index: 0;\n}\n\n.spinner > div::before {\n  content: "";\n  height: 13.4px;\n  width: 13.4px;\n  border-radius: 50%;\n  background: #eb1c24;\n  position: absolute;\n  top: 50%;\n  animation: spinner-h1vps1md 1.04s infinite reverse steps(1);\n  transform:\n    translate(\n      calc(2 * var(--translate-2)),\n      calc(var(--translate) * 1%)\n    );\n  z-index: 1;\n}\n\n.spinner > div:nth-of-type(1) {\n  --translate: -50;\n  --translate-2: calc(56px / 8);\n}\n\n.spinner > div:nth-of-type(1)::before {\n  right: 0;\n}\n\n.spinner > div:nth-of-type(2) {\n  --translate: 50;\n  --translate-2: calc(-56px / 8);\n\n  animation-delay: 0.52s;\n  animation-direction: reverse;\n  transform: translate(21.3px, 0);\n}\n\n.spinner > div:nth-of-type(2)::before {\n  left: 0;\n  transform: translate(calc(-56px / 4), -50%);\n  animation-direction: normal;\n}\n\n@keyframes spinner-h1vps1md {\n  0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes spinner-g7vlvwmd {\n  from {\n    transform:\n      translate(calc(var(--translate) * 1%), 0)\n      translate(calc(var(--translate-2)), 0) rotate(0deg);\n  }\n\n  to {\n    transform:\n      translate(calc(var(--translate) * 1%), 0)\n      translate(calc(var(--translate-2)), 0) rotate(360deg);\n  }\n}\n\nfooter {\n  width: 100%;\n  background-color: var(--primary-red);\n  bottom: 0;\n  padding: 10px;\n  text-align: center;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 25px;\n  padding: 10px;\n  justify-content: center;\n  padding-bottom: 3rem;\n}\n\n.movie-card {\n  height: 10cm;\n  width: 8.5cm;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 10px;\n  position: relative;\n  overflow: hidden;\n}\n\n.movie-card img {\n  height: 100%;\n  width: 100%;\n  border-radius: 10px;\n  object-fit: fill;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.card-content {\n  z-index: 1;\n  background-image:\n    linear-gradient(\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.3),\n      rgba(0, 0, 0, 0.74),\n      rgba(0, 0, 0, 0.897)\n    );\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: end;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0 10px 10px 10px;\n}\n\n.title {\n  width: 100%;\n  font-weight: 900;\n  font-size: 22px;\n  color: white;\n  text-decoration: none;\n}\n\n.comments {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.likes {\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  padding-right: 5px;\n}\n\n.like-count {\n  background-color: white;\n  height: 0.8cm;\n  width: 0.8cm;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--primary-red);\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.like-btn {\n  color: var(--primary-red);\n  font-size: 30px;\n}\n\n.comment-btn {\n  height: 1cm;\n  width: 3cm;\n  border-radius: 7px;\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  color: white;\n  background-color: var(--primary-red);\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.modalBox {\n  height: 100%;\n  width: 100%;\n  margin-top: 2cm;\n  top: 0;\n  left: 0;\n  position: fixed;\n  overflow-y: scroll;\n  z-index: 10;\n  background-color: var(--primary-dark);\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 10rem;\n}\n\n.modalContentWrapper {\n  width: 100%;\n  background-color: transparent;\n  padding: 3px;\n}\n\n.modal-close-btn {\n  outline: none;\n  border: 0;\n  font-size: 16px;\n  font-weight: 700;\n  padding: 4px 10px 4px 10px;\n  color: white;\n  background-color: var(--primary-red);\n  border-radius: 6px;\n  cursor: pointer;\n  margin-top: 1cm;\n}\n\n.image-box {\n  width: 100%;\n  height: 11cm;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 36px;\n  font-weight: bolder;\n  margin-top: 20px;\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n}\n\n.img-overlay {\n  height: 100%;\n  width: 100%;\n  background-image:\n    linear-gradient(\n      rgba(13, 13, 15, 0.205),\n      rgba(13, 13, 15, 0.253),\n      rgba(13, 13, 15, 0.911),\n      rgb(13, 13, 15)\n    );\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.image-box img {\n  width: 100%;\n  height: 100%;\n}\n\n.modal-content {\n  width: 100%;\n  transform: translateY(-5cm);\n  padding: 10px;\n}\n\n.pop-title {\n  font-size: 26px;\n  font-weight: 800;\n  color: white;\n  margin-top: 4rem;\n}\n\n.genre {\n  list-style-type: none;\n  display: flex;\n  flex-direction: row;\n  left: 0;\n  margin-left: -1cm;\n  gap: 10px;\n  margin-top: 0.6cm;\n}\n\n.genre li {\n  padding: 2px 10px 2px 10px;\n  background-color: rgba(255, 255, 255, 0.274);\n  border: 1px solid white;\n  border-radius: 6px;\n  font-weight: 600;\n  color: white;\n}\n\n.info-link {\n  width: 3.5cm;\n  height: 1.6cm;\n  background-color: var(--primary-red);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  gap: 10px;\n  margin-top: 1cm;\n  color: white;\n  font-size: 18px;\n}\n\n#watch {\n  color: var(--primary-red);\n  font-size: 18px;\n  height: 1cm;\n  width: 1cm;\n  background-color: white;\n  border-radius: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.info {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  background-color: var(--primary-dark);\n  height: 4cm;\n  width: 100%;\n  margin-top: 1cm;\n  gap: 10px;\n}\n\n.info-card {\n  width: 4cm;\n  height: 1.8cm;\n  background-color: white;\n  border-radius: 10px;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2px;\n}\n\n.info-card i {\n  font-size: 22px;\n  grid-column: span 1;\n  display: flex;\n  padding-left: 10px;\n  align-items: center;\n}\n\n#likes {\n  color: blue;\n}\n\n#rating {\n  color: orange;\n}\n\n#language {\n  color: green;\n}\n\n#types {\n  color: rgb(124, 0, 128);\n}\n\n.info-value {\n  grid-column: span 3;\n  padding-right: 10px;\n  align-items: end;\n  display: flex;\n  font-size: 25px;\n  font-weight: 800;\n  color: var(--primary-red);\n}\n\n.info-lable {\n  grid-column: span 4;\n  display: flex;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: var(--primary-red);\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.description-1 {\n  color: var(--secondary-dark);\n  font-size: 18px;\n  font-weight: 700;\n  margin-top: 1cm;\n}\n\n.description-p {\n  color: var(--secondary-dark);\n  font-size: 14px;\n  font-weight: 400;\n  margin-top: 10px;\n}\n\n.h3-comment {\n  margin-top: -4cm;\n  text-align: center;\n  font-size: 25px;\n  color: white;\n}\n\n.commentsBox {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  margin-top: 20px;\n  gap: 20px;\n}\n\n.comment-item {\n  width: 100%;\n}\n\n.comment-list {\n  height: 419px;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 2px;\n  gap: 20px;\n}\n\n.comment-user {\n  width: 100%;\n  background-color: transparent;\n  border-bottom: 1px solid var(--secondary-dark);\n}\n\n.user-details {\n  height: 0.8cm;\n  display: flex;\n  gap: 10px;\n}\n\n.user-details .img {\n  display: flex;\n  justify-content: end;\n}\n\n.user-details .img img {\n  height: 0.8cm;\n  width: 0.8cm;\n  border-radius: 30%;\n}\n\n.user-name {\n  font-size: 18px;\n  font-weight: 700;\n  color: var(--primary-red);\n}\n\n.user-comment {\n  color: var(--secondary-dark);\n  margin-top: 10px;\n  font-weight: 300;\n}\n\n.date {\n  text-align: right;\n  color: var(--primary-red);\n  font-weight: 400;\n  font-size: 12px;\n  margin-right: 15px;\n}\n\n.comment-list::-webkit-scrollbar {\n  width: 2px;\n  background-color: white;\n}\n\n.comment-list::-webkit-scrollbar-thumb {\n  background-color: var(--primary-red);\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  gap: 10px;\n}\n\nform h3 {\n  font-size: 26px;\n  font-weight: bold;\n  color: var(--primary-red);\n}\n\n.form-message {\n  font-size: 16px;\n  font-weight: 700;\n  display: none;\n  width: 90%;\n  padding: 5px;\n  border-radius: 3px;\n}\n\n.form-message.success {\n  display: block;\n  background-color: rgba(11, 116, 11, 0.384);\n  border: 2px solid rgb(2, 95, 33);\n  color: white;\n  text-align: center;\n}\n\n.form-message.error {\n  display: block;\n  background-color: rgba(116, 11, 11, 0.438);\n  border: 2px solid rgb(95, 2, 2);\n  color: rgb(248, 192, 192);\n  text-align: center;\n}\n\n#userName {\n  width: 100%;\n  height: 1cm;\n  padding: 3px;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 4px;\n  border: 3px solid white;\n  color: var(--secondary-dark);\n  background-color: transparent;\n}\n\n#comment {\n  width: 100%;\n  padding: 7px;\n  font-weight: 600;\n  font-size: 16px;\n  outline: none;\n  border-radius: 4px;\n  border: 3px solid white;\n  color: var(--secondary-dark);\n  background-color: transparent;\n}\n\n#submit-comment {\n  width: 100%;\n  height: 1cm;\n  border-radius: 9px;\n  cursor: pointer;\n  color: white;\n  background-color: var(--primary-red);\n  outline: 0;\n  border: 0;\n  text-transform: capitalize;\n  font-size: 18px;\n  font-weight: 700;\n}\n\n.pagination {\n  width: 100%;\n  overflow-x: auto;\n  scroll-behavior: smooth;\n}\n\n@media screen and (max-width: 769px) {\n  nav ul {\n    list-style-type: none;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 10cm;\n    margin-top: 2cm;\n    width: 100%;\n    background-color: var(--primary-dark);\n    position: absolute;\n    gap: 20px;\n    transition: 200ms;\n  }\n\n  nav ul.active {\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .commentsBox {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .pagination {\n    width: 15cm;\n  }\n\n  nav ul {\n    list-style-type: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: flex-end;\n    gap: 20px;\n    right: 0;\n    position: relative;\n    margin-right: 15px;\n    height: 100%;\n    margin-top: 0;\n  }\n\n  .ham {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1119px) {\n  .modalBox {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n}\n',""]);const s=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&o[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},o=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=i(u,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=r(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var s=t(a[o]);e[s].references--}for(var c=r(n,i),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),a=t(569),o=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),m=t.n(p),u=t(426),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const g=(n,e,t)=>{n.addEventListener(e,t)},h=n=>document.querySelector(n),v=n=>document.querySelectorAll(n),x=n=>document.createElement(n),b=h(".main-content"),y=h("main"),w=h(".ham "),k=h("nav ul"),L=v("nav ul li"),T="https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1MJTPLTRJ5D10GoeU1e8";var M=["second","minute","hour","day","week","month","year"],$=["秒","分钟","小时","天","周","个月","年"],z={},C=function(n,e){z[n]=e},H=[60,60,24,7,365/7/12,12];function S(n){return n instanceof Date?n:!isNaN(n)||/^\d+$/.test(n)?new Date(parseInt(n)):(n=(n||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(n))}C("en_US",(function(n,e){if(0===e)return["just now","right now"];var t=M[Math.floor(e/2)];return n>1&&(t+="s"),[n+" "+t+" ago","in "+n+" "+t]})),C("zh_CN",(function(n,e){if(0===e)return["刚刚","片刻后"];var t=$[~~(e/2)];return[n+" "+t+"前",n+" "+t+"后"]}));const j=(n,e,t)=>{n.classList.add(e),n.innerHTML=t,setTimeout((()=>{n.classList.remove(e),n.innerHTML=null}),3e3)},N=(n,e)=>{const t=h(".form-message");switch(n){case"success":j(t,"success",e);break;case"error":j(t,"error",e);break;case"warn":j(t,"warn",e)}},E=async(n,e)=>{const t=h(".comment-list");e&&(t.innerHTML="<p>LOADING COMMENTS...</p>");const r=await(async n=>{try{const e=await fetch(`${T}/comments?item_id=${n}`);return await e.json()}catch(n){b.innHTML="<p style='color: red;'>Opps Error Occured! Failed to fetch"}return null})(n);r.error?t.innerHTML="<p>No comments under this movie</p>":(t.innerHTML=null,r.forEach((n=>{const e=x("div");var r,i,a;e.classList.add("comment-user"),e.innerHTML=`\n      <div class="user-details">\n      <div class="img">\n          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"\n              alt="dp">\n      </div>\n\n      <p class="user-name">${n.username}</p>\n  </div>\n  <p class="user-comment">${n.comment} </p>\n  <p class="date">\n      Posted <time datetime="${n.creation_date}">\n      ${r=`${n.creation_date}`,function(n,e){for(var t=n<0?1:0,r=n=Math.abs(n),i=0;n>=H[i]&&i<H.length;i++)n/=H[i];return(n=Math.floor(n))>(0==(i*=2)?9:1)&&(i+=1),e(n,i,r)[t].replace("%s",n.toString())}(function(n,e){return(+(e?S(e):new Date)-+S(n))/1e3}(r,a&&a.relativeDate),function(n){return z[n]||z.en_US}(i))} ago</time>.\n  </p>\n      `,t.appendChild(e),t.scrollTop=t.scrollHeight}))),(async n=>{const e=h(".comment-count");if(e.innerHTML="---",n?.error)e.innerHTML="(0)";else{const t=n.length;e.innerHTML=`(${t})`}})(r)},A=n=>{const e=x("div");e.classList.add("modalBox");const t=x("div");t.classList.add("modalContentWrapper");const r=x("button");r.setAttribute("class","modal-close-btn"),r.innerHTML="&lt; Back to all movies ",t.appendChild(r);const i=x("div");i.setAttribute("class","image-box"),i.innerHTML=`\n  <div class="img-overlay"></div>\n  <img src="${n.image?.original}" alt="${n.name}">\n  `,t.appendChild(i);const a=x("div");a.setAttribute("class","modal-content"),a.innerHTML=`\n    <p class="pop-title">${n.name}</p>\n      <ul class="genre">\n      ${n.genres.map((n=>`<li>${n}</li>`)).join("")}\n        \n      </ul>\n      <a href="${n.officialSite}" class="info-link" target="_blank">\n        <i id="watch" class='fa-solid fa-play'></i>\n        <p>Watch</p>\n      </a>\n      <div class="info">\n        <div class="info-card">\n          <i id="likes" class="fa-solid fa-heart"></i>\n          <p class="info-value">${n.likes}</p>\n          <p class="info-lable">Likes</p>\n        </div>\n        <div class="info-card">\n          <i id="rating" class="fa-solid fa-star"></i>\n          <p class="info-value">${n.rating.average}</p>\n          <p class="info-lable">Rating</p>\n        </div>\n        <div class="info-card">\n          <i id="language" class="fa-solid fa-language"></i>\n          <p class="info-value">${n.language}</p>\n          <p class="info-lable">Language</p>\n        </div>\n        <div class="info-card">\n          <i id="types" class="fa-solid fa-circle-info"></i>\n          <p class="info-value">${n.type}</p>\n          <p class="info-lable">Type</p>\n        </div>\n\n      </div>\n      <details>\n        <summary class="description-1">Description</summary>\n        <div class="description-p">\n          <p>${n.summary}</p>\n        </div>\n      </details>\n    `,t.appendChild(a);const o=x("h3");o.setAttribute("class","h3-comment"),o.innerHTML=" Comments <span class='comment-count'></span> ",t.appendChild(o);const s=x("div");s.setAttribute("class","commentsBox"),s.innerHTML='\n  <div class="comment-item comment-list"></div>\n\n  <form class="comment-item">\n <h3>Add new comment</h3>\n <p class="form-message"></p>\n   <input type="text" name="userName" id="userName" placeholder="User name">\n   <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your insight"></textarea>\n   <input type="submit" id="submit-comment" value=\'submit\'>\n</form>\n  \n  ',t.appendChild(s),e.appendChild(t),document.body.style.overflowY="hidden",y.appendChild(e),E(n.id,!0);const c=h("#submit-comment");g(c,"click",(e=>{e.preventDefault(),(async n=>{const e=h("#userName"),t=h("#comment"),r=h("#submit-comment");r.value="Submitting...",""===e.value.trim()||""===t.value.trim()?(N("error","Please all filed is required"),r.value="Submit"):((await(async n=>{try{return await fetch(`${T}/comments`,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})?{isSuccess:!0}:0}catch(n){return{isSuccess:!1}}})({item_id:n,username:e.value,comment:t.value})).isSuccess?(N("success","You have submitted your comment"),t.value=null,e.value=null,E(n)):N("error","Opps error occured! Try gain later"),r.value="Submit")})(n.id)}));const l=h(".modal-close-btn");g(l,"click",(()=>{y.removeChild(e),document.body.style.overflowY="auto"}))},O=async(n,e)=>{b.innerHTML=null,b.scrollIntoView({block:"end",behavior:"smooth"}),n.forEach((n=>{const e=x("li");e.classList.add("movie-card");const t=`\n    <img src="${n.image?.medium}" alt="${n.name}" class='movie-img' />\n    <div class="card-content">\n      <h3 class="title">${n.name}</h3>\n\n      <div class="comments">\n        <button class="comment-btn">\n          Comments\n        </button>\n        <div class="likes">\n          <span id='${n.id}' class='like-btn'><i class="fa-regular fa-heart" id='love${n.id}'></i></span>\n          <p class='like-count like-counter${n.id}'>${n.likes}</p>\n        </div>\n      </div>\n\n    </div>\n\n   `;e.innerHTML=t,b.appendChild(e)}));const t=x("div");t.classList.add("pagination"),t.innerHTML='\n  <div class="pagnate-box">\n</div>\n  ',b.appendChild(t);const r=v(".comment-btn"),i=v(".like-btn");r.forEach(((e,t)=>{g(e,"click",(()=>{A(n[t])}))})),i.forEach((n=>{g(n,"click",(e=>{(async(n,e)=>{n.preventDefault();const t=h(`.like-counter${e}`),r=h(`#love${e}`);if(r.classList.contains("fa-solid"))r.classList.replace("fa-solid","fa-regular"),t.innerHTML=parseInt(t.textContent,10)-1;else if(r.classList.contains("like-before"))r.classList.replace("fa-regular","fa-solid"),t.innerHTML=parseInt(t.textContent,10)+1;else{const n=await(async n=>{try{return await fetch(`${T}/likes`,{method:"POST",body:JSON.stringify({item_id:n}),headers:{"Content-Type":"application/json"}})?{isSuccess:!0}:0}catch(n){return{isSuccess:!1}}})(Number(e));n&&(r.classList.replace("fa-regular","fa-solid"),r.classList.add("like-before"),t.innerHTML=parseInt(t.textContent,10)+1)}})(e,n.id)}))})),((n,e)=>{const t=h(".pagnate-box");for(let r=0;r<n;r+=r){const n=x("div");n.classList.add("pageBtn"),r+1===e&&n.classList.add("active"),n.innerHTML=`${r+1}`,t.appendChild(n)}})(n.length,e)},P=async n=>{b.innerHTML=null;const e=x("div");e.classList.add("loader"),e.innerHTML='\n  <div class="spinner">\n          <div></div>\n          <div></div>\n        </div>\n  ',b.appendChild(e);const t=await(async n=>{const e=[fetch(`https://api.tvmaze.com/shows?page=${n}`),fetch(`${T}/likes`)];return(await Promise.all(e).then((n=>{const e=n.map((n=>n.json()));return Promise.all(e)})).then((n=>n[0].map((e=>{const t=(n=>({id:n.id,name:n.name,summary:n.summary?n.summary:"No description",type:n.type?n.type:"No available",language:n.language?n.language:"No available",rating:n.rating?.average?n.rating:{average:"N/A"},officialSite:n.officialSite,image:n.image,genres:n.genres?n.genres:[]}))(e),r=n[1].find((n=>n.item_id===e.id));return{...t,likes:r?r.likes:0}}))))).slice(15,30)})(n);return t?(O(t,n),{loaded:!0}):0};g(document,"DOMContentLoaded",(async()=>{const n=await P(1);g(w,"click",(()=>{k.classList.toggle("active")})),L.forEach((n=>{g(n,"click",(()=>{k.classList.remove("active")}))})),n&&v(".pageBtn").forEach(((n,e)=>{g(n,"click",(()=>{P(e+1)}))}))}))})()})();