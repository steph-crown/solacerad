/*
------------- Table of content ----------------
1.Avoid console js

2.wow.js
3.slick.min.js 
4.venobox.min.js
5.jquery.nice-select.min.js
6.waypoints.min.js
7.jquery.counterup.min.js
8.Isotope.min.js
9.scrollup js
10.jquery.appear.js



*/

/*====================================
  1.Avoid console 
=====================================*/
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeline",
        "timelineEnd",
        "timeStamp",
        "trace",
        "warn",
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// Place any jQuery/helper plugins in here.

/*====================================
    3.wow.js
   =====================================*/

/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */ !(function (a, b) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = { exports: {} };
        b(c, c.exports), (a.WOW = c.exports);
    }
})(this, function (a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
    }
    function d(a, b) {
        return b.indexOf(a) >= 0;
    }
    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d;
            }
        return a;
    }
    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            a
        );
    }
    function g(a) {
        var b =
                arguments.length <= 1 || void 0 === arguments[1]
                    ? !1
                    : arguments[1],
            c =
                arguments.length <= 2 || void 0 === arguments[2]
                    ? !1
                    : arguments[2],
            d =
                arguments.length <= 3 || void 0 === arguments[3]
                    ? null
                    : arguments[3],
            e = void 0;
        return (
            null != document.createEvent
                ? ((e = document.createEvent("CustomEvent")),
                  e.initCustomEvent(a, b, c, d))
                : null != document.createEventObject
                ? ((e = document.createEventObject()), (e.eventType = a))
                : (e.eventName = a),
            e
        );
    }
    function h(a, b) {
        null != a.dispatchEvent
            ? a.dispatchEvent(b)
            : b in (null != a)
            ? a[b]()
            : "on" + b in (null != a) && a["on" + b]();
    }
    function i(a, b, c) {
        null != a.addEventListener
            ? a.addEventListener(b, c, !1)
            : null != a.attachEvent
            ? a.attachEvent("on" + b, c)
            : (a[b] = c);
    }
    function j(a, b, c) {
        null != a.removeEventListener
            ? a.removeEventListener(b, c, !1)
            : null != a.detachEvent
            ? a.detachEvent("on" + b, c)
            : delete a[b];
    }
    function k() {
        return "innerHeight" in window
            ? window.innerHeight
            : document.documentElement.clientHeight;
    }
    Object.defineProperty(b, "__esModule", { value: !0 });
    var l,
        m,
        n = (function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    (d.enumerable = d.enumerable || !1),
                        (d.configurable = !0),
                        "value" in d && (d.writable = !0),
                        Object.defineProperty(a, d.key, d);
                }
            }
            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b;
            };
        })(),
        o =
            window.WeakMap ||
            window.MozWeakMap ||
            (function () {
                function a() {
                    c(this, a), (this.keys = []), (this.values = []);
                }
                return (
                    n(a, [
                        {
                            key: "get",
                            value: function (a) {
                                for (var b = 0; b < this.keys.length; b++) {
                                    var c = this.keys[b];
                                    if (c === a) return this.values[b];
                                }
                            },
                        },
                        {
                            key: "set",
                            value: function (a, b) {
                                for (var c = 0; c < this.keys.length; c++) {
                                    var d = this.keys[c];
                                    if (d === a)
                                        return (this.values[c] = b), this;
                                }
                                return (
                                    this.keys.push(a), this.values.push(b), this
                                );
                            },
                        },
                    ]),
                    a
                );
            })(),
        p =
            window.MutationObserver ||
            window.WebkitMutationObserver ||
            window.MozMutationObserver ||
            ((m = l =
                (function () {
                    function a() {
                        c(this, a),
                            "undefined" != typeof console &&
                                null !== console &&
                                (console.warn(
                                    "MutationObserver is not supported by your browser."
                                ),
                                console.warn(
                                    "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
                                ));
                    }
                    return n(a, [{ key: "observe", value: function () {} }]), a;
                })()),
            (l.notSupported = !0),
            m),
        q =
            window.getComputedStyle ||
            function (a) {
                var b = /(\-([a-z]){1})/g;
                return {
                    getPropertyValue: function (c) {
                        "float" === c && (c = "styleFloat"),
                            b.test(c) &&
                                c.replace(b, function (a, b) {
                                    return b.toUpperCase();
                                });
                        var d = a.currentStyle;
                        return (null != d ? d[c] : void 0) || null;
                    },
                };
            },
        r = (function () {
            function a() {
                var b =
                    arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0];
                c(this, a),
                    (this.defaults = {
                        boxClass: "wow",
                        animateClass: "animated",
                        offset: 0,
                        mobile: !0,
                        live: !0,
                        callback: null,
                        scrollContainer: null,
                        resetAnimation: !0,
                    }),
                    (this.animate = (function () {
                        return "requestAnimationFrame" in window
                            ? function (a) {
                                  return window.requestAnimationFrame(a);
                              }
                            : function (a) {
                                  return a();
                              };
                    })()),
                    (this.vendors = ["moz", "webkit"]),
                    (this.start = this.start.bind(this)),
                    (this.resetAnimation = this.resetAnimation.bind(this)),
                    (this.scrollHandler = this.scrollHandler.bind(this)),
                    (this.scrollCallback = this.scrollCallback.bind(this)),
                    (this.scrolled = !0),
                    (this.config = e(b, this.defaults)),
                    null != b.scrollContainer &&
                        (this.config.scrollContainer = document.querySelector(
                            b.scrollContainer
                        )),
                    (this.animationNameCache = new o()),
                    (this.wowEvent = g(this.config.boxClass));
            }
            return (
                n(a, [
                    {
                        key: "init",
                        value: function () {
                            (this.element = window.document.documentElement),
                                d(document.readyState, [
                                    "interactive",
                                    "complete",
                                ])
                                    ? this.start()
                                    : i(
                                          document,
                                          "DOMContentLoaded",
                                          this.start
                                      ),
                                (this.finished = []);
                        },
                    },
                    {
                        key: "start",
                        value: function () {
                            var a = this;
                            if (
                                ((this.stopped = !1),
                                (this.boxes = [].slice.call(
                                    this.element.querySelectorAll(
                                        "." + this.config.boxClass
                                    )
                                )),
                                (this.all = this.boxes.slice(0)),
                                this.boxes.length)
                            )
                                if (this.disabled()) this.resetStyle();
                                else
                                    for (
                                        var b = 0;
                                        b < this.boxes.length;
                                        b++
                                    ) {
                                        var c = this.boxes[b];
                                        this.applyStyle(c, !0);
                                    }
                            if (
                                (this.disabled() ||
                                    (i(
                                        this.config.scrollContainer || window,
                                        "scroll",
                                        this.scrollHandler
                                    ),
                                    i(window, "resize", this.scrollHandler),
                                    (this.interval = setInterval(
                                        this.scrollCallback,
                                        50
                                    ))),
                                this.config.live)
                            ) {
                                var d = new p(function (b) {
                                    for (var c = 0; c < b.length; c++)
                                        for (
                                            var d = b[c], e = 0;
                                            e < d.addedNodes.length;
                                            e++
                                        ) {
                                            var f = d.addedNodes[e];
                                            a.doSync(f);
                                        }
                                });
                                d.observe(document.body, {
                                    childList: !0,
                                    subtree: !0,
                                });
                            }
                        },
                    },
                    {
                        key: "stop",
                        value: function () {
                            (this.stopped = !0),
                                j(
                                    this.config.scrollContainer || window,
                                    "scroll",
                                    this.scrollHandler
                                ),
                                j(window, "resize", this.scrollHandler),
                                null != this.interval &&
                                    clearInterval(this.interval);
                        },
                    },
                    {
                        key: "sync",
                        value: function () {
                            p.notSupported && this.doSync(this.element);
                        },
                    },
                    {
                        key: "doSync",
                        value: function (a) {
                            if (
                                (("undefined" != typeof a && null !== a) ||
                                    (a = this.element),
                                1 === a.nodeType)
                            ) {
                                a = a.parentNode || a;
                                for (
                                    var b = a.querySelectorAll(
                                            "." + this.config.boxClass
                                        ),
                                        c = 0;
                                    c < b.length;
                                    c++
                                ) {
                                    var e = b[c];
                                    d(e, this.all) ||
                                        (this.boxes.push(e),
                                        this.all.push(e),
                                        this.stopped || this.disabled()
                                            ? this.resetStyle()
                                            : this.applyStyle(e, !0),
                                        (this.scrolled = !0));
                                }
                            }
                        },
                    },
                    {
                        key: "show",
                        value: function (a) {
                            return (
                                this.applyStyle(a),
                                (a.className =
                                    a.className +
                                    " " +
                                    this.config.animateClass),
                                null != this.config.callback &&
                                    this.config.callback(a),
                                h(a, this.wowEvent),
                                this.config.resetAnimation &&
                                    (i(a, "animationend", this.resetAnimation),
                                    i(a, "oanimationend", this.resetAnimation),
                                    i(
                                        a,
                                        "webkitAnimationEnd",
                                        this.resetAnimation
                                    ),
                                    i(
                                        a,
                                        "MSAnimationEnd",
                                        this.resetAnimation
                                    )),
                                a
                            );
                        },
                    },
                    {
                        key: "applyStyle",
                        value: function (a, b) {
                            var c = this,
                                d = a.getAttribute("data-wow-duration"),
                                e = a.getAttribute("data-wow-delay"),
                                f = a.getAttribute("data-wow-iteration");
                            return this.animate(function () {
                                return c.customStyle(a, b, d, e, f);
                            });
                        },
                    },
                    {
                        key: "resetStyle",
                        value: function () {
                            for (var a = 0; a < this.boxes.length; a++) {
                                var b = this.boxes[a];
                                b.style.visibility = "visible";
                            }
                        },
                    },
                    {
                        key: "resetAnimation",
                        value: function (a) {
                            if (
                                a.type.toLowerCase().indexOf("animationend") >=
                                0
                            ) {
                                var b = a.target || a.srcElement;
                                b.className = b.className
                                    .replace(this.config.animateClass, "")
                                    .trim();
                            }
                        },
                    },
                    {
                        key: "customStyle",
                        value: function (a, b, c, d, e) {
                            return (
                                b && this.cacheAnimationName(a),
                                (a.style.visibility = b ? "hidden" : "visible"),
                                c &&
                                    this.vendorSet(a.style, {
                                        animationDuration: c,
                                    }),
                                d &&
                                    this.vendorSet(a.style, {
                                        animationDelay: d,
                                    }),
                                e &&
                                    this.vendorSet(a.style, {
                                        animationIterationCount: e,
                                    }),
                                this.vendorSet(a.style, {
                                    animationName: b
                                        ? "none"
                                        : this.cachedAnimationName(a),
                                }),
                                a
                            );
                        },
                    },
                    {
                        key: "vendorSet",
                        value: function (a, b) {
                            for (var c in b)
                                if (b.hasOwnProperty(c)) {
                                    var d = b[c];
                                    a["" + c] = d;
                                    for (
                                        var e = 0;
                                        e < this.vendors.length;
                                        e++
                                    ) {
                                        var f = this.vendors[e];
                                        a[
                                            "" +
                                                f +
                                                c.charAt(0).toUpperCase() +
                                                c.substr(1)
                                        ] = d;
                                    }
                                }
                        },
                    },
                    {
                        key: "vendorCSS",
                        value: function (a, b) {
                            for (
                                var c = q(a),
                                    d = c.getPropertyCSSValue(b),
                                    e = 0;
                                e < this.vendors.length;
                                e++
                            ) {
                                var f = this.vendors[e];
                                d =
                                    d ||
                                    c.getPropertyCSSValue("-" + f + "-" + b);
                            }
                            return d;
                        },
                    },
                    {
                        key: "animationName",
                        value: function (a) {
                            var b = void 0;
                            try {
                                b = this.vendorCSS(a, "animation-name").cssText;
                            } catch (c) {
                                b = q(a).getPropertyValue("animation-name");
                            }
                            return "none" === b ? "" : b;
                        },
                    },
                    {
                        key: "cacheAnimationName",
                        value: function (a) {
                            return this.animationNameCache.set(
                                a,
                                this.animationName(a)
                            );
                        },
                    },
                    {
                        key: "cachedAnimationName",
                        value: function (a) {
                            return this.animationNameCache.get(a);
                        },
                    },
                    {
                        key: "scrollHandler",
                        value: function () {
                            this.scrolled = !0;
                        },
                    },
                    {
                        key: "scrollCallback",
                        value: function () {
                            if (this.scrolled) {
                                this.scrolled = !1;
                                for (
                                    var a = [], b = 0;
                                    b < this.boxes.length;
                                    b++
                                ) {
                                    var c = this.boxes[b];
                                    if (c) {
                                        if (this.isVisible(c)) {
                                            this.show(c);
                                            continue;
                                        }
                                        a.push(c);
                                    }
                                }
                                (this.boxes = a),
                                    this.boxes.length ||
                                        this.config.live ||
                                        this.stop();
                            }
                        },
                    },
                    {
                        key: "offsetTop",
                        value: function (a) {
                            for (; void 0 === a.offsetTop; ) a = a.parentNode;
                            for (var b = a.offsetTop; a.offsetParent; )
                                (a = a.offsetParent), (b += a.offsetTop);
                            return b;
                        },
                    },
                    {
                        key: "isVisible",
                        value: function (a) {
                            var b =
                                    a.getAttribute("data-wow-offset") ||
                                    this.config.offset,
                                c =
                                    (this.config.scrollContainer &&
                                        this.config.scrollContainer
                                            .scrollTop) ||
                                    window.pageYOffset,
                                d =
                                    c +
                                    Math.min(this.element.clientHeight, k()) -
                                    b,
                                e = this.offsetTop(a),
                                f = e + a.clientHeight;
                            return d >= e && f >= c;
                        },
                    },
                    {
                        key: "disabled",
                        value: function () {
                            return (
                                !this.config.mobile && f(navigator.userAgent)
                            );
                        },
                    },
                ]),
                a
            );
        })();
    (b["default"] = r), (a.exports = b["default"]);
});

/*====================================
    3.slick.min.js 
   =====================================*/
