/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-176fe0b1'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/random/favicon.ico",
    "revision": "d93d92a8e09b83ae4bd4aee0ebf38893"
  }, {
    "url": "/random/fonts/Roboto-Regular.ac3f799d.ttf",
    "revision": "ac3f799d5bbaf5196fab15ab8de8431c"
  }, {
    "url": "/random/fonts/Roboto/Roboto-Regular.ttf",
    "revision": "ac3f799d5bbaf5196fab15ab8de8431c"
  }, {
    "url": "/random/img/animation_500_kya2eg3s.75aaad6d.gif",
    "revision": "75aaad6d36030bb1c3f6a2d9153505d2"
  }, {
    "url": "/random/img/icons/android-chrome-192x192.png",
    "revision": "26da24c72637d6127a7e6d9c4a0f9a5f"
  }, {
    "url": "/random/img/icons/android-chrome-512x512.png",
    "revision": "bca4680c9e6732bdbac82b325ca3b1f1"
  }, {
    "url": "/random/img/icons/android-chrome-maskable-192x192.png",
    "revision": "845a39478d0e2d4d5d32a092de2de250"
  }, {
    "url": "/random/img/icons/android-chrome-maskable-512x512.png",
    "revision": "2695f5feb66cdb0c6f09d0e415824cf9"
  }, {
    "url": "/random/img/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  }, {
    "url": "/random/img/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  }, {
    "url": "/random/img/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  }, {
    "url": "/random/img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  }, {
    "url": "/random/img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  }, {
    "url": "/random/img/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  }, {
    "url": "/random/img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  }, {
    "url": "/random/img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  }, {
    "url": "/random/img/icons/feedback.png",
    "revision": "b951843140217ded65c9ac5e33fc9c10"
  }, {
    "url": "/random/img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  }, {
    "url": "/random/img/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  }, {
    "url": "/random/img/icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  }, {
    "url": "/random/img/logo.3b17e764.png",
    "revision": "3b17e764acccc5b4689764647c285785"
  }, {
    "url": "/random/index.html",
    "revision": "0c9930bb47d010604e9d06414cbeefe4"
  }, {
    "url": "/random/js/app.js",
    "revision": "f012a716ced9476ec83bbbb7ba29dcd1"
  }, {
    "url": "/random/js/chunk-vendors.js",
    "revision": "63854a2806d3bbbb875ebd9a9fed8ac3"
  }, {
    "url": "/random/manifest.json",
    "revision": "e3062df0df6c9b9af40d3e284b1200c2"
  }], {});

}));
//# sourceMappingURL=service-worker.js.map
