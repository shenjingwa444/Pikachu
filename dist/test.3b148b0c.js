// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var string = "\n.skin *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n .skin *::after,\n  before {\n    box-sizing: border-box;\n  }\n.skin {\n    height: 50vh;\n    background-color: rgb(255, 230, 0);\n    position: relative;\n  }\n  .nose {\n    border: 10px solid red;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    left: 50%;\n    top: 150px;\n    margin-left: -10px;\n    border-color: black transparent transparent;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    transform-origin: center bottom;\n    animation: wave 300ms infinite linear;\n  }\n  .nose .apex-cover {\n    height: 4px;\n    width: 20px;\n    left: 50%;\n    margin-left: -10px;\n    top: -14px;\n    position: absolute;\n    background-color: transparent;\n    overflow: hidden;\n  }\n  \n  .nose .apex-cover .apex {\n    width: 20px;\n    height: 8px;\n    position: absolute;\n    left: 50%;\n    margin-left: -10px;\n    border-radius: 50% 50% 50% 50%;\n    background-color: black;\n  }\n  \n  .eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    margin-left: -32px;\n    position: absolute;\n    top: 110px;\n    border-radius: 50%;\n    background-color: rgb(46, 46, 46);\n  }\n  .eye.left {\n    transform: translateX(-120px);\n  }\n  .eye.right {\n    transform: translateX(120px);\n  }\n  .eye::before {\n    content: \"\";\n    border: 3px solid #000;\n    display: block;\n    width: 26px;\n    height: 26px;\n    background-color: #fff;\n    border-radius: 50%;\n    position: absolute;\n    left: 7px;\n    top: -1px;\n    animation: eyeMove 3s infinite;\n  }\n  @keyframes eyeMove {\n    0%,\n    to {\n      top: 2px;\n      left: 2px;\n    }\n  \n    30%,\n    60%,\n    70% {\n      top: 0;\n      left: 20px;\n    }\n  \n    40% {\n      top: 0;\n      left: 15px;\n    }\n  \n    50% {\n      top: 0;\n      left: 10px;\n    }\n  \n    80%,\n    90% {\n      top: 17px;\n      left: 15px;\n    }\n  }\n  .mouth {\n    width: 204px;\n    height: 300px;\n    position: absolute;\n    left: 50%;\n    margin-left: -102px;\n    top: 180px;\n    overflow: hidden;\n    animation: mouthMove 3s infinite;\n  }\n  @keyframes mouthMove {\n    0%,\n    46%,\n    54%,\n    to {\n      height: 300px;\n    }\n  \n    50% {\n      height: 10px;\n    }\n  }\n  .mouth .up {\n    position: relative;\n    z-index: 5;\n    top: -20px;\n  }\n  .mouth .lip {\n    background-color: rgb(255, 230, 0);\n    border: 3px solid black;\n    height: 40px;\n    width: 100px;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    border-top-left-radius: 20%;\n    border-bottom-left-radius: 80%;\n  }\n  \n  .mouth .lip.left {\n    transform: rotate(-25deg) translateX(-55px);\n  }\n  .mouth .lip.right {\n    transform: rotateY(180deg) rotate(-25deg) translateX(-56px);\n  }\n  .mouth .lip::before {\n    content: \"\";\n    display: block;\n    width: 8px;\n    height: 6px;\n    background-color: rgb(255, 230, 0);\n    position: absolute;\n    top: -1px;\n    left: -4px;\n    transform: rotate(25deg);\n  }\n  /* \u906E\u76D6\u4E0B\u5634\u5507 */\n  .lip-cover {\n    width: 100%;\n    height: 20px;\n    background-color: rgb(255, 230, 0);\n    position: relative;\n    z-index: 1;\n    top: -5px;\n  }\n  \n  .mouth .down {\n    border: 3px solid black;\n    height: 1000px;\n    width: 100%;\n    border-radius: 50%;\n    position: absolute;\n    top: -800px;\n    background-color: rgb(155, 0, 10);\n    overflow: hidden;\n  }\n  .mouth .down .tongue {\n    background-color: rgb(255, 72, 95);\n    height: 300px;\n    width: 200px;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n  }\n  .face {\n    border: 3px solid black;\n    height: 88px;\n    width: 88px;\n    position: absolute;\n    left: 50%;\n    margin-left: -44px;\n    top: 240px;\n    border-radius: 50%;\n    background-color: #f00;\n  }\n  .face.left {\n    transform: translateX(-170px);\n  }\n  .face.right {\n    transform: translateX(170px);\n  }\n  .face-wrap:hover img {\n    display: block;\n  }\n  img {\n    position: absolute;\n    top: 44px;\n    left: 44px;\n    display: none;\n  }\n  .face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: left top;\n  }\n";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  time: 100,
  id: undefined,
  ui: {
    cssDiv: document.querySelector("#cssDiv"),
    textDiv: document.querySelector("#textDiv")
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.textDiv.innerText = _css2.default.substring(0, player.n);
    player.ui.cssDiv.innerHTml = _css2.default.substring(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.textDiv.innerText = _css2.default.substring(0, player.n);
    player.ui.cssDiv.innerHTML = _css2.default.substring(0, player.n);
    player.ui.textDiv.scrollTop = player.ui.textDiv.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.3b148b0c.map