(function (factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports !== "undefined") {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
})(function ($) {
    "use strict";
    var Slick = window.Slick || {};
    Slick = (function () {
        var instanceUid = 0;
        function Slick(element, settings) {
            var _ = this,
                dataSettings;
            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3e3,
                centerMode: false,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: "slick-dots",
                draggable: true,
                easing: "linear",
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: false,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1e3,
            };
            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false,
            };
            $.extend(_, _.initials);
            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = "hidden";
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = "visibilitychange";
            _.windowWidth = 0;
            _.windowTimer = null;
            dataSettings = $(element).data("slick") || {};
            _.options = $.extend({}, _.defaults, settings, dataSettings);
            _.currentSlide = _.options.initialSlide;
            _.originalSettings = _.options;
            if (typeof document.mozHidden !== "undefined") {
                _.hidden = "mozHidden";
                _.visibilityChange = "mozvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                _.hidden = "webkitHidden";
                _.visibilityChange = "webkitvisibilitychange";
            }
            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);
            _.instanceUid = instanceUid++;
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            _.registerBreakpoints();
            _.init(true);
        }
        return Slick;
    })();
    Slick.prototype.activateADA = function () {
        var _ = this;
        _.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    };
    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (
        markup,
        index,
        addBefore
    ) {
        var _ = this;
        if (typeof index === "boolean") {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }
        _.unload();
        if (typeof index === "number") {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slides.each(function (index, element) {
            $(element).attr("data-slick-index", index);
        });
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (
            _.options.slidesToShow === 1 &&
            _.options.adaptiveHeight === true &&
            _.options.vertical === false
        ) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({ height: targetHeight }, _.options.speed);
        }
    };
    Slick.prototype.animateSlide = function (targetLeft, callback) {
        var animProps = {},
            _ = this;
        _.animateHeight();
        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate(
                    { left: targetLeft },
                    _.options.speed,
                    _.options.easing,
                    callback
                );
            } else {
                _.$slideTrack.animate(
                    { top: targetLeft },
                    _.options.speed,
                    _.options.easing,
                    callback
                );
            }
        } else {
            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({ animStart: _.currentLeft }).animate(
                    { animStart: targetLeft },
                    {
                        duration: _.options.speed,
                        easing: _.options.easing,
                        step: function (now) {
                            now = Math.ceil(now);
                            if (_.options.vertical === false) {
                                animProps[_.animType] =
                                    "translate(" + now + "px, 0px)";
                                _.$slideTrack.css(animProps);
                            } else {
                                animProps[_.animType] =
                                    "translate(0px," + now + "px)";
                                _.$slideTrack.css(animProps);
                            }
                        },
                        complete: function () {
                            if (callback) {
                                callback.call();
                            }
                        },
                    }
                );
            } else {
                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);
                if (_.options.vertical === false) {
                    animProps[_.animType] =
                        "translate3d(" + targetLeft + "px, 0px, 0px)";
                } else {
                    animProps[_.animType] =
                        "translate3d(0px," + targetLeft + "px, 0px)";
                }
                _.$slideTrack.css(animProps);
                if (callback) {
                    setTimeout(function () {
                        _.disableTransition();
                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };
    Slick.prototype.getNavTarget = function () {
        var _ = this,
            asNavFor = _.options.asNavFor;
        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }
        return asNavFor;
    };
    Slick.prototype.asNavFor = function (index) {
        var _ = this,
            asNavFor = _.getNavTarget();
        if (asNavFor !== null && typeof asNavFor === "object") {
            asNavFor.each(function () {
                var target = $(this).slick("getSlick");
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };
    Slick.prototype.applyTransition = function (slide) {
        var _ = this,
            transition = {};
        if (_.options.fade === false) {
            transition[_.transitionType] =
                _.transformType +
                " " +
                _.options.speed +
                "ms " +
                _.options.cssEase;
        } else {
            transition[_.transitionType] =
                "opacity " + _.options.speed + "ms " + _.options.cssEase;
        }
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.autoPlay = function () {
        var _ = this;
        _.autoPlayClear();
        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(
                _.autoPlayIterator,
                _.options.autoplaySpeed
            );
        }
    };
    Slick.prototype.autoPlayClear = function () {
        var _ = this;
        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };
    Slick.prototype.autoPlayIterator = function () {
        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;
        if (!_.paused && !_.interrupted && !_.focussed) {
            if (_.options.infinite === false) {
                if (
                    _.direction === 1 &&
                    _.currentSlide + 1 === _.slideCount - 1
                ) {
                    _.direction = 0;
                } else if (_.direction === 0) {
                    slideTo = _.currentSlide - _.options.slidesToScroll;
                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }
            _.slideHandler(slideTo);
        }
    };
    Slick.prototype.buildArrows = function () {
        var _ = this;
        if (_.options.arrows === true) {
            _.$prevArrow = $(_.options.prevArrow).addClass("slick-arrow");
            _.$nextArrow = $(_.options.nextArrow).addClass("slick-arrow");
            if (_.slideCount > _.options.slidesToShow) {
                _.$prevArrow
                    .removeClass("slick-hidden")
                    .removeAttr("aria-hidden tabindex");
                _.$nextArrow
                    .removeClass("slick-hidden")
                    .removeAttr("aria-hidden tabindex");
                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }
                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }
                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true");
                }
            } else {
                _.$prevArrow
                    .add(_.$nextArrow)
                    .addClass("slick-hidden")
                    .attr({ "aria-disabled": "true", tabindex: "-1" });
            }
        }
    };
    Slick.prototype.buildDots = function () {
        var _ = this,
            i,
            dot;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$slider.addClass("slick-dotted");
            dot = $("<ul />").addClass(_.options.dotsClass);
            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append(
                    $("<li />").append(_.options.customPaging.call(this, _, i))
                );
            }
            _.$dots = dot.appendTo(_.options.appendDots);
            _.$dots.find("li").first().addClass("slick-active");
        }
    };
    Slick.prototype.buildOut = function () {
        var _ = this;
        _.$slides = _.$slider
            .children(_.options.slide + ":not(.slick-cloned)")
            .addClass("slick-slide");
        _.slideCount = _.$slides.length;
        _.$slides.each(function (index, element) {
            $(element)
                .attr("data-slick-index", index)
                .data("originalStyling", $(element).attr("style") || "");
        });
        _.$slider.addClass("slick-slider");
        _.$slideTrack =
            _.slideCount === 0
                ? $('<div class="slick-track"/>').appendTo(_.$slider)
                : _.$slides.wrapAll('<div class="slick-track"/>').parent();
        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css("opacity", 0);
        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }
        $("img[data-lazy]", _.$slider).not("[src]").addClass("slick-loading");
        _.setupInfinite();
        _.buildArrows();
        _.buildDots();
        _.updateDots();
        _.setSlideClasses(
            typeof _.currentSlide === "number" ? _.currentSlide : 0
        );
        if (_.options.draggable === true) {
            _.$list.addClass("draggable");
        }
    };
    Slick.prototype.buildRows = function () {
        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;
        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();
        if (_.options.rows > 0) {
            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);
            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement("div");
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement("div");
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target =
                            a * slidesPerSection +
                            (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }
            _.$slider.empty().append(newSlides);
            _.$slider
                .children()
                .children()
                .children()
                .css({
                    width: 100 / _.options.slidesPerRow + "%",
                    display: "inline-block",
                });
        }
    };
    Slick.prototype.checkResponsive = function (initial, forceUpdate) {
        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();
        if (_.respondTo === "window") {
            respondToWidth = windowWidth;
        } else if (_.respondTo === "slider") {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === "min") {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }
        if (
            _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null
        ) {
            targetBreakpoint = null;
            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }
            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (
                        targetBreakpoint !== _.activeBreakpoint ||
                        forceUpdate
                    ) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (
                            _.breakpointSettings[targetBreakpoint] === "unslick"
                        ) {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend(
                                {},
                                _.originalSettings,
                                _.breakpointSettings[targetBreakpoint]
                            );
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === "unslick") {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend(
                            {},
                            _.originalSettings,
                            _.breakpointSettings[targetBreakpoint]
                        );
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger("breakpoint", [_, triggerBreakpoint]);
            }
        }
    };
    Slick.prototype.changeSlide = function (event, dontAnimate) {
        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;
        if ($target.is("a")) {
            event.preventDefault();
        }
        if (!$target.is("li")) {
            $target = $target.closest("li");
        }
        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset
            ? 0
            : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;
        switch (event.data.message) {
            case "previous":
                slideOffset =
                    indexOffset === 0
                        ? _.options.slidesToScroll
                        : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(
                        _.currentSlide - slideOffset,
                        false,
                        dontAnimate
                    );
                }
                break;
            case "next":
                slideOffset =
                    indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(
                        _.currentSlide + slideOffset,
                        false,
                        dontAnimate
                    );
                }
                break;
            case "index":
                var index =
                    event.data.index === 0
                        ? 0
                        : event.data.index ||
                          $target.index() * _.options.slidesToScroll;
                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger("focus");
                break;
            default:
                return;
        }
    };
    Slick.prototype.checkNavigable = function (index) {
        var _ = this,
            navigables,
            prevNavigable;
        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }
        return index;
    };
    Slick.prototype.cleanUpEvents = function () {
        var _ = this;
        if (_.options.dots && _.$dots !== null) {
            $("li", _.$dots)
                .off("click.slick", _.changeSlide)
                .off("mouseenter.slick", $.proxy(_.interrupt, _, true))
                .off("mouseleave.slick", $.proxy(_.interrupt, _, false));
            if (_.options.accessibility === true) {
                _.$dots.off("keydown.slick", _.keyHandler);
            }
        }
        _.$slider.off("focus.slick blur.slick");
        if (
            _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow
        ) {
            _.$prevArrow && _.$prevArrow.off("click.slick", _.changeSlide);
            _.$nextArrow && _.$nextArrow.off("click.slick", _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off("keydown.slick", _.keyHandler);
                _.$nextArrow && _.$nextArrow.off("keydown.slick", _.keyHandler);
            }
        }
        _.$list.off("touchstart.slick mousedown.slick", _.swipeHandler);
        _.$list.off("touchmove.slick mousemove.slick", _.swipeHandler);
        _.$list.off("touchend.slick mouseup.slick", _.swipeHandler);
        _.$list.off("touchcancel.slick mouseleave.slick", _.swipeHandler);
        _.$list.off("click.slick", _.clickHandler);
        $(document).off(_.visibilityChange, _.visibility);
        _.cleanUpSlideEvents();
        if (_.options.accessibility === true) {
            _.$list.off("keydown.slick", _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off("click.slick", _.selectHandler);
        }
        $(window).off(
            "orientationchange.slick.slick-" + _.instanceUid,
            _.orientationChange
        );
        $(window).off("resize.slick.slick-" + _.instanceUid, _.resize);
        $("[draggable!=true]", _.$slideTrack).off(
            "dragstart",
            _.preventDefault
        );
        $(window).off("load.slick.slick-" + _.instanceUid, _.setPosition);
    };
    Slick.prototype.cleanUpSlideEvents = function () {
        var _ = this;
        _.$list.off("mouseenter.slick", $.proxy(_.interrupt, _, true));
        _.$list.off("mouseleave.slick", $.proxy(_.interrupt, _, false));
    };
    Slick.prototype.cleanUpRows = function () {
        var _ = this,
            originalSlides;
        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr("style");
            _.$slider.empty().append(originalSlides);
        }
    };
    Slick.prototype.clickHandler = function (event) {
        var _ = this;
        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    Slick.prototype.destroy = function (refresh) {
        var _ = this;
        _.autoPlayClear();
        _.touchObject = {};
        _.cleanUpEvents();
        $(".slick-cloned", _.$slider).detach();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.$prevArrow.length) {
            _.$prevArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", "");
            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }
        if (_.$nextArrow && _.$nextArrow.length) {
            _.$nextArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", "");
            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }
        if (_.$slides) {
            _.$slides
                .removeClass(
                    "slick-slide slick-active slick-center slick-visible slick-current"
                )
                .removeAttr("aria-hidden")
                .removeAttr("data-slick-index")
                .each(function () {
                    $(this).attr("style", $(this).data("originalStyling"));
                });
            _.$slideTrack.children(this.options.slide).detach();
            _.$slideTrack.detach();
            _.$list.detach();
            _.$slider.append(_.$slides);
        }
        _.cleanUpRows();
        _.$slider.removeClass("slick-slider");
        _.$slider.removeClass("slick-initialized");
        _.$slider.removeClass("slick-dotted");
        _.unslicked = true;
        if (!refresh) {
            _.$slider.trigger("destroy", [_]);
        }
    };
    Slick.prototype.disableTransition = function (slide) {
        var _ = this,
            transition = {};
        transition[_.transitionType] = "";
        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };
    Slick.prototype.fadeSlide = function (slideIndex, callback) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides.eq(slideIndex).css({ zIndex: _.options.zIndex });
            _.$slides
                .eq(slideIndex)
                .animate(
                    { opacity: 1 },
                    _.options.speed,
                    _.options.easing,
                    callback
                );
        } else {
            _.applyTransition(slideIndex);
            _.$slides
                .eq(slideIndex)
                .css({ opacity: 1, zIndex: _.options.zIndex });
            if (callback) {
                setTimeout(function () {
                    _.disableTransition(slideIndex);
                    callback.call();
                }, _.options.speed);
            }
        }
    };
    Slick.prototype.fadeSlideOut = function (slideIndex) {
        var _ = this;
        if (_.cssTransitions === false) {
            _.$slides
                .eq(slideIndex)
                .animate(
                    { opacity: 0, zIndex: _.options.zIndex - 2 },
                    _.options.speed,
                    _.options.easing
                );
        } else {
            _.applyTransition(slideIndex);
            _.$slides
                .eq(slideIndex)
                .css({ opacity: 0, zIndex: _.options.zIndex - 2 });
        }
    };
    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (
        filter
    ) {
        var _ = this;
        if (filter !== null) {
            _.$slidesCache = _.$slides;
            _.unload();
            _.$slideTrack.children(this.options.slide).detach();
            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
            _.reinit();
        }
    };
    Slick.prototype.focusHandler = function () {
        var _ = this;
        _.$slider
            .off("focus.slick blur.slick")
            .on("focus.slick", "*", function (event) {
                var $sf = $(this);
                setTimeout(function () {
                    if (_.options.pauseOnFocus) {
                        if ($sf.is(":focus")) {
                            _.focussed = true;
                            _.autoPlay();
                        }
                    }
                }, 0);
            })
            .on("blur.slick", "*", function (event) {
                var $sf = $(this);
                if (_.options.pauseOnFocus) {
                    _.focussed = false;
                    _.autoPlay();
                }
            });
    };
    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide =
        function () {
            var _ = this;
            return _.currentSlide;
        };
    Slick.prototype.getDotCount = function () {
        var _ = this;
        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;
        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter +=
                        _.options.slidesToScroll <= _.options.slidesToShow
                            ? _.options.slidesToScroll
                            : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty =
                1 +
                Math.ceil(
                    (_.slideCount - _.options.slidesToShow) /
                        _.options.slidesToScroll
                );
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter +=
                    _.options.slidesToScroll <= _.options.slidesToShow
                        ? _.options.slidesToScroll
                        : _.options.slidesToShow;
            }
        }
        return pagerQty - 1;
    };
    Slick.prototype.getLeft = function (slideIndex) {
        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;
        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);
        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1;
                if (
                    _.options.vertical === true &&
                    _.options.centerMode === true
                ) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2;
                    }
                }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (
                    slideIndex + _.options.slidesToScroll > _.slideCount &&
                    _.slideCount > _.options.slidesToShow
                ) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset =
                            (_.options.slidesToShow -
                                (slideIndex - _.slideCount)) *
                            _.slideWidth *
                            -1;
                        verticalOffset =
                            (_.options.slidesToShow -
                                (slideIndex - _.slideCount)) *
                            verticalHeight *
                            -1;
                    } else {
                        _.slideOffset =
                            (_.slideCount % _.options.slidesToScroll) *
                            _.slideWidth *
                            -1;
                        verticalOffset =
                            (_.slideCount % _.options.slidesToScroll) *
                            verticalHeight *
                            -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset =
                    (slideIndex + _.options.slidesToShow - _.slideCount) *
                    _.slideWidth;
                verticalOffset =
                    (slideIndex + _.options.slidesToShow - _.slideCount) *
                    verticalHeight;
            }
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }
        if (
            _.options.centerMode === true &&
            _.slideCount <= _.options.slidesToShow
        ) {
            _.slideOffset =
                (_.slideWidth * Math.floor(_.options.slidesToShow)) / 2 -
                (_.slideWidth * _.slideCount) / 2;
        } else if (
            _.options.centerMode === true &&
            _.options.infinite === true
        ) {
            _.slideOffset +=
                _.slideWidth * Math.floor(_.options.slidesToShow / 2) -
                _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset +=
                _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }
        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }
        if (_.options.variableWidth === true) {
            if (
                _.slideCount <= _.options.slidesToShow ||
                _.options.infinite === false
            ) {
                targetSlide = _.$slideTrack
                    .children(".slick-slide")
                    .eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack
                    .children(".slick-slide")
                    .eq(slideIndex + _.options.slidesToShow);
            }
            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft =
                        (_.$slideTrack.width() -
                            targetSlide[0].offsetLeft -
                            targetSlide.width()) *
                        -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0]
                    ? targetSlide[0].offsetLeft * -1
                    : 0;
            }
            if (_.options.centerMode === true) {
                if (
                    _.slideCount <= _.options.slidesToShow ||
                    _.options.infinite === false
                ) {
                    targetSlide = _.$slideTrack
                        .children(".slick-slide")
                        .eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack
                        .children(".slick-slide")
                        .eq(slideIndex + _.options.slidesToShow + 1);
                }
                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft =
                            (_.$slideTrack.width() -
                                targetSlide[0].offsetLeft -
                                targetSlide.width()) *
                            -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0]
                        ? targetSlide[0].offsetLeft * -1
                        : 0;
                }
                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }
        return targetLeft;
    };
    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (
        option
    ) {
        var _ = this;
        return _.options[option];
    };
    Slick.prototype.getNavigableIndexes = function () {
        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;
        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }
        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter +=
                _.options.slidesToScroll <= _.options.slidesToShow
                    ? _.options.slidesToScroll
                    : _.options.slidesToShow;
        }
        return indexes;
    };
    Slick.prototype.getSlick = function () {
        return this;
    };
    Slick.prototype.getSlideCount = function () {
        var _ = this,
            slidesTraversed,
            swipedSlide,
            swipeTarget,
            centerOffset;
        centerOffset =
            _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = _.swipeLeft * -1 + centerOffset;
        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find(".slick-slide").each(function (index, slide) {
                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== true) {
                    slideOffset += slideOuterWidth / 2;
                }
                slideRightBoundary = slideOffset + slideOuterWidth;
                if (swipeTarget < slideRightBoundary) {
                    swipedSlide = slide;
                    return false;
                }
            });
            slidesTraversed =
                Math.abs(
                    $(swipedSlide).attr("data-slick-index") - _.currentSlide
                ) || 1;
            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };
    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (
        slide,
        dontAnimate
    ) {
        var _ = this;
        _.changeSlide(
            { data: { message: "index", index: parseInt(slide) } },
            dontAnimate
        );
    };
    Slick.prototype.init = function (creation) {
        var _ = this;
        if (!$(_.$slider).hasClass("slick-initialized")) {
            $(_.$slider).addClass("slick-initialized");
            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }
        if (creation) {
            _.$slider.trigger("init", [_]);
        }
        if (_.options.accessibility === true) {
            _.initADA();
        }
        if (_.options.autoplay) {
            _.paused = false;
            _.autoPlay();
        }
    };
    Slick.prototype.initADA = function () {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
                return val >= 0 && val < _.slideCount;
            });
        _.$slides
            .add(_.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" });
        if (_.$dots !== null) {
            _.$slides
                .not(_.$slideTrack.find(".slick-cloned"))
                .each(function (i) {
                    var slideControlIndex = tabControlIndexes.indexOf(i);
                    $(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + _.instanceUid + i,
                        tabindex: -1,
                    });
                    if (slideControlIndex !== -1) {
                        var ariaButtonControl =
                            "slick-slide-control" +
                            _.instanceUid +
                            slideControlIndex;
                        if ($("#" + ariaButtonControl).length) {
                            $(this).attr({
                                "aria-describedby": ariaButtonControl,
                            });
                        }
                    }
                });
            _.$dots
                .attr("role", "tablist")
                .find("li")
                .each(function (i) {
                    var mappedSlideIndex = tabControlIndexes[i];
                    $(this).attr({ role: "presentation" });
                    $(this)
                        .find("button")
                        .first()
                        .attr({
                            role: "tab",
                            id: "slick-slide-control" + _.instanceUid + i,
                            "aria-controls":
                                "slick-slide" +
                                _.instanceUid +
                                mappedSlideIndex,
                            "aria-label": i + 1 + " of " + numDotGroups,
                            "aria-selected": null,
                            tabindex: "-1",
                        });
                })
                .eq(_.currentSlide)
                .find("button")
                .attr({ "aria-selected": "true", tabindex: "0" })
                .end();
        }
        for (
            var i = _.currentSlide, max = i + _.options.slidesToShow;
            i < max;
            i++
        ) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({ tabindex: "0" });
            } else {
                _.$slides.eq(i).removeAttr("tabindex");
            }
        }
        _.activateADA();
    };
    Slick.prototype.initArrowEvents = function () {
        var _ = this;
        if (
            _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow
        ) {
            _.$prevArrow
                .off("click.slick")
                .on("click.slick", { message: "previous" }, _.changeSlide);
            _.$nextArrow
                .off("click.slick")
                .on("click.slick", { message: "next" }, _.changeSlide);
            if (_.options.accessibility === true) {
                _.$prevArrow.on("keydown.slick", _.keyHandler);
                _.$nextArrow.on("keydown.slick", _.keyHandler);
            }
        }
    };
    Slick.prototype.initDotEvents = function () {
        var _ = this;
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $("li", _.$dots).on(
                "click.slick",
                { message: "index" },
                _.changeSlide
            );
            if (_.options.accessibility === true) {
                _.$dots.on("keydown.slick", _.keyHandler);
            }
        }
        if (
            _.options.dots === true &&
            _.options.pauseOnDotsHover === true &&
            _.slideCount > _.options.slidesToShow
        ) {
            $("li", _.$dots)
                .on("mouseenter.slick", $.proxy(_.interrupt, _, true))
                .on("mouseleave.slick", $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initSlideEvents = function () {
        var _ = this;
        if (_.options.pauseOnHover) {
            _.$list.on("mouseenter.slick", $.proxy(_.interrupt, _, true));
            _.$list.on("mouseleave.slick", $.proxy(_.interrupt, _, false));
        }
    };
    Slick.prototype.initializeEvents = function () {
        var _ = this;
        _.initArrowEvents();
        _.initDotEvents();
        _.initSlideEvents();
        _.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            _.swipeHandler
        );
        _.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            _.swipeHandler
        );
        _.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            _.swipeHandler
        );
        _.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            _.swipeHandler
        );
        _.$list.on("click.slick", _.clickHandler);
        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
        if (_.options.accessibility === true) {
            _.$list.on("keydown.slick", _.keyHandler);
        }
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on("click.slick", _.selectHandler);
        }
        $(window).on(
            "orientationchange.slick.slick-" + _.instanceUid,
            $.proxy(_.orientationChange, _)
        );
        $(window).on(
            "resize.slick.slick-" + _.instanceUid,
            $.proxy(_.resize, _)
        );
        $("[draggable!=true]", _.$slideTrack).on("dragstart", _.preventDefault);
        $(window).on("load.slick.slick-" + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };
    Slick.prototype.initUI = function () {
        var _ = this;
        if (
            _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow
        ) {
            _.$prevArrow.show();
            _.$nextArrow.show();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.show();
        }
    };
    Slick.prototype.keyHandler = function (event) {
        var _ = this;
        if (!event.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? "next" : "previous",
                    },
                });
            } else if (
                event.keyCode === 39 &&
                _.options.accessibility === true
            ) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? "previous" : "next",
                    },
                });
            }
        }
    };
    Slick.prototype.lazyLoad = function () {
        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;
        function loadImages(imagesScope) {
            $("img[data-lazy]", imagesScope).each(function () {
                var image = $(this),
                    imageSource = $(this).attr("data-lazy"),
                    imageSrcSet = $(this).attr("data-srcset"),
                    imageSizes =
                        $(this).attr("data-sizes") ||
                        _.$slider.attr("data-sizes"),
                    imageToLoad = document.createElement("img");
                imageToLoad.onload = function () {
                    image.animate({ opacity: 0 }, 100, function () {
                        if (imageSrcSet) {
                            image.attr("srcset", imageSrcSet);
                            if (imageSizes) {
                                image.attr("sizes", imageSizes);
                            }
                        }
                        image
                            .attr("src", imageSource)
                            .animate({ opacity: 1 }, 200, function () {
                                image
                                    .removeAttr(
                                        "data-lazy data-srcset data-sizes"
                                    )
                                    .removeClass("slick-loading");
                            });
                        _.$slider.trigger("lazyLoaded", [
                            _,
                            image,
                            imageSource,
                        ]);
                    });
                };
                imageToLoad.onerror = function () {
                    image
                        .removeAttr("data-lazy")
                        .removeClass("slick-loading")
                        .addClass("slick-lazyload-error");
                    _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
                };
                imageToLoad.src = imageSource;
            });
        }
        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(
                    0,
                    _.currentSlide - (_.options.slidesToShow / 2 + 1)
                );
                rangeEnd =
                    2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite
                ? _.options.slidesToShow + _.currentSlide
                : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }
        loadRange = _.$slider.find(".slick-slide").slice(rangeStart, rangeEnd);
        if (_.options.lazyLoad === "anticipated") {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find(".slick-slide");
            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }
        loadImages(loadRange);
        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find(".slick-slide");
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider
                .find(".slick-cloned")
                .slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider
                .find(".slick-cloned")
                .slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };
    Slick.prototype.loadSlider = function () {
        var _ = this;
        _.setPosition();
        _.$slideTrack.css({ opacity: 1 });
        _.$slider.removeClass("slick-loading");
        _.initUI();
        if (_.options.lazyLoad === "progressive") {
            _.progressiveLazyLoad();
        }
    };
    Slick.prototype.next = Slick.prototype.slickNext = function () {
        var _ = this;
        _.changeSlide({ data: { message: "next" } });
    };
    Slick.prototype.orientationChange = function () {
        var _ = this;
        _.checkResponsive();
        _.setPosition();
    };
    Slick.prototype.pause = Slick.prototype.slickPause = function () {
        var _ = this;
        _.autoPlayClear();
        _.paused = true;
    };
    Slick.prototype.play = Slick.prototype.slickPlay = function () {
        var _ = this;
        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };
    Slick.prototype.postSlide = function (index) {
        var _ = this;
        if (!_.unslicked) {
            _.$slider.trigger("afterChange", [_, index]);
            _.animating = false;
            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }
            _.swipeLeft = null;
            if (_.options.autoplay) {
                _.autoPlay();
            }
            if (_.options.accessibility === true) {
                _.initADA();
                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr("tabindex", 0).focus();
                }
            }
        }
    };
    Slick.prototype.prev = Slick.prototype.slickPrev = function () {
        var _ = this;
        _.changeSlide({ data: { message: "previous" } });
    };
    Slick.prototype.preventDefault = function (event) {
        event.preventDefault();
    };
    Slick.prototype.progressiveLazyLoad = function (tryCount) {
        tryCount = tryCount || 1;
        var _ = this,
            $imgsToLoad = $("img[data-lazy]", _.$slider),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;
        if ($imgsToLoad.length) {
            image = $imgsToLoad.first();
            imageSource = image.attr("data-lazy");
            imageSrcSet = image.attr("data-srcset");
            imageSizes =
                image.attr("data-sizes") || _.$slider.attr("data-sizes");
            imageToLoad = document.createElement("img");
            imageToLoad.onload = function () {
                if (imageSrcSet) {
                    image.attr("srcset", imageSrcSet);
                    if (imageSizes) {
                        image.attr("sizes", imageSizes);
                    }
                }
                image
                    .attr("src", imageSource)
                    .removeAttr("data-lazy data-srcset data-sizes")
                    .removeClass("slick-loading");
                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }
                _.$slider.trigger("lazyLoaded", [_, image, imageSource]);
                _.progressiveLazyLoad();
            };
            imageToLoad.onerror = function () {
                if (tryCount < 3) {
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {
                    image
                        .removeAttr("data-lazy")
                        .removeClass("slick-loading")
                        .addClass("slick-lazyload-error");
                    _.$slider.trigger("lazyLoadError", [_, image, imageSource]);
                    _.progressiveLazyLoad();
                }
            };
            imageToLoad.src = imageSource;
        } else {
            _.$slider.trigger("allImagesLoaded", [_]);
        }
    };
    Slick.prototype.refresh = function (initializing) {
        var _ = this,
            currentSlide,
            lastVisibleIndex;
        lastVisibleIndex = _.slideCount - _.options.slidesToShow;
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        currentSlide = _.currentSlide;
        _.destroy(true);
        $.extend(_, _.initials, { currentSlide: currentSlide });
        _.init();
        if (!initializing) {
            _.changeSlide(
                { data: { message: "index", index: currentSlide } },
                false
            );
        }
    };
    Slick.prototype.registerBreakpoints = function () {
        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;
        if (
            $.type(responsiveSettings) === "array" &&
            responsiveSettings.length
        ) {
            _.respondTo = _.options.respondTo || "window";
            for (breakpoint in responsiveSettings) {
                l = _.breakpoints.length - 1;
                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint =
                        responsiveSettings[breakpoint].breakpoint;
                    while (l >= 0) {
                        if (
                            _.breakpoints[l] &&
                            _.breakpoints[l] === currentBreakpoint
                        ) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }
                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] =
                        responsiveSettings[breakpoint].settings;
                }
            }
            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };
    Slick.prototype.reinit = function () {
        var _ = this;
        _.$slides = _.$slideTrack
            .children(_.options.slide)
            .addClass("slick-slide");
        _.slideCount = _.$slides.length;
        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }
        _.registerBreakpoints();
        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();
        _.checkResponsive(false, true);
        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on("click.slick", _.selectHandler);
        }
        _.setSlideClasses(
            typeof _.currentSlide === "number" ? _.currentSlide : 0
        );
        _.setPosition();
        _.focusHandler();
        _.paused = !_.options.autoplay;
        _.autoPlay();
        _.$slider.trigger("reInit", [_]);
    };
    Slick.prototype.resize = function () {
        var _ = this;
        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };
    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (
        index,
        removeBefore,
        removeAll
    ) {
        var _ = this;
        if (typeof index === "boolean") {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }
        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }
        _.unload();
        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }
        _.$slides = _.$slideTrack.children(this.options.slide);
        _.$slideTrack.children(this.options.slide).detach();
        _.$slideTrack.append(_.$slides);
        _.$slidesCache = _.$slides;
        _.reinit();
    };
    Slick.prototype.setCSS = function (position) {
        var _ = this,
            positionProps = {},
            x,
            y;
        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == "left" ? Math.ceil(position) + "px" : "0px";
        y = _.positionProp == "top" ? Math.ceil(position) + "px" : "0px";
        positionProps[_.positionProp] = position;
        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = "translate(" + x + ", " + y + ")";
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] =
                    "translate3d(" + x + ", " + y + ", 0px)";
                _.$slideTrack.css(positionProps);
            }
        }
    };
    Slick.prototype.setDimensions = function () {
        var _ = this;
        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({ padding: "0px " + _.options.centerPadding });
            }
        } else {
            _.$list.height(
                _.$slides.first().outerHeight(true) * _.options.slidesToShow
            );
            if (_.options.centerMode === true) {
                _.$list.css({ padding: _.options.centerPadding + " 0px" });
            }
        }
        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();
        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(
                Math.ceil(
                    _.slideWidth * _.$slideTrack.children(".slick-slide").length
                )
            );
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5e3 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(
                Math.ceil(
                    _.$slides.first().outerHeight(true) *
                        _.$slideTrack.children(".slick-slide").length
                )
            );
        }
        var offset =
            _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false)
            _.$slideTrack.children(".slick-slide").width(_.slideWidth - offset);
    };
    Slick.prototype.setFade = function () {
        var _ = this,
            targetLeft;
        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: "relative",
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0,
                });
            } else {
                $(element).css({
                    position: "relative",
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0,
                });
            }
        });
        _.$slides
            .eq(_.currentSlide)
            .css({ zIndex: _.options.zIndex - 1, opacity: 1 });
    };
    Slick.prototype.setHeight = function () {
        var _ = this;
        if (
            _.options.slidesToShow === 1 &&
            _.options.adaptiveHeight === true &&
            _.options.vertical === false
        ) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css("height", targetHeight);
        }
    };
    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;
        if ($.type(arguments[0]) === "object") {
            option = arguments[0];
            refresh = arguments[1];
            type = "multiple";
        } else if ($.type(arguments[0]) === "string") {
            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];
            if (
                arguments[0] === "responsive" &&
                $.type(arguments[1]) === "array"
            ) {
                type = "responsive";
            } else if (typeof arguments[1] !== "undefined") {
                type = "single";
            }
        }
        if (type === "single") {
            _.options[option] = value;
        } else if (type === "multiple") {
            $.each(option, function (opt, val) {
                _.options[opt] = val;
            });
        } else if (type === "responsive") {
            for (item in value) {
                if ($.type(_.options.responsive) !== "array") {
                    _.options.responsive = [value[item]];
                } else {
                    l = _.options.responsive.length - 1;
                    while (l >= 0) {
                        if (
                            _.options.responsive[l].breakpoint ===
                            value[item].breakpoint
                        ) {
                            _.options.responsive.splice(l, 1);
                        }
                        l--;
                    }
                    _.options.responsive.push(value[item]);
                }
            }
        }
        if (refresh) {
            _.unload();
            _.reinit();
        }
    };
    Slick.prototype.setPosition = function () {
        var _ = this;
        _.setDimensions();
        _.setHeight();
        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }
        _.$slider.trigger("setPosition", [_]);
    };
    Slick.prototype.setProps = function () {
        var _ = this,
            bodyStyle = document.body.style;
        _.positionProp = _.options.vertical === true ? "top" : "left";
        if (_.positionProp === "top") {
            _.$slider.addClass("slick-vertical");
        } else {
            _.$slider.removeClass("slick-vertical");
        }
        if (
            bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined
        ) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }
        if (_.options.fade) {
            if (typeof _.options.zIndex === "number") {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }
        if (bodyStyle.OTransform !== undefined) {
            _.animType = "OTransform";
            _.transformType = "-o-transform";
            _.transitionType = "OTransition";
            if (
                bodyStyle.perspectiveProperty === undefined &&
                bodyStyle.webkitPerspective === undefined
            )
                _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = "MozTransform";
            _.transformType = "-moz-transform";
            _.transitionType = "MozTransition";
            if (
                bodyStyle.perspectiveProperty === undefined &&
                bodyStyle.MozPerspective === undefined
            )
                _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = "webkitTransform";
            _.transformType = "-webkit-transform";
            _.transitionType = "webkitTransition";
            if (
                bodyStyle.perspectiveProperty === undefined &&
                bodyStyle.webkitPerspective === undefined
            )
                _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = "msTransform";
            _.transformType = "-ms-transform";
            _.transitionType = "msTransition";
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = "transform";
            _.transformType = "transform";
            _.transitionType = "transition";
        }
        _.transformsEnabled =
            _.options.useTransform &&
            _.animType !== null &&
            _.animType !== false;
    };
    Slick.prototype.setSlideClasses = function (index) {
        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;
        allSlides = _.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true");
        _.$slides.eq(index).addClass("slick-current");
        if (_.options.centerMode === true) {
            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
            centerOffset = Math.floor(_.options.slidesToShow / 2);
            if (_.options.infinite === true) {
                if (
                    index >= centerOffset &&
                    index <= _.slideCount - 1 - centerOffset
                ) {
                    _.$slides
                        .slice(
                            index - centerOffset + evenCoef,
                            index + centerOffset + 1
                        )
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                } else {
                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(
                            indexOffset - centerOffset + 1 + evenCoef,
                            indexOffset + centerOffset + 2
                        )
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                }
                if (index === 0) {
                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass("slick-center");
                } else if (index === _.slideCount - 1) {
                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass("slick-center");
                }
            }
            _.$slides.eq(index).addClass("slick-center");
        } else {
            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false");
            } else if (allSlides.length <= _.options.slidesToShow) {
                allSlides.addClass("slick-active").attr("aria-hidden", "false");
            } else {
                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset =
                    _.options.infinite === true
                        ? _.options.slidesToShow + index
                        : index;
                if (
                    _.options.slidesToShow == _.options.slidesToScroll &&
                    _.slideCount - index < _.options.slidesToShow
                ) {
                    allSlides
                        .slice(
                            indexOffset - (_.options.slidesToShow - remainder),
                            indexOffset + remainder
                        )
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                } else {
                    allSlides
                        .slice(
                            indexOffset,
                            indexOffset + _.options.slidesToShow
                        )
                        .addClass("slick-active")
                        .attr("aria-hidden", "false");
                }
            }
        }
        if (
            _.options.lazyLoad === "ondemand" ||
            _.options.lazyLoad === "anticipated"
        ) {
            _.lazyLoad();
        }
    };
    Slick.prototype.setupInfinite = function () {
        var _ = this,
            i,
            slideIndex,
            infiniteCount;
        if (_.options.fade === true) {
            _.options.centerMode = false;
        }
        if (_.options.infinite === true && _.options.fade === false) {
            slideIndex = null;
            if (_.slideCount > _.options.slidesToShow) {
                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }
                for (
                    i = _.slideCount;
                    i > _.slideCount - infiniteCount;
                    i -= 1
                ) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex])
                        .clone(true)
                        .attr("id", "")
                        .attr("data-slick-index", slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack)
                        .addClass("slick-cloned");
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex])
                        .clone(true)
                        .attr("id", "")
                        .attr("data-slick-index", slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack)
                        .addClass("slick-cloned");
                }
                _.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        $(this).attr("id", "");
                    });
            }
        }
    };
    Slick.prototype.interrupt = function (toggle) {
        var _ = this;
        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };
    Slick.prototype.selectHandler = function (event) {
        var _ = this;
        var targetElement = $(event.target).is(".slick-slide")
            ? $(event.target)
            : $(event.target).parents(".slick-slide");
        var index = parseInt(targetElement.attr("data-slick-index"));
        if (!index) index = 0;
        if (_.slideCount <= _.options.slidesToShow) {
            _.slideHandler(index, false, true);
            return;
        }
        _.slideHandler(index);
    };
    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;
        sync = sync || false;
        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }
        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }
        if (sync === false) {
            _.asNavFor(index);
        }
        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);
        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;
        if (
            _.options.infinite === false &&
            _.options.centerMode === false &&
            (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)
        ) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (
                    dontAnimate !== true &&
                    _.slideCount > _.options.slidesToShow
                ) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (
            _.options.infinite === false &&
            _.options.centerMode === true &&
            (index < 0 || index > _.slideCount - _.options.slidesToScroll)
        ) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (
                    dontAnimate !== true &&
                    _.slideCount > _.options.slidesToShow
                ) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }
        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }
        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide =
                    _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }
        _.animating = true;
        _.$slider.trigger("beforeChange", [_, _.currentSlide, animSlide]);
        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;
        _.setSlideClasses(_.currentSlide);
        if (_.options.asNavFor) {
            navTarget = _.getNavTarget();
            navTarget = navTarget.slick("getSlick");
            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }
        _.updateDots();
        _.updateArrows();
        if (_.options.fade === true) {
            if (dontAnimate !== true) {
                _.fadeSlideOut(oldSlide);
                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }
        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };
    Slick.prototype.startLoad = function () {
        var _ = this;
        if (
            _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow
        ) {
            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }
        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            _.$dots.hide();
        }
        _.$slider.addClass("slick-loading");
    };
    Slick.prototype.swipeDirection = function () {
        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;
        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);
        swipeAngle = Math.round((r * 180) / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }
        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? "left" : "right";
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? "left" : "right";
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? "right" : "left";
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return "down";
            } else {
                return "up";
            }
        }
        return "vertical";
    };
    Slick.prototype.swipeEnd = function (event) {
        var _ = this,
            slideCount,
            direction;
        _.dragging = false;
        _.swiping = false;
        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }
        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;
        if (_.touchObject.curX === undefined) {
            return false;
        }
        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger("edge", [_, _.swipeDirection()]);
        }
        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
            direction = _.swipeDirection();
            switch (direction) {
                case "left":
                case "down":
                    slideCount = _.options.swipeToSlide
                        ? _.checkNavigable(_.currentSlide + _.getSlideCount())
                        : _.currentSlide + _.getSlideCount();
                    _.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    slideCount = _.options.swipeToSlide
                        ? _.checkNavigable(_.currentSlide - _.getSlideCount())
                        : _.currentSlide - _.getSlideCount();
                    _.currentDirection = 1;
                    break;
                default:
            }
            if (direction != "vertical") {
                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger("swipe", [_, direction]);
            }
        } else {
            if (_.touchObject.startX !== _.touchObject.curX) {
                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };
    Slick.prototype.swipeHandler = function (event) {
        var _ = this;
        if (
            _.options.swipe === false ||
            ("ontouchend" in document && _.options.swipe === false)
        ) {
            return;
        } else if (
            _.options.draggable === false &&
            event.type.indexOf("mouse") !== -1
        ) {
            return;
        }
        _.touchObject.fingerCount =
            event.originalEvent && event.originalEvent.touches !== undefined
                ? event.originalEvent.touches.length
                : 1;
        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;
        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }
        switch (event.data.action) {
            case "start":
                _.swipeStart(event);
                break;
            case "move":
                _.swipeMove(event);
                break;
            case "end":
                _.swipeEnd(event);
                break;
        }
    };
    Slick.prototype.swipeMove = function (event) {
        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches,
            verticalSwipeLength;
        touches =
            event.originalEvent !== undefined
                ? event.originalEvent.touches
                : null;
        if (!_.dragging || _.scrolling || (touches && touches.length !== 1)) {
            return false;
        }
        curLeft = _.getLeft(_.currentSlide);
        _.touchObject.curX =
            touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY =
            touches !== undefined ? touches[0].pageY : event.clientY;
        _.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))
        );
        verticalSwipeLength = Math.round(
            Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))
        );
        if (
            !_.options.verticalSwiping &&
            !_.swiping &&
            verticalSwipeLength > 4
        ) {
            _.scrolling = true;
            return false;
        }
        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }
        swipeDirection = _.swipeDirection();
        if (
            event.originalEvent !== undefined &&
            _.touchObject.swipeLength > 4
        ) {
            _.swiping = true;
            event.preventDefault();
        }
        positionOffset =
            (_.options.rtl === false ? 1 : -1) *
            (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }
        swipeLength = _.touchObject.swipeLength;
        _.touchObject.edgeHit = false;
        if (_.options.infinite === false) {
            if (
                (_.currentSlide === 0 && swipeDirection === "right") ||
                (_.currentSlide >= _.getDotCount() && swipeDirection === "left")
            ) {
                swipeLength =
                    _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }
        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft =
                curLeft +
                swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }
        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }
        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }
        _.setCSS(_.swipeLeft);
    };
    Slick.prototype.swipeStart = function (event) {
        var _ = this,
            touches;
        _.interrupted = true;
        if (
            _.touchObject.fingerCount !== 1 ||
            _.slideCount <= _.options.slidesToShow
        ) {
            _.touchObject = {};
            return false;
        }
        if (
            event.originalEvent !== undefined &&
            event.originalEvent.touches !== undefined
        ) {
            touches = event.originalEvent.touches[0];
        }
        _.touchObject.startX = _.touchObject.curX =
            touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY =
            touches !== undefined ? touches.pageY : event.clientY;
        _.dragging = true;
    };
    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter =
        function () {
            var _ = this;
            if (_.$slidesCache !== null) {
                _.unload();
                _.$slideTrack.children(this.options.slide).detach();
                _.$slidesCache.appendTo(_.$slideTrack);
                _.reinit();
            }
        };
    Slick.prototype.unload = function () {
        var _ = this;
        $(".slick-cloned", _.$slider).remove();
        if (_.$dots) {
            _.$dots.remove();
        }
        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }
        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }
        _.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
    };
    Slick.prototype.unslick = function (fromBreakpoint) {
        var _ = this;
        _.$slider.trigger("unslick", [_, fromBreakpoint]);
        _.destroy();
    };
    Slick.prototype.updateArrows = function () {
        var _ = this,
            centerOffset;
        centerOffset = Math.floor(_.options.slidesToShow / 2);
        if (
            _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite
        ) {
            _.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false");
            _.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false");
            if (_.currentSlide === 0) {
                _.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true");
                _.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false");
            } else if (
                _.currentSlide >= _.slideCount - _.options.slidesToShow &&
                _.options.centerMode === false
            ) {
                _.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true");
                _.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false");
            } else if (
                _.currentSlide >= _.slideCount - 1 &&
                _.options.centerMode === true
            ) {
                _.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true");
                _.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false");
            }
        }
    };
    Slick.prototype.updateDots = function () {
        var _ = this;
        if (_.$dots !== null) {
            _.$dots.find("li").removeClass("slick-active").end();
            _.$dots
                .find("li")
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass("slick-active");
        }
    };
    Slick.prototype.visibility = function () {
        var _ = this;
        if (_.options.autoplay) {
            if (document[_.hidden]) {
                _.interrupted = true;
            } else {
                _.interrupted = false;
            }
        }
    };
    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == "object" || typeof opt == "undefined")
                _[i].slick = new Slick(_[i], opt);
            else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != "undefined") return ret;
        }
        return _;
    };
});

