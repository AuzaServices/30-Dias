(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
})();
var nf = {
        exports: {}
    },
    As = {},
    rf = {
        exports: {}
    },
    F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei = Symbol.for("react.element"),
    Gm = Symbol.for("react.portal"),
    Qm = Symbol.for("react.fragment"),
    Xm = Symbol.for("react.strict_mode"),
    Ym = Symbol.for("react.profiler"),
    Zm = Symbol.for("react.provider"),
    Jm = Symbol.for("react.context"),
    e0 = Symbol.for("react.forward_ref"),
    t0 = Symbol.for("react.suspense"),
    n0 = Symbol.for("react.memo"),
    r0 = Symbol.for("react.lazy"),
    Mu = Symbol.iterator;

function i0(e) {
    return e === null || typeof e != "object" ? null : (e = Mu && e[Mu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var sf = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    of = Object.assign,
    af = {};

function Gn(e, t, n) {
    this.props = e, this.context = t, this.refs = af, this.updater = n || sf
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Gn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function lf() {}
lf.prototype = Gn.prototype;

function nl(e, t, n) {
    this.props = e, this.context = t, this.refs = af, this.updater = n || sf
}
var rl = nl.prototype = new lf;
rl.constructor = nl;
of(rl, Gn.prototype);
rl.isPureReactComponent = !0;
var Ru = Array.isArray,
    uf = Object.prototype.hasOwnProperty,
    il = {
        current: null
    },
    cf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function df(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t) uf.call(t, r) && !cf.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps, a) i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: ei,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: il.current
    }
}

function s0(e, t) {
    return {
        $$typeof: ei,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function sl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ei
}

function o0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Du = /\/+/g;

function Xs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? o0("" + e.key) : t.toString(36)
}

function Li(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case ei:
                case Gm:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + Xs(o, 0) : r, Ru(i) ? (n = "", e != null && (n = e.replace(Du, "$&/") + "/"), Li(i, t, n, "", function(u) {
        return u
    })) : i != null && (sl(i) && (i = s0(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Du, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ru(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + Xs(s, a);
            o += Li(s, t, n, l, i)
        } else if (l = i0(e), typeof l == "function")
            for (e = l.call(e), a = 0; !(s = e.next()).done;) s = s.value, l = r + Xs(s, a++), o += Li(s, t, n, l, i);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function hi(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return Li(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }), r
}

function a0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Se = {
        current: null
    },
    Fi = {
        transition: null
    },
    l0 = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: Fi,
        ReactCurrentOwner: il
    };

function ff() {
    throw Error("act(...) is not supported in production builds of React.")
}
F.Children = {
    map: hi,
    forEach: function(e, t, n) {
        hi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return hi(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return hi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!sl(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
F.Component = Gn;
F.Fragment = Qm;
F.Profiler = Ym;
F.PureComponent = nl;
F.StrictMode = Xm;
F.Suspense = t0;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0;
F.act = ff;
F.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = of({}, e.props),
        i = e.key,
        s = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, o = il.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
        for (l in t) uf.call(t, l) && !cf.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a
    }
    return {
        $$typeof: ei,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
};
F.createContext = function(e) {
    return e = {
        $$typeof: Jm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Zm,
        _context: e
    }, e.Consumer = e
};
F.createElement = df;
F.createFactory = function(e) {
    var t = df.bind(null, e);
    return t.type = e, t
};
F.createRef = function() {
    return {
        current: null
    }
};
F.forwardRef = function(e) {
    return {
        $$typeof: e0,
        render: e
    }
};
F.isValidElement = sl;
F.lazy = function(e) {
    return {
        $$typeof: r0,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: a0
    }
};
F.memo = function(e, t) {
    return {
        $$typeof: n0,
        type: e,
        compare: t === void 0 ? null : t
    }
};
F.startTransition = function(e) {
    var t = Fi.transition;
    Fi.transition = {};
    try {
        e()
    } finally {
        Fi.transition = t
    }
};
F.unstable_act = ff;
F.useCallback = function(e, t) {
    return Se.current.useCallback(e, t)
};
F.useContext = function(e) {
    return Se.current.useContext(e)
};
F.useDebugValue = function() {};
F.useDeferredValue = function(e) {
    return Se.current.useDeferredValue(e)
};
F.useEffect = function(e, t) {
    return Se.current.useEffect(e, t)
};
F.useId = function() {
    return Se.current.useId()
};
F.useImperativeHandle = function(e, t, n) {
    return Se.current.useImperativeHandle(e, t, n)
};
F.useInsertionEffect = function(e, t) {
    return Se.current.useInsertionEffect(e, t)
};
F.useLayoutEffect = function(e, t) {
    return Se.current.useLayoutEffect(e, t)
};
F.useMemo = function(e, t) {
    return Se.current.useMemo(e, t)
};
F.useReducer = function(e, t, n) {
    return Se.current.useReducer(e, t, n)
};
F.useRef = function(e) {
    return Se.current.useRef(e)
};
F.useState = function(e) {
    return Se.current.useState(e)
};
F.useSyncExternalStore = function(e, t, n) {
    return Se.current.useSyncExternalStore(e, t, n)
};
F.useTransition = function() {
    return Se.current.useTransition()
};
F.version = "18.3.1";
rf.exports = F;
var C = rf.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u0 = C,
    c0 = Symbol.for("react.element"),
    d0 = Symbol.for("react.fragment"),
    f0 = Object.prototype.hasOwnProperty,
    h0 = u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p0 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function hf(e, t, n) {
    var r, i = {},
        s = null,
        o = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) f0.call(t, r) && !p0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: c0,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: h0.current
    }
}
As.Fragment = d0;
As.jsx = hf;
As.jsxs = hf;
nf.exports = As;
var c = nf.exports,
    pf = {
        exports: {}
    },
    De = {},
    mf = {
        exports: {}
    },
    gf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(A, R) {
        var V = A.length;
        A.push(R);
        e: for (; 0 < V;) {
            var H = V - 1 >>> 1,
                oe = A[H];
            if (0 < i(oe, R)) A[H] = R, A[V] = oe, V = H;
            else break e
        }
    }

    function n(A) {
        return A.length === 0 ? null : A[0]
    }

    function r(A) {
        if (A.length === 0) return null;
        var R = A[0],
            V = A.pop();
        if (V !== R) {
            A[0] = V;
            e: for (var H = 0, oe = A.length, di = oe >>> 1; H < di;) {
                var Ht = 2 * (H + 1) - 1,
                    Qs = A[Ht],
                    Wt = Ht + 1,
                    fi = A[Wt];
                if (0 > i(Qs, V)) Wt < oe && 0 > i(fi, Qs) ? (A[H] = fi, A[Wt] = V, H = Wt) : (A[H] = Qs, A[Ht] = V, H = Ht);
                else if (Wt < oe && 0 > i(fi, V)) A[H] = fi, A[Wt] = V, H = Wt;
                else break e
            }
        }
        return R
    }

    function i(A, R) {
        var V = A.sortIndex - R.sortIndex;
        return V !== 0 ? V : A.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = [],
        u = [],
        d = 1,
        f = null,
        h = 3,
        y = !1,
        v = !1,
        x = !1,
        j = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function g(A) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null) r(u);
            else if (R.startTime <= A) r(u), R.sortIndex = R.expirationTime, t(l, R);
            else break;
            R = n(u)
        }
    }

    function w(A) {
        if (x = !1, g(A), !v)
            if (n(l) !== null) v = !0, ci(S);
            else {
                var R = n(u);
                R !== null && Z(w, R.startTime - A)
            }
    }

    function S(A, R) {
        v = !1, x && (x = !1, m(k), k = -1), y = !0;
        var V = h;
        try {
            for (g(R), f = n(l); f !== null && (!(f.expirationTime > R) || A && !te());) {
                var H = f.callback;
                if (typeof H == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var oe = H(f.expirationTime <= R);
                    R = e.unstable_now(), typeof oe == "function" ? f.callback = oe : f === n(l) && r(l), g(R)
                } else r(l);
                f = n(l)
            }
            if (f !== null) var di = !0;
            else {
                var Ht = n(u);
                Ht !== null && Z(w, Ht.startTime - R), di = !1
            }
            return di
        } finally {
            f = null, h = V, y = !1
        }
    }
    var E = !1,
        N = null,
        k = -1,
        L = 5,
        M = -1;

    function te() {
        return !(e.unstable_now() - M < L)
    }

    function vt() {
        if (N !== null) {
            var A = e.unstable_now();
            M = A;
            var R = !0;
            try {
                R = N(!0, A)
            } finally {
                R ? $t() : (E = !1, N = null)
            }
        } else E = !1
    }
    var $t;
    if (typeof p == "function") $t = function() {
        p(vt)
    };
    else if (typeof MessageChannel < "u") {
        var tr = new MessageChannel,
            ui = tr.port2;
        tr.port1.onmessage = vt, $t = function() {
            ui.postMessage(null)
        }
    } else $t = function() {
        j(vt, 0)
    };

    function ci(A) {
        N = A, E || (E = !0, $t())
    }

    function Z(A, R) {
        k = j(function() {
            A(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(A) {
        A.callback = null
    }, e.unstable_continueExecution = function() {
        v || y || (v = !0, ci(S))
    }, e.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < A ? Math.floor(1e3 / A) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }, e.unstable_next = function(A) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = h
        }
        var V = h;
        h = R;
        try {
            return A()
        } finally {
            h = V
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(A, R) {
        switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                A = 3
        }
        var V = h;
        h = A;
        try {
            return R()
        } finally {
            h = V
        }
    }, e.unstable_scheduleCallback = function(A, R, V) {
        var H = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? H + V : H) : V = H, A) {
            case 1:
                var oe = -1;
                break;
            case 2:
                oe = 250;
                break;
            case 5:
                oe = 1073741823;
                break;
            case 4:
                oe = 1e4;
                break;
            default:
                oe = 5e3
        }
        return oe = V + oe, A = {
            id: d++,
            callback: R,
            priorityLevel: A,
            startTime: V,
            expirationTime: oe,
            sortIndex: -1
        }, V > H ? (A.sortIndex = V, t(u, A), n(l) === null && A === n(u) && (x ? (m(k), k = -1) : x = !0, Z(w, V - H))) : (A.sortIndex = oe, t(l, A), v || y || (v = !0, ci(S))), A
    }, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(A) {
        var R = h;
        return function() {
            var V = h;
            h = R;
            try {
                return A.apply(this, arguments)
            } finally {
                h = V
            }
        }
    }
})(gf);
mf.exports = gf;
var m0 = mf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g0 = C,
    Re = m0;

function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var yf = new Set,
    Mr = {};

function dn(e, t) {
    On(e, t), On(e + "Capture", t)
}

function On(e, t) {
    for (Mr[e] = t, e = 0; e < t.length; e++) yf.add(t[e])
}
var dt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    zo = Object.prototype.hasOwnProperty,
    y0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vu = {},
    Lu = {};

function v0(e) {
    return zo.call(Lu, e) ? !0 : zo.call(Vu, e) ? !1 : y0.test(e) ? Lu[e] = !0 : (Vu[e] = !0, !1)
}

