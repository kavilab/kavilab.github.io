/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/random/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./src/views/Home/Home.ts?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-2!./src/views/Home/Home.ts?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _utils_env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/env */ \"./src/utils/env.ts\");\n// https://www.html5rocks.com/en/tutorials/webaudio/intro/\n// https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API\n\n\n\n\n\nvar CHAT_STATE = {\n  IDLE: 0,\n  THINK: 1,\n  REPLY: 2\n};\nvar APP_STATE = {\n  LOGIN: 0,\n  HOME: 1,\n  CHAT: 2\n};\nvar EMOTION = {\n  ANGER: 'anger',\n  JOY: 'joy',\n  CURIOUS: 'curious',\n  LOVE: 'love',\n  CAUTIOUS: 'cautious',\n  NONE: 'none'\n};\nvar SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\nvar recognition = new SpeechRecognition();\nrecognition.lang = 'en-US';\nrecognition.interimResults = true;\nrecognition.continuous = true;\nvar vueApp = null;\nvar lastEmotion = \"\";\nvar lastOutput = \"\";\nvar isPlayingAudio = false;\nvar poemEngineEndpoint = \"https://kavi2-d3ncqg2pmq-ue.a.run.app/poem?input=\"; //\"https://kavi2-d3ncqg2pmq-ue.a.run.app/poem?input=\"; //`${poemServerHost}/poem?v=1&input=`;\n\nvar feedbackFormURL = \"https://docs.google.com/forms/d/e/1FAIpQLSeBgO_tQwtkLPIeq47sy9jHdIxsvLVuLOfotd-XicQSO0-R5g/viewform\"; //\"https://docs.google.com/forms/d/e/1FAIpQLSezYp4QHYtZA4syn91lMoo-ebs9trsULG707bi3q8di2w-9nA/viewform\";\n//const formB_url = \"https://docs.google.com/forms/d/e/1FAIpQLSeBgO_tQwtkLPIeq47sy9jHdIxsvLVuLOfotd-XicQSO0-R5g/viewform\";\n\nvar blankAudioClip = \"data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\";\nvar final_transcript = \"\";\nvar interim_transcript = \"\";\nvar audioData;\nvar audioPlayer = new Audio();\naudioPlayer.autoplay = true;\naudioPlayer.addEventListener(\"ended\", function () {\n  if (isPreparingPlayer) {\n    isPreparingPlayer = false;\n    return;\n  }\n\n  audioPlayer.currentTime = 0;\n  vueApp.chatState = CHAT_STATE.IDLE;\n  vueApp.chatBackground = EMOTION.NONE;\n  isPlayingAudio = false;\n});\n\nrecognition.onstart = function () {\n  console.log(\"Speech Recognition Started\");\n  vueApp.errorMessage = \"\";\n};\n\nrecognition.onresult = function (event) {\n  interim_transcript = \"\";\n\n  for (var i = event.resultIndex; i < event.results.length; ++i) {\n    if (event.results[i].isFinal) {\n      final_transcript += event.results[i][0].transcript;\n    } else {\n      interim_transcript += event.results[i][0].transcript;\n    }\n  }\n\n  if (interim_transcript) {\n    vueApp.transcript = final_transcript + interim_transcript;\n  }\n};\n\nrecognition.onend = function () {\n  console.log(\"Speech Recognition Ended\");\n  console.log(final_transcript);\n\n  if (!final_transcript) {\n    return;\n  }\n\n  if (vueApp.listening) {\n    recognition.start();\n    return;\n  }\n\n  vueApp.chatState = CHAT_STATE.THINK;\n  sendUserInputToKaviEngine();\n  recognition.abort();\n};\n\nrecognition.onerror = function (e) {\n  console.log(\"Speech Recognition Error\");\n  vueApp.errorMessage = getDetailedErrorMessage(e.error);\n};\n\nfunction sendUserInputToKaviEngine() {\n  var config = {\n    headers: {\n      email: vueApp.email\n    }\n  };\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(poemEngineEndpoint + final_transcript, config).then(function (response) {\n    vueApp.chatState = CHAT_STATE.REPLY;\n    lastEmotion = response.data.emotion;\n    lastOutput = response.data.output;\n    audioData = response.data.voice;\n    playEmbeddedAudio();\n    vueApp.setBackgroundBasedOnEmotion(lastEmotion);\n  }).catch(function (e) {\n    vueApp.errorMessage = getDetailedErrorMessage(e.message);\n    console.error(e.message);\n  });\n}\n\nfunction activateAudioPlayer() {\n  console.log(\"activating audio player by asigning fake audio\");\n  isPreparingPlayer = true;\n  audioPlayer.src = blankAudioClip;\n}\n\nvar isPreparingPlayer = false;\n\nfunction playEmbeddedAudio() {\n  if (isPlayingAudio) {\n    return;\n  }\n\n  isPlayingAudio = true;\n  audioPlayer.src = audioData; // let clip = new Audio(audioData);\n  // clip.addEventListener(\"ended\", function(){\n  //   if(isPreparingPlayer){\n  //     isPreparingPlayer = false;\n  //     return;\n  //   }\n  //   clip.currentTime = 0;\n  //   vueApp.chatState = CHAT_STATE.IDLE;\n  //   vueApp.chatBackground = EMOTION.NONE;\n  //   isPlayingAudio = false;\n  // });\n  // clip.load();\n  // clip.play();\n}\n\nfunction resetTranscripts() {\n  console.warn(\"resetting\");\n  final_transcript = \"\";\n  interim_transcript = \"\";\n  vueApp.transcript = \"listening...\";\n}\n\nfunction getDetailedErrorMessage(shortMsg) {\n  switch (shortMsg) {\n    case \"network\":\n      return \"No network connectivity, connect to internet and try again. Swipe down to refresh\";\n\n    default:\n      return \"Service not responding at the movement, please refresh or try again later. Swipe down to refresh\";\n  }\n} // vue app\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].extend({\n  name: 'Home',\n  created: function created() {\n    vueApp = this;\n    console.log(Object({\"NODE_ENV\":\"random\",\"VUE_APP_POEM_ENGINE_ENDPOINT\":\"https://kavi2-d3ncqg2pmq-ue.a.run.app/poem?input=\",\"VUE_APP_FEEDBACK_FORM_URL\":\"https://docs.google.com/forms/d/e/1FAIpQLSeBgO_tQwtkLPIeq47sy9jHdIxsvLVuLOfotd-XicQSO0-R5g/viewform\",\"VUE_APP_PUBLIC_PATH\":\"/random/\",\"VUE_APP_VERSION\":\"0.1.2\",\"BASE_URL\":\"/random/\"}));\n  },\n  data: function data() {\n    return {\n      appState: APP_STATE.LOGIN,\n      APP_STATE: APP_STATE,\n      CHAT_STATE: CHAT_STATE,\n      chatState: CHAT_STATE.IDLE,\n      chatBackground: EMOTION.NONE,\n      listening: false,\n      transcript: \"listening...\",\n      errorMessage: \"\",\n      email: \"\"\n    };\n  },\n  methods: {\n    startRecognition: function startRecognition() {\n      this.listening = true;\n      resetTranscripts();\n      console.log(recognition);\n      recognition.start();\n      activateAudioPlayer();\n    },\n    stopRecognition: function stopRecognition() {\n      this.listening = false;\n      recognition.stop();\n    },\n    setBackgroundBasedOnEmotion: function setBackgroundBasedOnEmotion(emotion) {\n      console.log(emotion);\n      this.chatBackground = emotion;\n    },\n    openGoogleForm: function openGoogleForm() {\n      window.open(feedbackFormURL, '_blank');\n    },\n    getFeedbackImagePath: function getFeedbackImagePath() {\n      return \"\".concat(Object(_utils_env__WEBPACK_IMPORTED_MODULE_2__[\"getEnv\"])(\"VUE_APP_PUBLIC_PATH\"), \"img/icons/feedback.png\");\n    }\n  }\n}));\n\n//# sourceURL=webpack:///./src/views/Home/Home.ts?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-2");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_Home_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Home/index.vue */ \"./src/views/Home/index.vue\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  metaInfo: {\n    title: 'Kavi'\n  },\n  components: {\n    Home: _views_Home_index_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b741d2d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b741d2d6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { margin: \"0\" }, attrs: { id: \"app\" } },\n    [_c(\"Home\")],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22b741d2d6-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b741d2d6-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/views/Home/Home.html?vue&type=template&id=1d9b105c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b741d2d6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/views/Home/Home.html?vue&type=template&id=1d9b105c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"section\",\n    {\n      staticClass: \"home\",\n      class:\n        _vm.chatState == _vm.CHAT_STATE.THINK\n          ? \"color-loop\"\n          : _vm.chatBackground\n    },\n    [\n      _vm.appState == _vm.APP_STATE.LOGIN\n        ? _c(\"div\", { staticStyle: { height: \"100vh\" } }, [\n            _c(\"div\", { staticStyle: { height: \"30%\" } }),\n            _c(\"div\", { staticStyle: { height: \"30%\" } }, [\n              _c(\"span\", [_vm._v(\"Please enter your email address\")]),\n              _c(\"br\"),\n              _c(\"br\"),\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.email,\n                    expression: \"email\"\n                  }\n                ],\n                attrs: { type: \"text\", id: \"email\", name: \"email\" },\n                domProps: { value: _vm.email },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.email = $event.target.value\n                  }\n                }\n              }),\n              _c(\"br\"),\n              _c(\"br\")\n            ]),\n            _c(\"div\", { staticStyle: { height: \"20%\", padding: \"20px\" } }, [\n              _c(\n                \"button\",\n                {\n                  staticClass: \"start-button\",\n                  attrs: { disabled: !_vm.email },\n                  on: {\n                    click: function($event) {\n                      _vm.appState = _vm.APP_STATE.HOME\n                    }\n                  }\n                },\n                [_vm._v(\"Go\")]\n              )\n            ]),\n            _c(\"div\", { staticStyle: { height: \"10%\" } })\n          ])\n        : _vm._e(),\n      _vm.appState == _vm.APP_STATE.HOME\n        ? _c(\"div\", { staticStyle: { height: \"100vh\" } }, [\n            _c(\"div\", { staticStyle: { height: \"30%\" } }),\n            _vm._m(0),\n            _c(\"div\", { staticStyle: { height: \"20%\", padding: \"20px\" } }, [\n              _c(\n                \"button\",\n                {\n                  staticClass: \"start-button\",\n                  on: {\n                    click: function($event) {\n                      _vm.appState = _vm.APP_STATE.CHAT\n                    }\n                  }\n                },\n                [_vm._v(\"Start\")]\n              )\n            ]),\n            _c(\"div\", { staticStyle: { height: \"10%\" } })\n          ])\n        : _vm._e(),\n      _vm.appState == _vm.APP_STATE.CHAT\n        ? _c(\"div\", { staticStyle: { height: \"100vh\" } }, [\n            _vm.errorMessage\n              ? _c(\n                  \"div\",\n                  {\n                    staticStyle: { margin: \"20px\", float: \"left\", color: \"red\" }\n                  },\n                  [_vm._v(_vm._s(_vm.errorMessage))]\n                )\n              : _vm._e(),\n            _vm.chatState == _vm.CHAT_STATE.IDLE\n              ? _c(\"div\", { staticStyle: { height: \"100vh\" } }, [\n                  _c(\"div\", { staticStyle: { height: \"30%\" } }),\n                  !_vm.listening\n                    ? _c(\"div\", { staticStyle: { height: \"30%\" } }, [\n                        _c(\"img\", {\n                          staticStyle: { opacity: \"0.3\" },\n                          attrs: {\n                            width: \"100%\",\n                            height: \"80%\",\n                            src: __webpack_require__(/*! @/assets/animation_500_kya2eg3s.gif */ \"./src/assets/animation_500_kya2eg3s.gif\"),\n                            alt: \"\"\n                          }\n                        })\n                      ])\n                    : _vm._e(),\n                  _vm.listening\n                    ? _c(\n                        \"div\",\n                        { staticStyle: { height: \"30%\", \"font-size\": \"30px\" } },\n                        [_vm._v(\" \" + _vm._s(_vm.transcript) + \" \")]\n                      )\n                    : _vm._e(),\n                  _c(\"div\", { staticStyle: { height: \"20%\" } }, [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"record-button\",\n                        style: _vm.listening ? \"color: red\" : \"color: black\",\n                        on: {\n                          mousedown: function($event) {\n                            return _vm.startRecognition()\n                          },\n                          mouseup: function($event) {\n                            return _vm.stopRecognition()\n                          },\n                          touchstart: function($event) {\n                            return _vm.startRecognition()\n                          },\n                          touchend: function($event) {\n                            return _vm.stopRecognition()\n                          }\n                        }\n                      },\n                      [\n                        _c(\"i\", {\n                          staticClass: \"fa fa-microphone\",\n                          attrs: { \"aria-hidden\": \"true\" }\n                        })\n                      ]\n                    )\n                  ]),\n                  _c(\"div\", { staticStyle: { height: \"20%\" } }, [\n                    _c(\"img\", {\n                      staticStyle: { opacity: \"0.3\", cursor: \"pointer\" },\n                      attrs: {\n                        width: \"150\",\n                        height: \"100\",\n                        src: _vm.getFeedbackImagePath(),\n                        alt: \"\"\n                      },\n                      on: {\n                        click: function($event) {\n                          return _vm.openGoogleForm()\n                        }\n                      }\n                    })\n                  ])\n                ])\n              : _vm._e(),\n            _vm.chatState == _vm.CHAT_STATE.THINK\n              ? _c(\"div\", { staticStyle: { height: \"100vh\" } }, [\n                  _c(\"div\", { staticStyle: { height: \"35%\" } }),\n                  _vm._m(1),\n                  _c(\"div\", { staticStyle: { height: \"30%\" } })\n                ])\n              : _vm._e(),\n            _vm.chatState == _vm.CHAT_STATE.REPLY\n              ? _c(\"div\", { staticStyle: { height: \"100vh\" } }, [\n                  _c(\"div\", { staticStyle: { height: \"30%\" } }),\n                  _vm._m(2),\n                  _c(\"div\", { staticStyle: { height: \"20%\" } })\n                ])\n              : _vm._e()\n          ])\n        : _vm._e()\n    ]\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticStyle: { height: \"30%\" } }, [\n      _c(\"img\", {\n        attrs: {\n          width: \"auto\",\n          height: \"80%\",\n          src: __webpack_require__(/*! @/assets/logo.png */ \"./src/assets/logo.png\"),\n          alt: \"\"\n        }\n      }),\n      _c(\"h1\", [_vm._v(\"Kavi\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticStyle: { height: \"20%\", \"font-size\": \"30px\" } }, [\n      _c(\"h4\", { staticClass: \"thinking-text\" }, [_vm._v(\"Thinking...\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticStyle: { height: \"30%\" } }, [\n      _c(\"img\", {\n        staticStyle: { opacity: \"0.3\" },\n        attrs: {\n          width: \"100%\",\n          height: \"80%\",\n          src: __webpack_require__(/*! @/assets/animation_500_kya2eg3s.gif */ \"./src/assets/animation_500_kya2eg3s.gif\"),\n          alt: \"\"\n        }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/Home/Home.html?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22b741d2d6-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../public/fonts/Roboto/Roboto-Regular.ttf */ \"./public/fonts/Roboto/Roboto-Regular.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"\\n@font-face {\\n    font-family: \\\"Roboto\\\";\\n    src: local(\\\"Roboto\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n}\\n#app {\\n  font-family: \\\"Roboto\\\";\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n \\n  margin-top: 10px;\\n}\\nbutton{\\n  font-family: \\\"Roboto\\\";\\n  font-size: 16px;\\n}\\ninput{\\n  font-family: \\\"Roboto\\\";\\n}\\nselect{\\n  font-family: \\\"Roboto\\\";\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"h1[data-v-1d9b105c],\\nh2[data-v-1d9b105c],\\nh3[data-v-1d9b105c] {\\n    margin: 0;\\n    text-rendering: optimizeLegibility;\\n    text-align: center;\\n}\\nh1[data-v-1d9b105c] {\\n    font-weight: 400;\\n    font-size: 3em;\\n}\\nh2[data-v-1d9b105c] {\\n    font-weight: 300;\\n    margin-top: 0.5em;\\n}\\nh5[data-v-1d9b105c] {\\n    color: #39C2C9;\\n    margin: 0;\\n}\\nbutton[data-v-1d9b105c] {\\n    font-size: 20px;\\n    display: block;\\n    border: 0;\\n    padding: .7em 1em;\\n    margin: 4em auto 3em;\\n    margin-top: 0px;\\n    text-align: center;\\n    color: #fff;\\n    background: linear-gradient(180deg, #39C2C9 0%, #3FC8C9 80%, #3FC8C9 100%);\\n    will-change: transform, filter;\\n    transition: all 0.3s ease-out;\\n}\\n.start-button[data-v-1d9b105c] {\\n    width: 200px;\\n    height: 60px;\\n    border-radius: 10px;\\n}\\n.record-button[data-v-1d9b105c] {\\n    font-size: 50px;\\n    line-height: 56px;\\n    border-radius: 50%;\\n    /* margin: 0; */\\n    text-shadow: 1px 2px 2px #2a8b90;\\n}\\nbutton[data-v-1d9b105c]:hover {\\n    cursor: pointer;\\n    transform: scale(.98);\\n}\\nbutton[data-v-1d9b105c]:active {\\n    filter: brightness(.8);\\n}\\nbutton[data-v-1d9b105c]:disabled, button[disabled][data-v-1d9b105c] {\\n    cursor: default;\\n    background: grey;\\n}\\nbutton[data-v-1d9b105c]:focus {\\n    outline: 0;\\n}\\n.anger[data-v-1d9b105c] {\\n    background-color: brown;\\n}\\n.joy[data-v-1d9b105c] {\\n    background-color: orange;\\n}\\n.curious[data-v-1d9b105c] {\\n    background-color: green;\\n}\\n.love[data-v-1d9b105c] {\\n    background-color: pink;\\n}\\n.protect[data-v-1d9b105c] {\\n    background-color: pink;\\n}\\n.cautious[data-v-1d9b105c] {\\n    background-color: blueviolet;\\n}\\n.none[data-v-1d9b105c] {\\n    background-color: white;\\n}\\n.attack[data-v-1d9b105c] {\\n    background-color: red;\\n}\\n.color-loop[data-v-1d9b105c] {\\n    -webkit-animation: color-change-data-v-1d9b105c 3s infinite;\\n            animation: color-change-data-v-1d9b105c 3s infinite;\\n}\\n@-webkit-keyframes color-change-data-v-1d9b105c {\\n0% {\\n        background-color: brown;\\n}\\n16% {\\n        background-color: orange;\\n}\\n32% {\\n        background-color: green;\\n}\\n48% {\\n        background-color: pink;\\n}\\n64% {\\n        background-color: blueviolet;\\n}\\n80% {\\n        background-color: red;\\n}\\n100% {\\n        background-color: brown;\\n}\\n}\\n@keyframes color-change-data-v-1d9b105c {\\n0% {\\n        background-color: brown;\\n}\\n16% {\\n        background-color: orange;\\n}\\n32% {\\n        background-color: green;\\n}\\n48% {\\n        background-color: pink;\\n}\\n64% {\\n        background-color: blueviolet;\\n}\\n80% {\\n        background-color: red;\\n}\\n100% {\\n        background-color: brown;\\n}\\n}\\n.thinking-text[data-v-1d9b105c] {\\n    color: white;\\n}\\ninput[data-v-1d9b105c] {\\n    text-align: center ;\\n    outline: 1px solid #39C2C9;\\n    border: none;\\n    box-shadow: none;\\n    border-radius: 10px;\\n    height: 40px;\\n    width: 70%;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/views/Home/Home.css?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"fa1ef42a\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!./Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"8835043c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/views/Home/Home.css?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2");

/***/ }),