/*====================================
    4.venobox.min.js
   =====================================*/
/*
 * VenoBox - jQuery Plugin
 * version: 1.9.1
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2020 Nicola Franchini - @nicolafranchini
 *
 */
!(function (e) {
    "use strict";
    var s,
        i,
        a,
        t,
        o,
        c,
        r,
        l,
        d,
        n,
        v,
        u,
        b,
        h,
        k,
        p,
        g,
        m,
        f,
        x,
        w,
        y,
        _,
        C,
        z,
        B,
        P,
        M,
        E,
        O,
        D,
        N,
        U,
        V,
        I,
        j,
        R,
        X,
        Y,
        W,
        q,
        $,
        T,
        A,
        H,
        Q,
        S,
        Z =
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
        F =
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>',
        G =
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>',
        J =
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>',
        K =
            '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 9h-4v-1h4v1zm0-3v1h-4v-1h4zm-2 13l-6-6h4v-3h4v3h4l-6 6z"/></svg>';
    e.fn.extend({
        venobox: function (L) {
            var ee = this,
                se = e.extend(
                    {
                        arrowsColor: "#B6B6B6",
                        autoplay: !1,
                        bgcolor: "#fff",
                        border: "0",
                        closeBackground: "transparent",
                        closeColor: "#d2d2d2",
                        framewidth: "",
                        frameheight: "",
                        gallItems: !1,
                        infinigall: !1,
                        htmlClose: "&times;",
                        htmlNext: "<span>Next</span>",
                        htmlPrev: "<span>Prev</span>",
                        numeratio: !1,
                        numerationBackground: "#161617",
                        numerationColor: "#d2d2d2",
                        numerationPosition: "top",
                        overlayClose: !0,
                        overlayColor: "rgba(23,23,23,0.85)",
                        spinner: "double-bounce",
                        spinColor: "#d2d2d2",
                        titleattr: "title",
                        titleBackground: "#161617",
                        titleColor: "#d2d2d2",
                        titlePosition: "top",
                        share: [],
                        cb_pre_open: function () {
                            return !0;
                        },
                        cb_post_open: function () {},
                        cb_pre_close: function () {
                            return !0;
                        },
                        cb_post_close: function () {},
                        cb_post_resize: function () {},
                        cb_after_nav: function () {},
                        cb_content_loaded: function () {},
                        cb_init: function () {},
                    },
                    L
                );
            return (
                se.cb_init(ee),
                this.each(function () {
                    if ((N = e(this)).data("venobox")) return !0;
                    function L() {
                        (C = N.data("gall")),
                            (x = N.data("numeratio")),
                            (k = N.data("gallItems")),
                            (p = N.data("infinigall")),
                            (H = N.data("share")),
                            o.html(""),
                            "iframe" !== N.data("vbtype") &&
                                "inline" !== N.data("vbtype") &&
                                "ajax" !== N.data("vbtype") &&
                                ((Q = {
                                    pinterest:
                                        '<a target="_blank" href="https://pinterest.com/pin/create/button/?url=' +
                                        N.prop("href") +
                                        "&media=" +
                                        N.prop("href") +
                                        "&description=" +
                                        _ +
                                        '">' +
                                        Z +
                                        "</a>",
                                    facebook:
                                        '<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' +
                                        N.prop("href") +
                                        '">' +
                                        F +
                                        "</a>",
                                    twitter:
                                        '<a target="_blank" href="https://twitter.com/intent/tweet?text=' +
                                        _ +
                                        "&url=" +
                                        N.prop("href") +
                                        '">' +
                                        G +
                                        "</a>",
                                    linkedin:
                                        '<a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=' +
                                        N.prop("href") +
                                        '">' +
                                        J +
                                        "</a>",
                                    download:
                                        '<a target="_blank" href="' +
                                        N.prop("href") +
                                        '">' +
                                        K +
                                        "</a>",
                                }),
                                e.each(H, function (e, s) {
                                    o.append(Q[s]);
                                })),
                            (g = k || e('.vbox-item[data-gall="' + C + '"]'))
                                .length < 2 && ((p = !1), (x = !1)),
                            (z = g.eq(g.index(N) + 1)),
                            (B = g.eq(g.index(N) - 1)),
                            z.length || !0 !== p || (z = g.eq(0)),
                            g.length >= 1
                                ? ((U = g.index(N) + 1),
                                  t.html(U + " / " + g.length))
                                : (U = 1),
                            !0 === x ? t.show() : t.hide(),
                            "" !== _ ? c.show() : c.hide(),
                            z.length || !0 === p
                                ? (e(".vbox-next").css("display", "block"),
                                  (P = !0))
                                : (e(".vbox-next").css("display", "none"),
                                  (P = !1)),
                            g.index(N) > 0 || !0 === p
                                ? (e(".vbox-prev").css("display", "block"),
                                  (M = !0))
                                : (e(".vbox-prev").css("display", "none"),
                                  (M = !1)),
                            (!0 !== M && !0 !== P) ||
                                (n.on(de.DOWN, ce),
                                n.on(de.MOVE, re),
                                n.on(de.UP, le));
                    }
                    function ie(e) {
                        return (
                            !(e.length < 1) &&
                            !m &&
                            ((m = !0),
                            (w = e.data("overlay") || e.data("overlaycolor")),
                            (b = e.data("framewidth")),
                            (h = e.data("frameheight")),
                            (r = e.data("border")),
                            (i = e.data("bgcolor")),
                            (v = e.data("href") || e.attr("href")),
                            (s = e.data("autoplay")),
                            (_ =
                                (e.data("titleattr") &&
                                    e.attr(e.data("titleattr"))) ||
                                ""),
                            e === B &&
                                n
                                    .addClass("vbox-animated")
                                    .addClass("swipe-right"),
                            e === z &&
                                n
                                    .addClass("vbox-animated")
                                    .addClass("swipe-left"),
                            O.show(),
                            void n.animate({ opacity: 0 }, 500, function () {
                                y.css("background", w),
                                    n
                                        .removeClass("vbox-animated")
                                        .removeClass("swipe-left")
                                        .removeClass("swipe-right")
                                        .css({
                                            "margin-left": 0,
                                            "margin-right": 0,
                                        }),
                                    "iframe" == e.data("vbtype")
                                        ? he()
                                        : "inline" == e.data("vbtype")
                                        ? pe()
                                        : "ajax" == e.data("vbtype")
                                        ? be()
                                        : "video" == e.data("vbtype")
                                        ? ke(s)
                                        : (n.html('<img src="' + v + '">'),
                                          ge()),
                                    (N = e),
                                    L(),
                                    (m = !1),
                                    se.cb_after_nav(N, U, z, B);
                            }))
                        );
                    }
                    function ae(e) {
                        27 === e.keyCode && te(),
                            37 == e.keyCode && !0 === M && ie(B),
                            39 == e.keyCode && !0 === P && ie(z);
                    }
                    function te() {
                        if (!1 === se.cb_pre_close(N, U, z, B)) return !1;
                        e("body").off("keydown", ae).removeClass("vbox-open"),
                            N.focus(),
                            y.animate({ opacity: 0 }, 500, function () {
                                y.remove(), (m = !1), se.cb_post_close();
                            });
                    }
                    (ee.VBclose = function () {
                        te();
                    }),
                        N.addClass("vbox-item"),
                        N.data("framewidth", se.framewidth),
                        N.data("frameheight", se.frameheight),
                        N.data("border", se.border),
                        N.data("bgcolor", se.bgcolor),
                        N.data("numeratio", se.numeratio),
                        N.data("gallItems", se.gallItems),
                        N.data("infinigall", se.infinigall),
                        N.data("overlaycolor", se.overlayColor),
                        N.data("titleattr", se.titleattr),
                        N.data("share", se.share),
                        N.data("venobox", !0),
                        N.on("click", function (k) {
                            if (
                                (k.preventDefault(),
                                (N = e(this)),
                                !1 === se.cb_pre_open(N))
                            )
                                return !1;
                            switch (
                                ((ee.VBnext = function () {
                                    ie(z);
                                }),
                                (ee.VBprev = function () {
                                    ie(B);
                                }),
                                (w =
                                    N.data("overlay") ||
                                    N.data("overlaycolor")),
                                (b = N.data("framewidth")),
                                (h = N.data("frameheight")),
                                (s = N.data("autoplay") || se.autoplay),
                                (r = N.data("border")),
                                (i = N.data("bgcolor")),
                                (P = !1),
                                (M = !1),
                                (m = !1),
                                (v = N.data("href") || N.attr("href")),
                                (u = N.data("css") || ""),
                                (_ = N.attr(N.data("titleattr")) || ""),
                                (H = N.data("share")),
                                (E = '<div class="vbox-preloader">'),
                                se.spinner)
                            ) {
                                case "rotating-plane":
                                    E +=
                                        '<div class="sk-rotating-plane"></div>';
                                    break;
                                case "double-bounce":
                                    E +=
                                        '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
                                    break;
                                case "wave":
                                    E +=
                                        '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
                                    break;
                                case "wandering-cubes":
                                    E +=
                                        '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
                                    break;
                                case "spinner-pulse":
                                    E +=
                                        '<div class="sk-spinner sk-spinner-pulse"></div>';
                                    break;
                                case "chasing-dots":
                                    E +=
                                        '<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';
                                    break;
                                case "three-bounce":
                                    E +=
                                        '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
                                    break;
                                case "circle":
                                    E +=
                                        '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
                                    break;
                                case "cube-grid":
                                    E +=
                                        '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';
                                    break;
                                case "fading-circle":
                                    E +=
                                        '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
                                    break;
                                case "folding-cube":
                                    E +=
                                        '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>';
                            }
                            return (
                                (E += "</div>"),
                                (D =
                                    '<a class="vbox-next">' +
                                    se.htmlNext +
                                    '</a><a class="vbox-prev">' +
                                    se.htmlPrev +
                                    "</a>"),
                                (I =
                                    '<div class="vbox-title"></div><div class="vbox-left"><div class="vbox-num">0/0</div></div><div class="vbox-close">' +
                                    se.htmlClose +
                                    "</div>"),
                                '<div class="vbox-share"></div>',
                                (l =
                                    '<div class="vbox-overlay ' +
                                    u +
                                    '" style="background:' +
                                    w +
                                    '">' +
                                    E +
                                    '<div class="vbox-container"><div class="vbox-content"></div></div>' +
                                    I +
                                    D +
                                    '<div class="vbox-share"></div></div>'),
                                e("body").append(l).addClass("vbox-open"),
                                e(
                                    ".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse"
                                ).css("background-color", se.spinColor),
                                (y = e(".vbox-overlay")),
                                (d = e(".vbox-container")),
                                (n = e(".vbox-content")),
                                (a = e(".vbox-left")),
                                (t = e(".vbox-num")),
                                (o = e(".vbox-share")),
                                (c = e(".vbox-title")),
                                (O = e(".vbox-preloader")).show(),
                                (S =
                                    "top" == se.titlePosition
                                        ? "bottom"
                                        : "top"),
                                o.css(S, "-1px"),
                                o.css({
                                    color: se.titleColor,
                                    fill: se.titleColor,
                                    "background-color": se.titleBackground,
                                }),
                                c.css(se.titlePosition, "-1px"),
                                c.css({
                                    color: se.titleColor,
                                    "background-color": se.titleBackground,
                                }),
                                e(".vbox-close").css({
                                    color: se.closeColor,
                                    "background-color": se.closeBackground,
                                }),
                                a.css(se.numerationPosition, "-1px"),
                                a.css({
                                    color: se.numerationColor,
                                    "background-color": se.numerationBackground,
                                }),
                                e(".vbox-next span, .vbox-prev span").css({
                                    "border-top-color": se.arrowsColor,
                                    "border-right-color": se.arrowsColor,
                                }),
                                n.html(""),
                                n.css("opacity", "0"),
                                y.css("opacity", "0"),
                                L(),
                                y.animate({ opacity: 1 }, 250, function () {
                                    "iframe" == N.data("vbtype")
                                        ? he()
                                        : "inline" == N.data("vbtype")
                                        ? pe()
                                        : "ajax" == N.data("vbtype")
                                        ? be()
                                        : "video" == N.data("vbtype")
                                        ? ke(s)
                                        : (n.html('<img src="' + v + '">'),
                                          ge()),
                                        se.cb_post_open(N, U, z, B);
                                }),
                                e("body").keydown(ae),
                                e(".vbox-prev").on("click", function () {
                                    ie(B);
                                }),
                                e(".vbox-next").on("click", function () {
                                    ie(z);
                                }),
                                !1
                            );
                        });
                    var oe = ".vbox-overlay";
                    function ce(e) {
                        n.addClass("vbox-animated"),
                            (R = Y = e.pageY),
                            (X = W = e.pageX),
                            (V = !0);
                    }
                    function re(e) {
                        if (!0 === V) {
                            (W = e.pageX),
                                (Y = e.pageY),
                                ($ = W - X),
                                (T = Y - R);
                            var s = Math.abs($);
                            s > Math.abs(T) &&
                                s <= 100 &&
                                (e.preventDefault(), n.css("margin-left", $));
                        }
                    }
                    function le(e) {
                        if (!0 === V) {
                            V = !1;
                            var s = N,
                                i = !1;
                            (q = W - X) < 0 && !0 === P && ((s = z), (i = !0)),
                                q > 0 && !0 === M && ((s = B), (i = !0)),
                                Math.abs(q) >= A && !0 === i
                                    ? ie(s)
                                    : n.css({
                                          "margin-left": 0,
                                          "margin-right": 0,
                                      });
                        }
                    }
                    se.overlayClose || (oe = ".vbox-close"),
                        e("body").on("click touchstart", oe, function (s) {
                            (e(s.target).is(".vbox-overlay") ||
                                e(s.target).is(".vbox-content") ||
                                e(s.target).is(".vbox-close") ||
                                e(s.target).is(".vbox-preloader") ||
                                e(s.target).is(".vbox-container")) &&
                                te();
                        }),
                        (X = 0),
                        (W = 0),
                        (q = 0),
                        (A = 50),
                        (V = !1);
                    var de = {
                            DOWN: "touchmousedown",
                            UP: "touchmouseup",
                            MOVE: "touchmousemove",
                        },
                        ne = function (s) {
                            var i;
                            switch (s.type) {
                                case "mousedown":
                                    i = de.DOWN;
                                    break;
                                case "mouseup":
                                case "mouseout":
                                    i = de.UP;
                                    break;
                                case "mousemove":
                                    i = de.MOVE;
                                    break;
                                default:
                                    return;
                            }
                            var a = ue(i, s, s.pageX, s.pageY);
                            e(s.target).trigger(a);
                        },
                        ve = function (s) {
                            var i;
                            switch (s.type) {
                                case "touchstart":
                                    i = de.DOWN;
                                    break;
                                case "touchend":
                                    i = de.UP;
                                    break;
                                case "touchmove":
                                    i = de.MOVE;
                                    break;
                                default:
                                    return;
                            }
                            var a,
                                t = s.originalEvent.touches[0];
                            (a =
                                i == de.UP
                                    ? ue(i, s, null, null)
                                    : ue(i, s, t.pageX, t.pageY)),
                                e(s.target).trigger(a);
                        },
                        ue = function (s, i, a, t) {
                            return e.Event(s, {
                                pageX: a,
                                pageY: t,
                                originalEvent: i,
                            });
                        };
                    function be() {
                        e.ajax({ url: v, cache: !1 })
                            .done(function (e) {
                                n.html(
                                    '<div class="vbox-inline">' + e + "</div>"
                                ),
                                    ge();
                            })
                            .fail(function () {
                                n.html(
                                    '<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'
                                ),
                                    me();
                            });
                    }
                    function he() {
                        n.html(
                            '<iframe class="venoframe" src="' +
                                v +
                                '"></iframe>'
                        ),
                            me();
                    }
                    function ke(e) {
                        var s,
                            i = (function (e) {
                                var s;
                                e.match(
                                    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                                ),
                                    RegExp.$3.indexOf("youtu") > -1
                                        ? (s = "youtube")
                                        : RegExp.$3.indexOf("vimeo") > -1 &&
                                          (s = "vimeo");
                                return { type: s, id: RegExp.$6 };
                            })(v),
                            a =
                                (e ? "?rel=0&autoplay=1" : "?rel=0") +
                                (function (e) {
                                    var s = "",
                                        i = decodeURIComponent(e).split("?");
                                    if (void 0 !== i[1]) {
                                        var a,
                                            t,
                                            o = i[1].split("&");
                                        for (t = 0; t < o.length; t++)
                                            (a = o[t].split("=")),
                                                (s =
                                                    s +
                                                    "&" +
                                                    a[0] +
                                                    "=" +
                                                    a[1]);
                                    }
                                    return encodeURI(s);
                                })(v);
                        "vimeo" == i.type
                            ? (s = "https://player.vimeo.com/video/")
                            : "youtube" == i.type &&
                              (s = "https://www.youtube.com/embed/"),
                            n.html(
                                '<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="' +
                                    s +
                                    i.id +
                                    a +
                                    '"></iframe>'
                            ),
                            me();
                    }
                    function pe() {
                        n.html(
                            '<div class="vbox-inline">' + e(v).html() + "</div>"
                        ),
                            me();
                    }
                    function ge() {
                        (j = n.find("img")).length
                            ? j.each(function () {
                                  e(this).one("load", function () {
                                      me();
                                  });
                              })
                            : me();
                    }
                    function me() {
                        c.html(_),
                            n
                                .find(">:first-child")
                                .addClass("vbox-figlio")
                                .css({
                                    width: b,
                                    height: h,
                                    padding: r,
                                    background: i,
                                }),
                            e("img.vbox-figlio").on("dragstart", function (e) {
                                e.preventDefault();
                            }),
                            d.scrollTop(0),
                            fe(),
                            n.animate({ opacity: "1" }, "slow", function () {
                                O.hide();
                            }),
                            se.cb_content_loaded(N, U, z, B);
                    }
                    function fe() {
                        var s = n.outerHeight(),
                            i = e(window).height();
                        (f = s + 60 < i ? (i - s) / 2 : "30px"),
                            n.css("margin-top", f),
                            n.css("margin-bottom", f),
                            se.cb_post_resize();
                    }
                    "ontouchstart" in window
                        ? (e(document).on("touchstart", ve),
                          e(document).on("touchmove", ve),
                          e(document).on("touchend", ve))
                        : (e(document).on("mousedown", ne),
                          e(document).on("mouseup", ne),
                          e(document).on("mouseout", ne),
                          e(document).on("mousemove", ne)),
                        e(window).resize(function () {
                            e(".vbox-content").length && setTimeout(fe(), 800);
                        });
                })
            );
        },
    });
})(jQuery);