function x0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function w0(e, t, n, r) {
    if (t === null || typeof t > "u" || x0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ke(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = o
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    fe[t] = new ke(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new ke(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new ke(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new ke(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new ke(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ol = /[\-:]([a-z])/g;

function al(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ol, al);
    fe[t] = new ke(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ol, al);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ol, al);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
fe.xlinkHref = new ke("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function ll(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (w0(t, n, i, r) && (n = null), r || i === null ? v0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var yt = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    pi = Symbol.for("react.element"),
    pn = Symbol.for("react.portal"),
    mn = Symbol.for("react.fragment"),
    ul = Symbol.for("react.strict_mode"),
    Bo = Symbol.for("react.profiler"),
    vf = Symbol.for("react.provider"),
    xf = Symbol.for("react.context"),
    cl = Symbol.for("react.forward_ref"),
    Uo = Symbol.for("react.suspense"),
    $o = Symbol.for("react.suspense_list"),
    dl = Symbol.for("react.memo"),
    St = Symbol.for("react.lazy"),
    wf = Symbol.for("react.offscreen"),
    Fu = Symbol.iterator;

function nr(e) {
    return e === null || typeof e != "object" ? null : (e = Fu && e[Fu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var G = Object.assign,
    Ys;

function dr(e) {
    if (Ys === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ys = t && t[1] || ""
    }
    return `
` + Ys + e
}
var Zs = !1;

function Js(e, t) {
    if (!e || Zs) return "";
    Zs = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a];) a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--, a--, 0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                            } while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Zs = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? dr(e) : ""
}

function S0(e) {
    switch (e.tag) {
        case 5:
            return dr(e.type);
        case 16:
            return dr("Lazy");
        case 13:
            return dr("Suspense");
        case 19:
            return dr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Js(e.type, !1), e;
        case 11:
            return e = Js(e.type.render, !1), e;
        case 1:
            return e = Js(e.type, !0), e;
        default:
            return ""
    }
}

function Ho(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case mn:
            return "Fragment";
        case pn:
            return "Portal";
        case Bo:
            return "Profiler";
        case ul:
            return "StrictMode";
        case Uo:
            return "Suspense";
        case $o:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case xf:
            return (e.displayName || "Context") + ".Consumer";
        case vf:
            return (e._context.displayName || "Context") + ".Provider";
        case cl:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case dl:
            return t = e.displayName || null, t !== null ? t : Ho(e.type) || "Memo";
        case St:
            t = e._payload, e = e._init;
            try {
                return Ho(e(t))
            } catch {}
    }
    return null
}

function k0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ho(t);
        case 8:
            return t === ul ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Lt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Sf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function C0(e) {
    var t = Sf(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o, s.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function mi(e) {
    e._valueTracker || (e._valueTracker = C0(e))
}

function kf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Sf(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Yi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Wo(e, t) {
    var n = t.checked;
    return G({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Iu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Lt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Cf(e, t) {
    t = t.checked, t != null && ll(e, "checked", t, !1)
}

function Ko(e, t) {
    Cf(e, t);
    var n = Lt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? qo(e, t.type, n) : t.hasOwnProperty("defaultValue") && qo(e, t.type, Lt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Ou(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function qo(e, t, n) {
    (t !== "number" || Yi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var fr = Array.isArray;

function Mn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Lt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function Go(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
    return G({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function _u(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(T(92));
            if (fr(n)) {
                if (1 < n.length) throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Lt(n)
    }
}

function Ef(e, t) {
    var n = Lt(t.value),
        r = Lt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function zu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Tf(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Qo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var gi, Nf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (gi = gi || document.createElement("div"), gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Rr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var gr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    E0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(gr).forEach(function(e) {
    E0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), gr[t] = gr[e]
    })
});

function jf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || gr.hasOwnProperty(e) && gr[e] ? ("" + t).trim() : t + "px"
}

function Pf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = jf(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var T0 = G({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Xo(e, t) {
    if (t) {
        if (T0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(T(62))
    }
}

function Yo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Zo = null;

function fl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Jo = null,
    Rn = null,
    Dn = null;

function Bu(e) {
    if (e = ri(e)) {
        if (typeof Jo != "function") throw Error(T(280));
        var t = e.stateNode;
        t && (t = Vs(t), Jo(e.stateNode, e.type, t))
    }
}

function Af(e) {
    Rn ? Dn ? Dn.push(e) : Dn = [e] : Rn = e
}

function bf() {
    if (Rn) {
        var e = Rn,
            t = Dn;
        if (Dn = Rn = null, Bu(e), t)
            for (e = 0; e < t.length; e++) Bu(t[e])
    }
}

function Mf(e, t) {
    return e(t)
}

function Rf() {}
var eo = !1;

function Df(e, t, n) {
    if (eo) return e(t, n);
    eo = !0;
    try {
        return Mf(e, t, n)
    } finally {
        eo = !1, (Rn !== null || Dn !== null) && (Rf(), bf())
    }
}

function Dr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Vs(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(T(231, t, typeof n));
    return n
}
var ea = !1;
if (dt) try {
    var rr = {};
    Object.defineProperty(rr, "passive", {
        get: function() {
            ea = !0
        }
    }), window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr)
} catch {
    ea = !1
}

function N0(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var yr = !1,
    Zi = null,
    Ji = !1,
    ta = null,
    j0 = {
        onError: function(e) {
            yr = !0, Zi = e
        }
    };

function P0(e, t, n, r, i, s, o, a, l) {
    yr = !1, Zi = null, N0.apply(j0, arguments)
}

function A0(e, t, n, r, i, s, o, a, l) {
    if (P0.apply(this, arguments), yr) {
        if (yr) {
            var u = Zi;
            yr = !1, Zi = null
        } else throw Error(T(198));
        Ji || (Ji = !0, ta = u)
    }
}

function fn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Vf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Uu(e) {
    if (fn(e) !== e) throw Error(T(188))
}

function b0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = fn(e), t === null) throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s;) {
                if (s === n) return Uu(i), e;
                if (s === r) return Uu(i), t;
                s = s.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return) n = i, r = s;
        else {
            for (var o = !1, a = i.child; a;) {
                if (a === n) {
                    o = !0, n = i, r = s;
                    break
                }
                if (a === r) {
                    o = !0, r = i, n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a;) {
                    if (a === n) {
                        o = !0, n = s, r = i;
                        break
                    }
                    if (a === r) {
                        o = !0, r = s, n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o) throw Error(T(189))
            }
        }
        if (n.alternate !== r) throw Error(T(190))
    }
    if (n.tag !== 3) throw Error(T(188));
    return n.stateNode.current === n ? e : t
}

function Lf(e) {
    return e = b0(e), e !== null ? Ff(e) : null
}

function Ff(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ff(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var If = Re.unstable_scheduleCallback,
    $u = Re.unstable_cancelCallback,
    M0 = Re.unstable_shouldYield,
    R0 = Re.unstable_requestPaint,
    ee = Re.unstable_now,
    D0 = Re.unstable_getCurrentPriorityLevel,
    hl = Re.unstable_ImmediatePriority,
    Of = Re.unstable_UserBlockingPriority,
    es = Re.unstable_NormalPriority,
    V0 = Re.unstable_LowPriority,
    _f = Re.unstable_IdlePriority,
    bs = null,
    tt = null;

function L0(e) {
    if (tt && typeof tt.onCommitFiberRoot == "function") try {
        tt.onCommitFiberRoot(bs, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Qe = Math.clz32 ? Math.clz32 : O0,
    F0 = Math.log,
    I0 = Math.LN2;

function O0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (F0(e) / I0 | 0) | 0
}
var yi = 64,
    vi = 4194304;

function hr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function ts(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        s = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = hr(a) : (s &= o, s !== 0 && (r = hr(s)))
    } else o = n & ~i, o !== 0 ? r = hr(o) : s !== 0 && (r = hr(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, s = t & -t, i >= s || i === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Qe(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function _0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function z0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var o = 31 - Qe(s),
            a = 1 << o,
            l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = _0(a, t)) : l <= t && (e.expiredLanes |= a), s &= ~a
    }
}

function na(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function zf() {
    var e = yi;
    return yi <<= 1, !(yi & 4194240) && (yi = 64), e
}

function to(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ti(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Qe(t), e[t] = n
}

function B0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Qe(n),
            s = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~s
    }
}

function pl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Qe(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var O = 0;

function Bf(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Uf, ml, $f, Hf, Wf, ra = !1,
    xi = [],
    jt = null,
    Pt = null,
    At = null,
    Vr = new Map,
    Lr = new Map,
    Ct = [],
    U0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Hu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            jt = null;
            break;
        case "dragenter":
        case "dragleave":
            Pt = null;
            break;
        case "mouseover":
        case "mouseout":
            At = null;
            break;
        case "pointerover":
        case "pointerout":
            Vr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Lr.delete(t.pointerId)
    }
}

function ir(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    }, t !== null && (t = ri(t), t !== null && ml(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function $0(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return jt = ir(jt, e, t, n, r, i), !0;
        case "dragenter":
            return Pt = ir(Pt, e, t, n, r, i), !0;
        case "mouseover":
            return At = ir(At, e, t, n, r, i), !0;
        case "pointerover":
            var s = i.pointerId;
            return Vr.set(s, ir(Vr.get(s) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return s = i.pointerId, Lr.set(s, ir(Lr.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Kf(e) {
    var t = Xt(e.target);
    if (t !== null) {
        var n = fn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Vf(n), t !== null) {
                    e.blockedOn = t, Wf(e.priority, function() {
                        $f(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Ii(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Zo = r, n.target.dispatchEvent(r), Zo = null
        } else return t = ri(n), t !== null && ml(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Wu(e, t, n) {
    Ii(e) && n.delete(t)
}

function H0() {
    ra = !1, jt !== null && Ii(jt) && (jt = null), Pt !== null && Ii(Pt) && (Pt = null), At !== null && Ii(At) && (At = null), Vr.forEach(Wu), Lr.forEach(Wu)
}

function sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ra || (ra = !0, Re.unstable_scheduleCallback(Re.unstable_NormalPriority, H0)))
}

function Fr(e) {
    function t(i) {
        return sr(i, e)
    }
    if (0 < xi.length) {
        sr(xi[0], e);
        for (var n = 1; n < xi.length; n++) {
            var r = xi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (jt !== null && sr(jt, e), Pt !== null && sr(Pt, e), At !== null && sr(At, e), Vr.forEach(t), Lr.forEach(t), n = 0; n < Ct.length; n++) r = Ct[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ct.length && (n = Ct[0], n.blockedOn === null);) Kf(n), n.blockedOn === null && Ct.shift()
}
var Vn = yt.ReactCurrentBatchConfig,
    ns = !0;

function W0(e, t, n, r) {
    var i = O,
        s = Vn.transition;
    Vn.transition = null;
    try {
        O = 1, gl(e, t, n, r)
    } finally {
        O = i, Vn.transition = s
    }
}

function K0(e, t, n, r) {
    var i = O,
        s = Vn.transition;
    Vn.transition = null;
    try {
        O = 4, gl(e, t, n, r)
    } finally {
        O = i, Vn.transition = s
    }
}

function gl(e, t, n, r) {
    if (ns) {
        var i = ia(e, t, n, r);
        if (i === null) fo(e, t, r, rs, n), Hu(e, r);
        else if ($0(i, e, t, n, r)) r.stopPropagation();
        else if (Hu(e, r), t & 4 && -1 < U0.indexOf(e)) {
            for (; i !== null;) {
                var s = ri(i);
                if (s !== null && Uf(s), s = ia(e, t, n, r), s === null && fo(e, t, r, rs, n), s === i) break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else fo(e, t, r, null, n)
    }
}
var rs = null;

function ia(e, t, n, r) {
    if (rs = null, e = fl(r), e = Xt(e), e !== null)
        if (t = fn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Vf(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return rs = e, null
}

function qf(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (D0()) {
                case hl:
                    return 1;
                case Of:
                    return 4;
                case es:
                case V0:
                    return 16;
                case _f:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Tt = null,
    yl = null,
    Oi = null;

function Gf() {
    if (Oi) return Oi;
    var e, t = yl,
        n = t.length,
        r, i = "value" in Tt ? Tt.value : Tt.textContent,
        s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return Oi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function _i(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function wi() {
    return !0
}

function Ku() {
    return !1
}

function Ve(e) {
    function t(n, r, i, s, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = s, this.target = o, this.currentTarget = null;
        for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wi : Ku, this.isPropagationStopped = Ku, this
    }
    return G(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wi)
        },
        persist: function() {},
        isPersistent: wi
    }), t
}
var Qn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    vl = Ve(Qn),
    ni = G({}, Qn, {
        view: 0,
        detail: 0
    }),
    q0 = Ve(ni),
    no, ro, or, Ms = G({}, ni, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: xl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== or && (or && e.type === "mousemove" ? (no = e.screenX - or.screenX, ro = e.screenY - or.screenY) : ro = no = 0, or = e), no)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : ro
        }
    }),
    qu = Ve(Ms),
    G0 = G({}, Ms, {
        dataTransfer: 0
    }),
    Q0 = Ve(G0),
    X0 = G({}, ni, {
        relatedTarget: 0
    }),
    io = Ve(X0),
    Y0 = G({}, Qn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Z0 = Ve(Y0),
    J0 = G({}, Qn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    eg = Ve(J0),
    tg = G({}, Qn, {
        data: 0
    }),
    Gu = Ve(tg),
    ng = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    rg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    ig = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function sg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ig[e]) ? !!t[e] : !1
}

function xl() {
    return sg
}
var og = G({}, ni, {
        key: function(e) {
            if (e.key) {
                var t = ng[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = _i(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? rg[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xl,
        charCode: function(e) {
            return e.type === "keypress" ? _i(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _i(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    ag = Ve(og),
    lg = G({}, Ms, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Qu = Ve(lg),
    ug = G({}, ni, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xl
    }),
    cg = Ve(ug),
    dg = G({}, Qn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    fg = Ve(dg),
    hg = G({}, Ms, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    pg = Ve(hg),
    mg = [9, 13, 27, 32],
    wl = dt && "CompositionEvent" in window,
    vr = null;
dt && "documentMode" in document && (vr = document.documentMode);
var gg = dt && "TextEvent" in window && !vr,
    Qf = dt && (!wl || vr && 8 < vr && 11 >= vr),
    Xu = " ",
    Yu = !1;

function Xf(e, t) {
    switch (e) {
        case "keyup":
            return mg.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Yf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var gn = !1;

function yg(e, t) {
    switch (e) {
        case "compositionend":
            return Yf(t);
        case "keypress":
            return t.which !== 32 ? null : (Yu = !0, Xu);
        case "textInput":
            return e = t.data, e === Xu && Yu ? null : e;
        default:
            return null
    }
}

function vg(e, t) {
    if (gn) return e === "compositionend" || !wl && Xf(e, t) ? (e = Gf(), Oi = yl = Tt = null, gn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Qf && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var xg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Zu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xg[e.type] : t === "textarea"
}

function Zf(e, t, n, r) {
    Af(r), t = is(t, "onChange"), 0 < t.length && (n = new vl("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var xr = null,
    Ir = null;

function wg(e) {
    uh(e, 0)
}

function Rs(e) {
    var t = xn(e);
    if (kf(t)) return e
}

function Sg(e, t) {
    if (e === "change") return t
}
var Jf = !1;
if (dt) {
    var so;
    if (dt) {
        var oo = "oninput" in document;
        if (!oo) {
            var Ju = document.createElement("div");
            Ju.setAttribute("oninput", "return;"), oo = typeof Ju.oninput == "function"
        }
        so = oo
    } else so = !1;
    Jf = so && (!document.documentMode || 9 < document.documentMode)
}

function ec() {
    xr && (xr.detachEvent("onpropertychange", eh), Ir = xr = null)
}

function eh(e) {
    if (e.propertyName === "value" && Rs(Ir)) {
        var t = [];
        Zf(t, Ir, e, fl(e)), Df(wg, t)
    }
}

function kg(e, t, n) {
    e === "focusin" ? (ec(), xr = t, Ir = n, xr.attachEvent("onpropertychange", eh)) : e === "focusout" && ec()
}

function Cg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Rs(Ir)
}

function Eg(e, t) {
    if (e === "click") return Rs(t)
}

function Tg(e, t) {
    if (e === "input" || e === "change") return Rs(t)
}

function Ng(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ye = typeof Object.is == "function" ? Object.is : Ng;

function Or(e, t) {
    if (Ye(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!zo.call(t, i) || !Ye(e[i], t[i])) return !1
    }
    return !0
}

function tc(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function nc(e, t) {
    var n = tc(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = tc(n)
    }
}

function th(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? th(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function nh() {
    for (var e = window, t = Yi(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Yi(e.document)
    }
    return t
}

function Sl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function jg(e) {
    var t = nh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && th(n.ownerDocument.documentElement, n)) {
        if (r !== null && Sl(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i), !e.extend && s > r && (i = r, r = s, s = i), i = nc(n, s);
                var o = nc(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Pg = dt && "documentMode" in document && 11 >= document.documentMode,
    yn = null,
    sa = null,
    wr = null,
    oa = !1;

function rc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    oa || yn == null || yn !== Yi(r) || (r = yn, "selectionStart" in r && Sl(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), wr && Or(wr, r) || (wr = r, r = is(sa, "onSelect"), 0 < r.length && (t = new vl("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = yn)))
}

function Si(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var vn = {
        animationend: Si("Animation", "AnimationEnd"),
        animationiteration: Si("Animation", "AnimationIteration"),
        animationstart: Si("Animation", "AnimationStart"),
        transitionend: Si("Transition", "TransitionEnd")
    },
    ao = {},
    rh = {};
dt && (rh = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);

function Ds(e) {
    if (ao[e]) return ao[e];
    if (!vn[e]) return e;
    var t = vn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in rh) return ao[e] = t[n];
    return e
}
var ih = Ds("animationend"),
    sh = Ds("animationiteration"),
    oh = Ds("animationstart"),
    ah = Ds("transitionend"),
    lh = new Map,
    ic = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function _t(e, t) {
    lh.set(e, t), dn(t, [e])
}
for (var lo = 0; lo < ic.length; lo++) {
    var uo = ic[lo],
        Ag = uo.toLowerCase(),
        bg = uo[0].toUpperCase() + uo.slice(1);
    _t(Ag, "on" + bg)
}
_t(ih, "onAnimationEnd");
_t(sh, "onAnimationIteration");
_t(oh, "onAnimationStart");
_t("dblclick", "onDoubleClick");
_t("focusin", "onFocus");
_t("focusout", "onBlur");
_t(ah, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
dn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
dn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
dn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Mg = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));

function sc(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, A0(r, t, void 0, e), e.currentTarget = null
}

function uh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        l = a.instance,
                        u = a.currentTarget;
                    if (a = a.listener, l !== s && i.isPropagationStopped()) break e;
                    sc(i, a, u), s = l
                } else
                    for (o = 0; o < r.length; o++) {
                        if (a = r[o], l = a.instance, u = a.currentTarget, a = a.listener, l !== s && i.isPropagationStopped()) break e;
                        sc(i, a, u), s = l
                    }
        }
    }
    if (Ji) throw e = ta, Ji = !1, ta = null, e
}

function z(e, t) {
    var n = t[da];
    n === void 0 && (n = t[da] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ch(t, e, 2, !1), n.add(r))
}

function co(e, t, n) {
    var r = 0;
    t && (r |= 4), ch(n, e, r, t)
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);

function _r(e) {
    if (!e[ki]) {
        e[ki] = !0, yf.forEach(function(n) {
            n !== "selectionchange" && (Mg.has(n) || co(n, !1, e), co(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ki] || (t[ki] = !0, co("selectionchange", !1, t))
    }
}

function ch(e, t, n, r) {
    switch (qf(t)) {
        case 1:
            var i = W0;
            break;
        case 4:
            i = K0;
            break;
        default:
            i = gl
    }
    n = i.bind(null, t, n, e), i = void 0, !ea || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function fo(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === i || a.nodeType === 8 && a.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var l = o.tag;
                    if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i)) return;
                    o = o.return
                }
            for (; a !== null;) {
                if (o = Xt(a), o === null) return;
                if (l = o.tag, l === 5 || l === 6) {
                    r = s = o;
                    continue e
                }
                a = a.parentNode
            }
        }
        r = r.return
    }
    Df(function() {
        var u = s,
            d = fl(n),
            f = [];
        e: {
            var h = lh.get(e);
            if (h !== void 0) {
                var y = vl,
                    v = e;
                switch (e) {
                    case "keypress":
                        if (_i(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = ag;
                        break;
                    case "focusin":
                        v = "focus", y = io;
                        break;
                    case "focusout":
                        v = "blur", y = io;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = io;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = qu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Q0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = cg;
                        break;
                    case ih:
                    case sh:
                    case oh:
                        y = Z0;
                        break;
                    case ah:
                        y = fg;
                        break;
                    case "scroll":
                        y = q0;
                        break;
                    case "wheel":
                        y = pg;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = eg;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = Qu
                }
                var x = (t & 4) !== 0,
                    j = !x && e === "scroll",
                    m = x ? h !== null ? h + "Capture" : null : h;
                x = [];
                for (var p = u, g; p !== null;) {
                    g = p;
                    var w = g.stateNode;
                    if (g.tag === 5 && w !== null && (g = w, m !== null && (w = Dr(p, m), w != null && x.push(zr(p, w, g)))), j) break;
                    p = p.return
                }
                0 < x.length && (h = new y(h, v, null, n, d), f.push({
                    event: h,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", h && n !== Zo && (v = n.relatedTarget || n.fromElement) && (Xt(v) || v[ft])) break e;
                if ((y || h) && (h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = u, v = v ? Xt(v) : null, v !== null && (j = fn(v), v !== j || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = u), y !== v)) {
                    if (x = qu, w = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (x = Qu, w = "onPointerLeave", m = "onPointerEnter", p = "pointer"), j = y == null ? h : xn(y), g = v == null ? h : xn(v), h = new x(w, p + "leave", y, n, d), h.target = j, h.relatedTarget = g, w = null, Xt(d) === u && (x = new x(m, p + "enter", v, n, d), x.target = g, x.relatedTarget = j, w = x), j = w, y && v) t: {
                        for (x = y, m = v, p = 0, g = x; g; g = hn(g)) p++;
                        for (g = 0, w = m; w; w = hn(w)) g++;
                        for (; 0 < p - g;) x = hn(x),
                        p--;
                        for (; 0 < g - p;) m = hn(m),
                        g--;
                        for (; p--;) {
                            if (x === m || m !== null && x === m.alternate) break t;
                            x = hn(x), m = hn(m)
                        }
                        x = null
                    }
                    else x = null;
                    y !== null && oc(f, h, y, x, !1), v !== null && j !== null && oc(f, j, v, x, !0)
                }
            }
            e: {
                if (h = u ? xn(u) : window, y = h.nodeName && h.nodeName.toLowerCase(), y === "select" || y === "input" && h.type === "file") var S = Sg;
                else if (Zu(h))
                    if (Jf) S = Tg;
                    else {
                        S = Cg;
                        var E = kg
                    }
                else(y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = Eg);
                if (S && (S = S(e, u))) {
                    Zf(f, S, n, d);
                    break e
                }
                E && E(e, h, u),
                e === "focusout" && (E = h._wrapperState) && E.controlled && h.type === "number" && qo(h, "number", h.value)
            }
            switch (E = u ? xn(u) : window, e) {
                case "focusin":
                    (Zu(E) || E.contentEditable === "true") && (yn = E, sa = u, wr = null);
                    break;
                case "focusout":
                    wr = sa = yn = null;
                    break;
                case "mousedown":
                    oa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    oa = !1, rc(f, n, d);
                    break;
                case "selectionchange":
                    if (Pg) break;
                case "keydown":
                case "keyup":
                    rc(f, n, d)
            }
            var N;
            if (wl) e: {
                switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                }
                k = void 0
            }
            else gn ? Xf(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");k && (Qf && n.locale !== "ko" && (gn || k !== "onCompositionStart" ? k === "onCompositionEnd" && gn && (N = Gf()) : (Tt = d, yl = "value" in Tt ? Tt.value : Tt.textContent, gn = !0)), E = is(u, k), 0 < E.length && (k = new Gu(k, e, null, n, d), f.push({
                event: k,
                listeners: E
            }), N ? k.data = N : (N = Yf(n), N !== null && (k.data = N)))),
            (N = gg ? yg(e, n) : vg(e, n)) && (u = is(u, "onBeforeInput"), 0 < u.length && (d = new Gu("onBeforeInput", "beforeinput", null, n, d), f.push({
                event: d,
                listeners: u
            }), d.data = N))
        }
        uh(f, t)
    })
}

function zr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function is(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            s = i.stateNode;
        i.tag === 5 && s !== null && (i = s, s = Dr(e, n), s != null && r.unshift(zr(e, s, i)), s = Dr(e, t), s != null && r.push(zr(e, s, i))), e = e.return
    }
    return r
}

function hn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function oc(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r;) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 && u !== null && (a = u, i ? (l = Dr(n, s), l != null && o.unshift(zr(n, l, a))) : i || (l = Dr(n, s), l != null && o.push(zr(n, l, a)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Rg = /\r\n?/g,
    Dg = /\u0000|\uFFFD/g;

function ac(e) {
    return (typeof e == "string" ? e : "" + e).replace(Rg, `
`).replace(Dg, "")
}

function Ci(e, t, n) {
    if (t = ac(t), ac(e) !== t && n) throw Error(T(425))
}

function ss() {}
var aa = null,
    la = null;

function ua(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ca = typeof setTimeout == "function" ? setTimeout : void 0,
    Vg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    lc = typeof Promise == "function" ? Promise : void 0,
    Lg = typeof queueMicrotask == "function" ? queueMicrotask : typeof lc < "u" ? function(e) {
        return lc.resolve(null).then(e).catch(Fg)
    } : ca;

function Fg(e) {
    setTimeout(function() {
        throw e
    })
}

function ho(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Fr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Fr(t)
}

function bt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function uc(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Xn = Math.random().toString(36).slice(2),
    et = "__reactFiber$" + Xn,
    Br = "__reactProps$" + Xn,
    ft = "__reactContainer$" + Xn,
    da = "__reactEvents$" + Xn,
    Ig = "__reactListeners$" + Xn,
    Og = "__reactHandles$" + Xn;

function Xt(e) {
    var t = e[et];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[ft] || n[et]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = uc(e); e !== null;) {
                    if (n = e[et]) return n;
                    e = uc(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ri(e) {
    return e = e[et] || e[ft], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(T(33))
}

function Vs(e) {
    return e[Br] || null
}
var fa = [],
    wn = -1;

function zt(e) {
    return {
        current: e
    }
}

function B(e) {
    0 > wn || (e.current = fa[wn], fa[wn] = null, wn--)
}

function _(e, t) {
    wn++, fa[wn] = e.current, e.current = t
}
var Ft = {},
    ye = zt(Ft),
    Ne = zt(!1),
    on = Ft;

function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ft;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        s;
    for (s in n) i[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function je(e) {
    return e = e.childContextTypes, e != null
}

function os() {
    B(Ne), B(ye)
}

function cc(e, t, n) {
    if (ye.current !== Ft) throw Error(T(168));
    _(ye, t), _(Ne, n)
}

function dh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(T(108, k0(e) || "Unknown", i));
    return G({}, n, r)
}

function as(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ft, on = ye.current, _(ye, e), _(Ne, Ne.current), !0
}

function dc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(T(169));
    n ? (e = dh(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, B(Ne), B(ye), _(ye, e)) : B(Ne), _(Ne, n)
}
var at = null,
    Ls = !1,
    po = !1;

function fh(e) {
    at === null ? at = [e] : at.push(e)
}

function _g(e) {
    Ls = !0, fh(e)
}

function Bt() {
    if (!po && at !== null) {
        po = !0;
        var e = 0,
            t = O;
        try {
            var n = at;
            for (O = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            at = null, Ls = !1
        } catch (i) {
            throw at !== null && (at = at.slice(e + 1)), If(hl, Bt), i
        } finally {
            O = t, po = !1
        }
    }
    return null
}
var Sn = [],
    kn = 0,
    ls = null,
    us = 0,
    Ie = [],
    Oe = 0,
    an = null,
    lt = 1,
    ut = "";

function qt(e, t) {
    Sn[kn++] = us, Sn[kn++] = ls, ls = e, us = t
}

function hh(e, t, n) {
    Ie[Oe++] = lt, Ie[Oe++] = ut, Ie[Oe++] = an, an = e;
    var r = lt;
    e = ut;
    var i = 32 - Qe(r) - 1;
    r &= ~(1 << i), n += 1;
    var s = 32 - Qe(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, lt = 1 << 32 - Qe(t) + i | n << i | r, ut = s + e
    } else lt = 1 << s | n << i | r, ut = e
}

function kl(e) {
    e.return !== null && (qt(e, 1), hh(e, 1, 0))
}

function Cl(e) {
    for (; e === ls;) ls = Sn[--kn], Sn[kn] = null, us = Sn[--kn], Sn[kn] = null;
    for (; e === an;) an = Ie[--Oe], Ie[Oe] = null, ut = Ie[--Oe], Ie[Oe] = null, lt = Ie[--Oe], Ie[Oe] = null
}
var Me = null,
    be = null,
    U = !1,
    Ge = null;

function ph(e, t) {
    var n = _e(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function fc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Me = e, be = bt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Me = e, be = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = an !== null ? {
                id: lt,
                overflow: ut
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = _e(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Me = e, be = null, !0) : !1;
        default:
            return !1
    }
}

function ha(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function pa(e) {
    if (U) {
        var t = be;
        if (t) {
            var n = t;
            if (!fc(e, t)) {
                if (ha(e)) throw Error(T(418));
                t = bt(n.nextSibling);
                var r = Me;
                t && fc(e, t) ? ph(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, Me = e)
            }
        } else {
            if (ha(e)) throw Error(T(418));
            e.flags = e.flags & -4097 | 2, U = !1, Me = e
        }
    }
}

function hc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Me = e
}

function Ei(e) {
    if (e !== Me) return !1;
    if (!U) return hc(e), U = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ua(e.type, e.memoizedProps)), t && (t = be)) {
        if (ha(e)) throw mh(), Error(T(418));
        for (; t;) ph(e, t), t = bt(t.nextSibling)
    }
    if (hc(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(T(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            be = bt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            be = null
        }
    } else be = Me ? bt(e.stateNode.nextSibling) : null;
    return !0
}

function mh() {
    for (var e = be; e;) e = bt(e.nextSibling)
}

function zn() {
    be = Me = null, U = !1
}

function El(e) {
    Ge === null ? Ge = [e] : Ge.push(e)
}
var zg = yt.ReactCurrentBatchConfig;

function ar(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(T(309));
                var r = n.stateNode
            }
            if (!r) throw Error(T(147, e));
            var i = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(T(284));
        if (!n._owner) throw Error(T(290, e))
    }
    return e
}

function Ti(e, t) {
    throw e = Object.prototype.toString.call(t), Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function pc(e) {
    var t = e._init;
    return t(e._payload)
}

function gh(e) {
    function t(m, p) {
        if (e) {
            var g = m.deletions;
            g === null ? (m.deletions = [p], m.flags |= 16) : g.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function i(m, p) {
        return m = Vt(m, p), m.index = 0, m.sibling = null, m
    }

    function s(m, p, g) {
        return m.index = g, e ? (g = m.alternate, g !== null ? (g = g.index, g < p ? (m.flags |= 2, p) : g) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function o(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function a(m, p, g, w) {
        return p === null || p.tag !== 6 ? (p = So(g, m.mode, w), p.return = m, p) : (p = i(p, g), p.return = m, p)
    }

    function l(m, p, g, w) {
        var S = g.type;
        return S === mn ? d(m, p, g.props.children, w, g.key) : p !== null && (p.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && pc(S) === p.type) ? (w = i(p, g.props), w.ref = ar(m, p, g), w.return = m, w) : (w = Ki(g.type, g.key, g.props, null, m.mode, w), w.ref = ar(m, p, g), w.return = m, w)
    }

    function u(m, p, g, w) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== g.containerInfo || p.stateNode.implementation !== g.implementation ? (p = ko(g, m.mode, w), p.return = m, p) : (p = i(p, g.children || []), p.return = m, p)
    }

    function d(m, p, g, w, S) {
        return p === null || p.tag !== 7 ? (p = nn(g, m.mode, w, S), p.return = m, p) : (p = i(p, g), p.return = m, p)
    }

    function f(m, p, g) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = So("" + p, m.mode, g), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case pi:
                    return g = Ki(p.type, p.key, p.props, null, m.mode, g), g.ref = ar(m, null, p), g.return = m, g;
                case pn:
                    return p = ko(p, m.mode, g), p.return = m, p;
                case St:
                    var w = p._init;
                    return f(m, w(p._payload), g)
            }
            if (fr(p) || nr(p)) return p = nn(p, m.mode, g, null), p.return = m, p;
            Ti(m, p)
        }
        return null
    }

    function h(m, p, g, w) {
        var S = p !== null ? p.key : null;
        if (typeof g == "string" && g !== "" || typeof g == "number") return S !== null ? null : a(m, p, "" + g, w);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case pi:
                    return g.key === S ? l(m, p, g, w) : null;
                case pn:
                    return g.key === S ? u(m, p, g, w) : null;
                case St:
                    return S = g._init, h(m, p, S(g._payload), w)
            }
            if (fr(g) || nr(g)) return S !== null ? null : d(m, p, g, w, null);
            Ti(m, g)
        }
        return null
    }

    function y(m, p, g, w, S) {
        if (typeof w == "string" && w !== "" || typeof w == "number") return m = m.get(g) || null, a(p, m, "" + w, S);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case pi:
                    return m = m.get(w.key === null ? g : w.key) || null, l(p, m, w, S);
                case pn:
                    return m = m.get(w.key === null ? g : w.key) || null, u(p, m, w, S);
                case St:
                    var E = w._init;
                    return y(m, p, g, E(w._payload), S)
            }
            if (fr(w) || nr(w)) return m = m.get(g) || null, d(p, m, w, S, null);
            Ti(p, w)
        }
        return null
    }

    function v(m, p, g, w) {
        for (var S = null, E = null, N = p, k = p = 0, L = null; N !== null && k < g.length; k++) {
            N.index > k ? (L = N, N = null) : L = N.sibling;
            var M = h(m, N, g[k], w);
            if (M === null) {
                N === null && (N = L);
                break
            }
            e && N && M.alternate === null && t(m, N), p = s(M, p, k), E === null ? S = M : E.sibling = M, E = M, N = L
        }
        if (k === g.length) return n(m, N), U && qt(m, k), S;
        if (N === null) {
            for (; k < g.length; k++) N = f(m, g[k], w), N !== null && (p = s(N, p, k), E === null ? S = N : E.sibling = N, E = N);
            return U && qt(m, k), S
        }
        for (N = r(m, N); k < g.length; k++) L = y(N, m, k, g[k], w), L !== null && (e && L.alternate !== null && N.delete(L.key === null ? k : L.key), p = s(L, p, k), E === null ? S = L : E.sibling = L, E = L);
        return e && N.forEach(function(te) {
            return t(m, te)
        }), U && qt(m, k), S
    }

    function x(m, p, g, w) {
        var S = nr(g);
        if (typeof S != "function") throw Error(T(150));
        if (g = S.call(g), g == null) throw Error(T(151));
        for (var E = S = null, N = p, k = p = 0, L = null, M = g.next(); N !== null && !M.done; k++, M = g.next()) {
            N.index > k ? (L = N, N = null) : L = N.sibling;
            var te = h(m, N, M.value, w);
            if (te === null) {
                N === null && (N = L);
                break
            }
            e && N && te.alternate === null && t(m, N), p = s(te, p, k), E === null ? S = te : E.sibling = te, E = te, N = L
        }
        if (M.done) return n(m, N), U && qt(m, k), S;
        if (N === null) {
            for (; !M.done; k++, M = g.next()) M = f(m, M.value, w), M !== null && (p = s(M, p, k), E === null ? S = M : E.sibling = M, E = M);
            return U && qt(m, k), S
        }
        for (N = r(m, N); !M.done; k++, M = g.next()) M = y(N, m, k, M.value, w), M !== null && (e && M.alternate !== null && N.delete(M.key === null ? k : M.key), p = s(M, p, k), E === null ? S = M : E.sibling = M, E = M);
        return e && N.forEach(function(vt) {
            return t(m, vt)
        }), U && qt(m, k), S
    }

    function j(m, p, g, w) {
        if (typeof g == "object" && g !== null && g.type === mn && g.key === null && (g = g.props.children), typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case pi:
                    e: {
                        for (var S = g.key, E = p; E !== null;) {
                            if (E.key === S) {
                                if (S = g.type, S === mn) {
                                    if (E.tag === 7) {
                                        n(m, E.sibling), p = i(E, g.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (E.elementType === S || typeof S == "object" && S !== null && S.$$typeof === St && pc(S) === E.type) {
                                    n(m, E.sibling), p = i(E, g.props), p.ref = ar(m, E, g), p.return = m, m = p;
                                    break e
                                }
                                n(m, E);
                                break
                            } else t(m, E);
                            E = E.sibling
                        }
                        g.type === mn ? (p = nn(g.props.children, m.mode, w, g.key), p.return = m, m = p) : (w = Ki(g.type, g.key, g.props, null, m.mode, w), w.ref = ar(m, p, g), w.return = m, m = w)
                    }
                    return o(m);
                case pn:
                    e: {
                        for (E = g.key; p !== null;) {
                            if (p.key === E)
                                if (p.tag === 4 && p.stateNode.containerInfo === g.containerInfo && p.stateNode.implementation === g.implementation) {
                                    n(m, p.sibling), p = i(p, g.children || []), p.return = m, m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else t(m, p);
                            p = p.sibling
                        }
                        p = ko(g, m.mode, w),
                        p.return = m,
                        m = p
                    }
                    return o(m);
                case St:
                    return E = g._init, j(m, p, E(g._payload), w)
            }
            if (fr(g)) return v(m, p, g, w);
            if (nr(g)) return x(m, p, g, w);
            Ti(m, g)
        }
        return typeof g == "string" && g !== "" || typeof g == "number" ? (g = "" + g, p !== null && p.tag === 6 ? (n(m, p.sibling), p = i(p, g), p.return = m, m = p) : (n(m, p), p = So(g, m.mode, w), p.return = m, m = p), o(m)) : n(m, p)
    }
    return j
}
var Bn = gh(!0),
    yh = gh(!1),
    cs = zt(null),
    ds = null,
    Cn = null,
    Tl = null;

function Nl() {
    Tl = Cn = ds = null
}

function jl(e) {
    var t = cs.current;
    B(cs), e._currentValue = t
}

function ma(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Ln(e, t) {
    ds = e, Tl = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ee = !0), e.firstContext = null)
}

function Ue(e) {
    var t = e._currentValue;
    if (Tl !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Cn === null) {
            if (ds === null) throw Error(T(308));
            Cn = e, ds.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Cn = Cn.next = e;
    return t
}
var Yt = null;

function Pl(e) {
    Yt === null ? Yt = [e] : Yt.push(e)
}

function vh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Pl(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ht(e, r)
}

function ht(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var kt = !1;

function Al(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function xh(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function ct(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Mt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, I & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ht(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Pl(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ht(e, n)
}

function zi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, pl(e, n)
    }
}

function mc(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o, n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function fs(e, t, n, r) {
    var i = e.updateQueue;
    kt = !1;
    var s = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a,
            u = l.next;
        l.next = null, o === null ? s = u : o.next = u, o = l;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, a = d.lastBaseUpdate, a !== o && (a === null ? d.firstBaseUpdate = u : a.next = u, d.lastBaseUpdate = l))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0, d = u = l = null, a = s;
        do {
            var h = a.lane,
                y = a.eventTime;
            if ((r & h) === h) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var v = e,
                        x = a;
                    switch (h = t, y = n, x.tag) {
                        case 1:
                            if (v = x.payload, typeof v == "function") {
                                f = v.call(y, f, h);
                                break e
                            }
                            f = v;
                            break e;
                        case 3:
                            v.flags = v.flags & -65537 | 128;
                        case 0:
                            if (v = x.payload, h = typeof v == "function" ? v.call(y, f, h) : v, h == null) break e;
                            f = G({}, f, h);
                            break e;
                        case 2:
                            kt = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [a] : h.push(a))
            } else y = {
                eventTime: y,
                lane: h,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null
            }, d === null ? (u = d = y, l = f) : d = d.next = y, o |= h;
            if (a = a.next, a === null) {
                if (a = i.shared.pending, a === null) break;
                h = a, a = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (!0);
        if (d === null && (l = f), i.baseState = l, i.firstBaseUpdate = u, i.lastBaseUpdate = d, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else s === null && (i.shared.lanes = 0);
        un |= o, e.lanes = o, e.memoizedState = f
    }
}

function gc(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(T(191, i));
                i.call(r)
            }
        }
}
var ii = {},
    nt = zt(ii),
    Ur = zt(ii),
    $r = zt(ii);

function Zt(e) {
    if (e === ii) throw Error(T(174));
    return e
}

function bl(e, t) {
    switch (_($r, t), _(Ur, e), _(nt, ii), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Qo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qo(t, e)
    }
    B(nt), _(nt, t)
}

function Un() {
    B(nt), B(Ur), B($r)
}

function wh(e) {
    Zt($r.current);
    var t = Zt(nt.current),
        n = Qo(t, e.type);
    t !== n && (_(Ur, e), _(nt, n))
}

function Ml(e) {
    Ur.current === e && (B(nt), B(Ur))
}
var W = zt(0);

function hs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var mo = [];

function Rl() {
    for (var e = 0; e < mo.length; e++) mo[e]._workInProgressVersionPrimary = null;
    mo.length = 0
}
var Bi = yt.ReactCurrentDispatcher,
    go = yt.ReactCurrentBatchConfig,
    ln = 0,
    q = null,
    ie = null,
    ae = null,
    ps = !1,
    Sr = !1,
    Hr = 0,
    Bg = 0;

function he() {
    throw Error(T(321))
}

function Dl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ye(e[n], t[n])) return !1;
    return !0
}

function Vl(e, t, n, r, i, s) {
    if (ln = s, q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Bi.current = e === null || e.memoizedState === null ? Wg : Kg, e = n(r, i), Sr) {
        s = 0;
        do {
            if (Sr = !1, Hr = 0, 25 <= s) throw Error(T(301));
            s += 1, ae = ie = null, t.updateQueue = null, Bi.current = qg, e = n(r, i)
        } while (Sr)
    }
    if (Bi.current = ms, t = ie !== null && ie.next !== null, ln = 0, ae = ie = q = null, ps = !1, t) throw Error(T(300));
    return e
}

function Ll() {
    var e = Hr !== 0;
    return Hr = 0, e
}

function Je() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ae === null ? q.memoizedState = ae = e : ae = ae.next = e, ae
}

function $e() {
    if (ie === null) {
        var e = q.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ie.next;
    var t = ae === null ? q.memoizedState : ae.next;
    if (t !== null) ae = t, ie = e;
    else {
        if (e === null) throw Error(T(310));
        ie = e, e = {
            memoizedState: ie.memoizedState,
            baseState: ie.baseState,
            baseQueue: ie.baseQueue,
            queue: ie.queue,
            next: null
        }, ae === null ? q.memoizedState = ae = e : ae = ae.next = e
    }
    return ae
}

function Wr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function yo(e) {
    var t = $e(),
        n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = ie,
        i = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next, s.next = o
        }
        r.baseQueue = i = s, n.pending = null
    }
    if (i !== null) {
        s = i.next, r = r.baseState;
        var a = o = null,
            l = null,
            u = s;
        do {
            var d = u.lane;
            if ((ln & d) === d) l !== null && (l = l.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (a = l = f, o = r) : l = l.next = f, q.lanes |= d, un |= d
            }
            u = u.next
        } while (u !== null && u !== s);
        l === null ? o = r : l.next = a, Ye(r, t.memoizedState) || (Ee = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = l, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do s = i.lane, q.lanes |= s, un |= s, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function vo(e) {
    var t = $e(),
        n = t.queue;
    if (n === null) throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do s = e(s, o.action), o = o.next; while (o !== i);
        Ye(s, t.memoizedState) || (Ee = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function Sh() {}

function kh(e, t) {
    var n = q,
        r = $e(),
        i = t(),
        s = !Ye(r.memoizedState, i);
    if (s && (r.memoizedState = i, Ee = !0), r = r.queue, Fl(Th.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || ae !== null && ae.memoizedState.tag & 1) {
        if (n.flags |= 2048, Kr(9, Eh.bind(null, n, r, i, t), void 0, null), le === null) throw Error(T(349));
        ln & 30 || Ch(n, t, i)
    }
    return i
}

function Ch(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = q.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Eh(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Nh(t) && jh(e)
}

function Th(e, t, n) {
    return n(function() {
        Nh(t) && jh(e)
    })
}

function Nh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ye(e, n)
    } catch {
        return !0
    }
}

function jh(e) {
    var t = ht(e, 1);
    t !== null && Xe(t, e, 1, -1)
}

function yc(e) {
    var t = Je();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Hg.bind(null, q, e), [t.memoizedState, e]
}

function Kr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = q.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ph() {
    return $e().memoizedState
}

function Ui(e, t, n, r) {
    var i = Je();
    q.flags |= e, i.memoizedState = Kr(1 | t, n, void 0, r === void 0 ? null : r)
}

function Fs(e, t, n, r) {
    var i = $e();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ie !== null) {
        var o = ie.memoizedState;
        if (s = o.destroy, r !== null && Dl(r, o.deps)) {
            i.memoizedState = Kr(t, n, s, r);
            return
        }
    }
    q.flags |= e, i.memoizedState = Kr(1 | t, n, s, r)
}

function vc(e, t) {
    return Ui(8390656, 8, e, t)
}

function Fl(e, t) {
    return Fs(2048, 8, e, t)
}

function Ah(e, t) {
    return Fs(4, 2, e, t)
}

function bh(e, t) {
    return Fs(4, 4, e, t)
}

function Mh(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Rh(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Fs(4, 4, Mh.bind(null, t, e), n)
}

function Il() {}

function Dh(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Dl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Vh(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Dl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Lh(e, t, n) {
    return ln & 21 ? (Ye(n, t) || (n = zf(), q.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ee = !0), e.memoizedState = n)
}

function Ug(e, t) {
    var n = O;
    O = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = go.transition;
    go.transition = {};
    try {
        e(!1), t()
    } finally {
        O = n, go.transition = r
    }
}

function Fh() {
    return $e().memoizedState
}

function $g(e, t, n) {
    var r = Dt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ih(e)) Oh(t, n);
    else if (n = vh(e, t, n, r), n !== null) {
        var i = we();
        Xe(n, e, r, i), _h(n, t, r)
    }
}

function Hg(e, t, n) {
    var r = Dt(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Ih(e)) Oh(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var o = t.lastRenderedState,
                a = s(o, n);
            if (i.hasEagerState = !0, i.eagerState = a, Ye(a, o)) {
                var l = t.interleaved;
                l === null ? (i.next = i, Pl(t)) : (i.next = l.next, l.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = vh(e, t, i, r), n !== null && (i = we(), Xe(n, e, r, i), _h(n, t, r))
    }
}

function Ih(e) {
    var t = e.alternate;
    return e === q || t !== null && t === q
}

function Oh(e, t) {
    Sr = ps = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function _h(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, pl(e, n)
    }
}
var ms = {
        readContext: Ue,
        useCallback: he,
        useContext: he,
        useEffect: he,
        useImperativeHandle: he,
        useInsertionEffect: he,
        useLayoutEffect: he,
        useMemo: he,
        useReducer: he,
        useRef: he,
        useState: he,
        useDebugValue: he,
        useDeferredValue: he,
        useTransition: he,
        useMutableSource: he,
        useSyncExternalStore: he,
        useId: he,
        unstable_isNewReconciler: !1
    },
    Wg = {
        readContext: Ue,
        useCallback: function(e, t) {
            return Je().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ue,
        useEffect: vc,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ui(4194308, 4, Mh.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ui(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ui(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Je();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Je();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = $g.bind(null, q, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Je();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: yc,
        useDebugValue: Il,
        useDeferredValue: function(e) {
            return Je().memoizedState = e
        },
        useTransition: function() {
            var e = yc(!1),
                t = e[0];
            return e = Ug.bind(null, e[1]), Je().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = q,
                i = Je();
            if (U) {
                if (n === void 0) throw Error(T(407));
                n = n()
            } else {
                if (n = t(), le === null) throw Error(T(349));
                ln & 30 || Ch(r, t, n)
            }
            i.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return i.queue = s, vc(Th.bind(null, r, s, e), [e]), r.flags |= 2048, Kr(9, Eh.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function() {
            var e = Je(),
                t = le.identifierPrefix;
            if (U) {
                var n = ut,
                    r = lt;
                n = (r & ~(1 << 32 - Qe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Hr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Bg++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Kg = {
        readContext: Ue,
        useCallback: Dh,
        useContext: Ue,
        useEffect: Fl,
        useImperativeHandle: Rh,
        useInsertionEffect: Ah,
        useLayoutEffect: bh,
        useMemo: Vh,
        useReducer: yo,
        useRef: Ph,
        useState: function() {
            return yo(Wr)
        },
        useDebugValue: Il,
        useDeferredValue: function(e) {
            var t = $e();
            return Lh(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = yo(Wr)[0],
                t = $e().memoizedState;
            return [e, t]
        },
        useMutableSource: Sh,
        useSyncExternalStore: kh,
        useId: Fh,
        unstable_isNewReconciler: !1
    },
    qg = {
        readContext: Ue,
        useCallback: Dh,
        useContext: Ue,
        useEffect: Fl,
        useImperativeHandle: Rh,
        useInsertionEffect: Ah,
        useLayoutEffect: bh,
        useMemo: Vh,
        useReducer: vo,
        useRef: Ph,
        useState: function() {
            return vo(Wr)
        },
        useDebugValue: Il,
        useDeferredValue: function(e) {
            var t = $e();
            return ie === null ? t.memoizedState = e : Lh(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = vo(Wr)[0],
                t = $e().memoizedState;
            return [e, t]
        },
        useMutableSource: Sh,
        useSyncExternalStore: kh,
        useId: Fh,
        unstable_isNewReconciler: !1
    };

function Ke(e, t) {
    if (e && e.defaultProps) {
        t = G({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function ga(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : G({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Is = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? fn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            i = Dt(e),
            s = ct(r, i);
        s.payload = t, n != null && (s.callback = n), t = Mt(e, s, i), t !== null && (Xe(t, e, i, r), zi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = we(),
            i = Dt(e),
            s = ct(r, i);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = Mt(e, s, i), t !== null && (Xe(t, e, i, r), zi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = we(),
            r = Dt(e),
            i = ct(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Mt(e, i, r), t !== null && (Xe(t, e, r, n), zi(t, e, r))
    }
};

function xc(e, t, n, r, i, s, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Or(n, r) || !Or(i, s) : !0
}

function zh(e, t, n) {
    var r = !1,
        i = Ft,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = Ue(s) : (i = je(t) ? on : ye.current, r = t.contextTypes, s = (r = r != null) ? _n(e, i) : Ft), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Is, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function wc(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Is.enqueueReplaceState(t, t.state, null)
}

function ya(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, Al(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = Ue(s) : (s = je(t) ? on : ye.current, i.context = _n(e, s)), i.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (ga(e, t, s, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Is.enqueueReplaceState(i, i.state, null), fs(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function $n(e, t) {
    try {
        var n = "",
            r = t;
        do n += S0(r), r = r.return; while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function xo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function va(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Gg = typeof WeakMap == "function" ? WeakMap : Map;

function Bh(e, t, n) {
    n = ct(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ys || (ys = !0, Pa = r), va(e, t)
    }, n
}

function Uh(e, t, n) {
    n = ct(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            va(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        va(e, t), typeof r != "function" && (Rt === null ? Rt = new Set([this]) : Rt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Gg;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = ly.bind(null, e, t, n), t.then(e, e))
}

function kc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Cc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = ct(-1, 1), t.tag = 2, Mt(n, t, 1))), n.lanes |= 1), e)
}
var Qg = yt.ReactCurrentOwner,
    Ee = !1;

function ve(e, t, n, r) {
    t.child = e === null ? yh(t, null, n, r) : Bn(t, e.child, n, r)
}

function Ec(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Ln(t, i), r = Vl(e, t, n, r, s, i), n = Ll(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : (U && n && kl(t), t.flags |= 1, ve(e, t, r, i), t.child)
}

function Tc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Wl(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, $h(e, t, s, r, i)) : (e = Ki(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Or, n(o, r) && e.ref === t.ref) return pt(e, t, i)
    }
    return t.flags |= 1, e = Vt(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function $h(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Or(s, r) && e.ref === t.ref)
            if (Ee = !1, t.pendingProps = r = s, (e.lanes & i) !== 0) e.flags & 131072 && (Ee = !0);
            else return t.lanes = e.lanes, pt(e, t, i)
    }
    return xa(e, t, n, r, i)
}

function Hh(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, _(Tn, Ae), Ae |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, _(Tn, Ae), Ae |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, _(Tn, Ae), Ae |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, _(Tn, Ae), Ae |= r;
    return ve(e, t, i, n), t.child
}

function Wh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function xa(e, t, n, r, i) {
    var s = je(n) ? on : ye.current;
    return s = _n(t, s), Ln(t, i), n = Vl(e, t, n, r, s, i), r = Ll(), e !== null && !Ee ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, pt(e, t, i)) : (U && r && kl(t), t.flags |= 1, ve(e, t, n, i), t.child)
}

function Nc(e, t, n, r, i) {
    if (je(n)) {
        var s = !0;
        as(t)
    } else s = !1;
    if (Ln(t, i), t.stateNode === null) $i(e, t), zh(t, n, r), ya(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var l = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Ue(u) : (u = je(n) ? on : ye.current, u = _n(t, u));
        var d = n.getDerivedStateFromProps,
            f = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== u) && wc(t, o, r, u), kt = !1;
        var h = t.memoizedState;
        o.state = h, fs(t, r, o, i), l = t.memoizedState, a !== r || h !== l || Ne.current || kt ? (typeof d == "function" && (ga(t, n, d, r), l = t.memoizedState), (a = kt || xc(t, n, a, r, h, l, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), o.props = r, o.state = l, o.context = u, r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, xh(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : Ke(t.type, a), o.props = u, f = t.pendingProps, h = o.context, l = n.contextType, typeof l == "object" && l !== null ? l = Ue(l) : (l = je(n) ? on : ye.current, l = _n(t, l));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== l) && wc(t, o, r, l), kt = !1, h = t.memoizedState, o.state = h, fs(t, r, o, i);
        var v = t.memoizedState;
        a !== f || h !== v || Ne.current || kt ? (typeof y == "function" && (ga(t, n, y, r), v = t.memoizedState), (u = kt || xc(t, n, u, r, h, v, l) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, l), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, l)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = l, r = u) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return wa(e, t, n, r, s, i)
}

function wa(e, t, n, r, i, s) {
    Wh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && dc(t, n, !1), pt(e, t, s);
    r = t.stateNode, Qg.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Bn(t, e.child, null, s), t.child = Bn(t, null, a, s)) : ve(e, t, a, s), t.memoizedState = r.state, i && dc(t, n, !0), t.child
}

function Kh(e) {
    var t = e.stateNode;
    t.pendingContext ? cc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cc(e, t.context, !1), bl(e, t.containerInfo)
}

function jc(e, t, n, r, i) {
    return zn(), El(i), t.flags |= 256, ve(e, t, n, r), t.child
}
var Sa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function ka(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function qh(e, t, n) {
    var r = t.pendingProps,
        i = W.current,
        s = !1,
        o = (t.flags & 128) !== 0,
        a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), _(W, i & 1), e === null) return pa(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = o) : s = zs(o, r, 0, null), e = nn(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = ka(n), t.memoizedState = Sa, e) : Ol(t, o));
    if (i = e.memoizedState, i !== null && (a = i.dehydrated, a !== null)) return Xg(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback, o = t.mode, i = e.child, a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Vt(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), a !== null ? s = Vt(a, s) : (s = nn(s, o, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, o = e.child.memoizedState, o = o === null ? ka(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, s.memoizedState = o, s.childLanes = e.childLanes & ~n, t.memoizedState = Sa, r
    }
    return s = e.child, e = s.sibling, r = Vt(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ol(e, t) {
    return t = zs({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function Ni(e, t, n, r) {
    return r !== null && El(r), Bn(t, e.child, null, n), e = Ol(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Xg(e, t, n, r, i, s, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = xo(Error(T(422))), Ni(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, i = t.mode, r = zs({
        mode: "visible",
        children: r.children
    }, i, 0, null), s = nn(s, i, o, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Bn(t, e.child, null, o), t.child.memoizedState = ka(o), t.memoizedState = Sa, s);
    if (!(t.mode & 1)) return Ni(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var a = r.dgst;
        return r = a, s = Error(T(419)), r = xo(s, r, void 0), Ni(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0, Ee || a) {
        if (r = le, r !== null) {
            switch (o & -o) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== s.retryLane && (s.retryLane = i, ht(e, i), Xe(r, e, i, -1))
        }
        return Hl(), r = xo(Error(T(421))), Ni(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = uy.bind(null, e), i._reactRetry = t, null) : (e = s.treeContext, be = bt(i.nextSibling), Me = t, U = !0, Ge = null, e !== null && (Ie[Oe++] = lt, Ie[Oe++] = ut, Ie[Oe++] = an, lt = e.id, ut = e.overflow, an = t), t = Ol(t, r.children), t.flags |= 4096, t)
}

function Pc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ma(e.return, t, n)
}

function wo(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i)
}

function Gh(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        s = r.tail;
    if (ve(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Pc(e, n, t);
            else if (e.tag === 19) Pc(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (_(W, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && hs(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), wo(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && hs(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            wo(t, !0, n, null, s);
            break;
        case "together":
            wo(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function $i(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function pt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child, n = Vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Vt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Yg(e, t, n) {
    switch (t.tag) {
        case 3:
            Kh(t), zn();
            break;
        case 5:
            wh(t);
            break;
        case 1:
            je(t.type) && as(t);
            break;
        case 4:
            bl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            _(cs, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (_(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? qh(e, t, n) : (_(W, W.current & 1), e = pt(e, t, n), e !== null ? e.sibling : null);
            _(W, W.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Gh(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), _(W, W.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Hh(e, t, n)
    }
    return pt(e, t, n)
}
var Qh, Ca, Xh, Yh;
Qh = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ca = function() {};
Xh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, Zt(nt.current);
        var s = null;
        switch (n) {
            case "input":
                i = Wo(e, i), r = Wo(e, r), s = [];
                break;
            case "select":
                i = G({}, i, {
                    value: void 0
                }), r = G({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                i = Go(e, i), r = Go(e, r), s = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ss)
        }
        Xo(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var a = i[u];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Mr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (a = i != null ? i[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
                if (u === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), n[o] = l[o])
                    } else n || (s || (s = []), s.push(u, n)), n = l;
            else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (s = s || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Mr.hasOwnProperty(u) ? (l != null && u === "onScroll" && z("scroll", e), s || a === l || (s = [])) : (s = s || []).push(u, l))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Yh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function lr(e, t) {
    if (!U) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Zg(e, t, n) {
    var r = t.pendingProps;
    switch (Cl(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return pe(t), null;
        case 1:
            return je(t.type) && os(), pe(t), null;
        case 3:
            return r = t.stateNode, Un(), B(Ne), B(ye), Rl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ei(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ge !== null && (Ma(Ge), Ge = null))), Ca(e, t), pe(t), null;
        case 5:
            Ml(t);
            var i = Zt($r.current);
            if (n = t.type, e !== null && t.stateNode != null) Xh(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(T(166));
                    return pe(t), null
                }
                if (e = Zt(nt.current), Ei(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[et] = t, r[Br] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            z("cancel", r), z("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            z("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < pr.length; i++) z(pr[i], r);
                            break;
                        case "source":
                            z("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            z("error", r), z("load", r);
                            break;
                        case "details":
                            z("toggle", r);
                            break;
                        case "input":
                            Iu(r, s), z("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, z("invalid", r);
                            break;
                        case "textarea":
                            _u(r, s), z("invalid", r)
                    }
                    Xo(n, s), i = null;
                    for (var o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Ci(r.textContent, a, e), i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Ci(r.textContent, a, e), i = ["children", "" + a]) : Mr.hasOwnProperty(o) && a != null && o === "onScroll" && z("scroll", r)
                        } switch (n) {
                        case "input":
                            mi(r), Ou(r, s, !0);
                            break;
                        case "textarea":
                            mi(r), zu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = ss)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tf(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[et] = t, e[Br] = r, Qh(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = Yo(n, r), n) {
                            case "dialog":
                                z("cancel", e), z("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                z("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < pr.length; i++) z(pr[i], e);
                                i = r;
                                break;
                            case "source":
                                z("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                z("error", e), z("load", e), i = r;
                                break;
                            case "details":
                                z("toggle", e), i = r;
                                break;
                            case "input":
                                Iu(e, r), i = Wo(e, r), z("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = G({}, r, {
                                    value: void 0
                                }), z("invalid", e);
                                break;
                            case "textarea":
                                _u(e, r), i = Go(e, r), z("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Xo(n, i),
                        a = i;
                        for (s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s];
                                s === "style" ? Pf(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Nf(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Rr(e, l) : typeof l == "number" && Rr(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Mr.hasOwnProperty(s) ? l != null && s === "onScroll" && z("scroll", e) : l != null && ll(e, s, l, o))
                            } switch (n) {
                            case "input":
                                mi(e), Ou(e, r, !1);
                                break;
                            case "textarea":
                                mi(e), zu(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Lt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? Mn(e, !!r.multiple, s, !1) : r.defaultValue != null && Mn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = ss)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return pe(t), null;
        case 6:
            if (e && t.stateNode != null) Yh(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
                if (n = Zt($r.current), Zt(nt.current), Ei(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[et] = t, (s = r.nodeValue !== n) && (e = Me, e !== null)) switch (e.tag) {
                        case 3:
                            Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Ci(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[et] = t, t.stateNode = r
            }
            return pe(t), null;
        case 13:
            if (B(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (U && be !== null && t.mode & 1 && !(t.flags & 128)) mh(), zn(), t.flags |= 98560, s = !1;
                else if (s = Ei(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(T(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(T(317));
                        s[et] = t
                    } else zn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    pe(t), s = !1
                } else Ge !== null && (Ma(Ge), Ge = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? se === 0 && (se = 3) : Hl())), t.updateQueue !== null && (t.flags |= 4), pe(t), null);
        case 4:
            return Un(), Ca(e, t), e === null && _r(t.stateNode.containerInfo), pe(t), null;
        case 10:
            return jl(t.type._context), pe(t), null;
        case 17:
            return je(t.type) && os(), pe(t), null;
        case 19:
            if (B(W), s = t.memoizedState, s === null) return pe(t), null;
            if (r = (t.flags & 128) !== 0, o = s.rendering, o === null)
                if (r) lr(s, !1);
                else {
                    if (se !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = hs(e), o !== null) {
                                for (t.flags |= 128, lr(s, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, o = s.alternate, o === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = o.childLanes, s.lanes = o.lanes, s.child = o.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = o.memoizedProps, s.memoizedState = o.memoizedState, s.updateQueue = o.updateQueue, s.type = o.type, e = o.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return _(W, W.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && ee() > Hn && (t.flags |= 128, r = !0, lr(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = hs(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), lr(s, !0), s.tail === null && s.tailMode === "hidden" && !o.alternate && !U) return pe(t), null
                    } else 2 * ee() - s.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = !0, lr(s, !1), t.lanes = 4194304);
                s.isBackwards ? (o.sibling = t.child, t.child = o) : (n = s.last, n !== null ? n.sibling = o : t.child = o, s.last = o)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = ee(), t.sibling = null, n = W.current, _(W, r ? n & 1 | 2 : n & 1), t) : (pe(t), null);
        case 22:
        case 23:
            return $l(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(T(156, t.tag))
}

function Jg(e, t) {
    switch (Cl(t), t.tag) {
        case 1:
            return je(t.type) && os(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Un(), B(Ne), B(ye), Rl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Ml(t), null;
        case 13:
            if (B(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(T(340));
                zn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return B(W), null;
        case 4:
            return Un(), null;
        case 10:
            return jl(t.type._context), null;
        case 22:
        case 23:
            return $l(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ji = !1,
    me = !1,
    ey = typeof WeakSet == "function" ? WeakSet : Set,
    b = null;

function En(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Y(e, t, r)
        } else n.current = null
}

function Ea(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var Ac = !1;

function ty(e, t) {
    if (aa = ns, e = nh(), Sl(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    a = -1,
                    l = -1,
                    u = 0,
                    d = 0,
                    f = e,
                    h = null;
                t: for (;;) {
                    for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i), f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r), f.nodeType === 3 && (o += f.nodeValue.length), (y = f.firstChild) !== null;) h = f, f = y;
                    for (;;) {
                        if (f === e) break t;
                        if (h === n && ++u === i && (a = o), h === s && ++d === r && (l = o), (y = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = y
                }
                n = a === -1 || l === -1 ? null : {
                    start: a,
                    end: l
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (la = {
            focusedElem: e,
            selectionRange: n
        }, ns = !1, b = t; b !== null;)
        if (t = b, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, b = e;
        else
            for (; b !== null;) {
                t = b;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps,
                                    j = v.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ke(t.type, x), j);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var g = t.stateNode.containerInfo;
                            g.nodeType === 1 ? g.textContent = "" : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                    }
                } catch (w) {
                    Y(t, t.return, w)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, b = e;
                    break
                }
                b = t.return
            }
    return v = Ac, Ac = !1, v
}

function kr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0, s !== void 0 && Ea(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}

function Os(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Ta(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Zh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Zh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[et], delete t[Br], delete t[da], delete t[Ig], delete t[Og])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Jh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function bc(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Jh(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Na(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ss));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Na(e, t, n), e = e.sibling; e !== null;) Na(e, t, n), e = e.sibling
}

function ja(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (ja(e, t, n), e = e.sibling; e !== null;) ja(e, t, n), e = e.sibling
}
var ue = null,
    qe = !1;

function xt(e, t, n) {
    for (n = n.child; n !== null;) ep(e, t, n), n = n.sibling
}

function ep(e, t, n) {
    if (tt && typeof tt.onCommitFiberUnmount == "function") try {
        tt.onCommitFiberUnmount(bs, n)
    } catch {}
    switch (n.tag) {
        case 5:
            me || En(n, t);
        case 6:
            var r = ue,
                i = qe;
            ue = null, xt(e, t, n), ue = r, qe = i, ue !== null && (qe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ue.removeChild(n.stateNode));
            break;
        case 18:
            ue !== null && (qe ? (e = ue, n = n.stateNode, e.nodeType === 8 ? ho(e.parentNode, n) : e.nodeType === 1 && ho(e, n), Fr(e)) : ho(ue, n.stateNode));
            break;
        case 4:
            r = ue, i = qe, ue = n.stateNode.containerInfo, qe = !0, xt(e, t, n), ue = r, qe = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!me && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var s = i,
                        o = s.destroy;
                    s = s.tag, o !== void 0 && (s & 2 || s & 4) && Ea(n, t, o), i = i.next
                } while (i !== r)
            }
            xt(e, t, n);
            break;
        case 1:
            if (!me && (En(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (a) {
                Y(n, t, a)
            }
            xt(e, t, n);
            break;
        case 21:
            xt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (me = (r = me) || n.memoizedState !== null, xt(e, t, n), me = r) : xt(e, t, n);
            break;
        default:
            xt(e, t, n)
    }
}

function Mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ey), t.forEach(function(r) {
            var i = cy.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function He(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e,
                    o = t,
                    a = o;
                e: for (; a !== null;) {
                    switch (a.tag) {
                        case 5:
                            ue = a.stateNode, qe = !1;
                            break e;
                        case 3:
                            ue = a.stateNode.containerInfo, qe = !0;
                            break e;
                        case 4:
                            ue = a.stateNode.containerInfo, qe = !0;
                            break e
                    }
                    a = a.return
                }
                if (ue === null) throw Error(T(160));
                ep(s, o, i), ue = null, qe = !1;
                var l = i.alternate;
                l !== null && (l.return = null), i.return = null
            } catch (u) {
                Y(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) tp(t, e), t = t.sibling
}

function tp(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (He(t, e), Ze(e), r & 4) {
                try {
                    kr(3, e, e.return), Os(3, e)
                } catch (x) {
                    Y(e, e.return, x)
                }
                try {
                    kr(5, e, e.return)
                } catch (x) {
                    Y(e, e.return, x)
                }
            }
            break;
        case 1:
            He(t, e), Ze(e), r & 512 && n !== null && En(n, n.return);
            break;
        case 5:
            if (He(t, e), Ze(e), r & 512 && n !== null && En(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Rr(i, "")
                } catch (x) {
                    Y(e, e.return, x)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var s = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : s,
                    a = e.type,
                    l = e.updateQueue;
                if (e.updateQueue = null, l !== null) try {
                    a === "input" && s.type === "radio" && s.name != null && Cf(i, s), Yo(a, o);
                    var u = Yo(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var d = l[o],
                            f = l[o + 1];
                        d === "style" ? Pf(i, f) : d === "dangerouslySetInnerHTML" ? Nf(i, f) : d === "children" ? Rr(i, f) : ll(i, d, f, u)
                    }
                    switch (a) {
                        case "input":
                            Ko(i, s);
                            break;
                        case "textarea":
                            Ef(i, s);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!s.multiple;
                            var y = s.value;
                            y != null ? Mn(i, !!s.multiple, y, !1) : h !== !!s.multiple && (s.defaultValue != null ? Mn(i, !!s.multiple, s.defaultValue, !0) : Mn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Br] = s
                } catch (x) {
                    Y(e, e.return, x)
                }
            }
            break;
        case 6:
            if (He(t, e), Ze(e), r & 4) {
                if (e.stateNode === null) throw Error(T(162));
                i = e.stateNode, s = e.memoizedProps;
                try {
                    i.nodeValue = s
                } catch (x) {
                    Y(e, e.return, x)
                }
            }
            break;
        case 3:
            if (He(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Fr(t.containerInfo)
            } catch (x) {
                Y(e, e.return, x)
            }
            break;
        case 4:
            He(t, e), Ze(e);
            break;
        case 13:
            He(t, e), Ze(e), i = e.child, i.flags & 8192 && (s = i.memoizedState !== null, i.stateNode.isHidden = s, !s || i.alternate !== null && i.alternate.memoizedState !== null || (Bl = ee())), r & 4 && Mc(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (me = (u = me) || d, He(t, e), me = u) : He(t, e), Ze(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (b = e, d = e.child; d !== null;) {
                        for (f = b = d; b !== null;) {
                            switch (h = b, y = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    kr(4, h, h.return);
                                    break;
                                case 1:
                                    En(h, h.return);
                                    var v = h.stateNode;
                                    if (typeof v.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount()
                                        } catch (x) {
                                            Y(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    En(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Dc(f);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = h, b = y) : Dc(f)
                        }
                        d = d.sibling
                    }
                e: for (d = null, f = e;;) {
                    if (f.tag === 5) {
                        if (d === null) {
                            d = f;
                            try {
                                i = f.stateNode, u ? (s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode, l = f.memoizedProps.style, o = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = jf("display", o))
                            } catch (x) {
                                Y(e, e.return, x)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (d === null) try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            Y(e, e.return, x)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        d === f && (d = null), f = f.return
                    }
                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            He(t, e), Ze(e), r & 4 && Mc(e);
            break;
        case 21:
            break;
        default:
            He(t, e), Ze(e)
    }
}

function Ze(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Jh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Rr(i, ""), r.flags &= -33);
                    var s = bc(e);
                    ja(e, s, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = bc(e);
                    Na(e, a, o);
                    break;
                default:
                    throw Error(T(161))
            }
        }
        catch (l) {
            Y(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function ny(e, t, n) {
    b = e, np(e)
}

function np(e, t, n) {
    for (var r = (e.mode & 1) !== 0; b !== null;) {
        var i = b,
            s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || ji;
            if (!o) {
                var a = i.alternate,
                    l = a !== null && a.memoizedState !== null || me;
                a = ji;
                var u = me;
                if (ji = o, (me = l) && !u)
                    for (b = i; b !== null;) o = b, l = o.child, o.tag === 22 && o.memoizedState !== null ? Vc(i) : l !== null ? (l.return = o, b = l) : Vc(i);
                for (; s !== null;) b = s, np(s), s = s.sibling;
                b = i, ji = a, me = u
            }
            Rc(e)
        } else i.subtreeFlags & 8772 && s !== null ? (s.return = i, b = s) : Rc(e)
    }
}

function Rc(e) {
    for (; b !== null;) {
        var t = b;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        me || Os(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !me)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ke(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var s = t.updateQueue;
                        s !== null && gc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            gc(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img":
                                    l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var f = d.dehydrated;
                                    f !== null && Fr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                }
                me || t.flags & 512 && Ta(t)
            } catch (h) {
                Y(t, t.return, h)
            }
        }
        if (t === e) {
            b = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, b = n;
            break
        }
        b = t.return
    }
}

function Dc(e) {
    for (; b !== null;) {
        var t = b;
        if (t === e) {
            b = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, b = n;
            break
        }
        b = t.return
    }
}

function Vc(e) {
    for (; b !== null;) {
        var t = b;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Os(4, t)
                    } catch (l) {
                        Y(t, n, l)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (l) {
                            Y(t, i, l)
                        }
                    }
                    var s = t.return;
                    try {
                        Ta(t)
                    } catch (l) {
                        Y(t, s, l)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Ta(t)
                    } catch (l) {
                        Y(t, o, l)
                    }
            }
        } catch (l) {
            Y(t, t.return, l)
        }
        if (t === e) {
            b = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return, b = a;
            break
        }
        b = t.return
    }
}
var ry = Math.ceil,
    gs = yt.ReactCurrentDispatcher,
    _l = yt.ReactCurrentOwner,
    ze = yt.ReactCurrentBatchConfig,
    I = 0,
    le = null,
    re = null,
    de = 0,
    Ae = 0,
    Tn = zt(0),
    se = 0,
    qr = null,
    un = 0,
    _s = 0,
    zl = 0,
    Cr = null,
    Ce = null,
    Bl = 0,
    Hn = 1 / 0,
    ot = null,
    ys = !1,
    Pa = null,
    Rt = null,
    Pi = !1,
    Nt = null,
    vs = 0,
    Er = 0,
    Aa = null,
    Hi = -1,
    Wi = 0;

function we() {
    return I & 6 ? ee() : Hi !== -1 ? Hi : Hi = ee()
}

function Dt(e) {
    return e.mode & 1 ? I & 2 && de !== 0 ? de & -de : zg.transition !== null ? (Wi === 0 && (Wi = zf()), Wi) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : qf(e.type)), e) : 1
}

function Xe(e, t, n, r) {
    if (50 < Er) throw Er = 0, Aa = null, Error(T(185));
    ti(e, n, r), (!(I & 2) || e !== le) && (e === le && (!(I & 2) && (_s |= n), se === 4 && Et(e, de)), Pe(e, r), n === 1 && I === 0 && !(t.mode & 1) && (Hn = ee() + 500, Ls && Bt()))
}

function Pe(e, t) {
    var n = e.callbackNode;
    z0(e, t);
    var r = ts(e, e === le ? de : 0);
    if (r === 0) n !== null && $u(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && $u(n), t === 1) e.tag === 0 ? _g(Lc.bind(null, e)) : fh(Lc.bind(null, e)), Lg(function() {
            !(I & 6) && Bt()
        }), n = null;
        else {
            switch (Bf(r)) {
                case 1:
                    n = hl;
                    break;
                case 4:
                    n = Of;
                    break;
                case 16:
                    n = es;
                    break;
                case 536870912:
                    n = _f;
                    break;
                default:
                    n = es
            }
            n = cp(n, rp.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function rp(e, t) {
    if (Hi = -1, Wi = 0, I & 6) throw Error(T(327));
    var n = e.callbackNode;
    if (Fn() && e.callbackNode !== n) return null;
    var r = ts(e, e === le ? de : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = xs(e, r);
    else {
        t = r;
        var i = I;
        I |= 2;
        var s = sp();
        (le !== e || de !== t) && (ot = null, Hn = ee() + 500, tn(e, t));
        do try {
            oy();
            break
        } catch (a) {
            ip(e, a)
        }
        while (!0);
        Nl(), gs.current = s, I = i, re !== null ? t = 0 : (le = null, de = 0, t = se)
    }
    if (t !== 0) {
        if (t === 2 && (i = na(e), i !== 0 && (r = i, t = ba(e, i))), t === 1) throw n = qr, tn(e, 0), Et(e, r), Pe(e, ee()), n;
        if (t === 6) Et(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !iy(i) && (t = xs(e, r), t === 2 && (s = na(e), s !== 0 && (r = s, t = ba(e, s))), t === 1)) throw n = qr, tn(e, 0), Et(e, r), Pe(e, ee()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(T(345));
                case 2:
                    Gt(e, Ce, ot);
                    break;
                case 3:
                    if (Et(e, r), (r & 130023424) === r && (t = Bl + 500 - ee(), 10 < t)) {
                        if (ts(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            we(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = ca(Gt.bind(null, e, Ce, ot), t);
                        break
                    }
                    Gt(e, Ce, ot);
                    break;
                case 4:
                    if (Et(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - Qe(r);
                        s = 1 << o, o = t[o], o > i && (i = o), r &= ~s
                    }
                    if (r = i, r = ee() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ry(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ca(Gt.bind(null, e, Ce, ot), r);
                        break
                    }
                    Gt(e, Ce, ot);
                    break;
                case 5:
                    Gt(e, Ce, ot);
                    break;
                default:
                    throw Error(T(329))
            }
        }
    }
    return Pe(e, ee()), e.callbackNode === n ? rp.bind(null, e) : null
}

function ba(e, t) {
    var n = Cr;
    return e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256), e = xs(e, t), e !== 2 && (t = Ce, Ce = n, t !== null && Ma(t)), e
}

function Ma(e) {
    Ce === null ? Ce = e : Ce.push.apply(Ce, e)
}

function iy(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Ye(s(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Et(e, t) {
    for (t &= ~zl, t &= ~_s, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Qe(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Lc(e) {
    if (I & 6) throw Error(T(327));
    Fn();
    var t = ts(e, 0);
    if (!(t & 1)) return Pe(e, ee()), null;
    var n = xs(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = na(e);
        r !== 0 && (t = r, n = ba(e, r))
    }
    if (n === 1) throw n = qr, tn(e, 0), Et(e, t), Pe(e, ee()), n;
    if (n === 6) throw Error(T(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Gt(e, Ce, ot), Pe(e, ee()), null
}

function Ul(e, t) {
    var n = I;
    I |= 1;
    try {
        return e(t)
    } finally {
        I = n, I === 0 && (Hn = ee() + 500, Ls && Bt())
    }
}

function cn(e) {
    Nt !== null && Nt.tag === 0 && !(I & 6) && Fn();
    var t = I;
    I |= 1;
    var n = ze.transition,
        r = O;
    try {
        if (ze.transition = null, O = 1, e) return e()
    } finally {
        O = r, ze.transition = n, I = t, !(I & 6) && Bt()
    }
}

function $l() {
    Ae = Tn.current, B(Tn)
}

function tn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Vg(n)), re !== null)
        for (n = re.return; n !== null;) {
            var r = n;
            switch (Cl(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && os();
                    break;
                case 3:
                    Un(), B(Ne), B(ye), Rl();
                    break;
                case 5:
                    Ml(r);
                    break;
                case 4:
                    Un();
                    break;
                case 13:
                    B(W);
                    break;
                case 19:
                    B(W);
                    break;
                case 10:
                    jl(r.type._context);
                    break;
                case 22:
                case 23:
                    $l()
            }
            n = n.return
        }
    if (le = e, re = e = Vt(e.current, null), de = Ae = t, se = 0, qr = null, zl = _s = un = 0, Ce = Cr = null, Yt !== null) {
        for (t = 0; t < Yt.length; t++)
            if (n = Yt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i, r.next = o
                }
                n.pending = r
            } Yt = null
    }
    return e
}

function ip(e, t) {
    do {
        var n = re;
        try {
            if (Nl(), Bi.current = ms, ps) {
                for (var r = q.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                ps = !1
            }
            if (ln = 0, ae = ie = q = null, Sr = !1, Hr = 0, _l.current = null, n === null || n.return === null) {
                se = 1, qr = t, re = null;
                break
            }
            e: {
                var s = e,
                    o = n.return,
                    a = n,
                    l = t;
                if (t = de, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        d = a,
                        f = d.tag;
                    if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = d.alternate;
                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = kc(o);
                    if (y !== null) {
                        y.flags &= -257, Cc(y, o, a, s, t), y.mode & 1 && Sc(s, u, t), t = y, l = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(l), t.updateQueue = x
                        } else v.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Sc(s, u, t), Hl();
                            break e
                        }
                        l = Error(T(426))
                    }
                } else if (U && a.mode & 1) {
                    var j = kc(o);
                    if (j !== null) {
                        !(j.flags & 65536) && (j.flags |= 256), Cc(j, o, a, s, t), El($n(l, a));
                        break e
                    }
                }
                s = l = $n(l, a),
                se !== 4 && (se = 2),
                Cr === null ? Cr = [s] : Cr.push(s),
                s = o;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var m = Bh(s, l, t);
                            mc(s, m);
                            break e;
                        case 1:
                            a = l;
                            var p = s.type,
                                g = s.stateNode;
                            if (!(s.flags & 128) && (typeof p.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && (Rt === null || !Rt.has(g)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var w = Uh(s, a, t);
                                mc(s, w);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            ap(n)
        } catch (S) {
            t = S, re === n && n !== null && (re = n = n.return);
            continue
        }
        break
    } while (!0)
}

function sp() {
    var e = gs.current;
    return gs.current = ms, e === null ? ms : e
}

function Hl() {
    (se === 0 || se === 3 || se === 2) && (se = 4), le === null || !(un & 268435455) && !(_s & 268435455) || Et(le, de)
}

function xs(e, t) {
    var n = I;
    I |= 2;
    var r = sp();
    (le !== e || de !== t) && (ot = null, tn(e, t));
    do try {
        sy();
        break
    } catch (i) {
        ip(e, i)
    }
    while (!0);
    if (Nl(), I = n, gs.current = r, re !== null) throw Error(T(261));
    return le = null, de = 0, se
}

function sy() {
    for (; re !== null;) op(re)
}

function oy() {
    for (; re !== null && !M0();) op(re)
}

function op(e) {
    var t = up(e.alternate, e, Ae);
    e.memoizedProps = e.pendingProps, t === null ? ap(e) : re = t, _l.current = null
}

function ap(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Jg(n, t), n !== null) {
                n.flags &= 32767, re = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                se = 6, re = null;
                return
            }
        } else if (n = Zg(n, t, Ae), n !== null) {
            re = n;
            return
        }
        if (t = t.sibling, t !== null) {
            re = t;
            return
        }
        re = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}

function Gt(e, t, n) {
    var r = O,
        i = ze.transition;
    try {
        ze.transition = null, O = 1, ay(e, t, n, r)
    } finally {
        ze.transition = i, O = r
    }
    return null
}

function ay(e, t, n, r) {
    do Fn(); while (Nt !== null);
    if (I & 6) throw Error(T(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(T(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (B0(e, s), e === le && (re = le = null, de = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Pi || (Pi = !0, cp(es, function() {
            return Fn(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = ze.transition, ze.transition = null;
        var o = O;
        O = 1;
        var a = I;
        I |= 4, _l.current = null, ty(e, n), tp(n, e), jg(la), ns = !!aa, la = aa = null, e.current = n, ny(n), R0(), I = a, O = o, ze.transition = s
    } else e.current = n;
    if (Pi && (Pi = !1, Nt = e, vs = i), s = e.pendingLanes, s === 0 && (Rt = null), L0(n.stateNode), Pe(e, ee()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (ys) throw ys = !1, e = Pa, Pa = null, e;
    return vs & 1 && e.tag !== 0 && Fn(), s = e.pendingLanes, s & 1 ? e === Aa ? Er++ : (Er = 0, Aa = e) : Er = 0, Bt(), null
}

function Fn() {
    if (Nt !== null) {
        var e = Bf(vs),
            t = ze.transition,
            n = O;
        try {
            if (ze.transition = null, O = 16 > e ? 16 : e, Nt === null) var r = !1;
            else {
                if (e = Nt, Nt = null, vs = 0, I & 6) throw Error(T(331));
                var i = I;
                for (I |= 4, b = e.current; b !== null;) {
                    var s = b,
                        o = s.child;
                    if (b.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (b = u; b !== null;) {
                                    var d = b;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            kr(8, d, s)
                                    }
                                    var f = d.child;
                                    if (f !== null) f.return = d, b = f;
                                    else
                                        for (; b !== null;) {
                                            d = b;
                                            var h = d.sibling,
                                                y = d.return;
                                            if (Zh(d), d === u) {
                                                b = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = y, b = h;
                                                break
                                            }
                                            b = y
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var j = x.sibling;
                                        x.sibling = null, x = j
                                    } while (x !== null)
                                }
                            }
                            b = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null) o.return = s, b = o;
                    else e: for (; b !== null;) {
                        if (s = b, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                kr(9, s, s.return)
                        }
                        var m = s.sibling;
                        if (m !== null) {
                            m.return = s.return, b = m;
                            break e
                        }
                        b = s.return
                    }
                }
                var p = e.current;
                for (b = p; b !== null;) {
                    o = b;
                    var g = o.child;
                    if (o.subtreeFlags & 2064 && g !== null) g.return = o, b = g;
                    else e: for (o = p; b !== null;) {
                        if (a = b, a.flags & 2048) try {
                            switch (a.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Os(9, a)
                            }
                        } catch (S) {
                            Y(a, a.return, S)
                        }
                        if (a === o) {
                            b = null;
                            break e
                        }
                        var w = a.sibling;
                        if (w !== null) {
                            w.return = a.return, b = w;
                            break e
                        }
                        b = a.return
                    }
                }
                if (I = i, Bt(), tt && typeof tt.onPostCommitFiberRoot == "function") try {
                    tt.onPostCommitFiberRoot(bs, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            O = n, ze.transition = t
        }
    }
    return !1
}

function Fc(e, t, n) {
    t = $n(n, t), t = Bh(e, t, 1), e = Mt(e, t, 1), t = we(), e !== null && (ti(e, 1, t), Pe(e, t))
}

function Y(e, t, n) {
    if (e.tag === 3) Fc(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Fc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Rt === null || !Rt.has(r))) {
                    e = $n(n, e), e = Uh(t, e, 1), t = Mt(t, e, 1), e = we(), t !== null && (ti(t, 1, e), Pe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function ly(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = we(), e.pingedLanes |= e.suspendedLanes & n, le === e && (de & n) === n && (se === 4 || se === 3 && (de & 130023424) === de && 500 > ee() - Bl ? tn(e, 0) : zl |= n), Pe(e, t)
}

function lp(e, t) {
    t === 0 && (e.mode & 1 ? (t = vi, vi <<= 1, !(vi & 130023424) && (vi = 4194304)) : t = 1);
    var n = we();
    e = ht(e, t), e !== null && (ti(e, t, n), Pe(e, n))
}

function uy(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), lp(e, n)
}

function cy(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(T(314))
    }
    r !== null && r.delete(t), lp(e, n)
}
var up;
up = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ne.current) Ee = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ee = !1, Yg(e, t, n);
            Ee = !!(e.flags & 131072)
        }
    else Ee = !1, U && t.flags & 1048576 && hh(t, us, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            $i(e, t), e = t.pendingProps;
            var i = _n(t, ye.current);
            Ln(t, n), i = Vl(null, t, r, e, i, n);
            var s = Ll();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, je(r) ? (s = !0, as(t)) : s = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Al(t), i.updater = Is, t.stateNode = i, i._reactInternals = t, ya(t, r, e, n), t = wa(null, t, r, !0, s, n)) : (t.tag = 0, U && s && kl(t), ve(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch ($i(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = fy(r), e = Ke(r, e), i) {
                    case 0:
                        t = xa(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Nc(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ec(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Tc(null, t, r, Ke(r.type, e), n);
                        break e
                }
                throw Error(T(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), xa(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Nc(e, t, r, i, n);
        case 3:
            e: {
                if (Kh(t), e === null) throw Error(T(387));r = t.pendingProps,
                s = t.memoizedState,
                i = s.element,
                xh(e, t),
                fs(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        i = $n(Error(T(423)), t), t = jc(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = $n(Error(T(424)), t), t = jc(e, t, r, n, i);
                    break e
                } else
                    for (be = bt(t.stateNode.containerInfo.firstChild), Me = t, U = !0, Ge = null, n = yh(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (zn(), r === i) {
                        t = pt(e, t, n);
                        break e
                    }
                    ve(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return wh(t), e === null && pa(t), r = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, o = i.children, ua(r, i) ? o = null : s !== null && ua(r, s) && (t.flags |= 32), Wh(e, t), ve(e, t, o, n), t.child;
        case 6:
            return e === null && pa(t), null;
        case 13:
            return qh(e, t, n);
        case 4:
            return bl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Bn(t, null, r, n) : ve(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), Ec(e, t, r, i, n);
        case 7:
            return ve(e, t, t.pendingProps, n), t.child;
        case 8:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ve(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, o = i.value, _(cs, r._currentValue), r._currentValue = o, s !== null)
                    if (Ye(s.value, o)) {
                        if (s.children === i.children && !Ne.current) {
                            t = pt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var a = s.dependencies;
                            if (a !== null) {
                                o = s.child;
                                for (var l = a.firstContext; l !== null;) {
                                    if (l.context === r) {
                                        if (s.tag === 1) {
                                            l = ct(-1, n & -n), l.tag = 2;
                                            var u = s.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? l.next = l : (l.next = d.next, d.next = l), u.pending = l
                                            }
                                        }
                                        s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), ma(s.return, n, t), a.lanes |= n;
                                        break
                                    }
                                    l = l.next
                                }
                            } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (o = s.return, o === null) throw Error(T(341));
                                o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), ma(o, n, t), o = s.sibling
                            } else o = s.child;
                            if (o !== null) o.return = s;
                            else
                                for (o = s; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (s = o.sibling, s !== null) {
                                        s.return = o.return, o = s;
                                        break
                                    }
                                    o = o.return
                                }
                            s = o
                        }
                ve(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, Ln(t, n), i = Ue(i), r = r(i), t.flags |= 1, ve(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = Ke(r, t.pendingProps), i = Ke(r.type, i), Tc(e, t, r, i, n);
        case 15:
            return $h(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : Ke(r, i), $i(e, t), t.tag = 1, je(r) ? (e = !0, as(t)) : e = !1, Ln(t, n), zh(t, r, i), ya(t, r, i, n), wa(null, t, r, !0, e, n);
        case 19:
            return Gh(e, t, n);
        case 22:
            return Hh(e, t, n)
    }
    throw Error(T(156, t.tag))
};

function cp(e, t) {
    return If(e, t)
}

function dy(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function _e(e, t, n, r) {
    return new dy(e, t, n, r)
}

function Wl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function fy(e) {
    if (typeof e == "function") return Wl(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === cl) return 11;
        if (e === dl) return 14
    }
    return 2
}

function Vt(e, t) {
    var n = e.alternate;
    return n === null ? (n = _e(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Ki(e, t, n, r, i, s) {
    var o = 2;
    if (r = e, typeof e == "function") Wl(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case mn:
            return nn(n.children, i, s, t);
        case ul:
            o = 8, i |= 8;
            break;
        case Bo:
            return e = _e(12, n, t, i | 2), e.elementType = Bo, e.lanes = s, e;
        case Uo:
            return e = _e(13, n, t, i), e.elementType = Uo, e.lanes = s, e;
        case $o:
            return e = _e(19, n, t, i), e.elementType = $o, e.lanes = s, e;
        case wf:
            return zs(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case vf:
                    o = 10;
                    break e;
                case xf:
                    o = 9;
                    break e;
                case cl:
                    o = 11;
                    break e;
                case dl:
                    o = 14;
                    break e;
                case St:
                    o = 16, r = null;
                    break e
            }
            throw Error(T(130, e == null ? e : typeof e, ""))
    }
    return t = _e(o, n, t, i), t.elementType = e, t.type = r, t.lanes = s, t
}

function nn(e, t, n, r) {
    return e = _e(7, e, r, t), e.lanes = n, e
}

function zs(e, t, n, r) {
    return e = _e(22, e, r, t), e.elementType = wf, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function So(e, t, n) {
    return e = _e(6, e, null, t), e.lanes = n, e
}

function ko(e, t, n) {
    return t = _e(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function hy(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = to(0), this.expirationTimes = to(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = to(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Kl(e, t, n, r, i, s, o, a, l) {
    return e = new hy(e, t, n, a, l), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = _e(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Al(s), e
}

function py(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: pn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function dp(e) {
    if (!e) return Ft;
    e = e._reactInternals;
    e: {
        if (fn(e) !== e || e.tag !== 1) throw Error(T(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (je(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (je(n)) return dh(e, n, t)
    }
    return t
}

function fp(e, t, n, r, i, s, o, a, l) {
    return e = Kl(n, r, !0, e, i, s, o, a, l), e.context = dp(null), n = e.current, r = we(), i = Dt(n), s = ct(r, i), s.callback = t ?? null, Mt(n, s, i), e.current.lanes = i, ti(e, i, r), Pe(e, r), e
}

function Bs(e, t, n, r) {
    var i = t.current,
        s = we(),
        o = Dt(i);
    return n = dp(n), t.context === null ? t.context = n : t.pendingContext = n, t = ct(s, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Mt(i, t, o), e !== null && (Xe(e, i, o, s), zi(e, i, o)), o
}

function ws(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Ic(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function ql(e, t) {
    Ic(e, t), (e = e.alternate) && Ic(e, t)
}

function my() {
    return null
}
var hp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Gl(e) {
    this._internalRoot = e
}
Us.prototype.render = Gl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(T(409));
    Bs(e, t, null, null)
};
Us.prototype.unmount = Gl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        cn(function() {
            Bs(null, e, null, null)
        }), t[ft] = null
    }
};

function Us(e) {
    this._internalRoot = e
}
Us.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Hf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
        Ct.splice(n, 0, e), n === 0 && Kf(e)
    }
};

function Ql(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function $s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Oc() {}

function gy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = ws(o);
                s.call(u)
            }
        }
        var o = fp(t, r, e, 0, null, !1, !1, "", Oc);
        return e._reactRootContainer = o, e[ft] = o.current, _r(e.nodeType === 8 ? e.parentNode : e), cn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var u = ws(l);
            a.call(u)
        }
    }
    var l = Kl(e, 0, !1, null, null, !1, !1, "", Oc);
    return e._reactRootContainer = l, e[ft] = l.current, _r(e.nodeType === 8 ? e.parentNode : e), cn(function() {
        Bs(t, l, n, r)
    }), l
}

function Hs(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = ws(o);
                a.call(l)
            }
        }
        Bs(t, o, e, i)
    } else o = gy(n, t, e, i, r);
    return ws(o)
}
Uf = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = hr(t.pendingLanes);
                n !== 0 && (pl(t, n | 1), Pe(t, ee()), !(I & 6) && (Hn = ee() + 500, Bt()))
            }
            break;
        case 13:
            cn(function() {
                var r = ht(e, 1);
                if (r !== null) {
                    var i = we();
                    Xe(r, e, 1, i)
                }
            }), ql(e, 1)
    }
};
ml = function(e) {
    if (e.tag === 13) {
        var t = ht(e, 134217728);
        if (t !== null) {
            var n = we();
            Xe(t, e, 134217728, n)
        }
        ql(e, 134217728)
    }
};
$f = function(e) {
    if (e.tag === 13) {
        var t = Dt(e),
            n = ht(e, t);
        if (n !== null) {
            var r = we();
            Xe(n, e, t, r)
        }
        ql(e, t)
    }
};
Hf = function() {
    return O
};
Wf = function(e, t) {
    var n = O;
    try {
        return O = e, t()
    } finally {
        O = n
    }
};
Jo = function(e, t, n) {
    switch (t) {
        case "input":
            if (Ko(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Vs(r);
                        if (!i) throw Error(T(90));
                        kf(r), Ko(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Ef(e, n);
            break;
        case "select":
            t = n.value, t != null && Mn(e, !!n.multiple, t, !1)
    }
};
Mf = Ul;
Rf = cn;
var yy = {
        usingClientEntryPoint: !1,
        Events: [ri, xn, Vs, Af, bf, Ul]
    },
    ur = {
        findFiberByHostInstance: Xt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    vy = {
        bundleType: ur.bundleType,
        version: ur.version,
        rendererPackageName: ur.rendererPackageName,
        rendererConfig: ur.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: yt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Lf(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ur.findFiberByHostInstance || my,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber) try {
        bs = Ai.inject(vy), tt = Ai
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yy;
De.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ql(t)) throw Error(T(200));
    return py(e, t, null, n)
};
De.createRoot = function(e, t) {
    if (!Ql(e)) throw Error(T(299));
    var n = !1,
        r = "",
        i = hp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Kl(e, 1, !1, null, null, n, !1, r, i), e[ft] = t.current, _r(e.nodeType === 8 ? e.parentNode : e), new Gl(t)
};
De.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","), Error(T(268, e)));
    return e = Lf(t), e = e === null ? null : e.stateNode, e
};
De.flushSync = function(e) {
    return cn(e)
};
De.hydrate = function(e, t, n) {
    if (!$s(t)) throw Error(T(200));
    return Hs(null, e, t, !0, n)
};
De.hydrateRoot = function(e, t, n) {
    if (!Ql(e)) throw Error(T(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        s = "",
        o = hp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = fp(t, null, e, 1, n ?? null, i, !1, s, o), e[ft] = t.current, _r(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Us(t)
};
De.render = function(e, t, n) {
    if (!$s(t)) throw Error(T(200));
    return Hs(null, e, t, !1, n)
};
De.unmountComponentAtNode = function(e) {
    if (!$s(e)) throw Error(T(40));
    return e._reactRootContainer ? (cn(function() {
        Hs(null, null, e, !1, function() {
            e._reactRootContainer = null, e[ft] = null
        })
    }), !0) : !1
};
De.unstable_batchedUpdates = Ul;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!$s(n)) throw Error(T(200));
    if (e == null || e._reactInternals === void 0) throw Error(T(38));
    return Hs(e, t, n, !1, r)
};
De.version = "18.3.1-next-f1338f8080-20240426";

function pp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pp)
    } catch (e) {
        console.error(e)
    }
}
pp(), pf.exports = De;
var xy = pf.exports,
    mp, _c = xy;
mp = _c.createRoot, _c.hydrateRoot;
const Xl = C.createContext({});

function Yl(e) {
    const t = C.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const Zl = typeof window < "u",
    gp = Zl ? C.useLayoutEffect : C.useEffect,
    Ws = C.createContext(null);

function Jl(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}

function eu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const mt = (e, t, n) => n > t ? t : n < e ? e : n;
let Ss = () => {};
const gt = {},
    yp = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);

function vp(e) {
    return typeof e == "object" && e !== null
}
const xp = e => /^0[^.\s]+$/u.test(e);

function tu(e) {
    let t;
    return () => (t === void 0 && (t = e()), t)
}
const Be = e => e,
    wy = (e, t) => n => t(e(n)),
    si = (...e) => e.reduce(wy),
    Gr = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    };
class nu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return Jl(this.subscriptions, t), () => eu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1) this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const rt = e => e * 1e3,
    it = e => e / 1e3;

function wp(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Sp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    Sy = 1e-7,
    ky = 12;

function Cy(e, t, n, r, i) {
    let s, o, a = 0;
    do o = t + (n - t) / 2, s = Sp(o, r, i) - e, s > 0 ? n = o : t = o; while (Math.abs(s) > Sy && ++a < ky);
    return o
}

function oi(e, t, n, r) {
    if (e === t && n === r) return Be;
    const i = s => Cy(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Sp(i(s), t, r)
}
const kp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Cp = e => t => 1 - e(1 - t),
    Ep = oi(.33, 1.53, .69, .99),
    ru = Cp(Ep),
    Tp = kp(ru),
    Np = e => (e *= 2) < 1 ? .5 * ru(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
    iu = e => 1 - Math.sin(Math.acos(e)),
    jp = Cp(iu),
    Pp = kp(iu),
    Ey = oi(.42, 0, 1, 1),
    Ty = oi(0, 0, .58, 1),
    Ap = oi(.42, 0, .58, 1),
    Ny = e => Array.isArray(e) && typeof e[0] != "number",
    bp = e => Array.isArray(e) && typeof e[0] == "number",
    zc = {
        linear: Be,
        easeIn: Ey,
        easeInOut: Ap,
        easeOut: Ty,
        circIn: iu,
        circInOut: Pp,
        circOut: jp,
        backIn: ru,
        backInOut: Tp,
        backOut: Ep,
        anticipate: Np
    },
    jy = e => typeof e == "string",
    Bc = e => {
        if (bp(e)) {
            Ss(e.length === 4);
            const [t, n, r, i] = e;
            return oi(t, n, r, i)
        } else if (jy(e)) return Ss(zc[e] !== void 0), zc[e];
        return e
    },
    bi = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
    Uc = {
        value: null,
        addProjectionMetrics: null
    };

function Py(e, t) {
    let n = new Set,
        r = new Set,
        i = !1,
        s = !1;
    const o = new WeakSet;
    let a = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        l = 0;

    function u(f) {
        o.has(f) && (d.schedule(f), e()), l++, f(a)
    }
    const d = {
        schedule: (f, h = !1, y = !1) => {
            const x = y && i ? n : r;
            return h && o.add(f), x.has(f) || x.add(f), f
        },
        cancel: f => {
            r.delete(f), o.delete(f)
        },
        process: f => {
            if (a = f, i) {
                s = !0;
                return
            }
            i = !0, [n, r] = [r, n], n.forEach(u), t && Uc.value && Uc.value.frameloop[t].push(l), l = 0, n.clear(), i = !1, s && (s = !1, d.process(f))
        }
    };
    return d
}
const Ay = 40;

function Mp(e, t) {
    let n = !1,
        r = !0;
    const i = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
        },
        s = () => n = !0,
        o = bi.reduce((g, w) => (g[w] = Py(s, t ? w : void 0), g), {}),
        {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: d,
            update: f,
            preRender: h,
            render: y,
            postRender: v
        } = o,
        x = () => {
            const g = gt.useManualTiming ? i.timestamp : performance.now();
            n = !1, gt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, Ay), 1)), i.timestamp = g, i.isProcessing = !0, a.process(i), l.process(i), u.process(i), d.process(i), f.process(i), h.process(i), y.process(i), v.process(i), i.isProcessing = !1, n && t && (r = !1, e(x))
        },
        j = () => {
            n = !0, r = !0, i.isProcessing || e(x)
        };
    return {
        schedule: bi.reduce((g, w) => {
            const S = o[w];
            return g[w] = (E, N = !1, k = !1) => (n || j(), S.schedule(E, N, k)), g
        }, {}),
        cancel: g => {
            for (let w = 0; w < bi.length; w++) o[bi[w]].cancel(g)
        },
        state: i,
        steps: o
    }
}
const {
    schedule: $,
    cancel: It,
    state: ce,
    steps: Co
} = Mp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let qi;

function by() {
    qi = void 0
}
const Te = {
        now: () => (qi === void 0 && Te.set(ce.isProcessing || gt.useManualTiming ? ce.timestamp : performance.now()), qi),
        set: e => {
            qi = e, queueMicrotask(by)
        }
    },
    Rp = e => t => typeof t == "string" && t.startsWith(e),
    su = Rp("--"),
    My = Rp("var(--"),
    ou = e => My(e) ? Ry.test(e.split("/*")[0].trim()) : !1,
    Ry = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    Yn = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    Qr = {
        ...Yn,
        transform: e => mt(0, 1, e)
    },
    Mi = {
        ...Yn,
        default: 1
    },
    Tr = e => Math.round(e * 1e5) / 1e5,
    au = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

function Dy(e) {
    return e == null
}
const Vy = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    lu = (e, t) => n => !!(typeof n == "string" && Vy.test(n) && n.startsWith(e) || t && !Dy(n) && Object.prototype.hasOwnProperty.call(n, t)),
    Dp = (e, t, n) => r => {
        if (typeof r != "string") return r;
        const [i, s, o, a] = r.match(au);
        return {
            [e]: parseFloat(i),
            [t]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: a !== void 0 ? parseFloat(a) : 1
        }
    },
    Ly = e => mt(0, 255, e),
    Eo = {
        ...Yn,
        transform: e => Math.round(Ly(e))
    },
    Jt = {
        test: lu("rgb", "red"),
        parse: Dp("red", "green", "blue"),
        transform: ({
            red: e,
            green: t,
            blue: n,
            alpha: r = 1
        }) => "rgba(" + Eo.transform(e) + ", " + Eo.transform(t) + ", " + Eo.transform(n) + ", " + Tr(Qr.transform(r)) + ")"
    };

function Fy(e) {
    let t = "",
        n = "",
        r = "",
        i = "";
    return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Ra = {
        test: lu("#"),
        parse: Fy,
        transform: Jt.transform
    },
    ai = e => ({
        test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    wt = ai("deg"),
    st = ai("%"),
    D = ai("px"),
    Iy = ai("vh"),
    Oy = ai("vw"),
    $c = {
        ...st,
        parse: e => st.parse(e) / 100,
        transform: e => st.transform(e * 100)
    },
    Nn = {
        test: lu("hsl", "hue"),
        parse: Dp("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: n,
            alpha: r = 1
        }) => "hsla(" + Math.round(e) + ", " + st.transform(Tr(t)) + ", " + st.transform(Tr(n)) + ", " + Tr(Qr.transform(r)) + ")"
    },
    ne = {
        test: e => Jt.test(e) || Ra.test(e) || Nn.test(e),
        parse: e => Jt.test(e) ? Jt.parse(e) : Nn.test(e) ? Nn.parse(e) : Ra.parse(e),
        transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Jt.transform(e) : Nn.transform(e),
        getAnimatableNone: e => {
            const t = ne.parse(e);
            return t.alpha = 0, ne.transform(t)
        }
    },
    _y = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

function zy(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(au)) == null ? void 0 : t.length) || 0) + (((n = e.match(_y)) == null ? void 0 : n.length) || 0) > 0
}
const Vp = "number",
    Lp = "color",
    By = "var",
    Uy = "var(",
    Hc = "${}",
    $y = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

function Xr(e) {
    const t = e.toString(),
        n = [],
        r = {
            color: [],
            number: [],
            var: []
        },
        i = [];
    let s = 0;
    const a = t.replace($y, l => (ne.test(l) ? (r.color.push(s), i.push(Lp), n.push(ne.parse(l))) : l.startsWith(Uy) ? (r.var.push(s), i.push(By), n.push(l)) : (r.number.push(s), i.push(Vp), n.push(parseFloat(l))), ++s, Hc)).split(Hc);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}

function Fp(e) {
    return Xr(e).values
}

function Ip(e) {
    const {
        split: t,
        types: n
    } = Xr(e), r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o], i[o] !== void 0) {
                const a = n[o];
                a === Vp ? s += Tr(i[o]) : a === Lp ? s += ne.transform(i[o]) : s += i[o]
            } return s
    }
}
const Hy = e => typeof e == "number" ? 0 : ne.test(e) ? ne.getAnimatableNone(e) : e;

function Wy(e) {
    const t = Fp(e);
    return Ip(e)(t.map(Hy))
}
const Ot = {
    test: zy,
    parse: Fp,
    createTransformer: Ip,
    getAnimatableNone: Wy
};

function To(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}

function Ky({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r
}) {
    e /= 360, t /= 100, n /= 100;
    let i = 0,
        s = 0,
        o = 0;
    if (!t) i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        i = To(l, a, e + 1 / 3), s = To(l, a, e), o = To(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}

function ks(e, t) {
    return n => n > 0 ? t : e
}
const K = (e, t, n) => e + (t - e) * n,
    No = (e, t, n) => {
        const r = e * e,
            i = n * (t * t - r) + r;
        return i < 0 ? 0 : Math.sqrt(i)
    },
    qy = [Ra, Jt, Nn],
    Gy = e => qy.find(t => t.test(e));

function Wc(e) {
    const t = Gy(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Nn && (n = Ky(n)), n
}
const Kc = (e, t) => {
        const n = Wc(e),
            r = Wc(t);
        if (!n || !r) return ks(e, t);
        const i = {
            ...n
        };
        return s => (i.red = No(n.red, r.red, s), i.green = No(n.green, r.green, s), i.blue = No(n.blue, r.blue, s), i.alpha = K(n.alpha, r.alpha, s), Jt.transform(i))
    },
    Da = new Set(["none", "hidden"]);

function Qy(e, t) {
    return Da.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}

function Xy(e, t) {
    return n => K(e, t, n)
}

function uu(e) {
    return typeof e == "number" ? Xy : typeof e == "string" ? ou(e) ? ks : ne.test(e) ? Kc : Jy : Array.isArray(e) ? Op : typeof e == "object" ? ne.test(e) ? Kc : Yy : ks
}

function Op(e, t) {
    const n = [...e],
        r = n.length,
        i = e.map((s, o) => uu(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++) n[o] = i[o](s);
        return n
    }
}

function Yy(e, t) {
    const n = {
            ...e,
            ...t
        },
        r = {};
    for (const i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = uu(e[i])(e[i], t[i]));
    return i => {
        for (const s in r) n[s] = r[s](i);
        return n
    }
}

function Zy(e, t) {
    const n = [],
        r = {
            color: 0,
            var: 0,
            number: 0
        };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i],
            o = e.indexes[s][r[s]],
            a = e.values[o] ?? 0;
        n[i] = a, r[s]++
    }
    return n
}
const Jy = (e, t) => {
    const n = Ot.createTransformer(t),
        r = Xr(e),
        i = Xr(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Da.has(e) && !i.values.length || Da.has(t) && !r.values.length ? Qy(e, t) : si(Op(Zy(r, i), i.values), n) : ks(e, t)
};

function _p(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? K(e, t, n) : uu(e)(e, t)
}
const ev = e => {
        const t = ({
            timestamp: n
        }) => e(n);
        return {
            start: (n = !0) => $.update(t, n),
            stop: () => It(t),
            now: () => ce.isProcessing ? ce.timestamp : Te.now()
        }
    },
    zp = (e, t, n = 10) => {
        let r = "";
        const i = Math.max(Math.round(t / n), 2);
        for (let s = 0; s < i; s++) r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0,r.length-2)})`
    },
    Cs = 2e4;

function cu(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Cs;) t += n, r = e.next(t);
    return t >= Cs ? 1 / 0 : t
}

function tv(e, t = 100, n) {
    const r = n({
            ...e,
            keyframes: [0, t]
        }),
        i = Math.min(cu(r), Cs);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: it(i)
    }
}
const nv = 5;

function Bp(e, t, n) {
    const r = Math.max(t - nv, 0);
    return wp(n - e(r), t - r)
}
const X = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
            granular: .01,
            default: 2
        },
        restDelta: {
            granular: .005,
            default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
    },
    jo = .001;

function rv({
    duration: e = X.duration,
    bounce: t = X.bounce,
    velocity: n = X.velocity,
    mass: r = X.mass
}) {
    let i, s, o = 1 - t;
    o = mt(X.minDamping, X.maxDamping, o), e = mt(X.minDuration, X.maxDuration, it(e)), o < 1 ? (i = u => {
        const d = u * o,
            f = d * e,
            h = d - n,
            y = Va(u, o),
            v = Math.exp(-f);
        return jo - h / y * v
    }, s = u => {
        const f = u * o * e,
            h = f * n + n,
            y = Math.pow(o, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-f),
            x = Va(Math.pow(u, 2), o);
        return (-i(u) + jo > 0 ? -1 : 1) * ((h - y) * v) / x
    }) : (i = u => {
        const d = Math.exp(-u * e),
            f = (u - n) * e + 1;
        return -jo + d * f
    }, s = u => {
        const d = Math.exp(-u * e),
            f = (n - u) * (e * e);
        return d * f
    });
    const a = 5 / e,
        l = sv(i, s, a);
    if (e = rt(e), isNaN(l)) return {
        stiffness: X.stiffness,
        damping: X.damping,
        duration: e
    };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const iv = 12;

function sv(e, t, n) {
    let r = n;
    for (let i = 1; i < iv; i++) r = r - e(r) / t(r);
    return r
}

function Va(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const ov = ["duration", "bounce"],
    av = ["stiffness", "damping", "mass"];

function qc(e, t) {
    return t.some(n => e[n] !== void 0)
}

function lv(e) {
    let t = {
        velocity: X.velocity,
        stiffness: X.stiffness,
        damping: X.damping,
        mass: X.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!qc(e, av) && qc(e, ov))
        if (e.visualDuration) {
            const n = e.visualDuration,
                r = 2 * Math.PI / (n * 1.2),
                i = r * r,
                s = 2 * mt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: X.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = rv(e);
            t = {
                ...t,
                ...n,
                mass: X.mass
            }, t.isResolvedFromDuration = !0
        } return t
}

function Es(e = X.visualDuration, t = X.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {
        restSpeed: r,
        restDelta: i
    } = n;
    const s = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        a = {
            done: !1,
            value: s
        },
        {
            stiffness: l,
            damping: u,
            mass: d,
            duration: f,
            velocity: h,
            isResolvedFromDuration: y
        } = lv({
            ...n,
            velocity: -it(n.velocity || 0)
        }),
        v = h || 0,
        x = u / (2 * Math.sqrt(l * d)),
        j = o - s,
        m = it(Math.sqrt(l / d)),
        p = Math.abs(j) < 5;
    r || (r = p ? X.restSpeed.granular : X.restSpeed.default), i || (i = p ? X.restDelta.granular : X.restDelta.default);
    let g;
    if (x < 1) {
        const S = Va(m, x);
        g = E => {
            const N = Math.exp(-x * m * E);
            return o - N * ((v + x * m * j) / S * Math.sin(S * E) + j * Math.cos(S * E))
        }
    } else if (x === 1) g = S => o - Math.exp(-m * S) * (j + (v + m * j) * S);
    else {
        const S = m * Math.sqrt(x * x - 1);
        g = E => {
            const N = Math.exp(-x * m * E),
                k = Math.min(S * E, 300);
            return o - N * ((v + x * m * j) * Math.sinh(k) + S * j * Math.cosh(k)) / S
        }
    }
    const w = {
        calculatedDuration: y && f || null,
        next: S => {
            const E = g(S);
            if (y) a.done = S >= f;
            else {
                let N = S === 0 ? v : 0;
                x < 1 && (N = S === 0 ? rt(v) : Bp(g, S, E));
                const k = Math.abs(N) <= r,
                    L = Math.abs(o - E) <= i;
                a.done = k && L
            }
            return a.value = a.done ? o : E, a
        },
        toString: () => {
            const S = Math.min(cu(w), Cs),
                E = zp(N => w.next(S * N).value, S, 30);
            return S + "ms " + E
        },
        toTransition: () => {}
    };
    return w
}
Es.applyToOptions = e => {
    const t = tv(e, 100, Es);
    return e.ease = t.ease, e.duration = rt(t.duration), e.type = "keyframes", e
};

function La({
    keyframes: e,
    velocity: t = 0,
    power: n = .8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = .5,
    restSpeed: d
}) {
    const f = e[0],
        h = {
            done: !1,
            value: f
        },
        y = k => a !== void 0 && k < a || l !== void 0 && k > l,
        v = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let x = n * t;
    const j = f + x,
        m = o === void 0 ? j : o(j);
    m !== j && (x = m - f);
    const p = k => -x * Math.exp(-k / r),
        g = k => m + p(k),
        w = k => {
            const L = p(k),
                M = g(k);
            h.done = Math.abs(L) <= u, h.value = h.done ? m : M
        };
    let S, E;
    const N = k => {
        y(h.value) && (S = k, E = Es({
            keyframes: [h.value, v(h.value)],
            velocity: Bp(g, k, h.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: d
        }))
    };
    return N(0), {
        calculatedDuration: null,
        next: k => {
            let L = !1;
            return !E && S === void 0 && (L = !0, w(k), N(k)), S !== void 0 && k >= S ? E.next(k - S) : (!L && w(k), h)
        }
    }
}

function uv(e, t, n) {
    const r = [],
        i = n || gt.mix || _p,
        s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Be : t;
            a = si(l, a)
        }
        r.push(a)
    }
    return r
}

function cv(e, t, {
    clamp: n = !0,
    ease: r,
    mixer: i
} = {}) {
    const s = e.length;
    if (Ss(s === t.length), s === 1) return () => t[0];
    if (s === 2 && t[0] === t[1]) return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
    const a = uv(t, r, i),
        l = a.length,
        u = d => {
            if (o && d < e[0]) return t[0];
            let f = 0;
            if (l > 1)
                for (; f < e.length - 2 && !(d < e[f + 1]); f++);
            const h = Gr(e[f], e[f + 1], d);
            return a[f](h)
        };
    return n ? d => u(mt(e[0], e[s - 1], d)) : u
}

function dv(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Gr(0, t, r);
        e.push(K(n, 1, i))
    }
}

function fv(e) {
    const t = [0];
    return dv(t, e.length - 1), t
}

function hv(e, t) {
    return e.map(n => n * t)
}

function pv(e, t) {
    return e.map(() => t || Ap).splice(0, e.length - 1)
}

function Nr({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut"
}) {
    const i = Ny(r) ? r.map(Bc) : Bc(r),
        s = {
            done: !1,
            value: t[0]
        },
        o = hv(n && n.length === t.length ? n : fv(t), e),
        a = cv(o, t, {
            ease: Array.isArray(i) ? i : pv(t, i)
        });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l), s.done = l >= e, s)
    }
}
const mv = e => e !== null;

function du(e, {
    repeat: t,
    repeatType: n = "loop"
}, r, i = 1) {
    const s = e.filter(mv),
        a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const gv = {
    decay: La,
    inertia: La,
    tween: Nr,
    keyframes: Nr,
    spring: Es
};

function Up(e) {
    typeof e.type == "string" && (e.type = gv[e.type])
}
class fu {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        })
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const yv = e => e / 100;
class hu extends fu {
    constructor(t) {
        super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            var r, i;
            const {
                motionValue: n
            } = this.options;
            n && n.updatedAt !== Te.now() && this.tick(Te.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (i = (r = this.options).onStop) == null || i.call(r))
        }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {
            options: t
        } = this;
        Up(t);
        const {
            type: n = Nr,
            repeat: r = 0,
            repeatDelay: i = 0,
            repeatType: s,
            velocity: o = 0
        } = t;
        let {
            keyframes: a
        } = t;
        const l = n || Nr;
        l !== Nr && typeof a[0] != "number" && (this.mixKeyframes = si(yv, _p(a[0], a[1])), a = [0, 100]);
        const u = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })), u.calculatedDuration === null && (u.calculatedDuration = cu(u));
        const {
            calculatedDuration: d
        } = u;
        this.calculatedDuration = d, this.resolvedDuration = d + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = u
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n = !1) {
        const {
            generator: r,
            totalDuration: i,
            mixKeyframes: s,
            mirroredGenerator: o,
            resolvedDuration: a,
            calculatedDuration: l
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: u = 0,
            keyframes: d,
            repeat: f,
            repeatType: h,
            repeatDelay: y,
            type: v,
            onUpdate: x,
            finalKeyframe: j
        } = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
        const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            p = this.playbackSpeed >= 0 ? m < 0 : m > i;
        this.currentTime = Math.max(m, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let g = this.currentTime,
            w = r;
        if (f) {
            const k = Math.min(this.currentTime, i) / a;
            let L = Math.floor(k),
                M = k % 1;
            !M && k >= 1 && (M = 1), M === 1 && L--, L = Math.min(L, f + 1), !!(L % 2) && (h === "reverse" ? (M = 1 - M, y && (M -= y / a)) : h === "mirror" && (w = o)), g = mt(0, 1, M) * a
        }
        const S = p ? {
            done: !1,
            value: d[0]
        } : w.next(g);
        s && (S.value = s(S.value));
        let {
            done: E
        } = S;
        !p && l !== null && (E = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && E);
        return N && v !== La && (S.value = du(d, this.options, j, this.speed)), x && x(S.value), N && this.finish(), S
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return it(this.calculatedDuration)
    }
    get time() {
        return it(this.currentTime)
    }
    set time(t) {
        var n;
        t = rt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(Te.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t, n && (this.time = it(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped) return;
        const {
            driver: t = ev,
            startTime: n
        } = this.options;
        this.driver || (this.driver = t(o => this.tick(o))), (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
    }
    pause() {
        this.state = "paused", this.updateTime(Te.now()), this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(), this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0, this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this)
    }
}

function vv(e) {
    for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
}
const en = e => e * 180 / Math.PI,
    Fa = e => {
        const t = en(Math.atan2(e[1], e[0]));
        return Ia(t)
    },
    xv = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Fa,
        rotateZ: Fa,
        skewX: e => en(Math.atan(e[1])),
        skewY: e => en(Math.atan(e[2])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
    },
    Ia = e => (e = e % 360, e < 0 && (e += 360), e),
    Gc = Fa,
    Qc = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    Xc = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    wv = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: Qc,
        scaleY: Xc,
        scale: e => (Qc(e) + Xc(e)) / 2,
        rotateX: e => Ia(en(Math.atan2(e[6], e[5]))),
        rotateY: e => Ia(en(Math.atan2(-e[2], e[0]))),
        rotateZ: Gc,
        rotate: Gc,
        skewX: e => en(Math.atan(e[4])),
        skewY: e => en(Math.atan(e[1])),
        skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
    };

function Oa(e) {
    return e.includes("scale") ? 1 : 0
}

function _a(e, t) {
    if (!e || e === "none") return Oa(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n) r = wv, i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = xv, i = a
    }
    if (!i) return Oa(t);
    const s = r[t],
        o = i[1].split(",").map(kv);
    return typeof s == "function" ? s(o) : o[s]
}
const Sv = (e, t) => {
    const {
        transform: n = "none"
    } = getComputedStyle(e);
    return _a(n, t)
};

function kv(e) {
    return parseFloat(e.trim())
}
const Zn = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    Jn = new Set(Zn),
    Yc = e => e === Yn || e === D,
    Cv = new Set(["x", "y", "z"]),
    Ev = Zn.filter(e => !Cv.has(e));

function Tv(e) {
    const t = [];
    return Ev.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t
}
const rn = {
    width: ({
        x: e
    }, {
        paddingLeft: t = "0",
        paddingRight: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({
        y: e
    }, {
        paddingTop: t = "0",
        paddingBottom: n = "0"
    }) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {
        top: t
    }) => parseFloat(t),
    left: (e, {
        left: t
    }) => parseFloat(t),
    bottom: ({
        y: e
    }, {
        top: t
    }) => parseFloat(t) + (e.max - e.min),
    right: ({
        x: e
    }, {
        left: t
    }) => parseFloat(t) + (e.max - e.min),
    x: (e, {
        transform: t
    }) => _a(t, "x"),
    y: (e, {
        transform: t
    }) => _a(t, "y")
};
rn.translateX = rn.x;
rn.translateY = rn.y;
const sn = new Set;
let za = !1,
    Ba = !1,
    Ua = !1;

function $p() {
    if (Ba) {
        const e = Array.from(sn).filter(r => r.needsMeasurement),
            t = new Set(e.map(r => r.element)),
            n = new Map;
        t.forEach(r => {
            const i = Tv(r);
            i.length && (n.set(r, i), r.render())
        }), e.forEach(r => r.measureInitialState()), t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach(([s, o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            })
        }), e.forEach(r => r.measureEndState()), e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        })
    }
    Ba = !1, za = !1, sn.forEach(e => e.complete(Ua)), sn.clear()
}

function Hp() {
    sn.forEach(e => {
        e.readKeyframes(), e.needsMeasurement && (Ba = !0)
    })
}

function Nv() {
    Ua = !0, Hp(), $p(), Ua = !1
}
class pu {
    constructor(t, n, r, i, s, o = !1) {
        this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled", this.isAsync ? (sn.add(this), za || (za = !0, $.read(Hp), $.resolveKeyframes($p))) : (this.readKeyframes(), this.complete())
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n,
            element: r,
            motionValue: i
        } = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get(),
                o = t[t.length - 1];
            if (s !== void 0) t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0])
        }
        vv(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = !1) {
        this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), sn.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (sn.delete(this), this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const jv = e => e.startsWith("--");

function Pv(e, t, n) {
    jv(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const Av = tu(() => window.ScrollTimeline !== void 0),
    bv = {};

function Mv(e, t) {
    const n = tu(e);
    return () => bv[t] ?? n()
}
const Wp = Mv(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }, "linearEasing"),
    mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Zc = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: mr([0, .65, .55, 1]),
        circOut: mr([.55, 0, 1, .45]),
        backIn: mr([.31, .01, .66, -.59]),
        backOut: mr([.33, 1.53, .69, .99])
    };

function Kp(e, t) {
    if (e) return typeof e == "function" ? Wp() ? zp(e, t) : "ease-out" : bp(e) ? mr(e) : Array.isArray(e) ? e.map(n => Kp(n, t) || Zc.easeOut) : Zc[e]
}

function Rv(e, t, n, {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l
} = {}, u = void 0) {
    const d = {
        [t]: n
    };
    l && (d.offset = l);
    const f = Kp(a, i);
    Array.isArray(f) && (d.easing = f);
    const h = {
        delay: r,
        duration: i,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return u && (h.pseudoElement = u), e.animate(d, h)
}

function qp(e) {
    return typeof e == "function" && "applyToOptions" in e
}

function Dv({
    type: e,
    ...t
}) {
    return qp(e) && Wp() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
}
class Vv extends fu {
    constructor(t) {
        if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
        const {
            element: n,
            name: r,
            keyframes: i,
            pseudoElement: s,
            allowFlatten: o = !1,
            finalKeyframe: a,
            onComplete: l
        } = t;
        this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, Ss(typeof t.type != "string");
        const u = Dv(t);
        this.animation = Rv(n, r, i, u, s), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !s) {
                const d = du(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(d) : Pv(n, r, d), this.animation.cancel()
            }
            l == null || l(), this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const {
            state: t
        } = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var t, n;
        this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t)
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return it(Number(t))
    }
    get time() {
        return it(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.finishedTime = null, this.animation.currentTime = rt(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(t) {
        this.animation.startTime = t
    }
    attachTimeline({
        timeline: t,
        observe: n
    }) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })), this.animation.onfinish = null, t && Av() ? (this.animation.timeline = t, Be) : n(this)
    }
}
const Gp = {
    anticipate: Np,
    backInOut: Tp,
    circInOut: Pp
};

function Lv(e) {
    return e in Gp
}

function Fv(e) {
    typeof e.ease == "string" && Lv(e.ease) && (e.ease = Gp[e.ease])
}
const Jc = 10;
class Iv extends Vv {
    constructor(t) {
        Fv(t), Up(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
    }
    updateMotionValue(t) {
        const {
            motionValue: n,
            onUpdate: r,
            onComplete: i,
            element: s,
            ...o
        } = this.options;
        if (!n) return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new hu({
                ...o,
                autoplay: !1
            }),
            l = rt(this.finishedTime ?? this.time);
        n.setWithVelocity(a.sample(l - Jc).value, a.sample(l).value, Jc), a.stop()
    }
}
const ed = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ot.test(e) || e === "0") && !e.startsWith("url("));

function Ov(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t) return !0
}

function _v(e, t, n, r) {
    const i = e[0];
    if (i === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const s = e[e.length - 1],
        o = ed(i, t),
        a = ed(s, t);
    return !o || !a ? !1 : Ov(e) || (n === "spring" || qp(n)) && r
}

function $a(e) {
    e.duration = 0, e.type
}
const zv = new Set(["opacity", "clipPath", "filter", "transform"]),
    Bv = tu(() => Object.hasOwnProperty.call(Element.prototype, "animate"));

function Uv(e) {
    var d;
    const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: s,
        type: o
    } = e;
    if (!(((d = t == null ? void 0 : t.owner) == null ? void 0 : d.current) instanceof HTMLElement)) return !1;
    const {
        onUpdate: l,
        transformTemplate: u
    } = t.owner.getProps();
    return Bv() && n && zv.has(n) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const $v = 40;
class Hv extends fu {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: i = 0,
        repeatDelay: s = 0,
        repeatType: o = "loop",
        keyframes: a,
        name: l,
        motionValue: u,
        element: d,
        ...f
    }) {
        var v;
        super(), this.stop = () => {
            var x, j;
            this._animation && (this._animation.stop(), (x = this.stopTimeline) == null || x.call(this)), (j = this.keyframeResolver) == null || j.cancel()
        }, this.createdAt = Te.now();
        const h = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: i,
                repeatDelay: s,
                repeatType: o,
                name: l,
                motionValue: u,
                element: d,
                ...f
            },
            y = (d == null ? void 0 : d.KeyframeResolver) || pu;
        this.keyframeResolver = new y(a, (x, j, m) => this.onKeyframesResolved(x, j, h, !m), l, u, d), (v = this.keyframeResolver) == null || v.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        this.keyframeResolver = void 0;
        const {
            name: s,
            type: o,
            velocity: a,
            delay: l,
            isHandoff: u,
            onUpdate: d
        } = r;
        this.resolvedAt = Te.now(), _v(t, s, o, a) || ((gt.instantAnimations || !l) && (d == null || d(du(t, r, n))), t[0] = t[t.length - 1], $a(r), r.repeat = 0);
        const h = {
                startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > $v ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
                finalKeyframe: n,
                ...r,
                keyframes: t
            },
            y = !u && Uv(h) ? new Iv({
                ...h,
                element: h.motionValue.owner.current
            }) : new hu(h);
        y.finished.then(() => this.notifyFinished()).catch(Be), this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = y
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then(() => {})
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(), Nv()), this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel()
    }
}
const Wv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;

function Kv(e) {
    const t = Wv.exec(e);
    if (!t) return [, ];
    const [, n, r, i] = t;
    return [`--${n??r}`, i]
}

function Qp(e, t, n = 1) {
    const [r, i] = Kv(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return yp(o) ? parseFloat(o) : o
    }
    return ou(i) ? Qp(i, t, n + 1) : i
}

function mu(e, t) {
    return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
}
const Xp = new Set(["width", "height", "top", "left", "right", "bottom", ...Zn]),
    qv = {
        test: e => e === "auto",
        parse: e => e
    },
    Yp = e => t => t.test(e),
    Zp = [Yn, D, st, wt, Oy, Iy, qv],
    td = e => Zp.find(Yp(e));

function Gv(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || xp(e) : !0
}
const Qv = new Set(["brightness", "contrast", "saturate", "opacity"]);

function Xv(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(au) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = Qv.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")"
}
const Yv = /\b([a-z-]*)\(.*?\)/gu,
    Ha = {
        ...Ot,
        getAnimatableNone: e => {
            const t = e.match(Yv);
            return t ? t.map(Xv).join(" ") : e
        }
    },
    nd = {
        ...Yn,
        transform: Math.round
    },
    Zv = {
        rotate: wt,
        rotateX: wt,
        rotateY: wt,
        rotateZ: wt,
        scale: Mi,
        scaleX: Mi,
        scaleY: Mi,
        scaleZ: Mi,
        skew: wt,
        skewX: wt,
        skewY: wt,
        distance: D,
        translateX: D,
        translateY: D,
        translateZ: D,
        x: D,
        y: D,
        z: D,
        perspective: D,
        transformPerspective: D,
        opacity: Qr,
        originX: $c,
        originY: $c,
        originZ: D
    },
    gu = {
        borderWidth: D,
        borderTopWidth: D,
        borderRightWidth: D,
        borderBottomWidth: D,
        borderLeftWidth: D,
        borderRadius: D,
        radius: D,
        borderTopLeftRadius: D,
        borderTopRightRadius: D,
        borderBottomRightRadius: D,
        borderBottomLeftRadius: D,
        width: D,
        maxWidth: D,
        height: D,
        maxHeight: D,
        top: D,
        right: D,
        bottom: D,
        left: D,
        padding: D,
        paddingTop: D,
        paddingRight: D,
        paddingBottom: D,
        paddingLeft: D,
        margin: D,
        marginTop: D,
        marginRight: D,
        marginBottom: D,
        marginLeft: D,
        backgroundPositionX: D,
        backgroundPositionY: D,
        ...Zv,
        zIndex: nd,
        fillOpacity: Qr,
        strokeOpacity: Qr,
        numOctaves: nd
    },
    Jv = {
        ...gu,
        color: ne,
        backgroundColor: ne,
        outlineColor: ne,
        fill: ne,
        stroke: ne,
        borderColor: ne,
        borderTopColor: ne,
        borderRightColor: ne,
        borderBottomColor: ne,
        borderLeftColor: ne,
        filter: Ha,
        WebkitFilter: Ha
    },
    Jp = e => Jv[e];

function em(e, t) {
    let n = Jp(e);
    return n !== Ha && (n = Ot), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const ex = new Set(["auto", "none", "0"]);

function tx(e, t, n) {
    let r = 0,
        i;
    for (; r < e.length && !i;) {
        const s = e[r];
        typeof s == "string" && !ex.has(s) && Xr(s).values.length && (i = e[r]), r++
    }
    if (i && n)
        for (const s of t) e[s] = em(n, i)
}
class nx extends pu {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: t,
            element: n,
            name: r
        } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let l = 0; l < t.length; l++) {
            let u = t[l];
            if (typeof u == "string" && (u = u.trim(), ou(u))) {
                const d = Qp(u, n.current);
                d !== void 0 && (t[l] = d), l === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(), !Xp.has(r) || t.length !== 2) return;
        const [i, s] = t, o = td(i), a = td(s);
        if (o !== a)
            if (Yc(o) && Yc(a))
                for (let l = 0; l < t.length; l++) {
                    const u = t[l];
                    typeof u == "string" && (t[l] = parseFloat(u))
                } else rn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {
            unresolvedKeyframes: t,
            name: n
        } = this, r = [];
        for (let i = 0; i < t.length; i++)(t[i] === null || Gv(t[i])) && r.push(i);
        r.length && tx(t, r, n)
    }
    measureInitialState() {
        const {
            element: t,
            unresolvedKeyframes: n,
            name: r
        } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = rn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {
            element: t,
            name: n,
            unresolvedKeyframes: r
        } = this;
        if (!t || !t.current) return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1,
            o = r[s];
        r[s] = rn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
            t.getValue(l).set(u)
        }), this.resolveNoneKeyframes()
    }
}

function rx(e, t, n) {
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e)
}
const tm = (e, t) => t && typeof e == "number" ? t.transform(e) : e;

function nm(e) {
    return vp(e) && "offsetHeight" in e
}
const rd = 30,
    ix = e => !isNaN(parseFloat(e));
class sx {
    constructor(t, n = {}) {
        this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = r => {
            var s;
            const i = Te.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current), this.dependents))
                for (const o of this.dependents) o.dirty()
        }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t, this.updatedAt = Te.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = ix(this.current))
    }
    setPrevFrameValue(t = this.current) {
        this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new nu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(), $.read(() => {
                this.events.change.getSize() || this.stop()
            })
        } : r
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t, this.stopPassiveEffect = n
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n = !0) {
        this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set), this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = Te.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > rd) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, rd);
        return wp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify()
        }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
        })
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
    }
}

function Wn(e, t) {
    return new sx(e, t)
}
const {
    schedule: yu,
    cancel: V2
} = Mp(queueMicrotask, !1), We = {
    x: !1,
    y: !1
};

function rm() {
    return We.x || We.y
}

function ox(e) {
    return e === "x" || e === "y" ? We[e] ? null : (We[e] = !0, () => {
        We[e] = !1
    }) : We.x || We.y ? null : (We.x = We.y = !0, () => {
        We.x = We.y = !1
    })
}

function im(e, t) {
    const n = rx(e),
        r = new AbortController,
        i = {
            passive: !0,
            ...t,
            signal: r.signal
        };
    return [n, i, () => r.abort()]
}

function id(e) {
    return !(e.pointerType === "touch" || rm())
}

function ax(e, t, n = {}) {
    const [r, i, s] = im(e, n), o = a => {
        if (!id(a)) return;
        const {
            target: l
        } = a, u = t(l, a);
        if (typeof u != "function" || !l) return;
        const d = f => {
            id(f) && (u(f), l.removeEventListener("pointerleave", d))
        };
        l.addEventListener("pointerleave", d, i)
    };
    return r.forEach(a => {
        a.addEventListener("pointerenter", o, i)
    }), s
}
const sm = (e, t) => t ? e === t ? !0 : sm(e, t.parentElement) : !1,
    vu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1,
    lx = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);

function ux(e) {
    return lx.has(e.tagName) || e.tabIndex !== -1
}
const Gi = new WeakSet;

function sd(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}

function Po(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, {
        isPrimary: !0,
        bubbles: !0
    }))
}
const cx = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = sd(() => {
        if (Gi.has(n)) return;
        Po(n, "down");
        const i = sd(() => {
                Po(n, "up")
            }),
            s = () => Po(n, "cancel");
        n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t)
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
};

function od(e) {
    return vu(e) && !rm()
}

function dx(e, t, n = {}) {
    const [r, i, s] = im(e, n), o = a => {
        const l = a.currentTarget;
        if (!od(a)) return;
        Gi.add(l);
        const u = t(l, a),
            d = (y, v) => {
                window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), Gi.has(l) && Gi.delete(l), od(y) && typeof u == "function" && u(y, {
                    success: v
                })
            },
            f = y => {
                d(y, l === window || l === document || n.useGlobalTarget || sm(l, y.target))
            },
            h = y => {
                d(y, !1)
            };
        window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", h, i)
    };
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i), nm(a) && (a.addEventListener("focus", u => cx(u, i)), !ux(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }), s
}

function om(e) {
    return vp(e) && "ownerSVGElement" in e
}

function fx(e) {
    return om(e) && e.tagName === "svg"
}
const ge = e => !!(e && e.getVelocity),
    hx = [...Zp, ne, Ot],
    px = e => hx.find(Yp(e)),
    xu = C.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    });
class mx extends C.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = n.offsetParent,
                i = nm(r) && r.offsetWidth || 0,
                s = this.props.sizeRef.current;
            s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = i - s.width - s.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}

function gx({
    children: e,
    isPresent: t,
    anchorX: n,
    root: r
}) {
    const i = C.useId(),
        s = C.useRef(null),
        o = C.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0
        }),
        {
            nonce: a
        } = C.useContext(xu);
    return C.useInsertionEffect(() => {
        const {
            width: l,
            height: u,
            top: d,
            left: f,
            right: h
        } = o.current;
        if (t || !s.current || !l || !u) return;
        const y = n === "left" ? `left: ${f}` : `right: ${h}`;
        s.current.dataset.motionPopId = i;
        const v = document.createElement("style");
        a && (v.nonce = a);
        const x = r ?? document.head;
        return x.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            ${y}px !important;
            top: ${d}px !important;
          }
        `), () => {
            x.contains(v) && x.removeChild(v)
        }
    }, [t]), c.jsx(mx, {
        isPresent: t,
        childRef: s,
        sizeRef: o,
        children: C.cloneElement(e, {
            ref: s
        })
    })
}
const yx = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: s,
    mode: o,
    anchorX: a,
    root: l
}) => {
    const u = Yl(vx),
        d = C.useId();
    let f = !0,
        h = C.useMemo(() => (f = !1, {
            id: d,
            initial: t,
            isPresent: n,
            custom: i,
            onExitComplete: y => {
                u.set(y, !0);
                for (const v of u.values())
                    if (!v) return;
                r && r()
            },
            register: y => (u.set(y, !1), () => u.delete(y))
        }), [n, u, r]);
    return s && f && (h = {
        ...h
    }), C.useMemo(() => {
        u.forEach((y, v) => u.set(v, !1))
    }, [n]), C.useEffect(() => {
        !n && !u.size && r && r()
    }, [n]), o === "popLayout" && (e = c.jsx(gx, {
        isPresent: n,
        anchorX: a,
        root: l,
        children: e
    })), c.jsx(Ws.Provider, {
        value: h,
        children: e
    })
};

function vx() {
    return new Map
}

function am(e = !0) {
    const t = C.useContext(Ws);
    if (t === null) return [!0, null];
    const {
        isPresent: n,
        onExitComplete: r,
        register: i
    } = t, s = C.useId();
    C.useEffect(() => {
        if (e) return i(s)
    }, [e]);
    const o = C.useCallback(() => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Ri = e => e.key || "";

function ad(e) {
    const t = [];
    return C.Children.forEach(e, n => {
        C.isValidElement(n) && t.push(n)
    }), t
}
const wu = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: i = !0,
        mode: s = "sync",
        propagate: o = !1,
        anchorX: a = "left",
        root: l
    }) => {
        const [u, d] = am(o), f = C.useMemo(() => ad(e), [e]), h = o && !u ? [] : f.map(Ri), y = C.useRef(!0), v = C.useRef(f), x = Yl(() => new Map), [j, m] = C.useState(f), [p, g] = C.useState(f);
        gp(() => {
            y.current = !1, v.current = f;
            for (let E = 0; E < p.length; E++) {
                const N = Ri(p[E]);
                h.includes(N) ? x.delete(N) : x.get(N) !== !0 && x.set(N, !1)
            }
        }, [p, h.length, h.join("-")]);
        const w = [];
        if (f !== j) {
            let E = [...f];
            for (let N = 0; N < p.length; N++) {
                const k = p[N],
                    L = Ri(k);
                h.includes(L) || (E.splice(N, 0, k), w.push(k))
            }
            return s === "wait" && w.length && (E = w), g(ad(E)), m(f), null
        }
        const {
            forceRender: S
        } = C.useContext(Xl);
        return c.jsx(c.Fragment, {
            children: p.map(E => {
                const N = Ri(E),
                    k = o && !u ? !1 : f === p || h.includes(N),
                    L = () => {
                        if (x.has(N)) x.set(N, !0);
                        else return;
                        let M = !0;
                        x.forEach(te => {
                            te || (M = !1)
                        }), M && (S == null || S(), g(v.current), o && (d == null || d()), r && r())
                    };
                return c.jsx(yx, {
                    isPresent: k,
                    initial: !y.current || n ? void 0 : !1,
                    custom: t,
                    presenceAffectsLayout: i,
                    mode: s,
                    root: l,
                    onExitComplete: k ? void 0 : L,
                    anchorX: a,
                    children: E
                }, N)
            })
        })
    },
    lm = C.createContext({
        strict: !1
    }),
    ld = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"]
    },
    Kn = {};
for (const e in ld) Kn[e] = {
    isEnabled: t => ld[e].some(n => !!t[n])
};

function xx(e) {
    for (const t in e) Kn[t] = {
        ...Kn[t],
        ...e[t]
    }
}
const wx = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

function Ts(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || wx.has(e)
}
let um = e => !Ts(e);

function Sx(e) {
    typeof e == "function" && (um = t => t.startsWith("on") ? !Ts(t) : e(t))
}
try {
    Sx(require("@emotion/is-prop-valid").default)
} catch {}

function kx(e, t, n) {
    const r = {};
    for (const i in e) i === "values" && typeof e.values == "object" || (um(i) || n === !0 && Ts(i) || !t && !Ts(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Ks = C.createContext({});

function qs(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}

function Yr(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Su = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    ku = ["initial", ...Su];

function Gs(e) {
    return qs(e.animate) || ku.some(t => Yr(e[t]))
}

function cm(e) {
    return !!(Gs(e) || e.variants)
}

function Cx(e, t) {
    if (Gs(e)) {
        const {
            initial: n,
            animate: r
        } = e;
        return {
            initial: n === !1 || Yr(n) ? n : void 0,
            animate: Yr(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}

function Ex(e) {
    const {
        initial: t,
        animate: n
    } = Cx(e, C.useContext(Ks));
    return C.useMemo(() => ({
        initial: t,
        animate: n
    }), [ud(t), ud(n)])
}

function ud(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Zr = {};

function Tx(e) {
    for (const t in e) Zr[t] = e[t], su(t) && (Zr[t].isCSSVariable = !0)
}

function dm(e, {
    layout: t,
    layoutId: n
}) {
    return Jn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Zr[e] || e === "opacity")
}
const Nx = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    jx = Zn.length;

function Px(e, t, n) {
    let r = "",
        i = !0;
    for (let s = 0; s < jx; s++) {
        const o = Zn[s],
            a = e[o];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
            const u = tm(a, gu[o]);
            if (!l) {
                i = !1;
                const d = Nx[o] || o;
                r += `${d}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r
}

function Cu(e, t, n) {
    const {
        style: r,
        vars: i,
        transformOrigin: s
    } = e;
    let o = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (Jn.has(l)) {
            o = !0;
            continue
        } else if (su(l)) {
            i[l] = u;
            continue
        } else {
            const d = tm(u, gu[l]);
            l.startsWith("origin") ? (a = !0, s[l] = d) : r[l] = d
        }
    }
    if (t.transform || (o || n ? r.transform = Px(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
        const {
            originX: l = "50%",
            originY: u = "50%",
            originZ: d = 0
        } = s;
        r.transformOrigin = `${l} ${u} ${d}`
    }
}
const Eu = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});

function fm(e, t, n) {
    for (const r in t) !ge(t[r]) && !dm(r, n) && (e[r] = t[r])
}

function Ax({
    transformTemplate: e
}, t) {
    return C.useMemo(() => {
        const n = Eu();
        return Cu(n, t, e), Object.assign({}, n.vars, n.style)
    }, [t])
}

function bx(e, t) {
    const n = e.style || {},
        r = {};
    return fm(r, n, e), Object.assign(r, Ax(e, t)), r
}

function Mx(e, t) {
    const n = {},
        r = bx(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag==="x"?"y":"x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
}
const Rx = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    Dx = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };

function Vx(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? Rx : Dx;
    e[s.offset] = D.transform(-r);
    const o = D.transform(t),
        a = D.transform(n);
    e[s.array] = `${o} ${a}`
}

function hm(e, {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
}, l, u, d) {
    if (Cu(e, a, u), l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style, e.style = {};
    const {
        attrs: f,
        style: h
    } = e;
    f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box", delete f.transformBox), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && Vx(f, i, s, o, !1)
}
const pm = () => ({
        ...Eu(),
        attrs: {}
    }),
    mm = e => typeof e == "string" && e.toLowerCase() === "svg";

function Lx(e, t, n, r) {
    const i = C.useMemo(() => {
        const s = pm();
        return hm(s, t, mm(r), e.transformTemplate, e.style), {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }, [t]);
    if (e.style) {
        const s = {};
        fm(s, e.style, e), i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const Fx = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

function Tu(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Fx.indexOf(e) > -1 || /[A-Z]/u.test(e))
}

function Ix(e, t, n, {
    latestValues: r
}, i, s = !1) {
    const a = (Tu(e) ? Lx : Mx)(t, r, i, e),
        l = kx(t, typeof e == "string", s),
        u = e !== C.Fragment ? {
            ...l,
            ...a,
            ref: n
        } : {},
        {
            children: d
        } = t,
        f = C.useMemo(() => ge(d) ? d.get() : d, [d]);
    return C.createElement(e, {
        ...u,
        children: f
    })
}

function cd(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach((n, r) => {
        t[0][r] = n.get(), t[1][r] = n.getVelocity()
    }), t
}

function Nu(e, t, n, r) {
    if (typeof t == "function") {
        const [i, s] = cd(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
        const [i, s] = cd(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}

function Qi(e) {
    return ge(e) ? e.get() : e
}

function Ox({
    scrapeMotionValuesFromProps: e,
    createRenderState: t
}, n, r, i) {
    return {
        latestValues: _x(n, r, i, e),
        renderState: t()
    }
}

function _x(e, t, n, r) {
    const i = {},
        s = r(e, {});
    for (const h in s) i[h] = Qi(s[h]);
    let {
        initial: o,
        animate: a
    } = e;
    const l = Gs(e),
        u = cm(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let d = n ? n.initial === !1 : !1;
    d = d || o === !1;
    const f = d ? a : o;
    if (f && typeof f != "boolean" && !qs(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let y = 0; y < h.length; y++) {
            const v = Nu(e, h[y]);
            if (v) {
                const {
                    transitionEnd: x,
                    transition: j,
                    ...m
                } = v;
                for (const p in m) {
                    let g = m[p];
                    if (Array.isArray(g)) {
                        const w = d ? g.length - 1 : 0;
                        g = g[w]
                    }
                    g !== null && (i[p] = g)
                }
                for (const p in x) i[p] = x[p]
            }
        }
    }
    return i
}
const gm = e => (t, n) => {
    const r = C.useContext(Ks),
        i = C.useContext(Ws),
        s = () => Ox(e, t, r, i);
    return n ? s() : Yl(s)
};

function ju(e, t, n) {
    var s;
    const {
        style: r
    } = e, i = {};
    for (const o in r)(ge(r[o]) || t.style && ge(t.style[o]) || dm(o, e) || ((s = n == null ? void 0 : n.getValue(o)) == null ? void 0 : s.liveStyle) !== void 0) && (i[o] = r[o]);
    return i
}
const zx = gm({
    scrapeMotionValuesFromProps: ju,
    createRenderState: Eu
});

function ym(e, t, n) {
    const r = ju(e, t, n);
    for (const i in e)
        if (ge(e[i]) || ge(t[i])) {
            const s = Zn.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        } return r
}
const Bx = gm({
        scrapeMotionValuesFromProps: ym,
        createRenderState: pm
    }),
    Ux = Symbol.for("motionComponentSymbol");

function jn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}

function $x(e, t, n) {
    return C.useCallback(r => {
        r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : jn(n) && (n.current = r))
    }, [t])
}
const Pu = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    Hx = "framerAppearId",
    vm = "data-" + Pu(Hx),
    xm = C.createContext({});

function Wx(e, t, n, r, i) {
    var x, j;
    const {
        visualElement: s
    } = C.useContext(Ks), o = C.useContext(lm), a = C.useContext(Ws), l = C.useContext(xu).reducedMotion, u = C.useRef(null);
    r = r || o.renderer, !u.current && r && (u.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const d = u.current,
        f = C.useContext(xm);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && Kx(u.current, n, i, f);
    const h = C.useRef(!1);
    C.useInsertionEffect(() => {
        d && h.current && d.update(n, a)
    });
    const y = n[vm],
        v = C.useRef(!!y && !((x = window.MotionHandoffIsComplete) != null && x.call(window, y)) && ((j = window.MotionHasOptimisedAnimation) == null ? void 0 : j.call(window, y)));
    return gp(() => {
        d && (h.current = !0, window.MotionIsMounted = !0, d.updateFeatures(), d.scheduleRenderMicrotask(), v.current && d.animationState && d.animationState.animateChanges())
    }), C.useEffect(() => {
        d && (!v.current && d.animationState && d.animationState.animateChanges(), v.current && (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) == null || m.call(window, y)
        }), v.current = !1), d.enteringChildren = void 0)
    }), d
}

function Kx(e, t, n, r) {
    const {
        layoutId: i,
        layout: s,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u,
        layoutCrossfade: d
    } = t;
    e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : wm(e.parent)), e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && jn(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: d,
        layoutScroll: l,
        layoutRoot: u
    })
}

function wm(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : wm(e.parent)
}

function Ao(e, {
    forwardMotionProps: t = !1
} = {}, n, r) {
    n && xx(n);
    const i = Tu(e) ? Bx : zx;

    function s(a, l) {
        let u;
        const d = {
                ...C.useContext(xu),
                ...a,
                layoutId: qx(a)
            },
            {
                isStatic: f
            } = d,
            h = Ex(a),
            y = i(a, f);
        if (!f && Zl) {
            Gx();
            const v = Qx(d);
            u = v.MeasureLayout, h.visualElement = Wx(e, y, d, r, v.ProjectionNode)
        }
        return c.jsxs(Ks.Provider, {
            value: h,
            children: [u && h.visualElement ? c.jsx(u, {
                visualElement: h.visualElement,
                ...d
            }) : null, Ix(e, a, $x(y, h.visualElement, l), y, f, t)]
        })
    }
    s.displayName = `motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;
    const o = C.forwardRef(s);
    return o[Ux] = e, o
}

function qx({
    layoutId: e
}) {
    const t = C.useContext(Xl).id;
    return t && e !== void 0 ? t + "-" + e : e
}

function Gx(e, t) {
    C.useContext(lm).strict
}

function Qx(e) {
    const {
        drag: t,
        layout: n
    } = Kn;
    if (!t && !n) return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}

function Xx(e, t) {
    if (typeof Proxy > "u") return Ao;
    const n = new Map,
        r = (s, o) => Ao(s, o, e, t),
        i = (s, o) => r(s, o);
    return new Proxy(i, {
        get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, Ao(o, void 0, e, t)), n.get(o))
    })
}

function Sm({
    top: e,
    left: t,
    right: n,
    bottom: r
}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}

function Yx({
    x: e,
    y: t
}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}

function Zx(e, t) {
    if (!t) return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}

function bo(e) {
    return e === void 0 || e === 1
}

function Wa({
    scale: e,
    scaleX: t,
    scaleY: n
}) {
    return !bo(e) || !bo(t) || !bo(n)
}

function Qt(e) {
    return Wa(e) || km(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}

function km(e) {
    return dd(e.x) || dd(e.y)
}

function dd(e) {
    return e && e !== "0%"
}

function Ns(e, t, n) {
    const r = e - n,
        i = t * r;
    return n + i
}

function fd(e, t, n, r, i) {
    return i !== void 0 && (e = Ns(e, i, r)), Ns(e, n, r) + t
}

function Ka(e, t = 0, n = 1, r, i) {
    e.min = fd(e.min, t, n, r, i), e.max = fd(e.max, t, n, r, i)
}

function Cm(e, {
    x: t,
    y: n
}) {
    Ka(e.x, t.translate, t.scale, t.originPoint), Ka(e.y, n.translate, n.scale, n.originPoint)
}
const hd = .999999999999,
    pd = 1.0000000000001;

function Jx(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a], o = s.projectionDelta;
        const {
            visualElement: l
        } = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && An(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Cm(e, o)), r && Qt(s.latestValues) && An(e, s.latestValues))
    }
    t.x < pd && t.x > hd && (t.x = 1), t.y < pd && t.y > hd && (t.y = 1)
}

function Pn(e, t) {
    e.min = e.min + t, e.max = e.max + t
}

function md(e, t, n, r, i = .5) {
    const s = K(e.min, e.max, i);
    Ka(e, t, n, s, r)
}

function An(e, t) {
    md(e.x, t.x, t.scaleX, t.scale, t.originX), md(e.y, t.y, t.scaleY, t.scale, t.originY)
}

function Em(e, t) {
    return Sm(Zx(e.getBoundingClientRect(), t))
}

function e1(e, t, n) {
    const r = Em(e, n),
        {
            scroll: i
        } = t;
    return i && (Pn(r.x, i.offset.x), Pn(r.y, i.offset.y)), r
}
const gd = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    bn = () => ({
        x: gd(),
        y: gd()
    }),
    yd = () => ({
        min: 0,
        max: 0
    }),
    J = () => ({
        x: yd(),
        y: yd()
    }),
    qa = {
        current: null
    },
    Tm = {
        current: !1
    };

function t1() {
    if (Tm.current = !0, !!Zl)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => qa.current = e.matches;
            e.addEventListener("change", t), t()
        } else qa.current = !1
}
const n1 = new WeakMap;

function r1(e, t, n) {
    for (const r in t) {
        const i = t[r],
            s = n[r];
        if (ge(i)) e.addValue(r, i);
        else if (ge(s)) e.addValue(r, Wn(i, {
            owner: e
        }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Wn(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t
}
const vd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class i1 {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        blockInitialAnimation: s,
        visualState: o
    }, a = {}) {
        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = pu, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            const h = Te.now();
            this.renderScheduledAt < h && (this.renderScheduledAt = h, $.render(this.render, !1, !0))
        };
        const {
            latestValues: l,
            renderState: u
        } = o;
        this.latestValues = l, this.baseTarget = {
            ...l
        }, this.initialValues = n.initial ? {
            ...l
        } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = Gs(n), this.isVariantNode = cm(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
        const {
            willChange: d,
            ...f
        } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in f) {
            const y = f[h];
            l[h] !== void 0 && ge(y) && y.set(l[h])
        }
    }
    mount(t) {
        var n;
        this.current = t, n1.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, i) => this.bindToMotionValue(i, r)), Tm.current || t1(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : qa.current, (n = this.parent) == null || n.addChild(this), this.update(this.props, this.presenceContext)
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(), It(this.notifyUpdate), It(this.render), this.valueSubscriptions.forEach(n => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(), r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Jn.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", o => {
            this.latestValues[t] = o, this.props.onUpdate && $.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
        });
        let s;
        window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
            i(), s && s(), n.owner && n.stop()
        })
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in Kn) {
            const n = Kn[t];
            if (!n) continue;
            const {
                isEnabled: r,
                Feature: i
            } = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(), s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : J()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
        for (let r = 0; r < vd.length; r++) {
            const i = vd[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            const s = "on" + i,
                o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = r1(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Wn(n === null ? void 0 : n, {
            owner: this
        }), this.addValue(t, r)), r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (yp(r) || xp(r)) ? r = parseFloat(r) : !px(r) && Ot.test(n) && (r = em(t, n)), this.setBaseTarget(t, ge(r) ? r.get() : r)), ge(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {
            initial: n
        } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = Nu(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0) return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !ge(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new nu), this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        yu.render(this.render)
    }
}
class Nm extends i1 {
    constructor() {
        super(...arguments), this.KeyframeResolver = nx
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {
        vars: n,
        style: r
    }) {
        delete n[t], delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const {
            children: t
        } = this.props;
        ge(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }))
    }
}

function jm(e, {
    style: t,
    vars: n
}, r, i) {
    const s = e.style;
    let o;
    for (o in t) s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n) s.setProperty(o, n[o])
}

function s1(e) {
    return window.getComputedStyle(e)
}
class o1 extends Nm {
    constructor() {
        super(...arguments), this.type = "html", this.renderInstance = jm
    }
    readValueFromInstance(t, n) {
        var r;
        if (Jn.has(n)) return (r = this.projection) != null && r.isProjecting ? Oa(n) : Sv(t, n);
        {
            const i = s1(t),
                s = (su(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {
        transformPagePoint: n
    }) {
        return Em(t, n)
    }
    build(t, n, r) {
        Cu(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return ju(t, n, r)
    }
}
const Pm = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

function a1(e, t, n, r) {
    jm(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(Pm.has(i) ? i : Pu(i), t.attrs[i])
}
class l1 extends Nm {
    constructor() {
        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = J
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Jn.has(n)) {
            const r = Jp(n);
            return r && r.default || 0
        }
        return n = Pm.has(n) ? n : Pu(n), t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return ym(t, n, r)
    }
    build(t, n, r) {
        hm(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        a1(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = mm(t.tagName), super.mount(t)
    }
}
const u1 = (e, t) => Tu(e) ? new l1(t) : new o1(t, {
    allowProjection: e !== C.Fragment
});

function In(e, t, n) {
    const r = e.getProps();
    return Nu(r, t, n !== void 0 ? n : r.custom, e)
}
const Ga = e => Array.isArray(e);

function c1(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Wn(n))
}

function d1(e) {
    return Ga(e) ? e[e.length - 1] || 0 : e
}

function f1(e, t) {
    const n = In(e, t);
    let {
        transitionEnd: r = {},
        transition: i = {},
        ...s
    } = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = d1(s[o]);
        c1(e, o, a)
    }
}

function h1(e) {
    return !!(ge(e) && e.add)
}

function Qa(e, t) {
    const n = e.getValue("willChange");
    if (h1(n)) return n.add(t);
    if (!n && gt.WillChange) {
        const r = new gt.WillChange("auto");
        e.addValue("willChange", r), r.add(t)
    }
}

function Am(e) {
    return e.props[vm]
}
const p1 = e => e !== null;

function m1(e, {
    repeat: t,
    repeatType: n = "loop"
}, r) {
    const i = e.filter(p1),
        s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const g1 = {
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    },
    y1 = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    v1 = {
        type: "keyframes",
        duration: .8
    },
    x1 = {
        type: "keyframes",
        ease: [.25, .1, .35, 1],
        duration: .3
    },
    w1 = (e, {
        keyframes: t
    }) => t.length > 2 ? v1 : Jn.has(e) ? e.startsWith("scale") ? y1(t[1]) : g1 : x1;

function S1({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: s,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...d
}) {
    return !!Object.keys(d).length
}
const Au = (e, t, n, r = {}, i, s) => o => {
    const a = mu(r, e) || {},
        l = a.delay || r.delay || 0;
    let {
        elapsed: u = 0
    } = r;
    u = u - rt(l);
    const d = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: h => {
            t.set(h), a.onUpdate && a.onUpdate(h)
        },
        onComplete: () => {
            o(), a.onComplete && a.onComplete()
        },
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    S1(a) || Object.assign(d, w1(e, d)), d.duration && (d.duration = rt(d.duration)), d.repeatDelay && (d.repeatDelay = rt(d.repeatDelay)), d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if ((d.type === !1 || d.duration === 0 && !d.repeatDelay) && ($a(d), d.delay === 0 && (f = !0)), (gt.instantAnimations || gt.skipAnimations) && (f = !0, $a(d), d.delay = 0), d.allowFlatten = !a.type && !a.ease, f && !s && t.get() !== void 0) {
        const h = m1(d.keyframes, a);
        if (h !== void 0) {
            $.update(() => {
                d.onUpdate(h), d.onComplete()
            });
            return
        }
    }
    return a.isSync ? new hu(d) : new Hv(d)
};

function k1({
    protectedKeys: e,
    needsAnimating: t
}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}

function bm(e, t, {
    delay: n = 0,
    transitionOverride: r,
    type: i
} = {}) {
    let {
        transition: s = e.getDefaultTransition(),
        transitionEnd: o,
        ...a
    } = t;
    r && (s = r);
    const l = [],
        u = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const f = e.getValue(d, e.latestValues[d] ?? null),
            h = a[d];
        if (h === void 0 || u && k1(u, d)) continue;
        const y = {
                delay: n,
                ...mu(s || {}, d)
            },
            v = f.get();
        if (v !== void 0 && !f.isAnimating && !Array.isArray(h) && h === v && !y.velocity) continue;
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const m = Am(e);
            if (m) {
                const p = window.MotionHandoffAnimation(m, d, $);
                p !== null && (y.startTime = p, x = !0)
            }
        }
        Qa(e, d), f.start(Au(d, f, h, e.shouldReduceMotion && Xp.has(d) ? {
            type: !1
        } : y, e, x));
        const j = f.animation;
        j && l.push(j)
    }
    return o && Promise.all(l).then(() => {
        $.update(() => {
            o && f1(e, o)
        })
    }), l
}

function Mm(e, t, n, r = 0, i = 1) {
    const s = Array.from(e).sort((u, d) => u.sortNodePosition(d)).indexOf(t),
        o = e.size,
        a = (o - 1) * r;
    return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}

function Xa(e, t, n = {}) {
    var l;
    const r = In(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {
        transition: i = e.getDefaultTransition() || {}
    } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(bm(e, r, n)) : () => Promise.resolve(),
        o = e.variantChildren && e.variantChildren.size ? (u = 0) => {
            const {
                delayChildren: d = 0,
                staggerChildren: f,
                staggerDirection: h
            } = i;
            return C1(e, t, u, d, f, h, n)
        } : () => Promise.resolve(),
        {
            when: a
        } = i;
    if (a) {
        const [u, d] = a === "beforeChildren" ? [s, o] : [o, s];
        return u().then(() => d())
    } else return Promise.all([s(), o(n.delay)])
}

function C1(e, t, n = 0, r = 0, i = 0, s = 1, o) {
    const a = [];
    for (const l of e.variantChildren) l.notify("AnimationStart", t), a.push(Xa(l, t, {
        ...o,
        delay: n + (typeof r == "function" ? 0 : r) + Mm(e.variantChildren, l, r, i, s)
    }).then(() => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}

function E1(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => Xa(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string") r = Xa(e, t, n);
    else {
        const i = typeof t == "function" ? In(e, t, n.custom) : t;
        r = Promise.all(bm(e, i, n))
    }
    return r.then(() => {
        e.notify("AnimationComplete", t)
    })
}

function Rm(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
const T1 = ku.length;

function Dm(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Dm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n
    }
    const t = {};
    for (let n = 0; n < T1; n++) {
        const r = ku[n],
            i = e.props[r];
        (Yr(i) || i === !1) && (t[r] = i)
    }
    return t
}
const N1 = [...Su].reverse(),
    j1 = Su.length;

function P1(e) {
    return t => Promise.all(t.map(({
        animation: n,
        options: r
    }) => E1(e, n, r)))
}

function A1(e) {
    let t = P1(e),
        n = xd(),
        r = !0;
    const i = l => (u, d) => {
        var h;
        const f = In(e, d, l === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {
                transition: y,
                transitionEnd: v,
                ...x
            } = f;
            u = {
                ...u,
                ...x,
                ...v
            }
        }
        return u
    };

    function s(l) {
        t = l(e)
    }

    function o(l) {
        const {
            props: u
        } = e, d = Dm(e.parent) || {}, f = [], h = new Set;
        let y = {},
            v = 1 / 0;
        for (let j = 0; j < j1; j++) {
            const m = N1[j],
                p = n[m],
                g = u[m] !== void 0 ? u[m] : d[m],
                w = Yr(g),
                S = m === l ? p.isActive : null;
            S === !1 && (v = j);
            let E = g === d[m] && g !== u[m] && w;
            if (E && r && e.manuallyAnimateOnMount && (E = !1), p.protectedKeys = {
                    ...y
                }, !p.isActive && S === null || !g && !p.prevProp || qs(g) || typeof g == "boolean") continue;
            const N = b1(p.prevProp, g);
            let k = N || m === l && p.isActive && !E && w || j > v && w,
                L = !1;
            const M = Array.isArray(g) ? g : [g];
            let te = M.reduce(i(m), {});
            S === !1 && (te = {});
            const {
                prevResolvedValues: vt = {}
            } = p, $t = {
                ...vt,
                ...te
            }, tr = Z => {
                k = !0, h.has(Z) && (L = !0, h.delete(Z)), p.needsAnimating[Z] = !0;
                const A = e.getValue(Z);
                A && (A.liveStyle = !1)
            };
            for (const Z in $t) {
                const A = te[Z],
                    R = vt[Z];
                if (y.hasOwnProperty(Z)) continue;
                let V = !1;
                Ga(A) && Ga(R) ? V = !Rm(A, R) : V = A !== R, V ? A != null ? tr(Z) : h.add(Z) : A !== void 0 && h.has(Z) ? tr(Z) : p.protectedKeys[Z] = !0
            }
            p.prevProp = g, p.prevResolvedValues = te, p.isActive && (y = {
                ...y,
                ...te
            }), r && e.blockInitialAnimation && (k = !1);
            const ui = E && N;
            k && (!ui || L) && f.push(...M.map(Z => {
                const A = {
                    type: m
                };
                if (typeof Z == "string" && r && !ui && e.manuallyAnimateOnMount && e.parent) {
                    const {
                        parent: R
                    } = e, V = In(R, Z);
                    if (R.enteringChildren && V) {
                        const {
                            delayChildren: H
                        } = V.transition || {};
                        A.delay = Mm(R.enteringChildren, e, H)
                    }
                }
                return {
                    animation: Z,
                    options: A
                }
            }))
        }
        if (h.size) {
            const j = {};
            if (typeof u.initial != "boolean") {
                const m = In(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
                m && m.transition && (j.transition = m.transition)
            }
            h.forEach(m => {
                const p = e.getBaseTarget(m),
                    g = e.getValue(m);
                g && (g.liveStyle = !0), j[m] = p ?? null
            }), f.push({
                animation: j
            })
        }
        let x = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1), r = !1, x ? t(f) : Promise.resolve()
    }

    function a(l, u) {
        var f;
        if (n[l].isActive === u) return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var y;
            return (y = h.animationState) == null ? void 0 : y.setActive(l, u)
        }), n[l].isActive = u;
        const d = o(l);
        for (const h in n) n[h].protectedKeys = {};
        return d
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = xd(), r = !0
        }
    }
}

function b1(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Rm(t, e) : !1
}

function Kt(e = !1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}

function xd() {
    return {
        animate: Kt(!0),
        whileInView: Kt(),
        whileHover: Kt(),
        whileTap: Kt(),
        whileDrag: Kt(),
        whileFocus: Kt(),
        exit: Kt()
    }
}
class Ut {
    constructor(t) {
        this.isMounted = !1, this.node = t
    }
    update() {}
}
class M1 extends Ut {
    constructor(t) {
        super(t), t.animationState || (t.animationState = A1(t))
    }
    updateAnimationControlsSubscription() {
        const {
            animate: t
        } = this.node.getProps();
        qs(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {
            animate: t
        } = this.node.getProps(), {
            animate: n
        } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this)
    }
}
let R1 = 0;
class D1 extends Ut {
    constructor() {
        super(...arguments), this.id = R1++
    }
    update() {
        if (!this.node.presenceContext) return;
        const {
            isPresent: t,
            onExitComplete: n
        } = this.node.presenceContext, {
            isPresent: r
        } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then(() => {
            n(this.id)
        })
    }
    mount() {
        const {
            register: t,
            onExitComplete: n
        } = this.node.presenceContext || {};
        n && n(this.id), t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const V1 = {
    animation: {
        Feature: M1
    },
    exit: {
        Feature: D1
    }
};

function Jr(e, t, n, r = {
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}

function li(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const L1 = e => t => vu(t) && e(t, li(t));

function jr(e, t, n, r) {
    return Jr(e, t, L1(n), r)
}
const Vm = 1e-4,
    F1 = 1 - Vm,
    I1 = 1 + Vm,
    Lm = .01,
    O1 = 0 - Lm,
    _1 = 0 + Lm;

function xe(e) {
    return e.max - e.min
}

function z1(e, t, n) {
    return Math.abs(e - t) <= n
}

function wd(e, t, n, r = .5) {
    e.origin = r, e.originPoint = K(t.min, t.max, e.origin), e.scale = xe(n) / xe(t), e.translate = K(n.min, n.max, e.origin) - e.originPoint, (e.scale >= F1 && e.scale <= I1 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= O1 && e.translate <= _1 || isNaN(e.translate)) && (e.translate = 0)
}

function Pr(e, t, n, r) {
    wd(e.x, t.x, n.x, r ? r.originX : void 0), wd(e.y, t.y, n.y, r ? r.originY : void 0)
}

function Sd(e, t, n) {
    e.min = n.min + t.min, e.max = e.min + xe(t)
}

function B1(e, t, n) {
    Sd(e.x, t.x, n.x), Sd(e.y, t.y, n.y)
}

function kd(e, t, n) {
    e.min = t.min - n.min, e.max = e.min + xe(t)
}

function Ar(e, t, n) {
    kd(e.x, t.x, n.x), kd(e.y, t.y, n.y)
}

function Fe(e) {
    return [e("x"), e("y")]
}
const Fm = ({
        current: e
    }) => e ? e.ownerDocument.defaultView : null,
    Cd = (e, t) => Math.abs(e - t);

function U1(e, t) {
    const n = Cd(e.x, t.x),
        r = Cd(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Im {
    constructor(t, n, {
        transformPagePoint: r,
        contextWindow: i = window,
        dragSnapToOrigin: s = !1,
        distanceThreshold: o = 3
    } = {}) {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const h = Ro(this.lastMoveEventInfo, this.history),
                    y = this.startEvent !== null,
                    v = U1(h.offset, {
                        x: 0,
                        y: 0
                    }) >= this.distanceThreshold;
                if (!y && !v) return;
                const {
                    point: x
                } = h, {
                    timestamp: j
                } = ce;
                this.history.push({
                    ...x,
                    timestamp: j
                });
                const {
                    onStart: m,
                    onMove: p
                } = this.handlers;
                y || (m && m(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), p && p(this.lastMoveEvent, h)
            }, this.handlePointerMove = (h, y) => {
                this.lastMoveEvent = h, this.lastMoveEventInfo = Mo(y, this.transformPagePoint), $.update(this.updatePoint, !0)
            }, this.handlePointerUp = (h, y) => {
                this.end();
                const {
                    onEnd: v,
                    onSessionEnd: x,
                    resumeAnimation: j
                } = this.handlers;
                if (this.dragSnapToOrigin && j && j(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const m = Ro(h.type === "pointercancel" ? this.lastMoveEventInfo : Mo(y, this.transformPagePoint), this.history);
                this.startEvent && v && v(h, m), x && x(h, m)
            }, !vu(t)) return;
        this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = i || window;
        const a = li(t),
            l = Mo(a, this.transformPagePoint),
            {
                point: u
            } = l,
            {
                timestamp: d
            } = ce;
        this.history = [{
            ...u,
            timestamp: d
        }];
        const {
            onSessionStart: f
        } = n;
        f && f(t, Ro(l, this.history)), this.removeListeners = si(jr(this.contextWindow, "pointermove", this.handlePointerMove), jr(this.contextWindow, "pointerup", this.handlePointerUp), jr(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(), It(this.updatePoint)
    }
}

function Mo(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}

function Ed(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}

function Ro({
    point: e
}, t) {
    return {
        point: e,
        delta: Ed(e, Om(t)),
        offset: Ed(e, $1(t)),
        velocity: H1(t, .1)
    }
}

function $1(e) {
    return e[0]
}

function Om(e) {
    return e[e.length - 1]
}

function H1(e, t) {
    if (e.length < 2) return {
        x: 0,
        y: 0
    };
    let n = e.length - 1,
        r = null;
    const i = Om(e);
    for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > rt(t)));) n--;
    if (!r) return {
        x: 0,
        y: 0
    };
    const s = it(i.timestamp - r.timestamp);
    if (s === 0) return {
        x: 0,
        y: 0
    };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
}

function W1(e, {
    min: t,
    max: n
}, r) {
    return t !== void 0 && e < t ? e = r ? K(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? K(n, e, r.max) : Math.min(e, n)), e
}

function Td(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}

function K1(e, {
    top: t,
    left: n,
    bottom: r,
    right: i
}) {
    return {
        x: Td(e.x, n, i),
        y: Td(e.y, t, r)
    }
}

function Nd(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}

function q1(e, t) {
    return {
        x: Nd(e.x, t.x),
        y: Nd(e.y, t.y)
    }
}

function G1(e, t) {
    let n = .5;
    const r = xe(e),
        i = xe(t);
    return i > r ? n = Gr(t.min, t.max - r, e.min) : r > i && (n = Gr(e.min, e.max - i, t.min)), mt(0, 1, n)
}

function Q1(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Ya = .35;

function X1(e = Ya) {
    return e === !1 ? e = 0 : e === !0 && (e = Ya), {
        x: jd(e, "left", "right"),
        y: jd(e, "top", "bottom")
    }
}

function jd(e, t, n) {
    return {
        min: Pd(e, t),
        max: Pd(e, n)
    }
}

function Pd(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Y1 = new WeakMap;
class Z1 {
    constructor(t) {
        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = J(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
    }
    start(t, {
        snapToCursor: n = !1,
        distanceThreshold: r
    } = {}) {
        const {
            presenceContext: i
        } = this.visualElement;
        if (i && i.isPresent === !1) return;
        const s = f => {
                const {
                    dragSnapToOrigin: h
                } = this.getProps();
                h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(li(f).point)
            },
            o = (f, h) => {
                const {
                    drag: y,
                    dragPropagation: v,
                    onDragStart: x
                } = this.getProps();
                if (y && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = ox(y), !this.openDragLock)) return;
                this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe(m => {
                    let p = this.getAxisMotionValue(m).get() || 0;
                    if (st.test(p)) {
                        const {
                            projection: g
                        } = this.visualElement;
                        if (g && g.layout) {
                            const w = g.layout.layoutBox[m];
                            w && (p = xe(w) * (parseFloat(p) / 100))
                        }
                    }
                    this.originPoint[m] = p
                }), x && $.postRender(() => x(f, h)), Qa(this.visualElement, "transform");
                const {
                    animationState: j
                } = this.visualElement;
                j && j.setActive("whileDrag", !0)
            },
            a = (f, h) => {
                this.latestPointerEvent = f, this.latestPanInfo = h;
                const {
                    dragPropagation: y,
                    dragDirectionLock: v,
                    onDirectionLock: x,
                    onDrag: j
                } = this.getProps();
                if (!y && !this.openDragLock) return;
                const {
                    offset: m
                } = h;
                if (v && this.currentDirection === null) {
                    this.currentDirection = J1(m), this.currentDirection !== null && x && x(this.currentDirection);
                    return
                }
                this.updateAxis("x", h.point, m), this.updateAxis("y", h.point, m), this.visualElement.render(), j && j(f, h)
            },
            l = (f, h) => {
                this.latestPointerEvent = f, this.latestPanInfo = h, this.stop(f, h), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            u = () => Fe(f => {
                var h;
                return this.getAnimationState(f) === "paused" && ((h = this.getAxisMotionValue(f).animation) == null ? void 0 : h.play())
            }),
            {
                dragSnapToOrigin: d
            } = this.getProps();
        this.panSession = new Im(t, {
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: d,
            distanceThreshold: r,
            contextWindow: Fm(this.visualElement)
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent,
            i = n || this.latestPanInfo,
            s = this.isDragging;
        if (this.cancel(), !s || !i || !r) return;
        const {
            velocity: o
        } = i;
        this.startAnimation(o);
        const {
            onDragEnd: a
        } = this.getProps();
        a && $.postRender(() => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {
            projection: t,
            animationState: n
        } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
        const {
            dragPropagation: r
        } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {
            drag: i
        } = this.getProps();
        if (!r || !Di(t, i, this.currentDirection)) return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = W1(o, this.constraints[t], this.elastic[t])), s.set(o)
    }
    resolveConstraints() {
        var s;
        const {
            dragConstraints: t,
            dragElastic: n
        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout, i = this.constraints;
        t && jn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = K1(r.layoutBox, t) : this.constraints = !1, this.elastic = X1(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Fe(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Q1(r.layoutBox[o], this.constraints[o]))
        })
    }
    resolveRefConstraints() {
        const {
            dragConstraints: t,
            onMeasureDragConstraints: n
        } = this.getProps();
        if (!t || !jn(t)) return !1;
        const r = t.current,
            {
                projection: i
            } = this.visualElement;
        if (!i || !i.layout) return !1;
        const s = e1(r, i.root, this.visualElement.getTransformPagePoint());
        let o = q1(i.layout.layoutBox, s);
        if (n) {
            const a = n(Yx(o));
            this.hasMutatedConstraints = !!a, a && (o = Sm(a))
        }
        return o
    }
    startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: i,
            dragTransition: s,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a
        } = this.getProps(), l = this.constraints || {}, u = Fe(d => {
            if (!Di(d, n, this.currentDirection)) return;
            let f = l && l[d] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6,
                y = i ? 40 : 1e7,
                v = {
                    type: "inertia",
                    velocity: r ? t[d] : 0,
                    bounceStiffness: h,
                    bounceDamping: y,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...s,
                    ...f
                };
            return this.startAxisValueAnimation(d, v)
        });
        return Promise.all(u).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Qa(this.visualElement, t), r.start(Au(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Fe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Fe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause()
        })
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps(),
            i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Fe(n => {
            const {
                drag: r
            } = this.getProps();
            if (!Di(n, r, this.currentDirection)) return;
            const {
                projection: i
            } = this.visualElement, s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {
                    min: o,
                    max: a
                } = i.layout.layoutBox[n];
                s.set(t[n] - K(o, a, .5))
            }
        })
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const {
            drag: t,
            dragConstraints: n
        } = this.getProps(), {
            projection: r
        } = this.visualElement;
        if (!jn(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Fe(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = G1({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        });
        const {
            transformTemplate: s
        } = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Fe(o => {
            if (!Di(o, t, null)) return;
            const a = this.getAxisMotionValue(o),
                {
                    min: l,
                    max: u
                } = this.constraints[o];
            a.set(K(l, u, i[o]))
        })
    }
    addListeners() {
        if (!this.visualElement.current) return;
        Y1.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = jr(t, "pointerdown", l => {
                const {
                    drag: u,
                    dragListener: d = !0
                } = this.getProps();
                u && d && this.start(l)
            }),
            r = () => {
                const {
                    dragConstraints: l
                } = this.getProps();
                jn(l) && l.current && (this.constraints = this.resolveRefConstraints())
            },
            {
                projection: i
            } = this.visualElement,
            s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), $.read(r);
        const o = Jr(window, "resize", () => this.scalePositionWithinConstraints()),
            a = i.addEventListener("didUpdate", ({
                delta: l,
                hasLayoutChanged: u
            }) => {
                this.isDragging && u && (Fe(d => {
                    const f = this.getAxisMotionValue(d);
                    f && (this.originPoint[d] += l[d].translate, f.set(f.get() + l[d].translate))
                }), this.visualElement.render())
            });
        return () => {
            o(), n(), s(), a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: i = !1,
                dragConstraints: s = !1,
                dragElastic: o = Ya,
                dragMomentum: a = !0
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}

function Di(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}

function J1(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
class ew extends Ut {
    constructor(t) {
        super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new Z1(t)
    }
    mount() {
        const {
            dragControls: t
        } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners()
    }
}
const Ad = e => (t, n) => {
    e && $.postRender(() => e(t, n))
};
class tw extends Ut {
    constructor() {
        super(...arguments), this.removePointerDownListener = Be
    }
    onPointerDown(t) {
        this.session = new Im(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Fm(this.node)
        })
    }
    createPanHandlers() {
        const {
            onPanSessionStart: t,
            onPanStart: n,
            onPan: r,
            onPanEnd: i
        } = this.node.getProps();
        return {
            onSessionStart: Ad(t),
            onStart: Ad(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session, i && $.postRender(() => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = jr(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end()
    }
}
const Xi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};

function bd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const cr = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (D.test(e)) e = parseFloat(e);
                else return e;
            const n = bd(e, t.target.x),
                r = bd(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    nw = {
        correct: (e, {
            treeScale: t,
            projectionDelta: n
        }) => {
            const r = e,
                i = Ot.parse(e);
            if (i.length > 5) return r;
            const s = Ot.createTransformer(e),
                o = typeof i[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            i[0 + o] /= a, i[1 + o] /= l;
            const u = K(a, l, .5);
            return typeof i[2 + o] == "number" && (i[2 + o] /= u), typeof i[3 + o] == "number" && (i[3 + o] /= u), s(i)
        }
    };
let Do = !1;
class rw extends C.Component {
    componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: i
        } = this.props, {
            projection: s
        } = t;
        Tx(iw), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), Do && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })), Xi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: i,
            isPresent: s
        } = this.props, {
            projection: o
        } = r;
        return o && (o.isPresent = s, Do = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || $.postRender(() => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }))), null
    }
    componentDidUpdate() {
        const {
            projection: t
        } = this.props.visualElement;
        t && (t.root.didUpdate(), yu.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }))
    }
    componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r
        } = this.props, {
            projection: i
        } = t;
        Do = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {
            safeToRemove: t
        } = this.props;
        t && t()
    }
    render() {
        return null
    }
}

function _m(e) {
    const [t, n] = am(), r = C.useContext(Xl);
    return c.jsx(rw, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: C.useContext(xm),
        isPresent: t,
        safeToRemove: n
    })
}
const iw = {
    borderRadius: {
        ...cr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: cr,
    borderTopRightRadius: cr,
    borderBottomLeftRadius: cr,
    borderBottomRightRadius: cr,
    boxShadow: nw
};

function sw(e, t, n) {
    const r = ge(e) ? e : Wn(e);
    return r.start(Au("", r, t, n)), r.animation
}
const ow = (e, t) => e.depth - t.depth;
class aw {
    constructor() {
        this.children = [], this.isDirty = !1
    }
    add(t) {
        Jl(this.children, t), this.isDirty = !0
    }
    remove(t) {
        eu(this.children, t), this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(ow), this.isDirty = !1, this.children.forEach(t)
    }
}

function lw(e, t) {
    const n = Te.now(),
        r = ({
            timestamp: i
        }) => {
            const s = i - n;
            s >= t && (It(r), e(s - t))
        };
    return $.setup(r, !0), () => It(r)
}
const zm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    uw = zm.length,
    Md = e => typeof e == "string" ? parseFloat(e) : e,
    Rd = e => typeof e == "number" || D.test(e);

function cw(e, t, n, r, i, s) {
    i ? (e.opacity = K(0, n.opacity ?? 1, dw(r)), e.opacityExit = K(t.opacity ?? 1, 0, fw(r))) : s && (e.opacity = K(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < uw; o++) {
        const a = `border${zm[o]}Radius`;
        let l = Dd(t, a),
            u = Dd(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0), u || (u = 0), l === 0 || u === 0 || Rd(l) === Rd(u) ? (e[a] = Math.max(K(Md(l), Md(u), r), 0), (st.test(u) || st.test(l)) && (e[a] += "%")) : e[a] = u
    }(t.rotate || n.rotate) && (e.rotate = K(t.rotate || 0, n.rotate || 0, r))
}

function Dd(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const dw = Bm(0, .5, jp),
    fw = Bm(.5, .95, Be);

function Bm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(Gr(e, t, r))
}

function Vd(e, t) {
    e.min = t.min, e.max = t.max
}

function Le(e, t) {
    Vd(e.x, t.x), Vd(e.y, t.y)
}

function Ld(e, t) {
    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
}

function Fd(e, t, n, r, i) {
    return e -= t, e = Ns(e, 1 / n, r), i !== void 0 && (e = Ns(e, 1 / i, r)), e
}

function hw(e, t = 0, n = 1, r = .5, i, s = e, o = e) {
    if (st.test(t) && (t = parseFloat(t), t = K(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
    let a = K(s.min, s.max, r);
    e === s && (a -= t), e.min = Fd(e.min, t, n, a, i), e.max = Fd(e.max, t, n, a, i)
}

function Id(e, t, [n, r, i], s, o) {
    hw(e, t[n], t[r], t[i], t.scale, s, o)
}
const pw = ["x", "scaleX", "originX"],
    mw = ["y", "scaleY", "originY"];

function Od(e, t, n, r) {
    Id(e.x, t, pw, n ? n.x : void 0, r ? r.x : void 0), Id(e.y, t, mw, n ? n.y : void 0, r ? r.y : void 0)
}

function _d(e) {
    return e.translate === 0 && e.scale === 1
}

function Um(e) {
    return _d(e.x) && _d(e.y)
}

function zd(e, t) {
    return e.min === t.min && e.max === t.max
}

function gw(e, t) {
    return zd(e.x, t.x) && zd(e.y, t.y)
}

function Bd(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}

function $m(e, t) {
    return Bd(e.x, t.x) && Bd(e.y, t.y)
}

function Ud(e) {
    return xe(e.x) / xe(e.y)
}

function $d(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class yw {
    constructor() {
        this.members = []
    }
    add(t) {
        Jl(this.members, t), t.scheduleRender()
    }
    remove(t) {
        if (eu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0) return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {
                crossfade: i
            } = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {
                options: n,
                resumingFrom: r
            } = t;
            n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete()
        })
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}

function vw(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
        s = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1/t.x}, ${1/t.y}) `), n) {
        const {
            transformPerspective: u,
            rotate: d,
            rotateX: f,
            rotateY: h,
            skewX: y,
            skewY: v
        } = n;
        u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), y && (r += `skewX(${y}deg) `), v && (r += `skewY(${v}deg) `)
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none"
}
const Vo = ["", "X", "Y", "Z"],
    xw = 1e3;
let ww = 0;

function Lo(e, t, n, r) {
    const {
        latestValues: i
    } = t;
    i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0))
}

function Hm(e) {
    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
    const {
        visualElement: t
    } = e.options;
    if (!t) return;
    const n = Am(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {
            layout: i,
            layoutId: s
        } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", $, !(i || s))
    }
    const {
        parent: r
    } = e;
    r && !r.hasCheckedOptimisedAppear && Hm(r)
}

function Wm({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i
}) {
    return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
            this.id = ww++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                x: 1,
                y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
                this.projectionUpdateScheduled = !1, this.nodes.forEach(Cw), this.nodes.forEach(jw), this.nodes.forEach(Pw), this.nodes.forEach(Ew)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new aw)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new nu), this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance) return;
            this.isSVG = om(o) && !fx(o), this.instance = o;
            const {
                layoutId: a,
                layout: l,
                visualElement: u
            } = this.options;
            if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
                let d, f = 0;
                const h = () => this.root.updateBlockedByResize = !1;
                $.read(() => {
                    f = window.innerWidth
                }), e(o, () => {
                    const y = window.innerWidth;
                    y !== f && (f = y, this.root.updateBlockedByResize = !0, d && d(), d = lw(h, 250), Xi.hasAnimatedSinceResize && (Xi.hasAnimatedSinceResize = !1, this.nodes.forEach(Kd)))
                })
            }
            a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({
                delta: d,
                hasLayoutChanged: f,
                hasRelativeLayoutChanged: h,
                layout: y
            }) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0, this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || u.getDefaultTransition() || Dw,
                    {
                        onLayoutAnimationStart: x,
                        onLayoutAnimationComplete: j
                    } = u.getProps(),
                    m = !this.targetLayout || !$m(this.targetLayout, y),
                    p = !f && h;
                if (this.options.layoutRoot || this.resumeFrom || p || f && (m || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                    const g = {
                        ...mu(v, "layout"),
                        onPlay: x,
                        onComplete: j
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (g.delay = 0, g.type = !1), this.startAnimation(g), this.setAnimationOrigin(d, p)
                } else f || Kd(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = y
            })
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), It(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Aw), this.animationId++)
        }
        getTransformTemplate() {
            const {
                visualElement: o
            } = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Hm(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let d = 0; d < this.path.length; d++) {
                const f = this.path[d];
                f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1)
            }
            const {
                layoutId: a,
                layout: l
            } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Hd);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Wd);
                return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Nw), this.nodes.forEach(Sw), this.nodes.forEach(kw)) : this.nodes.forEach(Wd), this.clearAllSnapshots();
            const a = Te.now();
            ce.delta = mt(0, 1e3 / 60, a - ce.timestamp), ce.timestamp = a, ce.isProcessing = !0, Co.update.process(ce), Co.preRender.process(ce), Co.render.process(ce), ce.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, yu.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Tw), this.sharedNodes.forEach(bw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, $.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            $.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !xe(this.snapshot.measuredBox.x) && !xe(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = J(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            const {
                visualElement: a
            } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i) return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !Um(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                d = u !== this.prevTransformTemplateValue;
            o && this.instance && (a || Qt(this.latestValues) || d) && (i(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)), Vw(l), {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var u;
            const {
                visualElement: o
            } = this.options;
            if (!o) return J();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Lw))) {
                const {
                    scroll: d
                } = this.root;
                d && (Pn(a.x, d.offset.x), Pn(a.y, d.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = J();
            if (Le(a, o), (l = this.scroll) != null && l.wasRoot) return a;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u],
                    {
                        scroll: f,
                        options: h
                    } = d;
                d !== this.root && f && h.layoutScroll && (f.wasRoot && Le(a, o), Pn(a.x, f.offset.x), Pn(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(o, a = !1) {
            const l = J();
            Le(l, o);
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                !a && d.options.layoutScroll && d.scroll && d !== d.root && An(l, {
                    x: -d.scroll.offset.x,
                    y: -d.scroll.offset.y
                }), Qt(d.latestValues) && An(l, d.latestValues)
            }
            return Qt(this.latestValues) && An(l, this.latestValues), l
        }
        removeTransform(o) {
            const a = J();
            Le(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                if (!u.instance || !Qt(u.latestValues)) continue;
                Wa(u.latestValues) && u.updateSnapshot();
                const d = J(),
                    f = u.measurePageBox();
                Le(d, f), Od(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d)
            }
            return Qt(this.latestValues) && Od(a, this.latestValues), a
        }
        setTargetDelta(o) {
            this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o = !1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (h = this.parent) != null && h.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            const {
                layout: d,
                layoutId: f
            } = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = ce.timestamp, !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = J(), this.relativeTargetOrigin = J(), Ar(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = J(), this.targetWithTransforms = J()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), B1(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Le(this.target, this.layout.layoutBox), Cm(this.target, this.targetDelta)) : Le(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const y = this.getClosestProjectingParent();
                    y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y, this.forceRelativeParentToResolveTarget(), this.relativeTarget = J(), this.relativeTargetOrigin = J(), Ar(this.relativeTargetOrigin, this.target, y.target), Le(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Wa(this.parent.latestValues) || km(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var v;
            const o = this.getLead(),
                a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (v = this.parent) != null && v.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === ce.timestamp && (l = !1), l) return;
            const {
                layout: u,
                layoutId: d
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d)) return;
            Le(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                h = this.treeScale.y;
            Jx(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = J());
            const {
                target: y
            } = o;
            if (!y) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return
            }!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ld(this.prevProjectionDelta.x, this.projectionDelta.x), Ld(this.prevProjectionDelta.y, this.projectionDelta.y)), Pr(this.projectionDelta, this.layoutCorrected, y, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !$d(this.projectionDelta.x, this.prevProjectionDelta.x) || !$d(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", y))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o = !0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(), o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = bn(), this.projectionDelta = bn(), this.projectionDeltaWithTransform = bn()
        }
        setAnimationOrigin(o, a = !1) {
            const l = this.snapshot,
                u = l ? l.latestValues : {},
                d = {
                    ...this.latestValues
                },
                f = bn();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
            const h = J(),
                y = l ? l.source : void 0,
                v = this.layout ? this.layout.source : void 0,
                x = y !== v,
                j = this.getStack(),
                m = !j || j.members.length <= 1,
                p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(Rw));
            this.animationProgress = 0;
            let g;
            this.mixTargetDelta = w => {
                const S = w / 1e3;
                qd(f.x, o.x, S), qd(f.y, o.y, S), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ar(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Mw(this.relativeTarget, this.relativeTargetOrigin, h, S), g && gw(this.relativeTarget, g) && (this.isProjectionDirty = !1), g || (g = J()), Le(g, this.relativeTarget)), x && (this.animationValues = d, cw(d, u, this.latestValues, S, p, m)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = S
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (It(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = $.update(() => {
                Xi.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Wn(0)), this.currentAnimation = sw(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: d => {
                        this.mixTargetDelta(d), o.onUpdate && o.onUpdate(d)
                    },
                    onStop: () => {},
                    onComplete: () => {
                        o.onComplete && o.onComplete(), this.completeAnimation()
                    }
                }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(xw), this.currentAnimation.stop()), this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {
                targetWithTransforms: a,
                target: l,
                layout: u,
                latestValues: d
            } = o;
            if (!(!a || !l || !u)) {
                if (this !== o && this.layout && u && Km(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    l = this.target || J();
                    const f = xe(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min, l.x.max = l.x.min + f;
                    const h = xe(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min, l.y.max = l.y.min + h
                }
                Le(a, l), An(a, d), Pr(this.projectionDeltaWithTransform, this.layoutCorrected, a, d)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new yw), this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {
                layoutId: o
            } = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
        }
        getStack() {
            const {
                layoutId: o
            } = this.options;
            if (o) return this.root.sharedNodes.get(o)
        }
        promote({
            needsReset: o,
            transition: a,
            preserveFollowOpacity: l
        } = {}) {
            const u = this.getStack();
            u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {
                visualElement: o
            } = this.options;
            if (!o) return;
            let a = !1;
            const {
                latestValues: l
            } = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a) return;
            const u = {};
            l.z && Lo("z", o, u, this.animationValues);
            for (let d = 0; d < Vo.length; d++) Lo(`rotate${Vo[d]}`, o, u, this.animationValues), Lo(`skew${Vo[d]}`, o, u, this.animationValues);
            o.render();
            for (const d in u) o.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = Qi(a == null ? void 0 : a.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = Qi(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Qt(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const d = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let f = vw(this.projectionDeltaWithTransform, this.treeScale, d);
            l && (f = l(d, f)), o.transform = f;
            const {
                x: h,
                y
            } = this.projectionDelta;
            o.transformOrigin = `${h.origin*100}% ${y.origin*100}% 0`, u.animationValues ? o.opacity = u === this ? d.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : o.opacity = u === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const v in Zr) {
                if (d[v] === void 0) continue;
                const {
                    correct: x,
                    applyTo: j,
                    isCSSVariable: m
                } = Zr[v], p = f === "none" ? d[v] : x(d[v], u);
                if (j) {
                    const g = j.length;
                    for (let w = 0; w < g; w++) o[j[w]] = p
                } else m ? this.options.visualElement.renderState.vars[v] = p : o[v] = p
            }
            this.options.layoutId && (o.pointerEvents = u === this ? Qi(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }), this.root.nodes.forEach(Hd), this.root.sharedNodes.clear()
        }
    }
}

function Sw(e) {
    e.updateLayout()
}

function kw(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {
            layoutBox: r,
            measuredBox: i
        } = e.layout, {
            animationType: s
        } = e.options, o = t.source !== e.layout.source;
        s === "size" ? Fe(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f],
                y = xe(h);
            h.min = r[f].min, h.max = h.min + y
        }) : Km(s, t.layoutBox, r) && Fe(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f],
                y = xe(r[f]);
            h.max = h.min + y, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        });
        const a = bn();
        Pr(a, r, t.layoutBox);
        const l = bn();
        o ? Pr(l, e.applyTransform(i, !0), t.measuredBox) : Pr(l, r, t.layoutBox);
        const u = !Um(a);
        let d = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {
                    snapshot: h,
                    layout: y
                } = f;
                if (h && y) {
                    const v = J();
                    Ar(v, t.layoutBox, h.layoutBox);
                    const x = J();
                    Ar(x, r, y.layoutBox), $m(v, x) || (d = !0), f.options.layoutRoot && (e.relativeTarget = x, e.relativeTargetOrigin = v, e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: d
        })
    } else if (e.isLead()) {
        const {
            onExitComplete: r
        } = e.options;
        r && r()
    }
    e.options.transition = void 0
}

function Cw(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}

function Ew(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}

function Tw(e) {
    e.clearSnapshot()
}

function Hd(e) {
    e.clearMeasurements()
}

function Wd(e) {
    e.isLayoutDirty = !1
}

function Nw(e) {
    const {
        visualElement: t
    } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
}

function Kd(e) {
    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
}

function jw(e) {
    e.resolveTargetDelta()
}

function Pw(e) {
    e.calcProjection()
}

function Aw(e) {
    e.resetSkewAndRotation()
}

function bw(e) {
    e.removeLeadSnapshot()
}

function qd(e, t, n) {
    e.translate = K(t.translate, 0, n), e.scale = K(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
}

function Gd(e, t, n, r) {
    e.min = K(t.min, n.min, r), e.max = K(t.max, n.max, r)
}

function Mw(e, t, n, r) {
    Gd(e.x, t.x, n.x, r), Gd(e.y, t.y, n.y, r)
}

function Rw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const Dw = {
        duration: .45,
        ease: [.4, 0, .1, 1]
    },
    Qd = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    Xd = Qd("applewebkit/") && !Qd("chrome/") ? Math.round : Be;

function Yd(e) {
    e.min = Xd(e.min), e.max = Xd(e.max)
}

function Vw(e) {
    Yd(e.x), Yd(e.y)
}

function Km(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !z1(Ud(t), Ud(n), .2)
}

function Lw(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const Fw = Wm({
        attachResizeListener: (e, t) => Jr(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Fo = {
        current: void 0
    },
    qm = Wm({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Fo.current) {
                const e = new Fw({});
                e.mount(window), e.setOptions({
                    layoutScroll: !0
                }), Fo.current = e
            }
            return Fo.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
    }),
    Iw = {
        pan: {
            Feature: tw
        },
        drag: {
            Feature: ew,
            ProjectionNode: qm,
            MeasureLayout: _m
        }
    };

function Zd(e, t, n) {
    const {
        props: r
    } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n,
        s = r[i];
    s && $.postRender(() => s(t, li(t)))
}
class Ow extends Ut {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = ax(t, (n, r) => (Zd(this.node, r, "Start"), i => Zd(this.node, i, "End"))))
    }
    unmount() {}
}
class _w extends Ut {
    constructor() {
        super(...arguments), this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }!t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
    }
    mount() {
        this.unmount = si(Jr(this.node.current, "focus", () => this.onFocus()), Jr(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}

function Jd(e, t, n) {
    const {
        props: r
    } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n),
        s = r[i];
    s && $.postRender(() => s(t, li(t)))
}
class zw extends Ut {
    mount() {
        const {
            current: t
        } = this.node;
        t && (this.unmount = dx(t, (n, r) => (Jd(this.node, r, "Start"), (i, {
            success: s
        }) => Jd(this.node, i, s ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Za = new WeakMap,
    Io = new WeakMap,
    Bw = e => {
        const t = Za.get(e.target);
        t && t(e)
    },
    Uw = e => {
        e.forEach(Bw)
    };

function $w({
    root: e,
    ...t
}) {
    const n = e || document;
    Io.has(n) || Io.set(n, {});
    const r = Io.get(n),
        i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Uw, {
        root: e,
        ...t
    })), r[i]
}

function Hw(e, t, n) {
    const r = $w(t);
    return Za.set(e, n), r.observe(e), () => {
        Za.delete(e), r.unobserve(e)
    }
}
const Ww = {
    some: 0,
    all: 1
};
class Kw extends Ut {
    constructor() {
        super(...arguments), this.hasEnteredView = !1, this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {
            viewport: t = {}
        } = this.node.getProps(), {
            root: n,
            margin: r,
            amount: i = "some",
            once: s
        } = t, o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : Ww[i]
        }, a = l => {
            const {
                isIntersecting: u
            } = l;
            if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView)) return;
            u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {
                onViewportEnter: d,
                onViewportLeave: f
            } = this.node.getProps(), h = u ? d : f;
            h && h(l)
        };
        return Hw(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const {
            props: t,
            prevProps: n
        } = this.node;
        ["amount", "margin", "root"].some(qw(t, n)) && this.startObserver()
    }
    unmount() {}
}

function qw({
    viewport: e = {}
}, {
    viewport: t = {}
} = {}) {
    return n => e[n] !== t[n]
}
const Gw = {
        inView: {
            Feature: Kw
        },
        tap: {
            Feature: zw
        },
        focus: {
            Feature: _w
        },
        hover: {
            Feature: Ow
        }
    },
    Qw = {
        layout: {
            ProjectionNode: qm,
            MeasureLayout: _m
        }
    },
    Xw = {
        ...V1,
        ...Gw,
        ...Iw,
        ...Qw
    },
    P = Xx(Xw, u1),
    Yw = () => {
        const e = C.useRef(null);
        return C.useEffect(() => {
            const t = e.current;
            if (!t) return;
            const n = t.getContext("2d");
            if (!n) return;
            const r = () => {
                t.width = window.innerWidth, t.height = window.innerHeight
            };
            r(), window.addEventListener("resize", r);
            const i = [];
            for (let o = 0; o < 50; o++) i.push({
                x: Math.random() * t.width,
                y: Math.random() * t.height,
                vx: (Math.random() - .5) * .5,
                vy: (Math.random() - .5) * .5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * .5 + .2
            });
            const s = () => {
                n.clearRect(0, 0, t.width, t.height), i.forEach(o => {
                    o.x += o.vx, o.y += o.vy, (o.x < 0 || o.x > t.width) && (o.vx *= -1), (o.y < 0 || o.y > t.height) && (o.vy *= -1), n.beginPath(), n.arc(o.x, o.y, o.size, 0, Math.PI * 2), n.fillStyle = `rgba(231, 199, 95, ${o.opacity})`, n.fill()
                }), requestAnimationFrame(s)
            };
            return s(), () => {
                window.removeEventListener("resize", r)
            }
        }, []), c.jsx("canvas", {
            ref: e,
            className: "absolute inset-0 pointer-events-none",
            style: {
                zIndex: 1
            }
        })
    },
    Zw = ({
        text: e,
        speed: t = 50,
        className: n = "",
        onComplete: r
    }) => {
        const [i, s] = C.useState(""), [o, a] = C.useState(0);
        return C.useEffect(() => {
            if (o < e.length) {
                const l = setTimeout(() => {
                    s(u => u + e[o]), a(u => u + 1)
                }, t);
                return () => clearTimeout(l)
            } else r && r()
        }, [o, e, t, r]), c.jsxs("span", {
            className: n,
            children: [i, c.jsx("span", {
                className: "animate-pulse",
                children: "|"
            })]
        })
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Jw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e2 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    Q = (e, t) => {
        const n = C.forwardRef(({
            color: r = "currentColor",
            size: i = 24,
            strokeWidth: s = 2,
            absoluteStrokeWidth: o,
            className: a = "",
            children: l,
            ...u
        }, d) => C.createElement("svg", {
            ref: d,
            ...Jw,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? Number(s) * 24 / Number(i) : s,
            className: ["lucide", `lucide-${e2(e)}`, a].join(" "),
            ...u
        }, [...t.map(([f, h]) => C.createElement(f, h)), ...Array.isArray(l) ? l : [l]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t2 = Q("AlertTriangle", [
    ["path", {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
        key: "c3ski4"
    }],
    ["path", {
        d: "M12 9v4",
        key: "juzpu7"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = Q("ArrowRight", [
    ["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }],
    ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n2 = Q("Award", [
    ["circle", {
        cx: "12",
        cy: "8",
        r: "6",
        key: "1vp47v"
    }],
    ["path", {
        d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",
        key: "em7aur"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ef = Q("Brain", [
    ["path", {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
    }],
    ["path", {
        d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
        key: "ep3f8r"
    }],
    ["path", {
        d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
        key: "1p4c4q"
    }],
    ["path", {
        d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
        key: "tmeiqw"
    }],
    ["path", {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
    }],
    ["path", {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
    }],
    ["path", {
        d: "M19.938 10.5a4 4 0 0 1 .585.396",
        key: "1qfode"
    }],
    ["path", {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
    }],
    ["path", {
        d: "M19.967 17.484A4 4 0 0 1 18 18",
        key: "159ez6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = Q("CheckCircle", [
    ["path", {
        d: "M22 11.08V12a10 10 0 1 1-5.93-9.14",
        key: "g774vq"
    }],
    ["path", {
        d: "m9 11 3 3L22 4",
        key: "1pflzl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r2 = Q("ChevronDown", [
    ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i2 = Q("ChevronLeft", [
    ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = Q("ChevronRight", [
    ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = Q("Clock", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["polyline", {
        points: "12 6 12 12 16 14",
        key: "68esgv"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o2 = Q("DollarSign", [
    ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "22",
        key: "7eqyqh"
    }],
    ["path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        key: "1b0p4s"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = Q("HelpCircle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
        key: "1u773s"
    }],
    ["path", {
        d: "M12 17h.01",
        key: "p32p05"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a2 = Q("Lightbulb", [
    ["path", {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb"
    }],
    ["path", {
        d: "M9 18h6",
        key: "x1upvd"
    }],
    ["path", {
        d: "M10 22h4",
        key: "ceow96"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l2 = Q("Lock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = Q("Quote", [
    ["path", {
        d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
        key: "4rm80e"
    }],
    ["path", {
        d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
        key: "10za9r"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = Q("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = Q("Star", [
    ["polygon", {
        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = Q("Target", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c2 = Q("TrendingDown", [
    ["polyline", {
        points: "22 17 13.5 8.5 8.5 13.5 2 7",
        key: "1r2t7k"
    }],
    ["polyline", {
        points: "16 17 22 17 22 11",
        key: "11uiuu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bu = Q("TrendingUp", [
    ["polyline", {
        points: "22 7 13.5 15.5 8.5 10.5 2 17",
        key: "126l90"
    }],
    ["polyline", {
        points: "16 7 22 7 22 13",
        key: "kwv8wd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d2 = Q("Unlock", [
    ["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }],
    ["path", {
        d: "M7 11V7a5 5 0 0 1 9.9-1",
        key: "1mm8w8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = Q("Users", [
    ["path", {
        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
        key: "1yyitq"
    }],
    ["circle", {
        cx: "9",
        cy: "7",
        r: "4",
        key: "nufk8"
    }],
    ["path", {
        d: "M22 21v-2a4 4 0 0 0-3-3.87",
        key: "kshegd"
    }],
    ["path", {
        d: "M16 3.13a4 4 0 0 1 0 7.75",
        key: "1da9ce"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h2 = Q("X", [
    ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }],
    ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = Q("Zap", [
        ["polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }]
    ]),
    p2 = ({
        onCtaClick: e
    }) => {
        const [t, n] = C.useState(!1), [r, i] = C.useState(!1), s = () => {
            const o = document.getElementById("vsl-section");
            o && o.scrollIntoView({
                behavior: "smooth"
            })
        };
        return c.jsxs("section", {
            className: "relative min-h-screen bg-black flex flex-col justify-center items-center px-4 py-20 overflow-hidden",
            children: [c.jsx(Yw, {}), c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60 z-10"
            }), c.jsx("div", {
                className: "absolute inset-0 bg-gradient-radial from-[#E7C75F]/10 via-transparent to-transparent z-10"
            }), c.jsx("div", {
                className: "absolute inset-0 opacity-20 z-0",
                children: c.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `
            linear-gradient(rgba(231, 199, 95, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(231, 199, 95, 0.1) 1px, transparent 1px)
          `,
                        backgroundSize: "50px 50px"
                    }
                })
            }), c.jsxs("div", {
                className: "relative z-20 text-center max-w-6xl mx-auto",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    transition: {
                        duration: 1,
                        delay: .3
                    },
                    className: "mb-8",
                    children: [c.jsxs("h1", {
                        className: "font-black text-4xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight font-['Anton'] tracking-tight",
                        children: [c.jsx("span", {
                            className: "block text-[#E7C75F] drop-shadow-2xl",
                            children: c.jsx(Zw, {
                                text: "SE VOCÊ JÁ TENTOU DE TUDO E NADA FUNCIONOU",
                                speed: 80,
                                onComplete: () => n(!0)
                            })
                        }), t && c.jsx(P.span, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .8
                            },
                            className: "block text-white mt-6 drop-shadow-2xl",
                            children: "ESSA PÁGINA PODE MUDAR A SUA VIDA"
                        })]
                    }), t && c.jsx(P.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .8,
                            delay: .5
                        },
                        onAnimationComplete: () => i(!0),
                        children: c.jsx("h2", {
                            className: "font-bold text-3xl md:text-5xl lg:text-6xl text-red-500 mb-12 font-['Anton'] drop-shadow-2xl",
                            children: "CHEGA DE DIETAS MALUCAS. EMAGREÇA COM, SAÚDE E RESULTADOS REAIS."
                        })
                    })]
                }), r && c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    className: "mb-12",
                    children: [c.jsxs("p", {
                        className: "text-xl md:text-3xl lg:text-4xl text-white/90 mb-12 max-w-5xl mx-auto leading-relaxed font-medium drop-shadow-lg",
                        children: ["O método mais ", c.jsx("span", {
                            className: "text-[#E7C75F] font-black",
                            children: "RÁPIDO"
                        }), " para se olhar no espeço e finalmente ", c.jsx("span", {
                            className: "text-red-500 font-black",
                            children: "sorrir com orgulho"
                        })]
                    }), c.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto",
                        children: [c.jsxs(P.div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .2
                            },
                            className: "flex items-center space-x-4 bg-black/60 backdrop-blur-sm border border-[#E7C75F]/40 rounded-xl p-6 hover:border-[#E7C75F]/70 transition-all duration-300 hover:transform hover:scale-105",
                            children: [c.jsxs("div", {
                                className: "relative",
                                children: [c.jsx(qn, {
                                    className: "text-[#E7C75F] w-10 h-10 flex-shrink-0"
                                }), c.jsx(P.div, {
                                    animate: {
                                        scale: [1, 1.2, 1]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0
                                    },
                                    className: "absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-sm"
                                })]
                            }), c.jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: "Emagreça Hoje"
                            })]
                        }), c.jsxs(P.div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .4
                            },
                            className: "flex items-center space-x-4 bg-black/60 backdrop-blur-sm border border-[#E7C75F]/40 rounded-xl p-6 hover:border-[#E7C75F]/70 transition-all duration-300 hover:transform hover:scale-105",
                            children: [c.jsxs("div", {
                                className: "relative",
                                children: [c.jsx(bu, {
                                    className: "text-[#E7C75F] w-10 h-10 flex-shrink-0"
                                }), c.jsx(P.div, {
                                    animate: {
                                        scale: [1, 1.2, 1]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                        delay: .5
                                    },
                                    className: "absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-sm"
                                })]
                            }), c.jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: "Método comprovado"
                            })]
                        }), c.jsxs(P.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: .6,
                                delay: .6
                            },
                            className: "flex items-center space-x-4 bg-black/60 backdrop-blur-sm border border-[#E7C75F]/40 rounded-xl p-6 hover:border-[#E7C75F]/70 transition-all duration-300 hover:transform hover:scale-105",
                            children: [c.jsxs("div", {
                                className: "relative",
                                children: [c.jsx(Ps, {
                                    className: "text-[#E7C75F] w-10 h-10 flex-shrink-0"
                                }), c.jsx(P.div, {
                                    animate: {
                                        scale: [1, 1.2, 1]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0,
                                        delay: 1
                                    },
                                    className: "absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-sm"
                                })]
                            }), c.jsx("span", {
                                className: "text-white font-bold text-lg",
                                children: "Foco total em resultados"
                            })]
                        })]
                    }), c.jsxs(P.button, {
                        onClick: s,
                        className: "group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-black hover:to-gray-900 text-black hover:text-[#E7C75F] font-black text-xl md:text-3xl px-16 py-8 rounded-xl transition-all duration-500 transform hover:scale-105 shadow-2xl border-2 border-transparent hover:border-[#E7C75F] overflow-hidden mb-8",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        animate: {
                            boxShadow: ["0 0 20px rgba(231, 199, 95, 0.3)", "0 0 40px rgba(231, 199, 95, 0.6)", "0 0 20px rgba(231, 199, 95, 0.3)"]
                        },
                        transition: {
                            boxShadow: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        },
                        children: [c.jsx("span", {
                            className: "relative z-10",
                            children: "VER COMO FUNCIONA"
                        }), c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        })]
                    }), c.jsxs("div", {
                        className: "flex flex-wrap justify-center gap-6 text-base text-white/70",
                        children: [c.jsxs("div", {
                            className: "flex items-center space-x-1",
                            children: [c.jsx("div", {
                                className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                            }), c.jsx("span", {
                                children: "Acesso imediato"
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center space-x-1",
                            children: [c.jsx("div", {
                                className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                            }), c.jsx("span", {
                                children: "Garantia 30 dias"
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center space-x-1",
                            children: [c.jsx("div", {
                                className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
                            }), c.jsx("span", {
                                children: "Pagamento 100% seguro"
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    m2 = ({
        onCtaClick: e
    }) => {
        C.useState(!1), C.useState(!1);
        const [t, n] = C.useState(0), [r, i] = C.useState(!1), s = C.useRef(null);
        return C.useEffect(() => {
            const o = setTimeout(() => {
                i(!0)
            }, 9e4);
            return () => clearTimeout(o)
        }, []), C.useEffect(() => {
            const o = s.current;
            if (!o) return;
            const a = () => {
                const l = o.currentTime / o.duration * 100;
                n(l)
            };
            return o.addEventListener("timeupdate", a), () => o.removeEventListener("timeupdate", a)
        }, []), c.jsxs("section", {
            id: "vsl-section",
            className: "relative bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 overflow-hidden",
            children: [c.jsxs("div", {
                className: "absolute inset-0",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#E7C75F]/5 via-transparent to-red-500/5"
                }), c.jsx(P.div, {
                    animate: {
                        opacity: [.3, .7, .3]
                    },
                    transition: {
                        duration: 4,
                        repeat: 1 / 0
                    },
                    className: "absolute inset-0 bg-gradient-to-r from-[#E7C75F]/10 via-transparent to-red-500/10"
              
                
                }), r && c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    className: "text-center",
                    children: [c.jsxs("p", {
                        className: "text-white/80 text-lg mb-6",
                        children: ["Viu como é simples? ", c.jsx("span", {
                            className: "text-[#E7C75F] font-bold",
                            children: "Agora é sua vez de destravar!"
                        })]
                    }), c.jsxs(P.button, {
                        onClick: e,
                        className: "group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        animate: {
                            boxShadow: ["0 0 30px rgba(231, 199, 95, 0.5)", "0 0 60px rgba(231, 199, 95, 0.8)", "0 0 30px rgba(231, 199, 95, 0.5)"]
                        },

                    })]
                })]
            })]
        })
    };
var tl = new Map,
    Vi = new WeakMap,
    tf = 0,
    g2 = void 0;

function y2(e) {
    return e ? (Vi.has(e) || (tf += 1, Vi.set(e, tf.toString())), Vi.get(e)) : "0"
}

function v2(e) {
    return Object.keys(e).sort().filter(t => e[t] !== void 0).map(t => `${t}_${t==="root"?y2(e.root):e[t]}`).toString()
}

function x2(e) {
    const t = v2(e);
    let n = tl.get(t);
    if (!n) {
        const r = new Map;
        let i;
        const s = new IntersectionObserver(o => {
            o.forEach(a => {
                var l;
                const u = a.isIntersecting && i.some(d => a.intersectionRatio >= d);
                e.trackVisibility && typeof a.isVisible > "u" && (a.isVisible = u), (l = r.get(a.target)) == null || l.forEach(d => {
                    d(u, a)
                })
            })
        }, e);
        i = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
            id: t,
            observer: s,
            elements: r
        }, tl.set(t, n)
    }
    return n
}

function w2(e, t, n = {}, r = g2) {
    if (typeof window.IntersectionObserver > "u" && r !== void 0) {
        const l = e.getBoundingClientRect();
        return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
            time: 0,
            boundingClientRect: l,
            intersectionRect: l,
            rootBounds: l
        }), () => {}
    }
    const {
        id: i,
        observer: s,
        elements: o
    } = x2(n), a = o.get(e) || [];
    return o.has(e) || o.set(e, a), a.push(t), s.observe(e),
        function() {
            a.splice(a.indexOf(t), 1), a.length === 0 && (o.delete(e), s.unobserve(e)), o.size === 0 && (s.disconnect(), tl.delete(i))
        }
}

function er({
    threshold: e,
    delay: t,
    trackVisibility: n,
    rootMargin: r,
    root: i,
    triggerOnce: s,
    skip: o,
    initialInView: a,
    fallbackInView: l,
    onChange: u
} = {}) {
    var d;
    const [f, h] = C.useState(null), y = C.useRef(u), [v, x] = C.useState({
        inView: !!a,
        entry: void 0
    });
    y.current = u, C.useEffect(() => {
        if (o || !f) return;
        let g;
        return g = w2(f, (w, S) => {
            x({
                inView: w,
                entry: S
            }), y.current && y.current(w, S), S.isIntersecting && s && g && (g(), g = void 0)
        }, {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t
        }, l), () => {
            g && g()
        }
    }, [Array.isArray(e) ? e.toString() : e, f, i, r, s, o, n, l, t]);
    const j = (d = v.entry) == null ? void 0 : d.target,
        m = C.useRef(void 0);
    !f && j && !s && !o && m.current !== j && (m.current = j, x({
        inView: !!a,
        entry: void 0
    }));
    const p = [h, v.inView, v.entry];
    return p.ref = p[0], p.inView = p[1], p.entry = p[2], p
}
const S2 = ({
        onCtaClick: e
    }) => {
        const {
            ref: t,
            inView: n
        } = er({
            threshold: .3,
            triggerOnce: !0
        }), r = [{
            icon: c2,
            text: "Estagnação fisica há anos",
            color: "text-red-500",
            description: "Vendo colegas entrarem em forma na sua frente"
        }, {
            icon: t2,
            text: "Falta de clareza total sobre sua saúde",
            color: "text-orange-500",
            description: "Sem saber que direção tomar"
        }, {
            icon: h2,
            text: "Autosabotagem constante",
            color: "text-red-600",
            description: "Você mesmo destruindo suas chances"
        }, {
            icon: br,
            text: "Ciclo infinito de promessas vazias",
            color: "text-yellow-500",
            description: '"Segunda-feira eu começo" há meses'
        }];
        return c.jsxs("section", {
            ref: t,
            className: "relative bg-gradient-to-b from-black to-gray-900 py-20 px-4 overflow-hidden",
            children: [c.jsxs("div", {
                className: "absolute inset-0",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/20"
                }), c.jsx(P.div, {
                    animate: {
                        background: ["radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 70% 60%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)"]
                    },
                    transition: {
                        duration: 6,
                        repeat: 1 / 0
                    },
                    className: "absolute inset-0"
                })]
            }), c.jsxs("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8
                    },
                    className: "text-center mb-16",
                    children: [c.jsxs(P.h2, {
                        className: "font-black text-4xl md:text-6xl text-white mb-8 font-['Anton']",
                        animate: n ? {
                            textShadow: ["0 0 20px rgba(239, 68, 68, 0.5)", "0 0 40px rgba(239, 68, 68, 0.8)", "0 0 20px rgba(239, 68, 68, 0.5)"]
                        } : {},
                        transition: {
                            duration: 2,
                            repeat: 1 / 0
                        },
                        children: ["PARE DE ", c.jsx("span", {
                            className: "text-red-500",
                            children: "FINGIR"
                        })]
                    }), c.jsxs("p", {
                        className: "text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed",
                        children: ["Que está tudo bem quando você sabe que não está está"]
                    })]
                }), c.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center mb-16",
                    children: [c.jsx(P.div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        animate: n ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: .8,
                            delay: .2
                        },
                        className: "space-y-6",
                        children: r.map((i, s) => c.jsx(P.div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            animate: n ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: .6,
                                delay: .3 + s * .1
                            },
                            className: "group bg-black/60 backdrop-blur-sm border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition-all duration-300 hover:transform hover:scale-105",
                            children: c.jsxs("div", {
                                className: "flex items-start space-x-4",
                                children: [c.jsxs("div", {
                                    className: "relative",
                                    children: [c.jsx(i.icon, {
                                        className: `w-8 h-8 ${i.color} group-hover:scale-110 transition-transform`
                                    }), c.jsx(P.div, {
                                        animate: {
                                            scale: [1, 1.3, 1],
                                            opacity: [.3, .7, .3]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0,
                                            delay: s * .5
                                        },
                                        className: `absolute inset-0 ${i.color} opacity-30 rounded-full blur-sm`
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex-1",
                                    children: [c.jsx("h3", {
                                        className: "text-white text-lg font-bold mb-2",
                                        children: i.text
                                    }), c.jsx("p", {
                                        className: "text-white/60 text-sm",
                                        children: i.description
                                    })]
                                })]
                            })
                        }, s))
                    }), c.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        animate: n ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: .8,
                            delay: .4
                        },
                        className: "relative",
                        children: [c.jsxs("div", {
                            className: "absolute inset-0 rounded-xl overflow-hidden",
                            children: [c.jsx("img", {
                                src: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
                                alt: "Pessoa reflexiva",
                                className: "w-full h-full object-cover opacity-30"
                            }), c.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"
                            })]
                        }), c.jsxs("div", {
                            className: "relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-8",
                            children: [c.jsxs("div", {
                                className: "text-white/90 text-lg leading-relaxed space-y-6",
                                children: [c.jsx(P.p, {
                                    className: "font-semibold text-xl text-[#E7C75F]",
                                    animate: n ? {
                                        scale: [1, 1.05, 1]
                                    } : {},
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0
                                    },
                                    children: '"Eu sei exatamente como você se sente..."'
                                }), c.jsxs("p", {
                                    children: ["Você ", c.jsx("span", {
                                        className: "text-red-400 font-bold",
                                        children: "finge"
                                    }), " que está tudo bem, mas no fundo sabe que está preso no mesmo ciclo há anos."]
                                }), c.jsx(P.div, {
                                    className: "bg-gradient-to-r from-[#E7C75F]/20 to-red-500/20 border-l-4 border-[#E7C75F] p-4 rounded",
                                    animate: n ? {
                                        boxShadow: ["0 0 20px rgba(231, 199, 95, 0.3)", "0 0 40px rgba(231, 199, 95, 0.6)", "0 0 20px rgba(231, 199, 95, 0.3)"]
                                    } : {},
                                    transition: {
                                        duration: 3,
                                        repeat: 1 / 0
                                    },
                                    children: c.jsx("p", {
                                        className: "font-bold text-[#E7C75F] text-xl",
                                        children: 'Clique no botão abaixo e dê o primeiro passo. Sem fingimento. Sem desculpas. Só você, de verdade.'
                                    })
                                })]
                            }), c.jsxs(P.button, {
                                onClick: e,
                                className: "mt-8 w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-[#E7C75F] hover:to-[#d4b84a] text-white hover:text-black font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 group overflow-hidden",
                                whileHover: {
                                    scale: 1.02
                                },
                                whileTap: {
                                    scale: .98
                                },
                                children: [c.jsx("span", {
                                    className: "relative z-10",
                                    children: "CHEGA DE RODAR EM FALSO →"
                                }), c.jsx("div", {
                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                                })]
                            })]
                        })]
                    })]
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    className: "bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-xl p-8 text-center",
                    children: [c.jsx("h3", {
                        className: "text-2xl font-black text-white mb-6 font-['Anton']",
                        children: "VOCÊ NÃO ESTÁ SOZINHO NESSA DOR"
                    }), c.jsxs("div", {
                        className: "grid md:grid-cols-3 gap-6",
                        children: [c.jsxs("div", {
                            className: "text-center",
                            children: [c.jsx("div", {
                                className: "text-4xl font-black text-red-400 mb-2 font-['Anton']",
                                children: "73%"
                            }), c.jsx("p", {
                                className: "text-white/80",
                                children: "Das pessoas se sentem presas na vida"
                            })]
                        }), c.jsxs("div", {
                            className: "text-center",
                            children: [c.jsx("div", {
                                className: "text-4xl font-black text-orange-400 mb-2 font-['Anton']",
                                children: "5+"
                            }), c.jsx("p", {
                                className: "text-white/80",
                                children: "Anos na mesma situação em média"
                            })]
                        }), c.jsxs("div", {
                            className: "text-center",
                            children: [c.jsx("div", {
                                className: "text-4xl font-black text-yellow-400 mb-2 font-['Anton']",
                                children: "89%"
                            }), c.jsx("p", {
                                className: "text-white/80",
                                children: "Nunca tentaram um método real"
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    k2 = ({
        end: e,
        duration: t = 2e3,
        prefix: n = "",
        suffix: r = "",
        className: i = ""
    }) => {
        const [s, o] = C.useState(0), {
            ref: a,
            inView: l
        } = er({
            threshold: .3,
            triggerOnce: !0
        });
        return C.useEffect(() => {
            if (l) {
                let u;
                const d = f => {
                    u || (u = f);
                    const h = Math.min((f - u) / t, 1);
                    o(Math.floor(h * e)), h < 1 && requestAnimationFrame(d)
                };
                requestAnimationFrame(d)
            }
        }, [l, e, t]), c.jsxs("span", {
            ref: a,
            className: i,
            children: [n, s.toLocaleString(), r]
        })
    },
    C2 = ({
        onCtaClick: e
    }) => {
        const {
            ref: t,
            inView: n
        } = er({
            threshold: .3,
            triggerOnce: !0
        }), r = [{
            icon: f2,
            number: 3247,
            suffix: "+",
            label: "Alunos transformados"
        }, {
            icon: bu,
            number: 97,
            suffix: "%",
            label: "Taxa de sucesso"
        }, {
            icon: n2,
            number: 7,
            suffix: " dias",
            label: "Para ver resultados"
        }, {
            icon: qn,
            number: 30,
            suffix: " min",
            label: "Por dia de aplicação"
        }];
        return c.jsxs("section", {
            ref: t,
            className: "relative bg-gradient-to-b from-gray-900 to-black py-20 px-4",
            children: [c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[#E7C75F]/10 via-transparent to-[#E7C75F]/10"
            }), c.jsxs("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8
                    },
                    className: "text-center mb-16",
                    children: [c.jsxs("h2", {
                        className: "font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']",
                        children: ["OS ", c.jsx("span", {
                            className: "text-[#E7C75F]",
                            children: "NÚMEROS"
                        }), " NÃO MENTEM"]
                    }), c.jsx("p", {
                        className: "text-xl text-white/80 max-w-3xl mx-auto",
                        children: "Mais de 3.247 pessoas já transformaram seus corpos com este método"
                    })]
                }), c.jsx("div", {
                    className: "grid md:grid-cols-4 gap-8 mb-16",
                    children: r.map((i, s) => c.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: n ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .6,
                            delay: s * .1
                        },
                        className: "text-center bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border-2 border-[#E7C75F]/30 rounded-xl p-8 hover:border-[#E7C75F]/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl",
                        children: [c.jsxs("div", {
                            className: "relative mb-6",
                            children: [c.jsx("div", {
                                className: "w-16 h-16 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center mx-auto mb-4",
                                children: c.jsx(i.icon, {
                                    className: "w-8 h-8 text-black"
                                })
                            }), c.jsx(P.div, {
                                animate: {
                                    scale: [1, 1.2, 1],
                                    opacity: [.5, 1, .5]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0,
                                    delay: s * .5
                                },
                                className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#E7C75F]/30 rounded-full blur-lg"
                            })]
                        }), c.jsx("div", {
                            className: "text-5xl font-black text-[#E7C75F] mb-4 font-['Anton']",
                            children: c.jsx(k2, {
                                end: i.number,
                                suffix: i.suffix
                            })
                        }), c.jsx("p", {
                            className: "text-white font-semibold text-lg",
                            children: i.label
                        })]
                    }, s))
                }), c.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .8
                    },
                    className: "text-center",
                    children: c.jsxs(P.button, {
                        onClick: e,
                        className: "group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-xl px-12 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        animate: {
                            boxShadow: ["0 0 30px rgba(231, 199, 95, 0.4)", "0 0 60px rgba(231, 199, 95, 0.7)", "0 0 30px rgba(231, 199, 95, 0.4)"]
                        },
                        transition: {
                            boxShadow: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        },
                        children: [c.jsx("span", {
                            className: "relative z-10",
                            children: "QUERO CONHECER O MÉTODO"
                        }), c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        })]
                    })
                })]
            })]
        })
    },
    E2 = ({
        onCtaClick: e
    }) => {
        const {
            ref: t,
            inView: n
        } = er({
            threshold: .1,
            triggerOnce: !0
        }), r = [{
            before: "Comer por impulso e emoção",
            after: "Alimentar-se com conciência e equilibrio ",
            icon: l2,
            unlockIcon: d2
        }, {
            before: "Sedentarismo e falta de energia",
            after: "Movimento diário e disposição crescente",
            icon: Ps,
            unlockIcon: qn
        }, {
            before: "Autoimagem negativa e desânimo",
            after: "Autoconfiança e orgulho da propia evolução",
            icon: ef,
            unlockIcon: a2
        }], i = [{
            icon: ef,
            title: "IDENTIFICAÇÃO",
            subtitle: "Reconhecemos os Sabotadores Internos",
            description: "Descobrimos os gatilhos emocionais, crenças limitantes e padrões que te fazem repetir ciclos de ganho de peso",
            image: "https://images.pexels.com/photos/3029699/pexels-photo-3029699.jpeg"
        }, {
            icon: Ps,
            title: "REPROGRAMAÇÃO",
            subtitle: "Reescrevemos sua relação com o corpo e a comida",
            description: "Aplicamos técnicas para eliminar compulções, instalar hábitos saudáveis e fortalecer sua mentalidade de transformação.",
            image: "https://images.pexels.com/photos/33502488/pexels-photo-33502488.jpeg"
        }, {
            icon: qn,
            title: "ATIVAÇÃO",
            subtitle: "Você entra em ação com consistência e leveza",
            description: "Com clareza, motivação e foco, você começa a emagrecer de forma sustentável, sem dietas malucas ou sofrimento",
            image: "https://media.istockphoto.com/id/1400844956/pt/foto/fit-young-man-and-woman-running-together-outdoors-interracial-couple-and-motivated-athletes.jpg?s=612x612&w=0&k=20&c=PfOxzEK6juYqNisxz-P0zKRTb1FZGlwCsgy_orXBLlM="
        }];
        return c.jsxs("section", {
            ref: t,
            className: "relative bg-gradient-to-b from-black to-gray-900 py-12 md:py-20 px-4 overflow-hidden min-h-screen",
            children: [c.jsxs("div", {
                className: "absolute inset-0",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#E7C75F]/5 via-transparent to-blue-500/5"
                }), c.jsx(P.div, {
                    animate: {
                        background: ["radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 70%)", "radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)", "radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 70%)"]
                    },
                    transition: {
                        duration: 8,
                        repeat: 1 / 0
                    },
                    className: "absolute inset-0"
                })]
            }), c.jsxs("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8
                    },
                    className: "text-center mb-8 md:mb-16",
                    children: [c.jsxs("h2", {
                        className: "font-black text-3xl md:text-4xl lg:text-6xl text-white mb-4 md:mb-6 font-['Anton'] leading-tight",
                        children: ["CHEGA DE ", c.jsx("span", {
                            className: "text-[#E7C75F]",
                            children: "EFEITO SANFONA"
                        }), ""]
                    }), c.jsxs("p", {
                        className: "text-lg md:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed px-4",
                        children: ["A abordagem que vai LIBERAR seu metabolismo, acelerar a queima de gordura e transformar seu corpo. ", c.jsx("span", {
                            className: "text-[#E7C75F] font-bold",
                            children: ""
                        }), ""]
                    })]
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "mb-8 md:mb-16",
                    children: [c.jsx("h3", {
                        className: "text-2xl md:text-3xl font-black text-center text-white mb-6 md:mb-12 font-['Anton'] px-4",
                        children: "A TRANSFORMAÇÃO ACONTECE ASSIM:"
                    }), c.jsx("div", {
                        className: "space-y-4 md:space-y-8",
                        children: r.map((s, o) => c.jsxs(P.div, {
                            initial: {
                                opacity: 0,
                                x: -30
                            },
                            animate: n ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: .6,
                                delay: .3 + o * .2
                            },
                            className: "bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-4 md:p-8 hover:border-[#E7C75F]/60 transition-all duration-300 mx-2",
                            children: [c.jsxs("div", {
                                className: "flex flex-col md:hidden space-y-4",
                                children: [c.jsxs("div", {
                                    className: "flex items-center space-x-3",
                                    children: [c.jsxs("div", {
                                        className: "relative flex-shrink-0",
                                        children: [c.jsx(s.icon, {
                                            className: "w-6 h-6 text-red-500"
                                        }), c.jsx(P.div, {
                                            animate: {
                                                scale: [1, 1.2, 1]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                                delay: o * .5
                                            },
                                            className: "absolute inset-0 bg-red-500/30 rounded-full blur-sm"
                                        })]
                                    }), c.jsx("span", {
                                        className: "text-white/80 text-sm",
                                        children: s.before
                                    })]
                                }), c.jsx("div", {
                                    className: "flex justify-center",
                                    children: c.jsx(P.div, {
                                        animate: {
                                            y: [0, 5, 0]
                                        },
                                        transition: {
                                            duration: 2,
                                            repeat: 1 / 0
                                        },
                                        className: "rotate-90",
                                        children: c.jsx(Oo, {
                                            className: "w-6 h-6 text-[#E7C75F]"
                                        })
                                    })
                                }), c.jsxs("div", {
                                    className: "flex items-center space-x-3",
                                    children: [c.jsxs("div", {
                                        className: "relative flex-shrink-0",
                                        children: [c.jsx(s.unlockIcon, {
                                            className: "w-6 h-6 text-green-500"
                                        }), c.jsx(P.div, {
                                            animate: {
                                                scale: [1, 1.2, 1]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                                delay: o * .5 + 1
                                            },
                                            className: "absolute inset-0 bg-green-500/30 rounded-full blur-sm"
                                        })]
                                    }), c.jsx("span", {
                                        className: "text-white font-semibold text-sm",
                                        children: s.after
                                    })]
                                })]
                            }), c.jsxs("div", {
                                className: "hidden md:flex items-center justify-between",
                                children: [c.jsxs("div", {
                                    className: "flex items-center space-x-4 flex-1",
                                    children: [c.jsxs("div", {
                                        className: "relative",
                                        children: [c.jsx(s.icon, {
                                            className: "w-8 h-8 text-red-500"
                                        }), c.jsx(P.div, {
                                            animate: {
                                                scale: [1, 1.2, 1]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                                delay: o * .5
                                            },
                                            className: "absolute inset-0 bg-red-500/30 rounded-full blur-sm"
                                        })]
                                    }), c.jsx("span", {
                                        className: "text-white/80",
                                        children: s.before
                                    })]
                                }), c.jsx(P.div, {
                                    animate: {
                                        x: [0, 10, 0]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: 1 / 0
                                    },
                                    className: "mx-8",
                                    children: c.jsx(Oo, {
                                        className: "w-8 h-8 text-[#E7C75F]"
                                    })
                                }), c.jsxs("div", {
                                    className: "flex items-center space-x-4 flex-1",
                                    children: [c.jsxs("div", {
                                        className: "relative",
                                        children: [c.jsx(s.unlockIcon, {
                                            className: "w-8 h-8 text-green-500"
                                        }), c.jsx(P.div, {
                                            animate: {
                                                scale: [1, 1.2, 1]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                                delay: o * .5 + 1
                                            },
                                            className: "absolute inset-0 bg-green-500/30 rounded-full blur-sm"
                                        })]
                                    }), c.jsx("span", {
                                        className: "text-white font-semibold",
                                        children: s.after
                                    })]
                                })]
                            })]
                        }, o))
                    })]
                }), c.jsxs("div", {
                    className: "relative mb-8 md:mb-16",
                    children: [c.jsx("div", {
                        className: "hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#E7C75F] via-blue-500 to-green-500 transform -translate-y-1/2 z-0 rounded-full",
                        children: c.jsx(P.div, {
                            animate: {
                                x: ["-100%", "100%"]
                            },
                            transition: {
                                duration: 3,
                                repeat: 1 / 0,
                                ease: "linear"
                            },
                            className: "h-full w-20 bg-white/50 rounded-full blur-sm"
                        })
                    }), c.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10",
                        children: i.map((s, o) => c.jsxs(P.div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: n ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: .6,
                                delay: .4 + o * .2
                            },
                            className: "text-center group",
                            children: [c.jsxs("div", {
                                className: "bg-black/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl overflow-hidden hover:border-[#E7C75F]/60 transition-all duration-300 mb-4 group-hover:transform group-hover:scale-105",
                                children: [c.jsxs("div", {
                                    className: "relative h-32 md:h-48 overflow-hidden",
                                    children: [c.jsx("img", {
                                        src: s.image,
                                        alt: s.title,
                                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
                                        loading: "lazy"
                                    }), c.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                                    }), c.jsxs("div", {
                                        className: "absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2",
                                        children: [c.jsx("div", {
                                            className: "w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center",
                                            children: c.jsx(s.icon, {
                                                className: "w-6 h-6 md:w-8 md:h-8 text-black"
                                            })
                                        }), c.jsx(P.div, {
                                            animate: {
                                                scale: [1, 1.3, 1],
                                                opacity: [.5, 1, .5]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: 1 / 0,
                                                delay: o * .5
                                            },
                                            className: "absolute inset-0 bg-[#E7C75F]/30 rounded-full blur-xl"
                                        })]
                                    })]
                                }), c.jsxs("div", {
                                    className: "p-4 md:p-6",
                                    children: [c.jsx("h3", {
                                        className: "text-xl md:text-2xl font-black text-[#E7C75F] mb-2 font-['Anton']",
                                        children: s.title
                                    }), c.jsx("p", {
                                        className: "text-base md:text-lg font-semibold text-white mb-3 md:mb-4",
                                        children: s.subtitle
                                    }), c.jsx("p", {
                                        className: "text-sm md:text-base text-white/80 leading-relaxed",
                                        children: s.description
                                    })]
                                })]
                            }), c.jsx(P.div, {
                                animate: {
                                    rotate: [0, 360]
                                },
                                transition: {
                                    duration: 20,
                                    repeat: 1 / 0,
                                    ease: "linear"
                                },
                                className: "w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center mx-auto border-2 md:border-4 border-white/20",
                                children: c.jsx("span", {
                                    className: "text-black font-black text-lg md:text-xl",
                                    children: o + 1
                                })
                            })]
                        }, o))
                    })]
                }), c.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .8
                    },
                    className: "bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-4 md:p-8 mb-8 md:mb-12 mx-2",
                    children: c.jsxs("div", {
                        className: "text-center",
                        children: [c.jsx("h3", {
                            className: "text-xl md:text-2xl font-black text-white mb-3 md:mb-4 font-['Anton']",
                            children: "BASE COMPROVADA PARA EMAGRECIMENTO"
                        }), c.jsx("p", {
                            className: "text-sm md:text-base text-white/80 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed",
                            children: "Nosso método une comportamento alimentar e reprogramação mental, com resultados reais e sustentáveis."
                        }), c.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",
                            children: [c.jsxs("div", {
                                className: "text-center",
                                children: [c.jsx("div", {
                                    className: "text-2xl md:text-3xl font-black text-blue-400 mb-1 md:mb-2 font-['Anton']",
                                    children: "21"
                                }), c.jsx("p", {
                                    className: "text-xs md:text-sm text-white/80",
                                    children: "Dias para formar novos hábitos alimentares"
                                })]
                            }), c.jsxs("div", {
                                className: "text-center",
                                children: [c.jsx("div", {
                                    className: "text-2xl md:text-3xl font-black text-purple-400 mb-1 md:mb-2 font-['Anton']",
                                    children: "7"
                                }), c.jsx("p", {
                                    className: "text-xs md:text-sm text-white/80",
                                    children: "Dias para ver mudanças no apetite e autocontrole"
                                })]
                            }), c.jsxs("div", {
                                className: "text-center",
                                children: [c.jsx("div", {
                                    className: "text-2xl md:text-3xl font-black text-green-400 mb-1 md:mb-2 font-['Anton']",
                                    children: "95%"
                                }), c.jsx("p", {
                                    className: "text-xs md:text-sm text-white/80",
                                    children: "Eficácia comprovada"
                                })]
                            })]
                        })]
                    })
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: 1
                    },
                    className: "text-center px-4",
                    children: [c.jsx("p", {
                        className: "text-xs md:text-sm text-white/60 mb-6 md:mb-8 italic max-w-2xl mx-auto",
                        children: "Nota: Este é um método científico de reprogramação alimentar. Resultados dependem da aplicação consistente."
                    }), c.jsxs(P.button, {
                        onClick: e,
                        className: "group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-black hover:to-gray-900 text-black hover:text-[#E7C75F] font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-[#E7C75F] flex items-center justify-center space-x-2 md:space-x-3 mx-auto overflow-hidden w-full max-w-md md:max-w-none md:w-auto",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        animate: {
                            boxShadow: ["0 0 20px rgba(231, 199, 95, 0.4)", "0 0 40px rgba(231, 199, 95, 0.7)", "0 0 20px rgba(231, 199, 95, 0.4)"]
                        },
                        transition: {
                            boxShadow: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        },
                        children: [c.jsx("span", {
                            className: "relative z-10 text-center",
                            children: "QUERO EMAGRECER"
                        }), c.jsx(Oo, {
                            className: "w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform relative z-10 flex-shrink-0"
                        }), c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        })]
                    })]
                })]
            })]
        })
    },
    T2 = ({
        onCtaClick: e
    }) => {
        const {
            ref: t,
            inView: n
        } = er({
            threshold: .1,
            triggerOnce: !0
        }), [r, i] = C.useState(0), s = ["https://i.imgur.com/eh4VovK.jpeg", "https://i.imgur.com/T2AHsXv.jpeg", "https://i.imgur.com/5pX6Z8K.jpeg"], o = [{
            name: "Juliana Rocha",
            age: 34,
            profession: "Nutricionista",
            location: "Belo Horizonte, MG",
            result: "Perdeu 6kg em 21 dias",
            story: "Eu vivia em efeito sanfona. O método me ajudou a entender minha mente e meus gatilhos. Hoje como com consciência e mantenho meu peso sem sofrimento.",
            icon: o2,
            color: "text-green-500"
        }, {
            name: "Rodrigo Martins",
            age: 30,
            profession: "Analista de TI",
            location: "São Paulo, SP",
            result: "Reduziu 12cm de barriga",
            story: "Nunca imaginei que o problema era mental. Reprogramei minha rotina e parei de comer por ansiedade. Os resultados vieram rápido e com leveza.",
            icon: bu,
            color: "text-blue-500"
        }, {
            name: "Camila Ferreira",
            age: 38,
            profession: "Empresária",
            location: "Curitiba, PR",
            result: "Voltou a vestir 38",
            story: "Depois de 3 filhos, achei que nunca mais voltaria ao meu corpo. Com esse método, recuperei minha autoestima e minha energia. É libertador!",
            icon: Ps,
            color: "text-purple-500"
        }, {
            name: "Felipe Souza",
            age: 27,
            profession: "Personal Trainer",
            location: "Recife, PE",
            result: "Transformação em 15 dias",
            story: "Mesmo sendo da área, eu me sabotava. Esse método mexeu com minha mentalidade. Hoje ajudo meus alunos com base nele. É revolucionário.",
            icon: el,
            color: "text-yellow-500"
        }];
        C.useEffect(() => {
            const u = setInterval(() => {
                i(d => (d + 1) % s.length)
            }, 4e3);
            return () => clearInterval(u)
        }, [s.length]);
        const a = () => {
                i(u => (u + 1) % s.length)
            },
            l = () => {
                i(u => (u - 1 + s.length) % s.length)
            };
        return c.jsxs("section", {
            ref: t,
            className: "relative bg-gradient-to-b from-gray-900 to-black py-12 md:py-20 px-4 overflow-hidden min-h-screen",
            children: [c.jsx("div", {
                className: "absolute inset-0",
                children: c.jsx(P.div, {
                    animate: {
                        background: ["radial-gradient(circle at 20% 20%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 80% 80%, rgba(42, 230, 125, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 20% 20%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)"]
                    },
                    transition: {
                        duration: 8,
                        repeat: 1 / 0
                    },
                    className: "absolute inset-0"
                })
            }), c.jsxs("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8
                    },
                    className: "text-center mb-8 md:mb-16",
                    children: [c.jsxs("h2", {
                        className: "font-black text-3xl md:text-4xl lg:text-6xl text-white mb-4 md:mb-6 font-['Anton'] leading-tight px-2",
                        children: ["PESSOAS ", c.jsx("span", {
                            className: "text-[#E7C75F]",
                            children: "REAIS"
                        })]
                    }), c.jsx("p", {
                        className: "text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-4",
                        children: 'Que saíram do modo "travado" e transformaram suas vidas'
                    })]
                }), c.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        scale: .95
                    },
                    animate: n ? {
                        opacity: 1,
                        scale: 1
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .2
                    },
                    className: "relative max-w-4xl mx-auto mb-8 md:mb-16",
                    children: c.jsx("div", {
                        className: "relative bg-black/50 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl overflow-hidden shadow-2xl mx-2",
                        children: c.jsxs("div", {
                            className: "relative h-64 md:h-96 lg:h-[500px]",
                            children: [c.jsx(wu, {
                                mode: "wait",
                                children: c.jsx(P.img, {
                                    src: s[r],
                                    alt: `Resultado ${r+1}`,
                                    className: "w-full h-full object-contain bg-black",
                                    initial: {
                                        opacity: 0,
                                        x: 100
                                    },
                                    animate: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        x: -100
                                    },
                                    transition: {
                                        duration: .5
                                    },
                                    loading: "lazy"
                                }, r)
                            }), c.jsx("button", {
                                onClick: l,
                                className: "absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10",
                                children: c.jsx(i2, {
                                    className: "w-4 h-4 md:w-6 md:h-6"
                                })
                            }), c.jsx("button", {
                                onClick: a,
                                className: "absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 z-10",
                                children: c.jsx(s2, {
                                    className: "w-4 h-4 md:w-6 md:h-6"
                                })
                            }), c.jsx("div", {
                                className: "absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2",
                                children: s.map((u, d) => c.jsx("button", {
                                    onClick: () => i(d),
                                    className: `w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${d===r?"bg-[#E7C75F] scale-125":"bg-white/30 hover:bg-white/50"}`
                                }, d))
                            }), c.jsx("div", {
                                className: "absolute top-2 md:top-4 right-2 md:right-4 bg-green-600/90 text-white px-2 md:px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm font-bold",
                                children: "RESULTADOS REAIS"
                            })]
                        })
                    })
                }), c.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12 px-2",
                    children: o.map((u, d) => c.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: n ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: .6,
                            delay: d * .1
                        },
                        className: "bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-4 md:p-8 hover:border-[#E7C75F]/60 transition-all duration-300 hover:transform hover:scale-105",
                        children: [c.jsxs("div", {
                            className: "mb-4 md:mb-6",
                            children: [c.jsx("h3", {
                                className: "text-lg md:text-xl font-bold text-white mb-1",
                                children: u.name
                            }), c.jsx("p", {
                                className: "text-[#E7C75F] font-semibold text-sm md:text-base",
                                children: u.profession
                            }), c.jsxs("p", {
                                className: "text-white/60 text-xs md:text-sm",
                                children: [u.age, " anos • ", u.location]
                            }), c.jsx("div", {
                                className: "flex items-center space-x-1 mt-2",
                                children: [...Array(5)].map((f, h) => c.jsx(el, {
                                    className: "w-3 h-3 md:w-4 md:h-4 text-[#E7C75F] fill-current"
                                }, h))
                            })]
                        }), c.jsx("div", {
                            className: "bg-gradient-to-r from-green-500/20 to-transparent border border-green-500/30 rounded-lg p-3 md:p-4 mb-3 md:mb-4",
                            children: c.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [c.jsx(u.icon, {
                                    className: `w-4 h-4 md:w-5 md:h-5 ${u.color}`
                                }), c.jsxs("span", {
                                    className: `font-bold text-sm md:text-base ${u.color}`,
                                    children: ["✓ ", u.result]
                                })]
                            })
                        }), c.jsxs("blockquote", {
                            className: "text-white/90 italic leading-relaxed text-sm md:text-base",
                            children: ['"', u.story, '"']
                        }), c.jsxs("div", {
                            className: "flex items-center justify-between mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10",
                            children: [c.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [c.jsx("div", {
                                    className: "w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"
                                }), c.jsx("span", {
                                    className: "text-green-400 text-xs md:text-sm font-semibold",
                                    children: "Depoimento verificado"
                                })]
                            }), c.jsx("span", {
                                className: "text-white/40 text-xs",
                                children: "Há 2 dias"
                            })]
                        })]
                    }, d))
                }), c.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .8
                    },
                    className: "bg-gradient-to-r from-[#E7C75F]/10 to-green-500/10 border border-[#E7C75F]/30 rounded-xl p-4 md:p-8 text-center mb-8 md:mb-12 mx-2",
                    children: c.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",
                        children: [c.jsxs("div", {
                            children: [c.jsx("div", {
                                className: "text-3xl md:text-4xl font-black text-[#E7C75F] mb-1 md:mb-2 font-['Anton']",
                                children: "3.847+"
                            }), c.jsx("p", {
                                className: "text-white/80 text-sm md:text-base",
                                children: "Pessoas transformadas"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx("div", {
                                className: "text-3xl md:text-4xl font-black text-green-400 mb-1 md:mb-2 font-['Anton']",
                                children: "97%"
                            }), c.jsx("p", {
                                className: "text-white/80 text-sm md:text-base",
                                children: "Taxa de satisfação"
                            })]
                        }), c.jsxs("div", {
                            children: [c.jsx("div", {
                                className: "text-3xl md:text-4xl font-black text-blue-400 mb-1 md:mb-2 font-['Anton']",
                                children: "7"
                            }), c.jsx("p", {
                                className: "text-white/80 text-sm md:text-base",
                                children: "Dias para ver resultados"
                            })]
                        })]
                    })
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: 1
                    },
                    className: "text-center px-4",
                    children: [c.jsx("p", {
                        className: "text-white/80 text-base md:text-lg mb-4 md:mb-6",
                        children: "Você pode ser o próximo depoimento de sucesso"
                    }), c.jsxs(P.button, {
                        onClick: e,
                        className: "group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden w-full max-w-md md:max-w-none md:w-auto mx-auto",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        animate: {
                            boxShadow: ["0 0 30px rgba(231, 199, 95, 0.4)", "0 0 60px rgba(231, 199, 95, 0.7)", "0 0 30px rgba(231, 199, 95, 0.4)"]
                        },
                        transition: {
                            boxShadow: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        },
                        children: [c.jsx("span", {
                            className: "relative z-10",
                            children: "QUERO SER O PRÓXIMO SUCESSO"
                        }), c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        })]
                    })]
                })]
            })]
        })
    },
    N2 = ({
        onCtaClick: e
    }) => {
        const [t, n] = C.useState(0), r = [{
            name: "Larissa M.",
            age: 32,
            location: "Piauí",
            text: "Eu vivia em guerra com a balança. Esse método me ensinou a comer com consciência e parar de me punir. Hoje me sinto leve, confiante e no controle.",
            result: "Eliminou 7kg sem dieta restritiva",
            avatar: "L",
            salesImage: "https://i.imgur.com/BjchGoh.png"          
        }, {
            name: "Bruno A.",
            age: 32,
            location: "Campinas",
            text: "Sempre fui cético com métodos de emagrecimento. Mas esse é diferente. Mexe com a mente, com os hábitos e com a forma como você se vê. Funciona de verdade.",
            result: "Menos de 10kg em 30 dias",
            avatar: "B",
            salesImage: "https://i.imgur.com/BjchGoh.png"
        }, {
            name: "Patricia L.",
            age: 40,
            location: "Fortaleza",
            text: "Depois da gravidez, não conseguia emagrecer. Esse método me deu clareza, foco e força emocional. Voltei a vestir minhas roupas favoritas e me sinto viva!",
            result: "Reculperou o corpo pós-parto",
            avatar: "P",
            salesImage: "https://i.imgur.com/tcdr2OR.png"
        }, {
            name: "Diego S.",
            age: 24,
            location: "Porto Alegre",
            text: "Eu comia por ansiedade e nem percebia. Aprendi a reprogramar minha mente e meus hábitos. Hoje tenho energia, foco e autoestima como nunca tive.",
            result: "Mudança total em 21 dias",
            avatar: "D",
            salesImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
        }];
        return C.useEffect(() => {
            const i = setInterval(() => {
                n(s => (s + 1) % r.length)
            }, 5e3);
            return () => clearInterval(i)
        }, [r.length]), c.jsx("section", {
            className: "relative bg-gradient-to-b from-gray-900 to-black py-20 px-4",
            children: c.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [c.jsxs("h2", {
                        className: "font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']",
                        children: ["PESSOAS ", c.jsx("span", {
                            className: "text-[#E7C75F]",
                            children: "REAIS"
                        })]
                    }), c.jsx("p", {
                        className: "text-xl text-white/80",
                        children: 'Que saíram do modo "travado" e transformaram suas vidas'
                    })]
                }), c.jsx("div", {
                    className: "relative h-96 mb-12",
                    children: c.jsx(wu, {
                        mode: "wait",
                        children: c.jsx(P.div, {
                            initial: {
                                opacity: 0,
                                x: 100
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            exit: {
                                opacity: 0,
                                x: -100
                            },
                            transition: {
                                duration: .5
                            },
                            className: "absolute inset-0",
                            children: c.jsxs("div", {
                                className: "bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-[#E7C75F]/30 rounded-xl p-8 h-full flex flex-col justify-between",
                                children: [c.jsxs("div", {
                                    className: "relative mb-6 rounded-lg overflow-hidden",
                                    children: [c.jsx("img", {
                                        src: r[t].salesImage,
                                        alt: "Resultado de vendas",
                                        className: "w-full h-48 object-cover"
                                    }), c.jsx("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                    }), c.jsx("div", {
                                        className: "absolute bottom-4 left-4 bg-green-600/90 text-white px-3 py-1 rounded-lg text-sm font-bold",
                                        children: "RESULTADO REAL"
                                    })]
                                }), c.jsxs("div", {
                                    children: [c.jsx(u2, {
                                        className: "text-[#E7C75F] w-12 h-12 mb-6"
                                    }), c.jsxs("p", {
                                        className: "text-white text-lg md:text-xl leading-relaxed mb-6 italic",
                                        children: ['"', r[t].text, '"']
                                    }), c.jsx("div", {
                                        className: "bg-green-600/20 border border-green-500/50 rounded-lg p-4 mb-6",
                                        children: c.jsxs("p", {
                                            className: "text-green-400 font-bold text-center",
                                            children: ["✓ ", r[t].result]
                                        })
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [c.jsxs("div", {
                                        className: "flex items-center space-x-4",
                                        children: [c.jsx("div", {
                                            className: "w-16 h-16 bg-gradient-to-br from-[#E7C75F] to-[#d4b84a] rounded-full flex items-center justify-center",
                                            children: c.jsx("span", {
                                                className: "text-black font-black text-xl",
                                                children: r[t].avatar
                                            })
                                        }), c.jsxs("div", {
                                            children: [c.jsx("p", {
                                                className: "text-white font-bold text-lg",
                                                children: r[t].name
                                            }), c.jsxs("p", {
                                                className: "text-white/60",
                                                children: [r[t].age, " anos • ", r[t].location]
                                            })]
                                        })]
                                    }), c.jsx("div", {
                                        className: "flex space-x-1",
                                        children: [...Array(5)].map((i, s) => c.jsx(el, {
                                            className: "w-5 h-5 text-[#E7C75F] fill-current"
                                        }, s))
                                    })]
                                })]
                            })
                        }, t)
                    })
                }), c.jsx("div", {
                    className: "flex justify-center space-x-2 mb-12",
                    children: r.map((i, s) => c.jsx("button", {
                        onClick: () => n(s),
                        className: `w-3 h-3 rounded-full transition-all duration-300 ${s===t?"bg-[#E7C75F] scale-125":"bg-white/30 hover:bg-white/50"}`
                    }, s))
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center",
                    children: [c.jsx("p", {
                        className: "text-white/60 text-sm mb-8 italic",
                        children: "Aviso: Resultados variam conforme aplicação e dedicação individual."
                    }), c.jsx(P.button, {
                        onClick: e,
                        className: "bg-gradient-to-r from-green-600 to-green-700 hover:from-[#E7C75F] hover:to-[#d4b84a] text-white hover:text-black font-black text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105",
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: .95
                        },
                        children: "QUERO TENTAR POR 30 DIAS"
                    })]
                })]
            })
        })
    },
    j2 = ({
        onCtaClick: e
    }) => {
        const [t, n] = C.useState(0), r = [{
            icon: _o,
            question: "E se não funcionar comigo?",
            answer: "Garantia incondicional de 30 dias. Se você não sentir nenhum avanço ou mudança no seu corpo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Você fica no controle total.",
            color: "text-green-500"
        }, {
            icon: br,
            question: "Não tenho tempo para mais um curso...",
            answer: "Este NÃO é um curso! São apenas 20-30 minutos por dia durante 30 dias. Menos tempo que você gasta vendo um episódio de série. O método é direto, sem enrolação, focado apenas no essencial para você emagrecer.",
            color: "text-blue-500"
        }, {
            icon: Ja,
            question: "R$35? Deve ser conteúdo fraco...",
            answer: "Preço baixo = alcance máximo. Queremos que o máximo de pessoas tenham acesso. O conteúdo é denso, testado e aprovado por mais de 3.000 alunos. Não julgue pela embalagem, julgue pelos resultados.",
            color: "text-purple-500"
        }, {
            icon: js,
            question: "Já tentei de tudo e nada funciona...",
            answer: "Exato! Você tentou motivação, cursos longos, teorias complexas... Aqui é diferente. Você para de acumular informação e começa a EXECUTAR o essencial. É ação, não mais teoria.",
            color: "text-orange-500"
        }, {
            icon: _o,
            question: "Como sei que vou receber o material?",
            answer: "Acesso 100% automático. Assim que o pagamento for aprovado, você recebe por email o link para a área de membros com todo o conteúdo. Funciona 24h por dia, 7 dias por semana.",
            color: "text-cyan-500"
        }, {
            icon: br,
            question: "Preciso de computador ou celular serve?",
            answer: "Celular serve perfeitamente! Todo o material foi pensado para ser consumido no seu smartphone. Você pode estudar no ônibus, no intervalo do trabalho, em qualquer lugar.",
            color: "text-pink-500"
        }, {
            icon: Ja,
            question: "E se eu não souber por onde começar?",
            answer: "Tudo é passo a passo! Não tem como se perder. É só seguir a sequência que já está pronta.",
            color: "text-red-500"
        }, {
            icon: js,
            question: "Isso funciona para qualquer idade?",
            answer: "Sim! Temos alunos de 18 a 65 anos. O método funciona para qualquer pessoa que esteja disposta a dedicar 20-30 minutos por dia para mudar seu corpo.",
            color: "text-yellow-500"
        }, {
            icon: br,
            question: "Por que só R$35? Qual é a pegadinha?",
            answer: "Não tem pegadinha. É estratégia de alcance. Prefiro vender para 1000 pessoas a R$35 do que para 10 pessoas a R$280. Mais pessoas transformadas = mais depoimentos = mais credibilidade.",
            color: "text-teal-500"
        }];
        return c.jsxs("section", {
            className: "relative bg-gradient-to-b from-black to-gray-900 py-20 px-4 overflow-hidden",
            children: [c.jsx("div", {
                className: "absolute inset-0",
                children: c.jsx(P.div, {
                    animate: {
                        background: ["radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 75% 75%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)", "radial-gradient(circle at 25% 25%, rgba(231, 199, 95, 0.1) 0%, transparent 50%)"]
                    },
                    transition: {
                        duration: 10,
                        repeat: 1 / 0
                    },
                    className: "absolute inset-0"
                })
            }), c.jsxs("div", {
                className: "max-w-4xl mx-auto relative z-10",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "text-center mb-16",
                    children: [c.jsxs("h2", {
                        className: "font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']",
                        children: ["DÚVIDAS ", c.jsx("span", {
                            className: "text-[#E7C75F]",
                            children: "FREQUENTES"
                        })]
                    }), c.jsx("p", {
                        className: "text-xl text-white/80",
                        children: "As perguntas que todo mundo faz antes de dar o 1º Passo"
                    })]
                }), c.jsx("div", {
                    className: "space-y-4 mb-12",
                    children: r.map((i, s) => c.jsxs(P.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: s * .1
                        },
                        viewport: {
                            once: !0
                        },
                        className: "bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border border-[#E7C75F]/20 rounded-xl overflow-hidden hover:border-[#E7C75F]/40 transition-all duration-300",
                        children: [c.jsxs("button", {
                            onClick: () => n(t === s ? null : s),
                            className: "w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors",
                            children: [c.jsxs("div", {
                                className: "flex items-center space-x-4",
                                children: [c.jsx(i.icon, {
                                    className: `w-6 h-6 ${i.color}`
                                }), c.jsx("h3", {
                                    className: "text-lg font-bold text-white",
                                    children: i.question
                                })]
                            }), c.jsx(P.div, {
                                animate: {
                                    rotate: t === s ? 180 : 0
                                },
                                transition: {
                                    duration: .3
                                },
                                children: c.jsx(r2, {
                                    className: "w-6 h-6 text-[#E7C75F]"
                                })
                            })]
                        }), c.jsx(wu, {
                            children: t === s && c.jsx(P.div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: "auto",
                                    opacity: 1
                                },
                                exit: {
                                    height: 0,
                                    opacity: 0
                                },
                                transition: {
                                    duration: .3
                                },
                                className: "overflow-hidden",
                                children: c.jsx("div", {
                                    className: "px-6 pb-6",
                                    children: c.jsx("div", {
                                        className: "border-l-4 border-[#E7C75F] pl-4",
                                        children: c.jsx("p", {
                                            className: "text-white/90 leading-relaxed",
                                            children: i.answer
                                        })
                                    })
                                })
                            })
                        })]
                    }, s))
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8
                    },
                    viewport: {
                        once: !0
                    },
                    className: "bg-gradient-to-r from-[#E7C75F]/10 to-green-500/10 border border-[#E7C75F]/30 rounded-xl p-8 text-center",
                    children: [c.jsx("h3", {
                        className: "text-2xl font-black text-white mb-4 font-['Anton']",
                        children: "Ainda tem dúvidas?"
                    }), c.jsx("p", {
                        className: "text-white/80 mb-6",
                        children: "Lembre-se: você tem 30 dias de garantia total. Teste sem risco!"
                    }), c.jsxs("div", {
                        className: "flex flex-col md:flex-row gap-4 justify-center",
                        children: [c.jsx(P.button, {
                            onClick: e,
                            className: "bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: .95
                            },
                            children: "QUERO TESTAR POR 30 DIAS"
                        }), c.jsxs("a", {
                            href: "https://www.instagram.com/mente.expressofc/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2",
                            children: [c.jsx("span", {
                                children: "📱"
                            }), c.jsx("span", {
                                children: "SEGUIR NO INSTAGRAM"
                            })]
                        })]
                    })]
                })]
            })]
        })
    },
    P2 = ({
        minutes: e = 15,
        onExpire: t
    }) => {
        const [n, r] = C.useState(e * 60);
        C.useEffect(() => {
            if (n <= 0) {
                t == null || t();
                return
            }
            const s = setInterval(() => {
                r(o => o - 1)
            }, 1e3);
            return () => clearInterval(s)
        }, [n, t]);
        const i = s => {
            const o = Math.floor(s / 60),
                a = s % 60;
            return `${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`
        };
        return c.jsx("div", {
            className: "bg-red-600/20 border border-red-500/50 rounded-lg px-4 py-2 backdrop-blur-sm",
            children: c.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [c.jsx("div", {
                    className: "w-2 h-2 bg-red-500 rounded-full animate-pulse"
                }), c.jsxs("span", {
                    className: "text-red-400 font-bold text-sm",
                    children: ["Oferta expira em: ", i(n)]
                })]
            })
        })
    },
    A2 = ({
        onCtaClick: e
    }) => {
        const {
            ref: t,
            inView: n
        } = er({
            threshold: .3,
            triggerOnce: !0
        }), r = ["Um desafio prático e realista que cabe na sua rotina", "Um áudio ou vídeo motivacional que te guia emocionalmente", "Bônus: Um card visual inspirador para manter o foco", "Acesso à Área de Membros", " Reflexões profundas para desbloquear sua relação com a comida, o espelho e com você mesma", "Garantia incondicional de 30 dias"], i = [{
            title: 'Bônus: Um card visual inspirador para manter o foco',
            price: 0,
            checked: !1
        }, {
            title: "Copy Motivacional & Desbloqueios",
            description: "Textos e frases poderosas para manter o foco",
            price: 0,
            checked: !1
        }];
        return c.jsxs("section", {
            ref: t,
            className: "relative bg-gradient-to-b from-black to-gray-900 py-20 px-4",
            children: [c.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-[#E7C75F]/10 via-transparent to-green-500/10"
            }), c.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8
                    },
                    className: "text-center mb-12",
                    children: [c.jsxs("h2", {
                        className: "font-black text-4xl md:text-6xl text-white mb-6 font-['Anton']",
                        children: ["ÚLTIMA ", c.jsx("span", {
                            className: "text-red-500",
                            children: "CHANCE"
                        })]
                    }), c.jsx("p", {
                        className: "text-xl md:text-2xl text-white/80 mb-8",
                        children: "Ou você continua fingindo que um dia vai mudar..."
                    }), c.jsx("p", {
                        className: "text-2xl md:text-3xl text-[#E7C75F] font-bold",
                        children: "Ou decide AGORA que não vai morrer preso no mesmo lugar"
                    })]
                }), c.jsx(P.div, {
                    initial: {
                        opacity: 0,
                        scale: .9
                    },
                    animate: n ? {
                        opacity: 1,
                        scale: 1
                    } : {},
                    transition: {
                        duration: .6,
                        delay: .2
                    },
                    className: "flex justify-center mb-12",
                    children: c.jsx(P2, {
                        minutes: 10
                    })
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .3
                    },
                    className: "bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-sm border-2 border-[#E7C75F]/50 rounded-xl p-8 mb-8",
                    children: [c.jsxs("div", {
                        className: "text-center mb-8",
                        children: [c.jsxs("div", {
                            className: "flex justify-center items-center space-x-4 mb-4",
                            children: [c.jsx("span", {
                                className: "text-3xl text-white/50 line-through",
                                children: "R$280"
                            }), c.jsx(P.span, {
                                animate: {
                                    scale: [1, 1.1, 1],
                                    textShadow: ["0 0 20px rgba(231, 199, 95, 0.5)", "0 0 40px rgba(231, 199, 95, 0.8)", "0 0 20px rgba(231, 199, 95, 0.5)"]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: 1 / 0
                                },
                                className: "text-6xl md:text-8xl font-black text-[#E7C75F] font-['Anton']",
                                children: "R$35"
                            })]
                        }), c.jsx("p", {
                            className: "text-xl text-green-400 font-semibold mb-2",
                            children: "HOJE APENAS"
                        }), c.jsx("p", {
                            className: "text-white/60 text-sm",
                            children: "Preço promocional para os primeiros 100 alunos desta semana"
                        })]
                    }), c.jsx("div", {
                        className: "grid md:grid-cols-2 gap-4 mb-8",
                        children: r.map((s, o) => c.jsxs(P.div, {
                            initial: {
                                opacity: 0,
                                x: -20
                            },
                            animate: n ? {
                                opacity: 1,
                                x: 0
                            } : {},
                            transition: {
                                duration: .4,
                                delay: .4 + o * .1
                            },
                            className: "flex items-center space-x-3",
                            children: [c.jsx(js, {
                                className: "text-green-500 w-6 h-6 flex-shrink-0"
                            }), c.jsx("span", {
                                className: "text-white",
                                children: s
                            })]
                        }, o))
                    }), c.jsxs("div", {
                        className: "space-y-4 mb-8",
                        children: [c.jsx("h3", {
                            className: "text-xl font-bold text-white mb-4",
                            children: "Acelere seus resultados:"
                        }), i.map((s, o) => c.jsx(P.div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: n ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: .6,
                                delay: .6 + o * .1
                            },
                            className: "bg-black/50 border border-[#E7C75F]/30 rounded-lg p-4",
                            children: c.jsxs("label", {
                                className: "flex items-start space-x-3 cursor-pointer",
                                children: [c.jsx("input", {
                                    type: "checkbox",
                                    className: "w-5 h-5 text-[#E7C75F] rounded focus:ring-[#E7C75F] mt-1"
                                }), c.jsxs("div", {
                                    className: "flex-1",
                                    children: [c.jsxs("p", {
                                        className: "text-white font-semibold",
                                        children: [s.title, " ", c.jsxs("span", {
                                            className: "text-[#E7C75F]",
                                            children: ["(+R$", s.price, ")"]
                                        })]
                                    }), c.jsx("p", {
                                        className: "text-white/70 text-sm",
                                        children: s.description
                                    })]
                                })]
                            })
                        }, o))]
                    }), c.jsxs(P.button, {
                        onClick: e,
                        className: "group relative w-full bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-xl md:text-2xl px-8 py-6 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-2xl overflow-hidden",
                        whileHover: {
                            scale: 1.02
                        },
                        whileTap: {
                            scale: .98
                        },
                        animate: {
                            boxShadow: ["0 0 30px rgba(231, 199, 95, 0.4)", "0 0 60px rgba(231, 199, 95, 0.7)", "0 0 30px rgba(231, 199, 95, 0.4)"]
                        },
                        transition: {
                            boxShadow: {
                                duration: 2,
                                repeat: 1 / 0,
                                ease: "easeInOut"
                            }
                        },
                        children: [c.jsxs("span", {
                            className: "relative z-10 flex items-center justify-center space-x-3",
                            children: [c.jsx(qn, {
                                className: "w-8 h-8"
                            }), c.jsx("span", {
                                children: "QUERO EMAGRECER AGORA"
                            })]
                        }), c.jsx("div", {
                            className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                        })]
                    }), c.jsxs("div", {
                        className: "flex flex-wrap justify-center gap-4 mt-6 text-sm",
                        children: [c.jsxs("div", {
                            className: "flex items-center space-x-2 text-white/60",
                            children: [c.jsx(br, {
                                className: "w-4 h-4"
                            }), c.jsx("span", {
                                children: "Acesso imediato"
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center space-x-2 text-white/60",
                            children: [c.jsx(Ja, {
                                className: "w-4 h-4"
                            }), c.jsx("span", {
                                children: "Garantia 30 dias"
                            })]
                        }), c.jsxs("div", {
                            className: "flex items-center space-x-2 text-white/60",
                            children: [c.jsx(js, {
                                className: "w-4 h-4"
                            }), c.jsx("span", {
                                children: "Pagamento 100% seguro"
                            })]
                        })]
                    })]
                }), c.jsxs(P.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: n ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: .8,
                        delay: .8
                    },
                    className: "text-center",
                    children: [c.jsxs("p", {
                        className: "text-white/80 text-lg mb-4",
                        children: ["Mais de ", c.jsx("span", {
                            className: "text-[#E7C75F] font-bold",
                            children: "3.000 pessoas"
                        }), " já transformaram suas vidas"]
                    }), c.jsx("p", {
                        className: "text-red-400 font-bold text-xl",
                        children: "Não seja mais uma que fica só assistindo..."
                    })]
                })]
            })]
        })
    },
    b2 = () => c.jsx("footer", {
        className: "bg-[#0B0B0B] border-t border-[#E7C75F]/20 py-12 px-4",
        children: c.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: c.jsxs("div", {
                className: "text-center space-y-4",
                children: [c.jsxs("div", {
                    className: "flex justify-center space-x-8 text-[#E8E5DF]/60 text-sm",
                    children: [c.jsx("a", {
                        href: "#",
                        className: "hover:text-[#E7C75F] transition-colors",
                        children: "Termos"
                    }), c.jsx("a", {
                        href: "#",
                        className: "hover:text-[#E7C75F] transition-colors",
                        children: "Privacidade"
                    }), c.jsx("a", {
                        href: "#",
                        className: "hover:text-[#E7C75F] transition-colors",
                        children: "Suporte WhatsApp"
                    }), c.jsx("a", {
                        href: "#",
                        className: "hover:text-[#E7C75F] transition-colors",
                        children: "Email"
                    })]
                }), c.jsxs("div", {
                    className: "text-[#E8E5DF]/60 text-sm max-w-2xl mx-auto",
                    children: [c.jsx("p", {
                        className: "mb-2",
                        children: "Aviso: Conteúdo educacional. Resultados variam conforme esforço e contexto."
                    }), c.jsx("p", {
                        children: "Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho passado ou potencial de uma estratégia não é, e não deve ser interpretada como uma recomendação ou como garantia de qualquer resultado específico."
                    })]
                }), c.jsx("div", {
                    className: "pt-8 border-t border-[#E7C75F]/10",
                    children: c.jsx("p", {
                        className: "text-[#E7C75F] font-bold",
                        children: "Desafio dos 30 dias © 2025 - Todos os direitos reservados"
                    })
                })]
            })
        })
    }),
    M2 = ({
        onCtaClick: e
    }) => {
        const [t, n] = C.useState(!1);
        return C.useEffect(() => {
            const r = setTimeout(() => {
                n(!0)
            }, 12e4);
            return () => clearTimeout(r)
        }, []), c.jsx(c.Fragment, {
            children: c.jsx(P.div, {
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: t ? 1 : 0,
                    scale: t ? 1 : 0
                },
                transition: {
                    duration: .5,
                    type: "spring",
                    stiffness: 200
                },
                className: "fixed bottom-6 right-6 z-50",
                children: c.jsxs(P.button, {
                    onClick: e,
                    className: "group relative bg-gradient-to-r from-[#E7C75F] to-[#d4b84a] hover:from-green-600 hover:to-green-700 text-black hover:text-white font-black text-lg px-6 py-4 rounded-full shadow-2xl overflow-hidden border-2 border-white/20",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .9
                    },
                    animate: {
                        boxShadow: ["0 0 20px rgba(231, 199, 95, 0.5)", "0 0 40px rgba(231, 199, 95, 0.8)", "0 0 20px rgba(231, 199, 95, 0.5)"]
                    },
                    transition: {
                        boxShadow: {
                            duration: 2,
                            repeat: 1 / 0,
                            ease: "easeInOut"
                        }
                    },
                    children: [c.jsxs("span", {
                        className: "relative z-10 flex items-center space-x-2",
                        children: [c.jsx(qn, {
                            className: "w-5 h-5"
                        }), c.jsx("span", {
                            className: "hidden sm:inline",
                            children: "DESTRAVAR"
                        })]
                    }), c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                    })]
                })
            })
        })
    },
    R2 = () => (C.useEffect(() => {
        const r = document.createElement("script");
        return r.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      
      fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    `, document.head.appendChild(r), window.fbq && window.fbq("track", "ViewContent", {
            value: 27,
            currency: "BRL"
        }), () => {
            document.head.removeChild(r)
        }
    }, []), {
        trackAddToCart: () => {
            window.fbq && window.fbq("track", "AddToCart", {
                value: 27,
                currency: "BRL"
            })
        },
        trackInitiateCheckout: () => {
            window.fbq && window.fbq("track", "InitiateCheckout", {
                value: 27,
                currency: "BRL"
            })
        },
        trackPurchase: () => {
            window.fbq && window.fbq("track", "Purchase", {
                value: 27,
                currency: "BRL"
            })
        }
    });

function D2() {
    const {
        trackAddToCart: e,
        trackInitiateCheckout: t
    } = R2(), n = () => {
        e(), t(), window.open("https://go.hotmart.com/V101482041J?ap=c8aa", "_blank")
    };
    return c.jsxs("div", {
        className: "min-h-screen bg-black text-white font-sans overflow-x-hidden",
        children: [c.jsx(p2, {
            onCtaClick: n
        }), c.jsx(m2, {
            onCtaClick: n
        }), c.jsx(S2, {
            onCtaClick: n
        }), c.jsx(C2, {
            onCtaClick: n
        }), c.jsx(E2, {
            onCtaClick: n
        }), c.jsx(T2, {
            onCtaClick: n
        }), c.jsx(N2, {
            onCtaClick: n
        }), c.jsx(j2, {
            onCtaClick: n
        }), c.jsx(A2, {
            onCtaClick: n
        }), c.jsx(b2, {}), c.jsx(M2, {
            onCtaClick: n
        })]
    })
}
mp(document.getElementById("root")).render(c.jsx(C.StrictMode, {
    children: c.jsx(D2, {})
}));