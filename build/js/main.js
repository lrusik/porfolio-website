/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[k] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    A(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [S, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = k.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = k.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) {
            return k.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
        },
        ue = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(R) || [""]).length;
                while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l), t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), a
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                    return tt(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
    }

    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function ft(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                } if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() {
                    for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
                })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        it || (it = !0, lt())
    }, k.fx.stop = function() {
        it = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(R) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, xt(this)))
            });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k(this), r = bt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || ie
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
    }, e || (C.jQuery = C.$ = k), k
});
/*
slider(
	slider_item = "slide", 
	slider_item = "dot", 
	buttons = ["left", "right"],
	speed=1000,
	open=1
);
*/

// functoin vertical_slider()

function slider(slider_item, dot_item = "", buttons = [], speed = 1000, open = 0, items_per_slide = 1, animation = "linear", pos = 0) {
    // multiple items
    // половинчатые переходы на тех где много айтемов

    // draggable 

    // auto
    // auto_speed

    // make from it a class
    // find out class switch_to* was called from and fill the vraibles with this information
    // animation type (none, fade, slide, halfslide)

    // slider type (circl, line, ...)

    var items = document.getElementsByClassName(slider_item);

    // creating slider and slider container class
    var slider = document.createElement("div");
    var content = document.createElement("div");

    if (buttons.length == 2) {
        var left_btns = document.getElementsByClassName(buttons[0])[0];
        var rght_btns = document.getElementsByClassName(buttons[1])[0];

        left_btns.setAttribute("onclick", "switch_to_prev('" + slider_item + "', '" + dot_item + "', " + open + ")");
        rght_btns.setAttribute("onclick", "switch_to_next('" + slider_item + "', '" + dot_item + "', " + open + ")");
    }

    slider.classList.add(slider_item + "__slider");
    content.classList.add(slider_item + "-slider__inner");

    slider.appendChild(content);

    items[0].parentNode.style.overflow = "hidden";
    items[0].parentNode.appendChild(slider);

    $(items).prependTo(content); //replace it with pure js //moving all items into slider container

    //styling container
    content.style.whiteSpace = "nowrap";
    content.style.display = "inline-block";
    content.style.height = "100%";
    content.style.width = "100%";
    content.style.transition = "transform " + speed + "ms " + animation;

    //styling items
    for (var i = 0; i < slider_len(items); i++) {
        items[i].style.display = "inline-block";
        items[i].style.height = "100%";
        items[i].style.width = (1 / items_per_slide * 100) + "%";
    }

    //creating dots
    if (dot_item != "") {
        var dots = document.getElementsByClassName(dot_item);
        multiply_el(dots[0], slider_len(items) / items_per_slide);

        //creating onlick="switch_to()"
        set_dots_functions(dots, slider_item);
    }

    switch_to(slider_item, pos, dot_item);
}


async function slider_auto() {
    ;
}

function slider_position(items, items_class, dot_item) {
    var lst = "";
    for (var i = 0; i < slider_len(items); i++) {
        if (items[i].classList == (items_class + " " + items_class + "_active"))
            return i;
    }

    switch_to(slider_item, 0, dot_item);
    return 0;
}

function switch_to_prev(items_class, dot_item, open) {
    items = document.getElementsByClassName(items_class);
    pos = slider_position(items, items_class, dot_item);

    if (pos == 0) {
        if (open)
            pos = slider_len(items) - 1;
    } else
        pos -= 1;

    switch_to(items_class, pos, dot_item);
}

function switch_to_next(items_class, dot_item, open) {
    items = document.getElementsByClassName(items_class);
    pos = slider_position(items, items_class, dot_item);

    if (pos >= (slider_len(items) - 1)) {
        if (open) {
            // crate pseudo element
            // swith to pseudoelement
            // set dots to last
            // if
            //		swiches to lower then cur then display none cur; 
            // suka blyat pizdec
            pos = 0;
        }
    } else
        pos += 1;

    switch_to(items_class, pos, dot_item);
}


function switch_to(items_class, num, dot_item) {
    var items = document.getElementsByClassName(items_class);
    var dots = document.getElementsByClassName(dot_item);

    for (var i = 0; i < slider_len(items); i++) {
        items[i].classList = items_class;

        if (num == i) {
            items[i].classList.add(items_class + "_active");
        }
    }

    for (var i = 0; i < slider_len(items); i++) {
        dots[i].classList = dot_item;

        if (num == i) {
            dots[i].classList.add(dot_item + "_active");
        }
    }

    num = -1 * num;
    items[0].parentNode.style.transform = "translateX(" + (num * 100) + "%)";

}

function slider_len(items) {
    return items.length;
}

function set_dots_functions(dots, slider_cont) {
    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("onclick", "switch_to('" + slider_cont + "', " + i + ", '" + dots[0].className.split(" ")[0] + "')");
    }
}

function multiply_el(el, num) {
    var class_name = el.className;
    var par = el.parentNode;
    var clone;

    for (var i = 1; i < num; i++) {
        clone = el.cloneNode(true);
        clone.classList.add(class_name + "__" + i);
        par.append(clone);
    }

    el.classList.add(class_name + "__0");
}

//=include start.js
(function() {

    function controls() {
        els = document.getElementsByClassName("slider__button");
        for (var i = 0; i < els.length; i++) {
            els[i].classList = "slider__button";
        }

        $(this).addClass('slider__button_selected');
        $('.slider__inner').animate({
            top: -$('.slider').height() * $(this).index()
        }, 450);
    }

    const runCode = () => {
        const button = document.querySelectorAll('.slider__button');
        if (button) {
            for (var i = 0; i < button.length; i++) {
                button[i].addEventListener('click', controls, false);
            }
        }
    }
    runCode();

})();

var main_inner = $(".main__inner");
main_inner.css("left", "-" + main_inner.width() + "px");
main_inner.css("top", "-" + main_inner.height() + "px");

$(".main__inner").animate({
    "left": "-" + main_inner.width() / 7,
    "top": "-" + main_inner.height() / 4.9
}, 1000);
$(".main__item").toggleClass('main__item_scale');
$(".menu").css("top", "0");

setTimeout(function() {
    $(".main__item_r").css("transform", "translateX(1px) scale(1)");
    $(".main__item_l").css("transform", "translateX(-1px) scale(1)");

}, 100);

setTimeout(function() {
    $(".main__item").toggleClass("main__yhover");
}, 400);

function animate_open(element, url, open_type) {
    $(element).addClass("animation_1");
    $(".main").addClass("animation_whitefade");
    $(element).find(".main__cont").addClass("animation_cont");

    setTimeout(function() {
        window.open(url, open_type);
    }, 1450);
}

function animate_open_about(url, open_type, underlying_el) {
    $(".main__item_about").addClass("animation_about");
    $(".main").addClass("animation_whitefade");
    $(".main__item_about").find(".main__cont").addClass("animation_cont");

    setTimeout(function() {
        window.open(url, open_type);
    }, 1450);
}

