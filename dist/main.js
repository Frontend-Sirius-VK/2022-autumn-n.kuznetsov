(()=>{"use strict";var e={699:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(213),i=t.n(r),a=t(645),c=t.n(a)()(i());c.push([e.id,":root {\n    --loader-flat-background: #ef1144;\n    --description-color: white;\n    --description-text-color: black;\n    --header-style-color: rgb(0, 0, 0);\n    --links-color: rgb(0, 0, 0);\n    --link-hover-color: rgb(175, 33, 43);\n    --card-background: rgb(228, 37, 37);\n}\n",""]);const o=c},487:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(213),i=t.n(r),a=t(645),c=t.n(a)()(i());c.push([e.id,".descriptionEda_style {\n    position: relative;\n    margin: 2px 0px;\n    flex-grow: 0;\n    flex-shrink: 1;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    text-align: center;\n    -moz-box-pack: center;\n    justify-content: center;\n}\n\n.description {\n    width: 1000px;\n    margin-left: auto;\n    margin-right: auto;\n    background-color: var(--description-color);\n    padding: 60px 30px 0px;\n    margin-top: 70px;\n}\n\n@media (max-width: 1000px) {\n.descriptionEda_style {\n  width: 100%;\n}\n}\n\n.description_heading {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin: 0px 40px 40px;\n    font-family: Roboto, sans-serif;\n    font-weight: 900;\n    font-size: 40px;\n    line-height: 1.2;\n}\n\n.descriptionEda_text {\n    color: var(--description-text-color);\n    align-items: center;\n    display: inline-flex;\n    justify-content: center;\n    position: relative;\n    width: 620px;\n    margin: 0px auto 90px;\n    text-align: center;\n    font: 15px / 36px PT Serif, Georgia, serif;\n}\n\n",""]);const o=c},219:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(213),i=t.n(r),a=t(645),c=t.n(a)()(i());c.push([e.id,".header_style {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0px 10px 0px 0px;\n    font-size: 10px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: 700;\n    white-space: nowrap;\n    color: var(--header-style-color);\n    cursor: pointer;\n}\n\n@media (max-width: 1000px) {\nheader {\n    justify-content: center;\n}\n}\n\na, img {\n    text-decoration: none;\n    outline: none;\n  }\n\n\n.links {\n    display: flex;\n    -moz-box-align: center;\n    align-items: center;\n    -moz-box-pack: center;\n    justify-content: center;\n    padding: 0px 10px 0px 0px;\n    font-size: 10px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: 700;\n    white-space: nowrap;\n    color: var(--links-color);\n    cursor: pointer;\n\n}\n\n.links:hover {\n\n    color: var(--link-hover-color);\n}\n\n@media (max-width: 1000px){\n\n.links:hover {\n    \n    padding: 0px 5px 0px 0px;\n}\n}\n\nimg {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 60px;\n    height: 60px;\n}\n",""]);const o=c},253:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(213),i=t.n(r),a=t(645),c=t.n(a)()(i());c.push([e.id,".recipeCard {\n  background-color: rgb(245, 213, 177);\n  padding: 30px;\n  position: relative;\n  box-shadow: 0 0 5px rgb(75 75 75 / 7%);\n  z-index: 1;\n  margin-bottom: 10px;\n  \n}\n\n\n.сard {\n  margin: 25px auto 0;\n  position: relative;\n  width: 692px;\n}\n\n\n.recipe-card-image {\n  float: right;\n  margin: 4px 10px 2px 0px; \n  width: 160px;\n  height: 160px;\n}\n\n.recipe-card-name {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 60px;\n  font-weight: 300;\n  line-height: 60px;\n  margin: 10px 0;\n}\n\n.recipe-card-category {\n  border: 1px solid #aaa;\n  border-radius: 50%;\n  display: inline-block;\n  line-height: 22px;\n  font-size: 12px;\n  height: 25px;\n  text-align: center;\n  width: 25px;\n}\n\n.recipe-card-time {\n    border: 1px solid #aaa;\n    border-radius: 50%;\n    display: inline-block;\n    line-height: 22px;\n    font-size: 12px;\n    height: 25px;\n    text-align: center;\n    width: 25px;\n}\n\n.recipe-card-description {\n  display: inline-block;\n    font-weight: 300;\n    line-height: 22px;\n    margin: 10px 0;\n}\n\n.recipe-card-author {\n  display: block;\n  font-size: 12px;\n  letter-spacing: .5px;\n  margin: 15px 0 0;\n  text-transform: uppercase;\n}\n",""]);const o=c},853:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(213),i=t.n(r),a=t(645),c=t.n(a),o=t(219),s=t(487),d=t(253),p=t(699),l=c()(i());l.i(o.Z),l.i(s.Z),l.i(d.Z),l.i(p.Z),l.push([e.id,"* {\n  box-sizing: border-box;\n}\n\n\n\nbody {\n    font-family: 'Roboto',sans-serif;\n    color: #000;\n    line-height: 1;\n  }\n\n  body * {\n    max-height: 1000000em;\n    -moz-text-size-adjust: none;\n  }\n\n.page-container {\n    display: flex;\n    flex-direction: column;\n\n}\n\n.container-error-status {\n  font-size: 30px;\n  font-weight: 900;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n}\n\n.container-error-text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.error-container {\n  margin-top: 300px;\n}\n",""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),n.push(p))}},n}},213:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],o=0;o<e.length;o++){var s=e[o],d=r.base?s[0]+r.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var m=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)n[m].references++,n[m].updater(h);else{var u=i(h,r);r.byIndex=o,n.splice(o,0,{identifier:l,updater:u,references:1})}c.push(l)}return c}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var o=t(a[c]);n[o].references--}for(var s=r(e,i),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/",t.nc=void 0,(()=>{class e{constructor(e){this.parent=e}render(e){const n=document.createElement("div");n.classList.add("description");const t=document.createElement("div");t.classList.add("descriptionEda_style");const r=document.createElement("h1");r.classList.add("description_heading"),r.innerHTML+="Рецепты";const i=document.createElement("p");i.classList.add("descriptionEda_text"),i.innerHTML+="Ищите рецепты, выбирая категорию блюда, его подкатегорию, кухню или меню. А в дополнительных фильтрах можно искать по нужному (или ненужному) ингредиенту: просто начните писать его название и сайт подберет соответствующий.",t.append(r,i),n.appendChild(t),this.parent.appendChild(n)}}const n=t.p+"9950684ffd7a88fcfdee.jpg";class r{constructor(e){this.parent=e}render(e){const t=document.createElement("header");t.classList.add("header");const r=document.createElement("div");r.classList.add("header_style");const i=document.createElement("img");i.src=n;const a=document.createElement("div"),c=document.createElement("a");c.classList.add("links"),c.href="#",c.innerHTML+="Рецепты",a.append(c);const o=document.createElement("div"),s=document.createElement("a");s.classList.add("links"),s.href="#",s.innerHTML+="Журнал",o.append(s);const d=document.createElement("div"),p=document.createElement("a");p.classList.add("links"),p.href="#",p.innerHTML+="Идеи",d.append(p);const l=document.createElement("div"),m=document.createElement("a");m.classList.add("links"),m.href="#",m.innerHTML+="Авторы",l.append(m);const h=document.createElement("div"),u=document.createElement("a");u.classList.add("links"),u.href="#",u.innerHTML+="Войти",h.append(u),r.append(i,a,o,d,l,h),t.append(r),e.append(t)}}const i=new class{listeners={};on(e,n){this.listeners[e]||(this.listeners[e]=new Set),this.listeners[e].add(n)}off(e,n){if(!this.listeners[e])return;const t=this.listeners[listeners].filter((e=>e!==n));this.listeners[e]=t}emit(e,n){this.listeners[e]&&this.listeners[e].forEach((e=>{e(n)}))}};class a{constructor(e){this.parent=e,this.container=null}render(e){const{id:n,url_image:t,name_recipe:r,category_recipe:i,time:a,description_recipe:c,author:o}=e;this.container=document.createElement("div"),this.container.classList.add("recipeCard");const s=document.createElement("div");s.classList.add("card");const d=document.createElement("div");d.classList.add("card-body");const p=document.createElement("div");p.textContent=o,d.append(p),p.classList.add("recipe-card-author");const l=document.createElement("div");l.classList.add("imageContainer");const m=document.createElement("img");m.src=t,l.append(m),s.appendChild(l),m.classList.add("recipe-card-image");const h=document.createElement("a");h.textContent=r,h.href=`/recipe/${n}`,d.append(h),h.classList.add("recipe-card-name");const u=document.createElement("div");u.textContent=`${a} min`,d.append(u),u.classList.add("recipe-card-time");const f=document.createElement("div");f.textContent=c,f.classList.add("recipe-card-description"),d.append(f),s.append(d),this.container.append(s),this.parent.append(this.container)}}class c{constructor(e){this.parent=e}render(){const e=document.createElement("div");e.className="loaderPage";const n=document.createElement("div");n.className="loader-container";const t=document.createElement("div");t.className="figure",n.append(t),e.append(n);const r=document.createElement("div");r.className="loader flat-01";const i=document.createElement("div");i.className="loader-container";const a=document.createElement("div");a.className="cube";const c=document.createElement("div");c.className="cube";const o=document.createElement("div");o.className="cube";const s=document.createElement("div");s.className="cube";const d=document.createElement("div");d.className="cube";const p=document.createElement("div");p.className="cube";const l=document.createElement("div");l.className="cube";const m=document.createElement("div");m.className="cube";const h=document.createElement("div");h.className="cube";const u=document.createElement("div");u.className="cube",i.append(a,c,o,s,d,p,l,m,h,u),r.append(i),this.parent.append(e,r)}}class o{constructor(e){const n=document.createElement("div");this.parent=e,this.container=n,i.on("recipe:loading",this.render.bind(this))}render(e){if(!e)return this.container.innerHTML="",new c(this.container).render(),void this.parent.prepend(this.container);this.container=document.createElement("div"),e.forEach((e=>{new a(this.container).render(e)})),this.parent.append(this.container)}update(e){this.container&&(this.container.innerHTML=""),this.render(e)}}class s{constructor(){this.header=null,this.recipeCard=null,this.description=null,this.container=null,this.root=document.querySelector("#root"),i.on("recipe-card:got-data",this.update.bind(this)),i.on("recipe-card:not-found",this.errorUpdate.bind(this)),i.on("recipe-card:bad-request",this.errorUpdate.bind(this)),i.on("recipe-card:server-error",this.errorUpdate.bind(this))}render(){this.container=document.createElement("div");const n=document.createElement("header");n.classList.add("header"),this.header=new r(n);const t=document.createElement("description");t.classList.add("description"),this.description=new e(t);const i=document.createElement("div");i.classList.add("recipe"),this.recipeCard=new o(i),this.container.append(n,t,i),this.root.append(this.container),this.header.render(n),this.description.render(t)}update(e={}){e&&Array.isArray(e)&&0!==e.length&&this.recipeCard.update(e)}renderError(e){this.container.innerHTML="";const n=document.createElement("div");n.classList.add("header"),this.header=new r(n);const t=document.createElement("div");t.classList.add("error-container");const i=document.createElement("p");i.classList.add("container-error-status"),i.textContent=e[0];const a=document.createElement("p");a.classList.add("container-error-text"),a.textContent=e[1],t.append(i,a),this.container.append(n,t),this.root.append(this.container),this.header.render(n)}errorUpdate(e){this.recipeCard&&(this.recipeCard.innerHTML=""),this.renderError(e)}}class d{constructor(){this.recipe=null}fetchData(){fetch("/api/recipe").then((e=>{const{status:n}=e;if(404!==n)if(400!==n){if(500!==n)return e.json();i.emit("recipe-card:server-error",{title:"Ошибка 500",description:"Ошибка обращения к сервису. Попробуйте обновить страницу."})}else i.emit("recipe-card:bad-request",{title:"Ошибка 400",description:"Вы ввели некорректный запрос, проверьте данные."});else i.emit("recipe-card:not-found",{title:"Ошибка 404",description:"Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес."})})).then((e=>{this.recipe=e,i.emit("recipe-card:got-data",e)}))}}class p{async process(){(new s).render();const e=new d;i.emit("recipe:loading"),e.fetchData()}}class l{constructor(e){const n=document.createElement("div");this.parent=e,this.container=n,i.on("recipe-page:loading",this.render.bind(this))}render(e){if(!e)return this.container.innerHTML="",new c(this.container).render(),void this.parent.prepend(this.container);const{id:n,url_image:t,name_recipe:r,category_recipe:i,time:a,description_recipe:o,author:s}=e;this.container=document.createElement("div"),this.container.classList.add("card-page");const d=document.createElement("div");d.classList.add("card-title");const p=document.createElement("a");p.classList.add("card-title-recipe"),p.textContent=r,d.append(p);const l=document.createElement("div");l.classList.add("card-author");const m=document.createElement("div");m.classList.add("card-author-recipe"),m.textContent=s,l.append(m);const h=document.createElement("div");h.classList.add("card-image");const u=document.createElement("img");u.classList.add("card-image-content"),u.src=t,h.append(u);const f=document.createElement("div");f.classList.add("card-description");const g=document.createElement("a");g.classList.add("card-description-recipe"),g.textContent=o,f.append(g);const x=document.createElement("div");x.classList.add("card-categoty");const v=document.createElement("div");v.classList.add("card-categoty-recipe"),v.textContent=i,x.append(v),this.container.append(d,l,h,f,x),this.parent.append(this.container)}update(e){this.container&&(this.container.innerHTML=""),this.render(e)}}class m{constructor(){this.containerPage=null,this.header=null,this.recipePage=null,this.root=document.querySelector("#root"),i.on("recipe-page-card:got-data",this.update.bind(this)),i.on("recipe-page-card:not-found",this.renderError.bind(this)),i.on("recipe-page-card:bad-request",this.renderError.bind(this)),i.on("recipe-page-card:server-error",this.renderError.bind(this))}render(){this.root.innerHTML="",this.containerPage=document.createElement("div");const e=document.createElement("div");e.classList.add("header"),this.header=new r(e);const n=document.createElement("div");this.recipePage=new l(n),this.containerPage.append(e,n),this.root.append(this.containerPage),this.recipePage.render(n),this.header.render(e)}update(e={}){e&&this.recipePage.update(e)}renderError(e){this.containerPage&&(this.containerPage.innerHTML=""),this.container=document.createElement("div");const n=document.createElement("div");n.classList.add("header"),this.header=new r(n);const t=document.createElement("div");t.classList.add("error-container");const i=document.createElement("p");i.classList.add("container-error-status"),i.textContent=e.title;const a=document.createElement("p");a.classList.add("container-error-text"),a.textContent=e.description,t.append(i,a),this.container.append(n,t),this.root.append(this.container),this.header.render(n)}}class h{constructor(){this.recipe=null}fetchData(e){fetch(`/api/recipe/${e}`).then((e=>{const{status:n}=e;if(404!==n)if(400!==n){if(500!==n)return e.json();i.emit("recipe-page-card:server-error",{title:"Ошибка 500",description:"Ошибка обращения к сервису. Попробуйте обновить страницу."})}else i.emit("recipe-page-card:bad-request",{title:"Ошибка 400",description:"Вы ввели некорректный запрос, проверьте данные."});else i.emit("recipe-page-card:not-found",{title:"Ошибка 404",description:"Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес."})})).then((e=>{this.recipe=e,i.emit("recipe-page-card:got-data",e)}))}}const u=[{path:"^/$",controller:p},{path:"^/recipe/(\\w+)",controller:class{process(e){(new m).render();const n=new h;i.emit("recipe-page:loading"),n.fetchData(e)}}}],f=new class{constructor(){i.off("recipe-page:loading"),i.off("recipe:loading"),i.off("recipe-card:got-data"),i.off("recipe-card:not-found"),i.off("recipe-card:bad-request"),i.off("recipe-card:server-error"),i.off("recipe-page-card:got-data"),i.off("recipe-page-card:not-found"),i.off("recipe-page-card:bad-request"),i.off("recipe-page-card:server-error"),this.onDocumentClick=this.onDocumentClick.bind(this)}onDocumentClick(e){const{target:n}=e,{tagName:t}=n;"A"===t&&(e.preventDefault(),void 0!==n.href&&this.go(n.href))}getID(){const e=window.location.pathname.split("/");let n;return void 0!==e[1]&&(n=e[2]),n}go(e){window.history.pushState({},"",e),this.invokeController()}invokeController(){const e=this.getID(),n=new p,{pathname:t}=window.location,r=u.find((e=>{const n=new RegExp(e.path),r=t.match(n);return Boolean(r)}));r||console.log("404");const i=new(0,r.controller);r.controller!==n?i.process(e):i.process()}start(){document.addEventListener("click",this.onDocumentClick),this.invokeController()}stop(){document.removeEventListener("click",this.onDocumentClick)}};var g=t(379),x=t.n(g),v=t(795),E=t.n(v),b=t(569),y=t.n(b),L=t(565),w=t.n(L),C=t(216),k=t.n(C),T=t(589),M=t.n(T),N=t(853),_={};_.styleTagTransform=M(),_.setAttributes=w(),_.insert=y().bind(null,"head"),_.domAPI=E(),_.insertStyleElement=k(),x()(N.Z,_),N.Z&&N.Z.locals&&N.Z.locals,f.start()})()})();