/***/ "./public/fonts/Roboto/Roboto-Regular.ttf":
/*!************************************************!*\
  !*** ./public/fonts/Roboto/Roboto-Regular.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fonts/Roboto-Regular.ac3f799d.ttf\";\n\n//# sourceURL=webpack:///./public/fonts/Roboto/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90_style_marging_3A0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90_style_marging_3A0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90_style_marging_3A0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0&":
/*!**********************************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b741d2d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_style_marging_3A0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b741d2d6-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"b741d2d6-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&style=marging%3A0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b741d2d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_style_marging_3A0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b741d2d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90_style_marging_3A0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/animation_500_kya2eg3s.gif":
/*!***********************************************!*\
  !*** ./src/assets/animation_500_kya2eg3s.gif ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/animation_500_kya2eg3s.75aaad6d.gif\";\n\n//# sourceURL=webpack:///./src/assets/animation_500_kya2eg3s.gif?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.3b17e764.png\";\n\n//# sourceURL=webpack:///./src/assets/logo.png?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ \"./node_modules/core-js/modules/es.promise.finally.js\");\n/* harmony import */ var _Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Volumes_Data_Projects_kavi_pwa_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\n\n\n\n\n\nvar wb = __webpack_require__(/*! ./registerServiceWorker */ \"./src/registerServiceWorker.js\");\n\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].prototype.$workbox = wb;\nvue__WEBPACK_IMPORTED_MODULE_4__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n  render: function render(h) {\n    return h(_App_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  }\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/registerServiceWorker.js":
/*!**************************************!*\
  !*** ./src/registerServiceWorker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ \"./node_modules/workbox-window/build/workbox-window.prod.es5.mjs\");\n\nvar wb;\n\nif (\"serviceWorker\" in navigator) {\n  wb = new workbox_window__WEBPACK_IMPORTED_MODULE_0__[\"Workbox\"](\"\".concat(\"/random/\", \"service-worker.js\"));\n  var registration;\n  wb.addEventListener('activated', function (event) {\n    // `event.isUpdate` will be true if another version of the service\n    // worker was controlling the page when this version was registered.\n    if (!event.isUpdate) {\n      console.log('Service worker activated for the first time!'); // If your service worker is configured to precache assets, those\n      // assets should all be available now.\n    }\n  });\n  wb.addEventListener('waiting', function (event) {\n    console.log(\"waiting\");\n    wb.messageSkipWaiting();\n  });\n  wb.addEventListener(\"controlling\", function () {\n    console.log(\"controlling\");\n    window.location.reload();\n  });\n  wb.addEventListener(\"installed\", function (event) {\n    console.log(\"SW installed\");\n  });\n  wb.addEventListener('message', function (event) {\n    if (event.data.type === 'CACHE_UPDATED') {\n      var updatedURL = event.data.payload.updatedURL;\n      console.log(\"A newer version of \".concat(updatedURL, \" is available!\"));\n    }\n  });\n  registration = wb.register();\n} else {\n  wb = null;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (wb);\n\n//# sourceURL=webpack:///./src/registerServiceWorker.js?");

/***/ }),

