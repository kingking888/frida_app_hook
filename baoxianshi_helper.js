webpackJsonp([19], {
    148: function(e, t, s) {
        "use strict";
        t.a = function(e) {
            var t = 0;
            return e.map(function(e) {
                e.isHide || e.prodOrderList.map(function(e) {
                    e.hadChoice && !e.hide && (t += 1 * e.totalBaof || 0)
                }
                )
            }
            ),
            t
        }
        ,
        t.e = function(e, t) {
            var a = {};
            e && (e.recipientInfo && (a.recipientInfo = u(e.recipientInfo)),
            e.personOrderList && e.personOrderList.map(function(e) {
                a[e.key] = u(e)
            }
            ));
            {
                if (!t)
                    return a;
                if ("string" == typeof t)
                    return a[t];
                if (t.constructor === Array) {
                    var r = [];
                    for (var i in a)
                        -1 !== t.indexOf(i) && r.push(a[i]);
                    return r
                }
            }
        }
        ,
        t.b = function(e) {
            var t = (new Date).getTime();
            return {
                key: t,
                titleName: "待完善险种",
                policyType: "manual_insurance",
                mulInsOrderList: [{
                    eleOrderList: e,
                    key: t,
                    title: !0
                }],
                liabilityOrderList: [],
                companyId: null ,
                hide: !1,
                trade: !1,
                companyName: "",
                autoImport: !1,
                liabilityShowType: 0,
                required: !1
            }
        }
        ,
        t.c = function(e) {
            return e.productGroupList.every(function(e) {
                return !!e.prodOrderList.filter(function(e) {
                    return !!e.hadChoice && !e.hide
                }
                ).length
            }
            )
        }
        ,
        t.d = function(e) {
            return e.productGroupList.every(function(e) {
                var t = e.prodOrderList.filter(function(e) {
                    return !!e.hadChoice && !e.hide
                }
                );
                return !!t.length && t.every(function(e) {
                    return function(e) {
                        var t = !0
                          , a = function(n) {
                            if (!n)
                                return n;
                            var o = i()({}, n, {
                                common: {},
                                mulInsOrderList: []
                            });
                            return n.mulInsOrderList.map(function(r) {
                                var i = u(r);
                                "common" == i.key ? o.common = i : i.title && !i.groupKey && (i.isGroup ? (i.insuranceId.constructor == Array ? i.insuranceId : [i.insuranceId]).map(function(t) {
                                    var e = n.mulInsOrderList.filter(function(e) {
                                        return e.key === t
                                    }
                                    )[0];
                                    if (e) {
                                        var a = u(e);
                                        void 0 !== r.account && (a.account = r.account),
                                        void 0 !== r.accountData && (a.accountData = r.accountData),
                                        r.eleOrderList.map(function(e) {
                                            "title" != e.key && "insuranceId" != e.key && (a[e.key] = i[e.key])
                                        }
                                        ),
                                        o.mulInsOrderList.push(s.i(l.a)(a))
                                    }
                                }
                                ) : o.mulInsOrderList.push(i))
                            }
                            ),
                            o
                        }
                        (e);
                        if (a.policyType) {
                            var r = a.mulInsOrderList.filter(function(e) {
                                return e.title
                            }
                            );
                            t = !!r.length && r.every(function(t) {
                                return ["name", "iDuration", "pPeriod"].every(function(e) {
                                    return void 0 !== t[e] && null  !== t[e]
                                }
                                )
                            }
                            )
                        }
                        return t
                    }
                    (e)
                }
                )
            }
            )
        }
        ;
        var a = s(4)
          , r = (s.n(a),
        s(10))
          , i = s.n(r)
          , l = s(3);
        function u(e) {
            var a = {}
              , t = function(t) {
                "eleOrderList" == t ? e[t].map(function(e) {
                    a[e.key] = e.value
                }
                ) : e.eleOrderList && !e.eleOrderList.every(function(e) {
                    return e.key !== t
                }
                ) || (a[t] = e[t])
            }
            ;
            for (var r in e)
                t(r);
            return a
        }
    },
    17: function(e, t, a) {
        "use strict";
        a.d(t, "a", function() {
            return i
        }
        );
        var r = navigator.userAgent
          , i = (/Android/i.test(r),
        /(iPhone|iPad|iPod)/i.test(r),
        "ontouchstart" in window || window.DocumentTouch && (document,
        window.DocumentTouch),
        function() {
            return /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && (375 === window.screen.width && 812 === window.screen.height || 375 === window.screen.height && 812 === window.screen.width) || /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 2 === window.devicePixelRatio && (414 === window.screen.width && 896 === window.screen.height || 414 === window.screen.height && 896 === window.screen.width) || /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && (414 === window.screen.width && 896 === window.screen.height || 414 === window.screen.height && 896 === window.screen.width)
        }
        )
    },
    2: function(e, t) {
        e.exports = Vue
    },
    3: function(e, t, p) {
        "use strict";
        p.d(t, "g", function() {
            return f
        }
        ),
        p.d(t, "j", function() {
            return m
        }
        ),
        p.d(t, "h", function() {
            return v
        }
        ),
        t.f = h,
        t.e = D,
        t.c = g,
        t.d = y,
        t.b = O,
        t.i = function(e, t) {
            var a = t ? new Date(t) : new Date
              , r = new Date(e)
              , i = a.getFullYear() - r.getFullYear();
            (a.getMonth() - r.getMonth() < 0 || a.getMonth() - r.getMonth() == 0 && a.getDate() - r.getDate() < 0) && i--;
            return i
        }
        ,
        t.l = b,
        t.a = L,
        p.d(t, "k", function() {
            return I
        }
        );
        var a = p(52)
          , n = p.n(a)
          , r = p(46)
          , o = p.n(r)
          , i = p(2)
          , s = (p.n(i),
        p(59))
          , l = p.n(s)
          , u = p(58)
          , c = p.n(u)
          , d = p(17)
          , _ = -1 !== location.hostname.search(/pbf\.winbaoxian\.com/)
          , f = _
          , m = -1 !== location.hostname.search(/localhost|192\.168|172\.0\.0\.1/)
          , v = p.i(d.a)() ? 34 : 0;
        function h(e) {
            var t = Math.round((new Date - e) / 1e3);
            return t < 60 ? t + "秒前" : 60 <= t && t < 3600 ? Math.round(t / 60) + "分钟前" : 3600 <= t && t < 86400 ? Math.round(t / 60 / 60) + "小时前" : 86400 <= t && t < 2592e3 ? Math.round(t / 60 / 60 / 24) + "天前" : void 0
        }
        function D(e) {
            var i = "个十百千万@#%亿^&~"
              , t = "零一二三四五六七八九"
              , n = (e + "").split("")
              , a = [];
            if (12 < n.length)
                throw new Error("too big");
            for (var r = 0, o = n.length - 1; r <= o; r++)
                (1 == o || 5 == o || 9 == o) && 0 == r ? "1" != n[r] && a.push(t.charAt(n[r])) : a.push(t.charAt(n[r])),
                r != o && a.push(i.charAt(o - r));
            return a.join("").replace(/零([十百千万亿@#%^&~])/g, function(e, t, a) {
                if (-1 != (a = i.indexOf(t))) {
                    if ("亿" == t)
                        return t;
                    if ("万" == t)
                        return t;
                    if ("0" == n[o - a])
                        return "零"
                }
                return ""
            }
            ).replace(/零+/g, "零").replace(/零([万亿])/g, function(e, t) {
                return t
            }
            ).replace(/亿[万千百]/g, "亿").replace(/[零]$/, "").replace(/[@#%^&~]/g, function(e) {
                return {
                    "@": "十",
                    "#": "百",
                    "%": "千",
                    "^": "十",
                    "&": "百",
                    "~": "千"
                }[e]
            }
            ).replace(/([亿万])([一-九])/g, function(e, t, a, r) {
                return -1 != (r = i.indexOf(t)) && "0" == n[o - r] ? t + "零" + a : e
            }
            )
        }
        function g(e) {
            var t = e.pageId
              , a = void 0 === t ? "" : t
              , r = (e.isProduct,
            e.heartBeatRate)
              , i = void 0 === r ? 1e3 : r
              , n = e.projectInfo
              , o = void 0 === n ? {
                url: location.href
            } : n
              , s = e.Vue
              , l = e.name
              , u = void 0 === l ? p.i({
                NODE_ENV: "production"
            }).PKG_NAME : l
              , c = e.version
              , d = void 0 === c ? p.i({
                NODE_ENV: "production"
            }).PKG_VERSION : c;
            window.WeiyiStatSDK && window.WeiyiStatSDK.init({
                pageId: a,
                isProduct: f,
                heartBeatRate: i,
                projectInfo: o,
                Vue: s,
                name: u,
                version: d
            })
        }
        function y() {
            window.appBridge && appBridge.checkAppFeature("APP_VIEW") ? appBridge.gotoAppView("login") : window.location.href = (_ ? "https://app.winbaoxian.com" : "//app.winbaoxian.cn") + "/user/login?requestUrl=" + encodeURIComponent(location.href)
        }
        function O(e, t) {
            if (0 === arguments.length)
                return null ;
            var a = t || "{y}-{m}-{d} {h}:{i}:{s}"
              , r = void 0;
            if (null  !== e) {
                "object" === (void 0 === e ? "undefined" : o()(e)) ? r = e : (10 === ("" + e).length && (e = 1e3 * parseInt(e)),
                r = new Date(e));
                var i = {
                    y: r.getFullYear(),
                    m: r.getMonth() + 1,
                    d: r.getDate(),
                    h: r.getHours(),
                    i: r.getMinutes(),
                    s: r.getSeconds(),
                    a: r.getDay()
                };
                return a.replace(/{(y|m|d|h|i|s|a)+}/g, function(e, t) {
                    var a = i[t];
                    return "a" === t ? ["日", "一", "二", "三", "四", "五", "六"][a] : (0 < e.length && a < 10 && (a = "0" + a),
                    a || 0)
                }
                )
            }
        }
        function b(e, t) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var a = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t || location.search);
            return null  === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
        }
        function L(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new n.a;
            if (!e || "object" !== (void 0 === e ? "undefined" : o()(e)))
                return e;
            if (t.has(e))
                return t.get(e);
            var a = void 0
              , r = e.constructor;
            switch (r) {
            case RegExp:
                a = new r(e);
                break;
            case Date:
                a = new r(e.getTime());
                break;
            default:
                a = new r
            }
            for (var i in t.set(e, a),
            e)
                e.hasOwnProperty(i) && (a[i] = "object" === o()(e[i]) ? L(e[i], t) : e[i]);
            return a
        }
        var I = new l.a(c.a)
    },
    337: function(e, t, a) {
        "use strict";
        t.a = function(t, a) {
            var e = t[p("0x0")][p("0x1") + p("0x2")]
              , r = {};
            null  !== t[p("0x3") + p("0x4")] && (r["insuranceT" + p("0x4")] = t[p("0x3") + p("0x4")]);
            r[p("0x5")] = 1 * e[0][p("0x6")],
            r[p("0x7")] = 1 * e[0][p("0x8")],
            e[1] && (p("0x9") != p("0x9") ? r[p("0xa")] += "i=" + ele + ";" : (r.applicantAge = isNaN(1 * e[1][p("0x6")]) ? 0 : 1 * e[1][p("0x6")],
            r.applicantSex = isNaN(1 * e[1].sex) ? 0 : 1 * e[1].sex));
            var i = []
              , n = []
              , o = t[p("0xb") + "upList"].filter(function(e) {
                return e[p("0xc")] === a[p("0xd") + "ey"]
            }
            )[0][p("0xe") + p("0xf")][p("0x10")]();
            o && o[p("0x11")](function(e) {
                "Tvstc" !== p("0x12") ? (i[p("0x13")](e[p("0xc")]),
                e.mulInsOrderList[p("0x11")](function(e) {
                    n[p("0x13")](e[p("0xc")])
                }
                )) : r[p("0x14")] += "p=" + ele + ";"
            }
            ),
            r[p("0x14")] = "",
            r[p("0xa")] = "",
            i[p("0x15")](function(e, t) {
                return e - t
            }
            ),
            i[p("0x11")](function(e) {
                r.product += "p=" + e + ";"
            }
            ),
            n[p("0x15")](function(e, t) {
                return e - t
            }
            ),
            n.map(function(e) {
                "vWpRc" !== p("0x16") ? r[p("0xa")] += "i=" + e + ";" : r[p("0x3") + "ypeId"] = t[p("0x3") + "ypeId"]
            }
            ),
            r.params = JSON[p("0x17")](t);
            var s = "";
            for (var l in r)
                s += l + "=" + r[l] + "&";
            return delete r.params,
            d.a[p("0x18")][p("0x19")](JSON[p("0x17")](u()({}, r, {
                signMd5: c()(s)
            })), d.a.enc[p("0x1a")][p("0x1b")](p("0x1c") + p("0x1d")), {
                mode: d.a[p("0x1e")][p("0x1f")],
                padding: d.a[p("0x20")][p("0x21")]
            })[p("0x22")]() || c()(s) || "20190929"
        }
        ;
        var r, i, n = a(10), u = a.n(n), o = a(785), c = a.n(o), s = a(653), d = a.n(s), l = ["ist", "slice", "map", "GiYeu", "push", "product", "sort", "dkzHP", "stringify", "AES", "encrypt", "Utf8", "parse", "67u3Dg5fcc", "06UntP", "mode", "ECB", "pad", "Pkcs7", "toString", "personData", "personOrde", "rList", "insuranceT", "ypeId", "insuredAge", "age", "insuredSex", "sex", "lfXTM", "insurance", "productGro", "key", "groupDataK", "prodOrderL"];
        r = l,
        i = 475,
        function(e) {
            for (; --e; )
                r.push(r.shift())
        }
        (++i);
        var p = function(e, t) {
            return l[e -= 0]
        }
    },
    338: function(e, t) {
        var n;
        document.createTouch || (document.createTouch = function(e, t, a, r, i, n, o) {
            return new s(t,a,{
                pageX: r,
                pageY: i,
                screenX: n,
                screenY: o,
                clientX: r - window.pageXOffset,
                clientY: i - window.pageYOffset
            },0,0)
        }
        ),
        document.createTouchList || (document.createTouchList = function() {
            for (var e = a(), t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return e.length = arguments.length,
            e
        }
        );
        var s = function(e, t, a, r, i) {
            r = r || 0,
            i = i || 0,
            this.identifier = t,
            this.target = e,
            this.clientX = a.clientX + r,
            this.clientY = a.clientY + i,
            this.screenX = a.screenX + r,
            this.screenY = a.screenY + i,
            this.pageX = a.pageX + r,
            this.pageY = a.pageY + i
        }
        ;
        function a() {
            var e = [];
            return e.item = function(e) {
                return this[e] || null 
            }
            ,
            e.identifiedTouch = function(e) {
                return this[e + 1] || null 
            }
            ,
            e
        }
        function r(i) {
            return function(e) {
                var t, a, r;
                1 === e.which && (("mousedown" === e.type || !n || n && !n.dispatchEvent) && (n = e.target),
                t = i,
                a = e,
                (r = document.createEvent("Event")).initEvent(t, !0, !0),
                r.altKey = a.altKey,
                r.ctrlKey = a.ctrlKey,
                r.metaKey = a.metaKey,
                r.shiftKey = a.shiftKey,
                r.touches = l(a),
                r.targetTouches = l(a),
                r.changedTouches = o(a),
                n.dispatchEvent(r),
                "mouseup" === e.type && (n = null ))
            }
        }
        function o(e) {
            var t = a();
            return t.push(new s(n,1,e,0,0)),
            t
        }
        function l(e) {
            return "mouseup" === e.type ? a() : o(e)
        }
        function i() {
            !function() {
                for (var e = [window, document.documentElement], t = ["ontouchstart", "ontouchmove", "ontouchcancel", "ontouchend"], a = 0; a < e.length; a++)
                    for (var r = 0; r < t.length; r++)
                        e[a] && void 0 === e[a][t[r]] && (e[a][t[r]] = null )
            }
            (),
            window.addEventListener("mousedown", r("touchstart"), !0),
            window.addEventListener("mousemove", r("touchmove"), !0),
            window.addEventListener("mouseup", r("touchend"), !0)
        }
        i.multiTouchOffset = 75,
        window.self !== window.top && new i
    },
    47: function(e, t, a) {
        "use strict";
        a.d(t, "d", function() {
            return o
        }
        ),
        a.d(t, "b", function() {
            return s
        }
        ),
        a.d(t, "c", function() {
            return u
        }
        ),
        a.d(t, "a", function() {
            return p
        }
        );
        var r = a(9)
          , i = a.n(r);
        function n(e, t) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var a = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t || location.search);
            return null  === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
        }
        -1 !== location.hostname.search(/pbf\.winbaoxian\.com/) || (-1 !== location.hostname.search(/pbf\.winbaoxian\.cn/) || location.hostname.search(/192\.168|localhost/));
        var o = n("planbookId")
          , s = n("pbType")
          , l = (n("cId"),
        n("preview"));
        !o && 1 != l && localStorage.getItem("intellectScheme") && JSON.parse(localStorage.getItem("intellectScheme"))["s" + o];
        var u = n("uuid")
          , c = (n("schemeUuid"),
        location.search ? location.search.substr(1) : "")
          , d = {};
        c && (d = i.a.parse(c));
        var p = d
    },
    735: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        // var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(30), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(147), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(46), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__), __WEBPACK_IMPORTED_MODULE_3__env_js__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_4__md5Token_min_js__ = __webpack_require__(337), __WEBPACK_IMPORTED_MODULE_5__static_js_touch_simulator_js__ = __webpack_require__(338), __WEBPACK_IMPORTED_MODULE_5__static_js_touch_simulator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_js_touch_simulator_js__), __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__ = __webpack_require__(47), __WEBPACK_IMPORTED_MODULE_7__planbook_utils_js__ = __webpack_require__(148), baseApiPath;
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(30), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(147), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(46), __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__), __WEBPACK_IMPORTED_MODULE_3__env_js__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_4__md5Token_min_js__ = __webpack_require__(337), __WEBPACK_IMPORTED_MODULE_5__static_js_touch_simulator_js__ = __webpack_require__(338), __WEBPACK_IMPORTED_MODULE_5__static_js_touch_simulator_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_js_touch_simulator_js__), __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__ = __webpack_require__(47), baseApiPath;
        window.__webpack_require__ = __webpack_require__(337)["a"];
        // var __WEBPACK_IMPORTED_MODULE_7__planbook_utils_js__ = __webpack_require__(148)
        var s = '{"pbType":"","insuranceTypeId":6911,"totalBaof":1740,"personData":{"personOrderList":[{"birthday":"","title":true,"name":"","sex":1,"age":30,"key":"insuredInfo"},{"birthday":"","label":"投保人信息","title":false,"name":"","applicantAndInsuredSame":0,"sex":1,"age":30,"key":"applicantInfo"}],"recipientInfo":{"title":false,"name":"","sex":1,"shareTitle":"","key":"recipientInfo","coverId":0,"coverName":"模板1"}},"productGroupList":[{"key":"allMainInsData","prodOrderList":[{"key":3159,"titleName":"福禄相伴两全保险（SJ3）","tradeId":-1,"companyId":1,"companyName":"中国人寿","liabilityShowType":0,"inputResultSwitch":false,"totalBaof":"1740.00","common":{},"mulInsOrderList":[{"code":"SJ3","isFollowing":false,"calculatorType":"","feeBaseType":"baoe2baof","allowSamePerson":false,"scale":2,"canRenewFlag":false,"title":true,"iDuration":"a80","pPeriod":"b20","baoe":100000,"feeType":"baoe2baof","durationType":0,"required":true,"roundingMode":"HALF_UP","trade":false,"feeBase":10000,"huomian":"","name":"福禄相伴两全保险","resultFormulaRef":null,"disabled":true,"reduceBaof":null,"key":19533,"account":false,"isCheckbox":false,"showPlanDesc":false,"pPeriodDesc":"20年","baoeDesc":"10万","baofDesc":1740,"iDurationDesc":"至80岁","maxAge":60,"baof":1740,"eleOrderInResult":[{"value":"iDuration","label":"保险期间"},{"value":"pPeriod","label":"交费期间"},{"value":"baoe","label":"保额"}]}]}]}],"theme":"healthy","coverId":0,"commonData":{"feedbackUrl":"","compare":true,"withVerify":false,"discussUrl":"","featureUrl":""},"displayFormatSort":"responsibility","categorySort":"healthy","title":"福禄相伴两全保险"}'
        var ss = JSON.parse(s);
        var sign = window.__webpack_require__(ss,{groupDataKey: "allMainInsData"});
        console.log(sign);

        var res = '{"personData": {"recipientInfo": {"eleOrderList": [{"value": false, "key": "title"}, {"value": "", "key": "name"}, {"value": 1, "key": "sex"}], "key": "recipientInfo"}, "personOrderList": [{"birthday": "", "eleOrderList": [{"value": true, "key": "title"}, {"value": 1, "key": "sex"}, {"opts": [0, 60], "value": 30, "key": "age"}], "key": "insuredInfo"}, {"birthday": "", "eleOrderList": [{"value": true, "key": "title"}, {"value": 1, "key": "sex"}, {"opts": [16, 70], "value": 30, "key": "age"}], "key": "applicantInfo"}]}, "displayFormatSort": "responsibility", "commonData": {"feedbackUrl": "", "compare": true, "withVerify": false, "discussUrl": "", "featureUrl": ""}, "theme": "healthy", "categorySort": "healthy", "productGroupList": [{"defNum": 1, "prodOrderList": [{"mulInsOrderList": [{"code": "1571", "isFollowing": false, "calculatorType": "", "feeBaseType": "baoe2baof", "allowSamePerson": false, "scale": 2, "canRenewFlag": false, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u5b88\u62a4\u767e\u5206\u767e", "value": true, "key": "title"}, {"optConf": null, "common": false, "opts": [{"val": "a60", "desc": "\u81f360\u5c81"}, {"val": "a70", "desc": "\u81f370\u5c81"}, {"val": "a80", "desc": "\u81f380\u5c81"}], "componentName": "cmCommonSelect", "isDisabled": null, "labelName": "\u4fdd\u9669\u671f\u95f4", "value": "a80", "key": "iDuration", "isHide": false}, {"optConf": null, "common": false, "opts": [{"val": "b10", "desc": "10\u5e74"}, {"val": "b15", "desc": "15\u5e74"}, {"val": "b20", "desc": "20\u5e74"}, {"val": "b30", "desc": "30\u5e74"}], "componentName": "cmCommonSelect", "isDisabled": null, "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b20", "key": "pPeriod", "isHide": false}, {"optConf": null, "common": false, "opts": [{"val": 1, "desc": "80\u5c81\u8d77"}, {"val": 2, "desc": "70\u5c81\u8d77"}, {"val": 3, "desc": "60\u5c81\u8d77"}], "componentName": "cmCommonSelect", "isDisabled": null, "labelName": "\u91cd\u75be\u9669\u8eab\u6545\u8d23\u4efb\u8d77\u59cb\u65f6\u95f4", "value": 1, "key": "extra1", "isHide": true}, {"common": false, "regExpMessage": "", "componentName": "cmCommonInput", "isDisabled": null, "labelName": "\u4fdd\u989d", "value": 300000, "key": "baoe", "regExp": "", "isHide": null, "compareItem": null}], "feeType": "baoe2baof", "durationType": 0, "required": true, "roundingMode": "HALF_UP", "trade": false, "feeBase": 10000, "huomian": "", "name": "\u5b88\u62a4\u767e\u5206\u767e", "resultFormulaRef": null, "reduceBaof": null, "key": 20936, "account": false, "isCheckbox": false}, {"code": "1572", "isFollowing": false, "calculatorType": "", "feeBaseType": "baoe2baof", "allowSamePerson": false, "scale": 2, "canRenewFlag": false, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u5b88\u62a4\u767e\u5206\u767e\u75be", "value": true, "key": "title"}, {"common": false, "opts": [{"val": "a999", "desc": "\u7ec8\u8eab"}], "componentName": "cmCommonSelect", "labelName": "\u4fdd\u9669\u671f\u95f4", "value": "a999", "key": "iDuration", "isHide": false}, {"common": false, "opts": [{"val": "b10", "desc": "10\u5e74"}, {"val": "b15", "desc": "15\u5e74"}, {"val": "b20", "desc": "20\u5e74"}, {"val": "b30", "desc": "30\u5e74"}], "componentName": "cmCommonSelect", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b10", "key": "pPeriod", "isHide": true}, {"optConf": null, "common": false, "opts": [{"val": 1, "desc": "80\u5c81\u8d77"}, {"val": 2, "desc": "70\u5c81\u8d77"}, {"val": 3, "desc": "60\u5c81\u8d77"}], "componentName": "cmCommonSelect", "isDisabled": false, "labelName": "\u91cd\u75be\u9669\u8eab\u6545\u8d23\u4efb\u8d77\u59cb\u65f6\u95f4", "value": "1", "key": "extra1", "isHide": true}, {"componentName": "cmCommonInput", "common": false, "labelName": "\u4fdd\u989d", "value": "", "key": "baoe", "isHide": true}], "feeType": "baoe2baof", "durationType": 0, "required": false, "roundingMode": "HALF_UP", "refInsuranceId": "-1", "trade": false, "feeBase": 10000, "huomian": "", "name": "\u5b88\u62a4\u767e\u5206\u767e\u75be", "resultFormulaRef": null, "reduceBaof": null, "key": 20937, "account": false, "isCheckbox": false}, {"code": "1382", "isFollowing": true, "calculatorType": "", "feeBaseType": "baoe2baof", "allowSamePerson": false, "scale": 2, "canRenewFlag": false, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u798f\u661f\u8f7b\u75c7", "value": true, "key": "title"}, {"common": false, "opts": [{"val": "a999", "desc": "\u7ec8\u8eab"}], "componentName": "cmCommonSelect", "labelName": "\u4fdd\u9669\u671f\u95f4", "value": "a999", "key": "iDuration", "isHide": false}, {"common": false, "opts": [{"val": "b10", "desc": "10\u5e74"}, {"val": "b15", "desc": "15\u5e74"}, {"val": "b20", "desc": "20\u5e74"}, {"val": "b30", "desc": "30\u5e74"}], "componentName": "cmCommonSelect", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b10", "key": "pPeriod", "isHide": false}, {"unit": "", "common": false, "regExpMessage": "", "componentName": "cmCommonInput", "isDisabled": false, "labelName": "\u4fdd\u989d", "value": 60000, "key": "baoe", "regExp": "", "isHide": false}], "feeType": "baoe2baof", "durationType": 0, "required": false, "roundingMode": "HALF_UP", "refInsuranceId": "", "trade": false, "feeBase": 10000, "huomian": "", "name": "\u798f\u661f\u8f7b\u75c7", "resultFormulaRef": null, "reduceBaof": null, "key": 19005, "account": false, "isCheckbox": false}, {"code": "1385", "isFollowing": false, "calculatorType": "", "allowSamePerson": false, "scale": 2, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u8f7b\u75c710\u8c41\u514d\uff08\u88ab\u4fdd\u4eba\uff09", "value": true, "key": "title"}, {"common": false, "opts": [{"val": "b1", "desc": "1\u5e74"}, {"val": "b2", "desc": "2\u5e74"}, {"val": "b3", "desc": "3\u5e74"}, {"val": "b4", "desc": "4\u5e74"}, {"val": "b5", "desc": "5\u5e74"}, {"val": "b6", "desc": "6\u5e74"}, {"val": "b7", "desc": "7\u5e74"}, {"val": "b8", "desc": "8\u5e74"}, {"val": "b9", "desc": "9\u5e74"}, {"val": "b10", "desc": "10\u5e74"}, {"val": "b11", "desc": "11\u5e74"}, {"val": "b12", "desc": "12\u5e74"}, {"val": "b13", "desc": "13\u5e74"}, {"val": "b14", "desc": "14\u5e74"}, {"val": "b15", "desc": "15\u5e74"}, {"val": "b16", "desc": "16\u5e74"}, {"val": "b17", "desc": "17\u5e74"}, {"val": "b18", "desc": "18\u5e74"}, {"val": "b19", "desc": "19\u5e74"}, {"val": "b20", "desc": "20\u5e74"}, {"val": "b21", "desc": "21\u5e74"}, {"val": "b22", "desc": "22\u5e74"}, {"val": "b23", "desc": "23\u5e74"}, {"val": "b24", "desc": "24\u5e74"}, {"val": "b25", "desc": "25\u5e74"}, {"val": "b26", "desc": "26\u5e74"}, {"val": "b27", "desc": "27\u5e74"}, {"val": "b28", "desc": "28\u5e74"}, {"val": "b29", "desc": "29\u5e74"}], "componentName": "cmCommonSelect", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b1", "key": "pPeriod", "isHide": true}, {"componentName": "cmCommonInput", "common": false, "labelName": "\u4fdd\u989d", "value": "", "key": "baoe", "isHide": true}], "durationType": 0, "pMinus": "1", "required": false, "roundingMode": "HALF_UP", "refInsuranceId": "-1", "trade": false, "huomian": "beiHuomian", "name": "\u8f7b\u75c710\u8c41\u514d\uff08\u88ab\u4fdd\u4eba\uff09", "reduceBaof": null, "key": 19144, "account": false, "isCheckbox": false, "dMinus": "0"}, {"code": "1385", "isFollowing": false, "calculatorType": "", "allowSamePerson": false, "scale": 2, "eleOrderList": [{"common": false, "componentName": "cmCommonTitle", "isDisabled": false, "labelName": "\u8f7b\u75c710\u8c41\u514d\uff08\u6295\u4fdd\u4eba\uff09", "value": true, "key": "title", "isHide": false}, {"common": false, "opts": [{"val": "b1", "desc": "1\u5e74"}, {"val": "b2", "desc": "2\u5e74"}, {"val": "b3", "desc": "3\u5e74"}, {"val": "b4", "desc": "4\u5e74"}, {"val": "b5", "desc": "5\u5e74"}, {"val": "b6", "desc": "6\u5e74"}, {"val": "b7", "desc": "7\u5e74"}, {"val": "b8", "desc": "8\u5e74"}, {"val": "b9", "desc": "9\u5e74"}, {"val": "b10", "desc": "10\u5e74"}, {"val": "b11", "desc": "11\u5e74"}, {"val": "b12", "desc": "12\u5e74"}, {"val": "b13", "desc": "13\u5e74"}, {"val": "b14", "desc": "14\u5e74"}, {"val": "b15", "desc": "15\u5e74"}, {"val": "b16", "desc": "16\u5e74"}, {"val": "b17", "desc": "17\u5e74"}, {"val": "b18", "desc": "18\u5e74"}, {"val": "b19", "desc": "19\u5e74"}, {"val": "b20", "desc": "20\u5e74"}, {"val": "b21", "desc": "21\u5e74"}, {"val": "b22", "desc": "22\u5e74"}, {"val": "b23", "desc": "23\u5e74"}, {"val": "b24", "desc": "24\u5e74"}, {"val": "b25", "desc": "25\u5e74"}, {"val": "b26", "desc": "26\u5e74"}, {"val": "b27", "desc": "27\u5e74"}, {"val": "b28", "desc": "28\u5e74"}, {"val": "b29", "desc": "29\u5e74"}], "componentName": "cmCommonSelect", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b1", "key": "pPeriod", "isHide": true}, {"componentName": "cmCommonInput", "common": false, "labelName": "\u4fdd\u989d", "value": "", "key": "baoe", "isHide": true}], "durationType": 0, "pMinus": "1", "required": false, "roundingMode": "HALF_UP", "refInsuranceId": "-1", "trade": false, "huomian": "touHuomian", "name": "\u8f7b\u75c710\u8c41\u514d\uff08\u6295\u4fdd\u4eba\uff09", "reduceBaof": null, "key": 19141, "account": false, "isCheckbox": false, "dMinus": "0"}, {"code": "1296", "isFollowing": false, "calculatorType": "", "allowSamePerson": false, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u8c41\u514d\u91cd\u75beB18", "value": true, "key": "title"}, {"common": false, "opts": [{"val": "b1", "desc": "1\u5e74\u4ea4"}, {"val": "b2", "desc": "2\u5e74\u4ea4"}, {"val": "b3", "desc": "3\u5e74\u4ea4"}, {"val": "b4", "desc": "4\u5e74\u4ea4"}, {"val": "b5", "desc": "5\u5e74\u4ea4"}, {"val": "b6", "desc": "6\u5e74\u4ea4"}, {"val": "b7", "desc": "7\u5e74\u4ea4"}, {"val": "b8", "desc": "8\u5e74\u4ea4"}, {"val": "b9", "desc": "9\u5e74\u4ea4"}, {"val": "b10", "desc": "10\u5e74\u4ea4"}, {"val": "b11", "desc": "11\u5e74\u4ea4"}, {"val": "b12", "desc": "12\u5e74\u4ea4"}, {"val": "b13", "desc": "13\u5e74\u4ea4"}, {"val": "b14", "desc": "14\u5e74\u4ea4"}, {"val": "b15", "desc": "15\u5e74\u4ea4"}, {"val": "b16", "desc": "16\u5e74\u4ea4"}, {"val": "b17", "desc": "17\u5e74\u4ea4"}, {"val": "b18", "desc": "18\u5e74\u4ea4"}, {"val": "b19", "desc": "19\u5e74\u4ea4"}, {"val": "b20", "desc": "20\u5e74\u4ea4"}, {"val": "b21", "desc": "21\u5e74\u4ea4"}, {"val": "b22", "desc": "22\u5e74\u4ea4"}, {"val": "b23", "desc": "23\u5e74\u4ea4"}, {"val": "b24", "desc": "24\u5e74\u4ea4"}, {"val": "b25", "desc": "25\u5e74\u4ea4"}, {"val": "b26", "desc": "26\u5e74\u4ea4"}, {"val": "b27", "desc": "27\u5e74\u4ea4"}, {"val": "b28", "desc": "28\u5e74\u4ea4"}, {"val": "b29", "desc": "29\u5e74\u4ea4"}, {"val": "b30", "desc": "30\u5e74\u4ea4"}, {"val": "b31", "desc": "31\u5e74\u4ea4"}, {"val": "b32", "desc": "32\u5e74\u4ea4"}, {"val": "b33", "desc": "33\u5e74\u4ea4"}, {"val": "b34", "desc": "34\u5e74\u4ea4"}, {"val": "b35", "desc": "35\u5e74\u4ea4"}, {"val": "b36", "desc": "36\u5e74\u4ea4"}, {"val": "b37", "desc": "37\u5e74\u4ea4"}, {"val": "b38", "desc": "38\u5e74\u4ea4"}, {"val": "b39", "desc": "39\u5e74\u4ea4"}, {"val": "b40", "desc": "40\u5e74\u4ea4"}, {"val": "b41", "desc": "41\u5e74\u4ea4"}, {"val": "b42", "desc": "42\u5e74\u4ea4"}, {"val": "b43", "desc": "43\u5e74\u4ea4"}, {"val": "b44", "desc": "44\u5e74\u4ea4"}, {"val": "b45", "desc": "45\u5e74\u4ea4"}, {"val": "b46", "desc": "46\u5e74\u4ea4"}, {"val": "b47", "desc": "47\u5e74\u4ea4"}, {"val": "b48", "desc": "48\u5e74\u4ea4"}, {"val": "b49", "desc": "49\u5e74\u4ea4"}, {"val": "b50", "desc": "50\u5e74\u4ea4"}, {"val": "b51", "desc": "51\u5e74\u4ea4"}, {"val": "b52", "desc": "52\u5e74\u4ea4"}, {"val": "b53", "desc": "53\u5e74\u4ea4"}, {"val": "b54", "desc": "54\u5e74\u4ea4"}, {"val": "b55", "desc": "55\u5e74\u4ea4"}, {"val": "b56", "desc": "56\u5e74\u4ea4"}, {"val": "b57", "desc": "57\u5e74\u4ea4"}, {"val": "b58", "desc": "58\u5e74\u4ea4"}], "componentName": "cmCommonSelect", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b1", "key": "pPeriod", "isHide": true}, {"componentName": "cmCommonInput", "common": false, "labelName": "\u4fdd\u989d", "value": "", "key": "baoe", "isHide": true}], "durationType": 1, "pMinus": "1", "required": false, "groupKey": "touhm", "refInsuranceId": "-1", "groupName": "\u6295\u4fdd\u4eba\u8c41\u514d", "trade": false, "huomian": "shuangHuomian", "name": "\u8c41\u514d\u91cd\u75beB18", "key": 17559, "account": false, "isCheckbox": false, "dMinus": "0"}, {"code": "1295", "isFollowing": true, "calculatorType": "", "allowSamePerson": false, "scale": 2, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u8c41\u514d\u5b9a\u671fA18", "value": true, "key": "title"}, {"common": false, "opts": [{"val": "b2", "desc": "2\u5e74"}, {"val": "b3", "desc": "3\u5e74"}, {"val": "b4", "desc": "4\u5e74"}, {"val": "b5", "desc": "5\u5e74"}, {"val": "b6", "desc": "6\u5e74"}, {"val": "b7", "desc": "7\u5e74"}, {"val": "b8", "desc": "8\u5e74"}, {"val": "b9", "desc": "9\u5e74"}, {"val": "b10", "desc": "10\u5e74"}, {"val": "b11", "desc": "11\u5e74"}, {"val": "b12", "desc": "12\u5e74"}, {"val": "b13", "desc": "13\u5e74"}, {"val": "b14", "desc": "14\u5e74"}, {"val": "b15", "desc": "15\u5e74"}, {"val": "b16", "desc": "16\u5e74"}, {"val": "b17", "desc": "17\u5e74"}, {"val": "b18", "desc": "18\u5e74"}, {"val": "b19", "desc": "19\u5e74"}, {"val": "b20", "desc": "20\u5e74"}, {"val": "b21", "desc": "21\u5e74"}, {"val": "b22", "desc": "22\u5e74"}, {"val": "b23", "desc": "23\u5e74"}, {"val": "b24", "desc": "24\u5e74"}, {"val": "b25", "desc": "25\u5e74"}, {"val": "b26", "desc": "26\u5e74"}, {"val": "b27", "desc": "27\u5e74"}, {"val": "b28", "desc": "28\u5e74"}, {"val": "b29", "desc": "29\u5e74"}, {"val": "b30", "desc": "30\u5e74"}, {"val": "b31", "desc": "31\u5e74"}, {"val": "b32", "desc": "32\u5e74"}, {"val": "b33", "desc": "33\u5e74"}, {"val": "b34", "desc": "34\u5e74"}, {"val": "b35", "desc": "35\u5e74"}, {"val": "b36", "desc": "36\u5e74"}, {"val": "b37", "desc": "37\u5e74"}, {"val": "b38", "desc": "38\u5e74"}, {"val": "b39", "desc": "39\u5e74"}, {"val": "b40", "desc": "40\u5e74"}, {"val": "b41", "desc": "41\u5e74"}, {"val": "b42", "desc": "42\u5e74"}, {"val": "b43", "desc": "43\u5e74"}, {"val": "b44", "desc": "44\u5e74"}, {"val": "b45", "desc": "45\u5e74"}, {"val": "b46", "desc": "46\u5e74"}, {"val": "b47", "desc": "47\u5e74"}, {"val": "b48", "desc": "48\u5e74"}, {"val": "b49", "desc": "49\u5e74"}, {"val": "b50", "desc": "50\u5e74"}, {"val": "b51", "desc": "51\u5e74"}, {"val": "b52", "desc": "52\u5e74"}, {"val": "b53", "desc": "53\u5e74"}, {"val": "b54", "desc": "54\u5e74"}, {"val": "b55", "desc": "55\u5e74"}, {"val": "b56", "desc": "56\u5e74"}, {"val": "b57", "desc": "57\u5e74"}, {"val": "b58", "desc": "58\u5e74"}, {"val": "b59", "desc": "59\u5e74"}], "componentName": "cmCommonSelect", "labelName": "\u4fdd\u9669\u671f\u95f4", "value": "b2", "key": "iDuration", "isHide": false}, {"common": false, "opts": [{"val": "b1", "desc": "1\u5e74\u4ea4"}, {"val": "b2", "desc": "2\u5e74\u4ea4"}, {"val": "b3", "desc": "3\u5e74\u4ea4"}, {"val": "b4", "desc": "4\u5e74\u4ea4"}, {"val": "b5", "desc": "5\u5e74\u4ea4"}, {"val": "b6", "desc": "6\u5e74\u4ea4"}, {"val": "b7", "desc": "7\u5e74\u4ea4"}, {"val": "b8", "desc": "8\u5e74\u4ea4"}, {"val": "b9", "desc": "9\u5e74\u4ea4"}, {"val": "b10", "desc": "10\u5e74\u4ea4"}, {"val": "b11", "desc": "11\u5e74\u4ea4"}, {"val": "b12", "desc": "12\u5e74\u4ea4"}, {"val": "b13", "desc": "13\u5e74\u4ea4"}, {"val": "b14", "desc": "14\u5e74\u4ea4"}, {"val": "b15", "desc": "15\u5e74\u4ea4"}, {"val": "b16", "desc": "16\u5e74\u4ea4"}, {"val": "b17", "desc": "17\u5e74\u4ea4"}, {"val": "b18", "desc": "18\u5e74\u4ea4"}, {"val": "b19", "desc": "19\u5e74\u4ea4"}, {"val": "b20", "desc": "20\u5e74\u4ea4"}, {"val": "b21", "desc": "21\u5e74\u4ea4"}, {"val": "b22", "desc": "22\u5e74\u4ea4"}, {"val": "b23", "desc": "23\u5e74\u4ea4"}, {"val": "b24", "desc": "24\u5e74\u4ea4"}, {"val": "b25", "desc": "25\u5e74\u4ea4"}, {"val": "b26", "desc": "26\u5e74\u4ea4"}, {"val": "b27", "desc": "27\u5e74\u4ea4"}, {"val": "b28", "desc": "28\u5e74\u4ea4"}, {"val": "b29", "desc": "29\u5e74\u4ea4"}, {"val": "b30", "desc": "30\u5e74\u4ea4"}, {"val": "b31", "desc": "31\u5e74\u4ea4"}, {"val": "b32", "desc": "32\u5e74\u4ea4"}, {"val": "b33", "desc": "33\u5e74\u4ea4"}, {"val": "b34", "desc": "34\u5e74\u4ea4"}, {"val": "b35", "desc": "35\u5e74\u4ea4"}, {"val": "b36", "desc": "36\u5e74\u4ea4"}, {"val": "b37", "desc": "37\u5e74\u4ea4"}, {"val": "b38", "desc": "38\u5e74\u4ea4"}, {"val": "b39", "desc": "39\u5e74\u4ea4"}, {"val": "b40", "desc": "40\u5e74\u4ea4"}, {"val": "b41", "desc": "41\u5e74\u4ea4"}, {"val": "b42", "desc": "42\u5e74\u4ea4"}, {"val": "b43", "desc": "43\u5e74\u4ea4"}, {"val": "b44", "desc": "44\u5e74\u4ea4"}, {"val": "b45", "desc": "45\u5e74\u4ea4"}, {"val": "b46", "desc": "46\u5e74\u4ea4"}, {"val": "b47", "desc": "47\u5e74\u4ea4"}, {"val": "b48", "desc": "48\u5e74\u4ea4"}, {"val": "b49", "desc": "49\u5e74\u4ea4"}, {"val": "b50", "desc": "50\u5e74\u4ea4"}, {"val": "b51", "desc": "51\u5e74\u4ea4"}, {"val": "b52", "desc": "52\u5e74\u4ea4"}, {"val": "b53", "desc": "53\u5e74\u4ea4"}, {"val": "b54", "desc": "54\u5e74\u4ea4"}, {"val": "b55", "desc": "55\u5e74\u4ea4"}, {"val": "b56", "desc": "56\u5e74\u4ea4"}, {"val": "b57", "desc": "57\u5e74\u4ea4"}, {"val": "b58", "desc": "58\u5e74\u4ea4"}], "componentName": "cmCommonSelect", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b1", "key": "pPeriod", "isHide": true}, {"componentName": "cmCommonInput", "common": false, "labelName": "\u4fdd\u989d", "value": "", "key": "baoe", "isHide": true}], "durationType": 0, "pMinus": "1", "required": false, "groupKey": "touhm", "roundingMode": "HALF_UP", "refInsuranceId": "-1", "groupName": "\u6295\u4fdd\u4eba\u8c41\u514d", "trade": false, "huomian": "shuangHuomian", "name": "\u8c41\u514d\u5b9a\u671fA18", "reduceBaof": null, "key": 17560, "account": false, "isCheckbox": false, "dMinus": "0"}, {"code": "1570", "isFollowing": false, "calculatorType": "", "feeBaseType": "baoe2baof", "allowSamePerson": false, "scale": 2, "canRenewFlag": false, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u624b\u672f\u6d25\u8d34", "value": true, "key": "title"}, {"optConf": null, "common": false, "opts": [{"val": "b1", "desc": "1\u5e74"}], "componentName": "cmCommonSelect", "isDisabled": null, "labelName": "\u4fdd\u9669\u671f\u95f4", "value": "b1", "key": "iDuration", "isHide": false}, {"common": false, "opts": [{"val": "b1", "desc": "1\u5e74"}], "componentName": "cmCommonSelect", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b1", "key": "pPeriod", "isHide": true}, {"common": false, "opts": [{"val": "0", "desc": "\u7eed\u4fdd"}, {"val": "1", "desc": "\u65b0\u5355"}], "componentName": "cmCommonRadioBtn", "isDisabled": null, "labelName": "\u662f\u5426\u65b0\u5355", "value": "0", "key": "isNewInsure", "isHide": false}, {"common": false, "regExpMessage": "", "componentName": "cmCommonInput", "isDisabled": null, "labelName": "\u4fdd\u989d", "value": 10000, "key": "baoe", "regExp": "", "isHide": null, "compareItem": null}], "feeType": "baoe2baof", "durationType": 0, "required": false, "roundingMode": "HALF_UP", "trade": false, "feeBase": 10000, "huomian": "", "name": "\u624b\u672f\u6d25\u8d34", "resultFormulaRef": null, "reduceBaof": null, "key": 20963, "account": false, "isCheckbox": false}], "companyId": 2, "hide": false, "titleName": "\u5b88\u62a4\u767e\u5206\u767e", "trade": false, "companyName": "\u4e2d\u56fd\u5e73\u5b89", "autoImport": true, "liabilityShowType": 0, "key": 3902, "required": true, "tradeId": -1}, {"companyName": "\u4e2d\u56fd\u4eba\u5bff", "autoImport": true, "liabilityShowType": 1, "required": true, "relation": true, "mulInsOrderList": [{"code": "SJ2", "isFollowing": false, "calculatorType": "", "allowSamePerson": false, "scale": 2, "eleOrderList": [{"componentName": "cmCommonTitle", "isDisabled": true, "common": false, "labelName": "\u767e\u4e07\u5982\u610f\u884c\u4e24\u5168\u4fdd\u9669\uff08\u5e86\u5178\u7248\uff09 ", "value": true, "key": "title"}, {"common": false, "opts": [{"val": "a75", "desc": "\u81f375\u5c81"}, {"val": "a80", "desc": "\u81f380\u5c81"}], "componentName": "cmCommonRadioBtn", "labelName": "\u4fdd\u9669\u671f\u95f4", "value": "a75", "key": "iDuration", "isHide": false}, {"common": false, "opts": [{"val": "b15", "desc": "15\u5e74"}, {"val": "b20", "desc": "20\u5e74"}], "componentName": "cmCommonRadioBtn", "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b15", "key": "pPeriod", "isHide": false}, {"unit": "", "common": false, "regExpMessage": "", "componentName": "cmCommonInput", "isDisabled": false, "labelName": "\u4fdd\u989d", "value": 100000, "key": "baoe", "regExp": "", "isHide": false}], "durationType": 0, "required": true, "roundingMode": "HALF_UP", "trade": false, "huomian": "", "name": "\u767e\u4e07\u5982\u610f\u884c\u4e24\u5168\u4fdd\u9669\uff08\u5e86\u5178\u7248\uff09 ", "reduceBaof": null, "key": 19308, "account": false, "isCheckbox": false}, {"code": "R37", "isFollowing": true, "calculatorType": "", "allowSamePerson": false, "scale": 2, "eleOrderList": [{"componentName": "cmCommonTitle", "common": false, "labelName": "\u9644\u52a0\u767e\u4e07\u5982\u610f\u884c\u610f\u5916\u4f24\u5bb3\u4f4f\u9662\u5b9a\u989d\u7ed9\u4ed8\u533b\u7597\u4fdd\u9669\uff08\u5e86\u5178\u7248\uff09", "value": true, "key": "title"}, {"common": false, "opts": [{"val": "a75", "desc": "\u81f375\u5c81"}, {"val": "a80", "desc": "\u81f380\u5c81"}], "componentName": "cmCommonSelect", "isDisabled": false, "labelName": "\u4fdd\u9669\u671f\u95f4", "value": "a75", "key": "iDuration", "isHide": true}, {"common": false, "opts": [{"val": "b15", "desc": "15\u5e74"}, {"val": "b20", "desc": "20\u5e74"}], "componentName": "cmCommonSelect", "isDisabled": false, "labelName": "\u4ea4\u8d39\u671f\u95f4", "value": "b15", "key": "pPeriod", "isHide": true}, {"common": false, "componentName": "cmCommonInput", "isDisabled": false, "labelName": "\u4fdd\u989d", "value": "", "key": "baoe", "isHide": true}], "durationType": 0, "required": false, "roundingMode": "HALF_UP", "refInsuranceId": "-1", "trade": false, "huomian": "", "name": "\u9644\u52a0\u767e\u4e07\u5982\u610f\u884c\u610f\u5916\u4f24\u5bb3\u4f4f\u9662\u5b9a\u989d\u7ed9\u4ed8\u533b\u7597\u4fdd\u9669\uff08\u5e86\u5178\u7248\uff09", "reduceBaof": null, "key": 19309, "account": false, "isCheckbox": false}], "companyId": 1, "hide": false, "titleName": "\u767e\u4e07\u5982\u610f\u884c\uff08\u5e86\u5178\u7248\uff09\uff08SJ2\uff09 ", "trade": false, "isTemp": true, "restrictList": [], "key": 3005, "tradeId": -1}], "maxNum": 5, "key": "allMainInsData"}], "title": "\u5b88\u62a4\u767e\u5206\u767e"}'
        var s = JSON.parse(res);
        
        var helperJs = {
            makePlanbook: function(s) {
                var t = {
                    pbType: "",
                    insuranceTypeId: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId ? 1 * __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId : gPlanbookId,
                    // companyId: "",
                    // recordSetting: s.inputData.recordSetting,
                    totalBaof: 124,
                    // totalBaof: 1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__planbook_utils_js__.a)(s.inputData.productGroupList).toFixed(2),
                    personData: helperJs.convertProductData(s).personData,
                    productGroupList: [],
                    theme: s.theme,
                    coverId: s.coverId,
                    commonData: s.commonData,
                    displayFormatSort: s.displayFormatSort,
                    categorySort: s.categorySort,
                    title: s.title || document.title,
                    userUuid: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.userUuid,
                    videoTypeKey: "normal"
                };
                s.productGroupList.map(function(e) {
                    var a = {
                        key: e.key,
                        prodOrderList: []
                    };
                    e.prodOrderList.map(function(e) {
                        if (e.hadChoice && !e.hide) {
                            e.mulInsOrderList.map(function(a, e, t) {
                                a.eleOrderInResult = [];
                                var r = void 0;
                                a.refInsuranceId && -2 != a.refInsuranceId && (r = -1 == a.refInsuranceId ? "common" == t[0].key ? t[1] : t[0] : helperJs.filterArr(t, a.refInsuranceId)),
                                a.eleOrderList && a.eleOrderList.map(function(t) {
                                    var e = r && r.eleOrderList && r.eleOrderList.filter(function(e) {
                                        return e.key === t.key
                                    }
                                    )[0];
                                    -1 !== ["title", "calMethod", "customRate", "company"].indexOf(t.key) || t.isHide && (!t.isHide || t.isDisabled || !e || e.isHide) || a.eleOrderInResult.push({
                                        value: t.key,
                                        label: t.labelName
                                    })
                                }
                                )
                            }
                            );
                            var t = helperJs.convertProductData(s, e).productData;
                            t.mulInsOrderList.map(function(e) {
                                "shuangHuomian" == e.huomian && e.shmInsData && e.shmInsData.title && t.mulInsOrderList.push(e.shmInsData)
                            }
                            ),
                            a.prodOrderList.push(t)
                        }
                    }
                    ),
                    t.productGroupList.push(a)
                });
                return t;
            },
            convertProductData: function(e, n) {
                var o = this
                  , t = {}
                  , a = {
                    personOrderList: [],
                    recipientInfo: {}
                };
                e && e.inputData && e.inputData.personData && (e.inputData.personData.recipientInfo && (a.recipientInfo = o.convertCalData(e.inputData.personData.recipientInfo)),
                e.inputData.personData.personOrderList && e.inputData.personData.personOrderList.map(function(e) {
                    a.personOrderList.push(o.convertCalData(e))
                }
                ),
                t.personData = a);
                var s = {
                    key: n && n.key,
                    titleName: n && n.titleName,
                    tradeId: n && n.tradeId,
                    companyId: n && n.companyId,
                    companyName: n && n.companyName,
                    isTemp: n && n.isTemp,
                    liabilityShowType: n && n.liabilityShowType,
                    liabilityOrderList: n && n.liabilityOrderList,
                    inputResultSwitch: n && n.inputResultSwitch,
                    policyType: n && n.policyType,
                    totalBaof: n && n.totalBaof,
                    common: {},
                    mulInsOrderList: []
                };
                return n && n.adjustBaoeData && (s.adjustBaoeData = n.adjustBaoeData),
                n && (n.mulInsOrderList.map(function(r, e) {
                    var i = o.convertCalData(r);
                    if ("common" == i.key)
                        s.common = i;
                    else if (i.title && !i.groupKey) {
                        if (i.isGroup)
                            (i.insuranceId.constructor == Array ? i.insuranceId : [i.insuranceId]).map(function(e) {
                                var t = o.filterArr(n.mulInsOrderList, e);
                                if (t) {
                                    var a = o.convertCalData(t);
                                    void 0 !== r.account && (a.account = r.account),
                                    void 0 !== r.accountData && (a.accountData = r.accountData),
                                    r.eleOrderList.map(function(e) {
                                        "title" != e.key && "insuranceId" != e.key && (a[e.key] = i[e.key])
                                    }
                                    ),
                                    s.mulInsOrderList.push(o.deepCopy({}, a))
                                }
                            }
                            );
                        else
                            s.mulInsOrderList.push(i)
                    }
                }
                ),
                t.productData = s),
                t
            },
            convertCalData: function(e) {
                var t = {};
                for (var a in e)
                    "eleOrderList" == a ? e[a].map(function(e) {
                        t[e.key] = e.value
                    }
                    ) : e.eleOrderList && this.getArraySubEle(e.eleOrderList, "key", a) || (t[a] = e[a]);
                return t
            },
        }
        window.gPlanbookId = __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId ? 1 * __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId : null ,
        window.helperJs = helperJs
        console.log(helperJs.makePlanbook(s))

        return
        -1 !== location.hostname.search(/pbf\.winbaoxian\.com/) ? baseApiPath = "https://app.winbaoxian.com" : -1 !== location.hostname.search(/pbf\.winbaoxian\.cn/) ? baseApiPath = "//app.winbaoxian.cn" : -1 !== location.hostname.search(/pbf-uat\.winbaoxian\.cn/) ? baseApiPath = "//planbook-uat.winbaoxian.cn" : -1 !== location.hostname.search(/192\.168|localhost/) && (baseApiPath = "//app.winbaoxian.cn"),
        window.baseApiPath = baseApiPath,
        window.allApiUrl = {
            initInputDataApi: baseApiPath + "/planBook/V2/getInitData",
            calculateDataApi: baseApiPath + "/planBook/V2/calculate",
            queryAdvertApi: baseApiPath + "/planBook/queryAdvert",
            createPlanbookApi: baseApiPath + "/planBook/V2/uploadResult",
            getAddAndTake: baseApiPath + "/planBook/V2/addAndTake/"
        };
        
        var positionTop = 0
          , helperJs = {
            setBaseAttribute: function() {
                if (document.documentElement.style.fontSize = 20 <= window.innerWidth / 375 * 16 ? 20 : window.innerWidth / 375 * 16 + "px",
                window.devicePixelRatio && 2 <= devicePixelRatio) {
                    var e = document.createElement("div");
                    e.style.border = ".5px solid transparent",
                    document.body.appendChild(e),
                    1 == e.offsetHeight && document.querySelector("html").classList.add("hairlines"),
                    document.body.removeChild(e)
                }
            },
            fixedViewportOffset: function() {
                var e = navigator.userAgent.toLowerCase().match(/cpu iphone os ((\d*)_(.*)?) like mac os/);
                if (e && e[2] && 12 <= e[2]) {
                    var t = appBridge.isApp() && /weiyi\/((\d+)(\.(\d+))?(\.(\d+))?)?\s/gi.exec(navigator.userAgent.toLowerCase());
                    (t && (4 == t[2] && (6 == t[4] || 8 <= t[4]) || 5 <= t[2]) || appBridge.isWechat() || window.Jax && Jax.isBrokerApp()) && document.body.addEventListener("blur", function(e) {
                        -1 !== ["TEXTAREA", "INPUT", "SELECT"].indexOf(e.target.tagName) && setTimeout(function() {
                            window.scrollTo(0, document.documentElement.scrollTop || document.body.scrollTop)
                        }
                        , 100)
                    }
                    , !0)
                }
            },
            loadVerifyJs: function(e) {
                var a = [];
                e && e.initData && e.initData.inputData.commonData.withVerify && a.push("//res.winbaoxian.com/planbookVerify/verifyRules" + __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId + ".js"),
                -1 !== location.hostname.search(/192\.168|localhost/) && e.initData.inputData.commonData.withVerify && (a.push("../../verifyJs/planbook/commonVerify.js"),
                a.push("../../verifyJs/planbook/verifyRules" + __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId + ".js"),
                e.initData.inputData.productGroupList.map(function(e, t) {
                    e.prodOrderList.map(function(e, t) {
                        a.push("../../verifyJs/product/prodRule" + e.key + ".js"),
                        e.mulInsOrderList.map(function(e, t) {
                            a.push("../../verifyJs/insurance/insRule" + e.key + ".js")
                        }
                        )
                    }
                    )
                }
                )),
                a.length && a.map(function(e) {
                    var t = document.createElement("script");
                    t.type = "text/javascript",
                    t.async = !0,
                    t.src = e,
                    document.body.insertBefore(t, document.scripts[document.scripts.length - 1])
                }
                )
            },
            getQueryString: function(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
                  , a = window.location.search.substr(1).match(t);
                return null  != a ? unescape(a[2]) : null 
            },
            getUrlParam: function(e, t) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var a = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t || location.search);
                return null  === a ? "" : decodeURIComponent(a[1].replace(/\+/g, " "))
            },
            getAgeFromBirth: function(e, t) {
                var a = t ? new Date(t) : new Date
                  , r = new Date(e)
                  , i = a.getFullYear() - r.getFullYear();
                return (a.getMonth() - r.getMonth() < 0 || a.getMonth() - r.getMonth() == 0 && a.getDate() - r.getDate() < 0) && i--,
                i
            },
            deleteObjPro: function(e, t) {
                return e.map(function(e) {
                    if (!e || !t || void 0 === t[e])
                        return !1;
                    delete t[e]
                }
                ),
                t
            },
            deepCopy: function(e, t) {
                for (var a in e || (e = {}),
                t)
                    void 0 !== t[a] && null  !== t[a] && "object" === __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(t[a]) ? (e[a] = t[a].constructor === Array ? [] : {},
                    this.deepCopy(e[a], t[a])) : e[a] = t[a];
                return e
            },
            filterArr: function(e, t) {
                return e && e.filter(function(e) {
                    return e.key == t
                }
                )[0]
            },
            isObjExist: function(e, t) {
                return t.reduce(function(e, t) {
                    return e && e[t] ? e[t] : null 
                }
                , e)
            },
            getDefaultAge: function(e) {
                var t = helperJs.filterArr(e.eleOrderList, "age")
                  , a = 2 == helperJs.filterArr(e.eleOrderList, "sex").value && t.optsF && t.optsF.length ? t.optsF : t.opts;
                return (t.value < a[0] || t.value > a[1]) && (t.value = a[0],
                e.birthday = ""),
                e
            },
            gotoLogin: function() {
                window.appBridge && appBridge.checkAppFeature("APP_VIEW") ? appBridge.gotoAppView("login") : window.location.href = "//planbook-uat.winbaoxian.cn" == baseApiPath ? "//pbf-uat.winbaoxian.cn/planBook/tools/login/pages/login.html?requestUrl=" + encodeURIComponent(location.href) : baseApiPath + "/user/login?requestUrl=" + encodeURIComponent(location.href)
            },
            getInitData: function(a, r) {
                helperJs.vueAxios({
                    self: a.prototype,
                    type: "get",
                    url: allApiUrl.initInputDataApi,
                    data: {
                        insuranceTypeId: 1 * __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId,
                        resultUuid: -1 !== ["annual_survey"].indexOf(__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b) ? __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.c || null  : __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.c || gStorageUuid || null 
                    }
                }, function(e) {
                    var t;
                    if (e.data.success && e.data.data && (t = e.data.data),
                    window.isDebug && (t = testInputData,
                    alert("当前为测试数据，前端调试用")),
                    t) {
                        if (document.title = t.title,
                        window.appBridge && appBridge.checkAppFeature("CHANGE_WEBVIEW_TITLE") && appBridge.changeWebviewTitle(document.title),
                        t.companyId && (t.initData.companyId = t.companyId),
                        t.userCompanyId && (t.initData.userCompanyId = t.userCompanyId),
                        t.initData.saleStatus = t.saleStatus,
                        t.initData.brokerFlag = t.brokerFlag || null ,
                        t.initData.interestProductList = t.interestProductList || null ,
                        t.initData.inputData.personData && t.initData.inputData.personData.personOrderList)
                            t.initData.inputData.personData.personOrderList.map(function(e) {
                                "applicantInfo" === e.key && e.eleOrderList.splice(1, 0, {
                                    key: "applicantAndInsuredSame",
                                    value: 0,
                                    labelName: "投被保人是同一人",
                                    componentName: "cmInfoRadio",
                                    opts: [{
                                        val: 0,
                                        desc: "否"
                                    }, {
                                        val: 1,
                                        desc: "是"
                                    }]
                                }),
                                e.eleOrderList.every(function(e) {
                                    return "name" !== e.key
                                }
                                ) && e.eleOrderList.splice(1, 0, {
                                    key: "name",
                                    value: "",
                                    maxlength: 16
                                })
                            }
                            );
                        __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b ? -1 !== ["annual_survey"].indexOf(__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b) ? r && r(t) : helperJs.changeInitData(t, a, function() {
                            helperJs.getInitDataFromResult(t, a, function() {
                                helperJs.initStart(t, r)
                            }
                            )
                        }
                        ) : helperJs.assignInitData(t, t.exportData ? JSON.parse(t.exportData) : null , function() {
                            helperJs.initStart(t, r)
                        }
                        )
                    }
                }
                )
            },
            initStart: function(e, t) {
                helperJs.loadVerifyJs(e);
                var a = helperJs.deepCopy({}, e.initData);
                a.popupData || (a.popupData = a.popupData || {}),
                void 0 === a.popupData.popupName && (a.popupData.popupName = ""),
                window.globalInitData = helperJs.deepCopy({}, a);
                var r = helperJs.deepCopy({}, e.verifyData);
                if (window.verifyData = r,
                !__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b) {
                    var i = a.inputData.personData.recipientInfo;
                    i && i.eleOrderList.map(function(e) {
                        "name" !== e.key && "sex" !== e.key || (e.isHide = !0)
                    }
                    )
                }
                helperJs.analysisInitData(a, r, !0),
                a.inputData.productGroupList.map(function(e) {
                    e.prodOrderList.map(function(e) {
                        helperJs.analysisCondition(e, r, a)
                    }
                    )
                }
                ),
                t && t(a, e)
            },
            changeInitData: function(e, t, a) {
                if (!__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b)
                    return a && a(),
                    !1;
                if (this.isObjExist(e, ["initData", "inputData", "personData", "personOrderList"])) {
                    var r = e.initData.inputData.personData.personOrderList;
                    r.length && (__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b.match("record") && (r.map(function(e, t) {
                        var a = -1;
                        e.eleOrderList = e.eleOrderList.filter(function(e) {
                            return "name" !== e.key
                        }
                        ),
                        e.eleOrderList.map(function(e, t) {
                            "sex" === e.key && (a = t),
                            "title" === e.key && (e.value = !0,
                            e.isShowCheckbox = !1)
                        }
                        ),
                        0 <= a && e.eleOrderList.splice(a, 0, {
                            key: "name",
                            value: "",
                            maxlength: 16
                        })
                    }
                    ),
                    e.initData.inputData.recordSetting = {
                        voiceType: e.userSex || 1
                    }),
                    a && a(e))
                }
            },
            getInsPolicyInfo: function(e, t, a) {
                if (gResultUuid)
                    return helperJs.vueAxios({
                        self: t.prototype,
                        type: "get",
                        url: baseApiPath + "/planBook/insurePlan/getInsurePlan?insuredId=" + gCrmId + "&resultUuid=" + gResultUuid
                    }, function(e) {
                        e.data.success && e.data.data && a && a(e.data.data)
                    }
                    );
                a && a()
            },
            getInitDataFromResult: function(i, n, o) {
                if (-1 === ["annual_survey"].indexOf(__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b) && (gResultUuid || gStorageUuid))
                    return helperJs.vueAxios({
                        self: n.prototype,
                        type: "get",
                        url: baseApiPath + "/planBook/insureScheme/getImportData",
                        data: {
                            storageUuid: gStorageUuid || "",
                            resultUuid: gResultUuid || ""
                        }
                    }, function(e) {
                        if (e.data.success && e.data.data) {
                            var r = i.initData.inputData.productGroupList
                              , t = e.data.data
                              , a = [];
                            t.productGroupList.map(function(e, t) {
                                e && (e.prodOrderList.map(function(e, t) {
                                    e.isTemp && a.push(e.key)
                                }
                                ),
                                r && r[t] && e.prodOrderList.map(function(e) {
                                    e.policyType && r[t].prodOrderList.push(e)
                                }
                                ))
                            }
                            ),
                            a.length ? helperJs.vueAxios({
                                self: n.prototype,
                                type: "get",
                                url: baseApiPath + "/planBook/productTemp/getTempProducts?productIds=" + a.join(",")
                            }, function(e) {
                                r && e.data.success && e.data.data && (e.data.data.map(function(e) {
                                    var t = e.initData.inputData.productGroupList;
                                    for (var a in t.map(function(e, t) {
                                        r[t] && (r[t].prodOrderList = r[t].prodOrderList.concat(e.prodOrderList))
                                    }
                                    ),
                                    e.verifyData)
                                        i.verifyData[a] = e.verifyData[a]
                                }
                                ),
                                helperJs.assignInitData(i, t, o))
                            }
                            ) : helperJs.assignInitData(i, t, o)
                        } else
                            gStorageUuid = null ,
                            o && o()
                    }
                    );
                o && o()
            },
            assignInitData: function(e, t, a) {
                var r = e.initData.inputData.personData;
                if (t) {
                    var i = t.personData;
                    for (var n in r)
                        "personOrderList" == n && r[n] && i[n] && r[n].map(function(t, a) {
                            -1 !== ["annual_survey"].indexOf(__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b) && ["cid", "birthday", "insuranceDay", "name", "policyNo"].map(function(e) {
                                i[n][a] && i[n][a][e] && (t[e] = i[n][a][e])
                            }
                            ),
                            t.eleOrderList.map(function(e, t) {
                                i[n][a] && void 0 !== i[n][a][e.key] && (__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b || gResultUuid || !gStorageUuid || "name" !== e.key) && (e.value = i[n][a][e.key])
                            }
                            )
                        }
                        ),
                        "recipientInfo" == n && helperJs.isObjExist(r, [n, "eleOrderList"]) && i[n] && r[n].eleOrderList.map(function(e) {
                            r[n][e.key] && (e.value = i[n][e.key])
                        }
                        );
                    var o = e.initData.inputData.productGroupList
                      , s = t.productGroupList;
                    o.map(function(e, t) {
                        var r = s[t];
                        r && e.prodOrderList.map(function(e, t) {
                            var i = helperJs.getArraySubEle(r.prodOrderList, "key", e.key);
                            if (i)
                                for (var a in i.adjustBaoeData && (e.adjustBaoeData = i.adjustBaoeData),
                                e.inputResultSwitch = !!i.inputResultSwitch,
                                e.resultImport = !0,
                                e)
                                    "mulInsOrderList" == a && e.mulInsOrderList.map(function(e, t) {
                                        var a = helperJs.getArraySubEle(i.mulInsOrderList, "key", e.key);
                                        if (a)
                                            for (var r in e.eleOrderList && (helperJs.getArraySubEle(e.eleOrderList, "key", "calMethod") && helperJs.getArraySubEle(e.eleOrderList, "key", "baoe") && helperJs.getArraySubEle(e.eleOrderList, "key", "baof") && a.calMethod && (helperJs.getArraySubEle(e.eleOrderList, "key", "baoe").isHide = "baoe2baof" !== a.calMethod,
                                            helperJs.getArraySubEle(e.eleOrderList, "key", "baof").isHide = "baoe2baof" === a.calMethod),
                                            e.eleOrderList.map(function(e, t) {
                                                a[e.key] && (e.value = a[e.key])
                                            }
                                            )),
                                            void 0 !== a.inputResult && (e.inputResult = a.inputResult),
                                            e)
                                                -1 !== ["reduceBaof"].indexOf(r) && a[r + "Data"] && (e[r + "Data"] = a[r + "Data"]);
                                        else
                                            e.eleOrderList && e.eleOrderList.map(function(e, t) {
                                                "title" == e.key && (e.value = !1)
                                            }
                                            )
                                    }
                                    )
                        }
                        )
                    }
                    )
                }
                a && a(e)
            },
            analysisInitData: function(e, s, t) {
                var l = this
                  , a = e.inputData
                  , u = {
                    insuredInfo: [[], []]
                };
                return !__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b && a.personData.recipientInfo && a.personData.recipientInfo.eleOrderList && a.personData.recipientInfo.eleOrderList.every(function(e) {
                    return "shareTitle" !== e.key
                }
                ) && a.personData.recipientInfo.eleOrderList.push({
                    key: "shareTitle",
                    labelName: "计划书标题",
                    value: "",
                    componentName: "cmInfoName",
                    placeholder: "请输入计划书标题"
                }),
                a && a.productGroupList && (a.productGroupList.map(function(a) {
                    var o;
                    a.prodOrderList && (o = a.prodOrderList.some(function(e, t) {
                        return t < a.defNum && !!e.required && !e.isTemp
                    }
                    )),
                    a.prodOrderList && a.prodOrderList.map(function(r, e) {
                        var i = {
                            key: "common",
                            eleOrderList: []
                        }
                          , n = r.mulInsOrderList && r.mulInsOrderList.some(function(e) {
                            return !!e.required && s[r.key] && s[r.key][e.key]
                        }
                        );
                        r.mulInsOrderList && r.mulInsOrderList.some(function(e) {
                            return !!e.adjustBaoe
                        }
                        ) && (r.adjustBaoeData = r.adjustBaoeData || null ),
                        r.mulInsOrderList && r.mulInsOrderList.map(function(a, t) {
                            var e = l.getArraySubEle(a.eleOrderList, "key", "baoe");
                            a.showPlanDesc = !!(a.eleOrderList && l.getArraySubEle(a.eleOrderList, "key", "plan") && e && e.isHide),
                            a.reduceBaof && (a.reduceBaofData = a.reduceBaofData || null ),
                            s && s[r.key] && s[r.key][a.key] ? s[r.key][a.key].map(function(e) {
                                if (!r.isTemp && (!o || r.required) && (!n || a.required) && (!a.huomian || "beiHuomian" == a.huomian)) {
                                    var t = u.insuredInfo[e.sex - 1];
                                    u.insuredInfo[e.sex - 1] = [void 0 === t[0] ? e.minAge : Math.min(t[0], e.minAge), void 0 === t[1] ? e.maxAge : Math.max(t[1], e.maxAge)]
                                }
                            }
                            ) : console.log(r.titleName + "-" + r.key + " -> " + a.name + "-" + a.key + ": 当前险种没有费率表"),
                            a.eleOrderList && (a.eleOrderList.map(function(e) {
                                e.common && !l.filterArr(i.eleOrderList, e.key) && (i.eleOrderList.push(e),
                                0 == t && (a.isFollowing = !0))
                            }
                            ),
                            a.eleOrderList = a.eleOrderList.filter(function(e) {
                                return !e.common
                            }
                            ))
                        }
                        ),
                        i.eleOrderList.length && (r.mulInsOrderList = r.mulInsOrderList.filter(function(e) {
                            return "common" != e.key
                        }
                        ),
                        r.mulInsOrderList.splice(0, 0, i)),
                        l.createGroupIns(r, !0)
                    }
                    )
                }
                ),
                t && l.isObjExist(a, ["personData", "personOrderList"]) && a.personData.personOrderList.map(function(e) {
                    u[e.key] && u[e.key][0].length && (l.filterArr(e.eleOrderList, "age").opts = u[e.key][0],
                    u[e.key][0].join() != u[e.key][1].join() && (l.filterArr(e.eleOrderList, "age").optsF = u[e.key][1]),
                    (l.filterArr(e.eleOrderList, "age").value < u[e.key][l.filterArr(e.eleOrderList, "sex").value - 1][0] || l.filterArr(e.eleOrderList, "age").value > u[e.key][l.filterArr(e.eleOrderList, "sex").value - 1][1]) && (l.filterArr(e.eleOrderList, "age").value = u[e.key][l.filterArr(e.eleOrderList, "sex").value - 1][1]))
                }
                )),
                e
            },
            analysisCondition: function(g, y, e) {
                var O = this;
                if (g && y) {
                    var b = [[], []];
                    if (y[g.key]) {
                        var L = self && O.convertProductData(e).personData
                          , I = g.mulInsOrderList && g.mulInsOrderList.some(function(e) {
                            return !!e.required && y[g.key][e.key]
                        }
                        );
                        g.mulInsOrderList.map(function(t, e, a) {
                            var r = y[g.key] && y[g.key][t.key];
                            if (r) {
                                t.huomian && "beiHuomian" != t.huomian || !(!I || I && t.required) || r.map(function(e) {
                                    b[e.sex - 1] = [void 0 === b[e.sex - 1][0] ? e.minAge : Math.min(b[e.sex - 1][0], e.minAge), void 0 === b[e.sex - 1][1] ? e.maxAge : Math.max(b[e.sex - 1][1], e.maxAge)]
                                }
                                );
                                var i, n = "touHuomian" == t.huomian || "shuangHuomian" == t.huomian, o = n ? "applicantInfo" : "insuredInfo";
                                if (L && (n && t.allowSamePerson && O.filterArr(L.personOrderList, "applicantInfo") && (o = O.filterArr(L.personOrderList, "applicantInfo").title ? "applicantInfo" : "insuredInfo"),
                                i = O.filterArr(L.personOrderList, o)),
                                i && ((r = y[g.key][t.key].filter(function(e) {
                                    return e.sex == i.sex && i.age >= e.minAge && i.age <= e.maxAge
                                }
                                )[0]) && (r = r.conditionData),
                                r && n && t.allowSamePerson && "samePerson" === r.key)) {
                                    var s = O.filterArr(L.personOrderList, "applicantInfo").title;
                                    (r = r.samePerson.filter(function(e) {
                                        return e.value == (s ? 0 : 1)
                                    }
                                    )) && (r = r[0])
                                }
                                var l, u = O.filterArr(t.eleOrderList, "title");
                                for (r && (!n || t.allowSamePerson || i && i.title && !i.applicantAndInsuredSame) ? (u.isDisabled = !1,
                                !t.required || t.groupKey && !t.isCheckbox || (u.value = !0,
                                u.isDisabled = !0,
                                console.log(u.labelName + "-" + t.key + ": 费率存在，险种为必选险且(为非组合险或为多选一险种)"))) : (u.isDisabled = !0,
                                u.value = !1,
                                r ? console.log(u.labelName + "-" + t.key + ": 为豁免险且不允许投被保人为同一人，投保人未选中或投被保人为同一人") : console.log(u.labelName + "-" + t.key + ": 费率不存在！")); r && r.key && r[r.key]; ) {
                                    var c = r[r.key]
                                      , d = O.filterArr(t.eleOrderList, r.key);
                                    !d && O.filterArr(g.mulInsOrderList, "common") && (d = O.filterArr(O.filterArr(g.mulInsOrderList, "common").eleOrderList, r.key));
                                    var p = null ;
                                    if (d)
                                        if (t.eleOrderList.map(function(e, t) {
                                            e.key == d.key && (p = t)
                                        }
                                        ),
                                        d.isHide && !d.isDisabled && t.refInsuranceId && -2 != t.refInsuranceId) {
                                            var _, f = (_ = -1 == t.refInsuranceId ? "common" == a[0].key ? a[1] : a[0] : O.filterArr(a, t.refInsuranceId)) && O.filterArr(_.eleOrderList, d.key);
                                            if (f)
                                                if (t.huomian && "pPeriod" == d.key) {
                                                    if ("a999" == f.value || "a1000" == f.value)
                                                        d.value = f.value;
                                                    else if (-1 !== f.value.search(/^b/))
                                                        d.value = "b" + (1 * f.value.replace(/[^0-9]/, "") - (t.pMinus || 0));
                                                    else if (-1 !== f.value.search(/^a/)) {
                                                        var m = "touHuomian" === t.huomian ? L.personOrderList[0].age : i.age;
                                                        d.value = "b" + (1 * f.value.replace(/[^0-9]/, "") - m - (t.pMinus || 0))
                                                    }
                                                } else
                                                    d.value = f.value;
                                            else
                                                console.log(t.name + "-" + t.key + "：关联险种" + t.refInsuranceId + "不存在");
                                            _ && O.filterArr(_.eleOrderList, "title").isDisabled && (u.isDisabled = !0)
                                        } else {
                                            var v = d.opts.slice(0);
                                            if (d.opts = [],
                                            c.map(function(e) {
                                                if (void 0 !== e.value && void 0 !== e.desc) {
                                                    var t = {
                                                        val: e.value,
                                                        desc: e.desc
                                                    };
                                                    v[d.opts.length] && (t.isHide = v[d.opts.length].isHide,
                                                    t.isDisabled = v[d.opts.length].isDisabled),
                                                    d.opts.push(t)
                                                }
                                            }
                                            ),
                                            d.opts && !d.opts.length)
                                                delete d.opts;
                                            else if (d.opts.every(function(e) {
                                                return e.val != d.value
                                            }
                                            ))
                                                if ("pPeriod" === d.key) {
                                                    var h = d.opts.filter(function(e) {
                                                        return !e.isHide && !e.isDisabled
                                                    }
                                                    );
                                                    h.length && (d.value = d.opts[h.length - 1].val)
                                                } else
                                                    d.value = d.opts[0].val
                                        }
                                    if (!(r = c.filter(function(e) {
                                        return d || console.log(t.name + " - " + (e && e.key) + "元素不存在："),
                                        d && e.value == d.value
                                    }
                                    )[0]) && l && d && l.map(function(e) {
                                        !r && e[d.key].some(function(e) {
                                            return e.value == d.value
                                        }
                                        ) && (r = e[d.key],
                                        t.eleOrderList[p - 1].value = e.value)
                                    }
                                    ),
                                    d && d.isHide && !d.isDisabled && p && 1 <= p && l) {
                                        var D = t.eleOrderList[p - 1];
                                        D.opts && D.opts.length && (D.opts = [],
                                        l.map(function(e) {
                                            r && e[d.key].some(function(e) {
                                                return e.value == d.value
                                            }
                                            ) && D.opts.push({
                                                val: e.value,
                                                desc: e.desc
                                            })
                                        }
                                        ))
                                    }
                                    l = c,
                                    r && (!n || t.allowSamePerson || i && i.title && !i.applicantAndInsuredSame) ? (u.isDisabled = !1,
                                    !t.required || t.groupKey && !t.isCheckbox || (u.value = !0,
                                    u.isDisabled = !0,
                                    console.log(u.labelName + "-" + t.key + ": 费率存在，险种为必选险且(为非组合险或为多选一险种)"))) : (u.isDisabled = !0,
                                    u.value = !1,
                                    r ? console.log(u.labelName + "-" + t.key + ": 为豁免险且不允许投被保人为同一人，投保人未选中或投被保人为同一人") : console.log(u.labelName + "-" + t.key + ": 费率不存在！"))
                                }
                            }
                        }
                        ),
                        O.createGroupIns(g);
                        var t = O.filterArr(L.personOrderList, "insuredInfo");
                        y && y[g.key] && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(y[g.key]).length && (!b[t.sex - 1].length || t.age < b[t.sex - 1][0] || t.age > b[t.sex - 1][1] ? (g.hide = !0,
                        g.totalBaof = 0) : g.hide = !1)
                    }
                }
            },
            createGroupIns: function(e, a) {
                var n = this;
                if (e.mulInsOrderList && e.mulInsOrderList.length) {
                    var o = {};
                    e.mulInsOrderList = e.mulInsOrderList.filter(function(e) {
                        return e.isGroup && (o[e.key] = e),
                        !e.isGroup
                    }
                    );
                    var s = {};
                    for (var r in e.mulInsOrderList.map(function(e, t) {
                        if (e.groupKey) {
                            var a, r;
                            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(o).length && (a = n.filterArr(o[e.groupKey].eleOrderList, "title").value,
                            r = n.filterArr(o[e.groupKey].eleOrderList, "insuranceId").value),
                            s[e.groupKey] = s[e.groupKey] || {
                                key: e.groupKey,
                                name: e.groupName,
                                huomian: e.huomian,
                                isGroup: !0,
                                eleOrderList: [{
                                    key: "title",
                                    value: a || !1,
                                    isDisabled: !1,
                                    componentName: "cmCommonTitle",
                                    labelName: e.groupName
                                }, {
                                    key: "insuranceId",
                                    value: r || (e.isCheckbox ? [] : ""),
                                    componentName: e.isCheckbox ? "cmCommonCheckbox" : "cmCommonRadio",
                                    opts: []
                                }]
                            };
                            var i = n.filterArr(e.eleOrderList, "title");
                            s[e.groupKey].eleOrderList.filter(function(e) {
                                return "insuranceId" == e.key
                            }
                            )[0].opts.push({
                                val: e.key,
                                desc: i.labelName,
                                isDisabled: i.isDisabled
                            })
                        }
                    }
                    ),
                    s) {
                        var i = n.filterArr(s[r].eleOrderList, "title")
                          , l = n.filterArr(s[r].eleOrderList, "insuranceId")
                          , t = e.mulInsOrderList.filter(function(e, t) {
                            return e.groupKey == r
                        }
                        );
                        if (l && (l.opts.every(function(e) {
                            return !!e.isDisabled
                        }
                        ) ? (i.value = !1,
                        i.isDisabled = !0) : i.isDisabled = !1,
                        t.map(function(e) {
                            var t = n.getArraySubEle(e.eleOrderList, "key", "title");
                            !e.required || t.isDisabled || i.value && i.isDisabled || (i.value = !0,
                            i.isDisabled = !0),
                            a && !l.value && t.value && !t.isDisabled && (l.value = e.key,
                            i.value = !0)
                        }
                        ),
                        l.value.constructor === Array ? l.opts = l.opts && l.opts.filter(function(e, t) {
                            return -1 !== l.value.indexOf(e.val) && !e.isDisabled
                        }
                        ) : l.value && n.getArraySubEle(l.opts, "val", l.value).isDisabled && (l.value = ""),
                        l.value)) {
                            var u = n.filterArr(e.mulInsOrderList, l.value);
                            for (var c in u)
                                -1 === ["code", "groupKey", "groupName", "isFollowing", "key", "name"].indexOf(c) && (s[r][c] = "eleOrderList" == c ? s[r][c].concat(u[c].filter(function(e) {
                                    return "title" != e.key
                                }
                                )) : u[c])
                        }
                        e.mulInsOrderList.push(s[r])
                    }
                }
            },
            convertPersonData: function(e) {
                var t = this
                  , a = {
                    personOrderList: [],
                    recipientInfo: {}
                };
                return e && (e.recipientInfo && (a.recipientInfo = t.convertCalData(e.recipientInfo)),
                e.personOrderList && e.personOrderList.map(function(e) {
                    a.personOrderList.push(t.convertCalData(e))
                }
                )),
                a
            },
            convertProductData: function(e, n) {
                var o = this
                  , t = {}
                  , a = {
                    personOrderList: [],
                    recipientInfo: {}
                };
                e && e.inputData && e.inputData.personData && (e.inputData.personData.recipientInfo && (a.recipientInfo = o.convertCalData(e.inputData.personData.recipientInfo)),
                e.inputData.personData.personOrderList && e.inputData.personData.personOrderList.map(function(e) {
                    a.personOrderList.push(o.convertCalData(e))
                }
                ),
                t.personData = a);
                var s = {
                    key: n && n.key,
                    titleName: n && n.titleName,
                    tradeId: n && n.tradeId,
                    companyId: n && n.companyId,
                    companyName: n && n.companyName,
                    isTemp: n && n.isTemp,
                    liabilityShowType: n && n.liabilityShowType,
                    liabilityOrderList: n && n.liabilityOrderList,
                    inputResultSwitch: n && n.inputResultSwitch,
                    policyType: n && n.policyType,
                    totalBaof: n && n.totalBaof,
                    common: {},
                    mulInsOrderList: []
                };
                return n && n.adjustBaoeData && (s.adjustBaoeData = n.adjustBaoeData),
                n && (n.mulInsOrderList.map(function(r, e) {
                    var i = o.convertCalData(r);
                    if ("common" == i.key)
                        s.common = i;
                    else if (i.title && !i.groupKey) {
                        if (i.isGroup)
                            (i.insuranceId.constructor == Array ? i.insuranceId : [i.insuranceId]).map(function(e) {
                                var t = o.filterArr(n.mulInsOrderList, e);
                                if (t) {
                                    var a = o.convertCalData(t);
                                    void 0 !== r.account && (a.account = r.account),
                                    void 0 !== r.accountData && (a.accountData = r.accountData),
                                    r.eleOrderList.map(function(e) {
                                        "title" != e.key && "insuranceId" != e.key && (a[e.key] = i[e.key])
                                    }
                                    ),
                                    s.mulInsOrderList.push(o.deepCopy({}, a))
                                }
                            }
                            );
                        else
                            s.mulInsOrderList.push(i)
                    }
                }
                ),
                t.productData = s),
                t
            },
            convertCalData: function(e) {
                var t = {};
                for (var a in e)
                    "eleOrderList" == a ? e[a].map(function(e) {
                        t[e.key] = e.value
                    }
                    ) : e.eleOrderList && this.getArraySubEle(e.eleOrderList, "key", a) || (t[a] = e[a]);
                return t
            },
            receiveProductData: function(e, t, a) {
                var n = this
                  , r = n.filterArr(e.inputData.productGroupList, t[0])
                  , o = n.filterArr(r.prodOrderList, t[1]);
                a.mulInsOrderList.map(function(t, e) {
                    var a = n.filterArr(o.mulInsOrderList, t.key);
                    if ("shm_spouse" === t.huomian)
                        a.shmInsData = t;
                    else
                        for (var r in t)
                            n.filterArr(a.eleOrderList, r) ? a.eleOrderList.map(function(e) {
                                void 0 !== t[e.key] && (e.value = t[e.key])
                            }
                            ) : a[r] = t[r]
                }
                ),
                o.mulInsOrderList.map(function(e) {
                    if (e.isGroup) {
                        var t = n.convertCalData(e)
                          , a = t.isCheckbox ? t.insuranceId[0] : t.insuranceId
                          , r = n.filterArr(o.mulInsOrderList, a);
                        for (var i in r)
                            -1 === ["allowSamePerson", "code", "eleOrderList", "groupKey", "groupName", "huomian", "key", "name"].indexOf(i) && (e[i] = r[i])
                    }
                }
                ),
                a.mulInsOrderList.some(function(e) {
                    return e.title
                }
                ) ? (e.$set(o, "hadChoice", !0),
                e.$set(o, "totalBaof", a.totalBaof)) : (e.$set(o, "hadChoice", void 0),
                e.$set(o, "totalBaof", void 0)),
                a.companyName && e.$set(o, "companyName", a.companyName);
                var i = void 0;
                return a.insShowArr ? i = a.insShowArr : a.mulInsOrderList.length && (i = [["险种", "保额", "保费", "交费期"]],
                "annual_survey" === __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b && i[0].push("保障期间"),
                a.mulInsOrderList.map(function(e) {
                    if (e.title && !e.resultFormulaRef) {
                        var t = [e.name, e.showPlanDesc ? e.planDesc : e.baoeDesc || "-", 0 === e.baofDesc || "0" === e.baofDesc || e.baofDesc ? e.baof : "-", e.pPeriodDesc];
                        "annual_survey" === __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b && t.push(e.iDurationDesc),
                        i.push(t)
                    }
                }
                )),
                i && e.$set(o, "insShowArr", 1 < i.length ? i : void 0),
                o
            },
            vueAxios: function(a, t, r) {
                var e, i = this;
                a.self.$axios.create();
                return a.withoutLoading || window.appBridge && appBridge.showLoading && appBridge.showLoading(),
                a.options = a.options || {},
                a.options.headers = {
                    "X-Requested-With": "XMLHttpRequest"
                },
                "get" == a.type ? (a.data && (a.options.params = a.data),
                e = a.self.$axios.get(a.url, a.options)) : e = a.self.$axios.post(a.url, a.data || "", a.options),
                e.then(function(e) {
                    if (e.data && e.data.success) {
                        if (-1 === e.data.data)
                            return void i.gotoLogin()
                    } else {
                        if ("002012" == e.data.code || "002015" == e.data.code)
                            return !a.withoutLoading && window.appBridge && appBridge.hideLoading && appBridge.hideLoading(),
                            void (window.appBridge && appBridge.uiConfirm({
                                class: "my-family uiAlertAutoDisappear_error",
                                okText: "去认证",
                                cancelText: "以后认证",
                                content: "根据监管要求，保险从业人员应当具备保险从业资格证书，才可以从事保险行业。",
                                clickMaskHide: !1,
                                statEp: {
                                    cancelBtnId: "fs_yhrz",
                                    okBtnId: "fs_qrz",
                                    uiVersion: 1,
                                    action: "fs",
                                    type: "tbyfs"
                                }
                            }).then(function() {
                                i.vueAxios({
                                    self: a.self,
                                    url: location.protocol + "//insurance-tech-api.winbaoxian." + (-1 === location.hostname.search(/pbf\.winbaoxian\.com/) ? "cn" : "com") + "/api/qualify/getQualifyPageUrl",
                                    type: "get"
                                }, function(e) {
                                    200 === e.data.code && e.data.data && e.data.data.pageUrl && (location.href = e.data.data.pageUrl + 4)
                                }
                                )
                            }
                            ).catch(function() {
                                history.go(-1)
                            }
                            ));
                        if ("002013" == e.data.code)
                            return void a.self.$toast("您今天做了太多计划书了，休息一下，明天再来吧");
                        if (401 === e.data.code)
                            return void i.gotoLogin();
                        e.data.info && a.self.$toast(e.data.info)
                    }
                    t && t(e),
                    !a.withoutLoading && window.appBridge && appBridge.hideLoading && appBridge.hideLoading()
                }
                ).catch(function(e) {
                    if (r && r(e),
                    e.response && 401 === e.response.status)
                        i.gotoLogin();
                    else {
                        var t = e.response ? "status: " + e.response.status + "-" + e.response.statusText + "。" : "msg: " + e.message + "。";
                        e.message.match(/Network Error/i) && navigator.userAgent.match(/Mobile\/(.+);/i) && "16A5288q" == navigator.userAgent.match(/Mobile\/(.+);/i)[1] ? t += "iOS12测试版存在兼容问题，请及时升级ios至最新版" : t += "可以截图后点击右上角“反馈”，我们会立刻处理，谢谢！",
                        a.self.$toast({
                            message: t,
                            duration: 3e3
                        }),
                        window.appBridge && appBridge.hideLoading && appBridge.hideLoading()
                    }
                }
                )
            },
            changePersonInfo: function(e, n, t) {
                var o = e
                  , s = e.allInputData.inputData
                  , a = s.productGroupList;
                a && a.map(function(i) {
                    i.isHide || i.prodOrderList.map(function(e, t) {
                        s.productGroupList.map(function(e) {
                            e.prodOrderList.map(function(e) {
                                helperJs.analysisCondition(e, verifyData, {
                                    inputData: s
                                })
                            }
                            )
                        }
                        );
                        var a = helperJs.convertProductData({
                            inputData: s
                        }, e);
                        if (!a.productData.hadChoice || a.productData.hide || a.productData.mulInsOrderList.length || (e.hide = !0,
                        o.$set && o.$set(e, "totalBaof", 0)),
                        e.hadChoice && !e.hide) {
                            var r = helperJs.valideProd({
                                inputData: s,
                                productData: e
                            });
                            if (!r)
                                return helperJs.calculateInsData({
                                    self: o,
                                    inputData: s,
                                    groupData: i,
                                    productData: e,
                                    calType: "personInfo"
                                }, n);
                            e.hadChoice = !1,
                            e.hide = i.defNum && t >= i.defNum,
                            o.$set && o.$set(e, "totalBaof", 0),
                            delete e.insShowArr,
                            o.$toast(r)
                        } else
                            e.hadChoice = !1,
                            delete e.insShowArr
                    }
                    )
                }
                ),
                t && t()
            },
            valideProd: function(r, i) {
                var n, o = r.productData;
                return o.restrictList && o.restrictList.length && (n = helperJs.verifyProdRestricts({
                    productData: o,
                    insData: r.insData,
                    eleData: r.eleData
                }, r.inputData)),
                n && !i || o.mulInsOrderList.map(function(a) {
                    a.eleOrderList && a.eleOrderList.map(function(e) {
                        if ((!n || i) && (e.restrictions && e.restrictions.length && (n = helperJs.verifyInsRestricts({
                            productData: o,
                            insData: a,
                            eleData: e
                        }, r.inputData)),
                        !n || i)) {
                            var t = e.ruleName || "rule" + a.key + e.key.replace(/\b(\w)|\s(\w)/g, function(e) {
                                return e.toUpperCase()
                            }
                            );
                            window.verifyRules && verifyRules.changeFn && verifyRules.changeFn[t] && (n = verifyRules.changeFn[t]({
                                productData: o,
                                insData: a,
                                eleData: e
                            }, r.inputData))
                        }
                    }
                    )
                }
                ),
                r.errorMsg = n
            },
            calculateInsData: function(t, a) {
                var r = t.self;
                "autoImport" != t.calType && t.productData.adjustBaoeData && r.$set(t.productData, "adjustBaoeData", null );
                var i = helperJs.convertProductData(t, t.productData).productData;
                if (i.mulInsOrderList.length) {
                    i.mulInsOrderList.map(function(e) {
                        e.shmInsData && delete e.shmInsData,
                        "autoImport" != t.calType && (e.accountData && r.$set(e.accountData, "addAndTakeData", []),
                        e.reduceBaof && r.$set(e, "reduceBaofData", null )),
                        -1 === ["annual_survey"].indexOf(__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b) || i.inputResultSwitch || void 0 === e.inputResult || (e.inputResult = "")
                    }
                    );
                    var e = {
                        insuranceTypeId: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId ? 1 * __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId : null ,
                        personData: helperJs.convertProductData(t).personData,
                        productGroupList: [{
                            key: t.groupData.key,
                            prodOrderList: [i]
                        }]
                    };
                    helperJs.vueAxios({
                        self: r,
                        url: allApiUrl.calculateDataApi,
                        data: r.$qs.stringify({
                            jd: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e),
                            signature: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__md5Token_min_js__.a)(e, {
                                groupDataKey: t.groupData.key
                            })
                        })
                    }, function(e) {
                        e.data.success ? (e.data.data.productGroupList[0].prodOrderList.map(function(e) {
                            t.$set = r.$set,
                            helperJs.receiveProductData(t, [t.groupData.key, t.productData.key], e)
                        }
                        ),
                        a && a()) : (t.productData.hadChoice = !1,
                        t.productData.insShowArr = [],
                        r.$toast(e.data.info))
                    }
                    )
                } else
                    r.$toast("请选择险种")
            },
            makePlanbook: function(o) {
                var s = o.self
                  , l = o.curEvent || event && event.target;
                if (!(l && l.classList && l.classList.contains("disabled"))) {
                    var e = void 0;
                    if ((e = s.inputData.productGroupList && s.inputData.productGroupList[0]) && e.prodOrderList.some(function(e) {
                        return !!e.hadChoice && !e.hide
                    }
                    )) {
                        var t = {
                            pbType: o.resultType || __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b || "",
                            insuranceTypeId: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId ? 1 * __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId : gPlanbookId,
                            companyId: s.inputData.companyId,
                            recordSetting: s.inputData.recordSetting,
                            totalBaof: 1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__planbook_utils_js__.a)(s.inputData.productGroupList).toFixed(2),
                            personData: helperJs.convertProductData(s).personData,
                            productGroupList: [],
                            theme: s.inputData.theme,
                            coverId: s.inputData.coverId,
                            commonData: s.inputData.commonData,
                            displayFormatSort: s.inputData.displayFormatSort,
                            categorySort: s.inputData.categorySort,
                            title: s.inputData.title || document.title,
                            userUuid: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.userUuid,
                            videoTypeKey: s.allInputData.videoTypeKey
                        };
                        s.inputData.productGroupList.map(function(e) {
                            var a = {
                                key: e.key,
                                prodOrderList: []
                            };
                            e.prodOrderList.map(function(e) {
                                if (e.hadChoice && !e.hide) {
                                    e.mulInsOrderList.map(function(a, e, t) {
                                        a.eleOrderInResult = [];
                                        var r = void 0;
                                        a.refInsuranceId && -2 != a.refInsuranceId && (r = -1 == a.refInsuranceId ? "common" == t[0].key ? t[1] : t[0] : helperJs.filterArr(t, a.refInsuranceId)),
                                        a.eleOrderList && a.eleOrderList.map(function(t) {
                                            var e = r && r.eleOrderList && r.eleOrderList.filter(function(e) {
                                                return e.key === t.key
                                            }
                                            )[0];
                                            -1 !== ["title", "calMethod", "customRate", "company"].indexOf(t.key) || t.isHide && (!t.isHide || t.isDisabled || !e || e.isHide) || a.eleOrderInResult.push({
                                                value: t.key,
                                                label: t.labelName
                                            })
                                        }
                                        )
                                    }
                                    );
                                    var t = helperJs.convertProductData(s, e).productData;
                                    t.mulInsOrderList.map(function(e) {
                                        "shuangHuomian" == e.huomian && e.shmInsData && e.shmInsData.title && t.mulInsOrderList.push(e.shmInsData)
                                    }
                                    ),
                                    a.prodOrderList.push(t)
                                }
                            }
                            ),
                            t.productGroupList.push(a)
                        }
                        ),
                        l && l.classList && !l.classList.contains("noDisabled") && l.classList.add("disabled");
                        var a = [];
                        return s.inputData.productGroupList.map(function(e) {
                            e.prodOrderList.map(function(e) {
                                e.hadChoice && a.push(e.key)
                            }
                            )
                        }
                        ),
                        window.WeiyiStatSDK.submit("scjhs", {
                            productList: a.join(),
                            insuredName: t.personData.personOrderList[0].name
                        }),
                        helperJs.vueAxios({
                            self: s,
                            url: o.url || allApiUrl.createPlanbookApi,
                            data: s.$qs.stringify({
                                jd: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t),
                                userUuid: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.userUuid,
                                signature: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__md5Token_min_js__.a)(t, {
                                    groupDataKey: e.key
                                })
                            }),
                            withoutLoading: o.withoutLoading
                        }, function(e) {
                            var t = e.data.data;
                            if (e.data.success)
                                if (o.successFn)
                                    o.successFn(e);
                                else {
                                    var a = localStorage.getItem("intellectScheme") ? JSON.parse(localStorage.getItem("intellectScheme")) : {};
                                    a["s" + __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId] = t,
                                    localStorage.setItem("intellectScheme", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(a));
                                    var r = "nw=1&";
                                    if (appBridge.isApp() && Jax && Jax.isBxsApp() && appBridge.isAndroid()) {
                                        var i = /weiyi\/((\d+)(\.(\d+))?(\.(\d+))?)?\s/gi.exec(navigator.userAgent.toLowerCase());
                                        i && "5.12.0" === i[1] && (r = "")
                                    }
                                    var n = location.origin + "/planBook/planBookResult/pages/planbkTemplate.html?" + r + "theme=" + s.inputData.theme + "&uuid=" + t + "&coverId=" + s.inputData.coverId;
                                    -1 !== location.hostname.search(/localhost|192\.168\./) && (n = location.protocol + "//" + location.hostname + ":8081/pages/planbkTemplate.html?" + r + "theme=" + s.inputData.theme + "&uuid=" + t + "&coverId=" + s.inputData.coverId),
                                    location.href = n
                                }
                            else
                                l && l.classList.remove("disabled")
                        }
                        )
                    }
                    return s.$toast("请选择险种"),
                    !1
                }
            },
            verifyProdRestricts: function verifyProdRestricts(me, iData) {
                var helperJs = this, aRestricts = me.productData.restrictList, personData = helperJs.convertProductData({
                    inputData: iData
                }).personData, insuredInfo, errorMsg;
                return personData && personData.personOrderList && (insuredInfo = helperJs.filterArr(personData.personOrderList, "insuredInfo")),
                aRestricts && aRestricts.length && aRestricts.map(function(r, i) {
                    var cProductData = helperJs.convertProductData(iData, me.productData).productData
                      , vRestData = {
                        age: insuredInfo.age,
                        sex: insuredInfo.sex,
                        common: cProductData.common
                    };
                    cProductData.mulInsOrderList.map(function(e, t, a) {
                        vRestData["i" + e.key] = e
                    }
                    ),
                    r.rCondition = r.rCondition.replace(/(%)(\d+)(\.*\w*)(%)/g, "vRestData.i$2$3"),
                    r.rCondition = r.rCondition.replace(/(%)(\w*\.*\w*)(%)/g, "vRestData.$2");
                    var curIns = helperJs.filterArr(me.productData.mulInsOrderList, r.rInsKey)
                      , curEle = curIns && helperJs.filterArr(curIns.eleOrderList, r.rEleKey);
                    if (curEle)
                        switch (r.rType) {
                        case 1:
                            eval(r.rCondition) ? (curEle.isDisabled = !1,
                            r.other && -1 !== r.other.indexOf("required") && (curEle.value = !0,
                            curEle.isDisabled = !0)) : (curEle.isDisabled = !0,
                            r.other && -1 !== r.other.indexOf("optional") && (curEle.isDisabled = !1),
                            curEle.isDisabled && (curEle.value = !1),
                            me.insData && me.eleData && -1 !== r.rCondition.search(me.insData.key + "." + me.eleData.key) && (curEle.value = !1));
                            break;
                        case 2:
                            var rangeSelect = eval(r.rCondition);
                            null  != rangeSelect && curEle.opts.map(function(e) {
                                var t = helperJs.getValueFromYear(e.val, vRestData.age)
                                  , a = rangeSelect.constructor === Array ? [rangeSelect[0] && helperJs.getValueFromYear(rangeSelect[0], vRestData.age), rangeSelect[1] && helperJs.getValueFromYear(rangeSelect[1], vRestData.age)] : helperJs.getValueFromYear(rangeSelect, vRestData.age);
                                rangeSelect && (rangeSelect.constructor === Array ? e.isHide = rangeSelect[0] && t < a[0] || rangeSelect[1] && t > a[1] : e.isHide = a < t)
                            }
                            );
                            break;
                        case 3:
                            if (!me.insData && !me.eleData || r.rInsKey == me.insData.key && r.rEleKey == me.eleData.key || -1 !== r.rCondition.search("vRestData.i") && -1 !== r.rCondition.search(me.insData.key + "." + me.eleData.key)) {
                                var rangeVal = eval(r.rCondition);
                                null  != rangeVal && (rangeVal.constructor === Array ? rangeVal[0] && curEle.value && curEle.value < rangeVal[0] ? errorMsg = r.rMsg || curIns.name + "的" + curEle.labelName + "不得小于" + rangeVal[0] : rangeVal[1] && curEle.value && curEle.value > rangeVal[1] && (errorMsg = r.rMsg || curIns.name + "的" + curEle.labelName + "不得大于" + rangeVal[1]) : rangeVal.constructor !== String && rangeVal.constructor !== Number || rangeVal && (curEle.value = rangeVal))
                            }
                        }
                }
                ),
                errorMsg
            },
            getValueFromYear: function(e, t) {
                return "number" == typeof e ? e : "a1000" === e ? 1 : e.match(/^a/) ? 1 * e.replace(/\D/g, "") - (t || 0) : 1 * e.replace(/\D/g, "")
            },
            verifyInsRestricts: function(a, e) {
                var t = this
                  , r = t.convertCalData(a.insData)
                  , i = t.convertProductData({
                    inputData: e
                }).personData;
                if (i && i.personOrderList) {
                    var n = t.filterArr(i.personOrderList, "insuredInfo");
                    r.sex = n.sex,
                    r.age = n.age
                }
                var o, s = a.eleData.restrictions.filter(function(e) {
                    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()(e).every(function(t) {
                        return "age" === t && r[t] >= e[t][0] && r[t] <= e[t][1] || t === a.eleData.key || (e[t].constructor === String || e[t].constructor === Number) && r[t] === e[t] || e[t].constructor === Array && e[t].some(function(e) {
                            return e == r[t]
                        }
                        )
                    }
                    )
                }
                );
                if (s && s.length) {
                    var l = s[0][a.eleData.key];
                    l.length && (a.eleData.opts ? (a.eleData.opts = l,
                    a.eleData.opts.some(function(e) {
                        return e.val == a.eleData.value
                    }
                    ) || (o = "当前条件下，没有此" + a.eleData.labelName + "选项, 已自动切换")) : a.eleData.optCof && a.eleData.optCof.length && "" != a.eleData.optCof[0] || (l[0] && a.eleData.value < l[0] || l[1] && a.eleData.value > l[1]) && (o = "当前条件下," + a.insData.name + "的" + a.eleData.labelName + "值" + (l[0] ? "不得小于 " + t.getUnitWan(l[0]) + (l[1] ? " 且" : " ") : "") + (l[1] ? "不得大于 " + t.getUnitWan(l[1]) : "")))
                }
                return o
            },
            initValidateRules: function initValidateRules(self) {
                var validate = {};
                return -1 !== ["cmCommonInputSever", "cmCommonInput"].indexOf(self.eleData.componentName) && (!1 !== self.eleData.required && (validate.required = {
                    rule: void 0 === self.eleData.required || self.eleData.required,
                    initial: "off",
                    message: "请输入值"
                }),
                validate.regExp = {
                    rule: self.eleData.regExp ? eval(self.eleData.regExp) : /^\d*$/,
                    initial: "off",
                    message: self.eleData.regExpMessage || (self.eleData.regExp ? "输入不合法，请重新输入" : "请输入整数值"),
                    validator: function(e, t) {
                        return !e || t.test(e)
                    }
                }),
                void 0 !== self.eleData.min && self.eleData.min && !isNaN(self.eleData.min) && (validate.min = {
                    rule: self.eleData.min,
                    initial: "off",
                    message: "请输入最小值不小于" + this.getUnitWan(self.eleData.min)
                }),
                void 0 !== self.eleData.max && self.eleData.max && !isNaN(self.eleData.max) && (validate.max = {
                    rule: self.eleData.max,
                    initial: "off",
                    message: "请输入最大值不大于" + this.getUnitWan(self.eleData.max)
                }),
                void 0 !== self.eleData.multi && self.eleData.multi && !isNaN(self.eleData.multi) && (validate.multi = {
                    rule: self.eleData.multi,
                    initial: "off",
                    message: "请输入" + self.eleData.multi + "倍数",
                    validator: function(e, t) {
                        return !(e && t && e % t)
                    }
                }),
                void 0 !== self.eleData.compareItem && self.eleData.compareItem && self.eleData.compareItem.length && (validate.compare = {
                    rule: [],
                    initial: "off",
                    message: self.eleData.compareItem[3] || "数据输入有误",
                    compareItem: self.eleData.compareItem,
                    validator: function(e, t, a) {
                        var r;
                        switch (t[1]) {
                        case "<=":
                            r = t[0] <= t[2];
                            break;
                        case ">=":
                            r = t[0] >= t[2];
                            break;
                        case "<":
                            r = t[0] < t[2];
                            break;
                        case ">":
                            r = t[0] > t[2];
                            break;
                        default:
                            r = t[0] <= t[2]
                        }
                        return !t[0] || !t[2] || r
                    }
                }),
                validate
            },
            collectValidateVm: function(e, t) {
                var a = this;
                return e.validate && t.push(e),
                e.$children && e.$children.map(function(e) {
                    a.collectValidateVm(e, t)
                }
                ),
                t
            },
            validateAllFn: function(t, a, r, i, n) {
                var o = this;
                if (a && a.length || i && i(),
                !(t >= a.length)) {
                    if (a[t] && a[t].validate)
                        for (var e in a[t].validate)
                            if (a[t].validate[e] && a[t].validate[e].compareItem && a[t].validate[e].compareItem.length) {
                                var s = a[t].validate[e].compareItem
                                  , l = r.productData.mulInsOrderList.filter(function(e) {
                                    return e.key == s[0].split(".")[0]
                                }
                                )[0]
                                  , u = r.productData.mulInsOrderList.filter(function(e) {
                                    return e.key == s[2].split(".")[0]
                                }
                                )[0];
                                a[t].validate[e].rule = [l && o.filterArr(l.eleOrderList, "title").value ? o.filterArr(l.eleOrderList, s[0].split(".")[1].split("*")[0]).value * (s[0].split("*")[1] ? s[0].split("*")[1] : 1) : 0, s[1], u && o.filterArr(u.eleOrderList, "title").value ? o.filterArr(u.eleOrderList, s[2].split(".")[1].split("*")[0]).value * (s[2].split("*")[1] ? s[2].split("*")[1] : 1) : 0]
                            }
                    a[t].$validate().then(function(e) {
                        t === a.length - 1 && i && i(),
                        e.fields[0].$el.querySelector("select, input").style.removeProperty("border-color"),
                        o.validateAllFn(t + 1, a, r, i, n)
                    }
                    ).catch(function(e) {
                        console.log(e),
                        e.fields && (e.fields[0].$el.querySelector("select, input").style.borderColor = "#F04848",
                        e.fields[0].$el.querySelector("select, input").scrollIntoView()),
                        n && n(e)
                    }
                    )
                }
            },
            getUnitWan: function(e) {
                return 1e4 <= e && !(e % 1e4) ? e / 1e4 + "万" : e
            },
            getArraySubEle: function(e, t, a) {
                if (e && e.constructor === Array && void 0 !== t) {
                    var r = e.filter(function(e) {
                        return "object" === (void 0 === e ? "undefined" : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(e)) && e[t] == a
                    }
                    );
                    return r.length <= 1 ? r[0] || "" : r
                }
            },
            getDateString: function(e) {
                return e ? ("number" == typeof e ? e = new Date(e) : e.constructor !== Date && (e = new Date(e)),
                e.getFullYear ? e.getFullYear() + (e.getMonth() + 1 < 10 ? "-0" : "-") + (e.getMonth() + 1) + (e.getDate() < 10 ? "-0" : "-") + e.getDate() : "") : ""
            },
            stopBodyScroll: function(e) {
                var t = document.body;
                e ? (positionTop = window.scrollY,
                t.style.position = "fixed",
                t.style.top = -positionTop + "px",
                document.documentElement.style.height = window.innerHeight + this.SAFE_AREA_INSET_BOTTOM + "px") : (t.style.position = "",
                t.style.top = "",
                document.documentElement.style.height = "",
                window.scrollTo(0, positionTop))
            },
            parseTime: function(e, t) {
                if (0 === arguments.length)
                    return null ;
                var a = t || "{y}-{m}-{d} {h}:{i}:{s}"
                  , r = void 0;
                if (null  !== e) {
                    "object" === (void 0 === e ? "undefined" : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(e)) ? r = e : (10 === ("" + e).length && (e = 1e3 * parseInt(e)),
                    r = new Date(e));
                    var i = {
                        y: r.getFullYear(),
                        m: r.getMonth() + 1,
                        d: r.getDate(),
                        h: r.getHours(),
                        i: r.getMinutes(),
                        s: r.getSeconds(),
                        a: r.getDay()
                    };
                    return a.replace(/{(y|m|d|h|i|s|a)+}/g, function(e, t) {
                        var a = i[t];
                        return "a" === t ? ["一", "二", "三", "四", "五", "六", "日"][a - 1] : (0 < e.length && a < 10 && (a = "0" + a),
                        a || 0)
                    }
                    )
                }
            },
            myMixin: {
                data: function() {
                    return {
                        gPBType: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b,
                        PB_TYPE: __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b,
                        window: window
                    }
                }
            },
            SAFE_AREA_INSET_BOTTOM: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__env_js__.a)() ? 34 : 0
        };
        window.helperJs = helperJs,
        window.gPlanbookId = __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId ? 1 * __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId : null ,
        window.gPBType = __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b,
        window.gCrmId = helperJs.getQueryString("cId"),
        window.gPreview = helperJs.getQueryString("preview"),
        window.gStorageUuid = null ,
        !__WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.b && 1 != gPreview && localStorage.getItem("intellectScheme") && (window.gStorageUuid = JSON.parse(localStorage.getItem("intellectScheme"))["s" + __WEBPACK_IMPORTED_MODULE_6__static_js_variables_js__.a.planbookId]),
        window.gResultUuid = helperJs.getQueryString("uuid")
    }
}, [735]);


