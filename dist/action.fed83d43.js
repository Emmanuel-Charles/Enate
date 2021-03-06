// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === "function" && parcelRequire;
  var nodeRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === "function" && parcelRequire;
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
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})(
  {
    "index.js": [
      function (require, module, exports) {
        window.addEventListener("scroll", function () {
          var head = document.getElementById("main-head");

          if (window.pageYOffset > 10) {
            head.classList.add("sticky-head");
          } else {
            head.classList.remove("sticky-head");
          }
        });

        function popup() {
          var popup = document.getElementById("myPopup");
          popup.classList.toggle("show");
        }

        window.addEventListener("scroll", function () {
          var catergoryMEn = document.getElementById("Men");

          if (window.pageYOffset > 251) {
            catergoryMEn.classList.add("shift-men");
          } else {
            catergoryMEn.classList.remove("shift-men");
          }

          if (window.pageYOffset > 1151) {
            document.getElementById("Men").style.position = "static";
          } else {
            document.getElementById("Men").style.position = "sticky";
          }
        });
        window.addEventListener("scroll", function () {
          var catergoryWomen = document.getElementById("Women");

          if (window.pageYOffset > 1354) {
            catergoryWomen.classList.add("shift-women");
          } else {
            catergoryWomen.classList.remove("shift-women");
          }

          if (window.pageYOffset > 2246) {
            document.getElementById("Women").style.position = "static";
          } else {
            document.getElementById("Women").style.position = "sticky";
          }
        });
        window.addEventListener("scroll", function () {
          var catergoryChildren = document.getElementById("Children");

          if (window.pageYOffset > 2454) {
            catergoryChildren.classList.add("shift-children");
          } else {
            catergoryChildren.classList.remove("shift-children");
          }

          if (window.pageYOffset > 3354) {
            document.getElementById("Children").style.position = "static";
          } else {
            document.getElementById("Children").style.position = "sticky";
          }
        });
        window.addEventListener("scroll", function () {
          var catergorySlides = document.getElementById("Slides");

          if (window.pageYOffset > 3554) {
            catergorySlides.classList.add("shift-slides");
          } else {
            catergorySlides.classList.remove("shift-slides");
          }

          if (window.pageYOffset > 4486) {
            document.getElementById("Slides").style.position = "static";
          } else {
            document.getElementById("Slides").style.position = "sticky";
          }
        });
        window.addEventListener("scroll", function () {
          var catergorySneakers = document.getElementById("Sneakers");

          if (window.pageYOffset > 4654) {
            catergorySneakers.classList.add("shift-sneakers");
          } else {
            catergorySneakers.classList.remove("shift-sneakers");
          }

          if (window.pageYOffset > 5586) {
            document.getElementById("Sneakers").style.position = "static";
          } else {
            document.getElementById("Sneakers").style.position = "sticky";
          }
        });
        window.addEventListener("scroll", function () {
          var catergoryFormal = document.getElementById("Formal");

          if (window.pageYOffset > 5756) {
            catergoryFormal.classList.add("shift-formal");
          } else {
            catergoryFormal.classList.remove("shift-formal");
          }

          if (window.pageYOffset > 6686) {
            document.getElementById("Formal").style.position = "static";
          } else {
            document.getElementById("Formal").style.position = "sticky";
          }
        });
        window.addEventListener("scroll", function () {
          var leftNav = document.getElementById("shop-center-aside");

          if (window.pageYOffset > 6290) {
            leftNav.classList.add("stick");
          } else {
            leftNav.classList.remove("stick");
          }
        });
        setTimeout(function () {
          document.getElementById("preload").classList.remove("preload");
        }, 2000);

        var TxtType = function TxtType(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = "";
          this.tick();
          this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];

          if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
          }

          this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
          var that = this;
          var delta = 200 - Math.random() * 100;

          if (this.isDeleting) {
            delta /= 2;
          }

          if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
          } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
          }

          setTimeout(function () {
            that.tick();
          }, delta);
        };

        window.onload = function () {
          var elements = document.getElementsByClassName("typewrite");

          for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute("data-type");
            var period = elements[i].getAttribute("data-period");

            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
          }

          var css = document.createElement("style");
          css.innerHTML =
            ".typewrite > .wrap { border-right: 2px solid #017e83; animation: flash 1s linear infinite} @keyframes flash{50% {border-right:rgba(1, 126, 131, 0);}}";
          css.setAttribute("type", "text/css");
          document.body.appendChild(css);
        };
      },
      {},
    ],
    "../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":
      [
        function (require, module, exports) {
          var global = arguments[3];
          var OVERLAY_ID = "__parcel__error__overlay__";
          var OldModule = module.bundle.Module;

          function Module(moduleName) {
            OldModule.call(this, moduleName);
            this.hot = {
              data: module.bundle.hotData,
              _acceptCallbacks: [],
              _disposeCallbacks: [],
              accept: function (fn) {
                this._acceptCallbacks.push(fn || function () {});
              },
              dispose: function (fn) {
                this._disposeCallbacks.push(fn);
              },
            };
            module.bundle.hotData = null;
          }

          module.bundle.Module = Module;
          var checkedAssets, assetsToAccept;
          var parent = module.bundle.parent;

          if (
            (!parent || !parent.isParcelRequire) &&
            typeof WebSocket !== "undefined"
          ) {
            var hostname = "" || location.hostname;
            var protocol = location.protocol === "https:" ? "wss" : "ws";
            var ws = new WebSocket(
              protocol + "://" + hostname + ":" + "53662" + "/"
            );

            ws.onmessage = function (event) {
              checkedAssets = {};
              assetsToAccept = [];
              var data = JSON.parse(event.data);

              if (data.type === "update") {
                var handled = false;
                data.assets.forEach(function (asset) {
                  if (!asset.isNew) {
                    var didAccept = hmrAcceptCheck(
                      global.parcelRequire,
                      asset.id
                    );

                    if (didAccept) {
                      handled = true;
                    }
                  }
                }); // Enable HMR for CSS by default.

                handled =
                  handled ||
                  data.assets.every(function (asset) {
                    return asset.type === "css" && asset.generated.js;
                  });

                if (handled) {
                  console.clear();
                  data.assets.forEach(function (asset) {
                    hmrApply(global.parcelRequire, asset);
                  });
                  assetsToAccept.forEach(function (v) {
                    hmrAcceptRun(v[0], v[1]);
                  });
                } else if (location.reload) {
                  // `location` global exists in a web worker context but lacks `.reload()` function.
                  location.reload();
                }
              }

              if (data.type === "reload") {
                ws.close();

                ws.onclose = function () {
                  location.reload();
                };
              }

              if (data.type === "error-resolved") {
                console.log("[parcel] ??? Error resolved");
                removeErrorOverlay();
              }

              if (data.type === "error") {
                console.error(
                  "[parcel] ????  " + data.error.message + "\n" + data.error.stack
                );
                removeErrorOverlay();
                var overlay = createErrorOverlay(data);
                document.body.appendChild(overlay);
              }
            };
          }

          function removeErrorOverlay() {
            var overlay = document.getElementById(OVERLAY_ID);

            if (overlay) {
              overlay.remove();
            }
          }

          function createErrorOverlay(data) {
            var overlay = document.createElement("div");
            overlay.id = OVERLAY_ID; // html encode message and stack trace

            var message = document.createElement("div");
            var stackTrace = document.createElement("pre");
            message.innerText = data.error.message;
            stackTrace.innerText = data.error.stack;
            overlay.innerHTML =
              '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
              '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
              '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' +
              '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
              message.innerHTML +
              "</div>" +
              "<pre>" +
              stackTrace.innerHTML +
              "</pre>" +
              "</div>";
            return overlay;
          }

          function getParents(bundle, id) {
            var modules = bundle.modules;

            if (!modules) {
              return [];
            }

            var parents = [];
            var k, d, dep;

            for (k in modules) {
              for (d in modules[k][1]) {
                dep = modules[k][1][d];

                if (
                  dep === id ||
                  (Array.isArray(dep) && dep[dep.length - 1] === id)
                ) {
                  parents.push(k);
                }
              }
            }

            if (bundle.parent) {
              parents = parents.concat(getParents(bundle.parent, id));
            }

            return parents;
          }

          function hmrApply(bundle, asset) {
            var modules = bundle.modules;

            if (!modules) {
              return;
            }

            if (modules[asset.id] || !bundle.parent) {
              var fn = new Function(
                "require",
                "module",
                "exports",
                asset.generated.js
              );
              asset.isNew = !modules[asset.id];
              modules[asset.id] = [fn, asset.deps];
            } else if (bundle.parent) {
              hmrApply(bundle.parent, asset);
            }
          }

          function hmrAcceptCheck(bundle, id) {
            var modules = bundle.modules;

            if (!modules) {
              return;
            }

            if (!modules[id] && bundle.parent) {
              return hmrAcceptCheck(bundle.parent, id);
            }

            if (checkedAssets[id]) {
              return;
            }

            checkedAssets[id] = true;
            var cached = bundle.cache[id];
            assetsToAccept.push([bundle, id]);

            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
              return true;
            }

            return getParents(global.parcelRequire, id).some(function (id) {
              return hmrAcceptCheck(global.parcelRequire, id);
            });
          }

          function hmrAcceptRun(bundle, id) {
            var cached = bundle.cache[id];
            bundle.hotData = {};

            if (cached) {
              cached.hot.data = bundle.hotData;
            }

            if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
              cached.hot._disposeCallbacks.forEach(function (cb) {
                cb(bundle.hotData);
              });
            }

            delete bundle.cache[id];
            bundle(id);
            cached = bundle.cache[id];

            if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
              cached.hot._acceptCallbacks.forEach(function (cb) {
                cb();
              });

              return true;
            }
          }
        },
        {},
      ],
  },
  {},
  [
    "../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",
    "index.js",
  ],
  null
);
//# sourceMappingURL=/action.fed83d43.js.map