/***/ "./src/utils/env.ts":
/*!**************************!*\
  !*** ./src/utils/env.ts ***!
  \**************************/
/*! exports provided: getEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEnv\", function() { return getEnv; });\nvar getEnv = function getEnv(name) {\n  var _window, _window$configs;\n\n  return ((_window = window) === null || _window === void 0 ? void 0 : (_window$configs = _window.configs) === null || _window$configs === void 0 ? void 0 : _window$configs[name]) || Object({\"NODE_ENV\":\"random\",\"VUE_APP_POEM_ENGINE_ENDPOINT\":\"https://kavi2-d3ncqg2pmq-ue.a.run.app/poem?input=\",\"VUE_APP_FEEDBACK_FORM_URL\":\"https://docs.google.com/forms/d/e/1FAIpQLSeBgO_tQwtkLPIeq47sy9jHdIxsvLVuLOfotd-XicQSO0-R5g/viewform\",\"VUE_APP_PUBLIC_PATH\":\"/random/\",\"VUE_APP_VERSION\":\"0.1.2\",\"BASE_URL\":\"/random/\"})[name];\n};\n\n//# sourceURL=webpack:///./src/utils/env.ts?");

/***/ }),

/***/ "./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Home_css_vue_type_style_index_0_id_1d9b105c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!./Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Home_css_vue_type_style_index_0_id_1d9b105c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Home_css_vue_type_style_index_0_id_1d9b105c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Home_css_vue_type_style_index_0_id_1d9b105c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_Home_css_vue_type_style_index_0_id_1d9b105c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/views/Home/Home.css?");

