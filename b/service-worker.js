if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise((async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},i=(i,n)=>{Promise.all(i.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(i)};self.define=(i,o,r)=>{n[i]||(n[i]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+i.slice(1)};return Promise.all(o.map((i=>{switch(i){case"exports":return n;case"module":return a;default:return e(i)}}))).then((e=>{const i=r(...e);return n.default||(n.default=i),n}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/b/css/app.dac93fee.css",revision:null},{url:"/b/favicon.ico",revision:"d93d92a8e09b83ae4bd4aee0ebf38893"},{url:"/b/fonts/Roboto-Regular.ac3f799d.ttf",revision:"ac3f799d5bbaf5196fab15ab8de8431c"},{url:"/b/fonts/Roboto/Roboto-Regular.ttf",revision:"ac3f799d5bbaf5196fab15ab8de8431c"},{url:"/b/img/animation_500_kya2eg3s.75aaad6d.gif",revision:"75aaad6d36030bb1c3f6a2d9153505d2"},{url:"/b/img/icons/android-chrome-192x192.png",revision:"26da24c72637d6127a7e6d9c4a0f9a5f"},{url:"/b/img/icons/android-chrome-512x512.png",revision:"bca4680c9e6732bdbac82b325ca3b1f1"},{url:"/b/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/b/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/b/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/b/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/b/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/b/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/b/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/b/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/b/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/b/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/b/img/icons/feedback.png",revision:"b951843140217ded65c9ac5e33fc9c10"},{url:"/b/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/b/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/b/img/icons/safari-pinned-tab.svg",revision:"f78c0251d6ddd56ee219a1830ded71b4"},{url:"/b/img/logo.3b17e764.png",revision:"3b17e764acccc5b4689764647c285785"},{url:"/b/index.html",revision:"88bb61411c70e4e7cdb503e56a430104"},{url:"/b/js/app.dd40fd30.js",revision:null},{url:"/b/js/chunk-vendors.6ab9b7a4.js",revision:null},{url:"/b/manifest.json",revision:"44f1497615c9fcdc87585965da1dd14f"}],{})}));
//# sourceMappingURL=service-worker.js.map