function animate_link(url, open_type) {
    $(".main").addClass("animation_whitefade_s");

    setTimeout(function() {
        window.open(url, open_type);
    }, 500);
}
//# sourceMappingURL=../maps/main.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5qcyIsIm1haW4uanMiLCJzbGlkZXIuanMiLCJzdGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUNEQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBRHJWQTtBRUhBO0FGSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuLi9qcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2My40LjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXHJcbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihDLGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVtdLEU9Qy5kb2N1bWVudCxyPU9iamVjdC5nZXRQcm90b3R5cGVPZixzPXQuc2xpY2UsZz10LmNvbmNhdCx1PXQucHVzaCxpPXQuaW5kZXhPZixuPXt9LG89bi50b1N0cmluZyx2PW4uaGFzT3duUHJvcGVydHksYT12LnRvU3RyaW5nLGw9YS5jYWxsKE9iamVjdCkseT17fSxtPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJlwibnVtYmVyXCIhPXR5cGVvZiBlLm5vZGVUeXBlfSx4PWZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lJiZlPT09ZS53aW5kb3d9LGM9e3R5cGU6ITAsc3JjOiEwLG5vbmNlOiEwLG5vTW9kdWxlOiEwfTtmdW5jdGlvbiBiKGUsdCxuKXt2YXIgcixpLG89KG49bnx8RSkuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZihvLnRleHQ9ZSx0KWZvcihyIGluIGMpKGk9dFtyXXx8dC5nZXRBdHRyaWJ1dGUmJnQuZ2V0QXR0cmlidXRlKHIpKSYmby5zZXRBdHRyaWJ1dGUocixpKTtuLmhlYWQuYXBwZW5kQ2hpbGQobykucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKX1mdW5jdGlvbiB3KGUpe3JldHVybiBudWxsPT1lP2UrXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZT9uW28uY2FsbChlKV18fFwib2JqZWN0XCI6dHlwZW9mIGV9dmFyIGY9XCIzLjQuMVwiLGs9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbmV3IGsuZm4uaW5pdChlLHQpfSxwPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztmdW5jdGlvbiBkKGUpe3ZhciB0PSEhZSYmXCJsZW5ndGhcImluIGUmJmUubGVuZ3RoLG49dyhlKTtyZXR1cm4hbShlKSYmIXgoZSkmJihcImFycmF5XCI9PT1ufHwwPT09dHx8XCJudW1iZXJcIj09dHlwZW9mIHQmJjA8dCYmdC0xIGluIGUpfWsuZm49ay5wcm90b3R5cGU9e2pxdWVyeTpmLGNvbnN0cnVjdG9yOmssbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBzLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9zLmNhbGwodGhpcyk6ZTwwP3RoaXNbZSt0aGlzLmxlbmd0aF06dGhpc1tlXX0scHVzaFN0YWNrOmZ1bmN0aW9uKGUpe3ZhciB0PWsubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGUpO3JldHVybiB0LnByZXZPYmplY3Q9dGhpcyx0fSxlYWNoOmZ1bmN0aW9uKGUpe3JldHVybiBrLmVhY2godGhpcyxlKX0sbWFwOmZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLnB1c2hTdGFjayhrLm1hcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQsZSl9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHMuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LGsuZXh0ZW5kPWsuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihrLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8ay5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPWsuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxrLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49di5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJmEuY2FsbChuKT09PWwpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSx0KXtiKGUse25vbmNlOnQmJnQubm9uY2V9KX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtpZihkKGUpKXtmb3Iobj1lLmxlbmd0aDtyPG47cisrKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVha31lbHNlIGZvcihyIGluIGUpaWYoITE9PT10LmNhbGwoZVtyXSxyLGVbcl0pKWJyZWFrO3JldHVybiBlfSx0cmltOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShwLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oZSx0KXt2YXIgbj10fHxbXTtyZXR1cm4gbnVsbCE9ZSYmKGQoT2JqZWN0KGUpKT9rLm1lcmdlKG4sXCJzdHJpbmdcIj09dHlwZW9mIGU/W2VdOmUpOnUuY2FsbChuLGUpKSxufSxpbkFycmF5OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09dD8tMTppLmNhbGwodCxlLG4pfSxtZXJnZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0rdC5sZW5ndGgscj0wLGk9ZS5sZW5ndGg7cjxuO3IrKyllW2krK109dFtyXTtyZXR1cm4gZS5sZW5ndGg9aSxlfSxncmVwOmZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9W10saT0wLG89ZS5sZW5ndGgsYT0hbjtpPG87aSsrKSF0KGVbaV0saSkhPT1hJiZyLnB1c2goZVtpXSk7cmV0dXJuIHJ9LG1hcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPTAsYT1bXTtpZihkKGUpKWZvcihyPWUubGVuZ3RoO288cjtvKyspbnVsbCE9KGk9dChlW29dLG8sbikpJiZhLnB1c2goaSk7ZWxzZSBmb3IobyBpbiBlKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO3JldHVybiBnLmFwcGx5KFtdLGEpfSxndWlkOjEsc3VwcG9ydDp5fSksXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoay5mbltTeW1ib2wuaXRlcmF0b3JdPXRbU3ltYm9sLml0ZXJhdG9yXSksay5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oZSx0KXtuW1wiW29iamVjdCBcIit0K1wiXVwiXT10LnRvTG93ZXJDYXNlKCl9KTt2YXIgaD1mdW5jdGlvbihuKXt2YXIgZSxkLGIsbyxpLGgsZixnLHcsdSxsLFQsQyxhLEUsdixzLGMseSxrPVwic2l6emxlXCIrMSpuZXcgRGF0ZSxtPW4uZG9jdW1lbnQsUz0wLHI9MCxwPXVlKCkseD11ZSgpLE49dWUoKSxBPXVlKCksRD1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGw9ITApLDB9LGo9e30uaGFzT3duUHJvcGVydHksdD1bXSxxPXQucG9wLEw9dC5wdXNoLEg9dC5wdXNoLE89dC5zbGljZSxQPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxSPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixJPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixXPVwiXFxcXFtcIitNK1wiKihcIitJK1wiKSg/OlwiK00rXCIqKFsqXiR8IX5dPz0pXCIrTStcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK0krXCIpKXwpXCIrTStcIipcXFxcXVwiLCQ9XCI6KFwiK0krXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK1crXCIpKil8LiopXFxcXCl8KVwiLEY9bmV3IFJlZ0V4cChNK1wiK1wiLFwiZ1wiKSxCPW5ldyBSZWdFeHAoXCJeXCIrTStcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTStcIiskXCIsXCJnXCIpLF89bmV3IFJlZ0V4cChcIl5cIitNK1wiKixcIitNK1wiKlwiKSx6PW5ldyBSZWdFeHAoXCJeXCIrTStcIiooWz4rfl18XCIrTStcIilcIitNK1wiKlwiKSxVPW5ldyBSZWdFeHAoTStcInw+XCIpLFg9bmV3IFJlZ0V4cCgkKSxWPW5ldyBSZWdFeHAoXCJeXCIrSStcIiRcIiksRz17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK0krXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrSStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK0krXCJ8WypdKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrVyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrJCksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTStcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK00rXCIqKD86KFsrLV18KVwiK00rXCIqKFxcXFxkKyl8KSlcIitNK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK1IrXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitNK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitNK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitNK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9IVE1MJC9pLFE9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxKPS9eaFxcZCQvaSxLPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sWj0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxlZT0vWyt+XS8sdGU9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK00rXCI/fChcIitNK1wiKXwuKVwiLFwiaWdcIiksbmU9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVwiMHhcIit0LTY1NTM2O3JldHVybiByIT1yfHxuP3Q6cjwwP1N0cmluZy5mcm9tQ2hhckNvZGUocis2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMHw1NTI5NiwxMDIzJnJ8NTYzMjApfSxyZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxpZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiZcImZpZWxkc2V0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwobS5jaGlsZE5vZGVzKSxtLmNoaWxkTm9kZXMpLHRbbS5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiB0fHwhdHx8MSE9PXAmJjkhPT1wJiYxMSE9PXApcmV0dXJuIG47aWYoIXImJigoZT9lLm93bmVyRG9jdW1lbnR8fGU6bSkhPT1DJiZUKGUpLGU9ZXx8QyxFKSl7aWYoMTEhPT1wJiYodT1aLmV4ZWModCkpKWlmKGk9dVsxXSl7aWYoOT09PXApe2lmKCEoYT1lLmdldEVsZW1lbnRCeUlkKGkpKSlyZXR1cm4gbjtpZihhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZSBpZihmJiYoYT1mLmdldEVsZW1lbnRCeUlkKGkpKSYmeShlLGEpJiZhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZXtpZih1WzJdKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KSksbjtpZigoaT11WzNdKSYmZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSkpLG59aWYoZC5xc2EmJiFBW3QrXCIgXCJdJiYoIXZ8fCF2LnRlc3QodCkpJiYoMSE9PXB8fFwib2JqZWN0XCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiZVLnRlc3QodCkpeyhzPWUuZ2V0QXR0cmlidXRlKFwiaWRcIikpP3M9cy5yZXBsYWNlKHJlLGllKTplLnNldEF0dHJpYnV0ZShcImlkXCIscz1rKSxvPShsPWgodCkpLmxlbmd0aDt3aGlsZShvLS0pbFtvXT1cIiNcIitzK1wiIFwiK3hlKGxbb10pO2M9bC5qb2luKFwiLFwiKSxmPWVlLnRlc3QodCkmJnllKGUucGFyZW50Tm9kZSl8fGV9dHJ5e3JldHVybiBILmFwcGx5KG4sZi5xdWVyeVNlbGVjdG9yQWxsKGMpKSxufWNhdGNoKGUpe0EodCwhMCl9ZmluYWxseXtzPT09ayYmZS5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKX19fXJldHVybiBnKHQucmVwbGFjZShCLFwiJDFcIiksZSxuLHIpfWZ1bmN0aW9uIHVlKCl7dmFyIHI9W107cmV0dXJuIGZ1bmN0aW9uIGUodCxuKXtyZXR1cm4gci5wdXNoKHQrXCIgXCIpPmIuY2FjaGVMZW5ndGgmJmRlbGV0ZSBlW3Iuc2hpZnQoKV0sZVt0K1wiIFwiXT1ufX1mdW5jdGlvbiBsZShlKXtyZXR1cm4gZVtrXT0hMCxlfWZ1bmN0aW9uIGNlKGUpe3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO3RyeXtyZXR1cm4hIWUodCl9Y2F0Y2goZSl7cmV0dXJuITF9ZmluYWxseXt0LnBhcmVudE5vZGUmJnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0KSx0PW51bGx9fWZ1bmN0aW9uIGZlKGUsdCl7dmFyIG49ZS5zcGxpdChcInxcIikscj1uLmxlbmd0aDt3aGlsZShyLS0pYi5hdHRySGFuZGxlW25bcl1dPXR9ZnVuY3Rpb24gcGUoZSx0KXt2YXIgbj10JiZlLHI9biYmMT09PWUubm9kZVR5cGUmJjE9PT10Lm5vZGVUeXBlJiZlLnNvdXJjZUluZGV4LXQuc291cmNlSW5kZXg7aWYocilyZXR1cm4gcjtpZihuKXdoaWxlKG49bi5uZXh0U2libGluZylpZihuPT09dClyZXR1cm4tMTtyZXR1cm4gZT8xOi0xfWZ1bmN0aW9uIGRlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJmUudHlwZT09PXR9fWZ1bmN0aW9uIGhlKG4pe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PXR8fFwiYnV0dG9uXCI9PT10KSYmZS50eXBlPT09bn19ZnVuY3Rpb24gZ2UodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwiZm9ybVwiaW4gZT9lLnBhcmVudE5vZGUmJiExPT09ZS5kaXNhYmxlZD9cImxhYmVsXCJpbiBlP1wibGFiZWxcImluIGUucGFyZW50Tm9kZT9lLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT10OmUuZGlzYWJsZWQ9PT10OmUuaXNEaXNhYmxlZD09PXR8fGUuaXNEaXNhYmxlZCE9PSF0JiZhZShlKT09PXQ6ZS5kaXNhYmxlZD09PXQ6XCJsYWJlbFwiaW4gZSYmZS5kaXNhYmxlZD09PXR9fWZ1bmN0aW9uIHZlKGEpe3JldHVybiBsZShmdW5jdGlvbihvKXtyZXR1cm4gbz0rbyxsZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShbXSxlLmxlbmd0aCxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249cltpXV0mJihlW25dPSEodFtuXT1lW25dKSl9KX0pfWZ1bmN0aW9uIHllKGUpe3JldHVybiBlJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mb3IoZSBpbiBkPXNlLnN1cHBvcnQ9e30saT1zZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lLm5hbWVzcGFjZVVSSSxuPShlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hWS50ZXN0KHR8fG4mJm4ubm9kZU5hbWV8fFwiSFRNTFwiKX0sVD1zZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxuLHI9ZT9lLm93bmVyRG9jdW1lbnR8fGU6bTtyZXR1cm4gciE9PUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQyksbSE9PUMmJihuPUMuZGVmYXVsdFZpZXcpJiZuLnRvcCE9PW4mJihuLmFkZEV2ZW50TGlzdGVuZXI/bi5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsb2UsITEpOm4uYXR0YWNoRXZlbnQmJm4uYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLG9lKSksZC5hdHRyaWJ1dGVzPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxkLmdldEVsZW1lbnRzQnlUYWdOYW1lPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9aywhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoaykubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiB0JiZ0LnZhbHVlPT09bn19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksYi5maW5kLlRBRz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpkLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmRSlyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxzPVtdLHY9W10sKGQucXNhPUsudGVzdChDLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGNlKGZ1bmN0aW9uKGUpe2EuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK2srXCInPjwvYT48c2VsZWN0IGlkPSdcIitrK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ2LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1IrXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIraytcIi1dXCIpLmxlbmd0aHx8di5wdXNoKFwifj1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx2LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK2srXCIrKlwiKS5sZW5ndGh8fHYucHVzaChcIi4jLitbK35dXCIpfSksY2UoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ2LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHYucHVzaChcIiwuKjpcIil9KSksKGQubWF0Y2hlc1NlbGVjdG9yPUsudGVzdChjPWEubWF0Y2hlc3x8YS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGEubW96TWF0Y2hlc1NlbGVjdG9yfHxhLm9NYXRjaGVzU2VsZWN0b3J8fGEubXNNYXRjaGVzU2VsZWN0b3IpKSYmY2UoZnVuY3Rpb24oZSl7ZC5kaXNjb25uZWN0ZWRNYXRjaD1jLmNhbGwoZSxcIipcIiksYy5jYWxsKGUsXCJbcyE9JyddOnhcIikscy5wdXNoKFwiIT1cIiwkKX0pLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSkscz1zLmxlbmd0aCYmbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSx0PUsudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx5PXR8fEsudGVzdChhLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpd2hpbGUodD10LnBhcmVudE5vZGUpaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LEQ9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT09KHQub3duZXJEb2N1bWVudHx8dCk/ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbih0KToxKXx8IWQuc29ydERldGFjaGVkJiZ0LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGUpPT09bj9lPT09Q3x8ZS5vd25lckRvY3VtZW50PT09bSYmeShtLGUpPy0xOnQ9PT1DfHx0Lm93bmVyRG9jdW1lbnQ9PT1tJiZ5KG0sdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT09Qz8tMTp0PT09Qz8xOmk/LTE6bz8xOnU/UCh1LGUpLVAodSx0KTowO2lmKGk9PT1vKXJldHVybiBwZShlLHQpO249ZTt3aGlsZShuPW4ucGFyZW50Tm9kZSlhLnVuc2hpZnQobik7bj10O3doaWxlKG49bi5wYXJlbnROb2RlKXMudW5zaGlmdChuKTt3aGlsZShhW3JdPT09c1tyXSlyKys7cmV0dXJuIHI/cGUoYVtyXSxzW3JdKTphW3JdPT09bT8tMTpzW3JdPT09bT8xOjB9KSxDfSxzZS5tYXRjaGVzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHNlKGUsbnVsbCxudWxsLHQpfSxzZS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oZSx0KXtpZigoZS5vd25lckRvY3VtZW50fHxlKSE9PUMmJlQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJkUmJiFBW3QrXCIgXCJdJiYoIXN8fCFzLnRlc3QodCkpJiYoIXZ8fCF2LnRlc3QodCkpKXRyeXt2YXIgbj1jLmNhbGwoZSx0KTtpZihufHxkLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2goZSl7QSh0LCEwKX1yZXR1cm4gMDxzZSh0LEMsbnVsbCxbZV0pLmxlbmd0aH0sc2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9PUMmJlQoZSkseShlLHQpfSxzZS5hdHRyPWZ1bmN0aW9uKGUsdCl7KGUub3duZXJEb2N1bWVudHx8ZSkhPT1DJiZUKGUpO3ZhciBuPWIuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLHI9biYmai5jYWxsKGIuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP24oZSx0LCFFKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PXI/cjpkLmF0dHJpYnV0ZXN8fCFFP2UuZ2V0QXR0cmlidXRlKHQpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0sc2UuZXNjYXBlPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UocmUsaWUpfSxzZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sc2UudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxuPVtdLHI9MCxpPTA7aWYobD0hZC5kZXRlY3REdXBsaWNhdGVzLHU9IWQuc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoRCksbCl7d2hpbGUodD1lW2krK10pdD09PWVbaV0mJihyPW4ucHVzaChpKSk7d2hpbGUoci0tKWUuc3BsaWNlKG5bcl0sMSl9cmV0dXJuIHU9bnVsbCxlfSxvPXNlLmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKHQ9ZVtyKytdKW4rPW8odCk7cmV0dXJuIG59LChiPXNlLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmxlLG1hdGNoOkcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UodGUsbmUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UodGUsbmUpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHNlLmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJnNlLmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzZdJiZlWzJdO3JldHVybiBHLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVszXT9lWzJdPWVbNF18fGVbNV18fFwiXCI6biYmWC50ZXN0KG4pJiYodD1oKG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PXBbZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIitNK1wiKVwiK2UrXCIoXCIrTStcInwkKVwiKSkmJnAoZSxmdW5jdGlvbihlKXtyZXR1cm4gdC50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBlLmNsYXNzTmFtZSYmZS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihuLHIsaSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PXNlLmF0dHIoZSxuKTtyZXR1cm4gbnVsbD09dD9cIiE9XCI9PT1yOiFyfHwodCs9XCJcIixcIj1cIj09PXI/dD09PWk6XCIhPVwiPT09cj90IT09aTpcIl49XCI9PT1yP2kmJjA9PT10LmluZGV4T2YoaSk6XCIqPVwiPT09cj9pJiYtMTx0LmluZGV4T2YoaSk6XCIkPVwiPT09cj9pJiZ0LnNsaWNlKC1pLmxlbmd0aCk9PT1pOlwifj1cIj09PXI/LTE8KFwiIFwiK3QucmVwbGFjZShGLFwiIFwiKStcIiBcIikuaW5kZXhPZihpKTpcInw9XCI9PT1yJiYodD09PWl8fHQuc2xpY2UoMCxpLmxlbmd0aCsxKT09PWkrXCItXCIpKX19LENISUxEOmZ1bmN0aW9uKGgsZSx0LGcsdil7dmFyIHk9XCJudGhcIiE9PWguc2xpY2UoMCwzKSxtPVwibGFzdFwiIT09aC5zbGljZSgtNCkseD1cIm9mLXR5cGVcIj09PWU7cmV0dXJuIDE9PT1nJiYwPT09dj9mdW5jdGlvbihlKXtyZXR1cm4hIWUucGFyZW50Tm9kZX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPXkhPT1tP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLGM9ZS5wYXJlbnROb2RlLGY9eCYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHA9IW4mJiF4LGQ9ITE7aWYoYyl7aWYoeSl7d2hpbGUobCl7YT1lO3doaWxlKGE9YVtsXSlpZih4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpcmV0dXJuITE7dT1sPVwib25seVwiPT09aCYmIXUmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZih1PVttP2MuZmlyc3RDaGlsZDpjLmxhc3RDaGlsZF0sbSYmcCl7ZD0ocz0ocj0oaT0obz0oYT1jKVtrXXx8KGFba109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09UyYmclsxXSkmJnJbMl0sYT1zJiZjLmNoaWxkTm9kZXNbc107d2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoMT09PWEubm9kZVR5cGUmJisrZCYmYT09PWUpe2lbaF09W1MscyxkXTticmVha319ZWxzZSBpZihwJiYoZD1zPShyPShpPShvPShhPWUpW2tdfHwoYVtrXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdfHxbXSlbMF09PT1TJiZyWzFdKSwhMT09PWQpd2hpbGUoYT0rK3MmJmEmJmFbbF18fChkPXM9MCl8fHUucG9wKCkpaWYoKHg/YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09ZjoxPT09YS5ub2RlVHlwZSkmJisrZCYmKHAmJigoaT0obz1hW2tdfHwoYVtrXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdPVtTLGRdKSxhPT09ZSkpYnJlYWs7cmV0dXJuKGQtPXYpPT09Z3x8ZCVnPT0wJiYwPD1kL2d9fX0sUFNFVURPOmZ1bmN0aW9uKGUsbyl7dmFyIHQsYT1iLnBzZXVkb3NbZV18fGIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIGFba10/YShvKToxPGEubGVuZ3RoPyh0PVtlLGUsXCJcIixvXSxiLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9sZShmdW5jdGlvbihlLHQpe3ZhciBuLHI9YShlLG8pLGk9ci5sZW5ndGg7d2hpbGUoaS0tKWVbbj1QKGUscltpXSldPSEodFtuXT1yW2ldKX0pOmZ1bmN0aW9uKGUpe3JldHVybiBhKGUsMCx0KX0pOmF9fSxwc2V1ZG9zOntub3Q6bGUoZnVuY3Rpb24oZSl7dmFyIHI9W10saT1bXSxzPWYoZS5yZXBsYWNlKEIsXCIkMVwiKSk7cmV0dXJuIHNba10/bGUoZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbz1zKGUsbnVsbCxyLFtdKSxhPWUubGVuZ3RoO3doaWxlKGEtLSkoaT1vW2FdKSYmKGVbYV09ISh0W2FdPWkpKX0pOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gclswXT1lLHMocixudWxsLG4saSksclswXT1udWxsLCFpLnBvcCgpfX0pLGhhczpsZShmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIDA8c2UodCxlKS5sZW5ndGh9fSksY29udGFpbnM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIHQ9dC5yZXBsYWNlKHRlLG5lKSxmdW5jdGlvbihlKXtyZXR1cm4tMTwoZS50ZXh0Q29udGVudHx8byhlKSkuaW5kZXhPZih0KX19KSxsYW5nOmxlKGZ1bmN0aW9uKG4pe3JldHVybiBWLnRlc3Qobnx8XCJcIil8fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrbiksbj1uLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oZSl7dmFyIHQ7ZG97aWYodD1FP2UubGFuZzplLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxlLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKHQ9dC50b0xvd2VyQ2FzZSgpKT09PW58fDA9PT10LmluZGV4T2YobitcIi1cIil9d2hpbGUoKGU9ZS5wYXJlbnROb2RlKSYmMT09PWUubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihlKXt2YXIgdD1uLmxvY2F0aW9uJiZuLmxvY2F0aW9uLmhhc2g7cmV0dXJuIHQmJnQuc2xpY2UoMSk9PT1lLmlkfSxyb290OmZ1bmN0aW9uKGUpe3JldHVybiBlPT09YX0sZm9jdXM6ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1DLmFjdGl2ZUVsZW1lbnQmJighQy5oYXNGb2N1c3x8Qy5oYXNGb2N1cygpKSYmISEoZS50eXBlfHxlLmhyZWZ8fH5lLnRhYkluZGV4KX0sZW5hYmxlZDpnZSghMSksZGlzYWJsZWQ6Z2UoITApLGNoZWNrZWQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PXQmJiEhZS5jaGVja2VkfHxcIm9wdGlvblwiPT09dCYmISFlLnNlbGVjdGVkfSxzZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCwhMD09PWUuc2VsZWN0ZWR9LGVtcHR5OmZ1bmN0aW9uKGUpe2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZylpZihlLm5vZGVUeXBlPDYpcmV0dXJuITE7cmV0dXJuITB9LHBhcmVudDpmdW5jdGlvbihlKXtyZXR1cm4hYi5wc2V1ZG9zLmVtcHR5KGUpfSxoZWFkZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIEoudGVzdChlLm5vZGVOYW1lKX0saW5wdXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIFEudGVzdChlLm5vZGVOYW1lKX0sYnV0dG9uOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiZcImJ1dHRvblwiPT09ZS50eXBlfHxcImJ1dHRvblwiPT09dH0sdGV4dDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm5cImlucHV0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkmJlwidGV4dFwiPT09ZS50eXBlJiYobnVsbD09KHQ9ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKXx8XCJ0ZXh0XCI9PT10LnRvTG93ZXJDYXNlKCkpfSxmaXJzdDp2ZShmdW5jdGlvbigpe3JldHVyblswXX0pLGxhc3Q6dmUoZnVuY3Rpb24oZSx0KXtyZXR1cm5bdC0xXX0pLGVxOnZlKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pLGV2ZW46dmUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxvZGQ6dmUoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MTtuPHQ7bis9MillLnB1c2gobik7cmV0dXJuIGV9KSxsdDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6dDxuP3Q6bjswPD0tLXI7KWUucHVzaChyKTtyZXR1cm4gZX0pLGd0OnZlKGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9bjwwP24rdDpuOysrcjx0OyllLnB1c2gocik7cmV0dXJuIGV9KX19KS5wc2V1ZG9zLm50aD1iLnBzZXVkb3MuZXEse3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWIucHNldWRvc1tlXT1kZShlKTtmb3IoZSBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWIucHNldWRvc1tlXT1oZShlKTtmdW5jdGlvbiBtZSgpe31mdW5jdGlvbiB4ZShlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoLHI9XCJcIjt0PG47dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gYmUocyxlLHQpe3ZhciB1PWUuZGlyLGw9ZS5uZXh0LGM9bHx8dSxmPXQmJlwicGFyZW50Tm9kZVwiPT09YyxwPXIrKztyZXR1cm4gZS5maXJzdD9mdW5jdGlvbihlLHQsbil7d2hpbGUoZT1lW3VdKWlmKDE9PT1lLm5vZGVUeXBlfHxmKXJldHVybiBzKGUsdCxuKTtyZXR1cm4hMX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPVtTLHBdO2lmKG4pe3doaWxlKGU9ZVt1XSlpZigoMT09PWUubm9kZVR5cGV8fGYpJiZzKGUsdCxuKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilpZihpPShvPWVba118fChlW2tdPXt9KSlbZS51bmlxdWVJRF18fChvW2UudW5pcXVlSURdPXt9KSxsJiZsPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWU9ZVt1XXx8ZTtlbHNle2lmKChyPWlbY10pJiZyWzBdPT09UyYmclsxXT09PXApcmV0dXJuIGFbMl09clsyXTtpZigoaVtjXT1hKVsyXT1zKGUsdCxuKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gd2UoaSl7cmV0dXJuIDE8aS5sZW5ndGg/ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWkubGVuZ3RoO3doaWxlKHItLSlpZighaVtyXShlLHQsbikpcmV0dXJuITE7cmV0dXJuITB9OmlbMF19ZnVuY3Rpb24gVGUoZSx0LG4scixpKXtmb3IodmFyIG8sYT1bXSxzPTAsdT1lLmxlbmd0aCxsPW51bGwhPXQ7czx1O3MrKykobz1lW3NdKSYmKG4mJiFuKG8scixpKXx8KGEucHVzaChvKSxsJiZ0LnB1c2gocykpKTtyZXR1cm4gYX1mdW5jdGlvbiBDZShkLGgsZyx2LHksZSl7cmV0dXJuIHYmJiF2W2tdJiYodj1DZSh2KSkseSYmIXlba10mJih5PUNlKHksZSkpLGxlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVtdLHU9W10sbD10Lmxlbmd0aCxjPWV8fGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspc2UoZSx0W3JdLG4pO3JldHVybiBufShofHxcIipcIixuLm5vZGVUeXBlP1tuXTpuLFtdKSxmPSFkfHwhZSYmaD9jOlRlKGMscyxkLG4scikscD1nP3l8fChlP2Q6bHx8dik/W106dDpmO2lmKGcmJmcoZixwLG4sciksdil7aT1UZShwLHUpLHYoaSxbXSxuLHIpLG89aS5sZW5ndGg7d2hpbGUoby0tKShhPWlbb10pJiYocFt1W29dXT0hKGZbdVtvXV09YSkpfWlmKGUpe2lmKHl8fGQpe2lmKHkpe2k9W10sbz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJmkucHVzaChmW29dPWEpO3kobnVsbCxwPVtdLGkscil9bz1wLmxlbmd0aDt3aGlsZShvLS0pKGE9cFtvXSkmJi0xPChpPXk/UChlLGEpOnNbb10pJiYoZVtpXT0hKHRbaV09YSkpfX1lbHNlIHA9VGUocD09PXQ/cC5zcGxpY2UobCxwLmxlbmd0aCk6cCkseT95KG51bGwsdCxwLHIpOkguYXBwbHkodCxwKX0pfWZ1bmN0aW9uIEVlKGUpe2Zvcih2YXIgaSx0LG4scj1lLmxlbmd0aCxvPWIucmVsYXRpdmVbZVswXS50eXBlXSxhPW98fGIucmVsYXRpdmVbXCIgXCJdLHM9bz8xOjAsdT1iZShmdW5jdGlvbihlKXtyZXR1cm4gZT09PWl9LGEsITApLGw9YmUoZnVuY3Rpb24oZSl7cmV0dXJuLTE8UChpLGUpfSxhLCEwKSxjPVtmdW5jdGlvbihlLHQsbil7dmFyIHI9IW8mJihufHx0IT09dyl8fCgoaT10KS5ub2RlVHlwZT91KGUsdCxuKTpsKGUsdCxuKSk7cmV0dXJuIGk9bnVsbCxyfV07czxyO3MrKylpZih0PWIucmVsYXRpdmVbZVtzXS50eXBlXSljPVtiZSh3ZShjKSx0KV07ZWxzZXtpZigodD1iLmZpbHRlcltlW3NdLnR5cGVdLmFwcGx5KG51bGwsZVtzXS5tYXRjaGVzKSlba10pe2ZvcihuPSsrcztuPHI7bisrKWlmKGIucmVsYXRpdmVbZVtuXS50eXBlXSlicmVhaztyZXR1cm4gQ2UoMTxzJiZ3ZShjKSwxPHMmJnhlKGUuc2xpY2UoMCxzLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1lW3MtMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoQixcIiQxXCIpLHQsczxuJiZFZShlLnNsaWNlKHMsbikpLG48ciYmRWUoZT1lLnNsaWNlKG4pKSxuPHImJnhlKGUpKX1jLnB1c2godCl9cmV0dXJuIHdlKGMpfXJldHVybiBtZS5wcm90b3R5cGU9Yi5maWx0ZXJzPWIucHNldWRvcyxiLnNldEZpbHRlcnM9bmV3IG1lLGg9c2UudG9rZW5pemU9ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHMsdSxsPXhbZStcIiBcIl07aWYobClyZXR1cm4gdD8wOmwuc2xpY2UoMCk7YT1lLHM9W10sdT1iLnByZUZpbHRlcjt3aGlsZShhKXtmb3IobyBpbiBuJiYhKHI9Xy5leGVjKGEpKXx8KHImJihhPWEuc2xpY2UoclswXS5sZW5ndGgpfHxhKSxzLnB1c2goaT1bXSkpLG49ITEsKHI9ei5leGVjKGEpKSYmKG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOnJbMF0ucmVwbGFjZShCLFwiIFwiKX0pLGE9YS5zbGljZShuLmxlbmd0aCkpLGIuZmlsdGVyKSEocj1HW29dLmV4ZWMoYSkpfHx1W29dJiYhKHI9dVtvXShyKSl8fChuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpvLG1hdGNoZXM6cn0pLGE9YS5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P2EubGVuZ3RoOmE/c2UuZXJyb3IoZSk6eChlLHMpLnNsaWNlKDApfSxmPXNlLmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbix2LHksbSx4LHIsaT1bXSxvPVtdLGE9TltlK1wiIFwiXTtpZighYSl7dHx8KHQ9aChlKSksbj10Lmxlbmd0aDt3aGlsZShuLS0pKGE9RWUodFtuXSkpW2tdP2kucHVzaChhKTpvLnB1c2goYSk7KGE9TihlLCh2PW8sbT0wPCh5PWkpLmxlbmd0aCx4PTA8di5sZW5ndGgscj1mdW5jdGlvbihlLHQsbixyLGkpe3ZhciBvLGEscyx1PTAsbD1cIjBcIixjPWUmJltdLGY9W10scD13LGQ9ZXx8eCYmYi5maW5kLlRBRyhcIipcIixpKSxoPVMrPW51bGw9PXA/MTpNYXRoLnJhbmRvbSgpfHwuMSxnPWQubGVuZ3RoO2ZvcihpJiYodz10PT09Q3x8dHx8aSk7bCE9PWcmJm51bGwhPShvPWRbbF0pO2wrKyl7aWYoeCYmbyl7YT0wLHR8fG8ub3duZXJEb2N1bWVudD09PUN8fChUKG8pLG49IUUpO3doaWxlKHM9dlthKytdKWlmKHMobyx0fHxDLG4pKXtyLnB1c2gobyk7YnJlYWt9aSYmKFM9aCl9bSYmKChvPSFzJiZvKSYmdS0tLGUmJmMucHVzaChvKSl9aWYodSs9bCxtJiZsIT09dSl7YT0wO3doaWxlKHM9eVthKytdKXMoYyxmLHQsbik7aWYoZSl7aWYoMDx1KXdoaWxlKGwtLSljW2xdfHxmW2xdfHwoZltsXT1xLmNhbGwocikpO2Y9VGUoZil9SC5hcHBseShyLGYpLGkmJiFlJiYwPGYubGVuZ3RoJiYxPHUreS5sZW5ndGgmJnNlLnVuaXF1ZVNvcnQocil9cmV0dXJuIGkmJihTPWgsdz1wKSxjfSxtP2xlKHIpOnIpKSkuc2VsZWN0b3I9ZX1yZXR1cm4gYX0sZz1zZS5zZWxlY3Q9ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPVwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUsYz0hciYmaChlPWwuc2VsZWN0b3J8fGUpO2lmKG49bnx8W10sMT09PWMubGVuZ3RoKXtpZigyPChvPWNbMF09Y1swXS5zbGljZSgwKSkubGVuZ3RoJiZcIklEXCI9PT0oYT1vWzBdKS50eXBlJiY5PT09dC5ub2RlVHlwZSYmRSYmYi5yZWxhdGl2ZVtvWzFdLnR5cGVdKXtpZighKHQ9KGIuZmluZC5JRChhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksdCl8fFtdKVswXSkpcmV0dXJuIG47bCYmKHQ9dC5wYXJlbnROb2RlKSxlPWUuc2xpY2Uoby5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1HLm5lZWRzQ29udGV4dC50ZXN0KGUpPzA6by5sZW5ndGg7d2hpbGUoaS0tKXtpZihhPW9baV0sYi5yZWxhdGl2ZVtzPWEudHlwZV0pYnJlYWs7aWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX19cmV0dXJuKGx8fGYoZSxjKSkocix0LCFFLG4sIXR8fGVlLnRlc3QoZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpLG59LGQuc29ydFN0YWJsZT1rLnNwbGl0KFwiXCIpLnNvcnQoRCkuam9pbihcIlwiKT09PWssZC5kZXRlY3REdXBsaWNhdGVzPSEhbCxUKCksZC5zb3J0RGV0YWNoZWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihlLHQsbil7aWYoIW4pcmV0dXJuIGUuZ2V0QXR0cmlidXRlKHQsXCJ0eXBlXCI9PT10LnRvTG93ZXJDYXNlKCk/MToyKX0pLGQuYXR0cmlidXRlcyYmY2UoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGZlKFwidmFsdWVcIixmdW5jdGlvbihlLHQsbil7aWYoIW4mJlwiaW5wdXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4gZS5kZWZhdWx0VmFsdWV9KSxjZShmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxmZShSLGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pLHNlfShDKTtrLmZpbmQ9aCxrLmV4cHI9aC5zZWxlY3RvcnMsay5leHByW1wiOlwiXT1rLmV4cHIucHNldWRvcyxrLnVuaXF1ZVNvcnQ9ay51bmlxdWU9aC51bmlxdWVTb3J0LGsudGV4dD1oLmdldFRleHQsay5pc1hNTERvYz1oLmlzWE1MLGsuY29udGFpbnM9aC5jb250YWlucyxrLmVzY2FwZVNlbGVjdG9yPWguZXNjYXBlO3ZhciBUPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1bXSxpPXZvaWQgMCE9PW47d2hpbGUoKGU9ZVt0XSkmJjkhPT1lLm5vZGVUeXBlKWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZrKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sUz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0sTj1rLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBEPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIGooZSxuLHIpe3JldHVybiBtKG4pP2suZ3JlcChlLGZ1bmN0aW9uKGUsdCl7cmV0dXJuISFuLmNhbGwoZSx0LGUpIT09cn0pOm4ubm9kZVR5cGU/ay5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pOlwic3RyaW5nXCIhPXR5cGVvZiBuP2suZ3JlcChlLGZ1bmN0aW9uKGUpe3JldHVybi0xPGkuY2FsbChuLGUpIT09cn0pOmsuZmlsdGVyKG4sZSxyKX1rLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/ay5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTprLmZpbmQubWF0Y2hlcyhlLGsuZ3JlcCh0LGZ1bmN0aW9uKGUpe3JldHVybiAxPT09ZS5ub2RlVHlwZX0pKX0say5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyPXRoaXMubGVuZ3RoLGk9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gdGhpcy5wdXNoU3RhY2soayhlKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoay5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihuPXRoaXMucHVzaFN0YWNrKFtdKSx0PTA7dDxyO3QrKylrLmZpbmQoZSxpW3RdLG4pO3JldHVybiAxPHI/ay51bmlxdWVTb3J0KG4pOm59LGZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soaih0aGlzLGV8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGUpe3JldHVybiEhaih0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBlJiZOLnRlc3QoZSk/ayhlKTplfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBxLEw9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC87KGsuZm4uaW5pdD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZighZSlyZXR1cm4gdGhpcztpZihuPW58fHEsXCJzdHJpbmdcIj09dHlwZW9mIGUpe2lmKCEocj1cIjxcIj09PWVbMF0mJlwiPlwiPT09ZVtlLmxlbmd0aC0xXSYmMzw9ZS5sZW5ndGg/W251bGwsZSxudWxsXTpMLmV4ZWMoZSkpfHwhclsxXSYmdClyZXR1cm4hdHx8dC5qcXVlcnk/KHR8fG4pLmZpbmQoZSk6dGhpcy5jb25zdHJ1Y3Rvcih0KS5maW5kKGUpO2lmKHJbMV0pe2lmKHQ9dCBpbnN0YW5jZW9mIGs/dFswXTp0LGsubWVyZ2UodGhpcyxrLnBhcnNlSFRNTChyWzFdLHQmJnQubm9kZVR5cGU/dC5vd25lckRvY3VtZW50fHx0OkUsITApKSxELnRlc3QoclsxXSkmJmsuaXNQbGFpbk9iamVjdCh0KSlmb3IociBpbiB0KW0odGhpc1tyXSk/dGhpc1tyXSh0W3JdKTp0aGlzLmF0dHIocix0W3JdKTtyZXR1cm4gdGhpc31yZXR1cm4oaT1FLmdldEVsZW1lbnRCeUlkKHJbMl0pKSYmKHRoaXNbMF09aSx0aGlzLmxlbmd0aD0xKSx0aGlzfXJldHVybiBlLm5vZGVUeXBlPyh0aGlzWzBdPWUsdGhpcy5sZW5ndGg9MSx0aGlzKTptKGUpP3ZvaWQgMCE9PW4ucmVhZHk/bi5yZWFkeShlKTplKGspOmsubWFrZUFycmF5KGUsdGhpcyl9KS5wcm90b3R5cGU9ay5mbixxPWsoRSk7dmFyIEg9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sTz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtmdW5jdGlvbiBQKGUsdCl7d2hpbGUoKGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlKTtyZXR1cm4gZX1rLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGUpe3ZhciB0PWsoZSx0aGlzKSxuPXQubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8bjtlKyspaWYoay5jb250YWlucyh0aGlzLHRbZV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJmsoZSk7aWYoIU4udGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZrLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/ay51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoayhlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGsudW5pcXVlU29ydChrLm1lcmdlKHRoaXMuZ2V0KCksayhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxrLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFQoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gUChlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIFAoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gVChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gVChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gVChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBTKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gUyhlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgZS5jb250ZW50RG9jdW1lbnQ/ZS5jb250ZW50RG9jdW1lbnQ6KEEoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLGsubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe2suZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1rLm1hcCh0aGlzLGksZSk7cmV0dXJuXCJVbnRpbFwiIT09ci5zbGljZSgtNSkmJih0PWUpLHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1rLmZpbHRlcih0LG4pKSwxPHRoaXMubGVuZ3RoJiYoT1tyXXx8ay51bmlxdWVTb3J0KG4pLEgudGVzdChyKSYmbi5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBSPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBNKGUpe3JldHVybiBlfWZ1bmN0aW9uIEkoZSl7dGhyb3cgZX1mdW5jdGlvbiBXKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1rLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LGsuZWFjaChlLm1hdGNoKFIpfHxbXSxmdW5jdGlvbihlLHQpe25bdF09ITB9KSxuKTprLmV4dGVuZCh7fSxyKTt2YXIgaSx0LG8sYSxzPVtdLHU9W10sbD0tMSxjPWZ1bmN0aW9uKCl7Zm9yKGE9YXx8ci5vbmNlLG89aT0hMDt1Lmxlbmd0aDtsPS0xKXt0PXUuc2hpZnQoKTt3aGlsZSgrK2w8cy5sZW5ndGgpITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpfXIubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtrLmVhY2goZSxmdW5jdGlvbihlLHQpe20odCk/ci51bmlxdWUmJmYuaGFzKHQpfHxzLnB1c2godCk6dCYmdC5sZW5ndGgmJlwic3RyaW5nXCIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1rLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxrLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxrLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixrLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxrLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsay5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxrLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixrLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLGsuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gay5EZWZlcnJlZChmdW5jdGlvbihyKXtrLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXStcIldpdGhcIl0odGhpcyxuP1tlXTphcmd1bWVudHMpfSl9KSxpPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxuLHIpe3ZhciB1PTA7ZnVuY3Rpb24gbChpLG8sYSxzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLGU9ZnVuY3Rpb24oKXt2YXIgZSx0O2lmKCEoaTx1KSl7aWYoKGU9YS5hcHBseShuLHIpKT09PW8ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sbSh0KT9zP3QuY2FsbChlLGwodSxvLE0scyksbCh1LG8sSSxzKSk6KHUrKyx0LmNhbGwoZSxsKHUsbyxNLHMpLGwodSxvLEkscyksbCh1LG8sTSxvLm5vdGlmeVdpdGgpKSk6KGEhPT1NJiYobj12b2lkIDAscj1bZV0pLChzfHxvLnJlc29sdmVXaXRoKShuLHIpKX19LHQ9cz9lOmZ1bmN0aW9uKCl7dHJ5e2UoKX1jYXRjaChlKXtrLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJmsuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLHQuc3RhY2tUcmFjZSksdTw9aSsxJiYoYSE9PUkmJihuPXZvaWQgMCxyPVtlXSksby5yZWplY3RXaXRoKG4scikpfX07aT90KCk6KGsuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYodC5zdGFja1RyYWNlPWsuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLEMuc2V0VGltZW91dCh0KSl9fXJldHVybiBrLkRlZmVycmVkKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpNLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpNKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOkkpKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9rLmV4dGVuZChlLGEpOmF9fSxzPXt9O3JldHVybiBrLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPXRbMl0scj10WzVdO2FbdFsxXV09bi5hZGQsciYmbi5hZGQoZnVuY3Rpb24oKXtpPXJ9LG9bMy1lXVsyXS5kaXNhYmxlLG9bMy1lXVszXS5kaXNhYmxlLG9bMF1bMl0ubG9jayxvWzBdWzNdLmxvY2spLG4uYWRkKHRbM10uZmlyZSksc1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBzW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1zP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sc1t0WzBdK1wiV2l0aFwiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89ay5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKFcoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksXCJwZW5kaW5nXCI9PT1vLnN0YXRlKCl8fG0oaVt0XSYmaVt0XS50aGVuKSkpcmV0dXJuIG8udGhlbigpO3doaWxlKHQtLSlXKGlbdF0sYSh0KSxvLnJlamVjdCk7cmV0dXJuIG8ucHJvbWlzZSgpfX0pO3ZhciAkPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO2suRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihlLHQpe0MuY29uc29sZSYmQy5jb25zb2xlLndhcm4mJmUmJiQudGVzdChlLm5hbWUpJiZDLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2UubWVzc2FnZSxlLnN0YWNrLHQpfSxrLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe0Muc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIEY9ay5EZWZlcnJlZCgpO2Z1bmN0aW9uIEIoKXtFLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpLGsucmVhZHkoKX1rLmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtrLnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30say5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLWsucmVhZHlXYWl0OmsuaXNSZWFkeSl8fChrLmlzUmVhZHk9ITApIT09ZSYmMDwtLWsucmVhZHlXYWl0fHxGLnJlc29sdmVXaXRoKEUsW2tdKX19KSxrLnJlYWR5LnRoZW49Ri50aGVuLFwiY29tcGxldGVcIj09PUUucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1FLnJlYWR5U3RhdGUmJiFFLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9DLnNldFRpbWVvdXQoay5yZWFkeSk6KEUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQikpO3ZhciBfPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXcobikpZm9yKHMgaW4gaT0hMCxuKV8oZSx0LHMsbltzXSwhMCxvLGEpO2Vsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsbShyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbChrKGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LHo9L14tbXMtLyxVPS8tKFthLXpdKS9nO2Z1bmN0aW9uIFgoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIFYoZSl7cmV0dXJuIGUucmVwbGFjZSh6LFwibXMtXCIpLnJlcGxhY2UoVSxYKX12YXIgRz1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIFkoKXt0aGlzLmV4cGFuZG89ay5leHBhbmRvK1kudWlkKyt9WS51aWQ9MSxZLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxHKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW1YodCldPW47ZWxzZSBmb3IociBpbiB0KWlbVihyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtWKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKFYpOih0PVYodCkpaW4gcj9bdF06dC5tYXRjaChSKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fGsuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIWsuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBRPW5ldyBZLEo9bmV3IFksSz0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sWj0vW0EtWl0vZztmdW5jdGlvbiBlZShlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoWixcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOksudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31KLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1rLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gSi5oYXNEYXRhKGUpfHxRLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBKLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtKLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfX0pLGsuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9Si5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFRLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7dD1hLmxlbmd0aDt3aGlsZSh0LS0pYVt0XSYmMD09PShyPWFbdF0ubmFtZSkuaW5kZXhPZihcImRhdGEtXCIpJiYocj1WKHIuc2xpY2UoNSkpLGVlKG8scixpW3JdKSk7US5zZXQobyxcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gaX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2Ygbj90aGlzLmVhY2goZnVuY3Rpb24oKXtKLnNldCh0aGlzLG4pfSk6Xyh0aGlzLGZ1bmN0aW9uKGUpe3ZhciB0O2lmKG8mJnZvaWQgMD09PWUpcmV0dXJuIHZvaWQgMCE9PSh0PUouZ2V0KG8sbikpP3Q6dm9pZCAwIT09KHQ9ZWUobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Si5zZXQodGhpcyxuLGUpfSl9LG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe0oucmVtb3ZlKHRoaXMsZSl9KX19KSxrLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9US5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1RLmFjY2VzcyhlLHQsay5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1rLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPWsuX3F1ZXVlSG9va3MoZSx0KTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsZnVuY3Rpb24oKXtrLmRlcXVldWUoZSx0KX0sbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBRLmdldChlLG4pfHxRLmFjY2VzcyhlLG4se2VtcHR5OmsuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7US5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxrLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP2sucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ay5xdWV1ZSh0aGlzLHQsbik7ay5fcXVldWVIb29rcyh0aGlzLHQpLFwiZnhcIj09PXQmJlwiaW5wcm9ncmVzc1wiIT09ZVswXSYmay5kZXF1ZXVlKHRoaXMsdCl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ay5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9ay5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPVEuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgdGU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLG5lPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK3RlK1wiKShbYS16JV0qKSRcIixcImlcIikscmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLGllPUUuZG9jdW1lbnRFbGVtZW50LG9lPWZ1bmN0aW9uKGUpe3JldHVybiBrLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sYWU9e2NvbXBvc2VkOiEwfTtpZS5nZXRSb290Tm9kZSYmKG9lPWZ1bmN0aW9uKGUpe3JldHVybiBrLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShhZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgc2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJm9lKGUpJiZcIm5vbmVcIj09PWsuY3NzKGUsXCJkaXNwbGF5XCIpfSx1ZT1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGE9e307Zm9yKG8gaW4gdClhW29dPWUuc3R5bGVbb10sZS5zdHlsZVtvXT10W29dO2ZvcihvIGluIGk9bi5hcHBseShlLHJ8fFtdKSx0KWUuc3R5bGVbb109YVtvXTtyZXR1cm4gaX07ZnVuY3Rpb24gbGUoZSx0LG4scil7dmFyIGksbyxhPTIwLHM9cj9mdW5jdGlvbigpe3JldHVybiByLmN1cigpfTpmdW5jdGlvbigpe3JldHVybiBrLmNzcyhlLHQsXCJcIil9LHU9cygpLGw9biYmblszXXx8KGsuY3NzTnVtYmVyW3RdP1wiXCI6XCJweFwiKSxjPWUubm9kZVR5cGUmJihrLmNzc051bWJlclt0XXx8XCJweFwiIT09bCYmK3UpJiZuZS5leGVjKGsuY3NzKGUsdCkpO2lmKGMmJmNbM10hPT1sKXt1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO3doaWxlKGEtLSlrLnN0eWxlKGUsdCxjK2wpLCgxLW8pKigxLShvPXMoKS91fHwuNSkpPD0wJiYoYT0wKSxjLz1vO2MqPTIsay5zdHlsZShlLHQsYytsKSxuPW58fFtdfXJldHVybiBuJiYoYz0rY3x8K3V8fDAsaT1uWzFdP2MrKG5bMV0rMSkqblsyXTorblsyXSxyJiYoci51bml0PWwsci5zdGFydD1jLHIuZW5kPWkpKSxpfXZhciBjZT17fTtmdW5jdGlvbiBmZShlLHQpe2Zvcih2YXIgbixyLGksbyxhLHMsdSxsPVtdLGM9MCxmPWUubGVuZ3RoO2M8ZjtjKyspKHI9ZVtjXSkuc3R5bGUmJihuPXIuc3R5bGUuZGlzcGxheSx0PyhcIm5vbmVcIj09PW4mJihsW2NdPVEuZ2V0KHIsXCJkaXNwbGF5XCIpfHxudWxsLGxbY118fChyLnN0eWxlLmRpc3BsYXk9XCJcIikpLFwiXCI9PT1yLnN0eWxlLmRpc3BsYXkmJnNlKHIpJiYobFtjXT0odT1hPW89dm9pZCAwLGE9KGk9cikub3duZXJEb2N1bWVudCxzPWkubm9kZU5hbWUsKHU9Y2Vbc10pfHwobz1hLmJvZHkuYXBwZW5kQ2hpbGQoYS5jcmVhdGVFbGVtZW50KHMpKSx1PWsuY3NzKG8sXCJkaXNwbGF5XCIpLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKSxcIm5vbmVcIj09PXUmJih1PVwiYmxvY2tcIiksY2Vbc109dSkpKSk6XCJub25lXCIhPT1uJiYobFtjXT1cIm5vbmVcIixRLnNldChyLFwiZGlzcGxheVwiLG4pKSk7Zm9yKGM9MDtjPGY7YysrKW51bGwhPWxbY10mJihlW2NdLnN0eWxlLmRpc3BsYXk9bFtjXSk7cmV0dXJuIGV9ay5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24oKXtyZXR1cm4gZmUodGhpcywhMCl9LGhpZGU6ZnVuY3Rpb24oKXtyZXR1cm4gZmUodGhpcyl9LHRvZ2dsZTpmdW5jdGlvbihlKXtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGU/ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTp0aGlzLmVhY2goZnVuY3Rpb24oKXtzZSh0aGlzKT9rKHRoaXMpLnNob3coKTprKHRoaXMpLmhpZGUoKX0pfX0pO3ZhciBwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxnZT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2Z1bmN0aW9uIHZlKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkEoZSx0KT9rLm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHllKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKVEuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFEuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1nZS5vcHRncm91cD1nZS5vcHRpb24sZ2UudGJvZHk9Z2UudGZvb3Q9Z2UuY29sZ3JvdXA9Z2UuY2FwdGlvbj1nZS50aGVhZCxnZS50aD1nZS50ZDt2YXIgbWUseGUsYmU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHdlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXcobykpay5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYoYmUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStrLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7ay5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmLTE8ay5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1vZShvKSxhPXZlKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmeWUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfW1lPUUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcImRpdlwiKSksKHhlPUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSx4ZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLHhlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksbWUuYXBwZW5kQ2hpbGQoeGUpLHkuY2hlY2tDbG9uZT1tZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsbWUuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLHkubm9DbG9uZUNoZWNrZWQ9ISFtZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7dmFyIFRlPS9ea2V5LyxDZT0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sRWU9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBrZSgpe3JldHVybiEwfWZ1bmN0aW9uIFNlKCl7cmV0dXJuITF9ZnVuY3Rpb24gTmUoZSx0KXtyZXR1cm4gZT09PWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBFLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goZSl7fX0oKT09KFwiZm9jdXNcIj09PXQpfWZ1bmN0aW9uIEFlKGUsdCxuLHIsaSxvKXt2YXIgYSxzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXtmb3IocyBpblwic3RyaW5nXCIhPXR5cGVvZiBuJiYocj1yfHxuLG49dm9pZCAwKSx0KUFlKGUscyxuLHIsdFtzXSxvKTtyZXR1cm4gZX1pZihudWxsPT1yJiZudWxsPT1pPyhpPW4scj1uPXZvaWQgMCk6bnVsbD09aSYmKFwic3RyaW5nXCI9PXR5cGVvZiBuPyhpPXIscj12b2lkIDApOihpPXIscj1uLG49dm9pZCAwKSksITE9PT1pKWk9U2U7ZWxzZSBpZighaSlyZXR1cm4gZTtyZXR1cm4gMT09PW8mJihhPWksKGk9ZnVuY3Rpb24oZSl7cmV0dXJuIGsoKS5vZmYoZSksYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9KS5ndWlkPWEuZ3VpZHx8KGEuZ3VpZD1rLmd1aWQrKykpLGUuZWFjaChmdW5jdGlvbigpe2suZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KX1mdW5jdGlvbiBEZShlLGksbyl7bz8oUS5zZXQoZSxpLCExKSxrLmV2ZW50LmFkZChlLGkse25hbWVzcGFjZTohMSxoYW5kbGVyOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj1RLmdldCh0aGlzLGkpO2lmKDEmZS5pc1RyaWdnZXImJnRoaXNbaV0pe2lmKHIubGVuZ3RoKShrLmV2ZW50LnNwZWNpYWxbaV18fHt9KS5kZWxlZ2F0ZVR5cGUmJmUuc3RvcFByb3BhZ2F0aW9uKCk7ZWxzZSBpZihyPXMuY2FsbChhcmd1bWVudHMpLFEuc2V0KHRoaXMsaSxyKSx0PW8odGhpcyxpKSx0aGlzW2ldKCksciE9PShuPVEuZ2V0KHRoaXMsaSkpfHx0P1Euc2V0KHRoaXMsaSwhMSk6bj17fSxyIT09bilyZXR1cm4gZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSxlLnByZXZlbnREZWZhdWx0KCksbi52YWx1ZX1lbHNlIHIubGVuZ3RoJiYoUS5zZXQodGhpcyxpLHt2YWx1ZTprLmV2ZW50LnRyaWdnZXIoay5leHRlbmQoclswXSxrLkV2ZW50LnByb3RvdHlwZSksci5zbGljZSgxKSx0aGlzKX0pLGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfX0pKTp2b2lkIDA9PT1RLmdldChlLGkpJiZrLmV2ZW50LmFkZChlLGksa2UpfWsuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbyxhLHMsdSxsLGMsZixwLGQsaCxnLHY9US5nZXQodCk7aWYodil7bi5oYW5kbGVyJiYobj0obz1uKS5oYW5kbGVyLGk9by5zZWxlY3RvciksaSYmay5maW5kLm1hdGNoZXNTZWxlY3RvcihpZSxpKSxuLmd1aWR8fChuLmd1aWQ9ay5ndWlkKyspLCh1PXYuZXZlbnRzKXx8KHU9di5ldmVudHM9e30pLChhPXYuaGFuZGxlKXx8KGE9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGsmJmsuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP2suZXZlbnQuZGlzcGF0Y2guYXBwbHkodCxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KGU9KGV8fFwiXCIpLm1hdGNoKFIpfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0pZD1nPShzPUVlLmV4ZWMoZVtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQmJihmPWsuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0oaT9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZCxmPWsuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz1rLmV4dGVuZCh7dHlwZTpkLG9yaWdUeXBlOmcsZGF0YTpyLGhhbmRsZXI6bixndWlkOm4uZ3VpZCxzZWxlY3RvcjppLG5lZWRzQ29udGV4dDppJiZrLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksbmFtZXNwYWNlOmguam9pbihcIi5cIil9LG8pLChwPXVbZF0pfHwoKHA9dVtkXT1bXSkuZGVsZWdhdGVDb3VudD0wLGYuc2V0dXAmJiExIT09Zi5zZXR1cC5jYWxsKHQscixoLGEpfHx0LmFkZEV2ZW50TGlzdGVuZXImJnQuYWRkRXZlbnRMaXN0ZW5lcihkLGEpKSxmLmFkZCYmKGYuYWRkLmNhbGwodCxjKSxjLmhhbmRsZXIuZ3VpZHx8KGMuaGFuZGxlci5ndWlkPW4uZ3VpZCkpLGk/cC5zcGxpY2UocC5kZWxlZ2F0ZUNvdW50KyssMCxjKTpwLnB1c2goYyksay5ldmVudC5nbG9iYWxbZF09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVEuaGFzRGF0YShlKSYmUS5nZXQoZSk7aWYodiYmKHU9di5ldmVudHMpKXtsPSh0PSh0fHxcIlwiKS5tYXRjaChSKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWlmKGQ9Zz0ocz1FZS5leGVjKHRbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtmPWsuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxhPW89cC5sZW5ndGg7d2hpbGUoby0tKWM9cFtvXSwhaSYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8cyYmIXMudGVzdChjLm5hbWVzcGFjZSl8fHImJnIhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxmLnJlbW92ZSYmZi5yZW1vdmUuY2FsbChlLGMpKTthJiYhcC5sZW5ndGgmJihmLnRlYXJkb3duJiYhMSE9PWYudGVhcmRvd24uY2FsbChlLGgsdi5oYW5kbGUpfHxrLnJlbW92ZUV2ZW50KGUsZCx2LmhhbmRsZSksZGVsZXRlIHVbZF0pfWVsc2UgZm9yKGQgaW4gdSlrLmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO2suaXNFbXB0eU9iamVjdCh1KSYmUS5yZW1vdmUoZSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscz1rLmV2ZW50LmZpeChlKSx1PW5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKSxsPShRLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbcy50eXBlXXx8W10sYz1rLmV2ZW50LnNwZWNpYWxbcy50eXBlXXx8e307Zm9yKHVbMF09cyx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl1W3RdPWFyZ3VtZW50c1t0XTtpZihzLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMscykpe2E9ay5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMscyxsKSx0PTA7d2hpbGUoKGk9YVt0KytdKSYmIXMuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7cy5jdXJyZW50VGFyZ2V0PWkuZWxlbSxuPTA7d2hpbGUoKG89aS5oYW5kbGVyc1tuKytdKSYmIXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSlzLnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiFzLnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fChzLmhhbmRsZU9iaj1vLHMuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChrLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHUpKSYmITE9PT0ocy5yZXN1bHQ9cikmJihzLnByZXZlbnREZWZhdWx0KCkscy5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHMpLHMucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmMTw9ZS5idXR0b24pKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8ayhpLHRoaXMpLmluZGV4KGwpOmsuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShrLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbay5leHBhbmRvXT9lOm5ldyBrLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkRlKHQsXCJjbGlja1wiLGtlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZEZSh0LFwiY2xpY2tcIiksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZRLmdldCh0LFwiY2xpY2tcIil8fEEodCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0say5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0say5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGsuRXZlbnQpKXJldHVybiBuZXcgay5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP2tlOlNlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJmsuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1trLmV4cGFuZG9dPSEwfSxrLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6ay5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6U2UsaXNQcm9wYWdhdGlvblN0b3BwZWQ6U2UsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6U2UsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9a2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9a2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPWtlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxrLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsXCJjaGFyXCI6ITAsY29kZTohMCxjaGFyQ29kZTohMCxrZXk6ITAsa2V5Q29kZTohMCxidXR0b246ITAsYnV0dG9uczohMCxjbGllbnRYOiEwLGNsaWVudFk6ITAsb2Zmc2V0WDohMCxvZmZzZXRZOiEwLHBvaW50ZXJJZDohMCxwb2ludGVyVHlwZTohMCxzY3JlZW5YOiEwLHNjcmVlblk6ITAsdGFyZ2V0VG91Y2hlczohMCx0b0VsZW1lbnQ6ITAsdG91Y2hlczohMCx3aGljaDpmdW5jdGlvbihlKXt2YXIgdD1lLmJ1dHRvbjtyZXR1cm4gbnVsbD09ZS53aGljaCYmVGUudGVzdChlLnR5cGUpP251bGwhPWUuY2hhckNvZGU/ZS5jaGFyQ29kZTplLmtleUNvZGU6IWUud2hpY2gmJnZvaWQgMCE9PXQmJkNlLnRlc3QoZS50eXBlKT8xJnQ/MToyJnQ/Mzo0JnQ/MjowOmUud2hpY2h9fSxrLmV2ZW50LmFkZFByb3ApLGsuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGUsdCl7ay5ldmVudC5zcGVjaWFsW2VdPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBEZSh0aGlzLGUsTmUpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIERlKHRoaXMsZSksITB9LGRlbGVnYXRlVHlwZTp0fX0pLGsuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihlLGkpe2suZXZlbnQuc3BlY2lhbFtlXT17ZGVsZWdhdGVUeXBlOmksYmluZFR5cGU6aSxoYW5kbGU6ZnVuY3Rpb24oZSl7dmFyIHQsbj1lLnJlbGF0ZWRUYXJnZXQscj1lLmhhbmRsZU9iajtyZXR1cm4gbiYmKG49PT10aGlzfHxrLmNvbnRhaW5zKHRoaXMsbikpfHwoZS50eXBlPXIub3JpZ1R5cGUsdD1yLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGUudHlwZT1pKSx0fX19KSxrLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIEFlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gQWUodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosayhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49U2UpLHRoaXMuZWFjaChmdW5jdGlvbigpe2suZXZlbnQucmVtb3ZlKHRoaXMsZSxuLHQpfSl9fSk7dmFyIGplPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKilbXj5dKilcXC8+L2dpLHFlPS88c2NyaXB0fDxzdHlsZXw8bGluay9pLExlPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksSGU9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO2Z1bmN0aW9uIE9lKGUsdCl7cmV0dXJuIEEoZSxcInRhYmxlXCIpJiZBKDExIT09dC5ub2RlVHlwZT90OnQuZmlyc3RDaGlsZCxcInRyXCIpJiZrKGUpLmNoaWxkcmVuKFwidGJvZHlcIilbMF18fGV9ZnVuY3Rpb24gUGUoZSl7cmV0dXJuIGUudHlwZT0obnVsbCE9PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrZS50eXBlLGV9ZnVuY3Rpb24gUmUoZSl7cmV0dXJuXCJ0cnVlL1wiPT09KGUudHlwZXx8XCJcIikuc2xpY2UoMCw1KT9lLnR5cGU9ZS50eXBlLnNsaWNlKDUpOmUucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxlfWZ1bmN0aW9uIE1lKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbDtpZigxPT09dC5ub2RlVHlwZSl7aWYoUS5oYXNEYXRhKGUpJiYobz1RLmFjY2VzcyhlKSxhPVEuc2V0KHQsbyksbD1vLmV2ZW50cykpZm9yKGkgaW4gZGVsZXRlIGEuaGFuZGxlLGEuZXZlbnRzPXt9LGwpZm9yKG49MCxyPWxbaV0ubGVuZ3RoO248cjtuKyspay5ldmVudC5hZGQodCxpLGxbaV1bbl0pO0ouaGFzRGF0YShlKSYmKHM9Si5hY2Nlc3MoZSksdT1rLmV4dGVuZCh7fSxzKSxKLnNldCh0LHUpKX19ZnVuY3Rpb24gSWUobixyLGksbyl7cj1nLmFwcGx5KFtdLHIpO3ZhciBlLHQsYSxzLHUsbCxjPTAsZj1uLmxlbmd0aCxwPWYtMSxkPXJbMF0saD1tKGQpO2lmKGh8fDE8ZiYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJiF5LmNoZWNrQ2xvbmUmJkxlLnRlc3QoZCkpcmV0dXJuIG4uZWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmVxKGUpO2gmJihyWzBdPWQuY2FsbCh0aGlzLGUsdC5odG1sKCkpKSxJZSh0LHIsaSxvKX0pO2lmKGYmJih0PShlPXdlKHIsblswXS5vd25lckRvY3VtZW50LCExLG4sbykpLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPXQpLHR8fG8pKXtmb3Iocz0oYT1rLm1hcCh2ZShlLFwic2NyaXB0XCIpLFBlKSkubGVuZ3RoO2M8ZjtjKyspdT1lLGMhPT1wJiYodT1rLmNsb25lKHUsITAsITApLHMmJmsubWVyZ2UoYSx2ZSh1LFwic2NyaXB0XCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxrLm1hcChhLFJlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fFwiXCIpJiYhUS5hY2Nlc3ModSxcImdsb2JhbEV2YWxcIikmJmsuY29udGFpbnMobCx1KSYmKHUuc3JjJiZcIm1vZHVsZVwiIT09KHUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT9rLl9ldmFsVXJsJiYhdS5ub01vZHVsZSYmay5fZXZhbFVybCh1LnNyYyx7bm9uY2U6dS5ub25jZXx8dS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKX0pOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKEhlLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIFdlKGUsdCxuKXtmb3IodmFyIHIsaT10P2suZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxrLmNsZWFuRGF0YSh2ZShyKSksci5wYXJlbnROb2RlJiYobiYmb2UocikmJnllKHZlKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9ay5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShqZSxcIjwkMT48LyQyPlwiKX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9ZS5jbG9uZU5vZGUoITApLGY9b2UoZSk7aWYoISh5Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxrLmlzWE1MRG9jKGUpKSlmb3IoYT12ZShjKSxyPTAsaT0obz12ZShlKSkubGVuZ3RoO3I8aTtyKyspcz1vW3JdLHU9YVtyXSx2b2lkIDAsXCJpbnB1dFwiPT09KGw9dS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSYmcGUudGVzdChzLnR5cGUpP3UuY2hlY2tlZD1zLmNoZWNrZWQ6XCJpbnB1dFwiIT09bCYmXCJ0ZXh0YXJlYVwiIT09bHx8KHUuZGVmYXVsdFZhbHVlPXMuZGVmYXVsdFZhbHVlKTtpZih0KWlmKG4pZm9yKG89b3x8dmUoZSksYT1hfHx2ZShjKSxyPTAsaT1vLmxlbmd0aDtyPGk7cisrKU1lKG9bcl0sYVtyXSk7ZWxzZSBNZShlLGMpO3JldHVybiAwPChhPXZlKGMsXCJzY3JpcHRcIikpLmxlbmd0aCYmeWUoYSwhZiYmdmUoZSxcInNjcmlwdFwiKSksY30sY2xlYW5EYXRhOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuLHIsaT1rLmV2ZW50LnNwZWNpYWwsbz0wO3ZvaWQgMCE9PShuPWVbb10pO28rKylpZihHKG4pKXtpZih0PW5bUS5leHBhbmRvXSl7aWYodC5ldmVudHMpZm9yKHIgaW4gdC5ldmVudHMpaVtyXT9rLmV2ZW50LnJlbW92ZShuLHIpOmsucmVtb3ZlRXZlbnQobixyLHQuaGFuZGxlKTtuW1EuZXhwYW5kb109dm9pZCAwfW5bSi5leHBhbmRvXSYmKG5bSi5leHBhbmRvXT12b2lkIDApfX19KSxrLmZuLmV4dGVuZCh7ZGV0YWNoOmZ1bmN0aW9uKGUpe3JldHVybiBXZSh0aGlzLGUsITApfSxyZW1vdmU6ZnVuY3Rpb24oZSl7cmV0dXJuIFdlKHRoaXMsZSl9LHRleHQ6ZnVuY3Rpb24oZSl7cmV0dXJuIF8odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9rLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsxIT09dGhpcy5ub2RlVHlwZSYmMTEhPT10aGlzLm5vZGVUeXBlJiY5IT09dGhpcy5ub2RlVHlwZXx8KHRoaXMudGV4dENvbnRlbnQ9ZSl9KX0sbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSWUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fE9lKHRoaXMsZSkuYXBwZW5kQ2hpbGQoZSl9KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiBJZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9T2UodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiBJZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBJZSh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0aGlzLm5leHRTaWJsaW5nKX0pfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgZSx0PTA7bnVsbCE9KGU9dGhpc1t0XSk7dCsrKTE9PT1lLm5vZGVUeXBlJiYoay5jbGVhbkRhdGEodmUoZSwhMSkpLGUudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bnVsbCE9ZSYmZSx0PW51bGw9PXQ/ZTp0LHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIGsuY2xvbmUodGhpcyxlLHQpfSl9LGh0bWw6ZnVuY3Rpb24oZSl7cmV0dXJuIF8odGhpcyxmdW5jdGlvbihlKXt2YXIgdD10aGlzWzBdfHx7fSxuPTAscj10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1lJiYxPT09dC5ub2RlVHlwZSlyZXR1cm4gdC5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiFxZS50ZXN0KGUpJiYhZ2VbKGRlLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7ZT1rLmh0bWxQcmVmaWx0ZXIoZSk7dHJ5e2Zvcig7bjxyO24rKykxPT09KHQ9dGhpc1tuXXx8e30pLm5vZGVUeXBlJiYoay5jbGVhbkRhdGEodmUodCwhMSkpLHQuaW5uZXJIVE1MPWUpO3Q9MH1jYXRjaChlKXt9fXQmJnRoaXMuZW1wdHkoKS5hcHBlbmQoZSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgbj1bXTtyZXR1cm4gSWUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5wYXJlbnROb2RlO2suaW5BcnJheSh0aGlzLG4pPDAmJihrLmNsZWFuRGF0YSh2ZSh0aGlzKSksdCYmdC5yZXBsYWNlQ2hpbGQoZSx0aGlzKSl9LG4pfX0pLGsuZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihlLGEpe2suZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1rKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLGsocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KTt2YXIgJGU9bmV3IFJlZ0V4cChcIl4oXCIrdGUrXCIpKD8hcHgpW2EteiVdKyRcIixcImlcIiksRmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O3JldHVybiB0JiZ0Lm9wZW5lcnx8KHQ9QyksdC5nZXRDb21wdXRlZFN0eWxlKGUpfSxCZT1uZXcgUmVnRXhwKHJlLmpvaW4oXCJ8XCIpLFwiaVwiKTtmdW5jdGlvbiBfZShlLHQsbil7dmFyIHIsaSxvLGEscz1lLnN0eWxlO3JldHVybihuPW58fEZlKGUpKSYmKFwiXCIhPT0oYT1uLmdldFByb3BlcnR5VmFsdWUodCl8fG5bdF0pfHxvZShlKXx8KGE9ay5zdHlsZShlLHQpKSwheS5waXhlbEJveFN0eWxlcygpJiYkZS50ZXN0KGEpJiZCZS50ZXN0KHQpJiYocj1zLndpZHRoLGk9cy5taW5XaWR0aCxvPXMubWF4V2lkdGgscy5taW5XaWR0aD1zLm1heFdpZHRoPXMud2lkdGg9YSxhPW4ud2lkdGgscy53aWR0aD1yLHMubWluV2lkdGg9aSxzLm1heFdpZHRoPW8pKSx2b2lkIDAhPT1hP2ErXCJcIjphfWZ1bmN0aW9uIHplKGUsdCl7cmV0dXJue2dldDpmdW5jdGlvbigpe2lmKCFlKCkpcmV0dXJuKHRoaXMuZ2V0PXQpLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtkZWxldGUgdGhpcy5nZXR9fX0hZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7aWYodSl7cy5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O21hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiLHUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6YmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O292ZXJmbG93OnNjcm9sbDttYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjYwJTt0b3A6MSVcIixpZS5hcHBlbmRDaGlsZChzKS5hcHBlbmRDaGlsZCh1KTt2YXIgZT1DLmdldENvbXB1dGVkU3R5bGUodSk7bj1cIjElXCIhPT1lLnRvcCxhPTEyPT09dChlLm1hcmdpbkxlZnQpLHUuc3R5bGUucmlnaHQ9XCI2MCVcIixvPTM2PT09dChlLnJpZ2h0KSxyPTM2PT09dChlLndpZHRoKSx1LnN0eWxlLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixpPTEyPT09dCh1Lm9mZnNldFdpZHRoLzMpLGllLnJlbW92ZUNoaWxkKHMpLHU9bnVsbH19ZnVuY3Rpb24gdChlKXtyZXR1cm4gTWF0aC5yb3VuZChwYXJzZUZsb2F0KGUpKX12YXIgbixyLGksbyxhLHM9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3Uuc3R5bGUmJih1LnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIix1LmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIix5LmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT11LnN0eWxlLmJhY2tncm91bmRDbGlwLGsuZXh0ZW5kKHkse2JveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxyfSxwaXhlbEJveFN0eWxlczpmdW5jdGlvbigpe3JldHVybiBlKCksb30scGl4ZWxQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybiBlKCksbn0scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxhfSxzY3JvbGxib3hTaXplOmZ1bmN0aW9uKCl7cmV0dXJuIGUoKSxpfX0pKX0oKTt2YXIgVWU9W1wiV2Via2l0XCIsXCJNb3pcIixcIm1zXCJdLFhlPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxWZT17fTtmdW5jdGlvbiBHZShlKXt2YXIgdD1rLmNzc1Byb3BzW2VdfHxWZVtlXTtyZXR1cm4gdHx8KGUgaW4gWGU/ZTpWZVtlXT1mdW5jdGlvbihlKXt2YXIgdD1lWzBdLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPVVlLmxlbmd0aDt3aGlsZShuLS0paWYoKGU9VWVbbl0rdClpbiBYZSlyZXR1cm4gZX0oZSl8fGUpfXZhciBZZT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sUWU9L14tLS8sSmU9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LEtlPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn07ZnVuY3Rpb24gWmUoZSx0LG4pe3ZhciByPW5lLmV4ZWModCk7cmV0dXJuIHI/TWF0aC5tYXgoMCxyWzJdLShufHwwKSkrKHJbM118fFwicHhcIik6dH1mdW5jdGlvbiBldChlLHQsbixyLGksbyl7dmFyIGE9XCJ3aWR0aFwiPT09dD8xOjAscz0wLHU9MDtpZihuPT09KHI/XCJib3JkZXJcIjpcImNvbnRlbnRcIikpcmV0dXJuIDA7Zm9yKDthPDQ7YSs9MilcIm1hcmdpblwiPT09biYmKHUrPWsuY3NzKGUsbityZVthXSwhMCxpKSkscj8oXCJjb250ZW50XCI9PT1uJiYodS09ay5jc3MoZSxcInBhZGRpbmdcIityZVthXSwhMCxpKSksXCJtYXJnaW5cIiE9PW4mJih1LT1rLmNzcyhlLFwiYm9yZGVyXCIrcmVbYV0rXCJXaWR0aFwiLCEwLGkpKSk6KHUrPWsuY3NzKGUsXCJwYWRkaW5nXCIrcmVbYV0sITAsaSksXCJwYWRkaW5nXCIhPT1uP3UrPWsuY3NzKGUsXCJib3JkZXJcIityZVthXStcIldpZHRoXCIsITAsaSk6cys9ay5jc3MoZSxcImJvcmRlclwiK3JlW2FdK1wiV2lkdGhcIiwhMCxpKSk7cmV0dXJuIXImJjA8PW8mJih1Kz1NYXRoLm1heCgwLE1hdGguY2VpbChlW1wib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSldLW8tdS1zLS41KSl8fDApLHV9ZnVuY3Rpb24gdHQoZSx0LG4pe3ZhciByPUZlKGUpLGk9KCF5LmJveFNpemluZ1JlbGlhYmxlKCl8fG4pJiZcImJvcmRlci1ib3hcIj09PWsuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxyKSxvPWksYT1fZShlLHQscikscz1cIm9mZnNldFwiK3RbMF0udG9VcHBlckNhc2UoKSt0LnNsaWNlKDEpO2lmKCRlLnRlc3QoYSkpe2lmKCFuKXJldHVybiBhO2E9XCJhdXRvXCJ9cmV0dXJuKCF5LmJveFNpemluZ1JlbGlhYmxlKCkmJml8fFwiYXV0b1wiPT09YXx8IXBhcnNlRmxvYXQoYSkmJlwiaW5saW5lXCI9PT1rLmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGk9XCJib3JkZXItYm94XCI9PT1rLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksKG89cyBpbiBlKSYmKGE9ZVtzXSkpLChhPXBhcnNlRmxvYXQoYSl8fDApK2V0KGUsdCxufHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxvLHIsYSkrXCJweFwifWZ1bmN0aW9uIG50KGUsdCxuLHIsaSl7cmV0dXJuIG5ldyBudC5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfWsuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49X2UoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsZ3JpZEFyZWE6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TdGFydDohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1N0YXJ0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1WKHQpLHU9UWUudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9R2UocykpLGE9ay5jc3NIb29rc1t0XXx8ay5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PT0obz10eXBlb2YgbikmJihpPW5lLmV4ZWMobikpJiZpWzFdJiYobj1sZShlLHQsaSksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT1uJiYoXCJudW1iZXJcIiE9PW98fHV8fChuKz1pJiZpWzNdfHwoay5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSx5LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1WKHQpO3JldHVybiBRZS50ZXN0KHQpfHwodD1HZShzKSksKGE9ay5jc3NIb29rc1t0XXx8ay5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1fZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIEtlJiYoaT1LZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSxrLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHUpe2suY3NzSG9va3NbdV09e2dldDpmdW5jdGlvbihlLHQsbil7aWYodClyZXR1cm4hWWUudGVzdChrLmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/dHQoZSx1LG4pOnVlKGUsSmUsZnVuY3Rpb24oKXtyZXR1cm4gdHQoZSx1LG4pfSl9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1GZShlKSxvPSF5LnNjcm9sbGJveFNpemUoKSYmXCJhYnNvbHV0ZVwiPT09aS5wb3NpdGlvbixhPShvfHxuKSYmXCJib3JkZXItYm94XCI9PT1rLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSkscz1uP2V0KGUsdSxuLGEsaSk6MDtyZXR1cm4gYSYmbyYmKHMtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdVswXS50b1VwcGVyQ2FzZSgpK3Uuc2xpY2UoMSldLXBhcnNlRmxvYXQoaVt1XSktZXQoZSx1LFwiYm9yZGVyXCIsITEsaSktLjUpKSxzJiYocj1uZS5leGVjKHQpKSYmXCJweFwiIT09KHJbM118fFwicHhcIikmJihlLnN0eWxlW3VdPXQsdD1rLmNzcyhlLHUpKSxaZSgwLHQscyl9fX0pLGsuY3NzSG9va3MubWFyZ2luTGVmdD16ZSh5LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoX2UoZSxcIm1hcmdpbkxlZnRcIikpfHxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtdWUoZSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksay5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oaSxvKXtrLmNzc0hvb2tzW2krb109e2V4cGFuZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXt9LHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIiBcIik6W2VdO3Q8NDt0KyspbltpK3JlW3RdK29dPXJbdF18fHJbdC0yXXx8clswXTtyZXR1cm4gbn19LFwibWFyZ2luXCIhPT1pJiYoay5jc3NIb29rc1tpK29dLnNldD1aZSl9KSxrLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIF8odGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9LGE9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3Iocj1GZShlKSxpPXQubGVuZ3RoO2E8aTthKyspb1t0W2FdXT1rLmNzcyhlLHRbYV0sITEscik7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/ay5zdHlsZShlLHQsbik6ay5jc3MoZSx0KX0sZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9fSksKChrLlR3ZWVuPW50KS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOm50LGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fGsuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwoay5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1udC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6bnQucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49bnQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PWsuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpudC5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSkuaW5pdC5wcm90b3R5cGU9bnQucHJvdG90eXBlLChudC5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD1rLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe2suZnguc3RlcFtlLnByb3BdP2suZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fCFrLmNzc0hvb2tzW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtHZShlLnByb3ApXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzprLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSkuc2Nyb2xsVG9wPW50LnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LGsuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxrLmZ4PW50LnByb3RvdHlwZS5pbml0LGsuZnguc3RlcD17fTt2YXIgcnQsaXQsb3QsYXQsc3Q9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLHV0PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gbHQoKXtpdCYmKCExPT09RS5oaWRkZW4mJkMucmVxdWVzdEFuaW1hdGlvbkZyYW1lP0MucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGx0KTpDLnNldFRpbWVvdXQobHQsay5meC5pbnRlcnZhbCksay5meC50aWNrKCkpfWZ1bmN0aW9uIGN0KCl7cmV0dXJuIEMuc2V0VGltZW91dChmdW5jdGlvbigpe3J0PXZvaWQgMH0pLHJ0PURhdGUubm93KCl9ZnVuY3Rpb24gZnQoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPXJlW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiBwdChlLHQsbil7Zm9yKHZhciByLGk9KGR0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KGR0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gZHQobyxlLHQpe3ZhciBuLGEscj0wLGk9ZHQucHJlZmlsdGVycy5sZW5ndGgscz1rLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihhKXJldHVybiExO2Zvcih2YXIgZT1ydHx8Y3QoKSx0PU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi1lKSxuPTEtKHQvbC5kdXJhdGlvbnx8MCkscj0wLGk9bC50d2VlbnMubGVuZ3RoO3I8aTtyKyspbC50d2VlbnNbcl0ucnVuKG4pO3JldHVybiBzLm5vdGlmeVdpdGgobyxbbCxuLHRdKSxuPDEmJmk/dDooaXx8cy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTpvLHByb3BzOmsuZXh0ZW5kKHt9LGUpLG9wdHM6ay5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOmsuZWFzaW5nLl9kZWZhdWx0fSx0KSxvcmlnaW5hbFByb3BlcnRpZXM6ZSxvcmlnaW5hbE9wdGlvbnM6dCxzdGFydFRpbWU6cnR8fGN0KCksZHVyYXRpb246dC5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1rLlR3ZWVuKG8sbC5vcHRzLGUsdCxsLm9wdHMuc3BlY2lhbEVhc2luZ1tlXXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gobiksbn0sc3RvcDpmdW5jdGlvbihlKXt2YXIgdD0wLG49ZT9sLnR3ZWVucy5sZW5ndGg6MDtpZihhKXJldHVybiB0aGlzO2ZvcihhPSEwO3Q8bjt0KyspbC50d2VlbnNbdF0ucnVuKDEpO3JldHVybiBlPyhzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2wsZV0pKTpzLnJlamVjdFdpdGgobyxbbCxlXSksdGhpc319KSxjPWwucHJvcHM7Zm9yKCFmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihpPXRbcj1WKG4pXSxvPWVbbl0sQXJyYXkuaXNBcnJheShvKSYmKGk9b1sxXSxvPWVbbl09b1swXSksbiE9PXImJihlW3JdPW8sZGVsZXRlIGVbbl0pLChhPWsuY3NzSG9va3Nbcl0pJiZcImV4cGFuZFwiaW4gYSlmb3IobiBpbiBvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdLG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSk7ZWxzZSB0W3JdPWl9KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO3I8aTtyKyspaWYobj1kdC5wcmVmaWx0ZXJzW3JdLmNhbGwobCxvLGMsbC5vcHRzKSlyZXR1cm4gbShuLnN0b3ApJiYoay5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPW4uc3RvcC5iaW5kKG4pKSxuO3JldHVybiBrLm1hcChjLHB0LGwpLG0obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwobyxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSxrLmZ4LnRpbWVyKGsuZXh0ZW5kKHUse2VsZW06byxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9ay5BbmltYXRpb249ay5leHRlbmQoZHQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIGxlKG4uZWxlbSxlLG5lLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7bShlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKFIpO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxkdC50d2VlbmVyc1tuXT1kdC50d2VlbmVyc1tuXXx8W10sZHQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZzZShlKSx2PVEuZ2V0KGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gbi5xdWV1ZXx8KG51bGw9PShhPWsuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSxrLnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSksdClpZihpPXRbcl0sc3QudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF2fHx2b2lkIDA9PT12W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT12JiZ2W3JdfHxrLnN0eWxlKGUscil9aWYoKHU9IWsuaXNFbXB0eU9iamVjdCh0KSl8fCFrLmlzRW1wdHlPYmplY3QoZCkpZm9yKHIgaW4gZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD12JiZ2LmRpc3BsYXkpJiYobD1RLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz1rLmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDooZmUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPWsuY3NzKGUsXCJkaXNwbGF5XCIpLGZlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT1rLmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExLGQpdXx8KHY/XCJoaWRkZW5cImluIHYmJihnPXYuaGlkZGVuKTp2PVEuYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHYuaGlkZGVuPSFnKSxnJiZmZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2ZvcihyIGluIGd8fGZlKFtlXSksUS5yZW1vdmUoZSxcImZ4c2hvd1wiKSxkKWsuc3R5bGUoZSxyLGRbcl0pfSkpLHU9cHQoZz92W3JdOjAscixwKSxyIGluIHZ8fCh2W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P2R0LnByZWZpbHRlcnMudW5zaGlmdChlKTpkdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksay5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/ay5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxtKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFtKHQpJiZ0fTtyZXR1cm4gay5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBrLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPWsuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249ay5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXttKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZrLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0say5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoc2UpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9ay5pc0VtcHR5T2JqZWN0KHQpLG89ay5zcGVlZChlLG4sciksYT1mdW5jdGlvbigpe3ZhciBlPWR0KHRoaXMsay5leHRlbmQoe30sdCksbyk7KGl8fFEuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGkmJihvPWUsZT1pLGk9dm9pZCAwKSxlJiYhMSE9PWkmJnRoaXMucXVldWUoaXx8XCJmeFwiLFtdKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT0hMCx0PW51bGwhPWkmJmkrXCJxdWV1ZUhvb2tzXCIsbj1rLnRpbWVycyxyPVEuZ2V0KHRoaXMpO2lmKHQpclt0XSYmclt0XS5zdG9wJiZhKHJbdF0pO2Vsc2UgZm9yKHQgaW4gcilyW3RdJiZyW3RdLnN0b3AmJnV0LnRlc3QodCkmJmEoclt0XSk7Zm9yKHQ9bi5sZW5ndGg7dC0tOyluW3RdLmVsZW0hPT10aGlzfHxudWxsIT1pJiZuW3RdLnF1ZXVlIT09aXx8KG5bdF0uYW5pbS5zdG9wKG8pLGU9ITEsbi5zcGxpY2UodCwxKSk7IWUmJm98fGsuZGVxdWV1ZSh0aGlzLGkpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4hMSE9PWEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdD1RLmdldCh0aGlzKSxuPXRbYStcInF1ZXVlXCJdLHI9dFthK1wicXVldWVIb29rc1wiXSxpPWsudGltZXJzLG89bj9uLmxlbmd0aDowO2Zvcih0LmZpbmlzaD0hMCxrLnF1ZXVlKHRoaXMsYSxbXSksciYmci5zdG9wJiZyLnN0b3AuY2FsbCh0aGlzLCEwKSxlPWkubGVuZ3RoO2UtLTspaVtlXS5lbGVtPT09dGhpcyYmaVtlXS5xdWV1ZT09PWEmJihpW2VdLmFuaW0uc3RvcCghMCksaS5zcGxpY2UoZSwxKSk7Zm9yKGU9MDtlPG87ZSsrKW5bZV0mJm5bZV0uZmluaXNoJiZuW2VdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSB0LmZpbmlzaH0pfX0pLGsuZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oZSxyKXt2YXIgaT1rLmZuW3JdO2suZm5bcl09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/aS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGZ0KHIsITApLGUsdCxuKX19KSxrLmVhY2goe3NsaWRlRG93bjpmdChcInNob3dcIiksc2xpZGVVcDpmdChcImhpZGVcIiksc2xpZGVUb2dnbGU6ZnQoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihlLHIpe2suZm5bZV09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLmFuaW1hdGUocixlLHQsbil9fSksay50aW1lcnM9W10say5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49ay50aW1lcnM7Zm9yKHJ0PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8ay5meC5zdG9wKCkscnQ9dm9pZCAwfSxrLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe2sudGltZXJzLnB1c2goZSksay5meC5zdGFydCgpfSxrLmZ4LmludGVydmFsPTEzLGsuZnguc3RhcnQ9ZnVuY3Rpb24oKXtpdHx8KGl0PSEwLGx0KCkpfSxrLmZ4LnN0b3A9ZnVuY3Rpb24oKXtpdD1udWxsfSxrLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxrLmZuLmRlbGF5PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHI9ay5meCYmay5meC5zcGVlZHNbcl18fHIsZT1lfHxcImZ4XCIsdGhpcy5xdWV1ZShlLGZ1bmN0aW9uKGUsdCl7dmFyIG49Qy5zZXRUaW1lb3V0KGUscik7dC5zdG9wPWZ1bmN0aW9uKCl7Qy5jbGVhclRpbWVvdXQobil9fSl9LG90PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGF0PUUuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpLG90LnR5cGU9XCJjaGVja2JveFwiLHkuY2hlY2tPbj1cIlwiIT09b3QudmFsdWUseS5vcHRTZWxlY3RlZD1hdC5zZWxlY3RlZCwob3Q9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnZhbHVlPVwidFwiLG90LnR5cGU9XCJyYWRpb1wiLHkucmFkaW9WYWx1ZT1cInRcIj09PW90LnZhbHVlO3ZhciBodCxndD1rLmV4cHIuYXR0ckhhbmRsZTtrLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQpe3JldHVybiBfKHRoaXMsay5hdHRyLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtrLnJlbW92ZUF0dHIodGhpcyxlKX0pfX0pLGsuZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBlLmdldEF0dHJpYnV0ZT9rLnByb3AoZSx0LG4pOigxPT09byYmay5pc1hNTERvYyhlKXx8KGk9ay5hdHRySG9va3NbdC50b0xvd2VyQ2FzZSgpXXx8KGsuZXhwci5tYXRjaC5ib29sLnRlc3QodCk/aHQ6dm9pZCAwKSksdm9pZCAwIT09bj9udWxsPT09bj92b2lkIGsucmVtb3ZlQXR0cihlLHQpOmkmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6KGUuc2V0QXR0cmlidXRlKHQsbitcIlwiKSxuKTppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6bnVsbD09KHI9ay5maW5kLmF0dHIoZSx0KSk/dm9pZCAwOnIpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihlLHQpe2lmKCF5LnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PXQmJkEoZSxcImlucHV0XCIpKXt2YXIgbj1lLnZhbHVlO3JldHVybiBlLnNldEF0dHJpYnV0ZShcInR5cGVcIix0KSxuJiYoZS52YWx1ZT1uKSx0fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0wLGk9dCYmdC5tYXRjaChSKTtpZihpJiYxPT09ZS5ub2RlVHlwZSl3aGlsZShuPWlbcisrXSllLnJlbW92ZUF0dHJpYnV0ZShuKX19KSxodD17c2V0OmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4hMT09PXQ/ay5yZW1vdmVBdHRyKGUsbik6ZS5zZXRBdHRyaWJ1dGUobixuKSxufX0say5lYWNoKGsuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihlLHQpe3ZhciBhPWd0W3RdfHxrLmZpbmQuYXR0cjtndFt0XT1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXQudG9Mb3dlckNhc2UoKTtyZXR1cm4gbnx8KGk9Z3Rbb10sZ3Rbb109cixyPW51bGwhPWEoZSx0LG4pP286bnVsbCxndFtvXT1pKSxyfX0pO3ZhciB2dD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLHl0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiBtdChlKXtyZXR1cm4oZS5tYXRjaChSKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHh0KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBidChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLm1hdGNoKFIpfHxbXX1rLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiBfKHRoaXMsay5wcm9wLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1trLnByb3BGaXhbZV18fGVdfSl9fSksay5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz1lLm5vZGVUeXBlO2lmKDMhPT1vJiY4IT09byYmMiE9PW8pcmV0dXJuIDE9PT1vJiZrLmlzWE1MRG9jKGUpfHwodD1rLnByb3BGaXhbdF18fHQsaT1rLnByb3BIb29rc1t0XSksdm9pZCAwIT09bj9pJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOmVbdF09bjppJiZcImdldFwiaW4gaSYmbnVsbCE9PShyPWkuZ2V0KGUsdCkpP3I6ZVt0XX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWsuZmluZC5hdHRyKGUsXCJ0YWJpbmRleFwiKTtyZXR1cm4gdD9wYXJzZUludCh0LDEwKTp2dC50ZXN0KGUubm9kZU5hbWUpfHx5dC50ZXN0KGUubm9kZU5hbWUpJiZlLmhyZWY/MDotMX19fSxwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifX0pLHkub3B0U2VsZWN0ZWR8fChrLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksay5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe2sucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KSxrLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtrKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUseHQodGhpcykpKX0pO2lmKChlPWJ0KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT14dChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIittdChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXIuaW5kZXhPZihcIiBcIitvK1wiIFwiKTwwJiYocis9bytcIiBcIik7aSE9PShzPW10KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2sodGhpcykucmVtb3ZlQ2xhc3ModC5jYWxsKHRoaXMsZSx4dCh0aGlzKSkpfSk7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7aWYoKGU9YnQodCkpLmxlbmd0aCl3aGlsZShuPXRoaXNbdSsrXSlpZihpPXh0KG4pLHI9MT09PW4ubm9kZVR5cGUmJlwiIFwiK210KGkpK1wiIFwiKXthPTA7d2hpbGUobz1lW2ErK10pd2hpbGUoLTE8ci5pbmRleE9mKFwiIFwiK28rXCIgXCIpKXI9ci5yZXBsYWNlKFwiIFwiK28rXCIgXCIsXCIgXCIpO2khPT0ocz1tdChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oaSx0KXt2YXIgbz10eXBlb2YgaSxhPVwic3RyaW5nXCI9PT1vfHxBcnJheS5pc0FycmF5KGkpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgdCYmYT90P3RoaXMuYWRkQ2xhc3MoaSk6dGhpcy5yZW1vdmVDbGFzcyhpKTptKGkpP3RoaXMuZWFjaChmdW5jdGlvbihlKXtrKHRoaXMpLnRvZ2dsZUNsYXNzKGkuY2FsbCh0aGlzLGUseHQodGhpcyksdCksdCl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtpZihhKXt0PTAsbj1rKHRoaXMpLHI9YnQoaSk7d2hpbGUoZT1yW3QrK10pbi5oYXNDbGFzcyhlKT9uLnJlbW92ZUNsYXNzKGUpOm4uYWRkQ2xhc3MoZSl9ZWxzZSB2b2lkIDAhPT1pJiZcImJvb2xlYW5cIiE9PW98fCgoZT14dCh0aGlzKSkmJlEuc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsZSksdGhpcy5zZXRBdHRyaWJ1dGUmJnRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixlfHwhMT09PWk/XCJcIjpRLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIikpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO3Q9XCIgXCIrZStcIiBcIjt3aGlsZShuPXRoaXNbcisrXSlpZigxPT09bi5ub2RlVHlwZSYmLTE8KFwiIFwiK210KHh0KG4pKStcIiBcIikuaW5kZXhPZih0KSlyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgd3Q9L1xcci9nO2suZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24obil7dmFyIHIsZSxpLHQ9dGhpc1swXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1tKG4pLHRoaXMuZWFjaChmdW5jdGlvbihlKXt2YXIgdDsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PSh0PWk/bi5jYWxsKHRoaXMsZSxrKHRoaXMpLnZhbCgpKTpuKT90PVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIHQ/dCs9XCJcIjpBcnJheS5pc0FycmF5KHQpJiYodD1rLm1hcCh0LGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6ZStcIlwifSkpLChyPWsudmFsSG9va3NbdGhpcy50eXBlXXx8ay52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldKSYmXCJzZXRcImluIHImJnZvaWQgMCE9PXIuc2V0KHRoaXMsdCxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT10KSl9KSk6dD8ocj1rLnZhbEhvb2tzW3QudHlwZV18fGsudmFsSG9va3NbdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiByJiZ2b2lkIDAhPT0oZT1yLmdldCh0LFwidmFsdWVcIikpP2U6XCJzdHJpbmdcIj09dHlwZW9mKGU9dC52YWx1ZSk/ZS5yZXBsYWNlKHd0LFwiXCIpOm51bGw9PWU/XCJcIjplOnZvaWQgMH19KSxrLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWsuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90Om10KGsudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgsYT1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxzPWE/bnVsbDpbXSx1PWE/bysxOmkubGVuZ3RoO2ZvcihyPW88MD91OmE/bzowO3I8dTtyKyspaWYoKChuPWlbcl0pLnNlbGVjdGVkfHxyPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUEobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PWsobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaT1lLm9wdGlvbnMsbz1rLm1ha2VBcnJheSh0KSxhPWkubGVuZ3RoO3doaWxlKGEtLSkoKHI9aVthXSkuc2VsZWN0ZWQ9LTE8ay5pbkFycmF5KGsudmFsSG9va3Mub3B0aW9uLmdldChyKSxvKSkmJihuPSEwKTtyZXR1cm4gbnx8KGUuc2VsZWN0ZWRJbmRleD0tMSksb319fX0pLGsuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtrLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9LTE8ay5pbkFycmF5KGsoZSkudmFsKCksdCl9fSx5LmNoZWNrT258fChrLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pLHkuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gQzt2YXIgVHQ9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLEN0PWZ1bmN0aW9uKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCl9O2suZXh0ZW5kKGsuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGksbyxhLHMsdSxsLGMsZixwPVtufHxFXSxkPXYuY2FsbChlLFwidHlwZVwiKT9lLnR5cGU6ZSxoPXYuY2FsbChlLFwibmFtZXNwYWNlXCIpP2UubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihvPWY9YT1uPW58fEUsMyE9PW4ubm9kZVR5cGUmJjghPT1uLm5vZGVUeXBlJiYhVHQudGVzdChkK2suZXZlbnQudHJpZ2dlcmVkKSYmKC0xPGQuaW5kZXhPZihcIi5cIikmJihkPShoPWQuc3BsaXQoXCIuXCIpKS5zaGlmdCgpLGguc29ydCgpKSx1PWQuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK2QsKGU9ZVtrLmV4cGFuZG9dP2U6bmV3IGsuRXZlbnQoZCxcIm9iamVjdFwiPT10eXBlb2YgZSYmZSkpLmlzVHJpZ2dlcj1yPzI6MyxlLm5hbWVzcGFjZT1oLmpvaW4oXCIuXCIpLGUucm5hbWVzcGFjZT1lLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIraC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxlLnJlc3VsdD12b2lkIDAsZS50YXJnZXR8fChlLnRhcmdldD1uKSx0PW51bGw9PXQ/W2VdOmsubWFrZUFycmF5KHQsW2VdKSxjPWsuZXZlbnQuc3BlY2lhbFtkXXx8e30scnx8IWMudHJpZ2dlcnx8ITEhPT1jLnRyaWdnZXIuYXBwbHkobix0KSkpe2lmKCFyJiYhYy5ub0J1YmJsZSYmIXgobikpe2ZvcihzPWMuZGVsZWdhdGVUeXBlfHxkLFR0LnRlc3QocytkKXx8KG89by5wYXJlbnROb2RlKTtvO289by5wYXJlbnROb2RlKXAucHVzaChvKSxhPW87YT09PShuLm93bmVyRG9jdW1lbnR8fEUpJiZwLnB1c2goYS5kZWZhdWx0Vmlld3x8YS5wYXJlbnRXaW5kb3d8fEMpfWk9MDt3aGlsZSgobz1wW2krK10pJiYhZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWY9byxlLnR5cGU9MTxpP3M6Yy5iaW5kVHlwZXx8ZCwobD0oUS5nZXQobyxcImV2ZW50c1wiKXx8e30pW2UudHlwZV0mJlEuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJkcobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFHKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxrLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQsQ3QpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLEN0KSxrLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPWsuZXh0ZW5kKG5ldyBrLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO2suZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksay5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ay5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gay5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx5LmZvY3VzaW58fGsuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7ay5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LGsuZXZlbnQuZml4KGUpKX07ay5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyx0PVEuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksUS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsdD1RLmFjY2VzcyhlLHIpLTE7dD9RLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFEucmVtb3ZlKGUscikpfX19KTt2YXIgRXQ9Qy5sb2NhdGlvbixrdD1EYXRlLm5vdygpLFN0PS9cXD8vO2sucGFyc2VYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoIWV8fFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiBudWxsO3RyeXt0PShuZXcgQy5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9Y2F0Y2goZSl7dD12b2lkIDB9cmV0dXJuIHQmJiF0LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RofHxrLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2UpLHR9O3ZhciBOdD0vXFxbXFxdJC8sQXQ9L1xccj9cXG4vZyxEdD0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksanQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIHF0KG4sZSxyLGkpe3ZhciB0O2lmKEFycmF5LmlzQXJyYXkoZSkpay5lYWNoKGUsZnVuY3Rpb24oZSx0KXtyfHxOdC50ZXN0KG4pP2kobix0KTpxdChuK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9dD9lOlwiXCIpK1wiXVwiLHQscixpKX0pO2Vsc2UgaWYocnx8XCJvYmplY3RcIiE9PXcoZSkpaShuLGUpO2Vsc2UgZm9yKHQgaW4gZSlxdChuK1wiW1wiK3QrXCJdXCIsZVt0XSxyLGkpfWsucGFyYW09ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9ZnVuY3Rpb24oZSx0KXt2YXIgbj1tKHQpP3QoKTp0O3Jbci5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiFrLmlzUGxhaW5PYmplY3QoZSkpay5lYWNoKGUsZnVuY3Rpb24oKXtpKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKG4gaW4gZSlxdChuLGVbbl0sdCxpKTtyZXR1cm4gci5qb2luKFwiJlwiKX0say5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBrLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9ay5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9rLm1ha2VBcnJheShlKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFrKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZqdC50ZXN0KHRoaXMubm9kZU5hbWUpJiYhRHQudGVzdChlKSYmKHRoaXMuY2hlY2tlZHx8IXBlLnRlc3QoZSkpfSkubWFwKGZ1bmN0aW9uKGUsdCl7dmFyIG49ayh0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09bj9udWxsOkFycmF5LmlzQXJyYXkobik/ay5tYXAobixmdW5jdGlvbihlKXtyZXR1cm57bmFtZTp0Lm5hbWUsdmFsdWU6ZS5yZXBsYWNlKEF0LFwiXFxyXFxuXCIpfX0pOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2UoQXQsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSk7dmFyIEx0PS8lMjAvZyxIdD0vIy4qJC8sT3Q9LyhbPyZdKV89W14mXSovLFB0PS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sUnQ9L14oPzpHRVR8SEVBRCkkLyxNdD0vXlxcL1xcLy8sSXQ9e30sV3Q9e30sJHQ9XCIqL1wiLmNvbmNhdChcIipcIiksRnQ9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTtmdW5jdGlvbiBCdChvKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPVwiKlwiKTt2YXIgbixyPTAsaT1lLnRvTG93ZXJDYXNlKCkubWF0Y2goUil8fFtdO2lmKG0odCkpd2hpbGUobj1pW3IrK10pXCIrXCI9PT1uWzBdPyhuPW4uc2xpY2UoMSl8fFwiKlwiLChvW25dPW9bbl18fFtdKS51bnNoaWZ0KHQpKToob1tuXT1vW25dfHxbXSkucHVzaCh0KX19ZnVuY3Rpb24gX3QodCxpLG8sYSl7dmFyIHM9e30sdT10PT09V3Q7ZnVuY3Rpb24gbChlKXt2YXIgcjtyZXR1cm4gc1tlXT0hMCxrLmVhY2godFtlXXx8W10sZnVuY3Rpb24oZSx0KXt2YXIgbj10KGksbyxhKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Ygbnx8dXx8c1tuXT91PyEocj1uKTp2b2lkIDA6KGkuZGF0YVR5cGVzLnVuc2hpZnQobiksbChuKSwhMSl9KSxyfXJldHVybiBsKGkuZGF0YVR5cGVzWzBdKXx8IXNbXCIqXCJdJiZsKFwiKlwiKX1mdW5jdGlvbiB6dChlLHQpe3ZhciBuLHIsaT1rLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKG4gaW4gdCl2b2lkIDAhPT10W25dJiYoKGlbbl0/ZTpyfHwocj17fSkpW25dPXRbbl0pO3JldHVybiByJiZrLmV4dGVuZCghMCxlLHIpLGV9RnQuaHJlZj1FdC5ocmVmLGsuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpFdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOi9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLnRlc3QoRXQucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOiR0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjprLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD96dCh6dChlLGsuYWpheFNldHRpbmdzKSx0KTp6dChrLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpCdChJdCksYWpheFRyYW5zcG9ydDpCdChXdCksYWpheDpmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSx0PXR8fHt9O3ZhciBjLGYscCxuLGQscixoLGcsaSxvLHY9ay5hamF4U2V0dXAoe30sdCkseT12LmNvbnRleHR8fHYsbT12LmNvbnRleHQmJih5Lm5vZGVUeXBlfHx5LmpxdWVyeSk/ayh5KTprLmV2ZW50LHg9ay5EZWZlcnJlZCgpLGI9ay5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3PXYuc3RhdHVzQ29kZXx8e30sYT17fSxzPXt9LHU9XCJjYW5jZWxlZFwiLFQ9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihoKXtpZighbil7bj17fTt3aGlsZSh0PVB0LmV4ZWMocCkpblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdPShuW3RbMV0udG9Mb3dlckNhc2UoKStcIiBcIl18fFtdKS5jb25jYXQodFsyXSl9dD1uW2UudG9Mb3dlckNhc2UoKStcIiBcIl19cmV0dXJuIG51bGw9PXQ/bnVsbDp0LmpvaW4oXCIsIFwiKX0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIGg/cDpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG51bGw9PWgmJihlPXNbZS50b0xvd2VyQ2FzZSgpXT1zW2UudG9Mb3dlckNhc2UoKV18fGUsYVtlXT10KSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1oJiYodi5taW1lVHlwZT1lKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGUpe3ZhciB0O2lmKGUpaWYoaClULmFsd2F5cyhlW1Quc3RhdHVzXSk7ZWxzZSBmb3IodCBpbiBlKXdbdF09W3dbdF0sZVt0XV07cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGUpe3ZhciB0PWV8fHU7cmV0dXJuIGMmJmMuYWJvcnQodCksbCgwLHQpLHRoaXN9fTtpZih4LnByb21pc2UoVCksdi51cmw9KChlfHx2LnVybHx8RXQuaHJlZikrXCJcIikucmVwbGFjZShNdCxFdC5wcm90b2NvbCtcIi8vXCIpLHYudHlwZT10Lm1ldGhvZHx8dC50eXBlfHx2Lm1ldGhvZHx8di50eXBlLHYuZGF0YVR5cGVzPSh2LmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChSKXx8W1wiXCJdLG51bGw9PXYuY3Jvc3NEb21haW4pe3I9RS5jcmVhdGVFbGVtZW50KFwiYVwiKTt0cnl7ci5ocmVmPXYudXJsLHIuaHJlZj1yLmhyZWYsdi5jcm9zc0RvbWFpbj1GdC5wcm90b2NvbCtcIi8vXCIrRnQuaG9zdCE9ci5wcm90b2NvbCtcIi8vXCIrci5ob3N0fWNhdGNoKGUpe3YuY3Jvc3NEb21haW49ITB9fWlmKHYuZGF0YSYmdi5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIHYuZGF0YSYmKHYuZGF0YT1rLnBhcmFtKHYuZGF0YSx2LnRyYWRpdGlvbmFsKSksX3QoSXQsdix0LFQpLGgpcmV0dXJuIFQ7Zm9yKGkgaW4oZz1rLmV2ZW50JiZ2Lmdsb2JhbCkmJjA9PWsuYWN0aXZlKysmJmsuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSx2LnR5cGU9di50eXBlLnRvVXBwZXJDYXNlKCksdi5oYXNDb250ZW50PSFSdC50ZXN0KHYudHlwZSksZj12LnVybC5yZXBsYWNlKEh0LFwiXCIpLHYuaGFzQ29udGVudD92LmRhdGEmJnYucHJvY2Vzc0RhdGEmJjA9PT0odi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmKHYuZGF0YT12LmRhdGEucmVwbGFjZShMdCxcIitcIikpOihvPXYudXJsLnNsaWNlKGYubGVuZ3RoKSx2LmRhdGEmJih2LnByb2Nlc3NEYXRhfHxcInN0cmluZ1wiPT10eXBlb2Ygdi5kYXRhKSYmKGYrPShTdC50ZXN0KGYpP1wiJlwiOlwiP1wiKSt2LmRhdGEsZGVsZXRlIHYuZGF0YSksITE9PT12LmNhY2hlJiYoZj1mLnJlcGxhY2UoT3QsXCIkMVwiKSxvPShTdC50ZXN0KGYpP1wiJlwiOlwiP1wiKStcIl89XCIra3QrKytvKSx2LnVybD1mK28pLHYuaWZNb2RpZmllZCYmKGsubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLGsubGFzdE1vZGlmaWVkW2ZdKSxrLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixrLmV0YWdbZl0pKSwodi5kYXRhJiZ2Lmhhc0NvbnRlbnQmJiExIT09di5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHYuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHYuZGF0YVR5cGVzWzBdJiZ2LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dP3YuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09di5kYXRhVHlwZXNbMF0/XCIsIFwiKyR0K1wiOyBxPTAuMDFcIjpcIlwiKTp2LmFjY2VwdHNbXCIqXCJdKSx2LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGksdi5oZWFkZXJzW2ldKTtpZih2LmJlZm9yZVNlbmQmJighMT09PXYuYmVmb3JlU2VuZC5jYWxsKHksVCx2KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh2LmNvbXBsZXRlKSxULmRvbmUodi5zdWNjZXNzKSxULmZhaWwodi5lcnJvciksYz1fdChXdCx2LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1Qsdl0pLGgpcmV0dXJuIFQ7di5hc3luYyYmMDx2LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx2LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0odixULG4pKSxzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD17fSxjPWUuZGF0YVR5cGVzLnNsaWNlKCk7aWYoY1sxXSlmb3IoYSBpbiBlLmNvbnZlcnRlcnMpbFthLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1thXTtvPWMuc2hpZnQoKTt3aGlsZShvKWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlW1widGhyb3dzXCJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjphP2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrdStcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19KHYscyxULGkpLGk/KHYuaWZNb2RpZmllZCYmKCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpKSYmKGsubGFzdE1vZGlmaWVkW2ZdPXUpLCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpKSYmKGsuZXRhZ1tmXT11KSksMjA0PT09ZXx8XCJIRUFEXCI9PT12LnR5cGU/bD1cIm5vY29udGVudFwiOjMwND09PWU/bD1cIm5vdG1vZGlmaWVkXCI6KGw9cy5zdGF0ZSxvPXMuZGF0YSxpPSEoYT1zLmVycm9yKSkpOihhPWwsIWUmJmx8fChsPVwiZXJyb3JcIixlPDAmJihlPTApKSksVC5zdGF0dXM9ZSxULnN0YXR1c1RleHQ9KHR8fGwpK1wiXCIsaT94LnJlc29sdmVXaXRoKHksW28sbCxUXSk6eC5yZWplY3RXaXRoKHksW1QsbCxhXSksVC5zdGF0dXNDb2RlKHcpLHc9dm9pZCAwLGcmJm0udHJpZ2dlcihpP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtULHYsaT9vOmFdKSxiLmZpcmVXaXRoKHksW1QsbF0pLGcmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbVCx2XSksLS1rLmFjdGl2ZXx8ay5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gVH0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGsuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGsuZ2V0KGUsdm9pZCAwLHQsXCJzY3JpcHRcIil9fSksay5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLGkpe2tbaV09ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG0odCkmJihyPXJ8fG4sbj10LHQ9dm9pZCAwKSxrLmFqYXgoay5leHRlbmQoe3VybDplLHR5cGU6aSxkYXRhVHlwZTpyLGRhdGE6dCxzdWNjZXNzOm59LGsuaXNQbGFpbk9iamVjdChlKSYmZSkpfX0pLGsuX2V2YWxVcmw9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gay5hamF4KHt1cmw6ZSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixjYWNoZTohMCxhc3luYzohMSxnbG9iYWw6ITEsY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKCl7fX0sZGF0YUZpbHRlcjpmdW5jdGlvbihlKXtrLmdsb2JhbEV2YWwoZSx0KX19KX0say5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9ayhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoZnVuY3Rpb24oKXt2YXIgZT10aGlzO3doaWxlKGUuZmlyc3RFbGVtZW50Q2hpbGQpZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkuYXBwZW5kKHRoaXMpKSx0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24obil7cmV0dXJuIG0obik/dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2sodGhpcykud3JhcElubmVyKG4uY2FsbCh0aGlzLGUpKX0pOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWsodGhpcyksdD1lLmNvbnRlbnRzKCk7dC5sZW5ndGg/dC53cmFwQWxsKG4pOmUuYXBwZW5kKG4pfSl9LHdyYXA6ZnVuY3Rpb24odCl7dmFyIG49bSh0KTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGUpe2sodGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSl9LHVud3JhcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wYXJlbnQoZSkubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7ayh0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSksdGhpc319KSxrLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIWsuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LGsuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxrLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBVdD17MDoyMDAsMTIyMzoyMDR9LFh0PWsuYWpheFNldHRpbmdzLnhocigpO3kuY29ycz0hIVh0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4gWHQseS5hamF4PVh0PSEhWHQsay5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGkpe3ZhciBvLGE7aWYoeS5jb3JzfHxYdCYmIWkuY3Jvc3NEb21haW4pcmV0dXJue3NlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPWkueGhyKCk7aWYoci5vcGVuKGkudHlwZSxpLnVybCxpLmFzeW5jLGkudXNlcm5hbWUsaS5wYXNzd29yZCksaS54aHJGaWVsZHMpZm9yKG4gaW4gaS54aHJGaWVsZHMpcltuXT1pLnhockZpZWxkc1tuXTtmb3IobiBpbiBpLm1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUmJnIub3ZlcnJpZGVNaW1lVHlwZShpLm1pbWVUeXBlKSxpLmNyb3NzRG9tYWlufHxlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGVbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIiksZSlyLnNldFJlcXVlc3RIZWFkZXIobixlW25dKTtvPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbigpe28mJihvPWE9ci5vbmxvYWQ9ci5vbmVycm9yPXIub25hYm9ydD1yLm9udGltZW91dD1yLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiYWJvcnRcIj09PWU/ci5hYm9ydCgpOlwiZXJyb3JcIj09PWU/XCJudW1iZXJcIiE9dHlwZW9mIHIuc3RhdHVzP3QoMCxcImVycm9yXCIpOnQoci5zdGF0dXMsci5zdGF0dXNUZXh0KTp0KFV0W3Iuc3RhdHVzXXx8ci5zdGF0dXMsci5zdGF0dXNUZXh0LFwidGV4dFwiIT09KHIucmVzcG9uc2VUeXBlfHxcInRleHRcIil8fFwic3RyaW5nXCIhPXR5cGVvZiByLnJlc3BvbnNlVGV4dD97YmluYXJ5OnIucmVzcG9uc2V9Ont0ZXh0OnIucmVzcG9uc2VUZXh0fSxyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxyLm9ubG9hZD1vKCksYT1yLm9uZXJyb3I9ci5vbnRpbWVvdXQ9byhcImVycm9yXCIpLHZvaWQgMCE9PXIub25hYm9ydD9yLm9uYWJvcnQ9YTpyLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJkMuc2V0VGltZW91dChmdW5jdGlvbigpe28mJmEoKX0pfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSksay5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKGUpe2UuY3Jvc3NEb21haW4mJihlLmNvbnRlbnRzLnNjcmlwdD0hMSl9KSxrLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gay5nbG9iYWxFdmFsKGUpLGV9fX0pLGsuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWUuY2FjaGUmJihlLmNhY2hlPSExKSxlLmNyb3NzRG9tYWluJiYoZS50eXBlPVwiR0VUXCIpfSksay5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1rKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KTt2YXIgVnQsR3Q9W10sWXQ9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztrLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgZT1HdC5wb3AoKXx8ay5leHBhbmRvK1wiX1wiK2t0Kys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxrLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPSExIT09ZS5qc29ucCYmKFl0LnRlc3QoZS51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PShlLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZZdC50ZXN0KGUuZGF0YSkmJlwiZGF0YVwiKTtpZihhfHxcImpzb25wXCI9PT1lLmRhdGFUeXBlc1swXSlyZXR1cm4gcj1lLmpzb25wQ2FsbGJhY2s9bShlLmpzb25wQ2FsbGJhY2spP2UuanNvbnBDYWxsYmFjaygpOmUuanNvbnBDYWxsYmFjayxhP2VbYV09ZVthXS5yZXBsYWNlKFl0LFwiJDFcIityKTohMSE9PWUuanNvbnAmJihlLnVybCs9KFN0LnRlc3QoZS51cmwpP1wiJlwiOlwiP1wiKStlLmpzb25wK1wiPVwiK3IpLGUuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIG98fGsuZXJyb3IocitcIiB3YXMgbm90IGNhbGxlZFwiKSxvWzBdfSxlLmRhdGFUeXBlc1swXT1cImpzb25cIixpPUNbcl0sQ1tyXT1mdW5jdGlvbigpe289YXJndW1lbnRzfSxuLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWk/ayhDKS5yZW1vdmVQcm9wKHIpOkNbcl09aSxlW3JdJiYoZS5qc29ucENhbGxiYWNrPXQuanNvbnBDYWxsYmFjayxHdC5wdXNoKHIpKSxvJiZtKGkpJiZpKG9bMF0pLG89aT12b2lkIDB9KSxcInNjcmlwdFwifSkseS5jcmVhdGVIVE1MRG9jdW1lbnQ9KChWdD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5KS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1WdC5jaGlsZE5vZGVzLmxlbmd0aCksay5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlP1tdOihcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSksdHx8KHkuY3JlYXRlSFRNTERvY3VtZW50Pygocj0odD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9RS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChyKSk6dD1FKSxvPSFuJiZbXSwoaT1ELmV4ZWMoZSkpP1t0LmNyZWF0ZUVsZW1lbnQoaVsxXSldOihpPXdlKFtlXSx0LG8pLG8mJm8ubGVuZ3RoJiZrKG8pLnJlbW92ZSgpLGsubWVyZ2UoW10saS5jaGlsZE5vZGVzKSkpO3ZhciByLGksb30say5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4tMTxzJiYocj1tdChlLnNsaWNlKHMpKSxlPWUuc2xpY2UoMCxzKSksbSh0KT8obj10LHQ9dm9pZCAwKTp0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmKGk9XCJQT1NUXCIpLDA8YS5sZW5ndGgmJmsuYWpheCh7dXJsOmUsdHlwZTppfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/ayhcIjxkaXY+XCIpLmFwcGVuZChrLnBhcnNlSFRNTChlKSkuZmluZChyKTplKX0pLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaChmdW5jdGlvbigpe24uYXBwbHkodGhpcyxvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KX0pLHRoaXN9LGsuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGUsdCl7ay5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5vbih0LGUpfX0pLGsuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKHQpe3JldHVybiBrLmdyZXAoay50aW1lcnMsZnVuY3Rpb24oZSl7cmV0dXJuIHQ9PT1lLmVsZW19KS5sZW5ndGh9LGsub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPWsuY3NzKGUsXCJwb3NpdGlvblwiKSxjPWsoZSksZj17fTtcInN0YXRpY1wiPT09bCYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWMub2Zmc2V0KCksbz1rLmNzcyhlLFwidG9wXCIpLHU9ay5jc3MoZSxcImxlZnRcIiksKFwiYWJzb2x1dGVcIj09PWx8fFwiZml4ZWRcIj09PWwpJiYtMTwobyt1KS5pbmRleE9mKFwiYXV0b1wiKT8oYT0ocj1jLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLG0odCkmJih0PXQuY2FsbChlLG4say5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKGYudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKGYubGVmdD10LmxlZnQtcy5sZWZ0K2kpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsZik6Yy5jc3MoZil9fSxrLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKHQpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PXQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oZSl7ay5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsdCxlKX0pO3ZhciBlLG4scj10aGlzWzBdO3JldHVybiByP3IuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg/KGU9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXIub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldyx7dG9wOmUudG9wK24ucGFnZVlPZmZzZXQsbGVmdDplLmxlZnQrbi5wYWdlWE9mZnNldH0pOnt0b3A6MCxsZWZ0OjB9OnZvaWQgMH0scG9zaXRpb246ZnVuY3Rpb24oKXtpZih0aGlzWzBdKXt2YXIgZSx0LG4scj10aGlzWzBdLGk9e3RvcDowLGxlZnQ6MH07aWYoXCJmaXhlZFwiPT09ay5jc3MocixcInBvc2l0aW9uXCIpKXQ9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtlbHNle3Q9dGhpcy5vZmZzZXQoKSxuPXIub3duZXJEb2N1bWVudCxlPXIub2Zmc2V0UGFyZW50fHxuLmRvY3VtZW50RWxlbWVudDt3aGlsZShlJiYoZT09PW4uYm9keXx8ZT09PW4uZG9jdW1lbnRFbGVtZW50KSYmXCJzdGF0aWNcIj09PWsuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT1rKGUpLm9mZnNldCgpKS50b3ArPWsuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPWsuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3Atay5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtay5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vZmZzZXRQYXJlbnQ7d2hpbGUoZSYmXCJzdGF0aWNcIj09PWsuY3NzKGUsXCJwb3NpdGlvblwiKSllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxpZX0pfX0pLGsuZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24odCxpKXt2YXIgbz1cInBhZ2VZT2Zmc2V0XCI9PT1pO2suZm5bdF09ZnVuY3Rpb24oZSl7cmV0dXJuIF8odGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoeChlKT9yPWU6OT09PWUubm9kZVR5cGUmJihyPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PW4pcmV0dXJuIHI/cltpXTplW3RdO3I/ci5zY3JvbGxUbyhvP3IucGFnZVhPZmZzZXQ6bixvP246ci5wYWdlWU9mZnNldCk6ZVt0XT1ufSx0LGUsYXJndW1lbnRzLmxlbmd0aCl9fSksay5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihlLG4pe2suY3NzSG9va3Nbbl09emUoeS5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGUsdCl7aWYodClyZXR1cm4gdD1fZShlLG4pLCRlLnRlc3QodCk/ayhlKS5wb3NpdGlvbigpW25dK1wicHhcIjp0fSl9KSxrLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxzKXtrLmVhY2goe3BhZGRpbmc6XCJpbm5lclwiK2EsY29udGVudDpzLFwiXCI6XCJvdXRlclwiK2F9LGZ1bmN0aW9uKHIsbyl7ay5mbltvXT1mdW5jdGlvbihlLHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGgmJihyfHxcImJvb2xlYW5cIiE9dHlwZW9mIGUpLGk9cnx8KCEwPT09ZXx8ITA9PT10P1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIF8odGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHI7cmV0dXJuIHgoZSk/MD09PW8uaW5kZXhPZihcIm91dGVyXCIpP2VbXCJpbm5lclwiK2FdOmUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWUubm9kZVR5cGU/KHI9ZS5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoZS5ib2R5W1wic2Nyb2xsXCIrYV0scltcInNjcm9sbFwiK2FdLGUuYm9keVtcIm9mZnNldFwiK2FdLHJbXCJvZmZzZXRcIithXSxyW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1uP2suY3NzKGUsdCxpKTprLnN0eWxlKGUsdCxuLGkpfSxzLG4/ZTp2b2lkIDAsbil9fSl9KSxrLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsbil7ay5mbltuXT1mdW5jdGlvbihlLHQpe3JldHVybiAwPGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vbihuLG51bGwsZSx0KTp0aGlzLnRyaWdnZXIobil9fSksay5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLGsuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9fSksay5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fGsuZ3VpZCsrLGl9LGsuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/ay5yZWFkeVdhaXQrKzprLnJlYWR5KCEwKX0say5pc0FycmF5PUFycmF5LmlzQXJyYXksay5wYXJzZUpTT049SlNPTi5wYXJzZSxrLm5vZGVOYW1lPUEsay5pc0Z1bmN0aW9uPW0say5pc1dpbmRvdz14LGsuY2FtZWxDYXNlPVYsay50eXBlPXcsay5ub3c9RGF0ZS5ub3csay5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9ay50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBrfSk7dmFyIFF0PUMualF1ZXJ5LEp0PUMuJDtyZXR1cm4gay5ub0NvbmZsaWN0PWZ1bmN0aW9uKGUpe3JldHVybiBDLiQ9PT1rJiYoQy4kPUp0KSxlJiZDLmpRdWVyeT09PWsmJihDLmpRdWVyeT1RdCksa30sZXx8KEMualF1ZXJ5PUMuJD1rKSxrfSk7IiwiLy89aW5jbHVkZSBqcXVlcnkuanNcclxuLy89aW5jbHVkZSBzbGlkZXIuanNcclxuLy89aW5jbHVkZSBzdGFydC5qc1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBcclxuXHRmdW5jdGlvbiBjb250cm9scygpIHtcclxuXHRcdGVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzbGlkZXJfX2J1dHRvblwiKTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspe2Vsc1tpXS5jbGFzc0xpc3QgPSBcInNsaWRlcl9fYnV0dG9uXCI7fVxyXG5cclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ3NsaWRlcl9fYnV0dG9uX3NlbGVjdGVkJyk7XHJcblx0XHQkKCcuc2xpZGVyX19pbm5lcicpLmFuaW1hdGUoe1xyXG5cdFx0XHR0b3A6IC0kKCcuc2xpZGVyJykuaGVpZ2h0KCkgKiAkKHRoaXMpLmluZGV4KClcclxuXHRcdH0sIDQ1MCk7XHJcblx0fVxyXG4gIFxyXG5cdGNvbnN0IHJ1bkNvZGUgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyX19idXR0b24nKTtcclxuXHRcdFx0aWYgKCBidXR0b24gKSB7XHJcblx0XHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgYnV0dG9uLmxlbmd0aDsgaSsrICkge1xyXG5cdFx0XHRcdFx0YnV0dG9uW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbHMsIGZhbHNlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRydW5Db2RlKCk7XHJcbiAgXHJcbn0pKCk7XHJcblxyXG52YXIgbWFpbl9pbm5lciA9ICQoXCIubWFpbl9faW5uZXJcIik7XHJcbm1haW5faW5uZXIuY3NzKFwibGVmdFwiLCAgXCItXCIgKyBtYWluX2lubmVyLndpZHRoKCkgKyBcInB4XCIpO1xyXG5tYWluX2lubmVyLmNzcyhcInRvcFwiLCBcIi1cIiArIG1haW5faW5uZXIuaGVpZ2h0KCkgKyBcInB4XCIpO1xyXG5cclxuJChcIi5tYWluX19pbm5lclwiKS5hbmltYXRlKCB7XCJsZWZ0XCI6IFwiLVwiICsgbWFpbl9pbm5lci53aWR0aCgpIC8gNywgXCJ0b3BcIiA6IFwiLVwiICsgbWFpbl9pbm5lci5oZWlnaHQoKSAvIDQuOX0sIDEwMDApO1xyXG4kKFwiLm1haW5fX2l0ZW1cIikudG9nZ2xlQ2xhc3MoJ21haW5fX2l0ZW1fc2NhbGUnKTtcclxuJChcIi5tZW51XCIpLmNzcyhcInRvcFwiLCBcIjBcIik7XHJcblxyXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdCQoXCIubWFpbl9faXRlbV9yXCIpLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVgoMXB4KSBzY2FsZSgxKVwiKTtcclxuXHQkKFwiLm1haW5fX2l0ZW1fbFwiKS5jc3MoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGVYKC0xcHgpIHNjYWxlKDEpXCIpO1xyXG5cclxufSwgMTAwKTtcclxuXHJcbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0JChcIi5tYWluX19pdGVtXCIpLnRvZ2dsZUNsYXNzKFwibWFpbl9feWhvdmVyXCIpO1xyXG59LCA0MDApO1xyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZV9vcGVuKGVsZW1lbnQsIHVybCwgb3Blbl90eXBlKSB7XHJcblx0JChlbGVtZW50KS5hZGRDbGFzcyhcImFuaW1hdGlvbl8xXCIpO1xyXG5cdCQoXCIubWFpblwiKS5hZGRDbGFzcyhcImFuaW1hdGlvbl93aGl0ZWZhZGVcIik7XHJcblx0JChlbGVtZW50KS5maW5kKFwiLm1haW5fX2NvbnRcIikuYWRkQ2xhc3MoXCJhbmltYXRpb25fY29udFwiKTtcclxuXHRcclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHR3aW5kb3cub3Blbih1cmwsIG9wZW5fdHlwZSk7XHJcblx0fSwgMTQ1MCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVfb3Blbl9hYm91dCh1cmwsIG9wZW5fdHlwZSwgdW5kZXJseWluZ19lbCl7XHJcblx0JChcIi5tYWluX19pdGVtX2Fib3V0XCIpLmFkZENsYXNzKFwiYW5pbWF0aW9uX2Fib3V0XCIpO1xyXG5cdCQoXCIubWFpblwiKS5hZGRDbGFzcyhcImFuaW1hdGlvbl93aGl0ZWZhZGVcIik7XHJcblx0JChcIi5tYWluX19pdGVtX2Fib3V0XCIpLmZpbmQoXCIubWFpbl9fY29udFwiKS5hZGRDbGFzcyhcImFuaW1hdGlvbl9jb250XCIpO1xyXG5cclxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHR3aW5kb3cub3Blbih1cmwsIG9wZW5fdHlwZSk7XHJcblx0fSwgMTQ1MCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVfbGluayh1cmwsIG9wZW5fdHlwZSkge1xyXG5cdCQoXCIubWFpblwiKS5hZGRDbGFzcyhcImFuaW1hdGlvbl93aGl0ZWZhZGVfc1wiKTtcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0d2luZG93Lm9wZW4odXJsLCBvcGVuX3R5cGUpO1xyXG5cdH0sIDUwMCk7XHJcbn1cclxuIiwiLypcclxuc2xpZGVyKFxyXG5cdHNsaWRlcl9pdGVtID0gXCJzbGlkZVwiLCBcclxuXHRzbGlkZXJfaXRlbSA9IFwiZG90XCIsIFxyXG5cdGJ1dHRvbnMgPSBbXCJsZWZ0XCIsIFwicmlnaHRcIl0sXHJcblx0c3BlZWQ9MTAwMCxcclxuXHRvcGVuPTFcclxuKTtcclxuKi9cclxuXHJcbi8vIGZ1bmN0b2luIHZlcnRpY2FsX3NsaWRlcigpXHJcblxyXG5mdW5jdGlvblx0c2xpZGVyKHNsaWRlcl9pdGVtLCBkb3RfaXRlbT1cIlwiLCBidXR0b25zPVtdLCBzcGVlZD0xMDAwLCBvcGVuPTAsIGl0ZW1zX3Blcl9zbGlkZT0xLCBhbmltYXRpb249XCJsaW5lYXJcIiwgcG9zPTApe1xyXG5cdC8vIG11bHRpcGxlIGl0ZW1zXHJcblx0Ly8g0L/QvtC70L7QstC40L3Rh9Cw0YLRi9C1INC/0LXRgNC10YXQvtC00Ysg0L3QsCDRgtC10YUg0LPQtNC1INC80L3QvtCz0L4g0LDQudGC0LXQvNC+0LJcclxuXHJcblx0Ly8gZHJhZ2dhYmxlIFxyXG5cclxuXHQvLyBhdXRvXHJcblx0Ly8gYXV0b19zcGVlZFxyXG5cdFxyXG5cdC8vIG1ha2UgZnJvbSBpdCBhIGNsYXNzXHJcblx0Ly8gZmluZCBvdXQgY2xhc3Mgc3dpdGNoX3RvKiB3YXMgY2FsbGVkIGZyb20gYW5kIGZpbGwgdGhlIHZyYWlibGVzIHdpdGggdGhpcyBpbmZvcm1hdGlvblxyXG5cdC8vIGFuaW1hdGlvbiB0eXBlIChub25lLCBmYWRlLCBzbGlkZSwgaGFsZnNsaWRlKVxyXG5cdFxyXG5cdC8vIHNsaWRlciB0eXBlIChjaXJjbCwgbGluZSwgLi4uKVxyXG5cdFxyXG5cdHZhciBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2xpZGVyX2l0ZW0pO1x0XHJcblx0XHJcblx0Ly8gY3JlYXRpbmcgc2xpZGVyIGFuZCBzbGlkZXIgY29udGFpbmVyIGNsYXNzXHJcblx0dmFyIHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0dmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuXHRpZihidXR0b25zLmxlbmd0aCA9PSAyKXtcclxuXHRcdHZhciBsZWZ0X2J0bnMgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShidXR0b25zWzBdKVswXTtcclxuXHRcdHZhciByZ2h0X2J0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGJ1dHRvbnNbMV0pWzBdO1xyXG5cdFx0XHJcblx0XHRsZWZ0X2J0bnMuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLFwic3dpdGNoX3RvX3ByZXYoJ1wiICsgc2xpZGVyX2l0ZW0gKyBcIicsICdcIiArIGRvdF9pdGVtICsgXCInLCBcIiArIG9wZW4gKyBcIilcIik7XHJcblx0XHRyZ2h0X2J0bnMuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLFwic3dpdGNoX3RvX25leHQoJ1wiICsgc2xpZGVyX2l0ZW0gKyBcIicsICdcIiArIGRvdF9pdGVtICsgXCInLCBcIiArIG9wZW4gKyBcIilcIik7XHJcblx0fVxyXG5cclxuXHRzbGlkZXIuY2xhc3NMaXN0LmFkZChzbGlkZXJfaXRlbSArIFwiX19zbGlkZXJcIik7XHJcblx0Y29udGVudC5jbGFzc0xpc3QuYWRkKHNsaWRlcl9pdGVtICsgXCItc2xpZGVyX19pbm5lclwiKTtcclxuXHJcblx0c2xpZGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG5cclxuXHRpdGVtc1swXS5wYXJlbnROb2RlLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuXHRpdGVtc1swXS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHNsaWRlcik7IFxyXG5cdFxyXG5cdCQoaXRlbXMpLnByZXBlbmRUbyhjb250ZW50KTsgLy9yZXBsYWNlIGl0IHdpdGggcHVyZSBqcyAvL21vdmluZyBhbGwgaXRlbXMgaW50byBzbGlkZXIgY29udGFpbmVyXHJcblx0XHJcblx0Ly9zdHlsaW5nIGNvbnRhaW5lclxyXG5cdGNvbnRlbnQuc3R5bGUud2hpdGVTcGFjZSA9IFwibm93cmFwXCI7XHJcblx0Y29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuXHRjb250ZW50LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG5cdGNvbnRlbnQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuXHRjb250ZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSBcIiArIHNwZWVkICsgXCJtcyBcIiArIGFuaW1hdGlvbjtcclxuXHJcblx0Ly9zdHlsaW5nIGl0ZW1zXHJcblx0Zm9yKHZhciBpID0gMDsgaSA8IHNsaWRlcl9sZW4oaXRlbXMpOyBpKyspe1xyXG5cdFx0aXRlbXNbaV0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblx0XHRpdGVtc1tpXS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuXHRcdGl0ZW1zW2ldLnN0eWxlLndpZHRoID0gKDEvaXRlbXNfcGVyX3NsaWRlICogMTAwKSArIFwiJVwiOyBcclxuXHR9XHJcblxyXG5cdC8vY3JlYXRpbmcgZG90c1xyXG5cdGlmKGRvdF9pdGVtICE9IFwiXCIpe1xyXG5cdFx0dmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRvdF9pdGVtKTtcclxuXHRcdG11bHRpcGx5X2VsKGRvdHNbMF0sIHNsaWRlcl9sZW4oaXRlbXMpL2l0ZW1zX3Blcl9zbGlkZSk7XHJcblx0XHRcclxuXHRcdC8vY3JlYXRpbmcgb25saWNrPVwic3dpdGNoX3RvKClcIlxyXG5cdFx0c2V0X2RvdHNfZnVuY3Rpb25zKGRvdHMsIHNsaWRlcl9pdGVtKTtcclxuXHR9XHJcblx0XHJcblx0c3dpdGNoX3RvKHNsaWRlcl9pdGVtLCBwb3MsIGRvdF9pdGVtKTtcclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNsaWRlcl9hdXRvKCl7XHJcblx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZXJfcG9zaXRpb24oaXRlbXMsIGl0ZW1zX2NsYXNzLCBkb3RfaXRlbSl7XHJcblx0dmFyIGxzdCA9IFwiXCI7XHJcblx0Zm9yKHZhciBpPTA7IGkgPCBzbGlkZXJfbGVuKGl0ZW1zKTsgaSsrKXtcclxuXHRcdGlmKGl0ZW1zW2ldLmNsYXNzTGlzdCA9PSAoaXRlbXNfY2xhc3MgKyBcIiBcIiArIGl0ZW1zX2NsYXNzICsgXCJfYWN0aXZlXCIpKVxyXG5cdFx0XHRyZXR1cm4gaTtcclxuXHR9XHRcclxuXHJcblx0c3dpdGNoX3RvKHNsaWRlcl9pdGVtLCAwLCBkb3RfaXRlbSk7XHJcblx0cmV0dXJuIDA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaF90b19wcmV2KGl0ZW1zX2NsYXNzLCBkb3RfaXRlbSwgb3Blbikge1xyXG5cdGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpdGVtc19jbGFzcyk7XHJcblx0cG9zID0gc2xpZGVyX3Bvc2l0aW9uKGl0ZW1zLCBpdGVtc19jbGFzcywgZG90X2l0ZW0pO1xyXG5cclxuXHRpZihwb3MgPT0gMCl7XHJcblx0XHRpZihvcGVuKSBcclxuXHRcdFx0cG9zID0gc2xpZGVyX2xlbihpdGVtcykgLSAxO1xyXG5cdH0gZWxzZSBcclxuXHRcdHBvcyAtPSAxO1xyXG5cclxuXHRzd2l0Y2hfdG8oaXRlbXNfY2xhc3MsIHBvcywgZG90X2l0ZW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hfdG9fbmV4dChpdGVtc19jbGFzcywgZG90X2l0ZW0sIG9wZW4pIHtcclxuXHRpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaXRlbXNfY2xhc3MpO1xyXG5cdHBvcyA9IHNsaWRlcl9wb3NpdGlvbihpdGVtcywgaXRlbXNfY2xhc3MsIGRvdF9pdGVtKTtcclxuXHJcblx0aWYoIHBvcyA+PSAoc2xpZGVyX2xlbihpdGVtcykgLSAxKSApIHtcclxuXHRcdGlmKG9wZW4pe1xyXG5cdFx0XHQvLyBjcmF0ZSBwc2V1ZG8gZWxlbWVudFxyXG5cdFx0XHQvLyBzd2l0aCB0byBwc2V1ZG9lbGVtZW50XHJcblx0XHRcdC8vIHNldCBkb3RzIHRvIGxhc3RcclxuXHRcdFx0Ly8gaWZcclxuXHRcdFx0Ly9cdFx0c3dpY2hlcyB0byBsb3dlciB0aGVuIGN1ciB0aGVuIGRpc3BsYXkgbm9uZSBjdXI7IFxyXG5cdFx0XHQvLyBzdWthIGJseWF0IHBpemRlY1xyXG5cdFx0XHRwb3MgPSAwO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBcclxuXHRcdHBvcyArPSAxO1xyXG5cclxuXHRzd2l0Y2hfdG8oaXRlbXNfY2xhc3MsIHBvcywgZG90X2l0ZW0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3dpdGNoX3RvKGl0ZW1zX2NsYXNzLCBudW0sIGRvdF9pdGVtKXtcclxuXHR2YXIgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGl0ZW1zX2NsYXNzKTtcclxuXHR2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZG90X2l0ZW0pO1xyXG5cclxuXHRmb3IodmFyIGk9MDsgaSA8IHNsaWRlcl9sZW4oaXRlbXMpOyBpKyspe1xyXG5cdFx0aXRlbXNbaV0uY2xhc3NMaXN0ID0gaXRlbXNfY2xhc3M7XHJcblxyXG5cdFx0aWYobnVtID09IGkpe1xyXG5cdFx0XHRpdGVtc1tpXS5jbGFzc0xpc3QuYWRkKGl0ZW1zX2NsYXNzICsgXCJfYWN0aXZlXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zm9yKHZhciBpPTA7IGkgPCBzbGlkZXJfbGVuKGl0ZW1zKTsgaSsrKXtcclxuXHRcdGRvdHNbaV0uY2xhc3NMaXN0ID0gZG90X2l0ZW07XHJcblxyXG5cdFx0aWYobnVtID09IGkpe1xyXG5cdFx0XHRkb3RzW2ldLmNsYXNzTGlzdC5hZGQoZG90X2l0ZW0gKyBcIl9hY3RpdmVcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRudW0gPSAtMSAqIG51bTtcclxuXHRpdGVtc1swXS5wYXJlbnROb2RlLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWChcIiArIChudW0gKiAxMDApICsgXCIlKVwiO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gc2xpZGVyX2xlbihpdGVtcyl7IHJldHVybiBpdGVtcy5sZW5ndGg7fVxyXG5mdW5jdGlvbiBzZXRfZG90c19mdW5jdGlvbnMoZG90cywgc2xpZGVyX2NvbnQpIHtcclxuXHRmb3IodmFyIGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKyl7XHJcblx0XHRkb3RzW2ldLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIixcInN3aXRjaF90bygnXCIgKyBzbGlkZXJfY29udCArIFwiJywgXCIgKyBpICsgXCIsICdcIiArIGRvdHNbMF0uY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVswXSArIFwiJylcIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtdWx0aXBseV9lbChlbCwgbnVtKSB7XHJcblx0dmFyIGNsYXNzX25hbWUgPSBlbC5jbGFzc05hbWU7XHJcblx0dmFyIHBhciA9IGVsLnBhcmVudE5vZGU7XHJcblx0dmFyIGNsb25lOyBcclxuXHJcblx0Zm9yKHZhciBpID0gMTsgaSA8IG51bSA7IGkrKykge1xyXG5cdFx0Y2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XHJcblx0XHRjbG9uZS5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUgKyBcIl9fXCIgKyBpKTtcdFxyXG5cdFx0cGFyLmFwcGVuZChjbG9uZSk7XHJcblx0fVxyXG5cclxuXHRlbC5jbGFzc0xpc3QuYWRkKGNsYXNzX25hbWUgKyBcIl9fMFwiKTtcclxufVxyXG4iLCIiXX0=