/*====================================
    5.jquery.nice-select.min.js
   =====================================*/
/*  jQuery Nice Select - v1.0
      https://github.com/hernansartorio/jquery-nice-select
      Made by Hernán Sartorio  */
!(function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(
                e("<div></div>")
                    .addClass("nice-select")
                    .addClass(t.attr("class") || "")
                    .addClass(t.attr("disabled") ? "disabled" : "")
                    .attr("tabindex", t.attr("disabled") ? null : "0")
                    .html('<span class="current"></span><ul class="list"></ul>')
            );
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
                n.each(function (t) {
                    var n = e(this),
                        i = n.data("display");
                    s.find("ul").append(
                        e("<li></li>")
                            .attr("data-value", n.val())
                            .attr("data-display", i || null)
                            .addClass(
                                "option" +
                                    (n.is(":selected") ? " selected" : "") +
                                    (n.is(":disabled") ? " disabled" : "")
                            )
                            .html(n.text())
                    );
                });
        }
        if ("string" == typeof t)
            return (
                "update" == t
                    ? this.each(function () {
                          var t = e(this),
                              n = e(this).next(".nice-select"),
                              i = n.hasClass("open");
                          n.length &&
                              (n.remove(),
                              s(t),
                              i && t.next().trigger("click"));
                      })
                    : "destroy" == t
                    ? (this.each(function () {
                          var t = e(this),
                              s = e(this).next(".nice-select");
                          s.length && (s.remove(), t.css("display", ""));
                      }),
                      0 == e(".nice-select").length &&
                          e(document).off(".nice_select"))
                    : console.log('Method "' + t + '" does not exist.'),
                this
            );
        this.hide(),
            this.each(function () {
                var t = e(this);
                t.next().hasClass("nice-select") || s(t);
            }),
            e(document).off(".nice_select"),
            e(document).on("click.nice_select", ".nice-select", function (t) {
                var s = e(this);
                e(".nice-select").not(s).removeClass("open"),
                    s.toggleClass("open"),
                    s.hasClass("open")
                        ? (s.find(".option"),
                          s.find(".focus").removeClass("focus"),
                          s.find(".selected").addClass("focus"))
                        : s.focus();
            }),
            e(document).on("click.nice_select", function (t) {
                0 === e(t.target).closest(".nice-select").length &&
                    e(".nice-select").removeClass("open").find(".option");
            }),
            e(document).on(
                "click.nice_select",
                ".nice-select .option:not(.disabled)",
                function (t) {
                    var s = e(this),
                        n = s.closest(".nice-select");
                    n.find(".selected").removeClass("selected"),
                        s.addClass("selected");
                    var i = s.data("display") || s.text();
                    n.find(".current").text(i),
                        n.prev("select").val(s.data("value")).trigger("change");
                }
            ),
            e(document).on("keydown.nice_select", ".nice-select", function (t) {
                var s = e(this),
                    n = e(s.find(".focus") || s.find(".list .option.selected"));
                if (32 == t.keyCode || 13 == t.keyCode)
                    return (
                        s.hasClass("open")
                            ? n.trigger("click")
                            : s.trigger("click"),
                        !1
                    );
                if (40 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var i = n.nextAll(".option:not(.disabled)").first();
                        i.length > 0 &&
                            (s.find(".focus").removeClass("focus"),
                            i.addClass("focus"));
                    } else s.trigger("click");
                    return !1;
                }
                if (38 == t.keyCode) {
                    if (s.hasClass("open")) {
                        var l = n.prevAll(".option:not(.disabled)").first();
                        l.length > 0 &&
                            (s.find(".focus").removeClass("focus"),
                            l.addClass("focus"));
                    } else s.trigger("click");
                    return !1;
                }
                if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
                else if (9 == t.keyCode && s.hasClass("open")) return !1;
            });
        var n = document.createElement("a").style;
        return (
            (n.cssText = "pointer-events:auto"),
            "auto" !== n.pointerEvents &&
                e("html").addClass("no-csspointerevents"),
            this
        );
    };
})(jQuery);

