(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('crypto'), require('echarts')) :
  typeof define === 'function' && define.amd ? define(['vue', 'crypto', 'echarts'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.imoocDatav = factory(global.vue, global.crypto, global.Echarts));
})(this, (function (vue, crypto, Echarts) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);
  var Echarts__default = /*#__PURE__*/_interopDefaultLegacy(Echarts);

  var script$b = {
    name: "TestComponent"
  };

  var _hoisted_1$8 = {
    "class": "home"
  };

  var _hoisted_2$5 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"0\" height=\"0\"><defs><symbol id=\"more\" viewBox=\"0 0 100 100\"><circle r=\"5\" cx=\"20\" cy=\"25\" fill=\"currentColor\"></circle><circle r=\"5\" cx=\"20\" cy=\"50\" fill=\"currentColor\"></circle><circle r=\"5\" cx=\"20\" cy=\"75\" fill=\"currentColor\"></circle><line x1=\"40\" y1=\"25\" x2=\"90\" y2=\"25\" stroke-width=\"8\" stroke=\"currentColor\"></line><line x1=\"40\" y1=\"50\" x2=\"80\" y2=\"50\" stroke-width=\"8\" stroke=\"currentColor\"></line><line x1=\"40\" y1=\"75\" x2=\"90\" y2=\"75\" stroke-width=\"8\" stroke=\"currentColor\"></line></symbol><symbol id=\"filledArrowRight\" viewBox=\"0 0 100 100\"><polyline points=\"20 10,80 50,20 90\" fill=\"currentColor\"></polyline></symbol><symbol id=\"ArrowRight\" viewBox=\"0 0 100 100\"><polyline points=\"20 10,80 50,20 90\" fill=\"transparent\" stroke=\"currentColor\" stroke-width=\"3\"></polyline></symbol></defs></svg>", 1);

  var _hoisted_3$5 = [_hoisted_2$5];
  function render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$8, _hoisted_3$5);
  }

  script$b.render = render$b;
  script$b.__file = "src/components/Test/Test.vue";

  function Test (Vue) {
    Vue.component(script$b.name, script$b);
  }

  var script$a = {
    name: 'TestComponent2',
    setup: function setup() {
      var message = 'hello world2!';
      return {
        message: message
      };
    }
  };

  var _hoisted_1$7 = {
    "class": "test2"
  };
  function render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [vue.createElementVNode("div", null, vue.toDisplayString($setup.message), 1
    /* TEXT */
    )]);
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$8 = ".test2[data-v-f780135e] {\n  color: blue;\n}";
  styleInject(css_248z$8);

  script$a.render = render$a;
  script$a.__scopeId = "data-v-f780135e";
  script$a.__file = "src/components/Test2/Test2.vue";

  function Test2 (Vue) {
    Vue.component(script$a.name, script$a);
  }

  var script$9 = {
    name: 'TestComponent3',
    setup: function setup() {
      var message = 'hello world3!';
      return {
        message: message
      };
    }
  };

  var _hoisted_1$6 = {
    "class": "test3"
  };
  function render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$6, [vue.createElementVNode("div", null, vue.toDisplayString($setup.message), 1
    /* TEXT */
    )]);
  }

  var css_248z$7 = ".test3[data-v-1932c093] {\n  color: green;\n}";
  styleInject(css_248z$7);

  script$9.render = render$9;
  script$9.__scopeId = "data-v-1932c093";
  script$9.__file = "src/components/Test3/Test3.vue";

  function Test3 (Vue) {
    Vue.component(script$9.name, script$9);
  }

  var script$8 = {
    name: 'Icon',
    props: {
      name: String,
      prefix: {
        type: String,
        "default": 'icon'
      },
      style: Object
    },
    setup: function setup(ctx) {
      var iconName = "#".concat(ctx.prefix).concat(ctx.name);
      console.log(iconName);
      return iconName;
    }
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var defineProperty$1 = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var _defineProperty$1 = unwrapExports(defineProperty$1);

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var _hoisted_1$5 = {
    "class": "icon"
  };
  var _hoisted_2$4 = ["href"];
  function render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      "class": "icon-wrapper",
      style: vue.normalizeStyle(_objectSpread$1({}, $props.style))
    }, [(vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$5, [vue.createElementVNode("use", {
      href: _ctx.iconName
    }, null, 8
    /* PROPS */
    , _hoisted_2$4)]))], 4
    /* STYLE */
    );
  }

  var css_248z$6 = "\n.icon-wrapper {\r\n      display: inline-block;\n}\n.icon {\r\n      width: 100%;\r\n      height: 100%;\r\n      vertical-align: -0.15em;\r\n      fill: currentColor;\r\n      overflow: hidden;\n}\r\n";
  styleInject(css_248z$6);

  script$8.render = render$8;
  script$8.__file = "src/components/Icon/Icon.vue";

  function Icon (Vue) {
    Vue.component(script$8.name, script$8);
  }

  var script$7 = {
    name: 'SvgAnimation',
    setup: function setup() {
      vue.onMounted(function () {
        var logo = document.getElementsByClassName('logo')[0];
        console.log(logo.getTotalLength());
      });
    }
  };

  var _withScopeId$1 = function _withScopeId(n) {
    return vue.pushScopeId("data-v-5a151e4f"), n = n(), vue.popScopeId(), n;
  };

  var _hoisted_1$4 = /*#__PURE__*/vue.createStaticVNode("<div class=\"container\" data-v-5a151e4f><svg width=\"500\" height=\"200\" viewBox=\"0 0 500 200\" data-v-5a151e4f><!-- transform=&quot;matrix(2 1 -1 2 50 0)&quot; --><rect class=\"rect\" x=\"5\" y=\"5\" width=\"100\" height=\"50\" fill=\"none\" stroke=\"blue\" stroke-width=\"5\" data-v-5a151e4f></rect></svg></div><div class=\"container\" data-v-5a151e4f><svg width=\"100\" height=\"100\" viewBox=\"0 0 400 400\" data-v-5a151e4f><circle cx=\"200\" cy=\"200\" r=\"180\" stroke-width=\"20\" stroke=\"#d1d3d7\" fill=\"transparent\" data-v-5a151e4f></circle><circle class=\"circle\" cx=\"200\" cy=\"200\" r=\"180\" stroke-width=\"20\" stroke=\"#00a5e0\" fill=\"transparent\" transform=\"matrix(0 -1 1 0 0 400)\" data-v-5a151e4f></circle></svg></div>", 2);

  var _hoisted_3$4 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("div", {
      "class": "contianer"
    }, [/*#__PURE__*/vue.createElementVNode("svg", {
      viewBox: "0 0 1024 1024",
      width: "100",
      height: "100"
    }, [/*#__PURE__*/vue.createElementVNode("path", {
      "class": "logo",
      d: "M667.786667 117.333333C832.864 117.333333 938.666667 249.706667 938.666667 427.861333c0 138.250667-125.098667 290.506667-371.573334 461.589334a96.768 96.768 0 0 1-110.186666 0C210.432 718.368 85.333333 566.112 85.333333 427.861333 85.333333 249.706667 191.136 117.333333 356.213333 117.333333c59.616 0 100.053333 20.832 155.786667 68.096C567.744 138.176 608.170667 117.333333 667.786667 117.333333z m0 63.146667c-41.44 0-70.261333 15.189333-116.96 55.04-2.165333 1.845333-14.4 12.373333-17.941334 15.381333a32.32 32.32 0 0 1-41.770666 0c-3.541333-3.018667-15.776-13.536-17.941334-15.381333-46.698667-39.850667-75.52-55.04-116.96-55.04C230.186667 180.48 149.333333 281.258667 149.333333 426.698667 149.333333 537.6 262.858667 675.242667 493.632 834.826667a32.352 32.352 0 0 0 36.736 0C761.141333 675.253333 874.666667 537.6 874.666667 426.698667c0-145.44-80.853333-246.218667-206.88-246.218667z",
      "p-id": "2699"
    })])], -1
    /* HOISTED */
    );
  });

  var _hoisted_4$3 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("div", {
      "class": "container"
    }, [/*#__PURE__*/vue.createElementVNode("svg", {
      "class": "line-container",
      viewBox: "0 0 400 400",
      width: "400",
      height: "400"
    }, [/*#__PURE__*/vue.createElementVNode("line", {
      "class": "line",
      x1: "0",
      y1: "10",
      x2: "400",
      y2: "10",
      fill: "none",
      "stroke-width": "10",
      stroke: "red"
    })])], -1
    /* HOISTED */
    );
  });

  var _hoisted_5$3 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("div", {
      "class": "container"
    }, [/*#__PURE__*/vue.createElementVNode("svg", {
      width: "200",
      height: "200"
    }, [/*#__PURE__*/vue.createElementVNode("rect", {
      x: "0",
      y: "0",
      fill: "red",
      width: "100",
      height: "50"
    }, [/*#__PURE__*/vue.createElementVNode("set", {
      attributeName: "x",
      sttributeType: "XML",
      to: "10",
      begin: "1s"
    }), /*#__PURE__*/vue.createElementVNode("set", {
      attributeName: "x",
      sttributeType: "XML",
      to: "20",
      begin: "2s"
    }), /*#__PURE__*/vue.createElementVNode("set", {
      attributeName: "fill",
      sttributeType: "XML",
      to: "blue",
      begin: "3s"
    })])]), /*#__PURE__*/vue.createElementVNode("svg", {
      width: "200",
      height: "200"
    }, [/*#__PURE__*/vue.createElementVNode("circle", {
      cx: "0",
      cy: "0",
      r: "30",
      fill: "blue",
      stroke: "black",
      "stroke-width": "1"
    }, [/*#__PURE__*/vue.createCommentVNode(" <animate attributeName=\"cx\" attributeType=\"XML\" from=\"0\" to=\"100\" dur=\"1s\" repeatCount=\"2\" fill=\"freeze\"></animate>\r\n                    <animate attributeName=\"cy\" attributeType=\"XML\" from=\"0\" to=\"50\" dur=\"1s\" repeatCount=\"2\" fill=\"freeze\"></animate>\r\n                    <animate attributeName=\"fill\" attributeType=\"XML\" from=\"blue\" to=\"red\" dur=\"1s\" repeatCount=\"2\" fill=\"freeze\"></animate> "), /*#__PURE__*/vue.createElementVNode("animateTransform", {
      attributeName: "transform",
      attributeType: "XML",
      begin: "0",
      dur: "3s",
      type: "scale",
      from: "1",
      to: "2",
      repeatCount: "2"
    })])]), /*#__PURE__*/vue.createElementVNode("svg", {
      width: "200",
      height: "200"
    }, [/*#__PURE__*/vue.createElementVNode("rect", {
      x: "0",
      y: "0",
      fill: "red",
      width: "10",
      height: "10"
    }, [/*#__PURE__*/vue.createElementVNode("animateMotion", {
      path: "M10 10 L110 10 L110 110 L10 110 Z",
      dur: "5s",
      rotate: "auto",
      fill: "freeze",
      repeatCount: "2"
    })]), /*#__PURE__*/vue.createElementVNode("path", {
      d: "M10 10 L110 10 L110 110 L10 110 Z",
      fill: "none",
      stroke: "green"
    })])], -1
    /* HOISTED */
    );
  });

  var _hoisted_6$2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"container\" data-v-5a151e4f><svg width=\"400\" height=\"400\" data-v-5a151e4f><polygon points=\"30 30 70 30 90 70 10 70\" fill=\"#fcc\" stroke=\"black\" data-v-5a151e4f><animate attributeName=\"points\" attributeType=\"XML\" to=\"50 30 70 50 50 90 30 50\" dur=\"5s\" fill=\"freeze\" repeatCount=\"1\" data-v-5a151e4f></animate></polygon></svg></div><div class=\"container bg-grey\" data-v-5a151e4f><svg width=\"400\" height=\"400\" data-v-5a151e4f><defs data-v-5a151e4f><mask id=\"test-mask\" data-v-5a151e4f><rect x=\"5\" y=\"5\" width=\"390\" height=\"200\" fill=\"#fff\" opacity=\".5\" data-v-5a151e4f></rect><circle r=\"50\" cx=\"150\" cy=\"150\" data-v-5a151e4f></circle></mask><linearGradient id=\"test-linear-gradient\" data-v-5a151e4f><stop offset=\"0%\" stop-color=\"red\" stop-opacity=\"1\" data-v-5a151e4f></stop><stop offset=\"50%\" stop-color=\"green\" data-v-5a151e4f></stop><stop offset=\"100%\" stop-color=\"blue\" stop-opacity=\"0.5\" data-v-5a151e4f></stop></linearGradient><radialGradient id=\"radial-gradient\" cx=\"50%\" cy=\"50%\" fx=\"50%\" fy=\"50%\" r=\"50%\" data-v-5a151e4f><stop offset=\"0%\" stop-color=\"#fff\" stop-opacity=\"1\" data-v-5a151e4f></stop><stop offset=\"100%\" stop-color=\"#fff\" stop-opacity=\"0\" data-v-5a151e4f></stop></radialGradient></defs><!-- &lt;rect x=&quot;5&quot; y=&quot;5&quot; width=&quot;390&quot; height=&quot;390&quot; fill=&quot;url(#radial-gradient)&quot;&gt;&lt;/rect&gt; --><circle cx=\"200\" cy=\"200\" r=\"200\" fill=\"url(#radial-gradient)\" data-v-5a151e4f></circle><!-- &lt;rect x=&quot;5&quot; y=&quot;5&quot; width=&quot;390&quot; height=&quot;390&quot; fill=&quot;blue&quot;\r\n                    mask=&quot;url(#test-mask)&quot;&gt;\r\n                &lt;/rect&gt; --></svg></div>", 2);

  var _hoisted_8$2 = [_hoisted_1$4, _hoisted_3$4, _hoisted_4$3, _hoisted_5$3, _hoisted_6$2];
  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, _hoisted_8$2);
  }

  var css_248z$5 = ".container[data-v-5a151e4f] svg[data-v-5a151e4f] {\n  border: 1px solid #000;\n}\n\n.rect[data-v-5a151e4f] {\n  stroke-dasharray: 10;\n}\n\n.circle[data-v-5a151e4f] {\n  animation: circle-5a151e4f 5s linear infinite;\n}\n\n@keyframes circle-5a151e4f {\n  from {\n    stroke-dasharray: 0 1131;\n  }\n  to {\n    stroke-dasharray: 1131 0;\n  }\n}\n.logo[data-v-5a151e4f] {\n  fill: none;\n  stroke: #333;\n  stroke-width: 5;\n  animation: logo-5a151e4f 5s linear 1 forwards;\n}\n\n@keyframes logo-5a151e4f {\n  0% {\n    fill: white;\n    stroke-dasharray: 4837;\n    stroke-dashoffset: 4837;\n  }\n  50% {\n    fill: white;\n    stroke-dasharray: 4837;\n    stroke-dashoffset: 0;\n  }\n  75% {\n    fill: red;\n    stroke: white;\n  }\n  100% {\n    fill: blue;\n    stroke: white;\n  }\n}\n.line[data-v-5a151e4f] {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  transition: stroke-dashoffset 0.5s ease-out;\n}\n\n.line-container[data-v-5a151e4f][data-v-5a151e4f]:hover .line[data-v-5a151e4f] {\n  stroke-dashoffset: 0;\n}\n\n.bg-grey[data-v-5a151e4f] {\n  background: #333;\n}";
  styleInject(css_248z$5);

  script$7.render = render$7;
  script$7.__scopeId = "data-v-5a151e4f";
  script$7.__file = "src/components/SvgAnimation/SvgAnimation.vue";

  function SvgAnimation (Vue) {
    Vue.component(script$7.name, script$7);
  }

  var script$6 = {
    name: 'ImoocLoading',
    props: {
      width: {
        type: [Number, String],
        "default": 50
      },
      height: {
        type: [Number, String],
        "default": 50
      },
      outsideColor: {
        type: String,
        "default": "#3be6cb"
      },
      insideColor: {
        type: String,
        "default": "#02bcfe"
      },
      duration: {
        type: [Number, String],
        "default": 2
      }
    },
    setup: function setup(ctx) {
      //定义两个计算属性  内外圈的渐变颜色
      var outsideColorAnimation = vue.computed(function () {
        return "".concat(ctx.outsideColor, ";").concat(ctx.insideColor, ";").concat(ctx.outsideColor);
      });
      var insideColorAnimation = vue.computed(function () {
        return "".concat(ctx.insideColor, ";").concat(ctx.outsideColor, ";").concat(ctx.insideColor);
      });
      return {
        outsideColorAnimation: outsideColorAnimation,
        insideColorAnimation: insideColorAnimation
      };
    }
  };

  var _hoisted_1$3 = {
    "class": "imooc-loading"
  };
  var _hoisted_2$3 = ["width", "height"];
  var _hoisted_3$3 = ["stroke"];
  var _hoisted_4$2 = ["dur"];
  var _hoisted_5$2 = ["values", "dur"];
  var _hoisted_6$1 = ["stroke"];
  var _hoisted_7$1 = ["dur"];
  var _hoisted_8$1 = ["values", "dur"];
  var _hoisted_9$1 = {
    "class": "imooc-loading-content"
  };
  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [(vue.openBlock(), vue.createElementBlock("svg", {
      width: $props.width,
      height: $props.height,
      viewBox: "0 0 50 50"
    }, [vue.createElementVNode("circle", {
      cx: "25",
      cy: "25",
      r: "22",
      fill: "none",
      "stroke-width": "3",
      stroke: $props.outsideColor,
      "stroke-dasharray": "34",
      "stroke-linecap": "round"
    }, [vue.createElementVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      from: "0 25 25",
      to: "360 25 25",
      dur: "".concat($props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , _hoisted_4$2), vue.createElementVNode("animate", {
      attributeName: "stroke",
      values: $setup.outsideColorAnimation,
      dur: "".concat(+$props.duration * 2, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , _hoisted_5$2)], 8
    /* PROPS */
    , _hoisted_3$3), vue.createElementVNode("circle", {
      cx: "25",
      cy: "25",
      r: "12",
      fill: "none",
      "stroke-width": "3",
      stroke: $props.insideColor,
      "stroke-dasharray": "19",
      "stroke-linecap": "round"
    }, [vue.createElementVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      from: "360 25 25",
      to: "0 25 25",
      dur: "".concat($props.duration, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , _hoisted_7$1), vue.createElementVNode("animate", {
      attributeName: "stroke",
      values: $setup.insideColorAnimation,
      dur: "".concat(+$props.duration * 2, "s"),
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , _hoisted_8$1)], 8
    /* PROPS */
    , _hoisted_6$1)], 8
    /* PROPS */
    , _hoisted_2$3)), vue.createElementVNode("div", _hoisted_9$1, [vue.renderSlot(_ctx.$slots, "default")])]);
  }

  script$6.render = render$6;
  script$6.__file = "src/components/ImoocLoading/ImoocLoading.vue";

  function ImoocLoading (Vue) {
    Vue.component(script$6.name, script$6);
  }

  const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

  let poolPtr = rnds8Pool.length;
  function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
      crypto__default["default"].randomFillSync(rnds8Pool);
      poolPtr = 0;
    }

    return rnds8Pool.slice(poolPtr, poolPtr += 16);
  }

  var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  function validate(uuid) {
    return typeof uuid === 'string' && REGEX.test(uuid);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */

  const byteToHex = [];

  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
  }

  function stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields

    if (!validate(uuid)) {
      throw TypeError('Stringified UUID is invalid');
    }

    return uuid;
  }

  function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }

      return buf;
    }

    return stringify(rnds);
  }

  var script$5 = {
    name: 'ImoocFlyBox',
    props: {
      //flybox边框颜色
      lineColor: {
        type: String,
        "default": "#235fa7"
      },
      //flybox流星颜色
      starColor: {
        type: String,
        "default": "#4fd2dd"
      },
      //flybox流星长度
      starLength: {
        type: [Number, String],
        "default": 50
      },
      duration: {
        type: [Number, String],
        "default": 3
      }
    },
    setup: function setup(ctx) {
      var uuid = v4(); //定义响应式变量

      var width = vue.ref(0);
      var height = vue.ref(0);
      var refName = "imoocFlyBox";
      var pathID = "".concat(refName, "-path-").concat(uuid);
      var radialGradientID = "".concat(refName, "-gradient-").concat(uuid);
      var maskID = "".concat(refName, "-mask-").concat(uuid); //动态计算path属性

      var path = vue.computed(function () {
        return "M5 5 L".concat(width.value - 5, " 5 L").concat(width.value - 5, " ").concat(height.value - 5, " L5 ").concat(height.value - 5, " Z");
      });

      var init = function init() {
        var instance = vue.getCurrentInstance();
        var dom = instance.ctx.$refs[refName]; //获取imooc-fly-box的宽高

        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      };

      vue.onMounted(function () {
        init();
      });
      return {
        width: width,
        height: height,
        refName: refName,
        path: path,
        pathID: pathID,
        radialGradientID: radialGradientID,
        maskID: maskID
      };
    }
  };

  var _withScopeId = function _withScopeId(n) {
    return vue.pushScopeId("data-v-c0159702"), n = n(), vue.popScopeId(), n;
  };

  var _hoisted_1$2 = ["width", "height"];
  var _hoisted_2$2 = ["id", "d"];
  var _hoisted_3$2 = ["id"];

  var _hoisted_4$1 = /*#__PURE__*/_withScopeId(function () {
    return /*#__PURE__*/vue.createElementVNode("stop", {
      offset: "0%",
      "stop-color": "#fff",
      "stop-opacity": "1"
    }, null, -1
    /* HOISTED */
    );
  });

  var _hoisted_5$1 = /*#__PURE__*/_withScopeId(function () {
    return /*#__PURE__*/vue.createElementVNode("stop", {
      offset: "100%",
      "stop-color": "#fff",
      "stop-opacity": "0"
    }, null, -1
    /* HOISTED */
    );
  });

  var _hoisted_6 = [_hoisted_4$1, _hoisted_5$1];
  var _hoisted_7 = ["id"];
  var _hoisted_8 = ["r", "fill"];
  var _hoisted_9 = ["path", "dur"];
  var _hoisted_10 = ["href", "stroke"];
  var _hoisted_11 = ["href", "stroke", "mask"];
  var _hoisted_12 = {
    "class": "imooc-fly-box-content"
  };
  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      "class": "imooc-fly-box",
      ref: $setup.refName
    }, [(vue.openBlock(), vue.createElementBlock("svg", {
      width: $setup.width,
      height: $setup.height
    }, [vue.createElementVNode("defs", null, [vue.createElementVNode("path", {
      id: $setup.pathID,
      d: $setup.path,
      fill: "none"
    }, null, 8
    /* PROPS */
    , _hoisted_2$2), vue.createElementVNode("radialGradient", {
      id: $setup.radialGradientID,
      cx: "50%",
      cy: "50%",
      fx: "100%",
      fy: "50%",
      r: "50%"
    }, _hoisted_6, 8
    /* PROPS */
    , _hoisted_3$2), vue.createElementVNode("mask", {
      id: $setup.maskID
    }, [vue.createElementVNode("circle", {
      r: $props.starLength,
      cx: "0",
      cy: "0",
      fill: "url(#".concat($setup.radialGradientID, ")")
    }, [vue.createElementVNode("animateMotion", {
      path: $setup.path,
      dur: "".concat($props.duration, "s"),
      rotate: "auto",
      repeatCount: "indefinite"
    }, null, 8
    /* PROPS */
    , _hoisted_9)], 8
    /* PROPS */
    , _hoisted_8)], 8
    /* PROPS */
    , _hoisted_7)]), vue.createElementVNode("use", {
      href: "#".concat($setup.pathID),
      "stroke-width": "1",
      stroke: $props.lineColor
    }, null, 8
    /* PROPS */
    , _hoisted_10), vue.createElementVNode("use", {
      href: "#".concat($setup.pathID),
      "stroke-width": "3",
      stroke: $props.starColor,
      mask: "url(#".concat($setup.maskID, ")")
    }, null, 8
    /* PROPS */
    , _hoisted_11)], 8
    /* PROPS */
    , _hoisted_1$2)), vue.createElementVNode("div", _hoisted_12, [vue.renderSlot(_ctx.$slots, "default")])], 512
    /* NEED_PATCH */
    );
  }

  var css_248z$4 = "@charset \"UTF-8\";\n.imooc-fly-box[data-v-c0159702] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box[data-v-c0159702] svg[data-v-c0159702] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box[data-v-c0159702] .imooc-fly-box-content[data-v-c0159702] {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  /* border-box 元素的宽度包含border和padding */\n  box-sizing: border-box;\n}";
  styleInject(css_248z$4);

  script$5.render = render$5;
  script$5.__scopeId = "data-v-c0159702";
  script$5.__file = "src/components/ImoocFlyBox/ImoocFlyBox.vue";

  function ImoocFlyBox (Vue) {
    Vue.component(script$5.name, script$5);
  }

  var asyncToGenerator = createCommonjsModule(function (module) {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  module.exports = _asyncToGenerator;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var _asyncToGenerator = unwrapExports(asyncToGenerator);

  var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var runtime = (function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }
    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    exports.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype &&
        NativeIteratorPrototype !== Op &&
        hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype =
      Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      "GeneratorFunction"
    );

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function(method) {
        define(prototype, method, function(arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function(genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor
        ? ctor === GeneratorFunction ||
          // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction"
        : false;
    };

    exports.mark = function(genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
      return { __await: arg };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value &&
              typeof value === "object" &&
              hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function(value) {
              invoke("next", value, resolve, reject);
            }, function(err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function(unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function(error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
          // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(
            callInvokeWithMethodAndArg,
            // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg
          ) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    });
    exports.AsyncIterator = AsyncIterator;

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;

      var iter = new AsyncIterator(
        wrap(innerFn, outerFn, self, tryLocsList),
        PromiseImpl
      );

      return exports.isGeneratorFunction(outerFn)
        ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
          });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;

          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);

          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done
              ? GenStateCompleted
              : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };

          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.
            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    }

    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];
      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError(
            "The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (! info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value;

        // Resume execution at the desired location (see delegateYield).
        context.next = delegate.nextLoc;

        // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.
        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }

      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      }

      // The delegate iterator is finished, so forget it and continue with
      // the outer generator.
      context.delegate = null;
      return ContinueSentinel;
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    define(Gp, toStringTagSymbol, "Generator");

    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
      return this;
    });

    define(Gp, "toString", function() {
      return "[object Generator]";
    });

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function(object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1, next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    exports.values = values;

    function doneResult() {
      return { value: undefined$1, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function(skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;

        this.method = "next";
        this.arg = undefined$1;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" &&
                hasOwn.call(this, name) &&
                !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },

      stop: function() {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !! caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }

            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }

            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev &&
              hasOwn.call(entry, "finallyLoc") &&
              this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry &&
            (type === "break" ||
             type === "continue") &&
            finallyEntry.tryLoc <= arg &&
            arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },

      complete: function(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" ||
            record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },

      finish: function(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    };

    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;

  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports 
  ));

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }
  });

  var regenerator = runtime_1;

  function debounce(delay, callback) {
    var task;
    return function () {
      var _arguments = arguments,
          _this = this;

      //阻止setTimeOut方法
      //delay是延迟的毫秒数
      clearTimeout(task);
      task = setTimeout(function () {
        callback().apply(_this, _arguments);
      }, delay);
    };
  }

  var script$4 = {
    name: 'ImoocContainer',
    props: {
      options: Object
    },
    setup: function setup(props) {
      //ctx类似于vue2中的this
      var refName = 'imoocContainer'; //dom预定义宽高

      var width = vue.ref(0);
      var height = vue.ref(0); //画布区域

      var originalWidth = vue.ref(0);
      var originalHeight = vue.ref(0);
      var ready = vue.ref(false);
      var context, dom, observer; //初始化，获取dom元素的宽高

      var initSize = function initSize() {
        return new Promise(function (resolve) {
          vue.nextTick(function () {
            //$符号代表全局
            dom = context.$refs[refName]; //获取大屏的真实尺寸

            if (props.options && props.options.width && props.options.height) {
              width.value = props.options.width;
              height.value = props.options.height;
            } else {
              width.value = dom.clientWidth;
              height.value = dom.clientHeight;
            } //获取画布的尺寸,这个是不变的


            if (!originalWidth.value || !originalHeight.value) {
              originalWidth.value = window.screen.width;
              originalHeight.value = window.screen.height;
            } // console.log("大屏的真实尺寸:",width.value,height.value)
            // console.log("画布尺寸:",originalWidth.value,originalHeight.value)


            resolve();
          });
        });
      }; //更新dom元素的宽高


      var updateSize = function updateSize() {
        if (width.value && height.value) {
          dom.style.width = "".concat(width.value, "px");
          dom.style.height = "".concat(height.value, "px");
        } else {
          dom.style.width = "".concat(originalWidth.value, "px");
          dom.style.height = "".concat(originalHeight.height, "px");
        }
      }; //设置宽高比


      var updateScale = function updateScale() {
        //获取真实视口尺寸，这个是会变的
        var currentWidth = document.body.clientWidth;
        var currentHeight = document.body.clientHeight; // console.log("真实视口尺寸:",currentWidth,currentHeight)
        //获取大屏最终的宽高

        var realWidth = width.value || originalWidth.value;
        var realHeight = height.value || originalHeight.value; // console.log("大屏最终的宽高:",realWidth,realHeight)

        var widthScale = currentWidth / realWidth;
        var heightScale = currentHeight / realHeight; //实现了浏览器窗口缩放，dom元素尺寸不变

        dom && (dom.style.transform = "scale(".concat(widthScale, ",").concat(heightScale, ")"));
      };

      var onResize = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log("onresize", e);
                  _context.next = 3;
                  return initSize();

                case 3:
                  updateScale();

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function onResize(_x) {
          return _ref.apply(this, arguments);
        };
      }(); //创建一个DOM监听器


      var initMutationObserver = function initMutationObserver() {
        //浏览器兼容
        var MutationObserver = window.MutationObserver; //监听DOM发生变化时调用回调函数

        observer = new MutationObserver(onResize);
        observer.observe(dom, {
          attributes: true,
          attributeFilter: ['style'],
          attributeOldValue: true
        });
      }; //移除DOM监听器


      var removeMutationObserver = function removeMutationObserver() {
        if (observer) {
          //停止观察变动
          observer.disconnect(); //获取所有未处理的更改记录

          observer.takeRecords(); //内存回收

          observer = null;
        }
      };

      vue.onMounted( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
        return regenerator.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ready.value = false; //获取dom元素，只适用于开发阶段

                context = vue.getCurrentInstance().ctx;
                _context2.next = 4;
                return initSize();

              case 4:
                updateSize();
                updateScale(); //锁定宽高比

                window.addEventListener('resize', debounce(100, onResize));
                initMutationObserver();
                ready.value = true;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));
      vue.onUnmounted(function () {
        window.removeEventListener('resize', onResize);
        removeMutationObserver();
      });
      return {
        refName: refName,
        ready: ready
      };
    }
  };

  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      id: "imooc-container",
      ref: $setup.refName
    }, [$setup.ready ? vue.renderSlot(_ctx.$slots, "default", {
      key: 0
    }) : vue.createCommentVNode("v-if", true)], 512
    /* NEED_PATCH */
    );
  }

  var css_248z$3 = "\n#imooc-container{\r\n    position:fixed;\r\n    top:0;\r\n    left: 0;\r\n    overflow: hidden;\r\n    transform-origin: left top;\r\n    z-index: 999;\n}\r\n";
  styleInject(css_248z$3);

  script$4.render = render$4;
  script$4.__file = "src/components/Container/Container.vue";

  function Container (Vue) {
    Vue.component(script$4.name, script$4);
  }

  var script$3 = {
    name: 'ImoocLogo',
    props: {
      strokeWidth: {
        type: [String, Number],
        "default": 1
      },
      stroke: {
        type: String,
        "default": '#000'
      }
    }
  };

  var _hoisted_1$1 = {
    "class": "imooc-logo",
    viewBox: "0 0 1082 1024"
  };
  var _hoisted_2$1 = ["stroke", "stroke-width"];
  var _hoisted_3$1 = ["stroke", "stroke-width"];
  var _hoisted_4 = ["stroke", "stroke-width"];
  var _hoisted_5 = ["stroke", "stroke-width"];
  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$1, [vue.createElementVNode("path", {
      stroke: $props.stroke,
      "stroke-width": $props.strokeWidth,
      "class": "imooc-logo1",
      d: "M533.767 0l158.995 304.74s-278.24 164.672-442.914 444.805l13.25-92.746L0.076 389.915l367.201-41.641z"
    }, null, 8
    /* PROPS */
    , _hoisted_2$1), vue.createElementVNode("path", {
      stroke: $props.stroke,
      "stroke-width": $props.strokeWidth,
      "class": "imooc-logo1",
      d: "M232.813 819.351s384.237-577.074 849.94-433.222l-60.57 66.248s-253.634-24.606-388.022 71.926c0 0-264.991 132.496-401.272 310.418z"
    }, null, 8
    /* PROPS */
    , _hoisted_3$1), vue.createElementVNode("path", {
      stroke: $props.stroke,
      "stroke-width": $props.strokeWidth,
      "class": "imooc-logo1",
      d: "M902.861 564.052l-81.39 79.497s-278.24 11.357-588.658 240.384c0 0 300.954-359.857 670.048-319.881z"
    }, null, 8
    /* PROPS */
    , _hoisted_4), vue.createElementVNode("path", {
      stroke: $props.stroke,
      "stroke-width": $props.strokeWidth,
      "class": "imooc-logo1",
      d: "M223.35 921.79s321.774-217.672 611.37-179.816L868.792 1024 546.108 849.863l-341.61 173.91z"
    }, null, 8
    /* PROPS */
    , _hoisted_5)]);
  }

  var css_248z$2 = ".imooc-logo[data-v-4e320c76] {\n  width: 100%;\n  height: 100%;\n}\n\n.imooc-logo1[data-v-4e320c76] {\n  fill: none;\n  animation: imooc-logo-animation-4e320c76 5s linear infinite forwards;\n}\n\n@keyframes imooc-logo-animation-4e320c76 {\n  0% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 2202;\n  }\n  50% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n}";
  styleInject(css_248z$2);

  script$3.render = render$3;
  script$3.__scopeId = "data-v-4e320c76";
  script$3.__file = "src/components/Imooclogo/ImoocLogo.vue";

  function ImoocLogo (Vue) {
    Vue.component(script$3.name, script$3);
  }

  var lastTime = 0;
  var prefixes = 'webkit moz ms o'.split(' '); // 各浏览器前缀

  var requestAnimationFrame;
  var cancelAnimationFrame;
  var isServer = typeof window === 'undefined';

  if (isServer) {
    requestAnimationFrame = function requestAnimationFrame() {
      return;
    };

    cancelAnimationFrame = function cancelAnimationFrame() {
      return;
    };
  } else {
    requestAnimationFrame = window.requestAnimationFrame;
    cancelAnimationFrame = window.cancelAnimationFrame;
    var prefix; // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式

    for (var i = 0; i < prefixes.length; i++) {
      if (requestAnimationFrame && cancelAnimationFrame) {
        break;
      }

      prefix = prefixes[i];
      requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
      cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
    } // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout


    if (!requestAnimationFrame || !cancelAnimationFrame) {
      requestAnimationFrame = function requestAnimationFrame(callback) {
        var currTime = new Date().getTime(); // 为了使setTimteout的尽可能的接近每秒60帧的效果

        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

      cancelAnimationFrame = function cancelAnimationFrame(id) {
        window.clearTimeout(id);
      };
    }
  }

  var script$2 = {
    name: 'VueCountTo',
    props: {
      startVal: {
        type: Number,
        required: false,
        "default": 0
      },
      endVal: {
        type: Number,
        required: false,
        "default": 2017
      },
      duration: {
        type: Number,
        required: false,
        "default": 3000
      },
      autoplay: {
        type: Boolean,
        required: false,
        "default": true
      },
      decimals: {
        type: Number,
        required: false,
        "default": 0,
        validator: function validator(value) {
          return value >= 0;
        }
      },
      decimal: {
        type: String,
        required: false,
        "default": '.'
      },
      separator: {
        type: String,
        required: false,
        "default": ','
      },
      prefix: {
        type: String,
        required: false,
        "default": ''
      },
      suffix: {
        type: String,
        required: false,
        "default": ''
      },
      useEasing: {
        type: Boolean,
        required: false,
        "default": true
      },
      easingFn: {
        type: Function,
        "default": function _default(t, b, c, d) {
          return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
        }
      }
    },
    data: function data() {
      return {
        localStartVal: this.startVal,
        displayValue: this.formatNumber(this.startVal),
        printVal: null,
        paused: false,
        localDuration: this.duration,
        startTime: null,
        timestamp: null,
        remaining: null,
        rAF: null
      };
    },
    computed: {
      countDown: function countDown() {
        return this.startVal > this.endVal;
      }
    },
    watch: {
      startVal: function startVal() {
        if (this.autoplay) {
          this.start();
        }
      },
      endVal: function endVal() {
        if (this.autoplay) {
          this.start();
        }
      }
    },
    mounted: function mounted() {
      if (this.autoplay) {
        this.start();
      }

      this.$emit('mountedCallback');
    },
    methods: {
      start: function start() {
        this.localStartVal = this.startVal;
        this.startTime = null;
        this.localDuration = this.duration;
        this.paused = false;
        this.rAF = requestAnimationFrame(this.count);
      },
      pauseResume: function pauseResume() {
        if (this.paused) {
          this.resume();
          this.paused = false;
        } else {
          this.pause();
          this.paused = true;
        }
      },
      pause: function pause() {
        cancelAnimationFrame(this.rAF);
      },
      resume: function resume() {
        this.startTime = null;
        this.localDuration = +this.remaining;
        this.localStartVal = +this.printVal;
        requestAnimationFrame(this.count);
      },
      reset: function reset() {
        this.startTime = null;
        cancelAnimationFrame(this.rAF);
        this.displayValue = this.formatNumber(this.startVal);
      },
      count: function count(timestamp) {
        if (!this.startTime) this.startTime = timestamp;
        this.timestamp = timestamp;
        var progress = timestamp - this.startTime;
        this.remaining = this.localDuration - progress;

        if (this.useEasing) {
          if (this.countDown) {
            this.printVal = this.localStartVal - this.easingFn(progress, 0, this.localStartVal - this.endVal, this.localDuration);
          } else {
            this.printVal = this.easingFn(progress, this.localStartVal, this.endVal - this.localStartVal, this.localDuration);
          }
        } else {
          if (this.countDown) {
            this.printVal = this.localStartVal - (this.localStartVal - this.endVal) * (progress / this.localDuration);
          } else {
            this.printVal = this.localStartVal + (this.endVal - this.localStartVal) * (progress / this.localDuration);
          }
        }

        if (this.countDown) {
          this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal;
        } else {
          this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal;
        }

        this.displayValue = this.formatNumber(this.printVal);

        if (progress < this.localDuration) {
          this.rAF = requestAnimationFrame(this.count);
        } else {
          this.$emit('callback');
        }
      },
      isNumber: function isNumber(val) {
        return !isNaN(parseFloat(val));
      },
      formatNumber: function formatNumber(num) {
        num = num.toFixed(this.decimals);
        num += '';
        var x = num.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? this.decimal + x[1] : '';
        var rgx = /(\d+)(\d{3})/;

        if (this.separator && !this.isNumber(this.separator)) {
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + this.separator + '$2');
          }
        }

        return this.prefix + x1 + x2 + this.suffix;
      }
    },
    destroyed: function destroyed() {
      cancelAnimationFrame(this.rAF);
    }
  };

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("span", null, vue.toDisplayString($data.displayValue), 1
    /* TEXT */
    );
  }

  script$2.render = render$2;
  script$2.__file = "src/components/VueCountTo/vue-countTo.vue";

  function VueCountTo (Vue) {
    Vue.component(script$2.name, script$2);
  }

  var script$1 = {
    name: 'VueEcharts',
    props: {
      options: Object,
      theme: [String, Object]
    },
    setup: function setup(ctx) {
      var dom;
      var chart;
      var className = "echarts".concat(v4());

      var initChart = function initChart() {
        if (!chart) {
          dom = document.getElementsByClassName(className)[0];
          chart = Echarts__default["default"].init(dom, ctx.theme);
        }

        if (ctx.options) {
          chart.setOption(ctx.options);
        }
      };

      vue.onMounted(function () {
        initChart();
      }); //监听options状态变化

      vue.watch(function () {
        return ctx.options;
      }, function () {
        initChart();
      });
      return {
        className: className
      };
    }
  };

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      "class": vue.normalizeClass([$setup.className, 'echarts'])
    }, null, 2
    /* CLASS */
    );
  }

  var css_248z$1 = ".echarts[data-v-38cd74e2] {\n  width: 100%;\n  height: 100%;\n}";
  styleInject(css_248z$1);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-38cd74e2";
  script$1.__file = "src/components/VueEcharts/VueEcharts.vue";

  function VueEcharts (Vue) {
    Vue.component(script$1.name, script$1);
  }

  var arrayLikeToArray = createCommonjsModule(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  module.exports = _arrayLikeToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  unwrapExports(arrayLikeToArray);

  var arrayWithoutHoles = createCommonjsModule(function (module) {
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }

  module.exports = _arrayWithoutHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  unwrapExports(arrayWithoutHoles);

  var iterableToArray = createCommonjsModule(function (module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  module.exports = _iterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  unwrapExports(iterableToArray);

  var unsupportedIterableToArray = createCommonjsModule(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  module.exports = _unsupportedIterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  unwrapExports(unsupportedIterableToArray);

  var nonIterableSpread = createCommonjsModule(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableSpread;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  unwrapExports(nonIterableSpread);

  var toConsumableArray = createCommonjsModule(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }

  module.exports = _toConsumableArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var _toConsumableArray = unwrapExports(toConsumableArray);

  function useScreen(id) {
    var width = vue.ref(0);
    var height = vue.ref(0);
    var dom;
    vue.onMounted(function () {
      dom = document.getElementById(id);
      width.value = dom.clientWidth;
      height.value = dom.clientHeight; // console.log(dom,width.value,height.value)
    });
    return {
      width: width,
      height: height
    };
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;

  var _ListCache = ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _ListCache;
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto$d = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$a = objectProto$d.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$d.toString;

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$a.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$c.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = _root['__core-js_shared__'];

  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto$b = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty$9).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }
    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */
  var Map = _getNative(_root, 'Map');

  var _Map = Map;

  /* Built-in method references that are verified to be native. */
  var nativeCreate = _getNative(Object, 'create');

  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED$1 ? undefined : result;
    }
    return hasOwnProperty$8.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;

  var _Hash = Hash;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash,
      'map': new (_Map || _ListCache),
      'string': new _Hash
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;

  var _MapCache = MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _ListCache) {
      var pairs = data.__data__;
      if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;

  var _Stack = Stack;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  var _arrayEach = arrayEach;

  var defineProperty = (function() {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty) {
      _defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var argsTag$2 = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag$2;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
    return isObjectLike_1(value) && hasOwnProperty$5.call(value, 'callee') &&
      !propertyIsEnumerable$1.call(value, 'callee');
  };

  var isArguments_1 = isArguments;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
  });

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag$4 = '[object Map]',
      numberTag$2 = '[object Number]',
      objectTag$2 = '[object Object]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$2 = '[object String]',
      weakMapTag$2 = '[object WeakMap]';

  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] =
  typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] =
  typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] =
  typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] =
  typedArrayTags[uint32Tag$2] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
  typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] =
  typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] =
  typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] =
  typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] =
  typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] =
  typedArrayTags[weakMapTag$2] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike_1(value) &&
      isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  });

  /* Node.js helper references. */
  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

  var isTypedArray_1 = isTypedArray;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$4.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             _isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeKeys = _overArg(Object.keys, Object);

  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && _copyObject(source, keys_1(source), object);
  }

  var _baseAssign = baseAssign;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }
    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssignIn(object, source) {
    return object && _copyObject(source, keysIn_1(source), object);
  }

  var _baseAssignIn = baseAssignIn;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  });

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  /** Used for built-in method references. */
  var objectProto$2 = Object.prototype;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return _arrayFilter(nativeGetSymbols$1(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };

  var _getSymbols = getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return _copyObject(source, _getSymbols(source), object);
  }

  var _copySymbols = copySymbols;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  var _arrayPush = arrayPush;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols;

  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbolsIn = !nativeGetSymbols ? stubArray_1 : function(object) {
    var result = [];
    while (object) {
      _arrayPush(result, _getSymbols(object));
      object = _getPrototype(object);
    }
    return result;
  };

  var _getSymbolsIn = getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbolsIn(source, object) {
    return _copyObject(source, _getSymbolsIn(source), object);
  }

  var _copySymbolsIn = copySymbolsIn;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeysIn(object) {
    return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn;

  /* Built-in method references that are verified to be native. */
  var DataView = _getNative(_root, 'DataView');

  var _DataView = DataView;

  /* Built-in method references that are verified to be native. */
  var Promise$1 = _getNative(_root, 'Promise');

  var _Promise = Promise$1;

  /* Built-in method references that are verified to be native. */
  var Set = _getNative(_root, 'Set');

  var _Set = Set;

  /* Built-in method references that are verified to be native. */
  var WeakMap = _getNative(_root, 'WeakMap');

  var _WeakMap = WeakMap;

  /** `Object#toString` result references. */
  var mapTag$3 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$3 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';

  var dataViewTag$2 = '[object DataView]';

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = _baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
  if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
      (_Map && getTag(new _Map) != mapTag$3) ||
      (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
      (_Set && getTag(new _Set) != setTag$3) ||
      (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
    getTag = function(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag$2;
          case mapCtorString: return mapTag$3;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag$3;
          case weakMapCtorString: return weakMapTag$1;
        }
      }
      return result;
    };
  }

  var _getTag = getTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty$1.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  var _initCloneArray = initCloneArray;

  /** Built-in value references. */
  var Uint8Array$1 = _root.Uint8Array;

  var _Uint8Array = Uint8Array$1;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp;

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /** `Object#toString` result references. */
  var boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$1 = '[object Symbol]';

  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag$1:
        return _cloneArrayBuffer(object);

      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);

      case dataViewTag$1:
        return _cloneDataView(object, isDeep);

      case float32Tag$1: case float64Tag$1:
      case int8Tag$1: case int16Tag$1: case int32Tag$1:
      case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
        return _cloneTypedArray(object, isDeep);

      case mapTag$2:
        return new Ctor;

      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);

      case regexpTag$1:
        return _cloneRegExp(object);

      case setTag$2:
        return new Ctor;

      case symbolTag$1:
        return _cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject_1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !_isPrototype(object))
      ? _baseCreate(_getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject;

  /** `Object#toString` result references. */
  var mapTag$1 = '[object Map]';

  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */
  function baseIsMap(value) {
    return isObjectLike_1(value) && _getTag(value) == mapTag$1;
  }

  var _baseIsMap = baseIsMap;

  /* Node.js helper references. */
  var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */
  var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

  var isMap_1 = isMap;

  /** `Object#toString` result references. */
  var setTag$1 = '[object Set]';

  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */
  function baseIsSet(value) {
    return isObjectLike_1(value) && _getTag(value) == setTag$1;
  }

  var _baseIsSet = baseIsSet;

  /* Node.js helper references. */
  var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */
  var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

  var isSet_1 = isSet;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG$1 = 4;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG$1,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject_1(value)) {
      return value;
    }
    var isArr = isArray_1(value);
    if (isArr) {
      result = _initCloneArray(value);
      if (!isDeep) {
        return _copyArray(value, result);
      }
    } else {
      var tag = _getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer_1(value)) {
        return _cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        result = (isFlat || isFunc) ? {} : _initCloneObject(value);
        if (!isDeep) {
          return isFlat
            ? _copySymbolsIn(value, _baseAssignIn(result, value))
            : _copySymbols(value, _baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = _initCloneByTag(value, tag, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new _Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (isSet_1(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap_1(value)) {
      value.forEach(function(subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
    }

    var keysFunc = isFull
      ? (isFlat ? _getAllKeysIn : _getAllKeys)
      : (isFlat ? keysIn_1 : keys_1);

    var props = isArr ? undefined : keysFunc(value);
    _arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone;

  /** Used to compose bitmasks for cloning. */
  var CLONE_DEEP_FLAG = 1,
      CLONE_SYMBOLS_FLAG = 4;

  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */
  function cloneDeep(value) {
    return _baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
  }

  var cloneDeep_1 = cloneDeep;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return _apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
    return _defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant_1(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = _shortOut(_baseSetToString);

  var _setToString = setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return _setToString(_overRest(func, start, identity_1), func + '');
  }

  var _baseRest = baseRest;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike_1(object) && _isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq_1(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return _baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object` and is loosely based on
   * [`Object.assign`](https://mdn.io/Object/assign).
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assignIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */
  var assign = _createAssigner(function(object, source) {
    if (_isPrototype(source) || isArrayLike_1(source)) {
      _copyObject(source, keys_1(source), object);
      return;
    }
    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        _assignValue(object, key, source[key]);
      }
    }
  });

  var assign_1 = assign;

  var defaultConfig = {
    //标题数据，格式['a','b','c']
    header: [],
    //标题样式,格式[{},{},{}]
    headerStyle: [],
    //行样式
    rowStyle: [],
    //行背景色
    rowBg: [],
    //标题背景色
    headerBg: 'rgb(90,90,90)',
    //标题的高度
    headerHeight: 35,
    //标题是否展示序号
    headerIndex: false,
    //序号列标题内容
    headerIndexContent: '#',
    //序号列标题样式
    headerIndexStyle: {
      width: '50px'
    },
    //序号列数据内容
    headerIndexData: [],
    //序号列内容样式
    rowIndexStyle: {
      width: '50px'
    },
    //数据项，二维数组
    data: [],
    //每页显示数据量
    rowNum: 10,
    //居中方式
    aligns: [],
    headerFontsize: 28,
    rowFontsize: 28,
    headerColor: '#fff',
    rowColor: '#000',
    //动画每次移动的位置
    moveNum: 1,
    //动画间隔时间
    duration: 1000
  };
  var script = {
    name: 'BaseScrollList',
    props: {
      config: {
        type: Object,
        "default": function _default() {
          return {};
        }
      }
    },
    setup: function setup(props) {
      var id = "base-scroll-list-".concat(v4());

      var _useScreen = useScreen(id),
          width = _useScreen.width,
          height = _useScreen.height;

      var actualConfig = vue.ref({}); //两个需要扩展的值

      var headerData = vue.ref([]);
      var headerStyle = vue.ref([]);
      var rowStyle = vue.ref([]);
      var columnWidths = vue.ref([]);
      var rowBg = vue.ref([]); //所有的数据

      var rowsData = vue.ref([]); //当前页面需要展示的数据

      var currentRowsData = vue.ref([]); //动画指针

      var currentIndex = vue.ref(0);
      var rowHeights = vue.ref([]);
      var rowNum = vue.ref(defaultConfig.rowNum); //对齐方式

      var aligns = vue.ref([]); //是否开启动画

      var isAnimationStart = vue.ref(true);
      var avgHeight; //处理header

      var handleHeader = function handleHeader(config) {
        //深拷贝                                    
        var _headerData = cloneDeep_1(config.headerData);

        var _headerStyle = cloneDeep_1(config.headerStyle);

        var _rowStyle = cloneDeep_1(config.rowStyle);

        var _rowsData = cloneDeep_1(config.data);

        var _algins = cloneDeep_1(config.aligns);

        if (_headerData.length == 0) {
          return;
        } //如果显示索引


        if (config.headerIndex) {
          _headerData.unshift(config.headerIndexContent);

          _headerStyle.unshift(config.headerIndexStyle);

          _rowStyle.unshift(config.rowIndexStyle);

          _rowsData.forEach(function (row, index) {
            //处理序号列的数据
            if (config.headerIndexData && config.headerIndexData.length > 0 && config.headerIndexData[index]) {
              row.unshift(config.headerIndexData[index]);
            } else {
              row.unshift(index + 1);
            }
          });

          _algins.unshift('center');
        } //动态计算header中每一列的宽度
        //已使用宽度


        var usedWidth = 0;
        var usedColumnNum = 0;

        _headerStyle.forEach(function (style) {
          if (style.width) {
            usedWidth += +style.width.replace('px', '');
            usedColumnNum++;
          }
        }); //分配剩余宽度,剩余宽度除以剩余列数


        var avgWidth = (width.value - usedWidth) / (_headerData.length - usedColumnNum);

        var _columnWidth = new Array(_headerData.length).fill(avgWidth);

        _headerStyle.forEach(function (style, index) {
          if (style.width) {
            var headerWidth = style.width.replace('px', '');
            _columnWidth[index] = headerWidth;
          }
        });

        columnWidths.value = _columnWidth;
        headerData.value = _headerData;
        headerStyle.value = _headerStyle;
        rowStyle.value = _rowStyle; //改变数据格式

        var rowNum = config.rowNum;

        if (_rowsData.length >= rowNum && _rowsData.length < rowNum * 2) {
          var newRowData = [].concat(_toConsumableArray(_rowsData), _toConsumableArray(_rowsData));
          rowsData.value = newRowData.map(function (item, index) {
            return {
              data: item,
              rowIndex: index
            };
          });
        } else {
          rowsData.value = _rowsData.map(function (item, index) {
            return {
              data: item,
              rowIndex: index
            };
          });
        }

        aligns.value = _algins; // console.log(_algins)
      }; //处理行


      var handleRows = function handleRows(config) {
        //动态计算行数据的高度
        var headerHeight = config.headerHeight; //实际行数

        rowNum.value = config.rowNum; //数据项总高度

        var unusedHeight = height.value - headerHeight; //展示的行数超出数据条数，则以数据为主

        if (rowNum.value > rowsData.value.length) {
          rowNum.value = rowsData.value.length;
        }

        avgHeight = unusedHeight / rowNum.value;
        rowHeights.value = new Array(rowNum.value).fill(avgHeight); //获取行背景色

        if (config.rowBg) {
          rowBg.value = config.rowBg;
        }
      }; //实现滑动动画


      var startAnimation = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          var config, rowNum, moveNum, duration, totalLength, index, _rowsData, rows, waitTime;

          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (isAnimationStart) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  //拿到config
                  config = actualConfig.value;
                  rowNum = config.rowNum, moveNum = config.moveNum, duration = config.duration;
                  totalLength = rowsData.value.length;

                  if (!(totalLength < rowNum)) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt("return");

                case 7:
                  //拿到动画指针
                  index = currentIndex.value;
                  _rowsData = cloneDeep_1(rowsData.value); //将数据重新头尾连接

                  rows = _rowsData.slice(index);
                  rows.push.apply(rows, _toConsumableArray(_rowsData.slice(0, index)));
                  currentRowsData.value = rows; //将所有行的高度还原

                  rowHeights.value = new Array(totalLength).fill(avgHeight); //sleep操作

                  waitTime = 300;

                  if (isAnimationStart) {
                    _context.next = 16;
                    break;
                  }

                  return _context.abrupt("return");

                case 16:
                  _context.next = 18;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, waitTime);
                  });

                case 18:
                  //将moveNum的行高度设为0
                  rowHeights.value.splice(0, moveNum, new Array(moveNum).fill(0));
                  currentIndex.value += moveNum;
                  currentIndex.value %= totalLength; // console.log(currentIndex.value)
                  //sleep操作

                  if (isAnimationStart) {
                    _context.next = 23;
                    break;
                  }

                  return _context.abrupt("return");

                case 23:
                  _context.next = 25;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, duration - waitTime);
                  });

                case 25:
                  _context.next = 27;
                  return startAnimation();

                case 27:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function startAnimation() {
          return _ref.apply(this, arguments);
        };
      }(); //关闭动画


      var stopAnimation = function stopAnimation() {
        isAnimationStart.value = false;
      }; //将更新独立封装


      var update = function update() {
        stopAnimation(); //通过lolash的assign函数合并

        var _actualConfig = assign_1(defaultConfig, props.config); //赋值rowsData


        rowsData.value = _actualConfig.data || []; // console.log(_actualConfig)

        handleHeader(_actualConfig);
        handleRows(_actualConfig);
        actualConfig.value = _actualConfig;
        isAnimationStart.value = true; //展示动画

        startAnimation();
      };

      vue.watch(function () {
        return props.config;
      }, function () {
        update();
      });
      return {
        id: id,
        headerData: headerData,
        headerStyle: headerStyle,
        columnWidths: columnWidths,
        rowsData: rowsData,
        currentRowsData: currentRowsData,
        rowHeights: rowHeights,
        rowStyle: rowStyle,
        rowBg: rowBg,
        aligns: aligns,
        actualConfig: actualConfig,
        height: height
      };
    }
  };

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var _hoisted_1 = ["id"];
  var _hoisted_2 = ["innerHTML", "align"];
  var _hoisted_3 = ["innerHTML", "align"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      "class": "base-scroll-list",
      id: $setup.id
    }, [vue.createElementVNode("div", {
      "class": "base-scroll-list-header",
      style: vue.normalizeStyle({
        backgroundColor: $setup.actualConfig.headerBg,
        height: "".concat($setup.actualConfig.headerHeight, "px"),
        fontSize: "".concat($setup.actualConfig.headerFontsize, "px"),
        color: $setup.actualConfig.headerColor
      })
    }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.headerData, function (headerItem, i) {
      return vue.openBlock(), vue.createElementBlock("div", {
        "class": "header-item base-scroll-list-text",
        key: headerItem + i,
        style: vue.normalizeStyle(_objectSpread({
          width: "".concat($setup.columnWidths[i], "px")
        }, $setup.headerStyle[i])),
        innerHTML: headerItem,
        align: $setup.aligns[i]
      }, null, 12
      /* STYLE, PROPS */
      , _hoisted_2);
    }), 128
    /* KEYED_FRAGMENT */
    ))], 4
    /* STYLE */
    ), vue.createElementVNode("div", {
      "class": "base-scroll-list-rows-wrapper",
      style: vue.normalizeStyle({
        height: "".concat($setup.height - $setup.actualConfig.headerHeight, "px")
      })
    }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($setup.currentRowsData, function (rowData, index) {
      return vue.openBlock(), vue.createElementBlock("div", {
        "class": "base-scroll-list-rows",
        key: rowData.rowIndex,
        style: vue.normalizeStyle({
          height: "".concat($setup.rowHeights[index], "px"),
          lineHeight: "".concat($setup.rowHeights[index], "px"),
          backgroundColor: rowData.rowIndex % 2 === 0 ? $setup.rowBg[1] : $setup.rowBg[0],
          fontSize: "".concat($setup.actualConfig.rowFontsize, "px"),
          color: $setup.actualConfig.rowColor
        })
      }, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(rowData.data, function (colData, colIndex) {
        return vue.openBlock(), vue.createElementBlock("div", {
          "class": "base-scroll-list-columns base-scroll-list-text",
          key: colData + colIndex,
          style: vue.normalizeStyle(_objectSpread({
            width: "".concat($setup.columnWidths[colIndex], "px")
          }, $setup.rowStyle[colIndex])),
          innerHTML: colData,
          align: $setup.aligns[colIndex]
        }, null, 12
        /* STYLE, PROPS */
        , _hoisted_3);
      }), 128
      /* KEYED_FRAGMENT */
      ))], 4
      /* STYLE */
      );
    }), 128
    /* KEYED_FRAGMENT */
    ))], 4
    /* STYLE */
    )], 8
    /* PROPS */
    , _hoisted_1);
  }

  var css_248z = ".base-scroll-list[data-v-69eed30f] {\n  width: 100%;\n  height: 100%;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-text[data-v-69eed30f] {\n  /*padding: 0 10px;*/\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-header[data-v-69eed30f] {\n  display: flex;\n  align-items: center;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-header[data-v-69eed30f] .header-item[data-v-69eed30f] {\n  width: 150px;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper[data-v-69eed30f] {\n  overflow: hidden;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper[data-v-69eed30f] .base-scroll-list-rows[data-v-69eed30f] {\n  display: flex;\n  align-items: center;\n  transition: all 0.3s linear;\n}\n.base-scroll-list[data-v-69eed30f] .base-scroll-list-rows-wrapper[data-v-69eed30f] .base-scroll-list-rows[data-v-69eed30f] .base-scroll-list-columns[data-v-69eed30f] {\n  height: 100%;\n}";
  styleInject(css_248z);

  script.render = render;
  script.__scopeId = "data-v-69eed30f";
  script.__file = "src/components/BaseScrollList/BaseScrollList.vue";

  function BaseScrollList (Vue) {
    Vue.component(script.name, script);
  }

  function index (Vue) {
    Vue.use(Test);
    Vue.use(Test2);
    Vue.use(Test3);
    Vue.use(Icon);
    Vue.use(SvgAnimation);
    Vue.use(ImoocLoading);
    Vue.use(ImoocFlyBox);
    Vue.use(Container);
    Vue.use(ImoocLogo);
    Vue.use(VueCountTo);
    Vue.use(VueEcharts);
    Vue.use(BaseScrollList);
  }

  return index;

}));