/***/ }),

/***/ "./src/views/Home/Home.html?vue&type=template&id=1d9b105c&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/Home/Home.html?vue&type=template&id=1d9b105c&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b741d2d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Home_html_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b741d2d6-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./Home.html?vue&type=template&id=1d9b105c&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"b741d2d6-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/views/Home/Home.html?vue&type=template&id=1d9b105c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b741d2d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Home_html_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b741d2d6_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Home_html_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/Home/Home.html?");

/***/ }),

/***/ "./src/views/Home/Home.ts?vue&type=script&lang=ts&":
/*!*********************************************************!*\
  !*** ./src/views/Home/Home.ts?vue&type=script&lang=ts& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_13_2_Home_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-2!./Home.ts?vue&type=script&lang=ts& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./src/views/Home/Home.ts?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_13_2_Home_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/Home/Home.ts?");

/***/ }),

/***/ "./src/views/Home/index.vue":
/*!**********************************!*\
  !*** ./src/views/Home/index.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home_html_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.html?vue&type=template&id=1d9b105c&scoped=true& */ \"./src/views/Home/Home.html?vue&type=template&id=1d9b105c&scoped=true&\");\n/* harmony import */ var _Home_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.ts?vue&type=script&lang=ts& */ \"./src/views/Home/Home.ts?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Home_css_vue_type_style_index_0_id_1d9b105c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css& */ \"./src/views/Home/Home.css?vue&type=style&index=0&id=1d9b105c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Home_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Home_html_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Home_html_vue_type_template_id_1d9b105c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1d9b105c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/Home/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/Home/index.vue?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?");

/***/ })

/******/ });