/*====================================
    6.waypoints.min.js
  =====================================*/
// Generated by CoffeeScript 1.6.2
/*
  jQuery Waypoints - v2.0.3
  Copyright (c) 2011-2013 Caleb Troughton
  Dual licensed under the MIT license and GPL license.
  https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
  */
(function () {
    var t =
            [].indexOf ||
            function (t) {
                for (var e = 0, n = this.length; e < n; e++) {
                    if (e in this && this[e] === t) return e;
                }
                return -1;
            },
        e = [].slice;
    (function (t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return e(n, t);
            });
        } else {
            return e(t.jQuery, t);
        }
    })(this, function (n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = { horizontal: {}, vertical: {} };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = (function () {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
                this.waypoints = { horizontal: {}, vertical: {} };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function () {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function () {
                            e.doScroll();
                            return (e.didScroll = false);
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle);
                    }
                });
                t.bind(p, function () {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function () {
                            n[m]("refresh");
                            return (e.didResize = false);
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle);
                    }
                });
            }
            t.prototype.doScroll = function () {
                var t,
                    e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                    },
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh");
                }
                n.each(t, function (t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e);
                        } else if (
                            r.newScroll < (i = e.offset) &&
                            i <= r.oldScroll
                        ) {
                            return l.push(e);
                        }
                    });
                    l.sort(function (t, e) {
                        return t.offset - e.offset;
                    });
                    if (!o) {
                        l.reverse();
                    }
                    return n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i]);
                        }
                    });
                });
                return (this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll,
                });
            };
            t.prototype.refresh = function () {
                var t,
                    e,
                    r,
                    i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left",
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r
                            ? n[m]("viewportHeight")
                            : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top",
                    },
                };
                return n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element)
                            ? 0
                            : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element);
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil((e.contextDimension * i) / 100);
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (
                            (r.options.onlyOnScroll && l != null) ||
                            !r.enabled
                        ) {
                            return;
                        }
                        if (
                            l !== null &&
                            l < (s = e.oldScroll) &&
                            s <= r.offset
                        ) {
                            return r.trigger([e.backward]);
                        } else if (
                            l !== null &&
                            l > (f = e.oldScroll) &&
                            f >= r.offset
                        ) {
                            return r.trigger([e.forward]);
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward]);
                        }
                    });
                });
            };
            t.prototype.checkEmpty = function () {
                if (
                    n.isEmptyObject(this.waypoints.horizontal) &&
                    n.isEmptyObject(this.waypoints.vertical)
                ) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id];
                }
            };
            return t;
        })();
        l = (function () {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height();
                        }
                        return t - n(this).outerHeight();
                    };
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i);
            }
            t.prototype.trigger = function (t) {
                if (!this.enabled) {
                    return;
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t);
                }
                if (this.options.triggerOnce) {
                    return this.destroy();
                }
            };
            t.prototype.disable = function () {
                return (this.enabled = false);
            };
            t.prototype.enable = function () {
                this.context.refresh();
                return (this.enabled = true);
            };
            t.prototype.destroy = function () {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty();
            };
            t.getWaypointsByElement = function (t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return [];
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function (t) {
                    return e[t];
                });
            };
            return t;
        })();
        d = {
            init: function (t, e) {
                var r;
                if (e == null) {
                    e = {};
                }
                if ((r = e.handler) == null) {
                    e.handler = t;
                }
                this.each(function () {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i);
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i);
                    }
                    return new l(t, r, e);
                });
                n[m]("refresh");
                return this;
            },
            disable: function () {
                return d._invoke(this, "disable");
            },
            enable: function () {
                return d._invoke(this, "enable");
            },
            destroy: function () {
                return d._invoke(this, "destroy");
            },
            prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1]);
                    }
                });
            },
            next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1]);
                    }
                });
            },
            _traverse: function (t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical";
                }
                if (e == null) {
                    e = r;
                }
                l = h.aggregate(e);
                o = [];
                this.each(function () {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t]);
                });
                return this.pushStack(o);
            },
            _invoke: function (t, e) {
                t.each(function () {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function (t, n) {
                        n[e]();
                        return true;
                    });
                });
                return this;
            },
        };
        n.fn[g] = function () {
            var t, r;
            (r = arguments[0]),
                (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
            if (d[r]) {
                return d[r].apply(this, t);
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments);
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r]);
            } else if (!r) {
                return n.error(
                    "jQuery Waypoints needs a callback function or handler option."
                );
            } else {
                return n.error(
                    "The " + r + " method does not exist in jQuery Waypoints."
                );
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false,
        };
        h = {
            refresh: function () {
                return n.each(a, function (t, e) {
                    return e.refresh();
                });
            },
            viewportHeight: function () {
                var t;
                return (t = r.innerHeight) != null ? t : i.height();
            },
            aggregate: function (t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
                }
                if (!e) {
                    return [];
                }
                r = { horizontal: [], vertical: [] };
                n.each(r, function (t, i) {
                    n.each(e[t], function (t, e) {
                        return i.push(e);
                    });
                    i.sort(function (t, e) {
                        return t.offset - e.offset;
                    });
                    r[t] = n.map(i, function (t) {
                        return t.element;
                    });
                    return (r[t] = n.unique(r[t]));
                });
                return r;
            },
            above: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y;
                });
            },
            below: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y;
                });
            },
            left: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x;
                });
            },
            right: function (t) {
                if (t == null) {
                    t = r;
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x;
                });
            },
            enable: function () {
                return h._invoke("enable");
            },
            disable: function () {
                return h._invoke("disable");
            },
            destroy: function () {
                return h._invoke("destroy");
            },
            extendFn: function (t, e) {
                return (d[t] = e);
            },
            _invoke: function (t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function (e, n) {
                    n[t]();
                    return true;
                });
            },
            _filter: function (t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return [];
                }
                o = [];
                n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) {
                        return o.push(e);
                    }
                });
                o.sort(function (t, e) {
                    return t.offset - e.offset;
                });
                return n.map(o, function (t) {
                    return t.element;
                });
            },
        };
        n[m] = function () {
            var t, n;
            (n = arguments[0]),
                (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
            if (h[n]) {
                return h[n].apply(null, t);
            } else {
                return h.aggregate.call(null, n);
            }
        };
        n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
        return i.load(function () {
            return n[m]("refresh");
        });
    });
}.call(this));

