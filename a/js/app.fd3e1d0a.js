(function(t){function e(e){for(var i,a,c=e[0],s=e[1],l=e[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},o={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"616f":function(t,e,n){"use strict";n("9407")},"737a":function(t,e,n){t.exports=n.p+"img/animation_500_kya2eg3s.75aaad6d.gif"},"85ec":function(t,e,n){},9407:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"0"},attrs:{id:"app"}},[n("Home")],1)},r=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"home",class:t.chatbackground},[t.isChatting?t._e():i("div",{staticStyle:{height:"100vh"}},[i("div",{staticStyle:{height:"30%"}}),t._m(0),i("div",{staticStyle:{height:"20%",padding:"20px"}},[i("button",{staticClass:"start-button",on:{click:function(e){t.isChatting=!0}}},[t._v("Start")])]),i("div",{staticStyle:{height:"10%"}})]),t.isChatting?i("div",{staticStyle:{height:"100vh"}},[t.errorMessage?i("div",{staticStyle:{margin:"20px"}},[t._v(t._s(t.errorMessage))]):t._e(),t.chatState==t.CHAT_STATE.IDLE?i("div",{staticStyle:{height:"100vh"}},[i("div",{staticStyle:{height:"30%"}}),t.listening?t._e():i("div",{staticStyle:{height:"30%"}},[i("img",{staticStyle:{opacity:"0.3"},attrs:{width:"100%",height:"80%",src:n("737a"),alt:""}})]),t.listening?i("div",{staticStyle:{height:"30%","font-size":"30px"}},[t._v(" "+t._s(t.transcript)+" ")]):t._e(),i("div",{staticStyle:{height:"30%"}},[i("button",{staticClass:"record-button",style:t.listening?"color: red":"color: black",on:{mousedown:function(e){return t.startRecognition()},mouseup:function(e){return t.stopRecognition()},touchstart:function(e){return t.startRecognition()},touchend:function(e){return t.stopRecognition()}}},[i("i",{staticClass:"fa fa-microphone",attrs:{"aria-hidden":"true"}})])]),i("div",{staticStyle:{height:"10%"}})]):t._e(),t.chatState==t.CHAT_STATE.THINK?i("div",{staticStyle:{height:"100vh"}},[i("div",{staticStyle:{height:"30%"}}),i("div",{staticStyle:{height:"30%","font-size":"30px"}},[t._v(" Thinking... ")]),i("div",{staticStyle:{height:"20%"}})]):t._e(),t.chatState==t.CHAT_STATE.REPLY?i("div",{staticStyle:{height:"100vh"}},[i("div",{staticStyle:{height:"30%"}}),t._m(1),i("div",{staticStyle:{height:"20%"}})]):t._e()]):t._e()])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"30%"}},[i("img",{attrs:{width:"auto",height:"80%",src:n("cf05"),alt:""}}),i("h1",[t._v("Kavi")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"30%"}},[i("img",{staticStyle:{opacity:"0.3"},attrs:{width:"100%",height:"80%",src:n("737a"),alt:""}})])}],s=n("bc3a"),l=n.n(s),u={IDLE:0,THINK:1,REPLY:2},d={ANGER:"anger",JOY:"joy",CURIOUS:"curious",LOVE:"love",CAUTIOUS:"cautious",NONE:"none"},h=window.SpeechRecognition||window.webkitSpeechRecognition,g=new h;g.lang="en-US",g.interimResults=!0,g.continuous=!0;var f=null,p="",v="https://poem.elliottwen.info/poem?v=1&input=",S="https://poem.elliottwen.info/voice?v=1&vid=",y="",m="";g.onstart=function(){console.log("Speech Recognition Started"),f.errorMessage=""},g.onerror=function(t){console.log("Speech Recognition Error"),f.errorMessage=t.error},g.onend=function(){console.log("Speech Recognition Ended"),console.log(y),y&&(f.listening?g.start():(f.chatState=u.THINK,l.a.get(v+y).then((function(t){console.log(t.data.output),f.chatState=u.REPLY,p=t.data.emotion,t.data.output;var e=S+t.data.vid;E(e),f.setBackgroundBasedOnEmotion(p)})).catch((function(t){console.error(t.message)})),g.abort()))},g.onresult=function(t){m="";for(var e=t.resultIndex;e<t.results.length;++e)t.results[e].isFinal?y+=t.results[e][0].transcript:m+=t.results[e][0].transcript;m&&(f.transcript=y+m)};var b=null,w=window.AudioContext||window.webkitAudioContext,_=new w;function E(t){var e=new XMLHttpRequest;e.open("GET",t,!0),e.responseType="arraybuffer",e.onload=function(){_.decodeAudioData(e.response,(function(t){b=t,O(b)}),(function(){console.error("decode fails")}))},e.send()}var T=!1;function O(t){if(!T){T=!0;var e=_.createBufferSource();e.buffer=t,e.connect(_.destination),e.start(0),e.onended=function(){f.chatState=u.IDLE,f.chatbackground=d.NONE,console.log("audio playback ended"),T=!1}}}function k(){console.warn("resetting"),y="",m="",f.transcript="listening..."}var x=i["a"].extend({name:"Home",created:function(){f=this},data:function(){return{isChatting:!1,CHAT_STATE:u,chatState:u.IDLE,chatbackground:d.NONE,listening:!1,transcript:"listening...",errorMessage:""}},methods:{startRecognition:function(){this.listening=!0,k(),console.log(g),g.start()},stopRecognition:function(){this.listening=!1,g.stop()},setBackgroundBasedOnEmotion:function(t){console.log(t),this.chatbackground=t}}}),R=x,C=(n("616f"),n("2877")),A=Object(C["a"])(R,a,c,!1,null,"5785655d",null),L=A.exports,j={name:"App",metaInfo:{title:"Kavi"},components:{Home:L}},H=j,I=(n("034f"),Object(C["a"])(H,o,r,!1,null,null,null)),P=I.exports,M=n("ddb8");i["a"].prototype.$workbox=M,i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(P)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.3b17e764.png"},ddb8:function(t,e,n){"use strict";n.r(e);var i,o=n("acfa");"serviceWorker"in navigator?(i=new o["a"]("".concat("/","service-worker.js")),i.addEventListener("activated",(function(t){t.isUpdate||console.log("Service worker activated for the first time!")})),i.addEventListener("waiting",(function(t){console.log("waiting"),i.messageSkipWaiting()})),i.addEventListener("controlling",(function(){console.log("controlling"),window.location.reload()})),i.addEventListener("installed",(function(t){console.log("SW installed")})),i.addEventListener("message",(function(t){if("CACHE_UPDATED"===t.data.type){var e=t.data.payload.updatedURL;console.log("A newer version of ".concat(e," is available!"))}})),i.register()):i=null;e["default"]=i}});
//# sourceMappingURL=app.fd3e1d0a.js.map