if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,n,o)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(n.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=o(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/a/css/app.3fcd5615.css",revision:null},{url:"/a/favicon.ico",revision:"d93d92a8e09b83ae4bd4aee0ebf38893"},{url:"/a/fonts/Roboto-Regular.ac3f799d.ttf",revision:"ac3f799d5bbaf5196fab15ab8de8431c"},{url:"/a/fonts/Roboto/Roboto-Regular.ttf",revision:"ac3f799d5bbaf5196fab15ab8de8431c"},{url:"/a/img/animation_500_kya2eg3s.75aaad6d.gif",revision:"75aaad6d36030bb1c3f6a2d9153505d2"},{url:"/a/img/icons/android-chrome-192x192.png",revision:"26da24c72637d6127a7e6d9c4a0f9a5f"},{url:"/a/img/icons/android-chrome-512x512.png",revision:"bca4680c9e6732bdbac82b325ca3b1f1"},{url:"/a/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/a/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/a/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/a/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/a/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/a/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/a/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/a/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/a/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/a/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/a/img/icons/feedback.png",revision:"b951843140217ded65c9ac5e33fc9c10"},{url:"/a/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/a/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/a/img/icons/safari-pinned-tab.svg",revision:"f78c0251d6ddd56ee219a1830ded71b4"},{url:"/a/img/logo.3b17e764.png",revision:"3b17e764acccc5b4689764647c285785"},{url:"/a/index.html",revision:"b0bae13526de1bf6f481eac1ad248ea6"},{url:"/a/js/app.f0974cc2.js",revision:null},{url:"/a/js/chunk-vendors.6ab9b7a4.js",revision:null},{url:"/a/manifest.json",revision:"bce137ba9fb0f3149cbf570669690267"}],{})}));
//# sourceMappingURL=service-worker.js.map