/*====================================
   7.jquery.counterup.min.js
   =====================================*/

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
    "use strict";
    e.fn.counterUp = function (t) {
        var n = e.extend({ time: 400, delay: 10 }, t);
        return this.each(function () {
            var t = e(this),
                r = n,
                i = function () {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt((i / n) * f);
                        u && (l = parseFloat((i / n) * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString()))
                                l = l
                                    .toString()
                                    .replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l);
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function () {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length)
                            setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null);
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay);
                };
            t.waypoint(i, { offset: "100%", triggerOnce: !0 });
        });
    };
})(jQuery);

/*====================================
   8.Isotope.min.js
   =====================================*/
/*!
 * Isotope PACKAGED v3.0.4
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2017 Metafizzy
 */

!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, u) {
                    var h = a.data(u, i);
                    if (!h)
                        return void r(
                            i +
                                " not initialized. Cannot call methods, i.e. " +
                                s
                        );
                    var d = h[e];
                    if (!d || "_" == e.charAt(0))
                        return void r(s + " is not a valid method");
                    var l = d.apply(h, o);
                    n = void 0 === n ? l : n;
                }),
                void 0 !== n ? n : t
            );
        }
        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n
                    ? (n.option(e), n._init())
                    : ((n = new s(o, e)), a.data(o, i, n));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        a.isPlainObject(t) &&
                            (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }),
                o(a));
    }
    function o(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
        s = t.console,
        r =
            "undefined" == typeof s
                ? function () {}
                : function (t) {
                      s.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return o.indexOf(e) == -1 && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        o = (i[t] = i[t] || {});
                    return (o[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = 0,
                        n = i[o];
                    e = e || [];
                    for (var s = this._onceEvents && this._onceEvents[t]; n; ) {
                        var r = s && s[n];
                        r && (this.off(t, n), delete s[n]),
                            n.apply(this, e),
                            (o += r ? 0 : 1),
                            (n = i[o]);
                    }
                    return this;
                }
            }),
            t
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("get-size/get-size", [], function () {
                  return e();
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (
                var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0,
                    },
                    e = 0;
                e < h;
                e++
            ) {
                var i = u[e];
                t[i] = 0;
            }
            return t;
        }
        function o(t) {
            var e = getComputedStyle(t);
            return (
                e ||
                    a(
                        "Style returned " +
                            e +
                            ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                    ),
                e
            );
        }
        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"),
                    (e.style.padding = "1px 2px 3px 4px"),
                    (e.style.borderStyle = "solid"),
                    (e.style.borderWidth = "1px 2px 3px 4px"),
                    (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                (s.isBoxSizeOuter = r = 200 == t(n.width)), i.removeChild(e);
            }
        }
        function s(e) {
            if (
                (n(),
                "string" == typeof e && (e = document.querySelector(e)),
                e && "object" == typeof e && e.nodeType)
            ) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (
                    var d = (a.isBorderBox = "border-box" == s.boxSizing),
                        l = 0;
                    l < h;
                    l++
                ) {
                    var f = u[l],
                        c = s[f],
                        m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    y = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    I = a.borderTopWidth + a.borderBottomWidth,
                    z = d && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (z ? 0 : p + _));
                var S = t(s.height);
                return (
                    S !== !1 && (a.height = S + (z ? 0 : y + I)),
                    (a.innerWidth = a.width - (p + _)),
                    (a.innerHeight = a.height - (y + I)),
                    (a.outerWidth = a.width + g),
                    (a.outerHeight = a.height + v),
                    a
                );
            }
        }
        var r,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            u = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
            ],
            h = u.length,
            d = !1;
        return s;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", e)
            : "object" == typeof module && module.exports
            ? (module.exports = e())
            : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (
                var e = ["webkit", "moz", "ms", "o"], i = 0;
                i < e.length;
                i++
            ) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "fizzy-ui-utils/utils",
                  ["desandro-matches-selector/matches-selector"],
                  function (i) {
                      return e(t, i);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            }),
            (i.makeArray = function (t) {
                var e = [];
                if (Array.isArray(t)) e = t;
                else if (
                    t &&
                    "object" == typeof t &&
                    "number" == typeof t.length
                )
                    for (var i = 0; i < t.length; i++) e.push(t[i]);
                else e.push(t);
                return e;
            }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; )
                    if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!o) return void n.push(t);
                            e(t, o) && n.push(t);
                            for (
                                var i = t.querySelectorAll(o), s = 0;
                                s < i.length;
                                s++
                            )
                                n.push(i[s]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    t && clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n];
                    }, i || 100);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e
                    ? setTimeout(t)
                    : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var o = t.console;
        return (
            (i.htmlInit = function (e, n) {
                i.docReady(function () {
                    var s = i.toDashed(n),
                        r = "data-" + s,
                        a = document.querySelectorAll("[" + r + "]"),
                        u = document.querySelectorAll(".js-" + s),
                        h = i.makeArray(a).concat(i.makeArray(u)),
                        d = r + "-options",
                        l = t.jQuery;
                    h.forEach(function (t) {
                        var i,
                            s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (
                                o &&
                                o.error(
                                    "Error parsing " +
                                        r +
                                        " on " +
                                        t.className +
                                        ": " +
                                        a
                                )
                            );
                        }
                        var u = new e(t, i);
                        l && l.data(t, n, u);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/item",
                  ["ev-emitter/ev-emitter", "get-size/get-size"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}),
              (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t, e) {
            t &&
                ((this.element = t),
                (this.layout = e),
                (this.position = { x: 0, y: 0 }),
                this._create());
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var s = document.documentElement.style,
            r =
                "string" == typeof s.transition
                    ? "transition"
                    : "WebkitTransition",
            a =
                "string" == typeof s.transform
                    ? "transform"
                    : "WebkitTransform",
            u = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
            }[r],
            h = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay",
            },
            d = (o.prototype = Object.create(t.prototype));
        (d.constructor = o),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                    this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    s = this.layout.size,
                    r =
                        o.indexOf("%") != -1
                            ? (parseFloat(o) / 100) * s.width
                            : parseInt(o, 10),
                    a =
                        n.indexOf("%") != -1
                            ? (parseFloat(n) / 100) * s.height
                            : parseInt(n, 10);
                (r = isNaN(r) ? 0 : r),
                    (a = isNaN(a) ? 0 : a),
                    (r -= e ? s.paddingLeft : s.paddingRight),
                    (a -= i ? s.paddingTop : s.paddingBottom),
                    (this.position.x = r),
                    (this.position.y = a);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[s] = this.getXValue(a)), (e[r] = "");
                var u = o ? "paddingTop" : "paddingBottom",
                    h = o ? "top" : "bottom",
                    d = o ? "bottom" : "top",
                    l = this.position.y + t[u];
                (e[h] = this.getYValue(l)),
                    (e[d] = ""),
                    this.css(e),
                    this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e
                    ? (t / this.layout.size.width) * 100 + "%"
                    : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e
                    ? (t / this.layout.size.height) * 100 + "%"
                    : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = parseInt(t, 10),
                    s = parseInt(e, 10),
                    r = n === this.position.x && s === this.position.y;
                if ((this.setPosition(t, e), r && !this.isTransitioning))
                    return void this.layoutPosition();
                var a = t - i,
                    u = e - o,
                    h = {};
                (h.transform = this.getTranslate(a, u)),
                    this.transition({
                        to: h,
                        onTransitionEnd: { transform: this.layoutPosition },
                        isCleaning: !0,
                    });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop");
                return (
                    (t = i ? t : -t),
                    (e = o ? e : -e),
                    "translate3d(" + t + "px, " + e + "px, 0)"
                );
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseInt(t, 10)),
                    (this.position.y = parseInt(e, 10));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd)
                    t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration))
                    return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd)
                    e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    (e.ingProperties[i] = !0),
                        t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null;
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    (this.isTransitioning = !0);
            });
        var l = "opacity," + n(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t),
                    this.css({
                        transitionProperty: l,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0,
                    }),
                    this.element.addEventListener(u, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var f = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = f[t.propertyName] || t.propertyName;
                if (
                    (delete e.ingProperties[o],
                    i(e.ingProperties) && this.disableTransition(),
                    o in e.clean &&
                        ((this.element.style[t.propertyName] = ""),
                        delete e.clean[o]),
                    o in e.onEnd)
                ) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(u, this, !1),
                    (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var c = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: "",
        };
        return (
            (d.removeTransitionStyles = function () {
                this.css(c);
            }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd),
                    this.transition({
                        from: t.hiddenStyle,
                        to: t.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd),
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: e,
                    });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: "",
                });
            }),
            o
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/outlayer",
                  [
                      "ev-emitter/ev-emitter",
                      "get-size/get-size",
                      "fizzy-ui-utils/utils",
                      "./item",
                  ],
                  function (i, o, n, s) {
                      return e(t, i, o, n, s);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("ev-emitter"),
                  require("get-size"),
                  require("fizzy-ui-utils"),
                  require("./item")
              ))
            : (t.Outlayer = e(
                  t,
                  t.EvEmitter,
                  t.getSize,
                  t.fizzyUIUtils,
                  t.Outlayer.Item
              ));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i)
                return void (
                    u &&
                    u.error(
                        "Bad element for " +
                            this.constructor.namespace +
                            ": " +
                            (i || t)
                    )
                );
            (this.element = i),
                h && (this.$element = h(this.element)),
                (this.options = o.extend({}, this.constructor.defaults)),
                this.option(e);
            var n = ++l;
            (this.element.outlayerGUID = n), (f[n] = this), this._create();
            var s = this._getOption("initLayout");
            s && this.layout();
        }
        function r(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (
                (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                e
            );
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n;
        }
        var u = t.console,
            h = t.jQuery,
            d = function () {},
            l = 0,
            f = {};
        (s.namespace = "outlayer"),
            (s.Item = n),
            (s.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var c = s.prototype;
        o.extend(c, e.prototype),
            (c.option = function (t) {
                o.extend(this.options, t);
            }),
            (c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e]
                    ? this.options[e]
                    : this.options[t];
            }),
            (s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (c._create = function () {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (c.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (c._itemize = function (t) {
                for (
                    var e = this._filterFindItemElements(t),
                        i = this.constructor.Item,
                        o = [],
                        n = 0;
                    n < e.length;
                    n++
                ) {
                    var s = e[n],
                        r = new i(s, this);
                    o.push(r);
                }
                return o;
            }),
            (c._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (c.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (c._init = c.layout),
            (c._resetLayout = function () {
                this.getSize();
            }),
            (c.getSize = function () {
                this.size = i(this.element);
            }),
            (c._getMeasurement = function (t, e) {
                var o,
                    n = this.options[t];
                n
                    ? ("string" == typeof n
                          ? (o = this.element.querySelector(n))
                          : n instanceof HTMLElement && (o = n),
                      (this[t] = o ? i(o)[e] : n))
                    : (this[t] = 0);
            }),
            (c.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)),
                    this._layoutItems(t, e),
                    this._postLayout();
            }),
            (c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (c._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        (o.item = t),
                            (o.isInstant = e || t.isLayoutInstant),
                            i.push(o);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (c._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t
                    ? void (this.stagger = 0)
                    : ((this.stagger = a(t)), this.stagger);
            }),
            (c._positionItem = function (t, e, i, o, n) {
                o
                    ? t.goTo(e, i)
                    : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (c._postLayout = function () {
                this.resizeContainer();
            }),
            (c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e &&
                        (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1));
                }
            }),
            (c._getContainerSize = d),
            (c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox &&
                        (t += e
                            ? i.paddingLeft +
                              i.paddingRight +
                              i.borderLeftWidth +
                              i.borderRightWidth
                            : i.paddingBottom +
                              i.paddingTop +
                              i.borderTopWidth +
                              i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (c._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this,
                    s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o);
                });
            }),
            (c.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), h))
                    if (
                        ((this.$element = this.$element || h(this.element)), e)
                    ) {
                        var n = h.Event(e);
                        (n.type = t), this.$element.trigger(n, i);
                    } else this.$element.trigger(t, i);
            }),
            (c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (c.stamp = function (t) {
                (t = this._find(t)),
                    t &&
                        ((this.stamps = this.stamps.concat(t)),
                        t.forEach(this.ignore, this));
            }),
            (c.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (c._find = function (t) {
                if (t)
                    return (
                        "string" == typeof t &&
                            (t = this.element.querySelectorAll(t)),
                        (t = o.makeArray(t))
                    );
            }),
            (c._manageStamps = function () {
                this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this));
            }),
            (c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (c._manageStamp = d),
            (c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    o = this._boundingRect,
                    n = i(t),
                    s = {
                        left: e.left - o.left - n.marginLeft,
                        top: e.top - o.top - n.marginTop,
                        right: o.right - e.right - n.marginRight,
                        bottom: o.bottom - e.bottom - n.marginBottom,
                    };
                return s;
            }),
            (c.handleEvent = o.handleEvent),
            (c.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (c.unbindResize = function () {
                t.removeEventListener("resize", this),
                    (this.isResizeBound = !1);
            }),
            (c.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(s, "onresize", 100),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (c.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i);
                }
            }),
            (c.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (c.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (c.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (c.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e],
                    delete this.element.outlayerGUID,
                    h && h.removeData(this.element, this.constructor.namespace);
            }),
            (s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }),
            (s.create = function (t, e) {
                var i = r(s);
                return (
                    (i.defaults = o.extend({}, s.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, s.compatOptions)),
                    (i.namespace = t),
                    (i.data = s.data),
                    (i.Item = r(n)),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
                );
            });
        var m = { ms: 1, s: 1e3 };
        return (s.Item = n), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++),
                o.call(this),
                (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id),
                        (this.sortData["original-order"] = this.id),
                        (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope/js/layout-mode",
                  ["get-size/get-size", "outlayer/outlayer"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}),
              (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            (this.isotope = t),
                t &&
                    ((this.options = t.options[this.namespace]),
                    (this.element = t.element),
                    (this.items = t.filteredItems),
                    (this.size = t.size));
        }
        var o = i.prototype,
            n = [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
                "_getOption",
            ];
        return (
            n.forEach(function (t) {
                o[t] = function () {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (o.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }),
            (o._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if ((this._getMeasurement(i, o), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[o]) || this.isotope.size["inner" + e];
                }
            }),
            (o.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }),
            (o.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return (
                    (n.prototype = Object.create(o)),
                    (n.prototype.constructor = n),
                    e && (n.options = e),
                    (n.prototype.namespace = t),
                    (i.modes[t] = n),
                    n
                );
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "masonry/masonry",
                  ["outlayer/outlayer", "get-size/get-size"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return (
            (o._resetLayout = function () {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (o.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth =
                        (i && e(i).outerWidth) || this.containerWidth;
                }
                var o = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    s = n / o,
                    r = o - (n % o),
                    a = r && r < 1 ? "round" : "floor";
                (s = Math[a](s)), (this.cols = Math.max(s, 1));
            }),
            (o.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    o = e(i);
                this.containerWidth = o && o.innerWidth;
            }),
            (o._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && e < 1 ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (
                    var n = this.options.horizontalOrder
                            ? "_getHorizontalColPosition"
                            : "_getTopColPosition",
                        s = this[n](o, t),
                        r = { x: this.columnWidth * s.col, y: s.y },
                        a = s.y + t.size.outerHeight,
                        u = o + s.col,
                        h = s.col;
                    h < u;
                    h++
                )
                    this.colYs[h] = a;
                return r;
            }),
            (o._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (o._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
                    e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (o._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (o._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (
                    (this.horizontalColIndex = n
                        ? i + t
                        : this.horizontalColIndex),
                    { col: i, y: this._getColGroupY(i, t) }
                );
            }),
            (o._manageStamp = function (t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this._getOption("originLeft"),
                    s = n ? o.left : o.right,
                    r = s + i.outerWidth,
                    a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                (u -= r % this.columnWidth ? 0 : 1),
                    (u = Math.min(this.cols - 1, u));
                for (
                    var h = this._getOption("originTop"),
                        d = (h ? o.top : o.bottom) + i.outerHeight,
                        l = a;
                    l <= u;
                    l++
                )
                    this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (o._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return (
                    this._getOption("fitWidth") &&
                        (t.width = this._getContainerFitWidth()),
                    t
                );
            }),
            (o._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
                    t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (o.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope/js/layout-modes/masonry",
                  ["../layout-mode", "masonry/masonry"],
                  e
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  require("../layout-mode"),
                  require("masonry-layout")
              ))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = o._getOption;
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t
                    ? void 0 !== this.options.isFitWidth
                        ? this.options.isFitWidth
                        : this.options.fitWidth
                    : a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
            : "object" == typeof exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0),
                    (this.y = 0),
                    (this.maxY = 0),
                    this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x &&
                    e + this.x > i &&
                    ((this.x = 0), (this.y = this.maxY));
                var o = { x: this.x, y: this.y };
                return (
                    (this.maxY = Math.max(
                        this.maxY,
                        this.y + t.size.outerHeight
                    )),
                    (this.x += e),
                    o
                );
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e =
                        (this.isotope.size.innerWidth - t.size.outerWidth) *
                        this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define(
                  [
                      "outlayer/outlayer",
                      "get-size/get-size",
                      "desandro-matches-selector/matches-selector",
                      "fizzy-ui-utils/utils",
                      "isotope/js/item",
                      "isotope/js/layout-mode",
                      "isotope/js/layout-modes/masonry",
                      "isotope/js/layout-modes/fit-rows",
                      "isotope/js/layout-modes/vertical",
                  ],
                  function (i, o, n, s, r, a) {
                      return e(t, i, o, n, s, r, a);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope/js/item"),
                  require("isotope/js/layout-mode"),
                  require("isotope/js/layout-modes/masonry"),
                  require("isotope/js/layout-modes/fit-rows"),
                  require("isotope/js/layout-modes/vertical")
              ))
            : (t.Isotope = e(
                  t,
                  t.Outlayer,
                  t.getSize,
                  t.matchesSelector,
                  t.fizzyUIUtils,
                  t.Isotope.Item,
                  t.Isotope.LayoutMode
              ));
    })(window, function (t, e, i, o, n, s, r) {
        function a(t, e) {
            return function (i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = i.sortData[s],
                        a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h;
                    }
                }
                return 0;
            };
        }
        var u = t.jQuery,
            h = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            d = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0,
            });
        (d.Item = s), (d.LayoutMode = r);
        var l = d.prototype;
        (l._create = function () {
            (this.itemGUID = 0),
                (this._sorters = {}),
                this._getSorters(),
                e.prototype._create.call(this),
                (this.modes = {}),
                (this.filteredItems = this.items),
                (this.sortHistory = ["original-order"]);
            for (var t in r.modes) this._initLayoutMode(t);
        }),
            (l.reloadItems = function () {
                (this.itemGUID = 0), e.prototype.reloadItems.call(this);
            }),
            (l._itemize = function () {
                for (
                    var t = e.prototype._itemize.apply(this, arguments), i = 0;
                    i < t.length;
                    i++
                ) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (l._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? n.extend(e.options, i) : i),
                    (this.modes[t] = new e(this));
            }),
            (l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout")
                    ? void this.arrange()
                    : void this._layout();
            }),
            (l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, t),
                    (this._isLayoutInited = !0);
            }),
            (l.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches),
                    this._bindArrangeComplete(),
                    this._isInstant
                        ? this._noTransition(this._hideReveal, [e])
                        : this._hideReveal(e),
                    this._sort(),
                    this._layout();
            }),
            (l._init = l.arrange),
            (l._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (l._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e), e;
            }),
            (l._bindArrangeComplete = function () {
                function t() {
                    e &&
                        i &&
                        o &&
                        n.dispatchEvent("arrangeComplete", null, [
                            n.filteredItems,
                        ]);
                }
                var e,
                    i,
                    o,
                    n = this;
                this.once("layoutComplete", function () {
                    (e = !0), t();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), t();
                    }),
                    this.once("revealComplete", function () {
                        (o = !0), t();
                    });
            }),
            (l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (
                    var i = [],
                        o = [],
                        n = [],
                        s = this._getFilterTest(e),
                        r = 0;
                    r < t.length;
                    r++
                ) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a),
                            u && a.isHidden
                                ? o.push(a)
                                : u || a.isHidden || n.push(a);
                    }
                }
                return { matches: i, needReveal: o, needHide: n };
            }),
            (l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering
                    ? function (e) {
                          return u(e.element).is(t);
                      }
                    : "function" == typeof t
                    ? function (e) {
                          return t(e.element);
                      }
                    : function (e) {
                          return o(e.element, t);
                      };
            }),
            (l.updateSortData = function (t) {
                var e;
                t
                    ? ((t = n.makeArray(t)), (e = this.getItems(t)))
                    : (e = this.items),
                    this._getSorters(),
                    this._updateItemsSortData(e);
            }),
            (l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }),
            (l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            });
        var f = (function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    s = n && n[1],
                    r = e(s, o),
                    a = d.sortDataParsers[i[1]];
                return (t = a
                    ? function (t) {
                          return t && a(r(t));
                      }
                    : function (t) {
                          return t && r(t);
                      });
            }
            function e(t, e) {
                return t
                    ? function (e) {
                          return e.getAttribute(t);
                      }
                    : function (t) {
                          var i = t.querySelector(e);
                          return i && i.textContent;
                      };
            }
            return t;
        })();
        (d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (l._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) ||
                        (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }),
            (l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++)
                    if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (l._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (l._resetLayout = function () {
                e.prototype._resetLayout.call(this),
                    this._mode()._resetLayout();
            }),
            (l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (l._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (l._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems),
                        (this.filteredItems = i.concat(this.filteredItems)),
                        (this.items = e.concat(this.items));
                }
            }),
            (l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return (
                    this.hide(e.needHide),
                    this.reveal(e.matches),
                    this.layoutItems(e.matches, !0),
                    e.matches
                );
            }),
            (l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        o,
                        n = e.length;
                    for (i = 0; i < n; i++)
                        (o = e[i]), this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++)
                        delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            });
        var c = l.remove;
        return (
            (l.remove = function (t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }),
            (l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return (this.options.transitionDuration = i), o;
            }),
            (l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            d
        );
    });

