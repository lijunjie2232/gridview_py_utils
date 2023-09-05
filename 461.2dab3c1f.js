(self["webpackChunkefile"] = self["webpackChunkefile"] || []).push([[461], {
    96461: function(t, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            default: function() {
                return nn
            }
        });
        var r = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.fullscreenLoading,
                    expression: "fullscreenLoading"
                }],
                class: ["efile-home", {
                    "ac-client": "acClient" === t.fromService
                }],
                attrs: {
                    tabindex: "0"
                },
                on: {
                    keydown: function(e) {
                        if (!e.shiftKey)
                            return null;
                        e.stopPropagation(),
                        t.shift = !0
                    },
                    keyup: function(e) {
                        return e.stopPropagation(),
                        t.handler.apply(null, arguments)
                    }
                }
            }, [e("efile-account-alert", {
                on: {
                    close: t.updateStyle
                }
            }), t._v(" "), t.share || t.isAc ? t._e() : e("user-info-header"), t._v(" "), e("div", {
                class: "file-box ".concat("acClient" === t.fromService && "shell" !== t.from ? "" : "file-box-padding"),
                style: t.getFileBoxHeight
            }, [t.share ? t._e() : e("div", [e("feature-box", {
                ref: "featureBox",
                attrs: {
                    from: t.from,
                    disabled: t.efileDisabled,
                    path: t.path,
                    "root-list": t.pathListWithoutShare,
                    "disable-path-list": t.disablePathList,
                    "second-switch": t.secondSwitch,
                    readdisable: t.readdisable,
                    writedisable: t.writedisable,
                    keyword: t.keyword,
                    "multiple-selection": t.multipleSelection,
                    "upload-flag": t.uploadFlag
                },
                on: {
                    openTableLoading: t.openTableLoading,
                    uploadRaySyncFile: t.uploadRaySyncFile,
                    uploadRaySyncFiles: t.uploadRaySyncFiles,
                    getFileList: t.getFileList,
                    searchFunc: t.searchFunc,
                    downloadRaysyncFiles: t.downloadRaysyncFiles,
                    initInfo: t.initInfo,
                    downloadLinuxApp: t.downloadFastTransApp,
                    batchDownload: t.batchDownload,
                    openUplist: t.handleOpenUplist,
                    uploadFiles: t.handleUploadFiles
                }
            }), t._v(" "), e("path-header", {
                attrs: {
                    disabled: t.efileDisabled,
                    "path-type": "input",
                    width: 500,
                    "disable-path-list": t.disablePathList,
                    "root-list": t.pathList,
                    path: t.path
                },
                on: {
                    changePath: t.changePathNew
                }
            })], 1), t._v(" "), t.share ? e("share-header", {
                attrs: {
                    path: t.path,
                    "root-list": t.pathList,
                    readdisable: t.readdisable,
                    writedisable: t.writedisable,
                    "multiple-selection": t.multipleSelection
                },
                on: {
                    changePath: t.changePathNew,
                    resetPath: t.visitorRefresh,
                    downloadRaysyncFiles: t.downloadRaysyncFiles
                }
            }) : t._e(), t._v(" "), e("content-box", {
                ref: "contentBox",
                style: {
                    height: t.tableAreaHeight
                },
                attrs: {
                    "table-loading": t.tableLoading,
                    "tree-loading": t.treeLoading,
                    total: t.fileListLen,
                    "current-page": t.currentPage,
                    "page-size": t.pageSize,
                    "empty-text": t.emptyText,
                    "table-data": t.tableData,
                    "tree-show": t.treeShow,
                    "tree-data": t.treeData,
                    "share-enabled": t.shareEnabled,
                    "current-select-path": t.path,
                    "is-visitor": t.share,
                    "second-switch": t.secondSwitch
                },
                on: {
                    "update:tableLoading": function(e) {
                        t.tableLoading = e
                    },
                    "update:table-loading": function(e) {
                        t.tableLoading = e
                    },
                    "update:treeLoading": function(e) {
                        t.treeLoading = e
                    },
                    "update:tree-loading": function(e) {
                        t.treeLoading = e
                    },
                    "update:treeShow": function(e) {
                        t.treeShow = e
                    },
                    "update:tree-show": function(e) {
                        t.treeShow = e
                    },
                    handleSizeChange: t.handleSizeChange,
                    changePath: t.changePath,
                    getFileList: t.getFileList,
                    nodeExpand: t.nodeExpand,
                    appendTreeList: t.appendTreeList,
                    selectChange: t.selectChange,
                    selectAll: t.selectAll,
                    handleSelectionChange: t.handleSelectionChange,
                    sortChange: t.sortChange,
                    stepListClick: t.stepListClick,
                    handleCurrentChange: t.handleCurrentChange,
                    lookForNextFolder: t.lookForNextFolder,
                    downloadFile: t.downloadFile,
                    downloadLinuxApp: t.downloadFastTransApp
                }
            })], 1), t._v(" "), t.promptFlag ? e("div", {
                staticClass: "promptNotConnect"
            }, [t.unStartMark ? e("div", [e("img", {
                staticClass: "image",
                attrs: {
                    src: n(43193),
                    alt: "warning"
                }
            }), t._v(" "), e("p", [t._v("\n          " + t._s(t.$t("check_fasttrans_msg")) + "  \n        "), e("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.startClient
                }
            }, [t._v("\n          " + t._s(t.$t("click_to_start")) + "\n        ")])], 1), t._v(" "), e("p", [t._v("\n           " + t._s(t.$t("not_install_client")) + "\n        "), e("a", {
                attrs: {
                    href: t.downloadRaysyncLink
                },
                on: {
                    click: t.closePrompt
                }
            }, [t._v(t._s(t.$t("download_url")))])])]) : t._e(), t._v(" "), t.updateRaysyncMark ? e("div", [e("img", {
                staticClass: "image",
                attrs: {
                    src: n(43193),
                    alt: "warning"
                }
            }), t._v(" "), e("p", [t._v("\n        " + t._s(t.$t("low_version_info")) + "\n        "), e("el-button", {
                attrs: {
                    type: "primary"
                }
            }, [e("a", {
                staticStyle: {
                    color: "#fff"
                },
                attrs: {
                    href: t.downloadRaysyncLink
                },
                on: {
                    click: t.closePrompt
                }
            }, [t._v("\n            " + t._s(t.$t("download_for_update")) + "\n          ")])]), t._v("\n        " + t._s(t.$t("or")) + "\n        "), e("span", {
                staticClass: "word",
                on: {
                    click: t.continueUpload
                }
            }, [t._v("\n          " + t._s(t.$t("continue_uploading")) + "\n        ")])], 1)]) : t._e(), t._v(" "), e("span", {
                staticClass: "el-icon-close",
                on: {
                    click: function(e) {
                        t.promptFlag = !1
                    }
                }
            })]) : t._e(), t._v(" "), e("file-preview", {
                attrs: {
                    share: t.share,
                    show: t.filePreviewFlag,
                    "file-path": t.textFilePath,
                    "file-name": t.previewFileName,
                    "file-type": t.previewFileType,
                    "account-disabled": t.checkAccountDisable(t.clusterId)
                },
                on: {
                    "update:show": function(e) {
                        t.filePreviewFlag = e
                    },
                    getFileList: t.getFileList
                }
            }), t._v(" "), e("image-preview", {
                attrs: {
                    visible: t.previewFlag,
                    "preview-src-list": t.previewImgArr,
                    "current-src": t.previewImageKey
                },
                on: {
                    "update:visible": function(e) {
                        t.previewFlag = e
                    }
                }
            })], 1)
        }
          , i = []
          , o = n(89584);
        function a(t) {
            if (Array.isArray(t))
                return t
        }
        n(82526),
        n(41817),
        n(41539),
        n(32165),
        n(78783),
        n(33948),
        n(57658);
        function s(t, e) {
            var n = null == t ? null : "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (null != n) {
                var r, i, o = [], a = !0, s = !1;
                try {
                    for (n = n.call(t); !(a = (r = n.next()).done); a = !0)
                        if (o.push(r.value),
                        e && o.length === e)
                            break
                } catch (l) {
                    s = !0,
                    i = l
                } finally {
                    try {
                        a || null == n["return"] || n["return"]()
                    } finally {
                        if (s)
                            throw i
                    }
                }
                return o
            }
        }
        var l = n(12780);
        n(21703);
        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function u(t, e) {
            return a(t) || s(t, e) || (0,
            l.Z)(t, e) || c()
        }
        n(72443),
        n(39341),
        n(73706),
        n(10408),
        n(30489),
        n(54747),
        n(68309),
        n(68304),
        n(67987),
        n(47042);
        var h = n(3336);
        function f() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            f = function() {
                return t
            }
            ;
            var t = {}
              , e = Object.prototype
              , n = e.hasOwnProperty
              , r = Object.defineProperty || function(t, e, n) {
                t[e] = n.value
            }
              , i = "function" == typeof Symbol ? Symbol : {}
              , o = i.iterator || "@@iterator"
              , a = i.asyncIterator || "@@asyncIterator"
              , s = i.toStringTag || "@@toStringTag";
            function l(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                l({}, "")
            } catch (O) {
                l = function(t, e, n) {
                    return t[e] = n
                }
            }
            function c(t, e, n, i) {
                var o = e && e.prototype instanceof p ? e : p
                  , a = Object.create(o.prototype)
                  , s = new L(i || []);
                return r(a, "_invoke", {
                    value: C(t, n, s)
                }),
                a
            }
            function u(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (O) {
                    return {
                        type: "throw",
                        arg: O
                    }
                }
            }
            t.wrap = c;
            var d = {};
            function p() {}
            function g() {}
            function v() {}
            var m = {};
            l(m, o, (function() {
                return this
            }
            ));
            var y = Object.getPrototypeOf
              , A = y && y(y(T([])));
            A && A !== e && n.call(A, o) && (m = A);
            var w = v.prototype = p.prototype = Object.create(m);
            function b(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    l(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function S(t, e) {
                function i(r, o, a, s) {
                    var l = u(t[r], t, o);
                    if ("throw" !== l.type) {
                        var c = l.arg
                          , f = c.value;
                        return f && "object" == (0,
                        h.Z)(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                            i("next", t, a, s)
                        }
                        ), (function(t) {
                            i("throw", t, a, s)
                        }
                        )) : e.resolve(f).then((function(t) {
                            c.value = t,
                            a(c)
                        }
                        ), (function(t) {
                            return i("throw", t, a, s)
                        }
                        ))
                    }
                    s(l.arg)
                }
                var o;
                r(this, "_invoke", {
                    value: function(t, n) {
                        function r() {
                            return new e((function(e, r) {
                                i(t, n, e, r)
                            }
                            ))
                        }
                        return o = o ? o.then(r, r) : r()
                    }
                })
            }
            function C(t, e, n) {
                var r = "suspendedStart";
                return function(i, o) {
                    if ("executing" === r)
                        throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i)
                            throw o;
                        return I()
                    }
                    for (n.method = i,
                    n.arg = o; ; ) {
                        var a = n.delegate;
                        if (a) {
                            var s = E(a, n);
                            if (s) {
                                if (s === d)
                                    continue;
                                return s
                            }
                        }
                        if ("next" === n.method)
                            n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r)
                                throw r = "completed",
                                n.arg;
                            n.dispatchException(n.arg)
                        } else
                            "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var l = u(t, e, n);
                        if ("normal" === l.type) {
                            if (r = n.done ? "completed" : "suspendedYield",
                            l.arg === d)
                                continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (r = "completed",
                        n.method = "throw",
                        n.arg = l.arg)
                    }
                }
            }
            function E(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (e.delegate = null,
                    "throw" === e.method) {
                        if (t.iterator["return"] && (e.method = "return",
                        e.arg = void 0,
                        E(t, e),
                        "throw" === e.method))
                            return d;
                        e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var r = u(n, t.iterator, e.arg);
                if ("throw" === r.type)
                    return e.method = "throw",
                    e.arg = r.arg,
                    e.delegate = null,
                    d;
                var i = r.arg;
                return i ? i.done ? (e[t.resultName] = i.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                d) : i : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                d)
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function k(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function L(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(x, this),
                this.reset(!0)
            }
            function T(t) {
                if (t) {
                    var e = t[o];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var r = -1
                          , i = function e() {
                            for (; ++r < t.length; )
                                if (n.call(t, r))
                                    return e.value = t[r],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return i.next = i
                    }
                }
                return {
                    next: I
                }
            }
            function I() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return g.prototype = v,
            r(w, "constructor", {
                value: v,
                configurable: !0
            }),
            r(v, "constructor", {
                value: g,
                configurable: !0
            }),
            g.displayName = l(v, s, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v,
                l(t, s, "GeneratorFunction")),
                t.prototype = Object.create(w),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            b(S.prototype),
            l(S.prototype, a, (function() {
                return this
            }
            )),
            t.AsyncIterator = S,
            t.async = function(e, n, r, i, o) {
                void 0 === o && (o = Promise);
                var a = new S(c(e, n, r, i),o);
                return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            b(w),
            l(w, s, "Generator"),
            l(w, o, (function() {
                return this
            }
            )),
            l(w, "toString", (function() {
                return "[object Generator]"
            }
            )),
            t.keys = function(t) {
                var e = Object(t)
                  , n = [];
                for (var r in e)
                    n.push(r);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var r = n.pop();
                        if (r in e)
                            return t.value = r,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            t.values = T,
            L.prototype = {
                constructor: L,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(k),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function r(n, r) {
                        return a.type = "throw",
                        a.arg = t,
                        e.next = n,
                        r && (e.method = "next",
                        e.arg = void 0),
                        !!r
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var o = this.tryEntries[i]
                          , a = o.completion;
                        if ("root" === o.tryLoc)
                            return r("end");
                        if (o.tryLoc <= this.prev) {
                            var s = n.call(o, "catchLoc")
                              , l = n.call(o, "finallyLoc");
                            if (s && l) {
                                if (this.prev < o.catchLoc)
                                    return r(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return r(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc)
                                    return r(o.catchLoc, !0)
                            } else {
                                if (!l)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return r(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r];
                        if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                            var o = i;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = t,
                    a.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    d) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    d
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                            k(n),
                            d
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                k(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, n) {
                    return this.delegate = {
                        iterator: T(t),
                        resultName: e,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = void 0),
                    d
                }
            },
            t
        }
        function d(t, e, n, r, i, o, a) {
            try {
                var s = t[o](a)
                  , l = s.value
            } catch (c) {
                return void n(c)
            }
            s.done ? e(l) : Promise.resolve(l).then(r, i)
        }
        function p(t) {
            return function() {
                var e = this
                  , n = arguments;
                return new Promise((function(r, i) {
                    var o = t.apply(e, n);
                    function a(t) {
                        d(o, r, i, a, s, "next", t)
                    }
                    function s(t) {
                        d(o, r, i, a, s, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        var g = n(4648)
          , v = (n(57327),
        n(26699),
        n(74916),
        n(15306),
        n(34553),
        n(69826),
        n(4723),
        n(92222),
        n(77601),
        n(51532),
        n(69600),
        n(21249),
        n(70189),
        n(2707),
        n(32023),
        n(38862),
        n(9653),
        n(20629))
          , m = n(96486)
          , y = n.n(m)
          , A = n(22648)
          , w = n(7539)
          , b = n(9062)
          , S = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "feature-box"
            }, [e("div", {
                staticClass: "flex-box",
                staticStyle: {
                    padding: "10px 0"
                }
            }, [e("div", {
                staticClass: "functional-box"
            }, [t.isAc && t.isMainSite ? e("div", {
                staticStyle: {
                    "margin-right": "10px"
                }
            }, [t.$store.getters.clusterList.length ? e("el-select", {
                attrs: {
                    filterable: ""
                },
                model: {
                    value: t.clusterId,
                    callback: function(e) {
                        t.clusterId = e
                    },
                    expression: "clusterId"
                }
            }, t._l(t.$store.getters.clusterList, (function(t) {
                return e("el-option", {
                    key: t.clusterId,
                    attrs: {
                        label: t.centerName,
                        value: t.clusterId
                    }
                })
            }
            )), 1) : t._e()], 1) : t._e(), t._v(" "), e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.checkNotShareDir(),
                    expression: "checkNotShareDir()"
                }],
                staticClass: "flex-no-wrap"
            }, [e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.$t("account_disabled_tips"),
                    disabled: !t.checkAccountDisable(t.clusterId)
                }
            }, [e("el-dropdown", {
                attrs: {
                    disabled: t.uploaderForbidden
                },
                on: {
                    command: t.handleNewCommand
                }
            }, [e("el-button", {
                staticClass: "margin-right-8 padding-right-10",
                attrs: {
                    type: "primary",
                    disabled: t.uploaderForbidden
                }
            }, [t._v("\n              " + t._s(t.$t("new")) + "\n              "), e("i", {
                staticClass: "el-icon-arrow-down el-icon--right"
            })]), t._v(" "), e("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [e("el-dropdown-item", {
                attrs: {
                    command: "file"
                }
            }, [t._v("\n                " + t._s(t.$t("new_file")) + "\n              ")]), t._v(" "), e("el-dropdown-item", {
                attrs: {
                    command: "folder"
                }
            }, [t._v("\n                " + t._s(t.$t("new_directory")) + "\n              ")])], 1)], 1)], 1), t._v(" "), e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.$t("account_disabled_tips"),
                    disabled: !t.checkAccountDisable(t.clusterId)
                }
            }, [e("el-dropdown", {
                attrs: {
                    disabled: t.uploaderForbidden
                },
                on: {
                    "visible-change": t.visibleChange,
                    command: t.handleUploadCommand
                }
            }, [e("el-button", {
                staticClass: "margin-right-8 padding-right-10",
                attrs: {
                    disabled: t.uploaderForbidden
                }
            }, [t._v("\n              " + t._s(t.$t("upload")) + "\n              "), e("i", {
                staticClass: "el-icon-arrow-down el-icon--right"
            })]), t._v(" "), e("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [e("el-dropdown-item", {
                attrs: {
                    command: "file"
                }
            }, [e("div", {
                ref: "uploaderBtnFile",
                staticClass: "s-uploader-btn"
            }, [t._v("\n                  " + t._s(t.$t("upload_files")) + "\n                ")])]), t._v(" "), e("el-dropdown-item", {
                attrs: {
                    command: "folder"
                }
            }, [e("div", {
                ref: "uploaderBtnFolder",
                staticClass: "s-uploader-btn"
            }, [t._v("\n                  " + t._s(t.$t("upload_folder")) + "\n                ")])])], 1)], 1)], 1), t._v(" "), e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.$t("account_disabled_tips"),
                    disabled: !t.checkAccountDisable(t.clusterId)
                }
            }, [e("div", [t.raysyncEnable() ? e("el-dropdown", {
                attrs: {
                    disabled: t.uploaderForbidden
                },
                on: {
                    command: t.handleQuickTransportCommand
                }
            }, [e("el-button", {
                staticClass: "margin-right-8 padding-right-10",
                attrs: {
                    disabled: t.uploaderForbidden
                }
            }, [t._v("\n                " + t._s(t.$t("quick_transport")) + "\n                "), e("i", {
                staticClass: "el-icon-arrow-down el-icon--right"
            })]), t._v(" "), e("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [e("el-dropdown-item", {
                attrs: {
                    command: "file"
                }
            }, [t._v("\n                  " + t._s(t.$t("upload_files")) + "\n                ")]), t._v(" "), e("el-dropdown-item", {
                attrs: {
                    command: "folder"
                }
            }, [t._v("\n                  " + t._s(t.$t("upload_folder")) + "\n                ")])], 1)], 1) : t._e()], 1)]), t._v(" "), e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.getTipsInfo("read", "download"),
                    disabled: !t.getBtnDisable("read")
                }
            }, [e("div", [t.raysyncEnable() ? e("el-dropdown", {
                attrs: {
                    disabled: t.getBtnDisable("read")
                },
                on: {
                    command: t.handleDownloadCommand
                }
            }, [e("el-button", {
                staticClass: "margin-right-8 padding-right-10",
                attrs: {
                    disabled: t.getBtnDisable("read")
                }
            }, [t._v("\n                " + t._s(t.$t("batch_download")) + "\n                "), e("i", {
                staticClass: "el-icon-arrow-down el-icon--right"
            })]), t._v(" "), e("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [e("el-dropdown-item", {
                attrs: {
                    command: "common"
                }
            }, [t._v("\n                  " + t._s(t.$t("common_download")) + "\n                ")]), t._v(" "), "acClient" === t.fromService ? e("el-dropdown-item", {
                attrs: {
                    command: "acClient"
                }
            }, [t._v("\n                  " + t._s(t.$t("client_download")) + "\n                ")]) : e("el-dropdown-item", {
                attrs: {
                    command: "client"
                }
            }, [t._v("\n                  " + t._s(t.$t("client_download")) + "\n                ")])], 1)], 1) : t._e()], 1)])], 1), t._v(" "), e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.getTipsInfo("read", "download"),
                    disabled: !t.getBtnDisable("read")
                }
            }, [e("div", [t.checkNotShareDir() && t.secondSwitch && t.raysyncEnabled ? t._e() : e("el-button", {
                staticClass: "margin-right-8",
                attrs: {
                    disabled: t.getBtnDisable("read")
                },
                on: {
                    click: t.batchDownload
                }
            }, [t._v("\n            " + t._s(t.$t("batch_download")) + "\n          ")])], 1)]), t._v(" "), t.checkNotShareDir() ? e("div", {
                staticClass: "flex"
            }, [e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.getTipsInfo("read", "copy", !0),
                    disabled: !t.getBtnDisable("read", !0)
                }
            }, [e("div", [e("el-button", {
                staticClass: "margin-right-8",
                attrs: {
                    disabled: t.getBtnDisable("read", !0)
                },
                on: {
                    click: function(e) {
                        return t.copyOrMove("copy")
                    }
                }
            }, [t._v("\n              " + t._s(t.$t("copy")) + "\n            ")])], 1)]), t._v(" "), e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.getTipsInfo("write", "move", !0),
                    disabled: !t.getBtnDisable("write", !0)
                }
            }, [e("div", [e("el-button", {
                staticClass: "margin-right-8",
                attrs: {
                    disabled: t.getBtnDisable("write", !0)
                },
                on: {
                    click: function(e) {
                        return t.copyOrMove("move")
                    }
                }
            }, [t._v("\n              " + t._s(t.$t("move")) + "\n            ")])], 1)])], 1) : t._e(), t._v(" "), e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.getTipsInfo("write", "del"),
                    disabled: !t.getBtnDisable("write")
                }
            }, [e("div", [t.checkShareChildrenDir() ? t._e() : e("el-button", {
                staticClass: "margin-right-8",
                attrs: {
                    disabled: t.getBtnDisable("write")
                },
                on: {
                    click: t.openRemoveFileModal
                }
            }, [t._v("\n            " + t._s(t.checkNotShareDir() ? t.$t("batch_deletion") : t.$t("close_sharing")) + "\n          ")])], 1)])], 1), t._v(" "), e("div", {
                staticClass: "right"
            }, [e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.getLinuxUploadInfo
                }
            }, [e("div", [t.raysyncEnable() ? e("el-button", {
                staticClass: "margin-right-8",
                attrs: {
                    disabled: t.uploaderForbidden
                },
                on: {
                    click: t.openLinuxUploadModal
                }
            }, [t._v("\n            " + t._s(t.$t("linux_upload")) + "\n          ")]) : t._e()], 1)]), t._v(" "), t.showUploadBtn ? e("div", {
                staticClass: "margin-right-8"
            }, [e("el-button", {
                on: {
                    click: t.showUploadList
                }
            }, [t._v("\n          " + t._s(t.$t("upload_list")) + "\n        ")])], 1) : t._e(), t._v(" "), e("el-input", {
                ref: "ElInput",
                staticClass: "searchInput margin-right-8",
                staticStyle: {
                    width: "45%",
                    display: "inline-block"
                },
                attrs: {
                    disabled: t.disabled,
                    placeholder: t.$t("search_text")
                },
                on: {
                    input: t.changeMykeyword
                },
                nativeOn: {
                    keyup: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.searchFunc.apply(null, arguments)
                    }
                },
                model: {
                    value: t.myKeyword,
                    callback: function(e) {
                        t.myKeyword = e
                    },
                    expression: "myKeyword"
                }
            }, [e("span", {
                staticClass: "search-suffix-area",
                attrs: {
                    slot: "suffix"
                },
                on: {
                    click: t.searchFunc
                },
                slot: "suffix"
            }, [t.myKeyword ? e("i", {
                staticClass: "el-input__icon el-icon-circle-close el-input__clear",
                on: {
                    mousedown: function(t) {
                        t.preventDefault()
                    },
                    click: t.clearInput
                }
            }) : t._e(), t._v(" "), e("svg-icon", {
                attrs: {
                    "icon-class": "efile_search"
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.searchFunc.apply(null, arguments)
                    }
                }
            })], 1)]), t._v(" "), e("div", [e("operation-button", {
                staticClass: "top-operation-button",
                attrs: {
                    disabled: t.disabled,
                    type: "link",
                    content: t.$t("refresh"),
                    icon: "efile_refresh"
                },
                on: {
                    click: t.searchFunc
                }
            })], 1)], 1)]), t._v(" "), e("su-dialog", {
                attrs: {
                    width: "625px",
                    title: t.$t("linux_upload"),
                    "destroy-on-close": !0,
                    visible: t.linuxUploadModalVisible
                },
                on: {
                    close: function(e) {
                        t.linuxUploadModalVisible = !1
                    }
                }
            }, [e("div", [t._v("\n      1. " + t._s(t.$t("linux_upload_download")) + "\n      "), e("el-button", {
                staticClass: "icon",
                attrs: {
                    type: "text",
                    size: "mini"
                },
                on: {
                    click: t.downloadApp
                }
            }, [t._v("\n        " + t._s(t.$t("quick_client")) + "\n      ")]), t._v("\n      ，" + t._s(t.$t("linux_upload_download_info")) + "\n      "), e("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: "wget ".concat(t.fasttransUrl),
                    expression: "`wget ${fasttransUrl}`",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }],
                staticClass: "icon",
                staticStyle: {
                    "margin-left": "0"
                },
                attrs: {
                    type: "text",
                    size: "mini"
                }
            }, [t._v("\n        " + t._s(t.$t("download_cmd")) + "\n      ")]), t._v("\n      ，" + t._s(t.$t("unzip_file")) + "。\n    ")], 1), t._v(" "), e("div", [t._v("\n      2. " + t._s(t.$t("linux_upload_info2")) + "。\n      "), e("div", {
                staticClass: "flex copy-server"
            }, [e("el-input", {
                attrs: {
                    type: "textarea",
                    disabled: !0,
                    resize: "none",
                    autosize: !0,
                    value: t.linuxUploadUrl
                }
            })], 1), t._v(" "), e("div", {
                staticClass: "linux_upload_tips"
            }, [t._v("\n        " + t._s(t.$t("linux_upload_validity")) + "\n        "), e("span", {
                staticClass: "linux_upload_warning"
            }, [t._v(t._s(t.linuxUploadExpireTime))])]), t._v(" "), e("div", {
                staticClass: "linux_upload_tips"
            }, [t._v("\n        " + t._s(t.$t("linux_upload_reminder")) + "\n      ")])]), t._v(" "), e("div", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.copyAll(),
                    expression: "copyAll()",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }],
                attrs: {
                    type: "primary"
                }
            }, [t._v("\n        " + t._s(t.$t("copy_all_linux_cmd")) + "\n      ")]), t._v(" "), e("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.linuxUploadUrl,
                    expression: "linuxUploadUrl",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }]
            }, [t._v("\n        " + t._s(t.$t("copy_raysync_cmd")) + "\n      ")])], 1)]), t._v(" "), e("su-dialog", {
                ref: "copyOrMoveDialog",
                staticClass: "custom-dialog",
                attrs: {
                    width: "840px",
                    title: t.copyOrMoveObj.title,
                    "close-on-click-modal": !1,
                    "destroy-on-close": !1,
                    "lock-scroll": !1,
                    visible: t.copyOrMoveObj.flag
                },
                on: {
                    "update:visible": function(e) {
                        return t.$set(t.copyOrMoveObj, "flag", e)
                    }
                }
            }, [e("div", {
                staticClass: "dialog-title",
                attrs: {
                    slot: "title"
                },
                slot: "title"
            }, [e("div", {
                staticStyle: {
                    display: "flex",
                    "justify-content": "start",
                    "align-items": "center"
                }
            }, [t._v("\n        " + t._s(t.copyOrMoveObj.title) + "\n        "), e("path-header", {
                staticStyle: {
                    "padding-bottom": "0"
                },
                attrs: {
                    width: 460,
                    "root-list": t.rootList,
                    path: t.copyOrMoveTargetPath,
                    "disable-path-list": t.disablePathList
                },
                on: {
                    changePath: t.changePath
                }
            })], 1)]), t._v(" "), e("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.copyTreeLoading,
                    expression: "copyTreeLoading"
                }],
                staticClass: "tree-wrap"
            }, [e("div", {
                staticClass: "copy-tree-box"
            }, [e("el-tree", {
                ref: "tree",
                staticStyle: {
                    flex: "1"
                },
                attrs: {
                    data: t.treeData,
                    "default-expand-all": !0,
                    "expand-on-click-node": !1,
                    "empty-text": "",
                    "node-key": "id"
                },
                on: {
                    "node-click": t.appendTreeList
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(r) {
                        var i = r.node;
                        return e("span", {}, [e("span", [e("img", {
                            staticClass: "icon-file",
                            attrs: {
                                alt: "",
                                src: n(52809)
                            }
                        }), t._v("\n               " + t._s(i.label) + "\n            ")])])
                    }
                }])
            })], 1)]), t._v(" "), e("div", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-button", {
                attrs: {
                    disabled: t.copyOrMoveBtnDisabled,
                    type: "primary"
                },
                on: {
                    click: t.copyOrMoveFile
                }
            }, [t._v("\n        " + t._s(t.$t("sure")) + "\n      ")]), t._v(" "), e("el-button", {
                attrs: {
                    type: ""
                },
                on: {
                    click: function(e) {
                        t.copyOrMoveObj.flag = !1
                    }
                }
            }, [t._v("\n        " + t._s(t.$t("cancel")) + "\n      ")])], 1)]), t._v(" "), e("su-dialog", {
                staticClass: "remove-dialog",
                attrs: {
                    id: "remove-dialog",
                    visible: t.showRemoveModal,
                    title: t.isShareDir() ? t.$t("turning_off_sharing") : t.$t("title"),
                    "close-on-click-modal": !1,
                    "destroy-on-close": !0,
                    width: "420px"
                },
                on: {
                    "update:visible": function(e) {
                        t.showRemoveModal = e
                    }
                }
            }, [e("div", {
                staticClass: "remove-dialog-content"
            }, [e("i", {
                staticClass: "el-icon-warning"
            }), t._v(t._s(t.isShareDir() ? t.$t("after_closing") : t.$t("delete_before_closing_file")) + "\n    ")]), t._v(" "), e("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-button", {
                attrs: {
                    type: "primary",
                    loading: t.removeBtnLoading
                },
                on: {
                    click: t.removeFile
                }
            }, [t._v("\n        " + t._s(t.isShareDir() ? t.$t("close") : t.$t("sure")) + "\n      ")]), t._v(" "), e("el-button", {
                attrs: {
                    disabled: t.removeBtnLoading
                },
                on: {
                    click: function(e) {
                        t.showRemoveModal = !1
                    }
                }
            }, [t._v(t._s(t.$t("cancel")))])], 1)]), t._v(" "), t.isAc ? t._e() : e("su-uploader-box", {
                on: {
                    getFileList: t.getFileList
                }
            })], 1)
        }
          , C = [];
        function E(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function x(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        function k(t, e, n) {
            return e && x(t.prototype, e),
            n && x(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }
        n(23157),
        n(73210),
        n(40561);
        var L = n(27484)
          , T = n.n(L)
          , I = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "su-efile-operating-button"
            }, [e("el-tooltip", {
                attrs: {
                    content: t.content,
                    "open-delay": t.openDelay,
                    "hide-after": t.hideAfter,
                    placement: "top"
                }
            }, ["text" === t.type ? e("div", {
                staticClass: "efile-operating-button-text",
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.handleClick.apply(null, arguments)
                    }
                }
            }, ["el" === t.iconType ? e("i", {
                class: t.icon
            }) : t._e(), t._v(" "), "svg" === t.iconType ? e("svg-icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.loading,
                    expression: "!loading"
                }],
                attrs: {
                    "icon-class": t.icon
                }
            }) : t._e(), t._v(" "), e("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "el-icon-loading"
            }), t._v(" "), t.showName ? e("span", {
                staticClass: "button-text"
            }, [t._v("\n        " + t._s(t.name) + "\n      ")]) : t._e()], 1) : e("el-button", {
                staticClass: "efile-operating-button efile-operating-button-link",
                attrs: {
                    type: t.type,
                    disabled: t.disabled
                },
                on: {
                    click: function(e) {
                        return e.stopPropagation(),
                        t.handleClick.apply(null, arguments)
                    }
                }
            }, ["el" === t.iconType ? e("i", {
                class: t.icon
            }) : t._e(), t._v(" "), "svg" === t.iconType ? e("svg-icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.loading,
                    expression: "!loading"
                }],
                attrs: {
                    "icon-class": t.icon
                }
            }) : t._e(), t._v(" "), e("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.loading,
                    expression: "loading"
                }],
                staticClass: "el-icon-loading"
            }), t._v(" "), t.showName ? e("span", {
                staticClass: "button-text"
            }, [t._v("\n        " + t._s(t.name) + "\n      ")]) : t._e()], 1)], 1)], 1)
        }
          , O = []
          , M = {
            props: {
                disabled: Boolean,
                content: {
                    type: String,
                    default: ""
                },
                name: {
                    type: String,
                    default: ""
                },
                icon: {
                    type: String,
                    default: ""
                },
                iconType: {
                    type: String,
                    default: "svg"
                },
                type: {
                    type: String,
                    default: "text"
                },
                loading: Boolean,
                showName: Boolean
            },
            data: function() {
                return {
                    openDelay: 500,
                    hideAfter: 2e3
                }
            },
            computed: {},
            watch: {},
            mounted: function() {},
            methods: {
                handleClick: function() {
                    this.disabled || this.$emit("click")
                }
            }
        }
          , N = M
          , B = n(1001)
          , R = (0,
        B.Z)(N, I, O, !1, null, "19574990", null)
          , P = R.exports;
        n(47941);
        function D(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
              , i = "";
            return Object.keys(r).map((function(t) {
                i += "&".concat(t, "=").concat(r[t])
            }
            )),
            "".concat(t || "", "/multiDownload.action?").concat(e).concat(n ? "&token=".concat(n) : "").concat(i)
        }
        function F(t) {
            return "".concat(t || "", "/chunkUpload.action")
        }
        var _ = {
            computed: (0,
            g.Z)((0,
            g.Z)({}, (0,
            v.Se)(["clientBaseUrl", "fromService", "isAc"])), (0,
            v.Se)("efileUpload", ["exSharePath", "lang", "ownerShow", "permissionShow", "raysyncEnabled"])),
            methods: {
                getRaysyncInfo: function() {
                    return "".concat(this.$t("downloaded_from_linux_raysync") + this.$t("quick_client") + this.$t("linux_raysync_info_upload") + this.$t("unzip_file"), "，").concat(this.$t("raysync_download"), "：").concat(this.fasttransUrl)
                },
                getBaseUrlToken: function(t) {
                    return this.isAc ? this.$store.dispatch("GetServiceUrl", {
                        clusterId: this.$store.getters.efileServiceClusterId,
                        type: "efileUrl"
                    }) : Promise.resolve({
                        url: t ? "".concat(window.location.origin).concat("/efile") : "/efile"
                    })
                },
                getToken: function() {
                    return this.isAc ? this.$store.getters.efileInfo.token : ""
                },
                downloadFiles: function(t) {
                    var e = this;
                    if (t.length < 1)
                        this.$message({
                            message: this.$t("confirm_download_msg"),
                            type: "warning"
                        });
                    else {
                        var n = "";
                        t.map((function(t) {
                            n += "paths=".concat(encodeURIComponent(t.path), "&")
                        }
                        ));
                        var r = t.map((function(t) {
                            return t.path
                        }
                        ))
                          , i = n.slice(0, -1)
                          , o = i.length > 2e3;
                        (0,
                        b.dR)({
                            paths: r.join(","),
                            urlLimit: o
                        }).then(function() {
                            var n = p(f().mark((function n(o) {
                                var a, s, l, c, u, h, d, p;
                                return f().wrap((function(n) {
                                    while (1)
                                        switch (n.prev = n.next) {
                                        case 0:
                                            if ("0" !== o.code) {
                                                n.next = 12;
                                                break
                                            }
                                            return s = null === (a = o.data) || void 0 === a ? void 0 : a.downKey,
                                            (t[0].isDirectory || t.length > 1) && e.$message({
                                                message: e.$t("download_zip"),
                                                type: "primary"
                                            }),
                                            n.next = 5,
                                            e.getBaseUrlToken();
                                        case 5:
                                            l = n.sent,
                                            c = l.url,
                                            u = l.token,
                                            h = s ? D(c, "", u, {
                                                downKey: s
                                            }) : D(c, i, u),
                                            "acClient" === e.fromService ? (d = {},
                                            d = s ? {
                                                downKey: s
                                            } : {
                                                paths: r.join(",")
                                            },
                                            p = {
                                                url: D(c, "").slice(0, -1),
                                                params: d,
                                                token: u,
                                                baseUrl: c,
                                                clusterId: e.clusterId,
                                                clusterName: e.getClusterName()
                                            },
                                            p.havePastTrans = "commonDownload",
                                            e.$emit("fastTransInstall", p)) : e.downloadIframe(h),
                                            n.next = 13;
                                            break;
                                        case 12:
                                            e.showEfileErrorMsg(o);
                                        case 13:
                                        case "end":
                                            return n.stop()
                                        }
                                }
                                ), n)
                            }
                            )));
                            return function(t) {
                                return n.apply(this, arguments)
                            }
                        }())
                    }
                },
                getFasttransUrl: function(t) {
                    return "".concat(t, "/share/fasttrans-client.tar.gz")
                },
                downloadFastTransApp: function() {
                    var t = this;
                    return p(f().mark((function e() {
                        var n, r, i, o, a;
                        return f().wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    t.getBaseUrlToken(!0);
                                case 2:
                                    n = e.sent,
                                    r = n.url,
                                    i = n.token,
                                    "acClient" === t.fromService ? (o = {
                                        url: t.getFasttransUrl(r),
                                        token: i,
                                        baseUrl: r,
                                        clusterId: t.clusterId,
                                        clusterName: t.getClusterName()
                                    },
                                    o.havePastTrans = "commonDownload",
                                    t.$emit("fastTransInstall", o)) : (a = t.getFasttransUrl(r),
                                    t.downloadIframe(a, !0));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                downloadIframe: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e ? window.open(t, "_blank") : window.location.href = t
                }
            }
        }
          , U = n(59808)
          , W = {
            data: function() {
                return {
                    balanceRemind: 100,
                    dateRemind: 7,
                    cancelRequestList: []
                }
            },
            computed: (0,
            g.Z)((0,
            g.Z)((0,
            g.Z)({}, (0,
            v.Se)(["isAc"])), (0,
            v.rn)({
                userAccounts: function(t) {
                    return t.user.userAccounts
                },
                userInfo: function(t) {
                    return t.user.userInfo || {}
                }
            })), {}, {
                clusterId: {
                    get: function() {
                        return this.$store.getters.efileServiceClusterId
                    },
                    set: function(t) {
                        this.handleCancelRequest(),
                        this.$store.commit("SET_EFILE_CLUSTER_ID", t),
                        w.Z.setItem("lastClusterId", t),
                        this.myKeyword = "",
                        this.$emit("initInfo")
                    }
                },
                getAccountAlertLength: function() {
                    var t = this
                      , e = this.userAccounts.filter((function(e) {
                        return "Normal" !== e.status || t.hasBalanceRemind(e) || t.hasDateRemind(e)
                    }
                    )) || [];
                    return e.length
                }
            }),
            methods: {
                handleCancelRequest: function() {
                    this.cancelRequestList.forEach((function(t) {
                        null === t || void 0 === t || t()
                    }
                    )),
                    this.cancelRequestList = []
                },
                isOpen: function() {
                    var t = "ac_account_tip_".concat(this.userInfo.id)
                      , e = this.$store.getters.isClient ? this.$electronStore.get(t) : window.localStorage.getItem(t);
                    return "open" === e
                },
                showAlert: function() {
                    return this.isAc && this.isOpen() && this.getAccountAlertLength > 0
                },
                getAccountAlertStyleHeight: function() {
                    var t = this.getAccountAlertLength;
                    return this.showAlert() && t ? 58 : 0
                },
                getAccount: function(t) {
                    var e = this.$store.getters.clusterList.find((function(e) {
                        return e.clusterId === t
                    }
                    ))
                      , n = e && e.accountDetail;
                    return n
                },
                checkAccountDisable: function(t) {
                    var e = this.getAccount(t);
                    return e && "Disable" === e.status
                },
                subCurrentDay: function(t) {
                    return T()(t).diff(T()().format("YYYY-MM-DD").valueOf(), "day")
                },
                hasBalanceRemind: function(t) {
                    return this.subCurrentDay(t.endUseTime) <= this.dateRemind
                },
                hasDateRemind: function(t) {
                    return t.balance <= this.balanceRemind && t.balance >= 0
                },
                getClusterName: function() {
                    var t = this;
                    if (!this.isAc)
                        return "";
                    var e = this.$store.getters.clusterList.find((function(e) {
                        return e.clusterId === t.clusterId
                    }
                    ));
                    return e && e.centerName || ""
                }
            }
        }
          , Q = n(2008)
          , H = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "selector_header"
            }, [e("div", {
                staticClass: "selector_header_left"
            }, [t.rootList.length > 1 ? e("div", {
                staticClass: "flex"
            }, [e("el-select", {
                staticClass: "select-path",
                attrs: {
                    placeholder: t.$t("please_select_a_directory"),
                    value: t.selectedPath
                },
                on: {
                    change: t.changePath
                }
            }, t._l(t.rootList, (function(t) {
                return e("el-option", {
                    key: t.value,
                    attrs: {
                        value: t.value,
                        label: t.label
                    }
                })
            }
            )), 1), t._v(" "), e("operation-button", {
                staticClass: "top-operation-button",
                attrs: {
                    disabled: t.disabled || t.selectedPath === t.path,
                    type: "link",
                    content: t.getSelectedPathLabel,
                    icon: "efile_home"
                },
                on: {
                    click: function(e) {
                        return t.changePath(t.selectedPath)
                    }
                }
            })], 1) : e("div", [e("operation-button", {
                staticClass: "top-operation-button",
                attrs: {
                    disabled: t.disabled || t.selectedPath === t.path,
                    type: "link",
                    content: t.homePathLabel(),
                    icon: "efile_home"
                },
                on: {
                    click: t.goToHomePath
                }
            })], 1), t._v(" "), e("operation-button", {
                staticClass: "top-operation-button margin",
                attrs: {
                    type: "link",
                    content: t.$t("go_back"),
                    disabled: t.upperBtnDisable,
                    icon: "el-icon-top",
                    "icon-type": "el"
                },
                on: {
                    click: t.goLevelUp
                }
            }), t._v(" "), e("div", {
                staticClass: "margin flex"
            }, ["input" === t.pathType ? e("input-path", {
                attrs: {
                    "hidden-disable-path": t.hiddenDisablePath,
                    "hidden-path": t.hiddenPath,
                    width: t.width,
                    path: t.path,
                    "disable-path-list": t.disablePathList
                },
                on: {
                    changePath: t.changePath
                }
            }) : e("v-path", {
                attrs: {
                    "hidden-disable-path": t.hiddenDisablePath,
                    width: t.width,
                    path: t.path,
                    "disable-path-list": t.disablePathList
                },
                on: {
                    changePath: t.changePath
                }
            })], 1)], 1)])
        }
          , J = []
          , V = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "efile_path_anthor",
                style: {
                    width: "".concat(t.width, "px"),
                    visibility: t.visibility
                }
            }, [e("span", {
                staticClass: "icon",
                on: {
                    click: function(t) {
                        t.stopPropagation()
                    }
                }
            }, [t.splitIndex ? e("el-dropdown", {
                attrs: {
                    type: "primary",
                    placement: "bottom"
                }
            }, [e("span", {
                staticClass: "padding-icon"
            }, [e("i", {
                staticClass: "el-icon-d-arrow-right rotate path_icon"
            })]), t._v(" "), e("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, t._l(t.hiddenPaths, (function(n, r) {
                return e("el-dropdown-item", {
                    key: r,
                    attrs: {
                        disabled: t.isPathDisable(n, r)
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.setPath(r)
                        }
                    }
                }, [t.isShowDisablePath(n, r) ? e("span", [t._v("\n            " + t._s(n) + "\n          ")]) : t._e()])
            }
            )), 1)], 1) : e("svg-icon", {
                class: {
                    disabled: !!t.disabledPaths.length
                },
                attrs: {
                    title: t.$t("root_directory"),
                    "icon-class": "efile_folder-color"
                },
                on: {
                    click: t.goToRoot
                }
            })], 1), t._v(" "), t._l(t.showPaths, (function(n, r) {
                return e("div", {
                    key: r,
                    ref: "path",
                    refInFor: !0,
                    staticClass: "path_item",
                    on: {
                        click: function(t) {
                            t.stopPropagation()
                        }
                    }
                }, [t.isShowDisablePath(n, r + t.splitIndex) ? e("span", {
                    staticClass: "path_single"
                }, [e("span", {
                    staticClass: "path_icon el-icon-arrow-right",
                    class: {
                        disabled: t.isPathDisable(n, r + t.splitIndex)
                    }
                }), t._v(" "), e("span", {
                    staticClass: "path_name",
                    class: {
                        disabled: t.isPathDisable(n, r + t.splitIndex)
                    },
                    on: {
                        click: function(e) {
                            return e.stopPropagation(),
                            t.setPath(r + t.splitIndex, n)
                        }
                    }
                }, [t._v("\n        " + t._s(n) + "\n      ")])]) : t._e()])
            }
            ))], 2)
        }
          , z = []
          , K = {
            name: "VPath",
            props: {
                path: {
                    type: String,
                    default: ""
                },
                showNonHome: Boolean,
                hiddenDisablePath: {
                    type: Boolean,
                    default: !1
                },
                disablePathList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                width: {
                    type: Number,
                    default: 500
                }
            },
            data: function() {
                return {
                    visibility: "visible",
                    splitIndex: 0,
                    disabledPaths: []
                }
            },
            computed: {
                paths: function() {
                    if (!this.path)
                        return [];
                    var t = this.path.split("/").filter((function(t) {
                        return t
                    }
                    ));
                    return t
                },
                showPaths: function() {
                    return this.paths.slice(this.splitIndex)
                },
                hiddenPaths: function() {
                    return this.paths.slice(0, this.splitIndex)
                }
            },
            watch: {
                path: function(t) {
                    this.init(t)
                }
            },
            mounted: function() {
                this.init(this.path)
            },
            methods: {
                init: function(t) {
                    var e = this;
                    this.splitIndex = 0,
                    this.visibility = "hidden",
                    this.disabledPaths = this.getDisabledPaths(t),
                    this.$nextTick((function() {
                        e.adjustPaths()
                    }
                    ))
                },
                isPathDisable: function(t, e) {
                    return t === this.disabledPaths[e + 1]
                },
                isShowDisablePath: function(t, e) {
                    return !this.hiddenDisablePath || !this.isPathDisable(t, e)
                },
                getDisabledPaths: function(t) {
                    var e = t;
                    if (!e || !this.disablePathList.length)
                        return [];
                    var n = this.disablePathList.filter((function(t) {
                        return e.startsWith(t)
                    }
                    ))
                      , r = "";
                    if (n.length && (n.sort((function(t, e) {
                        return e.length - t.length
                    }
                    )),
                    r = n[0]),
                    r || (r = this.disablePathList.find((function(t) {
                        return t.startsWith(e)
                    }
                    ))),
                    !r || "/" === r)
                        return [];
                    var i = r.split("/");
                    return i.pop(),
                    i
                },
                goToRoot: function() {
                    this.disabledPaths.length || this.$emit("changePath", "/")
                },
                setPath: function(t, e) {
                    var n = this.paths.slice(0, t + 1)
                      , r = "/".concat(n.join("/"));
                    r !== this.path && (e && e === this.disabledPaths[t + 1] || this.$emit("changePath", r))
                },
                adjustPaths: function() {
                    if (this.path)
                        if (this.$refs.path && this.$refs.path.length) {
                            var t = this.$el.offsetWidth || this.width
                              , e = this.$refs.path.map((function(t) {
                                return t.offsetWidth
                            }
                            ))
                              , n = e.reduce((function(t, e) {
                                return t + e
                            }
                            ), 0) + 30;
                            if (n > t) {
                                var r = 0
                                  , i = n;
                                while (i > t || r === e.length - 1)
                                    i -= e[r],
                                    r++;
                                this.splitIndex = Math.min(r, this.$refs.path.length - 1)
                            }
                            this.visibility = "visible"
                        } else
                            this.visibility = "visible"
                }
            }
        }
          , X = K
          , G = (0,
        B.Z)(X, V, z, !1, null, "e1556772", null)
          , j = G.exports
          , Z = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                style: {
                    width: "".concat(t.width, "px")
                }
            }, [!t.hiddenDisablePath && t.show ? e("el-input", {
                ref: "input",
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    minlength: 1,
                    value: t.inputPath
                },
                on: {
                    input: t.changeInputPath,
                    change: t.setPath,
                    blur: function(e) {
                        t.show = !1
                    }
                },
                nativeOn: {
                    mousedown: function(t) {
                        t.stopPropagation()
                    }
                }
            }) : t.hiddenDisablePath && t.show ? e("el-input", {
                ref: "input",
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    minlength: 1,
                    value: t.inputHiddenPath
                },
                on: {
                    input: t.changeInputHiddenPath,
                    change: t.setPathWithHidden,
                    blur: function(e) {
                        t.show = !1
                    }
                },
                nativeOn: {
                    mousedown: function(t) {
                        t.stopPropagation()
                    }
                }
            }) : e("v-path", {
                attrs: {
                    "hidden-disable-path": t.hiddenDisablePath,
                    width: t.width,
                    path: t.inputPath,
                    "disable-path-list": t.disablePathList
                },
                on: {
                    changePath: t.changePath
                },
                nativeOn: {
                    click: function(e) {
                        return t.showInput.apply(null, arguments)
                    }
                }
            })], 1)
        }
          , Y = []
          , q = {
            components: {
                VPath: j
            },
            props: {
                path: {
                    type: String,
                    default: ""
                },
                disablePathList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                width: {
                    type: Number,
                    default: 500
                },
                hiddenDisablePath: {
                    type: Boolean,
                    default: !1
                },
                hiddenPath: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    show: !1,
                    inputPath: "",
                    inputHiddenPath: ""
                }
            },
            computed: {
                currentPath: function() {
                    return this.path
                }
            },
            watch: {
                path: {
                    handler: function(t) {
                        this.inputPath = t,
                        this.inputHiddenPath = this.getInputHiddenPath(t)
                    },
                    immediate: !0
                }
            },
            methods: {
                checkPathDisable: function(t) {
                    return !(!this.disablePathList || !this.disablePathList.length) && this.disablePathList.every((function(e) {
                        return !t.startsWith(e)
                    }
                    ))
                },
                changePath: function(t) {
                    this.$emit("changePath", t)
                },
                changeInputPath: function(t) {
                    this.inputPath = t
                },
                getInputHiddenPath: function(t) {
                    var e;
                    return t ? t.slice((null === (e = this.hiddenPath) || void 0 === e ? void 0 : e.length) || 0) : ""
                },
                changeInputHiddenPath: function(t) {
                    this.inputHiddenPath = t,
                    this.inputPath = this.hiddenPath + t
                },
                setPathWithHidden: function(t) {
                    this.setPath(this.hiddenPath + t)
                },
                setPath: function(t) {
                    var e = (0,
                    A.dI)(t);
                    e !== this.currentPath && (this.changePath(e),
                    this.inputBlur())
                },
                showInput: function() {
                    var t = this;
                    this.show = !0,
                    this.$nextTick((function() {
                        t.$refs.input.focus()
                    }
                    ))
                },
                inputBlur: function() {
                    var t = this;
                    this.$nextTick((function() {
                        var e;
                        null === (e = t.$refs.input) || void 0 === e || e.blur()
                    }
                    ))
                }
            }
        }
          , $ = q
          , tt = (0,
        B.Z)($, Z, Y, !1, null, null, null)
          , et = tt.exports
          , nt = {
            components: {
                VPath: j,
                InputPath: et,
                OperationButton: P
            },
            props: {
                path: {
                    type: String,
                    default: ""
                },
                rootList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                disablePathList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                width: {
                    type: Number,
                    default: 500
                },
                pathType: {
                    type: String,
                    default: "input"
                },
                hiddenDisablePath: {
                    type: Boolean,
                    default: !1
                },
                hiddenPath: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    selectedPath: ""
                }
            },
            computed: {
                getSelectedPathLabel: function() {
                    var t = this
                      , e = this.rootList.find((function(e) {
                        return e.value === t.selectedPath
                    }
                    ));
                    return "".concat(this.$t("path_return")).concat(e && e.label) || ""
                },
                upperBtnDisable: function() {
                    var t = this;
                    return !!this.disabled || (!(!this.path || "/" !== this.path) || !(!this.disablePathList || !this.disablePathList.length) && this.disablePathList.some((function(e) {
                        return e === t.path
                    }
                    )))
                }
            },
            watch: {
                path: {
                    handler: function(t) {
                        if (t) {
                            var e = this.rootList.find((function(e) {
                                return e.value === t || t.startsWith(e.value) || e.value.startsWith(t)
                            }
                            ));
                            this.selectedPath = e ? e.value : this.rootList[0].value
                        } else
                            this.rootList.length && (this.selectedPath = this.rootList[0].value)
                    },
                    immediate: !0
                }
            },
            mounted: function() {},
            methods: {
                homePathLabel: function() {
                    return "".concat(this.$t("path_return")).concat(this.rootList && this.rootList.length && this.rootList[0].label || this.$t("home_directory"), "\n      ")
                },
                goToHomePath: function() {
                    var t = this.rootList && this.rootList.length && this.rootList[0].value || "/";
                    this.changePath(t)
                },
                changePath: function(t) {
                    this.selectedPath = t,
                    this.$emit("changePath", t)
                },
                goLevelUp: function() {
                    var t = (0,
                    A.dI)("".concat(this.path, "/.."));
                    this.changePath(t)
                }
            }
        }
          , rt = nt
          , it = (0,
        B.Z)(rt, H, J, !1, null, "6f114d90", null)
          , ot = it.exports
          , at = function() {
            function t() {
                E(this, t),
                this.msgCases = new Map
            }
            return k(t, [{
                key: "get",
                value: function(t) {
                    return this.msgCases.get(t)
                }
            }, {
                key: "add",
                value: function(t, e) {
                    this.msgCases.set(t, e)
                }
            }, {
                key: "close",
                value: function(t) {
                    var e = this.get(t);
                    e && e.close()
                }
            }, {
                key: "del",
                value: function(t) {
                    this.close(t),
                    this.msgCases.delete(t)
                }
            }, {
                key: "closeAll",
                value: function() {
                    this.msgCases.clear()
                }
            }, {
                key: "size",
                value: function() {
                    return this.msgCases.size
                }
            }]),
            t
        }()
          , st = new at
          , lt = ""
          , ct = {
            name: "FeatureBox",
            components: {
                OperationButton: P,
                pathHeader: ot
            },
            mixins: [_, W, U.Z, Q.Z],
            props: {
                from: {
                    type: String,
                    default: ""
                },
                path: {
                    type: String,
                    default: null
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                writedisable: {
                    type: Boolean,
                    default: !1
                },
                readdisable: {
                    type: Boolean,
                    default: !1
                },
                multipleSelection: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                keyword: {
                    type: String,
                    default: function() {
                        return ""
                    }
                },
                uploadFlag: {
                    type: Boolean,
                    default: !1
                },
                secondSwitch: {
                    type: Boolean,
                    default: !1
                },
                disablePathList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                rootList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                var t = this;
                return {
                    treeData: [],
                    myKeyword: this.keyword,
                    uploadListFlag: !1,
                    options: {
                        target: function(t) {
                            return t.baseURL
                        },
                        testChunks: !1,
                        chunkSize: 5242880,
                        query: function(t) {
                            return {
                                path: t.rootPath || "/",
                                cover: t.cover || "uncover"
                            }
                        },
                        allowDuplicateUploads: !0,
                        testMethod: "POST",
                        successStatuses: [200, 201, 202, 500, 504, 0],
                        permanentErrors: [404, 413, 415, 501],
                        maxChunkRetries: 1,
                        headers: function(t) {
                            return t.token ? {
                                token: t.token
                            } : {}
                        },
                        generateUniqueIdentifier: function(e) {
                            var n = e.relativePath || e.webkitRelativePath || e.fileName || e.name
                              , r = n.replace(/[^0-9a-zA-Z_-]/gim, "");
                            return "".concat(t.clusterId || "").concat(t.path, "-").concat(r, "-").concat((0,
                            A.Ki)())
                        },
                        processResponse: function(e, n, r, i) {
                            if (e || 0 !== i.xhr.status) {
                                var o = JSON.parse(e) || {};
                                o.code && "0" !== o.code && (t.showEfileErrorMsg(e, !0),
                                n(o, e)),
                                n(null, e)
                            } else {
                                var a = '{ "code": "network_error"}';
                                n(a, a)
                            }
                        }
                    },
                    statusText: {
                        success: this.$t("completed"),
                        error: this.$t("error"),
                        uploading: this.$t("uploading"),
                        paused: this.$t("pause"),
                        waiting: this.$t("waiting")
                    },
                    copyOrMoveObj: {
                        idx: 0,
                        type: "copy",
                        title: this.$t("copyTo"),
                        flag: !1,
                        sourcePaths: [],
                        targetPath: ""
                    },
                    copyOrMoveBtnDisabled: !1,
                    copyOrMoveTargetPath: "",
                    copyOrMoving: !1,
                    copyTreeLoading: !1,
                    fasttransUrl: "",
                    linuxUploadModalVisible: !1,
                    linuxUploadUrl: "",
                    linuxUploadExpireTime: "",
                    showRemoveModal: !1,
                    removeBtnLoading: !1
                }
            },
            computed: (0,
            g.Z)((0,
            g.Z)({}, (0,
            v.Se)(["clientBaseUrl", "fromService", "isAc", "isClient", "isMainSite"])), {}, {
                uploaderForbidden: function() {
                    return this.disabled || this.writedisable || this.checkAccountDisable(this.clusterId)
                },
                getLinuxUploadInfo: function() {
                    var t = this.clusterId;
                    return this.checkAccountDisable(t) ? this.$t("account_disabled_tips") : this.$t("linux_upload_tips")
                },
                showUploadBtn: function() {
                    return !this.isAc || !this.isClient && "shell" === this.from
                }
            }),
            watch: {
                keyword: function(t) {
                    this.myKeyword = t
                }
            },
            created: function() {},
            mounted: function() {
                var t = this;
                "acClient" !== this.fromService && (this.$store.commit("efileUpload/INIT_UPLOADER", {
                    options: this.options,
                    fileStatusText: this.statusText
                }),
                this.$nextTick((function() {
                    t.$refs.uploaderBtnFile && t.uploader.assignBrowse(t.$refs.uploaderBtnFile),
                    t.$refs.uploaderBtnFolder && t.uploader.assignBrowse(t.$refs.uploaderBtnFolder, !0),
                    t.uploader.on("fileAdded", t.startUpload),
                    t.uploader.on("filesAdded", t.filesAdded),
                    t.uploader.on("fileProgress", t.fileProgress),
                    t.uploader.on("fileSuccess", t.fileSuccess),
                    t.uploader.on("fileComplete", t.fileComplete),
                    t.uploader.on("fileError", t.fileError),
                    t.uploader.on("complete", t.complete)
                }
                )))
            },
            beforeDestroy: function() {},
            methods: {
                clearInput: function() {
                    this.$refs.ElInput.clear()
                },
                raysyncEnable: function() {
                    return this.raysyncEnabled && this.secondSwitch
                },
                checkNotShareDir: function() {
                    return !this.exSharePath || this.path && !this.path.startsWith(this.exSharePath)
                },
                isShareDir: function() {
                    return this.exSharePath && this.path && this.path.startsWith(this.exSharePath)
                },
                checkShareChildrenDir: function() {
                    var t;
                    if (!this.path || !this.exSharePath)
                        return !1;
                    var e = (null !== (t = this.path) && void 0 !== t ? t : "").split("/").filter((function(t) {
                        return t
                    }
                    ))
                      , n = this.exSharePath.split("/").filter((function(t) {
                        return t
                    }
                    ));
                    return e.length > n.length && n.every((function(t, n) {
                        return t === e[n]
                    }
                    ))
                },
                checkNoPermission: function(t) {
                    return "write" === t ? this.writedisable : this.readdisable
                },
                getBtnDisable: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.checkNoPermission(t) || this.multipleSelection.length < 1 || !!e && this.checkAccountDisable(this.clusterId)
                },
                getTipsInfo: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (n) {
                        var r = this.clusterId;
                        if (this.checkAccountDisable(r))
                            return this.$t("account_disabled_tips")
                    }
                    if (this.checkNoPermission(t))
                        return this.$t("no_permission_title");
                    if (this.multipleSelection.length < 1) {
                        var i = "";
                        switch (e) {
                        case "download":
                            i = this.$t("confirm_download_msg");
                            break;
                        case "del":
                            i = this.$t("confirm_deletion_msg");
                            break;
                        case "copy":
                            i = this.$t("confirm_copy_msg");
                            break;
                        case "move":
                            i = this.$t("confirm_move_msg");
                            break;
                        case "rename":
                            i = this.$t("confirm_rename_msg");
                            break;
                        default:
                            i = ""
                        }
                        return i
                    }
                    return ""
                },
                handleNewCommand: function(t) {
                    this.newFileOrFolder(t)
                },
                handleUploadCommand: function(t) {
                    var e = this;
                    this.clientBaseUrl && "acClient" === this.fromService && this.getBaseUrlToken().then((function(n) {
                        var r = n.url
                          , i = n.token
                          , o = {
                            type: t,
                            toPath: e.path,
                            action: "".concat(r, "/chunkUpload.action"),
                            merge: "".concat(r, "/merge.action"),
                            exist: "".concat(r, "/exist.action"),
                            token: i,
                            clusterId: e.clusterId,
                            clusterName: e.getClusterName()
                        };
                        e.$emit("uploadFiles", o)
                    }
                    ))
                },
                handleQuickTransportCommand: function(t) {
                    switch (t) {
                    case "file":
                        this.uploadRaySyncFile();
                        break;
                    case "folder":
                        this.uploadRaySyncFiles();
                        break;
                    default:
                    }
                },
                handleDownloadCommand: function(t) {
                    switch (t) {
                    case "acClient":
                        this.downloadRaysyncFiles();
                        break;
                    case "client":
                        this.downloadRaysyncFiles();
                        break;
                    default:
                        this.batchDownload()
                    }
                },
                visibleChange: function(t) {
                    if ("acClient" !== this.fromService && t) {
                        var e = this.$refs.uploaderBtnFile.querySelector("input")
                          , n = this.$refs.uploaderBtnFolder.querySelector("input");
                        e || this.uploader.assignBrowse(this.$refs.uploaderBtnFile),
                        n || this.uploader.assignBrowse(this.$refs.uploaderBtnFolder, !0)
                    }
                },
                changeMykeyword: function(t) {
                    this.myKeyword = t
                },
                searchFunc: function() {
                    this.$emit("searchFunc", this.myKeyword)
                },
                newFileOrFolder: function(t) {
                    var e = this
                      , n = "";
                    n = "file" === t ? this.$t("new_file") : this.$t("new_directory"),
                    this.$prompt("", n, {
                        confirmButtonText: this.$t("sure"),
                        cancelButtonText: this.$t("cancel"),
                        customClass: "notify-custom-class",
                        inputValidator: function(t) {
                            return t && 0 === t.trim().length ? e.$t("check_blanks") : t.length > 70 ? e.$t("check_length") : -1 === t.indexOf("/") || e.$t("rename_input_validate")
                        },
                        inputErrorMessage: "",
                        closeOnHashChange: !1,
                        closeOnClickModal: !1
                    }).then((function(n) {
                        var r = n.value;
                        e.$emit("openTableLoading", !0),
                        e.myKeyword = "",
                        "file" === t ? (0,
                        b.F4)({
                            path: "".concat(e.path, "/").concat(r)
                        }).then((function(t) {
                            "0" === t.code ? (e.$message({
                                message: e.$t("add_file_success"),
                                type: "success"
                            }),
                            e.getFileList()) : (e.showEfileErrorMsg(t),
                            e.$emit("openTableLoading", !1))
                        }
                        )).catch((function() {
                            e.$emit("openTableLoading", !1)
                        }
                        )) : (0,
                        b.ry)({
                            createParents: !1,
                            path: "".concat(e.path, "/").concat(r)
                        }).then((function(t) {
                            "0" === t.code ? (e.$message({
                                message: e.$t("add_folder_success"),
                                type: "success"
                            }),
                            e.getFileList({
                                updateTree: !0
                            })) : (e.showEfileErrorMsg(t),
                            e.$emit("openTableLoading", !1))
                        }
                        )).catch((function() {
                            e.$emit("openTableLoading", !1)
                        }
                        ))
                    }
                    )).catch((function() {}
                    ))
                },
                startUpload: function(t) {
                    var e = this;
                    this.getBaseUrlToken().then((function(n) {
                        var r = n.url
                          , i = n.token;
                        t.rootPath = e.path,
                        t.cover = "uncover",
                        t.baseURL = F(r),
                        t.token = i,
                        t.clusterId = e.clusterId,
                        t.clusterName = e.getClusterName()
                    }
                    ))
                },
                fileExistToast: function(t) {
                    var e = "file" === t ? this.$t("exist_file_msg") : this.$t("exist_folder_msg");
                    this.$message({
                        message: "".concat(this.$t("upload")).concat(e),
                        type: "warning"
                    })
                },
                addFileDom: function(t) {
                    this.$store.commit("efileUpload/ADD_FILE", t)
                },
                filesAdded: function(t, e) {
                    var n = this;
                    if (this.uploadListFlag = !0,
                    1 === e.length && e[0].isFolder && t.length >= 1e3) {
                        this.remarkFlag = !0;
                        var r = this.raysyncEnabled ? this.$t("over_1000") : this.$t("upload_zip_info");
                        this.$msgbox({
                            title: this.$t("title"),
                            message: r,
                            confirmButtonText: this.$t("sure")
                        })
                    } else
                        this.showFileList.length > 0 && e.forEach((function(t, r) {
                            n.showFileList.forEach((function(i) {
                                n.path === i.file.rootPath && t.name === (i.rootFile ? i.rootFile.name : i.file.name) && "play" === i.status && (e.splice(r--, 1),
                                i.file.isFolder ? n.fileExistToast("folder") : n.fileExistToast("file"))
                            }
                            ))
                        }
                        )),
                        this.getBaseUrlToken().then((function(t) {
                            var r = t.url
                              , i = t.token;
                            e.forEach(function() {
                                var t = p(f().mark((function t(e) {
                                    var o, a, s;
                                    return f().wrap((function(t) {
                                        while (1)
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return e.rootPath = n.path,
                                                e.cover = "uncover",
                                                e.clusterId = n.clusterId,
                                                e.baseURL = F(r),
                                                e.token = i,
                                                e.clusterName = n.getClusterName(),
                                                o = w.Z.getItem("fixedMainPath"),
                                                e.relativeRootPath = n.path === o ? o : -1 !== n.path.indexOf(o) ? "~".concat(n.path.slice(o.length)) : n.path,
                                                t.next = 10,
                                                (0,
                                                b.Tv)({
                                                    path: "".concat(n.path, "/").concat(e.name),
                                                    clusterId: e.clusterId
                                                });
                                            case 10:
                                                if (a = t.sent,
                                                "0" !== a.code || !a.data.exist) {
                                                    t.next = 15;
                                                    break
                                                }
                                                n.$confirm("".concat(e.name).concat(n.$t("already_exist_msg")), n.$t("title"), {
                                                    confirmButtonText: n.$t("sure"),
                                                    cancelButtonClass: "btn-custom-cancel",
                                                    cancelButtonText: n.$t("cancel"),
                                                    customClass: "notify-custom-class",
                                                    type: "warning"
                                                }).then((function() {
                                                    n.startUploadTag(),
                                                    e.cover = "cover",
                                                    e.resume(),
                                                    n.addFileDom(e)
                                                }
                                                )).catch((function() {
                                                    e.cancel()
                                                }
                                                )),
                                                t.next = 27;
                                                break;
                                            case 15:
                                                if ("1030" !== a.code) {
                                                    t.next = 19;
                                                    break
                                                }
                                                e.cancel(),
                                                t.next = 27;
                                                break;
                                            case 19:
                                                if (!n.showFileList.length) {
                                                    t.next = 24;
                                                    break
                                                }
                                                if (s = n.showFileList.findIndex((function(t) {
                                                    return e.path === t.file.rootPath && e.name === t.file.name && "play" === t.status
                                                }
                                                )),
                                                !(s > -1)) {
                                                    t.next = 24;
                                                    break
                                                }
                                                return n.fileExistToast(e.isFolder ? "filder" : "file"),
                                                t.abrupt("return");
                                            case 24:
                                                n.startUploadTag(),
                                                e.resume(),
                                                n.addFileDom(e);
                                            case 27:
                                            case "end":
                                                return t.stop()
                                            }
                                    }
                                    ), t)
                                }
                                )));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }
                        ))
                },
                startUploadTag: function() {
                    this.$emit("openUplist", !0),
                    this.$store.commit("efileUpload/SET_UPLIST_SHOW", !0)
                },
                fileProgress: function(t, e, n) {
                    var r = {
                        rootFile: t,
                        file: e,
                        chunk: n,
                        status: "play"
                    };
                    this.$store.commit("efileUpload/UPDATE_FILE", r)
                },
                fileError: function(t, e, n, r) {
                    var i = {
                        rootFile: t,
                        file: e,
                        message: n,
                        chunk: r,
                        status: "error"
                    };
                    this.$store.commit("efileUpload/UPDATE_FILE", i)
                },
                fileSuccess: function(t, e, n, r) {
                    var i = this;
                    (0,
                    b.rK)({
                        cover: e.cover,
                        path: e.rootPath,
                        relativePath: e.relativePath,
                        clusterId: e.clusterId
                    }).then((function() {
                        var o = {
                            rootFile: t,
                            file: e,
                            message: n,
                            chunk: r
                        };
                        i.$store.commit("efileUpload/UPDATE_FILE", o),
                        t.isFolder || (i.getFileClusterFiles(t),
                        i.$forceUpdate())
                    }
                    )).catch((function(n) {
                        var o = {
                            rootFile: t,
                            file: e,
                            message: n,
                            chunk: r,
                            status: "error"
                        };
                        i.$store.commit("efileUpload/UPDATE_FILE", o),
                        i.getFileClusterFiles(t)
                    }
                    )).finally((function() {
                        i.$forceUpdate()
                    }
                    ))
                },
                fileComplete: function(t, e) {
                    var n = {
                        rootFile: t,
                        file: e,
                        status: "success"
                    };
                    this.$store.commit("efileUpload/UPDATE_FILE", n),
                    t.isFolder && (this.getFileClusterFiles(t, !0),
                    this.$forceUpdate())
                },
                complete: function() {},
                uploadRaySyncFile: function() {
                    this.$emit("uploadRaySyncFile")
                },
                uploadRaySyncFiles: function() {
                    this.$emit("uploadRaySyncFiles")
                },
                batchDownload: function() {
                    this.$emit("batchDownload")
                },
                openRemoveFileModal: function() {
                    this.showRemoveModal = !0
                },
                removeFile: function() {
                    var t = this;
                    if (this.multipleSelection.length > 0) {
                        this.removeBtnLoading = !0;
                        var e = this.multipleSelection.map((function(t) {
                            return t.path
                        }
                        ));
                        (0,
                        b.EL)({
                            paths: e.join(",")
                        }).then((function(e) {
                            "0" === e.code && (t.$message({
                                message: t.$t("delete_success_info"),
                                type: "success"
                            }),
                            t.getFileList({
                                updateTree: !0
                            }))
                        }
                        )).finally((function() {
                            t.showRemoveModal = !1,
                            t.removeBtnLoading = !1
                        }
                        ))
                    } else
                        this.$message({
                            message: this.$t("confirm_deletion_msg"),
                            type: "warning"
                        })
                },
                operationCancel: function(t, e) {
                    var n = this;
                    (0,
                    b.l)(t, e).then((function() {}
                    )).finally((function() {
                        n.copyOrMoving = !1,
                        n.copyOrMoveObj.flag = !1,
                        n.checkEndCopyOrMove(t)
                    }
                    ))
                },
                getTreeData: function(t) {
                    var e = this;
                    this.treeNode = [],
                    this.copyTreeLoading = !0,
                    (0,
                    b.DL)({
                        path: t
                    }).then((function(n) {
                        if ("0" === n.code) {
                            var r = n.data
                              , i = r.fileKey
                              , o = r.children
                              , a = void 0 === o ? [] : o
                              , s = [{
                                path: t,
                                id: i,
                                label: t,
                                children: a
                            }];
                            e.treeData = y().cloneDeep(s)
                        } else
                            e.showEfileErrorMsg(n),
                            e.resetTree(t)
                    }
                    )).catch((function() {
                        e.resetTree(t)
                    }
                    )).finally((function() {
                        e.copyTreeLoading = !1
                    }
                    ))
                },
                resetTree: function(t) {
                    var e = t
                      , n = [{
                        path: e,
                        id: "1",
                        label: e
                    }];
                    this.treeData = y().cloneDeep(n)
                },
                changePath: function(t) {
                    this.copyOrMoveTargetPath = t,
                    this.getTreeData(t)
                },
                appendTreeList: function(t, e) {
                    var n = this
                      , r = t.path;
                    this.copyOrMoveTargetPath = r,
                    this.copyTreeLoading = !0,
                    (0,
                    b.DL)({
                        path: r
                    }).then((function(r) {
                        if ("0" === r.code) {
                            var i = r.data.children
                              , o = void 0 === i ? [] : i;
                            e.data.children || n.$set(e.data, "children", []),
                            n.$refs.tree.updateKeyChildren(t.id, o)
                        }
                    }
                    )).finally((function() {
                        n.copyTreeLoading = !1
                    }
                    ))
                },
                checkEndCopyOrMove: function(t) {
                    st.del(t),
                    st.size() || this.$store.commit("efileUpload/SET_COPYORMOVEING", !1)
                },
                limitNextCopyOrMove: function() {
                    return st.size() >= 4 && (this.$message({
                        message: this.$t("copy_move_limit_info")
                    }),
                    !0)
                },
                copyOrMove: function(t) {
                    var e = w.Z.getItem("fixedMainPath");
                    this.$store.commit("efileUpload/SET_COPYORMOVEING", !0),
                    this.copyOrMoveObj.flag = !0,
                    this.copyOrMoveBtnDisabled = !1,
                    this.copyOrMoveTargetPath = e,
                    this.copyOrMoveObj.title = "copy" === t ? this.$t("copyTo") : this.$t("moveTo"),
                    this.copyOrMoveObj.type = "copy" === t ? "copy" : "move",
                    this.getTreeData(e)
                },
                showNotify: function(t, e, n) {
                    var r = this
                      , i = this.handlePromptInfo(t) + ("copy" === e ? this.$t("copy_prompt") : this.$t("move_prompt"))
                      , o = this.$t("copy_move_quit_info", {
                        operation: "copy" === e ? this.$t("copy") : this.$t("move")
                    })
                      , a = this.clusterId
                      , s = this.$createElement;
                    return this.$notify({
                        title: i,
                        message: s("div", {
                            style: {
                                display: "flex",
                                "justify-content": "space-between"
                            }
                        }, [s("span", {
                            style: {
                                color: "#575b6b",
                                "font-size": "12px",
                                "font-weight": "400",
                                "line-height": "30px"
                            }
                        }, o), s("el-button", {
                            style: {},
                            attrs: {
                                type: "primary"
                            },
                            on: {
                                click: function() {
                                    return r.operationCancel(n, a)
                                }
                            }
                        }, this.$t("stopOperation"))]),
                        type: "warning",
                        position: "bottom-right",
                        duration: 0,
                        offset: 100,
                        showClose: !0,
                        customClass: "notify-custom-class"
                    })
                },
                getParams: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uncover"
                      , e = (0,
                    A.Ki)()
                      , n = "cover=".concat(t, "&targetPath=").concat(encodeURIComponent(this.copyOrMoveTargetPath), "&operationId=").concat(e);
                    return lt = e,
                    {
                        copyOrMoveParams: n,
                        uniqueId: e
                    }
                },
                copyOrMoveFile: function() {
                    this.copyOrMoving = !0,
                    this.copyOrMoveBtnDisabled = !0,
                    this.copyOrMoveObj.sourcePaths = [];
                    var t = this.multipleSelection.map((function(t) {
                        return t.path
                    }
                    ));
                    this.copyOrMoveObj.flag = !1,
                    this.limitNextCopyOrMove() || this.handleCopyMoveFile(this.copyOrMoveObj.type, t, "uncover")
                },
                closePrevMsgCase: function() {
                    lt && st.close(lt)
                },
                updateCopyMoveMsgCase: function(t, e, n) {
                    var r = this.showNotify(t, e, n);
                    st.add(n, r)
                },
                handleCopyMoveFile: function(t, e) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "uncover"
                      , i = this.getParams(r)
                      , o = i.copyOrMoveParams
                      , a = i.uniqueId;
                    this.updateCopyMoveMsgCase(e, t, a);
                    var s = this.handlePromptInfo(e) + this.$t(t)
                      , l = "copy" === t ? (0,
                    b.cy)(o, {
                        sourcePaths: e.join(",")
                    }) : (0,
                    b.jW)(o, {
                        sourcePaths: e.join(",")
                    });
                    l.then((function(r) {
                        "0" === r.code ? (n.$message({
                            message: s + n.$t("efile_success"),
                            type: "success"
                        }),
                        n.getFileList()) : "1021" === r.code && r ? n.handleCover(r.data, e, t) : "0001" === r.code && r ? n.$message({
                            message: "".concat(s).concat(n.$t("stopOperation")),
                            type: "success"
                        }) : n.showEfileErrorMsg(r)
                    }
                    )).finally((function() {
                        n.checkEndCopyOrMove(a),
                        n.copyOrMoving = !1,
                        n.copyOrMoveBtnDisabled = !1,
                        n.$emit("openTableLoading", !1)
                    }
                    ))
                },
                handleCover: function(t, e, n) {
                    var r = this
                      , i = []
                      , o = [];
                    t.forEach((function(t) {
                        i.push(t.targetFile.name),
                        o.push(t.targetFile.path)
                    }
                    )),
                    this.$confirm("".concat(this.$t("contain_the_same_".concat(n, "_file"))).concat(i.join(","), "\n        ").concat(this.$t("is_cover")), this.$t("".concat(n, "_title")), {
                        confirmButtonText: this.$t("sure"),
                        cancelButtonText: this.$t("skip"),
                        type: "warning",
                        distinguishCancelAndClose: !0,
                        cancelButtonClass: "btn-custom-cancel",
                        customClass: "notify-custom-class"
                    }).then((function() {
                        r.handleCopyMoveFile(n, e, "cover")
                    }
                    )).catch((function(t) {
                        "close" === t ? r.$message({
                            type: "info",
                            message: r.$t("cancel") + r.$t(n)
                        }) : r.handleCopyMoveFile(n, e, "skip")
                    }
                    ))
                },
                handlePromptInfo: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                      , e = t
                      , n = ""
                      , r = this.getClusterName();
                    return r && (n += "".concat(r)),
                    n += "".concat(decodeURIComponent(e[0]).split("/").slice(-1)).concat(e.length > 1 ? this.$t("etc") : "", "  "),
                    n
                },
                downloadRaysyncFiles: function() {
                    this.$emit("downloadRaysyncFiles")
                },
                downloadApp: function() {
                    this.$emit("downloadLinuxApp")
                },
                openLinuxUploadModal: function() {
                    var t = this
                      , e = w.Z.getItem("fixedMainPath");
                    if (this.path.startsWith(e)) {
                        var n = this.path.substring(e.length, this.path.length);
                        n.startsWith("/") || (n = "/".concat(n)),
                        (0,
                        b._I)({
                            targetPath: n
                        }).then((function(e) {
                            if ("0" === e.code) {
                                var n = e.data
                                  , r = n.uploadLink
                                  , i = n.expireTime
                                  , o = "".concat(r, "<").concat(t.$t("linux_upload_input_info"), ">")
                                  , a = ["zh-CN", "zh"].includes(t.lang) ? "YYYY[年]MM[月]DD[日] HH[时]mm[分]ss[秒]" : "YYYY-MM-DDTHH:mm:ss";
                                t.linuxUploadExpireTime = T()(+i).format(a),
                                t.getBaseUrlToken(!0).then((function(e) {
                                    var n = e.url;
                                    t.fasttransUrl = t.getFasttransUrl(n),
                                    t.linuxUploadUrl = o,
                                    t.linuxUploadModalVisible = !0
                                }
                                ))
                            }
                        }
                        )).catch((function() {}
                        ))
                    } else
                        this.$message({
                            type: "warning",
                            message: this.$t("fasttrans_forbid")
                        })
                },
                getExpireInfo: function() {
                    return "".concat(this.$t("linux_upload_validity"), "： ").concat(this.linuxUploadExpireTime)
                },
                copyAll: function() {
                    return "".concat(this.$t("raysync_link"), "：").concat(this.linuxUploadUrl, ",").concat(this.getRaysyncInfo(), "  ").concat(this.getExpireInfo())
                },
                showUploadList: function() {
                    this.$store.commit("efileUpload/SET_UPLIST_SHOW", !this.uploadListShow)
                }
            }
        }
          , ut = ct
          , ht = (0,
        B.Z)(ut, S, C, !1, null, "9be9ebe2", null)
          , ft = ht.exports
          , dt = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "content-box"
            }, [t.isVisitor ? t._e() : e("div", {
                staticClass: "content-box-left"
            }, [e("div", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.treeLoading,
                    expression: "treeLoading"
                }]
            }, [e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.treeShow,
                    expression: "treeShow"
                }],
                staticClass: "tree-box",
                style: {
                    width: t.width + "px"
                }
            }, [e("el-tree", {
                ref: "tree",
                staticStyle: {
                    flex: "1"
                },
                attrs: {
                    data: t.treeData,
                    "default-expand-all": !0,
                    "expand-on-click-node": !1,
                    "empty-text": "",
                    "node-key": "id"
                },
                on: {
                    "node-expand": t.nodeExpand,
                    "node-click": t.appendTreeList
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(r) {
                        var i = r.node;
                        return e("span", {}, [e("span", [e("img", {
                            staticClass: "icon-file",
                            attrs: {
                                alt: "",
                                src: n(52809)
                            }
                        }), t._v("\n               " + t._s(i.label) + "\n            ")])])
                    }
                }], null, !1, 611144088)
            })], 1)]), t._v(" "), e("div", {
                staticClass: "drag_shrink_area",
                style: "".concat(t.treeShow ? "cursor: col-resize;" : ""),
                on: {
                    mousedown: function(e) {
                        return e.preventDefault(),
                        t.mousedown.apply(null, arguments)
                    }
                }
            }, [e("svg-icon", {
                class: "caret_icon ".concat(t.treeShow ? "icon-reverse" : ""),
                attrs: {
                    "icon-class": "efile_expand"
                },
                on: {
                    click: function(e) {
                        return t.changeTreeShow(t.treeShow)
                    }
                }
            })], 1)]), t._v(" "), e("div", {
                staticClass: "table-box",
                style: {
                    width: "calc(100% - ".concat(t.width + 4, "px)")
                }
            }, [e("el-table", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.tableLoading,
                    expression: "tableLoading"
                }],
                ref: "multipleTable",
                staticClass: "efile-table",
                attrs: {
                    "default-sort": {
                        prop: "name",
                        order: "ascending"
                    },
                    data: t.tableData,
                    "empty-text": t.emptyText,
                    height: "calc(100% - 50px)"
                },
                on: {
                    select: t.selectChange,
                    "select-all": t.selectAll,
                    "selection-change": t.handleSelectionChange,
                    "sort-change": t.sortChange,
                    "row-click": t.stepListClick
                },
                nativeOn: {
                    selectstart: function(t) {
                        t.preventDefault()
                    }
                }
            }, [e("el-table-column", {
                attrs: {
                    type: "selection"
                }
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: t.$t("file_name"),
                    sortable: "custom",
                    prop: "name",
                    "min-width": "150%"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(n) {
                        return [e("img", {
                            staticClass: "icon-file margin-right-8",
                            attrs: {
                                src: t.getIcon(n.row)
                            }
                        }), t._v(" "), e("span", {
                            staticClass: "text-primary pointer-cursor",
                            staticStyle: {
                                "white-space": "pre-wrap"
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(),
                                    t.lookForNextFolder(n.row)
                                }
                            }
                        }, [t._v(t._s(n.row.name))])]
                    }
                }])
            }), t._v(" "), t.ownerShow ? e("el-table-column", {
                key: "1",
                attrs: {
                    label: t.$t("owner"),
                    prop: "owner"
                }
            }) : t._e(), t._v(" "), e("el-table-column", {
                attrs: {
                    label: t.$t("file_type")
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(n) {
                        var r;
                        return [e("span", [t._v(t._s((null === (r = n.row.type) || void 0 === r ? void 0 : r.length) > 0 ? n.row.type : "-"))])]
                    }
                }])
            }), t._v(" "), e("el-table-column", {
                attrs: {
                    label: t.$t("size"),
                    sortable: "custom",
                    prop: "size"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(e) {
                        return [t._v("\n          " + t._s(e.row.isDirectory ? "" : e.row.size && t.formatByteSize(e.row.size)) + "\n        ")]
                    }
                }])
            }), t._v(" "), t.permissionShow ? e("el-table-column", {
                key: "2",
                attrs: {
                    label: t.$t("permission"),
                    prop: "permission"
                }
            }) : t._e(), t._v(" "), t.isVisitor && t.currentSelectPath === t.exSharePath ? t._e() : e("el-table-column", {
                attrs: {
                    label: t.$t("modify_time"),
                    prop: "lastModifiedTime",
                    sortable: "custom",
                    width: "180"
                }
            }), t._v(" "), t.isVisitor && t.currentSelectPath === t.exSharePath ? e("el-table-column", {
                attrs: {
                    label: t.$t("end_use_time"),
                    prop: "expiredTime",
                    sortable: "custom",
                    width: "180"
                }
            }) : t._e(), t._v(" "), e("el-table-column", {
                attrs: {
                    label: t.$t("operation"),
                    width: "130"
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function(n) {
                        return n.row.isDirectory && n.row.permissionAction && n.row.permissionAction.execute && n.row.permissionAction.read || !n.row.isDirectory && n.row.permissionAction && n.row.permissionAction.read ? [e("div", {
                            staticClass: "efile-operation-btns"
                        }, [e("operation-button", {
                            attrs: {
                                content: t.$t("single_download"),
                                icon: "efile_download"
                            },
                            on: {
                                click: function(e) {
                                    return t.downloadFile(n.row)
                                }
                            }
                        }), t._v(" "), !t.isVisitor && t.currentSelectPath !== t.exSharePath && t.secondSwitch && t.shareEnabled && n.row.permissionAction.write ? e("operation-button", {
                            attrs: {
                                content: "".concat(n.row.isShare ? t.$t("sharing") : t.$t("share")),
                                icon: "".concat(n.row.isShare ? "efile_sharing" : "efile_share")
                            },
                            on: {
                                click: function(e) {
                                    return t.shareFile(n.row)
                                }
                            }
                        }) : t._e(), t._v(" "), t.isShareDir(n.row) ? e("operation-button", {
                            attrs: {
                                content: t.$t("rename"),
                                icon: "efile_rename"
                            },
                            on: {
                                click: function(e) {
                                    return t.renameFile(n.row)
                                }
                            }
                        }) : t._e(), t._v(" "), t.isVisitor || t.currentSelectPath !== t.exSharePath ? t._e() : e("operation-button", {
                            attrs: {
                                content: t.$t("sharing"),
                                icon: "efile_sharing"
                            },
                            on: {
                                click: function(e) {
                                    t.shareFile(n.row),
                                    t.row = n.row
                                }
                            }
                        })], 1)] : void 0
                    }
                }], null, !0)
            })], 1), t._v(" "), e("div", {
                staticClass: "dialog"
            }, [e("el-pagination", {
                key: t.paginationKey,
                attrs: {
                    background: "",
                    "hide-on-single-page": !1,
                    "page-sizes": t.pageSizes,
                    layout: "total, sizes, prev, pager, next, jumper",
                    total: t.total,
                    "current-page": t.currentPage,
                    "page-size": t.pageSize
                },
                on: {
                    "size-change": t.handleSizeChange,
                    "current-change": t.handleCurrentChange
                }
            })], 1)], 1), t._v(" "), e("su-dialog", {
                attrs: {
                    id: "show-sharing-dialog",
                    visible: t.showSharing,
                    title: t.$t("open_sharing_title"),
                    "close-on-click-modal": !1,
                    "destroy-on-close": !0,
                    width: "350px"
                },
                on: {
                    "update:visible": function(e) {
                        t.showSharing = e
                    }
                }
            }, [e("p", [t._v(t._s(t.$t("after_opening")))]), t._v(" "), e("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-button", {
                attrs: {
                    type: "primary",
                    loading: t.openShareBtnLoading
                },
                on: {
                    click: t.openSharingFun
                }
            }, [t._v("\n        " + t._s(t.$t("open_sharing")) + "\n      ")]), t._v(" "), e("el-button", {
                attrs: {
                    disabled: t.openShareBtnLoading
                },
                on: {
                    click: function(e) {
                        t.showSharing = !1
                    }
                }
            }, [t._v(t._s(t.$t("cancel")))])], 1)]), t._v(" "), e("su-dialog", {
                attrs: {
                    id: "open-sharing-dialog",
                    visible: t.openSharing,
                    title: t.$t("share_link"),
                    "close-on-click-modal": !1,
                    "destroy-on-close": !0,
                    width: "650px"
                },
                on: {
                    "update:visible": function(e) {
                        t.openSharing = e
                    }
                }
            }, [e("div", {
                staticClass: "dialog-header"
            }, [e("div", {
                staticClass: "header-left"
            }, [e("i", {
                staticClass: "el-icon-success"
            }), t._v(" "), e("span", [t._v(t._s(t.$t("created_successfully")))])]), t._v(" "), e("div", {
                staticClass: "header-right"
            }, [e("span", [t._v(t._s(t.$t("validity_remaining") + t.effectiveTime + t.$t("day")))])])]), t._v(" "), e("div", {
                staticClass: "dialog-content"
            }, [e("div", {
                staticClass: "title"
            }, [t._v(t._s(t.$t("server_link")))]), t._v(" "), e("div", {
                staticClass: "item"
            }, [e("div", {
                staticClass: "copy-link-area"
            }, [e("el-input", {
                attrs: {
                    type: "textarea",
                    value: t.serverLink,
                    resize: "none",
                    autosize: "",
                    disabled: ""
                }
            }), t._v(" "), e("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.copyLink("server", !1),
                    expression: "copyLink('server', false)",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }],
                staticClass: "copy-server-link"
            }, [t._v("\n            " + t._s(t.$t("copy_server_link")) + "\n          ")])], 1), t._v(" "), e("div", {
                staticClass: "tips"
            }, [t._v("\n          " + t._s(t.$t("downloaded_from_server")) + "\n          "), e("a", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.copyLink("server", !0),
                    expression: "copyLink('server', true)",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }]
            }, [t._v("\n            " + t._s(t.$t("copy_link_desc")) + "\n          ")])])]), t._v(" "), t.raysyncEnabled ? e("div", {
                staticClass: "item"
            }, [e("div", {
                staticClass: "copy-link-area"
            }, [e("el-input", {
                attrs: {
                    value: t.shareRaysyncLink,
                    type: "textarea",
                    resize: "none",
                    autosize: "",
                    disabled: ""
                }
            }), t._v(" "), e("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.copyLink("raysync", !1),
                    expression: "copyLink('raysync', false)",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }],
                staticClass: "copy-server-link"
            }, [t._v("\n            " + t._s(t.$t("copy_raysync_link")) + "\n          ")])], 1), t._v(" "), e("div", {
                staticClass: "tips"
            }, [t._v("\n          " + t._s(t.$t("downloaded_from_linux_raysync")) + "\n          "), e("a", {
                on: {
                    click: t.downloadApp
                }
            }, [t._v(" " + t._s(t.$t("quick_client")) + " >> ")]), t._v("\n          " + t._s(t.$t("linux_raysync_info_upload")) + ",\n          " + t._s(t.$t("use_in_linux")) + "\n          "), e("a", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: "wget ".concat(t.fasttransUrl),
                    expression: "`wget ${fasttransUrl}`",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }]
            }, [t._v("\n            " + t._s(t.$t("download_cmd")) + " >>\n          ")]), t._v("\n          ，" + t._s(t.$t("unzip_file")) + "，\n          "), e("a", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.copyLink("raysync", !0),
                    expression: "copyLink('raysync', true)",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }]
            }, [t._v("\n            " + t._s(t.$t("copy_link_desc")) + "\n          ")])])]) : t._e(), t._v(" "), e("div", {
                staticClass: "title"
            }, [t._v(t._s(t.$t("web_link")))]), t._v(" "), e("div", {
                staticClass: "item"
            }, [e("div", {
                staticClass: "copy-link-area"
            }, [e("el-input", {
                attrs: {
                    value: t.webLink,
                    type: "textarea",
                    resize: "none",
                    autosize: "",
                    disabled: ""
                }
            }), t._v(" "), e("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.copyLink("web"),
                    expression: "copyLink('web')",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }],
                staticClass: "copy-server-link"
            }, [t._v("\n            " + t._s(t.$t("copy_web_link")) + "\n          ")])], 1), t._v(" "), t.exSharePath ? e("div", {
                staticClass: "tips"
            }, [t._v("\n          " + t._s(t.$t("external_share_directory_tips")) + "\n          "), t.showMyshare ? e("i", {
                staticClass: "el-icon-loading"
            }) : e("a", {
                on: {
                    click: t.changePath
                }
            }, [t._v(t._s(t.$t("external_share_directory")) + " >>")])]) : t._e()])]), t._v(" "), e("su-dialog", {
                attrs: {
                    id: "close-sharing-dialog",
                    visible: t.closeSharing,
                    title: t.$t("turning_off_sharing"),
                    "close-on-click-modal": !1,
                    "destroy-on-close": !0,
                    width: "350px",
                    "append-to-body": ""
                },
                on: {
                    "update:visible": function(e) {
                        t.closeSharing = e
                    }
                }
            }, [e("p", [t._v(t._s(t.$t("after_closing")))]), t._v(" "), e("div", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-button", {
                attrs: {
                    type: "primary",
                    loading: t.closeShareBtnLoading
                },
                on: {
                    click: t.continueClosing
                }
            }, [t._v("\n          " + t._s(t.$t("close")) + "\n        ")]), t._v(" "), e("el-button", {
                attrs: {
                    disabled: t.closeShareBtnLoading
                },
                on: {
                    click: t.cancelClosing
                }
            }, [t._v(t._s(t.$t("cancel")))])], 1)]), t._v(" "), e("div", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-button", {
                directives: [{
                    name: "clipboard",
                    rawName: "v-clipboard:copy",
                    value: t.copyLink("all"),
                    expression: "copyLink('all')",
                    arg: "copy"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:success",
                    value: t.onCopy,
                    expression: "onCopy",
                    arg: "success"
                }, {
                    name: "clipboard",
                    rawName: "v-clipboard:error",
                    value: t.onError,
                    expression: "onError",
                    arg: "error"
                }],
                attrs: {
                    type: "primary"
                }
            }, [t._v("\n        " + t._s(t.$t("copy_all_links")) + "\n      ")]), t._v(" "), e("el-button", {
                on: {
                    click: t.closeSharingFun
                }
            }, [t._v("\n        " + t._s(t.$t("close_sharing")) + "\n      ")])], 1)], 1), t._v(" "), e("su-dialog", {
                attrs: {
                    id: "close-delete-dialog",
                    visible: t.closeDelete,
                    title: t.$t("deletion_operation"),
                    "close-on-click-modal": !1,
                    "destroy-on-close": !0,
                    width: "350px"
                },
                on: {
                    "update:visible": function(e) {
                        t.closeDelete = e
                    }
                }
            }, [e("p", [t._v(t._s(t.$t("after_deletion")))]), t._v(" "), e("div", {
                staticClass: "dialog-footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-button", {
                attrs: {
                    type: "primary",
                    loading: t.closeShareBtnLoading
                },
                on: {
                    click: t.continueClosing
                }
            }, [t._v("\n        " + t._s(t.$t("batch_deletion")) + "\n      ")]), t._v(" "), e("el-button", {
                attrs: {
                    disabled: t.closeShareBtnLoading
                },
                on: {
                    click: function(e) {
                        t.closeDelete = !1
                    }
                }
            }, [t._v(t._s(t.$t("cancel")))])], 1)])], 1)
        }
          , pt = []
          , gt = (n(27479),
        n(87714),
        n(82801),
        n(1174),
        n(52809))
          , vt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAMSElEQVR4Ae3dPW8j1xXG8SPFjuMkjrSBGzcRN01KKRWrwHIvwNpWhaT9BKsUqpdbq4j2E0hUsa21gAo3gbWdVZkC0rhILOWlSYxYBBwjjgsGd3hml9KQPOSdIXXn3v8PENbmaIGd4Txz387MLPR6PTG1txoisqY/qeuIyLnsvLhJ/UCkYnxI2lu7IrInIquFbWiLSEt2XlwlfyQiNzwk7a11ETkWkZXCNgzqZheRnRfHHJV4FUPSbz2OUj8wU3pMUOJ1OyQEpIyPZOfFeX3/+RjlTUjaW5si8smI34PNdb3WZedFh2MVl35I2lvLIuIGoEupH5CSrrMZQGa+orKoO7NHQCqxkk0P9y86iEQekl2+0Mqs6swgIrEo7a01pnor97G0twhKJFxLspn6QZiRHZ0tRM25kNB/np0jglJ/i9RjzdyhdmlRU4t8cTO3pDNejcj3M1qEZD5cUE6ZGq4nQjI/q1mLgtohJPO1ytRw/RCS+XNTw63UdrrO3kr9ANyTpzo+ocbr/nSynwlumiMk9+dJqjselPbWZTZNP+Z+ILpbSN2qLvpejVrPIiRAn6tf/GJYhQQhAW4rlBIREqDoSB+GkiEkwHCvB/KEBBhuJe92ERJgtGzRl5AAo7nWpEFIgPHWCQkwHi0JYCEkgIGQAAZCAhgICWAgJICBkAAGQgIYCAlgmOwe97f/I/KTb0Te+aawCail7x+I/PeByA8/KxmSpb+I/PJLkXd4qAci9f2yyL9/I9L99cj9Gx6Sn/5T5IPP+y0IEDPXAHxwIfL+n0T+8bt+63JHcUziWo9f/ZGAIC3ufG982j//77gdEvcLLlVAqtz5fycob0Ly3t8JCCAaFDfkUP2Q/Oh//TEIAA3K53dC8uBLkcUfODpAzo1RtNvVD8nSVxwb4C4345WF5N1//ZyZLGAIl4t3v15elF/89f3iVgCZ9/7WWJTFH4YvKAIQefu75UV558YuXgESVlxxB3ALIQEMhAQwEBLAQEgAAyEBDIQEMCzKj7/98/hfARL27tcdt+L+LecAMMJb393Q3QIMhAQwEBLAQEgAAyEBDIQEMBASwEBIAAMhAQyEBDAQEsBASAADIQEMhAQwEBLAQEgAAyEBDIQEMBASwEBIAAMhAQyEBDAQEsBASAADIQEMhAQwEBLAQEgAAyEBDIQEMBASwEBIAAMhAQyEBDAQEsBASAADIQEMhAQwEBLAQEgAAyEBDIQEMBASwEBIAAMhAQyEBDAQEsBASAADIQEMhAQwEBLAQEgAAyEBDIQEMBASwEBIAAMhAQyEBDAQEsBASAADIQEMhAQwEBLAQEgAAyEBDIQEMBASwEBIAMNb4zcn6VJEOiJypX/e6EG4kWavk/rBCcLFQkNEGgP/lPz/1/TP1Sr/mYSkH4pTETmXZu+8sBXhafau9CI22sXCuoi4n82yoVnofS7uxPiwsCVuLhiHWTiavZvE9j09/ZbHhWXXIzDPUgtJW0RaeiVCii4WXJdsT0R2Jtz7ZykM3LtuR0XkgTR7uwQkcW5c6c4DkYd60TTFHpJ2Nphr9lp0q3CLu1i+CcvLcQcn1pC4McdHtBww9cOymZ0vItfDfj3GkDyTZm+NmSpMpX++uPHK87t/LaaQdLX1aBW2AJNwXfJmzw3qH+n5lIklJJfZIhKtB6rQ7J3qGos7r6IISTvbIQbmqFK/usIFpVP3Ffe2zlDMxMHJ2bL2U9cHSh9EP1u6v90e6VVWOSByvL+9MfWExcHJWUPXENYCXTu7Hlhpz1fd3f529rc3qr9I9i+8p3VeTJxJQA5OztZ0dbZ0OcM9cv3pvf3tjeMp9tuN5Z4WNtSH6xq5/T31uUCMU9eQVB6Qg5OzXb2K1jUYwzyeJCgRBOSuV9qaTnyRGKeOIXklzd564VNPGg53kqzMe0fm5OG4K+vByZk7lp8VNsTBdc9aZcNStzHJpXaDStOT4zjicOT29GeUmY3pAuC+26ODkzO3/7v72xtetzrUaXarm32hJWex3GD84OTsUK+esQdEJrioVHLRCZzrQn+h3cqp1SkkrbI3Pemg3HUvnxQ2xsu6EIQ4SzcrTw9Ozjo6azmxuoTkpTR7h4VPp6Ddq/PIBuaYnvv+r/SCOZE6hKRr9KlNOjj/LLGrZu6y8Mlt3cIn8XPnwfmkQalDSErdJKUBOSpsSIdVqnNa+CQNEwcl9JBcl+lm6QEo1U2rue4E+59yQehEQQk9JN5foJZYnCfaxcrtjVsjcXT748KGdLjz43TcYD7kkLhWpMwi0GnCAXEtyKNJF9H09x4lOj4RnQEceaxCXnF/7BuSOZRZvCp8EoYbvTic+hT86dV0Vws6R15Z79ksz9Xf729vFLqnoYbEtSKNwqcT0G7WVxX+W7r5iafVpmO7L5g9/Y7zZ2p9XPF3vXb3Ow61LKVMN6uSoraBQe/hTMqw4U1PYvc9H2vrl5felO1eL+k4+FapTqgtyUOfad8Ki/Wea2Ec4agJDctxRS3LbwfrvEJsSS5LrIuUnc6c+j4MhEEvaJsVrYvtDbYmIc5u+Q7Wy95N5wKyTkDqraKZuh0d92RCDInvwxxKla5oQHhqfAT2tzdOKzgfXv/90EJyXaLSt0zJ92MCEhdtUZ6V2KnX51NoIfE6UQ9OzjZLzGy8pIsVp/3tjVaJNa2VvFwltJD4drXK3M5btllG2MpM5mStSWizW75dHt+QtENbHNRp7Mru4Z8zN8N0HlLXdX97wxUwvvKc1Mm+h1hC4nsjVaEE4b7E9ECKg5Oza72nPJQnah56hiT7O2EtJjZ7C4XPDCUWEC/3tzfGlkjPy8HJ2fEUL5Wpk4keaTQPBydnN57j1ochjUmsO+hG8arxKjH+qZQ+ySPGgIg+qSSUB0343lzWCCkkviUgtQ2JllLEftNTKF1a3678WsrvcQ+hLms9gXteVqZ56MIM+YZkOeWQhDADE8SYaA7qOluXSTYkVPjOVag3cE0k2ZCMu6cZlav1BSnl7lYIXZ1U3sxV6/1MOSS+s2KV0cW2oW98jcirQFbgfcdFVyGFxPeknXcpS9Vifqq7BFQb59tzCCokvuUYvv3dIEKircnjCB/n0w3sFgTf77sTVnfrYmHq1qREfdCKlrTcOy3dWNOXpMagrU8dCaUkZddzParrZkFDK3BsDLw4chqXnkWOrYBalCvteu2GEl4fARU1DvLt0mb7ElpI1j1nQnxfqfChOyFD+2IDPdFqSWvHfAt4s+8htNkt38FVmWY95QdqR03Xwsp8v1lRZGgh8epm6ODQdyp1VV8Ph/gclpgQusxvyAstJEtyseDbmpR5z8YTHdwhEhXcgvC6dxLiYqLvoLVsa3BEUOKgAflDiZ3phh4SrxNVm8ayU6hHdL3qS9+sfFwyIHL3qfwhhmTVZ71EVXED0xN9Q2uty7tTo99Xp4K7PLt3z6NQH5j9XJo9r3KGiu8Xdy3TMVOy4dJwtCo8h5/p87peCzUkXWn2vErZddrvquI7/q51YsAdqyue9nh/9C7HwfeTVPl0mWutFLhV6hTrm67cwfuksCF+1xrkls/zxPSqvKsnX4qv0vtoWK8h5FJ57/GFPjA5ljqoaaxoV/MrfSXexHTC4jP9+ykG5PmwgIiGJNTXm63IxUKZKdm9Eo8pisHTSYOi47gnhQ3pcPe8jBwDhxwSyVqTiwWvsUn+UpeE3ygrGpSxM4XaxYr1uV+TuLTeSLAY+K2VK2Vu2tF++XriQbFak5QfGJ6/uGnsPUmL0uydB34SPS2xbpLXdaUcFGu9p8q319aJa0Eakzw1Jx+4h/5+jjJ1WXlQ1hIdo9T+AdwzcDlJC5LLQ9IK/ErrVuFLraYPdL1eFjYiJW4Wq7AWMk4/JM3eTQ2eSeu6XaVKRdyB2d/e2Iz0nvJRrNYz9qe15Nz3/WjcLNYob9ZJmr3DGqwtnJYZn+T03utGImspVlc1hZKb5zr+8Oq2L/R6vdufXCyE/q6MrD+prV9pM6j9CUnXGpzqFHEn0gXEtm/1waBiSCQLyp6eOKEeuEqDIm9OllZEJRndSV+7rffRHBU21FN+L8hhVa/6Gx4Sef14n5BPmsqDktPar/zdhb6vmrtPbpyxOU0hpraoxzWdDbvUbuO5b5dqnNEhyfVXvNd1CnUtsCeEn0uzN9MJB60qHtz35YBfmdApe6IMXCBC3kd3YXQ/7r87M31DgIj8H1nrrceC0X3wAAAAAElFTkSuQmCC"
          , mt = "data:image/png;base64,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"
          , yt = "data:image/png;base64,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"
          , At = "data:image/png;base64,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"
          , wt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAFLklEQVR4Ae3csW+UZQDH8adHFUMAcdJFUrcao566dMCAcWEDloZFxdFF+Q+kuwNhxYFFY5xwUxNjiTd0UasO3lgSB42YVCC1oNyZt15re2+5HzCQXt/PJ7mkPO87vPf0vn3e5+7CRL/fL8nswupUKaU9eFBKeX3l86nnb38/NU5z8dOjLy19te/4Uu1A8yyWUuY/nXls+V6e+WRtZJPZhdVjpZRzpZSjtYMN90TvjzKz2hmrSfhl8rDf4yazC6uflVLOfzrz2Hzt4CbbRjJYOS6Jg13uRPWYXVi9Uko5ebeVpTU8MFg9FgVCg1Sv9aXZhdVttxNbIhkE8nUp5fHambC7Va/5+e1C2YhkcIt12QuBBlsP5dDmKdi8klyygsBaA5c2T8NaJLMLq2fsQWDDicHWY836SnLW/MAWG020BnuRF80PbHFifW9SrSQnzQ1sa+2Wq4pkrL5aAQ/R2tvBLd/HgtFqn7gDW4kEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAJBa9/tv/aPPgWa6Znfr07dPvPm1MStt96YL6Uc9Tq4P63p66U1fWOcLrn0ugdKr3uwNs5Ic263IBAJBCKBQCQQiAQCkUAgEggmRx9uptbLr5Q9p06ViacP76rnn/4i9rvd8veF86WsrNSONZmVZEgVyOS77+26QO7FxPR0eeTdszv/Qh8ykQxpHXm1NtYkVSit6WcbPQfDRDJkYt++2ljTVKHwP5FAIBIIRAKBSCAQCQQigUAkEIgEAt/dekC9zielXLs4Vtc88fKFMnH4udo4o1lJIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBQCQQiAQCkUAgEghEAoFIIBAJBCKBwP8F/IBaR06XUk6P5bVzf6wkEIgEApFAIBIIRAKBSCAQCQQiGdJfWamN0WwiGdL77tvaWNP0u92mT8EWIhnS63xT7nz5RW28Ef5aKf98eLH0uj838/nfha+lbOPOxx+tPUZpTV8vrekbI87YeXrdA6XXPThW17wTWEkgEAkEIoFAJBCIBAKRQCASCCY/eGdp/629vdFnUXNsebIcXd5TG9/JvplZLvPHr/ll3oeDNycPtW7t7d0cmyuGh+z6/n+W3W5BIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQQigUAkEIgEApFAIBIIRAKBSCAQCQRVJIujT4FmqyJZavokwAiLVSTzdz8OjTffmmt3qtutq02fCdjGZ3PtzvL6xv1c/Tg03vmy/u7WXLtzyWoCW1yZa3fWtiKb3wI+aY5gzZ+llDPr/9iIZLA3edscQTkz1+5svOu75cPEwW2XUGiqagV5e67dubz5+dc+cR+E8po9Cg3zQynl2OD1v0UtkvJfKNWGpV39KBZ2uauD1aM92HLUTPT7/drgsPcXjxyrKhuEc6h2QgPNXN/z1As39zw5Ts/8x/13fls4eOfX2oHmqfYb1ePy3cLYUEr5FxRr2VEloikpAAAAAElFTkSuQmCC"
          , bt = "data:image/png;base64,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"
          , St = "data:image/png;base64,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"
          , Ct = "data:image/png;base64,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"
          , Et = "data:image/png;base64,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"
          , xt = "data:image/png;base64,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"
          , kt = n(99455)
          , Lt = {
            name: "ContentBox",
            components: {
                OperationButton: P
            },
            mixins: [_, U.Z],
            props: {
                treeShow: {
                    type: Boolean,
                    default: !1
                },
                treeData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                tableData: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                total: {
                    type: Number,
                    default: 0
                },
                currentPage: {
                    type: Number,
                    default: 1
                },
                pageSize: {
                    type: Number,
                    default: kt.hU
                },
                pageSizes: {
                    type: Array,
                    default: function() {
                        return kt.a
                    }
                },
                shareEnabled: {
                    type: Boolean,
                    default: !1
                },
                currentSelectPath: {
                    type: String,
                    default: ""
                },
                isVisitor: {
                    type: Boolean,
                    default: !1
                },
                secondSwitch: {
                    type: Boolean,
                    default: !1
                },
                treeLoading: {
                    type: Boolean,
                    default: !1
                },
                tableLoading: {
                    type: Boolean,
                    default: !1
                },
                emptyText: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    width: 280,
                    showSharing: !1,
                    openSharing: !1,
                    closeSharing: !1,
                    closeDelete: !1,
                    sharingText: this.$t("share"),
                    filePath: "",
                    fileName: "",
                    serverLink: "",
                    effectiveTime: "",
                    row: "",
                    showMyshare: !1,
                    shareRaysyncLink: "",
                    openShareBtnLoading: !1,
                    closeShareBtnLoading: !1,
                    paginationKey: 0,
                    webLink: "",
                    fasttransUrl: "",
                    sharePasswd: ""
                }
            },
            computed: {
                pageIndex: function() {
                    return this.currentPage
                }
            },
            watch: {
                tableData: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.$refs.multipleTable.bodyWrapper.scrollTop = 0,
                        t.paginationKey = (new Date).getTime()
                    }
                    ))
                }
            },
            mounted: function() {},
            beforeUpdate: function() {
                var t = this;
                this.$nextTick((function() {
                    t.$refs.multipleTable.doLayout()
                }
                ))
            },
            methods: {
                formatByteSize: A.QM,
                isShareDir: function(t) {
                    var e = t.path;
                    return !this.isVisitor && !(this.exSharePath && e.startsWith(this.exSharePath))
                },
                handleSizeChange: function(t) {
                    this.$emit("handleSizeChange", t)
                },
                handleCurrentChange: function(t) {
                    this.$emit("handleCurrentChange", t)
                },
                nodeExpand: function(t) {
                    this.$emit("nodeExpand", t.path)
                },
                appendTreeList: function(t, e, n) {
                    this.$emit("appendTreeList", t, e, n)
                },
                selectChange: function(t, e) {
                    this.$emit("selectChange", t, e)
                },
                selectAll: function(t) {
                    this.$emit("selectAll", t)
                },
                handleSelectionChange: function(t) {
                    this.$emit("handleSelectionChange", t)
                },
                sortChange: function(t) {
                    this.$emit("sortChange", t)
                },
                stepListClick: function(t, e, n) {
                    this.$emit("stepListClick", t, e, n)
                },
                selectShare: function() {
                    this.$emit("selectExShareDir")
                },
                getIcon: function(t) {
                    var e = function(t, e) {
                        return t ? (0,
                        A.Or)(t) ? e ? xt : At : ["tar", "zip", "gz", "war"].indexOf(t.toLowerCase()) > -1 ? e ? Et : wt : ["txt", "py", "sh"].indexOf(t.toLowerCase()) > -1 ? e ? Ct : bt : e ? yt : St : e ? yt : St
                    };
                    return t.isDirectory ? t.isSymbolicLink ? t.hasChildren ? mt : vt : gt : e(t.type, t.isSymbolicLink)
                },
                changeTreeShow: function(t) {
                    this.$emit("update:treeShow", !t)
                },
                lookForNextFolder: function(t) {
                    this.$emit("lookForNextFolder", t)
                },
                renameFile: function(t) {
                    var e = this
                      , n = t.name
                      , r = t.path
                      , i = t.isShare ? this.$t("rename_share_info") : "";
                    this.$prompt(i, this.$t("rename"), {
                        confirmButtonText: this.$t("sure"),
                        cancelButtonText: this.$t("cancel"),
                        customClass: "rename_prompt notify-custom-class",
                        inputValidator: function(t) {
                            return 0 === t.trim().length ? e.$t("check_blanks") : t.length > 70 ? e.$t("check_length") : -1 === t.indexOf("/") || e.$t("rename_input_validate")
                        },
                        inputValue: n,
                        closeOnHashChange: !1,
                        closeOnClickModal: !1,
                        inputErrorMessage: "",
                        beforeClose: function(n, i, o) {
                            if ("confirm" === n) {
                                var a = i.inputValue;
                                if (a === t.name)
                                    return e.$message({
                                        message: e.$t("rename_no_change"),
                                        type: "warning"
                                    }),
                                    void o();
                                i.confirmButtonLoading = !0,
                                (0,
                                b.gQ)({
                                    newName: a,
                                    path: r
                                }).then((function(t) {
                                    "0" === t.code ? (e.$message({
                                        message: e.$t("modified_success_info"),
                                        type: "success"
                                    }),
                                    e.$emit("getFileList", {
                                        updateTree: !0
                                    })) : e.showEfileErrorMsg(t)
                                }
                                )).finally((function() {
                                    i.confirmButtonLoading = !1,
                                    o()
                                }
                                ))
                            } else
                                o()
                        }
                    })
                },
                downloadFile: function(t) {
                    this.$emit("downloadFile", t)
                },
                shareFile: function(t) {
                    this.filePath = t.path,
                    this.fileName = t.name,
                    t.isShare ? this.openShareThen(t) : this.showSharing = !0
                },
                openShareThen: function(t) {
                    var e = this;
                    this.sharePasswd = t.sharePasswd,
                    this.getWebLink().then((function(n) {
                        e.openSharing = !0,
                        e.serverLink = t.shareServerLink,
                        e.shareRaysyncLink = t.shareRaysyncLink,
                        e.effectiveTime = t.shareValidTime,
                        e.webLink = n
                    }
                    ))
                },
                openSharingFun: function() {
                    var t = this;
                    this.openShareBtnLoading = !0,
                    this.$emit("update:tableLoading", !0),
                    (0,
                    b.Zn)({
                        filePath: this.filePath
                    }).then((function(e) {
                        "0" === e.code ? (t.$emit("getFileList"),
                        t.showSharing = !1,
                        t.showMyshare = !0,
                        t.openShareThen(e.data),
                        t.copyFileToShare()) : t.showEfileErrorMsg(e)
                    }
                    )).finally((function() {
                        t.$emit("update:tableLoading", !1),
                        t.openShareBtnLoading = !1
                    }
                    ))
                },
                copyFileToShare: function() {
                    var t = this
                      , e = {
                        sourcePath: encodeURIComponent(this.filePath),
                        targetPath: encodeURIComponent("".concat(this.exSharePath, "/").concat(this.fileName))
                    };
                    (0,
                    b.PX)(e).then((function(e) {
                        "0" === e.code && (t.showMyshare = !1)
                    }
                    ))
                },
                getWebLink: function() {
                    var t = this
                      , e = window.btoa(encodeURIComponent(this.fileName));
                    return this.getBaseUrlToken(!0).then((function(n) {
                        var r = n.url;
                        t.fasttransUrl = t.getFasttransUrl(r);
                        var i = {
                            VUE_APP_BASE_URL: "/efile",
                            NODE_ENV: "production",
                            BASE_URL: ""
                        }.VUE_APP_WEB_BASE_URL ? {
                            VUE_APP_BASE_URL: "/efile",
                            NODE_ENV: "production",
                            BASE_URL: ""
                        }.VUE_APP_WEB_BASE_URL : "".concat("/efile", "/")
                          , o = "".concat(r.replace("/efile", "")).concat(i, "#/share/").concat(e, "#");
                        return "".concat(o, "  (").concat(t.$t("password"), ":").concat(t.sharePasswd, ")")
                    }
                    ))
                },
                getServerlinkText: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return "".concat(this.serverLink, "  ").concat(t ? this.$t("copy_server_link_tips") : "")
                },
                getWeblinkText: function() {
                    return "".concat(this.webLink, " ").concat(this.$t("copy_web_link_tips"))
                },
                getRaysyncText: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return "".concat(this.shareRaysyncLink, " ").concat(t ? this.getRaysyncInfo() : "")
                },
                copyLink: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = "";
                    switch (t) {
                    case "server":
                        n = this.getServerlinkText(e);
                        break;
                    case "web":
                        n = this.getWeblinkText();
                        break;
                    case "raysync":
                        n = this.getRaysyncText(e);
                        break;
                    case "all":
                        n = "".concat(this.getServerlinkText(!0), "\n\n\n          ").concat(this.raysyncEnabled ? this.getRaysyncText(!0) : "", "\n\n\n          ").concat(this.getWeblinkText());
                        break;
                    default:
                        n = ""
                    }
                    return n
                },
                closeSharingFun: function() {
                    this.closeSharing = !0
                },
                cancelClosing: function() {
                    this.currentSelectPath === this.exSharePath ? this.closeSharing = !1 : (this.closeSharing = !1,
                    this.openSharing = !0)
                },
                cancelLoading: function() {
                    this.closeShareBtnLoading = !1,
                    this.openSharing = !1,
                    this.closeSharing = !1,
                    this.closeDelete = !1,
                    this.$emit("update:tableLoading", !1)
                },
                continueClosing: function() {
                    var t = this;
                    this.closeShareBtnLoading = !0,
                    this.$emit("update:tableLoading", !0),
                    this.currentSelectPath === this.exSharePath ? this.deleteShareFile() : (0,
                    b.Rv)({
                        filePath: this.filePath
                    }).then((function(e) {
                        t.$emit("getFileList"),
                        "0" === e.code ? t.$message.success(e.msg) : t.showEfileErrorMsg(e)
                    }
                    )).finally((function() {
                        t.cancelLoading()
                    }
                    ))
                },
                deleteShareFile: function() {
                    var t = this;
                    (0,
                    b.EL)({
                        paths: this.row.path
                    }).then((function(e) {
                        "0" === e.code ? (t.$message({
                            message: t.$t("delete_success_info"),
                            type: "success"
                        }),
                        t.$emit("getFileList")) : t.showEfileErrorMsg(e)
                    }
                    )).finally((function() {
                        t.cancelLoading()
                    }
                    ))
                },
                changePath: function() {
                    this.openSharing = !1,
                    this.$emit("changePath", {
                        value: this.exSharePath
                    })
                },
                downloadApp: function() {
                    this.$emit("downloadLinuxApp")
                },
                mousedown: function(t) {
                    var e = this;
                    if (this.treeShow) {
                        var n = t.target
                          , r = t.clientX
                          , i = this.$el.offsetWidth;
                        n.classList.add("drag"),
                        document.body.style.cursor = "col-resize";
                        var o = function(t) {
                            var o = t.clientX
                              , a = Math.min(Math.max(o - r, 100 - e.width), i - e.width - 450);
                            n.style.transform = "translateX(".concat(a, "px)")
                        }
                          , a = function t(a) {
                            var s = a.clientX
                              , l = Math.min(Math.max(s - r, 100 - e.width), i - e.width - 450);
                            e.width += l,
                            n.style.transform = "",
                            n.classList.remove("drag"),
                            document.body.style.cursor = "",
                            document.body.removeEventListener("mousemove", o),
                            document.body.removeEventListener("mouseup", t)
                        };
                        document.body.addEventListener("mousemove", o),
                        document.body.addEventListener("mouseup", a)
                    }
                }
            }
        }
          , Tt = Lt
          , It = (0,
        B.Z)(Tt, dt, pt, !1, null, "05ef9322", null)
          , Ot = It.exports;
        n(39575),
        n(82472),
        n(48675),
        n(92990),
        n(18927),
        n(33105),
        n(35035),
        n(74345),
        n(7174),
        n(63408),
        n(14590),
        n(32846),
        n(44731),
        n(77209),
        n(96319),
        n(58867),
        n(37789),
        n(33739),
        n(29368),
        n(14483),
        n(12056),
        n(3462),
        n(30678),
        n(27462),
        n(33824),
        n(55021),
        n(12974),
        n(15016),
        n(6982),
        n(38706),
        n(76938),
        n(18264),
        n(96649),
        n(96078),
        n(43290),
        n(39714),
        n(50545),
        n(35837),
        n(91038),
        n(79841),
        n(30541),
        n(23123),
        n(44048),
        n(78285),
        n(24603),
        n(28450),
        n(88386);
        var Mt = function() {
            var t;
            return function() {
                function t(e, n, r) {
                    function i(a, s) {
                        if (!n[a]) {
                            if (!e[a]) {
                                var l = void 0;
                                if (!s && l)
                                    return require(a, !0);
                                if (o)
                                    return o(a, !0);
                                var c = new Error("Cannot find module '".concat(a, "'"));
                                throw c.code = "MODULE_NOT_FOUND",
                                c
                            }
                            var u = n[a] = {
                                exports: {}
                            };
                            e[a][0].call(u.exports, (function(t) {
                                var n = e[a][1][t];
                                return i(n || t)
                            }
                            ), u, u.exports, t, e, n, r)
                        }
                        return n[a].exports
                    }
                    for (var o = void 0, a = 0; a < r.length; a++)
                        i(r[a]);
                    return i
                }
                return t
            }()({
                1: [function(t, e, n) {
                    n.byteLength = u,
                    n.toByteArray = f,
                    n.fromByteArray = g;
                    for (var r = [], i = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s)
                        r[s] = a[s],
                        i[a.charCodeAt(s)] = s;
                    function c(t) {
                        var e = t.length;
                        if (e % 4 > 0)
                            throw new Error("Invalid string. Length must be a multiple of 4");
                        var n = t.indexOf("=");
                        -1 === n && (n = e);
                        var r = n === e ? 0 : 4 - n % 4;
                        return [n, r]
                    }
                    function u(t) {
                        var e = c(t)
                          , n = e[0]
                          , r = e[1];
                        return 3 * (n + r) / 4 - r
                    }
                    function h(t, e, n) {
                        return 3 * (e + n) / 4 - n
                    }
                    function f(t) {
                        var e, n, r = c(t), a = r[0], s = r[1], l = new o(h(t, a, s)), u = 0, f = s > 0 ? a - 4 : a;
                        for (n = 0; n < f; n += 4)
                            e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)],
                            l[u++] = e >> 16 & 255,
                            l[u++] = e >> 8 & 255,
                            l[u++] = 255 & e;
                        return 2 === s && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4,
                        l[u++] = 255 & e),
                        1 === s && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2,
                        l[u++] = e >> 8 & 255,
                        l[u++] = 255 & e),
                        l
                    }
                    function d(t) {
                        return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t]
                    }
                    function p(t, e, n) {
                        for (var r, i = [], o = e; o < n; o += 3)
                            r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]),
                            i.push(d(r));
                        return i.join("")
                    }
                    function g(t) {
                        for (var e, n = t.length, i = n % 3, o = [], a = 16383, s = 0, l = n - i; s < l; s += a)
                            o.push(p(t, s, s + a > l ? l : s + a));
                        return 1 === i ? (e = t[n - 1],
                        o.push("".concat(r[e >> 2] + r[e << 4 & 63], "=="))) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1],
                        o.push("".concat(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63], "="))),
                        o.join("")
                    }
                    i["-".charCodeAt(0)] = 62,
                    i["_".charCodeAt(0)] = 63
                }
                , {}],
                2: [function(t, e, n) {
                    (function(e) {
                        var r = t("base64-js")
                          , i = t("ieee754");
                        n.Buffer = e,
                        n.SlowBuffer = y,
                        n.INSPECT_MAX_BYTES = 50;
                        var o = 2147483647;
                        function a() {
                            try {
                                var t = new Uint8Array(1);
                                return t.__proto__ = {
                                    __proto__: Uint8Array.prototype,
                                    foo: function() {
                                        return 42
                                    }
                                },
                                42 === t.foo()
                            } catch (a) {
                                return !1
                            }
                        }
                        function s(t) {
                            if (t > o)
                                throw new RangeError('The value "'.concat(t, '" is invalid for option "size"'));
                            var n = new Uint8Array(t);
                            return n.__proto__ = e.prototype,
                            n
                        }
                        function e(t, e, n) {
                            if ("number" === typeof t) {
                                if ("string" === typeof e)
                                    throw new TypeError('The "string" argument must be of type string. Received type number');
                                return f(t)
                            }
                            return l(t, e, n)
                        }
                        function l(t, n, r) {
                            if ("string" === typeof t)
                                return d(t, n);
                            if (ArrayBuffer.isView(t))
                                return p(t);
                            if (null == t)
                                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type ".concat((0,
                                h.Z)(t)));
                            if (Y(t, ArrayBuffer) || t && Y(t.buffer, ArrayBuffer))
                                return g(t, n, r);
                            if ("number" === typeof t)
                                throw new TypeError('The "value" argument must not be of type number. Received type number');
                            var i = t.valueOf && t.valueOf();
                            if (null != i && i !== t)
                                return e.from(i, n, r);
                            var o = v(t);
                            if (o)
                                return o;
                            if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive])
                                return e.from(t[Symbol.toPrimitive]("string"), n, r);
                            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type ".concat((0,
                            h.Z)(t)))
                        }
                        function c(t) {
                            if ("number" !== typeof t)
                                throw new TypeError('"size" argument must be of type number');
                            if (t < 0)
                                throw new RangeError('The value "'.concat(t, '" is invalid for option "size"'))
                        }
                        function u(t, e, n) {
                            return c(t),
                            t <= 0 ? s(t) : void 0 !== e ? "string" === typeof n ? s(t).fill(e, n) : s(t).fill(e) : s(t)
                        }
                        function f(t) {
                            return c(t),
                            s(t < 0 ? 0 : 0 | m(t))
                        }
                        function d(t, n) {
                            if ("string" === typeof n && "" !== n || (n = "utf8"),
                            !e.isEncoding(n))
                                throw new TypeError("Unknown encoding: ".concat(n));
                            var r = 0 | A(t, n)
                              , i = s(r)
                              , o = i.write(t, n);
                            return o !== r && (i = i.slice(0, o)),
                            i
                        }
                        function p(t) {
                            for (var e = t.length < 0 ? 0 : 0 | m(t.length), n = s(e), r = 0; r < e; r += 1)
                                n[r] = 255 & t[r];
                            return n
                        }
                        function g(t, n, r) {
                            if (n < 0 || t.byteLength < n)
                                throw new RangeError('"offset" is outside of buffer bounds');
                            if (t.byteLength < n + (r || 0))
                                throw new RangeError('"length" is outside of buffer bounds');
                            var i;
                            return i = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,n) : new Uint8Array(t,n,r),
                            i.__proto__ = e.prototype,
                            i
                        }
                        function v(t) {
                            if (e.isBuffer(t)) {
                                var n = 0 | m(t.length)
                                  , r = s(n);
                                return 0 === r.length || t.copy(r, 0, 0, n),
                                r
                            }
                            return void 0 !== t.length ? "number" !== typeof t.length || q(t.length) ? s(0) : p(t) : "Buffer" === t.type && Array.isArray(t.data) ? p(t.data) : void 0
                        }
                        function m(t) {
                            if (t >= o)
                                throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x".concat(o.toString(16), " bytes"));
                            return 0 | t
                        }
                        function y(t) {
                            return +t != t && (t = 0),
                            e.alloc(+t)
                        }
                        function A(t, n) {
                            if (e.isBuffer(t))
                                return t.length;
                            if (ArrayBuffer.isView(t) || Y(t, ArrayBuffer))
                                return t.byteLength;
                            if ("string" !== typeof t)
                                throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type ".concat((0,
                                h.Z)(t)));
                            var r = t.length
                              , i = arguments.length > 2 && !0 === arguments[2];
                            if (!i && 0 === r)
                                return 0;
                            for (var o = !1; ; )
                                switch (n) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return r;
                                case "utf8":
                                case "utf-8":
                                    return K(t).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * r;
                                case "hex":
                                    return r >>> 1;
                                case "base64":
                                    return j(t).length;
                                default:
                                    if (o)
                                        return i ? -1 : K(t).length;
                                    n = "".concat(n).toLowerCase(),
                                    o = !0
                                }
                        }
                        function w(t, e, n) {
                            var r = !1;
                            if ((void 0 === e || e < 0) && (e = 0),
                            e > this.length)
                                return "";
                            if ((void 0 === n || n > this.length) && (n = this.length),
                            n <= 0)
                                return "";
                            if (n >>>= 0,
                            e >>>= 0,
                            n <= e)
                                return "";
                            t || (t = "utf8");
                            while (1)
                                switch (t) {
                                case "hex":
                                    return D(this, e, n);
                                case "utf8":
                                case "utf-8":
                                    return M(this, e, n);
                                case "ascii":
                                    return R(this, e, n);
                                case "latin1":
                                case "binary":
                                    return P(this, e, n);
                                case "base64":
                                    return O(this, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return F(this, e, n);
                                default:
                                    if (r)
                                        throw new TypeError("Unknown encoding: ".concat(t));
                                    t = "".concat(t).toLowerCase(),
                                    r = !0
                                }
                        }
                        function b(t, e, n) {
                            var r = t[e];
                            t[e] = t[n],
                            t[n] = r
                        }
                        function S(t, n, r, i, o) {
                            if (0 === t.length)
                                return -1;
                            if ("string" === typeof r ? (i = r,
                            r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648),
                            r = +r,
                            q(r) && (r = o ? 0 : t.length - 1),
                            r < 0 && (r = t.length + r),
                            r >= t.length) {
                                if (o)
                                    return -1;
                                r = t.length - 1
                            } else if (r < 0) {
                                if (!o)
                                    return -1;
                                r = 0
                            }
                            if ("string" === typeof n && (n = e.from(n, i)),
                            e.isBuffer(n))
                                return 0 === n.length ? -1 : C(t, n, r, i, o);
                            if ("number" === typeof n)
                                return n &= 255,
                                "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, n, r) : Uint8Array.prototype.lastIndexOf.call(t, n, r) : C(t, [n], r, i, o);
                            throw new TypeError("val must be string, number or Buffer")
                        }
                        function C(t, e, n, r, i) {
                            var o, a = 1, s = t.length, l = e.length;
                            if (void 0 !== r && (r = String(r).toLowerCase(),
                            "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                if (t.length < 2 || e.length < 2)
                                    return -1;
                                a = 2,
                                s /= 2,
                                l /= 2,
                                n /= 2
                            }
                            function c(t, e) {
                                return 1 === a ? t[e] : t.readUInt16BE(e * a)
                            }
                            if (i) {
                                var u = -1;
                                for (o = n; o < s; o++)
                                    if (c(t, o) === c(e, -1 === u ? 0 : o - u)) {
                                        if (-1 === u && (u = o),
                                        o - u + 1 === l)
                                            return u * a
                                    } else
                                        -1 !== u && (o -= o - u),
                                        u = -1
                            } else
                                for (n + l > s && (n = s - l),
                                o = n; o >= 0; o--) {
                                    for (var h = !0, f = 0; f < l; f++)
                                        if (c(t, o + f) !== c(e, f)) {
                                            h = !1;
                                            break
                                        }
                                    if (h)
                                        return o
                                }
                            return -1
                        }
                        function E(t, e, n, r) {
                            n = Number(n) || 0;
                            var i = t.length - n;
                            r ? (r = Number(r),
                            r > i && (r = i)) : r = i;
                            var o = e.length;
                            r > o / 2 && (r = o / 2);
                            for (var a = 0; a < r; ++a) {
                                var s = parseInt(e.substr(2 * a, 2), 16);
                                if (q(s))
                                    return a;
                                t[n + a] = s
                            }
                            return a
                        }
                        function x(t, e, n, r) {
                            return Z(K(e, t.length - n), t, n, r)
                        }
                        function k(t, e, n, r) {
                            return Z(X(e), t, n, r)
                        }
                        function L(t, e, n, r) {
                            return k(t, e, n, r)
                        }
                        function T(t, e, n, r) {
                            return Z(j(e), t, n, r)
                        }
                        function I(t, e, n, r) {
                            return Z(G(e, t.length - n), t, n, r)
                        }
                        function O(t, e, n) {
                            return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                        }
                        function M(t, e, n) {
                            n = Math.min(t.length, n);
                            var r = []
                              , i = e;
                            while (i < n) {
                                var o, a, s, l, c = t[i], u = null, h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                if (i + h <= n)
                                    switch (h) {
                                    case 1:
                                        c < 128 && (u = c);
                                        break;
                                    case 2:
                                        o = t[i + 1],
                                        128 === (192 & o) && (l = (31 & c) << 6 | 63 & o,
                                        l > 127 && (u = l));
                                        break;
                                    case 3:
                                        o = t[i + 1],
                                        a = t[i + 2],
                                        128 === (192 & o) && 128 === (192 & a) && (l = (15 & c) << 12 | (63 & o) << 6 | 63 & a,
                                        l > 2047 && (l < 55296 || l > 57343) && (u = l));
                                        break;
                                    case 4:
                                        o = t[i + 1],
                                        a = t[i + 2],
                                        s = t[i + 3],
                                        128 === (192 & o) && 128 === (192 & a) && 128 === (192 & s) && (l = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s,
                                        l > 65535 && l < 1114112 && (u = l))
                                    }
                                null === u ? (u = 65533,
                                h = 1) : u > 65535 && (u -= 65536,
                                r.push(u >>> 10 & 1023 | 55296),
                                u = 56320 | 1023 & u),
                                r.push(u),
                                i += h
                            }
                            return B(r)
                        }
                        n.kMaxLength = o,
                        e.TYPED_ARRAY_SUPPORT = a(),
                        e.TYPED_ARRAY_SUPPORT,
                        Object.defineProperty(e.prototype, "parent", {
                            enumerable: !0,
                            get: function() {
                                if (e.isBuffer(this))
                                    return this.buffer
                            }
                        }),
                        Object.defineProperty(e.prototype, "offset", {
                            enumerable: !0,
                            get: function() {
                                if (e.isBuffer(this))
                                    return this.byteOffset
                            }
                        }),
                        "undefined" !== typeof Symbol && null != Symbol.species && e[Symbol.species] === e && Object.defineProperty(e, Symbol.species, {
                            value: null,
                            configurable: !0,
                            enumerable: !1,
                            writable: !1
                        }),
                        e.poolSize = 8192,
                        e.from = function(t, e, n) {
                            return l(t, e, n)
                        }
                        ,
                        e.prototype.__proto__ = Uint8Array.prototype,
                        e.__proto__ = Uint8Array,
                        e.alloc = function(t, e, n) {
                            return u(t, e, n)
                        }
                        ,
                        e.allocUnsafe = function(t) {
                            return f(t)
                        }
                        ,
                        e.allocUnsafeSlow = function(t) {
                            return f(t)
                        }
                        ,
                        e.isBuffer = function(t) {
                            return null != t && !0 === t._isBuffer && t !== e.prototype
                        }
                        ,
                        e.compare = function(t, n) {
                            if (Y(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                            Y(n, Uint8Array) && (n = e.from(n, n.offset, n.byteLength)),
                            !e.isBuffer(t) || !e.isBuffer(n))
                                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                            if (t === n)
                                return 0;
                            for (var r = t.length, i = n.length, o = 0, a = Math.min(r, i); o < a; ++o)
                                if (t[o] !== n[o]) {
                                    r = t[o],
                                    i = n[o];
                                    break
                                }
                            return r < i ? -1 : i < r ? 1 : 0
                        }
                        ,
                        e.isEncoding = function(t) {
                            switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                            }
                        }
                        ,
                        e.concat = function(t, n) {
                            if (!Array.isArray(t))
                                throw new TypeError('"list" argument must be an Array of Buffers');
                            if (0 === t.length)
                                return e.alloc(0);
                            var r;
                            if (void 0 === n)
                                for (n = 0,
                                r = 0; r < t.length; ++r)
                                    n += t[r].length;
                            var i = e.allocUnsafe(n)
                              , o = 0;
                            for (r = 0; r < t.length; ++r) {
                                var a = t[r];
                                if (Y(a, Uint8Array) && (a = e.from(a)),
                                !e.isBuffer(a))
                                    throw new TypeError('"list" argument must be an Array of Buffers');
                                a.copy(i, o),
                                o += a.length
                            }
                            return i
                        }
                        ,
                        e.byteLength = A,
                        e.prototype._isBuffer = !0,
                        e.prototype.swap16 = function() {
                            var t = this.length;
                            if (t % 2 !== 0)
                                throw new RangeError("Buffer size must be a multiple of 16-bits");
                            for (var e = 0; e < t; e += 2)
                                b(this, e, e + 1);
                            return this
                        }
                        ,
                        e.prototype.swap32 = function() {
                            var t = this.length;
                            if (t % 4 !== 0)
                                throw new RangeError("Buffer size must be a multiple of 32-bits");
                            for (var e = 0; e < t; e += 4)
                                b(this, e, e + 3),
                                b(this, e + 1, e + 2);
                            return this
                        }
                        ,
                        e.prototype.swap64 = function() {
                            var t = this.length;
                            if (t % 8 !== 0)
                                throw new RangeError("Buffer size must be a multiple of 64-bits");
                            for (var e = 0; e < t; e += 8)
                                b(this, e, e + 7),
                                b(this, e + 1, e + 6),
                                b(this, e + 2, e + 5),
                                b(this, e + 3, e + 4);
                            return this
                        }
                        ,
                        e.prototype.toString = function() {
                            var t = this.length;
                            return 0 === t ? "" : 0 === arguments.length ? M(this, 0, t) : w.apply(this, arguments)
                        }
                        ,
                        e.prototype.toLocaleString = e.prototype.toString,
                        e.prototype.equals = function(t) {
                            if (!e.isBuffer(t))
                                throw new TypeError("Argument must be a Buffer");
                            return this === t || 0 === e.compare(this, t)
                        }
                        ,
                        e.prototype.inspect = function() {
                            var t = ""
                              , e = n.INSPECT_MAX_BYTES;
                            return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(),
                            this.length > e && (t += " ... "),
                            "<Buffer ".concat(t, ">")
                        }
                        ,
                        e.prototype.compare = function(t, n, r, i, o) {
                            if (Y(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                            !e.isBuffer(t))
                                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type ".concat((0,
                                h.Z)(t)));
                            if (void 0 === n && (n = 0),
                            void 0 === r && (r = t ? t.length : 0),
                            void 0 === i && (i = 0),
                            void 0 === o && (o = this.length),
                            n < 0 || r > t.length || i < 0 || o > this.length)
                                throw new RangeError("out of range index");
                            if (i >= o && n >= r)
                                return 0;
                            if (i >= o)
                                return -1;
                            if (n >= r)
                                return 1;
                            if (n >>>= 0,
                            r >>>= 0,
                            i >>>= 0,
                            o >>>= 0,
                            this === t)
                                return 0;
                            for (var a = o - i, s = r - n, l = Math.min(a, s), c = this.slice(i, o), u = t.slice(n, r), f = 0; f < l; ++f)
                                if (c[f] !== u[f]) {
                                    a = c[f],
                                    s = u[f];
                                    break
                                }
                            return a < s ? -1 : s < a ? 1 : 0
                        }
                        ,
                        e.prototype.includes = function(t, e, n) {
                            return -1 !== this.indexOf(t, e, n)
                        }
                        ,
                        e.prototype.indexOf = function(t, e, n) {
                            return S(this, t, e, n, !0)
                        }
                        ,
                        e.prototype.lastIndexOf = function(t, e, n) {
                            return S(this, t, e, n, !1)
                        }
                        ,
                        e.prototype.write = function(t, e, n, r) {
                            if (void 0 === e)
                                r = "utf8",
                                n = this.length,
                                e = 0;
                            else if (void 0 === n && "string" === typeof e)
                                r = e,
                                n = this.length,
                                e = 0;
                            else {
                                if (!isFinite(e))
                                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                e >>>= 0,
                                isFinite(n) ? (n >>>= 0,
                                void 0 === r && (r = "utf8")) : (r = n,
                                n = void 0)
                            }
                            var i = this.length - e;
                            if ((void 0 === n || n > i) && (n = i),
                            t.length > 0 && (n < 0 || e < 0) || e > this.length)
                                throw new RangeError("Attempt to write outside buffer bounds");
                            r || (r = "utf8");
                            for (var o = !1; ; )
                                switch (r) {
                                case "hex":
                                    return E(this, t, e, n);
                                case "utf8":
                                case "utf-8":
                                    return x(this, t, e, n);
                                case "ascii":
                                    return k(this, t, e, n);
                                case "latin1":
                                case "binary":
                                    return L(this, t, e, n);
                                case "base64":
                                    return T(this, t, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return I(this, t, e, n);
                                default:
                                    if (o)
                                        throw new TypeError("Unknown encoding: ".concat(r));
                                    r = "".concat(r).toLowerCase(),
                                    o = !0
                                }
                        }
                        ,
                        e.prototype.toJSON = function() {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        }
                        ;
                        var N = 4096;
                        function B(t) {
                            var e = t.length;
                            if (e <= N)
                                return String.fromCharCode.apply(String, t);
                            var n = ""
                              , r = 0;
                            while (r < e)
                                n += String.fromCharCode.apply(String, t.slice(r, r += N));
                            return n
                        }
                        function R(t, e, n) {
                            var r = "";
                            n = Math.min(t.length, n);
                            for (var i = e; i < n; ++i)
                                r += String.fromCharCode(127 & t[i]);
                            return r
                        }
                        function P(t, e, n) {
                            var r = "";
                            n = Math.min(t.length, n);
                            for (var i = e; i < n; ++i)
                                r += String.fromCharCode(t[i]);
                            return r
                        }
                        function D(t, e, n) {
                            var r = t.length;
                            (!e || e < 0) && (e = 0),
                            (!n || n < 0 || n > r) && (n = r);
                            for (var i = "", o = e; o < n; ++o)
                                i += z(t[o]);
                            return i
                        }
                        function F(t, e, n) {
                            for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2)
                                i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                            return i
                        }
                        function _(t, e, n) {
                            if (t % 1 !== 0 || t < 0)
                                throw new RangeError("offset is not uint");
                            if (t + e > n)
                                throw new RangeError("Trying to access beyond buffer length")
                        }
                        function U(t, n, r, i, o, a) {
                            if (!e.isBuffer(t))
                                throw new TypeError('"buffer" argument must be a Buffer instance');
                            if (n > o || n < a)
                                throw new RangeError('"value" argument is out of bounds');
                            if (r + i > t.length)
                                throw new RangeError("Index out of range")
                        }
                        function W(t, e, n, r, i, o) {
                            if (n + r > t.length)
                                throw new RangeError("Index out of range");
                            if (n < 0)
                                throw new RangeError("Index out of range")
                        }
                        function Q(t, e, n, r, o) {
                            return e = +e,
                            n >>>= 0,
                            o || W(t, e, n, 4, 34028234663852886e22, -34028234663852886e22),
                            i.write(t, e, n, r, 23, 4),
                            n + 4
                        }
                        function H(t, e, n, r, o) {
                            return e = +e,
                            n >>>= 0,
                            o || W(t, e, n, 8, 17976931348623157e292, -17976931348623157e292),
                            i.write(t, e, n, r, 52, 8),
                            n + 8
                        }
                        e.prototype.slice = function(t, n) {
                            var r = this.length;
                            t = ~~t,
                            n = void 0 === n ? r : ~~n,
                            t < 0 ? (t += r,
                            t < 0 && (t = 0)) : t > r && (t = r),
                            n < 0 ? (n += r,
                            n < 0 && (n = 0)) : n > r && (n = r),
                            n < t && (n = t);
                            var i = this.subarray(t, n);
                            return i.__proto__ = e.prototype,
                            i
                        }
                        ,
                        e.prototype.readUIntLE = function(t, e, n) {
                            t >>>= 0,
                            e >>>= 0,
                            n || _(t, e, this.length);
                            var r = this[t]
                              , i = 1
                              , o = 0;
                            while (++o < e && (i *= 256))
                                r += this[t + o] * i;
                            return r
                        }
                        ,
                        e.prototype.readUIntBE = function(t, e, n) {
                            t >>>= 0,
                            e >>>= 0,
                            n || _(t, e, this.length);
                            var r = this[t + --e]
                              , i = 1;
                            while (e > 0 && (i *= 256))
                                r += this[t + --e] * i;
                            return r
                        }
                        ,
                        e.prototype.readUInt8 = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 1, this.length),
                            this[t]
                        }
                        ,
                        e.prototype.readUInt16LE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 2, this.length),
                            this[t] | this[t + 1] << 8
                        }
                        ,
                        e.prototype.readUInt16BE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 2, this.length),
                            this[t] << 8 | this[t + 1]
                        }
                        ,
                        e.prototype.readUInt32LE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 4, this.length),
                            (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                        }
                        ,
                        e.prototype.readUInt32BE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 4, this.length),
                            16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                        }
                        ,
                        e.prototype.readIntLE = function(t, e, n) {
                            t >>>= 0,
                            e >>>= 0,
                            n || _(t, e, this.length);
                            var r = this[t]
                              , i = 1
                              , o = 0;
                            while (++o < e && (i *= 256))
                                r += this[t + o] * i;
                            return i *= 128,
                            r >= i && (r -= Math.pow(2, 8 * e)),
                            r
                        }
                        ,
                        e.prototype.readIntBE = function(t, e, n) {
                            t >>>= 0,
                            e >>>= 0,
                            n || _(t, e, this.length);
                            var r = e
                              , i = 1
                              , o = this[t + --r];
                            while (r > 0 && (i *= 256))
                                o += this[t + --r] * i;
                            return i *= 128,
                            o >= i && (o -= Math.pow(2, 8 * e)),
                            o
                        }
                        ,
                        e.prototype.readInt8 = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 1, this.length),
                            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                        }
                        ,
                        e.prototype.readInt16LE = function(t, e) {
                            t >>>= 0,
                            e || _(t, 2, this.length);
                            var n = this[t] | this[t + 1] << 8;
                            return 32768 & n ? 4294901760 | n : n
                        }
                        ,
                        e.prototype.readInt16BE = function(t, e) {
                            t >>>= 0,
                            e || _(t, 2, this.length);
                            var n = this[t + 1] | this[t] << 8;
                            return 32768 & n ? 4294901760 | n : n
                        }
                        ,
                        e.prototype.readInt32LE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 4, this.length),
                            this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                        }
                        ,
                        e.prototype.readInt32BE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 4, this.length),
                            this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                        }
                        ,
                        e.prototype.readFloatLE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 4, this.length),
                            i.read(this, t, !0, 23, 4)
                        }
                        ,
                        e.prototype.readFloatBE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 4, this.length),
                            i.read(this, t, !1, 23, 4)
                        }
                        ,
                        e.prototype.readDoubleLE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 8, this.length),
                            i.read(this, t, !0, 52, 8)
                        }
                        ,
                        e.prototype.readDoubleBE = function(t, e) {
                            return t >>>= 0,
                            e || _(t, 8, this.length),
                            i.read(this, t, !1, 52, 8)
                        }
                        ,
                        e.prototype.writeUIntLE = function(t, e, n, r) {
                            if (t = +t,
                            e >>>= 0,
                            n >>>= 0,
                            !r) {
                                var i = Math.pow(2, 8 * n) - 1;
                                U(this, t, e, n, i, 0)
                            }
                            var o = 1
                              , a = 0;
                            this[e] = 255 & t;
                            while (++a < n && (o *= 256))
                                this[e + a] = t / o & 255;
                            return e + n
                        }
                        ,
                        e.prototype.writeUIntBE = function(t, e, n, r) {
                            if (t = +t,
                            e >>>= 0,
                            n >>>= 0,
                            !r) {
                                var i = Math.pow(2, 8 * n) - 1;
                                U(this, t, e, n, i, 0)
                            }
                            var o = n - 1
                              , a = 1;
                            this[e + o] = 255 & t;
                            while (--o >= 0 && (a *= 256))
                                this[e + o] = t / a & 255;
                            return e + n
                        }
                        ,
                        e.prototype.writeUInt8 = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 1, 255, 0),
                            this[e] = 255 & t,
                            e + 1
                        }
                        ,
                        e.prototype.writeUInt16LE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 2, 65535, 0),
                            this[e] = 255 & t,
                            this[e + 1] = t >>> 8,
                            e + 2
                        }
                        ,
                        e.prototype.writeUInt16BE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 2, 65535, 0),
                            this[e] = t >>> 8,
                            this[e + 1] = 255 & t,
                            e + 2
                        }
                        ,
                        e.prototype.writeUInt32LE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 4, 4294967295, 0),
                            this[e + 3] = t >>> 24,
                            this[e + 2] = t >>> 16,
                            this[e + 1] = t >>> 8,
                            this[e] = 255 & t,
                            e + 4
                        }
                        ,
                        e.prototype.writeUInt32BE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 4, 4294967295, 0),
                            this[e] = t >>> 24,
                            this[e + 1] = t >>> 16,
                            this[e + 2] = t >>> 8,
                            this[e + 3] = 255 & t,
                            e + 4
                        }
                        ,
                        e.prototype.writeIntLE = function(t, e, n, r) {
                            if (t = +t,
                            e >>>= 0,
                            !r) {
                                var i = Math.pow(2, 8 * n - 1);
                                U(this, t, e, n, i - 1, -i)
                            }
                            var o = 0
                              , a = 1
                              , s = 0;
                            this[e] = 255 & t;
                            while (++o < n && (a *= 256))
                                t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
                                this[e + o] = (t / a >> 0) - s & 255;
                            return e + n
                        }
                        ,
                        e.prototype.writeIntBE = function(t, e, n, r) {
                            if (t = +t,
                            e >>>= 0,
                            !r) {
                                var i = Math.pow(2, 8 * n - 1);
                                U(this, t, e, n, i - 1, -i)
                            }
                            var o = n - 1
                              , a = 1
                              , s = 0;
                            this[e + o] = 255 & t;
                            while (--o >= 0 && (a *= 256))
                                t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
                                this[e + o] = (t / a >> 0) - s & 255;
                            return e + n
                        }
                        ,
                        e.prototype.writeInt8 = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 1, 127, -128),
                            t < 0 && (t = 255 + t + 1),
                            this[e] = 255 & t,
                            e + 1
                        }
                        ,
                        e.prototype.writeInt16LE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 2, 32767, -32768),
                            this[e] = 255 & t,
                            this[e + 1] = t >>> 8,
                            e + 2
                        }
                        ,
                        e.prototype.writeInt16BE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 2, 32767, -32768),
                            this[e] = t >>> 8,
                            this[e + 1] = 255 & t,
                            e + 2
                        }
                        ,
                        e.prototype.writeInt32LE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 4, 2147483647, -2147483648),
                            this[e] = 255 & t,
                            this[e + 1] = t >>> 8,
                            this[e + 2] = t >>> 16,
                            this[e + 3] = t >>> 24,
                            e + 4
                        }
                        ,
                        e.prototype.writeInt32BE = function(t, e, n) {
                            return t = +t,
                            e >>>= 0,
                            n || U(this, t, e, 4, 2147483647, -2147483648),
                            t < 0 && (t = 4294967295 + t + 1),
                            this[e] = t >>> 24,
                            this[e + 1] = t >>> 16,
                            this[e + 2] = t >>> 8,
                            this[e + 3] = 255 & t,
                            e + 4
                        }
                        ,
                        e.prototype.writeFloatLE = function(t, e, n) {
                            return Q(this, t, e, !0, n)
                        }
                        ,
                        e.prototype.writeFloatBE = function(t, e, n) {
                            return Q(this, t, e, !1, n)
                        }
                        ,
                        e.prototype.writeDoubleLE = function(t, e, n) {
                            return H(this, t, e, !0, n)
                        }
                        ,
                        e.prototype.writeDoubleBE = function(t, e, n) {
                            return H(this, t, e, !1, n)
                        }
                        ,
                        e.prototype.copy = function(t, n, r, i) {
                            if (!e.isBuffer(t))
                                throw new TypeError("argument should be a Buffer");
                            if (r || (r = 0),
                            i || 0 === i || (i = this.length),
                            n >= t.length && (n = t.length),
                            n || (n = 0),
                            i > 0 && i < r && (i = r),
                            i === r)
                                return 0;
                            if (0 === t.length || 0 === this.length)
                                return 0;
                            if (n < 0)
                                throw new RangeError("targetStart out of bounds");
                            if (r < 0 || r >= this.length)
                                throw new RangeError("Index out of range");
                            if (i < 0)
                                throw new RangeError("sourceEnd out of bounds");
                            i > this.length && (i = this.length),
                            t.length - n < i - r && (i = t.length - n + r);
                            var o = i - r;
                            if (this === t && "function" === typeof Uint8Array.prototype.copyWithin)
                                this.copyWithin(n, r, i);
                            else if (this === t && r < n && n < i)
                                for (var a = o - 1; a >= 0; --a)
                                    t[a + n] = this[a + r];
                            else
                                Uint8Array.prototype.set.call(t, this.subarray(r, i), n);
                            return o
                        }
                        ,
                        e.prototype.fill = function(t, n, r, i) {
                            if ("string" === typeof t) {
                                if ("string" === typeof n ? (i = n,
                                n = 0,
                                r = this.length) : "string" === typeof r && (i = r,
                                r = this.length),
                                void 0 !== i && "string" !== typeof i)
                                    throw new TypeError("encoding must be a string");
                                if ("string" === typeof i && !e.isEncoding(i))
                                    throw new TypeError("Unknown encoding: ".concat(i));
                                if (1 === t.length) {
                                    var o = t.charCodeAt(0);
                                    ("utf8" === i && o < 128 || "latin1" === i) && (t = o)
                                }
                            } else
                                "number" === typeof t && (t &= 255);
                            if (n < 0 || this.length < n || this.length < r)
                                throw new RangeError("Out of range index");
                            if (r <= n)
                                return this;
                            var a;
                            if (n >>>= 0,
                            r = void 0 === r ? this.length : r >>> 0,
                            t || (t = 0),
                            "number" === typeof t)
                                for (a = n; a < r; ++a)
                                    this[a] = t;
                            else {
                                var s = e.isBuffer(t) ? t : e.from(t, i)
                                  , l = s.length;
                                if (0 === l)
                                    throw new TypeError('The value "'.concat(t, '" is invalid for argument "value"'));
                                for (a = 0; a < r - n; ++a)
                                    this[a + n] = s[a % l]
                            }
                            return this
                        }
                        ;
                        var J = /[^+/0-9A-Za-z-_]/g;
                        function V(t) {
                            if (t = t.split("=")[0],
                            t = t.trim().replace(J, ""),
                            t.length < 2)
                                return "";
                            while (t.length % 4 !== 0)
                                t += "=";
                            return t
                        }
                        function z(t) {
                            return t < 16 ? "0".concat(t.toString(16)) : t.toString(16)
                        }
                        function K(t, e) {
                            var n;
                            e = e || 1 / 0;
                            for (var r = t.length, i = null, o = [], a = 0; a < r; ++a) {
                                if (n = t.charCodeAt(a),
                                n > 55295 && n < 57344) {
                                    if (!i) {
                                        if (n > 56319) {
                                            (e -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        if (a + 1 === r) {
                                            (e -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        i = n;
                                        continue
                                    }
                                    if (n < 56320) {
                                        (e -= 3) > -1 && o.push(239, 191, 189),
                                        i = n;
                                        continue
                                    }
                                    n = 65536 + (i - 55296 << 10 | n - 56320)
                                } else
                                    i && (e -= 3) > -1 && o.push(239, 191, 189);
                                if (i = null,
                                n < 128) {
                                    if ((e -= 1) < 0)
                                        break;
                                    o.push(n)
                                } else if (n < 2048) {
                                    if ((e -= 2) < 0)
                                        break;
                                    o.push(n >> 6 | 192, 63 & n | 128)
                                } else if (n < 65536) {
                                    if ((e -= 3) < 0)
                                        break;
                                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                } else {
                                    if (!(n < 1114112))
                                        throw new Error("Invalid code point");
                                    if ((e -= 4) < 0)
                                        break;
                                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                }
                            }
                            return o
                        }
                        function X(t) {
                            for (var e = [], n = 0; n < t.length; ++n)
                                e.push(255 & t.charCodeAt(n));
                            return e
                        }
                        function G(t, e) {
                            for (var n, r, i, o = [], a = 0; a < t.length; ++a) {
                                if ((e -= 2) < 0)
                                    break;
                                n = t.charCodeAt(a),
                                r = n >> 8,
                                i = n % 256,
                                o.push(i),
                                o.push(r)
                            }
                            return o
                        }
                        function j(t) {
                            return r.toByteArray(V(t))
                        }
                        function Z(t, e, n, r) {
                            for (var i = 0; i < r; ++i) {
                                if (i + n >= e.length || i >= t.length)
                                    break;
                                e[i + n] = t[i]
                            }
                            return i
                        }
                        function Y(t, e) {
                            return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
                        }
                        function q(t) {
                            return t !== t
                        }
                    }
                    ).call(this, t("buffer").Buffer)
                }
                , {
                    "base64-js": 1,
                    buffer: 2,
                    ieee754: 3
                }],
                3: [function(t, e, n) {
                    n.read = function(t, e, n, r, i) {
                        var o, a, s = 8 * i - r - 1, l = (1 << s) - 1, c = l >> 1, u = -7, h = n ? i - 1 : 0, f = n ? -1 : 1, d = t[e + h];
                        for (h += f,
                        o = d & (1 << -u) - 1,
                        d >>= -u,
                        u += s; u > 0; o = 256 * o + t[e + h],
                        h += f,
                        u -= 8)
                            ;
                        for (a = o & (1 << -u) - 1,
                        o >>= -u,
                        u += r; u > 0; a = 256 * a + t[e + h],
                        h += f,
                        u -= 8)
                            ;
                        if (0 === o)
                            o = 1 - c;
                        else {
                            if (o === l)
                                return a ? NaN : 1 / 0 * (d ? -1 : 1);
                            a += Math.pow(2, r),
                            o -= c
                        }
                        return (d ? -1 : 1) * a * Math.pow(2, o - r)
                    }
                    ,
                    n.write = function(t, e, n, r, i, o) {
                        var a, s, l, c = 8 * o - i - 1, u = (1 << c) - 1, h = u >> 1, f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = r ? 0 : o - 1, p = r ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                        for (e = Math.abs(e),
                        isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0,
                        a = u) : (a = Math.floor(Math.log(e) / Math.LN2),
                        e * (l = Math.pow(2, -a)) < 1 && (a--,
                        l *= 2),
                        e += a + h >= 1 ? f / l : f * Math.pow(2, 1 - h),
                        e * l >= 2 && (a++,
                        l /= 2),
                        a + h >= u ? (s = 0,
                        a = u) : a + h >= 1 ? (s = (e * l - 1) * Math.pow(2, i),
                        a += h) : (s = e * Math.pow(2, h - 1) * Math.pow(2, i),
                        a = 0)); i >= 8; t[n + d] = 255 & s,
                        d += p,
                        s /= 256,
                        i -= 8)
                            ;
                        for (a = a << i | s,
                        c += i; c > 0; t[n + d] = 255 & a,
                        d += p,
                        a /= 256,
                        c -= 8)
                            ;
                        t[n + d - p] |= 128 * g
                    }
                }
                , {}],
                4: [function(e, n, r) {
                    !function(e, n) {
                        if ("function" === typeof t && t.amd)
                            t("Hashids", ["exports"], n);
                        else if ("undefined" !== typeof r)
                            n(r);
                        else {
                            var i = {
                                exports: {}
                            };
                            n(i.exports),
                            e.Hashids = i.exports
                        }
                    }("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : this, (function(t) {
                        function e(t) {
                            return function(t) {
                                if (Array.isArray(t)) {
                                    for (var e = 0, n = new Array(t.length); e < t.length; e++)
                                        n[e] = t[e];
                                    return n
                                }
                            }(t) || function(t) {
                                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))
                                    return Array.from(t)
                            }(t) || function() {
                                throw new TypeError("Invalid attempt to spread non-iterable instance")
                            }()
                        }
                        t.__esModule = !0,
                        t.onlyChars = t.withoutChars = t.keepUnique = t.default = void 0;
                        var n = function() {
                            function t(t, n, c, u) {
                                if (void 0 === t && (t = ""),
                                void 0 === n && (n = 0),
                                void 0 === c && (c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"),
                                void 0 === u && (u = "cfhistuCFHISTU"),
                                this.minLength = n,
                                "number" !== typeof n)
                                    throw new TypeError("Hashids: Provided 'minLength' has to be a number (is ".concat((0,
                                    h.Z)(n), ")"));
                                if ("string" !== typeof t)
                                    throw new TypeError("Hashids: Provided 'salt' has to be a string (is ".concat((0,
                                    h.Z)(t), ")"));
                                if ("string" !== typeof c)
                                    throw new TypeError("Hashids: Provided alphabet has to be a string (is ".concat((0,
                                    h.Z)(c), ")"));
                                var d = Array.from(t)
                                  , p = Array.from(c)
                                  , g = Array.from(u);
                                this.salt = d;
                                var v, m, w, b = a(p);
                                if (b.length < r)
                                    throw new Error("Hashids: alphabet must contain at least ".concat(r, " unique characters, provided: ").concat(b));
                                this.alphabet = s(b, g);
                                var S = l(g, b);
                                this.seps = f(S, d),
                                (0 === this.seps.length || this.alphabet.length / this.seps.length > i) && (v = Math.ceil(this.alphabet.length / i)) > this.seps.length && (m = v - this.seps.length,
                                (w = this.seps).push.apply(w, e(this.alphabet.slice(0, m))),
                                this.alphabet = this.alphabet.slice(m)),
                                this.alphabet = f(this.alphabet, d);
                                var C = Math.ceil(this.alphabet.length / o);
                                this.alphabet.length < 3 ? (this.guards = this.seps.slice(0, C),
                                this.seps = this.seps.slice(C)) : (this.guards = this.alphabet.slice(0, C),
                                this.alphabet = this.alphabet.slice(C)),
                                this.guardsRegExp = y(this.guards),
                                this.sepsRegExp = y(this.seps),
                                this.allowedCharsRegExp = A([].concat(e(this.alphabet), e(this.guards), e(this.seps)))
                            }
                            var n = t.prototype;
                            return n.encode = function(t) {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                                    r[i - 1] = arguments[i];
                                var o = "";
                                return (r = Array.isArray(t) ? t : [].concat(e(null != t ? [t] : []), e(r))).length ? (r.every(c) || (r = r.map((function(t) {
                                    return "bigint" === typeof t || "number" === typeof t ? t : v(String(t))
                                }
                                ))),
                                r.every(u) ? this._encode(r).join("") : o) : o
                            }
                            ,
                            n.decode = function(t) {
                                return t && "string" === typeof t && 0 !== t.length ? this._decode(t) : []
                            }
                            ,
                            n.encodeHex = function(t) {
                                switch ((0,
                                h.Z)(t)) {
                                case "bigint":
                                    t = t.toString(16);
                                    break;
                                case "string":
                                    if (!/^[0-9a-fA-F]+$/.test(t))
                                        return "";
                                    break;
                                default:
                                    throw new Error("Hashids: The provided value is neither a string, nor a BigInt (got: ".concat((0,
                                    h.Z)(t), ")"))
                                }
                                var e = m(t, 12, (function(t) {
                                    return parseInt("1".concat(t), 16)
                                }
                                ));
                                return this.encode(e)
                            }
                            ,
                            n.decodeHex = function(t) {
                                return this.decode(t).map((function(t) {
                                    return t.toString(16).slice(1)
                                }
                                )).join("")
                            }
                            ,
                            n._encode = function(t) {
                                var n = this
                                  , r = this.alphabet
                                  , i = t.reduce((function(t, e, n) {
                                    return t + ("bigint" == typeof e ? Number(e % BigInt(n + 100)) : e % (n + 100))
                                }
                                ), 0)
                                  , o = [r[i % r.length]]
                                  , a = o.slice()
                                  , s = this.seps
                                  , l = this.guards;
                                if (t.forEach((function(i, l) {
                                    var c, u = a.concat(n.salt, r);
                                    r = f(r, u);
                                    var h = d(i, r);
                                    if ((c = o).push.apply(c, e(h)),
                                    l + 1 < t.length) {
                                        var p = h[0].codePointAt(0) + l
                                          , g = "bigint" === typeof i ? Number(i % BigInt(p)) : i % p;
                                        o.push(s[g % s.length])
                                    }
                                }
                                )),
                                o.length < this.minLength) {
                                    var c = (i + o[0].codePointAt(0)) % l.length;
                                    if (o.unshift(l[c]),
                                    o.length < this.minLength) {
                                        var u = (i + o[2].codePointAt(0)) % l.length;
                                        o.push(l[u])
                                    }
                                }
                                for (var h = Math.floor(r.length / 2); o.length < this.minLength; ) {
                                    var p, g;
                                    r = f(r, r),
                                    (p = o).unshift.apply(p, e(r.slice(h))),
                                    (g = o).push.apply(g, e(r.slice(0, h)));
                                    var v = o.length - this.minLength;
                                    if (v > 0) {
                                        var m = v / 2;
                                        o = o.slice(m, m + this.minLength)
                                    }
                                }
                                return o
                            }
                            ,
                            n.isValidId = function(t) {
                                return this.allowedCharsRegExp.test(t)
                            }
                            ,
                            n._decode = function(t) {
                                if (!this.isValidId(t))
                                    throw new Error("The provided ID (".concat(t, ") is invalid, as it contains characters that do not exist in the alphabet (").concat(this.guards.join("")).concat(this.seps.join("")).concat(this.alphabet.join(""), ")"));
                                var n = t.split(this.guardsRegExp)
                                  , r = n[3 === n.length || 2 === n.length ? 1 : 0];
                                if (0 === r.length)
                                    return [];
                                var i = r[Symbol.iterator]().next().value
                                  , o = r.slice(i.length).split(this.sepsRegExp)
                                  , a = this.alphabet
                                  , s = []
                                  , l = o
                                  , c = Array.isArray(l)
                                  , u = 0;
                                for (l = c ? l : l[Symbol.iterator](); ; ) {
                                    var h;
                                    if (c) {
                                        if (u >= l.length)
                                            break;
                                        h = l[u++]
                                    } else {
                                        if ((u = l.next()).done)
                                            break;
                                        h = u.value
                                    }
                                    var d = h
                                      , g = f(a, [i].concat(e(this.salt), e(a)).slice(0, a.length));
                                    s.push(p(Array.from(d), g)),
                                    a = g
                                }
                                return this._encode(s).join("") !== t ? [] : s
                            }
                            ,
                            t
                        }();
                        t.default = n;
                        var r = 16
                          , i = 3.5
                          , o = 12
                          , a = function(t) {
                            return Array.from(new Set(t))
                        };
                        t.keepUnique = a;
                        var s = function(t, e) {
                            return t.filter((function(t) {
                                return !e.includes(t)
                            }
                            ))
                        };
                        t.withoutChars = s;
                        var l = function(t, e) {
                            return t.filter((function(t) {
                                return e.includes(t)
                            }
                            ))
                        };
                        t.onlyChars = l;
                        var c = function(t) {
                            return "bigint" === typeof t || !Number.isNaN(Number(t)) && Math.floor(Number(t)) === t
                        }
                          , u = function(t) {
                            return "bigint" === typeof t || t >= 0 && Number.isSafeInteger(t)
                        };
                        function f(t, e) {
                            if (0 === e.length)
                                return t;
                            for (var n, r = t.slice(), i = r.length - 1, o = 0, a = 0; i > 0; i--,
                            o++) {
                                a += n = e[o %= e.length].codePointAt(0);
                                var s = (n + o + a) % i
                                  , l = r[i]
                                  , c = r[s];
                                r[s] = l,
                                r[i] = c
                            }
                            return r
                        }
                        var d = function(t, e) {
                            var n = [];
                            if ("bigint" === typeof t) {
                                var r = BigInt(e.length);
                                do {
                                    n.unshift(e[Number(t % r)]),
                                    t /= r
                                } while (t > BigInt(0))
                            } else
                                do {
                                    n.unshift(e[t % e.length]),
                                    t = Math.floor(t / e.length)
                                } while (t > 0);
                            return n
                        }
                          , p = function(t, e) {
                            return t.reduce((function(n, r) {
                                var i = e.indexOf(r);
                                if (-1 === i)
                                    throw new Error("The provided ID (".concat(t.join(""), ") is invalid, as it contains characters that do not exist in the alphabet (").concat(e.join(""), ")"));
                                if ("bigint" === typeof n)
                                    return n * BigInt(e.length) + BigInt(i);
                                var o = n * e.length + i;
                                if (Number.isSafeInteger(o))
                                    return o;
                                if ("function" === typeof BigInt)
                                    return BigInt(n) * BigInt(e.length) + BigInt(i);
                                throw new Error("Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment")
                            }
                            ), 0)
                        }
                          , g = /^\+?[0-9]+$/
                          , v = function(t) {
                            return g.test(t) ? parseInt(t, 10) : NaN
                        }
                          , m = function(t, e, n) {
                            return Array.from({
                                length: Math.ceil(t.length / e)
                            }, (function(r, i) {
                                return n(t.slice(i * e, (i + 1) * e))
                            }
                            ))
                        }
                          , y = function(t) {
                            return new RegExp(t.map((function(t) {
                                return w(t)
                            }
                            )).sort((function(t, e) {
                                return e.length - t.length
                            }
                            )).join("|"))
                        }
                          , A = function(t) {
                            return new RegExp("^[".concat(t.map((function(t) {
                                return w(t)
                            }
                            )).sort((function(t, e) {
                                return e.length - t.length
                            }
                            )).join(""), "]+$"))
                        }
                          , w = function(t) {
                            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                        }
                    }
                    ))
                }
                , {}],
                5: [function(t, e, n) {
                    var r = t("./utils")
                      , i = {
                        UNKNOW: "UNKNOW",
                        PING: "PING",
                        HEART_BEAT: "HEART_BEAT",
                        SERVERMODE: "servermode",
                        CHECK: "check",
                        LOGIN: "login",
                        LOGOUT: "logout",
                        SERVERS: "servers",
                        GET_FTPMODE: "GET_FTPMODE",
                        UPLOAD: "upload",
                        UPDATE_CLIENT: "client_upload",
                        DOWNLOAD: "download",
                        DOWNLOADTO: "downloadto",
                        LS: "list",
                        MV: "mv",
                        RM: "remove",
                        RN: "rename",
                        MKDIR: "create_folder",
                        GET_TRANS_COUNT: "get_trans_count",
                        OPEN_TRANS_LIST: "open_trans_list",
                        START_UPDATE: "start_update",
                        CREATEURL: "CREATEURL",
                        SETURLCONF: "SETURLCONF",
                        GETURLINFO: "GETURLINFO",
                        CHECKURL: "CHECKURL",
                        CHECKPASSWD: "CHECKPASSWD",
                        MANUAL_TRANSFER: "MANUAL_TRANSFER",
                        LSIT_GROUP: "list_group",
                        MOVE: "move",
                        COPY: "copy",
                        GET_ATTRIBUTES: "get_attributes"
                    }
                      , o = {
                        UNKNOW: "UNKNOW",
                        PING: "PING",
                        HEART_BEAT: "HEART_BEAT",
                        SERVERMODE: "servermode",
                        CHECK: "check_response",
                        LOGIN: "login_response",
                        LOGOUT: "logout_response",
                        SERVERS: "servers_response",
                        GET_FTPMODE: "GET_FTPMODE",
                        UPLOAD: "upload_response",
                        CLIENT_UPLOAD: "client_upload_response",
                        DOWNLOAD: "download_response",
                        DOWNLOADTO: "downloadto_response",
                        LS: "list_response",
                        MV: "mv",
                        RM: "remove_response",
                        RN: "rename_response",
                        MKDIR: "create_folder_response",
                        GET_TRANS_COUNT: "get_trans_count_response",
                        TASK_COUNT: "task_count",
                        START_UPDATE: "start_update_response",
                        UPDATE_CLIENT: "download_update_file_response",
                        DISCONNECT: "disconnect",
                        CREATEURL: "createurl",
                        SETURLCONF: "seturlconf",
                        GETURLINFO: "geturkinfo",
                        CHECKURL: "chechurl",
                        CHECKPASSWD: "checkpasswd",
                        task_state_changed: "task_state_changed",
                        get_task_info_response: "get_task_info_response",
                        LSIT_GROUP: "list_group_response",
                        MOVE: "move_response",
                        COPY: "copy_response",
                        GET_ATTRIBUTES: "get_attributes_response"
                    }
                      , a = {
                        ProtoVersion: 1
                    }
                      , s = {
                        EMPTY: "EMPTY",
                        WEBSRV: "WEBSRV",
                        WEBUI: "WEBUI",
                        WEBADMIN: "WEBADMIN",
                        PROXYC: "PROXYC",
                        PROXYS: "PROXYS",
                        FTP_CLIENT: "FTP_CLIENT",
                        FTP_SERVER: "FTP_SERVER",
                        TYPHOON_CLIENT: "TYPHOON_CLIENT",
                        TYPHOON_SERVER: "TYPHOON_SERVER"
                    }
                      , l = {
                        OK: 0,
                        WS_UNKNOW: 1e3,
                        WS_DBUNKNOW: 1001,
                        WS_ACCOUNTINVALID: 1002,
                        WS_ACCOUNTREQUIRED: 1003,
                        WS_ACCOUNTDUPLICATE: 1004,
                        WS_PASSWORDINVALID: 1005,
                        WS_PASSWORDREQUIRED: 1006,
                        WS_SERVERINVALID: 1007,
                        WS_ASSIGNINVALID: 1008,
                        WS_TOKENINVALID: 1009,
                        WS_IDINVALID: 1010,
                        WS_PBMARSHALANY: 1011,
                        WS_PBMARSHAL: 1012,
                        WS_PBUNMARSHAL: 1013,
                        WS_EMAILDUPLICATE: 1014,
                        WS_SERVERDEVICEREQUIRED: 1015,
                        WS_SERVERDEVICEDUPLICATE: 1016,
                        WS_ASSIGNDUPLICATE: 1017,
                        WS_ACCOUNTNOTALLOWED: 1018,
                        WS_ILLEGALOPERATION: 1019,
                        WS_INCORRECTACCOUNTFORMAT: 1021,
                        WS_INCORRECTEMAILFORMAT: 1022,
                        WS_INCORRECTPASSWORDFORMAT: 1023,
                        WS_INCORRECTNAMEFORMAT: 1024,
                        WS_INCORRECTPHONEFORMAT: 1025,
                        WS_INCORRECTHOSTFORMAT: 1026,
                        WS_INVALIDPORT: 1027,
                        WS_INVALIDTCPPORT: 1028,
                        WS_INVALIDUDPPORT: 1029,
                        WS_INVALIDBANDWIDTH: 1030,
                        WS_SITEACCESSDENIED: 1031,
                        WS_ONLYONEADMIN: 1032,
                        WS_DIRNOTEXIST: 1033,
                        WS_FILENOTEXIST: 1034,
                        WS_CMDFAILD: 1035,
                        WS_INVALIDPACKAGESIZE: 1036,
                        WS_DOESNOTEXIST: 1037,
                        WS_INCORRECTLICENSEFORMAT: 1038,
                        WS_CREATEUSERERROR: 1039,
                        WS_NOTFOUNDNETCARD: 1040,
                        WS_URLBROKEN: 1041,
                        WS_NOPERMISSION: 1042,
                        WS_PATHNOTEXIST: 1043,
                        WS_NOREADPERMISSION: 1044,
                        WS_NOWRITEPERMISSION: 1045,
                        WS_ILLEGAL: 1046,
                        WS_InvalidServerEmailAccount: 1047,
                        WS_InvalidServerEmailPassword: 1048,
                        WS_InvalidSmtpHostOrPort: 1049,
                        FC_UNKNOW: 2e3,
                        FC_FTPLOGIN: 2001,
                        FC_FTPLIST: 2002,
                        FC_FTPSERVERCLOSED: 2003,
                        FC_FTPSERVERNORUN: 2004,
                        FC_FTPSERVERDISC: 2005,
                        FC_OTHERUSERLOGIN: 2006,
                        FC_DIRNOTEXIST: 2007,
                        FC_FTPLOGING: 2008,
                        FC_CONNECTFAILD: 2009,
                        FC_MKDNOPERMISSION: 2010,
                        FC_CWDNOPERMISSION: 2011,
                        FC_RECONNECT: 2012,
                        FC_FTPCLIENTDISC: 2013,
                        FC_PARAMERR: 2014,
                        FC_AUTHFAILED: 2015,
                        FC_UPLOADRECURSIVING: 2016,
                        ERROR_PROXY_TIMEOUT: 3e4,
                        ERROR_CLIENT_CLOSED: 30001,
                        ERROR_CLIENT_TIMEOUT: 30002,
                        ERROR_MANAGER_ERROR: 30003,
                        ERROR_NOT_LOGIN_INFO: 30004,
                        ERROR_FAILED_TO_START_PROGRM: 30005
                    }
                      , c = {
                        STATE_UNKNOWN: 0,
                        STATE_TODO: 1,
                        STATE_CONNECTING_PROXY: 2,
                        STATE_WAIT_NEXT_COMMAND: 3,
                        STATE_WAIT_LOGIN_INFO: 4,
                        STATE_READY: 5,
                        STATE_RECOVER: 6,
                        STATE_STARTED: 7,
                        STATE_STOPPING: 8,
                        STATE_STOPPED: 9,
                        STATE_SUCCESSFUL: 10,
                        STATE_FAILED: 11,
                        STATE_AUTH_FAILED: 12,
                        STATE_PROXY_CLOSED: 13
                    }
                      , u = function() {
                        function t() {
                            var t = this;
                            this.promise = new Promise((function(e, n) {
                                t.resolve = e,
                                t.reject = n
                            }
                            ))
                        }
                        return t
                    }();
                    function h() {
                        this.handlers = {}
                    }
                    function f(t) {
                        var e = this;
                        this.proxyHost = t.proxyHost,
                        this.ports = [9527, 19527, 29527, 39527, 49527, 59527],
                        this.failedPorts = [],
                        this.lang = "zh-CN",
                        this.obserable = new h,
                        this.ifWebsocket = function() {
                            return "undefined" !== typeof WebSocket
                        }
                        ,
                        this.login = function(n, i, o) {
                            e.lang = o || "zh-CN";
                            var a = {
                                id: parseInt(String((new Date).getTime() / 1e3), 0),
                                version: "3.0.3.8",
                                device: "",
                                module: "WEBUI",
                                action: "login",
                                UK: r.encodeHash(n) + r.encodeHash(i)
                            }
                              , s = JSON.stringify(a);
                            r.http.post(t.webServer, s).then((function(t) {
                                var o = JSON.parse(t.data);
                                0 === o.result ? (sessionStorage.setItem("token", r.encodeHash(n) + r.encodeHash(i) + o.token),
                                sessionStorage.setItem("protocol_version", o.protocol_version),
                                sessionStorage.setItem("client_version", o.client_version),
                                e.client_version = o.client_version,
                                e.protocol_version = o.protocol_version,
                                e.createWebSocket()) : e.obserable.emit({
                                    type: "LOGIN",
                                    data: {
                                        type: "loginRaysync",
                                        result: o.result,
                                        message: o.message,
                                        body: ""
                                    }
                                })
                            }
                            )).catch((function(t) {
                                e.obserable.emit({
                                    type: "LOGIN",
                                    data: {
                                        type: "loginRaysync",
                                        status: t.status,
                                        body: ""
                                    }
                                })
                            }
                            ))
                        }
                        ,
                        this.createWebSocket = function() {
                            var t = [];
                            e.failedPorts = [],
                            e.ports.forEach((function(n) {
                                t.push(e.registerSocket("wss://local.raysync.cn:".concat(n)))
                            }
                            )),
                            Promise.race(t).then((function() {}
                            )).catch((function() {
                                setTimeout(e.createWebSocket(), 300),
                                e.obserable.emit({
                                    type: "WEBSOCKET",
                                    data: {
                                        type: "WEBSOCKET",
                                        result: 0,
                                        message: "webSocket error:failed connect to raysync client",
                                        body: ""
                                    }
                                })
                            }
                            ))
                        }
                        ,
                        this.registerSocket = function(n, a, s) {
                            var h = new u;
                            if (e.ifWebsocket()) {
                                var f = new WebSocket(n);
                                return f.onopen = function() {
                                    if (h.resolve(n),
                                    1 === f.readyState) {
                                        var t = JSON.stringify({
                                            action: i.CHECK,
                                            sign: "yunyu",
                                            protocol_version: e.protocol_version || sessionStorage.protocol_version,
                                            client_version: e.client_version || sessionStorage.client_version
                                        });
                                        f.send(t),
                                        e.checkTimeOut = setTimeout((function() {
                                            e.failedPorts.push(n),
                                            e.failedPorts = Array.from(new Set(e.failedPorts)),
                                            e.failedPorts.length === e.ports.length && (e.createWebSocket(),
                                            e.obserable.emit({
                                                type: "WEBSOCKET",
                                                data: {
                                                    type: "WEBSOCKET",
                                                    result: 1,
                                                    message: "webSocket error:failed connect to raysync client",
                                                    body: ""
                                                }
                                            }))
                                        }
                                        ), 1e3)
                                    }
                                }
                                ,
                                f.onerror = function() {
                                    e.failedPorts.push(n),
                                    e.failedPorts = Array.from(new Set(e.failedPorts)),
                                    e.failedPorts.length === e.ports.length && h.reject("close")
                                }
                                ,
                                f.onmessage = function(n) {
                                    r.readBolbData(n).then((function(n) {
                                        var r = JSON.parse(n);
                                        if (r.action.toLowerCase() === o.LOGIN)
                                            0 !== r.result ? e.obserable.emit({
                                                type: "LOGIN",
                                                data: {
                                                    type: "loginRaysync",
                                                    result: r.result,
                                                    message: "loginRaysync error",
                                                    body: ""
                                                }
                                            }) : (e.obserable.emit({
                                                type: "LOGIN",
                                                data: {
                                                    type: "loginRaysync",
                                                    result: r.result,
                                                    message: "loginRaysync success",
                                                    body: ""
                                                }
                                            }),
                                            e.addWebSocket(JSON.stringify({
                                                action: "recv_state",
                                                recv_state: !0
                                            })));
                                        else if (r.action.toLowerCase() === o.CHECK) {
                                            var i = "";
                                            i = t.clientCheck ? t.clientCheck.indexOf(":") > -1 ? t.clientCheck.split(":")[0] : t.clientCheck : "raysync",
                                            r.sign.toLowerCase() === i.toLowerCase() ? (e.websocket = f,
                                            e.websocket.onclose = function() {
                                                e.websocket.onclose = null,
                                                e.websocket = null,
                                                e.createWebSocket()
                                            }
                                            ,
                                            e.obserable.emit({
                                                type: "webSocket",
                                                data: {
                                                    type: "webSocket",
                                                    result: 0,
                                                    message: "seccess:connected to raysync client",
                                                    body: ""
                                                }
                                            }),
                                            clearTimeout(e.checkTimeOut),
                                            e.getServers()) : (e.obserable.emit({
                                                type: "WEBSOCKET",
                                                data: {
                                                    type: "WEBSOCKET",
                                                    result: 1,
                                                    message: "webSocket error:failed connect to raysync client",
                                                    body: ""
                                                }
                                            }),
                                            clearTimeout(e.checkTimeOut),
                                            e.createWebSocket())
                                        } else if (r.action.toLowerCase() === o.LS) {
                                            var a = []
                                              , s = "";
                                            r.result === l.OK ? (a = r.list || [],
                                            s = r.path,
                                            e.obserable.emit({
                                                type: "LS",
                                                data: {
                                                    result: r.result,
                                                    type: "LS",
                                                    LS: a,
                                                    Dir: s,
                                                    message: "get file list success"
                                                }
                                            })) : e.obserable.emit({
                                                type: "LS",
                                                data: {
                                                    result: r.result,
                                                    type: "LS",
                                                    LS: a,
                                                    Dir: s,
                                                    message: "get file list Failed"
                                                }
                                            })
                                        } else
                                            r.action.toLowerCase() === o.TASK_COUNT ? e.obserable.emit({
                                                type: "TASK_COUNT",
                                                data: {
                                                    result: r.result,
                                                    type: "TASK_COUNT",
                                                    count: r.count,
                                                    message: "TASK_COUNT"
                                                }
                                            }) : r.action.toLowerCase() === o.UPDATE_CLIENT ? e.obserable.emit({
                                                type: "UPDATE_CLIENT",
                                                data: {
                                                    result: r.result,
                                                    type: "UPDATE_CLIENT",
                                                    count: r.version,
                                                    message: "UPDATE_CLIENT"
                                                }
                                            }) : r.action.toLowerCase() === o.START_UPDATE ? 0 !== r.result && e.obserable.emit({
                                                type: "START_UPDATE",
                                                data: {
                                                    result: r.result,
                                                    type: "START_UPDATE",
                                                    message: "START_UPDATE Failed"
                                                }
                                            }) : r.action.toLowerCase() === o.DISCONNECT ? e.obserable.emit({
                                                type: "DISCONNECT",
                                                data: {
                                                    result: r.result,
                                                    type: "DISCONNECT",
                                                    message: "DISCONNECT TO RAYSYNC SERVER"
                                                }
                                            }) : r.action.toLowerCase() === o.MKDIR ? e.obserable.emit({
                                                type: "MKDIR",
                                                data: {
                                                    result: r.result,
                                                    type: "MKDIR",
                                                    message: "MKDIR RESULT"
                                                }
                                            }) : r.action.toLowerCase() === o.GET_TRANS_COUNT ? e.obserable.emit({
                                                type: "GET_TRANS_COUNT",
                                                data: {
                                                    result: r.result,
                                                    count: r.count,
                                                    type: "GET_TRANS_COUNT",
                                                    message: "GET_TRANS_COUNT"
                                                }
                                            }) : r.action.toLowerCase() === o.RN ? e.obserable.emit({
                                                type: "RENAME",
                                                data: {
                                                    result: r.result,
                                                    type: "rename",
                                                    message: "rename"
                                                }
                                            }) : r.action.toLowerCase() === o.RM ? r.is_end || e.obserable.emit({
                                                type: "REMOVE",
                                                data: {
                                                    result: r.result,
                                                    type: "remove",
                                                    message: "remove"
                                                }
                                            }) : r.action.toLowerCase() === o.task_state_changed ? (r.state === c.STATE_SUCCESSFUL && e.getTaskInfo(r.task_id),
                                            e.obserable.emit({
                                                type: "TASK_STATE",
                                                data: {
                                                    result: 0,
                                                    type: "TASK_STATE",
                                                    task_id: r.task_id,
                                                    state: r.state,
                                                    message: "task state changed",
                                                    data: r
                                                }
                                            })) : r.action.toLowerCase() === o.get_task_info_response ? (e.obserable.emit({
                                                type: "TASK_INFO",
                                                data: {
                                                    result: 0,
                                                    type: "TASK_INFO",
                                                    task_id: r.task_id,
                                                    files: r,
                                                    message: "task state changed"
                                                }
                                            }),
                                            r.state === c.STATE_SUCCESSFUL && e.obserable.emit({
                                                type: "TRANSFER_SUCCESS",
                                                data: {
                                                    result: 0,
                                                    type: "TRANSFER_SUCCESS",
                                                    files: r.files,
                                                    message: "transfer success",
                                                    data: r
                                                }
                                            })) : r.action.toLowerCase() === o.LSIT_GROUP ? e.obserable.emit({
                                                type: "LSIT_GROUP",
                                                data: {
                                                    result: r.result,
                                                    type: "LSIT_GROUP",
                                                    message: "LSIT RESULT"
                                                }
                                            }) : r.action.toLowerCase() === o.MOVE ? e.obserable.emit({
                                                type: "MOVE",
                                                data: {
                                                    result: r.result,
                                                    type: "MOVE",
                                                    message: "MOVE RESULT"
                                                }
                                            }) : r.action.toLowerCase() === o.COPY ? e.obserable.emit({
                                                type: "COPY",
                                                data: {
                                                    result: r.result,
                                                    type: "COPY",
                                                    message: "COPY RESULT"
                                                }
                                            }) : r.action.toLowerCase() === o.GET_ATTRIBUTES && e.obserable.emit({
                                                type: "GET_ATTRIBUTES",
                                                data: {
                                                    result: r.result,
                                                    type: "GET_ATTRIBUTES",
                                                    message: "GET_ATTRIBUTES RESULT"
                                                }
                                            })
                                    }
                                    ))
                                }
                                ,
                                h.promise
                            }
                        }
                        ,
                        this.getServers = function() {
                            new u;
                            var n = JSON.stringify({
                                id: parseInt(String((new Date).getTime() / 1e3), 0),
                                version: a.ProtoVersion,
                                device: "",
                                module: s.WEBUI,
                                action: i.SERVERS,
                                token: sessionStorage.getItem("token").substr(-40)
                            });
                            r.http.post(t.webServer, n).then((function(t) {
                                var n = JSON.parse(t.data);
                                if (n.result === l.OK) {
                                    var r = JSON.parse(n.servers[0]);
                                    e.loginRequest(r)
                                }
                            }
                            ))
                        }
                        ,
                        this.loginRequest = function(t) {
                            var n = JSON.stringify({
                                language: "zh-CN",
                                action: i.LOGIN,
                                server_ip: e.proxyHost || t.host || window.location.hostname,
                                server_port: t.port,
                                proxy_ip: e.proxyHost || window.location.hostname || t.proxyHost,
                                proxy_port: t.proxyPort,
                                server5_port: t.no_ssl_port,
                                server5_ssl_port: t.ssl_port,
                                uk: sessionStorage.getItem("token").substr(0, 128),
                                is_ftps: !!t.enableFTPS,
                                tcpEnable: t.tcpEnable,
                                tcpDelay: t.tcpDelay
                            });
                            e.addWebSocket(n).then((function() {}
                            )).catch((function() {}
                            ))
                        }
                        ,
                        this.addWebSocket = function(t) {
                            var e = new u;
                            return this.websocket && 1 === this.websocket.readyState ? (1 === this.websocket.readyState ? (this.websocket.send(t),
                            e.resolve("websocket do sent data")) : this.createWebSocket(),
                            e.promise) : (this.obserable.emit({
                                type: "WEBSOCKETERROR"
                            }),
                            e.promise)
                        }
                        ,
                        this.getTaskInfo = function(t) {
                            var e = JSON.stringify({
                                action: "get_task_info",
                                task_id: t
                            });
                            this.addWebSocket(e).catch((function() {}
                            ))
                        }
                        ,
                        this.getFileList = function(t) {
                            var e = JSON.stringify({
                                action: i.LS,
                                path: t
                            });
                            this.addWebSocket(e).catch((function() {}
                            ))
                        }
                        ,
                        this.upload = function(t, e, n) {
                            var r = JSON.stringify({
                                action: i.UPLOAD,
                                type: t,
                                path: e,
                                full_path: n || !1
                            });
                            this.addWebSocket(r).catch((function() {}
                            ))
                        }
                        ,
                        this.uploadClient = function(t, e, n, r) {
                            var o = JSON.stringify({
                                action: i.UPDATE_CLIENT,
                                remote_path: t,
                                full_path: r || !1,
                                local_path: e,
                                local_files: n
                            });
                            this.getFileList(t),
                            this.showTransferList(),
                            this.addWebSocket(o).catch((function() {}
                            ))
                        }
                        ,
                        this.manualTransfer = function(t, e) {
                            var n = JSON.stringify({
                                action: i.MANUAL_TRANSFER,
                                type: t,
                                name: e
                            });
                            this.addWebSocket(n).catch((function() {}
                            ))
                        }
                        ,
                        this.download = function(t) {
                            var e = JSON.stringify({
                                action: i.DOWNLOAD,
                                src: t
                            });
                            this.addWebSocket(e).catch((function() {}
                            ))
                        }
                        ,
                        this.remove = function(t) {
                            var e = JSON.stringify({
                                action: i.RM,
                                path: t
                            });
                            this.addWebSocket(e).catch((function() {}
                            ))
                        }
                        ,
                        this.logout = function() {
                            this.normalClose = !0;
                            var t = JSON.stringify({
                                action: i.LOGOUT
                            });
                            this.addWebSocket(t)
                        }
                        ,
                        this.mkdir = function(t, e) {
                            var n = JSON.stringify({
                                action: i.MKDIR,
                                name: t,
                                remote_path: e
                            });
                            return this.addWebSocket(n)
                        }
                        ,
                        this.rename = function(t, e) {
                            var n = JSON.stringify({
                                action: i.RN,
                                old_name: t,
                                new_name: e
                            });
                            this.addWebSocket(n)
                        }
                        ,
                        this.copy = function(t, e, n) {
                            n = !1;
                            var r = {
                                action: i.COPY,
                                from: t,
                                to: e,
                                cover: n
                            };
                            r = JSON.stringify(r),
                            this.addWebSocket(r)
                        }
                        ,
                        this.move = function(t, e, n) {
                            n = !1;
                            var r = {
                                action: i.MOVE,
                                from: t,
                                to: e,
                                cover: n
                            };
                            r = JSON.stringify(r),
                            this.addWebSocket(r)
                        }
                        ,
                        this.getAttributes = function(t) {
                            var e = {
                                action: i.GET_ATTRIBUTES,
                                path: t
                            };
                            e = JSON.stringify(e),
                            this.addWebSocket(e)
                        }
                        ,
                        this.getTransCount = function() {
                            var t = JSON.stringify({
                                action: i.GET_TRANS_COUNT
                            });
                            this.addWebSocket(t)
                        }
                        ,
                        this.showTransferList = function(t, e) {
                            var n = JSON.stringify({
                                action: i.OPEN_TRANS_LIST,
                                x: 0,
                                y: 0
                            });
                            this.addWebSocket(n)
                        }
                        ,
                        this.startUpdate = function() {
                            var t = JSON.stringify({
                                action: i.START_UPDATE,
                                version: sessionStorage.getItem("client_version")
                            });
                            this.addWebSocket(t)
                        }
                    }
                    h.prototype = {
                        on: function(t, e) {
                            "undefined" === typeof this.handlers[t] && (this.handlers[t] = []),
                            this.handlers[t].push(e)
                        },
                        emit: function(t) {
                            if (t.target || (t.target = this),
                            this.handlers[t.type]instanceof Array)
                                for (var e = this.handlers[t.type], n = 0; n < e.length; n++)
                                    e[n](t.data)
                        }
                    },
                    e.exports = f
                }
                , {
                    "./utils": 6
                }],
                6: [function(t, e, n) {
                    (function(n) {
                        var r = t("hashids").default;
                        e.exports = {
                            readBolbData: function(t) {
                                var e = new Promise((function(e) {
                                    if (t.data instanceof Blob) {
                                        var n = t.data
                                          , r = n.slice(0, t.data.size)
                                          , i = new FileReader;
                                        i.readAsText(r),
                                        i.onload = function(t) {
                                            t.target.readyState == FileReader.DONE && e(t.target.result)
                                        }
                                    }
                                }
                                ));
                                return e
                            },
                            parseResponse: function(t) {
                                var e = new Promise((function(e) {
                                    e(JSON.parse(t))
                                }
                                ));
                                return e
                            },
                            encodeHash: function(t) {
                                var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
                                  , i = new r("eXVueXU=",64,e)
                                  , o = n(t).toString("hex");
                                return i.encodeHex(o)
                            },
                            decodeHash: function(t) {
                                var e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
                                  , i = new r("eXVueXU=",64,e);
                                return n(i.decodeHex(t), "hex").toString("utf8")
                            },
                            http: {
                                post: function(t, e) {
                                    var n = new Promise((function(n, r) {
                                        var i;
                                        if (window.ActiveXObject)
                                            try {
                                                i = new ActiveXObject("Msxml2.XMLHTTP")
                                            } catch (t) {
                                                try {
                                                    i = new ActiveXObject("Microsoft.XMLHTTP")
                                                } catch (t) {
                                                    i = !1
                                                }
                                            }
                                        else
                                            window.XMLHttpRequest && (i = new XMLHttpRequest);
                                        i.open("POST", t, !0),
                                        i.send(e),
                                        i.onreadystatechange = function() {
                                            var t = {};
                                            if (4 == i.readyState)
                                                if (200 == i.status) {
                                                    var e = i.responseText;
                                                    t.status = 1,
                                                    t.data = e,
                                                    n(t)
                                                } else
                                                    t.status = 0,
                                                    t.data = i.responseText,
                                                    r(t)
                                        }
                                    }
                                    ));
                                    return n
                                },
                                get: function(t, e) {
                                    var n = new Promise((function(n, r) {
                                        var i;
                                        if (window.ActiveXObject)
                                            try {
                                                i = new ActiveXObject("Msxml2.XMLHTTP")
                                            } catch (r) {
                                                try {
                                                    i = new ActiveXObject("Microsoft.XMLHTTP")
                                                } catch (r) {
                                                    i = !1
                                                }
                                            }
                                        else
                                            window.XMLHttpRequest && (i = new XMLHttpRequest);
                                        i.open("GET", t, !0),
                                        i.setRequestHeader("Content-Type", "application/octet-stream"),
                                        i.send(e),
                                        i.onreadystatechange = function() {
                                            var t = {};
                                            if (4 == i.readyState && 200 == i.status) {
                                                var e = i.responseText;
                                                t.status = 1,
                                                t.data = e,
                                                n(t)
                                            }
                                        }
                                    }
                                    ));
                                    return n
                                }
                            }
                        }
                    }
                    ).call(this, t("buffer").Buffer)
                }
                , {
                    buffer: 2,
                    hashids: 4
                }]
            }, {}, [5])(5)
        }()
          , Nt = function() {
            var t = this
              , e = t._self._c;
            return t.show ? e("div", {
                staticClass: "flex-box language-box"
            }, [e("p", [t.info.groupName && !t.info.oneClusterId ? e("span", {
                staticClass: "mr10"
            }, [t._v("\n      " + t._s(t.$t("usergroup")) + "：" + t._s(t.info.groupName) + "\n    ")]) : t._e(), t._v(" "), t.info.clusterName && !t.info.oneClusterId ? e("span", {
                staticClass: "mr10"
            }, [t._v("\n      " + t._s(t.$t("area")) + "：" + t._s(t.info.clusterName) + "\n    ")]) : t._e(), t._v(" "), e("span", {
                staticClass: "mr10"
            }, [t._v(" " + t._s(t.$t("user")) + "：" + t._s(t.info.clusterUserName) + " ")])])]) : t._e()
        }
          , Bt = []
          , Rt = {
            props: {
                show: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: (0,
            g.Z)({}, (0,
            v.rn)("efileUpload", ["info"]))
        }
          , Pt = Rt
          , Dt = (0,
        B.Z)(Pt, Nt, Bt, !1, null, null, null)
          , Ft = Dt.exports
          , _t = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "operation-box"
            }, [e("div", {
                staticClass: "left"
            }, [e("path-header", {
                attrs: {
                    "path-type": "click",
                    width: 500,
                    "hidden-disable-path": !0,
                    path: t.path,
                    "disable-path-list": t.disablePathList,
                    "root-list": t.rootList
                },
                on: {
                    changePath: t.changePath
                }
            })], 1), t._v(" "), e("div", {
                staticClass: "right"
            }, [e("el-tooltip", {
                attrs: {
                    placement: "bottom",
                    content: t.getTipsInfo(),
                    disabled: !t.getBtnDisable()
                }
            }, [e("div", [e("el-dropdown", {
                attrs: {
                    disabled: t.getBtnDisable()
                },
                on: {
                    command: t.handleDownloadCommand
                }
            }, [e("el-button", {
                staticClass: "margin-right-8",
                attrs: {
                    disabled: t.getBtnDisable()
                },
                on: {
                    click: t.handleBatchDownload
                }
            }, [t._v("\n            " + t._s(t.$t("batch_download")) + "\n            "), t.raysyncEnabled ? e("i", {
                staticClass: "el-icon-arrow-down el-icon--right"
            }) : t._e()]), t._v(" "), t.raysyncEnabled ? e("el-dropdown-menu", {
                attrs: {
                    slot: "dropdown"
                },
                slot: "dropdown"
            }, [e("el-dropdown-item", {
                attrs: {
                    command: "common"
                }
            }, [t._v("\n              " + t._s(t.$t("common_download")) + "\n            ")]), t._v(" "), e("el-dropdown-item", {
                attrs: {
                    command: "client"
                }
            }, [t._v("\n              " + t._s(t.$t("client_download")) + "\n            ")])], 1) : t._e()], 1)], 1)]), t._v(" "), e("div", {
                staticClass: "margin-right-8"
            }, [e("el-button", {
                staticClass: "square-button",
                attrs: {
                    id: "refresh",
                    title: t.$t("refresh")
                },
                on: {
                    click: t.refresh
                }
            }, [e("svg-icon", {
                attrs: {
                    "icon-class": "efile_refresh"
                }
            })], 1)], 1)], 1)])
        }
          , Ut = []
          , Wt = {
            name: "ShareHeader",
            components: {
                pathHeader: ot
            },
            mixins: [_],
            props: {
                path: {
                    type: String,
                    default: null
                },
                rootList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                writedisable: {
                    type: Boolean,
                    default: !1
                },
                readdisable: {
                    type: Boolean,
                    default: !1
                },
                multipleSelection: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                keyword: {
                    type: String,
                    default: function() {
                        return ""
                    }
                },
                secondSwitch: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    myKeyword: this.keyword
                }
            },
            computed: {
                disablePathList: function() {
                    return [this.exSharePath]
                }
            },
            methods: {
                getBtnDisable: function() {
                    return this.readdisable || this.multipleSelection.length < 1
                },
                getTipsInfo: function() {
                    return this.readdisable ? this.$t("no_permission_title") : this.multipleSelection.length < 1 ? this.$t("confirm_download_msg") : ""
                },
                changePath: function(t) {
                    this.$emit("changePath", t)
                },
                handleBatchDownload: function() {
                    this.raysyncEnabled || this.batchDownload()
                },
                handleDownloadCommand: function(t) {
                    switch (t) {
                    case "client":
                        this.$emit("downloadRaysyncFiles");
                        break;
                    default:
                        this.batchDownload()
                    }
                },
                changeMykeyword: function(t) {
                    this.myKeyword = t
                },
                batchDownload: function() {
                    this.myKeyword = "",
                    this.downloadFiles(this.multipleSelection.slice())
                },
                downloadRaysyncFiles: function() {
                    this.$emit("downloadRaysyncFiles")
                },
                refresh: function() {
                    this.$emit("resetPath", {
                        value: this.path
                    })
                }
            }
        }
          , Qt = Wt
          , Ht = (0,
        B.Z)(Qt, _t, Ut, !1, null, "2786de4b", null)
          , Jt = Ht.exports
          , Vt = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.visible,
                    expression: "visible"
                }],
                staticClass: "pic-preview-box"
            }, [e("span", {
                staticClass: "pic-preview-close el-icon-close",
                on: {
                    click: t.close
                }
            }), t._v(" "), e("div", {
                staticClass: "pic-preview-swiper"
            }, [t.prevBtnFlag ? e("img", {
                staticClass: "prev-btn",
                attrs: {
                    src: n(80988),
                    alt: "prev"
                },
                on: {
                    click: function(e) {
                        return t.lookImg("prev")
                    }
                }
            }) : t._e(), t._v(" "), e("el-image", {
                staticClass: "pic-preview",
                attrs: {
                    alt: "preview",
                    fit: "scale-down",
                    src: t.previewUrl
                }
            }, [e("div", {
                staticClass: "image-slot",
                attrs: {
                    slot: "placeholder"
                },
                slot: "placeholder"
            }, [t._v("\n        " + t._s(t.$t("loading_text")) + "\n        "), e("span", {
                staticClass: "dot"
            }, [t._v("...")])]), t._v(" "), e("div", {
                staticClass: "image-slot",
                attrs: {
                    slot: "error"
                },
                slot: "error"
            }, [t._v(t._s(t.$t("loading_error")))])]), t._v(" "), t.nextBtnFlag ? e("img", {
                staticClass: "next-btn",
                attrs: {
                    src: n(45413),
                    alt: "next"
                },
                on: {
                    click: function(e) {
                        return t.lookImg("next")
                    }
                }
            }) : t._e()], 1)])
        }
          , zt = []
          , Kt = {
            mixins: [_],
            props: {
                visible: {
                    type: Boolean,
                    default: !1
                },
                currentSrc: {
                    type: Number,
                    default: 0
                },
                previewSrcList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    currentPreviewIdx: 0,
                    previewUrl: "",
                    prevBtnFlag: !1,
                    nextBtnFlag: !1
                }
            },
            computed: {},
            watch: {
                currentSrc: {
                    handler: function(t) {
                        this.getCurrentPreviewIdx(t)
                    }
                }
            },
            mounted: function() {},
            methods: {
                getCurrentPreviewIdx: function(t) {
                    var e = this.previewSrcList.findIndex((function(e) {
                        return e.fileKey === t
                    }
                    ));
                    this.currentPreviewIdx = e < 0 ? 0 : e,
                    this.changeUrl()
                },
                lookImg: function(t) {
                    "prev" === t ? this.currentPreviewIdx-- : this.currentPreviewIdx++,
                    this.changeUrl()
                },
                changeUrl: function() {
                    this.prevBtnFlag = this.currentPreviewIdx > 0,
                    this.nextBtnFlag = this.currentPreviewIdx < this.previewSrcList.length - 1,
                    this.getPreviewUrl()
                },
                getPreviewUrl: function() {
                    var t = this
                      , e = (new Date).getTime();
                    this.getBaseUrlToken().then((function(n) {
                        var r = n.url
                          , i = n.token
                          , o = "paths=".concat(encodeURIComponent(t.previewSrcList[t.currentPreviewIdx].path))
                          , a = D(r, o, i, {
                            timeStr: e
                        });
                        t.previewUrl = a
                    }
                    ))
                },
                close: function() {
                    this.$emit("update:visible", !1)
                }
            }
        }
          , Xt = Kt
          , Gt = (0,
        B.Z)(Xt, Vt, zt, !1, null, "44dcf6e0", null)
          , jt = Gt.exports
          , Zt = function() {
            var t = this
              , e = t._self._c;
            return e("editor-dialog", {
                ref: "previewFile",
                attrs: {
                    "dialog-width": "540px",
                    "show-dialog": t.isVisible,
                    title: t.dynamicTitle,
                    value: t.content,
                    mode: t.codeMode,
                    loading: t.isLoadComplete,
                    readonly: t.codeReadonly,
                    "before-close": t.beforeClose
                },
                on: {
                    "update:showDialog": function(e) {
                        t.isVisible = e
                    },
                    "update:show-dialog": function(e) {
                        t.isVisible = e
                    },
                    "update:value": function(e) {
                        t.content = e
                    },
                    codeChange: t.codeChange,
                    save: t.editTextFile,
                    cancel: t.cancelSave
                }
            }, [e("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [e("el-tooltip", {
                attrs: {
                    placement: "bottom-end",
                    content: t.$t("account_disabled_tips"),
                    disabled: !t.accountDisabled
                }
            }, [e("div", [t.isEditFile ? e("el-button", {
                attrs: {
                    type: "primary",
                    disabled: t.accountDisabled
                },
                on: {
                    click: t.openEdit
                }
            }, [t._v("\n          " + t._s(t.$t("edit")) + "\n        ")]) : t._e()], 1)])], 1)])
        }
          , Yt = []
          , qt = function() {
            var t = this
              , e = t._self._c;
            return e("su-dialog", {
                class: ["preview-dialog", {
                    "efile-full-screen": t.isFullScreen
                }],
                attrs: {
                    modal: t.modal,
                    visible: t.isVisible,
                    width: t.calDialogWidth,
                    "close-on-click-modal": !1,
                    "before-close": t.beforeClose,
                    fullscreen: t.isFullScreen
                },
                on: {
                    "update:visible": function(e) {
                        t.isVisible = e
                    }
                },
                scopedSlots: t._u([{
                    key: "title",
                    fn: function() {
                        return [t._v("\n    " + t._s(t.title) + "\n    "), e("svg-icon", {
                            staticClass: "icon-full-screen",
                            attrs: {
                                "icon-class": t.isFullScreen ? "shrink" : "full-screen"
                            },
                            on: {
                                click: t.fullScreen
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "footer",
                    fn: function() {
                        return [t.readonly ? t._e() : e("div", [e("el-button", {
                            attrs: {
                                type: "primary"
                            },
                            on: {
                                click: t.save
                            }
                        }, [t._v("\n        " + t._s(t.$t("save")) + "\n      ")]), t._v(" "), e("el-button", {
                            on: {
                                click: t.close
                            }
                        }, [t._v(t._s(t.$t("cancel_save")))])], 1), t._v(" "), t._t("footer")]
                    },
                    proxy: !0
                }], null, !0)
            }, [t._v(" "), e("code-editor", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: t.loading,
                    expression: "loading"
                }],
                attrs: {
                    height: t.calEditorHeight,
                    "is-full-screen": !1,
                    mode: t.mode,
                    "read-only": t.readonly,
                    tool: !1,
                    value: t.codeValue
                },
                on: {
                    input: t.handleInput
                }
            })], 1)
        }
          , $t = []
          , te = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "code_editor",
                class: {
                    fullscreen: t.fullScreen
                },
                style: {
                    width: t.handlerWidth,
                    height: t.handlerHeight
                }
            }, [t.tool ? e("v-tool", {
                attrs: {
                    coder: t.coder,
                    mode: t.language
                },
                on: {
                    "update:mode": function(e) {
                        t.language = e
                    }
                }
            }) : t._e(), t._v(" "), e("codemirror", {
                ref: "codeMirror",
                attrs: {
                    value: t.value,
                    options: t.cmOptions
                },
                on: {
                    input: t.handleInput,
                    blur: t.handleBlur
                }
            }), t._v(" "), e("search-box", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.show,
                    expression: "show"
                }],
                attrs: {
                    show: t.show,
                    coder: t.coder
                },
                on: {
                    "update:show": function(e) {
                        t.show = e
                    }
                }
            }), t._v(" "), t.isFullScreen ? e("v-full-screen", {
                attrs: {
                    "full-screen": t.fullScreen
                },
                on: {
                    "update:fullScreen": function(e) {
                        t.fullScreen = e
                    },
                    "update:full-screen": function(e) {
                        t.fullScreen = e
                    }
                }
            }) : t._e()], 1)
        }
          , ee = []
          , ne = (n(64765),
        n(75055))
          , re = (n(5321),
        n(31149),
        n(65379),
        n(58977),
        n(83366),
        n(14568),
        n(55292),
        n(32095),
        n(81699),
        n(95261),
        n(66347))
          , ie = n(91033)
          , oe = function(t) {
            var e, n = (0,
            re.Z)(t);
            try {
                for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value
                      , i = r.target.__resizeListeners__ || [];
                    i.length && i.forEach((function(t) {
                        t()
                    }
                    ))
                }
            } catch (o) {
                n.e(o)
            } finally {
                n.f()
            }
        }
          , ae = function(t, e) {
            t.__resizeListeners__ || (t.__resizeListeners__ = []),
            t.__resizeListeners__.length || (t.__ro__ = new ie["default"](oe),
            t.__ro__.observe(t)),
            t.__resizeListeners__.push(e)
        }
          , se = function(t, e) {
            t && t.__resizeListeners__ && (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1),
            t.__resizeListeners__.length || t.__ro__.disconnect())
        }
          , le = [{
            value: "text",
            label: "Text"
        }, {
            value: "python",
            label: "Python"
        }, {
            value: "shell",
            label: "Shell"
        }]
          , ce = {
            python: "text/x-python",
            shell: "text/x-sh",
            text: "text"
        }
          , ue = {
            python: "Python",
            shell: "Shell",
            text: "Text"
        }
          , he = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "editor_search",
                on: {
                    mousedown: function(e) {
                        return e.preventDefault(),
                        t.focus.apply(null, arguments)
                    }
                }
            }, [e("div", {
                ref: "searchBox",
                staticClass: "search_wrap"
            }, [e("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.search,
                    expression: "search"
                }],
                ref: "search",
                staticClass: "search_input",
                class: {
                    no_match: t.noMatch
                },
                attrs: {
                    placeholder: "Search for"
                },
                domProps: {
                    value: t.search
                },
                on: {
                    change: t.change,
                    keydown: function(e) {
                        return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.findNext.apply(null, arguments)
                    },
                    input: function(e) {
                        e.target.composing || (t.search = e.target.value)
                    }
                }
            }), t._v(" "), e("i", {
                staticClass: "icon el-icon-bottom",
                on: {
                    click: t.findNext
                }
            }), t._v(" "), e("i", {
                staticClass: "icon el-icon-top",
                on: {
                    click: t.findPrev
                }
            })]), t._v(" "), e("i", {
                staticClass: "close el-icon-close",
                on: {
                    click: t.hide
                }
            })])
        }
          , fe = []
          , de = {
            props: {
                coder: {
                    type: Object,
                    default: null
                },
                show: {
                    type: Boolean,
                    required: !0
                }
            },
            data: function() {
                return {
                    search: "",
                    replaceValue: "",
                    noMatch: !1
                }
            },
            watch: {
                show: function() {
                    var t = this;
                    this.show ? this.$nextTick((function() {
                        t.focus()
                    }
                    )) : this.$nextTick((function() {
                        t.coder.focus()
                    }
                    ))
                }
            },
            mounted: function() {},
            methods: {
                focus: function() {
                    this.$refs.search.focus()
                },
                change: function(t, e) {
                    var n = this
                      , r = {
                        skipCurrent: t,
                        backwards: e,
                        regExp: !1,
                        caseSensitive: !1,
                        wholeWord: !1
                    };
                    this.find(this.search, r, (function(t) {
                        var e = t.matches(!1, t.from());
                        n.coder.setSelection(e.from, e.to)
                    }
                    ))
                },
                find: function(t, e, n) {
                    var r, i = e.caseSensitive, o = e.regExp, a = e.wholeWord, s = e.backwards, l = e.skipCurrent, c = t;
                    (o || a) && (e.wholeWord && (c = "\\b".concat(c, "\\b")),
                    c = new RegExp(c)),
                    r = s ? l ? "from" : "to" : l ? "to" : "from";
                    var u = this.coder.getCursor(r)
                      , h = this.coder.getSearchCursor(c, u, !i)
                      , f = h.findNext.bind(h)
                      , d = h.findPrevious.bind(h)
                      , p = !0
                      , g = !1;
                    s && !d() ? (p = f(),
                    p && (this.coder.setCursor(this.coder.doc.size, 0),
                    this.find(t, e, n),
                    g = !0)) : s || f() || (p = d(),
                    p && (this.coder.setCursor(0, 0),
                    this.find(t, e, n),
                    g = !0)),
                    this.noMatch = !p && !!this.search,
                    !g && p && n(h)
                },
                findNext: function() {
                    this.change(!0, !1)
                },
                findPrev: function() {
                    this.change(!0, !0)
                },
                findAll: function() {
                    this.noMatch = !!this.search,
                    this.coder.showMatchesOnScrollbar && this.coder.showMatchesOnScrollbar(this.search),
                    this.hide()
                },
                replace: function() {
                    var t = this.coder.getOption("readOnly")
                      , e = !!this.coder.getSelection();
                    !t && e && this.coder.replaceSelection(this.replaceValue, "start")
                },
                replaceAndFindNex: function() {
                    var t = this.coder.getOption("readOnly");
                    t || (this.replace(),
                    this.findNext())
                },
                replaceAll: function() {
                    var t = this.search
                      , e = this.replaceValue
                      , n = RegExp(t, "g");
                    if (!this.coder.getOption("readOnly")) {
                        var r = this.coder.getCursor()
                          , i = this.coder.getValue();
                        i = i.replace(n, e),
                        this.coder.setValue(i),
                        this.coder.setCursor(r)
                    }
                },
                hide: function() {
                    var t = this;
                    this.$emit("update:show", !1),
                    this.$nextTick((function() {
                        t.coder.focus()
                    }
                    ))
                }
            }
        }
          , pe = de
          , ge = (0,
        B.Z)(pe, he, fe, !1, null, "45cc28dc", null)
          , ve = ge.exports
          , me = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "editor_tool"
            }, [e("el-dropdown", {
                attrs: {
                    placement: "bottom-start",
                    trigger: "click"
                },
                scopedSlots: t._u([{
                    key: "dropdown",
                    fn: function() {
                        return [e("el-dropdown-menu", t._l(t.modes, (function(n) {
                            return e("el-dropdown-item", {
                                key: n.value,
                                nativeOn: {
                                    click: function(e) {
                                        return t.changeMode(n)
                                    }
                                }
                            }, [t._v("\n          " + t._s(n.label) + "\n        ")])
                        }
                        )), 1)]
                    },
                    proxy: !0
                }])
            }, [e("div", {
                staticClass: "el-dropdown-link"
            }, [e("span", [t._v("\n        " + t._s(t.language) + "\n      ")]), t._v(" "), e("i", {
                staticClass: "icon el-icon-arrow-down el-icon--right"
            })])])], 1)
        }
          , ye = []
          , Ae = {
            props: {
                coder: {
                    type: Object,
                    default: null
                },
                mode: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    modes: le,
                    language: ue[this.mode]
                }
            },
            methods: {
                changeMode: function(t) {
                    this.language !== t.label && (this.coder.setOption("mode", t.value),
                    this.language = t.label)
                }
            }
        }
          , we = Ae
          , be = (0,
        B.Z)(we, me, ye, !1, null, "5817271d", null)
          , Se = be.exports
          , Ce = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "editor_fullscreen"
            }, [t.fullScreen ? e("span", {
                staticClass: "icon-svg",
                attrs: {
                    title: t.$t("cancel_fullScreen")
                },
                on: {
                    click: function(e) {
                        return t.$emit("update:fullScreen", !1)
                    }
                }
            }, [e("svg-icon", {
                attrs: {
                    "icon-class": "shrink"
                }
            })], 1) : e("span", {
                staticClass: "icon-svg",
                attrs: {
                    title: t.$t("fullScreen")
                },
                on: {
                    click: function(e) {
                        return t.$emit("update:fullScreen", !0)
                    }
                }
            }, [e("svg-icon", {
                attrs: {
                    "icon-class": "full-screen"
                }
            })], 1)])
        }
          , Ee = []
          , xe = {
            props: {
                fullScreen: {
                    type: Boolean,
                    required: !0
                }
            }
        }
          , ke = xe
          , Le = (0,
        B.Z)(ke, Ce, Ee, !1, null, "6b042bd1", null)
          , Te = Le.exports
          , Ie = {
            name: "CodeEditor",
            components: {
                codemirror: ne.codemirror,
                SearchBox: ve,
                VTool: Se,
                VFullScreen: Te
            },
            model: {
                prop: "value",
                event: "input"
            },
            props: {
                value: {
                    type: String,
                    default: ""
                },
                mode: {
                    type: String,
                    default: "shell"
                },
                tabSize: {
                    type: Number,
                    default: 4
                },
                lineNumbers: {
                    type: Boolean,
                    default: !0
                },
                lineWrapping: {
                    type: Boolean,
                    default: !0
                },
                readOnly: {
                    type: Boolean,
                    default: !1
                },
                search: {
                    type: Boolean,
                    default: !0
                },
                viewportMargin: {
                    type: Number,
                    default: 10
                },
                tool: {
                    type: Boolean,
                    default: !0
                },
                isFullScreen: {
                    type: Boolean,
                    default: !0
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                width: {
                    type: [Number, String],
                    default: "100%"
                },
                height: {
                    type: [Number, String],
                    default: "400px"
                }
            },
            data: function() {
                return {
                    show: !1,
                    coder: null,
                    language: "",
                    fullScreen: !1
                }
            },
            computed: {
                cmOptions: function() {
                    return {
                        tabSize: this.tabSize,
                        mode: ce[this.language] || "text",
                        lineNumbers: this.lineNumbers,
                        autofocus: !0,
                        flattenSpans: !0,
                        lineWrapping: this.lineWrapping,
                        readOnly: this.readOnly && "nocursor",
                        viewportMargin: this.viewportMargin,
                        placeholder: this.placeholder
                    }
                },
                handlerWidth: function() {
                    return this.fullScreen ? "100%" : "string" === typeof this.width ? this.width : "".concat(this.width, "px")
                },
                handlerHeight: function() {
                    return this.fullScreen ? "100%" : "string" === typeof this.height ? this.height : "".concat(this.height, "px")
                }
            },
            watch: {
                mode: {
                    immediate: !0,
                    handler: function() {
                        this.language = this.mode
                    }
                }
            },
            mounted: function() {
                this.init(),
                ae(this.$el, this.resize)
            },
            beforeDestroy: function() {
                se(this.$el, this.resize)
            },
            methods: {
                init: function() {
                    this.$refs.codeMirror.codemirror.addKeyMap({
                        "Ctrl-F": this.find.bind(this),
                        "Cmd-F": this.find.bind(this)
                    }),
                    this.resize()
                },
                find: function() {
                    this.search && (this.show = !0)
                },
                resize: function() {
                    this.$refs.codeMirror.codemirror.setSize("auto", "calc(100% - ".concat(this.tool ? "30px" : "0px", ")"))
                },
                handleInput: function(t) {
                    this.$emit("input", t)
                },
                handleBlur: function(t) {
                    this.$emit("blur", t)
                }
            }
        }
          , Oe = Ie
          , Me = (0,
        B.Z)(Oe, te, ee, !1, null, null, null)
          , Ne = Me.exports
          , Be = {
            components: {
                CodeEditor: Ne
            },
            props: {
                showDialog: {
                    type: Boolean,
                    default: !1
                },
                modal: {
                    type: Boolean,
                    default: !0
                },
                title: {
                    type: String,
                    default: ""
                },
                loading: {
                    type: Boolean,
                    default: !1
                },
                readonly: {
                    type: Boolean,
                    default: !1
                },
                mode: {
                    type: String,
                    default: "python"
                },
                value: {
                    type: String,
                    default: ""
                },
                dialogWidth: {
                    type: String,
                    default: "50%"
                },
                editorHeight: {
                    type: String,
                    default: "400px"
                },
                beforeClose: {
                    type: Function,
                    required: !0
                }
            },
            data: function() {
                return {
                    isFullScreen: !1
                }
            },
            computed: {
                isVisible: {
                    get: function() {
                        return this.showDialog
                    },
                    set: function(t) {
                        this.$emit("update:showDialog", t)
                    }
                },
                codeValue: {
                    get: function() {
                        return this.value
                    },
                    set: function(t) {
                        this.$emit("update:value", t)
                    }
                },
                calDialogWidth: function() {
                    return this.isFullScreen ? "100%" : this.dialogWidth
                },
                calEditorHeight: function() {
                    return this.isFullScreen ? "calc(100vh - 150px)" : this.editorHeight
                }
            },
            watch: {
                isVisible: function(t) {
                    t && (this.isFullScreen = !1)
                }
            },
            methods: {
                handleInput: function(t) {
                    this.$emit("update:value", t),
                    this.$emit("codeChange", t)
                },
                save: function() {
                    this.$emit("save")
                },
                close: function() {
                    this.$emit("cancel")
                },
                fullScreen: function() {
                    this.isFullScreen = !this.isFullScreen
                }
            }
        }
          , Re = Be
          , Pe = (0,
        B.Z)(Re, qt, $t, !1, null, "16bdbc3f", null)
          , De = Pe.exports
          , Fe = {
            components: {
                EditorDialog: De
            },
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                share: {
                    type: Boolean,
                    default: !1
                },
                accountDisabled: {
                    type: Boolean,
                    default: !1
                },
                filePath: {
                    type: String,
                    default: ""
                },
                fileName: {
                    type: String,
                    default: ""
                },
                fileType: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    codeMode: "shell",
                    isEditFile: !0,
                    codeReadonly: !0,
                    dynamicTitle: "",
                    textFilePath: "",
                    newFlag: !1,
                    hasChangeContent: !1,
                    content: "",
                    oldContent: "",
                    isLoadComplete: !0
                }
            },
            computed: {
                isVisible: {
                    get: function() {
                        return this.show
                    },
                    set: function(t) {
                        this.$emit("update:show", t)
                    }
                }
            },
            watch: {
                isVisible: function(t) {
                    t && this.init()
                }
            },
            methods: {
                init: function() {
                    var t = this;
                    this.isLoadComplete = !0,
                    this.codeReadonly = !0,
                    this.dynamicTitle = this.$t("preview_title") + this.fileName,
                    this.getFileType(this.fileType),
                    this.textFilePath = this.filePath,
                    (0,
                    b.P_)({
                        path: encodeURIComponent(this.filePath),
                        permissionAction: "write",
                        share: this.share
                    }).then((function(e) {
                        !0 === e.data.allowded ? t.isEditFile = !0 : t.isEditFile = !1
                    }
                    )),
                    (0,
                    b.bp)({
                        path: this.filePath
                    }).then((function(e) {
                        t.content = e.data.content,
                        t.oldContent = e.data.content
                    }
                    )).catch((function() {
                        t.$emit("update:show", !1)
                    }
                    )).finally((function() {
                        t.isLoadComplete = !1
                    }
                    ))
                },
                editTextFile: function() {
                    var t = this;
                    (0,
                    b.Gz)({
                        content: this.content,
                        path: this.textFilePath
                    }).then((function() {
                        t.$message({
                            message: t.$t("save_success_info"),
                            type: "success"
                        })
                    }
                    )).catch((function() {}
                    )).finally((function() {
                        t.$emit("getFileList"),
                        t.hasChangeContent = !1,
                        t.newFlag = !1,
                        t.$emit("update:show", !1)
                    }
                    ))
                },
                openEdit: function() {
                    this.codeReadonly = !1,
                    this.isEditFile = !1,
                    this.hasChangeContent = !1,
                    this.newFlag = !0,
                    this.dynamicTitle = this.$t("edit_title") + this.fileName
                },
                getFileType: function(t) {
                    var e = {
                        shell: "shell",
                        php: "php",
                        py: "python",
                        js: "javascript"
                    };
                    this.codeMode = e[t] || "text"
                },
                codeChange: function() {
                    this.hasChangeContent = !0
                },
                handleFileSaveConfirm: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "close"
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    this.newFlag && this.hasChangeContent ? this.$confirm(this.$t("tips_before_closing"), this.$t("title"), {
                        confirmButtonText: this.$t("sure"),
                        cancelButtonText: this.$t("cancel"),
                        cancelButtonClass: "btn-custom-cancel",
                        customClass: "notify-custom-class",
                        type: "warning"
                    }).then((function() {
                        n && n(),
                        t.hasChangeContent = !1,
                        t.newFlag = !1,
                        t.content = t.oldContent,
                        "cancel" === e ? (t.codeReadonly = !0,
                        t.isEditFile = !0,
                        t.content = t.oldContent) : t.content = ""
                    }
                    )).catch((function() {
                        t.hasChangeContent = !0,
                        t.newFlag = !0
                    }
                    )) : (n && n(),
                    "cancel" === e && this.$emit("update:show", !1),
                    this.content = "",
                    this.newFlag = !1)
                },
                beforeClose: function(t) {
                    this.handleFileSaveConfirm("close", t)
                },
                cancelSave: function() {
                    this.handleFileSaveConfirm("cancel")
                }
            }
        }
          , _e = Fe
          , Ue = (0,
        B.Z)(_e, Zt, Yt, !1, null, null, null)
          , We = Ue.exports
          , Qe = function() {
            var t = this
              , e = t._self._c;
            return t.show ? e("div", {
                staticClass: "account-alert"
            }, [e("account-alert", {
                attrs: {
                    "user-accounts": t.userAccounts
                },
                on: {
                    close: t.close
                }
            })], 1) : t._e()
        }
          , He = []
          , Je = function() {
            var t = this
              , e = t._self._c;
            return e("div")
        }
          , Ve = []
          , ze = {}
          , Ke = ze
          , Xe = (0,
        B.Z)(Ke, Je, Ve, !1, null, null, null)
          , Ge = Xe.exports
          , je = {
            name: "EfileAccountAlert",
            components: {
                AccountAlert: Ge
            },
            mixins: [W],
            props: {},
            data: function() {
                return {
                    show: !1
                }
            },
            computed: {},
            created: function() {
                this.show = this.showAlert()
            },
            mounted: function() {},
            methods: {
                close: function() {
                    this.show = !1,
                    this.$emit("close")
                }
            }
        }
          , Ze = je
          , Ye = (0,
        B.Z)(Ze, Qe, He, !1, null, null, null)
          , qe = Ye.exports
          , $e = {
            name: "EfilePage",
            components: {
                UserInfoHeader: Ft,
                contentBox: Ot,
                featureBox: ft,
                shareHeader: Jt,
                EfileAccountAlert: qe,
                pathHeader: ot,
                ImagePreview: jt,
                FilePreview: We
            },
            mixins: [_, W, U.Z],
            props: {
                sharePathList: {
                    type: Array,
                    default: function() {
                        return []
                    }
                },
                from: {
                    type: String,
                    default: ""
                },
                initClusterId: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    efileDisabled: !1,
                    uploadFlag: !1,
                    emptyText: "",
                    readdisable: !1,
                    writedisable: !1,
                    secondSwitch: !1,
                    raysync: "",
                    envUrl: "",
                    completeUrl: "",
                    downloadRaysyncLink: "",
                    tryToConnectFlag: !1,
                    triggerFastTrans: !1,
                    promptFlag: !1,
                    updateRaysyncMark: !1,
                    uploadType: "",
                    unStartMark: !1,
                    clusterName: "",
                    clusterUserName: "",
                    treeShow: !1,
                    previewFlag: !1,
                    previewImgArr: [],
                    previewImageKey: 0,
                    filePreviewFlag: !1,
                    textFilePath: "",
                    previewFileName: "",
                    previewFileType: "",
                    fullscreenLoading: !1,
                    tableLoading: !1,
                    treeLoading: !1,
                    uploadListFlag: !1,
                    currentPage: 1,
                    pageSize: 20,
                    pageSizes: kt.a,
                    start: 0,
                    order: "asc",
                    orderBy: "name",
                    keyword: "",
                    multipleSelection: [],
                    fileListLen: 0,
                    tableData: null,
                    path: "",
                    isTriggerLastStage: !1,
                    startRow: null,
                    share: !1,
                    shareEnabled: !1,
                    oneClusterId: "",
                    pathList: [],
                    fileBoxHeight: "",
                    tableAreaHeight: "",
                    sharePathListFromAc: [],
                    disablePathList: [],
                    treeNode: [],
                    treeData: [],
                    cancelRequestList: [],
                    shift: !1
                }
            },
            computed: (0,
            g.Z)((0,
            g.Z)((0,
            g.Z)({}, (0,
            v.rn)({
                copyOrMoveing: function(t) {
                    return t.efileUpload.copyOrMoveing
                },
                showFileList: function(t) {
                    return t.efileUpload.showFileList
                }
            })), (0,
            v.Se)(["fromService"])), {}, {
                getFileBoxHeight: function() {
                    return {
                        height: this.fileBoxHeight
                    }
                },
                pathListWithoutShare: function() {
                    return this.pathList.filter((function(t) {
                        return "pop" === t.type
                    }
                    ))
                }
            }),
            watch: {
                pathList: {
                    handler: function() {
                        this.updateStyle()
                    },
                    deep: !0
                }
            },
            created: function() {
                this.share = "true" === this.$route.query.share,
                this.sharePathListFromAc = this.sharePathList || [],
                this.initRouterQuery(),
                this.updateStyle(),
                window.addEventListener("blur", this.handleBlur, !1)
            },
            mounted: function() {
                var t = this;
                return p(f().mark((function e() {
                    return f().wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t.$store.commit("efileUpload/SET_EFILE_MOUNTED", !0),
                                e.next = 3,
                                t.initInfo();
                            case 3:
                                t.$nextTick((function() {
                                    t.$on("startClient", (function() {
                                        t.startClient()
                                    }
                                    )),
                                    t.$on("updateFilesList", (function() {
                                        t.getFileList()
                                    }
                                    ))
                                }
                                ));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            beforeDestroy: function() {
                window.removeEventListener("blur", this.handleBlur, !1),
                this.$store.commit("efileUpload/SET_EFILE_MOUNTED", !1)
            },
            methods: {
                handleBlur: function() {
                    this.shift = !1
                },
                handler: function(t) {
                    16 === t.keyCode && (this.shift = !1)
                },
                beforeunloadHandler: function(t) {
                    if (this.uploadingFileCount() || this.copyOrMoveing) {
                        var e = this.$t("close_tip");
                        return t.returnValue = e,
                        e
                    }
                },
                uploadingFileCount: function() {
                    var t = this.showFileList.filter((function(t) {
                        return ["play", "pause", "waiting"].includes(t.status)
                    }
                    ));
                    return t.length
                },
                updateStyle: function() {
                    var t = this.getAccountAlertStyleHeight()
                      , e = 0;
                    e = this.isAc ? "acClient" === this.fromService ? 65 : "shell" === this.from ? 37 : 120 : this.share ? 0 : 35;
                    var n = this.isAc ? e + t : e;
                    this.fileBoxHeight = "calc(100vh - ".concat(n, "px)");
                    var r = "acClient" === this.fromService ? 100 : this.share ? 52 : 92;
                    this.tableAreaHeight = "calc(100% - ".concat(r, "px)")
                },
                initRouterQuery: function() {
                    var t = this.$route.query || {}
                      , e = t.clusterId
                      , n = t.share
                      , r = void 0 === n ? "false" : n
                      , i = w.Z.getItem("lastClusterId");
                    if (this.isAc)
                        this.initClusterId ? this.$store.commit("SET_EFILE_CLUSTER_ID", this.initClusterId) : e ? (this.$store.commit("SET_EFILE_CLUSTER_ID", e),
                        w.Z.setItem(this.getQuerySessionKey(), t),
                        this.$router.replace({
                            query: {
                                share: r
                            }
                        })) : i && this.$store.commit("SET_EFILE_CLUSTER_ID", i),
                        this.checkClusterList(),
                        w.Z.setItem("lastClusterId", this.clusterId),
                        this.getCanUsedCLuster();
                    else {
                        var o = w.Z.getItem(this.getQuerySessionKey());
                        o || w.Z.setItem(this.getQuerySessionKey(), t)
                    }
                },
                checkClusterList: function() {
                    var t = this.clusterId
                      , e = this.$store.getters.clusterList || [];
                    if (e.length) {
                        var n = e.findIndex((function(e) {
                            return e.clusterId === t
                        }
                        ));
                        -1 === n && this.$store.commit("SET_EFILE_CLUSTER_ID", e[0].clusterId)
                    }
                },
                getCanUsedCLuster: function() {
                    var t = this;
                    if (this.isAc) {
                        var e = this.clusterId
                          , n = this.$store.getters.clusterList || []
                          , r = this.checkAccountDisable(e);
                        if (r && n.length) {
                            var i = n.find((function(e) {
                                var n = e.clusterId;
                                return !t.checkAccountDisable(n)
                            }
                            ));
                            i ? this.$store.commit("SET_EFILE_CLUSTER_ID", i.clusterId) : this.$store.commit("SET_EFILE_CLUSTER_ID", n[0].clusterId)
                        }
                    }
                },
                changeDataAndSession: function(t) {
                    var e = w.Z.getItem(this.getQuerySessionKey(t), {})
                      , n = e.limit
                      , r = e.order
                      , i = e.orderBy
                      , o = e.path
                      , a = e.downloadPath
                      , s = e.currentPage
                      , l = e.openUploadDialog
                      , c = {
                        order: this.order || r,
                        orderBy: this.orderBy || i,
                        path: this.path || o,
                        downloadPath: this.downloadPath || a,
                        currentPage: this.currentPage || +s,
                        limit: this.pageSize || +n,
                        openUploadDialog: this.openUploadDialog || l
                    };
                    w.Z.setItem(this.getQuerySessionKey(t), c)
                },
                getQuerySessionKey: function(t) {
                    var e = t || this.clusterId || "";
                    return "".concat(e || "", "/query")
                },
                openTableLoading: function(t) {
                    this.tableLoading = t
                },
                handleUploadFiles: function(t) {
                    this.$emit("uploadFiles", t)
                },
                getEnvProtocol: function() {
                    return this.envUrl.match(/(\S*):\/\//)[1]
                },
                getEnvHost: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return e ? t.match(/https:\/\/(\S*):/)[1] : t.match(/http:\/\/(\S*):/)[1]
                },
                startClient: function() {
                    var t = ""
                      , e = "";
                    "https" === this.getEnvProtocol() ? (t = "N",
                    e = this.getEnvHost(this.envUrl, !0)) : "http" === this.getEnvProtocol() && (t = "N",
                    e = this.getEnvHost(this.envUrl)),
                    window.location.href = "FastTrans://1?url=".concat(t, "_").concat(e, "/client&cfg_file=raysync_cfg.xml&dlw=0"),
                    localStorage.setItem("isStartClient", !0),
                    this.closePrompt()
                },
                continueUpload: function() {
                    this.raysyncFile(this.uploadType),
                    this.promptFlag = !1,
                    this.updateRaysyncMark = !1
                },
                connectClient: function(t) {
                    var e = this;
                    (0,
                    b.yS)(encodeURIComponent(this.path)).then((function(n) {
                        if ("0" === n.code) {
                            var r = n.data.token
                              , i = e.clusterUserName
                              , o = r
                              , a = e.$store.state.efileUpload.clusterListRaysyncLoginMap.get(e.clusterId || "alone");
                            if (!a) {
                                e.fullscreenLoading = !0,
                                e.completeUrl = "".concat(e.envUrl + (/\/$/.test(e.envUrl) ? "" : "/"), "api");
                                var s = "";
                                return "https" === e.getEnvProtocol() ? s = e.getEnvHost(e.completeUrl, !0) : "http" === e.getEnvProtocol() && (s = e.getEnvHost(e.completeUrl)),
                                void e.raysyncEvents(i, o, s, t)
                            }
                            if (e.triggerFastTrans) {
                                if ("download" === t) {
                                    var l = [];
                                    e.multipleSelection.forEach((function(t) {
                                        l.push(t.name)
                                    }
                                    ));
                                    var c = e.downloadPath
                                      , u = e.getRaysyncInst();
                                    return void u.download([{
                                        path: c,
                                        names: l
                                    }])
                                }
                                e.raysyncFile(t),
                                e.triggerFastTrans = !1
                            }
                        } else
                            e.showEfileErrorMsg(n)
                    }
                    ))
                },
                getRaysyncInst: function() {
                    var t = this.$store.state.efileUpload.clusterListRaysyncInstMap.get(this.clusterId || "alone");
                    return t
                },
                raysyncEvents: function(t, e, n, r) {
                    var i = this
                      , o = navigator.userAgent.indexOf("Linux") > 0 ? "/Linux" : navigator.userAgent.indexOf("Mac") > 0 ? this.raysyncDownloadDmgFilename ? "/download/".concat(this.raysyncDownloadDmgFilename) : "/download/dmg" : "/download/exe";
                    this.downloadRaysyncLink = this.envUrl + o;
                    var a = new Mt({
                        webServer: this.completeUrl,
                        proxyHost: n,
                        clientCheck: "fasttrans"
                    })
                      , s = localStorage.getItem("lang") || "zh-CN";
                    a.login(t, e, s),
                    a.obserable.on("LS", (function() {}
                    )),
                    a.obserable.on("UPDATE_CLIENT", (function(t) {
                        if (t && 0 === t.result)
                            if ("acClient" === i.fromService) {
                                var e = {
                                    downloadRaysyncLink: i.downloadRaysyncLink,
                                    havePastTrans: "updateFastThans"
                                };
                                i.$emit("fastTransInstall", e)
                            } else
                                i.promptFlag = !0,
                                i.updateRaysyncMark = !0
                    }
                    )),
                    a.obserable.on("WEBSOCKET", (function(t) {
                        if ("[object Object]" === Object.prototype.toString.call(t) && i.tryToConnectFlag) {
                            if (i.tryToConnectFlag = !1,
                            "acClient" === i.fromService) {
                                localStorage.setItem("isStartClient", !1);
                                var e = i.getToken()
                                  , n = e.token
                                  , o = {
                                    downloadRaysyncLink: i.downloadRaysyncLink,
                                    token: n,
                                    baseUrl: i.envUrl
                                };
                                "download" === r ? (o.havePastTrans = "download",
                                i.$emit("fastTransInstall", o)) : (o.havePastTrans = "file",
                                i.$emit("fastTransInstall", o))
                            } else
                                i.promptFlag = !0,
                                i.unStartMark = !0;
                            i.updateRaysyncMark = !1,
                            i.fullscreenLoading = !1
                        }
                    }
                    )),
                    a.obserable.on("LOGIN", (function(t) {
                        var e = i.uploadType;
                        if (t && 0 === t.result) {
                            if (i.fullscreenLoading = !1,
                            i.promptFlag = !1,
                            i.unStartMark = !1,
                            i.$store.commit("efileUpload/SET_RAYSYNC_LOGIN_MAP", {
                                clusterId: i.clusterId || "alone",
                                value: !0
                            }),
                            "file" === e || "folder" === e)
                                setTimeout((function() {
                                    i.triggerFastTrans && !i.updateRaysyncMark && (i.raysyncFile(e),
                                    i.triggerFastTrans = !1)
                                }
                                ), 2500);
                            else if ("download" === e) {
                                var n = [];
                                i.multipleSelection.forEach((function(t) {
                                    n.push(t.name)
                                }
                                ));
                                var r = i.downloadPath
                                  , o = i.getRaysyncInst();
                                o.download([{
                                    path: r,
                                    names: n
                                }])
                            }
                            i.uploadType = ""
                        } else
                            i.fullscreenLoading = !1,
                            i.$message({
                                message: i.$t("unusual_login"),
                                type: "warning"
                            })
                    }
                    )),
                    a.obserable.on("TRANSFER_SUCCESS", (function() {
                        i.resetSearchValue(),
                        i.getFileList({
                            updateTree: !0,
                            params: {
                                clusterId: i.clusterId
                            }
                        })
                    }
                    )),
                    this.$store.commit("efileUpload/SET_RAYSYNC_INST_MAP", {
                        clusterId: this.clusterId || "alone",
                        value: a
                    })
                },
                raysyncFile: function(t) {
                    var e = this
                      , n = w.Z.getItem("fixedMainPath");
                    if (-1 !== this.path.indexOf(n)) {
                        var r = this.path.substring(n.length, this.path.length);
                        (0,
                        b.P_)({
                            path: encodeURIComponent(this.path),
                            permissionAction: "write"
                        }).then((function(n) {
                            if (n && n.data.allowded) {
                                var i = e.getRaysyncInst();
                                r.length > 0 ? "file" === t ? i.upload(0, r) : i.upload(1, r) : "file" === t ? i.upload(0, "/") : i.upload(1, "/")
                            } else
                                e.$message({
                                    type: "warning",
                                    message: e.$t("no_permission_prompt")
                                })
                        }
                        ))
                    } else
                        this.$message({
                            type: "warning",
                            message: this.$t("fasttrans_forbid")
                        })
                },
                uploadRaySyncFile: function() {
                    this.triggerFastTrans = !0,
                    this.tryToConnectFlag = !0,
                    this.uploadType = "file",
                    this.connectClient("file")
                },
                uploadRaySyncFiles: function() {
                    this.triggerFastTrans = !0,
                    this.tryToConnectFlag = !0,
                    this.uploadType = "folder",
                    this.connectClient("folder")
                },
                downloadRaysyncFiles: function() {
                    this.multipleSelection.length > 0 ? (this.triggerFastTrans = !0,
                    this.tryToConnectFlag = !0,
                    this.uploadType = "download",
                    this.connectClient("download")) : this.$message({
                        type: "warning",
                        message: this.$t("remind_choose_file")
                    })
                },
                batchDownload: function() {
                    this.resetSearchValue(),
                    this.downloadFiles(this.multipleSelection.slice())
                },
                stepListClick: function(t) {
                    if (this.shift)
                        for (var e = this.getRange(this.startRow, t), n = u(e, 2), r = n[0], i = n[1], o = 0; o < this.tableData.length; o++)
                            this.$refs.contentBox.$refs.multipleTable.toggleRowSelection(this.tableData[o], o >= r && o <= i);
                    else
                        this.$refs.contentBox.$refs.multipleTable.toggleRowSelection(t),
                        this.startRow = t
                },
                getRange: function(t, e) {
                    var n = 0
                      , r = 0;
                    return t && (n = this.tableData.findIndex((function(e) {
                        return e.path === t.path
                    }
                    )),
                    n = n < 0 ? 0 : n),
                    e && (r = this.tableData.findIndex((function(t) {
                        return t.path === e.path
                    }
                    )),
                    r = r < 0 ? 0 : r),
                    [Math.min(n, r), Math.max(n, r)]
                },
                appendTreeList: function(t) {
                    this.resetPage(),
                    this.resetSearchValue(),
                    this.path = t.path,
                    this.getFileList({
                        updateTree: !0
                    })
                },
                nodeExpand: function(t) {
                    this.path = t,
                    this.getFileList()
                },
                changeUploadFlag: function(t) {
                    this.uploadFlag = t
                },
                requestSharePath: function() {
                    var t = this.$store.state.user.clusterSharePaths || new Map
                      , e = this.clusterId
                      , n = t.get(e);
                    this.sharePathListFromAc = n || []
                },
                getDisablePath: function(t, e) {
                    if ("/" === t)
                        return [];
                    var n = t.split("/");
                    return "pop" === e && n.pop(),
                    n.join("/")
                },
                getDisablePaths: function(t, e, n) {
                    return t ? [] : n.map((function(t) {
                        var e = t.value;
                        return e
                    }
                    ))
                },
                getSharePathList: function(t) {
                    var e = this
                      , n = t.pathList
                      , r = t.homePath
                      , i = t.clusterSharePath;
                    if (this.share)
                        return [{
                            label: this.$t("efile_share_directory"),
                            value: i,
                            type: "all"
                        }];
                    var a = Array.isArray(n) ? n : JSON.parse(null !== n && void 0 !== n ? n : "[]")
                      , s = (0,
                    o.Z)(new Set([].concat((0,
                    o.Z)(this.sharePathListFromAc), (0,
                    o.Z)(a)))).filter((function(t) {
                        return t !== r
                    }
                    ))
                      , l = {
                        label: this.$t("user_home_directory"),
                        value: r,
                        type: "pop"
                    };
                    s.sort();
                    var c = s.length > 1
                      , u = s.map((function(t, n) {
                        return {
                            label: "".concat(e.$t("share_directory")).concat(c ? n + 1 : ""),
                            value: t,
                            type: "pop"
                        }
                    }
                    ))
                      , h = [];
                    i && i !== r && !s.includes(i) && h.push({
                        label: this.$t("external_share_directory"),
                        value: i,
                        type: "all"
                    });
                    var f = [l].concat((0,
                    o.Z)(u), h);
                    return f
                },
                initInfo: function() {
                    var t = this;
                    return p(f().mark((function e() {
                        var n, r, i, o, a, s, l, c, u, h, d, p, g, v, m, y, A, b, S, C, E;
                        return f().wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t.fullscreenLoading = !0,
                                    t.treeData = [],
                                    e.prev = 2,
                                    n = {},
                                    !t.isAc) {
                                        e.next = 8;
                                        break
                                    }
                                    return t.requestSharePath(),
                                    e.next = 8,
                                    t.$store.dispatch("efileUpload/getInfo", {
                                        pathList: encodeURIComponent(JSON.stringify(t.sharePathListFromAc))
                                    });
                                case 8:
                                    n = t.$store.state.efileUpload.info,
                                    t.efileDisabled = !1,
                                    r = n,
                                    i = r.homePath,
                                    o = r.clusterUserName,
                                    a = r.clusterName,
                                    s = r.share,
                                    l = r.jumpFileUrl,
                                    c = r.jumpIconUrl,
                                    u = r.order,
                                    h = r.orderBy,
                                    d = r.downloadPath,
                                    p = r.language,
                                    g = r.pageSize,
                                    v = r.raySyncServerUrl,
                                    m = r.treeShow,
                                    y = r.oneClusterId,
                                    A = r.raysyncDownloadDmgFilename,
                                    b = r.openUploadDialog,
                                    S = r.showNonHome,
                                    C = r.showHomeParent,
                                    w.Z.setItem("fixedMainPath", i),
                                    E = w.Z.getItem(t.getQuerySessionKey(), {}),
                                    t.clusterUserName = o,
                                    t.clusterName = a,
                                    t.share = "true" === t.$route.query.share || "true" === s,
                                    t.share ? t.path = t.exSharePath : "acClient" === t.fromService && t.$route.query.jumpFileUrl ? t.path = t.$route.query.jumpFileUrl : t.path = l || E.path || i,
                                    t.order = E.order || u || t.order,
                                    t.orderBy = E.orderBy || h || t.orderBy,
                                    t.downloadPath = E.downloadPath || d || t.downloadPath,
                                    t.pathList = t.getSharePathList(n),
                                    t.disablePathList = t.getDisablePaths(S, C, t.pathList),
                                    t.$i18n.locale = p,
                                    localStorage.setItem("lang", p),
                                    t.pageSize = +E.limit || g || t.pageSize,
                                    t.pageSizes.includes(t.pageSize) || (t.pageSizes.push(t.pageSize),
                                    t.pageSizes.sort((function(t, e) {
                                        return t - e
                                    }
                                    ))),
                                    t.currentPage = +E.currentPage || t.currentPage,
                                    t.envUrl = v,
                                    t.treeShow = m,
                                    n.oneClusterId && (t.oneClusterId = y),
                                    t.raysyncDownloadDmgFilename = A || "",
                                    t.openUploadDialog = E.openUploadDialog || b || t.openUploadDialog,
                                    sessionStorage.getItem("count") || (sessionStorage.setItem("openUploadDialog", "open"),
                                    t.openUploadDialog && "open" === t.openUploadDialog && (t.uploadFlag = !0),
                                    sessionStorage.setItem("count", 1)),
                                    t.setLinkIco(c),
                                    t.setTitleName(n),
                                    t.getFileList({
                                        noLoading: !0,
                                        initTree: !0
                                    }),
                                    e.next = 50;
                                    break;
                                case 38:
                                    e.prev = 38,
                                    e.t0 = e["catch"](2),
                                    t.handleGetTableDataError(),
                                    t.resetTree(),
                                    t.efileDisabled = !0,
                                    t.path = "",
                                    t.pathList = [],
                                    w.Z.removeItem(t.getQuerySessionKey()),
                                    w.Z.removeItem("lastClusterId"),
                                    t.cancelLoading(),
                                    t.setLinkIco(),
                                    t.setTitleName(null);
                                case 50:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 38]])
                    }
                    )))()
                },
                cancelLoading: function() {
                    this.fullscreenLoading = !1,
                    this.tableLoading = !1,
                    this.treeLoading = !1
                },
                setLinkIco: function(t) {
                    if (!this.isAc) {
                        var e = document.querySelector('link[rel="shortcut icon"]') || document.querySelector('link[rel="icon"]');
                        e || (e = document.createElement("link"),
                        e.setAttribute("rel", "shortcut icon"),
                        document.head.appendChild(e));
                        var n = !!window.ActiveXObject || "ActiveXObject"in window;
                        e.href = t && !n ? t : "./favicon.ico"
                    }
                },
                setTitleName: function(t) {
                    if (!this.isAc) {
                        var e = (null === t || void 0 === t ? void 0 : t.titleName) && decodeURIComponent(t.titleName);
                        e && e.length > 0 ? (document.title = e,
                        sessionStorage.setItem("titleName", e)) : (document.title = "E-File",
                        sessionStorage.setItem("titleName", "E-File"))
                    }
                },
                selectChange: function(t, e) {
                    this.shift ? this.stepListClick(e) : this.startRow = e
                },
                selectAll: function(t) {
                    this.multipleSelection = t,
                    this.checkOperatePermission()
                },
                handleSelectionChange: function() {
                    this.multipleSelection = this.$refs.contentBox.$refs.multipleTable.selection,
                    this.checkOperatePermission()
                },
                checkOperatePermission: function() {
                    var t = 0
                      , e = 0;
                    this.multipleSelection.map((function(n) {
                        (!n.isDirectory || n.permissionAction.read && n.permissionAction.execute) && (n.isDirectory || n.permissionAction.read) || t++,
                        n.permissionAction.allowed || e++
                    }
                    )),
                    t >= 1 && (this.readdisable = !0),
                    e >= 1 && (this.writedisable = !0),
                    0 === t && (this.readdisable = !1),
                    0 === e && (this.writedisable = !1)
                },
                sortChange: function(t) {
                    var e = t.order;
                    if (e) {
                        var n = e.slice(0, e.length - 6);
                        this.order = n
                    } else
                        this.order = "asce";
                    this.orderBy = t.prop,
                    this.getFileList()
                },
                downloadFile: function(t) {
                    this.downloadFiles([t])
                },
                getFileList: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = e.noLoading
                      , r = void 0 !== n && n
                      , i = e.expandTreeObj
                      , o = void 0 === i ? null : i
                      , a = e.updateTree
                      , s = void 0 !== a && a
                      , l = e.params
                      , c = void 0 === l ? {} : l
                      , u = e.initTree
                      , h = void 0 !== u && u;
                    if (c && c.clusterId && c.clusterId !== this.clusterId)
                        this.cancelLoading();
                    else {
                        if (this.tableLoading = !r,
                        this.readdisable = !1,
                        this.writedisable = !1,
                        this.share && -1 === this.path.indexOf(this.exSharePath))
                            return this.path = this.exSharePath,
                            void this.changeDataAndSession();
                        var f = Number(this.currentPage - 1) * this.pageSize;
                        (0,
                        b.fD)((0,
                        g.Z)({
                            order: this.order,
                            orderBy: this.orderBy,
                            path: this.path,
                            start: f,
                            limit: this.pageSize,
                            keyWord: this.keyword,
                            lockFileName: this.lockFileName(this.path)
                        }, c), (function(e) {
                            t.cancelRequestList.push(e)
                        }
                        )).then((function(e) {
                            var n = e.data;
                            if (t.fileListLen = n.total,
                            f >= t.fileListLen && 1 !== t.currentPage)
                                return t.currentPage = t.currentPage - 1 || 1,
                                void t.getFileList({
                                    noLoading: r,
                                    expandTreeObj: o,
                                    updateTree: s,
                                    params: c,
                                    initTree: h
                                });
                            t.startRow = null,
                            t.secondSwitch = t.isMainPath(t.path),
                            t.shareEnabled = n.shareEnabled,
                            t.path = n.path,
                            t.downloadPath = n.downloadPath,
                            t.handlePage(n),
                            t.handleTree(n, o, s, h)
                        }
                        )).catch((function() {
                            t.handleGetTableDataError()
                        }
                        )).finally((function() {
                            t.cancelLoading(),
                            t.changeDataAndSession(c.clusterId)
                        }
                        ))
                    }
                },
                resetTree: function(t) {
                    var e = t || this.path
                      , n = [{
                        path: e,
                        id: "1",
                        label: e
                    }];
                    this.treeData = y().cloneDeep(n)
                },
                handleGetTableDataError: function() {
                    this.resetPage(),
                    this.tableData = [],
                    this.previewImgArr = [],
                    this.fileListLen = 0,
                    this.shareEnabled = !1,
                    this.startRow = null,
                    this.secondSwitch = !1
                },
                handlePage: function(t) {
                    var e = this
                      , n = function(t) {
                        e.tableData = t.fileList || [],
                        e.tableData.length || (e.emptyText = e.$t("no_data")),
                        e.tableData.forEach((function(t) {
                            t.tick = !1,
                            (0,
                            A.Or)(t.type) && e.previewImgArr.push(t)
                        }
                        ))
                    };
                    this.previewImgArr = [],
                    n(t)
                },
                initTree: function(t) {
                    var e = t.path
                      , n = t.children || []
                      , r = (0,
                    A.Ki)()
                      , i = [{
                        path: e,
                        id: r,
                        label: e,
                        children: n
                    }];
                    this.treeNode = [],
                    this.treeNode.push({
                        path: e,
                        id: r,
                        label: e
                    }),
                    this.treeData = y().cloneDeep(i)
                },
                handleTree: function(t, e) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (!this.share && (i && this.initTree(t),
                    (t.children || []).forEach((function(t) {
                        return n.treeNode.push(t)
                    }
                    )),
                    e && this.$refs.contentBox.$refs.tree.updateKeyChildren(e.fileKey, t.children),
                    r)) {
                        var o = this.treeNode.find((function(t) {
                            return t.path === n.path
                        }
                        ));
                        if (!o)
                            return;
                        this.$refs.contentBox.$refs.tree.updateKeyChildren(o.id, t.children)
                    }
                },
                resetSearchValue: function() {
                    this.keyword = ""
                },
                searchFunc: function(t) {
                    this.resetPage(),
                    this.keyword = t,
                    this.getFileList()
                },
                lookForNextFolder: function(t) {
                    var e = this;
                    if (t.isDirectory)
                        this.resetSearchValue(),
                        this.isTriggerLastStage = !0,
                        this.path = t.path,
                        this.downloadPath = t.downloadPath,
                        this.resetPage(),
                        this.getFileList({
                            expandTreeObj: t
                        });
                    else {
                        var n = t.type
                          , r = encodeURIComponent(t.path);
                        if ((0,
                        A.Or)(n))
                            return void (0,
                            b.P_)({
                                path: r,
                                permissionAction: "read",
                                share: this.share
                            }).then((function(n) {
                                "0" === n.code && n.data.allowded ? (e.previewFlag = !0,
                                e.previewImageKey = t.fileKey) : e.$message({
                                    message: e.$t("1030"),
                                    type: "warning"
                                })
                            }
                            ));
                        (0,
                        b.BI)({
                            path: r
                        }).then((function(n) {
                            "0" === n.code ? (e.previewFileName = t.name,
                            e.textFilePath = t.path,
                            e.previewFileType = t.type,
                            e.$nextTick((function() {
                                e.filePreviewFlag = !0
                            }
                            ))) : e.showEfileErrorMsg(n)
                        }
                        ))
                    }
                },
                resetPage: function() {
                    this.currentPage = 1
                },
                handleSizeChange: function(t) {
                    this.pageSize = t,
                    this.currentPage = 1,
                    this.getFileList()
                },
                handleCurrentChange: function(t) {
                    this.currentPage = t,
                    this.getFileList()
                },
                changePathNew: function(t) {
                    this.cancelRequestList.forEach((function(t) {
                        null === t || void 0 === t || t()
                    }
                    )),
                    this.cancelRequestList = [],
                    this.resetSearchValue(),
                    this.path = t,
                    this.isTriggerLastStage = !1,
                    this.resetPage(),
                    this.getFileList({
                        initTree: !0
                    })
                },
                changePath: function(t) {
                    this.changePathNew(t.value)
                },
                isMainPath: function(t) {
                    if (null === t)
                        return !0;
                    var e = (null !== t && void 0 !== t ? t : "").split("/").filter((function(t) {
                        return t
                    }
                    ))
                      , n = w.Z.getItem("fixedMainPath")
                      , r = n.split("/").filter((function(t) {
                        return t
                    }
                    ));
                    return e.length >= r.length && r.every((function(t, n) {
                        return t === e[n]
                    }
                    ))
                },
                lockFileName: function(t) {
                    return t === this.exSharePath && this.share ? sessionStorage.getItem("lockFileName") || "null" : ""
                },
                visitorRefresh: function(t) {
                    this.path = t.value,
                    this.getFileList()
                },
                closePrompt: function() {
                    var t = this;
                    setTimeout((function() {
                        t.promptFlag = !1
                    }
                    ), 1e3)
                },
                handleOpenUplist: function() {
                    this.$emit("openUplist")
                }
            }
        }
          , tn = $e
          , en = (0,
        B.Z)(tn, r, i, !1, null, "0c47957d", null)
          , nn = en.exports
    },
    55292: function(t, e, n) {
        (function(t) {
            t(n(4631))
        }
        )((function(t) {
            function e(e, n, r) {
                var i, o = e.getWrapperElement();
                return i = o.appendChild(document.createElement("div")),
                i.className = r ? "CodeMirror-dialog CodeMirror-dialog-bottom" : "CodeMirror-dialog CodeMirror-dialog-top",
                "string" == typeof n ? i.innerHTML = n : i.appendChild(n),
                t.addClass(o, "dialog-opened"),
                i
            }
            function n(t, e) {
                t.state.currentNotificationClose && t.state.currentNotificationClose(),
                t.state.currentNotificationClose = e
            }
            t.defineExtension("openDialog", (function(r, i, o) {
                o || (o = {}),
                n(this, null);
                var a = e(this, r, o.bottom)
                  , s = !1
                  , l = this;
                function c(e) {
                    if ("string" == typeof e)
                        h.value = e;
                    else {
                        if (s)
                            return;
                        s = !0,
                        t.rmClass(a.parentNode, "dialog-opened"),
                        a.parentNode.removeChild(a),
                        l.focus(),
                        o.onClose && o.onClose(a)
                    }
                }
                var u, h = a.getElementsByTagName("input")[0];
                return h ? (h.focus(),
                o.value && (h.value = o.value,
                !1 !== o.selectValueOnOpen && h.select()),
                o.onInput && t.on(h, "input", (function(t) {
                    o.onInput(t, h.value, c)
                }
                )),
                o.onKeyUp && t.on(h, "keyup", (function(t) {
                    o.onKeyUp(t, h.value, c)
                }
                )),
                t.on(h, "keydown", (function(e) {
                    o && o.onKeyDown && o.onKeyDown(e, h.value, c) || ((27 == e.keyCode || !1 !== o.closeOnEnter && 13 == e.keyCode) && (h.blur(),
                    t.e_stop(e),
                    c()),
                    13 == e.keyCode && i(h.value, e))
                }
                )),
                !1 !== o.closeOnBlur && t.on(a, "focusout", (function(t) {
                    null !== t.relatedTarget && c()
                }
                ))) : (u = a.getElementsByTagName("button")[0]) && (t.on(u, "click", (function() {
                    c(),
                    l.focus()
                }
                )),
                !1 !== o.closeOnBlur && t.on(u, "blur", c),
                u.focus()),
                c
            }
            )),
            t.defineExtension("openConfirm", (function(r, i, o) {
                n(this, null);
                var a = e(this, r, o && o.bottom)
                  , s = a.getElementsByTagName("button")
                  , l = !1
                  , c = this
                  , u = 1;
                function h() {
                    l || (l = !0,
                    t.rmClass(a.parentNode, "dialog-opened"),
                    a.parentNode.removeChild(a),
                    c.focus())
                }
                s[0].focus();
                for (var f = 0; f < s.length; ++f) {
                    var d = s[f];
                    (function(e) {
                        t.on(d, "click", (function(n) {
                            t.e_preventDefault(n),
                            h(),
                            e && e(c)
                        }
                        ))
                    }
                    )(i[f]),
                    t.on(d, "blur", (function() {
                        --u,
                        setTimeout((function() {
                            u <= 0 && h()
                        }
                        ), 200)
                    }
                    )),
                    t.on(d, "focus", (function() {
                        ++u
                    }
                    ))
                }
            }
            )),
            t.defineExtension("openNotification", (function(r, i) {
                n(this, c);
                var o, a = e(this, r, i && i.bottom), s = !1, l = i && "undefined" !== typeof i.duration ? i.duration : 5e3;
                function c() {
                    s || (s = !0,
                    clearTimeout(o),
                    t.rmClass(a.parentNode, "dialog-opened"),
                    a.parentNode.removeChild(a))
                }
                return t.on(a, "click", (function(e) {
                    t.e_preventDefault(e),
                    c()
                }
                )),
                l && (o = setTimeout(c, l)),
                c
            }
            ))
        }
        ))
    },
    95261: function(t, e, n) {
        (function(t) {
            t(n(4631))
        }
        )((function(t) {
            function e(t) {
                t.state.placeholder && (t.state.placeholder.parentNode.removeChild(t.state.placeholder),
                t.state.placeholder = null)
            }
            function n(t) {
                e(t);
                var n = t.state.placeholder = document.createElement("pre");
                n.style.cssText = "height: 0; overflow: visible",
                n.style.direction = t.getOption("direction"),
                n.className = "CodeMirror-placeholder CodeMirror-line-like";
                var r = t.getOption("placeholder");
                "string" == typeof r && (r = document.createTextNode(r)),
                n.appendChild(r),
                t.display.lineSpace.insertBefore(n, t.display.lineSpace.firstChild)
            }
            function r(t) {
                setTimeout((function() {
                    var r = !1;
                    if (1 == t.lineCount()) {
                        var i = t.getInputField();
                        r = "TEXTAREA" == i.nodeName ? !t.getLine(0).length : !/[^\u200b]/.test(i.querySelector(".CodeMirror-line").textContent)
                    }
                    r ? n(t) : e(t)
                }
                ), 20)
            }
            function i(t) {
                a(t) && n(t)
            }
            function o(t) {
                var r = t.getWrapperElement()
                  , i = a(t);
                r.className = r.className.replace(" CodeMirror-empty", "") + (i ? " CodeMirror-empty" : ""),
                i ? n(t) : e(t)
            }
            function a(t) {
                return 1 === t.lineCount() && "" === t.getLine(0)
            }
            t.defineOption("placeholder", "", (function(n, a, s) {
                var l = s && s != t.Init;
                if (a && !l)
                    n.on("blur", i),
                    n.on("change", o),
                    n.on("swapDoc", o),
                    t.on(n.getInputField(), "compositionupdate", n.state.placeholderCompose = function() {
                        r(n)
                    }
                    ),
                    o(n);
                else if (!a && l) {
                    n.off("blur", i),
                    n.off("change", o),
                    n.off("swapDoc", o),
                    t.off(n.getInputField(), "compositionupdate", n.state.placeholderCompose),
                    e(n);
                    var c = n.getWrapperElement();
                    c.className = c.className.replace(" CodeMirror-empty", "")
                }
                a && !n.hasFocus() && i(n)
            }
            ))
        }
        ))
    },
    65379: function(t, e, n) {
        (function(t) {
            t(n(4631))
        }
        )((function(t) {
            "use strict";
            function e(t, e) {
                function n(t) {
                    clearTimeout(r.doRedraw),
                    r.doRedraw = setTimeout((function() {
                        r.redraw()
                    }
                    ), t)
                }
                this.cm = t,
                this.options = e,
                this.buttonHeight = e.scrollButtonHeight || t.getOption("scrollButtonHeight"),
                this.annotations = [],
                this.doRedraw = this.doUpdate = null,
                this.div = t.getWrapperElement().appendChild(document.createElement("div")),
                this.div.style.cssText = "position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",
                this.computeScale();
                var r = this;
                t.on("refresh", this.resizeHandler = function() {
                    clearTimeout(r.doUpdate),
                    r.doUpdate = setTimeout((function() {
                        r.computeScale() && n(20)
                    }
                    ), 100)
                }
                ),
                t.on("markerAdded", this.resizeHandler),
                t.on("markerCleared", this.resizeHandler),
                !1 !== e.listenForChanges && t.on("changes", this.changeHandler = function() {
                    n(250)
                }
                )
            }
            t.defineExtension("annotateScrollbar", (function(t) {
                return "string" == typeof t && (t = {
                    className: t
                }),
                new e(this,t)
            }
            )),
            t.defineOption("scrollButtonHeight", 0),
            e.prototype.computeScale = function() {
                var t = this.cm
                  , e = (t.getWrapperElement().clientHeight - t.display.barHeight - 2 * this.buttonHeight) / t.getScrollerElement().scrollHeight;
                if (e != this.hScale)
                    return this.hScale = e,
                    !0
            }
            ,
            e.prototype.update = function(t) {
                this.annotations = t,
                this.redraw()
            }
            ,
            e.prototype.redraw = function(t) {
                !1 !== t && this.computeScale();
                var e = this.cm
                  , n = this.hScale
                  , r = document.createDocumentFragment()
                  , i = this.annotations
                  , o = e.getOption("lineWrapping")
                  , a = o && 1.5 * e.defaultTextHeight()
                  , s = null
                  , l = null;
                function c(t, n) {
                    if (s != t.line) {
                        s = t.line,
                        l = e.getLineHandle(t.line);
                        var r = e.getLineHandleVisualStart(l);
                        r != l && (s = e.getLineNumber(r),
                        l = r)
                    }
                    if (l.widgets && l.widgets.length || o && l.height > a)
                        return e.charCoords(t, "local")[n ? "top" : "bottom"];
                    var i = e.heightAtLine(l, "local");
                    return i + (n ? 0 : l.height)
                }
                var u = e.lastLine();
                if (e.display.barWidth)
                    for (var h, f = 0; f < i.length; f++) {
                        var d = i[f];
                        if (!(d.to.line > u)) {
                            var p = h || c(d.from, !0) * n
                              , g = c(d.to, !1) * n;
                            while (f < i.length - 1) {
                                if (i[f + 1].to.line > u)
                                    break;
                                if (h = c(i[f + 1].from, !0) * n,
                                h > g + .9)
                                    break;
                                d = i[++f],
                                g = c(d.to, !1) * n
                            }
                            if (g != p) {
                                var v = Math.max(g - p, 3)
                                  , m = r.appendChild(document.createElement("div"));
                                m.style.cssText = "position: absolute; right: 0px; width: " + Math.max(e.display.barWidth - 1, 2) + "px; top: " + (p + this.buttonHeight) + "px; height: " + v + "px",
                                m.className = this.options.className,
                                d.id && m.setAttribute("annotation-id", d.id)
                            }
                        }
                    }
                this.div.textContent = "",
                this.div.appendChild(r)
            }
            ,
            e.prototype.clear = function() {
                this.cm.off("refresh", this.resizeHandler),
                this.cm.off("markerAdded", this.resizeHandler),
                this.cm.off("markerCleared", this.resizeHandler),
                this.changeHandler && this.cm.off("changes", this.changeHandler),
                this.div.parentNode.removeChild(this.div)
            }
        }
        ))
    },
    14568: function(t, e, n) {
        (function(t) {
            t(n(4631), n(55292))
        }
        )((function(t) {
            "use strict";
            function e(t, e, n, r, i) {
                t.openDialog ? t.openDialog(e, i, {
                    value: r,
                    selectValueOnOpen: !0,
                    bottom: t.options.search.bottom
                }) : i(prompt(n, r))
            }
            function n(t) {
                return t.phrase("Jump to line:") + ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' + t.phrase("(Use line:column or scroll% syntax)") + "</span>"
            }
            function r(t, e) {
                var n = Number(e);
                return /^[-+]/.test(e) ? t.getCursor().line + n : n - 1
            }
            t.defineOption("search", {
                bottom: !1
            }),
            t.commands.jumpToLine = function(t) {
                var i = t.getCursor();
                e(t, n(t), t.phrase("Jump to line:"), i.line + 1 + ":" + i.ch, (function(e) {
                    var n;
                    if (e)
                        if (n = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(e))
                            t.setCursor(r(t, n[1]), Number(n[2]));
                        else if (n = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(e)) {
                            var o = Math.round(t.lineCount() * Number(n[1]) / 100);
                            /^[-+]/.test(n[1]) && (o = i.line + o + 1),
                            t.setCursor(o - 1, i.ch)
                        } else
                            (n = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(e)) && t.setCursor(r(t, n[1]), i.ch)
                }
                ))
            }
            ,
            t.keyMap["default"]["Alt-G"] = "jumpToLine"
        }
        ))
    },
    83366: function(t, e, n) {
        (function(t) {
            t(n(4631), n(58977))
        }
        )((function(t) {
            "use strict";
            var e = {
                style: "matchhighlight",
                minChars: 2,
                delay: 100,
                wordsOnly: !1,
                annotateScrollbar: !1,
                showToken: !1,
                trim: !0
            };
            function n(t) {
                for (var n in this.options = {},
                e)
                    this.options[n] = (t && t.hasOwnProperty(n) ? t : e)[n];
                this.overlay = this.timeout = null,
                this.matchesonscroll = null,
                this.active = !1
            }
            function r(t) {
                var e = t.state.matchHighlighter;
                (e.active || t.hasFocus()) && o(t, e)
            }
            function i(t) {
                var e = t.state.matchHighlighter;
                e.active || (e.active = !0,
                o(t, e))
            }
            function o(t, e) {
                clearTimeout(e.timeout),
                e.timeout = setTimeout((function() {
                    l(t)
                }
                ), e.options.delay)
            }
            function a(t, e, n, r) {
                var i = t.state.matchHighlighter;
                if (t.addOverlay(i.overlay = h(e, n, r)),
                i.options.annotateScrollbar && t.showMatchesOnScrollbar) {
                    var o = n ? new RegExp((/\w/.test(e.charAt(0)) ? "\\b" : "") + e.replace(/[\\\[.+*?(){|^$]/g, "\\$&") + (/\w/.test(e.charAt(e.length - 1)) ? "\\b" : "")) : e;
                    i.matchesonscroll = t.showMatchesOnScrollbar(o, !1, {
                        className: "CodeMirror-selection-highlight-scrollbar"
                    })
                }
            }
            function s(t) {
                var e = t.state.matchHighlighter;
                e.overlay && (t.removeOverlay(e.overlay),
                e.overlay = null,
                e.matchesonscroll && (e.matchesonscroll.clear(),
                e.matchesonscroll = null))
            }
            function l(t) {
                t.operation((function() {
                    var e = t.state.matchHighlighter;
                    if (s(t),
                    t.somethingSelected() || !e.options.showToken) {
                        var n = t.getCursor("from")
                          , r = t.getCursor("to");
                        if (n.line == r.line && (!e.options.wordsOnly || c(t, n, r))) {
                            var i = t.getRange(n, r);
                            e.options.trim && (i = i.replace(/^\s+|\s+$/g, "")),
                            i.length >= e.options.minChars && a(t, i, !1, e.options.style)
                        }
                    } else {
                        var o = !0 === e.options.showToken ? /[\w$]/ : e.options.showToken
                          , l = t.getCursor()
                          , u = t.getLine(l.line)
                          , h = l.ch
                          , f = h;
                        while (h && o.test(u.charAt(h - 1)))
                            --h;
                        while (f < u.length && o.test(u.charAt(f)))
                            ++f;
                        h < f && a(t, u.slice(h, f), o, e.options.style)
                    }
                }
                ))
            }
            function c(t, e, n) {
                var r = t.getRange(e, n);
                if (null !== r.match(/^\w+$/)) {
                    if (e.ch > 0) {
                        var i = {
                            line: e.line,
                            ch: e.ch - 1
                        }
                          , o = t.getRange(i, e);
                        if (null === o.match(/\W/))
                            return !1
                    }
                    if (n.ch < t.getLine(e.line).length) {
                        i = {
                            line: n.line,
                            ch: n.ch + 1
                        },
                        o = t.getRange(n, i);
                        if (null === o.match(/\W/))
                            return !1
                    }
                    return !0
                }
                return !1
            }
            function u(t, e) {
                return (!t.start || !e.test(t.string.charAt(t.start - 1))) && (t.pos == t.string.length || !e.test(t.string.charAt(t.pos)))
            }
            function h(t, e, n) {
                return {
                    token: function(r) {
                        if (r.match(t) && (!e || u(r, e)))
                            return n;
                        r.next(),
                        r.skipTo(t.charAt(0)) || r.skipToEnd()
                    }
                }
            }
            t.defineOption("highlightSelectionMatches", !1, (function(e, o, a) {
                if (a && a != t.Init && (s(e),
                clearTimeout(e.state.matchHighlighter.timeout),
                e.state.matchHighlighter = null,
                e.off("cursorActivity", r),
                e.off("focus", i)),
                o) {
                    var c = e.state.matchHighlighter = new n(o);
                    e.hasFocus() ? (c.active = !0,
                    l(e)) : e.on("focus", i),
                    e.on("cursorActivity", r)
                }
            }
            ))
        }
        ))
    },
    58977: function(t, e, n) {
        (function(t) {
            t(n(4631), n(32095), n(65379))
        }
        )((function(t) {
            "use strict";
            function e(t, e, n, r) {
                this.cm = t,
                this.options = r;
                var i = {
                    listenForChanges: !1
                };
                for (var o in r)
                    i[o] = r[o];
                i.className || (i.className = "CodeMirror-search-match"),
                this.annotation = t.annotateScrollbar(i),
                this.query = e,
                this.caseFold = n,
                this.gap = {
                    from: t.firstLine(),
                    to: t.lastLine() + 1
                },
                this.matches = [],
                this.update = null,
                this.findMatches(),
                this.annotation.update(this.matches);
                var a = this;
                t.on("change", this.changeHandler = function(t, e) {
                    a.onChange(e)
                }
                )
            }
            t.defineExtension("showMatchesOnScrollbar", (function(t, n, r) {
                return "string" == typeof r && (r = {
                    className: r
                }),
                r || (r = {}),
                new e(this,t,n,r)
            }
            ));
            var n = 1e3;
            function r(t, e, n) {
                return t <= e ? t : Math.max(e, t + n)
            }
            e.prototype.findMatches = function() {
                if (this.gap) {
                    for (var e = 0; e < this.matches.length; e++) {
                        var r = this.matches[e];
                        if (r.from.line >= this.gap.to)
                            break;
                        r.to.line >= this.gap.from && this.matches.splice(e--, 1)
                    }
                    var i = this.cm.getSearchCursor(this.query, t.Pos(this.gap.from, 0), {
                        caseFold: this.caseFold,
                        multiline: this.options.multiline
                    })
                      , o = this.options && this.options.maxMatches || n;
                    while (i.findNext()) {
                        r = {
                            from: i.from(),
                            to: i.to()
                        };
                        if (r.from.line >= this.gap.to)
                            break;
                        if (this.matches.splice(e++, 0, r),
                        this.matches.length > o)
                            break
                    }
                    this.gap = null
                }
            }
            ,
            e.prototype.onChange = function(e) {
                var n = e.from.line
                  , i = t.changeEnd(e).line
                  , o = i - e.to.line;
                if (this.gap ? (this.gap.from = Math.min(r(this.gap.from, n, o), e.from.line),
                this.gap.to = Math.max(r(this.gap.to, n, o), e.from.line)) : this.gap = {
                    from: e.from.line,
                    to: i + 1
                },
                o)
                    for (var a = 0; a < this.matches.length; a++) {
                        var s = this.matches[a]
                          , l = r(s.from.line, n, o);
                        l != s.from.line && (s.from = t.Pos(l, s.from.ch));
                        var c = r(s.to.line, n, o);
                        c != s.to.line && (s.to = t.Pos(c, s.to.ch))
                    }
                clearTimeout(this.update);
                var u = this;
                this.update = setTimeout((function() {
                    u.updateAfterChange()
                }
                ), 250)
            }
            ,
            e.prototype.updateAfterChange = function() {
                this.findMatches(),
                this.annotation.update(this.matches)
            }
            ,
            e.prototype.clear = function() {
                this.cm.off("change", this.changeHandler),
                this.annotation.clear()
            }
        }
        ))
    },
    81699: function(t, e, n) {
        (function(t) {
            t(n(4631), n(32095), n(55292))
        }
        )((function(t) {
            "use strict";
            function e(t, e) {
                return "string" == typeof t ? t = new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),e ? "gi" : "g") : t.global || (t = new RegExp(t.source,t.ignoreCase ? "gi" : "g")),
                {
                    token: function(e) {
                        t.lastIndex = e.pos;
                        var n = t.exec(e.string);
                        if (n && n.index == e.pos)
                            return e.pos += n[0].length || 1,
                            "searching";
                        n ? e.pos = n.index : e.skipToEnd()
                    }
                }
            }
            function n() {
                this.posFrom = this.posTo = this.lastQuery = this.query = null,
                this.overlay = null
            }
            function r(t) {
                return t.state.search || (t.state.search = new n)
            }
            function i(t) {
                return "string" == typeof t && t == t.toLowerCase()
            }
            function o(t, e, n) {
                return t.getSearchCursor(e, n, {
                    caseFold: i(e),
                    multiline: !0
                })
            }
            function a(t, e, n, r, i) {
                t.openDialog(e, r, {
                    value: n,
                    selectValueOnOpen: !0,
                    closeOnEnter: !1,
                    onClose: function() {
                        p(t)
                    },
                    onKeyDown: i,
                    bottom: t.options.search.bottom
                })
            }
            function s(t, e, n, r, i) {
                t.openDialog ? t.openDialog(e, i, {
                    value: r,
                    selectValueOnOpen: !0,
                    bottom: t.options.search.bottom
                }) : i(prompt(n, r))
            }
            function l(t, e, n, r) {
                t.openConfirm ? t.openConfirm(e, r) : confirm(n) && r[0]()
            }
            function c(t) {
                return t.replace(/\\([nrt\\])/g, (function(t, e) {
                    return "n" == e ? "\n" : "r" == e ? "\r" : "t" == e ? "\t" : "\\" == e ? "\\" : t
                }
                ))
            }
            function u(t) {
                var e = t.match(/^\/(.*)\/([a-z]*)$/);
                if (e)
                    try {
                        t = new RegExp(e[1],-1 == e[2].indexOf("i") ? "" : "i")
                    } catch (n) {}
                else
                    t = c(t);
                return ("string" == typeof t ? "" == t : t.test("")) && (t = /x^/),
                t
            }
            function h(t, n, r) {
                n.queryText = r,
                n.query = u(r),
                t.removeOverlay(n.overlay, i(n.query)),
                n.overlay = e(n.query, i(n.query)),
                t.addOverlay(n.overlay),
                t.showMatchesOnScrollbar && (n.annotate && (n.annotate.clear(),
                n.annotate = null),
                n.annotate = t.showMatchesOnScrollbar(n.query, i(n.query)))
            }
            function f(e, n, i, o) {
                var l = r(e);
                if (l.query)
                    return d(e, n);
                var c = e.getSelection() || l.lastQuery;
                if (c instanceof RegExp && "x^" == c.source && (c = null),
                i && e.openDialog) {
                    var u = null
                      , f = function(n, r) {
                        t.e_stop(r),
                        n && (n != l.queryText && (h(e, l, n),
                        l.posFrom = l.posTo = e.getCursor()),
                        u && (u.style.opacity = 1),
                        d(e, r.shiftKey, (function(t, n) {
                            var r;
                            n.line < 3 && document.querySelector && (r = e.display.wrapper.querySelector(".CodeMirror-dialog")) && r.getBoundingClientRect().bottom - 4 > e.cursorCoords(n, "window").top && ((u = r).style.opacity = .4)
                        }
                        )))
                    };
                    a(e, v(e), c, f, (function(n, i) {
                        var o = t.keyName(n)
                          , a = e.getOption("extraKeys")
                          , s = a && a[o] || t.keyMap[e.getOption("keyMap")][o];
                        "findNext" == s || "findPrev" == s || "findPersistentNext" == s || "findPersistentPrev" == s ? (t.e_stop(n),
                        h(e, r(e), i),
                        e.execCommand(s)) : "find" != s && "findPersistent" != s || (t.e_stop(n),
                        f(i, n))
                    }
                    )),
                    o && c && (h(e, l, c),
                    d(e, n))
                } else
                    s(e, v(e), "Search for:", c, (function(t) {
                        t && !l.query && e.operation((function() {
                            h(e, l, t),
                            l.posFrom = l.posTo = e.getCursor(),
                            d(e, n)
                        }
                        ))
                    }
                    ))
            }
            function d(e, n, i) {
                e.operation((function() {
                    var a = r(e)
                      , s = o(e, a.query, n ? a.posFrom : a.posTo);
                    (s.find(n) || (s = o(e, a.query, n ? t.Pos(e.lastLine()) : t.Pos(e.firstLine(), 0)),
                    s.find(n))) && (e.setSelection(s.from(), s.to()),
                    e.scrollIntoView({
                        from: s.from(),
                        to: s.to()
                    }, 20),
                    a.posFrom = s.from(),
                    a.posTo = s.to(),
                    i && i(s.from(), s.to()))
                }
                ))
            }
            function p(t) {
                t.operation((function() {
                    var e = r(t);
                    e.lastQuery = e.query,
                    e.query && (e.query = e.queryText = null,
                    t.removeOverlay(e.overlay),
                    e.annotate && (e.annotate.clear(),
                    e.annotate = null))
                }
                ))
            }
            function g(t, e) {
                var n = t ? document.createElement(t) : document.createDocumentFragment();
                for (var r in e)
                    n[r] = e[r];
                for (var i = 2; i < arguments.length; i++) {
                    var o = arguments[i];
                    n.appendChild("string" == typeof o ? document.createTextNode(o) : o)
                }
                return n
            }
            function v(t) {
                var e = g("label", {
                    className: "CodeMirror-search-label"
                }, t.phrase("Search:"), g("input", {
                    type: "text",
                    style: "width: 10em",
                    className: "CodeMirror-search-field",
                    id: "CodeMirror-search-field"
                }));
                return e.setAttribute("for", "CodeMirror-search-field"),
                g("", null, e, " ", g("span", {
                    style: "color: #666",
                    className: "CodeMirror-search-hint"
                }, t.phrase("(Use /re/ syntax for regexp search)")))
            }
            function m(t) {
                return g("", null, " ", g("input", {
                    type: "text",
                    style: "width: 10em",
                    className: "CodeMirror-search-field"
                }), " ", g("span", {
                    style: "color: #666",
                    className: "CodeMirror-search-hint"
                }, t.phrase("(Use /re/ syntax for regexp search)")))
            }
            function y(t) {
                return g("", null, g("span", {
                    className: "CodeMirror-search-label"
                }, t.phrase("With:")), " ", g("input", {
                    type: "text",
                    style: "width: 10em",
                    className: "CodeMirror-search-field"
                }))
            }
            function A(t) {
                return g("", null, g("span", {
                    className: "CodeMirror-search-label"
                }, t.phrase("Replace?")), " ", g("button", {}, t.phrase("Yes")), " ", g("button", {}, t.phrase("No")), " ", g("button", {}, t.phrase("All")), " ", g("button", {}, t.phrase("Stop")))
            }
            function w(t, e, n) {
                t.operation((function() {
                    for (var r = o(t, e); r.findNext(); )
                        if ("string" != typeof e) {
                            var i = t.getRange(r.from(), r.to()).match(e);
                            r.replace(n.replace(/\$(\d)/g, (function(t, e) {
                                return i[e]
                            }
                            )))
                        } else
                            r.replace(n)
                }
                ))
            }
            function b(t, e) {
                if (!t.getOption("readOnly")) {
                    var n = t.getSelection() || r(t).lastQuery
                      , i = e ? t.phrase("Replace all:") : t.phrase("Replace:")
                      , a = g("", null, g("span", {
                        className: "CodeMirror-search-label"
                    }, i), m(t));
                    s(t, a, i, n, (function(n) {
                        n && (n = u(n),
                        s(t, y(t), t.phrase("Replace with:"), "", (function(r) {
                            if (r = c(r),
                            e)
                                w(t, n, r);
                            else {
                                p(t);
                                var i = o(t, n, t.getCursor("from"))
                                  , a = function() {
                                    var e, c = i.from();
                                    !(e = i.findNext()) && (i = o(t, n),
                                    !(e = i.findNext()) || c && i.from().line == c.line && i.from().ch == c.ch) || (t.setSelection(i.from(), i.to()),
                                    t.scrollIntoView({
                                        from: i.from(),
                                        to: i.to()
                                    }),
                                    l(t, A(t), t.phrase("Replace?"), [function() {
                                        s(e)
                                    }
                                    , a, function() {
                                        w(t, n, r)
                                    }
                                    ]))
                                }
                                  , s = function(t) {
                                    i.replace("string" == typeof n ? r : r.replace(/\$(\d)/g, (function(e, n) {
                                        return t[n]
                                    }
                                    ))),
                                    a()
                                };
                                a()
                            }
                        }
                        )))
                    }
                    ))
                }
            }
            t.defineOption("search", {
                bottom: !1
            }),
            t.commands.find = function(t) {
                p(t),
                f(t)
            }
            ,
            t.commands.findPersistent = function(t) {
                p(t),
                f(t, !1, !0)
            }
            ,
            t.commands.findPersistentNext = function(t) {
                f(t, !1, !0, !0)
            }
            ,
            t.commands.findPersistentPrev = function(t) {
                f(t, !0, !0, !0)
            }
            ,
            t.commands.findNext = f,
            t.commands.findPrev = function(t) {
                f(t, !0)
            }
            ,
            t.commands.clearSearch = p,
            t.commands.replace = b,
            t.commands.replaceAll = function(t) {
                b(t, !0)
            }
        }
        ))
    },
    32095: function(t, e, n) {
        (function(t) {
            t(n(4631))
        }
        )((function(t) {
            "use strict";
            var e, n, r = t.Pos;
            function i(t) {
                var e = t.flags;
                return null != e ? e : (t.ignoreCase ? "i" : "") + (t.global ? "g" : "") + (t.multiline ? "m" : "")
            }
            function o(t, e) {
                for (var n = i(t), r = n, o = 0; o < e.length; o++)
                    -1 == r.indexOf(e.charAt(o)) && (r += e.charAt(o));
                return n == r ? t : new RegExp(t.source,r)
            }
            function a(t) {
                return /\\s|\\n|\n|\\W|\\D|\[\^/.test(t.source)
            }
            function s(t, e, n) {
                e = o(e, "g");
                for (var i = n.line, a = n.ch, s = t.lastLine(); i <= s; i++,
                a = 0) {
                    e.lastIndex = a;
                    var l = t.getLine(i)
                      , c = e.exec(l);
                    if (c)
                        return {
                            from: r(i, c.index),
                            to: r(i, c.index + c[0].length),
                            match: c
                        }
                }
            }
            function l(t, e, n) {
                if (!a(e))
                    return s(t, e, n);
                e = o(e, "gm");
                for (var i, l = 1, c = n.line, u = t.lastLine(); c <= u; ) {
                    for (var h = 0; h < l; h++) {
                        if (c > u)
                            break;
                        var f = t.getLine(c++);
                        i = null == i ? f : i + "\n" + f
                    }
                    l *= 2,
                    e.lastIndex = n.ch;
                    var d = e.exec(i);
                    if (d) {
                        var p = i.slice(0, d.index).split("\n")
                          , g = d[0].split("\n")
                          , v = n.line + p.length - 1
                          , m = p[p.length - 1].length;
                        return {
                            from: r(v, m),
                            to: r(v + g.length - 1, 1 == g.length ? m + g[0].length : g[g.length - 1].length),
                            match: d
                        }
                    }
                }
            }
            function c(t, e, n) {
                var r, i = 0;
                while (i <= t.length) {
                    e.lastIndex = i;
                    var o = e.exec(t);
                    if (!o)
                        break;
                    var a = o.index + o[0].length;
                    if (a > t.length - n)
                        break;
                    (!r || a > r.index + r[0].length) && (r = o),
                    i = o.index + 1
                }
                return r
            }
            function u(t, e, n) {
                e = o(e, "g");
                for (var i = n.line, a = n.ch, s = t.firstLine(); i >= s; i--,
                a = -1) {
                    var l = t.getLine(i)
                      , u = c(l, e, a < 0 ? 0 : l.length - a);
                    if (u)
                        return {
                            from: r(i, u.index),
                            to: r(i, u.index + u[0].length),
                            match: u
                        }
                }
            }
            function h(t, e, n) {
                if (!a(e))
                    return u(t, e, n);
                e = o(e, "gm");
                for (var i, s = 1, l = t.getLine(n.line).length - n.ch, h = n.line, f = t.firstLine(); h >= f; ) {
                    for (var d = 0; d < s && h >= f; d++) {
                        var p = t.getLine(h--);
                        i = null == i ? p : p + "\n" + i
                    }
                    s *= 2;
                    var g = c(i, e, l);
                    if (g) {
                        var v = i.slice(0, g.index).split("\n")
                          , m = g[0].split("\n")
                          , y = h + v.length
                          , A = v[v.length - 1].length;
                        return {
                            from: r(y, A),
                            to: r(y + m.length - 1, 1 == m.length ? A + m[0].length : m[m.length - 1].length),
                            match: g
                        }
                    }
                }
            }
            function f(t, e, n, r) {
                if (t.length == e.length)
                    return n;
                for (var i = 0, o = n + Math.max(0, t.length - e.length); ; ) {
                    if (i == o)
                        return i;
                    var a = i + o >> 1
                      , s = r(t.slice(0, a)).length;
                    if (s == n)
                        return a;
                    s > n ? o = a : i = a + 1
                }
            }
            function d(t, i, o, a) {
                if (!i.length)
                    return null;
                var s = a ? e : n
                  , l = s(i).split(/\r|\n\r?/);
                t: for (var c = o.line, u = o.ch, h = t.lastLine() + 1 - l.length; c <= h; c++,
                u = 0) {
                    var d = t.getLine(c).slice(u)
                      , p = s(d);
                    if (1 == l.length) {
                        var g = p.indexOf(l[0]);
                        if (-1 == g)
                            continue t;
                        o = f(d, p, g, s) + u;
                        return {
                            from: r(c, f(d, p, g, s) + u),
                            to: r(c, f(d, p, g + l[0].length, s) + u)
                        }
                    }
                    var v = p.length - l[0].length;
                    if (p.slice(v) == l[0]) {
                        for (var m = 1; m < l.length - 1; m++)
                            if (s(t.getLine(c + m)) != l[m])
                                continue t;
                        var y = t.getLine(c + l.length - 1)
                          , A = s(y)
                          , w = l[l.length - 1];
                        if (A.slice(0, w.length) == w)
                            return {
                                from: r(c, f(d, p, v, s) + u),
                                to: r(c + l.length - 1, f(y, A, w.length, s))
                            }
                    }
                }
            }
            function p(t, i, o, a) {
                if (!i.length)
                    return null;
                var s = a ? e : n
                  , l = s(i).split(/\r|\n\r?/);
                t: for (var c = o.line, u = o.ch, h = t.firstLine() - 1 + l.length; c >= h; c--,
                u = -1) {
                    var d = t.getLine(c);
                    u > -1 && (d = d.slice(0, u));
                    var p = s(d);
                    if (1 == l.length) {
                        var g = p.lastIndexOf(l[0]);
                        if (-1 == g)
                            continue t;
                        return {
                            from: r(c, f(d, p, g, s)),
                            to: r(c, f(d, p, g + l[0].length, s))
                        }
                    }
                    var v = l[l.length - 1];
                    if (p.slice(0, v.length) == v) {
                        var m = 1;
                        for (o = c - l.length + 1; m < l.length - 1; m++)
                            if (s(t.getLine(o + m)) != l[m])
                                continue t;
                        var y = t.getLine(c + 1 - l.length)
                          , A = s(y);
                        if (A.slice(A.length - l[0].length) == l[0])
                            return {
                                from: r(c + 1 - l.length, f(y, A, y.length - l[0].length, s)),
                                to: r(c, f(d, p, v.length, s))
                            }
                    }
                }
            }
            function g(t, e, n, i) {
                var a;
                this.atOccurrence = !1,
                this.afterEmptyMatch = !1,
                this.doc = t,
                n = n ? t.clipPos(n) : r(0, 0),
                this.pos = {
                    from: n,
                    to: n
                },
                "object" == typeof i ? a = i.caseFold : (a = i,
                i = null),
                "string" == typeof e ? (null == a && (a = !1),
                this.matches = function(n, r) {
                    return (n ? p : d)(t, e, r, a)
                }
                ) : (e = o(e, "gm"),
                i && !1 === i.multiline ? this.matches = function(n, r) {
                    return (n ? u : s)(t, e, r)
                }
                : this.matches = function(n, r) {
                    return (n ? h : l)(t, e, r)
                }
                )
            }
            String.prototype.normalize ? (e = function(t) {
                return t.normalize("NFD").toLowerCase()
            }
            ,
            n = function(t) {
                return t.normalize("NFD")
            }
            ) : (e = function(t) {
                return t.toLowerCase()
            }
            ,
            n = function(t) {
                return t
            }
            ),
            g.prototype = {
                findNext: function() {
                    return this.find(!1)
                },
                findPrevious: function() {
                    return this.find(!0)
                },
                find: function(e) {
                    var n = this.doc.clipPos(e ? this.pos.from : this.pos.to);
                    if (this.afterEmptyMatch && this.atOccurrence && (n = r(n.line, n.ch),
                    e ? (n.ch--,
                    n.ch < 0 && (n.line--,
                    n.ch = (this.doc.getLine(n.line) || "").length)) : (n.ch++,
                    n.ch > (this.doc.getLine(n.line) || "").length && (n.ch = 0,
                    n.line++)),
                    0 != t.cmpPos(n, this.doc.clipPos(n))))
                        return this.atOccurrence = !1;
                    var i = this.matches(e, n);
                    if (this.afterEmptyMatch = i && 0 == t.cmpPos(i.from, i.to),
                    i)
                        return this.pos = i,
                        this.atOccurrence = !0,
                        this.pos.match || !0;
                    var o = r(e ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
                    return this.pos = {
                        from: o,
                        to: o
                    },
                    this.atOccurrence = !1
                },
                from: function() {
                    if (this.atOccurrence)
                        return this.pos.from
                },
                to: function() {
                    if (this.atOccurrence)
                        return this.pos.to
                },
                replace: function(e, n) {
                    if (this.atOccurrence) {
                        var i = t.splitLines(e);
                        this.doc.replaceRange(i, this.pos.from, this.pos.to, n),
                        this.pos.to = r(this.pos.from.line + i.length - 1, i[i.length - 1].length + (1 == i.length ? this.pos.from.ch : 0))
                    }
                }
            },
            t.defineExtension("getSearchCursor", (function(t, e, n) {
                return new g(this.doc,t,e,n)
            }
            )),
            t.defineDocExtension("getSearchCursor", (function(t, e, n) {
                return new g(this,t,e,n)
            }
            )),
            t.defineExtension("selectMatches", (function(e, n) {
                var r = []
                  , i = this.getSearchCursor(e, this.getCursor("from"), n);
                while (i.findNext()) {
                    if (t.cmpPos(i.to(), this.getCursor("to")) > 0)
                        break;
                    r.push({
                        anchor: i.from(),
                        head: i.to()
                    })
                }
                r.length && this.setSelections(r, 0)
            }
            ))
        }
        ))
    },
    4631: function(t) {
        (function(e, n) {
            t.exports = n()
        }
        )(0, (function() {
            "use strict";
            var t = navigator.userAgent
              , e = navigator.platform
              , n = /gecko\/\d/i.test(t)
              , r = /MSIE \d/.test(t)
              , i = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(t)
              , o = /Edge\/(\d+)/.exec(t)
              , a = r || i || o
              , s = a && (r ? document.documentMode || 6 : +(o || i)[1])
              , l = !o && /WebKit\//.test(t)
              , c = l && /Qt\/\d+\.\d+/.test(t)
              , u = !o && /Chrome\/(\d+)/.exec(t)
              , h = u && +u[1]
              , f = /Opera\//.test(t)
              , d = /Apple Computer/.test(navigator.vendor)
              , p = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(t)
              , g = /PhantomJS/.test(t)
              , v = d && (/Mobile\/\w+/.test(t) || navigator.maxTouchPoints > 2)
              , m = /Android/.test(t)
              , y = v || m || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(t)
              , A = v || /Mac/.test(e)
              , w = /\bCrOS\b/.test(t)
              , b = /win/i.test(e)
              , S = f && t.match(/Version\/(\d*\.\d*)/);
            S && (S = Number(S[1])),
            S && S >= 15 && (f = !1,
            l = !0);
            var C = A && (c || f && (null == S || S < 12.11))
              , E = n || a && s >= 9;
            function x(t) {
                return new RegExp("(^|\\s)" + t + "(?:$|\\s)\\s*")
            }
            var k, L = function(t, e) {
                var n = t.className
                  , r = x(e).exec(n);
                if (r) {
                    var i = n.slice(r.index + r[0].length);
                    t.className = n.slice(0, r.index) + (i ? r[1] + i : "")
                }
            };
            function T(t) {
                for (var e = t.childNodes.length; e > 0; --e)
                    t.removeChild(t.firstChild);
                return t
            }
            function I(t, e) {
                return T(t).appendChild(e)
            }
            function O(t, e, n, r) {
                var i = document.createElement(t);
                if (n && (i.className = n),
                r && (i.style.cssText = r),
                "string" == typeof e)
                    i.appendChild(document.createTextNode(e));
                else if (e)
                    for (var o = 0; o < e.length; ++o)
                        i.appendChild(e[o]);
                return i
            }
            function M(t, e, n, r) {
                var i = O(t, e, n, r);
                return i.setAttribute("role", "presentation"),
                i
            }
            function N(t, e) {
                if (3 == e.nodeType && (e = e.parentNode),
                t.contains)
                    return t.contains(e);
                do {
                    if (11 == e.nodeType && (e = e.host),
                    e == t)
                        return !0
                } while (e = e.parentNode)
            }
            function B(t) {
                var e;
                try {
                    e = t.activeElement
                } catch (n) {
                    e = t.body || null
                }
                while (e && e.shadowRoot && e.shadowRoot.activeElement)
                    e = e.shadowRoot.activeElement;
                return e
            }
            function R(t, e) {
                var n = t.className;
                x(e).test(n) || (t.className += (n ? " " : "") + e)
            }
            function P(t, e) {
                for (var n = t.split(" "), r = 0; r < n.length; r++)
                    n[r] && !x(n[r]).test(e) && (e += " " + n[r]);
                return e
            }
            k = document.createRange ? function(t, e, n, r) {
                var i = document.createRange();
                return i.setEnd(r || t, n),
                i.setStart(t, e),
                i
            }
            : function(t, e, n) {
                var r = document.body.createTextRange();
                try {
                    r.moveToElementText(t.parentNode)
                } catch (i) {
                    return r
                }
                return r.collapse(!0),
                r.moveEnd("character", n),
                r.moveStart("character", e),
                r
            }
            ;
            var D = function(t) {
                t.select()
            };
            function F(t) {
                return t.display.wrapper.ownerDocument
            }
            function _(t) {
                return F(t).defaultView
            }
            function U(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return function() {
                    return t.apply(null, e)
                }
            }
            function W(t, e, n) {
                for (var r in e || (e = {}),
                t)
                    !t.hasOwnProperty(r) || !1 === n && e.hasOwnProperty(r) || (e[r] = t[r]);
                return e
            }
            function Q(t, e, n, r, i) {
                null == e && (e = t.search(/[^\s\u00a0]/),
                -1 == e && (e = t.length));
                for (var o = r || 0, a = i || 0; ; ) {
                    var s = t.indexOf("\t", o);
                    if (s < 0 || s >= e)
                        return a + (e - o);
                    a += s - o,
                    a += n - a % n,
                    o = s + 1
                }
            }
            v ? D = function(t) {
                t.selectionStart = 0,
                t.selectionEnd = t.value.length
            }
            : a && (D = function(t) {
                try {
                    t.select()
                } catch (e) {}
            }
            );
            var H = function() {
                this.id = null,
                this.f = null,
                this.time = 0,
                this.handler = U(this.onTimeout, this)
            };
            function J(t, e) {
                for (var n = 0; n < t.length; ++n)
                    if (t[n] == e)
                        return n;
                return -1
            }
            H.prototype.onTimeout = function(t) {
                t.id = 0,
                t.time <= +new Date ? t.f() : setTimeout(t.handler, t.time - +new Date)
            }
            ,
            H.prototype.set = function(t, e) {
                this.f = e;
                var n = +new Date + t;
                (!this.id || n < this.time) && (clearTimeout(this.id),
                this.id = setTimeout(this.handler, t),
                this.time = n)
            }
            ;
            var V = 50
              , z = {
                toString: function() {
                    return "CodeMirror.Pass"
                }
            }
              , K = {
                scroll: !1
            }
              , X = {
                origin: "*mouse"
            }
              , G = {
                origin: "+move"
            };
            function j(t, e, n) {
                for (var r = 0, i = 0; ; ) {
                    var o = t.indexOf("\t", r);
                    -1 == o && (o = t.length);
                    var a = o - r;
                    if (o == t.length || i + a >= e)
                        return r + Math.min(a, e - i);
                    if (i += o - r,
                    i += n - i % n,
                    r = o + 1,
                    i >= e)
                        return r
                }
            }
            var Z = [""];
            function Y(t) {
                while (Z.length <= t)
                    Z.push(q(Z) + " ");
                return Z[t]
            }
            function q(t) {
                return t[t.length - 1]
            }
            function $(t, e) {
                for (var n = [], r = 0; r < t.length; r++)
                    n[r] = e(t[r], r);
                return n
            }
            function tt(t, e, n) {
                var r = 0
                  , i = n(e);
                while (r < t.length && n(t[r]) <= i)
                    r++;
                t.splice(r, 0, e)
            }
            function et() {}
            function nt(t, e) {
                var n;
                return Object.create ? n = Object.create(t) : (et.prototype = t,
                n = new et),
                e && W(e, n),
                n
            }
            var rt = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
            function it(t) {
                return /\w/.test(t) || t > "" && (t.toUpperCase() != t.toLowerCase() || rt.test(t))
            }
            function ot(t, e) {
                return e ? !!(e.source.indexOf("\\w") > -1 && it(t)) || e.test(t) : it(t)
            }
            function at(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e) && t[e])
                        return !1;
                return !0
            }
            var st = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
            function lt(t) {
                return t.charCodeAt(0) >= 768 && st.test(t)
            }
            function ct(t, e, n) {
                while ((n < 0 ? e > 0 : e < t.length) && lt(t.charAt(e)))
                    e += n;
                return e
            }
            function ut(t, e, n) {
                for (var r = e > n ? -1 : 1; ; ) {
                    if (e == n)
                        return e;
                    var i = (e + n) / 2
                      , o = r < 0 ? Math.ceil(i) : Math.floor(i);
                    if (o == e)
                        return t(o) ? e : n;
                    t(o) ? n = o : e = o + r
                }
            }
            function ht(t, e, n, r) {
                if (!t)
                    return r(e, n, "ltr", 0);
                for (var i = !1, o = 0; o < t.length; ++o) {
                    var a = t[o];
                    (a.from < n && a.to > e || e == n && a.to == e) && (r(Math.max(a.from, e), Math.min(a.to, n), 1 == a.level ? "rtl" : "ltr", o),
                    i = !0)
                }
                i || r(e, n, "ltr")
            }
            var ft = null;
            function dt(t, e, n) {
                var r;
                ft = null;
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o.from < e && o.to > e)
                        return i;
                    o.to == e && (o.from != o.to && "before" == n ? r = i : ft = i),
                    o.from == e && (o.from != o.to && "before" != n ? r = i : ft = i)
                }
                return null != r ? r : ft
            }
            var pt = function() {
                var t = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
                  , e = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
                function n(n) {
                    return n <= 247 ? t.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1785 ? e.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : 8204 == n ? "b" : "L"
                }
                var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
                  , i = /[stwN]/
                  , o = /[LRr]/
                  , a = /[Lb1n]/
                  , s = /[1n]/;
                function l(t, e, n) {
                    this.level = t,
                    this.from = e,
                    this.to = n
                }
                return function(t, e) {
                    var c = "ltr" == e ? "L" : "R";
                    if (0 == t.length || "ltr" == e && !r.test(t))
                        return !1;
                    for (var u = t.length, h = [], f = 0; f < u; ++f)
                        h.push(n(t.charCodeAt(f)));
                    for (var d = 0, p = c; d < u; ++d) {
                        var g = h[d];
                        "m" == g ? h[d] = p : p = g
                    }
                    for (var v = 0, m = c; v < u; ++v) {
                        var y = h[v];
                        "1" == y && "r" == m ? h[v] = "n" : o.test(y) && (m = y,
                        "r" == y && (h[v] = "R"))
                    }
                    for (var A = 1, w = h[0]; A < u - 1; ++A) {
                        var b = h[A];
                        "+" == b && "1" == w && "1" == h[A + 1] ? h[A] = "1" : "," != b || w != h[A + 1] || "1" != w && "n" != w || (h[A] = w),
                        w = b
                    }
                    for (var S = 0; S < u; ++S) {
                        var C = h[S];
                        if ("," == C)
                            h[S] = "N";
                        else if ("%" == C) {
                            var E = void 0;
                            for (E = S + 1; E < u && "%" == h[E]; ++E)
                                ;
                            for (var x = S && "!" == h[S - 1] || E < u && "1" == h[E] ? "1" : "N", k = S; k < E; ++k)
                                h[k] = x;
                            S = E - 1
                        }
                    }
                    for (var L = 0, T = c; L < u; ++L) {
                        var I = h[L];
                        "L" == T && "1" == I ? h[L] = "L" : o.test(I) && (T = I)
                    }
                    for (var O = 0; O < u; ++O)
                        if (i.test(h[O])) {
                            var M = void 0;
                            for (M = O + 1; M < u && i.test(h[M]); ++M)
                                ;
                            for (var N = "L" == (O ? h[O - 1] : c), B = "L" == (M < u ? h[M] : c), R = N == B ? N ? "L" : "R" : c, P = O; P < M; ++P)
                                h[P] = R;
                            O = M - 1
                        }
                    for (var D, F = [], _ = 0; _ < u; )
                        if (a.test(h[_])) {
                            var U = _;
                            for (++_; _ < u && a.test(h[_]); ++_)
                                ;
                            F.push(new l(0,U,_))
                        } else {
                            var W = _
                              , Q = F.length
                              , H = "rtl" == e ? 1 : 0;
                            for (++_; _ < u && "L" != h[_]; ++_)
                                ;
                            for (var J = W; J < _; )
                                if (s.test(h[J])) {
                                    W < J && (F.splice(Q, 0, new l(1,W,J)),
                                    Q += H);
                                    var V = J;
                                    for (++J; J < _ && s.test(h[J]); ++J)
                                        ;
                                    F.splice(Q, 0, new l(2,V,J)),
                                    Q += H,
                                    W = J
                                } else
                                    ++J;
                            W < _ && F.splice(Q, 0, new l(1,W,_))
                        }
                    return "ltr" == e && (1 == F[0].level && (D = t.match(/^\s+/)) && (F[0].from = D[0].length,
                    F.unshift(new l(0,0,D[0].length))),
                    1 == q(F).level && (D = t.match(/\s+$/)) && (q(F).to -= D[0].length,
                    F.push(new l(0,u - D[0].length,u)))),
                    "rtl" == e ? F.reverse() : F
                }
            }();
            function gt(t, e) {
                var n = t.order;
                return null == n && (n = t.order = pt(t.text, e)),
                n
            }
            var vt = []
              , mt = function(t, e, n) {
                if (t.addEventListener)
                    t.addEventListener(e, n, !1);
                else if (t.attachEvent)
                    t.attachEvent("on" + e, n);
                else {
                    var r = t._handlers || (t._handlers = {});
                    r[e] = (r[e] || vt).concat(n)
                }
            };
            function yt(t, e) {
                return t._handlers && t._handlers[e] || vt
            }
            function At(t, e, n) {
                if (t.removeEventListener)
                    t.removeEventListener(e, n, !1);
                else if (t.detachEvent)
                    t.detachEvent("on" + e, n);
                else {
                    var r = t._handlers
                      , i = r && r[e];
                    if (i) {
                        var o = J(i, n);
                        o > -1 && (r[e] = i.slice(0, o).concat(i.slice(o + 1)))
                    }
                }
            }
            function wt(t, e) {
                var n = yt(t, e);
                if (n.length)
                    for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
                        n[i].apply(null, r)
            }
            function bt(t, e, n) {
                return "string" == typeof e && (e = {
                    type: e,
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    }
                }),
                wt(t, n || e.type, t, e),
                Lt(e) || e.codemirrorIgnore
            }
            function St(t) {
                var e = t._handlers && t._handlers.cursorActivity;
                if (e)
                    for (var n = t.curOp.cursorActivityHandlers || (t.curOp.cursorActivityHandlers = []), r = 0; r < e.length; ++r)
                        -1 == J(n, e[r]) && n.push(e[r])
            }
            function Ct(t, e) {
                return yt(t, e).length > 0
            }
            function Et(t) {
                t.prototype.on = function(t, e) {
                    mt(this, t, e)
                }
                ,
                t.prototype.off = function(t, e) {
                    At(this, t, e)
                }
            }
            function xt(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            }
            function kt(t) {
                t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            }
            function Lt(t) {
                return null != t.defaultPrevented ? t.defaultPrevented : 0 == t.returnValue
            }
            function Tt(t) {
                xt(t),
                kt(t)
            }
            function It(t) {
                return t.target || t.srcElement
            }
            function Ot(t) {
                var e = t.which;
                return null == e && (1 & t.button ? e = 1 : 2 & t.button ? e = 3 : 4 & t.button && (e = 2)),
                A && t.ctrlKey && 1 == e && (e = 3),
                e
            }
            var Mt, Nt, Bt = function() {
                if (a && s < 9)
                    return !1;
                var t = O("div");
                return "draggable"in t || "dragDrop"in t
            }();
            function Rt(t) {
                if (null == Mt) {
                    var e = O("span", "​");
                    I(t, O("span", [e, document.createTextNode("x")])),
                    0 != t.firstChild.offsetHeight && (Mt = e.offsetWidth <= 1 && e.offsetHeight > 2 && !(a && s < 8))
                }
                var n = Mt ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
                return n.setAttribute("cm-text", ""),
                n
            }
            function Pt(t) {
                if (null != Nt)
                    return Nt;
                var e = I(t, document.createTextNode("AخA"))
                  , n = k(e, 0, 1).getBoundingClientRect()
                  , r = k(e, 1, 2).getBoundingClientRect();
                return T(t),
                !(!n || n.left == n.right) && (Nt = r.right - n.right < 3)
            }
            var Dt = 3 != "\n\nb".split(/\n/).length ? function(t) {
                var e = 0
                  , n = []
                  , r = t.length;
                while (e <= r) {
                    var i = t.indexOf("\n", e);
                    -1 == i && (i = t.length);
                    var o = t.slice(e, "\r" == t.charAt(i - 1) ? i - 1 : i)
                      , a = o.indexOf("\r");
                    -1 != a ? (n.push(o.slice(0, a)),
                    e += a + 1) : (n.push(o),
                    e = i + 1)
                }
                return n
            }
            : function(t) {
                return t.split(/\r\n?|\n/)
            }
              , Ft = window.getSelection ? function(t) {
                try {
                    return t.selectionStart != t.selectionEnd
                } catch (e) {
                    return !1
                }
            }
            : function(t) {
                var e;
                try {
                    e = t.ownerDocument.selection.createRange()
                } catch (n) {}
                return !(!e || e.parentElement() != t) && 0 != e.compareEndPoints("StartToEnd", e)
            }
              , _t = function() {
                var t = O("div");
                return "oncopy"in t || (t.setAttribute("oncopy", "return;"),
                "function" == typeof t.oncopy)
            }()
              , Ut = null;
            function Wt(t) {
                if (null != Ut)
                    return Ut;
                var e = I(t, O("span", "x"))
                  , n = e.getBoundingClientRect()
                  , r = k(e, 0, 1).getBoundingClientRect();
                return Ut = Math.abs(n.left - r.left) > 1
            }
            var Qt = {}
              , Ht = {};
            function Jt(t, e) {
                arguments.length > 2 && (e.dependencies = Array.prototype.slice.call(arguments, 2)),
                Qt[t] = e
            }
            function Vt(t, e) {
                Ht[t] = e
            }
            function zt(t) {
                if ("string" == typeof t && Ht.hasOwnProperty(t))
                    t = Ht[t];
                else if (t && "string" == typeof t.name && Ht.hasOwnProperty(t.name)) {
                    var e = Ht[t.name];
                    "string" == typeof e && (e = {
                        name: e
                    }),
                    t = nt(e, t),
                    t.name = e.name
                } else {
                    if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t))
                        return zt("application/xml");
                    if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+json$/.test(t))
                        return zt("application/json")
                }
                return "string" == typeof t ? {
                    name: t
                } : t || {
                    name: "null"
                }
            }
            function Kt(t, e) {
                e = zt(e);
                var n = Qt[e.name];
                if (!n)
                    return Kt(t, "text/plain");
                var r = n(t, e);
                if (Xt.hasOwnProperty(e.name)) {
                    var i = Xt[e.name];
                    for (var o in i)
                        i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]),
                        r[o] = i[o])
                }
                if (r.name = e.name,
                e.helperType && (r.helperType = e.helperType),
                e.modeProps)
                    for (var a in e.modeProps)
                        r[a] = e.modeProps[a];
                return r
            }
            var Xt = {};
            function Gt(t, e) {
                var n = Xt.hasOwnProperty(t) ? Xt[t] : Xt[t] = {};
                W(e, n)
            }
            function jt(t, e) {
                if (!0 === e)
                    return e;
                if (t.copyState)
                    return t.copyState(e);
                var n = {};
                for (var r in e) {
                    var i = e[r];
                    i instanceof Array && (i = i.concat([])),
                    n[r] = i
                }
                return n
            }
            function Zt(t, e) {
                var n;
                while (t.innerMode) {
                    if (n = t.innerMode(e),
                    !n || n.mode == t)
                        break;
                    e = n.state,
                    t = n.mode
                }
                return n || {
                    mode: t,
                    state: e
                }
            }
            function Yt(t, e, n) {
                return !t.startState || t.startState(e, n)
            }
            var qt = function(t, e, n) {
                this.pos = this.start = 0,
                this.string = t,
                this.tabSize = e || 8,
                this.lastColumnPos = this.lastColumnValue = 0,
                this.lineStart = 0,
                this.lineOracle = n
            };
            function $t(t, e) {
                if (e -= t.first,
                e < 0 || e >= t.size)
                    throw new Error("There is no line " + (e + t.first) + " in the document.");
                var n = t;
                while (!n.lines)
                    for (var r = 0; ; ++r) {
                        var i = n.children[r]
                          , o = i.chunkSize();
                        if (e < o) {
                            n = i;
                            break
                        }
                        e -= o
                    }
                return n.lines[e]
            }
            function te(t, e, n) {
                var r = []
                  , i = e.line;
                return t.iter(e.line, n.line + 1, (function(t) {
                    var o = t.text;
                    i == n.line && (o = o.slice(0, n.ch)),
                    i == e.line && (o = o.slice(e.ch)),
                    r.push(o),
                    ++i
                }
                )),
                r
            }
            function ee(t, e, n) {
                var r = [];
                return t.iter(e, n, (function(t) {
                    r.push(t.text)
                }
                )),
                r
            }
            function ne(t, e) {
                var n = e - t.height;
                if (n)
                    for (var r = t; r; r = r.parent)
                        r.height += n
            }
            function re(t) {
                if (null == t.parent)
                    return null;
                for (var e = t.parent, n = J(e.lines, t), r = e.parent; r; e = r,
                r = r.parent)
                    for (var i = 0; ; ++i) {
                        if (r.children[i] == e)
                            break;
                        n += r.children[i].chunkSize()
                    }
                return n + e.first
            }
            function ie(t, e) {
                var n = t.first;
                t: do {
                    for (var r = 0; r < t.children.length; ++r) {
                        var i = t.children[r]
                          , o = i.height;
                        if (e < o) {
                            t = i;
                            continue t
                        }
                        e -= o,
                        n += i.chunkSize()
                    }
                    return n
                } while (!t.lines);
                for (var a = 0; a < t.lines.length; ++a) {
                    var s = t.lines[a]
                      , l = s.height;
                    if (e < l)
                        break;
                    e -= l
                }
                return n + a
            }
            function oe(t, e) {
                return e >= t.first && e < t.first + t.size
            }
            function ae(t, e) {
                return String(t.lineNumberFormatter(e + t.firstLineNumber))
            }
            function se(t, e, n) {
                if (void 0 === n && (n = null),
                !(this instanceof se))
                    return new se(t,e,n);
                this.line = t,
                this.ch = e,
                this.sticky = n
            }
            function le(t, e) {
                return t.line - e.line || t.ch - e.ch
            }
            function ce(t, e) {
                return t.sticky == e.sticky && 0 == le(t, e)
            }
            function ue(t) {
                return se(t.line, t.ch)
            }
            function he(t, e) {
                return le(t, e) < 0 ? e : t
            }
            function fe(t, e) {
                return le(t, e) < 0 ? t : e
            }
            function de(t, e) {
                return Math.max(t.first, Math.min(e, t.first + t.size - 1))
            }
            function pe(t, e) {
                if (e.line < t.first)
                    return se(t.first, 0);
                var n = t.first + t.size - 1;
                return e.line > n ? se(n, $t(t, n).text.length) : ge(e, $t(t, e.line).text.length)
            }
            function ge(t, e) {
                var n = t.ch;
                return null == n || n > e ? se(t.line, e) : n < 0 ? se(t.line, 0) : t
            }
            function ve(t, e) {
                for (var n = [], r = 0; r < e.length; r++)
                    n[r] = pe(t, e[r]);
                return n
            }
            qt.prototype.eol = function() {
                return this.pos >= this.string.length
            }
            ,
            qt.prototype.sol = function() {
                return this.pos == this.lineStart
            }
            ,
            qt.prototype.peek = function() {
                return this.string.charAt(this.pos) || void 0
            }
            ,
            qt.prototype.next = function() {
                if (this.pos < this.string.length)
                    return this.string.charAt(this.pos++)
            }
            ,
            qt.prototype.eat = function(t) {
                var e, n = this.string.charAt(this.pos);
                if (e = "string" == typeof t ? n == t : n && (t.test ? t.test(n) : t(n)),
                e)
                    return ++this.pos,
                    n
            }
            ,
            qt.prototype.eatWhile = function(t) {
                var e = this.pos;
                while (this.eat(t))
                    ;
                return this.pos > e
            }
            ,
            qt.prototype.eatSpace = function() {
                var t = this.pos;
                while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))
                    ++this.pos;
                return this.pos > t
            }
            ,
            qt.prototype.skipToEnd = function() {
                this.pos = this.string.length
            }
            ,
            qt.prototype.skipTo = function(t) {
                var e = this.string.indexOf(t, this.pos);
                if (e > -1)
                    return this.pos = e,
                    !0
            }
            ,
            qt.prototype.backUp = function(t) {
                this.pos -= t
            }
            ,
            qt.prototype.column = function() {
                return this.lastColumnPos < this.start && (this.lastColumnValue = Q(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
                this.lastColumnPos = this.start),
                this.lastColumnValue - (this.lineStart ? Q(this.string, this.lineStart, this.tabSize) : 0)
            }
            ,
            qt.prototype.indentation = function() {
                return Q(this.string, null, this.tabSize) - (this.lineStart ? Q(this.string, this.lineStart, this.tabSize) : 0)
            }
            ,
            qt.prototype.match = function(t, e, n) {
                if ("string" != typeof t) {
                    var r = this.string.slice(this.pos).match(t);
                    return r && r.index > 0 ? null : (r && !1 !== e && (this.pos += r[0].length),
                    r)
                }
                var i = function(t) {
                    return n ? t.toLowerCase() : t
                }
                  , o = this.string.substr(this.pos, t.length);
                if (i(o) == i(t))
                    return !1 !== e && (this.pos += t.length),
                    !0
            }
            ,
            qt.prototype.current = function() {
                return this.string.slice(this.start, this.pos)
            }
            ,
            qt.prototype.hideFirstChars = function(t, e) {
                this.lineStart += t;
                try {
                    return e()
                } finally {
                    this.lineStart -= t
                }
            }
            ,
            qt.prototype.lookAhead = function(t) {
                var e = this.lineOracle;
                return e && e.lookAhead(t)
            }
            ,
            qt.prototype.baseToken = function() {
                var t = this.lineOracle;
                return t && t.baseToken(this.pos)
            }
            ;
            var me = function(t, e) {
                this.state = t,
                this.lookAhead = e
            }
              , ye = function(t, e, n, r) {
                this.state = e,
                this.doc = t,
                this.line = n,
                this.maxLookAhead = r || 0,
                this.baseTokens = null,
                this.baseTokenPos = 1
            };
            function Ae(t, e, n, r) {
                var i = [t.state.modeGen]
                  , o = {};
                Te(t, e.text, t.doc.mode, n, (function(t, e) {
                    return i.push(t, e)
                }
                ), o, r);
                for (var a = n.state, s = function(r) {
                    n.baseTokens = i;
                    var s = t.state.overlays[r]
                      , l = 1
                      , c = 0;
                    n.state = !0,
                    Te(t, e.text, s.mode, n, (function(t, e) {
                        var n = l;
                        while (c < t) {
                            var r = i[l];
                            r > t && i.splice(l, 1, t, i[l + 1], r),
                            l += 2,
                            c = Math.min(t, r)
                        }
                        if (e)
                            if (s.opaque)
                                i.splice(n, l - n, t, "overlay " + e),
                                l = n + 2;
                            else
                                for (; n < l; n += 2) {
                                    var o = i[n + 1];
                                    i[n + 1] = (o ? o + " " : "") + "overlay " + e
                                }
                    }
                    ), o),
                    n.state = a,
                    n.baseTokens = null,
                    n.baseTokenPos = 1
                }, l = 0; l < t.state.overlays.length; ++l)
                    s(l);
                return {
                    styles: i,
                    classes: o.bgClass || o.textClass ? o : null
                }
            }
            function we(t, e, n) {
                if (!e.styles || e.styles[0] != t.state.modeGen) {
                    var r = be(t, re(e))
                      , i = e.text.length > t.options.maxHighlightLength && jt(t.doc.mode, r.state)
                      , o = Ae(t, e, r);
                    i && (r.state = i),
                    e.stateAfter = r.save(!i),
                    e.styles = o.styles,
                    o.classes ? e.styleClasses = o.classes : e.styleClasses && (e.styleClasses = null),
                    n === t.doc.highlightFrontier && (t.doc.modeFrontier = Math.max(t.doc.modeFrontier, ++t.doc.highlightFrontier))
                }
                return e.styles
            }
            function be(t, e, n) {
                var r = t.doc
                  , i = t.display;
                if (!r.mode.startState)
                    return new ye(r,!0,e);
                var o = Ie(t, e, n)
                  , a = o > r.first && $t(r, o - 1).stateAfter
                  , s = a ? ye.fromSaved(r, a, o) : new ye(r,Yt(r.mode),o);
                return r.iter(o, e, (function(n) {
                    Se(t, n.text, s);
                    var r = s.line;
                    n.stateAfter = r == e - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? s.save() : null,
                    s.nextLine()
                }
                )),
                n && (r.modeFrontier = s.line),
                s
            }
            function Se(t, e, n, r) {
                var i = t.doc.mode
                  , o = new qt(e,t.options.tabSize,n);
                o.start = o.pos = r || 0,
                "" == e && Ce(i, n.state);
                while (!o.eol())
                    Ee(i, o, n.state),
                    o.start = o.pos
            }
            function Ce(t, e) {
                if (t.blankLine)
                    return t.blankLine(e);
                if (t.innerMode) {
                    var n = Zt(t, e);
                    return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
                }
            }
            function Ee(t, e, n, r) {
                for (var i = 0; i < 10; i++) {
                    r && (r[0] = Zt(t, n).mode);
                    var o = t.token(e, n);
                    if (e.pos > e.start)
                        return o
                }
                throw new Error("Mode " + t.name + " failed to advance stream.")
            }
            ye.prototype.lookAhead = function(t) {
                var e = this.doc.getLine(this.line + t);
                return null != e && t > this.maxLookAhead && (this.maxLookAhead = t),
                e
            }
            ,
            ye.prototype.baseToken = function(t) {
                if (!this.baseTokens)
                    return null;
                while (this.baseTokens[this.baseTokenPos] <= t)
                    this.baseTokenPos += 2;
                var e = this.baseTokens[this.baseTokenPos + 1];
                return {
                    type: e && e.replace(/( |^)overlay .*/, ""),
                    size: this.baseTokens[this.baseTokenPos] - t
                }
            }
            ,
            ye.prototype.nextLine = function() {
                this.line++,
                this.maxLookAhead > 0 && this.maxLookAhead--
            }
            ,
            ye.fromSaved = function(t, e, n) {
                return e instanceof me ? new ye(t,jt(t.mode, e.state),n,e.lookAhead) : new ye(t,jt(t.mode, e),n)
            }
            ,
            ye.prototype.save = function(t) {
                var e = !1 !== t ? jt(this.doc.mode, this.state) : this.state;
                return this.maxLookAhead > 0 ? new me(e,this.maxLookAhead) : e
            }
            ;
            var xe = function(t, e, n) {
                this.start = t.start,
                this.end = t.pos,
                this.string = t.current(),
                this.type = e || null,
                this.state = n
            };
            function ke(t, e, n, r) {
                var i, o = t.doc, a = o.mode;
                e = pe(o, e);
                var s, l = $t(o, e.line), c = be(t, e.line, n), u = new qt(l.text,t.options.tabSize,c);
                r && (s = []);
                while ((r || u.pos < e.ch) && !u.eol())
                    u.start = u.pos,
                    i = Ee(a, u, c.state),
                    r && s.push(new xe(u,i,jt(o.mode, c.state)));
                return r ? s : new xe(u,i,c.state)
            }
            function Le(t, e) {
                if (t)
                    for (; ; ) {
                        var n = t.match(/(?:^|\s+)line-(background-)?(\S+)/);
                        if (!n)
                            break;
                        t = t.slice(0, n.index) + t.slice(n.index + n[0].length);
                        var r = n[1] ? "bgClass" : "textClass";
                        null == e[r] ? e[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(e[r]) || (e[r] += " " + n[2])
                    }
                return t
            }
            function Te(t, e, n, r, i, o, a) {
                var s = n.flattenSpans;
                null == s && (s = t.options.flattenSpans);
                var l, c = 0, u = null, h = new qt(e,t.options.tabSize,r), f = t.options.addModeClass && [null];
                "" == e && Le(Ce(n, r.state), o);
                while (!h.eol()) {
                    if (h.pos > t.options.maxHighlightLength ? (s = !1,
                    a && Se(t, e, r, h.pos),
                    h.pos = e.length,
                    l = null) : l = Le(Ee(n, h, r.state, f), o),
                    f) {
                        var d = f[0].name;
                        d && (l = "m-" + (l ? d + " " + l : d))
                    }
                    if (!s || u != l) {
                        while (c < h.start)
                            c = Math.min(h.start, c + 5e3),
                            i(c, u);
                        u = l
                    }
                    h.start = h.pos
                }
                while (c < h.pos) {
                    var p = Math.min(h.pos, c + 5e3);
                    i(p, u),
                    c = p
                }
            }
            function Ie(t, e, n) {
                for (var r, i, o = t.doc, a = n ? -1 : e - (t.doc.mode.innerMode ? 1e3 : 100), s = e; s > a; --s) {
                    if (s <= o.first)
                        return o.first;
                    var l = $t(o, s - 1)
                      , c = l.stateAfter;
                    if (c && (!n || s + (c instanceof me ? c.lookAhead : 0) <= o.modeFrontier))
                        return s;
                    var u = Q(l.text, null, t.options.tabSize);
                    (null == i || r > u) && (i = s - 1,
                    r = u)
                }
                return i
            }
            function Oe(t, e) {
                if (t.modeFrontier = Math.min(t.modeFrontier, e),
                !(t.highlightFrontier < e - 10)) {
                    for (var n = t.first, r = e - 1; r > n; r--) {
                        var i = $t(t, r).stateAfter;
                        if (i && (!(i instanceof me) || r + i.lookAhead < e)) {
                            n = r + 1;
                            break
                        }
                    }
                    t.highlightFrontier = Math.min(t.highlightFrontier, n)
                }
            }
            var Me = !1
              , Ne = !1;
            function Be() {
                Me = !0
            }
            function Re() {
                Ne = !0
            }
            function Pe(t, e, n) {
                this.marker = t,
                this.from = e,
                this.to = n
            }
            function De(t, e) {
                if (t)
                    for (var n = 0; n < t.length; ++n) {
                        var r = t[n];
                        if (r.marker == e)
                            return r
                    }
            }
            function Fe(t, e) {
                for (var n, r = 0; r < t.length; ++r)
                    t[r] != e && (n || (n = [])).push(t[r]);
                return n
            }
            function _e(t, e, n) {
                var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = new WeakSet));
                r && t.markedSpans && r.has(t.markedSpans) ? t.markedSpans.push(e) : (t.markedSpans = t.markedSpans ? t.markedSpans.concat([e]) : [e],
                r && r.add(t.markedSpans)),
                e.marker.attachLine(t)
            }
            function Ue(t, e, n) {
                var r;
                if (t)
                    for (var i = 0; i < t.length; ++i) {
                        var o = t[i]
                          , a = o.marker
                          , s = null == o.from || (a.inclusiveLeft ? o.from <= e : o.from < e);
                        if (s || o.from == e && "bookmark" == a.type && (!n || !o.marker.insertLeft)) {
                            var l = null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                            (r || (r = [])).push(new Pe(a,o.from,l ? null : o.to))
                        }
                    }
                return r
            }
            function We(t, e, n) {
                var r;
                if (t)
                    for (var i = 0; i < t.length; ++i) {
                        var o = t[i]
                          , a = o.marker
                          , s = null == o.to || (a.inclusiveRight ? o.to >= e : o.to > e);
                        if (s || o.from == e && "bookmark" == a.type && (!n || o.marker.insertLeft)) {
                            var l = null == o.from || (a.inclusiveLeft ? o.from <= e : o.from < e);
                            (r || (r = [])).push(new Pe(a,l ? null : o.from - e,null == o.to ? null : o.to - e))
                        }
                    }
                return r
            }
            function Qe(t, e) {
                if (e.full)
                    return null;
                var n = oe(t, e.from.line) && $t(t, e.from.line).markedSpans
                  , r = oe(t, e.to.line) && $t(t, e.to.line).markedSpans;
                if (!n && !r)
                    return null;
                var i = e.from.ch
                  , o = e.to.ch
                  , a = 0 == le(e.from, e.to)
                  , s = Ue(n, i, a)
                  , l = We(r, o, a)
                  , c = 1 == e.text.length
                  , u = q(e.text).length + (c ? i : 0);
                if (s)
                    for (var h = 0; h < s.length; ++h) {
                        var f = s[h];
                        if (null == f.to) {
                            var d = De(l, f.marker);
                            d ? c && (f.to = null == d.to ? null : d.to + u) : f.to = i
                        }
                    }
                if (l)
                    for (var p = 0; p < l.length; ++p) {
                        var g = l[p];
                        if (null != g.to && (g.to += u),
                        null == g.from) {
                            var v = De(s, g.marker);
                            v || (g.from = u,
                            c && (s || (s = [])).push(g))
                        } else
                            g.from += u,
                            c && (s || (s = [])).push(g)
                    }
                s && (s = He(s)),
                l && l != s && (l = He(l));
                var m = [s];
                if (!c) {
                    var y, A = e.text.length - 2;
                    if (A > 0 && s)
                        for (var w = 0; w < s.length; ++w)
                            null == s[w].to && (y || (y = [])).push(new Pe(s[w].marker,null,null));
                    for (var b = 0; b < A; ++b)
                        m.push(y);
                    m.push(l)
                }
                return m
            }
            function He(t) {
                for (var e = 0; e < t.length; ++e) {
                    var n = t[e];
                    null != n.from && n.from == n.to && !1 !== n.marker.clearWhenEmpty && t.splice(e--, 1)
                }
                return t.length ? t : null
            }
            function Je(t, e, n) {
                var r = null;
                if (t.iter(e.line, n.line + 1, (function(t) {
                    if (t.markedSpans)
                        for (var e = 0; e < t.markedSpans.length; ++e) {
                            var n = t.markedSpans[e].marker;
                            !n.readOnly || r && -1 != J(r, n) || (r || (r = [])).push(n)
                        }
                }
                )),
                !r)
                    return null;
                for (var i = [{
                    from: e,
                    to: n
                }], o = 0; o < r.length; ++o)
                    for (var a = r[o], s = a.find(0), l = 0; l < i.length; ++l) {
                        var c = i[l];
                        if (!(le(c.to, s.from) < 0 || le(c.from, s.to) > 0)) {
                            var u = [l, 1]
                              , h = le(c.from, s.from)
                              , f = le(c.to, s.to);
                            (h < 0 || !a.inclusiveLeft && !h) && u.push({
                                from: c.from,
                                to: s.from
                            }),
                            (f > 0 || !a.inclusiveRight && !f) && u.push({
                                from: s.to,
                                to: c.to
                            }),
                            i.splice.apply(i, u),
                            l += u.length - 3
                        }
                    }
                return i
            }
            function Ve(t) {
                var e = t.markedSpans;
                if (e) {
                    for (var n = 0; n < e.length; ++n)
                        e[n].marker.detachLine(t);
                    t.markedSpans = null
                }
            }
            function ze(t, e) {
                if (e) {
                    for (var n = 0; n < e.length; ++n)
                        e[n].marker.attachLine(t);
                    t.markedSpans = e
                }
            }
            function Ke(t) {
                return t.inclusiveLeft ? -1 : 0
            }
            function Xe(t) {
                return t.inclusiveRight ? 1 : 0
            }
            function Ge(t, e) {
                var n = t.lines.length - e.lines.length;
                if (0 != n)
                    return n;
                var r = t.find()
                  , i = e.find()
                  , o = le(r.from, i.from) || Ke(t) - Ke(e);
                if (o)
                    return -o;
                var a = le(r.to, i.to) || Xe(t) - Xe(e);
                return a || e.id - t.id
            }
            function je(t, e) {
                var n, r = Ne && t.markedSpans;
                if (r)
                    for (var i = void 0, o = 0; o < r.length; ++o)
                        i = r[o],
                        i.marker.collapsed && null == (e ? i.from : i.to) && (!n || Ge(n, i.marker) < 0) && (n = i.marker);
                return n
            }
            function Ze(t) {
                return je(t, !0)
            }
            function Ye(t) {
                return je(t, !1)
            }
            function qe(t, e) {
                var n, r = Ne && t.markedSpans;
                if (r)
                    for (var i = 0; i < r.length; ++i) {
                        var o = r[i];
                        o.marker.collapsed && (null == o.from || o.from < e) && (null == o.to || o.to > e) && (!n || Ge(n, o.marker) < 0) && (n = o.marker)
                    }
                return n
            }
            function $e(t, e, n, r, i) {
                var o = $t(t, e)
                  , a = Ne && o.markedSpans;
                if (a)
                    for (var s = 0; s < a.length; ++s) {
                        var l = a[s];
                        if (l.marker.collapsed) {
                            var c = l.marker.find(0)
                              , u = le(c.from, n) || Ke(l.marker) - Ke(i)
                              , h = le(c.to, r) || Xe(l.marker) - Xe(i);
                            if (!(u >= 0 && h <= 0 || u <= 0 && h >= 0) && (u <= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? le(c.to, n) >= 0 : le(c.to, n) > 0) || u >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? le(c.from, r) <= 0 : le(c.from, r) < 0)))
                                return !0
                        }
                    }
            }
            function tn(t) {
                var e;
                while (e = Ze(t))
                    t = e.find(-1, !0).line;
                return t
            }
            function en(t) {
                var e;
                while (e = Ye(t))
                    t = e.find(1, !0).line;
                return t
            }
            function nn(t) {
                var e, n;
                while (e = Ye(t))
                    t = e.find(1, !0).line,
                    (n || (n = [])).push(t);
                return n
            }
            function rn(t, e) {
                var n = $t(t, e)
                  , r = tn(n);
                return n == r ? e : re(r)
            }
            function on(t, e) {
                if (e > t.lastLine())
                    return e;
                var n, r = $t(t, e);
                if (!an(t, r))
                    return e;
                while (n = Ye(r))
                    r = n.find(1, !0).line;
                return re(r) + 1
            }
            function an(t, e) {
                var n = Ne && e.markedSpans;
                if (n)
                    for (var r = void 0, i = 0; i < n.length; ++i)
                        if (r = n[i],
                        r.marker.collapsed) {
                            if (null == r.from)
                                return !0;
                            if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && sn(t, e, r))
                                return !0
                        }
            }
            function sn(t, e, n) {
                if (null == n.to) {
                    var r = n.marker.find(1, !0);
                    return sn(t, r.line, De(r.line.markedSpans, n.marker))
                }
                if (n.marker.inclusiveRight && n.to == e.text.length)
                    return !0;
                for (var i = void 0, o = 0; o < e.markedSpans.length; ++o)
                    if (i = e.markedSpans[o],
                    i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && sn(t, e, i))
                        return !0
            }
            function ln(t) {
                t = tn(t);
                for (var e = 0, n = t.parent, r = 0; r < n.lines.length; ++r) {
                    var i = n.lines[r];
                    if (i == t)
                        break;
                    e += i.height
                }
                for (var o = n.parent; o; n = o,
                o = n.parent)
                    for (var a = 0; a < o.children.length; ++a) {
                        var s = o.children[a];
                        if (s == n)
                            break;
                        e += s.height
                    }
                return e
            }
            function cn(t) {
                if (0 == t.height)
                    return 0;
                var e, n = t.text.length, r = t;
                while (e = Ze(r)) {
                    var i = e.find(0, !0);
                    r = i.from.line,
                    n += i.from.ch - i.to.ch
                }
                r = t;
                while (e = Ye(r)) {
                    var o = e.find(0, !0);
                    n -= r.text.length - o.from.ch,
                    r = o.to.line,
                    n += r.text.length - o.to.ch
                }
                return n
            }
            function un(t) {
                var e = t.display
                  , n = t.doc;
                e.maxLine = $t(n, n.first),
                e.maxLineLength = cn(e.maxLine),
                e.maxLineChanged = !0,
                n.iter((function(t) {
                    var n = cn(t);
                    n > e.maxLineLength && (e.maxLineLength = n,
                    e.maxLine = t)
                }
                ))
            }
            var hn = function(t, e, n) {
                this.text = t,
                ze(this, e),
                this.height = n ? n(this) : 1
            };
            function fn(t, e, n, r) {
                t.text = e,
                t.stateAfter && (t.stateAfter = null),
                t.styles && (t.styles = null),
                null != t.order && (t.order = null),
                Ve(t),
                ze(t, n);
                var i = r ? r(t) : 1;
                i != t.height && ne(t, i)
            }
            function dn(t) {
                t.parent = null,
                Ve(t)
            }
            hn.prototype.lineNo = function() {
                return re(this)
            }
            ,
            Et(hn);
            var pn = {}
              , gn = {};
            function vn(t, e) {
                if (!t || /^\s*$/.test(t))
                    return null;
                var n = e.addModeClass ? gn : pn;
                return n[t] || (n[t] = t.replace(/\S+/g, "cm-$&"))
            }
            function mn(t, e) {
                var n = M("span", null, null, l ? "padding-right: .1px" : null)
                  , r = {
                    pre: M("pre", [n], "CodeMirror-line"),
                    content: n,
                    col: 0,
                    pos: 0,
                    cm: t,
                    trailingSpace: !1,
                    splitSpaces: t.getOption("lineWrapping")
                };
                e.measure = {};
                for (var i = 0; i <= (e.rest ? e.rest.length : 0); i++) {
                    var o = i ? e.rest[i - 1] : e.line
                      , a = void 0;
                    r.pos = 0,
                    r.addToken = An,
                    Pt(t.display.measure) && (a = gt(o, t.doc.direction)) && (r.addToken = bn(r.addToken, a)),
                    r.map = [];
                    var s = e != t.display.externalMeasured && re(o);
                    Cn(o, r, we(t, o, s)),
                    o.styleClasses && (o.styleClasses.bgClass && (r.bgClass = P(o.styleClasses.bgClass, r.bgClass || "")),
                    o.styleClasses.textClass && (r.textClass = P(o.styleClasses.textClass, r.textClass || ""))),
                    0 == r.map.length && r.map.push(0, 0, r.content.appendChild(Rt(t.display.measure))),
                    0 == i ? (e.measure.map = r.map,
                    e.measure.cache = {}) : ((e.measure.maps || (e.measure.maps = [])).push(r.map),
                    (e.measure.caches || (e.measure.caches = [])).push({}))
                }
                if (l) {
                    var c = r.content.lastChild;
                    (/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
                }
                return wt(t, "renderLine", t, e.line, r.pre),
                r.pre.className && (r.textClass = P(r.pre.className, r.textClass || "")),
                r
            }
            function yn(t) {
                var e = O("span", "•", "cm-invalidchar");
                return e.title = "\\u" + t.charCodeAt(0).toString(16),
                e.setAttribute("aria-label", e.title),
                e
            }
            function An(t, e, n, r, i, o, l) {
                if (e) {
                    var c, u = t.splitSpaces ? wn(e, t.trailingSpace) : e, h = t.cm.state.specialChars, f = !1;
                    if (h.test(e)) {
                        c = document.createDocumentFragment();
                        var d = 0;
                        while (1) {
                            h.lastIndex = d;
                            var p = h.exec(e)
                              , g = p ? p.index - d : e.length - d;
                            if (g) {
                                var v = document.createTextNode(u.slice(d, d + g));
                                a && s < 9 ? c.appendChild(O("span", [v])) : c.appendChild(v),
                                t.map.push(t.pos, t.pos + g, v),
                                t.col += g,
                                t.pos += g
                            }
                            if (!p)
                                break;
                            d += g + 1;
                            var m = void 0;
                            if ("\t" == p[0]) {
                                var y = t.cm.options.tabSize
                                  , A = y - t.col % y;
                                m = c.appendChild(O("span", Y(A), "cm-tab")),
                                m.setAttribute("role", "presentation"),
                                m.setAttribute("cm-text", "\t"),
                                t.col += A
                            } else
                                "\r" == p[0] || "\n" == p[0] ? (m = c.appendChild(O("span", "\r" == p[0] ? "␍" : "␤", "cm-invalidchar")),
                                m.setAttribute("cm-text", p[0]),
                                t.col += 1) : (m = t.cm.options.specialCharPlaceholder(p[0]),
                                m.setAttribute("cm-text", p[0]),
                                a && s < 9 ? c.appendChild(O("span", [m])) : c.appendChild(m),
                                t.col += 1);
                            t.map.push(t.pos, t.pos + 1, m),
                            t.pos++
                        }
                    } else
                        t.col += e.length,
                        c = document.createTextNode(u),
                        t.map.push(t.pos, t.pos + e.length, c),
                        a && s < 9 && (f = !0),
                        t.pos += e.length;
                    if (t.trailingSpace = 32 == u.charCodeAt(e.length - 1),
                    n || r || i || f || o || l) {
                        var w = n || "";
                        r && (w += r),
                        i && (w += i);
                        var b = O("span", [c], w, o);
                        if (l)
                            for (var S in l)
                                l.hasOwnProperty(S) && "style" != S && "class" != S && b.setAttribute(S, l[S]);
                        return t.content.appendChild(b)
                    }
                    t.content.appendChild(c)
                }
            }
            function wn(t, e) {
                if (t.length > 1 && !/  /.test(t))
                    return t;
                for (var n = e, r = "", i = 0; i < t.length; i++) {
                    var o = t.charAt(i);
                    " " != o || !n || i != t.length - 1 && 32 != t.charCodeAt(i + 1) || (o = " "),
                    r += o,
                    n = " " == o
                }
                return r
            }
            function bn(t, e) {
                return function(n, r, i, o, a, s, l) {
                    i = i ? i + " cm-force-border" : "cm-force-border";
                    for (var c = n.pos, u = c + r.length; ; ) {
                        for (var h = void 0, f = 0; f < e.length; f++)
                            if (h = e[f],
                            h.to > c && h.from <= c)
                                break;
                        if (h.to >= u)
                            return t(n, r, i, o, a, s, l);
                        t(n, r.slice(0, h.to - c), i, o, null, s, l),
                        o = null,
                        r = r.slice(h.to - c),
                        c = h.to
                    }
                }
            }
            function Sn(t, e, n, r) {
                var i = !r && n.widgetNode;
                i && t.map.push(t.pos, t.pos + e, i),
                !r && t.cm.display.input.needsContentAttribute && (i || (i = t.content.appendChild(document.createElement("span"))),
                i.setAttribute("cm-marker", n.id)),
                i && (t.cm.display.input.setUneditable(i),
                t.content.appendChild(i)),
                t.pos += e,
                t.trailingSpace = !1
            }
            function Cn(t, e, n) {
                var r = t.markedSpans
                  , i = t.text
                  , o = 0;
                if (r)
                    for (var a, s, l, c, u, h, f, d = i.length, p = 0, g = 1, v = "", m = 0; ; ) {
                        if (m == p) {
                            l = c = u = s = "",
                            f = null,
                            h = null,
                            m = 1 / 0;
                            for (var y = [], A = void 0, w = 0; w < r.length; ++w) {
                                var b = r[w]
                                  , S = b.marker;
                                if ("bookmark" == S.type && b.from == p && S.widgetNode)
                                    y.push(S);
                                else if (b.from <= p && (null == b.to || b.to > p || S.collapsed && b.to == p && b.from == p)) {
                                    if (null != b.to && b.to != p && m > b.to && (m = b.to,
                                    c = ""),
                                    S.className && (l += " " + S.className),
                                    S.css && (s = (s ? s + ";" : "") + S.css),
                                    S.startStyle && b.from == p && (u += " " + S.startStyle),
                                    S.endStyle && b.to == m && (A || (A = [])).push(S.endStyle, b.to),
                                    S.title && ((f || (f = {})).title = S.title),
                                    S.attributes)
                                        for (var C in S.attributes)
                                            (f || (f = {}))[C] = S.attributes[C];
                                    S.collapsed && (!h || Ge(h.marker, S) < 0) && (h = b)
                                } else
                                    b.from > p && m > b.from && (m = b.from)
                            }
                            if (A)
                                for (var E = 0; E < A.length; E += 2)
                                    A[E + 1] == m && (c += " " + A[E]);
                            if (!h || h.from == p)
                                for (var x = 0; x < y.length; ++x)
                                    Sn(e, 0, y[x]);
                            if (h && (h.from || 0) == p) {
                                if (Sn(e, (null == h.to ? d + 1 : h.to) - p, h.marker, null == h.from),
                                null == h.to)
                                    return;
                                h.to == p && (h = !1)
                            }
                        }
                        if (p >= d)
                            break;
                        var k = Math.min(d, m);
                        while (1) {
                            if (v) {
                                var L = p + v.length;
                                if (!h) {
                                    var T = L > k ? v.slice(0, k - p) : v;
                                    e.addToken(e, T, a ? a + l : l, u, p + T.length == m ? c : "", s, f)
                                }
                                if (L >= k) {
                                    v = v.slice(k - p),
                                    p = k;
                                    break
                                }
                                p = L,
                                u = ""
                            }
                            v = i.slice(o, o = n[g++]),
                            a = vn(n[g++], e.cm.options)
                        }
                    }
                else
                    for (var I = 1; I < n.length; I += 2)
                        e.addToken(e, i.slice(o, o = n[I]), vn(n[I + 1], e.cm.options))
            }
            function En(t, e, n) {
                this.line = e,
                this.rest = nn(e),
                this.size = this.rest ? re(q(this.rest)) - n + 1 : 1,
                this.node = this.text = null,
                this.hidden = an(t, e)
            }
            function xn(t, e, n) {
                for (var r, i = [], o = e; o < n; o = r) {
                    var a = new En(t.doc,$t(t.doc, o),o);
                    r = o + a.size,
                    i.push(a)
                }
                return i
            }
            var kn = null;
            function Ln(t) {
                kn ? kn.ops.push(t) : t.ownsGroup = kn = {
                    ops: [t],
                    delayedCallbacks: []
                }
            }
            function Tn(t) {
                var e = t.delayedCallbacks
                  , n = 0;
                do {
                    for (; n < e.length; n++)
                        e[n].call(null);
                    for (var r = 0; r < t.ops.length; r++) {
                        var i = t.ops[r];
                        if (i.cursorActivityHandlers)
                            while (i.cursorActivityCalled < i.cursorActivityHandlers.length)
                                i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
                    }
                } while (n < e.length)
            }
            function In(t, e) {
                var n = t.ownsGroup;
                if (n)
                    try {
                        Tn(n)
                    } finally {
                        kn = null,
                        e(n)
                    }
            }
            var On = null;
            function Mn(t, e) {
                var n = yt(t, e);
                if (n.length) {
                    var r, i = Array.prototype.slice.call(arguments, 2);
                    kn ? r = kn.delayedCallbacks : On ? r = On : (r = On = [],
                    setTimeout(Nn, 0));
                    for (var o = function(t) {
                        r.push((function() {
                            return n[t].apply(null, i)
                        }
                        ))
                    }, a = 0; a < n.length; ++a)
                        o(a)
                }
            }
            function Nn() {
                var t = On;
                On = null;
                for (var e = 0; e < t.length; ++e)
                    t[e]()
            }
            function Bn(t, e, n, r) {
                for (var i = 0; i < e.changes.length; i++) {
                    var o = e.changes[i];
                    "text" == o ? Fn(t, e) : "gutter" == o ? Un(t, e, n, r) : "class" == o ? _n(t, e) : "widget" == o && Wn(t, e, r)
                }
                e.changes = null
            }
            function Rn(t) {
                return t.node == t.text && (t.node = O("div", null, null, "position: relative"),
                t.text.parentNode && t.text.parentNode.replaceChild(t.node, t.text),
                t.node.appendChild(t.text),
                a && s < 8 && (t.node.style.zIndex = 2)),
                t.node
            }
            function Pn(t, e) {
                var n = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
                if (n && (n += " CodeMirror-linebackground"),
                e.background)
                    n ? e.background.className = n : (e.background.parentNode.removeChild(e.background),
                    e.background = null);
                else if (n) {
                    var r = Rn(e);
                    e.background = r.insertBefore(O("div", null, n), r.firstChild),
                    t.display.input.setUneditable(e.background)
                }
            }
            function Dn(t, e) {
                var n = t.display.externalMeasured;
                return n && n.line == e.line ? (t.display.externalMeasured = null,
                e.measure = n.measure,
                n.built) : mn(t, e)
            }
            function Fn(t, e) {
                var n = e.text.className
                  , r = Dn(t, e);
                e.text == e.node && (e.node = r.pre),
                e.text.parentNode.replaceChild(r.pre, e.text),
                e.text = r.pre,
                r.bgClass != e.bgClass || r.textClass != e.textClass ? (e.bgClass = r.bgClass,
                e.textClass = r.textClass,
                _n(t, e)) : n && (e.text.className = n)
            }
            function _n(t, e) {
                Pn(t, e),
                e.line.wrapClass ? Rn(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
                var n = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
                e.text.className = n || ""
            }
            function Un(t, e, n, r) {
                if (e.gutter && (e.node.removeChild(e.gutter),
                e.gutter = null),
                e.gutterBackground && (e.node.removeChild(e.gutterBackground),
                e.gutterBackground = null),
                e.line.gutterClass) {
                    var i = Rn(e);
                    e.gutterBackground = O("div", null, "CodeMirror-gutter-background " + e.line.gutterClass, "left: " + (t.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"),
                    t.display.input.setUneditable(e.gutterBackground),
                    i.insertBefore(e.gutterBackground, e.text)
                }
                var o = e.line.gutterMarkers;
                if (t.options.lineNumbers || o) {
                    var a = Rn(e)
                      , s = e.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (t.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
                    if (s.setAttribute("aria-hidden", "true"),
                    t.display.input.setUneditable(s),
                    a.insertBefore(s, e.text),
                    e.line.gutterClass && (s.className += " " + e.line.gutterClass),
                    !t.options.lineNumbers || o && o["CodeMirror-linenumbers"] || (e.lineNumber = s.appendChild(O("div", ae(t.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + t.display.lineNumInnerWidth + "px"))),
                    o)
                        for (var l = 0; l < t.display.gutterSpecs.length; ++l) {
                            var c = t.display.gutterSpecs[l].className
                              , u = o.hasOwnProperty(c) && o[c];
                            u && s.appendChild(O("div", [u], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[c] + "px; width: " + r.gutterWidth[c] + "px"))
                        }
                }
            }
            function Wn(t, e, n) {
                e.alignable && (e.alignable = null);
                for (var r = x("CodeMirror-linewidget"), i = e.node.firstChild, o = void 0; i; i = o)
                    o = i.nextSibling,
                    r.test(i.className) && e.node.removeChild(i);
                Hn(t, e, n)
            }
            function Qn(t, e, n, r) {
                var i = Dn(t, e);
                return e.text = e.node = i.pre,
                i.bgClass && (e.bgClass = i.bgClass),
                i.textClass && (e.textClass = i.textClass),
                _n(t, e),
                Un(t, e, n, r),
                Hn(t, e, r),
                e.node
            }
            function Hn(t, e, n) {
                if (Jn(t, e.line, e, n, !0),
                e.rest)
                    for (var r = 0; r < e.rest.length; r++)
                        Jn(t, e.rest[r], e, n, !1)
            }
            function Jn(t, e, n, r, i) {
                if (e.widgets)
                    for (var o = Rn(n), a = 0, s = e.widgets; a < s.length; ++a) {
                        var l = s[a]
                          , c = O("div", [l.node], "CodeMirror-linewidget" + (l.className ? " " + l.className : ""));
                        l.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
                        Vn(l, c, n, r),
                        t.display.input.setUneditable(c),
                        i && l.above ? o.insertBefore(c, n.gutter || n.text) : o.appendChild(c),
                        Mn(l, "redraw")
                    }
            }
            function Vn(t, e, n, r) {
                if (t.noHScroll) {
                    (n.alignable || (n.alignable = [])).push(e);
                    var i = r.wrapperWidth;
                    e.style.left = r.fixedPos + "px",
                    t.coverGutter || (i -= r.gutterTotalWidth,
                    e.style.paddingLeft = r.gutterTotalWidth + "px"),
                    e.style.width = i + "px"
                }
                t.coverGutter && (e.style.zIndex = 5,
                e.style.position = "relative",
                t.noHScroll || (e.style.marginLeft = -r.gutterTotalWidth + "px"))
            }
            function zn(t) {
                if (null != t.height)
                    return t.height;
                var e = t.doc.cm;
                if (!e)
                    return 0;
                if (!N(document.body, t.node)) {
                    var n = "position: relative;";
                    t.coverGutter && (n += "margin-left: -" + e.display.gutters.offsetWidth + "px;"),
                    t.noHScroll && (n += "width: " + e.display.wrapper.clientWidth + "px;"),
                    I(e.display.measure, O("div", [t.node], null, n))
                }
                return t.height = t.node.parentNode.offsetHeight
            }
            function Kn(t, e) {
                for (var n = It(e); n != t.wrapper; n = n.parentNode)
                    if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == t.sizer && n != t.mover)
                        return !0
            }
            function Xn(t) {
                return t.lineSpace.offsetTop
            }
            function Gn(t) {
                return t.mover.offsetHeight - t.lineSpace.offsetHeight
            }
            function jn(t) {
                if (t.cachedPaddingH)
                    return t.cachedPaddingH;
                var e = I(t.measure, O("pre", "x", "CodeMirror-line-like"))
                  , n = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle
                  , r = {
                    left: parseInt(n.paddingLeft),
                    right: parseInt(n.paddingRight)
                };
                return isNaN(r.left) || isNaN(r.right) || (t.cachedPaddingH = r),
                r
            }
            function Zn(t) {
                return V - t.display.nativeBarWidth
            }
            function Yn(t) {
                return t.display.scroller.clientWidth - Zn(t) - t.display.barWidth
            }
            function qn(t) {
                return t.display.scroller.clientHeight - Zn(t) - t.display.barHeight
            }
            function $n(t, e, n) {
                var r = t.options.lineWrapping
                  , i = r && Yn(t);
                if (!e.measure.heights || r && e.measure.width != i) {
                    var o = e.measure.heights = [];
                    if (r) {
                        e.measure.width = i;
                        for (var a = e.text.firstChild.getClientRects(), s = 0; s < a.length - 1; s++) {
                            var l = a[s]
                              , c = a[s + 1];
                            Math.abs(l.bottom - c.bottom) > 2 && o.push((l.bottom + c.top) / 2 - n.top)
                        }
                    }
                    o.push(n.bottom - n.top)
                }
            }
            function tr(t, e, n) {
                if (t.line == e)
                    return {
                        map: t.measure.map,
                        cache: t.measure.cache
                    };
                if (t.rest) {
                    for (var r = 0; r < t.rest.length; r++)
                        if (t.rest[r] == e)
                            return {
                                map: t.measure.maps[r],
                                cache: t.measure.caches[r]
                            };
                    for (var i = 0; i < t.rest.length; i++)
                        if (re(t.rest[i]) > n)
                            return {
                                map: t.measure.maps[i],
                                cache: t.measure.caches[i],
                                before: !0
                            }
                }
            }
            function er(t, e) {
                e = tn(e);
                var n = re(e)
                  , r = t.display.externalMeasured = new En(t.doc,e,n);
                r.lineN = n;
                var i = r.built = mn(t, r);
                return r.text = i.pre,
                I(t.display.lineMeasure, i.pre),
                r
            }
            function nr(t, e, n, r) {
                return or(t, ir(t, e), n, r)
            }
            function rr(t, e) {
                if (e >= t.display.viewFrom && e < t.display.viewTo)
                    return t.display.view[_r(t, e)];
                var n = t.display.externalMeasured;
                return n && e >= n.lineN && e < n.lineN + n.size ? n : void 0
            }
            function ir(t, e) {
                var n = re(e)
                  , r = rr(t, n);
                r && !r.text ? r = null : r && r.changes && (Bn(t, r, n, Br(t)),
                t.curOp.forceUpdate = !0),
                r || (r = er(t, e));
                var i = tr(r, e, n);
                return {
                    line: e,
                    view: r,
                    rect: null,
                    map: i.map,
                    cache: i.cache,
                    before: i.before,
                    hasHeights: !1
                }
            }
            function or(t, e, n, r, i) {
                e.before && (n = -1);
                var o, a = n + (r || "");
                return e.cache.hasOwnProperty(a) ? o = e.cache[a] : (e.rect || (e.rect = e.view.text.getBoundingClientRect()),
                e.hasHeights || ($n(t, e.view, e.rect),
                e.hasHeights = !0),
                o = ur(t, e, n, r),
                o.bogus || (e.cache[a] = o)),
                {
                    left: o.left,
                    right: o.right,
                    top: i ? o.rtop : o.top,
                    bottom: i ? o.rbottom : o.bottom
                }
            }
            var ar, sr = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            };
            function lr(t, e, n) {
                for (var r, i, o, a, s, l, c = 0; c < t.length; c += 3)
                    if (s = t[c],
                    l = t[c + 1],
                    e < s ? (i = 0,
                    o = 1,
                    a = "left") : e < l ? (i = e - s,
                    o = i + 1) : (c == t.length - 3 || e == l && t[c + 3] > e) && (o = l - s,
                    i = o - 1,
                    e >= l && (a = "right")),
                    null != i) {
                        if (r = t[c + 2],
                        s == l && n == (r.insertLeft ? "left" : "right") && (a = n),
                        "left" == n && 0 == i)
                            while (c && t[c - 2] == t[c - 3] && t[c - 1].insertLeft)
                                r = t[2 + (c -= 3)],
                                a = "left";
                        if ("right" == n && i == l - s)
                            while (c < t.length - 3 && t[c + 3] == t[c + 4] && !t[c + 5].insertLeft)
                                r = t[(c += 3) + 2],
                                a = "right";
                        break
                    }
                return {
                    node: r,
                    start: i,
                    end: o,
                    collapse: a,
                    coverStart: s,
                    coverEnd: l
                }
            }
            function cr(t, e) {
                var n = sr;
                if ("left" == e) {
                    for (var r = 0; r < t.length; r++)
                        if ((n = t[r]).left != n.right)
                            break
                } else
                    for (var i = t.length - 1; i >= 0; i--)
                        if ((n = t[i]).left != n.right)
                            break;
                return n
            }
            function ur(t, e, n, r) {
                var i, o = lr(e.map, n, r), l = o.node, c = o.start, u = o.end, h = o.collapse;
                if (3 == l.nodeType) {
                    for (var f = 0; f < 4; f++) {
                        while (c && lt(e.line.text.charAt(o.coverStart + c)))
                            --c;
                        while (o.coverStart + u < o.coverEnd && lt(e.line.text.charAt(o.coverStart + u)))
                            ++u;
                        if (i = a && s < 9 && 0 == c && u == o.coverEnd - o.coverStart ? l.parentNode.getBoundingClientRect() : cr(k(l, c, u).getClientRects(), r),
                        i.left || i.right || 0 == c)
                            break;
                        u = c,
                        c -= 1,
                        h = "right"
                    }
                    a && s < 11 && (i = hr(t.display.measure, i))
                } else {
                    var d;
                    c > 0 && (h = r = "right"),
                    i = t.options.lineWrapping && (d = l.getClientRects()).length > 1 ? d["right" == r ? d.length - 1 : 0] : l.getBoundingClientRect()
                }
                if (a && s < 9 && !c && (!i || !i.left && !i.right)) {
                    var p = l.parentNode.getClientRects()[0];
                    i = p ? {
                        left: p.left,
                        right: p.left + Nr(t.display),
                        top: p.top,
                        bottom: p.bottom
                    } : sr
                }
                for (var g = i.top - e.rect.top, v = i.bottom - e.rect.top, m = (g + v) / 2, y = e.view.measure.heights, A = 0; A < y.length - 1; A++)
                    if (m < y[A])
                        break;
                var w = A ? y[A - 1] : 0
                  , b = y[A]
                  , S = {
                    left: ("right" == h ? i.right : i.left) - e.rect.left,
                    right: ("left" == h ? i.left : i.right) - e.rect.left,
                    top: w,
                    bottom: b
                };
                return i.left || i.right || (S.bogus = !0),
                t.options.singleCursorHeightPerLine || (S.rtop = g,
                S.rbottom = v),
                S
            }
            function hr(t, e) {
                if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !Wt(t))
                    return e;
                var n = screen.logicalXDPI / screen.deviceXDPI
                  , r = screen.logicalYDPI / screen.deviceYDPI;
                return {
                    left: e.left * n,
                    right: e.right * n,
                    top: e.top * r,
                    bottom: e.bottom * r
                }
            }
            function fr(t) {
                if (t.measure && (t.measure.cache = {},
                t.measure.heights = null,
                t.rest))
                    for (var e = 0; e < t.rest.length; e++)
                        t.measure.caches[e] = {}
            }
            function dr(t) {
                t.display.externalMeasure = null,
                T(t.display.lineMeasure);
                for (var e = 0; e < t.display.view.length; e++)
                    fr(t.display.view[e])
            }
            function pr(t) {
                dr(t),
                t.display.cachedCharWidth = t.display.cachedTextHeight = t.display.cachedPaddingH = null,
                t.options.lineWrapping || (t.display.maxLineChanged = !0),
                t.display.lineNumChars = null
            }
            function gr(t) {
                return u && m ? -(t.body.getBoundingClientRect().left - parseInt(getComputedStyle(t.body).marginLeft)) : t.defaultView.pageXOffset || (t.documentElement || t.body).scrollLeft
            }
            function vr(t) {
                return u && m ? -(t.body.getBoundingClientRect().top - parseInt(getComputedStyle(t.body).marginTop)) : t.defaultView.pageYOffset || (t.documentElement || t.body).scrollTop
            }
            function mr(t) {
                var e = tn(t)
                  , n = e.widgets
                  , r = 0;
                if (n)
                    for (var i = 0; i < n.length; ++i)
                        n[i].above && (r += zn(n[i]));
                return r
            }
            function yr(t, e, n, r, i) {
                if (!i) {
                    var o = mr(e);
                    n.top += o,
                    n.bottom += o
                }
                if ("line" == r)
                    return n;
                r || (r = "local");
                var a = ln(e);
                if ("local" == r ? a += Xn(t.display) : a -= t.display.viewOffset,
                "page" == r || "window" == r) {
                    var s = t.display.lineSpace.getBoundingClientRect();
                    a += s.top + ("window" == r ? 0 : vr(F(t)));
                    var l = s.left + ("window" == r ? 0 : gr(F(t)));
                    n.left += l,
                    n.right += l
                }
                return n.top += a,
                n.bottom += a,
                n
            }
            function Ar(t, e, n) {
                if ("div" == n)
                    return e;
                var r = e.left
                  , i = e.top;
                if ("page" == n)
                    r -= gr(F(t)),
                    i -= vr(F(t));
                else if ("local" == n || !n) {
                    var o = t.display.sizer.getBoundingClientRect();
                    r += o.left,
                    i += o.top
                }
                var a = t.display.lineSpace.getBoundingClientRect();
                return {
                    left: r - a.left,
                    top: i - a.top
                }
            }
            function wr(t, e, n, r, i) {
                return r || (r = $t(t.doc, e.line)),
                yr(t, r, nr(t, r, e.ch, i), n)
            }
            function br(t, e, n, r, i, o) {
                function a(e, a) {
                    var s = or(t, i, e, a ? "right" : "left", o);
                    return a ? s.left = s.right : s.right = s.left,
                    yr(t, r, s, n)
                }
                r = r || $t(t.doc, e.line),
                i || (i = ir(t, r));
                var s = gt(r, t.doc.direction)
                  , l = e.ch
                  , c = e.sticky;
                if (l >= r.text.length ? (l = r.text.length,
                c = "before") : l <= 0 && (l = 0,
                c = "after"),
                !s)
                    return a("before" == c ? l - 1 : l, "before" == c);
                function u(t, e, n) {
                    var r = s[e]
                      , i = 1 == r.level;
                    return a(n ? t - 1 : t, i != n)
                }
                var h = dt(s, l, c)
                  , f = ft
                  , d = u(l, h, "before" == c);
                return null != f && (d.other = u(l, f, "before" != c)),
                d
            }
            function Sr(t, e) {
                var n = 0;
                e = pe(t.doc, e),
                t.options.lineWrapping || (n = Nr(t.display) * e.ch);
                var r = $t(t.doc, e.line)
                  , i = ln(r) + Xn(t.display);
                return {
                    left: n,
                    right: n,
                    top: i,
                    bottom: i + r.height
                }
            }
            function Cr(t, e, n, r, i) {
                var o = se(t, e, n);
                return o.xRel = i,
                r && (o.outside = r),
                o
            }
            function Er(t, e, n) {
                var r = t.doc;
                if (n += t.display.viewOffset,
                n < 0)
                    return Cr(r.first, 0, null, -1, -1);
                var i = ie(r, n)
                  , o = r.first + r.size - 1;
                if (i > o)
                    return Cr(r.first + r.size - 1, $t(r, o).text.length, null, 1, 1);
                e < 0 && (e = 0);
                for (var a = $t(r, i); ; ) {
                    var s = Tr(t, a, i, e, n)
                      , l = qe(a, s.ch + (s.xRel > 0 || s.outside > 0 ? 1 : 0));
                    if (!l)
                        return s;
                    var c = l.find(1);
                    if (c.line == i)
                        return c;
                    a = $t(r, i = c.line)
                }
            }
            function xr(t, e, n, r) {
                r -= mr(e);
                var i = e.text.length
                  , o = ut((function(e) {
                    return or(t, n, e - 1).bottom <= r
                }
                ), i, 0);
                return i = ut((function(e) {
                    return or(t, n, e).top > r
                }
                ), o, i),
                {
                    begin: o,
                    end: i
                }
            }
            function kr(t, e, n, r) {
                n || (n = ir(t, e));
                var i = yr(t, e, or(t, n, r), "line").top;
                return xr(t, e, n, i)
            }
            function Lr(t, e, n, r) {
                return !(t.bottom <= n) && (t.top > n || (r ? t.left : t.right) > e)
            }
            function Tr(t, e, n, r, i) {
                i -= ln(e);
                var o = ir(t, e)
                  , a = mr(e)
                  , s = 0
                  , l = e.text.length
                  , c = !0
                  , u = gt(e, t.doc.direction);
                if (u) {
                    var h = (t.options.lineWrapping ? Or : Ir)(t, e, n, o, u, r, i);
                    c = 1 != h.level,
                    s = c ? h.from : h.to - 1,
                    l = c ? h.to : h.from - 1
                }
                var f, d, p = null, g = null, v = ut((function(e) {
                    var n = or(t, o, e);
                    return n.top += a,
                    n.bottom += a,
                    !!Lr(n, r, i, !1) && (n.top <= i && n.left <= r && (p = e,
                    g = n),
                    !0)
                }
                ), s, l), m = !1;
                if (g) {
                    var y = r - g.left < g.right - r
                      , A = y == c;
                    v = p + (A ? 0 : 1),
                    d = A ? "after" : "before",
                    f = y ? g.left : g.right
                } else {
                    c || v != l && v != s || v++,
                    d = 0 == v ? "after" : v == e.text.length ? "before" : or(t, o, v - (c ? 1 : 0)).bottom + a <= i == c ? "after" : "before";
                    var w = br(t, se(n, v, d), "line", e, o);
                    f = w.left,
                    m = i < w.top ? -1 : i >= w.bottom ? 1 : 0
                }
                return v = ct(e.text, v, 1),
                Cr(n, v, d, m, r - f)
            }
            function Ir(t, e, n, r, i, o, a) {
                var s = ut((function(s) {
                    var l = i[s]
                      , c = 1 != l.level;
                    return Lr(br(t, se(n, c ? l.to : l.from, c ? "before" : "after"), "line", e, r), o, a, !0)
                }
                ), 0, i.length - 1)
                  , l = i[s];
                if (s > 0) {
                    var c = 1 != l.level
                      , u = br(t, se(n, c ? l.from : l.to, c ? "after" : "before"), "line", e, r);
                    Lr(u, o, a, !0) && u.top > a && (l = i[s - 1])
                }
                return l
            }
            function Or(t, e, n, r, i, o, a) {
                var s = xr(t, e, r, a)
                  , l = s.begin
                  , c = s.end;
                /\s/.test(e.text.charAt(c - 1)) && c--;
                for (var u = null, h = null, f = 0; f < i.length; f++) {
                    var d = i[f];
                    if (!(d.from >= c || d.to <= l)) {
                        var p = 1 != d.level
                          , g = or(t, r, p ? Math.min(c, d.to) - 1 : Math.max(l, d.from)).right
                          , v = g < o ? o - g + 1e9 : g - o;
                        (!u || h > v) && (u = d,
                        h = v)
                    }
                }
                return u || (u = i[i.length - 1]),
                u.from < l && (u = {
                    from: l,
                    to: u.to,
                    level: u.level
                }),
                u.to > c && (u = {
                    from: u.from,
                    to: c,
                    level: u.level
                }),
                u
            }
            function Mr(t) {
                if (null != t.cachedTextHeight)
                    return t.cachedTextHeight;
                if (null == ar) {
                    ar = O("pre", null, "CodeMirror-line-like");
                    for (var e = 0; e < 49; ++e)
                        ar.appendChild(document.createTextNode("x")),
                        ar.appendChild(O("br"));
                    ar.appendChild(document.createTextNode("x"))
                }
                I(t.measure, ar);
                var n = ar.offsetHeight / 50;
                return n > 3 && (t.cachedTextHeight = n),
                T(t.measure),
                n || 1
            }
            function Nr(t) {
                if (null != t.cachedCharWidth)
                    return t.cachedCharWidth;
                var e = O("span", "xxxxxxxxxx")
                  , n = O("pre", [e], "CodeMirror-line-like");
                I(t.measure, n);
                var r = e.getBoundingClientRect()
                  , i = (r.right - r.left) / 10;
                return i > 2 && (t.cachedCharWidth = i),
                i || 10
            }
            function Br(t) {
                for (var e = t.display, n = {}, r = {}, i = e.gutters.clientLeft, o = e.gutters.firstChild, a = 0; o; o = o.nextSibling,
                ++a) {
                    var s = t.display.gutterSpecs[a].className;
                    n[s] = o.offsetLeft + o.clientLeft + i,
                    r[s] = o.clientWidth
                }
                return {
                    fixedPos: Rr(e),
                    gutterTotalWidth: e.gutters.offsetWidth,
                    gutterLeft: n,
                    gutterWidth: r,
                    wrapperWidth: e.wrapper.clientWidth
                }
            }
            function Rr(t) {
                return t.scroller.getBoundingClientRect().left - t.sizer.getBoundingClientRect().left
            }
            function Pr(t) {
                var e = Mr(t.display)
                  , n = t.options.lineWrapping
                  , r = n && Math.max(5, t.display.scroller.clientWidth / Nr(t.display) - 3);
                return function(i) {
                    if (an(t.doc, i))
                        return 0;
                    var o = 0;
                    if (i.widgets)
                        for (var a = 0; a < i.widgets.length; a++)
                            i.widgets[a].height && (o += i.widgets[a].height);
                    return n ? o + (Math.ceil(i.text.length / r) || 1) * e : o + e
                }
            }
            function Dr(t) {
                var e = t.doc
                  , n = Pr(t);
                e.iter((function(t) {
                    var e = n(t);
                    e != t.height && ne(t, e)
                }
                ))
            }
            function Fr(t, e, n, r) {
                var i = t.display;
                if (!n && "true" == It(e).getAttribute("cm-not-content"))
                    return null;
                var o, a, s = i.lineSpace.getBoundingClientRect();
                try {
                    o = e.clientX - s.left,
                    a = e.clientY - s.top
                } catch (h) {
                    return null
                }
                var l, c = Er(t, o, a);
                if (r && c.xRel > 0 && (l = $t(t.doc, c.line).text).length == c.ch) {
                    var u = Q(l, l.length, t.options.tabSize) - l.length;
                    c = se(c.line, Math.max(0, Math.round((o - jn(t.display).left) / Nr(t.display)) - u))
                }
                return c
            }
            function _r(t, e) {
                if (e >= t.display.viewTo)
                    return null;
                if (e -= t.display.viewFrom,
                e < 0)
                    return null;
                for (var n = t.display.view, r = 0; r < n.length; r++)
                    if (e -= n[r].size,
                    e < 0)
                        return r
            }
            function Ur(t, e, n, r) {
                null == e && (e = t.doc.first),
                null == n && (n = t.doc.first + t.doc.size),
                r || (r = 0);
                var i = t.display;
                if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > e) && (i.updateLineNumbers = e),
                t.curOp.viewChanged = !0,
                e >= i.viewTo)
                    Ne && rn(t.doc, e) < i.viewTo && Qr(t);
                else if (n <= i.viewFrom)
                    Ne && on(t.doc, n + r) > i.viewFrom ? Qr(t) : (i.viewFrom += r,
                    i.viewTo += r);
                else if (e <= i.viewFrom && n >= i.viewTo)
                    Qr(t);
                else if (e <= i.viewFrom) {
                    var o = Hr(t, n, n + r, 1);
                    o ? (i.view = i.view.slice(o.index),
                    i.viewFrom = o.lineN,
                    i.viewTo += r) : Qr(t)
                } else if (n >= i.viewTo) {
                    var a = Hr(t, e, e, -1);
                    a ? (i.view = i.view.slice(0, a.index),
                    i.viewTo = a.lineN) : Qr(t)
                } else {
                    var s = Hr(t, e, e, -1)
                      , l = Hr(t, n, n + r, 1);
                    s && l ? (i.view = i.view.slice(0, s.index).concat(xn(t, s.lineN, l.lineN)).concat(i.view.slice(l.index)),
                    i.viewTo += r) : Qr(t)
                }
                var c = i.externalMeasured;
                c && (n < c.lineN ? c.lineN += r : e < c.lineN + c.size && (i.externalMeasured = null))
            }
            function Wr(t, e, n) {
                t.curOp.viewChanged = !0;
                var r = t.display
                  , i = t.display.externalMeasured;
                if (i && e >= i.lineN && e < i.lineN + i.size && (r.externalMeasured = null),
                !(e < r.viewFrom || e >= r.viewTo)) {
                    var o = r.view[_r(t, e)];
                    if (null != o.node) {
                        var a = o.changes || (o.changes = []);
                        -1 == J(a, n) && a.push(n)
                    }
                }
            }
            function Qr(t) {
                t.display.viewFrom = t.display.viewTo = t.doc.first,
                t.display.view = [],
                t.display.viewOffset = 0
            }
            function Hr(t, e, n, r) {
                var i, o = _r(t, e), a = t.display.view;
                if (!Ne || n == t.doc.first + t.doc.size)
                    return {
                        index: o,
                        lineN: n
                    };
                for (var s = t.display.viewFrom, l = 0; l < o; l++)
                    s += a[l].size;
                if (s != e) {
                    if (r > 0) {
                        if (o == a.length - 1)
                            return null;
                        i = s + a[o].size - e,
                        o++
                    } else
                        i = s - e;
                    e += i,
                    n += i
                }
                while (rn(t.doc, n) != n) {
                    if (o == (r < 0 ? 0 : a.length - 1))
                        return null;
                    n += r * a[o - (r < 0 ? 1 : 0)].size,
                    o += r
                }
                return {
                    index: o,
                    lineN: n
                }
            }
            function Jr(t, e, n) {
                var r = t.display
                  , i = r.view;
                0 == i.length || e >= r.viewTo || n <= r.viewFrom ? (r.view = xn(t, e, n),
                r.viewFrom = e) : (r.viewFrom > e ? r.view = xn(t, e, r.viewFrom).concat(r.view) : r.viewFrom < e && (r.view = r.view.slice(_r(t, e))),
                r.viewFrom = e,
                r.viewTo < n ? r.view = r.view.concat(xn(t, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, _r(t, n)))),
                r.viewTo = n
            }
            function Vr(t) {
                for (var e = t.display.view, n = 0, r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.hidden || i.node && !i.changes || ++n
                }
                return n
            }
            function zr(t) {
                t.display.input.showSelection(t.display.input.prepareSelection())
            }
            function Kr(t, e) {
                void 0 === e && (e = !0);
                var n = t.doc
                  , r = {}
                  , i = r.cursors = document.createDocumentFragment()
                  , o = r.selection = document.createDocumentFragment()
                  , a = t.options.$customCursor;
                a && (e = !0);
                for (var s = 0; s < n.sel.ranges.length; s++)
                    if (e || s != n.sel.primIndex) {
                        var l = n.sel.ranges[s];
                        if (!(l.from().line >= t.display.viewTo || l.to().line < t.display.viewFrom)) {
                            var c = l.empty();
                            if (a) {
                                var u = a(t, l);
                                u && Xr(t, u, i)
                            } else
                                (c || t.options.showCursorWhenSelecting) && Xr(t, l.head, i);
                            c || jr(t, l, o)
                        }
                    }
                return r
            }
            function Xr(t, e, n) {
                var r = br(t, e, "div", null, null, !t.options.singleCursorHeightPerLine)
                  , i = n.appendChild(O("div", " ", "CodeMirror-cursor"));
                if (i.style.left = r.left + "px",
                i.style.top = r.top + "px",
                i.style.height = Math.max(0, r.bottom - r.top) * t.options.cursorHeight + "px",
                /\bcm-fat-cursor\b/.test(t.getWrapperElement().className)) {
                    var o = wr(t, e, "div", null, null)
                      , a = o.right - o.left;
                    i.style.width = (a > 0 ? a : t.defaultCharWidth()) + "px"
                }
                if (r.other) {
                    var s = n.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                    s.style.display = "",
                    s.style.left = r.other.left + "px",
                    s.style.top = r.other.top + "px",
                    s.style.height = .85 * (r.other.bottom - r.other.top) + "px"
                }
            }
            function Gr(t, e) {
                return t.top - e.top || t.left - e.left
            }
            function jr(t, e, n) {
                var r = t.display
                  , i = t.doc
                  , o = document.createDocumentFragment()
                  , a = jn(t.display)
                  , s = a.left
                  , l = Math.max(r.sizerWidth, Yn(t) - r.sizer.offsetLeft) - a.right
                  , c = "ltr" == i.direction;
                function u(t, e, n, r) {
                    e < 0 && (e = 0),
                    e = Math.round(e),
                    r = Math.round(r),
                    o.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + t + "px;\n                             top: " + e + "px; width: " + (null == n ? l - t : n) + "px;\n                             height: " + (r - e) + "px"))
                }
                function h(e, n, r) {
                    var o, a, h = $t(i, e), f = h.text.length;
                    function d(n, r) {
                        return wr(t, se(e, n), "div", h, r)
                    }
                    function p(e, n, r) {
                        var i = kr(t, h, null, e)
                          , o = "ltr" == n == ("after" == r) ? "left" : "right"
                          , a = "after" == r ? i.begin : i.end - (/\s/.test(h.text.charAt(i.end - 1)) ? 2 : 1);
                        return d(a, o)[o]
                    }
                    var g = gt(h, i.direction);
                    return ht(g, n || 0, null == r ? f : r, (function(t, e, i, h) {
                        var v = "ltr" == i
                          , m = d(t, v ? "left" : "right")
                          , y = d(e - 1, v ? "right" : "left")
                          , A = null == n && 0 == t
                          , w = null == r && e == f
                          , b = 0 == h
                          , S = !g || h == g.length - 1;
                        if (y.top - m.top <= 3) {
                            var C = (c ? A : w) && b
                              , E = (c ? w : A) && S
                              , x = C ? s : (v ? m : y).left
                              , k = E ? l : (v ? y : m).right;
                            u(x, m.top, k - x, m.bottom)
                        } else {
                            var L, T, I, O;
                            v ? (L = c && A && b ? s : m.left,
                            T = c ? l : p(t, i, "before"),
                            I = c ? s : p(e, i, "after"),
                            O = c && w && S ? l : y.right) : (L = c ? p(t, i, "before") : s,
                            T = !c && A && b ? l : m.right,
                            I = !c && w && S ? s : y.left,
                            O = c ? p(e, i, "after") : l),
                            u(L, m.top, T - L, m.bottom),
                            m.bottom < y.top && u(s, m.bottom, null, y.top),
                            u(I, y.top, O - I, y.bottom)
                        }
                        (!o || Gr(m, o) < 0) && (o = m),
                        Gr(y, o) < 0 && (o = y),
                        (!a || Gr(m, a) < 0) && (a = m),
                        Gr(y, a) < 0 && (a = y)
                    }
                    )),
                    {
                        start: o,
                        end: a
                    }
                }
                var f = e.from()
                  , d = e.to();
                if (f.line == d.line)
                    h(f.line, f.ch, d.ch);
                else {
                    var p = $t(i, f.line)
                      , g = $t(i, d.line)
                      , v = tn(p) == tn(g)
                      , m = h(f.line, f.ch, v ? p.text.length + 1 : null).end
                      , y = h(d.line, v ? 0 : null, d.ch).start;
                    v && (m.top < y.top - 2 ? (u(m.right, m.top, null, m.bottom),
                    u(s, y.top, y.left, y.bottom)) : u(m.right, m.top, y.left - m.right, m.bottom)),
                    m.bottom < y.top && u(s, m.bottom, null, y.top)
                }
                n.appendChild(o)
            }
            function Zr(t) {
                if (t.state.focused) {
                    var e = t.display;
                    clearInterval(e.blinker);
                    var n = !0;
                    e.cursorDiv.style.visibility = "",
                    t.options.cursorBlinkRate > 0 ? e.blinker = setInterval((function() {
                        t.hasFocus() || ti(t),
                        e.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
                    }
                    ), t.options.cursorBlinkRate) : t.options.cursorBlinkRate < 0 && (e.cursorDiv.style.visibility = "hidden")
                }
            }
            function Yr(t) {
                t.hasFocus() || (t.display.input.focus(),
                t.state.focused || $r(t))
            }
            function qr(t) {
                t.state.delayingBlurEvent = !0,
                setTimeout((function() {
                    t.state.delayingBlurEvent && (t.state.delayingBlurEvent = !1,
                    t.state.focused && ti(t))
                }
                ), 100)
            }
            function $r(t, e) {
                t.state.delayingBlurEvent && !t.state.draggingText && (t.state.delayingBlurEvent = !1),
                "nocursor" != t.options.readOnly && (t.state.focused || (wt(t, "focus", t, e),
                t.state.focused = !0,
                R(t.display.wrapper, "CodeMirror-focused"),
                t.curOp || t.display.selForContextMenu == t.doc.sel || (t.display.input.reset(),
                l && setTimeout((function() {
                    return t.display.input.reset(!0)
                }
                ), 20)),
                t.display.input.receivedFocus()),
                Zr(t))
            }
            function ti(t, e) {
                t.state.delayingBlurEvent || (t.state.focused && (wt(t, "blur", t, e),
                t.state.focused = !1,
                L(t.display.wrapper, "CodeMirror-focused")),
                clearInterval(t.display.blinker),
                setTimeout((function() {
                    t.state.focused || (t.display.shift = !1)
                }
                ), 150))
            }
            function ei(t) {
                for (var e = t.display, n = e.lineDiv.offsetTop, r = Math.max(0, e.scroller.getBoundingClientRect().top), i = e.lineDiv.getBoundingClientRect().top, o = 0, l = 0; l < e.view.length; l++) {
                    var c = e.view[l]
                      , u = t.options.lineWrapping
                      , h = void 0
                      , f = 0;
                    if (!c.hidden) {
                        if (i += c.line.height,
                        a && s < 8) {
                            var d = c.node.offsetTop + c.node.offsetHeight;
                            h = d - n,
                            n = d
                        } else {
                            var p = c.node.getBoundingClientRect();
                            h = p.bottom - p.top,
                            !u && c.text.firstChild && (f = c.text.firstChild.getBoundingClientRect().right - p.left - 1)
                        }
                        var g = c.line.height - h;
                        if ((g > .005 || g < -.005) && (i < r && (o -= g),
                        ne(c.line, h),
                        ni(c.line),
                        c.rest))
                            for (var v = 0; v < c.rest.length; v++)
                                ni(c.rest[v]);
                        if (f > t.display.sizerWidth) {
                            var m = Math.ceil(f / Nr(t.display));
                            m > t.display.maxLineLength && (t.display.maxLineLength = m,
                            t.display.maxLine = c.line,
                            t.display.maxLineChanged = !0)
                        }
                    }
                }
                Math.abs(o) > 2 && (e.scroller.scrollTop += o)
            }
            function ni(t) {
                if (t.widgets)
                    for (var e = 0; e < t.widgets.length; ++e) {
                        var n = t.widgets[e]
                          , r = n.node.parentNode;
                        r && (n.height = r.offsetHeight)
                    }
            }
            function ri(t, e, n) {
                var r = n && null != n.top ? Math.max(0, n.top) : t.scroller.scrollTop;
                r = Math.floor(r - Xn(t));
                var i = n && null != n.bottom ? n.bottom : r + t.wrapper.clientHeight
                  , o = ie(e, r)
                  , a = ie(e, i);
                if (n && n.ensure) {
                    var s = n.ensure.from.line
                      , l = n.ensure.to.line;
                    s < o ? (o = s,
                    a = ie(e, ln($t(e, s)) + t.wrapper.clientHeight)) : Math.min(l, e.lastLine()) >= a && (o = ie(e, ln($t(e, l)) - t.wrapper.clientHeight),
                    a = l)
                }
                return {
                    from: o,
                    to: Math.max(a, o + 1)
                }
            }
            function ii(t, e) {
                if (!bt(t, "scrollCursorIntoView")) {
                    var n = t.display
                      , r = n.sizer.getBoundingClientRect()
                      , i = null
                      , o = n.wrapper.ownerDocument;
                    if (e.top + r.top < 0 ? i = !0 : e.bottom + r.top > (o.defaultView.innerHeight || o.documentElement.clientHeight) && (i = !1),
                    null != i && !g) {
                        var a = O("div", "​", null, "position: absolute;\n                         top: " + (e.top - n.viewOffset - Xn(t.display)) + "px;\n                         height: " + (e.bottom - e.top + Zn(t) + n.barHeight) + "px;\n                         left: " + e.left + "px; width: " + Math.max(2, e.right - e.left) + "px;");
                        t.display.lineSpace.appendChild(a),
                        a.scrollIntoView(i),
                        t.display.lineSpace.removeChild(a)
                    }
                }
            }
            function oi(t, e, n, r) {
                var i;
                null == r && (r = 0),
                t.options.lineWrapping || e != n || (n = "before" == e.sticky ? se(e.line, e.ch + 1, "before") : e,
                e = e.ch ? se(e.line, "before" == e.sticky ? e.ch - 1 : e.ch, "after") : e);
                for (var o = 0; o < 5; o++) {
                    var a = !1
                      , s = br(t, e)
                      , l = n && n != e ? br(t, n) : s;
                    i = {
                        left: Math.min(s.left, l.left),
                        top: Math.min(s.top, l.top) - r,
                        right: Math.max(s.left, l.left),
                        bottom: Math.max(s.bottom, l.bottom) + r
                    };
                    var c = si(t, i)
                      , u = t.doc.scrollTop
                      , h = t.doc.scrollLeft;
                    if (null != c.scrollTop && (pi(t, c.scrollTop),
                    Math.abs(t.doc.scrollTop - u) > 1 && (a = !0)),
                    null != c.scrollLeft && (vi(t, c.scrollLeft),
                    Math.abs(t.doc.scrollLeft - h) > 1 && (a = !0)),
                    !a)
                        break
                }
                return i
            }
            function ai(t, e) {
                var n = si(t, e);
                null != n.scrollTop && pi(t, n.scrollTop),
                null != n.scrollLeft && vi(t, n.scrollLeft)
            }
            function si(t, e) {
                var n = t.display
                  , r = Mr(t.display);
                e.top < 0 && (e.top = 0);
                var i = t.curOp && null != t.curOp.scrollTop ? t.curOp.scrollTop : n.scroller.scrollTop
                  , o = qn(t)
                  , a = {};
                e.bottom - e.top > o && (e.bottom = e.top + o);
                var s = t.doc.height + Gn(n)
                  , l = e.top < r
                  , c = e.bottom > s - r;
                if (e.top < i)
                    a.scrollTop = l ? 0 : e.top;
                else if (e.bottom > i + o) {
                    var u = Math.min(e.top, (c ? s : e.bottom) - o);
                    u != i && (a.scrollTop = u)
                }
                var h = t.options.fixedGutter ? 0 : n.gutters.offsetWidth
                  , f = t.curOp && null != t.curOp.scrollLeft ? t.curOp.scrollLeft : n.scroller.scrollLeft - h
                  , d = Yn(t) - n.gutters.offsetWidth
                  , p = e.right - e.left > d;
                return p && (e.right = e.left + d),
                e.left < 10 ? a.scrollLeft = 0 : e.left < f ? a.scrollLeft = Math.max(0, e.left + h - (p ? 0 : 10)) : e.right > d + f - 3 && (a.scrollLeft = e.right + (p ? 0 : 10) - d),
                a
            }
            function li(t, e) {
                null != e && (fi(t),
                t.curOp.scrollTop = (null == t.curOp.scrollTop ? t.doc.scrollTop : t.curOp.scrollTop) + e)
            }
            function ci(t) {
                fi(t);
                var e = t.getCursor();
                t.curOp.scrollToPos = {
                    from: e,
                    to: e,
                    margin: t.options.cursorScrollMargin
                }
            }
            function ui(t, e, n) {
                null == e && null == n || fi(t),
                null != e && (t.curOp.scrollLeft = e),
                null != n && (t.curOp.scrollTop = n)
            }
            function hi(t, e) {
                fi(t),
                t.curOp.scrollToPos = e
            }
            function fi(t) {
                var e = t.curOp.scrollToPos;
                if (e) {
                    t.curOp.scrollToPos = null;
                    var n = Sr(t, e.from)
                      , r = Sr(t, e.to);
                    di(t, n, r, e.margin)
                }
            }
            function di(t, e, n, r) {
                var i = si(t, {
                    left: Math.min(e.left, n.left),
                    top: Math.min(e.top, n.top) - r,
                    right: Math.max(e.right, n.right),
                    bottom: Math.max(e.bottom, n.bottom) + r
                });
                ui(t, i.scrollLeft, i.scrollTop)
            }
            function pi(t, e) {
                Math.abs(t.doc.scrollTop - e) < 2 || (n || zi(t, {
                    top: e
                }),
                gi(t, e, !0),
                n && zi(t),
                Fi(t, 100))
            }
            function gi(t, e, n) {
                e = Math.max(0, Math.min(t.display.scroller.scrollHeight - t.display.scroller.clientHeight, e)),
                (t.display.scroller.scrollTop != e || n) && (t.doc.scrollTop = e,
                t.display.scrollbars.setScrollTop(e),
                t.display.scroller.scrollTop != e && (t.display.scroller.scrollTop = e))
            }
            function vi(t, e, n, r) {
                e = Math.max(0, Math.min(e, t.display.scroller.scrollWidth - t.display.scroller.clientWidth)),
                (n ? e == t.doc.scrollLeft : Math.abs(t.doc.scrollLeft - e) < 2) && !r || (t.doc.scrollLeft = e,
                ji(t),
                t.display.scroller.scrollLeft != e && (t.display.scroller.scrollLeft = e),
                t.display.scrollbars.setScrollLeft(e))
            }
            function mi(t) {
                var e = t.display
                  , n = e.gutters.offsetWidth
                  , r = Math.round(t.doc.height + Gn(t.display));
                return {
                    clientHeight: e.scroller.clientHeight,
                    viewHeight: e.wrapper.clientHeight,
                    scrollWidth: e.scroller.scrollWidth,
                    clientWidth: e.scroller.clientWidth,
                    viewWidth: e.wrapper.clientWidth,
                    barLeft: t.options.fixedGutter ? n : 0,
                    docHeight: r,
                    scrollHeight: r + Zn(t) + e.barHeight,
                    nativeBarWidth: e.nativeBarWidth,
                    gutterWidth: n
                }
            }
            var yi = function(t, e, n) {
                this.cm = n;
                var r = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
                  , i = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
                r.tabIndex = i.tabIndex = -1,
                t(r),
                t(i),
                mt(r, "scroll", (function() {
                    r.clientHeight && e(r.scrollTop, "vertical")
                }
                )),
                mt(i, "scroll", (function() {
                    i.clientWidth && e(i.scrollLeft, "horizontal")
                }
                )),
                this.checkedZeroWidth = !1,
                a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
            };
            yi.prototype.update = function(t) {
                var e = t.scrollWidth > t.clientWidth + 1
                  , n = t.scrollHeight > t.clientHeight + 1
                  , r = t.nativeBarWidth;
                if (n) {
                    this.vert.style.display = "block",
                    this.vert.style.bottom = e ? r + "px" : "0";
                    var i = t.viewHeight - (e ? r : 0);
                    this.vert.firstChild.style.height = Math.max(0, t.scrollHeight - t.clientHeight + i) + "px"
                } else
                    this.vert.scrollTop = 0,
                    this.vert.style.display = "",
                    this.vert.firstChild.style.height = "0";
                if (e) {
                    this.horiz.style.display = "block",
                    this.horiz.style.right = n ? r + "px" : "0",
                    this.horiz.style.left = t.barLeft + "px";
                    var o = t.viewWidth - t.barLeft - (n ? r : 0);
                    this.horiz.firstChild.style.width = Math.max(0, t.scrollWidth - t.clientWidth + o) + "px"
                } else
                    this.horiz.style.display = "",
                    this.horiz.firstChild.style.width = "0";
                return !this.checkedZeroWidth && t.clientHeight > 0 && (0 == r && this.zeroWidthHack(),
                this.checkedZeroWidth = !0),
                {
                    right: n ? r : 0,
                    bottom: e ? r : 0
                }
            }
            ,
            yi.prototype.setScrollLeft = function(t) {
                this.horiz.scrollLeft != t && (this.horiz.scrollLeft = t),
                this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
            }
            ,
            yi.prototype.setScrollTop = function(t) {
                this.vert.scrollTop != t && (this.vert.scrollTop = t),
                this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
            }
            ,
            yi.prototype.zeroWidthHack = function() {
                var t = A && !p ? "12px" : "18px";
                this.horiz.style.height = this.vert.style.width = t,
                this.horiz.style.visibility = this.vert.style.visibility = "hidden",
                this.disableHoriz = new H,
                this.disableVert = new H
            }
            ,
            yi.prototype.enableZeroWidthBar = function(t, e, n) {
                function r() {
                    var i = t.getBoundingClientRect()
                      , o = "vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
                    o != t ? t.style.visibility = "hidden" : e.set(1e3, r)
                }
                t.style.visibility = "",
                e.set(1e3, r)
            }
            ,
            yi.prototype.clear = function() {
                var t = this.horiz.parentNode;
                t.removeChild(this.horiz),
                t.removeChild(this.vert)
            }
            ;
            var Ai = function() {};
            function wi(t, e) {
                e || (e = mi(t));
                var n = t.display.barWidth
                  , r = t.display.barHeight;
                bi(t, e);
                for (var i = 0; i < 4 && n != t.display.barWidth || r != t.display.barHeight; i++)
                    n != t.display.barWidth && t.options.lineWrapping && ei(t),
                    bi(t, mi(t)),
                    n = t.display.barWidth,
                    r = t.display.barHeight
            }
            function bi(t, e) {
                var n = t.display
                  , r = n.scrollbars.update(e);
                n.sizer.style.paddingRight = (n.barWidth = r.right) + "px",
                n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px",
                n.heightForcer.style.borderBottom = r.bottom + "px solid transparent",
                r.right && r.bottom ? (n.scrollbarFiller.style.display = "block",
                n.scrollbarFiller.style.height = r.bottom + "px",
                n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "",
                r.bottom && t.options.coverGutterNextToScrollbar && t.options.fixedGutter ? (n.gutterFiller.style.display = "block",
                n.gutterFiller.style.height = r.bottom + "px",
                n.gutterFiller.style.width = e.gutterWidth + "px") : n.gutterFiller.style.display = ""
            }
            Ai.prototype.update = function() {
                return {
                    bottom: 0,
                    right: 0
                }
            }
            ,
            Ai.prototype.setScrollLeft = function() {}
            ,
            Ai.prototype.setScrollTop = function() {}
            ,
            Ai.prototype.clear = function() {}
            ;
            var Si = {
                native: yi,
                null: Ai
            };
            function Ci(t) {
                t.display.scrollbars && (t.display.scrollbars.clear(),
                t.display.scrollbars.addClass && L(t.display.wrapper, t.display.scrollbars.addClass)),
                t.display.scrollbars = new Si[t.options.scrollbarStyle]((function(e) {
                    t.display.wrapper.insertBefore(e, t.display.scrollbarFiller),
                    mt(e, "mousedown", (function() {
                        t.state.focused && setTimeout((function() {
                            return t.display.input.focus()
                        }
                        ), 0)
                    }
                    )),
                    e.setAttribute("cm-not-content", "true")
                }
                ),(function(e, n) {
                    "horizontal" == n ? vi(t, e) : pi(t, e)
                }
                ),t),
                t.display.scrollbars.addClass && R(t.display.wrapper, t.display.scrollbars.addClass)
            }
            var Ei = 0;
            function xi(t) {
                t.curOp = {
                    cm: t,
                    viewChanged: !1,
                    startHeight: t.doc.height,
                    forceUpdate: !1,
                    updateInput: 0,
                    typing: !1,
                    changeObjs: null,
                    cursorActivityHandlers: null,
                    cursorActivityCalled: 0,
                    selectionChanged: !1,
                    updateMaxLine: !1,
                    scrollLeft: null,
                    scrollTop: null,
                    scrollToPos: null,
                    focus: !1,
                    id: ++Ei,
                    markArrays: null
                },
                Ln(t.curOp)
            }
            function ki(t) {
                var e = t.curOp;
                e && In(e, (function(t) {
                    for (var e = 0; e < t.ops.length; e++)
                        t.ops[e].cm.curOp = null;
                    Li(t)
                }
                ))
            }
            function Li(t) {
                for (var e = t.ops, n = 0; n < e.length; n++)
                    Ti(e[n]);
                for (var r = 0; r < e.length; r++)
                    Ii(e[r]);
                for (var i = 0; i < e.length; i++)
                    Oi(e[i]);
                for (var o = 0; o < e.length; o++)
                    Mi(e[o]);
                for (var a = 0; a < e.length; a++)
                    Ni(e[a])
            }
            function Ti(t) {
                var e = t.cm
                  , n = e.display;
                Wi(e),
                t.updateMaxLine && un(e),
                t.mustUpdate = t.viewChanged || t.forceUpdate || null != t.scrollTop || t.scrollToPos && (t.scrollToPos.from.line < n.viewFrom || t.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && e.options.lineWrapping,
                t.update = t.mustUpdate && new Ui(e,t.mustUpdate && {
                    top: t.scrollTop,
                    ensure: t.scrollToPos
                },t.forceUpdate)
            }
            function Ii(t) {
                t.updatedDisplay = t.mustUpdate && Ji(t.cm, t.update)
            }
            function Oi(t) {
                var e = t.cm
                  , n = e.display;
                t.updatedDisplay && ei(e),
                t.barMeasure = mi(e),
                n.maxLineChanged && !e.options.lineWrapping && (t.adjustWidthTo = nr(e, n.maxLine, n.maxLine.text.length).left + 3,
                e.display.sizerWidth = t.adjustWidthTo,
                t.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + t.adjustWidthTo + Zn(e) + e.display.barWidth),
                t.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + t.adjustWidthTo - Yn(e))),
                (t.updatedDisplay || t.selectionChanged) && (t.preparedSelection = n.input.prepareSelection())
            }
            function Mi(t) {
                var e = t.cm;
                null != t.adjustWidthTo && (e.display.sizer.style.minWidth = t.adjustWidthTo + "px",
                t.maxScrollLeft < e.doc.scrollLeft && vi(e, Math.min(e.display.scroller.scrollLeft, t.maxScrollLeft), !0),
                e.display.maxLineChanged = !1);
                var n = t.focus && t.focus == B(F(e));
                t.preparedSelection && e.display.input.showSelection(t.preparedSelection, n),
                (t.updatedDisplay || t.startHeight != e.doc.height) && wi(e, t.barMeasure),
                t.updatedDisplay && Gi(e, t.barMeasure),
                t.selectionChanged && Zr(e),
                e.state.focused && t.updateInput && e.display.input.reset(t.typing),
                n && Yr(t.cm)
            }
            function Ni(t) {
                var e = t.cm
                  , n = e.display
                  , r = e.doc;
                if (t.updatedDisplay && Vi(e, t.update),
                null == n.wheelStartX || null == t.scrollTop && null == t.scrollLeft && !t.scrollToPos || (n.wheelStartX = n.wheelStartY = null),
                null != t.scrollTop && gi(e, t.scrollTop, t.forceScroll),
                null != t.scrollLeft && vi(e, t.scrollLeft, !0, !0),
                t.scrollToPos) {
                    var i = oi(e, pe(r, t.scrollToPos.from), pe(r, t.scrollToPos.to), t.scrollToPos.margin);
                    ii(e, i)
                }
                var o = t.maybeHiddenMarkers
                  , a = t.maybeUnhiddenMarkers;
                if (o)
                    for (var s = 0; s < o.length; ++s)
                        o[s].lines.length || wt(o[s], "hide");
                if (a)
                    for (var l = 0; l < a.length; ++l)
                        a[l].lines.length && wt(a[l], "unhide");
                n.wrapper.offsetHeight && (r.scrollTop = e.display.scroller.scrollTop),
                t.changeObjs && wt(e, "changes", e, t.changeObjs),
                t.update && t.update.finish()
            }
            function Bi(t, e) {
                if (t.curOp)
                    return e();
                xi(t);
                try {
                    return e()
                } finally {
                    ki(t)
                }
            }
            function Ri(t, e) {
                return function() {
                    if (t.curOp)
                        return e.apply(t, arguments);
                    xi(t);
                    try {
                        return e.apply(t, arguments)
                    } finally {
                        ki(t)
                    }
                }
            }
            function Pi(t) {
                return function() {
                    if (this.curOp)
                        return t.apply(this, arguments);
                    xi(this);
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        ki(this)
                    }
                }
            }
            function Di(t) {
                return function() {
                    var e = this.cm;
                    if (!e || e.curOp)
                        return t.apply(this, arguments);
                    xi(e);
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        ki(e)
                    }
                }
            }
            function Fi(t, e) {
                t.doc.highlightFrontier < t.display.viewTo && t.state.highlight.set(e, U(_i, t))
            }
            function _i(t) {
                var e = t.doc;
                if (!(e.highlightFrontier >= t.display.viewTo)) {
                    var n = +new Date + t.options.workTime
                      , r = be(t, e.highlightFrontier)
                      , i = [];
                    e.iter(r.line, Math.min(e.first + e.size, t.display.viewTo + 500), (function(o) {
                        if (r.line >= t.display.viewFrom) {
                            var a = o.styles
                              , s = o.text.length > t.options.maxHighlightLength ? jt(e.mode, r.state) : null
                              , l = Ae(t, o, r, !0);
                            s && (r.state = s),
                            o.styles = l.styles;
                            var c = o.styleClasses
                              , u = l.classes;
                            u ? o.styleClasses = u : c && (o.styleClasses = null);
                            for (var h = !a || a.length != o.styles.length || c != u && (!c || !u || c.bgClass != u.bgClass || c.textClass != u.textClass), f = 0; !h && f < a.length; ++f)
                                h = a[f] != o.styles[f];
                            h && i.push(r.line),
                            o.stateAfter = r.save(),
                            r.nextLine()
                        } else
                            o.text.length <= t.options.maxHighlightLength && Se(t, o.text, r),
                            o.stateAfter = r.line % 5 == 0 ? r.save() : null,
                            r.nextLine();
                        if (+new Date > n)
                            return Fi(t, t.options.workDelay),
                            !0
                    }
                    )),
                    e.highlightFrontier = r.line,
                    e.modeFrontier = Math.max(e.modeFrontier, r.line),
                    i.length && Bi(t, (function() {
                        for (var e = 0; e < i.length; e++)
                            Wr(t, i[e], "text")
                    }
                    ))
                }
            }
            var Ui = function(t, e, n) {
                var r = t.display;
                this.viewport = e,
                this.visible = ri(r, t.doc, e),
                this.editorIsHidden = !r.wrapper.offsetWidth,
                this.wrapperHeight = r.wrapper.clientHeight,
                this.wrapperWidth = r.wrapper.clientWidth,
                this.oldDisplayWidth = Yn(t),
                this.force = n,
                this.dims = Br(t),
                this.events = []
            };
            function Wi(t) {
                var e = t.display;
                !e.scrollbarsClipped && e.scroller.offsetWidth && (e.nativeBarWidth = e.scroller.offsetWidth - e.scroller.clientWidth,
                e.heightForcer.style.height = Zn(t) + "px",
                e.sizer.style.marginBottom = -e.nativeBarWidth + "px",
                e.sizer.style.borderRightWidth = Zn(t) + "px",
                e.scrollbarsClipped = !0)
            }
            function Qi(t) {
                if (t.hasFocus())
                    return null;
                var e = B(F(t));
                if (!e || !N(t.display.lineDiv, e))
                    return null;
                var n = {
                    activeElt: e
                };
                if (window.getSelection) {
                    var r = _(t).getSelection();
                    r.anchorNode && r.extend && N(t.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode,
                    n.anchorOffset = r.anchorOffset,
                    n.focusNode = r.focusNode,
                    n.focusOffset = r.focusOffset)
                }
                return n
            }
            function Hi(t) {
                if (t && t.activeElt && t.activeElt != B(t.activeElt.ownerDocument) && (t.activeElt.focus(),
                !/^(INPUT|TEXTAREA)$/.test(t.activeElt.nodeName) && t.anchorNode && N(document.body, t.anchorNode) && N(document.body, t.focusNode))) {
                    var e = t.activeElt.ownerDocument
                      , n = e.defaultView.getSelection()
                      , r = e.createRange();
                    r.setEnd(t.anchorNode, t.anchorOffset),
                    r.collapse(!1),
                    n.removeAllRanges(),
                    n.addRange(r),
                    n.extend(t.focusNode, t.focusOffset)
                }
            }
            function Ji(t, e) {
                var n = t.display
                  , r = t.doc;
                if (e.editorIsHidden)
                    return Qr(t),
                    !1;
                if (!e.force && e.visible.from >= n.viewFrom && e.visible.to <= n.viewTo && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && 0 == Vr(t))
                    return !1;
                Zi(t) && (Qr(t),
                e.dims = Br(t));
                var i = r.first + r.size
                  , o = Math.max(e.visible.from - t.options.viewportMargin, r.first)
                  , a = Math.min(i, e.visible.to + t.options.viewportMargin);
                n.viewFrom < o && o - n.viewFrom < 20 && (o = Math.max(r.first, n.viewFrom)),
                n.viewTo > a && n.viewTo - a < 20 && (a = Math.min(i, n.viewTo)),
                Ne && (o = rn(t.doc, o),
                a = on(t.doc, a));
                var s = o != n.viewFrom || a != n.viewTo || n.lastWrapHeight != e.wrapperHeight || n.lastWrapWidth != e.wrapperWidth;
                Jr(t, o, a),
                n.viewOffset = ln($t(t.doc, n.viewFrom)),
                t.display.mover.style.top = n.viewOffset + "px";
                var l = Vr(t);
                if (!s && 0 == l && !e.force && n.renderedView == n.view && (null == n.updateLineNumbers || n.updateLineNumbers >= n.viewTo))
                    return !1;
                var c = Qi(t);
                return l > 4 && (n.lineDiv.style.display = "none"),
                Ki(t, n.updateLineNumbers, e.dims),
                l > 4 && (n.lineDiv.style.display = ""),
                n.renderedView = n.view,
                Hi(c),
                T(n.cursorDiv),
                T(n.selectionDiv),
                n.gutters.style.height = n.sizer.style.minHeight = 0,
                s && (n.lastWrapHeight = e.wrapperHeight,
                n.lastWrapWidth = e.wrapperWidth,
                Fi(t, 400)),
                n.updateLineNumbers = null,
                !0
            }
            function Vi(t, e) {
                for (var n = e.viewport, r = !0; ; r = !1) {
                    if (r && t.options.lineWrapping && e.oldDisplayWidth != Yn(t))
                        r && (e.visible = ri(t.display, t.doc, n));
                    else if (n && null != n.top && (n = {
                        top: Math.min(t.doc.height + Gn(t.display) - qn(t), n.top)
                    }),
                    e.visible = ri(t.display, t.doc, n),
                    e.visible.from >= t.display.viewFrom && e.visible.to <= t.display.viewTo)
                        break;
                    if (!Ji(t, e))
                        break;
                    ei(t);
                    var i = mi(t);
                    zr(t),
                    wi(t, i),
                    Gi(t, i),
                    e.force = !1
                }
                e.signal(t, "update", t),
                t.display.viewFrom == t.display.reportedViewFrom && t.display.viewTo == t.display.reportedViewTo || (e.signal(t, "viewportChange", t, t.display.viewFrom, t.display.viewTo),
                t.display.reportedViewFrom = t.display.viewFrom,
                t.display.reportedViewTo = t.display.viewTo)
            }
            function zi(t, e) {
                var n = new Ui(t,e);
                if (Ji(t, n)) {
                    ei(t),
                    Vi(t, n);
                    var r = mi(t);
                    zr(t),
                    wi(t, r),
                    Gi(t, r),
                    n.finish()
                }
            }
            function Ki(t, e, n) {
                var r = t.display
                  , i = t.options.lineNumbers
                  , o = r.lineDiv
                  , a = o.firstChild;
                function s(e) {
                    var n = e.nextSibling;
                    return l && A && t.display.currentWheelTarget == e ? e.style.display = "none" : e.parentNode.removeChild(e),
                    n
                }
                for (var c = r.view, u = r.viewFrom, h = 0; h < c.length; h++) {
                    var f = c[h];
                    if (f.hidden)
                        ;
                    else if (f.node && f.node.parentNode == o) {
                        while (a != f.node)
                            a = s(a);
                        var d = i && null != e && e <= u && f.lineNumber;
                        f.changes && (J(f.changes, "gutter") > -1 && (d = !1),
                        Bn(t, f, u, n)),
                        d && (T(f.lineNumber),
                        f.lineNumber.appendChild(document.createTextNode(ae(t.options, u)))),
                        a = f.node.nextSibling
                    } else {
                        var p = Qn(t, f, u, n);
                        o.insertBefore(p, a)
                    }
                    u += f.size
                }
                while (a)
                    a = s(a)
            }
            function Xi(t) {
                var e = t.gutters.offsetWidth;
                t.sizer.style.marginLeft = e + "px",
                Mn(t, "gutterChanged", t)
            }
            function Gi(t, e) {
                t.display.sizer.style.minHeight = e.docHeight + "px",
                t.display.heightForcer.style.top = e.docHeight + "px",
                t.display.gutters.style.height = e.docHeight + t.display.barHeight + Zn(t) + "px"
            }
            function ji(t) {
                var e = t.display
                  , n = e.view;
                if (e.alignWidgets || e.gutters.firstChild && t.options.fixedGutter) {
                    for (var r = Rr(e) - e.scroller.scrollLeft + t.doc.scrollLeft, i = e.gutters.offsetWidth, o = r + "px", a = 0; a < n.length; a++)
                        if (!n[a].hidden) {
                            t.options.fixedGutter && (n[a].gutter && (n[a].gutter.style.left = o),
                            n[a].gutterBackground && (n[a].gutterBackground.style.left = o));
                            var s = n[a].alignable;
                            if (s)
                                for (var l = 0; l < s.length; l++)
                                    s[l].style.left = o
                        }
                    t.options.fixedGutter && (e.gutters.style.left = r + i + "px")
                }
            }
            function Zi(t) {
                if (!t.options.lineNumbers)
                    return !1;
                var e = t.doc
                  , n = ae(t.options, e.first + e.size - 1)
                  , r = t.display;
                if (n.length != r.lineNumChars) {
                    var i = r.measure.appendChild(O("div", [O("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
                      , o = i.firstChild.offsetWidth
                      , a = i.offsetWidth - o;
                    return r.lineGutter.style.width = "",
                    r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - a) + 1,
                    r.lineNumWidth = r.lineNumInnerWidth + a,
                    r.lineNumChars = r.lineNumInnerWidth ? n.length : -1,
                    r.lineGutter.style.width = r.lineNumWidth + "px",
                    Xi(t.display),
                    !0
                }
                return !1
            }
            function Yi(t, e) {
                for (var n = [], r = !1, i = 0; i < t.length; i++) {
                    var o = t[i]
                      , a = null;
                    if ("string" != typeof o && (a = o.style,
                    o = o.className),
                    "CodeMirror-linenumbers" == o) {
                        if (!e)
                            continue;
                        r = !0
                    }
                    n.push({
                        className: o,
                        style: a
                    })
                }
                return e && !r && n.push({
                    className: "CodeMirror-linenumbers",
                    style: null
                }),
                n
            }
            function qi(t) {
                var e = t.gutters
                  , n = t.gutterSpecs;
                T(e),
                t.lineGutter = null;
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r]
                      , o = i.className
                      , a = i.style
                      , s = e.appendChild(O("div", null, "CodeMirror-gutter " + o));
                    a && (s.style.cssText = a),
                    "CodeMirror-linenumbers" == o && (t.lineGutter = s,
                    s.style.width = (t.lineNumWidth || 1) + "px")
                }
                e.style.display = n.length ? "" : "none",
                Xi(t)
            }
            function $i(t) {
                qi(t.display),
                Ur(t),
                ji(t)
            }
            function to(t, e, r, i) {
                var o = this;
                this.input = r,
                o.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"),
                o.scrollbarFiller.setAttribute("cm-not-content", "true"),
                o.gutterFiller = O("div", null, "CodeMirror-gutter-filler"),
                o.gutterFiller.setAttribute("cm-not-content", "true"),
                o.lineDiv = M("div", null, "CodeMirror-code"),
                o.selectionDiv = O("div", null, null, "position: relative; z-index: 1"),
                o.cursorDiv = O("div", null, "CodeMirror-cursors"),
                o.measure = O("div", null, "CodeMirror-measure"),
                o.lineMeasure = O("div", null, "CodeMirror-measure"),
                o.lineSpace = M("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
                var c = M("div", [o.lineSpace], "CodeMirror-lines");
                o.mover = O("div", [c], null, "position: relative"),
                o.sizer = O("div", [o.mover], "CodeMirror-sizer"),
                o.sizerWidth = null,
                o.heightForcer = O("div", null, null, "position: absolute; height: " + V + "px; width: 1px;"),
                o.gutters = O("div", null, "CodeMirror-gutters"),
                o.lineGutter = null,
                o.scroller = O("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"),
                o.scroller.setAttribute("tabIndex", "-1"),
                o.wrapper = O("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"),
                u && h >= 105 && (o.wrapper.style.clipPath = "inset(0px)"),
                o.wrapper.setAttribute("translate", "no"),
                a && s < 8 && (o.gutters.style.zIndex = -1,
                o.scroller.style.paddingRight = 0),
                l || n && y || (o.scroller.draggable = !0),
                t && (t.appendChild ? t.appendChild(o.wrapper) : t(o.wrapper)),
                o.viewFrom = o.viewTo = e.first,
                o.reportedViewFrom = o.reportedViewTo = e.first,
                o.view = [],
                o.renderedView = null,
                o.externalMeasured = null,
                o.viewOffset = 0,
                o.lastWrapHeight = o.lastWrapWidth = 0,
                o.updateLineNumbers = null,
                o.nativeBarWidth = o.barHeight = o.barWidth = 0,
                o.scrollbarsClipped = !1,
                o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null,
                o.alignWidgets = !1,
                o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null,
                o.maxLine = null,
                o.maxLineLength = 0,
                o.maxLineChanged = !1,
                o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null,
                o.shift = !1,
                o.selForContextMenu = null,
                o.activeTouch = null,
                o.gutterSpecs = Yi(i.gutters, i.lineNumbers),
                qi(o),
                r.init(o)
            }
            Ui.prototype.signal = function(t, e) {
                Ct(t, e) && this.events.push(arguments)
            }
            ,
            Ui.prototype.finish = function() {
                for (var t = 0; t < this.events.length; t++)
                    wt.apply(null, this.events[t])
            }
            ;
            var eo = 0
              , no = null;
            function ro(t) {
                var e = t.wheelDeltaX
                  , n = t.wheelDeltaY;
                return null == e && t.detail && t.axis == t.HORIZONTAL_AXIS && (e = t.detail),
                null == n && t.detail && t.axis == t.VERTICAL_AXIS ? n = t.detail : null == n && (n = t.wheelDelta),
                {
                    x: e,
                    y: n
                }
            }
            function io(t) {
                var e = ro(t);
                return e.x *= no,
                e.y *= no,
                e
            }
            function oo(t, e) {
                u && 102 == h && (null == t.display.chromeScrollHack ? t.display.sizer.style.pointerEvents = "none" : clearTimeout(t.display.chromeScrollHack),
                t.display.chromeScrollHack = setTimeout((function() {
                    t.display.chromeScrollHack = null,
                    t.display.sizer.style.pointerEvents = ""
                }
                ), 100));
                var r = ro(e)
                  , i = r.x
                  , o = r.y
                  , a = no;
                0 === e.deltaMode && (i = e.deltaX,
                o = e.deltaY,
                a = 1);
                var s = t.display
                  , c = s.scroller
                  , d = c.scrollWidth > c.clientWidth
                  , p = c.scrollHeight > c.clientHeight;
                if (i && d || o && p) {
                    if (o && A && l)
                        t: for (var g = e.target, v = s.view; g != c; g = g.parentNode)
                            for (var m = 0; m < v.length; m++)
                                if (v[m].node == g) {
                                    t.display.currentWheelTarget = g;
                                    break t
                                }
                    if (i && !n && !f && null != a)
                        return o && p && pi(t, Math.max(0, c.scrollTop + o * a)),
                        vi(t, Math.max(0, c.scrollLeft + i * a)),
                        (!o || o && p) && xt(e),
                        void (s.wheelStartX = null);
                    if (o && null != a) {
                        var y = o * a
                          , w = t.doc.scrollTop
                          , b = w + s.wrapper.clientHeight;
                        y < 0 ? w = Math.max(0, w + y - 50) : b = Math.min(t.doc.height, b + y + 50),
                        zi(t, {
                            top: w,
                            bottom: b
                        })
                    }
                    eo < 20 && 0 !== e.deltaMode && (null == s.wheelStartX ? (s.wheelStartX = c.scrollLeft,
                    s.wheelStartY = c.scrollTop,
                    s.wheelDX = i,
                    s.wheelDY = o,
                    setTimeout((function() {
                        if (null != s.wheelStartX) {
                            var t = c.scrollLeft - s.wheelStartX
                              , e = c.scrollTop - s.wheelStartY
                              , n = e && s.wheelDY && e / s.wheelDY || t && s.wheelDX && t / s.wheelDX;
                            s.wheelStartX = s.wheelStartY = null,
                            n && (no = (no * eo + n) / (eo + 1),
                            ++eo)
                        }
                    }
                    ), 200)) : (s.wheelDX += i,
                    s.wheelDY += o))
                }
            }
            a ? no = -.53 : n ? no = 15 : u ? no = -.7 : d && (no = -1 / 3);
            var ao = function(t, e) {
                this.ranges = t,
                this.primIndex = e
            };
            ao.prototype.primary = function() {
                return this.ranges[this.primIndex]
            }
            ,
            ao.prototype.equals = function(t) {
                if (t == this)
                    return !0;
                if (t.primIndex != this.primIndex || t.ranges.length != this.ranges.length)
                    return !1;
                for (var e = 0; e < this.ranges.length; e++) {
                    var n = this.ranges[e]
                      , r = t.ranges[e];
                    if (!ce(n.anchor, r.anchor) || !ce(n.head, r.head))
                        return !1
                }
                return !0
            }
            ,
            ao.prototype.deepCopy = function() {
                for (var t = [], e = 0; e < this.ranges.length; e++)
                    t[e] = new so(ue(this.ranges[e].anchor),ue(this.ranges[e].head));
                return new ao(t,this.primIndex)
            }
            ,
            ao.prototype.somethingSelected = function() {
                for (var t = 0; t < this.ranges.length; t++)
                    if (!this.ranges[t].empty())
                        return !0;
                return !1
            }
            ,
            ao.prototype.contains = function(t, e) {
                e || (e = t);
                for (var n = 0; n < this.ranges.length; n++) {
                    var r = this.ranges[n];
                    if (le(e, r.from()) >= 0 && le(t, r.to()) <= 0)
                        return n
                }
                return -1
            }
            ;
            var so = function(t, e) {
                this.anchor = t,
                this.head = e
            };
            function lo(t, e, n) {
                var r = t && t.options.selectionsMayTouch
                  , i = e[n];
                e.sort((function(t, e) {
                    return le(t.from(), e.from())
                }
                )),
                n = J(e, i);
                for (var o = 1; o < e.length; o++) {
                    var a = e[o]
                      , s = e[o - 1]
                      , l = le(s.to(), a.from());
                    if (r && !a.empty() ? l > 0 : l >= 0) {
                        var c = fe(s.from(), a.from())
                          , u = he(s.to(), a.to())
                          , h = s.empty() ? a.from() == a.head : s.from() == s.head;
                        o <= n && --n,
                        e.splice(--o, 2, new so(h ? u : c,h ? c : u))
                    }
                }
                return new ao(e,n)
            }
            function co(t, e) {
                return new ao([new so(t,e || t)],0)
            }
            function uo(t) {
                return t.text ? se(t.from.line + t.text.length - 1, q(t.text).length + (1 == t.text.length ? t.from.ch : 0)) : t.to
            }
            function ho(t, e) {
                if (le(t, e.from) < 0)
                    return t;
                if (le(t, e.to) <= 0)
                    return uo(e);
                var n = t.line + e.text.length - (e.to.line - e.from.line) - 1
                  , r = t.ch;
                return t.line == e.to.line && (r += uo(e).ch - e.to.ch),
                se(n, r)
            }
            function fo(t, e) {
                for (var n = [], r = 0; r < t.sel.ranges.length; r++) {
                    var i = t.sel.ranges[r];
                    n.push(new so(ho(i.anchor, e),ho(i.head, e)))
                }
                return lo(t.cm, n, t.sel.primIndex)
            }
            function po(t, e, n) {
                return t.line == e.line ? se(n.line, t.ch - e.ch + n.ch) : se(n.line + (t.line - e.line), t.ch)
            }
            function go(t, e, n) {
                for (var r = [], i = se(t.first, 0), o = i, a = 0; a < e.length; a++) {
                    var s = e[a]
                      , l = po(s.from, i, o)
                      , c = po(uo(s), i, o);
                    if (i = s.to,
                    o = c,
                    "around" == n) {
                        var u = t.sel.ranges[a]
                          , h = le(u.head, u.anchor) < 0;
                        r[a] = new so(h ? c : l,h ? l : c)
                    } else
                        r[a] = new so(l,l)
                }
                return new ao(r,t.sel.primIndex)
            }
            function vo(t) {
                t.doc.mode = Kt(t.options, t.doc.modeOption),
                mo(t)
            }
            function mo(t) {
                t.doc.iter((function(t) {
                    t.stateAfter && (t.stateAfter = null),
                    t.styles && (t.styles = null)
                }
                )),
                t.doc.modeFrontier = t.doc.highlightFrontier = t.doc.first,
                Fi(t, 100),
                t.state.modeGen++,
                t.curOp && Ur(t)
            }
            function yo(t, e) {
                return 0 == e.from.ch && 0 == e.to.ch && "" == q(e.text) && (!t.cm || t.cm.options.wholeLineUpdateBefore)
            }
            function Ao(t, e, n, r) {
                function i(t) {
                    return n ? n[t] : null
                }
                function o(t, n, i) {
                    fn(t, n, i, r),
                    Mn(t, "change", t, e)
                }
                function a(t, e) {
                    for (var n = [], o = t; o < e; ++o)
                        n.push(new hn(c[o],i(o),r));
                    return n
                }
                var s = e.from
                  , l = e.to
                  , c = e.text
                  , u = $t(t, s.line)
                  , h = $t(t, l.line)
                  , f = q(c)
                  , d = i(c.length - 1)
                  , p = l.line - s.line;
                if (e.full)
                    t.insert(0, a(0, c.length)),
                    t.remove(c.length, t.size - c.length);
                else if (yo(t, e)) {
                    var g = a(0, c.length - 1);
                    o(h, h.text, d),
                    p && t.remove(s.line, p),
                    g.length && t.insert(s.line, g)
                } else if (u == h)
                    if (1 == c.length)
                        o(u, u.text.slice(0, s.ch) + f + u.text.slice(l.ch), d);
                    else {
                        var v = a(1, c.length - 1);
                        v.push(new hn(f + u.text.slice(l.ch),d,r)),
                        o(u, u.text.slice(0, s.ch) + c[0], i(0)),
                        t.insert(s.line + 1, v)
                    }
                else if (1 == c.length)
                    o(u, u.text.slice(0, s.ch) + c[0] + h.text.slice(l.ch), i(0)),
                    t.remove(s.line + 1, p);
                else {
                    o(u, u.text.slice(0, s.ch) + c[0], i(0)),
                    o(h, f + h.text.slice(l.ch), d);
                    var m = a(1, c.length - 1);
                    p > 1 && t.remove(s.line + 1, p - 1),
                    t.insert(s.line + 1, m)
                }
                Mn(t, "change", t, e)
            }
            function wo(t, e, n) {
                function r(t, i, o) {
                    if (t.linked)
                        for (var a = 0; a < t.linked.length; ++a) {
                            var s = t.linked[a];
                            if (s.doc != i) {
                                var l = o && s.sharedHist;
                                n && !l || (e(s.doc, l),
                                r(s.doc, t, l))
                            }
                        }
                }
                r(t, null, !0)
            }
            function bo(t, e) {
                if (e.cm)
                    throw new Error("This document is already in use.");
                t.doc = e,
                e.cm = t,
                Dr(t),
                vo(t),
                So(t),
                t.options.direction = e.direction,
                t.options.lineWrapping || un(t),
                t.options.mode = e.modeOption,
                Ur(t)
            }
            function So(t) {
                ("rtl" == t.doc.direction ? R : L)(t.display.lineDiv, "CodeMirror-rtl")
            }
            function Co(t) {
                Bi(t, (function() {
                    So(t),
                    Ur(t)
                }
                ))
            }
            function Eo(t) {
                this.done = [],
                this.undone = [],
                this.undoDepth = t ? t.undoDepth : 1 / 0,
                this.lastModTime = this.lastSelTime = 0,
                this.lastOp = this.lastSelOp = null,
                this.lastOrigin = this.lastSelOrigin = null,
                this.generation = this.maxGeneration = t ? t.maxGeneration : 1
            }
            function xo(t, e) {
                var n = {
                    from: ue(e.from),
                    to: uo(e),
                    text: te(t, e.from, e.to)
                };
                return No(t, n, e.from.line, e.to.line + 1),
                wo(t, (function(t) {
                    return No(t, n, e.from.line, e.to.line + 1)
                }
                ), !0),
                n
            }
            function ko(t) {
                while (t.length) {
                    var e = q(t);
                    if (!e.ranges)
                        break;
                    t.pop()
                }
            }
            function Lo(t, e) {
                return e ? (ko(t.done),
                q(t.done)) : t.done.length && !q(t.done).ranges ? q(t.done) : t.done.length > 1 && !t.done[t.done.length - 2].ranges ? (t.done.pop(),
                q(t.done)) : void 0
            }
            function To(t, e, n, r) {
                var i = t.history;
                i.undone.length = 0;
                var o, a, s = +new Date;
                if ((i.lastOp == r || i.lastOrigin == e.origin && e.origin && ("+" == e.origin.charAt(0) && i.lastModTime > s - (t.cm ? t.cm.options.historyEventDelay : 500) || "*" == e.origin.charAt(0))) && (o = Lo(i, i.lastOp == r)))
                    a = q(o.changes),
                    0 == le(e.from, e.to) && 0 == le(e.from, a.to) ? a.to = uo(e) : o.changes.push(xo(t, e));
                else {
                    var l = q(i.done);
                    l && l.ranges || Mo(t.sel, i.done),
                    o = {
                        changes: [xo(t, e)],
                        generation: i.generation
                    },
                    i.done.push(o);
                    while (i.done.length > i.undoDepth)
                        i.done.shift(),
                        i.done[0].ranges || i.done.shift()
                }
                i.done.push(n),
                i.generation = ++i.maxGeneration,
                i.lastModTime = i.lastSelTime = s,
                i.lastOp = i.lastSelOp = r,
                i.lastOrigin = i.lastSelOrigin = e.origin,
                a || wt(t, "historyAdded")
            }
            function Io(t, e, n, r) {
                var i = e.charAt(0);
                return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - t.history.lastSelTime <= (t.cm ? t.cm.options.historyEventDelay : 500)
            }
            function Oo(t, e, n, r) {
                var i = t.history
                  , o = r && r.origin;
                n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || Io(t, o, q(i.done), e)) ? i.done[i.done.length - 1] = e : Mo(e, i.done),
                i.lastSelTime = +new Date,
                i.lastSelOrigin = o,
                i.lastSelOp = n,
                r && !1 !== r.clearRedo && ko(i.undone)
            }
            function Mo(t, e) {
                var n = q(e);
                n && n.ranges && n.equals(t) || e.push(t)
            }
            function No(t, e, n, r) {
                var i = e["spans_" + t.id]
                  , o = 0;
                t.iter(Math.max(t.first, n), Math.min(t.first + t.size, r), (function(n) {
                    n.markedSpans && ((i || (i = e["spans_" + t.id] = {}))[o] = n.markedSpans),
                    ++o
                }
                ))
            }
            function Bo(t) {
                if (!t)
                    return null;
                for (var e, n = 0; n < t.length; ++n)
                    t[n].marker.explicitlyCleared ? e || (e = t.slice(0, n)) : e && e.push(t[n]);
                return e ? e.length ? e : null : t
            }
            function Ro(t, e) {
                var n = e["spans_" + t.id];
                if (!n)
                    return null;
                for (var r = [], i = 0; i < e.text.length; ++i)
                    r.push(Bo(n[i]));
                return r
            }
            function Po(t, e) {
                var n = Ro(t, e)
                  , r = Qe(t, e);
                if (!n)
                    return r;
                if (!r)
                    return n;
                for (var i = 0; i < n.length; ++i) {
                    var o = n[i]
                      , a = r[i];
                    if (o && a)
                        t: for (var s = 0; s < a.length; ++s) {
                            for (var l = a[s], c = 0; c < o.length; ++c)
                                if (o[c].marker == l.marker)
                                    continue t;
                            o.push(l)
                        }
                    else
                        a && (n[i] = a)
                }
                return n
            }
            function Do(t, e, n) {
                for (var r = [], i = 0; i < t.length; ++i) {
                    var o = t[i];
                    if (o.ranges)
                        r.push(n ? ao.prototype.deepCopy.call(o) : o);
                    else {
                        var a = o.changes
                          , s = [];
                        r.push({
                            changes: s
                        });
                        for (var l = 0; l < a.length; ++l) {
                            var c = a[l]
                              , u = void 0;
                            if (s.push({
                                from: c.from,
                                to: c.to,
                                text: c.text
                            }),
                            e)
                                for (var h in c)
                                    (u = h.match(/^spans_(\d+)$/)) && J(e, Number(u[1])) > -1 && (q(s)[h] = c[h],
                                    delete c[h])
                        }
                    }
                }
                return r
            }
            function Fo(t, e, n, r) {
                if (r) {
                    var i = t.anchor;
                    if (n) {
                        var o = le(e, i) < 0;
                        o != le(n, i) < 0 ? (i = e,
                        e = n) : o != le(e, n) < 0 && (e = n)
                    }
                    return new so(i,e)
                }
                return new so(n || e,e)
            }
            function _o(t, e, n, r, i) {
                null == i && (i = t.cm && (t.cm.display.shift || t.extend)),
                Vo(t, new ao([Fo(t.sel.primary(), e, n, i)],0), r)
            }
            function Uo(t, e, n) {
                for (var r = [], i = t.cm && (t.cm.display.shift || t.extend), o = 0; o < t.sel.ranges.length; o++)
                    r[o] = Fo(t.sel.ranges[o], e[o], null, i);
                var a = lo(t.cm, r, t.sel.primIndex);
                Vo(t, a, n)
            }
            function Wo(t, e, n, r) {
                var i = t.sel.ranges.slice(0);
                i[e] = n,
                Vo(t, lo(t.cm, i, t.sel.primIndex), r)
            }
            function Qo(t, e, n, r) {
                Vo(t, co(e, n), r)
            }
            function Ho(t, e, n) {
                var r = {
                    ranges: e.ranges,
                    update: function(e) {
                        this.ranges = [];
                        for (var n = 0; n < e.length; n++)
                            this.ranges[n] = new so(pe(t, e[n].anchor),pe(t, e[n].head))
                    },
                    origin: n && n.origin
                };
                return wt(t, "beforeSelectionChange", t, r),
                t.cm && wt(t.cm, "beforeSelectionChange", t.cm, r),
                r.ranges != e.ranges ? lo(t.cm, r.ranges, r.ranges.length - 1) : e
            }
            function Jo(t, e, n) {
                var r = t.history.done
                  , i = q(r);
                i && i.ranges ? (r[r.length - 1] = e,
                zo(t, e, n)) : Vo(t, e, n)
            }
            function Vo(t, e, n) {
                zo(t, e, n),
                Oo(t, t.sel, t.cm ? t.cm.curOp.id : NaN, n)
            }
            function zo(t, e, n) {
                (Ct(t, "beforeSelectionChange") || t.cm && Ct(t.cm, "beforeSelectionChange")) && (e = Ho(t, e, n));
                var r = n && n.bias || (le(e.primary().head, t.sel.primary().head) < 0 ? -1 : 1);
                Ko(t, Go(t, e, r, !0)),
                n && !1 === n.scroll || !t.cm || "nocursor" == t.cm.getOption("readOnly") || ci(t.cm)
            }
            function Ko(t, e) {
                e.equals(t.sel) || (t.sel = e,
                t.cm && (t.cm.curOp.updateInput = 1,
                t.cm.curOp.selectionChanged = !0,
                St(t.cm)),
                Mn(t, "cursorActivity", t))
            }
            function Xo(t) {
                Ko(t, Go(t, t.sel, null, !1))
            }
            function Go(t, e, n, r) {
                for (var i, o = 0; o < e.ranges.length; o++) {
                    var a = e.ranges[o]
                      , s = e.ranges.length == t.sel.ranges.length && t.sel.ranges[o]
                      , l = Zo(t, a.anchor, s && s.anchor, n, r)
                      , c = a.head == a.anchor ? l : Zo(t, a.head, s && s.head, n, r);
                    (i || l != a.anchor || c != a.head) && (i || (i = e.ranges.slice(0, o)),
                    i[o] = new so(l,c))
                }
                return i ? lo(t.cm, i, e.primIndex) : e
            }
            function jo(t, e, n, r, i) {
                var o = $t(t, e.line);
                if (o.markedSpans)
                    for (var a = 0; a < o.markedSpans.length; ++a) {
                        var s = o.markedSpans[a]
                          , l = s.marker
                          , c = "selectLeft"in l ? !l.selectLeft : l.inclusiveLeft
                          , u = "selectRight"in l ? !l.selectRight : l.inclusiveRight;
                        if ((null == s.from || (c ? s.from <= e.ch : s.from < e.ch)) && (null == s.to || (u ? s.to >= e.ch : s.to > e.ch))) {
                            if (i && (wt(l, "beforeCursorEnter"),
                            l.explicitlyCleared)) {
                                if (o.markedSpans) {
                                    --a;
                                    continue
                                }
                                break
                            }
                            if (!l.atomic)
                                continue;
                            if (n) {
                                var h = l.find(r < 0 ? 1 : -1)
                                  , f = void 0;
                                if ((r < 0 ? u : c) && (h = Yo(t, h, -r, h && h.line == e.line ? o : null)),
                                h && h.line == e.line && (f = le(h, n)) && (r < 0 ? f < 0 : f > 0))
                                    return jo(t, h, e, r, i)
                            }
                            var d = l.find(r < 0 ? -1 : 1);
                            return (r < 0 ? c : u) && (d = Yo(t, d, r, d.line == e.line ? o : null)),
                            d ? jo(t, d, e, r, i) : null
                        }
                    }
                return e
            }
            function Zo(t, e, n, r, i) {
                var o = r || 1
                  , a = jo(t, e, n, o, i) || !i && jo(t, e, n, o, !0) || jo(t, e, n, -o, i) || !i && jo(t, e, n, -o, !0);
                return a || (t.cantEdit = !0,
                se(t.first, 0))
            }
            function Yo(t, e, n, r) {
                return n < 0 && 0 == e.ch ? e.line > t.first ? pe(t, se(e.line - 1)) : null : n > 0 && e.ch == (r || $t(t, e.line)).text.length ? e.line < t.first + t.size - 1 ? se(e.line + 1, 0) : null : new se(e.line,e.ch + n)
            }
            function qo(t) {
                t.setSelection(se(t.firstLine(), 0), se(t.lastLine()), K)
            }
            function $o(t, e, n) {
                var r = {
                    canceled: !1,
                    from: e.from,
                    to: e.to,
                    text: e.text,
                    origin: e.origin,
                    cancel: function() {
                        return r.canceled = !0
                    }
                };
                return n && (r.update = function(e, n, i, o) {
                    e && (r.from = pe(t, e)),
                    n && (r.to = pe(t, n)),
                    i && (r.text = i),
                    void 0 !== o && (r.origin = o)
                }
                ),
                wt(t, "beforeChange", t, r),
                t.cm && wt(t.cm, "beforeChange", t.cm, r),
                r.canceled ? (t.cm && (t.cm.curOp.updateInput = 2),
                null) : {
                    from: r.from,
                    to: r.to,
                    text: r.text,
                    origin: r.origin
                }
            }
            function ta(t, e, n) {
                if (t.cm) {
                    if (!t.cm.curOp)
                        return Ri(t.cm, ta)(t, e, n);
                    if (t.cm.state.suppressEdits)
                        return
                }
                if (!(Ct(t, "beforeChange") || t.cm && Ct(t.cm, "beforeChange")) || (e = $o(t, e, !0),
                e)) {
                    var r = Me && !n && Je(t, e.from, e.to);
                    if (r)
                        for (var i = r.length - 1; i >= 0; --i)
                            ea(t, {
                                from: r[i].from,
                                to: r[i].to,
                                text: i ? [""] : e.text,
                                origin: e.origin
                            });
                    else
                        ea(t, e)
                }
            }
            function ea(t, e) {
                if (1 != e.text.length || "" != e.text[0] || 0 != le(e.from, e.to)) {
                    var n = fo(t, e);
                    To(t, e, n, t.cm ? t.cm.curOp.id : NaN),
                    ia(t, e, n, Qe(t, e));
                    var r = [];
                    wo(t, (function(t, n) {
                        n || -1 != J(r, t.history) || (ca(t.history, e),
                        r.push(t.history)),
                        ia(t, e, null, Qe(t, e))
                    }
                    ))
                }
            }
            function na(t, e, n) {
                var r = t.cm && t.cm.state.suppressEdits;
                if (!r || n) {
                    for (var i, o = t.history, a = t.sel, s = "undo" == e ? o.done : o.undone, l = "undo" == e ? o.undone : o.done, c = 0; c < s.length; c++)
                        if (i = s[c],
                        n ? i.ranges && !i.equals(t.sel) : !i.ranges)
                            break;
                    if (c != s.length) {
                        for (o.lastOrigin = o.lastSelOrigin = null; ; ) {
                            if (i = s.pop(),
                            !i.ranges) {
                                if (r)
                                    return void s.push(i);
                                break
                            }
                            if (Mo(i, l),
                            n && !i.equals(t.sel))
                                return void Vo(t, i, {
                                    clearRedo: !1
                                });
                            a = i
                        }
                        var u = [];
                        Mo(a, l),
                        l.push({
                            changes: u,
                            generation: o.generation
                        }),
                        o.generation = i.generation || ++o.maxGeneration;
                        for (var h = Ct(t, "beforeChange") || t.cm && Ct(t.cm, "beforeChange"), f = function(n) {
                            var r = i.changes[n];
                            if (r.origin = e,
                            h && !$o(t, r, !1))
                                return s.length = 0,
                                {};
                            u.push(xo(t, r));
                            var o = n ? fo(t, r) : q(s);
                            ia(t, r, o, Po(t, r)),
                            !n && t.cm && t.cm.scrollIntoView({
                                from: r.from,
                                to: uo(r)
                            });
                            var a = [];
                            wo(t, (function(t, e) {
                                e || -1 != J(a, t.history) || (ca(t.history, r),
                                a.push(t.history)),
                                ia(t, r, null, Po(t, r))
                            }
                            ))
                        }, d = i.changes.length - 1; d >= 0; --d) {
                            var p = f(d);
                            if (p)
                                return p.v
                        }
                    }
                }
            }
            function ra(t, e) {
                if (0 != e && (t.first += e,
                t.sel = new ao($(t.sel.ranges, (function(t) {
                    return new so(se(t.anchor.line + e, t.anchor.ch),se(t.head.line + e, t.head.ch))
                }
                )),t.sel.primIndex),
                t.cm)) {
                    Ur(t.cm, t.first, t.first - e, e);
                    for (var n = t.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                        Wr(t.cm, r, "gutter")
                }
            }
            function ia(t, e, n, r) {
                if (t.cm && !t.cm.curOp)
                    return Ri(t.cm, ia)(t, e, n, r);
                if (e.to.line < t.first)
                    ra(t, e.text.length - 1 - (e.to.line - e.from.line));
                else if (!(e.from.line > t.lastLine())) {
                    if (e.from.line < t.first) {
                        var i = e.text.length - 1 - (t.first - e.from.line);
                        ra(t, i),
                        e = {
                            from: se(t.first, 0),
                            to: se(e.to.line + i, e.to.ch),
                            text: [q(e.text)],
                            origin: e.origin
                        }
                    }
                    var o = t.lastLine();
                    e.to.line > o && (e = {
                        from: e.from,
                        to: se(o, $t(t, o).text.length),
                        text: [e.text[0]],
                        origin: e.origin
                    }),
                    e.removed = te(t, e.from, e.to),
                    n || (n = fo(t, e)),
                    t.cm ? oa(t.cm, e, r) : Ao(t, e, r),
                    zo(t, n, K),
                    t.cantEdit && Zo(t, se(t.firstLine(), 0)) && (t.cantEdit = !1)
                }
            }
            function oa(t, e, n) {
                var r = t.doc
                  , i = t.display
                  , o = e.from
                  , a = e.to
                  , s = !1
                  , l = o.line;
                t.options.lineWrapping || (l = re(tn($t(r, o.line))),
                r.iter(l, a.line + 1, (function(t) {
                    if (t == i.maxLine)
                        return s = !0,
                        !0
                }
                ))),
                r.sel.contains(e.from, e.to) > -1 && St(t),
                Ao(r, e, n, Pr(t)),
                t.options.lineWrapping || (r.iter(l, o.line + e.text.length, (function(t) {
                    var e = cn(t);
                    e > i.maxLineLength && (i.maxLine = t,
                    i.maxLineLength = e,
                    i.maxLineChanged = !0,
                    s = !1)
                }
                )),
                s && (t.curOp.updateMaxLine = !0)),
                Oe(r, o.line),
                Fi(t, 400);
                var c = e.text.length - (a.line - o.line) - 1;
                e.full ? Ur(t) : o.line != a.line || 1 != e.text.length || yo(t.doc, e) ? Ur(t, o.line, a.line + 1, c) : Wr(t, o.line, "text");
                var u = Ct(t, "changes")
                  , h = Ct(t, "change");
                if (h || u) {
                    var f = {
                        from: o,
                        to: a,
                        text: e.text,
                        removed: e.removed,
                        origin: e.origin
                    };
                    h && Mn(t, "change", t, f),
                    u && (t.curOp.changeObjs || (t.curOp.changeObjs = [])).push(f)
                }
                t.display.selForContextMenu = null
            }
            function aa(t, e, n, r, i) {
                var o;
                r || (r = n),
                le(r, n) < 0 && (o = [r, n],
                n = o[0],
                r = o[1]),
                "string" == typeof e && (e = t.splitLines(e)),
                ta(t, {
                    from: n,
                    to: r,
                    text: e,
                    origin: i
                })
            }
            function sa(t, e, n, r) {
                n < t.line ? t.line += r : e < t.line && (t.line = e,
                t.ch = 0)
            }
            function la(t, e, n, r) {
                for (var i = 0; i < t.length; ++i) {
                    var o = t[i]
                      , a = !0;
                    if (o.ranges) {
                        o.copied || (o = t[i] = o.deepCopy(),
                        o.copied = !0);
                        for (var s = 0; s < o.ranges.length; s++)
                            sa(o.ranges[s].anchor, e, n, r),
                            sa(o.ranges[s].head, e, n, r)
                    } else {
                        for (var l = 0; l < o.changes.length; ++l) {
                            var c = o.changes[l];
                            if (n < c.from.line)
                                c.from = se(c.from.line + r, c.from.ch),
                                c.to = se(c.to.line + r, c.to.ch);
                            else if (e <= c.to.line) {
                                a = !1;
                                break
                            }
                        }
                        a || (t.splice(0, i + 1),
                        i = 0)
                    }
                }
            }
            function ca(t, e) {
                var n = e.from.line
                  , r = e.to.line
                  , i = e.text.length - (r - n) - 1;
                la(t.done, n, r, i),
                la(t.undone, n, r, i)
            }
            function ua(t, e, n, r) {
                var i = e
                  , o = e;
                return "number" == typeof e ? o = $t(t, de(t, e)) : i = re(e),
                null == i ? null : (r(o, i) && t.cm && Wr(t.cm, i, n),
                o)
            }
            function ha(t) {
                this.lines = t,
                this.parent = null;
                for (var e = 0, n = 0; n < t.length; ++n)
                    t[n].parent = this,
                    e += t[n].height;
                this.height = e
            }
            function fa(t) {
                this.children = t;
                for (var e = 0, n = 0, r = 0; r < t.length; ++r) {
                    var i = t[r];
                    e += i.chunkSize(),
                    n += i.height,
                    i.parent = this
                }
                this.size = e,
                this.height = n,
                this.parent = null
            }
            so.prototype.from = function() {
                return fe(this.anchor, this.head)
            }
            ,
            so.prototype.to = function() {
                return he(this.anchor, this.head)
            }
            ,
            so.prototype.empty = function() {
                return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
            }
            ,
            ha.prototype = {
                chunkSize: function() {
                    return this.lines.length
                },
                removeInner: function(t, e) {
                    for (var n = t, r = t + e; n < r; ++n) {
                        var i = this.lines[n];
                        this.height -= i.height,
                        dn(i),
                        Mn(i, "delete")
                    }
                    this.lines.splice(t, e)
                },
                collapse: function(t) {
                    t.push.apply(t, this.lines)
                },
                insertInner: function(t, e, n) {
                    this.height += n,
                    this.lines = this.lines.slice(0, t).concat(e).concat(this.lines.slice(t));
                    for (var r = 0; r < e.length; ++r)
                        e[r].parent = this
                },
                iterN: function(t, e, n) {
                    for (var r = t + e; t < r; ++t)
                        if (n(this.lines[t]))
                            return !0
                }
            },
            fa.prototype = {
                chunkSize: function() {
                    return this.size
                },
                removeInner: function(t, e) {
                    this.size -= e;
                    for (var n = 0; n < this.children.length; ++n) {
                        var r = this.children[n]
                          , i = r.chunkSize();
                        if (t < i) {
                            var o = Math.min(e, i - t)
                              , a = r.height;
                            if (r.removeInner(t, o),
                            this.height -= a - r.height,
                            i == o && (this.children.splice(n--, 1),
                            r.parent = null),
                            0 == (e -= o))
                                break;
                            t = 0
                        } else
                            t -= i
                    }
                    if (this.size - e < 25 && (this.children.length > 1 || !(this.children[0]instanceof ha))) {
                        var s = [];
                        this.collapse(s),
                        this.children = [new ha(s)],
                        this.children[0].parent = this
                    }
                },
                collapse: function(t) {
                    for (var e = 0; e < this.children.length; ++e)
                        this.children[e].collapse(t)
                },
                insertInner: function(t, e, n) {
                    this.size += e.length,
                    this.height += n;
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r]
                          , o = i.chunkSize();
                        if (t <= o) {
                            if (i.insertInner(t, e, n),
                            i.lines && i.lines.length > 50) {
                                for (var a = i.lines.length % 25 + 25, s = a; s < i.lines.length; ) {
                                    var l = new ha(i.lines.slice(s, s += 25));
                                    i.height -= l.height,
                                    this.children.splice(++r, 0, l),
                                    l.parent = this
                                }
                                i.lines = i.lines.slice(0, a),
                                this.maybeSpill()
                            }
                            break
                        }
                        t -= o
                    }
                },
                maybeSpill: function() {
                    if (!(this.children.length <= 10)) {
                        var t = this;
                        do {
                            var e = t.children.splice(t.children.length - 5, 5)
                              , n = new fa(e);
                            if (t.parent) {
                                t.size -= n.size,
                                t.height -= n.height;
                                var r = J(t.parent.children, t);
                                t.parent.children.splice(r + 1, 0, n)
                            } else {
                                var i = new fa(t.children);
                                i.parent = t,
                                t.children = [i, n],
                                t = i
                            }
                            n.parent = t.parent
                        } while (t.children.length > 10);
                        t.parent.maybeSpill()
                    }
                },
                iterN: function(t, e, n) {
                    for (var r = 0; r < this.children.length; ++r) {
                        var i = this.children[r]
                          , o = i.chunkSize();
                        if (t < o) {
                            var a = Math.min(e, o - t);
                            if (i.iterN(t, a, n))
                                return !0;
                            if (0 == (e -= a))
                                break;
                            t = 0
                        } else
                            t -= o
                    }
                }
            };
            var da = function(t, e, n) {
                if (n)
                    for (var r in n)
                        n.hasOwnProperty(r) && (this[r] = n[r]);
                this.doc = t,
                this.node = e
            };
            function pa(t, e, n) {
                ln(e) < (t.curOp && t.curOp.scrollTop || t.doc.scrollTop) && li(t, n)
            }
            function ga(t, e, n, r) {
                var i = new da(t,n,r)
                  , o = t.cm;
                return o && i.noHScroll && (o.display.alignWidgets = !0),
                ua(t, e, "widget", (function(e) {
                    var n = e.widgets || (e.widgets = []);
                    if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length, Math.max(0, i.insertAt)), 0, i),
                    i.line = e,
                    o && !an(t, e)) {
                        var r = ln(e) < t.scrollTop;
                        ne(e, e.height + zn(i)),
                        r && li(o, i.height),
                        o.curOp.forceUpdate = !0
                    }
                    return !0
                }
                )),
                o && Mn(o, "lineWidgetAdded", o, i, "number" == typeof e ? e : re(e)),
                i
            }
            da.prototype.clear = function() {
                var t = this.doc.cm
                  , e = this.line.widgets
                  , n = this.line
                  , r = re(n);
                if (null != r && e) {
                    for (var i = 0; i < e.length; ++i)
                        e[i] == this && e.splice(i--, 1);
                    e.length || (n.widgets = null);
                    var o = zn(this);
                    ne(n, Math.max(0, n.height - o)),
                    t && (Bi(t, (function() {
                        pa(t, n, -o),
                        Wr(t, r, "widget")
                    }
                    )),
                    Mn(t, "lineWidgetCleared", t, this, r))
                }
            }
            ,
            da.prototype.changed = function() {
                var t = this
                  , e = this.height
                  , n = this.doc.cm
                  , r = this.line;
                this.height = null;
                var i = zn(this) - e;
                i && (an(this.doc, r) || ne(r, r.height + i),
                n && Bi(n, (function() {
                    n.curOp.forceUpdate = !0,
                    pa(n, r, i),
                    Mn(n, "lineWidgetChanged", n, t, re(r))
                }
                )))
            }
            ,
            Et(da);
            var va = 0
              , ma = function(t, e) {
                this.lines = [],
                this.type = e,
                this.doc = t,
                this.id = ++va
            };
            function ya(t, e, n, r, i) {
                if (r && r.shared)
                    return wa(t, e, n, r, i);
                if (t.cm && !t.cm.curOp)
                    return Ri(t.cm, ya)(t, e, n, r, i);
                var o = new ma(t,i)
                  , a = le(e, n);
                if (r && W(r, o, !1),
                a > 0 || 0 == a && !1 !== o.clearWhenEmpty)
                    return o;
                if (o.replacedWith && (o.collapsed = !0,
                o.widgetNode = M("span", [o.replacedWith], "CodeMirror-widget"),
                r.handleMouseEvents || o.widgetNode.setAttribute("cm-ignore-events", "true"),
                r.insertLeft && (o.widgetNode.insertLeft = !0)),
                o.collapsed) {
                    if ($e(t, e.line, e, n, o) || e.line != n.line && $e(t, n.line, e, n, o))
                        throw new Error("Inserting collapsed marker partially overlapping an existing one");
                    Re()
                }
                o.addToHistory && To(t, {
                    from: e,
                    to: n,
                    origin: "markText"
                }, t.sel, NaN);
                var s, l = e.line, c = t.cm;
                if (t.iter(l, n.line + 1, (function(r) {
                    c && o.collapsed && !c.options.lineWrapping && tn(r) == c.display.maxLine && (s = !0),
                    o.collapsed && l != e.line && ne(r, 0),
                    _e(r, new Pe(o,l == e.line ? e.ch : null,l == n.line ? n.ch : null), t.cm && t.cm.curOp),
                    ++l
                }
                )),
                o.collapsed && t.iter(e.line, n.line + 1, (function(e) {
                    an(t, e) && ne(e, 0)
                }
                )),
                o.clearOnEnter && mt(o, "beforeCursorEnter", (function() {
                    return o.clear()
                }
                )),
                o.readOnly && (Be(),
                (t.history.done.length || t.history.undone.length) && t.clearHistory()),
                o.collapsed && (o.id = ++va,
                o.atomic = !0),
                c) {
                    if (s && (c.curOp.updateMaxLine = !0),
                    o.collapsed)
                        Ur(c, e.line, n.line + 1);
                    else if (o.className || o.startStyle || o.endStyle || o.css || o.attributes || o.title)
                        for (var u = e.line; u <= n.line; u++)
                            Wr(c, u, "text");
                    o.atomic && Xo(c.doc),
                    Mn(c, "markerAdded", c, o)
                }
                return o
            }
            ma.prototype.clear = function() {
                if (!this.explicitlyCleared) {
                    var t = this.doc.cm
                      , e = t && !t.curOp;
                    if (e && xi(t),
                    Ct(this, "clear")) {
                        var n = this.find();
                        n && Mn(this, "clear", n.from, n.to)
                    }
                    for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
                        var a = this.lines[o]
                          , s = De(a.markedSpans, this);
                        t && !this.collapsed ? Wr(t, re(a), "text") : t && (null != s.to && (i = re(a)),
                        null != s.from && (r = re(a))),
                        a.markedSpans = Fe(a.markedSpans, s),
                        null == s.from && this.collapsed && !an(this.doc, a) && t && ne(a, Mr(t.display))
                    }
                    if (t && this.collapsed && !t.options.lineWrapping)
                        for (var l = 0; l < this.lines.length; ++l) {
                            var c = tn(this.lines[l])
                              , u = cn(c);
                            u > t.display.maxLineLength && (t.display.maxLine = c,
                            t.display.maxLineLength = u,
                            t.display.maxLineChanged = !0)
                        }
                    null != r && t && this.collapsed && Ur(t, r, i + 1),
                    this.lines.length = 0,
                    this.explicitlyCleared = !0,
                    this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
                    t && Xo(t.doc)),
                    t && Mn(t, "markerCleared", t, this, r, i),
                    e && ki(t),
                    this.parent && this.parent.clear()
                }
            }
            ,
            ma.prototype.find = function(t, e) {
                var n, r;
                null == t && "bookmark" == this.type && (t = 1);
                for (var i = 0; i < this.lines.length; ++i) {
                    var o = this.lines[i]
                      , a = De(o.markedSpans, this);
                    if (null != a.from && (n = se(e ? o : re(o), a.from),
                    -1 == t))
                        return n;
                    if (null != a.to && (r = se(e ? o : re(o), a.to),
                    1 == t))
                        return r
                }
                return n && {
                    from: n,
                    to: r
                }
            }
            ,
            ma.prototype.changed = function() {
                var t = this
                  , e = this.find(-1, !0)
                  , n = this
                  , r = this.doc.cm;
                e && r && Bi(r, (function() {
                    var i = e.line
                      , o = re(e.line)
                      , a = rr(r, o);
                    if (a && (fr(a),
                    r.curOp.selectionChanged = r.curOp.forceUpdate = !0),
                    r.curOp.updateMaxLine = !0,
                    !an(n.doc, i) && null != n.height) {
                        var s = n.height;
                        n.height = null;
                        var l = zn(n) - s;
                        l && ne(i, i.height + l)
                    }
                    Mn(r, "markerChanged", r, t)
                }
                ))
            }
            ,
            ma.prototype.attachLine = function(t) {
                if (!this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    e.maybeHiddenMarkers && -1 != J(e.maybeHiddenMarkers, this) || (e.maybeUnhiddenMarkers || (e.maybeUnhiddenMarkers = [])).push(this)
                }
                this.lines.push(t)
            }
            ,
            ma.prototype.detachLine = function(t) {
                if (this.lines.splice(J(this.lines, t), 1),
                !this.lines.length && this.doc.cm) {
                    var e = this.doc.cm.curOp;
                    (e.maybeHiddenMarkers || (e.maybeHiddenMarkers = [])).push(this)
                }
            }
            ,
            Et(ma);
            var Aa = function(t, e) {
                this.markers = t,
                this.primary = e;
                for (var n = 0; n < t.length; ++n)
                    t[n].parent = this
            };
            function wa(t, e, n, r, i) {
                r = W(r),
                r.shared = !1;
                var o = [ya(t, e, n, r, i)]
                  , a = o[0]
                  , s = r.widgetNode;
                return wo(t, (function(t) {
                    s && (r.widgetNode = s.cloneNode(!0)),
                    o.push(ya(t, pe(t, e), pe(t, n), r, i));
                    for (var l = 0; l < t.linked.length; ++l)
                        if (t.linked[l].isParent)
                            return;
                    a = q(o)
                }
                )),
                new Aa(o,a)
            }
            function ba(t) {
                return t.findMarks(se(t.first, 0), t.clipPos(se(t.lastLine())), (function(t) {
                    return t.parent
                }
                ))
            }
            function Sa(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , i = r.find()
                      , o = t.clipPos(i.from)
                      , a = t.clipPos(i.to);
                    if (le(o, a)) {
                        var s = ya(t, o, a, r.primary, r.primary.type);
                        r.markers.push(s),
                        s.parent = r
                    }
                }
            }
            function Ca(t) {
                for (var e = function(e) {
                    var n = t[e]
                      , r = [n.primary.doc];
                    wo(n.primary.doc, (function(t) {
                        return r.push(t)
                    }
                    ));
                    for (var i = 0; i < n.markers.length; i++) {
                        var o = n.markers[i];
                        -1 == J(r, o.doc) && (o.parent = null,
                        n.markers.splice(i--, 1))
                    }
                }, n = 0; n < t.length; n++)
                    e(n)
            }
            Aa.prototype.clear = function() {
                if (!this.explicitlyCleared) {
                    this.explicitlyCleared = !0;
                    for (var t = 0; t < this.markers.length; ++t)
                        this.markers[t].clear();
                    Mn(this, "clear")
                }
            }
            ,
            Aa.prototype.find = function(t, e) {
                return this.primary.find(t, e)
            }
            ,
            Et(Aa);
            var Ea = 0
              , xa = function(t, e, n, r, i) {
                if (!(this instanceof xa))
                    return new xa(t,e,n,r,i);
                null == n && (n = 0),
                fa.call(this, [new ha([new hn("",null)])]),
                this.first = n,
                this.scrollTop = this.scrollLeft = 0,
                this.cantEdit = !1,
                this.cleanGeneration = 1,
                this.modeFrontier = this.highlightFrontier = n;
                var o = se(n, 0);
                this.sel = co(o),
                this.history = new Eo(null),
                this.id = ++Ea,
                this.modeOption = e,
                this.lineSep = r,
                this.direction = "rtl" == i ? "rtl" : "ltr",
                this.extend = !1,
                "string" == typeof t && (t = this.splitLines(t)),
                Ao(this, {
                    from: o,
                    to: o,
                    text: t
                }),
                Vo(this, co(o), K)
            };
            xa.prototype = nt(fa.prototype, {
                constructor: xa,
                iter: function(t, e, n) {
                    n ? this.iterN(t - this.first, e - t, n) : this.iterN(this.first, this.first + this.size, t)
                },
                insert: function(t, e) {
                    for (var n = 0, r = 0; r < e.length; ++r)
                        n += e[r].height;
                    this.insertInner(t - this.first, e, n)
                },
                remove: function(t, e) {
                    this.removeInner(t - this.first, e)
                },
                getValue: function(t) {
                    var e = ee(this, this.first, this.first + this.size);
                    return !1 === t ? e : e.join(t || this.lineSeparator())
                },
                setValue: Di((function(t) {
                    var e = se(this.first, 0)
                      , n = this.first + this.size - 1;
                    ta(this, {
                        from: e,
                        to: se(n, $t(this, n).text.length),
                        text: this.splitLines(t),
                        origin: "setValue",
                        full: !0
                    }, !0),
                    this.cm && ui(this.cm, 0, 0),
                    Vo(this, co(e), K)
                }
                )),
                replaceRange: function(t, e, n, r) {
                    e = pe(this, e),
                    n = n ? pe(this, n) : e,
                    aa(this, t, e, n, r)
                },
                getRange: function(t, e, n) {
                    var r = te(this, pe(this, t), pe(this, e));
                    return !1 === n ? r : "" === n ? r.join("") : r.join(n || this.lineSeparator())
                },
                getLine: function(t) {
                    var e = this.getLineHandle(t);
                    return e && e.text
                },
                getLineHandle: function(t) {
                    if (oe(this, t))
                        return $t(this, t)
                },
                getLineNumber: function(t) {
                    return re(t)
                },
                getLineHandleVisualStart: function(t) {
                    return "number" == typeof t && (t = $t(this, t)),
                    tn(t)
                },
                lineCount: function() {
                    return this.size
                },
                firstLine: function() {
                    return this.first
                },
                lastLine: function() {
                    return this.first + this.size - 1
                },
                clipPos: function(t) {
                    return pe(this, t)
                },
                getCursor: function(t) {
                    var e, n = this.sel.primary();
                    return e = null == t || "head" == t ? n.head : "anchor" == t ? n.anchor : "end" == t || "to" == t || !1 === t ? n.to() : n.from(),
                    e
                },
                listSelections: function() {
                    return this.sel.ranges
                },
                somethingSelected: function() {
                    return this.sel.somethingSelected()
                },
                setCursor: Di((function(t, e, n) {
                    Qo(this, pe(this, "number" == typeof t ? se(t, e || 0) : t), null, n)
                }
                )),
                setSelection: Di((function(t, e, n) {
                    Qo(this, pe(this, t), pe(this, e || t), n)
                }
                )),
                extendSelection: Di((function(t, e, n) {
                    _o(this, pe(this, t), e && pe(this, e), n)
                }
                )),
                extendSelections: Di((function(t, e) {
                    Uo(this, ve(this, t), e)
                }
                )),
                extendSelectionsBy: Di((function(t, e) {
                    var n = $(this.sel.ranges, t);
                    Uo(this, ve(this, n), e)
                }
                )),
                setSelections: Di((function(t, e, n) {
                    if (t.length) {
                        for (var r = [], i = 0; i < t.length; i++)
                            r[i] = new so(pe(this, t[i].anchor),pe(this, t[i].head || t[i].anchor));
                        null == e && (e = Math.min(t.length - 1, this.sel.primIndex)),
                        Vo(this, lo(this.cm, r, e), n)
                    }
                }
                )),
                addSelection: Di((function(t, e, n) {
                    var r = this.sel.ranges.slice(0);
                    r.push(new so(pe(this, t),pe(this, e || t))),
                    Vo(this, lo(this.cm, r, r.length - 1), n)
                }
                )),
                getSelection: function(t) {
                    for (var e, n = this.sel.ranges, r = 0; r < n.length; r++) {
                        var i = te(this, n[r].from(), n[r].to());
                        e = e ? e.concat(i) : i
                    }
                    return !1 === t ? e : e.join(t || this.lineSeparator())
                },
                getSelections: function(t) {
                    for (var e = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
                        var i = te(this, n[r].from(), n[r].to());
                        !1 !== t && (i = i.join(t || this.lineSeparator())),
                        e[r] = i
                    }
                    return e
                },
                replaceSelection: function(t, e, n) {
                    for (var r = [], i = 0; i < this.sel.ranges.length; i++)
                        r[i] = t;
                    this.replaceSelections(r, e, n || "+input")
                },
                replaceSelections: Di((function(t, e, n) {
                    for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
                        var a = i.ranges[o];
                        r[o] = {
                            from: a.from(),
                            to: a.to(),
                            text: this.splitLines(t[o]),
                            origin: n
                        }
                    }
                    for (var s = e && "end" != e && go(this, r, e), l = r.length - 1; l >= 0; l--)
                        ta(this, r[l]);
                    s ? Jo(this, s) : this.cm && ci(this.cm)
                }
                )),
                undo: Di((function() {
                    na(this, "undo")
                }
                )),
                redo: Di((function() {
                    na(this, "redo")
                }
                )),
                undoSelection: Di((function() {
                    na(this, "undo", !0)
                }
                )),
                redoSelection: Di((function() {
                    na(this, "redo", !0)
                }
                )),
                setExtending: function(t) {
                    this.extend = t
                },
                getExtending: function() {
                    return this.extend
                },
                historySize: function() {
                    for (var t = this.history, e = 0, n = 0, r = 0; r < t.done.length; r++)
                        t.done[r].ranges || ++e;
                    for (var i = 0; i < t.undone.length; i++)
                        t.undone[i].ranges || ++n;
                    return {
                        undo: e,
                        redo: n
                    }
                },
                clearHistory: function() {
                    var t = this;
                    this.history = new Eo(this.history),
                    wo(this, (function(e) {
                        return e.history = t.history
                    }
                    ), !0)
                },
                markClean: function() {
                    this.cleanGeneration = this.changeGeneration(!0)
                },
                changeGeneration: function(t) {
                    return t && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
                    this.history.generation
                },
                isClean: function(t) {
                    return this.history.generation == (t || this.cleanGeneration)
                },
                getHistory: function() {
                    return {
                        done: Do(this.history.done),
                        undone: Do(this.history.undone)
                    }
                },
                setHistory: function(t) {
                    var e = this.history = new Eo(this.history);
                    e.done = Do(t.done.slice(0), null, !0),
                    e.undone = Do(t.undone.slice(0), null, !0)
                },
                setGutterMarker: Di((function(t, e, n) {
                    return ua(this, t, "gutter", (function(t) {
                        var r = t.gutterMarkers || (t.gutterMarkers = {});
                        return r[e] = n,
                        !n && at(r) && (t.gutterMarkers = null),
                        !0
                    }
                    ))
                }
                )),
                clearGutter: Di((function(t) {
                    var e = this;
                    this.iter((function(n) {
                        n.gutterMarkers && n.gutterMarkers[t] && ua(e, n, "gutter", (function() {
                            return n.gutterMarkers[t] = null,
                            at(n.gutterMarkers) && (n.gutterMarkers = null),
                            !0
                        }
                        ))
                    }
                    ))
                }
                )),
                lineInfo: function(t) {
                    var e;
                    if ("number" == typeof t) {
                        if (!oe(this, t))
                            return null;
                        if (e = t,
                        t = $t(this, t),
                        !t)
                            return null
                    } else if (e = re(t),
                    null == e)
                        return null;
                    return {
                        line: e,
                        handle: t,
                        text: t.text,
                        gutterMarkers: t.gutterMarkers,
                        textClass: t.textClass,
                        bgClass: t.bgClass,
                        wrapClass: t.wrapClass,
                        widgets: t.widgets
                    }
                },
                addLineClass: Di((function(t, e, n) {
                    return ua(this, t, "gutter" == e ? "gutter" : "class", (function(t) {
                        var r = "text" == e ? "textClass" : "background" == e ? "bgClass" : "gutter" == e ? "gutterClass" : "wrapClass";
                        if (t[r]) {
                            if (x(n).test(t[r]))
                                return !1;
                            t[r] += " " + n
                        } else
                            t[r] = n;
                        return !0
                    }
                    ))
                }
                )),
                removeLineClass: Di((function(t, e, n) {
                    return ua(this, t, "gutter" == e ? "gutter" : "class", (function(t) {
                        var r = "text" == e ? "textClass" : "background" == e ? "bgClass" : "gutter" == e ? "gutterClass" : "wrapClass"
                          , i = t[r];
                        if (!i)
                            return !1;
                        if (null == n)
                            t[r] = null;
                        else {
                            var o = i.match(x(n));
                            if (!o)
                                return !1;
                            var a = o.index + o[0].length;
                            t[r] = i.slice(0, o.index) + (o.index && a != i.length ? " " : "") + i.slice(a) || null
                        }
                        return !0
                    }
                    ))
                }
                )),
                addLineWidget: Di((function(t, e, n) {
                    return ga(this, t, e, n)
                }
                )),
                removeLineWidget: function(t) {
                    t.clear()
                },
                markText: function(t, e, n) {
                    return ya(this, pe(this, t), pe(this, e), n, n && n.type || "range")
                },
                setBookmark: function(t, e) {
                    var n = {
                        replacedWith: e && (null == e.nodeType ? e.widget : e),
                        insertLeft: e && e.insertLeft,
                        clearWhenEmpty: !1,
                        shared: e && e.shared,
                        handleMouseEvents: e && e.handleMouseEvents
                    };
                    return t = pe(this, t),
                    ya(this, t, t, n, "bookmark")
                },
                findMarksAt: function(t) {
                    t = pe(this, t);
                    var e = []
                      , n = $t(this, t.line).markedSpans;
                    if (n)
                        for (var r = 0; r < n.length; ++r) {
                            var i = n[r];
                            (null == i.from || i.from <= t.ch) && (null == i.to || i.to >= t.ch) && e.push(i.marker.parent || i.marker)
                        }
                    return e
                },
                findMarks: function(t, e, n) {
                    t = pe(this, t),
                    e = pe(this, e);
                    var r = []
                      , i = t.line;
                    return this.iter(t.line, e.line + 1, (function(o) {
                        var a = o.markedSpans;
                        if (a)
                            for (var s = 0; s < a.length; s++) {
                                var l = a[s];
                                null != l.to && i == t.line && t.ch >= l.to || null == l.from && i != t.line || null != l.from && i == e.line && l.from >= e.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
                            }
                        ++i
                    }
                    )),
                    r
                },
                getAllMarks: function() {
                    var t = [];
                    return this.iter((function(e) {
                        var n = e.markedSpans;
                        if (n)
                            for (var r = 0; r < n.length; ++r)
                                null != n[r].from && t.push(n[r].marker)
                    }
                    )),
                    t
                },
                posFromIndex: function(t) {
                    var e, n = this.first, r = this.lineSeparator().length;
                    return this.iter((function(i) {
                        var o = i.text.length + r;
                        if (o > t)
                            return e = t,
                            !0;
                        t -= o,
                        ++n
                    }
                    )),
                    pe(this, se(n, e))
                },
                indexFromPos: function(t) {
                    t = pe(this, t);
                    var e = t.ch;
                    if (t.line < this.first || t.ch < 0)
                        return 0;
                    var n = this.lineSeparator().length;
                    return this.iter(this.first, t.line, (function(t) {
                        e += t.text.length + n
                    }
                    )),
                    e
                },
                copy: function(t) {
                    var e = new xa(ee(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep,this.direction);
                    return e.scrollTop = this.scrollTop,
                    e.scrollLeft = this.scrollLeft,
                    e.sel = this.sel,
                    e.extend = !1,
                    t && (e.history.undoDepth = this.history.undoDepth,
                    e.setHistory(this.getHistory())),
                    e
                },
                linkedDoc: function(t) {
                    t || (t = {});
                    var e = this.first
                      , n = this.first + this.size;
                    null != t.from && t.from > e && (e = t.from),
                    null != t.to && t.to < n && (n = t.to);
                    var r = new xa(ee(this, e, n),t.mode || this.modeOption,e,this.lineSep,this.direction);
                    return t.sharedHist && (r.history = this.history),
                    (this.linked || (this.linked = [])).push({
                        doc: r,
                        sharedHist: t.sharedHist
                    }),
                    r.linked = [{
                        doc: this,
                        isParent: !0,
                        sharedHist: t.sharedHist
                    }],
                    Sa(r, ba(this)),
                    r
                },
                unlinkDoc: function(t) {
                    if (t instanceof Us && (t = t.doc),
                    this.linked)
                        for (var e = 0; e < this.linked.length; ++e) {
                            var n = this.linked[e];
                            if (n.doc == t) {
                                this.linked.splice(e, 1),
                                t.unlinkDoc(this),
                                Ca(ba(this));
                                break
                            }
                        }
                    if (t.history == this.history) {
                        var r = [t.id];
                        wo(t, (function(t) {
                            return r.push(t.id)
                        }
                        ), !0),
                        t.history = new Eo(null),
                        t.history.done = Do(this.history.done, r),
                        t.history.undone = Do(this.history.undone, r)
                    }
                },
                iterLinkedDocs: function(t) {
                    wo(this, t)
                },
                getMode: function() {
                    return this.mode
                },
                getEditor: function() {
                    return this.cm
                },
                splitLines: function(t) {
                    return this.lineSep ? t.split(this.lineSep) : Dt(t)
                },
                lineSeparator: function() {
                    return this.lineSep || "\n"
                },
                setDirection: Di((function(t) {
                    "rtl" != t && (t = "ltr"),
                    t != this.direction && (this.direction = t,
                    this.iter((function(t) {
                        return t.order = null
                    }
                    )),
                    this.cm && Co(this.cm))
                }
                ))
            }),
            xa.prototype.eachLine = xa.prototype.iter;
            var ka = 0;
            function La(t) {
                var e = this;
                if (Oa(e),
                !bt(e, t) && !Kn(e.display, t)) {
                    xt(t),
                    a && (ka = +new Date);
                    var n = Fr(e, t, !0)
                      , r = t.dataTransfer.files;
                    if (n && !e.isReadOnly())
                        if (r && r.length && window.FileReader && window.File)
                            for (var i = r.length, o = Array(i), s = 0, l = function() {
                                ++s == i && Ri(e, (function() {
                                    n = pe(e.doc, n);
                                    var t = {
                                        from: n,
                                        to: n,
                                        text: e.doc.splitLines(o.filter((function(t) {
                                            return null != t
                                        }
                                        )).join(e.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    ta(e.doc, t),
                                    Jo(e.doc, co(pe(e.doc, n), pe(e.doc, uo(t))))
                                }
                                ))()
                            }, c = function(t, n) {
                                if (e.options.allowDropFileTypes && -1 == J(e.options.allowDropFileTypes, t.type))
                                    l();
                                else {
                                    var r = new FileReader;
                                    r.onerror = function() {
                                        return l()
                                    }
                                    ,
                                    r.onload = function() {
                                        var t = r.result;
                                        /[\x00-\x08\x0e-\x1f]{2}/.test(t) || (o[n] = t),
                                        l()
                                    }
                                    ,
                                    r.readAsText(t)
                                }
                            }, u = 0; u < r.length; u++)
                                c(r[u], u);
                        else {
                            if (e.state.draggingText && e.doc.sel.contains(n) > -1)
                                return e.state.draggingText(t),
                                void setTimeout((function() {
                                    return e.display.input.focus()
                                }
                                ), 20);
                            try {
                                var h = t.dataTransfer.getData("Text");
                                if (h) {
                                    var f;
                                    if (e.state.draggingText && !e.state.draggingText.copy && (f = e.listSelections()),
                                    zo(e.doc, co(n, n)),
                                    f)
                                        for (var d = 0; d < f.length; ++d)
                                            aa(e.doc, "", f[d].anchor, f[d].head, "drag");
                                    e.replaceSelection(h, "around", "paste"),
                                    e.display.input.focus()
                                }
                            } catch (p) {}
                        }
                }
            }
            function Ta(t, e) {
                if (a && (!t.state.draggingText || +new Date - ka < 100))
                    Tt(e);
                else if (!bt(t, e) && !Kn(t.display, e) && (e.dataTransfer.setData("Text", t.getSelection()),
                e.dataTransfer.effectAllowed = "copyMove",
                e.dataTransfer.setDragImage && !d)) {
                    var n = O("img", null, null, "position: fixed; left: 0; top: 0;");
                    n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
                    f && (n.width = n.height = 1,
                    t.display.wrapper.appendChild(n),
                    n._top = n.offsetTop),
                    e.dataTransfer.setDragImage(n, 0, 0),
                    f && n.parentNode.removeChild(n)
                }
            }
            function Ia(t, e) {
                var n = Fr(t, e);
                if (n) {
                    var r = document.createDocumentFragment();
                    Xr(t, n, r),
                    t.display.dragCursor || (t.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
                    t.display.lineSpace.insertBefore(t.display.dragCursor, t.display.cursorDiv)),
                    I(t.display.dragCursor, r)
                }
            }
            function Oa(t) {
                t.display.dragCursor && (t.display.lineSpace.removeChild(t.display.dragCursor),
                t.display.dragCursor = null)
            }
            function Ma(t) {
                if (document.getElementsByClassName) {
                    for (var e = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < e.length; r++) {
                        var i = e[r].CodeMirror;
                        i && n.push(i)
                    }
                    n.length && n[0].operation((function() {
                        for (var e = 0; e < n.length; e++)
                            t(n[e])
                    }
                    ))
                }
            }
            var Na = !1;
            function Ba() {
                Na || (Ra(),
                Na = !0)
            }
            function Ra() {
                var t;
                mt(window, "resize", (function() {
                    null == t && (t = setTimeout((function() {
                        t = null,
                        Ma(Pa)
                    }
                    ), 100))
                }
                )),
                mt(window, "blur", (function() {
                    return Ma(ti)
                }
                ))
            }
            function Pa(t) {
                var e = t.display;
                e.cachedCharWidth = e.cachedTextHeight = e.cachedPaddingH = null,
                e.scrollbarsClipped = !1,
                t.setSize()
            }
            for (var Da = {
                3: "Pause",
                8: "Backspace",
                9: "Tab",
                13: "Enter",
                16: "Shift",
                17: "Ctrl",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Esc",
                32: "Space",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "Left",
                38: "Up",
                39: "Right",
                40: "Down",
                44: "PrintScrn",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Mod",
                92: "Mod",
                93: "Mod",
                106: "*",
                107: "=",
                109: "-",
                110: ".",
                111: "/",
                145: "ScrollLock",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'",
                224: "Mod",
                63232: "Up",
                63233: "Down",
                63234: "Left",
                63235: "Right",
                63272: "Delete",
                63273: "Home",
                63275: "End",
                63276: "PageUp",
                63277: "PageDown",
                63302: "Insert"
            }, Fa = 0; Fa < 10; Fa++)
                Da[Fa + 48] = Da[Fa + 96] = String(Fa);
            for (var _a = 65; _a <= 90; _a++)
                Da[_a] = String.fromCharCode(_a);
            for (var Ua = 1; Ua <= 12; Ua++)
                Da[Ua + 111] = Da[Ua + 63235] = "F" + Ua;
            var Wa = {};
            function Qa(t) {
                var e, n, r, i, o = t.split(/-(?!$)/);
                t = o[o.length - 1];
                for (var a = 0; a < o.length - 1; a++) {
                    var s = o[a];
                    if (/^(cmd|meta|m)$/i.test(s))
                        i = !0;
                    else if (/^a(lt)?$/i.test(s))
                        e = !0;
                    else if (/^(c|ctrl|control)$/i.test(s))
                        n = !0;
                    else {
                        if (!/^s(hift)?$/i.test(s))
                            throw new Error("Unrecognized modifier name: " + s);
                        r = !0
                    }
                }
                return e && (t = "Alt-" + t),
                n && (t = "Ctrl-" + t),
                i && (t = "Cmd-" + t),
                r && (t = "Shift-" + t),
                t
            }
            function Ha(t) {
                var e = {};
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = t[n];
                        if (/^(name|fallthrough|(de|at)tach)$/.test(n))
                            continue;
                        if ("..." == r) {
                            delete t[n];
                            continue
                        }
                        for (var i = $(n.split(" "), Qa), o = 0; o < i.length; o++) {
                            var a = void 0
                              , s = void 0;
                            o == i.length - 1 ? (s = i.join(" "),
                            a = r) : (s = i.slice(0, o + 1).join(" "),
                            a = "...");
                            var l = e[s];
                            if (l) {
                                if (l != a)
                                    throw new Error("Inconsistent bindings for " + s)
                            } else
                                e[s] = a
                        }
                        delete t[n]
                    }
                for (var c in e)
                    t[c] = e[c];
                return t
            }
            function Ja(t, e, n, r) {
                e = Xa(e);
                var i = e.call ? e.call(t, r) : e[t];
                if (!1 === i)
                    return "nothing";
                if ("..." === i)
                    return "multi";
                if (null != i && n(i))
                    return "handled";
                if (e.fallthrough) {
                    if ("[object Array]" != Object.prototype.toString.call(e.fallthrough))
                        return Ja(t, e.fallthrough, n, r);
                    for (var o = 0; o < e.fallthrough.length; o++) {
                        var a = Ja(t, e.fallthrough[o], n, r);
                        if (a)
                            return a
                    }
                }
            }
            function Va(t) {
                var e = "string" == typeof t ? t : Da[t.keyCode];
                return "Ctrl" == e || "Alt" == e || "Shift" == e || "Mod" == e
            }
            function za(t, e, n) {
                var r = t;
                return e.altKey && "Alt" != r && (t = "Alt-" + t),
                (C ? e.metaKey : e.ctrlKey) && "Ctrl" != r && (t = "Ctrl-" + t),
                (C ? e.ctrlKey : e.metaKey) && "Mod" != r && (t = "Cmd-" + t),
                !n && e.shiftKey && "Shift" != r && (t = "Shift-" + t),
                t
            }
            function Ka(t, e) {
                if (f && 34 == t.keyCode && t["char"])
                    return !1;
                var n = Da[t.keyCode];
                return null != n && !t.altGraphKey && (3 == t.keyCode && t.code && (n = t.code),
                za(n, t, e))
            }
            function Xa(t) {
                return "string" == typeof t ? Wa[t] : t
            }
            function Ga(t, e) {
                for (var n = t.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
                    var o = e(n[i]);
                    while (r.length && le(o.from, q(r).to) <= 0) {
                        var a = r.pop();
                        if (le(a.from, o.from) < 0) {
                            o.from = a.from;
                            break
                        }
                    }
                    r.push(o)
                }
                Bi(t, (function() {
                    for (var e = r.length - 1; e >= 0; e--)
                        aa(t.doc, "", r[e].from, r[e].to, "+delete");
                    ci(t)
                }
                ))
            }
            function ja(t, e, n) {
                var r = ct(t.text, e + n, n);
                return r < 0 || r > t.text.length ? null : r
            }
            function Za(t, e, n) {
                var r = ja(t, e.ch, n);
                return null == r ? null : new se(e.line,r,n < 0 ? "after" : "before")
            }
            function Ya(t, e, n, r, i) {
                if (t) {
                    "rtl" == e.doc.direction && (i = -i);
                    var o = gt(n, e.doc.direction);
                    if (o) {
                        var a, s = i < 0 ? q(o) : o[0], l = i < 0 == (1 == s.level), c = l ? "after" : "before";
                        if (s.level > 0 || "rtl" == e.doc.direction) {
                            var u = ir(e, n);
                            a = i < 0 ? n.text.length - 1 : 0;
                            var h = or(e, u, a).top;
                            a = ut((function(t) {
                                return or(e, u, t).top == h
                            }
                            ), i < 0 == (1 == s.level) ? s.from : s.to - 1, a),
                            "before" == c && (a = ja(n, a, 1))
                        } else
                            a = i < 0 ? s.to : s.from;
                        return new se(r,a,c)
                    }
                }
                return new se(r,i < 0 ? n.text.length : 0,i < 0 ? "before" : "after")
            }
            function qa(t, e, n, r) {
                var i = gt(e, t.doc.direction);
                if (!i)
                    return Za(e, n, r);
                n.ch >= e.text.length ? (n.ch = e.text.length,
                n.sticky = "before") : n.ch <= 0 && (n.ch = 0,
                n.sticky = "after");
                var o = dt(i, n.ch, n.sticky)
                  , a = i[o];
                if ("ltr" == t.doc.direction && a.level % 2 == 0 && (r > 0 ? a.to > n.ch : a.from < n.ch))
                    return Za(e, n, r);
                var s, l = function(t, n) {
                    return ja(e, t instanceof se ? t.ch : t, n)
                }, c = function(n) {
                    return t.options.lineWrapping ? (s = s || ir(t, e),
                    kr(t, e, s, n)) : {
                        begin: 0,
                        end: e.text.length
                    }
                }, u = c("before" == n.sticky ? l(n, -1) : n.ch);
                if ("rtl" == t.doc.direction || 1 == a.level) {
                    var h = 1 == a.level == r < 0
                      , f = l(n, h ? 1 : -1);
                    if (null != f && (h ? f <= a.to && f <= u.end : f >= a.from && f >= u.begin)) {
                        var d = h ? "before" : "after";
                        return new se(n.line,f,d)
                    }
                }
                var p = function(t, e, r) {
                    for (var o = function(t, e) {
                        return e ? new se(n.line,l(t, 1),"before") : new se(n.line,t,"after")
                    }; t >= 0 && t < i.length; t += e) {
                        var a = i[t]
                          , s = e > 0 == (1 != a.level)
                          , c = s ? r.begin : l(r.end, -1);
                        if (a.from <= c && c < a.to)
                            return o(c, s);
                        if (c = s ? a.from : l(a.to, -1),
                        r.begin <= c && c < r.end)
                            return o(c, s)
                    }
                }
                  , g = p(o + r, r, u);
                if (g)
                    return g;
                var v = r > 0 ? u.end : l(u.begin, -1);
                return null == v || r > 0 && v == e.text.length || (g = p(r > 0 ? 0 : i.length - 1, r, c(v)),
                !g) ? null : g
            }
            Wa.basic = {
                Left: "goCharLeft",
                Right: "goCharRight",
                Up: "goLineUp",
                Down: "goLineDown",
                End: "goLineEnd",
                Home: "goLineStartSmart",
                PageUp: "goPageUp",
                PageDown: "goPageDown",
                Delete: "delCharAfter",
                Backspace: "delCharBefore",
                "Shift-Backspace": "delCharBefore",
                Tab: "defaultTab",
                "Shift-Tab": "indentAuto",
                Enter: "newlineAndIndent",
                Insert: "toggleOverwrite",
                Esc: "singleSelection"
            },
            Wa.pcDefault = {
                "Ctrl-A": "selectAll",
                "Ctrl-D": "deleteLine",
                "Ctrl-Z": "undo",
                "Shift-Ctrl-Z": "redo",
                "Ctrl-Y": "redo",
                "Ctrl-Home": "goDocStart",
                "Ctrl-End": "goDocEnd",
                "Ctrl-Up": "goLineUp",
                "Ctrl-Down": "goLineDown",
                "Ctrl-Left": "goGroupLeft",
                "Ctrl-Right": "goGroupRight",
                "Alt-Left": "goLineStart",
                "Alt-Right": "goLineEnd",
                "Ctrl-Backspace": "delGroupBefore",
                "Ctrl-Delete": "delGroupAfter",
                "Ctrl-S": "save",
                "Ctrl-F": "find",
                "Ctrl-G": "findNext",
                "Shift-Ctrl-G": "findPrev",
                "Shift-Ctrl-F": "replace",
                "Shift-Ctrl-R": "replaceAll",
                "Ctrl-[": "indentLess",
                "Ctrl-]": "indentMore",
                "Ctrl-U": "undoSelection",
                "Shift-Ctrl-U": "redoSelection",
                "Alt-U": "redoSelection",
                fallthrough: "basic"
            },
            Wa.emacsy = {
                "Ctrl-F": "goCharRight",
                "Ctrl-B": "goCharLeft",
                "Ctrl-P": "goLineUp",
                "Ctrl-N": "goLineDown",
                "Ctrl-A": "goLineStart",
                "Ctrl-E": "goLineEnd",
                "Ctrl-V": "goPageDown",
                "Shift-Ctrl-V": "goPageUp",
                "Ctrl-D": "delCharAfter",
                "Ctrl-H": "delCharBefore",
                "Alt-Backspace": "delWordBefore",
                "Ctrl-K": "killLine",
                "Ctrl-T": "transposeChars",
                "Ctrl-O": "openLine"
            },
            Wa.macDefault = {
                "Cmd-A": "selectAll",
                "Cmd-D": "deleteLine",
                "Cmd-Z": "undo",
                "Shift-Cmd-Z": "redo",
                "Cmd-Y": "redo",
                "Cmd-Home": "goDocStart",
                "Cmd-Up": "goDocStart",
                "Cmd-End": "goDocEnd",
                "Cmd-Down": "goDocEnd",
                "Alt-Left": "goGroupLeft",
                "Alt-Right": "goGroupRight",
                "Cmd-Left": "goLineLeft",
                "Cmd-Right": "goLineRight",
                "Alt-Backspace": "delGroupBefore",
                "Ctrl-Alt-Backspace": "delGroupAfter",
                "Alt-Delete": "delGroupAfter",
                "Cmd-S": "save",
                "Cmd-F": "find",
                "Cmd-G": "findNext",
                "Shift-Cmd-G": "findPrev",
                "Cmd-Alt-F": "replace",
                "Shift-Cmd-Alt-F": "replaceAll",
                "Cmd-[": "indentLess",
                "Cmd-]": "indentMore",
                "Cmd-Backspace": "delWrappedLineLeft",
                "Cmd-Delete": "delWrappedLineRight",
                "Cmd-U": "undoSelection",
                "Shift-Cmd-U": "redoSelection",
                "Ctrl-Up": "goDocStart",
                "Ctrl-Down": "goDocEnd",
                fallthrough: ["basic", "emacsy"]
            },
            Wa["default"] = A ? Wa.macDefault : Wa.pcDefault;
            var $a = {
                selectAll: qo,
                singleSelection: function(t) {
                    return t.setSelection(t.getCursor("anchor"), t.getCursor("head"), K)
                },
                killLine: function(t) {
                    return Ga(t, (function(e) {
                        if (e.empty()) {
                            var n = $t(t.doc, e.head.line).text.length;
                            return e.head.ch == n && e.head.line < t.lastLine() ? {
                                from: e.head,
                                to: se(e.head.line + 1, 0)
                            } : {
                                from: e.head,
                                to: se(e.head.line, n)
                            }
                        }
                        return {
                            from: e.from(),
                            to: e.to()
                        }
                    }
                    ))
                },
                deleteLine: function(t) {
                    return Ga(t, (function(e) {
                        return {
                            from: se(e.from().line, 0),
                            to: pe(t.doc, se(e.to().line + 1, 0))
                        }
                    }
                    ))
                },
                delLineLeft: function(t) {
                    return Ga(t, (function(t) {
                        return {
                            from: se(t.from().line, 0),
                            to: t.from()
                        }
                    }
                    ))
                },
                delWrappedLineLeft: function(t) {
                    return Ga(t, (function(e) {
                        var n = t.charCoords(e.head, "div").top + 5
                          , r = t.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                        return {
                            from: r,
                            to: e.from()
                        }
                    }
                    ))
                },
                delWrappedLineRight: function(t) {
                    return Ga(t, (function(e) {
                        var n = t.charCoords(e.head, "div").top + 5
                          , r = t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div");
                        return {
                            from: e.from(),
                            to: r
                        }
                    }
                    ))
                },
                undo: function(t) {
                    return t.undo()
                },
                redo: function(t) {
                    return t.redo()
                },
                undoSelection: function(t) {
                    return t.undoSelection()
                },
                redoSelection: function(t) {
                    return t.redoSelection()
                },
                goDocStart: function(t) {
                    return t.extendSelection(se(t.firstLine(), 0))
                },
                goDocEnd: function(t) {
                    return t.extendSelection(se(t.lastLine()))
                },
                goLineStart: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        return ts(t, e.head.line)
                    }
                    ), {
                        origin: "+move",
                        bias: 1
                    })
                },
                goLineStartSmart: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        return ns(t, e.head)
                    }
                    ), {
                        origin: "+move",
                        bias: 1
                    })
                },
                goLineEnd: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        return es(t, e.head.line)
                    }
                    ), {
                        origin: "+move",
                        bias: -1
                    })
                },
                goLineRight: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        var n = t.cursorCoords(e.head, "div").top + 5;
                        return t.coordsChar({
                            left: t.display.lineDiv.offsetWidth + 100,
                            top: n
                        }, "div")
                    }
                    ), G)
                },
                goLineLeft: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        var n = t.cursorCoords(e.head, "div").top + 5;
                        return t.coordsChar({
                            left: 0,
                            top: n
                        }, "div")
                    }
                    ), G)
                },
                goLineLeftSmart: function(t) {
                    return t.extendSelectionsBy((function(e) {
                        var n = t.cursorCoords(e.head, "div").top + 5
                          , r = t.coordsChar({
                            left: 0,
                            top: n
                        }, "div");
                        return r.ch < t.getLine(r.line).search(/\S/) ? ns(t, e.head) : r
                    }
                    ), G)
                },
                goLineUp: function(t) {
                    return t.moveV(-1, "line")
                },
                goLineDown: function(t) {
                    return t.moveV(1, "line")
                },
                goPageUp: function(t) {
                    return t.moveV(-1, "page")
                },
                goPageDown: function(t) {
                    return t.moveV(1, "page")
                },
                goCharLeft: function(t) {
                    return t.moveH(-1, "char")
                },
                goCharRight: function(t) {
                    return t.moveH(1, "char")
                },
                goColumnLeft: function(t) {
                    return t.moveH(-1, "column")
                },
                goColumnRight: function(t) {
                    return t.moveH(1, "column")
                },
                goWordLeft: function(t) {
                    return t.moveH(-1, "word")
                },
                goGroupRight: function(t) {
                    return t.moveH(1, "group")
                },
                goGroupLeft: function(t) {
                    return t.moveH(-1, "group")
                },
                goWordRight: function(t) {
                    return t.moveH(1, "word")
                },
                delCharBefore: function(t) {
                    return t.deleteH(-1, "codepoint")
                },
                delCharAfter: function(t) {
                    return t.deleteH(1, "char")
                },
                delWordBefore: function(t) {
                    return t.deleteH(-1, "word")
                },
                delWordAfter: function(t) {
                    return t.deleteH(1, "word")
                },
                delGroupBefore: function(t) {
                    return t.deleteH(-1, "group")
                },
                delGroupAfter: function(t) {
                    return t.deleteH(1, "group")
                },
                indentAuto: function(t) {
                    return t.indentSelection("smart")
                },
                indentMore: function(t) {
                    return t.indentSelection("add")
                },
                indentLess: function(t) {
                    return t.indentSelection("subtract")
                },
                insertTab: function(t) {
                    return t.replaceSelection("\t")
                },
                insertSoftTab: function(t) {
                    for (var e = [], n = t.listSelections(), r = t.options.tabSize, i = 0; i < n.length; i++) {
                        var o = n[i].from()
                          , a = Q(t.getLine(o.line), o.ch, r);
                        e.push(Y(r - a % r))
                    }
                    t.replaceSelections(e)
                },
                defaultTab: function(t) {
                    t.somethingSelected() ? t.indentSelection("add") : t.execCommand("insertTab")
                },
                transposeChars: function(t) {
                    return Bi(t, (function() {
                        for (var e = t.listSelections(), n = [], r = 0; r < e.length; r++)
                            if (e[r].empty()) {
                                var i = e[r].head
                                  , o = $t(t.doc, i.line).text;
                                if (o)
                                    if (i.ch == o.length && (i = new se(i.line,i.ch - 1)),
                                    i.ch > 0)
                                        i = new se(i.line,i.ch + 1),
                                        t.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), se(i.line, i.ch - 2), i, "+transpose");
                                    else if (i.line > t.doc.first) {
                                        var a = $t(t.doc, i.line - 1).text;
                                        a && (i = new se(i.line,1),
                                        t.replaceRange(o.charAt(0) + t.doc.lineSeparator() + a.charAt(a.length - 1), se(i.line - 1, a.length - 1), i, "+transpose"))
                                    }
                                n.push(new so(i,i))
                            }
                        t.setSelections(n)
                    }
                    ))
                },
                newlineAndIndent: function(t) {
                    return Bi(t, (function() {
                        for (var e = t.listSelections(), n = e.length - 1; n >= 0; n--)
                            t.replaceRange(t.doc.lineSeparator(), e[n].anchor, e[n].head, "+input");
                        e = t.listSelections();
                        for (var r = 0; r < e.length; r++)
                            t.indentLine(e[r].from().line, null, !0);
                        ci(t)
                    }
                    ))
                },
                openLine: function(t) {
                    return t.replaceSelection("\n", "start")
                },
                toggleOverwrite: function(t) {
                    return t.toggleOverwrite()
                }
            };
            function ts(t, e) {
                var n = $t(t.doc, e)
                  , r = tn(n);
                return r != n && (e = re(r)),
                Ya(!0, t, r, e, 1)
            }
            function es(t, e) {
                var n = $t(t.doc, e)
                  , r = en(n);
                return r != n && (e = re(r)),
                Ya(!0, t, n, e, -1)
            }
            function ns(t, e) {
                var n = ts(t, e.line)
                  , r = $t(t.doc, n.line)
                  , i = gt(r, t.doc.direction);
                if (!i || 0 == i[0].level) {
                    var o = Math.max(n.ch, r.text.search(/\S/))
                      , a = e.line == n.line && e.ch <= o && e.ch;
                    return se(n.line, a ? 0 : o, n.sticky)
                }
                return n
            }
            function rs(t, e, n) {
                if ("string" == typeof e && (e = $a[e],
                !e))
                    return !1;
                t.display.input.ensurePolled();
                var r = t.display.shift
                  , i = !1;
                try {
                    t.isReadOnly() && (t.state.suppressEdits = !0),
                    n && (t.display.shift = !1),
                    i = e(t) != z
                } finally {
                    t.display.shift = r,
                    t.state.suppressEdits = !1
                }
                return i
            }
            function is(t, e, n) {
                for (var r = 0; r < t.state.keyMaps.length; r++) {
                    var i = Ja(e, t.state.keyMaps[r], n, t);
                    if (i)
                        return i
                }
                return t.options.extraKeys && Ja(e, t.options.extraKeys, n, t) || Ja(e, t.options.keyMap, n, t)
            }
            var os = new H;
            function as(t, e, n, r) {
                var i = t.state.keySeq;
                if (i) {
                    if (Va(e))
                        return "handled";
                    if (/\'$/.test(e) ? t.state.keySeq = null : os.set(50, (function() {
                        t.state.keySeq == i && (t.state.keySeq = null,
                        t.display.input.reset())
                    }
                    )),
                    ss(t, i + " " + e, n, r))
                        return !0
                }
                return ss(t, e, n, r)
            }
            function ss(t, e, n, r) {
                var i = is(t, e, r);
                return "multi" == i && (t.state.keySeq = e),
                "handled" == i && Mn(t, "keyHandled", t, e, n),
                "handled" != i && "multi" != i || (xt(n),
                Zr(t)),
                !!i
            }
            function ls(t, e) {
                var n = Ka(e, !0);
                return !!n && (e.shiftKey && !t.state.keySeq ? as(t, "Shift-" + n, e, (function(e) {
                    return rs(t, e, !0)
                }
                )) || as(t, n, e, (function(e) {
                    if ("string" == typeof e ? /^go[A-Z]/.test(e) : e.motion)
                        return rs(t, e)
                }
                )) : as(t, n, e, (function(e) {
                    return rs(t, e)
                }
                )))
            }
            function cs(t, e, n) {
                return as(t, "'" + n + "'", e, (function(e) {
                    return rs(t, e, !0)
                }
                ))
            }
            var us = null;
            function hs(t) {
                var e = this;
                if ((!t.target || t.target == e.display.input.getField()) && (e.curOp.focus = B(F(e)),
                !bt(e, t))) {
                    a && s < 11 && 27 == t.keyCode && (t.returnValue = !1);
                    var r = t.keyCode;
                    e.display.shift = 16 == r || t.shiftKey;
                    var i = ls(e, t);
                    f && (us = i ? r : null,
                    i || 88 != r || _t || !(A ? t.metaKey : t.ctrlKey) || e.replaceSelection("", null, "cut")),
                    n && !A && !i && 46 == r && t.shiftKey && !t.ctrlKey && document.execCommand && document.execCommand("cut"),
                    18 != r || /\bCodeMirror-crosshair\b/.test(e.display.lineDiv.className) || fs(e)
                }
            }
            function fs(t) {
                var e = t.display.lineDiv;
                function n(t) {
                    18 != t.keyCode && t.altKey || (L(e, "CodeMirror-crosshair"),
                    At(document, "keyup", n),
                    At(document, "mouseover", n))
                }
                R(e, "CodeMirror-crosshair"),
                mt(document, "keyup", n),
                mt(document, "mouseover", n)
            }
            function ds(t) {
                16 == t.keyCode && (this.doc.sel.shift = !1),
                bt(this, t)
            }
            function ps(t) {
                var e = this;
                if ((!t.target || t.target == e.display.input.getField()) && !(Kn(e.display, t) || bt(e, t) || t.ctrlKey && !t.altKey || A && t.metaKey)) {
                    var n = t.keyCode
                      , r = t.charCode;
                    if (f && n == us)
                        return us = null,
                        void xt(t);
                    if (!f || t.which && !(t.which < 10) || !ls(e, t)) {
                        var i = String.fromCharCode(null == r ? n : r);
                        "\b" != i && (cs(e, t, i) || e.display.input.onKeyPress(t))
                    }
                }
            }
            var gs, vs, ms = 400, ys = function(t, e, n) {
                this.time = t,
                this.pos = e,
                this.button = n
            };
            function As(t, e) {
                var n = +new Date;
                return vs && vs.compare(n, t, e) ? (gs = vs = null,
                "triple") : gs && gs.compare(n, t, e) ? (vs = new ys(n,t,e),
                gs = null,
                "double") : (gs = new ys(n,t,e),
                vs = null,
                "single")
            }
            function ws(t) {
                var e = this
                  , n = e.display;
                if (!(bt(e, t) || n.activeTouch && n.input.supportsTouch()))
                    if (n.input.ensurePolled(),
                    n.shift = t.shiftKey,
                    Kn(n, t))
                        l || (n.scroller.draggable = !1,
                        setTimeout((function() {
                            return n.scroller.draggable = !0
                        }
                        ), 100));
                    else if (!Is(e, t)) {
                        var r = Fr(e, t)
                          , i = Ot(t)
                          , o = r ? As(r, i) : "single";
                        _(e).focus(),
                        1 == i && e.state.selectingText && e.state.selectingText(t),
                        r && bs(e, i, r, o, t) || (1 == i ? r ? Cs(e, r, o, t) : It(t) == n.scroller && xt(t) : 2 == i ? (r && _o(e.doc, r),
                        setTimeout((function() {
                            return n.input.focus()
                        }
                        ), 20)) : 3 == i && (E ? e.display.input.onContextMenu(t) : qr(e)))
                    }
            }
            function bs(t, e, n, r, i) {
                var o = "Click";
                return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o),
                o = (1 == e ? "Left" : 2 == e ? "Middle" : "Right") + o,
                as(t, za(o, i), i, (function(e) {
                    if ("string" == typeof e && (e = $a[e]),
                    !e)
                        return !1;
                    var r = !1;
                    try {
                        t.isReadOnly() && (t.state.suppressEdits = !0),
                        r = e(t, n) != z
                    } finally {
                        t.state.suppressEdits = !1
                    }
                    return r
                }
                ))
            }
            function Ss(t, e, n) {
                var r = t.getOption("configureMouse")
                  , i = r ? r(t, e, n) : {};
                if (null == i.unit) {
                    var o = w ? n.shiftKey && n.metaKey : n.altKey;
                    i.unit = o ? "rectangle" : "single" == e ? "char" : "double" == e ? "word" : "line"
                }
                return (null == i.extend || t.doc.extend) && (i.extend = t.doc.extend || n.shiftKey),
                null == i.addNew && (i.addNew = A ? n.metaKey : n.ctrlKey),
                null == i.moveOnDrag && (i.moveOnDrag = !(A ? n.altKey : n.ctrlKey)),
                i
            }
            function Cs(t, e, n, r) {
                a ? setTimeout(U(Yr, t), 0) : t.curOp.focus = B(F(t));
                var i, o = Ss(t, n, r), s = t.doc.sel;
                t.options.dragDrop && Bt && !t.isReadOnly() && "single" == n && (i = s.contains(e)) > -1 && (le((i = s.ranges[i]).from(), e) < 0 || e.xRel > 0) && (le(i.to(), e) > 0 || e.xRel < 0) ? Es(t, r, e, o) : ks(t, r, e, o)
            }
            function Es(t, e, n, r) {
                var i = t.display
                  , o = !1
                  , c = Ri(t, (function(e) {
                    l && (i.scroller.draggable = !1),
                    t.state.draggingText = !1,
                    t.state.delayingBlurEvent && (t.hasFocus() ? t.state.delayingBlurEvent = !1 : qr(t)),
                    At(i.wrapper.ownerDocument, "mouseup", c),
                    At(i.wrapper.ownerDocument, "mousemove", u),
                    At(i.scroller, "dragstart", h),
                    At(i.scroller, "drop", c),
                    o || (xt(e),
                    r.addNew || _o(t.doc, n, null, null, r.extend),
                    l && !d || a && 9 == s ? setTimeout((function() {
                        i.wrapper.ownerDocument.body.focus({
                            preventScroll: !0
                        }),
                        i.input.focus()
                    }
                    ), 20) : i.input.focus())
                }
                ))
                  , u = function(t) {
                    o = o || Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) >= 10
                }
                  , h = function() {
                    return o = !0
                };
                l && (i.scroller.draggable = !0),
                t.state.draggingText = c,
                c.copy = !r.moveOnDrag,
                mt(i.wrapper.ownerDocument, "mouseup", c),
                mt(i.wrapper.ownerDocument, "mousemove", u),
                mt(i.scroller, "dragstart", h),
                mt(i.scroller, "drop", c),
                t.state.delayingBlurEvent = !0,
                setTimeout((function() {
                    return i.input.focus()
                }
                ), 20),
                i.scroller.dragDrop && i.scroller.dragDrop()
            }
            function xs(t, e, n) {
                if ("char" == n)
                    return new so(e,e);
                if ("word" == n)
                    return t.findWordAt(e);
                if ("line" == n)
                    return new so(se(e.line, 0),pe(t.doc, se(e.line + 1, 0)));
                var r = n(t, e);
                return new so(r.from,r.to)
            }
            function ks(t, e, n, r) {
                a && qr(t);
                var i = t.display
                  , o = t.doc;
                xt(e);
                var s, l, c = o.sel, u = c.ranges;
                if (r.addNew && !r.extend ? (l = o.sel.contains(n),
                s = l > -1 ? u[l] : new so(n,n)) : (s = o.sel.primary(),
                l = o.sel.primIndex),
                "rectangle" == r.unit)
                    r.addNew || (s = new so(n,n)),
                    n = Fr(t, e, !0, !0),
                    l = -1;
                else {
                    var h = xs(t, n, r.unit);
                    s = r.extend ? Fo(s, h.anchor, h.head, r.extend) : h
                }
                r.addNew ? -1 == l ? (l = u.length,
                Vo(o, lo(t, u.concat([s]), l), {
                    scroll: !1,
                    origin: "*mouse"
                })) : u.length > 1 && u[l].empty() && "char" == r.unit && !r.extend ? (Vo(o, lo(t, u.slice(0, l).concat(u.slice(l + 1)), 0), {
                    scroll: !1,
                    origin: "*mouse"
                }),
                c = o.sel) : Wo(o, l, s, X) : (l = 0,
                Vo(o, new ao([s],0), X),
                c = o.sel);
                var f = n;
                function d(e) {
                    if (0 != le(f, e))
                        if (f = e,
                        "rectangle" == r.unit) {
                            for (var i = [], a = t.options.tabSize, u = Q($t(o, n.line).text, n.ch, a), h = Q($t(o, e.line).text, e.ch, a), d = Math.min(u, h), p = Math.max(u, h), g = Math.min(n.line, e.line), v = Math.min(t.lastLine(), Math.max(n.line, e.line)); g <= v; g++) {
                                var m = $t(o, g).text
                                  , y = j(m, d, a);
                                d == p ? i.push(new so(se(g, y),se(g, y))) : m.length > y && i.push(new so(se(g, y),se(g, j(m, p, a))))
                            }
                            i.length || i.push(new so(n,n)),
                            Vo(o, lo(t, c.ranges.slice(0, l).concat(i), l), {
                                origin: "*mouse",
                                scroll: !1
                            }),
                            t.scrollIntoView(e)
                        } else {
                            var A, w = s, b = xs(t, e, r.unit), S = w.anchor;
                            le(b.anchor, S) > 0 ? (A = b.head,
                            S = fe(w.from(), b.anchor)) : (A = b.anchor,
                            S = he(w.to(), b.head));
                            var C = c.ranges.slice(0);
                            C[l] = Ls(t, new so(pe(o, S),A)),
                            Vo(o, lo(t, C, l), X)
                        }
                }
                var p = i.wrapper.getBoundingClientRect()
                  , g = 0;
                function v(e) {
                    var n = ++g
                      , a = Fr(t, e, !0, "rectangle" == r.unit);
                    if (a)
                        if (0 != le(a, f)) {
                            t.curOp.focus = B(F(t)),
                            d(a);
                            var s = ri(i, o);
                            (a.line >= s.to || a.line < s.from) && setTimeout(Ri(t, (function() {
                                g == n && v(e)
                            }
                            )), 150)
                        } else {
                            var l = e.clientY < p.top ? -20 : e.clientY > p.bottom ? 20 : 0;
                            l && setTimeout(Ri(t, (function() {
                                g == n && (i.scroller.scrollTop += l,
                                v(e))
                            }
                            )), 50)
                        }
                }
                function m(e) {
                    t.state.selectingText = !1,
                    g = 1 / 0,
                    e && (xt(e),
                    i.input.focus()),
                    At(i.wrapper.ownerDocument, "mousemove", y),
                    At(i.wrapper.ownerDocument, "mouseup", A),
                    o.history.lastSelOrigin = null
                }
                var y = Ri(t, (function(t) {
                    0 !== t.buttons && Ot(t) ? v(t) : m(t)
                }
                ))
                  , A = Ri(t, m);
                t.state.selectingText = A,
                mt(i.wrapper.ownerDocument, "mousemove", y),
                mt(i.wrapper.ownerDocument, "mouseup", A)
            }
            function Ls(t, e) {
                var n = e.anchor
                  , r = e.head
                  , i = $t(t.doc, n.line);
                if (0 == le(n, r) && n.sticky == r.sticky)
                    return e;
                var o = gt(i);
                if (!o)
                    return e;
                var a = dt(o, n.ch, n.sticky)
                  , s = o[a];
                if (s.from != n.ch && s.to != n.ch)
                    return e;
                var l, c = a + (s.from == n.ch == (1 != s.level) ? 0 : 1);
                if (0 == c || c == o.length)
                    return e;
                if (r.line != n.line)
                    l = (r.line - n.line) * ("ltr" == t.doc.direction ? 1 : -1) > 0;
                else {
                    var u = dt(o, r.ch, r.sticky)
                      , h = u - a || (r.ch - n.ch) * (1 == s.level ? -1 : 1);
                    l = u == c - 1 || u == c ? h < 0 : h > 0
                }
                var f = o[c + (l ? -1 : 0)]
                  , d = l == (1 == f.level)
                  , p = d ? f.from : f.to
                  , g = d ? "after" : "before";
                return n.ch == p && n.sticky == g ? e : new so(new se(n.line,p,g),r)
            }
            function Ts(t, e, n, r) {
                var i, o;
                if (e.touches)
                    i = e.touches[0].clientX,
                    o = e.touches[0].clientY;
                else
                    try {
                        i = e.clientX,
                        o = e.clientY
                    } catch (f) {
                        return !1
                    }
                if (i >= Math.floor(t.display.gutters.getBoundingClientRect().right))
                    return !1;
                r && xt(e);
                var a = t.display
                  , s = a.lineDiv.getBoundingClientRect();
                if (o > s.bottom || !Ct(t, n))
                    return Lt(e);
                o -= s.top - a.viewOffset;
                for (var l = 0; l < t.display.gutterSpecs.length; ++l) {
                    var c = a.gutters.childNodes[l];
                    if (c && c.getBoundingClientRect().right >= i) {
                        var u = ie(t.doc, o)
                          , h = t.display.gutterSpecs[l];
                        return wt(t, n, t, u, h.className, e),
                        Lt(e)
                    }
                }
            }
            function Is(t, e) {
                return Ts(t, e, "gutterClick", !0)
            }
            function Os(t, e) {
                Kn(t.display, e) || Ms(t, e) || bt(t, e, "contextmenu") || E || t.display.input.onContextMenu(e)
            }
            function Ms(t, e) {
                return !!Ct(t, "gutterContextMenu") && Ts(t, e, "gutterContextMenu", !1)
            }
            function Ns(t) {
                t.display.wrapper.className = t.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + t.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
                pr(t)
            }
            ys.prototype.compare = function(t, e, n) {
                return this.time + ms > t && 0 == le(e, this.pos) && n == this.button
            }
            ;
            var Bs = {
                toString: function() {
                    return "CodeMirror.Init"
                }
            }
              , Rs = {}
              , Ps = {};
            function Ds(t) {
                var e = t.optionHandlers;
                function n(n, r, i, o) {
                    t.defaults[n] = r,
                    i && (e[n] = o ? function(t, e, n) {
                        n != Bs && i(t, e, n)
                    }
                    : i)
                }
                t.defineOption = n,
                t.Init = Bs,
                n("value", "", (function(t, e) {
                    return t.setValue(e)
                }
                ), !0),
                n("mode", null, (function(t, e) {
                    t.doc.modeOption = e,
                    vo(t)
                }
                ), !0),
                n("indentUnit", 2, vo, !0),
                n("indentWithTabs", !1),
                n("smartIndent", !0),
                n("tabSize", 4, (function(t) {
                    mo(t),
                    pr(t),
                    Ur(t)
                }
                ), !0),
                n("lineSeparator", null, (function(t, e) {
                    if (t.doc.lineSep = e,
                    e) {
                        var n = []
                          , r = t.doc.first;
                        t.doc.iter((function(t) {
                            for (var i = 0; ; ) {
                                var o = t.text.indexOf(e, i);
                                if (-1 == o)
                                    break;
                                i = o + e.length,
                                n.push(se(r, o))
                            }
                            r++
                        }
                        ));
                        for (var i = n.length - 1; i >= 0; i--)
                            aa(t.doc, e, n[i], se(n[i].line, n[i].ch + e.length))
                    }
                }
                )),
                n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, (function(t, e, n) {
                    t.state.specialChars = new RegExp(e.source + (e.test("\t") ? "" : "|\t"),"g"),
                    n != Bs && t.refresh()
                }
                )),
                n("specialCharPlaceholder", yn, (function(t) {
                    return t.refresh()
                }
                ), !0),
                n("electricChars", !0),
                n("inputStyle", y ? "contenteditable" : "textarea", (function() {
                    throw new Error("inputStyle can not (yet) be changed in a running editor")
                }
                ), !0),
                n("spellcheck", !1, (function(t, e) {
                    return t.getInputField().spellcheck = e
                }
                ), !0),
                n("autocorrect", !1, (function(t, e) {
                    return t.getInputField().autocorrect = e
                }
                ), !0),
                n("autocapitalize", !1, (function(t, e) {
                    return t.getInputField().autocapitalize = e
                }
                ), !0),
                n("rtlMoveVisually", !b),
                n("wholeLineUpdateBefore", !0),
                n("theme", "default", (function(t) {
                    Ns(t),
                    $i(t)
                }
                ), !0),
                n("keyMap", "default", (function(t, e, n) {
                    var r = Xa(e)
                      , i = n != Bs && Xa(n);
                    i && i.detach && i.detach(t, r),
                    r.attach && r.attach(t, i || null)
                }
                )),
                n("extraKeys", null),
                n("configureMouse", null),
                n("lineWrapping", !1, _s, !0),
                n("gutters", [], (function(t, e) {
                    t.display.gutterSpecs = Yi(e, t.options.lineNumbers),
                    $i(t)
                }
                ), !0),
                n("fixedGutter", !0, (function(t, e) {
                    t.display.gutters.style.left = e ? Rr(t.display) + "px" : "0",
                    t.refresh()
                }
                ), !0),
                n("coverGutterNextToScrollbar", !1, (function(t) {
                    return wi(t)
                }
                ), !0),
                n("scrollbarStyle", "native", (function(t) {
                    Ci(t),
                    wi(t),
                    t.display.scrollbars.setScrollTop(t.doc.scrollTop),
                    t.display.scrollbars.setScrollLeft(t.doc.scrollLeft)
                }
                ), !0),
                n("lineNumbers", !1, (function(t, e) {
                    t.display.gutterSpecs = Yi(t.options.gutters, e),
                    $i(t)
                }
                ), !0),
                n("firstLineNumber", 1, $i, !0),
                n("lineNumberFormatter", (function(t) {
                    return t
                }
                ), $i, !0),
                n("showCursorWhenSelecting", !1, zr, !0),
                n("resetSelectionOnContextMenu", !0),
                n("lineWiseCopyCut", !0),
                n("pasteLinesPerSelection", !0),
                n("selectionsMayTouch", !1),
                n("readOnly", !1, (function(t, e) {
                    "nocursor" == e && (ti(t),
                    t.display.input.blur()),
                    t.display.input.readOnlyChanged(e)
                }
                )),
                n("screenReaderLabel", null, (function(t, e) {
                    e = "" === e ? null : e,
                    t.display.input.screenReaderLabelChanged(e)
                }
                )),
                n("disableInput", !1, (function(t, e) {
                    e || t.display.input.reset()
                }
                ), !0),
                n("dragDrop", !0, Fs),
                n("allowDropFileTypes", null),
                n("cursorBlinkRate", 530),
                n("cursorScrollMargin", 0),
                n("cursorHeight", 1, zr, !0),
                n("singleCursorHeightPerLine", !0, zr, !0),
                n("workTime", 100),
                n("workDelay", 100),
                n("flattenSpans", !0, mo, !0),
                n("addModeClass", !1, mo, !0),
                n("pollInterval", 100),
                n("undoDepth", 200, (function(t, e) {
                    return t.doc.history.undoDepth = e
                }
                )),
                n("historyEventDelay", 1250),
                n("viewportMargin", 10, (function(t) {
                    return t.refresh()
                }
                ), !0),
                n("maxHighlightLength", 1e4, mo, !0),
                n("moveInputWithCursor", !0, (function(t, e) {
                    e || t.display.input.resetPosition()
                }
                )),
                n("tabindex", null, (function(t, e) {
                    return t.display.input.getField().tabIndex = e || ""
                }
                )),
                n("autofocus", null),
                n("direction", "ltr", (function(t, e) {
                    return t.doc.setDirection(e)
                }
                ), !0),
                n("phrases", null)
            }
            function Fs(t, e, n) {
                var r = n && n != Bs;
                if (!e != !r) {
                    var i = t.display.dragFunctions
                      , o = e ? mt : At;
                    o(t.display.scroller, "dragstart", i.start),
                    o(t.display.scroller, "dragenter", i.enter),
                    o(t.display.scroller, "dragover", i.over),
                    o(t.display.scroller, "dragleave", i.leave),
                    o(t.display.scroller, "drop", i.drop)
                }
            }
            function _s(t) {
                t.options.lineWrapping ? (R(t.display.wrapper, "CodeMirror-wrap"),
                t.display.sizer.style.minWidth = "",
                t.display.sizerWidth = null) : (L(t.display.wrapper, "CodeMirror-wrap"),
                un(t)),
                Dr(t),
                Ur(t),
                pr(t),
                setTimeout((function() {
                    return wi(t)
                }
                ), 100)
            }
            function Us(t, e) {
                var n = this;
                if (!(this instanceof Us))
                    return new Us(t,e);
                this.options = e = e ? W(e) : {},
                W(Rs, e, !1);
                var r = e.value;
                "string" == typeof r ? r = new xa(r,e.mode,null,e.lineSeparator,e.direction) : e.mode && (r.modeOption = e.mode),
                this.doc = r;
                var i = new Us.inputStyles[e.inputStyle](this)
                  , o = this.display = new to(t,r,i,e);
                for (var c in o.wrapper.CodeMirror = this,
                Ns(this),
                e.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
                Ci(this),
                this.state = {
                    keyMaps: [],
                    overlays: [],
                    modeGen: 0,
                    overwrite: !1,
                    delayingBlurEvent: !1,
                    focused: !1,
                    suppressEdits: !1,
                    pasteIncoming: -1,
                    cutIncoming: -1,
                    selectingText: !1,
                    draggingText: !1,
                    highlight: new H,
                    keySeq: null,
                    specialChars: null
                },
                e.autofocus && !y && o.input.focus(),
                a && s < 11 && setTimeout((function() {
                    return n.display.input.reset(!0)
                }
                ), 20),
                Ws(this),
                Ba(),
                xi(this),
                this.curOp.forceUpdate = !0,
                bo(this, r),
                e.autofocus && !y || this.hasFocus() ? setTimeout((function() {
                    n.hasFocus() && !n.state.focused && $r(n)
                }
                ), 20) : ti(this),
                Ps)
                    Ps.hasOwnProperty(c) && Ps[c](this, e[c], Bs);
                Zi(this),
                e.finishInit && e.finishInit(this);
                for (var u = 0; u < Qs.length; ++u)
                    Qs[u](this);
                ki(this),
                l && e.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
            }
            function Ws(t) {
                var e = t.display;
                mt(e.scroller, "mousedown", Ri(t, ws)),
                mt(e.scroller, "dblclick", a && s < 11 ? Ri(t, (function(e) {
                    if (!bt(t, e)) {
                        var n = Fr(t, e);
                        if (n && !Is(t, e) && !Kn(t.display, e)) {
                            xt(e);
                            var r = t.findWordAt(n);
                            _o(t.doc, r.anchor, r.head)
                        }
                    }
                }
                )) : function(e) {
                    return bt(t, e) || xt(e)
                }
                ),
                mt(e.scroller, "contextmenu", (function(e) {
                    return Os(t, e)
                }
                )),
                mt(e.input.getField(), "contextmenu", (function(n) {
                    e.scroller.contains(n.target) || Os(t, n)
                }
                ));
                var n, r = {
                    end: 0
                };
                function i() {
                    e.activeTouch && (n = setTimeout((function() {
                        return e.activeTouch = null
                    }
                    ), 1e3),
                    r = e.activeTouch,
                    r.end = +new Date)
                }
                function o(t) {
                    if (1 != t.touches.length)
                        return !1;
                    var e = t.touches[0];
                    return e.radiusX <= 1 && e.radiusY <= 1
                }
                function l(t, e) {
                    if (null == e.left)
                        return !0;
                    var n = e.left - t.left
                      , r = e.top - t.top;
                    return n * n + r * r > 400
                }
                mt(e.scroller, "touchstart", (function(i) {
                    if (!bt(t, i) && !o(i) && !Is(t, i)) {
                        e.input.ensurePolled(),
                        clearTimeout(n);
                        var a = +new Date;
                        e.activeTouch = {
                            start: a,
                            moved: !1,
                            prev: a - r.end <= 300 ? r : null
                        },
                        1 == i.touches.length && (e.activeTouch.left = i.touches[0].pageX,
                        e.activeTouch.top = i.touches[0].pageY)
                    }
                }
                )),
                mt(e.scroller, "touchmove", (function() {
                    e.activeTouch && (e.activeTouch.moved = !0)
                }
                )),
                mt(e.scroller, "touchend", (function(n) {
                    var r = e.activeTouch;
                    if (r && !Kn(e, n) && null != r.left && !r.moved && new Date - r.start < 300) {
                        var o, a = t.coordsChar(e.activeTouch, "page");
                        o = !r.prev || l(r, r.prev) ? new so(a,a) : !r.prev.prev || l(r, r.prev.prev) ? t.findWordAt(a) : new so(se(a.line, 0),pe(t.doc, se(a.line + 1, 0))),
                        t.setSelection(o.anchor, o.head),
                        t.focus(),
                        xt(n)
                    }
                    i()
                }
                )),
                mt(e.scroller, "touchcancel", i),
                mt(e.scroller, "scroll", (function() {
                    e.scroller.clientHeight && (pi(t, e.scroller.scrollTop),
                    vi(t, e.scroller.scrollLeft, !0),
                    wt(t, "scroll", t))
                }
                )),
                mt(e.scroller, "mousewheel", (function(e) {
                    return oo(t, e)
                }
                )),
                mt(e.scroller, "DOMMouseScroll", (function(e) {
                    return oo(t, e)
                }
                )),
                mt(e.wrapper, "scroll", (function() {
                    return e.wrapper.scrollTop = e.wrapper.scrollLeft = 0
                }
                )),
                e.dragFunctions = {
                    enter: function(e) {
                        bt(t, e) || Tt(e)
                    },
                    over: function(e) {
                        bt(t, e) || (Ia(t, e),
                        Tt(e))
                    },
                    start: function(e) {
                        return Ta(t, e)
                    },
                    drop: Ri(t, La),
                    leave: function(e) {
                        bt(t, e) || Oa(t)
                    }
                };
                var c = e.input.getField();
                mt(c, "keyup", (function(e) {
                    return ds.call(t, e)
                }
                )),
                mt(c, "keydown", Ri(t, hs)),
                mt(c, "keypress", Ri(t, ps)),
                mt(c, "focus", (function(e) {
                    return $r(t, e)
                }
                )),
                mt(c, "blur", (function(e) {
                    return ti(t, e)
                }
                ))
            }
            Us.defaults = Rs,
            Us.optionHandlers = Ps;
            var Qs = [];
            function Hs(t, e, n, r) {
                var i, o = t.doc;
                null == n && (n = "add"),
                "smart" == n && (o.mode.indent ? i = be(t, e).state : n = "prev");
                var a = t.options.tabSize
                  , s = $t(o, e)
                  , l = Q(s.text, null, a);
                s.stateAfter && (s.stateAfter = null);
                var c, u = s.text.match(/^\s*/)[0];
                if (r || /\S/.test(s.text)) {
                    if ("smart" == n && (c = o.mode.indent(i, s.text.slice(u.length), s.text),
                    c == z || c > 150)) {
                        if (!r)
                            return;
                        n = "prev"
                    }
                } else
                    c = 0,
                    n = "not";
                "prev" == n ? c = e > o.first ? Q($t(o, e - 1).text, null, a) : 0 : "add" == n ? c = l + t.options.indentUnit : "subtract" == n ? c = l - t.options.indentUnit : "number" == typeof n && (c = l + n),
                c = Math.max(0, c);
                var h = ""
                  , f = 0;
                if (t.options.indentWithTabs)
                    for (var d = Math.floor(c / a); d; --d)
                        f += a,
                        h += "\t";
                if (f < c && (h += Y(c - f)),
                h != u)
                    return aa(o, h, se(e, 0), se(e, u.length), "+input"),
                    s.stateAfter = null,
                    !0;
                for (var p = 0; p < o.sel.ranges.length; p++) {
                    var g = o.sel.ranges[p];
                    if (g.head.line == e && g.head.ch < u.length) {
                        var v = se(e, u.length);
                        Wo(o, p, new so(v,v));
                        break
                    }
                }
            }
            Us.defineInitHook = function(t) {
                return Qs.push(t)
            }
            ;
            var Js = null;
            function Vs(t) {
                Js = t
            }
            function zs(t, e, n, r, i) {
                var o = t.doc;
                t.display.shift = !1,
                r || (r = o.sel);
                var a = +new Date - 200
                  , s = "paste" == i || t.state.pasteIncoming > a
                  , l = Dt(e)
                  , c = null;
                if (s && r.ranges.length > 1)
                    if (Js && Js.text.join("\n") == e) {
                        if (r.ranges.length % Js.text.length == 0) {
                            c = [];
                            for (var u = 0; u < Js.text.length; u++)
                                c.push(o.splitLines(Js.text[u]))
                        }
                    } else
                        l.length == r.ranges.length && t.options.pasteLinesPerSelection && (c = $(l, (function(t) {
                            return [t]
                        }
                        )));
                for (var h = t.curOp.updateInput, f = r.ranges.length - 1; f >= 0; f--) {
                    var d = r.ranges[f]
                      , p = d.from()
                      , g = d.to();
                    d.empty() && (n && n > 0 ? p = se(p.line, p.ch - n) : t.state.overwrite && !s ? g = se(g.line, Math.min($t(o, g.line).text.length, g.ch + q(l).length)) : s && Js && Js.lineWise && Js.text.join("\n") == l.join("\n") && (p = g = se(p.line, 0)));
                    var v = {
                        from: p,
                        to: g,
                        text: c ? c[f % c.length] : l,
                        origin: i || (s ? "paste" : t.state.cutIncoming > a ? "cut" : "+input")
                    };
                    ta(t.doc, v),
                    Mn(t, "inputRead", t, v)
                }
                e && !s && Xs(t, e),
                ci(t),
                t.curOp.updateInput < 2 && (t.curOp.updateInput = h),
                t.curOp.typing = !0,
                t.state.pasteIncoming = t.state.cutIncoming = -1
            }
            function Ks(t, e) {
                var n = t.clipboardData && t.clipboardData.getData("Text");
                if (n)
                    return t.preventDefault(),
                    e.isReadOnly() || e.options.disableInput || !e.hasFocus() || Bi(e, (function() {
                        return zs(e, n, 0, null, "paste")
                    }
                    )),
                    !0
            }
            function Xs(t, e) {
                if (t.options.electricChars && t.options.smartIndent)
                    for (var n = t.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                        var i = n.ranges[r];
                        if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                            var o = t.getModeAt(i.head)
                              , a = !1;
                            if (o.electricChars) {
                                for (var s = 0; s < o.electricChars.length; s++)
                                    if (e.indexOf(o.electricChars.charAt(s)) > -1) {
                                        a = Hs(t, i.head.line, "smart");
                                        break
                                    }
                            } else
                                o.electricInput && o.electricInput.test($t(t.doc, i.head.line).text.slice(0, i.head.ch)) && (a = Hs(t, i.head.line, "smart"));
                            a && Mn(t, "electricInput", t, i.head.line)
                        }
                    }
            }
            function Gs(t) {
                for (var e = [], n = [], r = 0; r < t.doc.sel.ranges.length; r++) {
                    var i = t.doc.sel.ranges[r].head.line
                      , o = {
                        anchor: se(i, 0),
                        head: se(i + 1, 0)
                    };
                    n.push(o),
                    e.push(t.getRange(o.anchor, o.head))
                }
                return {
                    text: e,
                    ranges: n
                }
            }
            function js(t, e, n, r) {
                t.setAttribute("autocorrect", n ? "" : "off"),
                t.setAttribute("autocapitalize", r ? "" : "off"),
                t.setAttribute("spellcheck", !!e)
            }
            function Zs() {
                var t = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none")
                  , e = O("div", [t], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
                return l ? t.style.width = "1000px" : t.setAttribute("wrap", "off"),
                v && (t.style.border = "1px solid black"),
                js(t),
                e
            }
            function Ys(t) {
                var e = t.optionHandlers
                  , n = t.helpers = {};
                t.prototype = {
                    constructor: t,
                    focus: function() {
                        _(this).focus(),
                        this.display.input.focus()
                    },
                    setOption: function(t, n) {
                        var r = this.options
                          , i = r[t];
                        r[t] == n && "mode" != t || (r[t] = n,
                        e.hasOwnProperty(t) && Ri(this, e[t])(this, n, i),
                        wt(this, "optionChange", this, t))
                    },
                    getOption: function(t) {
                        return this.options[t]
                    },
                    getDoc: function() {
                        return this.doc
                    },
                    addKeyMap: function(t, e) {
                        this.state.keyMaps[e ? "push" : "unshift"](Xa(t))
                    },
                    removeKeyMap: function(t) {
                        for (var e = this.state.keyMaps, n = 0; n < e.length; ++n)
                            if (e[n] == t || e[n].name == t)
                                return e.splice(n, 1),
                                !0
                    },
                    addOverlay: Pi((function(e, n) {
                        var r = e.token ? e : t.getMode(this.options, e);
                        if (r.startState)
                            throw new Error("Overlays may not be stateful.");
                        tt(this.state.overlays, {
                            mode: r,
                            modeSpec: e,
                            opaque: n && n.opaque,
                            priority: n && n.priority || 0
                        }, (function(t) {
                            return t.priority
                        }
                        )),
                        this.state.modeGen++,
                        Ur(this)
                    }
                    )),
                    removeOverlay: Pi((function(t) {
                        for (var e = this.state.overlays, n = 0; n < e.length; ++n) {
                            var r = e[n].modeSpec;
                            if (r == t || "string" == typeof t && r.name == t)
                                return e.splice(n, 1),
                                this.state.modeGen++,
                                void Ur(this)
                        }
                    }
                    )),
                    indentLine: Pi((function(t, e, n) {
                        "string" != typeof e && "number" != typeof e && (e = null == e ? this.options.smartIndent ? "smart" : "prev" : e ? "add" : "subtract"),
                        oe(this.doc, t) && Hs(this, t, e, n)
                    }
                    )),
                    indentSelection: Pi((function(t) {
                        for (var e = this.doc.sel.ranges, n = -1, r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (i.empty())
                                i.head.line > n && (Hs(this, i.head.line, t, !0),
                                n = i.head.line,
                                r == this.doc.sel.primIndex && ci(this));
                            else {
                                var o = i.from()
                                  , a = i.to()
                                  , s = Math.max(n, o.line);
                                n = Math.min(this.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                                for (var l = s; l < n; ++l)
                                    Hs(this, l, t);
                                var c = this.doc.sel.ranges;
                                0 == o.ch && e.length == c.length && c[r].from().ch > 0 && Wo(this.doc, r, new so(o,c[r].to()), K)
                            }
                        }
                    }
                    )),
                    getTokenAt: function(t, e) {
                        return ke(this, t, e)
                    },
                    getLineTokens: function(t, e) {
                        return ke(this, se(t), e, !0)
                    },
                    getTokenTypeAt: function(t) {
                        t = pe(this.doc, t);
                        var e, n = we(this, $t(this.doc, t.line)), r = 0, i = (n.length - 1) / 2, o = t.ch;
                        if (0 == o)
                            e = n[2];
                        else
                            for (; ; ) {
                                var a = r + i >> 1;
                                if ((a ? n[2 * a - 1] : 0) >= o)
                                    i = a;
                                else {
                                    if (!(n[2 * a + 1] < o)) {
                                        e = n[2 * a + 2];
                                        break
                                    }
                                    r = a + 1
                                }
                            }
                        var s = e ? e.indexOf("overlay ") : -1;
                        return s < 0 ? e : 0 == s ? null : e.slice(0, s - 1)
                    },
                    getModeAt: function(e) {
                        var n = this.doc.mode;
                        return n.innerMode ? t.innerMode(n, this.getTokenAt(e).state).mode : n
                    },
                    getHelper: function(t, e) {
                        return this.getHelpers(t, e)[0]
                    },
                    getHelpers: function(t, e) {
                        var r = [];
                        if (!n.hasOwnProperty(e))
                            return r;
                        var i = n[e]
                          , o = this.getModeAt(t);
                        if ("string" == typeof o[e])
                            i[o[e]] && r.push(i[o[e]]);
                        else if (o[e])
                            for (var a = 0; a < o[e].length; a++) {
                                var s = i[o[e][a]];
                                s && r.push(s)
                            }
                        else
                            o.helperType && i[o.helperType] ? r.push(i[o.helperType]) : i[o.name] && r.push(i[o.name]);
                        for (var l = 0; l < i._global.length; l++) {
                            var c = i._global[l];
                            c.pred(o, this) && -1 == J(r, c.val) && r.push(c.val)
                        }
                        return r
                    },
                    getStateAfter: function(t, e) {
                        var n = this.doc;
                        return t = de(n, null == t ? n.first + n.size - 1 : t),
                        be(this, t + 1, e).state
                    },
                    cursorCoords: function(t, e) {
                        var n, r = this.doc.sel.primary();
                        return n = null == t ? r.head : "object" == typeof t ? pe(this.doc, t) : t ? r.from() : r.to(),
                        br(this, n, e || "page")
                    },
                    charCoords: function(t, e) {
                        return wr(this, pe(this.doc, t), e || "page")
                    },
                    coordsChar: function(t, e) {
                        return t = Ar(this, t, e || "page"),
                        Er(this, t.left, t.top)
                    },
                    lineAtHeight: function(t, e) {
                        return t = Ar(this, {
                            top: t,
                            left: 0
                        }, e || "page").top,
                        ie(this.doc, t + this.display.viewOffset)
                    },
                    heightAtLine: function(t, e, n) {
                        var r, i = !1;
                        if ("number" == typeof t) {
                            var o = this.doc.first + this.doc.size - 1;
                            t < this.doc.first ? t = this.doc.first : t > o && (t = o,
                            i = !0),
                            r = $t(this.doc, t)
                        } else
                            r = t;
                        return yr(this, r, {
                            top: 0,
                            left: 0
                        }, e || "page", n || i).top + (i ? this.doc.height - ln(r) : 0)
                    },
                    defaultTextHeight: function() {
                        return Mr(this.display)
                    },
                    defaultCharWidth: function() {
                        return Nr(this.display)
                    },
                    getViewport: function() {
                        return {
                            from: this.display.viewFrom,
                            to: this.display.viewTo
                        }
                    },
                    addWidget: function(t, e, n, r, i) {
                        var o = this.display;
                        t = br(this, pe(this.doc, t));
                        var a = t.bottom
                          , s = t.left;
                        if (e.style.position = "absolute",
                        e.setAttribute("cm-ignore-events", "true"),
                        this.display.input.setUneditable(e),
                        o.sizer.appendChild(e),
                        "over" == r)
                            a = t.top;
                        else if ("above" == r || "near" == r) {
                            var l = Math.max(o.wrapper.clientHeight, this.doc.height)
                              , c = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                            ("above" == r || t.bottom + e.offsetHeight > l) && t.top > e.offsetHeight ? a = t.top - e.offsetHeight : t.bottom + e.offsetHeight <= l && (a = t.bottom),
                            s + e.offsetWidth > c && (s = c - e.offsetWidth)
                        }
                        e.style.top = a + "px",
                        e.style.left = e.style.right = "",
                        "right" == i ? (s = o.sizer.clientWidth - e.offsetWidth,
                        e.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - e.offsetWidth) / 2),
                        e.style.left = s + "px"),
                        n && ai(this, {
                            left: s,
                            top: a,
                            right: s + e.offsetWidth,
                            bottom: a + e.offsetHeight
                        })
                    },
                    triggerOnKeyDown: Pi(hs),
                    triggerOnKeyPress: Pi(ps),
                    triggerOnKeyUp: ds,
                    triggerOnMouseDown: Pi(ws),
                    execCommand: function(t) {
                        if ($a.hasOwnProperty(t))
                            return $a[t].call(null, this)
                    },
                    triggerElectric: Pi((function(t) {
                        Xs(this, t)
                    }
                    )),
                    findPosH: function(t, e, n, r) {
                        var i = 1;
                        e < 0 && (i = -1,
                        e = -e);
                        for (var o = pe(this.doc, t), a = 0; a < e; ++a)
                            if (o = qs(this.doc, o, i, n, r),
                            o.hitSide)
                                break;
                        return o
                    },
                    moveH: Pi((function(t, e) {
                        var n = this;
                        this.extendSelectionsBy((function(r) {
                            return n.display.shift || n.doc.extend || r.empty() ? qs(n.doc, r.head, t, e, n.options.rtlMoveVisually) : t < 0 ? r.from() : r.to()
                        }
                        ), G)
                    }
                    )),
                    deleteH: Pi((function(t, e) {
                        var n = this.doc.sel
                          , r = this.doc;
                        n.somethingSelected() ? r.replaceSelection("", null, "+delete") : Ga(this, (function(n) {
                            var i = qs(r, n.head, t, e, !1);
                            return t < 0 ? {
                                from: i,
                                to: n.head
                            } : {
                                from: n.head,
                                to: i
                            }
                        }
                        ))
                    }
                    )),
                    findPosV: function(t, e, n, r) {
                        var i = 1
                          , o = r;
                        e < 0 && (i = -1,
                        e = -e);
                        for (var a = pe(this.doc, t), s = 0; s < e; ++s) {
                            var l = br(this, a, "div");
                            if (null == o ? o = l.left : l.left = o,
                            a = $s(this, l, i, n),
                            a.hitSide)
                                break
                        }
                        return a
                    },
                    moveV: Pi((function(t, e) {
                        var n = this
                          , r = this.doc
                          , i = []
                          , o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                        if (r.extendSelectionsBy((function(a) {
                            if (o)
                                return t < 0 ? a.from() : a.to();
                            var s = br(n, a.head, "div");
                            null != a.goalColumn && (s.left = a.goalColumn),
                            i.push(s.left);
                            var l = $s(n, s, t, e);
                            return "page" == e && a == r.sel.primary() && li(n, wr(n, l, "div").top - s.top),
                            l
                        }
                        ), G),
                        i.length)
                            for (var a = 0; a < r.sel.ranges.length; a++)
                                r.sel.ranges[a].goalColumn = i[a]
                    }
                    )),
                    findWordAt: function(t) {
                        var e = this.doc
                          , n = $t(e, t.line).text
                          , r = t.ch
                          , i = t.ch;
                        if (n) {
                            var o = this.getHelper(t, "wordChars");
                            "before" != t.sticky && i != n.length || !r ? ++i : --r;
                            var a = n.charAt(r)
                              , s = ot(a, o) ? function(t) {
                                return ot(t, o)
                            }
                            : /\s/.test(a) ? function(t) {
                                return /\s/.test(t)
                            }
                            : function(t) {
                                return !/\s/.test(t) && !ot(t)
                            }
                            ;
                            while (r > 0 && s(n.charAt(r - 1)))
                                --r;
                            while (i < n.length && s(n.charAt(i)))
                                ++i
                        }
                        return new so(se(t.line, r),se(t.line, i))
                    },
                    toggleOverwrite: function(t) {
                        null != t && t == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? R(this.display.cursorDiv, "CodeMirror-overwrite") : L(this.display.cursorDiv, "CodeMirror-overwrite"),
                        wt(this, "overwriteToggle", this, this.state.overwrite))
                    },
                    hasFocus: function() {
                        return this.display.input.getField() == B(F(this))
                    },
                    isReadOnly: function() {
                        return !(!this.options.readOnly && !this.doc.cantEdit)
                    },
                    scrollTo: Pi((function(t, e) {
                        ui(this, t, e)
                    }
                    )),
                    getScrollInfo: function() {
                        var t = this.display.scroller;
                        return {
                            left: t.scrollLeft,
                            top: t.scrollTop,
                            height: t.scrollHeight - Zn(this) - this.display.barHeight,
                            width: t.scrollWidth - Zn(this) - this.display.barWidth,
                            clientHeight: qn(this),
                            clientWidth: Yn(this)
                        }
                    },
                    scrollIntoView: Pi((function(t, e) {
                        null == t ? (t = {
                            from: this.doc.sel.primary().head,
                            to: null
                        },
                        null == e && (e = this.options.cursorScrollMargin)) : "number" == typeof t ? t = {
                            from: se(t, 0),
                            to: null
                        } : null == t.from && (t = {
                            from: t,
                            to: null
                        }),
                        t.to || (t.to = t.from),
                        t.margin = e || 0,
                        null != t.from.line ? hi(this, t) : di(this, t.from, t.to, t.margin)
                    }
                    )),
                    setSize: Pi((function(t, e) {
                        var n = this
                          , r = function(t) {
                            return "number" == typeof t || /^\d+$/.test(String(t)) ? t + "px" : t
                        };
                        null != t && (this.display.wrapper.style.width = r(t)),
                        null != e && (this.display.wrapper.style.height = r(e)),
                        this.options.lineWrapping && dr(this);
                        var i = this.display.viewFrom;
                        this.doc.iter(i, this.display.viewTo, (function(t) {
                            if (t.widgets)
                                for (var e = 0; e < t.widgets.length; e++)
                                    if (t.widgets[e].noHScroll) {
                                        Wr(n, i, "widget");
                                        break
                                    }
                            ++i
                        }
                        )),
                        this.curOp.forceUpdate = !0,
                        wt(this, "refresh", this)
                    }
                    )),
                    operation: function(t) {
                        return Bi(this, t)
                    },
                    startOperation: function() {
                        return xi(this)
                    },
                    endOperation: function() {
                        return ki(this)
                    },
                    refresh: Pi((function() {
                        var t = this.display.cachedTextHeight;
                        Ur(this),
                        this.curOp.forceUpdate = !0,
                        pr(this),
                        ui(this, this.doc.scrollLeft, this.doc.scrollTop),
                        Xi(this.display),
                        (null == t || Math.abs(t - Mr(this.display)) > .5 || this.options.lineWrapping) && Dr(this),
                        wt(this, "refresh", this)
                    }
                    )),
                    swapDoc: Pi((function(t) {
                        var e = this.doc;
                        return e.cm = null,
                        this.state.selectingText && this.state.selectingText(),
                        bo(this, t),
                        pr(this),
                        this.display.input.reset(),
                        ui(this, t.scrollLeft, t.scrollTop),
                        this.curOp.forceScroll = !0,
                        Mn(this, "swapDoc", this, e),
                        e
                    }
                    )),
                    phrase: function(t) {
                        var e = this.options.phrases;
                        return e && Object.prototype.hasOwnProperty.call(e, t) ? e[t] : t
                    },
                    getInputField: function() {
                        return this.display.input.getField()
                    },
                    getWrapperElement: function() {
                        return this.display.wrapper
                    },
                    getScrollerElement: function() {
                        return this.display.scroller
                    },
                    getGutterElement: function() {
                        return this.display.gutters
                    }
                },
                Et(t),
                t.registerHelper = function(e, r, i) {
                    n.hasOwnProperty(e) || (n[e] = t[e] = {
                        _global: []
                    }),
                    n[e][r] = i
                }
                ,
                t.registerGlobalHelper = function(e, r, i, o) {
                    t.registerHelper(e, r, o),
                    n[e]._global.push({
                        pred: i,
                        val: o
                    })
                }
            }
            function qs(t, e, n, r, i) {
                var o = e
                  , a = n
                  , s = $t(t, e.line)
                  , l = i && "rtl" == t.direction ? -n : n;
                function c() {
                    var n = e.line + l;
                    return !(n < t.first || n >= t.first + t.size) && (e = new se(n,e.ch,e.sticky),
                    s = $t(t, n))
                }
                function u(o) {
                    var a;
                    if ("codepoint" == r) {
                        var u = s.text.charCodeAt(e.ch + (n > 0 ? 0 : -1));
                        if (isNaN(u))
                            a = null;
                        else {
                            var h = n > 0 ? u >= 55296 && u < 56320 : u >= 56320 && u < 57343;
                            a = new se(e.line,Math.max(0, Math.min(s.text.length, e.ch + n * (h ? 2 : 1))),-n)
                        }
                    } else
                        a = i ? qa(t.cm, s, e, n) : Za(s, e, n);
                    if (null == a) {
                        if (o || !c())
                            return !1;
                        e = Ya(i, t.cm, s, e.line, l)
                    } else
                        e = a;
                    return !0
                }
                if ("char" == r || "codepoint" == r)
                    u();
                else if ("column" == r)
                    u(!0);
                else if ("word" == r || "group" == r)
                    for (var h = null, f = "group" == r, d = t.cm && t.cm.getHelper(e, "wordChars"), p = !0; ; p = !1) {
                        if (n < 0 && !u(!p))
                            break;
                        var g = s.text.charAt(e.ch) || "\n"
                          , v = ot(g, d) ? "w" : f && "\n" == g ? "n" : !f || /\s/.test(g) ? null : "p";
                        if (!f || p || v || (v = "s"),
                        h && h != v) {
                            n < 0 && (n = 1,
                            u(),
                            e.sticky = "after");
                            break
                        }
                        if (v && (h = v),
                        n > 0 && !u(!p))
                            break
                    }
                var m = Zo(t, e, o, a, !0);
                return ce(o, m) && (m.hitSide = !0),
                m
            }
            function $s(t, e, n, r) {
                var i, o, a = t.doc, s = e.left;
                if ("page" == r) {
                    var l = Math.min(t.display.wrapper.clientHeight, _(t).innerHeight || a(t).documentElement.clientHeight)
                      , c = Math.max(l - .5 * Mr(t.display), 3);
                    i = (n > 0 ? e.bottom : e.top) + n * c
                } else
                    "line" == r && (i = n > 0 ? e.bottom + 3 : e.top - 3);
                for (; ; ) {
                    if (o = Er(t, s, i),
                    !o.outside)
                        break;
                    if (n < 0 ? i <= 0 : i >= a.height) {
                        o.hitSide = !0;
                        break
                    }
                    i += 5 * n
                }
                return o
            }
            var tl = function(t) {
                this.cm = t,
                this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
                this.polling = new H,
                this.composing = null,
                this.gracePeriod = !1,
                this.readDOMTimeout = null
            };
            function el(t, e) {
                var n = rr(t, e.line);
                if (!n || n.hidden)
                    return null;
                var r = $t(t.doc, e.line)
                  , i = tr(n, r, e.line)
                  , o = gt(r, t.doc.direction)
                  , a = "left";
                if (o) {
                    var s = dt(o, e.ch);
                    a = s % 2 ? "right" : "left"
                }
                var l = lr(i.map, e.ch, a);
                return l.offset = "right" == l.collapse ? l.end : l.start,
                l
            }
            function nl(t) {
                for (var e = t; e; e = e.parentNode)
                    if (/CodeMirror-gutter-wrapper/.test(e.className))
                        return !0;
                return !1
            }
            function rl(t, e) {
                return e && (t.bad = !0),
                t
            }
            function il(t, e, n, r, i) {
                var o = ""
                  , a = !1
                  , s = t.doc.lineSeparator()
                  , l = !1;
                function c(t) {
                    return function(e) {
                        return e.id == t
                    }
                }
                function u() {
                    a && (o += s,
                    l && (o += s),
                    a = l = !1)
                }
                function h(t) {
                    t && (u(),
                    o += t)
                }
                function f(e) {
                    if (1 == e.nodeType) {
                        var n = e.getAttribute("cm-text");
                        if (n)
                            return void h(n);
                        var o, d = e.getAttribute("cm-marker");
                        if (d) {
                            var p = t.findMarks(se(r, 0), se(i + 1, 0), c(+d));
                            return void (p.length && (o = p[0].find(0)) && h(te(t.doc, o.from, o.to).join(s)))
                        }
                        if ("false" == e.getAttribute("contenteditable"))
                            return;
                        var g = /^(pre|div|p|li|table|br)$/i.test(e.nodeName);
                        if (!/^br$/i.test(e.nodeName) && 0 == e.textContent.length)
                            return;
                        g && u();
                        for (var v = 0; v < e.childNodes.length; v++)
                            f(e.childNodes[v]);
                        /^(pre|p)$/i.test(e.nodeName) && (l = !0),
                        g && (a = !0)
                    } else
                        3 == e.nodeType && h(e.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "))
                }
                for (; ; ) {
                    if (f(e),
                    e == n)
                        break;
                    e = e.nextSibling,
                    l = !1
                }
                return o
            }
            function ol(t, e, n) {
                var r;
                if (e == t.display.lineDiv) {
                    if (r = t.display.lineDiv.childNodes[n],
                    !r)
                        return rl(t.clipPos(se(t.display.viewTo - 1)), !0);
                    e = null,
                    n = 0
                } else
                    for (r = e; ; r = r.parentNode) {
                        if (!r || r == t.display.lineDiv)
                            return null;
                        if (r.parentNode && r.parentNode == t.display.lineDiv)
                            break
                    }
                for (var i = 0; i < t.display.view.length; i++) {
                    var o = t.display.view[i];
                    if (o.node == r)
                        return al(o, e, n)
                }
            }
            function al(t, e, n) {
                var r = t.text.firstChild
                  , i = !1;
                if (!e || !N(r, e))
                    return rl(se(re(t.line), 0), !0);
                if (e == r && (i = !0,
                e = r.childNodes[n],
                n = 0,
                !e)) {
                    var o = t.rest ? q(t.rest) : t.line;
                    return rl(se(re(o), o.text.length), i)
                }
                var a = 3 == e.nodeType ? e : null
                  , s = e;
                a || 1 != e.childNodes.length || 3 != e.firstChild.nodeType || (a = e.firstChild,
                n && (n = a.nodeValue.length));
                while (s.parentNode != r)
                    s = s.parentNode;
                var l = t.measure
                  , c = l.maps;
                function u(e, n, r) {
                    for (var i = -1; i < (c ? c.length : 0); i++)
                        for (var o = i < 0 ? l.map : c[i], a = 0; a < o.length; a += 3) {
                            var s = o[a + 2];
                            if (s == e || s == n) {
                                var u = re(i < 0 ? t.line : t.rest[i])
                                  , h = o[a] + r;
                                return (r < 0 || s != e) && (h = o[a + (r ? 1 : 0)]),
                                se(u, h)
                            }
                        }
                }
                var h = u(a, s, n);
                if (h)
                    return rl(h, i);
                for (var f = s.nextSibling, d = a ? a.nodeValue.length - n : 0; f; f = f.nextSibling) {
                    if (h = u(f, f.firstChild, 0),
                    h)
                        return rl(se(h.line, h.ch - d), i);
                    d += f.textContent.length
                }
                for (var p = s.previousSibling, g = n; p; p = p.previousSibling) {
                    if (h = u(p, p.firstChild, -1),
                    h)
                        return rl(se(h.line, h.ch + g), i);
                    g += p.textContent.length
                }
            }
            tl.prototype.init = function(t) {
                var e = this
                  , n = this
                  , r = n.cm
                  , i = n.div = t.lineDiv;
                function o(t) {
                    for (var e = t.target; e; e = e.parentNode) {
                        if (e == i)
                            return !0;
                        if (/\bCodeMirror-(?:line)?widget\b/.test(e.className))
                            break
                    }
                    return !1
                }
                function a(t) {
                    if (o(t) && !bt(r, t)) {
                        if (r.somethingSelected())
                            Vs({
                                lineWise: !1,
                                text: r.getSelections()
                            }),
                            "cut" == t.type && r.replaceSelection("", null, "cut");
                        else {
                            if (!r.options.lineWiseCopyCut)
                                return;
                            var e = Gs(r);
                            Vs({
                                lineWise: !0,
                                text: e.text
                            }),
                            "cut" == t.type && r.operation((function() {
                                r.setSelections(e.ranges, 0, K),
                                r.replaceSelection("", null, "cut")
                            }
                            ))
                        }
                        if (t.clipboardData) {
                            t.clipboardData.clearData();
                            var a = Js.text.join("\n");
                            if (t.clipboardData.setData("Text", a),
                            t.clipboardData.getData("Text") == a)
                                return void t.preventDefault()
                        }
                        var s = Zs()
                          , l = s.firstChild;
                        r.display.lineSpace.insertBefore(s, r.display.lineSpace.firstChild),
                        l.value = Js.text.join("\n");
                        var c = B(i.ownerDocument);
                        D(l),
                        setTimeout((function() {
                            r.display.lineSpace.removeChild(s),
                            c.focus(),
                            c == i && n.showPrimarySelection()
                        }
                        ), 50)
                    }
                }
                i.contentEditable = !0,
                js(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize),
                mt(i, "paste", (function(t) {
                    !o(t) || bt(r, t) || Ks(t, r) || s <= 11 && setTimeout(Ri(r, (function() {
                        return e.updateFromDOM()
                    }
                    )), 20)
                }
                )),
                mt(i, "compositionstart", (function(t) {
                    e.composing = {
                        data: t.data,
                        done: !1
                    }
                }
                )),
                mt(i, "compositionupdate", (function(t) {
                    e.composing || (e.composing = {
                        data: t.data,
                        done: !1
                    })
                }
                )),
                mt(i, "compositionend", (function(t) {
                    e.composing && (t.data != e.composing.data && e.readFromDOMSoon(),
                    e.composing.done = !0)
                }
                )),
                mt(i, "touchstart", (function() {
                    return n.forceCompositionEnd()
                }
                )),
                mt(i, "input", (function() {
                    e.composing || e.readFromDOMSoon()
                }
                )),
                mt(i, "copy", a),
                mt(i, "cut", a)
            }
            ,
            tl.prototype.screenReaderLabelChanged = function(t) {
                t ? this.div.setAttribute("aria-label", t) : this.div.removeAttribute("aria-label")
            }
            ,
            tl.prototype.prepareSelection = function() {
                var t = Kr(this.cm, !1);
                return t.focus = B(this.div.ownerDocument) == this.div,
                t
            }
            ,
            tl.prototype.showSelection = function(t, e) {
                t && this.cm.display.view.length && ((t.focus || e) && this.showPrimarySelection(),
                this.showMultipleSelections(t))
            }
            ,
            tl.prototype.getSelection = function() {
                return this.cm.display.wrapper.ownerDocument.getSelection()
            }
            ,
            tl.prototype.showPrimarySelection = function() {
                var t = this.getSelection()
                  , e = this.cm
                  , r = e.doc.sel.primary()
                  , i = r.from()
                  , o = r.to();
                if (e.display.viewTo == e.display.viewFrom || i.line >= e.display.viewTo || o.line < e.display.viewFrom)
                    t.removeAllRanges();
                else {
                    var a = ol(e, t.anchorNode, t.anchorOffset)
                      , s = ol(e, t.focusNode, t.focusOffset);
                    if (!a || a.bad || !s || s.bad || 0 != le(fe(a, s), i) || 0 != le(he(a, s), o)) {
                        var l = e.display.view
                          , c = i.line >= e.display.viewFrom && el(e, i) || {
                            node: l[0].measure.map[2],
                            offset: 0
                        }
                          , u = o.line < e.display.viewTo && el(e, o);
                        if (!u) {
                            var h = l[l.length - 1].measure
                              , f = h.maps ? h.maps[h.maps.length - 1] : h.map;
                            u = {
                                node: f[f.length - 1],
                                offset: f[f.length - 2] - f[f.length - 3]
                            }
                        }
                        if (c && u) {
                            var d, p = t.rangeCount && t.getRangeAt(0);
                            try {
                                d = k(c.node, c.offset, u.offset, u.node)
                            } catch (g) {}
                            d && (!n && e.state.focused ? (t.collapse(c.node, c.offset),
                            d.collapsed || (t.removeAllRanges(),
                            t.addRange(d))) : (t.removeAllRanges(),
                            t.addRange(d)),
                            p && null == t.anchorNode ? t.addRange(p) : n && this.startGracePeriod()),
                            this.rememberSelection()
                        } else
                            t.removeAllRanges()
                    }
                }
            }
            ,
            tl.prototype.startGracePeriod = function() {
                var t = this;
                clearTimeout(this.gracePeriod),
                this.gracePeriod = setTimeout((function() {
                    t.gracePeriod = !1,
                    t.selectionChanged() && t.cm.operation((function() {
                        return t.cm.curOp.selectionChanged = !0
                    }
                    ))
                }
                ), 20)
            }
            ,
            tl.prototype.showMultipleSelections = function(t) {
                I(this.cm.display.cursorDiv, t.cursors),
                I(this.cm.display.selectionDiv, t.selection)
            }
            ,
            tl.prototype.rememberSelection = function() {
                var t = this.getSelection();
                this.lastAnchorNode = t.anchorNode,
                this.lastAnchorOffset = t.anchorOffset,
                this.lastFocusNode = t.focusNode,
                this.lastFocusOffset = t.focusOffset
            }
            ,
            tl.prototype.selectionInEditor = function() {
                var t = this.getSelection();
                if (!t.rangeCount)
                    return !1;
                var e = t.getRangeAt(0).commonAncestorContainer;
                return N(this.div, e)
            }
            ,
            tl.prototype.focus = function() {
                "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && B(this.div.ownerDocument) == this.div || this.showSelection(this.prepareSelection(), !0),
                this.div.focus())
            }
            ,
            tl.prototype.blur = function() {
                this.div.blur()
            }
            ,
            tl.prototype.getField = function() {
                return this.div
            }
            ,
            tl.prototype.supportsTouch = function() {
                return !0
            }
            ,
            tl.prototype.receivedFocus = function() {
                var t = this
                  , e = this;
                function n() {
                    e.cm.state.focused && (e.pollSelection(),
                    e.polling.set(e.cm.options.pollInterval, n))
                }
                this.selectionInEditor() ? setTimeout((function() {
                    return t.pollSelection()
                }
                ), 20) : Bi(this.cm, (function() {
                    return e.cm.curOp.selectionChanged = !0
                }
                )),
                this.polling.set(this.cm.options.pollInterval, n)
            }
            ,
            tl.prototype.selectionChanged = function() {
                var t = this.getSelection();
                return t.anchorNode != this.lastAnchorNode || t.anchorOffset != this.lastAnchorOffset || t.focusNode != this.lastFocusNode || t.focusOffset != this.lastFocusOffset
            }
            ,
            tl.prototype.pollSelection = function() {
                if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                    var t = this.getSelection()
                      , e = this.cm;
                    if (m && u && this.cm.display.gutterSpecs.length && nl(t.anchorNode))
                        return this.cm.triggerOnKeyDown({
                            type: "keydown",
                            keyCode: 8,
                            preventDefault: Math.abs
                        }),
                        this.blur(),
                        void this.focus();
                    if (!this.composing) {
                        this.rememberSelection();
                        var n = ol(e, t.anchorNode, t.anchorOffset)
                          , r = ol(e, t.focusNode, t.focusOffset);
                        n && r && Bi(e, (function() {
                            Vo(e.doc, co(n, r), K),
                            (n.bad || r.bad) && (e.curOp.selectionChanged = !0)
                        }
                        ))
                    }
                }
            }
            ,
            tl.prototype.pollContent = function() {
                null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout),
                this.readDOMTimeout = null);
                var t, e, n, r = this.cm, i = r.display, o = r.doc.sel.primary(), a = o.from(), s = o.to();
                if (0 == a.ch && a.line > r.firstLine() && (a = se(a.line - 1, $t(r.doc, a.line - 1).length)),
                s.ch == $t(r.doc, s.line).text.length && s.line < r.lastLine() && (s = se(s.line + 1, 0)),
                a.line < i.viewFrom || s.line > i.viewTo - 1)
                    return !1;
                a.line == i.viewFrom || 0 == (t = _r(r, a.line)) ? (e = re(i.view[0].line),
                n = i.view[0].node) : (e = re(i.view[t].line),
                n = i.view[t - 1].node.nextSibling);
                var l, c, u = _r(r, s.line);
                if (u == i.view.length - 1 ? (l = i.viewTo - 1,
                c = i.lineDiv.lastChild) : (l = re(i.view[u + 1].line) - 1,
                c = i.view[u + 1].node.previousSibling),
                !n)
                    return !1;
                var h = r.doc.splitLines(il(r, n, c, e, l))
                  , f = te(r.doc, se(e, 0), se(l, $t(r.doc, l).text.length));
                while (h.length > 1 && f.length > 1)
                    if (q(h) == q(f))
                        h.pop(),
                        f.pop(),
                        l--;
                    else {
                        if (h[0] != f[0])
                            break;
                        h.shift(),
                        f.shift(),
                        e++
                    }
                var d = 0
                  , p = 0
                  , g = h[0]
                  , v = f[0]
                  , m = Math.min(g.length, v.length);
                while (d < m && g.charCodeAt(d) == v.charCodeAt(d))
                    ++d;
                var y = q(h)
                  , A = q(f)
                  , w = Math.min(y.length - (1 == h.length ? d : 0), A.length - (1 == f.length ? d : 0));
                while (p < w && y.charCodeAt(y.length - p - 1) == A.charCodeAt(A.length - p - 1))
                    ++p;
                if (1 == h.length && 1 == f.length && e == a.line)
                    while (d && d > a.ch && y.charCodeAt(y.length - p - 1) == A.charCodeAt(A.length - p - 1))
                        d--,
                        p++;
                h[h.length - 1] = y.slice(0, y.length - p).replace(/^\u200b+/, ""),
                h[0] = h[0].slice(d).replace(/\u200b+$/, "");
                var b = se(e, d)
                  , S = se(l, f.length ? q(f).length - p : 0);
                return h.length > 1 || h[0] || le(b, S) ? (aa(r.doc, h, b, S, "+input"),
                !0) : void 0
            }
            ,
            tl.prototype.ensurePolled = function() {
                this.forceCompositionEnd()
            }
            ,
            tl.prototype.reset = function() {
                this.forceCompositionEnd()
            }
            ,
            tl.prototype.forceCompositionEnd = function() {
                this.composing && (clearTimeout(this.readDOMTimeout),
                this.composing = null,
                this.updateFromDOM(),
                this.div.blur(),
                this.div.focus())
            }
            ,
            tl.prototype.readFromDOMSoon = function() {
                var t = this;
                null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout((function() {
                    if (t.readDOMTimeout = null,
                    t.composing) {
                        if (!t.composing.done)
                            return;
                        t.composing = null
                    }
                    t.updateFromDOM()
                }
                ), 80))
            }
            ,
            tl.prototype.updateFromDOM = function() {
                var t = this;
                !this.cm.isReadOnly() && this.pollContent() || Bi(this.cm, (function() {
                    return Ur(t.cm)
                }
                ))
            }
            ,
            tl.prototype.setUneditable = function(t) {
                t.contentEditable = "false"
            }
            ,
            tl.prototype.onKeyPress = function(t) {
                0 == t.charCode || this.composing || (t.preventDefault(),
                this.cm.isReadOnly() || Ri(this.cm, zs)(this.cm, String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), 0))
            }
            ,
            tl.prototype.readOnlyChanged = function(t) {
                this.div.contentEditable = String("nocursor" != t)
            }
            ,
            tl.prototype.onContextMenu = function() {}
            ,
            tl.prototype.resetPosition = function() {}
            ,
            tl.prototype.needsContentAttribute = !0;
            var sl = function(t) {
                this.cm = t,
                this.prevInput = "",
                this.pollingFast = !1,
                this.polling = new H,
                this.hasSelection = !1,
                this.composing = null,
                this.resetting = !1
            };
            function ll(t, e) {
                if (e = e ? W(e) : {},
                e.value = t.value,
                !e.tabindex && t.tabIndex && (e.tabindex = t.tabIndex),
                !e.placeholder && t.placeholder && (e.placeholder = t.placeholder),
                null == e.autofocus) {
                    var n = B(t.ownerDocument);
                    e.autofocus = n == t || null != t.getAttribute("autofocus") && n == document.body
                }
                function r() {
                    t.value = s.getValue()
                }
                var i;
                if (t.form && (mt(t.form, "submit", r),
                !e.leaveSubmitMethodAlone)) {
                    var o = t.form;
                    i = o.submit;
                    try {
                        var a = o.submit = function() {
                            r(),
                            o.submit = i,
                            o.submit(),
                            o.submit = a
                        }
                    } catch (l) {}
                }
                e.finishInit = function(n) {
                    n.save = r,
                    n.getTextArea = function() {
                        return t
                    }
                    ,
                    n.toTextArea = function() {
                        n.toTextArea = isNaN,
                        r(),
                        t.parentNode.removeChild(n.getWrapperElement()),
                        t.style.display = "",
                        t.form && (At(t.form, "submit", r),
                        e.leaveSubmitMethodAlone || "function" != typeof t.form.submit || (t.form.submit = i))
                    }
                }
                ,
                t.style.display = "none";
                var s = Us((function(e) {
                    return t.parentNode.insertBefore(e, t.nextSibling)
                }
                ), e);
                return s
            }
            function cl(t) {
                t.off = At,
                t.on = mt,
                t.wheelEventPixels = io,
                t.Doc = xa,
                t.splitLines = Dt,
                t.countColumn = Q,
                t.findColumn = j,
                t.isWordChar = it,
                t.Pass = z,
                t.signal = wt,
                t.Line = hn,
                t.changeEnd = uo,
                t.scrollbarModel = Si,
                t.Pos = se,
                t.cmpPos = le,
                t.modes = Qt,
                t.mimeModes = Ht,
                t.resolveMode = zt,
                t.getMode = Kt,
                t.modeExtensions = Xt,
                t.extendMode = Gt,
                t.copyState = jt,
                t.startState = Yt,
                t.innerMode = Zt,
                t.commands = $a,
                t.keyMap = Wa,
                t.keyName = Ka,
                t.isModifierKey = Va,
                t.lookupKey = Ja,
                t.normalizeKeyMap = Ha,
                t.StringStream = qt,
                t.SharedTextMarker = Aa,
                t.TextMarker = ma,
                t.LineWidget = da,
                t.e_preventDefault = xt,
                t.e_stopPropagation = kt,
                t.e_stop = Tt,
                t.addClass = R,
                t.contains = N,
                t.rmClass = L,
                t.keyNames = Da
            }
            sl.prototype.init = function(t) {
                var e = this
                  , n = this
                  , r = this.cm;
                this.createField(t);
                var i = this.textarea;
                function o(t) {
                    if (!bt(r, t)) {
                        if (r.somethingSelected())
                            Vs({
                                lineWise: !1,
                                text: r.getSelections()
                            });
                        else {
                            if (!r.options.lineWiseCopyCut)
                                return;
                            var e = Gs(r);
                            Vs({
                                lineWise: !0,
                                text: e.text
                            }),
                            "cut" == t.type ? r.setSelections(e.ranges, null, K) : (n.prevInput = "",
                            i.value = e.text.join("\n"),
                            D(i))
                        }
                        "cut" == t.type && (r.state.cutIncoming = +new Date)
                    }
                }
                t.wrapper.insertBefore(this.wrapper, t.wrapper.firstChild),
                v && (i.style.width = "0px"),
                mt(i, "input", (function() {
                    a && s >= 9 && e.hasSelection && (e.hasSelection = null),
                    n.poll()
                }
                )),
                mt(i, "paste", (function(t) {
                    bt(r, t) || Ks(t, r) || (r.state.pasteIncoming = +new Date,
                    n.fastPoll())
                }
                )),
                mt(i, "cut", o),
                mt(i, "copy", o),
                mt(t.scroller, "paste", (function(e) {
                    if (!Kn(t, e) && !bt(r, e)) {
                        if (!i.dispatchEvent)
                            return r.state.pasteIncoming = +new Date,
                            void n.focus();
                        var o = new Event("paste");
                        o.clipboardData = e.clipboardData,
                        i.dispatchEvent(o)
                    }
                }
                )),
                mt(t.lineSpace, "selectstart", (function(e) {
                    Kn(t, e) || xt(e)
                }
                )),
                mt(i, "compositionstart", (function() {
                    var t = r.getCursor("from");
                    n.composing && n.composing.range.clear(),
                    n.composing = {
                        start: t,
                        range: r.markText(t, r.getCursor("to"), {
                            className: "CodeMirror-composing"
                        })
                    }
                }
                )),
                mt(i, "compositionend", (function() {
                    n.composing && (n.poll(),
                    n.composing.range.clear(),
                    n.composing = null)
                }
                ))
            }
            ,
            sl.prototype.createField = function(t) {
                this.wrapper = Zs(),
                this.textarea = this.wrapper.firstChild
            }
            ,
            sl.prototype.screenReaderLabelChanged = function(t) {
                t ? this.textarea.setAttribute("aria-label", t) : this.textarea.removeAttribute("aria-label")
            }
            ,
            sl.prototype.prepareSelection = function() {
                var t = this.cm
                  , e = t.display
                  , n = t.doc
                  , r = Kr(t);
                if (t.options.moveInputWithCursor) {
                    var i = br(t, n.sel.primary().head, "div")
                      , o = e.wrapper.getBoundingClientRect()
                      , a = e.lineDiv.getBoundingClientRect();
                    r.teTop = Math.max(0, Math.min(e.wrapper.clientHeight - 10, i.top + a.top - o.top)),
                    r.teLeft = Math.max(0, Math.min(e.wrapper.clientWidth - 10, i.left + a.left - o.left))
                }
                return r
            }
            ,
            sl.prototype.showSelection = function(t) {
                var e = this.cm
                  , n = e.display;
                I(n.cursorDiv, t.cursors),
                I(n.selectionDiv, t.selection),
                null != t.teTop && (this.wrapper.style.top = t.teTop + "px",
                this.wrapper.style.left = t.teLeft + "px")
            }
            ,
            sl.prototype.reset = function(t) {
                if (!(this.contextMenuPending || this.composing && t)) {
                    var e = this.cm;
                    if (this.resetting = !0,
                    e.somethingSelected()) {
                        this.prevInput = "";
                        var n = e.getSelection();
                        this.textarea.value = n,
                        e.state.focused && D(this.textarea),
                        a && s >= 9 && (this.hasSelection = n)
                    } else
                        t || (this.prevInput = this.textarea.value = "",
                        a && s >= 9 && (this.hasSelection = null));
                    this.resetting = !1
                }
            }
            ,
            sl.prototype.getField = function() {
                return this.textarea
            }
            ,
            sl.prototype.supportsTouch = function() {
                return !1
            }
            ,
            sl.prototype.focus = function() {
                if ("nocursor" != this.cm.options.readOnly && (!y || B(this.textarea.ownerDocument) != this.textarea))
                    try {
                        this.textarea.focus()
                    } catch (t) {}
            }
            ,
            sl.prototype.blur = function() {
                this.textarea.blur()
            }
            ,
            sl.prototype.resetPosition = function() {
                this.wrapper.style.top = this.wrapper.style.left = 0
            }
            ,
            sl.prototype.receivedFocus = function() {
                this.slowPoll()
            }
            ,
            sl.prototype.slowPoll = function() {
                var t = this;
                this.pollingFast || this.polling.set(this.cm.options.pollInterval, (function() {
                    t.poll(),
                    t.cm.state.focused && t.slowPoll()
                }
                ))
            }
            ,
            sl.prototype.fastPoll = function() {
                var t = !1
                  , e = this;
                function n() {
                    var r = e.poll();
                    r || t ? (e.pollingFast = !1,
                    e.slowPoll()) : (t = !0,
                    e.polling.set(60, n))
                }
                e.pollingFast = !0,
                e.polling.set(20, n)
            }
            ,
            sl.prototype.poll = function() {
                var t = this
                  , e = this.cm
                  , n = this.textarea
                  , r = this.prevInput;
                if (this.contextMenuPending || this.resetting || !e.state.focused || Ft(n) && !r && !this.composing || e.isReadOnly() || e.options.disableInput || e.state.keySeq)
                    return !1;
                var i = n.value;
                if (i == r && !e.somethingSelected())
                    return !1;
                if (a && s >= 9 && this.hasSelection === i || A && /[\uf700-\uf7ff]/.test(i))
                    return e.display.input.reset(),
                    !1;
                if (e.doc.sel == e.display.selForContextMenu) {
                    var o = i.charCodeAt(0);
                    if (8203 != o || r || (r = "​"),
                    8666 == o)
                        return this.reset(),
                        this.cm.execCommand("undo")
                }
                var l = 0
                  , c = Math.min(r.length, i.length);
                while (l < c && r.charCodeAt(l) == i.charCodeAt(l))
                    ++l;
                return Bi(e, (function() {
                    zs(e, i.slice(l), r.length - l, null, t.composing ? "*compose" : null),
                    i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = t.prevInput = "" : t.prevInput = i,
                    t.composing && (t.composing.range.clear(),
                    t.composing.range = e.markText(t.composing.start, e.getCursor("to"), {
                        className: "CodeMirror-composing"
                    }))
                }
                )),
                !0
            }
            ,
            sl.prototype.ensurePolled = function() {
                this.pollingFast && this.poll() && (this.pollingFast = !1)
            }
            ,
            sl.prototype.onKeyPress = function() {
                a && s >= 9 && (this.hasSelection = null),
                this.fastPoll()
            }
            ,
            sl.prototype.onContextMenu = function(t) {
                var e = this
                  , n = e.cm
                  , r = n.display
                  , i = e.textarea;
                e.contextMenuPending && e.contextMenuPending();
                var o = Fr(n, t)
                  , c = r.scroller.scrollTop;
                if (o && !f) {
                    var u = n.options.resetSelectionOnContextMenu;
                    u && -1 == n.doc.sel.contains(o) && Ri(n, Vo)(n.doc, co(o), K);
                    var h, d = i.style.cssText, p = e.wrapper.style.cssText, g = e.wrapper.offsetParent.getBoundingClientRect();
                    if (e.wrapper.style.cssText = "position: static",
                    i.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (t.clientY - g.top - 5) + "px; left: " + (t.clientX - g.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
                    l && (h = i.ownerDocument.defaultView.scrollY),
                    r.input.focus(),
                    l && i.ownerDocument.defaultView.scrollTo(null, h),
                    r.input.reset(),
                    n.somethingSelected() || (i.value = e.prevInput = " "),
                    e.contextMenuPending = y,
                    r.selForContextMenu = n.doc.sel,
                    clearTimeout(r.detectingSelectAll),
                    a && s >= 9 && m(),
                    E) {
                        Tt(t);
                        var v = function() {
                            At(window, "mouseup", v),
                            setTimeout(y, 20)
                        };
                        mt(window, "mouseup", v)
                    } else
                        setTimeout(y, 50)
                }
                function m() {
                    if (null != i.selectionStart) {
                        var t = n.somethingSelected()
                          , o = "​" + (t ? i.value : "");
                        i.value = "⇚",
                        i.value = o,
                        e.prevInput = t ? "" : "​",
                        i.selectionStart = 1,
                        i.selectionEnd = o.length,
                        r.selForContextMenu = n.doc.sel
                    }
                }
                function y() {
                    if (e.contextMenuPending == y && (e.contextMenuPending = !1,
                    e.wrapper.style.cssText = p,
                    i.style.cssText = d,
                    a && s < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = c),
                    null != i.selectionStart)) {
                        (!a || a && s < 9) && m();
                        var t = 0
                          , o = function() {
                            r.selForContextMenu == n.doc.sel && 0 == i.selectionStart && i.selectionEnd > 0 && "​" == e.prevInput ? Ri(n, qo)(n) : t++ < 10 ? r.detectingSelectAll = setTimeout(o, 500) : (r.selForContextMenu = null,
                            r.input.reset())
                        };
                        r.detectingSelectAll = setTimeout(o, 200)
                    }
                }
            }
            ,
            sl.prototype.readOnlyChanged = function(t) {
                t || this.reset(),
                this.textarea.disabled = "nocursor" == t,
                this.textarea.readOnly = !!t
            }
            ,
            sl.prototype.setUneditable = function() {}
            ,
            sl.prototype.needsContentAttribute = !1,
            Ds(Us),
            Ys(Us);
            var ul = "iter insert remove copy getEditor constructor".split(" ");
            for (var hl in xa.prototype)
                xa.prototype.hasOwnProperty(hl) && J(ul, hl) < 0 && (Us.prototype[hl] = function(t) {
                    return function() {
                        return t.apply(this.doc, arguments)
                    }
                }(xa.prototype[hl]));
            return Et(xa),
            Us.inputStyles = {
                textarea: sl,
                contenteditable: tl
            },
            Us.defineMode = function(t) {
                Us.defaults.mode || "null" == t || (Us.defaults.mode = t),
                Jt.apply(this, arguments)
            }
            ,
            Us.defineMIME = Vt,
            Us.defineMode("null", (function() {
                return {
                    token: function(t) {
                        return t.skipToEnd()
                    }
                }
            }
            )),
            Us.defineMIME("text/plain", "null"),
            Us.defineExtension = function(t, e) {
                Us.prototype[t] = e
            }
            ,
            Us.defineDocExtension = function(t, e) {
                xa.prototype[t] = e
            }
            ,
            Us.fromTextArea = ll,
            cl(Us),
            Us.version = "5.65.9",
            Us
        }
        ))
    },
    5321: function(t, e, n) {
        (function(t) {
            t(n(4631))
        }
        )((function(t) {
            "use strict";
            function e(t) {
                return new RegExp("^((" + t.join(")|(") + "))\\b")
            }
            var n = e(["and", "or", "not", "is"])
              , r = ["as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "lambda", "pass", "raise", "return", "try", "while", "with", "yield", "in"]
              , i = ["abs", "all", "any", "bin", "bool", "bytearray", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip", "__import__", "NotImplemented", "Ellipsis", "__debug__"];
            function o(t) {
                return t.scopes[t.scopes.length - 1]
            }
            t.registerHelper("hintWords", "python", r.concat(i).concat(["exec", "print"])),
            t.defineMode("python", (function(a, s) {
                for (var l = "error", c = s.delimiters || s.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/, u = [s.singleOperators, s.doubleOperators, s.doubleDelimiters, s.tripleDelimiters, s.operators || /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/], h = 0; h < u.length; h++)
                    u[h] || u.splice(h--, 1);
                var f = s.hangingIndent || a.indentUnit
                  , d = r
                  , p = i;
                void 0 != s.extra_keywords && (d = d.concat(s.extra_keywords)),
                void 0 != s.extra_builtins && (p = p.concat(s.extra_builtins));
                var g = !(s.version && Number(s.version) < 3);
                if (g) {
                    var v = s.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
                    d = d.concat(["nonlocal", "False", "True", "None", "async", "await"]),
                    p = p.concat(["ascii", "bytes", "exec", "print"]);
                    var m = new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")
                } else {
                    v = s.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
                    d = d.concat(["exec", "print"]),
                    p = p.concat(["apply", "basestring", "buffer", "cmp", "coerce", "execfile", "file", "intern", "long", "raw_input", "reduce", "reload", "unichr", "unicode", "xrange", "False", "True", "None"]);
                    m = new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")
                }
                var y = e(d)
                  , A = e(p);
                function w(t, e) {
                    var n = t.sol() && "\\" != e.lastToken;
                    if (n && (e.indent = t.indentation()),
                    n && "py" == o(e).type) {
                        var r = o(e).offset;
                        if (t.eatSpace()) {
                            var i = t.indentation();
                            return i > r ? E(e) : i < r && k(t, e) && "#" != t.peek() && (e.errorToken = !0),
                            null
                        }
                        var a = b(t, e);
                        return r > 0 && k(t, e) && (a += " " + l),
                        a
                    }
                    return b(t, e)
                }
                function b(t, e, r) {
                    if (t.eatSpace())
                        return null;
                    if (!r && t.match(/^#.*/))
                        return "comment";
                    if (t.match(/^[0-9\.]/, !1)) {
                        var i = !1;
                        if (t.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (i = !0),
                        t.match(/^[\d_]+\.\d*/) && (i = !0),
                        t.match(/^\.\d+/) && (i = !0),
                        i)
                            return t.eat(/J/i),
                            "number";
                        var o = !1;
                        if (t.match(/^0x[0-9a-f_]+/i) && (o = !0),
                        t.match(/^0b[01_]+/i) && (o = !0),
                        t.match(/^0o[0-7_]+/i) && (o = !0),
                        t.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (t.eat(/J/i),
                        o = !0),
                        t.match(/^0(?![\dx])/i) && (o = !0),
                        o)
                            return t.eat(/L/i),
                            "number"
                    }
                    if (t.match(m)) {
                        var a = -1 !== t.current().toLowerCase().indexOf("f");
                        return a ? (e.tokenize = S(t.current(), e.tokenize),
                        e.tokenize(t, e)) : (e.tokenize = C(t.current(), e.tokenize),
                        e.tokenize(t, e))
                    }
                    for (var s = 0; s < u.length; s++)
                        if (t.match(u[s]))
                            return "operator";
                    return t.match(c) ? "punctuation" : "." == e.lastToken && t.match(v) ? "property" : t.match(y) || t.match(n) ? "keyword" : t.match(A) ? "builtin" : t.match(/^(self|cls)\b/) ? "variable-2" : t.match(v) ? "def" == e.lastToken || "class" == e.lastToken ? "def" : "variable" : (t.next(),
                    r ? null : l)
                }
                function S(t, e) {
                    while ("rubf".indexOf(t.charAt(0).toLowerCase()) >= 0)
                        t = t.substr(1);
                    var n = 1 == t.length
                      , r = "string";
                    function i(t) {
                        return function(e, n) {
                            var r = b(e, n, !0);
                            return "punctuation" == r && ("{" == e.current() ? n.tokenize = i(t + 1) : "}" == e.current() && (n.tokenize = t > 1 ? i(t - 1) : o)),
                            r
                        }
                    }
                    function o(o, a) {
                        while (!o.eol())
                            if (o.eatWhile(/[^'"\{\}\\]/),
                            o.eat("\\")) {
                                if (o.next(),
                                n && o.eol())
                                    return r
                            } else {
                                if (o.match(t))
                                    return a.tokenize = e,
                                    r;
                                if (o.match("{{"))
                                    return r;
                                if (o.match("{", !1))
                                    return a.tokenize = i(0),
                                    o.current() ? r : a.tokenize(o, a);
                                if (o.match("}}"))
                                    return r;
                                if (o.match("}"))
                                    return l;
                                o.eat(/['"]/)
                            }
                        if (n) {
                            if (s.singleLineStringErrors)
                                return l;
                            a.tokenize = e
                        }
                        return r
                    }
                    return o.isString = !0,
                    o
                }
                function C(t, e) {
                    while ("rubf".indexOf(t.charAt(0).toLowerCase()) >= 0)
                        t = t.substr(1);
                    var n = 1 == t.length
                      , r = "string";
                    function i(i, o) {
                        while (!i.eol())
                            if (i.eatWhile(/[^'"\\]/),
                            i.eat("\\")) {
                                if (i.next(),
                                n && i.eol())
                                    return r
                            } else {
                                if (i.match(t))
                                    return o.tokenize = e,
                                    r;
                                i.eat(/['"]/)
                            }
                        if (n) {
                            if (s.singleLineStringErrors)
                                return l;
                            o.tokenize = e
                        }
                        return r
                    }
                    return i.isString = !0,
                    i
                }
                function E(t) {
                    while ("py" != o(t).type)
                        t.scopes.pop();
                    t.scopes.push({
                        offset: o(t).offset + a.indentUnit,
                        type: "py",
                        align: null
                    })
                }
                function x(t, e, n) {
                    var r = t.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : t.column() + 1;
                    e.scopes.push({
                        offset: e.indent + f,
                        type: n,
                        align: r
                    })
                }
                function k(t, e) {
                    var n = t.indentation();
                    while (e.scopes.length > 1 && o(e).offset > n) {
                        if ("py" != o(e).type)
                            return !0;
                        e.scopes.pop()
                    }
                    return o(e).offset != n
                }
                function L(t, e) {
                    t.sol() && (e.beginningOfLine = !0,
                    e.dedent = !1);
                    var n = e.tokenize(t, e)
                      , r = t.current();
                    if (e.beginningOfLine && "@" == r)
                        return t.match(v, !1) ? "meta" : g ? "operator" : l;
                    if (/\S/.test(r) && (e.beginningOfLine = !1),
                    "variable" != n && "builtin" != n || "meta" != e.lastToken || (n = "meta"),
                    "pass" != r && "return" != r || (e.dedent = !0),
                    "lambda" == r && (e.lambda = !0),
                    ":" == r && !e.lambda && "py" == o(e).type && t.match(/^\s*(?:#|$)/, !1) && E(e),
                    1 == r.length && !/string|comment/.test(n)) {
                        var i = "[({".indexOf(r);
                        if (-1 != i && x(t, e, "])}".slice(i, i + 1)),
                        i = "])}".indexOf(r),
                        -1 != i) {
                            if (o(e).type != r)
                                return l;
                            e.indent = e.scopes.pop().offset - f
                        }
                    }
                    return e.dedent && t.eol() && "py" == o(e).type && e.scopes.length > 1 && e.scopes.pop(),
                    n
                }
                var T = {
                    startState: function(t) {
                        return {
                            tokenize: w,
                            scopes: [{
                                offset: t || 0,
                                type: "py",
                                align: null
                            }],
                            indent: t || 0,
                            lastToken: null,
                            lambda: !1,
                            dedent: 0
                        }
                    },
                    token: function(t, e) {
                        var n = e.errorToken;
                        n && (e.errorToken = !1);
                        var r = L(t, e);
                        return r && "comment" != r && (e.lastToken = "keyword" == r || "punctuation" == r ? t.current() : r),
                        "punctuation" == r && (r = null),
                        t.eol() && e.lambda && (e.lambda = !1),
                        n ? r + " " + l : r
                    },
                    indent: function(e, n) {
                        if (e.tokenize != w)
                            return e.tokenize.isString ? t.Pass : 0;
                        var r = o(e)
                          , i = r.type == n.charAt(0) || "py" == r.type && !e.dedent && /^(else:|elif |except |finally:)/.test(n);
                        return null != r.align ? r.align - (i ? 1 : 0) : r.offset - (i ? f : 0)
                    },
                    electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
                    closeBrackets: {
                        triples: "'\""
                    },
                    lineComment: "#",
                    fold: "indent"
                };
                return T
            }
            )),
            t.defineMIME("text/x-python", "python");
            var a = function(t) {
                return t.split(" ")
            };
            t.defineMIME("text/x-cython", {
                name: "python",
                extra_keywords: a("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")
            })
        }
        ))
    },
    31149: function(t, e, n) {
        (function(t) {
            t(n(4631))
        }
        )((function(t) {
            "use strict";
            t.defineMode("shell", (function() {
                var e = {};
                function n(t, n) {
                    for (var r = 0; r < n.length; r++)
                        e[n[r]] = t
                }
                var r = ["true", "false"]
                  , i = ["if", "then", "do", "else", "elif", "while", "until", "for", "in", "esac", "fi", "fin", "fil", "done", "exit", "set", "unset", "export", "function"]
                  , o = ["ab", "awk", "bash", "beep", "cat", "cc", "cd", "chown", "chmod", "chroot", "clear", "cp", "curl", "cut", "diff", "echo", "find", "gawk", "gcc", "get", "git", "grep", "hg", "kill", "killall", "ln", "ls", "make", "mkdir", "openssl", "mv", "nc", "nl", "node", "npm", "ping", "ps", "restart", "rm", "rmdir", "sed", "service", "sh", "shopt", "shred", "source", "sort", "sleep", "ssh", "start", "stop", "su", "sudo", "svn", "tee", "telnet", "top", "touch", "vi", "vim", "wall", "wc", "wget", "who", "write", "yes", "zsh"];
                function a(t, n) {
                    if (t.eatSpace())
                        return null;
                    var r = t.sol()
                      , i = t.next();
                    if ("\\" === i)
                        return t.next(),
                        null;
                    if ("'" === i || '"' === i || "`" === i)
                        return n.tokens.unshift(s(i, "`" === i ? "quote" : "string")),
                        h(t, n);
                    if ("#" === i)
                        return r && t.eat("!") ? (t.skipToEnd(),
                        "meta") : (t.skipToEnd(),
                        "comment");
                    if ("$" === i)
                        return n.tokens.unshift(c),
                        h(t, n);
                    if ("+" === i || "=" === i)
                        return "operator";
                    if ("-" === i)
                        return t.eat("-"),
                        t.eatWhile(/\w/),
                        "attribute";
                    if ("<" == i) {
                        if (t.match("<<"))
                            return "operator";
                        var o = t.match(/^<-?\s*['"]?([^'"]*)['"]?/);
                        if (o)
                            return n.tokens.unshift(u(o[1])),
                            "string-2"
                    }
                    if (/\d/.test(i) && (t.eatWhile(/\d/),
                    t.eol() || !/\w/.test(t.peek())))
                        return "number";
                    t.eatWhile(/[\w-]/);
                    var a = t.current();
                    return "=" === t.peek() && /\w+/.test(a) ? "def" : e.hasOwnProperty(a) ? e[a] : null
                }
                function s(t, e) {
                    var n = "(" == t ? ")" : "{" == t ? "}" : t;
                    return function(r, i) {
                        var o, a = !1;
                        while (null != (o = r.next())) {
                            if (o === n && !a) {
                                i.tokens.shift();
                                break
                            }
                            if ("$" === o && !a && "'" !== t && r.peek() != n) {
                                a = !0,
                                r.backUp(1),
                                i.tokens.unshift(c);
                                break
                            }
                            if (!a && t !== n && o === t)
                                return i.tokens.unshift(s(t, e)),
                                h(r, i);
                            if (!a && /['"]/.test(o) && !/['"]/.test(t)) {
                                i.tokens.unshift(l(o, "string")),
                                r.backUp(1);
                                break
                            }
                            a = !a && "\\" === o
                        }
                        return e
                    }
                }
                function l(t, e) {
                    return function(n, r) {
                        return r.tokens[0] = s(t, e),
                        n.next(),
                        h(n, r)
                    }
                }
                t.registerHelper("hintWords", "shell", r.concat(i, o)),
                n("atom", r),
                n("keyword", i),
                n("builtin", o);
                var c = function(t, e) {
                    e.tokens.length > 1 && t.eat("$");
                    var n = t.next();
                    return /['"({]/.test(n) ? (e.tokens[0] = s(n, "(" == n ? "quote" : "{" == n ? "def" : "string"),
                    h(t, e)) : (/\d/.test(n) || t.eatWhile(/\w/),
                    e.tokens.shift(),
                    "def")
                };
                function u(t) {
                    return function(e, n) {
                        return e.sol() && e.string == t && n.tokens.shift(),
                        e.skipToEnd(),
                        "string-2"
                    }
                }
                function h(t, e) {
                    return (e.tokens[0] || a)(t, e)
                }
                return {
                    startState: function() {
                        return {
                            tokens: []
                        }
                    },
                    token: function(t, e) {
                        return h(t, e)
                    },
                    closeBrackets: "()[]{}''\"\"``",
                    lineComment: "#",
                    fold: "brace"
                }
            }
            )),
            t.defineMIME("text/x-sh", "shell"),
            t.defineMIME("application/x-sh", "shell")
        }
        ))
    },
    23013: function(t) {
        t.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    },
    90260: function(t, e, n) {
        "use strict";
        var r, i, o, a = n(23013), s = n(19781), l = n(17854), c = n(60614), u = n(70111), h = n(92597), f = n(70648), d = n(66330), p = n(68880), g = n(98052), v = n(3070).f, m = n(47976), y = n(79518), A = n(27674), w = n(5112), b = n(69711), S = n(29909), C = S.enforce, E = S.get, x = l.Int8Array, k = x && x.prototype, L = l.Uint8ClampedArray, T = L && L.prototype, I = x && y(x), O = k && y(k), M = Object.prototype, N = l.TypeError, B = w("toStringTag"), R = b("TYPED_ARRAY_TAG"), P = "TypedArrayConstructor", D = a && !!A && "Opera" !== f(l.opera), F = !1, _ = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, U = {
            BigInt64Array: 8,
            BigUint64Array: 8
        }, W = function(t) {
            if (!u(t))
                return !1;
            var e = f(t);
            return "DataView" === e || h(_, e) || h(U, e)
        }, Q = function(t) {
            var e = y(t);
            if (u(e)) {
                var n = E(e);
                return n && h(n, P) ? n[P] : Q(e)
            }
        }, H = function(t) {
            if (!u(t))
                return !1;
            var e = f(t);
            return h(_, e) || h(U, e)
        }, J = function(t) {
            if (H(t))
                return t;
            throw N("Target is not a typed array")
        }, V = function(t) {
            if (c(t) && (!A || m(I, t)))
                return t;
            throw N(d(t) + " is not a typed array constructor")
        }, z = function(t, e, n, r) {
            if (s) {
                if (n)
                    for (var i in _) {
                        var o = l[i];
                        if (o && h(o.prototype, t))
                            try {
                                delete o.prototype[t]
                            } catch (a) {
                                try {
                                    o.prototype[t] = e
                                } catch (c) {}
                            }
                    }
                O[t] && !n || g(O, t, n ? e : D && k[t] || e, r)
            }
        }, K = function(t, e, n) {
            var r, i;
            if (s) {
                if (A) {
                    if (n)
                        for (r in _)
                            if (i = l[r],
                            i && h(i, t))
                                try {
                                    delete i[t]
                                } catch (o) {}
                    if (I[t] && !n)
                        return;
                    try {
                        return g(I, t, n ? e : D && I[t] || e)
                    } catch (o) {}
                }
                for (r in _)
                    i = l[r],
                    !i || i[t] && !n || g(i, t, e)
            }
        };
        for (r in _)
            i = l[r],
            o = i && i.prototype,
            o ? C(o)[P] = i : D = !1;
        for (r in U)
            i = l[r],
            o = i && i.prototype,
            o && (C(o)[P] = i);
        if ((!D || !c(I) || I === Function.prototype) && (I = function() {
            throw N("Incorrect invocation")
        }
        ,
        D))
            for (r in _)
                l[r] && A(l[r], I);
        if ((!D || !O || O === M) && (O = I.prototype,
        D))
            for (r in _)
                l[r] && A(l[r].prototype, O);
        if (D && y(T) !== O && A(T, O),
        s && !h(O, B))
            for (r in F = !0,
            v(O, B, {
                get: function() {
                    return u(this) ? this[R] : void 0
                }
            }),
            _)
                l[r] && p(l[r], R, r);
        t.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: D,
            TYPED_ARRAY_TAG: F && R,
            aTypedArray: J,
            aTypedArrayConstructor: V,
            exportTypedArrayMethod: z,
            exportTypedArrayStaticMethod: K,
            getTypedArrayConstructor: Q,
            isView: W,
            isTypedArray: H,
            TypedArray: I,
            TypedArrayPrototype: O
        }
    },
    13331: function(t, e, n) {
        "use strict";
        var r = n(17854)
          , i = n(1702)
          , o = n(19781)
          , a = n(23013)
          , s = n(76530)
          , l = n(68880)
          , c = n(89190)
          , u = n(47293)
          , h = n(25787)
          , f = n(19303)
          , d = n(17466)
          , p = n(57067)
          , g = n(11179)
          , v = n(79518)
          , m = n(27674)
          , y = n(8006).f
          , A = n(3070).f
          , w = n(21285)
          , b = n(41589)
          , S = n(58003)
          , C = n(29909)
          , E = s.PROPER
          , x = s.CONFIGURABLE
          , k = C.get
          , L = C.set
          , T = "ArrayBuffer"
          , I = "DataView"
          , O = "prototype"
          , M = "Wrong length"
          , N = "Wrong index"
          , B = r[T]
          , R = B
          , P = R && R[O]
          , D = r[I]
          , F = D && D[O]
          , _ = Object.prototype
          , U = r.Array
          , W = r.RangeError
          , Q = i(w)
          , H = i([].reverse)
          , J = g.pack
          , V = g.unpack
          , z = function(t) {
            return [255 & t]
        }
          , K = function(t) {
            return [255 & t, t >> 8 & 255]
        }
          , X = function(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }
          , G = function(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }
          , j = function(t) {
            return J(t, 23, 4)
        }
          , Z = function(t) {
            return J(t, 52, 8)
        }
          , Y = function(t, e) {
            A(t[O], e, {
                get: function() {
                    return k(this)[e]
                }
            })
        }
          , q = function(t, e, n, r) {
            var i = p(n)
              , o = k(t);
            if (i + e > o.byteLength)
                throw W(N);
            var a = k(o.buffer).bytes
              , s = i + o.byteOffset
              , l = b(a, s, s + e);
            return r ? l : H(l)
        }
          , $ = function(t, e, n, r, i, o) {
            var a = p(n)
              , s = k(t);
            if (a + e > s.byteLength)
                throw W(N);
            for (var l = k(s.buffer).bytes, c = a + s.byteOffset, u = r(+i), h = 0; h < e; h++)
                l[c + h] = u[o ? h : e - h - 1]
        };
        if (a) {
            var tt = E && B.name !== T;
            if (u((function() {
                B(1)
            }
            )) && u((function() {
                new B(-1)
            }
            )) && !u((function() {
                return new B,
                new B(1.5),
                new B(NaN),
                1 != B.length || tt && !x
            }
            )))
                tt && x && l(B, "name", T);
            else {
                R = function(t) {
                    return h(this, P),
                    new B(p(t))
                }
                ,
                R[O] = P;
                for (var et, nt = y(B), rt = 0; nt.length > rt; )
                    (et = nt[rt++])in R || l(R, et, B[et]);
                P.constructor = R
            }
            m && v(F) !== _ && m(F, _);
            var it = new D(new R(2))
              , ot = i(F.setInt8);
            it.setInt8(0, 2147483648),
            it.setInt8(1, 2147483649),
            !it.getInt8(0) && it.getInt8(1) || c(F, {
                setInt8: function(t, e) {
                    ot(this, t, e << 24 >> 24)
                },
                setUint8: function(t, e) {
                    ot(this, t, e << 24 >> 24)
                }
            }, {
                unsafe: !0
            })
        } else
            R = function(t) {
                h(this, P);
                var e = p(t);
                L(this, {
                    bytes: Q(U(e), 0),
                    byteLength: e
                }),
                o || (this.byteLength = e)
            }
            ,
            P = R[O],
            D = function(t, e, n) {
                h(this, F),
                h(t, P);
                var r = k(t).byteLength
                  , i = f(e);
                if (i < 0 || i > r)
                    throw W("Wrong offset");
                if (n = void 0 === n ? r - i : d(n),
                i + n > r)
                    throw W(M);
                L(this, {
                    buffer: t,
                    byteLength: n,
                    byteOffset: i
                }),
                o || (this.buffer = t,
                this.byteLength = n,
                this.byteOffset = i)
            }
            ,
            F = D[O],
            o && (Y(R, "byteLength"),
            Y(D, "buffer"),
            Y(D, "byteLength"),
            Y(D, "byteOffset")),
            c(F, {
                getInt8: function(t) {
                    return q(this, 1, t)[0] << 24 >> 24
                },
                getUint8: function(t) {
                    return q(this, 1, t)[0]
                },
                getInt16: function(t) {
                    var e = q(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
                    return (e[1] << 8 | e[0]) << 16 >> 16
                },
                getUint16: function(t) {
                    var e = q(this, 2, t, arguments.length > 1 ? arguments[1] : void 0);
                    return e[1] << 8 | e[0]
                },
                getInt32: function(t) {
                    return G(q(this, 4, t, arguments.length > 1 ? arguments[1] : void 0))
                },
                getUint32: function(t) {
                    return G(q(this, 4, t, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                },
                getFloat32: function(t) {
                    return V(q(this, 4, t, arguments.length > 1 ? arguments[1] : void 0), 23)
                },
                getFloat64: function(t) {
                    return V(q(this, 8, t, arguments.length > 1 ? arguments[1] : void 0), 52)
                },
                setInt8: function(t, e) {
                    $(this, 1, t, z, e)
                },
                setUint8: function(t, e) {
                    $(this, 1, t, z, e)
                },
                setInt16: function(t, e) {
                    $(this, 2, t, K, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint16: function(t, e) {
                    $(this, 2, t, K, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setInt32: function(t, e) {
                    $(this, 4, t, X, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint32: function(t, e) {
                    $(this, 4, t, X, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat32: function(t, e) {
                    $(this, 4, t, j, e, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat64: function(t, e) {
                    $(this, 8, t, Z, e, arguments.length > 2 ? arguments[2] : void 0)
                }
            });
        S(R, T),
        S(D, I),
        t.exports = {
            ArrayBuffer: R,
            DataView: D
        }
    },
    1048: function(t, e, n) {
        "use strict";
        var r = n(47908)
          , i = n(51400)
          , o = n(26244)
          , a = n(85117)
          , s = Math.min;
        t.exports = [].copyWithin || function(t, e) {
            var n = r(this)
              , l = o(n)
              , c = i(t, l)
              , u = i(e, l)
              , h = arguments.length > 2 ? arguments[2] : void 0
              , f = s((void 0 === h ? l : i(h, l)) - u, l - c)
              , d = 1;
            u < c && c < u + f && (d = -1,
            u += f - 1,
            c += f - 1);
            while (f-- > 0)
                u in n ? n[c] = n[u] : a(n, c),
                c += d,
                u += d;
            return n
        }
    },
    21285: function(t, e, n) {
        "use strict";
        var r = n(47908)
          , i = n(51400)
          , o = n(26244);
        t.exports = function(t) {
            var e = r(this)
              , n = o(e)
              , a = arguments.length
              , s = i(a > 1 ? arguments[1] : void 0, n)
              , l = a > 2 ? arguments[2] : void 0
              , c = void 0 === l ? n : i(l, n);
            while (c > s)
                e[s++] = t;
            return e
        }
    },
    97745: function(t, e, n) {
        var r = n(26244);
        t.exports = function(t, e) {
            var n = 0
              , i = r(e)
              , o = new t(i);
            while (i > n)
                o[n] = e[n++];
            return o
        }
    },
    9671: function(t, e, n) {
        var r = n(49974)
          , i = n(68361)
          , o = n(47908)
          , a = n(26244)
          , s = function(t) {
            var e = 1 == t;
            return function(n, s, l) {
                var c, u, h = o(n), f = i(h), d = r(s, l), p = a(f);
                while (p-- > 0)
                    if (c = f[p],
                    u = d(c, p, h),
                    u)
                        switch (t) {
                        case 0:
                            return c;
                        case 1:
                            return p
                        }
                return e ? -1 : void 0
            }
        };
        t.exports = {
            findLast: s(0),
            findLastIndex: s(1)
        }
    },
    86583: function(t, e, n) {
        "use strict";
        var r = n(22104)
          , i = n(45656)
          , o = n(19303)
          , a = n(26244)
          , s = n(9341)
          , l = Math.min
          , c = [].lastIndexOf
          , u = !!c && 1 / [1].lastIndexOf(1, -0) < 0
          , h = s("lastIndexOf")
          , f = u || !h;
        t.exports = f ? function(t) {
            if (u)
                return r(c, this, arguments) || 0;
            var e = i(this)
              , n = a(e)
              , s = n - 1;
            for (arguments.length > 1 && (s = l(s, o(arguments[1]))),
            s < 0 && (s = n + s); s >= 0; s--)
                if (s in e && e[s] === t)
                    return s || 0;
            return -1
        }
        : c
    },
    53671: function(t, e, n) {
        var r = n(19662)
          , i = n(47908)
          , o = n(68361)
          , a = n(26244)
          , s = TypeError
          , l = function(t) {
            return function(e, n, l, c) {
                r(n);
                var u = i(e)
                  , h = o(u)
                  , f = a(u)
                  , d = t ? f - 1 : 0
                  , p = t ? -1 : 1;
                if (l < 2)
                    while (1) {
                        if (d in h) {
                            c = h[d],
                            d += p;
                            break
                        }
                        if (d += p,
                        t ? d < 0 : f <= d)
                            throw s("Reduce of empty array with no initial value")
                    }
                for (; t ? d >= 0 : f > d; d += p)
                    d in h && (c = n(c, h[d], d, u));
                return c
            }
        };
        t.exports = {
            left: l(!1),
            right: l(!0)
        }
    },
    94362: function(t, e, n) {
        var r = n(41589)
          , i = Math.floor
          , o = function(t, e) {
            var n = t.length
              , l = i(n / 2);
            return n < 8 ? a(t, e) : s(t, o(r(t, 0, l), e), o(r(t, l), e), e)
        }
          , a = function(t, e) {
            var n, r, i = t.length, o = 1;
            while (o < i) {
                r = o,
                n = t[o];
                while (r && e(t[r - 1], n) > 0)
                    t[r] = t[--r];
                r !== o++ && (t[r] = n)
            }
            return t
        }
          , s = function(t, e, n, r) {
            var i = e.length
              , o = n.length
              , a = 0
              , s = 0;
            while (a < i || s < o)
                t[a + s] = a < i && s < o ? r(e[a], n[s]) <= 0 ? e[a++] : n[s++] : a < i ? e[a++] : n[s++];
            return t
        };
        t.exports = o
    },
    14170: function(t) {
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = {}, r = 0; r < 66; r++)
            n[e.charAt(r)] = r;
        t.exports = {
            itoc: e,
            ctoi: n
        }
    },
    38709: function(t, e, n) {
        "use strict";
        var r = n(19670)
          , i = n(92140)
          , o = TypeError;
        t.exports = function(t) {
            if (r(this),
            "string" === t || "default" === t)
                t = "string";
            else if ("number" !== t)
                throw o("Incorrect hint");
            return i(this, t)
        }
    },
    47045: function(t, e, n) {
        var r = n(56339)
          , i = n(3070);
        t.exports = function(t, e, n) {
            return n.get && r(n.get, e, {
                getter: !0
            }),
            n.set && r(n.set, e, {
                setter: !0
            }),
            i.f(t, e, n)
        }
    },
    93678: function(t) {
        t.exports = {
            IndexSizeError: {
                s: "INDEX_SIZE_ERR",
                c: 1,
                m: 1
            },
            DOMStringSizeError: {
                s: "DOMSTRING_SIZE_ERR",
                c: 2,
                m: 0
            },
            HierarchyRequestError: {
                s: "HIERARCHY_REQUEST_ERR",
                c: 3,
                m: 1
            },
            WrongDocumentError: {
                s: "WRONG_DOCUMENT_ERR",
                c: 4,
                m: 1
            },
            InvalidCharacterError: {
                s: "INVALID_CHARACTER_ERR",
                c: 5,
                m: 1
            },
            NoDataAllowedError: {
                s: "NO_DATA_ALLOWED_ERR",
                c: 6,
                m: 0
            },
            NoModificationAllowedError: {
                s: "NO_MODIFICATION_ALLOWED_ERR",
                c: 7,
                m: 1
            },
            NotFoundError: {
                s: "NOT_FOUND_ERR",
                c: 8,
                m: 1
            },
            NotSupportedError: {
                s: "NOT_SUPPORTED_ERR",
                c: 9,
                m: 1
            },
            InUseAttributeError: {
                s: "INUSE_ATTRIBUTE_ERR",
                c: 10,
                m: 1
            },
            InvalidStateError: {
                s: "INVALID_STATE_ERR",
                c: 11,
                m: 1
            },
            SyntaxError: {
                s: "SYNTAX_ERR",
                c: 12,
                m: 1
            },
            InvalidModificationError: {
                s: "INVALID_MODIFICATION_ERR",
                c: 13,
                m: 1
            },
            NamespaceError: {
                s: "NAMESPACE_ERR",
                c: 14,
                m: 1
            },
            InvalidAccessError: {
                s: "INVALID_ACCESS_ERR",
                c: 15,
                m: 1
            },
            ValidationError: {
                s: "VALIDATION_ERR",
                c: 16,
                m: 0
            },
            TypeMismatchError: {
                s: "TYPE_MISMATCH_ERR",
                c: 17,
                m: 1
            },
            SecurityError: {
                s: "SECURITY_ERR",
                c: 18,
                m: 1
            },
            NetworkError: {
                s: "NETWORK_ERR",
                c: 19,
                m: 1
            },
            AbortError: {
                s: "ABORT_ERR",
                c: 20,
                m: 1
            },
            URLMismatchError: {
                s: "URL_MISMATCH_ERR",
                c: 21,
                m: 1
            },
            QuotaExceededError: {
                s: "QUOTA_EXCEEDED_ERR",
                c: 22,
                m: 1
            },
            TimeoutError: {
                s: "TIMEOUT_ERR",
                c: 23,
                m: 1
            },
            InvalidNodeTypeError: {
                s: "INVALID_NODE_TYPE_ERR",
                c: 24,
                m: 1
            },
            DataCloneError: {
                s: "DATA_CLONE_ERR",
                c: 25,
                m: 1
            }
        }
    },
    68886: function(t, e, n) {
        var r = n(88113)
          , i = r.match(/firefox\/(\d+)/i);
        t.exports = !!i && +i[1]
    },
    30256: function(t, e, n) {
        var r = n(88113);
        t.exports = /MSIE|Trident/.test(r)
    },
    98008: function(t, e, n) {
        var r = n(88113)
          , i = r.match(/AppleWebKit\/(\d+)\./);
        t.exports = !!i && +i[1]
    },
    7762: function(t, e, n) {
        "use strict";
        var r = n(19781)
          , i = n(47293)
          , o = n(19670)
          , a = n(70030)
          , s = n(56277)
          , l = Error.prototype.toString
          , c = i((function() {
            if (r) {
                var t = a(Object.defineProperty({}, "name", {
                    get: function() {
                        return this === t
                    }
                }));
                if ("true" !== l.call(t))
                    return !0
            }
            return "2: 1" !== l.call({
                message: 1,
                name: 2
            }) || "Error" !== l.call({})
        }
        ));
        t.exports = c ? function() {
            var t = o(this)
              , e = s(t.name, "Error")
              , n = s(t.message);
            return e ? n ? e + ": " + n : e : n
        }
        : l
    },
    11179: function(t) {
        var e = Array
          , n = Math.abs
          , r = Math.pow
          , i = Math.floor
          , o = Math.log
          , a = Math.LN2
          , s = function(t, s, l) {
            var c, u, h, f = e(l), d = 8 * l - s - 1, p = (1 << d) - 1, g = p >> 1, v = 23 === s ? r(2, -24) - r(2, -77) : 0, m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0, y = 0;
            t = n(t),
            t != t || t === 1 / 0 ? (u = t != t ? 1 : 0,
            c = p) : (c = i(o(t) / a),
            h = r(2, -c),
            t * h < 1 && (c--,
            h *= 2),
            t += c + g >= 1 ? v / h : v * r(2, 1 - g),
            t * h >= 2 && (c++,
            h /= 2),
            c + g >= p ? (u = 0,
            c = p) : c + g >= 1 ? (u = (t * h - 1) * r(2, s),
            c += g) : (u = t * r(2, g - 1) * r(2, s),
            c = 0));
            while (s >= 8)
                f[y++] = 255 & u,
                u /= 256,
                s -= 8;
            c = c << s | u,
            d += s;
            while (d > 0)
                f[y++] = 255 & c,
                c /= 256,
                d -= 8;
            return f[--y] |= 128 * m,
            f
        }
          , l = function(t, e) {
            var n, i = t.length, o = 8 * i - e - 1, a = (1 << o) - 1, s = a >> 1, l = o - 7, c = i - 1, u = t[c--], h = 127 & u;
            u >>= 7;
            while (l > 0)
                h = 256 * h + t[c--],
                l -= 8;
            n = h & (1 << -l) - 1,
            h >>= -l,
            l += e;
            while (l > 0)
                n = 256 * n + t[c--],
                l -= 8;
            if (0 === h)
                h = 1 - s;
            else {
                if (h === a)
                    return n ? NaN : u ? -1 / 0 : 1 / 0;
                n += r(2, e),
                h -= s
            }
            return (u ? -1 : 1) * n * r(2, h - e)
        };
        t.exports = {
            pack: s,
            unpack: l
        }
    },
    44067: function(t, e, n) {
        var r = n(70648)
          , i = n(1702)
          , o = i("".slice);
        t.exports = function(t) {
            return "Big" === o(r(t), 0, 3)
        }
    },
    55988: function(t, e, n) {
        var r = n(70111)
          , i = Math.floor;
        t.exports = Number.isInteger || function(t) {
            return !r(t) && isFinite(t) && i(t) === t
        }
    },
    81150: function(t) {
        t.exports = Object.is || function(t, e) {
            return t === e ? 0 !== t || 1 / t === 1 / e : t != t && e != e
        }
    },
    64599: function(t, e, n) {
        var r = n(57593)
          , i = TypeError;
        t.exports = function(t) {
            var e = r(t, "number");
            if ("number" == typeof e)
                throw i("Can't convert number to bigint");
            return BigInt(e)
        }
    },
    57067: function(t, e, n) {
        var r = n(19303)
          , i = n(17466)
          , o = RangeError;
        t.exports = function(t) {
            if (void 0 === t)
                return 0;
            var e = r(t)
              , n = i(e);
            if (e !== n)
                throw o("Wrong length or index");
            return n
        }
    },
    84590: function(t, e, n) {
        var r = n(73002)
          , i = RangeError;
        t.exports = function(t, e) {
            var n = r(t);
            if (n % e)
                throw i("Wrong offset");
            return n
        }
    },
    73002: function(t, e, n) {
        var r = n(19303)
          , i = RangeError;
        t.exports = function(t) {
            var e = r(t);
            if (e < 0)
                throw i("The argument can't be less than 0");
            return e
        }
    },
    44038: function(t, e, n) {
        var r = n(35268);
        t.exports = function(t) {
            try {
                if (r)
                    return Function('return require("' + t + '")')()
            } catch (e) {}
        }
    },
    19843: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(17854)
          , o = n(46916)
          , a = n(19781)
          , s = n(63832)
          , l = n(90260)
          , c = n(13331)
          , u = n(25787)
          , h = n(79114)
          , f = n(68880)
          , d = n(55988)
          , p = n(17466)
          , g = n(57067)
          , v = n(84590)
          , m = n(34948)
          , y = n(92597)
          , A = n(70648)
          , w = n(70111)
          , b = n(52190)
          , S = n(70030)
          , C = n(47976)
          , E = n(27674)
          , x = n(8006).f
          , k = n(97321)
          , L = n(42092).forEach
          , T = n(96340)
          , I = n(3070)
          , O = n(31236)
          , M = n(29909)
          , N = n(79587)
          , B = M.get
          , R = M.set
          , P = M.enforce
          , D = I.f
          , F = O.f
          , _ = Math.round
          , U = i.RangeError
          , W = c.ArrayBuffer
          , Q = W.prototype
          , H = c.DataView
          , J = l.NATIVE_ARRAY_BUFFER_VIEWS
          , V = l.TYPED_ARRAY_TAG
          , z = l.TypedArray
          , K = l.TypedArrayPrototype
          , X = l.aTypedArrayConstructor
          , G = l.isTypedArray
          , j = "BYTES_PER_ELEMENT"
          , Z = "Wrong length"
          , Y = function(t, e) {
            X(t);
            var n = 0
              , r = e.length
              , i = new t(r);
            while (r > n)
                i[n] = e[n++];
            return i
        }
          , q = function(t, e) {
            D(t, e, {
                get: function() {
                    return B(this)[e]
                }
            })
        }
          , $ = function(t) {
            var e;
            return C(Q, t) || "ArrayBuffer" == (e = A(t)) || "SharedArrayBuffer" == e
        }
          , tt = function(t, e) {
            return G(t) && !b(e) && e in t && d(+e) && e >= 0
        }
          , et = function(t, e) {
            return e = m(e),
            tt(t, e) ? h(2, t[e]) : F(t, e)
        }
          , nt = function(t, e, n) {
            return e = m(e),
            !(tt(t, e) && w(n) && y(n, "value")) || y(n, "get") || y(n, "set") || n.configurable || y(n, "writable") && !n.writable || y(n, "enumerable") && !n.enumerable ? D(t, e, n) : (t[e] = n.value,
            t)
        };
        a ? (J || (O.f = et,
        I.f = nt,
        q(K, "buffer"),
        q(K, "byteOffset"),
        q(K, "byteLength"),
        q(K, "length")),
        r({
            target: "Object",
            stat: !0,
            forced: !J
        }, {
            getOwnPropertyDescriptor: et,
            defineProperty: nt
        }),
        t.exports = function(t, e, n) {
            var a = t.match(/\d+$/)[0] / 8
              , l = t + (n ? "Clamped" : "") + "Array"
              , c = "get" + t
              , h = "set" + t
              , d = i[l]
              , m = d
              , y = m && m.prototype
              , A = {}
              , b = function(t, e) {
                var n = B(t);
                return n.view[c](e * a + n.byteOffset, !0)
            }
              , C = function(t, e, r) {
                var i = B(t);
                n && (r = (r = _(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                i.view[h](e * a + i.byteOffset, r, !0)
            }
              , I = function(t, e) {
                D(t, e, {
                    get: function() {
                        return b(this, e)
                    },
                    set: function(t) {
                        return C(this, e, t)
                    },
                    enumerable: !0
                })
            };
            J ? s && (m = e((function(t, e, n, r) {
                return u(t, y),
                N(function() {
                    return w(e) ? $(e) ? void 0 !== r ? new d(e,v(n, a),r) : void 0 !== n ? new d(e,v(n, a)) : new d(e) : G(e) ? Y(m, e) : o(k, m, e) : new d(g(e))
                }(), t, m)
            }
            )),
            E && E(m, z),
            L(x(d), (function(t) {
                t in m || f(m, t, d[t])
            }
            )),
            m.prototype = y) : (m = e((function(t, e, n, r) {
                u(t, y);
                var i, s, l, c = 0, h = 0;
                if (w(e)) {
                    if (!$(e))
                        return G(e) ? Y(m, e) : o(k, m, e);
                    i = e,
                    h = v(n, a);
                    var f = e.byteLength;
                    if (void 0 === r) {
                        if (f % a)
                            throw U(Z);
                        if (s = f - h,
                        s < 0)
                            throw U(Z)
                    } else if (s = p(r) * a,
                    s + h > f)
                        throw U(Z);
                    l = s / a
                } else
                    l = g(e),
                    s = l * a,
                    i = new W(s);
                R(t, {
                    buffer: i,
                    byteOffset: h,
                    byteLength: s,
                    length: l,
                    view: new H(i)
                });
                while (c < l)
                    I(t, c++)
            }
            )),
            E && E(m, z),
            y = m.prototype = S(K)),
            y.constructor !== m && f(y, "constructor", m),
            P(y).TypedArrayConstructor = m,
            V && f(y, V, l);
            var O = m != d;
            A[l] = m,
            r({
                global: !0,
                constructor: !0,
                forced: O,
                sham: !J
            }, A),
            j in m || f(m, j, a),
            j in y || f(y, j, a),
            T(l)
        }
        ) : t.exports = function() {}
    },
    63832: function(t, e, n) {
        var r = n(17854)
          , i = n(47293)
          , o = n(17072)
          , a = n(90260).NATIVE_ARRAY_BUFFER_VIEWS
          , s = r.ArrayBuffer
          , l = r.Int8Array;
        t.exports = !a || !i((function() {
            l(1)
        }
        )) || !i((function() {
            new l(-1)
        }
        )) || !o((function(t) {
            new l,
            new l(null),
            new l(1.5),
            new l(t)
        }
        ), !0) || i((function() {
            return 1 !== new l(new s(2),1,void 0).length
        }
        ))
    },
    43074: function(t, e, n) {
        var r = n(97745)
          , i = n(66304);
        t.exports = function(t, e) {
            return r(i(t), e)
        }
    },
    97321: function(t, e, n) {
        var r = n(49974)
          , i = n(46916)
          , o = n(39483)
          , a = n(47908)
          , s = n(26244)
          , l = n(18554)
          , c = n(71246)
          , u = n(97659)
          , h = n(44067)
          , f = n(90260).aTypedArrayConstructor
          , d = n(64599);
        t.exports = function(t) {
            var e, n, p, g, v, m, y, A, w = o(this), b = a(t), S = arguments.length, C = S > 1 ? arguments[1] : void 0, E = void 0 !== C, x = c(b);
            if (x && !u(x)) {
                y = l(b, x),
                A = y.next,
                b = [];
                while (!(m = i(A, y)).done)
                    b.push(m.value)
            }
            for (E && S > 2 && (C = r(C, arguments[2])),
            n = s(b),
            p = new (f(w))(n),
            g = h(p),
            e = 0; n > e; e++)
                v = E ? C(b[e], e) : b[e],
                p[e] = g ? d(v) : +v;
            return p
        }
    },
    66304: function(t, e, n) {
        var r = n(90260)
          , i = n(36707)
          , o = r.aTypedArrayConstructor
          , a = r.getTypedArrayConstructor;
        t.exports = function(t) {
            return o(i(t, a(t)))
        }
    },
    18264: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(17854)
          , o = n(13331)
          , a = n(96340)
          , s = "ArrayBuffer"
          , l = o[s]
          , c = i[s];
        r({
            global: !0,
            constructor: !0,
            forced: c !== l
        }, {
            ArrayBuffer: l
        }),
        a(s)
    },
    76938: function(t, e, n) {
        var r = n(82109)
          , i = n(90260)
          , o = i.NATIVE_ARRAY_BUFFER_VIEWS;
        r({
            target: "ArrayBuffer",
            stat: !0,
            forced: !o
        }, {
            isView: i.isView
        })
    },
    39575: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(1702)
          , o = n(47293)
          , a = n(13331)
          , s = n(19670)
          , l = n(51400)
          , c = n(17466)
          , u = n(36707)
          , h = a.ArrayBuffer
          , f = a.DataView
          , d = f.prototype
          , p = i(h.prototype.slice)
          , g = i(d.getUint8)
          , v = i(d.setUint8)
          , m = o((function() {
            return !new h(2).slice(1, void 0).byteLength
        }
        ));
        r({
            target: "ArrayBuffer",
            proto: !0,
            unsafe: !0,
            forced: m
        }, {
            slice: function(t, e) {
                if (p && void 0 === e)
                    return p(s(this), t);
                var n = s(this).byteLength
                  , r = l(t, n)
                  , i = l(void 0 === e ? n : e, n)
                  , o = new (u(this, h))(c(i - r))
                  , a = new f(this)
                  , d = new f(o)
                  , m = 0;
                while (r < i)
                    v(d, m++, g(a, r++));
                return o
            }
        })
    },
    50545: function(t, e, n) {
        var r = n(82109)
          , i = n(1048)
          , o = n(51223);
        r({
            target: "Array",
            proto: !0
        }, {
            copyWithin: i
        }),
        o("copyWithin")
    },
    43290: function(t, e, n) {
        var r = n(82109)
          , i = n(21285)
          , o = n(51223);
        r({
            target: "Array",
            proto: !0
        }, {
            fill: i
        }),
        o("fill")
    },
    69826: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(42092).find
          , o = n(51223)
          , a = "find"
          , s = !0;
        a in [] && Array(1)[a]((function() {
            s = !1
        }
        )),
        r({
            target: "Array",
            proto: !0,
            forced: s
        }, {
            find: function(t) {
                return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        o(a)
    },
    2707: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(1702)
          , o = n(19662)
          , a = n(47908)
          , s = n(26244)
          , l = n(85117)
          , c = n(41340)
          , u = n(47293)
          , h = n(94362)
          , f = n(9341)
          , d = n(68886)
          , p = n(30256)
          , g = n(7392)
          , v = n(98008)
          , m = []
          , y = i(m.sort)
          , A = i(m.push)
          , w = u((function() {
            m.sort(void 0)
        }
        ))
          , b = u((function() {
            m.sort(null)
        }
        ))
          , S = f("sort")
          , C = !u((function() {
            if (g)
                return g < 70;
            if (!(d && d > 3)) {
                if (p)
                    return !0;
                if (v)
                    return v < 603;
                var t, e, n, r, i = "";
                for (t = 65; t < 76; t++) {
                    switch (e = String.fromCharCode(t),
                    t) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                        n = 3;
                        break;
                    case 68:
                    case 71:
                        n = 4;
                        break;
                    default:
                        n = 2
                    }
                    for (r = 0; r < 47; r++)
                        m.push({
                            k: e + r,
                            v: n
                        })
                }
                for (m.sort((function(t, e) {
                    return e.v - t.v
                }
                )),
                r = 0; r < m.length; r++)
                    e = m[r].k.charAt(0),
                    i.charAt(i.length - 1) !== e && (i += e);
                return "DGBEFHACIJK" !== i
            }
        }
        ))
          , E = w || !b || !S || !C
          , x = function(t) {
            return function(e, n) {
                return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : c(e) > c(n) ? 1 : -1
            }
        };
        r({
            target: "Array",
            proto: !0,
            forced: E
        }, {
            sort: function(t) {
                void 0 !== t && o(t);
                var e = a(this);
                if (C)
                    return void 0 === t ? y(e) : y(e, t);
                var n, r, i = [], c = s(e);
                for (r = 0; r < c; r++)
                    r in e && A(i, e[r]);
                h(i, x(t)),
                n = s(i),
                r = 0;
                while (r < n)
                    e[r] = i[r++];
                while (r < c)
                    l(e, r++);
                return e
            }
        })
    },
    38706: function(t, e, n) {
        var r = n(96340);
        r("Array")
    },
    96078: function(t, e, n) {
        var r = n(92597)
          , i = n(98052)
          , o = n(38709)
          , a = n(5112)
          , s = a("toPrimitive")
          , l = Date.prototype;
        r(l, s) || i(l, s, o)
    },
    35837: function(t, e, n) {
        var r = n(82109)
          , i = n(17854);
        r({
            global: !0,
            forced: i.globalThis !== i
        }, {
            globalThis: i
        })
    },
    73706: function(t, e, n) {
        var r = n(17854)
          , i = n(58003);
        i(r.JSON, "JSON", !0)
    },
    10408: function(t, e, n) {
        var r = n(58003);
        r(Math, "Math", !0)
    },
    44048: function(t, e, n) {
        var r = n(82109);
        r({
            target: "Number",
            stat: !0
        }, {
            isNaN: function(t) {
                return t != t
            }
        })
    },
    78285: function(t, e, n) {
        var r = n(82109)
          , i = n(55988)
          , o = Math.abs;
        r({
            target: "Number",
            stat: !0
        }, {
            isSafeInteger: function(t) {
                return i(t) && o(t) <= 9007199254740991
            }
        })
    },
    67987: function(t, e, n) {
        "use strict";
        var r = n(19781)
          , i = n(47045)
          , o = n(70111)
          , a = n(47908)
          , s = n(84488)
          , l = Object.getPrototypeOf
          , c = Object.setPrototypeOf
          , u = Object.prototype
          , h = "__proto__";
        if (r && l && c && !(h in u))
            try {
                i(u, h, {
                    configurable: !0,
                    get: function() {
                        return l(a(this))
                    },
                    set: function(t) {
                        var e = s(this);
                        (o(t) || null === t) && o(e) && c(e, t)
                    }
                })
            } catch (f) {}
    },
    24603: function(t, e, n) {
        var r = n(19781)
          , i = n(17854)
          , o = n(1702)
          , a = n(54705)
          , s = n(79587)
          , l = n(68880)
          , c = n(8006).f
          , u = n(47976)
          , h = n(47850)
          , f = n(41340)
          , d = n(34706)
          , p = n(52999)
          , g = n(2626)
          , v = n(98052)
          , m = n(47293)
          , y = n(92597)
          , A = n(29909).enforce
          , w = n(96340)
          , b = n(5112)
          , S = n(9441)
          , C = n(38173)
          , E = b("match")
          , x = i.RegExp
          , k = x.prototype
          , L = i.SyntaxError
          , T = o(k.exec)
          , I = o("".charAt)
          , O = o("".replace)
          , M = o("".indexOf)
          , N = o("".slice)
          , B = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
          , R = /a/g
          , P = /a/g
          , D = new x(R) !== R
          , F = p.MISSED_STICKY
          , _ = p.UNSUPPORTED_Y
          , U = r && (!D || F || S || C || m((function() {
            return P[E] = !1,
            x(R) != R || x(P) == P || "/a/i" != x(R, "i")
        }
        )))
          , W = function(t) {
            for (var e, n = t.length, r = 0, i = "", o = !1; r <= n; r++)
                e = I(t, r),
                "\\" !== e ? o || "." !== e ? ("[" === e ? o = !0 : "]" === e && (o = !1),
                i += e) : i += "[\\s\\S]" : i += e + I(t, ++r);
            return i
        }
          , Q = function(t) {
            for (var e, n = t.length, r = 0, i = "", o = [], a = {}, s = !1, l = !1, c = 0, u = ""; r <= n; r++) {
                if (e = I(t, r),
                "\\" === e)
                    e += I(t, ++r);
                else if ("]" === e)
                    s = !1;
                else if (!s)
                    switch (!0) {
                    case "[" === e:
                        s = !0;
                        break;
                    case "(" === e:
                        T(B, N(t, r + 1)) && (r += 2,
                        l = !0),
                        i += e,
                        c++;
                        continue;
                    case ">" === e && l:
                        if ("" === u || y(a, u))
                            throw new L("Invalid capture group name");
                        a[u] = !0,
                        o[o.length] = [u, c],
                        l = !1,
                        u = "";
                        continue
                    }
                l ? u += e : i += e
            }
            return [i, o]
        };
        if (a("RegExp", U)) {
            for (var H = function(t, e) {
                var n, r, i, o, a, c, p = u(k, this), g = h(t), v = void 0 === e, m = [], y = t;
                if (!p && g && v && t.constructor === H)
                    return t;
                if ((g || u(k, t)) && (t = t.source,
                v && (e = d(y))),
                t = void 0 === t ? "" : f(t),
                e = void 0 === e ? "" : f(e),
                y = t,
                S && "dotAll"in R && (r = !!e && M(e, "s") > -1,
                r && (e = O(e, /s/g, ""))),
                n = e,
                F && "sticky"in R && (i = !!e && M(e, "y") > -1,
                i && _ && (e = O(e, /y/g, ""))),
                C && (o = Q(t),
                t = o[0],
                m = o[1]),
                a = s(x(t, e), p ? this : k, H),
                (r || i || m.length) && (c = A(a),
                r && (c.dotAll = !0,
                c.raw = H(W(t), n)),
                i && (c.sticky = !0),
                m.length && (c.groups = m)),
                t !== y)
                    try {
                        l(a, "source", "" === y ? "(?:)" : y)
                    } catch (w) {}
                return a
            }, J = c(x), V = 0; J.length > V; )
                g(H, x, J[V++]);
            k.constructor = H,
            H.prototype = k,
            v(i, "RegExp", H, {
                constructor: !0
            })
        }
        w("RegExp")
    },
    28450: function(t, e, n) {
        var r = n(19781)
          , i = n(9441)
          , o = n(84326)
          , a = n(47045)
          , s = n(29909).get
          , l = RegExp.prototype
          , c = TypeError;
        r && i && a(l, "dotAll", {
            configurable: !0,
            get: function() {
                if (this !== l) {
                    if ("RegExp" === o(this))
                        return !!s(this).dotAll;
                    throw c("Incompatible receiver, RegExp required")
                }
            }
        })
    },
    88386: function(t, e, n) {
        var r = n(19781)
          , i = n(52999).MISSED_STICKY
          , o = n(84326)
          , a = n(47045)
          , s = n(29909).get
          , l = RegExp.prototype
          , c = TypeError;
        r && i && a(l, "sticky", {
            configurable: !0,
            get: function() {
                if (this !== l) {
                    if ("RegExp" === o(this))
                        return !!s(this).sticky;
                    throw c("Incompatible receiver, RegExp required")
                }
            }
        })
    },
    37227: function(t, e, n) {
        "use strict";
        var r = n(77710)
          , i = n(95631);
        r("Set", (function(t) {
            return function() {
                return t(this, arguments.length ? arguments[0] : void 0)
            }
        }
        ), i)
    },
    70189: function(t, e, n) {
        n(37227)
    },
    79841: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(28710).codeAt;
        r({
            target: "String",
            proto: !0
        }, {
            codePointAt: function(t) {
                return i(this, t)
            }
        })
    },
    64765: function(t, e, n) {
        "use strict";
        var r = n(46916)
          , i = n(27007)
          , o = n(19670)
          , a = n(68554)
          , s = n(84488)
          , l = n(81150)
          , c = n(41340)
          , u = n(58173)
          , h = n(97651);
        i("search", (function(t, e, n) {
            return [function(e) {
                var n = s(this)
                  , i = a(e) ? void 0 : u(e, t);
                return i ? r(i, e, n) : new RegExp(e)[t](c(n))
            }
            , function(t) {
                var r = o(this)
                  , i = c(t)
                  , a = n(e, r, i);
                if (a.done)
                    return a.value;
                var s = r.lastIndex;
                l(s, 0) || (r.lastIndex = 0);
                var u = h(r, i);
                return l(r.lastIndex, s) || (r.lastIndex = s),
                null === u ? -1 : u.index
            }
            ]
        }
        ))
    },
    72443: function(t, e, n) {
        var r = n(26800);
        r("asyncIterator")
    },
    6982: function(t, e, n) {
        var r = n(26800);
        r("species")
    },
    96649: function(t, e, n) {
        var r = n(26800)
          , i = n(56532);
        r("toPrimitive"),
        i()
    },
    39341: function(t, e, n) {
        var r = n(35005)
          , i = n(26800)
          , o = n(58003);
        i("toStringTag"),
        o(r("Symbol"), "Symbol")
    },
    48675: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(26244)
          , o = n(19303)
          , a = r.aTypedArray
          , s = r.exportTypedArrayMethod;
        s("at", (function(t) {
            var e = a(this)
              , n = i(e)
              , r = o(t)
              , s = r >= 0 ? r : n + r;
            return s < 0 || s >= n ? void 0 : e[s]
        }
        ))
    },
    92990: function(t, e, n) {
        "use strict";
        var r = n(1702)
          , i = n(90260)
          , o = n(1048)
          , a = r(o)
          , s = i.aTypedArray
          , l = i.exportTypedArrayMethod;
        l("copyWithin", (function(t, e) {
            return a(s(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
        }
        ))
    },
    18927: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(42092).every
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("every", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    33105: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(21285)
          , o = n(64599)
          , a = n(70648)
          , s = n(46916)
          , l = n(1702)
          , c = n(47293)
          , u = r.aTypedArray
          , h = r.exportTypedArrayMethod
          , f = l("".slice)
          , d = c((function() {
            var t = 0;
            return new Int8Array(2).fill({
                valueOf: function() {
                    return t++
                }
            }),
            1 !== t
        }
        ));
        h("fill", (function(t) {
            var e = arguments.length;
            u(this);
            var n = "Big" === f(a(this), 0, 3) ? o(t) : +t;
            return s(i, this, n, e > 1 ? arguments[1] : void 0, e > 2 ? arguments[2] : void 0)
        }
        ), d)
    },
    35035: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(42092).filter
          , o = n(43074)
          , a = r.aTypedArray
          , s = r.exportTypedArrayMethod;
        s("filter", (function(t) {
            var e = i(a(this), t, arguments.length > 1 ? arguments[1] : void 0);
            return o(this, e)
        }
        ))
    },
    7174: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(42092).findIndex
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("findIndex", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    14590: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(9671).findLastIndex
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("findLastIndex", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    63408: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(9671).findLast
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("findLast", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    74345: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(42092).find
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("find", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    32846: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(42092).forEach
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("forEach", (function(t) {
            i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    44731: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(41318).includes
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("includes", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    77209: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(41318).indexOf
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("indexOf", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    96319: function(t, e, n) {
        "use strict";
        var r = n(17854)
          , i = n(47293)
          , o = n(1702)
          , a = n(90260)
          , s = n(66992)
          , l = n(5112)
          , c = l("iterator")
          , u = r.Uint8Array
          , h = o(s.values)
          , f = o(s.keys)
          , d = o(s.entries)
          , p = a.aTypedArray
          , g = a.exportTypedArrayMethod
          , v = u && u.prototype
          , m = !i((function() {
            v[c].call([1])
        }
        ))
          , y = !!v && v.values && v[c] === v.values && "values" === v.values.name
          , A = function() {
            return h(p(this))
        };
        g("entries", (function() {
            return d(p(this))
        }
        ), m),
        g("keys", (function() {
            return f(p(this))
        }
        ), m),
        g("values", A, m || !y, {
            name: "values"
        }),
        g(c, A, m || !y, {
            name: "values"
        })
    },
    58867: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(1702)
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod
          , s = i([].join);
        a("join", (function(t) {
            return s(o(this), t)
        }
        ))
    },
    37789: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(22104)
          , o = n(86583)
          , a = r.aTypedArray
          , s = r.exportTypedArrayMethod;
        s("lastIndexOf", (function(t) {
            var e = arguments.length;
            return i(o, a(this), e > 1 ? [t, arguments[1]] : [t])
        }
        ))
    },
    33739: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(42092).map
          , o = n(66304)
          , a = r.aTypedArray
          , s = r.exportTypedArrayMethod;
        s("map", (function(t) {
            return i(a(this), t, arguments.length > 1 ? arguments[1] : void 0, (function(t, e) {
                return new (o(t))(e)
            }
            ))
        }
        ))
    },
    14483: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(53671).right
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("reduceRight", (function(t) {
            var e = arguments.length;
            return i(o(this), t, e, e > 1 ? arguments[1] : void 0)
        }
        ))
    },
    29368: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(53671).left
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("reduce", (function(t) {
            var e = arguments.length;
            return i(o(this), t, e, e > 1 ? arguments[1] : void 0)
        }
        ))
    },
    12056: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = r.aTypedArray
          , o = r.exportTypedArrayMethod
          , a = Math.floor;
        o("reverse", (function() {
            var t, e = this, n = i(e).length, r = a(n / 2), o = 0;
            while (o < r)
                t = e[o],
                e[o++] = e[--n],
                e[n] = t;
            return e
        }
        ))
    },
    3462: function(t, e, n) {
        "use strict";
        var r = n(17854)
          , i = n(46916)
          , o = n(90260)
          , a = n(26244)
          , s = n(84590)
          , l = n(47908)
          , c = n(47293)
          , u = r.RangeError
          , h = r.Int8Array
          , f = h && h.prototype
          , d = f && f.set
          , p = o.aTypedArray
          , g = o.exportTypedArrayMethod
          , v = !c((function() {
            var t = new Uint8ClampedArray(2);
            return i(d, t, {
                length: 1,
                0: 3
            }, 1),
            3 !== t[1]
        }
        ))
          , m = v && o.NATIVE_ARRAY_BUFFER_VIEWS && c((function() {
            var t = new h(2);
            return t.set(1),
            t.set("2", 1),
            0 !== t[0] || 2 !== t[1]
        }
        ));
        g("set", (function(t) {
            p(this);
            var e = s(arguments.length > 1 ? arguments[1] : void 0, 1)
              , n = l(t);
            if (v)
                return i(d, this, n, e);
            var r = this.length
              , o = a(n)
              , c = 0;
            if (o + e > r)
                throw u("Wrong length");
            while (c < o)
                this[e + c] = n[c++]
        }
        ), !v || m)
    },
    30678: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(66304)
          , o = n(47293)
          , a = n(50206)
          , s = r.aTypedArray
          , l = r.exportTypedArrayMethod
          , c = o((function() {
            new Int8Array(1).slice()
        }
        ));
        l("slice", (function(t, e) {
            var n = a(s(this), t, e)
              , r = i(this)
              , o = 0
              , l = n.length
              , c = new r(l);
            while (l > o)
                c[o] = n[o++];
            return c
        }
        ), c)
    },
    27462: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(42092).some
          , o = r.aTypedArray
          , a = r.exportTypedArrayMethod;
        a("some", (function(t) {
            return i(o(this), t, arguments.length > 1 ? arguments[1] : void 0)
        }
        ))
    },
    33824: function(t, e, n) {
        "use strict";
        var r = n(17854)
          , i = n(1702)
          , o = n(47293)
          , a = n(19662)
          , s = n(94362)
          , l = n(90260)
          , c = n(68886)
          , u = n(30256)
          , h = n(7392)
          , f = n(98008)
          , d = l.aTypedArray
          , p = l.exportTypedArrayMethod
          , g = r.Uint16Array
          , v = g && i(g.prototype.sort)
          , m = !!v && !(o((function() {
            v(new g(2), null)
        }
        )) && o((function() {
            v(new g(2), {})
        }
        )))
          , y = !!v && !o((function() {
            if (h)
                return h < 74;
            if (c)
                return c < 67;
            if (u)
                return !0;
            if (f)
                return f < 602;
            var t, e, n = new g(516), r = Array(516);
            for (t = 0; t < 516; t++)
                e = t % 4,
                n[t] = 515 - t,
                r[t] = t - 2 * e + 3;
            for (v(n, (function(t, e) {
                return (t / 4 | 0) - (e / 4 | 0)
            }
            )),
            t = 0; t < 516; t++)
                if (n[t] !== r[t])
                    return !0
        }
        ))
          , A = function(t) {
            return function(e, n) {
                return void 0 !== t ? +t(e, n) || 0 : n !== n ? -1 : e !== e ? 1 : 0 === e && 0 === n ? 1 / e > 0 && 1 / n < 0 ? 1 : -1 : e > n
            }
        };
        p("sort", (function(t) {
            return void 0 !== t && a(t),
            y ? v(this, t) : s(d(this), A(t))
        }
        ), !y || m)
    },
    55021: function(t, e, n) {
        "use strict";
        var r = n(90260)
          , i = n(17466)
          , o = n(51400)
          , a = n(66304)
          , s = r.aTypedArray
          , l = r.exportTypedArrayMethod;
        l("subarray", (function(t, e) {
            var n = s(this)
              , r = n.length
              , l = o(t, r)
              , c = a(n);
            return new c(n.buffer,n.byteOffset + l * n.BYTES_PER_ELEMENT,i((void 0 === e ? r : o(e, r)) - l))
        }
        ))
    },
    12974: function(t, e, n) {
        "use strict";
        var r = n(17854)
          , i = n(22104)
          , o = n(90260)
          , a = n(47293)
          , s = n(50206)
          , l = r.Int8Array
          , c = o.aTypedArray
          , u = o.exportTypedArrayMethod
          , h = [].toLocaleString
          , f = !!l && a((function() {
            h.call(new l(1))
        }
        ))
          , d = a((function() {
            return [1, 2].toLocaleString() != new l([1, 2]).toLocaleString()
        }
        )) || !a((function() {
            l.prototype.toLocaleString.call([1, 2])
        }
        ));
        u("toLocaleString", (function() {
            return i(h, f ? s(c(this)) : c(this), s(arguments))
        }
        ), d)
    },
    15016: function(t, e, n) {
        "use strict";
        var r = n(90260).exportTypedArrayMethod
          , i = n(47293)
          , o = n(17854)
          , a = n(1702)
          , s = o.Uint8Array
          , l = s && s.prototype || {}
          , c = [].toString
          , u = a([].join);
        i((function() {
            c.call({})
        }
        )) && (c = function() {
            return u(this)
        }
        );
        var h = l.toString != c;
        r("toString", c, h)
    },
    82472: function(t, e, n) {
        var r = n(19843);
        r("Uint8", (function(t) {
            return function(e, n, r) {
                return t(this, e, n, r)
            }
        }
        ))
    },
    27479: function(t, e, n) {
        var r = n(82109)
          , i = n(35005)
          , o = n(1702)
          , a = n(47293)
          , s = n(41340)
          , l = n(48053)
          , c = n(14170).itoc
          , u = i("btoa")
          , h = o("".charAt)
          , f = o("".charCodeAt)
          , d = !!u && !a((function() {
            u()
        }
        ))
          , p = !!u && a((function() {
            return "bnVsbA==" !== u(null)
        }
        ))
          , g = !!u && 1 !== u.length;
        r({
            global: !0,
            enumerable: !0,
            forced: d || p || g
        }, {
            btoa: function(t) {
                if (l(arguments.length, 1),
                d || p || g)
                    return u(s(t));
                var e, n, r = s(t), o = "", a = 0, v = c;
                while (h(r, a) || (v = "=",
                a % 1)) {
                    if (n = f(r, a += 3 / 4),
                    n > 255)
                        throw new (i("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");
                    e = e << 8 | n,
                    o += h(v, 63 & e >> 8 - a % 1 * 8)
                }
                return o
            }
        })
    },
    87714: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(44038)
          , o = n(35005)
          , a = n(47293)
          , s = n(70030)
          , l = n(79114)
          , c = n(3070).f
          , u = n(98052)
          , h = n(47045)
          , f = n(92597)
          , d = n(25787)
          , p = n(19670)
          , g = n(7762)
          , v = n(56277)
          , m = n(93678)
          , y = n(11060)
          , A = n(29909)
          , w = n(19781)
          , b = n(31913)
          , S = "DOMException"
          , C = "DATA_CLONE_ERR"
          , E = o("Error")
          , x = o(S) || function() {
            try {
                var t = o("MessageChannel") || i("worker_threads").MessageChannel;
                (new t).port1.postMessage(new WeakMap)
            } catch (e) {
                if (e.name == C && 25 == e.code)
                    return e.constructor
            }
        }()
          , k = x && x.prototype
          , L = E.prototype
          , T = A.set
          , I = A.getterFor(S)
          , O = "stack"in E(S)
          , M = function(t) {
            return f(m, t) && m[t].m ? m[t].c : 0
        }
          , N = function() {
            d(this, B);
            var t = arguments.length
              , e = v(t < 1 ? void 0 : arguments[0])
              , n = v(t < 2 ? void 0 : arguments[1], "Error")
              , r = M(n);
            if (T(this, {
                type: S,
                name: n,
                message: e,
                code: r
            }),
            w || (this.name = n,
            this.message = e,
            this.code = r),
            O) {
                var i = E(e);
                i.name = S,
                c(this, "stack", l(1, y(i.stack, 1)))
            }
        }
          , B = N.prototype = s(L)
          , R = function(t) {
            return {
                enumerable: !0,
                configurable: !0,
                get: t
            }
        }
          , P = function(t) {
            return R((function() {
                return I(this)[t]
            }
            ))
        };
        w && (h(B, "code", P("code")),
        h(B, "message", P("message")),
        h(B, "name", P("name"))),
        c(B, "constructor", l(1, N));
        var D = a((function() {
            return !(new x instanceof E)
        }
        ))
          , F = D || a((function() {
            return L.toString !== g || "2: 1" !== String(new x(1,2))
        }
        ))
          , _ = D || a((function() {
            return 25 !== new x(1,"DataCloneError").code
        }
        ))
          , U = D || 25 !== x[C] || 25 !== k[C]
          , W = b ? F || _ || U : D;
        r({
            global: !0,
            constructor: !0,
            forced: W
        }, {
            DOMException: W ? N : x
        });
        var Q = o(S)
          , H = Q.prototype;
        for (var J in F && (b || x === Q) && u(H, "toString", g),
        _ && w && x === Q && h(H, "code", R((function() {
            return M(p(this).name)
        }
        ))),
        m)
            if (f(m, J)) {
                var V = m[J]
                  , z = V.s
                  , K = l(6, V.c);
                f(Q, z) || c(Q, z, K),
                f(H, z) || c(H, z, K)
            }
    },
    82801: function(t, e, n) {
        "use strict";
        var r = n(82109)
          , i = n(17854)
          , o = n(35005)
          , a = n(79114)
          , s = n(3070).f
          , l = n(92597)
          , c = n(25787)
          , u = n(79587)
          , h = n(56277)
          , f = n(93678)
          , d = n(11060)
          , p = n(19781)
          , g = n(31913)
          , v = "DOMException"
          , m = o("Error")
          , y = o(v)
          , A = function() {
            c(this, w);
            var t = arguments.length
              , e = h(t < 1 ? void 0 : arguments[0])
              , n = h(t < 2 ? void 0 : arguments[1], "Error")
              , r = new y(e,n)
              , i = m(e);
            return i.name = v,
            s(r, "stack", a(1, d(i.stack, 1))),
            u(r, this, A),
            r
        }
          , w = A.prototype = y.prototype
          , b = "stack"in m(v)
          , S = "stack"in new y(1,2)
          , C = y && p && Object.getOwnPropertyDescriptor(i, v)
          , E = !!C && !(C.writable && C.configurable)
          , x = b && !E && !S;
        r({
            global: !0,
            constructor: !0,
            forced: g || x
        }, {
            DOMException: x ? A : y
        });
        var k = o(v)
          , L = k.prototype;
        if (L.constructor !== k)
            for (var T in g || s(L, "constructor", a(1, k)),
            f)
                if (l(f, T)) {
                    var I = f[T]
                      , O = I.s;
                    l(k, O) || s(k, O, a(6, I.c))
                }
    },
    1174: function(t, e, n) {
        var r = n(35005)
          , i = n(58003)
          , o = "DOMException";
        i(r(o), o)
    },
    27484: function(t) {
        !function(e, n) {
            t.exports = n()
        }(0, (function() {
            "use strict";
            var t = 1e3
              , e = 6e4
              , n = 36e5
              , r = "millisecond"
              , i = "second"
              , o = "minute"
              , a = "hour"
              , s = "day"
              , l = "week"
              , c = "month"
              , u = "quarter"
              , h = "year"
              , f = "date"
              , d = "Invalid Date"
              , p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , v = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(t) {
                    var e = ["th", "st", "nd", "rd"]
                      , n = t % 100;
                    return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]"
                }
            }
              , m = function(t, e, n) {
                var r = String(t);
                return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
            }
              , y = {
                s: m,
                z: function(t) {
                    var e = -t.utcOffset()
                      , n = Math.abs(e)
                      , r = Math.floor(n / 60)
                      , i = n % 60;
                    return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0")
                },
                m: function t(e, n) {
                    if (e.date() < n.date())
                        return -t(n, e);
                    var r = 12 * (n.year() - e.year()) + (n.month() - e.month())
                      , i = e.clone().add(r, c)
                      , o = n - i < 0
                      , a = e.clone().add(r + (o ? -1 : 1), c);
                    return +(-(r + (n - i) / (o ? i - a : a - i)) || 0)
                },
                a: function(t) {
                    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                },
                p: function(t) {
                    return {
                        M: c,
                        y: h,
                        w: l,
                        d: s,
                        D: f,
                        h: a,
                        m: o,
                        s: i,
                        ms: r,
                        Q: u
                    }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                },
                u: function(t) {
                    return void 0 === t
                }
            }
              , A = "en"
              , w = {};
            w[A] = v;
            var b = function(t) {
                return t instanceof x
            }
              , S = function t(e, n, r) {
                var i;
                if (!e)
                    return A;
                if ("string" == typeof e) {
                    var o = e.toLowerCase();
                    w[o] && (i = o),
                    n && (w[o] = n,
                    i = o);
                    var a = e.split("-");
                    if (!i && a.length > 1)
                        return t(a[0])
                } else {
                    var s = e.name;
                    w[s] = e,
                    i = s
                }
                return !r && i && (A = i),
                i || !r && A
            }
              , C = function(t, e) {
                if (b(t))
                    return t.clone();
                var n = "object" == typeof e ? e : {};
                return n.date = t,
                n.args = arguments,
                new x(n)
            }
              , E = y;
            E.l = S,
            E.i = b,
            E.w = function(t, e) {
                return C(t, {
                    locale: e.$L,
                    utc: e.$u,
                    x: e.$x,
                    $offset: e.$offset
                })
            }
            ;
            var x = function() {
                function v(t) {
                    this.$L = S(t.locale, null, !0),
                    this.parse(t)
                }
                var m = v.prototype;
                return m.parse = function(t) {
                    this.$d = function(t) {
                        var e = t.date
                          , n = t.utc;
                        if (null === e)
                            return new Date(NaN);
                        if (E.u(e))
                            return new Date;
                        if (e instanceof Date)
                            return new Date(e);
                        if ("string" == typeof e && !/Z$/i.test(e)) {
                            var r = e.match(p);
                            if (r) {
                                var i = r[2] - 1 || 0
                                  , o = (r[7] || "0").substring(0, 3);
                                return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o)) : new Date(r[1],i,r[3] || 1,r[4] || 0,r[5] || 0,r[6] || 0,o)
                            }
                        }
                        return new Date(e)
                    }(t),
                    this.$x = t.x || {},
                    this.init()
                }
                ,
                m.init = function() {
                    var t = this.$d;
                    this.$y = t.getFullYear(),
                    this.$M = t.getMonth(),
                    this.$D = t.getDate(),
                    this.$W = t.getDay(),
                    this.$H = t.getHours(),
                    this.$m = t.getMinutes(),
                    this.$s = t.getSeconds(),
                    this.$ms = t.getMilliseconds()
                }
                ,
                m.$utils = function() {
                    return E
                }
                ,
                m.isValid = function() {
                    return !(this.$d.toString() === d)
                }
                ,
                m.isSame = function(t, e) {
                    var n = C(t);
                    return this.startOf(e) <= n && n <= this.endOf(e)
                }
                ,
                m.isAfter = function(t, e) {
                    return C(t) < this.startOf(e)
                }
                ,
                m.isBefore = function(t, e) {
                    return this.endOf(e) < C(t)
                }
                ,
                m.$g = function(t, e, n) {
                    return E.u(t) ? this[e] : this.set(n, t)
                }
                ,
                m.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                m.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                m.startOf = function(t, e) {
                    var n = this
                      , r = !!E.u(e) || e
                      , u = E.p(t)
                      , d = function(t, e) {
                        var i = E.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y,e,t), n);
                        return r ? i : i.endOf(s)
                    }
                      , p = function(t, e) {
                        return E.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                    }
                      , g = this.$W
                      , v = this.$M
                      , m = this.$D
                      , y = "set" + (this.$u ? "UTC" : "");
                    switch (u) {
                    case h:
                        return r ? d(1, 0) : d(31, 11);
                    case c:
                        return r ? d(1, v) : d(0, v + 1);
                    case l:
                        var A = this.$locale().weekStart || 0
                          , w = (g < A ? g + 7 : g) - A;
                        return d(r ? m - w : m + (6 - w), v);
                    case s:
                    case f:
                        return p(y + "Hours", 0);
                    case a:
                        return p(y + "Minutes", 1);
                    case o:
                        return p(y + "Seconds", 2);
                    case i:
                        return p(y + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                m.endOf = function(t) {
                    return this.startOf(t, !1)
                }
                ,
                m.$set = function(t, e) {
                    var n, l = E.p(t), u = "set" + (this.$u ? "UTC" : ""), d = (n = {},
                    n[s] = u + "Date",
                    n[f] = u + "Date",
                    n[c] = u + "Month",
                    n[h] = u + "FullYear",
                    n[a] = u + "Hours",
                    n[o] = u + "Minutes",
                    n[i] = u + "Seconds",
                    n[r] = u + "Milliseconds",
                    n)[l], p = l === s ? this.$D + (e - this.$W) : e;
                    if (l === c || l === h) {
                        var g = this.clone().set(f, 1);
                        g.$d[d](p),
                        g.init(),
                        this.$d = g.set(f, Math.min(this.$D, g.daysInMonth())).$d
                    } else
                        d && this.$d[d](p);
                    return this.init(),
                    this
                }
                ,
                m.set = function(t, e) {
                    return this.clone().$set(t, e)
                }
                ,
                m.get = function(t) {
                    return this[E.p(t)]()
                }
                ,
                m.add = function(r, u) {
                    var f, d = this;
                    r = Number(r);
                    var p = E.p(u)
                      , g = function(t) {
                        var e = C(d);
                        return E.w(e.date(e.date() + Math.round(t * r)), d)
                    };
                    if (p === c)
                        return this.set(c, this.$M + r);
                    if (p === h)
                        return this.set(h, this.$y + r);
                    if (p === s)
                        return g(1);
                    if (p === l)
                        return g(7);
                    var v = (f = {},
                    f[o] = e,
                    f[a] = n,
                    f[i] = t,
                    f)[p] || 1
                      , m = this.$d.getTime() + r * v;
                    return E.w(m, this)
                }
                ,
                m.subtract = function(t, e) {
                    return this.add(-1 * t, e)
                }
                ,
                m.format = function(t) {
                    var e = this
                      , n = this.$locale();
                    if (!this.isValid())
                        return n.invalidDate || d;
                    var r = t || "YYYY-MM-DDTHH:mm:ssZ"
                      , i = E.z(this)
                      , o = this.$H
                      , a = this.$m
                      , s = this.$M
                      , l = n.weekdays
                      , c = n.months
                      , u = function(t, n, i, o) {
                        return t && (t[n] || t(e, r)) || i[n].slice(0, o)
                    }
                      , h = function(t) {
                        return E.s(o % 12 || 12, t, "0")
                    }
                      , f = n.meridiem || function(t, e, n) {
                        var r = t < 12 ? "AM" : "PM";
                        return n ? r.toLowerCase() : r
                    }
                      , p = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: s + 1,
                        MM: E.s(s + 1, 2, "0"),
                        MMM: u(n.monthsShort, s, c, 3),
                        MMMM: u(c, s),
                        D: this.$D,
                        DD: E.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: u(n.weekdaysMin, this.$W, l, 2),
                        ddd: u(n.weekdaysShort, this.$W, l, 3),
                        dddd: l[this.$W],
                        H: String(o),
                        HH: E.s(o, 2, "0"),
                        h: h(1),
                        hh: h(2),
                        a: f(o, a, !0),
                        A: f(o, a, !1),
                        m: String(a),
                        mm: E.s(a, 2, "0"),
                        s: String(this.$s),
                        ss: E.s(this.$s, 2, "0"),
                        SSS: E.s(this.$ms, 3, "0"),
                        Z: i
                    };
                    return r.replace(g, (function(t, e) {
                        return e || p[t] || i.replace(":", "")
                    }
                    ))
                }
                ,
                m.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                m.diff = function(r, f, d) {
                    var p, g = E.p(f), v = C(r), m = (v.utcOffset() - this.utcOffset()) * e, y = this - v, A = E.m(this, v);
                    return A = (p = {},
                    p[h] = A / 12,
                    p[c] = A,
                    p[u] = A / 3,
                    p[l] = (y - m) / 6048e5,
                    p[s] = (y - m) / 864e5,
                    p[a] = y / n,
                    p[o] = y / e,
                    p[i] = y / t,
                    p)[g] || y,
                    d ? A : E.a(A)
                }
                ,
                m.daysInMonth = function() {
                    return this.endOf(c).$D
                }
                ,
                m.$locale = function() {
                    return w[this.$L]
                }
                ,
                m.locale = function(t, e) {
                    if (!t)
                        return this.$L;
                    var n = this.clone()
                      , r = S(t, e, !0);
                    return r && (n.$L = r),
                    n
                }
                ,
                m.clone = function() {
                    return E.w(this.$d, this)
                }
                ,
                m.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                m.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                m.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                m.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                v
            }()
              , k = x.prototype;
            return C.prototype = k,
            [["$ms", r], ["$s", i], ["$m", o], ["$H", a], ["$W", s], ["$M", c], ["$y", h], ["$D", f]].forEach((function(t) {
                k[t[1]] = function(e) {
                    return this.$g(e, t[0], t[1])
                }
            }
            )),
            C.extend = function(t, e) {
                return t.$i || (t(e, x, C),
                t.$i = !0),
                C
            }
            ,
            C.locale = S,
            C.isDayjs = b,
            C.unix = function(t) {
                return C(1e3 * t)
            }
            ,
            C.en = w[A],
            C.Ls = w,
            C.p = {},
            C
        }
        ))
    },
    59808: function(t, e, n) {
        "use strict";
        n(26699),
        n(32023),
        n(92222);
        var r = n(99455);
        e["Z"] = {
            methods: {
                showEfileErrorMsg: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = t.code
                      , i = t.msg
                      , o = i;
                    if (e)
                        o = r.uN.includes(n) ? this.$t(n) : i;
                    else if (r.uN.includes(n))
                        return;
                    o = r.PR.includes(n) ? this.$t(n) : o,
                    this.$message.warning(o)
                },
                onCopy: function(t) {
                    this.$message({
                        message: "".concat(this.$t("copy_to_ClipBoard"), ",").concat(t.text),
                        type: "success"
                    })
                },
                onError: function() {
                    this.$message({
                        message: this.$t("copy_error_info"),
                        type: "error"
                    })
                }
            }
        }
    },
    75055: function(t, e, n) {
        !function(e, r) {
            t.exports = r(n(4631))
        }(0, (function(t) {
            return function(t) {
                function e(r) {
                    if (n[r])
                        return n[r].exports;
                    var i = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(i.exports, i, i.exports, e),
                    i.l = !0,
                    i.exports
                }
                var n = {};
                return e.m = t,
                e.c = n,
                e.i = function(t) {
                    return t
                }
                ,
                e.d = function(t, n, r) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }
                ,
                e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default
                    }
                    : function() {
                        return t
                    }
                    ;
                    return e.d(n, "a", n),
                    n
                }
                ,
                e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }
                ,
                e.p = "/",
                e(e.s = 3)
            }([function(e, n) {
                e.exports = t
            }
            , function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(0)
                  , i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r)
                  , o = window.CodeMirror || i.default;
                "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                    value: function(t, e) {
                        if (null == t)
                            throw new TypeError("Cannot convert undefined or null to object");
                        for (var n = Object(t), r = 1; r < arguments.length; r++) {
                            var i = arguments[r];
                            if (null != i)
                                for (var o in i)
                                    Object.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o])
                        }
                        return n
                    },
                    writable: !0,
                    configurable: !0
                }),
                e.default = {
                    name: "codemirror",
                    data: function() {
                        return {
                            content: "",
                            codemirror: null,
                            cminstance: null
                        }
                    },
                    props: {
                        code: String,
                        value: String,
                        marker: Function,
                        unseenLines: Array,
                        name: {
                            type: String,
                            default: "codemirror"
                        },
                        placeholder: {
                            type: String,
                            default: ""
                        },
                        merge: {
                            type: Boolean,
                            default: !1
                        },
                        options: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        events: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        globalOptions: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        globalEvents: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    watch: {
                        options: {
                            deep: !0,
                            handler: function(t) {
                                for (var e in t)
                                    this.cminstance.setOption(e, t[e])
                            }
                        },
                        merge: function() {
                            this.$nextTick(this.switchMerge)
                        },
                        code: function(t) {
                            this.handerCodeChange(t)
                        },
                        value: function(t) {
                            this.handerCodeChange(t)
                        }
                    },
                    methods: {
                        initialize: function() {
                            var t = this
                              , e = Object.assign({}, this.globalOptions, this.options);
                            this.merge ? (this.codemirror = o.MergeView(this.$refs.mergeview, e),
                            this.cminstance = this.codemirror.edit) : (this.codemirror = o.fromTextArea(this.$refs.textarea, e),
                            this.cminstance = this.codemirror,
                            this.cminstance.setValue(this.code || this.value || this.content)),
                            this.cminstance.on("change", (function(e) {
                                t.content = e.getValue(),
                                t.$emit && t.$emit("input", t.content)
                            }
                            ));
                            var n = {};
                            ["scroll", "changes", "beforeChange", "cursorActivity", "keyHandled", "inputRead", "electricInput", "beforeSelectionChange", "viewportChange", "swapDoc", "gutterClick", "gutterContextMenu", "focus", "blur", "refresh", "optionChange", "scrollCursorIntoView", "update"].concat(this.events).concat(this.globalEvents).filter((function(t) {
                                return !n[t] && (n[t] = !0)
                            }
                            )).forEach((function(e) {
                                t.cminstance.on(e, (function() {
                                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++)
                                        r[i] = arguments[i];
                                    t.$emit.apply(t, [e].concat(r));
                                    var o = e.replace(/([A-Z])/g, "-$1").toLowerCase();
                                    o !== e && t.$emit.apply(t, [o].concat(r))
                                }
                                ))
                            }
                            )),
                            this.$emit("ready", this.codemirror),
                            this.unseenLineMarkers(),
                            this.refresh()
                        },
                        refresh: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.cminstance.refresh()
                            }
                            ))
                        },
                        destroy: function() {
                            var t = this.cminstance.doc.cm.getWrapperElement();
                            t && t.remove && t.remove()
                        },
                        handerCodeChange: function(t) {
                            if (t !== this.cminstance.getValue()) {
                                var e = this.cminstance.getScrollInfo();
                                this.cminstance.setValue(t),
                                this.content = t,
                                this.cminstance.scrollTo(e.left, e.top)
                            }
                            this.unseenLineMarkers()
                        },
                        unseenLineMarkers: function() {
                            var t = this;
                            void 0 !== this.unseenLines && void 0 !== this.marker && this.unseenLines.forEach((function(e) {
                                var n = t.cminstance.lineInfo(e);
                                t.cminstance.setGutterMarker(e, "breakpoints", n.gutterMarkers ? null : t.marker())
                            }
                            ))
                        },
                        switchMerge: function() {
                            var t = this.cminstance.doc.history
                              , e = this.cminstance.doc.cleanGeneration;
                            this.options.value = this.cminstance.getValue(),
                            this.destroy(),
                            this.initialize(),
                            this.cminstance.doc.history = t,
                            this.cminstance.doc.cleanGeneration = e
                        }
                    },
                    mounted: function() {
                        this.initialize()
                    },
                    beforeDestroy: function() {
                        this.destroy()
                    }
                }
            }
            , function(t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n(1)
                  , i = n.n(r);
                for (var o in r)
                    ["default", "default"].indexOf(o) < 0 && function(t) {
                        n.d(e, t, (function() {
                            return r[t]
                        }
                        ))
                    }(o);
                var a = n(5)
                  , s = n(4)
                  , l = s(i.a, a.a, !1, null, null, null);
                e.default = l.exports
            }
            , function(t, e, n) {
                "use strict";
                function r(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }),
                e.install = e.codemirror = e.CodeMirror = void 0;
                var i = n(0)
                  , o = r(i)
                  , a = n(2)
                  , s = r(a)
                  , l = window.CodeMirror || o.default
                  , c = function(t, e) {
                    e && (e.options && (s.default.props.globalOptions.default = function() {
                        return e.options
                    }
                    ),
                    e.events && (s.default.props.globalEvents.default = function() {
                        return e.events
                    }
                    )),
                    t.component(s.default.name, s.default)
                }
                  , u = {
                    CodeMirror: l,
                    codemirror: s.default,
                    install: c
                };
                e.default = u,
                e.CodeMirror = l,
                e.codemirror = s.default,
                e.install = c
            }
            , function(t, e) {
                t.exports = function(t, e, n, r, i, o) {
                    var a, s = t = t || {}, l = typeof t.default;
                    "object" !== l && "function" !== l || (a = t,
                    s = t.default);
                    var c, u = "function" == typeof s ? s.options : s;
                    if (e && (u.render = e.render,
                    u.staticRenderFns = e.staticRenderFns,
                    u._compiled = !0),
                    n && (u.functional = !0),
                    i && (u._scopeId = i),
                    o ? (c = function(t) {
                        t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
                        t || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__),
                        r && r.call(this, t),
                        t && t._registeredComponents && t._registeredComponents.add(o)
                    }
                    ,
                    u._ssrRegister = c) : r && (c = r),
                    c) {
                        var h = u.functional
                          , f = h ? u.render : u.beforeCreate;
                        h ? (u._injectStyles = c,
                        u.render = function(t, e) {
                            return c.call(e),
                            f(t, e)
                        }
                        ) : u.beforeCreate = f ? [].concat(f, c) : [c]
                    }
                    return {
                        esModule: a,
                        exports: s,
                        options: u
                    }
                }
            }
            , function(t, e, n) {
                "use strict";
                var r = function() {
                    var t = this
                      , e = t.$createElement
                      , n = t._self._c || e;
                    return n("div", {
                        staticClass: "vue-codemirror",
                        class: {
                            merge: t.merge
                        }
                    }, [t.merge ? n("div", {
                        ref: "mergeview"
                    }) : n("textarea", {
                        ref: "textarea",
                        attrs: {
                            name: t.name,
                            placeholder: t.placeholder
                        }
                    })])
                }
                  , i = []
                  , o = {
                    render: r,
                    staticRenderFns: i
                };
                e.a = o
            }
            ])
        }
        ))
    },
    52809: function(t) {
        "use strict";
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAADJCAYAAACJxhYFAAAACXBIWXMAAAsSAAALEgHS3X78AAAFE0lEQVR4nO3dz25UZRzH4V8HBERNwRCjG6luXErc1B3cAa67GbgC8QrEK1CvwM6m67pzY4I72RiJbkz8UxITAjEBDBjFmDGnZ4q0ZzpfFQRnzvMkXdAzizln5sP7vudPujQejysarR2rqlNVdSa/eOFtVdWlGm5s9f1A9MXsSEZrTRQXqupsZxufVdXFGm5c6v2RWHDTIxmtrVTVelWd7mxjrw9ruHGh81sWRjeS0dqp7elE1bKP+W8b1XDj3Jy8V/6hwa6XC+TfGtZozWiyoP4aSdop1pcCeSjna7ixPsfvnykeHEnWBfLQPpqMxiyQNpL2LJZF+qNxSSiLZWckseh8dJa3R+X22hILYCeSt3yYj9TrkxFFKAtgMJlqWYs8ek0oHyzaTvVRM5L43+6/05waFsqcG0zuyeK/83aN1qz55thgYffs/6U5NWzdN6dE8visOzU8n0Ty+Cw74zWfRPJ4CWUOieTxa04Nb/Ztp+fZwb4fgCfkdI3WNic3lPJkbG0f/+FG/AxE8uSc9cTn/8Bo7erk5t4Parhxa9obMt2i705W1bvbI8s+17NEAq3lyfWszvNAIoHdhntDEQl07XocWyQw3fuTR9pFAjNcLJHATM20a0UkMNsZkcBsIoHAdAsSkUAgEghEAoFIIBAJBCKBQCQQiASCv/eM+4F7VYdvVR293tkEc+n3Z6p+O1716/GHjOTojarnv6l69sfOJlgITSy3X6m6+VrVH4em7tH0SJ66W/XS520ksMia7/qJr9vB4PobVbdf7exsN5IjN6te/rRq8HtnEyys5vv+0uV2YLj25oxImkBWPvFFoL+Wf2h3/YFQ/jq71Qw7zQgCfdeE0ky/OpE0axBTLGi98EU7cNyPpJmHWaTDbie+2v5nG8ny953t0HvNtOvQz0faSJ5zHQSmevbasUEd+3bFWgT2cfTGsUEduHdk+lagDt49PKgjN1/sbADucxcwBCKBQCQQiAQCkUAgEghEAsGgnv7JH9yH/Ry6892gDv4y9Q+8A9tPLN4x3YJAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkEIoFAJBCIBAKRQCASCEQCgUggEAkETSRbs18C/SYSmO3W0ng8rrq8NJ75Muivd3bWJB/7EsBUmzuRrE/bCj33Wa2Ot9pIVsebVXWl70cE9rhYe04Bn+u8BPrrw1odX2r2vl2477i81ITykS8GPXelVsendg7B7ouJq+NmbXK+70eIXmuWHWcePAC7R5Idl5fOTBbzJzvbYHE1U6wLe/du+m0p7VysGW7eq6qrne2wWEZV9cq0QPYfSfZqR5bmZ2XyA/OuGQiau002a3V8a9+dqao/Ac8Pyu+3sDg1AAAAAElFTkSuQmCC"
    },
    45413: function(t, e, n) {
        "use strict";
        t.exports = n.p + "static/img/next.ac70acd3.png"
    },
    80988: function(t, e, n) {
        "use strict";
        t.exports = n.p + "static/img/prev.a5636270.png"
    },
    43193: function(t) {
        "use strict";
        t.exports = "data:image/png;base64,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"
    }
}]);