/*====================================
    9.scrollup js
  =====================================*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!(function (a, d, p) {
    "use strict";
    (a.fn.scrollUp = function (l) {
        a.data(p.body, "scrollUp") ||
            (a.data(p.body, "scrollUp", !0), a.fn.scrollUp.init(l));
    }),
        (a.fn.scrollUp.init = function (l) {
            var o,
                e,
                r,
                s,
                t,
                c = (a.fn.scrollUp.settings = a.extend(
                    {},
                    a.fn.scrollUp.defaults,
                    l
                )),
                i = !1,
                n = c.scrollTrigger
                    ? a(c.scrollTrigger)
                    : a("<a/>", { id: c.scrollName, href: "#top" });
            switch (
                (c.scrollTitle && n.attr("title", c.scrollTitle),
                n.appendTo("body"),
                c.scrollImg || c.scrollTrigger || n.html(c.scrollText),
                n.css({ display: "none", position: "fixed", zIndex: c.zIndex }),
                c.activeOverlay &&
                    a("<div/>", { id: c.scrollName + "-active" })
                        .css({
                            position: "absolute",
                            top: c.scrollDistance + "px",
                            width: "100%",
                            borderTop: "1px dotted" + c.activeOverlay,
                            zIndex: c.zIndex,
                        })
                        .appendTo("body"),
                c.animation)
            ) {
                case "fade":
                    (o = "fadeIn"), (e = "fadeOut"), (r = c.animationSpeed);
                    break;
                case "slide":
                    (o = "slideDown"), (e = "slideUp"), (r = c.animationSpeed);
                    break;
                default:
                    (o = "show"), (e = "hide"), (r = 0);
            }
            (s =
                "top" === c.scrollFrom
                    ? c.scrollDistance
                    : a(p).height() - a(d).height() - c.scrollDistance),
                a(d).scroll(function () {
                    a(d).scrollTop() > s
                        ? i || (n[o](r), (i = !0))
                        : i && (n[e](r), (i = !1));
                }),
                c.scrollTarget
                    ? "number" == typeof c.scrollTarget
                        ? (t = c.scrollTarget)
                        : "string" == typeof c.scrollTarget &&
                          (t = Math.floor(a(c.scrollTarget).offset().top))
                    : (t = 0),
                n.click(function (l) {
                    l.preventDefault(),
                        a("html, body").animate(
                            { scrollTop: t },
                            c.scrollSpeed,
                            c.easingType
                        );
                });
        }),
        (a.fn.scrollUp.defaults = {
            scrollName: "scrollUp",
            scrollDistance: 300,
            scrollFrom: "top",
            scrollSpeed: 300,
            easingType: "linear",
            animation: "fade",
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: "Scroll to top",
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647,
        }),
        (a.fn.scrollUp.destroy = function (l) {
            a.removeData(p.body, "scrollUp"),
                a("#" + a.fn.scrollUp.settings.scrollName).remove(),
                a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(),
                7 <= a.fn.jquery.split(".")[1]
                    ? a(d).off("scroll", l)
                    : a(d).unbind("scroll", l);
        }),
        (a.scrollUp = a.fn.scrollUp);
})(jQuery, window, document);

/*====================================
    10.jquery.appear.js
  =====================================*/

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
!(function (p) {
    (p.fn.appear = function (r, e) {
        var d = p.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, e);
        return this.each(function () {
            var l,
                a,
                e,
                h = p(this);
            (h.appeared = !1),
                r
                    ? ((l = p(window)),
                      (a = function () {
                          var e, a, r, p, n, t, c, i, o, f, s;
                          h.is(":visible")
                              ? ((e = l.scrollLeft()),
                                (a = l.scrollTop()),
                                (p = (r = h.offset()).left),
                                (n = r.top),
                                (t = d.accX),
                                (c = d.accY),
                                (i = h.height()),
                                (o = l.height()),
                                (f = h.width()),
                                (s = l.width()),
                                a <= n + i + c &&
                                n <= a + o + c &&
                                e <= p + f + t &&
                                p <= e + s + t
                                    ? h.appeared || h.trigger("appear", d.data)
                                    : (h.appeared = !1))
                              : (h.appeared = !1);
                      }),
                      (e = function () {
                          var e;
                          (h.appeared = !0),
                              d.one &&
                                  (l.unbind("scroll", a),
                                  0 <= (e = p.inArray(a, p.fn.appear.checks)) &&
                                      p.fn.appear.checks.splice(e, 1)),
                              r.apply(this, arguments);
                      }),
                      d.one
                          ? h.one("appear", d.data, e)
                          : h.bind("appear", d.data, e),
                      l.scroll(a),
                      p.fn.appear.checks.push(a),
                      a())
                    : h.trigger("appear", d.data);
        });
    }),
        p.extend(p.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function () {
                var e = p.fn.appear.checks.length;
                if (0 < e) for (; e--; ) p.fn.appear.checks[e]();
            },
            run: function () {
                p.fn.appear.timeout && clearTimeout(p.fn.appear.timeout),
                    (p.fn.appear.timeout = setTimeout(
                        p.fn.appear.checkAll,
                        20
                    ));
            },
        }),
        p.each(
            [
                "append",
                "prepend",
                "after",
                "before",
                "attr",
                "removeAttr",
                "addClass",
                "removeClass",
                "toggleClass",
                "remove",
                "css",
                "show",
                "hide",
            ],
            function (e, a) {
                var r = p.fn[a];
                r &&
                    (p.fn[a] = function () {
                        var e = r.apply(this, arguments);
                        return p.fn.appear.run(), e;
                    });
            }
        );
})(jQuery);
