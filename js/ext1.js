function showGrowlSection() {
  $growl_section.fadeIn("fast")
}

function hideGrowlSection() {
  $growl_section.fadeOut("fast")
}

function growl(t, e) {
    $.each(t, function (t, n) {
      "undefined" == typeof e && (e = {}), "error" === t && (e.sticky = !0, $growl_section.addClass("sticky")), $growl_section.jGrowl(n, $.extend(e, {
        theme: t,
        closeTemplate: '<div class="jGrowl-close-x"><span class="ksr-icon__close" aria-hidden="true"></span></div>',
        beforeOpen: function () {
          showGrowlSection()
        },
        close: function () {
          hideGrowlSection()
        }
      }))
    })
  }! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
      if (!t.document) throw new Error("jQuery requires a window with a document");
      return e(t)
    } : e(t)
  }("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
      var e = t.length,
        n = re.type(t);
      return "function" === n || re.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
      if (re.isFunction(e)) return re.grep(t, function (t, i) {
        return !!e.call(t, i, t) !== n
      });
      if (e.nodeType) return re.grep(t, function (t) {
        return t === e !== n
      });
      if ("string" == typeof e) {
        if (fe.test(e)) return re.filter(e, t, n);
        e = re.filter(e, t)
      }
      return re.grep(t, function (t) {
        return re.inArray(t, e) >= 0 !== n
      })
    }

    function r(t, e) {
      do t = t[e]; while (t && 1 !== t.nodeType);
      return t
    }

    function s(t) {
      var e = be[t] = {};
      return re.each(t.match(ye) || [], function (t, n) {
        e[n] = !0
      }), e
    }

    function a() {
      pe.addEventListener ? (pe.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1)) : (pe.detachEvent("onreadystatechange", o), t.detachEvent("onload", o))
    }

    function o() {
      (pe.addEventListener || "load" === event.type || "complete" === pe.readyState) && (a(), re.ready())
    }

    function u(t, e, n) {
      if (void 0 === n && 1 === t.nodeType) {
        var i = "data-" + e.replace(Se, "-$1").toLowerCase();
        if (n = t.getAttribute(i), "string" == typeof n) {
          try {
            n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n
          } catch (r) {}
          re.data(t, e, n)
        } else n = void 0
      }
      return n
    }

    function l(t) {
      var e;
      for (e in t)
        if (("data" !== e || !re.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
      return !0
    }

    function c(t, e, n, i) {
      if (re.acceptData(t)) {
        var r, s, a = re.expando,
          o = t.nodeType,
          u = o ? re.cache : t,
          l = o ? t[a] : t[a] && a;
        if (l && u[l] && (i || u[l].data) || void 0 !== n || "string" != typeof e) return l || (l = o ? t[a] = X.pop() || re.guid++ : a), u[l] || (u[l] = o ? {} : {
          toJSON: re.noop
        }), ("object" == typeof e || "function" == typeof e) && (i ? u[l] = re.extend(u[l], e) : u[l].data = re.extend(u[l].data, e)), s = u[l], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[re.camelCase(e)] = n), "string" == typeof e ? (r = s[e], null == r && (r = s[re.camelCase(e)])) : r = s, r
      }
    }

    function h(t, e, n) {
      if (re.acceptData(t)) {
        var i, r, s = t.nodeType,
          a = s ? re.cache : t,
          o = s ? t[re.expando] : re.expando;
        if (a[o]) {
          if (e && (i = n ? a[o] : a[o].data)) {
            re.isArray(e) ? e = e.concat(re.map(e, re.camelCase)) : e in i ? e = [e] : (e = re.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
            for (; r--;) delete i[e[r]];
            if (n ? !l(i) : !re.isEmptyObject(i)) return
          }(n || (delete a[o].data, l(a[o]))) && (s ? re.cleanData([t], !0) : ne.deleteExpando || a != a.window ? delete a[o] : a[o] = null)
        }
      }
    }

    function f() {
      return !0
    }

    function d() {
      return !1
    }

    function p() {
      try {
        return pe.activeElement
      } catch (t) {}
    }

    function m(t) {
      var e = Ne.split("|"),
        n = t.createDocumentFragment();
      if (n.createElement)
        for (; e.length;) n.createElement(e.pop());
      return n
    }

    function _(t, e) {
      var n, i, r = 0,
        s = typeof t.getElementsByTagName !== Te ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Te ? t.querySelectorAll(e || "*") : void 0;
      if (!s)
        for (s = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || re.nodeName(i, e) ? s.push(i) : re.merge(s, _(i, e));
      return void 0 === e || e && re.nodeName(t, e) ? re.merge([t], s) : s
    }

    function g(t) {
      Pe.test(t.type) && (t.defaultChecked = t.checked)
    }

    function v(t, e) {
      return re.nodeName(t, "table") && re.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function y(t) {
      return t.type = (null !== re.find.attr(t, "type")) + "/" + t.type, t
    }

    function b(t) {
      var e = Ge.exec(t.type);
      return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
      for (var n, i = 0; null != (n = t[i]); i++) re._data(n, "globalEval", !e || re._data(e[i], "globalEval"))
    }

    function x(t, e) {
      if (1 === e.nodeType && re.hasData(t)) {
        var n, i, r, s = re._data(t),
          a = re._data(e, s),
          o = s.events;
        if (o) {
          delete a.handle, a.events = {};
          for (n in o)
            for (i = 0, r = o[n].length; r > i; i++) re.event.add(e, n, o[n][i])
        }
        a.data && (a.data = re.extend({}, a.data))
      }
    }

    function T(t, e) {
      var n, i, r;
      if (1 === e.nodeType) {
        if (n = e.nodeName.toLowerCase(), !ne.noCloneEvent && e[re.expando]) {
          r = re._data(e);
          for (i in r.events) re.removeEvent(e, i, r.handle);
          e.removeAttribute(re.expando)
        }
        "script" === n && e.text !== t.text ? (y(e).text = t.text, b(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ne.html5Clone && t.innerHTML && !re.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Pe.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
      }
    }

    function k(e, n) {
      var i, r = re(n.createElement(e)).appendTo(n.body),
        s = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
      return r.detach(), s
    }

    function S(t) {
      var e = pe,
        n = Ke[t];
      return n || (n = k(t, e), "none" !== n && n || (Je = (Je || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Je[0].contentWindow || Je[0].contentDocument).document, e.write(), e.close(), n = k(t, e), Je.detach()), Ke[t] = n), n
    }

    function C(t, e) {
      return {
        get: function () {
          var n = t();
          if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
        }
      }
    }

    function D(t, e) {
      if (e in t) return e;
      for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = dn.length; r--;)
        if (e = dn[r] + n, e in t) return e;
      return i
    }

    function M(t, e) {
      for (var n, i, r, s = [], a = 0, o = t.length; o > a; a++) i = t[a], i.style && (s[a] = re._data(i, "olddisplay"), n = i.style.display, e ? (s[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Me(i) && (s[a] = re._data(i, "olddisplay", S(i.nodeName)))) : (r = Me(i), (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
      for (a = 0; o > a; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[a] || "" : "none"));
      return t
    }

    function A(t, e, n) {
      var i = ln.exec(e);
      return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function P(t, e, n, i, r) {
      for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === n && (a += re.css(t, n + De[s], !0, r)), i ? ("content" === n && (a -= re.css(t, "padding" + De[s], !0, r)), "margin" !== n && (a -= re.css(t, "border" + De[s] + "Width", !0, r))) : (a += re.css(t, "padding" + De[s], !0, r), "padding" !== n && (a += re.css(t, "border" + De[s] + "Width", !0, r)));
      return a
    }

    function O(t, e, n) {
      var i = !0,
        r = "width" === e ? t.offsetWidth : t.offsetHeight,
        s = tn(t),
        a = ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, s);
      if (0 >= r || null == r) {
        if (r = en(t, e, s), (0 > r || null == r) && (r = t.style[e]), rn.test(r)) return r;
        i = a && (ne.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
      }
      return r + P(t, e, n || (a ? "border" : "content"), i, s) + "px"
    }

    function E(t, e, n, i, r) {
      return new E.prototype.init(t, e, n, i, r)
    }

    function R() {
      return setTimeout(function () {
        pn = void 0
      }), pn = re.now()
    }

    function j(t, e) {
      var n, i = {
          height: t
        },
        r = 0;
      for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = De[r], i["margin" + n] = i["padding" + n] = t;
      return e && (i.opacity = i.width = t), i
    }

    function L(t, e, n) {
      for (var i, r = (bn[e] || []).concat(bn["*"]), s = 0, a = r.length; a > s; s++)
        if (i = r[s].call(n, e, t)) return i
    }

    function N(t, e, n) {
      var i, r, s, a, o, u, l, c, h = this,
        f = {},
        d = t.style,
        p = t.nodeType && Me(t),
        m = re._data(t, "fxshow");
      n.queue || (o = re._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, u = o.empty.fire, o.empty.fire = function () {
        o.unqueued || u()
      }), o.unqueued++, h.always(function () {
        h.always(function () {
          o.unqueued--, re.queue(t, "fx").length || o.empty.fire()
        })
      })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = re.css(t, "display"), c = "none" === l ? re._data(t, "olddisplay") || S(t.nodeName) : l, "inline" === c && "none" === re.css(t, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ne.shrinkWrapBlocks() || h.always(function () {
        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
      }));
      for (i in e)
        if (r = e[i], _n.exec(r)) {
          if (delete e[i], s = s || "toggle" === r, r === (p ? "hide" : "show")) {
            if ("show" !== r || !m || void 0 === m[i]) continue;
            p = !0
          }
          f[i] = m && m[i] || re.style(t, i)
        } else l = void 0;
      if (re.isEmptyObject(f)) "inline" === ("none" === l ? S(t.nodeName) : l) && (d.display = l);
      else {
        m ? "hidden" in m && (p = m.hidden) : m = re._data(t, "fxshow", {}), s && (m.hidden = !p), p ? re(t).show() : h.done(function () {
          re(t).hide()
        }), h.done(function () {
          var e;
          re._removeData(t, "fxshow");
          for (e in f) re.style(t, e, f[e])
        });
        for (i in f) a = L(p ? m[i] : 0, i, h), i in m || (m[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function I(t, e) {
      var n, i, r, s, a;
      for (n in t)
        if (i = re.camelCase(n), r = e[i], s = t[n], re.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), a = re.cssHooks[i], a && "expand" in a) {
          s = a.expand(s), delete t[i];
          for (n in s) n in t || (t[n] = s[n], e[n] = r)
        } else e[i] = r
    }

    function Y(t, e, n) {
      var i, r, s = 0,
        a = yn.length,
        o = re.Deferred().always(function () {
          delete u.elem
        }),
        u = function () {
          if (r) return !1;
          for (var e = pn || R(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, s = 1 - i, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(s);
          return o.notifyWith(t, [l, s, n]), 1 > s && u ? n : (o.resolveWith(t, [l]), !1)
        },
        l = o.promise({
          elem: t,
          props: re.extend({}, e),
          opts: re.extend(!0, {
            specialEasing: {}
          }, n),
          originalProperties: e,
          originalOptions: n,
          startTime: pn || R(),
          duration: n.duration,
          tweens: [],
          createTween: function (e, n) {
            var i = re.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
            return l.tweens.push(i), i
          },
          stop: function (e) {
            var n = 0,
              i = e ? l.tweens.length : 0;
            if (r) return this;
            for (r = !0; i > n; n++) l.tweens[n].run(1);
            return e ? o.resolveWith(t, [l, e]) : o.rejectWith(t, [l, e]), this
          }
        }),
        c = l.props;
      for (I(c, l.opts.specialEasing); a > s; s++)
        if (i = yn[s].call(l, t, c, l.opts)) return i;
      return re.map(c, L, l), re.isFunction(l.opts.start) && l.opts.start.call(t, l), re.fx.timer(re.extend(u, {
        elem: t,
        anim: l,
        queue: l.opts.queue
      })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function F(t) {
      return function (e, n) {
        "string" != typeof e && (n = e, e = "*");
        var i, r = 0,
          s = e.toLowerCase().match(ye) || [];
        if (re.isFunction(n))
          for (; i = s[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
      }
    }

    function $(t, e, n, i) {
      function r(o) {
        var u;
        return s[o] = !0, re.each(t[o] || [], function (t, o) {
          var l = o(e, n, i);
          return "string" != typeof l || a || s[l] ? a ? !(u = l) : void 0 : (e.dataTypes.unshift(l), r(l), !1)
        }), u
      }
      var s = {},
        a = t === Un;
      return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function z(t, e) {
      var n, i, r = re.ajaxSettings.flatOptions || {};
      for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
      return n && re.extend(!0, t, n), t
    }

    function q(t, e, n) {
      for (var i, r, s, a, o = t.contents, u = t.dataTypes;
        "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
      if (r)
        for (a in o)
          if (o[a] && o[a].test(r)) {
            u.unshift(a);
            break
          }
      if (u[0] in n) s = u[0];
      else {
        for (a in n) {
          if (!u[0] || t.converters[a + " " + u[0]]) {
            s = a;
            break
          }
          i || (i = a)
        }
        s = s || i
      }
      return s ? (s !== u[0] && u.unshift(s), n[s]) : void 0
    }

    function H(t, e, n, i) {
      var r, s, a, o, u, l = {},
        c = t.dataTypes.slice();
      if (c[1])
        for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
      for (s = c.shift(); s;)
        if (t.responseFields[s] && (n[t.responseFields[s]] = e), !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = s, s = c.shift())
          if ("*" === s) s = u;
          else if ("*" !== u && u !== s) {
        if (a = l[u + " " + s] || l["* " + s], !a)
          for (r in l)
            if (o = r.split(" "), o[1] === s && (a = l[u + " " + o[0]] || l["* " + o[0]])) {
              a === !0 ? a = l[r] : l[r] !== !0 && (s = o[0], c.unshift(o[1]));
              break
            }
        if (a !== !0)
          if (a && t["throws"]) e = a(e);
          else try {
            e = a(e)
          } catch (h) {
            return {
              state: "parsererror",
              error: a ? h : "No conversion from " + u + " to " + s
            }
          }
      }
      return {
        state: "success",
        data: e
      }
    }

    function U(t, e, n, i) {
      var r;
      if (re.isArray(e)) re.each(e, function (e, r) {
        n || Xn.test(t) ? i(t, r) : U(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
      });
      else if (n || "object" !== re.type(e)) i(t, e);
      else
        for (r in e) U(t + "[" + r + "]", e[r], n, i)
    }

    function W() {
      try {
        return new t.XMLHttpRequest
      } catch (e) {}
    }

    function B() {
      try {
        return new t.ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {}
    }

    function G(t) {
      return re.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var X = [],
      Q = X.slice,
      V = X.concat,
      Z = X.push,
      J = X.indexOf,
      K = {},
      te = K.toString,
      ee = K.hasOwnProperty,
      ne = {},
      ie = "1.11.1",
      re = function (t, e) {
        return new re.fn.init(t, e)
      },
      se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ae = /^-ms-/,
      oe = /-([\da-z])/gi,
      ue = function (t, e) {
        return e.toUpperCase()
      };
    re.fn = re.prototype = {
      jquery: ie,
      constructor: re,
      selector: "",
      length: 0,
      toArray: function () {
        return Q.call(this)
      },
      get: function (t) {
        return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
      },
      pushStack: function (t) {
        var e = re.merge(this.constructor(), t);
        return e.prevObject = this, e.context = this.context, e
      },
      each: function (t, e) {
        return re.each(this, t, e)
      },
      map: function (t) {
        return this.pushStack(re.map(this, function (e, n) {
          return t.call(e, n, e)
        }))
      },
      slice: function () {
        return this.pushStack(Q.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (0 > t ? e : 0);
        return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor(null)
      },
      push: Z,
      sort: X.sort,
      splice: X.splice
    }, re.extend = re.fn.extend = function () {
      var t, e, n, i, r, s, a = arguments[0] || {},
        o = 1,
        u = arguments.length,
        l = !1;
      for ("boolean" == typeof a && (l = a, a = arguments[o] || {}, o++), "object" == typeof a || re.isFunction(a) || (a = {}), o === u && (a = this, o--); u > o; o++)
        if (null != (r = arguments[o]))
          for (i in r) t = a[i], n = r[i], a !== n && (l && n && (re.isPlainObject(n) || (e = re.isArray(n))) ? (e ? (e = !1, s = t && re.isArray(t) ? t : []) : s = t && re.isPlainObject(t) ? t : {}, a[i] = re.extend(l, s, n)) : void 0 !== n && (a[i] = n));
      return a
    }, re.extend({
      expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t)
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === re.type(t)
      },
      isArray: Array.isArray || function (t) {
        return "array" === re.type(t)
      },
      isWindow: function (t) {
        return null != t && t == t.window
      },
      isNumeric: function (t) {
        return !re.isArray(t) && t - parseFloat(t) >= 0
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0
      },
      isPlainObject: function (t) {
        var e;
        if (!t || "object" !== re.type(t) || t.nodeType || re.isWindow(t)) return !1;
        try {
          if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
        } catch (n) {
          return !1
        }
        if (ne.ownLast)
          for (e in t) return ee.call(t, e);
        for (e in t);
        return void 0 === e || ee.call(t, e)
      },
      type: function (t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[te.call(t)] || "object" : typeof t
      },
      globalEval: function (e) {
        e && re.trim(e) && (t.execScript || function (e) {
          t.eval.call(t, e)
        })(e)
      },
      camelCase: function (t) {
        return t.replace(ae, "ms-").replace(oe, ue)
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
      },
      each: function (t, e, i) {
        var r, s = 0,
          a = t.length,
          o = n(t);
        if (i) {
          if (o)
            for (; a > s && (r = e.apply(t[s], i), r !== !1); s++);
          else
            for (s in t)
              if (r = e.apply(t[s], i), r === !1) break
        } else if (o)
          for (; a > s && (r = e.call(t[s], s, t[s]), r !== !1); s++);
        else
          for (s in t)
            if (r = e.call(t[s], s, t[s]), r === !1) break; return t
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(se, "")
      },
      makeArray: function (t, e) {
        var i = e || [];
        return null != t && (n(Object(t)) ? re.merge(i, "string" == typeof t ? [t] : t) : Z.call(i, t)), i
      },
      inArray: function (t, e, n) {
        var i;
        if (e) {
          if (J) return J.call(e, t, n);
          for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
            if (n in e && e[n] === t) return n
        }
        return -1
      },
      merge: function (t, e) {
        for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
        if (n !== n)
          for (; void 0 !== e[i];) t[r++] = e[i++];
        return t.length = r, t
      },
      grep: function (t, e, n) {
        for (var i, r = [], s = 0, a = t.length, o = !n; a > s; s++) i = !e(t[s], s), i !== o && r.push(t[s]);
        return r
      },
      map: function (t, e, i) {
        var r, s = 0,
          a = t.length,
          o = n(t),
          u = [];
        if (o)
          for (; a > s; s++) r = e(t[s], s, i), null != r && u.push(r);
        else
          for (s in t) r = e(t[s], s, i), null != r && u.push(r);
        return V.apply([], u)
      },
      guid: 1,
      proxy: function (t, e) {
        var n, i, r;
        return "string" == typeof e && (r = t[e], e = t, t = r), re.isFunction(t) ? (n = Q.call(arguments, 2), i = function () {
          return t.apply(e || this, n.concat(Q.call(arguments)))
        }, i.guid = t.guid = t.guid || re.guid++, i) : void 0
      },
      now: function () {
        return +new Date
      },
      support: ne
    }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
      K["[object " + e + "]"] = e.toLowerCase()
    });
    var le = function (t) {
      function e(t, e, n, i) {
        var r, s, a, o, u, l, h, d, p, m;
        if ((e ? e.ownerDocument || e : $) !== E && O(e), e = e || E, n = n || [], !t || "string" != typeof t) return n;
        if (1 !== (o = e.nodeType) && 9 !== o) return [];
        if (j && !i) {
          if (r = ve.exec(t))
            if (a = r[1]) {
              if (9 === o) {
                if (s = e.getElementById(a), !s || !s.parentNode) return n;
                if (s.id === a) return n.push(s), n
              } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(a)) && Y(e, s) && s.id === a) return n.push(s), n
            } else {
              if (r[2]) return K.apply(n, e.getElementsByTagName(t)), n;
              if ((a = r[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(a)), n
            }
          if (w.qsa && (!L || !L.test(t))) {
            if (d = h = F, p = e, m = 9 === o && t, 1 === o && "object" !== e.nodeName.toLowerCase()) {
              for (l = S(t), (h = e.getAttribute("id")) ? d = h.replace(be, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + f(l[u]);
              p = ye.test(t) && c(e.parentNode) || e, m = l.join(",")
            }
            if (m) try {
              return K.apply(n, p.querySelectorAll(m)), n
            } catch (_) {} finally {
              h || e.removeAttribute("id")
            }
          }
        }
        return D(t.replace(ue, "$1"), e, n, i)
      }

      function n() {
        function t(n, i) {
          return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
        }
        var e = [];
        return t
      }

      function i(t) {
        return t[F] = !0, t
      }

      function r(t) {
        var e = E.createElement("div");
        try {
          return !!t(e)
        } catch (n) {
          return !1
        } finally {
          e.parentNode && e.parentNode.removeChild(e), e = null
        }
      }

      function s(t, e) {
        for (var n = t.split("|"), i = t.length; i--;) x.attrHandle[n[i]] = e
      }

      function a(t, e) {
        var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === e) return -1;
        return t ? 1 : -1
      }

      function o(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return "input" === n && e.type === t
        }
      }

      function u(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t
        }
      }

      function l(t) {
        return i(function (e) {
          return e = +e, i(function (n, i) {
            for (var r, s = t([], n.length, e), a = s.length; a--;) n[r = s[a]] && (n[r] = !(i[r] = n[r]))
          })
        })
      }

      function c(t) {
        return t && typeof t.getElementsByTagName !== G && t
      }

      function h() {}

      function f(t) {
        for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
        return i
      }

      function d(t, e, n) {
        var i = e.dir,
          r = n && "parentNode" === i,
          s = q++;
        return e.first ? function (e, n, s) {
          for (; e = e[i];)
            if (1 === e.nodeType || r) return t(e, n, s)
        } : function (e, n, a) {
          var o, u, l = [z, s];
          if (a) {
            for (; e = e[i];)
              if ((1 === e.nodeType || r) && t(e, n, a)) return !0
          } else
            for (; e = e[i];)
              if (1 === e.nodeType || r) {
                if (u = e[F] || (e[F] = {}), (o = u[i]) && o[0] === z && o[1] === s) return l[2] = o[2];
                if (u[i] = l, l[2] = t(e, n, a)) return !0
              }
        }
      }

      function p(t) {
        return t.length > 1 ? function (e, n, i) {
          for (var r = t.length; r--;)
            if (!t[r](e, n, i)) return !1;
          return !0
        } : t[0]
      }

      function m(t, n, i) {
        for (var r = 0, s = n.length; s > r; r++) e(t, n[r], i);
        return i
      }

      function _(t, e, n, i, r) {
        for (var s, a = [], o = 0, u = t.length, l = null != e; u > o; o++)(s = t[o]) && (!n || n(s, i, r)) && (a.push(s), l && e.push(o));
        return a
      }

      function g(t, e, n, r, s, a) {
        return r && !r[F] && (r = g(r)), s && !s[F] && (s = g(s, a)), i(function (i, a, o, u) {
          var l, c, h, f = [],
            d = [],
            p = a.length,
            g = i || m(e || "*", o.nodeType ? [o] : o, []),
            v = !t || !i && e ? g : _(g, f, t, o, u),
            y = n ? s || (i ? t : p || r) ? [] : a : v;
          if (n && n(v, y, o, u), r)
            for (l = _(y, d), r(l, [], o, u), c = l.length; c--;)(h = l[c]) && (y[d[c]] = !(v[d[c]] = h));
          if (i) {
            if (s || t) {
              if (s) {
                for (l = [], c = y.length; c--;)(h = y[c]) && l.push(v[c] = h);
                s(null, y = [], l, u)
              }
              for (c = y.length; c--;)(h = y[c]) && (l = s ? ee.call(i, h) : f[c]) > -1 && (i[l] = !(a[l] = h))
            }
          } else y = _(y === a ? y.splice(p, y.length) : y), s ? s(null, a, y, u) : K.apply(a, y)
        })
      }

      function v(t) {
        for (var e, n, i, r = t.length, s = x.relative[t[0].type], a = s || x.relative[" "], o = s ? 1 : 0, u = d(function (t) {
            return t === e
          }, a, !0), l = d(function (t) {
            return ee.call(e, t) > -1
          }, a, !0), c = [function (t, n, i) {
            return !s && (i || n !== M) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i))
          }]; r > o; o++)
          if (n = x.relative[t[o].type]) c = [d(p(c), n)];
          else {
            if (n = x.filter[t[o].type].apply(null, t[o].matches), n[F]) {
              for (i = ++o; r > i && !x.relative[t[i].type]; i++);
              return g(o > 1 && p(c), o > 1 && f(t.slice(0, o - 1).concat({
                value: " " === t[o - 2].type ? "*" : ""
              })).replace(ue, "$1"), n, i > o && v(t.slice(o, i)), r > i && v(t = t.slice(i)), r > i && f(t))
            }
            c.push(n)
          }
        return p(c)
      }

      function y(t, n) {
        var r = n.length > 0,
          s = t.length > 0,
          a = function (i, a, o, u, l) {
            var c, h, f, d = 0,
              p = "0",
              m = i && [],
              g = [],
              v = M,
              y = i || s && x.find.TAG("*", l),
              b = z += null == v ? 1 : Math.random() || .1,
              w = y.length;
            for (l && (M = a !== E && a); p !== w && null != (c = y[p]); p++) {
              if (s && c) {
                for (h = 0; f = t[h++];)
                  if (f(c, a, o)) {
                    u.push(c);
                    break
                  }
                l && (z = b)
              }
              r && ((c = !f && c) && d--, i && m.push(c))
            }
            if (d += p, r && p !== d) {
              for (h = 0; f = n[h++];) f(m, g, a, o);
              if (i) {
                if (d > 0)
                  for (; p--;) m[p] || g[p] || (g[p] = Z.call(u));
                g = _(g)
              }
              K.apply(u, g), l && !i && g.length > 0 && d + n.length > 1 && e.uniqueSort(u)
            }
            return l && (z = b, M = v), m
          };
        return r ? i(a) : a
      }
      var b, w, x, T, k, S, C, D, M, A, P, O, E, R, j, L, N, I, Y, F = "sizzle" + -new Date,
        $ = t.document,
        z = 0,
        q = 0,
        H = n(),
        U = n(),
        W = n(),
        B = function (t, e) {
          return t === e && (P = !0), 0
        },
        G = "undefined",
        X = 1 << 31,
        Q = {}.hasOwnProperty,
        V = [],
        Z = V.pop,
        J = V.push,
        K = V.push,
        te = V.slice,
        ee = V.indexOf || function (t) {
          for (var e = 0, n = this.length; n > e; e++)
            if (this[e] === t) return e;
          return -1
        },
        ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ie = "[\\x20\\t\\r\\n\\f]",
        re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        se = re.replace("w", "w#"),
        ae = "\\[" + ie + "*(" + re + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + se + "))|)" + ie + "*\\]",
        oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
        ue = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
        le = new RegExp("^" + ie + "*," + ie + "*"),
        ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
        he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
        fe = new RegExp(oe),
        de = new RegExp("^" + se + "$"),
        pe = {
          ID: new RegExp("^#(" + re + ")"),
          CLASS: new RegExp("^\\.(" + re + ")"),
          TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + ae),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + ne + ")$", "i"),
          needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
        },
        me = /^(?:input|select|textarea|button)$/i,
        _e = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        be = /'|\\/g,
        we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
        xe = function (t, e, n) {
          var i = "0x" + e - 65536;
          return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
      try {
        K.apply(V = te.call($.childNodes), $.childNodes), V[$.childNodes.length].nodeType
      } catch (Te) {
        K = {
          apply: V.length ? function (t, e) {
            J.apply(t, te.call(e))
          } : function (t, e) {
            for (var n = t.length, i = 0; t[n++] = e[i++];);
            t.length = n - 1
          }
        }
      }
      w = e.support = {}, k = e.isXML = function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return e ? "HTML" !== e.nodeName : !1
      }, O = e.setDocument = function (t) {
        var e, n = t ? t.ownerDocument || t : $,
          i = n.defaultView;
        return n !== E && 9 === n.nodeType && n.documentElement ? (E = n, R = n.documentElement, j = !k(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
          O()
        }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
          O()
        })), w.attributes = r(function (t) {
          return t.className = "i", !t.getAttribute("className")
        }), w.getElementsByTagName = r(function (t) {
          return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
        }), w.getElementsByClassName = ge.test(n.getElementsByClassName) && r(function (t) {
          return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
        }), w.getById = r(function (t) {
          return R.appendChild(t).id = F, !n.getElementsByName || !n.getElementsByName(F).length
        }), w.getById ? (x.find.ID = function (t, e) {
          if (typeof e.getElementById !== G && j) {
            var n = e.getElementById(t);
            return n && n.parentNode ? [n] : []
          }
        }, x.filter.ID = function (t) {
          var e = t.replace(we, xe);
          return function (t) {
            return t.getAttribute("id") === e
          }
        }) : (delete x.find.ID, x.filter.ID = function (t) {
          var e = t.replace(we, xe);
          return function (t) {
            var n = typeof t.getAttributeNode !== G && t.getAttributeNode("id");
            return n && n.value === e
          }
        }), x.find.TAG = w.getElementsByTagName ? function (t, e) {
          return typeof e.getElementsByTagName !== G ? e.getElementsByTagName(t) : void 0
        } : function (t, e) {
          var n, i = [],
            r = 0,
            s = e.getElementsByTagName(t);
          if ("*" === t) {
            for (; n = s[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return s
        }, x.find.CLASS = w.getElementsByClassName && function (t, e) {
          return typeof e.getElementsByClassName !== G && j ? e.getElementsByClassName(t) : void 0
        }, N = [], L = [], (w.qsa = ge.test(n.querySelectorAll)) && (r(function (t) {
          t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + ie + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + ie + "*(?:value|" + ne + ")"), t.querySelectorAll(":checked").length || L.push(":checked")
        }), r(function (t) {
          var e = n.createElement("input");
          e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + ie + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
        })), (w.matchesSelector = ge.test(I = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function (t) {
          w.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), N.push("!=", oe)
        }), L = L.length && new RegExp(L.join("|")), N = N.length && new RegExp(N.join("|")), e = ge.test(R.compareDocumentPosition), Y = e || ge.test(R.contains) ? function (t, e) {
          var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;
          return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
        } : function (t, e) {
          if (e)
            for (; e = e.parentNode;)
              if (e === t) return !0;
          return !1
        }, B = e ? function (t, e) {
          if (t === e) return P = !0, 0;
          var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
          return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === $ && Y($, t) ? -1 : e === n || e.ownerDocument === $ && Y($, e) ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0 : 4 & i ? -1 : 1)
        } : function (t, e) {
          if (t === e) return P = !0, 0;
          var i, r = 0,
            s = t.parentNode,
            o = e.parentNode,
            u = [t],
            l = [e];
          if (!s || !o) return t === n ? -1 : e === n ? 1 : s ? -1 : o ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0;
          if (s === o) return a(t, e);
          for (i = t; i = i.parentNode;) u.unshift(i);
          for (i = e; i = i.parentNode;) l.unshift(i);
          for (; u[r] === l[r];) r++;
          return r ? a(u[r], l[r]) : u[r] === $ ? -1 : l[r] === $ ? 1 : 0
        }, n) : E
      }, e.matches = function (t, n) {
        return e(t, null, null, n)
      }, e.matchesSelector = function (t, n) {
        if ((t.ownerDocument || t) !== E && O(t), n = n.replace(he, "='$1']"), !(!w.matchesSelector || !j || N && N.test(n) || L && L.test(n))) try {
          var i = I.call(t, n);
          if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
        } catch (r) {}
        return e(n, E, null, [t]).length > 0
      }, e.contains = function (t, e) {
        return (t.ownerDocument || t) !== E && O(t), Y(t, e)
      }, e.attr = function (t, e) {
        (t.ownerDocument || t) !== E && O(t);
        var n = x.attrHandle[e.toLowerCase()],
          i = n && Q.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
        return void 0 !== i ? i : w.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }, e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t)
      }, e.uniqueSort = function (t) {
        var e, n = [],
          i = 0,
          r = 0;
        if (P = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(B), P) {
          for (; e = t[r++];) e === t[r] && (i = n.push(r));
          for (; i--;) t.splice(n[i], 1)
        }
        return A = null, t
      }, T = e.getText = function (t) {
        var e, n = "",
          i = 0,
          r = t.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) n += T(t)
          } else if (3 === r || 4 === r) return t.nodeValue
        } else
          for (; e = t[i++];) n += T(e);
        return n
      }, x = e.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: pe,
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
          ATTR: function (t) {
            return t[1] = t[1].replace(we, xe), t[3] = (t[3] || t[4] || t[5] || "").replace(we, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
          },
          CHILD: function (t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
          },
          PSEUDO: function (t) {
            var e, n = !t[6] && t[2];
            return pe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && fe.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
          }
        },
        filter: {
          TAG: function (t) {
            var e = t.replace(we, xe).toLowerCase();
            return "*" === t ? function () {
              return !0
            } : function (t) {
              return t.nodeName && t.nodeName.toLowerCase() === e
            }
          },
          CLASS: function (t) {
            var e = H[t + " "];
            return e || (e = new RegExp("(^|" + ie + ")" + t + "(" + ie + "|$)")) && H(t, function (t) {
              return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "")
            })
          },
          ATTR: function (t, n, i) {
            return function (r) {
              var s = e.attr(r, t);
              return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
            }
          },
          CHILD: function (t, e, n, i, r) {
            var s = "nth" !== t.slice(0, 3),
              a = "last" !== t.slice(-4),
              o = "of-type" === e;
            return 1 === i && 0 === r ? function (t) {
              return !!t.parentNode
            } : function (e, n, u) {
              var l, c, h, f, d, p, m = s !== a ? "nextSibling" : "previousSibling",
                _ = e.parentNode,
                g = o && e.nodeName.toLowerCase(),
                v = !u && !o;
              if (_) {
                if (s) {
                  for (; m;) {
                    for (h = e; h = h[m];)
                      if (o ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                    p = m = "only" === t && !p && "nextSibling"
                  }
                  return !0
                }
                if (p = [a ? _.firstChild : _.lastChild], a && v) {
                  for (c = _[F] || (_[F] = {}), l = c[t] || [], d = l[0] === z && l[1], f = l[0] === z && l[2], h = d && _.childNodes[d]; h = ++d && h && h[m] || (f = d = 0) || p.pop();)
                    if (1 === h.nodeType && ++f && h === e) {
                      c[t] = [z, d, f];
                      break
                    }
                } else if (v && (l = (e[F] || (e[F] = {}))[t]) && l[0] === z) f = l[1];
                else
                  for (;
                    (h = ++d && h && h[m] || (f = d = 0) || p.pop()) && ((o ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++f || (v && ((h[F] || (h[F] = {}))[t] = [z, f]), h !== e)););
                return f -= r, f === i || f % i === 0 && f / i >= 0
              }
            }
          },
          PSEUDO: function (t, n) {
            var r, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
            return s[F] ? s(n) : s.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
              for (var i, r = s(t, n), a = r.length; a--;) i = ee.call(t, r[a]), t[i] = !(e[i] = r[a])
            }) : function (t) {
              return s(t, 0, r)
            }) : s
          }
        },
        pseudos: {
          not: i(function (t) {
            var e = [],
              n = [],
              r = C(t.replace(ue, "$1"));
            return r[F] ? i(function (t, e, n, i) {
              for (var s, a = r(t, null, i, []), o = t.length; o--;)(s = a[o]) && (t[o] = !(e[o] = s))
            }) : function (t, i, s) {
              return e[0] = t, r(e, null, s, n), !n.pop()
            }
          }),
          has: i(function (t) {
            return function (n) {
              return e(t, n).length > 0
            }
          }),
          contains: i(function (t) {
            return function (e) {
              return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
            }
          }),
          lang: i(function (t) {
            return de.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, xe).toLowerCase(),
              function (e) {
                var n;
                do
                  if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function (e) {
            var n = t.location && t.location.hash;
            return n && n.slice(1) === e.id
          },
          root: function (t) {
            return t === R
          },
          focus: function (t) {
            return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
          },
          enabled: function (t) {
            return t.disabled === !1
          },
          disabled: function (t) {
            return t.disabled === !0
          },
          checked: function (t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && !!t.checked || "option" === e && !!t.selected
          },
          selected: function (t) {
            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
          },
          empty: function (t) {
            for (t = t.firstChild; t; t = t.nextSibling)
              if (t.nodeType < 6) return !1;
            return !0
          },
          parent: function (t) {
            return !x.pseudos.empty(t)
          },
          header: function (t) {
            return _e.test(t.nodeName)
          },
          input: function (t) {
            return me.test(t.nodeName)
          },
          button: function (t) {
            var e = t.nodeName.toLowerCase();
            return "input" === e && "button" === t.type || "button" === e
          },
          text: function (t) {
            var e;
            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
          },
          first: l(function () {
            return [0]
          }),
          last: l(function (t, e) {
            return [e - 1]
          }),
          eq: l(function (t, e, n) {
            return [0 > n ? n + e : n]
          }),
          even: l(function (t, e) {
            for (var n = 0; e > n; n += 2) t.push(n);
            return t
          }),
          odd: l(function (t, e) {
            for (var n = 1; e > n; n += 2) t.push(n);
            return t
          }),
          lt: l(function (t, e, n) {
            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
            return t
          }),
          gt: l(function (t, e, n) {
            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
            return t
          })
        }
      }, x.pseudos.nth = x.pseudos.eq;
      for (b in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) x.pseudos[b] = o(b);
      for (b in {
          submit: !0,
          reset: !0
        }) x.pseudos[b] = u(b);
      return h.prototype = x.filters = x.pseudos, x.setFilters = new h, S = e.tokenize = function (t, n) {
        var i, r, s, a, o, u, l, c = U[t + " "];
        if (c) return n ? 0 : c.slice(0);
        for (o = t, u = [], l = x.preFilter; o;) {
          (!i || (r = le.exec(o))) && (r && (o = o.slice(r[0].length) || o), u.push(s = [])), i = !1, (r = ce.exec(o)) && (i = r.shift(), s.push({
            value: i,
            type: r[0].replace(ue, " ")
          }), o = o.slice(i.length));
          for (a in x.filter) !(r = pe[a].exec(o)) || l[a] && !(r = l[a](r)) || (i = r.shift(), s.push({
            value: i,
            type: a,
            matches: r
          }), o = o.slice(i.length));
          if (!i) break
        }
        return n ? o.length : o ? e.error(t) : U(t, u).slice(0)
      }, C = e.compile = function (t, e) {
        var n, i = [],
          r = [],
          s = W[t + " "];
        if (!s) {
          for (e || (e = S(t)), n = e.length; n--;) s = v(e[n]), s[F] ? i.push(s) : r.push(s);
          s = W(t, y(r, i)), s.selector = t
        }
        return s
      }, D = e.select = function (t, e, n, i) {
        var r, s, a, o, u, l = "function" == typeof t && t,
          h = !i && S(t = l.selector || t);
        if (n = n || [], 1 === h.length) {
          if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (a = s[0]).type && w.getById && 9 === e.nodeType && j && x.relative[s[1].type]) {
            if (e = (x.find.ID(a.matches[0].replace(we, xe), e) || [])[0], !e) return n;
            l && (e = e.parentNode), t = t.slice(s.shift().value.length)
          }
          for (r = pe.needsContext.test(t) ? 0 : s.length; r-- && (a = s[r], !x.relative[o = a.type]);)
            if ((u = x.find[o]) && (i = u(a.matches[0].replace(we, xe), ye.test(s[0].type) && c(e.parentNode) || e))) {
              if (s.splice(r, 1), t = i.length && f(s), !t) return K.apply(n, i), n;
              break
            }
        }
        return (l || C(t, h))(i, e, !j, n, ye.test(t) && c(e.parentNode) || e), n
      }, w.sortStable = F.split("").sort(B).join("") === F, w.detectDuplicates = !!P, O(), w.sortDetached = r(function (t) {
        return 1 & t.compareDocumentPosition(E.createElement("div"))
      }), r(function (t) {
        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
      }) || s("type|href|height|width", function (t, e, n) {
        return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
      }), w.attributes && r(function (t) {
        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
      }) || s("value", function (t, e, n) {
        return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
      }), r(function (t) {
        return null == t.getAttribute("disabled")
      }) || s(ne, function (t, e, n) {
        var i;
        return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
      }), e
    }(t);
    re.find = le, re.expr = le.selectors, re.expr[":"] = re.expr.pseudos, re.unique = le.uniqueSort, re.text = le.getText, re.isXMLDoc = le.isXML, re.contains = le.contains;
    var ce = re.expr.match.needsContext,
      he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      fe = /^.[^:#\[\.,]*$/;
    re.filter = function (t, e, n) {
      var i = e[0];
      return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? re.find.matchesSelector(i, t) ? [i] : [] : re.find.matches(t, re.grep(e, function (t) {
        return 1 === t.nodeType
      }))
    }, re.fn.extend({
      find: function (t) {
        var e, n = [],
          i = this,
          r = i.length;
        if ("string" != typeof t) return this.pushStack(re(t).filter(function () {
          for (e = 0; r > e; e++)
            if (re.contains(i[e], this)) return !0
        }));
        for (e = 0; r > e; e++) re.find(t, i[e], n);
        return n = this.pushStack(r > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
      },
      filter: function (t) {
        return this.pushStack(i(this, t || [], !1))
      },
      not: function (t) {
        return this.pushStack(i(this, t || [], !0))
      },
      is: function (t) {
        return !!i(this, "string" == typeof t && ce.test(t) ? re(t) : t || [], !1).length
      }
    });
    var de, pe = t.document,
      me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      _e = re.fn.init = function (t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
          if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || de).find(t) : this.constructor(e).find(t);
          if (n[1]) {
            if (e = e instanceof re ? e[0] : e, re.merge(this, re.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pe, !0)), he.test(n[1]) && re.isPlainObject(e))
              for (n in e) re.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
          }
          if (i = pe.getElementById(n[2]), i && i.parentNode) {
            if (i.id !== n[2]) return de.find(t);
            this.length = 1, this[0] = i
          }
          return this.context = pe, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : re.isFunction(t) ? "undefined" != typeof de.ready ? de.ready(t) : t(re) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), re.makeArray(t, this))
      };
    _e.prototype = re.fn, de = re(pe);
    var ge = /^(?:parents|prev(?:Until|All))/,
      ve = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    re.extend({
      dir: function (t, e, n) {
        for (var i = [], r = t[e]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n));) 1 === r.nodeType && i.push(r), r = r[e];
        return i
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n
      }
    }), re.fn.extend({
      has: function (t) {
        var e, n = re(t, this),
          i = n.length;
        return this.filter(function () {
          for (e = 0; i > e; e++)
            if (re.contains(this, n[e])) return !0
        })
      },
      closest: function (t, e) {
        for (var n, i = 0, r = this.length, s = [], a = ce.test(t) || "string" != typeof t ? re(t, e || this.context) : 0; r > i; i++)
          for (n = this[i]; n && n !== e; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, t))) {
              s.push(n);
              break
            }
        return this.pushStack(s.length > 1 ? re.unique(s) : s)
      },
      index: function (t) {
        return t ? "string" == typeof t ? re.inArray(this[0], re(t)) : re.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (t, e) {
        return this.pushStack(re.unique(re.merge(this.get(), re(t, e))))
      },
      addBack: function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
      }
    }), re.each({
      parent: function (t) {
        var e = t.parentNode;
        return e && 11 !== e.nodeType ? e : null
      },
      parents: function (t) {
        return re.dir(t, "parentNode")
      },
      parentsUntil: function (t, e, n) {
        return re.dir(t, "parentNode", n)
      },
      next: function (t) {
        return r(t, "nextSibling")
      },
      prev: function (t) {
        return r(t, "previousSibling")
      },
      nextAll: function (t) {
        return re.dir(t, "nextSibling")
      },
      prevAll: function (t) {
        return re.dir(t, "previousSibling")
      },
      nextUntil: function (t, e, n) {
        return re.dir(t, "nextSibling", n)
      },
      prevUntil: function (t, e, n) {
        return re.dir(t, "previousSibling", n)
      },
      siblings: function (t) {
        return re.sibling((t.parentNode || {}).firstChild, t)
      },
      children: function (t) {
        return re.sibling(t.firstChild)
      },
      contents: function (t) {
        return re.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : re.merge([], t.childNodes)
      }
    }, function (t, e) {
      re.fn[t] = function (n, i) {
        var r = re.map(this, e, n);
        return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = re.filter(i, r)), this.length > 1 && (ve[t] || (r = re.unique(r)), ge.test(t) && (r = r.reverse())), this.pushStack(r)
      }
    });
    var ye = /\S+/g,
      be = {};
    re.Callbacks = function (t) {
      t = "string" == typeof t ? be[t] || s(t) : re.extend({}, t);
      var e, n, i, r, a, o, u = [],
        l = !t.once && [],
        c = function (s) {
          for (n = t.memory && s, i = !0, a = o || 0, o = 0, r = u.length, e = !0; u && r > a; a++)
            if (u[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
              n = !1;
              break
            }
          e = !1, u && (l ? l.length && c(l.shift()) : n ? u = [] : h.disable())
        },
        h = {
          add: function () {
            if (u) {
              var i = u.length;
              ! function s(e) {
                re.each(e, function (e, n) {
                  var i = re.type(n);
                  "function" === i ? t.unique && h.has(n) || u.push(n) : n && n.length && "string" !== i && s(n)
                })
              }(arguments), e ? r = u.length : n && (o = i, c(n))
            }
            return this
          },
          remove: function () {
            return u && re.each(arguments, function (t, n) {
              for (var i;
                (i = re.inArray(n, u, i)) > -1;) u.splice(i, 1), e && (r >= i && r--, a >= i && a--)
            }), this
          },
          has: function (t) {
            return t ? re.inArray(t, u) > -1 : !(!u || !u.length)
          },
          empty: function () {
            return u = [], r = 0, this
          },
          disable: function () {
            return u = l = n = void 0, this
          },
          disabled: function () {
            return !u
          },
          lock: function () {
            return l = void 0, n || h.disable(), this
          },
          locked: function () {
            return !l
          },
          fireWith: function (t, n) {
            return !u || i && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : c(n)), this
          },
          fire: function () {
            return h.fireWith(this, arguments), this
          },
          fired: function () {
            return !!i
          }
        };
      return h
    }, re.extend({
      Deferred: function (t) {
        var e = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]],
          n = "pending",
          i = {
            state: function () {
              return n
            },
            always: function () {
              return r.done(arguments).fail(arguments), this
            },
            then: function () {
              var t = arguments;
              return re.Deferred(function (n) {
                re.each(e, function (e, s) {
                  var a = re.isFunction(t[e]) && t[e];
                  r[s[1]](function () {
                    var t = a && a.apply(this, arguments);
                    t && re.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                  })
                }), t = null
              }).promise()
            },
            promise: function (t) {
              return null != t ? re.extend(t, i) : i
            }
          },
          r = {};
        return i.pipe = i.then, re.each(e, function (t, s) {
          var a = s[2],
            o = s[3];
          i[s[1]] = a.add, o && a.add(function () {
            n = o
          }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function () {
            return r[s[0] + "With"](this === r ? i : this, arguments), this
          }, r[s[0] + "With"] = a.fireWith
        }), i.promise(r), t && t.call(r, r), r
      },
      when: function (t) {
        var e, n, i, r = 0,
          s = Q.call(arguments),
          a = s.length,
          o = 1 !== a || t && re.isFunction(t.promise) ? a : 0,
          u = 1 === o ? t : re.Deferred(),
          l = function (t, n, i) {
            return function (r) {
              n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : r, i === e ? u.notifyWith(n, i) : --o || u.resolveWith(n, i)
            }
          };
        if (a > 1)
          for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) s[r] && re.isFunction(s[r].promise) ? s[r].promise().done(l(r, i, s)).fail(u.reject).progress(l(r, n, e)) : --o;
        return o || u.resolveWith(i, s), u.promise()
      }
    });
    var we;
    re.fn.ready = function (t) {
      return re.ready.promise().done(t), this
    }, re.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? re.readyWait++ : re.ready(!0)
      },
      ready: function (t) {
        if (t === !0 ? !--re.readyWait : !re.isReady) {
          if (!pe.body) return setTimeout(re.ready);
          re.isReady = !0, t !== !0 && --re.readyWait > 0 || (we.resolveWith(pe, [re]), re.fn.triggerHandler && (re(pe).triggerHandler("ready"), re(pe).off("ready")))
        }
      }
    }), re.ready.promise = function (e) {
      if (!we)
        if (we = re.Deferred(), "complete" === pe.readyState) setTimeout(re.ready);
        else if (pe.addEventListener) pe.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1);
      else {
        pe.attachEvent("onreadystatechange", o), t.attachEvent("onload", o);
        var n = !1;
        try {
          n = null == t.frameElement && pe.documentElement
        } catch (i) {}
        n && n.doScroll && ! function r() {
          if (!re.isReady) {
            try {
              n.doScroll("left")
            } catch (t) {
              return setTimeout(r, 50)
            }
            a(), re.ready()
          }
        }()
      }
      return we.promise(e)
    };
    var xe, Te = "undefined";
    for (xe in re(ne)) break;
    ne.ownLast = "0" !== xe, ne.inlineBlockNeedsLayout = !1, re(function () {
        var t, e, n, i;
        n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ne.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
      }),
      function () {
        var t = pe.createElement("div");
        if (null == ne.deleteExpando) {
          ne.deleteExpando = !0;
          try {
            delete t.test
          } catch (e) {
            ne.deleteExpando = !1
          }
        }
        t = null
      }(), re.acceptData = function (t) {
        var e = re.noData[(t.nodeName + " ").toLowerCase()],
          n = +t.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
      };
    var ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Se = /([A-Z])/g;
    re.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
      },
      hasData: function (t) {
        return t = t.nodeType ? re.cache[t[re.expando]] : t[re.expando], !!t && !l(t)
      },
      data: function (t, e, n) {
        return c(t, e, n)
      },
      removeData: function (t, e) {
        return h(t, e)
      },
      _data: function (t, e, n) {
        return c(t, e, n, !0)
      },
      _removeData: function (t, e) {
        return h(t, e, !0)
      }
    }), re.fn.extend({
      data: function (t, e) {
        var n, i, r, s = this[0],
          a = s && s.attributes;
        if (void 0 === t) {
          if (this.length && (r = re.data(s), 1 === s.nodeType && !re._data(s, "parsedAttrs"))) {
            for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), u(s, i, r[i])));
            re._data(s, "parsedAttrs", !0)
          }
          return r
        }
        return "object" == typeof t ? this.each(function () {
          re.data(this, t)
        }) : arguments.length > 1 ? this.each(function () {
          re.data(this, t, e)
        }) : s ? u(s, t, re.data(s, t)) : void 0
      },
      removeData: function (t) {
        return this.each(function () {
          re.removeData(this, t)
        })
      }
    }), re.extend({
      queue: function (t, e, n) {
        var i;
        return t ? (e = (e || "fx") + "queue", i = re._data(t, e), n && (!i || re.isArray(n) ? i = re._data(t, e, re.makeArray(n)) : i.push(n)), i || []) : void 0
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = re.queue(t, e),
          i = n.length,
          r = n.shift(),
          s = re._queueHooks(t, e),
          a = function () {
            re.dequeue(t, e)
          };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, a, s)), !i && s && s.empty.fire()
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return re._data(t, n) || re._data(t, n, {
          empty: re.Callbacks("once memory").add(function () {
            re._removeData(t, e + "queue"), re._removeData(t, n)
          })
        })
      }
    }), re.fn.extend({
      queue: function (t, e) {
        var n = 2;
        return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? re.queue(this[0], t) : void 0 === e ? this : this.each(function () {
          var n = re.queue(this, t, e);
          re._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && re.dequeue(this, t)
        })
      },
      dequeue: function (t) {
        return this.each(function () {
          re.dequeue(this, t)
        })
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", [])
      },
      promise: function (t, e) {
        var n, i = 1,
          r = re.Deferred(),
          s = this,
          a = this.length,
          o = function () {
            --i || r.resolveWith(s, [s])
          };
        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = re._data(s[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(o));
        return o(), r.promise(e)
      }
    });
    var Ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      De = ["Top", "Right", "Bottom", "Left"],
      Me = function (t, e) {
        return t = e || t, "none" === re.css(t, "display") || !re.contains(t.ownerDocument, t)
      },
      Ae = re.access = function (t, e, n, i, r, s, a) {
        var o = 0,
          u = t.length,
          l = null == n;
        if ("object" === re.type(n)) {
          r = !0;
          for (o in n) re.access(t, e, o, n[o], !0, s, a)
        } else if (void 0 !== i && (r = !0, re.isFunction(i) || (a = !0), l && (a ? (e.call(t, i), e = null) : (l = e, e = function (t, e, n) {
            return l.call(re(t), n)
          })), e))
          for (; u > o; o++) e(t[o], n, a ? i : i.call(t[o], o, e(t[o], n)));
        return r ? t : l ? e.call(t) : u ? e(t[0], n) : s
      },
      Pe = /^(?:checkbox|radio)$/i;
    ! function () {
      var t = pe.createElement("input"),
        e = pe.createElement("div"),
        n = pe.createDocumentFragment();
      if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ne.leadingWhitespace = 3 === e.firstChild.nodeType, ne.tbody = !e.getElementsByTagName("tbody").length, ne.htmlSerialize = !!e.getElementsByTagName("link").length, ne.html5Clone = "<:nav></:nav>" !== pe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ne.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ne.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
          ne.noCloneEvent = !1
        }), e.cloneNode(!0).click()), null == ne.deleteExpando) {
        ne.deleteExpando = !0;
        try {
          delete e.test
        } catch (i) {
          ne.deleteExpando = !1
        }
      }
    }(),
    function () {
      var e, n, i = pe.createElement("div");
      for (e in {
          submit: !0,
          change: !0,
          focusin: !0
        }) n = "on" + e, (ne[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), ne[e + "Bubbles"] = i.attributes[n].expando === !1);
      i = null
    }();
    var Oe = /^(?:input|select|textarea)$/i,
      Ee = /^key/,
      Re = /^(?:mouse|pointer|contextmenu)|click/,
      je = /^(?:focusinfocus|focusoutblur)$/,
      Le = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
      global: {},
      add: function (t, e, n, i, r) {
        var s, a, o, u, l, c, h, f, d, p, m, _ = re._data(t);
        if (_) {
          for (n.handler && (u = n, n = u.handler, r = u.selector), n.guid || (n.guid = re.guid++), (a = _.events) || (a = _.events = {}), (c = _.handle) || (c = _.handle = function (t) {
              return typeof re === Te || t && re.event.triggered === t.type ? void 0 : re.event.dispatch.apply(c.elem, arguments)
            }, c.elem = t), e = (e || "").match(ye) || [""], o = e.length; o--;) s = Le.exec(e[o]) || [], d = m = s[1], p = (s[2] || "").split(".").sort(), d && (l = re.event.special[d] || {}, d = (r ? l.delegateType : l.bindType) || d, l = re.event.special[d] || {}, h = re.extend({
            type: d,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: r,
            needsContext: r && re.expr.match.needsContext.test(r),
            namespace: p.join(".")
          }, u), (f = a[d]) || (f = a[d] = [], f.delegateCount = 0, l.setup && l.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(d, c, !1) : t.attachEvent && t.attachEvent("on" + d, c))), l.add && (l.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), re.event.global[d] = !0);
          t = null
        }
      },
      remove: function (t, e, n, i, r) {
        var s, a, o, u, l, c, h, f, d, p, m, _ = re.hasData(t) && re._data(t);
        if (_ && (c = _.events)) {
          for (e = (e || "").match(ye) || [""], l = e.length; l--;)
            if (o = Le.exec(e[l]) || [], d = m = o[1], p = (o[2] || "").split(".").sort(), d) {
              for (h = re.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, f = c[d] || [], o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = s = f.length; s--;) a = f[s], !r && m !== a.origType || n && n.guid !== a.guid || o && !o.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(s, 1), a.selector && f.delegateCount--, h.remove && h.remove.call(t, a));
              u && !f.length && (h.teardown && h.teardown.call(t, p, _.handle) !== !1 || re.removeEvent(t, d, _.handle), delete c[d])
            } else
              for (d in c) re.event.remove(t, d + e[l], n, i, !0);
          re.isEmptyObject(c) && (delete _.handle, re._removeData(t, "events"))
        }
      },
      trigger: function (e, n, i, r) {
        var s, a, o, u, l, c, h, f = [i || pe],
          d = ee.call(e, "type") ? e.type : e,
          p = ee.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = c = i = i || pe, 3 !== i.nodeType && 8 !== i.nodeType && !je.test(d + re.event.triggered) && (d.indexOf(".") >= 0 && (p = d.split("."), d = p.shift(), p.sort()), a = d.indexOf(":") < 0 && "on" + d, e = e[re.expando] ? e : new re.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : re.makeArray(n, [e]), l = re.event.special[d] || {}, r || !l.trigger || l.trigger.apply(i, n) !== !1)) {
          if (!r && !l.noBubble && !re.isWindow(i)) {
            for (u = l.delegateType || d, je.test(u + d) || (o = o.parentNode); o; o = o.parentNode) f.push(o), c = o;
            c === (i.ownerDocument || pe) && f.push(c.defaultView || c.parentWindow || t)
          }
          for (h = 0;
            (o = f[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? u : l.bindType || d, s = (re._data(o, "events") || {})[e.type] && re._data(o, "handle"), s && s.apply(o, n), s = a && o[a], s && s.apply && re.acceptData(o) && (e.result = s.apply(o, n), e.result === !1 && e.preventDefault());
          if (e.type = d, !r && !e.isDefaultPrevented() && (!l._default || l._default.apply(f.pop(), n) === !1) && re.acceptData(i) && a && i[d] && !re.isWindow(i)) {
            c = i[a], c && (i[a] = null), re.event.triggered = d;
            try {
              i[d]()
            } catch (m) {}
            re.event.triggered = void 0, c && (i[a] = c)
          }
          return e.result
        }
      },
      dispatch: function (t) {
        t = re.event.fix(t);
        var e, n, i, r, s, a = [],
          o = Q.call(arguments),
          u = (re._data(this, "events") || {})[t.type] || [],
          l = re.event.special[t.type] || {};
        if (o[0] = t, t.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
          for (a = re.event.handlers.call(this, t, u), e = 0;
            (r = a[e++]) && !t.isPropagationStopped();)
            for (t.currentTarget = r.elem, s = 0;
              (i = r.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, o), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
          return l.postDispatch && l.postDispatch.call(this, t), t.result
        }
      },
      handlers: function (t, e) {
        var n, i, r, s, a = [],
          o = e.delegateCount,
          u = t.target;
        if (o && u.nodeType && (!t.button || "click" !== t.type))
          for (; u != this; u = u.parentNode || this)
            if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
              for (r = [], s = 0; o > s; s++) i = e[s], n = i.selector + " ", void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(u) >= 0 : re.find(n, this, null, [u]).length), r[n] && r.push(i);
              r.length && a.push({
                elem: u,
                handlers: r
              })
            }
        return o < e.length && a.push({
          elem: this,
          handlers: e.slice(o)
        }), a
      },
      fix: function (t) {
        if (t[re.expando]) return t;
        var e, n, i, r = t.type,
          s = t,
          a = this.fixHooks[r];
        for (a || (this.fixHooks[r] = a = Re.test(r) ? this.mouseHooks : Ee.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new re.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
        return t.target || (t.target = s.srcElement || pe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, s) : t
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (t, e) {
          return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function (t, e) {
          var n, i, r, s = e.button,
            a = e.fromElement;
          return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pe, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function () {
            if (this !== p() && this.focus) try {
              return this.focus(), !1
            } catch (t) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function () {
            return this === p() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function () {
            return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
          },
          _default: function (t) {
            return re.nodeName(t.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function (t) {
            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
          }
        }
      },
      simulate: function (t, e, n, i) {
        var r = re.extend(new re.Event, n, {
          type: t,
          isSimulated: !0,
          originalEvent: {}
        });
        i ? re.event.trigger(r, null, e) : re.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
      }
    }, re.removeEvent = pe.removeEventListener ? function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
      var i = "on" + e;
      t.detachEvent && (typeof t[i] === Te && (t[i] = null), t.detachEvent(i, n))
    }, re.Event = function (t, e) {
      return this instanceof re.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? f : d) : this.type = t, e && re.extend(this, e), this.timeStamp = t && t.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(t, e)
    }, re.Event.prototype = {
      isDefaultPrevented: d,
      isPropagationStopped: d,
      isImmediatePropagationStopped: d,
      preventDefault: function () {
        var t = this.originalEvent;
        this.isDefaultPrevented = f, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        this.isPropagationStopped = f, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        this.isImmediatePropagationStopped = f, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
      }
    }, re.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (t, e) {
      re.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function (t) {
          var n, i = this,
            r = t.relatedTarget,
            s = t.handleObj;
          return (!r || r !== i && !re.contains(i, r)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
        }
      }
    }), ne.submitBubbles || (re.event.special.submit = {
      setup: function () {
        return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function (t) {
          var e = t.target,
            n = re.nodeName(e, "input") || re.nodeName(e, "button") ? e.form : void 0;
          n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function (t) {
            t._submit_bubble = !0
          }), re._data(n, "submitBubbles", !0))
        })
      },
      postDispatch: function (t) {
        t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && re.event.simulate("submit", this.parentNode, t, !0))
      },
      teardown: function () {
        return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
      }
    }), ne.changeBubbles || (re.event.special.change = {
      setup: function () {
        return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function (t) {
          "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
        }), re.event.add(this, "click._change", function (t) {
          this._just_changed && !t.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, t, !0)
        })), !1) : void re.event.add(this, "beforeactivate._change", function (t) {
          var e = t.target;
          Oe.test(e.nodeName) && !re._data(e, "changeBubbles") && (re.event.add(e, "change._change", function (t) {
            !this.parentNode || t.isSimulated || t.isTrigger || re.event.simulate("change", this.parentNode, t, !0)
          }), re._data(e, "changeBubbles", !0))
        })
      },
      handle: function (t) {
        var e = t.target;
        return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
      },
      teardown: function () {
        return re.event.remove(this, "._change"), !Oe.test(this.nodeName)
      }
    }), ne.focusinBubbles || re.each({
      focus: "focusin",
      blur: "focusout"
    }, function (t, e) {
      var n = function (t) {
        re.event.simulate(e, t.target, re.event.fix(t), !0)
      };
      re.event.special[e] = {
        setup: function () {
          var i = this.ownerDocument || this,
            r = re._data(i, e);
          r || i.addEventListener(t, n, !0), re._data(i, e, (r || 0) + 1)
        },
        teardown: function () {
          var i = this.ownerDocument || this,
            r = re._data(i, e) - 1;
          r ? re._data(i, e, r) : (i.removeEventListener(t, n, !0), re._removeData(i, e))
        }
      }
    }), re.fn.extend({
      on: function (t, e, n, i, r) {
        var s, a;
        if ("object" == typeof t) {
          "string" != typeof e && (n = n || e, e = void 0);
          for (s in t) this.on(s, e, n, t[s], r);
          return this
        }
        if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = d;
        else if (!i) return this;
        return 1 === r && (a = i, i = function (t) {
          return re().off(t), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function () {
          re.event.add(this, t, i, n, e)
        })
      },
      one: function (t, e, n, i) {
        return this.on(t, e, n, i, 1)
      },
      off: function (t, e, n) {
        var i, r;
        if (t && t.preventDefault && t.handleObj) return i = t.handleObj, re(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof t) {
          for (r in t) this.off(r, e, t[r]);
          return this
        }
        return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = d), this.each(function () {
          re.event.remove(this, t, n, e)
        })
      },
      trigger: function (t, e) {
        return this.each(function () {
          re.event.trigger(t, e, this)
        })
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        return n ? re.event.trigger(t, e, n, !0) : void 0
      }
    });
    var Ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Ie = / jQuery\d+="(?:null|\d+)"/g,
      Ye = new RegExp("<(?:" + Ne + ")[\\s/>]", "i"),
      Fe = /^\s+/,
      $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      ze = /<([\w:]+)/,
      qe = /<tbody/i,
      He = /<|&#?\w+;/,
      Ue = /<(?:script|style|link)/i,
      We = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Be = /^$|\/(?:java|ecma)script/i,
      Ge = /^true\/(.*)/,
      Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Qe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
      },
      Ve = m(pe),
      Ze = Ve.appendChild(pe.createElement("div"));
    Qe.optgroup = Qe.option, Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead, Qe.th = Qe.td, re.extend({
      clone: function (t, e, n) {
        var i, r, s, a, o, u = re.contains(t.ownerDocument, t);
        if (ne.html5Clone || re.isXMLDoc(t) || !Ye.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Ze.innerHTML = t.outerHTML, Ze.removeChild(s = Ze.firstChild)), !(ne.noCloneEvent && ne.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || re.isXMLDoc(t)))
          for (i = _(s), o = _(t), a = 0; null != (r = o[a]); ++a) i[a] && T(r, i[a]);
        if (e)
          if (n)
            for (o = o || _(t), i = i || _(s), a = 0; null != (r = o[a]); a++) x(r, i[a]);
          else x(t, s);
        return i = _(s, "script"), i.length > 0 && w(i, !u && _(t, "script")), i = o = r = null, s
      },
      buildFragment: function (t, e, n, i) {
        for (var r, s, a, o, u, l, c, h = t.length, f = m(e), d = [], p = 0; h > p; p++)
          if (s = t[p], s || 0 === s)
            if ("object" === re.type(s)) re.merge(d, s.nodeType ? [s] : s);
            else if (He.test(s)) {
          for (o = o || f.appendChild(e.createElement("div")), u = (ze.exec(s) || ["", ""])[1].toLowerCase(), c = Qe[u] || Qe._default, o.innerHTML = c[1] + s.replace($e, "<$1></$2>") + c[2], r = c[0]; r--;) o = o.lastChild;
          if (!ne.leadingWhitespace && Fe.test(s) && d.push(e.createTextNode(Fe.exec(s)[0])), !ne.tbody)
            for (s = "table" !== u || qe.test(s) ? "<table>" !== c[1] || qe.test(s) ? 0 : o : o.firstChild, r = s && s.childNodes.length; r--;) re.nodeName(l = s.childNodes[r], "tbody") && !l.childNodes.length && s.removeChild(l);
          for (re.merge(d, o.childNodes), o.textContent = ""; o.firstChild;) o.removeChild(o.firstChild);
          o = f.lastChild
        } else d.push(e.createTextNode(s));
        for (o && f.removeChild(o), ne.appendChecked || re.grep(_(d, "input"), g), p = 0; s = d[p++];)
          if ((!i || -1 === re.inArray(s, i)) && (a = re.contains(s.ownerDocument, s), o = _(f.appendChild(s), "script"), a && w(o), n))
            for (r = 0; s = o[r++];) Be.test(s.type || "") && n.push(s);
        return o = null, f
      },
      cleanData: function (t, e) {
        for (var n, i, r, s, a = 0, o = re.expando, u = re.cache, l = ne.deleteExpando, c = re.event.special; null != (n = t[a]); a++)
          if ((e || re.acceptData(n)) && (r = n[o], s = r && u[r])) {
            if (s.events)
              for (i in s.events) c[i] ? re.event.remove(n, i) : re.removeEvent(n, i, s.handle);
            u[r] && (delete u[r], l ? delete n[o] : typeof n.removeAttribute !== Te ? n.removeAttribute(o) : n[o] = null, X.push(r))
          }
      }
    }), re.fn.extend({
      text: function (t) {
        return Ae(this, function (t) {
          return void 0 === t ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pe).createTextNode(t))
        }, null, t, arguments.length)
      },
      append: function () {
        return this.domManip(arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = v(this, t);
            e.appendChild(t)
          }
        })
      },
      prepend: function () {
        return this.domManip(arguments, function (t) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var e = v(this, t);
            e.insertBefore(t, e.firstChild)
          }
        })
      },
      before: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this)
        })
      },
      after: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
        })
      },
      remove: function (t, e) {
        for (var n, i = t ? re.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || re.cleanData(_(n)), n.parentNode && (e && re.contains(n.ownerDocument, n) && w(_(n, "script")), n.parentNode.removeChild(n));
        return this
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++) {
          for (1 === t.nodeType && re.cleanData(_(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
          t.options && re.nodeName(t, "select") && (t.options.length = 0)
        }
        return this
      },
      clone: function (t, e) {
        return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
          return re.clone(this, t, e)
        })
      },
      html: function (t) {
        return Ae(this, function (t) {
          var e = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ie, "") : void 0;
          if (!("string" != typeof t || Ue.test(t) || !ne.htmlSerialize && Ye.test(t) || !ne.leadingWhitespace && Fe.test(t) || Qe[(ze.exec(t) || ["", ""])[1].toLowerCase()])) {
            t = t.replace($e, "<$1></$2>");
            try {
              for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (re.cleanData(_(e, !1)), e.innerHTML = t);
              e = 0
            } catch (r) {}
          }
          e && this.empty().append(t)
        }, null, t, arguments.length)
      },
      replaceWith: function () {
        var t = arguments[0];
        return this.domManip(arguments, function (e) {
          t = this.parentNode, re.cleanData(_(this)), t && t.replaceChild(e, this)
        }), t && (t.length || t.nodeType) ? this : this.remove()
      },
      detach: function (t) {
        return this.remove(t, !0)
      },
      domManip: function (t, e) {
        t = V.apply([], t);
        var n, i, r, s, a, o, u = 0,
          l = this.length,
          c = this,
          h = l - 1,
          f = t[0],
          d = re.isFunction(f);
        if (d || l > 1 && "string" == typeof f && !ne.checkClone && We.test(f)) return this.each(function (n) {
          var i = c.eq(n);
          d && (t[0] = f.call(this, n, i.html())), i.domManip(t, e)
        });
        if (l && (o = re.buildFragment(t, this[0].ownerDocument, !1, this), n = o.firstChild, 1 === o.childNodes.length && (o = n), n)) {
          for (s = re.map(_(o, "script"), y), r = s.length; l > u; u++) i = o, u !== h && (i = re.clone(i, !0, !0), r && re.merge(s, _(i, "script"))), e.call(this[u], i, u);
          if (r)
            for (a = s[s.length - 1].ownerDocument, re.map(s, b), u = 0; r > u; u++) i = s[u], Be.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xe, "")));
          o = n = null
        }
        return this
      }
    }), re.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (t, e) {
      re.fn[t] = function (t) {
        for (var n, i = 0, r = [], s = re(t), a = s.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(s[i])[e](n), Z.apply(r, n.get());
        return this.pushStack(r)
      }
    });
    var Je, Ke = {};
    ! function () {
      var t;
      ne.shrinkWrapBlocks = function () {
        if (null != t) return t;
        t = !1;
        var e, n, i;
        return n = pe.getElementsByTagName("body")[0], n && n.style ? (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== Te && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
      }
    }();
    var tn, en, nn = /^margin/,
      rn = new RegExp("^(" + Ce + ")(?!px)[a-z%]+$", "i"),
      sn = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (tn = function (t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)
      }, en = function (t, e, n) {
        var i, r, s, a, o = t.style;
        return n = n || tn(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || re.contains(t.ownerDocument, t) || (a = re.style(t, e)), rn.test(a) && nn.test(e) && (i = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = n.width, o.width = i, o.minWidth = r, o.maxWidth = s)), void 0 === a ? a : a + ""
      }) : pe.documentElement.currentStyle && (tn = function (t) {
        return t.currentStyle
      }, en = function (t, e, n) {
        var i, r, s, a, o = t.style;
        return n = n || tn(t), a = n ? n[e] : void 0, null == a && o && o[e] && (a = o[e]), rn.test(a) && !sn.test(e) && (i = o.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), o.left = "fontSize" === e ? "1em" : a, a = o.pixelLeft + "px", o.left = i, s && (r.left = s)), void 0 === a ? a : a + "" || "auto"
      }),
      function () {
        function e() {
          var e, n, i, r;
          n = pe.getElementsByTagName("body")[0], n && n.style && (e = pe.createElement("div"), i = pe.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = a = !1, u = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
            width: "4px"
          }).width, r = e.appendChild(pe.createElement("div")), r.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", u = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = e.getElementsByTagName("td"), r[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === r[0].offsetHeight, o && (r[0].style.display = "", r[1].style.display = "none", o = 0 === r[0].offsetHeight), n.removeChild(i))
        }
        var n, i, r, s, a, o, u;
        n = pe.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = n.getElementsByTagName("a")[0], i = r && r.style, i && (i.cssText = "float:left;opacity:.5", ne.opacity = "0.5" === i.opacity, ne.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === n.style.backgroundClip, ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, re.extend(ne, {
          reliableHiddenOffsets: function () {
            return null == o && e(), o
          },
          boxSizingReliable: function () {
            return null == a && e(), a
          },
          pixelPosition: function () {
            return null == s && e(), s
          },
          reliableMarginRight: function () {
            return null == u && e(), u
          }
        }))
      }(), re.swap = function (t, e, n, i) {
        var r, s, a = {};
        for (s in e) a[s] = t.style[s], t.style[s] = e[s];
        r = n.apply(t, i || []);
        for (s in e) t.style[s] = a[s];
        return r
      };
    var an = /alpha\([^)]*\)/i,
      on = /opacity\s*=\s*([^)]*)/,
      un = /^(none|table(?!-c[ea]).+)/,
      ln = new RegExp("^(" + Ce + ")(.*)$", "i"),
      cn = new RegExp("^([+-])=(" + Ce + ")", "i"),
      hn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      fn = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      dn = ["Webkit", "O", "Moz", "ms"];
    re.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = en(t, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": ne.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function (t, e, n, i) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var r, s, a, o = re.camelCase(e),
            u = t.style;
          if (e = re.cssProps[o] || (re.cssProps[o] = D(u, o)), a = re.cssHooks[e] || re.cssHooks[o], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : u[e];
          if (s = typeof n, "string" === s && (r = cn.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(t, e)), s = "number"), null != n && n === n && ("number" !== s || re.cssNumber[o] || (n += "px"), ne.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
            u[e] = n
          } catch (l) {}
        }
      },
      css: function (t, e, n, i) {
        var r, s, a, o = re.camelCase(e);
        return e = re.cssProps[o] || (re.cssProps[o] = D(t.style, o)), a = re.cssHooks[e] || re.cssHooks[o], a && "get" in a && (s = a.get(t, !0, n)), void 0 === s && (s = en(t, e, i)), "normal" === s && e in fn && (s = fn[e]), "" === n || n ? (r = parseFloat(s), n === !0 || re.isNumeric(r) ? r || 0 : s) : s
      }
    }), re.each(["height", "width"], function (t, e) {
      re.cssHooks[e] = {
        get: function (t, n, i) {
          return n ? un.test(re.css(t, "display")) && 0 === t.offsetWidth ? re.swap(t, hn, function () {
            return O(t, e, i)
          }) : O(t, e, i) : void 0
        },
        set: function (t, n, i) {
          var r = i && tn(t);
          return A(t, n, i ? P(t, e, i, ne.boxSizing && "border-box" === re.css(t, "boxSizing", !1, r), r) : 0)
        }
      }
    }), ne.opacity || (re.cssHooks.opacity = {
      get: function (t, e) {
        return on.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
      },
      set: function (t, e) {
        var n = t.style,
          i = t.currentStyle,
          r = re.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
          s = i && i.filter || n.filter || "";
        n.zoom = 1, (e >= 1 || "" === e) && "" === re.trim(s.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = an.test(s) ? s.replace(an, r) : s + " " + r)
      }
    }), re.cssHooks.marginRight = C(ne.reliableMarginRight, function (t, e) {
      return e ? re.swap(t, {
        display: "inline-block"
      }, en, [t, "marginRight"]) : void 0
    }), re.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (t, e) {
      re.cssHooks[t + e] = {
        expand: function (n) {
          for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + De[i] + e] = s[i] || s[i - 2] || s[0];
          return r
        }
      }, nn.test(t) || (re.cssHooks[t + e].set = A)
    }), re.fn.extend({
      css: function (t, e) {
        return Ae(this, function (t, e, n) {
          var i, r, s = {},
            a = 0;
          if (re.isArray(e)) {
            for (i = tn(t), r = e.length; r > a; a++) s[e[a]] = re.css(t, e[a], !1, i);
            return s
          }
          return void 0 !== n ? re.style(t, e, n) : re.css(t, e)
        }, t, e, arguments.length > 1)
      },
      show: function () {
        return M(this, !0)
      },
      hide: function () {
        return M(this)
      },
      toggle: function (t) {
        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
          Me(this) ? re(this).show() : re(this).hide()
        })
      }
    }), re.Tween = E, E.prototype = {
      constructor: E,
      init: function (t, e, n, i, r, s) {
        this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (re.cssNumber[n] ? "" : "px")
      },
      cur: function () {
        var t = E.propHooks[this.prop];
        return t && t.get ? t.get(this) : E.propHooks._default.get(this)
      },
      run: function (t) {
        var e, n = E.propHooks[this.prop];
        return this.pos = e = this.options.duration ? re.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this
      }
    }, E.prototype.init.prototype = E.prototype, E.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = re.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
        },
        set: function (t) {
          re.fx.step[t.prop] ? re.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[re.cssProps[t.prop]] || re.cssHooks[t.prop]) ? re.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
        }
      }
    }, E.propHooks.scrollTop = E.propHooks.scrollLeft = {
      set: function (t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
      }
    }, re.easing = {
      linear: function (t) {
        return t
      },
      swing: function (t) {
        return .5 - Math.cos(t * Math.PI) / 2
      }
    }, re.fx = E.prototype.init, re.fx.step = {};
    var pn, mn, _n = /^(?:toggle|show|hide)$/,
      gn = new RegExp("^(?:([+-])=|)(" + Ce + ")([a-z%]*)$", "i"),
      vn = /queueHooks$/,
      yn = [N],
      bn = {
        "*": [function (t, e) {
          var n = this.createTween(t, e),
            i = n.cur(),
            r = gn.exec(e),
            s = r && r[3] || (re.cssNumber[t] ? "" : "px"),
            a = (re.cssNumber[t] || "px" !== s && +i) && gn.exec(re.css(n.elem, t)),
            o = 1,
            u = 20;
          if (a && a[3] !== s) {
            s = s || a[3], r = r || [], a = +i || 1;
            do o = o || ".5", a /= o, re.style(n.elem, t, a + s); while (o !== (o = n.cur() / i) && 1 !== o && --u)
          }
          return r && (a = n.start = +a || +i || 0, n.unit = s, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n
        }]
      };
    re.Animation = re.extend(Y, {
        tweener: function (t, e) {
          re.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
          for (var n, i = 0, r = t.length; r > i; i++) n = t[i], bn[n] = bn[n] || [], bn[n].unshift(e)
        },
        prefilter: function (t, e) {
          e ? yn.unshift(t) : yn.push(t)
        }
      }), re.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? re.extend({}, t) : {
          complete: n || !n && e || re.isFunction(t) && t,
          duration: t,
          easing: n && e || e && !re.isFunction(e) && e
        };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
          re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
        }, i
      }, re.fn.extend({
        fadeTo: function (t, e, n, i) {
          return this.filter(Me).css("opacity", 0).show().end().animate({
            opacity: e
          }, t, n, i)
        },
        animate: function (t, e, n, i) {
          var r = re.isEmptyObject(t),
            s = re.speed(e, n, i),
            a = function () {
              var e = Y(this, re.extend({}, t), s);
              (r || re._data(this, "finish")) && e.stop(!0)
            };
          return a.finish = a, r || s.queue === !1 ? this.each(a) : this.queue(s.queue, a)
        },
        stop: function (t, e, n) {
          var i = function (t) {
            var e = t.stop;
            delete t.stop, e(n)
          };
          return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
            var e = !0,
              r = null != t && t + "queueHooks",
              s = re.timers,
              a = re._data(this);
            if (r) a[r] && a[r].stop && i(a[r]);
            else
              for (r in a) a[r] && a[r].stop && vn.test(r) && i(a[r]);
            for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
            (e || !n) && re.dequeue(this, t)
          })
        },
        finish: function (t) {
          return t !== !1 && (t = t || "fx"), this.each(function () {
            var e, n = re._data(this),
              i = n[t + "queue"],
              r = n[t + "queueHooks"],
              s = re.timers,
              a = i ? i.length : 0;
            for (n.finish = !0, re.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
            for (e = 0; a > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
            delete n.finish
          })
        }
      }), re.each(["toggle", "show", "hide"], function (t, e) {
        var n = re.fn[e];
        re.fn[e] = function (t, i, r) {
          return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, r)
        }
      }), re.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (t, e) {
        re.fn[t] = function (t, n, i) {
          return this.animate(e, t, n, i)
        }
      }), re.timers = [], re.fx.tick = function () {
        var t, e = re.timers,
          n = 0;
        for (pn = re.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || re.fx.stop(), pn = void 0
      }, re.fx.timer = function (t) {
        re.timers.push(t), t() ? re.fx.start() : re.timers.pop()
      }, re.fx.interval = 13, re.fx.start = function () {
        mn || (mn = setInterval(re.fx.tick, re.fx.interval))
      }, re.fx.stop = function () {
        clearInterval(mn), mn = null
      }, re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, re.fn.delay = function (t, e) {
        return t = re.fx ? re.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
          var i = setTimeout(e, t);
          n.stop = function () {
            clearTimeout(i)
          }
        })
      },
      function () {
        var t, e, n, i, r;
        e = pe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = pe.createElement("select"), r = n.appendChild(pe.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", ne.getSetAttribute = "t" !== e.className, ne.style = /top/.test(i.getAttribute("style")), ne.hrefNormalized = "/a" === i.getAttribute("href"), ne.checkOn = !!t.value, ne.optSelected = r.selected, ne.enctype = !!pe.createElement("form").enctype, n.disabled = !0, ne.optDisabled = !r.disabled, t = pe.createElement("input"), t.setAttribute("value", ""), ne.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ne.radioValue = "t" === t.value
      }();
    var wn = /\r/g;
    re.fn.extend({
      val: function (t) {
        var e, n, i, r = this[0]; {
          if (arguments.length) return i = re.isFunction(t), this.each(function (n) {
            var r;
            1 === this.nodeType && (r = i ? t.call(this, n, re(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function (t) {
              return null == t ? "" : t + ""
            })), e = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
          });
          if (r) return e = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wn, "") : null == n ? "" : n)
        }
      }
    }), re.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = re.find.attr(t, "value");
            return null != e ? e : re.trim(re.text(t))
          }
        },
        select: {
          get: function (t) {
            for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, a = s ? null : [], o = s ? r + 1 : i.length, u = 0 > r ? o : s ? r : 0; o > u; u++)
              if (n = i[u], !(!n.selected && u !== r || (ne.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                if (e = re(n).val(), s) return e;
                a.push(e)
              }
            return a
          },
          set: function (t, e) {
            for (var n, i, r = t.options, s = re.makeArray(e), a = r.length; a--;)
              if (i = r[a], re.inArray(re.valHooks.option.get(i), s) >= 0) try {
                i.selected = n = !0
              } catch (o) {
                i.scrollHeight
              } else i.selected = !1;
            return n || (t.selectedIndex = -1), r
          }
        }
      }
    }), re.each(["radio", "checkbox"], function () {
      re.valHooks[this] = {
        set: function (t, e) {
          return re.isArray(e) ? t.checked = re.inArray(re(t).val(), e) >= 0 : void 0
        }
      }, ne.checkOn || (re.valHooks[this].get = function (t) {
        return null === t.getAttribute("value") ? "on" : t.value
      })
    });
    var xn, Tn, kn = re.expr.attrHandle,
      Sn = /^(?:checked|selected)$/i,
      Cn = ne.getSetAttribute,
      Dn = ne.input;
    re.fn.extend({
      attr: function (t, e) {
        return Ae(this, re.attr, t, e, arguments.length > 1)
      },
      removeAttr: function (t) {
        return this.each(function () {
          re.removeAttr(this, t)
        })
      }
    }), re.extend({
      attr: function (t, e, n) {
        var i, r, s = t.nodeType;
        if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === Te ? re.prop(t, e, n) : (1 === s && re.isXMLDoc(t) || (e = e.toLowerCase(), i = re.attrHooks[e] || (re.expr.match.bool.test(e) ? Tn : xn)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = re.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void re.removeAttr(t, e))
      },
      removeAttr: function (t, e) {
        var n, i, r = 0,
          s = e && e.match(ye);
        if (s && 1 === t.nodeType)
          for (; n = s[r++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Dn && Cn || !Sn.test(n) ? t[i] = !1 : t[re.camelCase("default-" + n)] = t[i] = !1 : re.attr(t, n, ""), t.removeAttribute(Cn ? n : i)
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!ne.radioValue && "radio" === e && re.nodeName(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e
            }
          }
        }
      }
    }), Tn = {
      set: function (t, e, n) {
        return e === !1 ? re.removeAttr(t, n) : Dn && Cn || !Sn.test(n) ? t.setAttribute(!Cn && re.propFix[n] || n, n) : t[re.camelCase("default-" + n)] = t[n] = !0, n
      }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = kn[e] || re.find.attr;
      kn[e] = Dn && Cn || !Sn.test(e) ? function (t, e, i) {
        var r, s;
        return i || (s = kn[e], kn[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, kn[e] = s), r
      } : function (t, e, n) {
        return n ? void 0 : t[re.camelCase("default-" + e)] ? e.toLowerCase() : null
      }
    }), Dn && Cn || (re.attrHooks.value = {
      set: function (t, e, n) {
        return re.nodeName(t, "input") ? void(t.defaultValue = e) : xn && xn.set(t, e, n)
      }
    }), Cn || (xn = {
      set: function (t, e, n) {
        var i = t.getAttributeNode(n);
        return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
      }
    }, kn.id = kn.name = kn.coords = function (t, e, n) {
      var i;
      return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, re.valHooks.button = {
      get: function (t, e) {
        var n = t.getAttributeNode(e);
        return n && n.specified ? n.value : void 0
      },
      set: xn.set
    }, re.attrHooks.contenteditable = {
      set: function (t, e, n) {
        xn.set(t, "" === e ? !1 : e, n)
      }
    }, re.each(["width", "height"], function (t, e) {
      re.attrHooks[e] = {
        set: function (t, n) {
          return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
        }
      }
    })), ne.style || (re.attrHooks.style = {
      get: function (t) {
        return t.style.cssText || void 0
      },
      set: function (t, e) {
        return t.style.cssText = e + ""
      }
    });
    var Mn = /^(?:input|select|textarea|button|object)$/i,
      An = /^(?:a|area)$/i;
    re.fn.extend({
      prop: function (t, e) {
        return Ae(this, re.prop, t, e, arguments.length > 1)
      },
      removeProp: function (t) {
        return t = re.propFix[t] || t, this.each(function () {
          try {
            this[t] = void 0, delete this[t]
          } catch (e) {}
        })
      }
    }), re.extend({
      propFix: {
        "for": "htmlFor",
        "class": "className"
      },
      prop: function (t, e, n) {
        var i, r, s, a = t.nodeType;
        if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !re.isXMLDoc(t), s && (e = re.propFix[e] || e, r = re.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = re.find.attr(t, "tabindex");
            return e ? parseInt(e, 10) : Mn.test(t.nodeName) || An.test(t.nodeName) && t.href ? 0 : -1
          }
        }
      }
    }), ne.hrefNormalized || re.each(["href", "src"], function (t, e) {
      re.propHooks[e] = {
        get: function (t) {
          return t.getAttribute(e, 4)
        }
      }
    }), ne.optSelected || (re.propHooks.selected = {
      get: function (t) {
        var e = t.parentNode;
        return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
      }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      re.propFix[this.toLowerCase()] = this
    }), ne.enctype || (re.propFix.enctype = "encoding");
    var Pn = /[\t\r\n\f]/g;
    re.fn.extend({
      addClass: function (t) {
        var e, n, i, r, s, a, o = 0,
          u = this.length,
          l = "string" == typeof t && t;
        if (re.isFunction(t)) return this.each(function (e) {
          re(this).addClass(t.call(this, e, this.className))
        });
        if (l)
          for (e = (t || "").match(ye) || []; u > o; o++)
            if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pn, " ") : " ")) {
              for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              a = re.trim(i), n.className !== a && (n.className = a)
            }
        return this
      },
      removeClass: function (t) {
        var e, n, i, r, s, a, o = 0,
          u = this.length,
          l = 0 === arguments.length || "string" == typeof t && t;
        if (re.isFunction(t)) return this.each(function (e) {
          re(this).removeClass(t.call(this, e, this.className))
        });
        if (l)
          for (e = (t || "").match(ye) || []; u > o; o++)
            if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pn, " ") : "")) {
              for (s = 0; r = e[s++];)
                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
              a = t ? re.trim(i) : "", n.className !== a && (n.className = a)
            }
        return this
      },
      toggleClass: function (t, e) {
        var n = typeof t;
        return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(re.isFunction(t) ? function (n) {
          re(this).toggleClass(t.call(this, n, this.className, e), e)
        } : function () {
          if ("string" === n)
            for (var e, i = 0, r = re(this), s = t.match(ye) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
          else(n === Te || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : re._data(this, "__className__") || "")
        })
      },
      hasClass: function (t) {
        for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
          if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pn, " ").indexOf(e) >= 0) return !0;
        return !1
      }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
      re.fn[e] = function (t, n) {
        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
      }
    }), re.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t)
      },
      bind: function (t, e, n) {
        return this.on(t, null, e, n)
      },
      unbind: function (t, e) {
        return this.off(t, null, e)
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i)
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
      }
    });
    var On = re.now(),
      En = /\?/,
      Rn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function (e) {
      if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
      var n, i = null,
        r = re.trim(e + "");
      return r && !re.trim(r.replace(Rn, function (t, e, r, s) {
        return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !s - !r, "")
      })) ? Function("return " + r)() : re.error("Invalid JSON: " + e)
    }, re.parseXML = function (e) {
      var n, i;
      if (!e || "string" != typeof e) return null;
      try {
        t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
      } catch (r) {
        n = void 0
      }
      return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + e), n
    };
    var jn, Ln, Nn = /#.*$/,
      In = /([?&])_=[^&]*/,
      Yn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      $n = /^(?:GET|HEAD)$/,
      zn = /^\/\//,
      qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Hn = {},
      Un = {},
      Wn = "*/".concat("*");
    try {
      Ln = location.href
    } catch (Bn) {
      Ln = pe.createElement("a"), Ln.href = "", Ln = Ln.href
    }
    jn = qn.exec(Ln.toLowerCase()) || [], re.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ln,
        type: "GET",
        isLocal: Fn.test(jn[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Wn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": re.parseJSON,
          "text xml": re.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function (t, e) {
        return e ? z(z(t, re.ajaxSettings), e) : z(re.ajaxSettings, t)
      },
      ajaxPrefilter: F(Hn),
      ajaxTransport: F(Un),
      ajax: function (t, e) {
        function n(t, e, n, i) {
          var r, c, g, v, b, x = e;
          2 !== y && (y = 2, o && clearTimeout(o), l = void 0, a = i || "", w.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (v = q(h, w, n)), v = H(h, v, w, r), r ? (h.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (re.lastModified[s] = b), b = w.getResponseHeader("etag"), b && (re.etag[s] = b)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = v.state, c = v.data, g = v.error, r = !g)) : (g = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", r ? p.resolveWith(f, [c, x, w]) : p.rejectWith(f, [w, x, g]), w.statusCode(_), _ = void 0, u && d.trigger(r ? "ajaxSuccess" : "ajaxError", [w, h, r ? c : g]), m.fireWith(f, [w, x]), u && (d.trigger("ajaxComplete", [w, h]), --re.active || re.event.trigger("ajaxStop")))
        }
        "object" == typeof t && (e = t, t = void 0), e = e || {};
        var i, r, s, a, o, u, l, c, h = re.ajaxSetup({}, e),
          f = h.context || h,
          d = h.context && (f.nodeType || f.jquery) ? re(f) : re.event,
          p = re.Deferred(),
          m = re.Callbacks("once memory"),
          _ = h.statusCode || {},
          g = {},
          v = {},
          y = 0,
          b = "canceled",
          w = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === y) {
                if (!c)
                  for (c = {}; e = Yn.exec(a);) c[e[1].toLowerCase()] = e[2];
                e = c[t.toLowerCase()]
              }
              return null == e ? null : e
            },
            getAllResponseHeaders: function () {
              return 2 === y ? a : null
            },
            setRequestHeader: function (t, e) {
              var n = t.toLowerCase();
              return y || (t = v[n] = v[n] || t, g[t] = e), this
            },
            overrideMimeType: function (t) {
              return y || (h.mimeType = t), this
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > y)
                  for (e in t) _[e] = [_[e], t[e]];
                else w.always(t[w.status]);
              return this
            },
            abort: function (t) {
              var e = t || b;
              return l && l.abort(e), n(0, e), this
            }
          };
        if (p.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || Ln) + "").replace(Nn, "").replace(zn, jn[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = re.trim(h.dataType || "*").toLowerCase().match(ye) || [""], null == h.crossDomain && (i = qn.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === jn[1] && i[2] === jn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (jn[3] || ("http:" === jn[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = re.param(h.data, h.traditional)), $(Hn, h, e, w), 2 === y) return w;
        u = h.global, u && 0 === re.active++ && re.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$n.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (En.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = In.test(s) ? s.replace(In, "$1_=" + On++) : s + (En.test(s) ? "&" : "?") + "_=" + On++)), h.ifModified && (re.lastModified[s] && w.setRequestHeader("If-Modified-Since", re.lastModified[s]), re.etag[s] && w.setRequestHeader("If-None-Match", re.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Wn + "; q=0.01" : "") : h.accepts["*"]);
        for (r in h.headers) w.setRequestHeader(r, h.headers[r]);
        if (h.beforeSend && (h.beforeSend.call(f, w, h) === !1 || 2 === y)) return w.abort();
        b = "abort";
        for (r in {
            success: 1,
            error: 1,
            complete: 1
          }) w[r](h[r]);
        if (l = $(Un, h, e, w)) {
          w.readyState = 1, u && d.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (o = setTimeout(function () {
            w.abort("timeout")
          }, h.timeout));
          try {
            y = 1, l.send(g, n)
          } catch (x) {
            if (!(2 > y)) throw x;
            n(-1, x)
          }
        } else n(-1, "No Transport");
        return w
      },
      getJSON: function (t, e, n) {
        return re.get(t, e, n, "json")
      },
      getScript: function (t, e) {
        return re.get(t, void 0, e, "script")
      }
    }), re.each(["get", "post"], function (t, e) {
      re[e] = function (t, n, i, r) {
        return re.isFunction(n) && (r = r || i, i = n, n = void 0), re.ajax({
          url: t,
          type: e,
          dataType: r,
          data: n,
          success: i
        })
      }
    }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
      re.fn[e] = function (t) {
        return this.on(e, t)
      }
    }), re._evalUrl = function (t) {
      return re.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      })
    }, re.fn.extend({
      wrapAll: function (t) {
        if (re.isFunction(t)) return this.each(function (e) {
          re(this).wrapAll(t.call(this, e))
        });
        if (this[0]) {
          var e = re(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
            for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
            return t
          }).append(this)
        }
        return this
      },
      wrapInner: function (t) {
        return this.each(re.isFunction(t) ? function (e) {
          re(this).wrapInner(t.call(this, e))
        } : function () {
          var e = re(this),
            n = e.contents();
          n.length ? n.wrapAll(t) : e.append(t)
        })
      },
      wrap: function (t) {
        var e = re.isFunction(t);
        return this.each(function (n) {
          re(this).wrapAll(e ? t.call(this, n) : t)
        })
      },
      unwrap: function () {
        return this.parent().each(function () {
          re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
        }).end()
      }
    }), re.expr.filters.hidden = function (t) {
      return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (t.style && t.style.display || re.css(t, "display"))
    }, re.expr.filters.visible = function (t) {
      return !re.expr.filters.hidden(t)
    };
    var Gn = /%20/g,
      Xn = /\[\]$/,
      Qn = /\r?\n/g,
      Vn = /^(?:submit|button|image|reset|file)$/i,
      Zn = /^(?:input|select|textarea|keygen)/i;
    re.param = function (t, e) {
      var n, i = [],
        r = function (t, e) {
          e = re.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
      if (void 0 === e && (e = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(t) || t.jquery && !re.isPlainObject(t)) re.each(t, function () {
        r(this.name, this.value)
      });
      else
        for (n in t) U(n, t[n], e, r);
      return i.join("&").replace(Gn, "+")
    }, re.fn.extend({
      serialize: function () {
        return re.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var t = re.prop(this, "elements");
          return t ? re.makeArray(t) : this
        }).filter(function () {
          var t = this.type;
          return this.name && !re(this).is(":disabled") && Zn.test(this.nodeName) && !Vn.test(t) && (this.checked || !Pe.test(t))
        }).map(function (t, e) {
          var n = re(this).val();
          return null == n ? null : re.isArray(n) ? re.map(n, function (t) {
            return {
              name: e.name,
              value: t.replace(Qn, "\r\n")
            }
          }) : {
            name: e.name,
            value: n.replace(Qn, "\r\n")
          }
        }).get()
      }
    }), re.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
      return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || B()
    } : W;
    var Jn = 0,
      Kn = {},
      ti = re.ajaxSettings.xhr();
    t.ActiveXObject && re(t).on("unload", function () {
      for (var t in Kn) Kn[t](void 0, !0)
    }), ne.cors = !!ti && "withCredentials" in ti, ti = ne.ajax = !!ti, ti && re.ajaxTransport(function (t) {
      if (!t.crossDomain || ne.cors) {
        var e;
        return {
          send: function (n, i) {
            var r, s = t.xhr(),
              a = ++Jn;
            if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
              for (r in t.xhrFields) s[r] = t.xhrFields[r];
            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
            for (r in n) void 0 !== n[r] && s.setRequestHeader(r, n[r] + "");
            s.send(t.hasContent && t.data || null), e = function (n, r) {
              var o, u, l;
              if (e && (r || 4 === s.readyState))
                if (delete Kn[a], e = void 0, s.onreadystatechange = re.noop, r) 4 !== s.readyState && s.abort();
                else {
                  l = {}, o = s.status, "string" == typeof s.responseText && (l.text = s.responseText);
                  try {
                    u = s.statusText
                  } catch (c) {
                    u = ""
                  }
                  o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                }
              l && i(o, u, l, s.getAllResponseHeaders())
            }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Kn[a] = e : e()
          },
          abort: function () {
            e && e(void 0, !0)
          }
        }
      }
    }), re.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function (t) {
          return re.globalEval(t), t
        }
      }
    }), re.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), re.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e, n = pe.head || re("head")[0] || pe.documentElement;
        return {
          send: function (i, r) {
            e = pe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
              (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
            }, n.insertBefore(e, n.firstChild)
          },
          abort: function () {
            e && e.onload(void 0, !0)
          }
        }
      }
    });
    var ei = [],
      ni = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var t = ei.pop() || re.expando + "_" + On++;
        return this[t] = !0, t
      }
    }), re.ajaxPrefilter("json jsonp", function (e, n, i) {
      var r, s, a, o = e.jsonp !== !1 && (ni.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(e.data) && "data");
      return o || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = re.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(ni, "$1" + r) : e.jsonp !== !1 && (e.url += (En.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
        return a || re.error(r + " was not called"), a[0]
      }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
        a = arguments
      }, i.always(function () {
        t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, ei.push(r)), a && re.isFunction(s) && s(a[0]), a = s = void 0
      }), "script") : void 0
    }), re.parseHTML = function (t, e, n) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && (n = e, e = !1), e = e || pe;
      var i = he.exec(t),
        r = !n && [];
      return i ? [e.createElement(i[1])] : (i = re.buildFragment([t], e, r), r && r.length && re(r).remove(), re.merge([], i.childNodes))
    };
    var ii = re.fn.load;
    re.fn.load = function (t, e, n) {
      if ("string" != typeof t && ii) return ii.apply(this, arguments);
      var i, r, s, a = this,
        o = t.indexOf(" ");
      return o >= 0 && (i = re.trim(t.slice(o, t.length)), t = t.slice(0, o)), re.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && re.ajax({
        url: t,
        type: s,
        dataType: "html",
        data: e
      }).done(function (t) {
        r = arguments, a.html(i ? re("<div>").append(re.parseHTML(t)).find(i) : t)
      }).complete(n && function (t, e) {
        a.each(n, r || [t.responseText, e, t])
      }), this
    }, re.expr.filters.animated = function (t) {
      return re.grep(re.timers, function (e) {
        return t === e.elem
      }).length
    };
    var ri = t.document.documentElement;
    re.offset = {
      setOffset: function (t, e, n) {
        var i, r, s, a, o, u, l, c = re.css(t, "position"),
          h = re(t),
          f = {};
        "static" === c && (t.style.position = "relative"), o = h.offset(), s = re.css(t, "top"), u = re.css(t, "left"), l = ("absolute" === c || "fixed" === c) && re.inArray("auto", [s, u]) > -1, l ? (i = h.position(), a = i.top, r = i.left) : (a = parseFloat(s) || 0, r = parseFloat(u) || 0), re.isFunction(e) && (e = e.call(t, n, o)), null != e.top && (f.top = e.top - o.top + a), null != e.left && (f.left = e.left - o.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
      }
    }, re.fn.extend({
      offset: function (t) {
        if (arguments.length) return void 0 === t ? this : this.each(function (e) {
          re.offset.setOffset(this, t, e)
        });
        var e, n, i = {
            top: 0,
            left: 0
          },
          r = this[0],
          s = r && r.ownerDocument;
        if (s) return e = s.documentElement, re.contains(e, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()), n = G(s), {
          top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
          left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }) : i
      },
      position: function () {
        if (this[0]) {
          var t, e, n = {
              top: 0,
              left: 0
            },
            i = this[0];
          return "fixed" === re.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), re.nodeName(t[0], "html") || (n = t.offset()), n.top += re.css(t[0], "borderTopWidth", !0), n.left += re.css(t[0], "borderLeftWidth", !0)), {
            top: e.top - n.top - re.css(i, "marginTop", !0),
            left: e.left - n.left - re.css(i, "marginLeft", !0)
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent || ri; t && !re.nodeName(t, "html") && "static" === re.css(t, "position");) t = t.offsetParent;
          return t || ri
        })
      }
    }), re.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (t, e) {
      var n = /Y/.test(e);
      re.fn[t] = function (i) {
        return Ae(this, function (t, i, r) {
          var s = G(t);
          return void 0 === r ? s ? e in s ? s[e] : s.document.documentElement[i] : t[i] : void(s ? s.scrollTo(n ? re(s).scrollLeft() : r, n ? r : re(s).scrollTop()) : t[i] = r)
        }, t, i, arguments.length, null)
      }
    }), re.each(["top", "left"], function (t, e) {
      re.cssHooks[e] = C(ne.pixelPosition, function (t, n) {
        return n ? (n = en(t, e), rn.test(n) ? re(t).position()[e] + "px" : n) : void 0
      })
    }), re.each({
      Height: "height",
      Width: "width"
    }, function (t, e) {
      re.each({
        padding: "inner" + t,
        content: e,
        "": "outer" + t
      }, function (n, i) {
        re.fn[i] = function (i, r) {
          var s = arguments.length && (n || "boolean" != typeof i),
            a = n || (i === !0 || r === !0 ? "margin" : "border");
          return Ae(this, function (e, n, i) {
            var r;
            return re.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? re.css(e, n, a) : re.style(e, n, i, a)
          }, e, s ? i : void 0, s, null)
        }
      })
    }), re.fn.size = function () {
      return this.length
    }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
      return re
    });
    var si = t.jQuery,
      ai = t.$;
    return re.noConflict = function (e) {
      return t.$ === re && (t.$ = ai), e && t.jQuery === re && (t.jQuery = si), re
    }, typeof e === Te && (t.jQuery = t.$ = re), re
  }),
  function () {
    $(document).ready(function () {
      if ("undefined" != typeof ga) {
        ga("create", analytics_vars.google_analytics_id, "auto"), $("#project_category").length && ga("set", "dimension1", $("#project_category").attr("data-project-category")), ga("set", "dimension2", analytics_vars.logged_in), ga("set", "dimension3", analytics_vars.social_user), $("#projects_show").length && ga("set", "dimension4", $("#about").attr("data-project-state")), ga("set", "dimension5", I18n.browser_language), ga("set", "dimension6", I18n.chosen_language), ga("set", "dimension7", I18n.calculated_language), ga("set", "dimension8", I18n.display_language);
        try {
          ga("send", "pageview")
        } catch (t) {}
      }
    })
  }(), instrument_function(function (t) {
    this.root = window, this.packages = t, this.requires = function () {}
  })(this),
  function () {
    $(function () {
      $("body").hasClass("admin") || (root._sf_async_config = {
        uid: 5536,
        domain: window.location.hostname.replace("www.", "")
      }, root._sf_endpt = (new Date).getTime(), $.getScript("../../a248.e.akamai.net/chartbeat.download.akamai.com/102508/js/chartbeat.js"))
    })
  }(),
  function () {
    var t = this,
      e = t._,
      n = {},
      i = Array.prototype,
      r = Object.prototype,
      s = Function.prototype,
      a = i.push,
      o = i.slice,
      u = i.concat,
      l = r.toString,
      c = r.hasOwnProperty,
      h = i.forEach,
      f = i.map,
      d = i.reduce,
      p = i.reduceRight,
      m = i.filter,
      _ = i.every,
      g = i.some,
      v = i.indexOf,
      y = i.lastIndexOf,
      b = Array.isArray,
      w = Object.keys,
      x = s.bind,
      T = function (t) {
        return t instanceof T ? t : this instanceof T ? void(this._wrapped = t) : new T(t)
      };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = T), exports._ = T) : t._ = T, T.VERSION = "1.5.2";
    var k = T.each = T.forEach = function (t, e, i) {
      if (null != t)
        if (h && t.forEach === h) t.forEach(e, i);
        else if (t.length === +t.length) {
        for (var r = 0, s = t.length; s > r; r++)
          if (e.call(i, t[r], r, t) === n) return
      } else
        for (var a = T.keys(t), r = 0, s = a.length; s > r; r++)
          if (e.call(i, t[a[r]], a[r], t) === n) return
    };
    T.map = T.collect = function (t, e, n) {
      var i = [];
      return null == t ? i : f && t.map === f ? t.map(e, n) : (k(t, function (t, r, s) {
        i.push(e.call(n, t, r, s))
      }), i)
    };
    var S = "Reduce of empty array with no initial value";
    T.reduce = T.foldl = T.inject = function (t, e, n, i) {
      var r = arguments.length > 2;
      if (null == t && (t = []), d && t.reduce === d) return i && (e = T.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
      if (k(t, function (t, s, a) {
          r ? n = e.call(i, n, t, s, a) : (n = t, r = !0)
        }), !r) throw new TypeError(S);
      return n
    }, T.reduceRight = T.foldr = function (t, e, n, i) {
      var r = arguments.length > 2;
      if (null == t && (t = []), p && t.reduceRight === p) return i && (e = T.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
      var s = t.length;
      if (s !== +s) {
        var a = T.keys(t);
        s = a.length
      }
      if (k(t, function (o, u, l) {
          u = a ? a[--s] : --s, r ? n = e.call(i, n, t[u], u, l) : (n = t[u], r = !0)
        }), !r) throw new TypeError(S);
      return n
    }, T.find = T.detect = function (t, e, n) {
      var i;
      return C(t, function (t, r, s) {
        return e.call(n, t, r, s) ? (i = t, !0) : void 0
      }), i
    }, T.filter = T.select = function (t, e, n) {
      var i = [];
      return null == t ? i : m && t.filter === m ? t.filter(e, n) : (k(t, function (t, r, s) {
        e.call(n, t, r, s) && i.push(t)
      }), i)
    }, T.reject = function (t, e, n) {
      return T.filter(t, function (t, i, r) {
        return !e.call(n, t, i, r)
      }, n)
    }, T.every = T.all = function (t, e, i) {
      e || (e = T.identity);
      var r = !0;
      return null == t ? r : _ && t.every === _ ? t.every(e, i) : (k(t, function (t, s, a) {
        return (r = r && e.call(i, t, s, a)) ? void 0 : n
      }), !!r)
    };
    var C = T.some = T.any = function (t, e, i) {
      e || (e = T.identity);
      var r = !1;
      return null == t ? r : g && t.some === g ? t.some(e, i) : (k(t, function (t, s, a) {
        return r || (r = e.call(i, t, s, a)) ? n : void 0
      }), !!r)
    };
    T.contains = T.include = function (t, e) {
      return null == t ? !1 : v && t.indexOf === v ? -1 != t.indexOf(e) : C(t, function (t) {
        return t === e
      })
    }, T.invoke = function (t, e) {
      var n = o.call(arguments, 2),
        i = T.isFunction(e);
      return T.map(t, function (t) {
        return (i ? e : t[e]).apply(t, n)
      })
    }, T.pluck = function (t, e) {
      return T.map(t, function (t) {
        return t[e]
      })
    }, T.where = function (t, e, n) {
      return T.isEmpty(e) ? n ? void 0 : [] : T[n ? "find" : "filter"](t, function (t) {
        for (var n in e)
          if (e[n] !== t[n]) return !1;
        return !0
      })
    }, T.findWhere = function (t, e) {
      return T.where(t, e, !0)
    }, T.max = function (t, e, n) {
      if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
      if (!e && T.isEmpty(t)) return -1 / 0;
      var i = {
        computed: -1 / 0,
        value: -1 / 0
      };
      return k(t, function (t, r, s) {
        var a = e ? e.call(n, t, r, s) : t;
        a > i.computed && (i = {
          value: t,
          computed: a
        })
      }), i.value
    }, T.min = function (t, e, n) {
      if (!e && T.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
      if (!e && T.isEmpty(t)) return 1 / 0;
      var i = {
        computed: 1 / 0,
        value: 1 / 0
      };
      return k(t, function (t, r, s) {
        var a = e ? e.call(n, t, r, s) : t;
        a < i.computed && (i = {
          value: t,
          computed: a
        })
      }), i.value
    }, T.shuffle = function (t) {
      var e, n = 0,
        i = [];
      return k(t, function (t) {
        e = T.random(n++), i[n - 1] = i[e], i[e] = t
      }), i
    }, T.sample = function (t, e, n) {
      return arguments.length < 2 || n ? t[T.random(t.length - 1)] : T.shuffle(t).slice(0, Math.max(0, e))
    };
    var D = function (t) {
      return T.isFunction(t) ? t : function (e) {
        return e[t]
      }
    };
    T.sortBy = function (t, e, n) {
      var i = D(e);
      return T.pluck(T.map(t, function (t, e, r) {
        return {
          value: t,
          index: e,
          criteria: i.call(n, t, e, r)
        }
      }).sort(function (t, e) {
        var n = t.criteria,
          i = e.criteria;
        if (n !== i) {
          if (n > i || void 0 === n) return 1;
          if (i > n || void 0 === i) return -1
        }
        return t.index - e.index
      }), "value")
    };
    var M = function (t) {
      return function (e, n, i) {
        var r = {},
          s = null == n ? T.identity : D(n);
        return k(e, function (n, a) {
          var o = s.call(i, n, a, e);
          t(r, o, n)
        }), r
      }
    };
    T.groupBy = M(function (t, e, n) {
      (T.has(t, e) ? t[e] : t[e] = []).push(n)
    }), T.indexBy = M(function (t, e, n) {
      t[e] = n
    }), T.countBy = M(function (t, e) {
      T.has(t, e) ? t[e] ++ : t[e] = 1
    }), T.sortedIndex = function (t, e, n, i) {
      n = null == n ? T.identity : D(n);
      for (var r = n.call(i, e), s = 0, a = t.length; a > s;) {
        var o = s + a >>> 1;
        n.call(i, t[o]) < r ? s = o + 1 : a = o
      }
      return s
    }, T.toArray = function (t) {
      return t ? T.isArray(t) ? o.call(t) : t.length === +t.length ? T.map(t, T.identity) : T.values(t) : []
    }, T.size = function (t) {
      return null == t ? 0 : t.length === +t.length ? t.length : T.keys(t).length
    }, T.first = T.head = T.take = function (t, e, n) {
      return null == t ? void 0 : null == e || n ? t[0] : o.call(t, 0, e)
    }, T.initial = function (t, e, n) {
      return o.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, T.last = function (t, e, n) {
      return null == t ? void 0 : null == e || n ? t[t.length - 1] : o.call(t, Math.max(t.length - e, 0))
    }, T.rest = T.tail = T.drop = function (t, e, n) {
      return o.call(t, null == e || n ? 1 : e)
    }, T.compact = function (t) {
      return T.filter(t, T.identity)
    };
    var A = function (t, e, n) {
      return e && T.every(t, T.isArray) ? u.apply(n, t) : (k(t, function (t) {
        T.isArray(t) || T.isArguments(t) ? e ? a.apply(n, t) : A(t, e, n) : n.push(t)
      }), n)
    };
    T.flatten = function (t, e) {
      return A(t, e, [])
    }, T.without = function (t) {
      return T.difference(t, o.call(arguments, 1))
    }, T.uniq = T.unique = function (t, e, n, i) {
      T.isFunction(e) && (i = n, n = e, e = !1);
      var r = n ? T.map(t, n, i) : t,
        s = [],
        a = [];
      return k(r, function (n, i) {
        (e ? i && a[a.length - 1] === n : T.contains(a, n)) || (a.push(n), s.push(t[i]))
      }), s
    }, T.union = function () {
      return T.uniq(T.flatten(arguments, !0))
    }, T.intersection = function (t) {
      var e = o.call(arguments, 1);
      return T.filter(T.uniq(t), function (t) {
        return T.every(e, function (e) {
          return T.indexOf(e, t) >= 0
        })
      })
    }, T.difference = function (t) {
      var e = u.apply(i, o.call(arguments, 1));
      return T.filter(t, function (t) {
        return !T.contains(e, t)
      })
    }, T.zip = function () {
      for (var t = T.max(T.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = T.pluck(arguments, "" + n);
      return e
    }, T.object = function (t, e) {
      if (null == t) return {};
      for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
      return n
    }, T.indexOf = function (t, e, n) {
      if (null == t) return -1;
      var i = 0,
        r = t.length;
      if (n) {
        if ("number" != typeof n) return i = T.sortedIndex(t, e), t[i] === e ? i : -1;
        i = 0 > n ? Math.max(0, r + n) : n
      }
      if (v && t.indexOf === v) return t.indexOf(e, n);
      for (; r > i; i++)
        if (t[i] === e) return i;
      return -1
    }, T.lastIndexOf = function (t, e, n) {
      if (null == t) return -1;
      var i = null != n;
      if (y && t.lastIndexOf === y) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
      for (var r = i ? n : t.length; r--;)
        if (t[r] === e) return r;
      return -1
    }, T.range = function (t, e, n) {
      arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
      for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, s = new Array(i); i > r;) s[r++] = t, t += n;
      return s
    };
    var P = function () {};
    T.bind = function (t, e) {
      var n, i;
      if (x && t.bind === x) return x.apply(t, o.call(arguments, 1));
      if (!T.isFunction(t)) throw new TypeError;
      return n = o.call(arguments, 2), i = function () {
        if (!(this instanceof i)) return t.apply(e, n.concat(o.call(arguments)));
        P.prototype = t.prototype;
        var r = new P;
        P.prototype = null;
        var s = t.apply(r, n.concat(o.call(arguments)));
        return Object(s) === s ? s : r
      }
    }, T.partial = function (t) {
      var e = o.call(arguments, 1);
      return function () {
        return t.apply(this, e.concat(o.call(arguments)))
      }
    }, T.bindAll = function (t) {
      var e = o.call(arguments, 1);
      if (0 === e.length) throw new Error("bindAll must be passed function names");
      return k(e, function (e) {
        t[e] = T.bind(t[e], t)
      }), t
    }, T.memoize = function (t, e) {
      var n = {};
      return e || (e = T.identity),
        function () {
          var i = e.apply(this, arguments);
          return T.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
        }
    }, T.delay = function (t, e) {
      var n = o.call(arguments, 2);
      return setTimeout(function () {
        return t.apply(null, n)
      }, e)
    }, T.defer = function (t) {
      return T.delay.apply(T, [t, 1].concat(o.call(arguments, 1)))
    }, T.throttle = function (t, e, n) {
      var i, r, s, a = null,
        o = 0;
      n || (n = {});
      var u = function () {
        o = n.leading === !1 ? 0 : new Date, a = null, s = t.apply(i, r)
      };
      return function () {
        var l = new Date;
        o || n.leading !== !1 || (o = l);
        var c = e - (l - o);
        return i = this, r = arguments, 0 >= c ? (clearTimeout(a), a = null, o = l, s = t.apply(i, r)) : a || n.trailing === !1 || (a = setTimeout(u, c)), s
      }
    }, T.debounce = function (t, e, n) {
      var i, r, s, a, o;
      return function () {
        s = this, r = arguments, a = new Date;
        var u = function () {
            var l = new Date - a;
            e > l ? i = setTimeout(u, e - l) : (i = null, n || (o = t.apply(s, r)))
          },
          l = n && !i;
        return i || (i = setTimeout(u, e)), l && (o = t.apply(s, r)), o
      }
    }, T.once = function (t) {
      var e, n = !1;
      return function () {
        return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
      }
    }, T.wrap = function (t, e) {
      return function () {
        var n = [t];
        return a.apply(n, arguments), e.apply(this, n)
      }
    }, T.compose = function () {
      var t = arguments;
      return function () {
        for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
        return e[0]
      }
    }, T.after = function (t, e) {
      return function () {
        return --t < 1 ? e.apply(this, arguments) : void 0
      }
    }, T.keys = w || function (t) {
      if (t !== Object(t)) throw new TypeError("Invalid object");
      var e = [];
      for (var n in t) T.has(t, n) && e.push(n);
      return e
    }, T.values = function (t) {
      for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = t[e[r]];
      return i
    }, T.pairs = function (t) {
      for (var e = T.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++) i[r] = [e[r], t[e[r]]];
      return i
    }, T.invert = function (t) {
      for (var e = {}, n = T.keys(t), i = 0, r = n.length; r > i; i++) e[t[n[i]]] = n[i];
      return e
    }, T.functions = T.methods = function (t) {
      var e = [];
      for (var n in t) T.isFunction(t[n]) && e.push(n);
      return e.sort()
    }, T.extend = function (t) {
      return k(o.call(arguments, 1), function (e) {
        if (e)
          for (var n in e) t[n] = e[n]
      }), t
    }, T.pick = function (t) {
      var e = {},
        n = u.apply(i, o.call(arguments, 1));
      return k(n, function (n) {
        n in t && (e[n] = t[n])
      }), e
    }, T.omit = function (t) {
      var e = {},
        n = u.apply(i, o.call(arguments, 1));
      for (var r in t) T.contains(n, r) || (e[r] = t[r]);
      return e
    }, T.defaults = function (t) {
      return k(o.call(arguments, 1), function (e) {
        if (e)
          for (var n in e) void 0 === t[n] && (t[n] = e[n])
      }), t
    }, T.clone = function (t) {
      return T.isObject(t) ? T.isArray(t) ? t.slice() : T.extend({}, t) : t
    }, T.tap = function (t, e) {
      return e(t), t
    };
    var O = function (t, e, n, i) {
      if (t === e) return 0 !== t || 1 / t == 1 / e;
      if (null == t || null == e) return t === e;
      t instanceof T && (t = t._wrapped), e instanceof T && (e = e._wrapped);
      var r = l.call(t);
      if (r != l.call(e)) return !1;
      switch (r) {
      case "[object String]":
        return t == String(e);
      case "[object Number]":
        return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
      case "[object Date]":
      case "[object Boolean]":
        return +t == +e;
      case "[object RegExp]":
        return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
      }
      if ("object" != typeof t || "object" != typeof e) return !1;
      for (var s = n.length; s--;)
        if (n[s] == t) return i[s] == e;
      var a = t.constructor,
        o = e.constructor;
      if (a !== o && !(T.isFunction(a) && a instanceof a && T.isFunction(o) && o instanceof o)) return !1;
      n.push(t), i.push(e);
      var u = 0,
        c = !0;
      if ("[object Array]" == r) {
        if (u = t.length, c = u == e.length)
          for (; u-- && (c = O(t[u], e[u], n, i)););
      } else {
        for (var h in t)
          if (T.has(t, h) && (u++, !(c = T.has(e, h) && O(t[h], e[h], n, i)))) break;
        if (c) {
          for (h in e)
            if (T.has(e, h) && !u--) break;
          c = !u
        }
      }
      return n.pop(), i.pop(), c
    };
    T.isEqual = function (t, e) {
      return O(t, e, [], [])
    }, T.isEmpty = function (t) {
      if (null == t) return !0;
      if (T.isArray(t) || T.isString(t)) return 0 === t.length;
      for (var e in t)
        if (T.has(t, e)) return !1;
      return !0
    }, T.isElement = function (t) {
      return !(!t || 1 !== t.nodeType)
    }, T.isArray = b || function (t) {
      return "[object Array]" == l.call(t)
    }, T.isObject = function (t) {
      return t === Object(t)
    }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
      T["is" + t] = function (e) {
        return l.call(e) == "[object " + t + "]"
      }
    }), T.isArguments(arguments) || (T.isArguments = function (t) {
      return !(!t || !T.has(t, "callee"))
    }), "function" != typeof /./ && (T.isFunction = function (t) {
      return "function" == typeof t
    }), T.isFinite = function (t) {
      return isFinite(t) && !isNaN(parseFloat(t))
    }, T.isNaN = function (t) {
      return T.isNumber(t) && t != +t
    }, T.isBoolean = function (t) {
      return t === !0 || t === !1 || "[object Boolean]" == l.call(t)
    }, T.isNull = function (t) {
      return null === t
    }, T.isUndefined = function (t) {
      return void 0 === t
    }, T.has = function (t, e) {
      return c.call(t, e)
    }, T.noConflict = function () {
      return t._ = e, this
    }, T.identity = function (t) {
      return t
    }, T.times = function (t, e, n) {
      for (var i = Array(Math.max(0, t)), r = 0; t > r; r++) i[r] = e.call(n, r);
      return i
    }, T.random = function (t, e) {
      return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var E = {
      escape: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;"
      }
    };
    E.unescape = T.invert(E.escape), T.each(E.escape, function (t, e) {
      var n = t.replace(/\#x([0-9a-f]+)/i, function (t, e) {
        return t ? "#" + parseInt(e, 16) : void 0
      });
      n !== t && (E.unescape[n] = e)
    });
    var R = {
      escape: new RegExp("[" + T.keys(E.escape).join("") + "]", "g"),
      unescape: new RegExp("(" + T.keys(E.unescape).join("|") + ")", "g")
    };
    T.each(["escape", "unescape"], function (t) {
      T[t] = function (e) {
        return null == e ? "" : ("" + e).replace(R[t], function (e) {
          return E[t][e]
        })
      }
    }), T.result = function (t, e) {
      if (null == t) return void 0;
      var n = t[e];
      return T.isFunction(n) ? n.call(t) : n
    }, T.mixin = function (t) {
      k(T.functions(t), function (e) {
        var n = T[e] = t[e];
        T.prototype[e] = function () {
          var t = [this._wrapped];
          return a.apply(t, arguments), Y.call(this, n.apply(T, t))
        }
      })
    };
    var j = 0;
    T.uniqueId = function (t) {
      var e = ++j + "";
      return t ? t + e : e
    }, T.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var L = /(.)^/,
      N = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      I = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    T.template = function (t, e, n) {
      var i;
      n = T.defaults({}, n, T.templateSettings);
      var r = new RegExp([(n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source].join("|") + "|$", "g"),
        s = 0,
        a = "__p+='";
      t.replace(r, function (e, n, i, r, o) {
        return a += t.slice(s, o).replace(I, function (t) {
          return "\\" + N[t]
        }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (a += "';\n" + r + "\n__p+='"), s = o + e.length, e
      }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
      try {
        i = new Function(n.variable || "obj", "_", a)
      } catch (o) {
        throw o.source = a, o
      }
      if (e) return i(e, T);
      var u = function (t) {
        return i.call(this, t, T)
      };
      return u.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", u
    }, T.chain = function (t) {
      return T(t).chain()
    };
    var Y = function (t) {
      return this._chain ? T(t).chain() : t
    };
    T.mixin(T), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
      var e = i[t];
      T.prototype[t] = function () {
        var n = this._wrapped;
        return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], Y.call(this, n)
      }
    }), k(["concat", "join", "slice"], function (t) {
      var e = i[t];
      T.prototype[t] = function () {
        return Y.call(this, e.apply(this._wrapped, arguments))
      }
    }), T.extend(T.prototype, {
      chain: function () {
        return this._chain = !0, this
      },
      value: function () {
        return this._wrapped
      }
    })
  }.call(this);
var swfobject = function () {
  function t() {
    if (!W && document.getElementsByTagName("body")[0]) {
      try {
        var t, e = g("span");
        e.style.display = "none", t = Y.getElementsByTagName("body")[0].appendChild(e), t.parentNode.removeChild(t), t = null, e = null
      } catch (n) {
        return
      }
      W = !0;
      for (var i = z.length, r = 0; i > r; r++) z[r]()
    }
  }

  function e(t) {
    W ? t() : z[z.length] = t
  }

  function n(t) {
    if (typeof I.addEventListener != P) I.addEventListener("load", t, !1);
    else if (typeof Y.addEventListener != P) Y.addEventListener("load", t, !1);
    else if (typeof I.attachEvent != P) y(I, "onload", t);
    else if ("function" == typeof I.onload) {
      var e = I.onload;
      I.onload = function () {
        e(), t()
      }
    } else I.onload = t
  }

  function i() {
    var t = Y.getElementsByTagName("body")[0],
      e = g(O);
    e.setAttribute("style", "visibility: hidden;"), e.setAttribute("type", j);
    var n = t.appendChild(e);
    if (n) {
      var i = 0;
      ! function s() {
        if (typeof n.GetVariable != P) try {
          var a = n.GetVariable("$version");
          a && (a = a.split(" ")[1].split(","), Q.pv = [v(a[0]), v(a[1]), v(a[2])])
        } catch (o) {
          Q.pv = [8, 0, 0]
        } else if (10 > i) return i++, void setTimeout(s, 10);
        t.removeChild(e), n = null, r()
      }()
    } else r()
  }

  function r() {
    var t = q.length;
    if (t > 0)
      for (var e = 0; t > e; e++) {
        var n = q[e].id,
          i = q[e].callbackFn,
          r = {
            success: !1,
            id: n
          };
        if (Q.pv[0] > 0) {
          var l = _(n);
          if (l)
            if (!b(q[e].swfVersion) || Q.wk && Q.wk < 312)
              if (q[e].expressInstall && a()) {
                var c = {};
                c.data = q[e].expressInstall, c.width = l.getAttribute("width") || "0", c.height = l.getAttribute("height") || "0", l.getAttribute("class") && (c.styleclass = l.getAttribute("class")), l.getAttribute("align") && (c.align = l.getAttribute("align"));
                for (var h = {}, f = l.getElementsByTagName("param"), d = f.length, p = 0; d > p; p++) "movie" != f[p].getAttribute("name").toLowerCase() && (h[f[p].getAttribute("name")] = f[p].getAttribute("value"));
                o(c, h, n, i)
              } else u(l), i && i(r);
          else x(n, !0), i && (r.success = !0, r.ref = s(n), r.id = n, i(r))
        } else if (x(n, !0), i) {
          var m = s(n);
          m && typeof m.SetVariable != P && (r.success = !0, r.ref = m, r.id = m.id), i(r)
        }
      }
  }

  function s(t) {
    var e = null,
      n = _(t);
    return n && "OBJECT" === n.nodeName.toUpperCase() && (e = typeof n.SetVariable !== P ? n : n.getElementsByTagName(O)[0] || n), e
  }

  function a() {
    return !B && b("6.0.65") && (Q.win || Q.mac) && !(Q.wk && Q.wk < 312)
  }

  function o(t, e, n, i) {
    var r = _(n);
    if (n = m(n), B = !0, C = i || null, D = {
        success: !1,
        id: n
      }, r) {
      "OBJECT" == r.nodeName.toUpperCase() ? (k = l(r), S = null) : (k = r, S = n), t.id = L, (typeof t.width == P || !/%$/.test(t.width) && v(t.width) < 310) && (t.width = "310"), (typeof t.height == P || !/%$/.test(t.height) && v(t.height) < 137) && (t.height = "137");
      var s = Q.ie ? "ActiveX" : "PlugIn",
        a = "MMredirectURL=" + encodeURIComponent(I.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + s + "&MMdoctitle=" + encodeURIComponent(Y.title.slice(0, 47) + " - Flash Player Installation");
      if (typeof e.flashvars != P ? e.flashvars += "&" + a : e.flashvars = a, Q.ie && 4 != r.readyState) {
        var o = g("div");
        n += "SWFObjectNew", o.setAttribute("id", n), r.parentNode.insertBefore(o, r), r.style.display = "none", d(r)
      }
      h(t, e, n)
    }
  }

  function u(t) {
    if (Q.ie && 4 != t.readyState) {
      t.style.display = "none";
      var e = g("div");
      t.parentNode.insertBefore(e, t), e.parentNode.replaceChild(l(t), e), d(t)
    } else t.parentNode.replaceChild(l(t), t)
  }

  function l(t) {
    var e = g("div");
    if (Q.win && Q.ie) e.innerHTML = t.innerHTML;
    else {
      var n = t.getElementsByTagName(O)[0];
      if (n) {
        var i = n.childNodes;
        if (i)
          for (var r = i.length, s = 0; r > s; s++) 1 == i[s].nodeType && "PARAM" == i[s].nodeName || 8 == i[s].nodeType || e.appendChild(i[s].cloneNode(!0))
      }
    }
    return e
  }

  function c(t, e) {
    var n = g("div");
    return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + t + "'>" + e + "</object>", n.firstChild
  }

  function h(t, e, n) {
    var i, r = _(n);
    if (n = m(n), Q.wk && Q.wk < 312) return i;
    if (r) {
      var s, a, o, u = g(Q.ie ? "div" : O);
      typeof t.id == P && (t.id = n);
      for (o in e) e.hasOwnProperty(o) && "movie" !== o.toLowerCase() && f(u, o, e[o]);
      Q.ie && (u = c(t.data, u.innerHTML));
      for (s in t) t.hasOwnProperty(s) && (a = s.toLowerCase(), "styleclass" === a ? u.setAttribute("class", t[s]) : "classid" !== a && "data" !== a && u.setAttribute(s, t[s]));
      Q.ie ? H[H.length] = t.id : (u.setAttribute("type", j), u.setAttribute("data", t.data)), r.parentNode.replaceChild(u, r), i = u
    }
    return i
  }

  function f(t, e, n) {
    var i = g("param");
    i.setAttribute("name", e), i.setAttribute("value", n), t.appendChild(i)
  }

  function d(t) {
    var e = _(t);
    e && "OBJECT" == e.nodeName.toUpperCase() && (Q.ie ? (e.style.display = "none", function n() {
      if (4 == e.readyState) {
        for (var t in e) "function" == typeof e[t] && (e[t] = null);
        e.parentNode.removeChild(e)
      } else setTimeout(n, 10)
    }()) : e.parentNode.removeChild(e))
  }

  function p(t) {
    return t && t.nodeType && 1 === t.nodeType
  }

  function m(t) {
    return p(t) ? t.id : t
  }

  function _(t) {
    if (p(t)) return t;
    var e = null;
    try {
      e = Y.getElementById(t)
    } catch (n) {}
    return e
  }

  function g(t) {
    return Y.createElement(t)
  }

  function v(t) {
    return parseInt(t, 10)
  }

  function y(t, e, n) {
    t.attachEvent(e, n), U[U.length] = [t, e, n]
  }

  function b(t) {
    t += "";
    var e = Q.pv,
      n = t.split(".");
    return n[0] = v(n[0]), n[1] = v(n[1]) || 0, n[2] = v(n[2]) || 0, e[0] > n[0] || e[0] == n[0] && e[1] > n[1] || e[0] == n[0] && e[1] == n[1] && e[2] >= n[2] ? !0 : !1
  }

  function w(t, e, n, i) {
    var r = Y.getElementsByTagName("head")[0];
    if (r) {
      var s = "string" == typeof n ? n : "screen";
      if (i && (M = null, A = null), !M || A != s) {
        var a = g("style");
        a.setAttribute("type", "text/css"), a.setAttribute("media", s), M = r.appendChild(a), Q.ie && typeof Y.styleSheets != P && Y.styleSheets.length > 0 && (M = Y.styleSheets[Y.styleSheets.length - 1]), A = s
      }
      M && (typeof M.addRule != P ? M.addRule(t, e) : typeof Y.createTextNode != P && M.appendChild(Y.createTextNode(t + " {" + e + "}")))
    }
  }

  function x(t, e) {
    if (G) {
      var n = e ? "visible" : "hidden",
        i = _(t);
      W && i ? i.style.visibility = n : "string" == typeof t && w("#" + t, "visibility:" + n)
    }
  }

  function T(t) {
    var e = /[\\\"<>\.;]/,
      n = null != e.exec(t);
    return n && typeof encodeURIComponent != P ? encodeURIComponent(t) : t
  } {
    var k, S, C, D, M, A, P = "undefined",
      O = "object",
      E = "Shockwave Flash",
      R = "ShockwaveFlash.ShockwaveFlash",
      j = "application/x-shockwave-flash",
      L = "SWFObjectExprInst",
      N = "onreadystatechange",
      I = window,
      Y = document,
      F = navigator,
      $ = !1,
      z = [],
      q = [],
      H = [],
      U = [],
      W = !1,
      B = !1,
      G = !0,
      X = !1,
      Q = function () {
        var t = typeof Y.getElementById != P && typeof Y.getElementsByTagName != P && typeof Y.createElement != P,
          e = F.userAgent.toLowerCase(),
          n = F.platform.toLowerCase(),
          i = /win/.test(n ? n : e),
          r = /mac/.test(n ? n : e),
          s = /webkit/.test(e) ? parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
          a = "Microsoft Internet Explorer" === F.appName,
          o = [0, 0, 0],
          u = null;
        if (typeof F.plugins != P && typeof F.plugins[E] == O) u = F.plugins[E].description, u && typeof F.mimeTypes != P && F.mimeTypes[j] && F.mimeTypes[j].enabledPlugin && ($ = !0, a = !1, u = u.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), o[0] = v(u.replace(/^(.*)\..*$/, "$1")), o[1] = v(u.replace(/^.*\.(.*)\s.*$/, "$1")), o[2] = /[a-zA-Z]/.test(u) ? v(u.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
        else if (typeof I.ActiveXObject != P) try {
          var l = new ActiveXObject(R);
          l && (u = l.GetVariable("$version"), u && (a = !0, u = u.split(" ")[1].split(","), o = [v(u[0]), v(u[1]), v(u[2])]))
        } catch (c) {}
        return {
          w3: t,
          pv: o,
          wk: s,
          ie: a,
          win: i,
          mac: r
        }
      }();
    ! function () {
      Q.w3 && ((typeof Y.readyState != P && ("complete" === Y.readyState || "interactive" === Y.readyState) || typeof Y.readyState == P && (Y.getElementsByTagName("body")[0] || Y.body)) && t(), W || (typeof Y.addEventListener != P && Y.addEventListener("DOMContentLoaded", t, !1), Q.ie && (Y.attachEvent(N, function e() {
        "complete" == Y.readyState && (Y.detachEvent(N, e), t())
      }), I == top && ! function n() {
        if (!W) {
          try {
            Y.documentElement.doScroll("left")
          } catch (e) {
            return void setTimeout(n, 0)
          }
          t()
        }
      }()), Q.wk && ! function i() {
        return W ? void 0 : /loaded|complete/.test(Y.readyState) ? void t() : void setTimeout(i, 0)
      }()))
    }()
  }
  z[0] = function () {
    $ ? i() : r()
  };
  ! function () {
    Q.ie && window.attachEvent("onunload", function () {
      for (var t = U.length, e = 0; t > e; e++) U[e][0].detachEvent(U[e][1], U[e][2]);
      for (var n = H.length, i = 0; n > i; i++) d(H[i]);
      for (var r in Q) Q[r] = null;
      Q = null;
      for (var s in swfobject) swfobject[s] = null;
      swfobject = null
    })
  }();
  return {
    registerObject: function (t, e, n, i) {
      if (Q.w3 && t && e) {
        var r = {};
        r.id = t, r.swfVersion = e, r.expressInstall = n, r.callbackFn = i, q[q.length] = r, x(t, !1)
      } else i && i({
        success: !1,
        id: t
      })
    },
    getObjectById: function (t) {
      return Q.w3 ? s(t) : void 0
    },
    embedSWF: function (t, n, i, r, s, u, l, c, f, d) {
      var p = m(n),
        _ = {
          success: !1,
          id: p
        };
      Q.w3 && !(Q.wk && Q.wk < 312) && t && n && i && r && s ? (x(p, !1), e(function () {
        i += "", r += "";
        var e = {};
        if (f && typeof f === O)
          for (var m in f) e[m] = f[m];
        e.data = t, e.width = i, e.height = r;
        var g = {};
        if (c && typeof c === O)
          for (var v in c) g[v] = c[v];
        if (l && typeof l === O)
          for (var y in l)
            if (l.hasOwnProperty(y)) {
              var w = X ? encodeURIComponent(y) : y,
                T = X ? encodeURIComponent(l[y]) : l[y];
              typeof g.flashvars != P ? g.flashvars += "&" + w + "=" + T : g.flashvars = w + "=" + T
            }
        if (b(s)) {
          var k = h(e, g, n);
          e.id == p && x(p, !0), _.success = !0, _.ref = k, _.id = k.id
        } else {
          if (u && a()) return e.data = u, void o(e, g, n, d);
          x(p, !0)
        }
        d && d(_)
      })) : d && d(_)
    },
    switchOffAutoHideShow: function () {
      G = !1
    },
    enableUriEncoding: function (t) {
      X = typeof t === P ? !0 : t
    },
    ua: Q,
    getFlashPlayerVersion: function () {
      return {
        major: Q.pv[0],
        minor: Q.pv[1],
        release: Q.pv[2]
      }
    },
    hasFlashPlayerVersion: b,
    createSWF: function (t, e, n) {
      return Q.w3 ? h(t, e, n) : void 0
    },
    showExpressInstall: function (t, e, n, i) {
      Q.w3 && a() && o(t, e, n, i)
    },
    removeSWF: function (t) {
      Q.w3 && d(t)
    },
    createCSS: function (t, e, n, i) {
      Q.w3 && w(t, e, n, i)
    },
    addDomLoadEvent: e,
    addLoadEvent: n,
    getQueryParamValue: function (t) {
      var e = Y.location.search || Y.location.hash;
      if (e) {
        if (/\?/.test(e) && (e = e.split("?")[1]), null == t) return T(e);
        for (var n = e.split("&"), i = 0; i < n.length; i++)
          if (n[i].substring(0, n[i].indexOf("=")) == t) return T(n[i].substring(n[i].indexOf("=") + 1))
      }
      return ""
    },
    expressInstallCallback: function () {
      if (B) {
        var t = _(L);
        t && k && (t.parentNode.replaceChild(k, t), S && (x(S, !0), Q.ie && (k.style.display = "block")), C && C(D)), B = !1
      }
    },
    version: "2.3"
  }
}();
! function () {
  function t() {
    var t = {
      language: navigator.language,
      mime_types: _.map(navigator.mimeTypes, function (t) {
        return t.type
      }).join(","),
      plugins: _.map(navigator.plugins, function (t) {
        return t.name + "|" + t.filename + "|" + t.description
      }).join("\n"),
      fonts: n().join(","),
      screen_resolution: screen.availWidth + "x" + screen.availHeight + "x" + screen.colorDepth,
      time_zone: (new Date).getTimezoneOffset(),
      user_agent: navigator.userAgent
    };
    return t
  }

  function e() {
    var t = "https://d3mlfyygrfdi2i.cloudfront.net/0f11/FontList.swf",
      e = "font-detect-swf",
      n = function (t) {
        $(document).trigger("fontsDetected", [t])
      },
      i = {
        onReady: String(n),
        swfObjectId: e
      },
      r = {
        allowScriptAccess: "always",
        menu: "false"
      },
      s = {
        id: e,
        name: e
      },
      a = document.createElement("div");
    a.id = e, document.body.appendChild(a), swfobject.embedSWF(t, e, "1", "1", "9.0.0", !1, i, r, s)
  }

  function n() {
    try {
      return _.pluck(document.getElementById("font-detect-swf").fonts(), "fontName")
    } catch (t) {
      return []
    }
  }
  root.log_device = function () {
    var n = swfobject.hasFlashPlayerVersion("9.0.0"),
      i = function () {
        var e = {
            device: t()
          },
          n = $.param(e).length;
        $.post("/devices?l=" + n, e)
      };
    n ? ($(document).one("fontsDetected", i), e()) : i.call()
  }
}(),
function () {
  $(document).on("click", ".js-facebook-login, a.facebook-link", function (t) {
    var e = $(this);
    t.preventDefault(), FB.login(function (t) {
      t.authResponse && $.post(e.attr("href"), {
        fbsr: t.authResponse.signedRequest
      }).done(function (t) {
        url_equals(t.data, window.location.href) ? window.location.reload(!0) : window.location = t.data
      })
    }, {
      scope: "email,user_friends,public_profile"
    })
  })
}(),
function () {
  root.Honeybadger && root.honeybadger_configuration && Honeybadger.configure(honeybadger_configuration)
}(),
function (t) {
  t.KSR = t.KSR || {}, t.KSR.store = t.KSR.store || {};
  var e = {};
  t.KSR.store.isSupported = function () {
    var e = "storagetest",
      n = t.localStorage;
    try {
      return n.setItem(e, "1"), n.removeItem(e), !0
    } catch (i) {
      return !1
    }
  }, t.KSR.store.getItem = function (n) {
    return t.KSR.store.isSupported() ? window.localStorage.getItem.apply(window.localStorage, arguments) : e[n]
  }, t.KSR.store.removeItem = function (n) {
    t.KSR.store.isSupported() ? window.localStorage.removeItem.apply(window.localStorage, arguments) : delete e[n]
  }, t.KSR.store.setItem = function (n, i) {
    t.KSR.store.isSupported() ? window.localStorage.setItem.apply(window.localStorage, arguments) : e[n] = String(i)
  }
}(this),
function (t, e) {
  "object" == typeof exports ? module.exports = e(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], e) : t.URI = e(t.punycode, t.IPv6, t.SecondLevelDomains, t)
}(this, function (t, e, n, i) {
  "use strict";

  function r(t, e) {
    return this instanceof r ? (void 0 === t && (t = "undefined" != typeof location ? location.href + "" : ""), this.href(t), void 0 !== e ? this.absoluteTo(e) : this) : new r(t, e)
  }

  function s(t) {
    return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
  }

  function a(t) {
    return void 0 === t ? "Undefined" : String(Object.prototype.toString.call(t)).slice(8, -1)
  }

  function o(t) {
    return "Array" === a(t)
  }

  function u(t, e) {
    var n, i, r = {};
    if (o(e))
      for (n = 0, i = e.length; i > n; n++) r[e[n]] = !0;
    else r[e] = !0;
    for (n = 0, i = t.length; i > n; n++) void 0 !== r[t[n]] && (t.splice(n, 1), i--, n--);
    return t
  }

  function l(t, e) {
    var n, i;
    if (o(e)) {
      for (n = 0, i = e.length; i > n; n++)
        if (!l(t, e[n])) return !1;
      return !0
    }
    var r = a(e);
    for (n = 0, i = t.length; i > n; n++)
      if ("RegExp" === r) {
        if ("string" == typeof t[n] && t[n].match(e)) return !0
      } else if (t[n] === e) return !0;
    return !1
  }

  function c(t, e) {
    if (!o(t) || !o(e)) return !1;
    if (t.length !== e.length) return !1;
    t.sort(), e.sort();
    for (var n = 0, i = t.length; i > n; n++)
      if (t[n] !== e[n]) return !1;
    return !0
  }

  function h(t) {
    return escape(t)
  }

  function f(t) {
    return encodeURIComponent(t).replace(/[!'()*]/g, h).replace(/\*/g, "%2A")
  }
  var d = i && i.URI;
  r.version = "1.12.0";
  var p = r.prototype,
    m = Object.prototype.hasOwnProperty;
  r._parts = function () {
    return {
      protocol: null,
      username: null,
      password: null,
      hostname: null,
      urn: null,
      port: null,
      path: null,
      query: null,
      fragment: null,
      duplicateQueryParameters: r.duplicateQueryParameters,
      escapeQuerySpace: r.escapeQuerySpace
    }
  }, r.duplicateQueryParameters = !1, r.escapeQuerySpace = !0, r.protocol_expression = /^[a-z][a-z0-9.+-]*$/i, r.idn_expression = /[^a-z0-9\.-]/i, r.punycode_expression = /(xn--)/i, r.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, r.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, r.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))/gi, r.findUri = {
    start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
    end: /[\s\r\n]|$/,
    trim: /[`!()\[\]{};:'".,<>?\xab\xbb\u201c\u201d\u201e\u2018\u2019]+$/
  }, r.defaultPorts = {
    http: "80",
    https: "443",
    ftp: "21",
    gopher: "70",
    ws: "80",
    wss: "443"
  }, r.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, r.domAttributes = {
    a: "href",
    blockquote: "cite",
    link: "href",
    base: "href",
    script: "src",
    form: "action",
    img: "src",
    area: "href",
    iframe: "src",
    embed: "src",
    source: "src",
    track: "src",
    input: "src"
  }, r.getDomAttribute = function (t) {
    if (!t || !t.nodeName) return void 0;
    var e = t.nodeName.toLowerCase();
    return "input" === e && "image" !== t.type ? void 0 : r.domAttributes[e]
  }, r.encode = f, r.decode = decodeURIComponent, r.iso8859 = function () {
    r.encode = escape, r.decode = unescape
  }, r.unicode = function () {
    r.encode = f, r.decode = decodeURIComponent
  }, r.characters = {
    pathname: {
      encode: {
        expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
        map: {
          "%24": "$",
          "%26": "&",
          "%2B": "+",
          "%2C": ",",
          "%3B": ";",
          "%3D": "=",
          "%3A": ":",
          "%40": "@"
        }
      },
      decode: {
        expression: /[\/\?#]/g,
        map: {
          "/": "%2F",
          "?": "%3F",
          "#": "%23"
        }
      }
    },
    reserved: {
      encode: {
        expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
        map: {
          "%3A": ":",
          "%2F": "/",
          "%3F": "?",
          "%23": "#",
          "%5B": "[",
          "%5D": "]",
          "%40": "@",
          "%21": "!",
          "%24": "$",
          "%26": "&",
          "%27": "'",
          "%28": "(",
          "%29": ")",
          "%2A": "*",
          "%2B": "+",
          "%2C": ",",
          "%3B": ";",
          "%3D": "="
        }
      }
    }
  }, r.encodeQuery = function (t, e) {
    var n = r.encode(t + "");
    return e ? n.replace(/%20/g, "+") : n
  }, r.decodeQuery = function (t, e) {
    t += "";
    try {
      return r.decode(e ? t.replace(/\+/g, "%20") : t)
    } catch (n) {
      return t
    }
  }, r.recodePath = function (t) {
    for (var e = (t + "").split("https://www.kickstarter.com/"), n = 0, i = e.length; i > n; n++) e[n] = r.encodePathSegment(r.decode(e[n]));
    return e.join("https://www.kickstarter.com/")
  }, r.decodePath = function (t) {
    for (var e = (t + "").split("https://www.kickstarter.com/"), n = 0, i = e.length; i > n; n++) e[n] = r.decodePathSegment(e[n]);
    return e.join("https://www.kickstarter.com/")
  };
  var _, g = {
      encode: "encode",
      decode: "decode"
    },
    v = function (t, e) {
      return function (n) {
        return r[e](n + "").replace(r.characters[t][e].expression, function (n) {
          return r.characters[t][e].map[n]
        })
      }
    };
  for (_ in g) r[_ + "PathSegment"] = v("pathname", g[_]);
  r.encodeReserved = v("reserved", "encode"), r.parse = function (t, e) {
    var n;
    return e || (e = {}), n = t.indexOf("#"), n > -1 && (e.fragment = t.substring(n + 1) || null, t = t.substring(0, n)), n = t.indexOf("?"), n > -1 && (e.query = t.substring(n + 1) || null, t = t.substring(0, n)), "//" === t.substring(0, 2) ? (e.protocol = null, t = t.substring(2), t = r.parseAuthority(t, e)) : (n = t.indexOf(":"), n > -1 && (e.protocol = t.substring(0, n) || null, e.protocol && !e.protocol.match(r.protocol_expression) ? e.protocol = void 0 : "file" === e.protocol ? t = t.substring(n + 3) : "//" === t.substring(n + 1, n + 3) ? (t = t.substring(n + 3), t = r.parseAuthority(t, e)) : (t = t.substring(n + 1), e.urn = !0))), e.path = t, e
  }, r.parseHost = function (t, e) {
    var n, i, r = t.indexOf("https://www.kickstarter.com/");
    return -1 === r && (r = t.length), "[" === t.charAt(0) ? (n = t.indexOf("]"), e.hostname = t.substring(1, n) || null, e.port = t.substring(n + 2, r) || null) : t.indexOf(":") !== t.lastIndexOf(":") ? (e.hostname = t.substring(0, r) || null, e.port = null) : (i = t.substring(0, r).split(":"), e.hostname = i[0] || null, e.port = i[1] || null), e.hostname && "/" !== t.substring(r).charAt(0) && (r++, t = "/" + t), t.substring(r) || "/"
  }, r.parseAuthority = function (t, e) {
    return t = r.parseUserinfo(t, e), r.parseHost(t, e)
  }, r.parseUserinfo = function (t, e) {
    var n, i = t.indexOf("https://www.kickstarter.com/"),
      s = i > -1 ? t.lastIndexOf("@", i) : t.indexOf("@");
    return s > -1 && (-1 === i || i > s) ? (n = t.substring(0, s).split(":"), e.username = n[0] ? r.decode(n[0]) : null, n.shift(), e.password = n[0] ? r.decode(n.join(":")) : null, t = t.substring(s + 1)) : (e.username = null, e.password = null), t
  }, r.parseQuery = function (t, e) {
    if (!t) return {};
    if (t = t.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""), !t) return {};
    for (var n, i, s, a = {}, o = t.split("&"), u = o.length, l = 0; u > l; l++) n = o[l].split("="), i = r.decodeQuery(n.shift(), e), s = n.length ? r.decodeQuery(n.join("="), e) : null, a[i] ? ("string" == typeof a[i] && (a[i] = [a[i]]), a[i].push(s)) : a[i] = s;
    return a
  }, r.build = function (t) {
    var e = "";
    return t.protocol && (e += t.protocol + ":"), t.urn || !e && !t.hostname || (e += "//"), e += r.buildAuthority(t) || "", "string" == typeof t.path && ("/" !== t.path.charAt(0) && "string" == typeof t.hostname && (e += "https://www.kickstarter.com/"), e += t.path), "string" == typeof t.query && t.query && (e += "?" + t.query), "string" == typeof t.fragment && t.fragment && (e += "#" + t.fragment), e
  }, r.buildHost = function (t) {
    var e = "";
    return t.hostname ? (r.ip6_expression.test(t.hostname) ? e += t.port ? "[" + t.hostname + "]:" + t.port : t.hostname : (e += t.hostname, t.port && (e += ":" + t.port)), e) : ""
  }, r.buildAuthority = function (t) {
    return r.buildUserinfo(t) + r.buildHost(t)
  }, r.buildUserinfo = function (t) {
    var e = "";
    return t.username && (e += r.encode(t.username), t.password && (e += ":" + r.encode(t.password)), e += "@"), e
  }, r.buildQuery = function (t, e, n) {
    var i, s, a, u, l = "";
    for (s in t)
      if (m.call(t, s) && s)
        if (o(t[s]))
          for (i = {}, a = 0, u = t[s].length; u > a; a++) void 0 !== t[s][a] && void 0 === i[t[s][a] + ""] && (l += "&" + r.buildQueryParameter(s, t[s][a], n), e !== !0 && (i[t[s][a] + ""] = !0));
        else void 0 !== t[s] && (l += "&" + r.buildQueryParameter(s, t[s], n));
    return l.substring(1)
  }, r.buildQueryParameter = function (t, e, n) {
    return r.encodeQuery(t, n) + (null !== e ? "=" + r.encodeQuery(e, n) : "")
  }, r.addQuery = function (t, e, n) {
    if ("object" == typeof e)
      for (var i in e) m.call(e, i) && r.addQuery(t, i, e[i]);
    else {
      if ("string" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
      if (void 0 === t[e]) return void(t[e] = n);
      "string" == typeof t[e] && (t[e] = [t[e]]), o(n) || (n = [n]), t[e] = t[e].concat(n)
    }
  }, r.removeQuery = function (t, e, n) {
    var i, s, a;
    if (o(e))
      for (i = 0, s = e.length; s > i; i++) t[e[i]] = void 0;
    else if ("object" == typeof e)
      for (a in e) m.call(e, a) && r.removeQuery(t, a, e[a]);
    else {
      if ("string" != typeof e) throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
      void 0 !== n ? t[e] === n ? t[e] = void 0 : o(t[e]) && (t[e] = u(t[e], n)) : t[e] = void 0
    }
  }, r.hasQuery = function (t, e, n, i) {
    if ("object" == typeof e) {
      for (var s in e)
        if (m.call(e, s) && !r.hasQuery(t, s, e[s])) return !1;
      return !0
    }
    if ("string" != typeof e) throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
    switch (a(n)) {
    case "Undefined":
      return e in t;
    case "Boolean":
      var u = Boolean(o(t[e]) ? t[e].length : t[e]);
      return n === u;
    case "Function":
      return !!n(t[e], e, t);
    case "Array":
      if (!o(t[e])) return !1;
      var h = i ? l : c;
      return h(t[e], n);
    case "RegExp":
      return o(t[e]) ? i ? l(t[e], n) : !1 : Boolean(t[e] && t[e].match(n));
    case "Number":
      n = String(n);
    case "String":
      return o(t[e]) ? i ? l(t[e], n) : !1 : t[e] === n;
    default:
      throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")
    }
  }, r.commonPath = function (t, e) {
    var n, i = Math.min(t.length, e.length);
    for (n = 0; i > n; n++)
      if (t.charAt(n) !== e.charAt(n)) {
        n--;
        break
      }
    return 1 > n ? t.charAt(0) === e.charAt(0) && "/" === t.charAt(0) ? "/" : "" : (("/" !== t.charAt(n) || "/" !== e.charAt(n)) && (n = t.substring(0, n).lastIndexOf("https://www.kickstarter.com/")), t.substring(0, n + 1))
  }, r.withinString = function (t, e, n) {
    n || (n = {});
    var i = n.start || r.findUri.start,
      s = n.end || r.findUri.end,
      a = n.trim || r.findUri.trim,
      o = /[a-z0-9-]=["']?$/i;
    for (i.lastIndex = 0;;) {
      var u = i.exec(t);
      if (!u) break;
      var l = u.index;
      if (n.ignoreHtml) {
        var c = t.slice(Math.max(l - 3, 0), l);
        if (c && o.test(c)) continue
      }
      var h = l + t.slice(l).search(s),
        f = t.slice(l, h).replace(a, "");
      if (!n.ignore || !n.ignore.test(f)) {
        h = l + f.length;
        var d = e(f, l, h, t);
        t = t.slice(0, l) + d + t.slice(h), i.lastIndex = l + d.length
      }
    }
    return i.lastIndex = 0, t
  }, r.ensureValidHostname = function (e) {
    if (e.match(r.invalid_hostname_characters)) {
      if (!t) throw new TypeError("Hostname '" + e + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
      if (t.toASCII(e).match(r.invalid_hostname_characters)) throw new TypeError("Hostname '" + e + "' contains characters other than [A-Z0-9.-]")
    }
  }, r.noConflict = function (t) {
    if (t) {
      var n = {
        URI: this.noConflict()
      };
      return URITemplate && "function" == typeof URITemplate.noConflict && (n.URITemplate = URITemplate.noConflict()), e && "function" == typeof e.noConflict && (n.IPv6 = e.noConflict()), SecondLevelDomains && "function" == typeof SecondLevelDomains.noConflict && (n.SecondLevelDomains = SecondLevelDomains.noConflict()), n
    }
    return i.URI === this && (i.URI = d), this
  }, p.build = function (t) {
    return t === !0 ? this._deferred_build = !0 : (void 0 === t || this._deferred_build) && (this._string = r.build(this._parts), this._deferred_build = !1), this
  }, p.clone = function () {
    return new r(this)
  }, p.valueOf = p.toString = function () {
    return this.build(!1)._string
  }, g = {
    protocol: "protocol",
    username: "username",
    password: "password",
    hostname: "hostname",
    port: "port"
  }, v = function (t) {
    return function (e, n) {
      return void 0 === e ? this._parts[t] || "" : (this._parts[t] = e || null, this.build(!n), this)
    }
  };
  for (_ in g) p[_] = v(g[_]);
  g = {
    query: "?",
    fragment: "#"
  }, v = function (t, e) {
    return function (n, i) {
      return void 0 === n ? this._parts[t] || "" : (null !== n && (n += "", n.charAt(0) === e && (n = n.substring(1))), this._parts[t] = n, this.build(!i), this)
    }
  };
  for (_ in g) p[_] = v(_, g[_]);
  g = {
    search: ["?", "query"],
    hash: ["#", "fragment"]
  }, v = function (t, e) {
    return function (n, i) {
      var r = this[t](n, i);
      return "string" == typeof r && r.length ? e + r : r
    }
  };
  for (_ in g) p[_] = v(g[_][1], g[_][0]);
  p.pathname = function (t, e) {
    if (void 0 === t || t === !0) {
      var n = this._parts.path || (this._parts.hostname ? "/" : "");
      return t ? r.decodePath(n) : n
    }
    return this._parts.path = t ? r.recodePath(t) : "/", this.build(!e), this
  }, p.path = p.pathname, p.href = function (t, e) {
    var n;
    if (void 0 === t) return this.toString();
    this._string = "", this._parts = r._parts();
    var i = t instanceof r,
      s = "object" == typeof t && (t.hostname || t.path || t.pathname);
    if (t.nodeName) {
      var a = r.getDomAttribute(t);
      t = t[a] || "", s = !1
    }
    if (!i && s && void 0 !== t.pathname && (t = t.toString()), "string" == typeof t) this._parts = r.parse(t, this._parts);
    else {
      if (!i && !s) throw new TypeError("invalid input");
      var o = i ? t._parts : t;
      for (n in o) m.call(this._parts, n) && (this._parts[n] = o[n])
    }
    return this.build(!e), this
  }, p.is = function (t) {
    var e = !1,
      i = !1,
      s = !1,
      a = !1,
      o = !1,
      u = !1,
      l = !1,
      c = !this._parts.urn;
    switch (this._parts.hostname && (c = !1, i = r.ip4_expression.test(this._parts.hostname), s = r.ip6_expression.test(this._parts.hostname), e = i || s, a = !e, o = a && n && n.has(this._parts.hostname), u = a && r.idn_expression.test(this._parts.hostname), l = a && r.punycode_expression.test(this._parts.hostname)), t.toLowerCase()) {
    case "relative":
      return c;
    case "absolute":
      return !c;
    case "domain":
    case "name":
      return a;
    case "sld":
      return o;
    case "ip":
      return e;
    case "ip4":
    case "ipv4":
    case "inet4":
      return i;
    case "ip6":
    case "ipv6":
    case "inet6":
      return s;
    case "idn":
      return u;
    case "url":
      return !this._parts.urn;
    case "urn":
      return !!this._parts.urn;
    case "punycode":
      return l
    }
    return null
  };
  var y = p.protocol,
    b = p.port,
    w = p.hostname;
  p.protocol = function (t, e) {
    if (void 0 !== t && t && (t = t.replace(/:(\/\/)?$/, ""), !t.match(r.protocol_expression))) throw new TypeError("Protocol '" + t + "' contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");
    return y.call(this, t, e)
  }, p.scheme = p.protocol, p.port = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if (void 0 !== t && (0 === t && (t = null), t && (t += "", ":" === t.charAt(0) && (t = t.substring(1)), t.match(/[^0-9]/)))) throw new TypeError("Port '" + t + "' contains characters other than [0-9]");
    return b.call(this, t, e)
  }, p.hostname = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if (void 0 !== t) {
      var n = {};
      r.parseHost(t, n), t = n.hostname
    }
    return w.call(this, t, e)
  }, p.host = function (t, e) {
    return this._parts.urn ? void 0 === t ? "" : this : void 0 === t ? this._parts.hostname ? r.buildHost(this._parts) : "" : (r.parseHost(t, this._parts), this.build(!e), this)
  }, p.authority = function (t, e) {
    return this._parts.urn ? void 0 === t ? "" : this : void 0 === t ? this._parts.hostname ? r.buildAuthority(this._parts) : "" : (r.parseAuthority(t, this._parts), this.build(!e), this)
  }, p.userinfo = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if (void 0 === t) {
      if (!this._parts.username) return "";
      var n = r.buildUserinfo(this._parts);
      return n.substring(0, n.length - 1)
    }
    return "@" !== t[t.length - 1] && (t += "@"), r.parseUserinfo(t, this._parts), this.build(!e), this
  }, p.resource = function (t, e) {
    var n;
    return void 0 === t ? this.path() + this.search() + this.hash() : (n = r.parse(t), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!e), this)
  }, p.subdomain = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if (void 0 === t) {
      if (!this._parts.hostname || this.is("IP")) return "";
      var n = this._parts.hostname.length - this.domain().length - 1;
      return this._parts.hostname.substring(0, n) || ""
    }
    var i = this._parts.hostname.length - this.domain().length,
      a = this._parts.hostname.substring(0, i),
      o = new RegExp("^" + s(a));
    return t && "." !== t.charAt(t.length - 1) && (t += "."), t && r.ensureValidHostname(t), this._parts.hostname = this._parts.hostname.replace(o, t), this.build(!e), this
  }, p.domain = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if ("boolean" == typeof t && (e = t, t = void 0), void 0 === t) {
      if (!this._parts.hostname || this.is("IP")) return "";
      var n = this._parts.hostname.match(/\./g);
      if (n && n.length < 2) return this._parts.hostname;
      var i = this._parts.hostname.length - this.tld(e).length - 1;
      return i = this._parts.hostname.lastIndexOf(".", i - 1) + 1, this._parts.hostname.substring(i) || ""
    }
    if (!t) throw new TypeError("cannot set domain empty");
    if (r.ensureValidHostname(t), !this._parts.hostname || this.is("IP")) this._parts.hostname = t;
    else {
      var a = new RegExp(s(this.domain()) + "$");
      this._parts.hostname = this._parts.hostname.replace(a, t)
    }
    return this.build(!e), this
  }, p.tld = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if ("boolean" == typeof t && (e = t, t = void 0), void 0 === t) {
      if (!this._parts.hostname || this.is("IP")) return "";
      var i = this._parts.hostname.lastIndexOf("."),
        r = this._parts.hostname.substring(i + 1);
      return e !== !0 && n && n.list[r.toLowerCase()] ? n.get(this._parts.hostname) || r : r
    }
    var a;
    if (!t) throw new TypeError("cannot set TLD empty");
    if (t.match(/[^a-zA-Z0-9-]/)) {
      if (!n || !n.is(t)) throw new TypeError("TLD '" + t + "' contains characters other than [A-Z0-9]");
      a = new RegExp(s(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(a, t)
    } else {
      if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
      a = new RegExp(s(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(a, t)
    }
    return this.build(!e), this
  }, p.directory = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if (void 0 === t || t === !0) {
      if (!this._parts.path && !this._parts.hostname) return "";
      if ("/" === this._parts.path) return "/";
      var n = this._parts.path.length - this.filename().length - 1,
        i = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
      return t ? r.decodePath(i) : i
    }
    var a = this._parts.path.length - this.filename().length,
      o = this._parts.path.substring(0, a),
      u = new RegExp("^" + s(o));
    return this.is("relative") || (t || (t = "https://www.kickstarter.com/"), "/" !== t.charAt(0) && (t = "/" + t)), t && "/" !== t.charAt(t.length - 1) && (t += "https://www.kickstarter.com/"), t = r.recodePath(t), this._parts.path = this._parts.path.replace(u, t), this.build(!e), this
  }, p.filename = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if (void 0 === t || t === !0) {
      if (!this._parts.path || "/" === this._parts.path) return "";
      var n = this._parts.path.lastIndexOf("https://www.kickstarter.com/"),
        i = this._parts.path.substring(n + 1);
      return t ? r.decodePathSegment(i) : i
    }
    var a = !1;
    "/" === t.charAt(0) && (t = t.substring(1)), t.match(/\.?\//) && (a = !0);
    var o = new RegExp(s(this.filename()) + "$");
    return t = r.recodePath(t), this._parts.path = this._parts.path.replace(o, t), a ? this.normalizePath(e) : this.build(!e), this
  }, p.suffix = function (t, e) {
    if (this._parts.urn) return void 0 === t ? "" : this;
    if (void 0 === t || t === !0) {
      if (!this._parts.path || "/" === this._parts.path) return "";
      var n, i, a = this.filename(),
        o = a.lastIndexOf(".");
      return -1 === o ? "" : (n = a.substring(o + 1), i = /^[a-z0-9%]+$/i.test(n) ? n : "", t ? r.decodePathSegment(i) : i)
    }
    "." === t.charAt(0) && (t = t.substring(1));
    var u, l = this.suffix();
    if (l) u = new RegExp(t ? s(l) + "$" : s("." + l) + "$");
    else {
      if (!t) return this;
      this._parts.path += "." + r.recodePath(t)
    }
    return u && (t = r.recodePath(t), this._parts.path = this._parts.path.replace(u, t)), this.build(!e), this
  }, p.segment = function (t, e, n) {
    var i = this._parts.urn ? ":" : "/",
      r = this.path(),
      s = "/" === r.substring(0, 1),
      a = r.split(i);
    if (void 0 !== t && "number" != typeof t && (n = e, e = t, t = void 0), void 0 !== t && "number" != typeof t) throw new Error("Bad segment '" + t + "', must be 0-based integer");
    if (s && a.shift(), 0 > t && (t = Math.max(a.length + t, 0)), void 0 === e) return void 0 === t ? a : a[t];
    if (null === t || void 0 === a[t])
      if (o(e)) {
        a = [];
        for (var u = 0, l = e.length; l > u; u++)(e[u].length || a.length && a[a.length - 1].length) && (a.length && !a[a.length - 1].length && a.pop(), a.push(e[u]))
      } else(e || "string" == typeof e) && ("" === a[a.length - 1] ? a[a.length - 1] = e : a.push(e));
    else e || "string" == typeof e && e.length ? a[t] = e : a.splice(t, 1);
    return s && a.unshift(""), this.path(a.join(i), n)
  }, p.segmentCoded = function (t, e, n) {
    var i, s, a;
    if ("number" != typeof t && (n = e, e = t, t = void 0), void 0 === e) {
      if (i = this.segment(t, e, n), o(i))
        for (s = 0, a = i.length; a > s; s++) i[s] = r.decode(i[s]);
      else i = void 0 !== i ? r.decode(i) : void 0;
      return i
    }
    if (o(e))
      for (s = 0, a = e.length; a > s; s++) e[s] = r.decode(e[s]);
    else e = "string" == typeof e ? r.encode(e) : e;
    return this.segment(t, e, n)
  };
  var x = p.query;
  return p.query = function (t, e) {
    if (t === !0) return r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    if ("function" == typeof t) {
      var n = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace),
        i = t.call(this, n);
      return this._parts.query = r.buildQuery(i || n, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!e), this
    }
    return void 0 !== t && "string" != typeof t ? (this._parts.query = r.buildQuery(t, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), this.build(!e), this) : x.call(this, t, e)
  }, p.setQuery = function (t, e, n) {
    var i = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    if ("object" == typeof t)
      for (var s in t) m.call(t, s) && (i[s] = t[s]);
    else {
      if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
      i[t] = void 0 !== e ? e : null
    }
    return this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof t && (n = e), this.build(!n), this
  }, p.addQuery = function (t, e, n) {
    var i = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return r.addQuery(i, t, void 0 === e ? null : e), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof t && (n = e), this.build(!n), this
  }, p.removeQuery = function (t, e, n) {
    var i = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return r.removeQuery(i, t, e), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace), "string" != typeof t && (n = e), this.build(!n), this
  }, p.hasQuery = function (t, e, n) {
    var i = r.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
    return r.hasQuery(i, t, e, n)
  }, p.setSearch = p.setQuery, p.addSearch = p.addQuery, p.removeSearch = p.removeQuery, p.hasSearch = p.hasQuery, p.normalize = function () {
    return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
  }, p.normalizeProtocol = function (t) {
    return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!t)), this
  }, p.normalizeHostname = function (n) {
    return this._parts.hostname && (this.is("IDN") && t ? this._parts.hostname = t.toASCII(this._parts.hostname) : this.is("IPv6") && e && (this._parts.hostname = e.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this
  }, p.normalizePort = function (t) {
    return "string" == typeof this._parts.protocol && this._parts.port === r.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!t)), this
  }, p.normalizePath = function (t) {
    if (this._parts.urn) return this;
    if (!this._parts.path || "/" === this._parts.path) return this;
    var e, n, i, s = this._parts.path,
      a = "";
    for ("/" !== s.charAt(0) && (e = !0, s = "/" + s), s = s.replace(/(\/(\.\/)+)|(\/\.$)/g, "https://www.kickstarter.com/").replace(/\/{2,}/g, "https://www.kickstarter.com/"), e && (a = s.substring(1).match(/^(\.\.\/)+/) || "", a && (a = a[0]));;) {
      if (n = s.indexOf("/.."), -1 === n) break;
      0 !== n ? (i = s.substring(0, n).lastIndexOf("https://www.kickstarter.com/"), -1 === i && (i = n), s = s.substring(0, i) + s.substring(n + 3)) : s = s.substring(3)
    }
    return e && this.is("relative") && (s = a + s.substring(1)), s = r.recodePath(s), this._parts.path = s, this.build(!t), this
  }, p.normalizePathname = p.normalizePath, p.normalizeQuery = function (t) {
    return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(r.parseQuery(this._parts.query, this._parts.escapeQuerySpace)) : this._parts.query = null, this.build(!t)), this
  }, p.normalizeFragment = function (t) {
    return this._parts.fragment || (this._parts.fragment = null, this.build(!t)), this
  }, p.normalizeSearch = p.normalizeQuery, p.normalizeHash = p.normalizeFragment, p.iso8859 = function () {
    var t = r.encode,
      e = r.decode;
    return r.encode = escape, r.decode = decodeURIComponent, this.normalize(), r.encode = t, r.decode = e, this
  }, p.unicode = function () {
    var t = r.encode,
      e = r.decode;
    return r.encode = f, r.decode = unescape, this.normalize(), r.encode = t, r.decode = e, this
  }, p.readable = function () {
    var e = this.clone();
    e.username("").password("").normalize();
    var n = "";
    if (e._parts.protocol && (n += e._parts.protocol + "://"), e._parts.hostname && (e.is("punycode") && t ? (n += t.toUnicode(e._parts.hostname), e._parts.port && (n += ":" + e._parts.port)) : n += e.host()), e._parts.hostname && e._parts.path && "/" !== e._parts.path.charAt(0) && (n += "https://www.kickstarter.com/"), n += e.path(!0), e._parts.query) {
      for (var i = "", s = 0, a = e._parts.query.split("&"), o = a.length; o > s; s++) {
        var u = (a[s] || "").split("=");
        i += "&" + r.decodeQuery(u[0], this._parts.escapeQuerySpace).replace(/&/g, "%26"), void 0 !== u[1] && (i += "=" + r.decodeQuery(u[1], this._parts.escapeQuerySpace).replace(/&/g, "%26"))
      }
      n += "?" + i.substring(1)
    }
    return n += r.decodeQuery(e.hash(), !0)
  }, p.absoluteTo = function (t) {
    var e, n, i, s = this.clone(),
      a = ["protocol", "username", "password", "hostname", "port"];
    if (this._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
    if (t instanceof r || (t = new r(t)), s._parts.protocol || (s._parts.protocol = t._parts.protocol), this._parts.hostname) return s;
    for (n = 0; i = a[n]; n++) s._parts[i] = t._parts[i];
    return s._parts.path ? ".." === s._parts.path.substring(-2) && (s._parts.path += "https://www.kickstarter.com/") : (s._parts.path = t._parts.path, s._parts.query || (s._parts.query = t._parts.query)), "/" !== s.path().charAt(0) && (e = t.directory(), s._parts.path = (e ? e + "/" : "") + s._parts.path, s.normalizePath()), s.build(), s
  }, p.relativeTo = function (t) {
    var e, n, i, s, a, o = this.clone().normalize();
    if (o._parts.urn) throw new Error("URNs do not have any generally defined hierarchical components");
    if (t = new r(t).normalize(), e = o._parts, n = t._parts, s = o.path(), a = t.path(), "/" !== s.charAt(0)) throw new Error("URI is already relative");
    if ("/" !== a.charAt(0)) throw new Error("Cannot calculate a URI relative to another relative URI");
    if (e.protocol === n.protocol && (e.protocol = null), e.username !== n.username || e.password !== n.password) return o.build();
    if (null !== e.protocol || null !== e.username || null !== e.password) return o.build();
    if (e.hostname !== n.hostname || e.port !== n.port) return o.build();
    if (e.hostname = null, e.port = null, s === a) return e.path = "", o.build();
    if (i = r.commonPath(o.path(), t.path()), !i) return o.build();
    var u = n.path.substring(i.length).replace(/[^\/]*$/, "").replace(/.*?\//g, "https://www.kickstarter.com/");
    return e.path = u + e.path.substring(i.length), o.build()
  }, p.equals = function (t) {
    var e, n, i, s = this.clone(),
      a = new r(t),
      u = {},
      l = {},
      h = {};
    if (s.normalize(), a.normalize(), s.toString() === a.toString()) return !0;
    if (e = s.query(), n = a.query(), s.query(""), a.query(""), s.toString() !== a.toString()) return !1;
    if (e.length !== n.length) return !1;
    u = r.parseQuery(e, this._parts.escapeQuerySpace), l = r.parseQuery(n, this._parts.escapeQuerySpace);
    for (i in u)
      if (m.call(u, i)) {
        if (o(u[i])) {
          if (!c(u[i], l[i])) return !1
        } else if (u[i] !== l[i]) return !1;
        h[i] = !0
      }
    for (i in l)
      if (m.call(l, i) && !h[i]) return !1;
    return !0
  }, p.duplicateQueryParameters = function (t) {
    return this._parts.duplicateQueryParameters = !!t, this
  }, p.escapeQuerySpace = function (t) {
    return this._parts.escapeQuerySpace = !!t, this
  }, r
}),
function (t, e) {
  window.mixpanel = e;
  var n, i, r, s;
  n = t.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = ("https:" === t.location.protocol ? "https:" : "http:") + "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js", i = t.getElementsByTagName("script")[0], i.parentNode.insertBefore(n, i), e._i = [], e.init = function (t, n, i) {
    function a(t, e) {
      var n = e.split(".");
      2 == n.length && (t = t[n[0]], e = n[1]), t[e] = function () {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
      }
    }
    var o = e;
    for ("undefined" != typeof i ? o = e[i] = [] : i = "mixpanel", o.people = o.people || [], r = ["disable", "track", "track_pageview", "track_links", "track_forms", "register", "register_once", "unregister", "identify", "alias", "name_tag", "set_config", "people.html", "people.set_once", "people.increment", "people.track_charge", "people.append"], s = 0; s < r.length; s++) a(o, r[s]);
    e._i.push([t, n, i])
  }, e.__SV = 1.2
}(document, window.mixpanel || []),
function (t) {
  t.extend(t.fn, {
    livequery: function (e, n, i) {
      var r, s = this;
      return t.isFunction(e) && (i = n, n = e, e = void 0), t.each(t.livequery.queries, function (t, a) {
        return s.selector != a.selector || s.context != a.context || e != a.type || n && n.$lqguid != a.fn.$lqguid || i && i.$lqguid != a.fn2.$lqguid ? void 0 : (r = a) && !1
      }), r = r || new t.livequery(this.selector, this.context, e, n, i), r.stopped = !1, r.run(), this
    },
    expire: function (e, n, i) {
      var r = this;
      return t.isFunction(e) && (i = n, n = e, e = void 0), t.each(t.livequery.queries, function (s, a) {
        r.selector != a.selector || r.context != a.context || e && e != a.type || n && n.$lqguid != a.fn.$lqguid || i && i.$lqguid != a.fn2.$lqguid || this.stopped || t.livequery.stop(a.id)
      }), this
    }
  }), t.livequery = function (e, n, i, r, s) {
    return this.selector = e, this.context = n, this.type = i, this.fn = r, this.fn2 = s, this.elements = [], this.stopped = !1, this.id = t.livequery.queries.push(this) - 1, r.$lqguid = r.$lqguid || t.livequery.guid++, s && (s.$lqguid = s.$lqguid || t.livequery.guid++), this
  }, t.livequery.prototype = {
    stop: function () {
      var t = this;
      this.type ? this.elements.unbind(this.type, this.fn) : this.fn2 && this.elements.each(function (e, n) {
        t.fn2.apply(n)
      }), this.elements = [], this.stopped = !0
    },
    run: function () {
      if (!this.stopped) {
        var e = this,
          n = this.elements,
          i = t(this.selector, this.context),
          r = i.not(n);
        this.elements = i, this.type ? (r.bind(this.type, this.fn), n.length > 0 && t.each(n, function (n, r) {
          t.inArray(r, i) < 0 && t.event.remove(r, e.type, e.fn)
        })) : (r.each(function () {
          e.fn.apply(this)
        }), this.fn2 && n.length > 0 && t.each(n, function (n, r) {
          t.inArray(r, i) < 0 && e.fn2.apply(r)
        }))
      }
    }
  }, t.extend(t.livequery, {
    guid: 0,
    queries: [],
    queue: [],
    running: !1,
    timeout: null,
    checkQueue: function () {
      if (t.livequery.running && t.livequery.queue.length)
        for (var e = t.livequery.queue.length; e--;) t.livequery.queries[t.livequery.queue.shift()].run()
    },
    pause: function () {
      t.livequery.running = !1
    },
    play: function () {
      t.livequery.running = !0, t.livequery.run()
    },
    registerPlugin: function () {
      t.each(arguments, function (e, n) {
        if (t.fn[n]) {
          var i = t.fn[n];
          t.fn[n] = function () {
            var e = i.apply(this, arguments);
            return t.livequery.run(), e
          }
        }
      })
    },
    run: function (e) {
      void 0 != e ? t.inArray(e, t.livequery.queue) < 0 && t.livequery.queue.push(e) : t.each(t.livequery.queries, function (e) {
        t.inArray(e, t.livequery.queue) < 0 && t.livequery.queue.push(e)
      }), t.livequery.timeout && clearTimeout(t.livequery.timeout), t.livequery.timeout = setTimeout(t.livequery.checkQueue, 20)
    },
    stop: function (e) {
      void 0 != e ? t.livequery.queries[e].stop() : t.each(t.livequery.queries, function (e) {
        t.livequery.queries[e].stop()
      })
    }
  }), t.livequery.registerPlugin("append", "prepend", "after", "before", "wrap", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "empty", "remove", "html"), t(function () {
    t.livequery.play()
  })
}(jQuery),
function (t) {
  function e(t, e, n) {
    switch (arguments.length) {
    case 2:
      return null != t ? t : e;
    case 3:
      return null != t ? t : null != e ? e : n;
    default:
      throw new Error("Implement me")
    }
  }

  function n(t, e) {
    return De.call(t, e)
  }

  function i() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1
    }
  }

  function r(t) {
    we.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
  }

  function s(t, e) {
    var n = !0;
    return p(function () {
      return n && (r(t), n = !1), e.apply(this, arguments)
    }, e)
  }

  function a(t, e) {
    yn[t] || (r(e), yn[t] = !0)
  }

  function o(t, e) {
    return function (n) {
      return g(t.call(this, n), e)
    }
  }

  function u(t, e) {
    return function (n) {
      return this.localeData().ordinal(t.call(this, n), e)
    }
  }

  function l(t, e) {
    var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
      s = t.clone().add(r, "months");
    return 0 > e - s ? (n = t.clone().add(r - 1, "months"), i = (e - s) / (s - n)) : (n = t.clone().add(r + 1, "months"), i = (e - s) / (n - s)), -(r + i)
  }

  function c(t, e, n) {
    var i;
    return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
  }

  function h() {}

  function f(t, e) {
    e !== !1 && R(t), m(this, t), this._d = new Date(+t._d), wn === !1 && (wn = !0, we.updateOffset(this), wn = !1)
  }

  function d(t) {
    var e = C(t),
      n = e.year || 0,
      i = e.quarter || 0,
      r = e.month || 0,
      s = e.week || 0,
      a = e.day || 0,
      o = e.hour || 0,
      u = e.minute || 0,
      l = e.second || 0,
      c = e.millisecond || 0;
    this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * o, this._days = +a + 7 * s, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = we.localeData(), this._bubble()
  }

  function p(t, e) {
    for (var i in e) n(e, i) && (t[i] = e[i]);
    return n(e, "toString") && (t.toString = e.toString), n(e, "valueOf") && (t.valueOf = e.valueOf), t
  }

  function m(t, e) {
    var n, i, r;
    if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = e._pf), "undefined" != typeof e._locale && (t._locale = e._locale), Ne.length > 0)
      for (n in Ne) i = Ne[n], r = e[i], "undefined" != typeof r && (t[i] = r);
    return t
  }

  function _(t) {
    return 0 > t ? Math.ceil(t) : Math.floor(t)
  }

  function g(t, e, n) {
    for (var i = "" + Math.abs(t), r = t >= 0; i.length < e;) i = "0" + i;
    return (r ? n ? "+" : "" : "-") + i
  }

  function v(t, e) {
    var n = {
      milliseconds: 0,
      months: 0
    };
    return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
  }

  function y(t, e) {
    var n;
    return e = Y(e, t), t.isBefore(e) ? n = v(t, e) : (n = v(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n
  }

  function b(t, e) {
    return function (n, i) {
      var r, s;
      return null === i || isNaN(+i) || (a(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, r = we.duration(n, i), w(this, r, t), this
    }
  }

  function w(t, e, n, i) {
    var r = e._milliseconds,
      s = e._days,
      a = e._months;
    i = null == i ? !0 : i, r && t._d.setTime(+t._d + r * n), s && me(t, "Date", pe(t, "Date") + s * n), a && de(t, pe(t, "Month") + a * n), i && we.updateOffset(t, s || a)
  }

  function x(t) {
    return "[object Array]" === Object.prototype.toString.call(t)
  }

  function T(t) {
    return "[object Date]" === Object.prototype.toString.call(t) || t instanceof Date
  }

  function k(t, e, n) {
    var i, r = Math.min(t.length, e.length),
      s = Math.abs(t.length - e.length),
      a = 0;
    for (i = 0; r > i; i++)(n && t[i] !== e[i] || !n && M(t[i]) !== M(e[i])) && a++;
    return a + s
  }

  function S(t) {
    if (t) {
      var e = t.toLowerCase().replace(/(.)s$/, "$1");
      t = fn[t] || dn[e] || e
    }
    return t
  }

  function C(t) {
    var e, i, r = {};
    for (i in t) n(t, i) && (e = S(i), e && (r[e] = t[i]));
    return r
  }

  function D(e) {
    var n, i;
    if (0 === e.indexOf("week")) n = 7, i = "day";
    else {
      if (0 !== e.indexOf("month")) return;
      n = 12, i = "month"
    }
    we[e] = function (r, s) {
      var a, o, u = we._locale[e],
        l = [];
      if ("number" == typeof r && (s = r, r = t), o = function (t) {
          var e = we().utc().set(i, t);
          return u.call(we._locale, e, r || "")
        }, null != s) return o(s);
      for (a = 0; n > a; a++) l.push(o(a));
      return l
    }
  }

  function M(t) {
    var e = +t,
      n = 0;
    return 0 !== e && isFinite(e) && (n = e >= 0 ? Math.floor(e) : Math.ceil(e)), n
  }

  function A(t, e) {
    return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
  }

  function P(t, e, n) {
    return le(we([t, 11, 31 + e - n]), e, n).week
  }

  function O(t) {
    return E(t) ? 366 : 365
  }

  function E(t) {
    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
  }

  function R(t) {
    var e;
    t._a && -2 === t._pf.overflow && (e = t._a[Ae] < 0 || t._a[Ae] > 11 ? Ae : t._a[Pe] < 1 || t._a[Pe] > A(t._a[Me], t._a[Ae]) ? Pe : t._a[Oe] < 0 || t._a[Oe] > 24 || 24 === t._a[Oe] && (0 !== t._a[Ee] || 0 !== t._a[Re] || 0 !== t._a[je]) ? Oe : t._a[Ee] < 0 || t._a[Ee] > 59 ? Ee : t._a[Re] < 0 || t._a[Re] > 59 ? Re : t._a[je] < 0 || t._a[je] > 999 ? je : -1, t._pf._overflowDayOfYear && (Me > e || e > Pe) && (e = Pe), t._pf.overflow = e)
  }

  function j(e) {
    return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length && e._pf.bigHour === t)), e._isValid
  }

  function L(t) {
    return t ? t.toLowerCase().replace("_", "-") : t
  }

  function N(t) {
    for (var e, n, i, r, s = 0; s < t.length;) {
      for (r = L(t[s]).split("-"), e = r.length, n = L(t[s + 1]), n = n ? n.split("-") : null; e > 0;) {
        if (i = I(r.slice(0, e).join("-"))) return i;
        if (n && n.length >= e && k(r, n, !0) >= e - 1) break;
        e--
      }
      s++
    }
    return null
  }

  function I(t) {
    var e = null;
    if (!Le[t] && Ie) try {
      e = we.locale(), require("./locale/" + t), we.locale(e)
    } catch (n) {}
    return Le[t]
  }

  function Y(t, e) {
    var n, i;
    return e._isUTC ? (n = e.clone(), i = (we.isMoment(t) || T(t) ? +t : +we(t)) - +n, n._d.setTime(+n._d + i), we.updateOffset(n, !1), n) : we(t).local()
  }

  function F(t) {
    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
  }

  function $(t) {
    var e, n, i = t.match(ze);
    for (e = 0, n = i.length; n > e; e++) i[e] = vn[i[e]] ? vn[i[e]] : F(i[e]);
    return function (r) {
      var s = "";
      for (e = 0; n > e; e++) s += i[e] instanceof Function ? i[e].call(r, t) : i[e];
      return s
    }
  }

  function z(t, e) {
    return t.isValid() ? (e = q(e, t.localeData()), pn[e] || (pn[e] = $(e)), pn[e](t)) : t.localeData().invalidDate()
  }

  function q(t, e) {
    function n(t) {
      return e.longDateFormat(t) || t
    }
    var i = 5;
    for (qe.lastIndex = 0; i >= 0 && qe.test(t);) t = t.replace(qe, n), qe.lastIndex = 0, i -= 1;
    return t
  }

  function H(t, e) {
    var n, i = e._strict;
    switch (t) {
    case "Q":
      return Ke;
    case "DDDD":
      return en;
    case "YYYY":
    case "GGGG":
    case "gggg":
      return i ? nn : We;
    case "Y":
    case "G":
    case "g":
      return sn;
    case "YYYYYY":
    case "YYYYY":
    case "GGGGG":
    case "ggggg":
      return i ? rn : Be;
    case "S":
      if (i) return Ke;
    case "SS":
      if (i) return tn;
    case "SSS":
      if (i) return en;
    case "DDD":
      return Ue;
    case "MMM":
    case "MMMM":
    case "dd":
    case "ddd":
    case "dddd":
      return Xe;
    case "a":
    case "A":
      return e._locale._meridiemParse;
    case "x":
      return Ze;
    case "X":
      return Je;
    case "Z":
    case "ZZ":
      return Qe;
    case "T":
      return Ve;
    case "SSSS":
      return Ge;
    case "MM":
    case "DD":
    case "YY":
    case "GG":
    case "gg":
    case "HH":
    case "hh":
    case "mm":
    case "ss":
    case "ww":
    case "WW":
      return i ? tn : He;
    case "M":
    case "D":
    case "d":
    case "H":
    case "h":
    case "m":
    case "s":
    case "w":
    case "W":
    case "e":
    case "E":
      return He;
    case "Do":
      return i ? e._locale._ordinalParse : e._locale._ordinalParseLenient;
    default:
      return n = new RegExp(J(Z(t.replace("\\", "")), "i"))
    }
  }

  function U(t) {
    t = t || "";
    var e = t.match(Qe) || [],
      n = e[e.length - 1] || [],
      i = (n + "").match(cn) || ["-", 0, 0],
      r = +(60 * i[1]) + M(i[2]);
    return "+" === i[0] ? r : -r
  }

  function W(t, e, n) {
    var i, r = n._a;
    switch (t) {
    case "Q":
      null != e && (r[Ae] = 3 * (M(e) - 1));
      break;
    case "M":
    case "MM":
      null != e && (r[Ae] = M(e) - 1);
      break;
    case "MMM":
    case "MMMM":
      i = n._locale.monthsParse(e, t, n._strict), null != i ? r[Ae] = i : n._pf.invalidMonth = e;
      break;
    case "D":
    case "DD":
      null != e && (r[Pe] = M(e));
      break;
    case "Do":
      null != e && (r[Pe] = M(parseInt(e.match(/\d{1,2}/)[0], 10)));
      break;
    case "DDD":
    case "DDDD":
      null != e && (n._dayOfYear = M(e));
      break;
    case "YY":
      r[Me] = we.parseTwoDigitYear(e);
      break;
    case "YYYY":
    case "YYYYY":
    case "YYYYYY":
      r[Me] = M(e);
      break;
    case "a":
    case "A":
      n._meridiem = e;
      break;
    case "h":
    case "hh":
      n._pf.bigHour = !0;
    case "H":
    case "HH":
      r[Oe] = M(e);
      break;
    case "m":
    case "mm":
      r[Ee] = M(e);
      break;
    case "s":
    case "ss":
      r[Re] = M(e);
      break;
    case "S":
    case "SS":
    case "SSS":
    case "SSSS":
      r[je] = M(1e3 * ("0." + e));
      break;
    case "x":
      n._d = new Date(M(e));
      break;
    case "X":
      n._d = new Date(1e3 * parseFloat(e));
      break;
    case "Z":
    case "ZZ":
      n._useUTC = !0, n._tzm = U(e);
      break;
    case "dd":
    case "ddd":
    case "dddd":
      i = n._locale.weekdaysParse(e), null != i ? (n._w = n._w || {}, n._w.d = i) : n._pf.invalidWeekday = e;
      break;
    case "w":
    case "ww":
    case "W":
    case "WW":
    case "d":
    case "e":
    case "E":
      t = t.substr(0, 1);
    case "gggg":
    case "GGGG":
    case "GGGGG":
      t = t.substr(0, 2), e && (n._w = n._w || {}, n._w[t] = M(e));
      break;
    case "gg":
    case "GG":
      n._w = n._w || {}, n._w[t] = we.parseTwoDigitYear(e)
    }
  }

  function B(t) {
    var n, i, r, s, a, o, u;
    n = t._w, null != n.GG || null != n.W || null != n.E ? (a = 1, o = 4, i = e(n.GG, t._a[Me], le(we(), 1, 4).year), r = e(n.W, 1), s = e(n.E, 1)) : (a = t._locale._week.dow, o = t._locale._week.doy, i = e(n.gg, t._a[Me], le(we(), a, o).year), r = e(n.w, 1), null != n.d ? (s = n.d, a > s && ++r) : s = null != n.e ? n.e + a : a), u = ce(i, r, s, o, a), t._a[Me] = u.year, t._dayOfYear = u.dayOfYear
  }

  function G(t) {
    var n, i, r, s, a = [];
    if (!t._d) {
      for (r = Q(t), t._w && null == t._a[Pe] && null == t._a[Ae] && B(t), t._dayOfYear && (s = e(t._a[Me], r[Me]), t._dayOfYear > O(s) && (t._pf._overflowDayOfYear = !0), i = se(s, 0, t._dayOfYear), t._a[Ae] = i.getUTCMonth(), t._a[Pe] = i.getUTCDate()), n = 0; 3 > n && null == t._a[n]; ++n) t._a[n] = a[n] = r[n];
      for (; 7 > n; n++) t._a[n] = a[n] = null == t._a[n] ? 2 === n ? 1 : 0 : t._a[n];
      24 === t._a[Oe] && 0 === t._a[Ee] && 0 === t._a[Re] && 0 === t._a[je] && (t._nextDay = !0, t._a[Oe] = 0), t._d = (t._useUTC ? se : re).apply(null, a), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[Oe] = 24)
    }
  }

  function X(t) {
    var e;
    t._d || (e = C(t._i), t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], G(t))
  }

  function Q(t) {
    var e = new Date;
    return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
  }

  function V(e) {
    if (e._f === we.ISO_8601) return void te(e);
    e._a = [], e._pf.empty = !0;
    var n, i, r, s, a, o = "" + e._i,
      u = o.length,
      l = 0;
    for (r = q(e._f, e._locale).match(ze) || [], n = 0; n < r.length; n++) s = r[n], i = (o.match(H(s, e)) || [])[0], i && (a = o.substr(0, o.indexOf(i)), a.length > 0 && e._pf.unusedInput.push(a), o = o.slice(o.indexOf(i) + i.length), l += i.length), vn[s] ? (i ? e._pf.empty = !1 : e._pf.unusedTokens.push(s), W(s, i, e)) : e._strict && !i && e._pf.unusedTokens.push(s);
    e._pf.charsLeftOver = u - l, o.length > 0 && e._pf.unusedInput.push(o), e._pf.bigHour === !0 && e._a[Oe] <= 12 && (e._pf.bigHour = t), e._a[Oe] = c(e._locale, e._a[Oe], e._meridiem), G(e), R(e)
  }

  function Z(t) {
    return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, r) {
      return e || n || i || r
    })
  }

  function J(t) {
    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }

  function K(t) {
    var e, n, r, s, a;
    if (0 === t._f.length) return t._pf.invalidFormat = !0, void(t._d = new Date(0 / 0));
    for (s = 0; s < t._f.length; s++) a = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._pf = i(), e._f = t._f[s], V(e), j(e) && (a += e._pf.charsLeftOver, a += 10 * e._pf.unusedTokens.length, e._pf.score = a, (null == r || r > a) && (r = a, n = e));
    p(t, n || e)
  }

  function te(t) {
    var e, n, i = t._i,
      r = an.exec(i);
    if (r) {
      for (t._pf.iso = !0, e = 0, n = un.length; n > e; e++)
        if (un[e][1].exec(i)) {
          t._f = un[e][0] + (r[6] || " ");
          break
        }
      for (e = 0, n = ln.length; n > e; e++)
        if (ln[e][1].exec(i)) {
          t._f += ln[e][0];
          break
        }
      i.match(Qe) && (t._f += "Z"), V(t)
    } else t._isValid = !1
  }

  function ee(t) {
    te(t), t._isValid === !1 && (delete t._isValid, we.createFromInputFallback(t))
  }

  function ne(t, e) {
    var n, i = [];
    for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
    return i
  }

  function ie(e) {
    var n, i = e._i;
    i === t ? e._d = new Date : T(i) ? e._d = new Date(+i) : null !== (n = Ye.exec(i)) ? e._d = new Date(+n[1]) : "string" == typeof i ? ee(e) : x(i) ? (e._a = ne(i.slice(0), function (t) {
      return parseInt(t, 10)
    }), G(e)) : "object" == typeof i ? X(e) : "number" == typeof i ? e._d = new Date(i) : we.createFromInputFallback(e)
  }

  function re(t, e, n, i, r, s, a) {
    var o = new Date(t, e, n, i, r, s, a);
    return 1970 > t && o.setFullYear(t), o
  }

  function se(t) {
    var e = new Date(Date.UTC.apply(null, arguments));
    return 1970 > t && e.setUTCFullYear(t), e
  }

  function ae(t, e) {
    if ("string" == typeof t)
      if (isNaN(t)) {
        if (t = e.weekdaysParse(t), "number" != typeof t) return null
      } else t = parseInt(t, 10);
    return t
  }

  function oe(t, e, n, i, r) {
    return r.relativeTime(e || 1, !!n, t, i)
  }

  function ue(t, e, n) {
    var i = we.duration(t).abs(),
      r = Ce(i.as("s")),
      s = Ce(i.as("m")),
      a = Ce(i.as("h")),
      o = Ce(i.as("d")),
      u = Ce(i.as("M")),
      l = Ce(i.as("y")),
      c = r < mn.s && ["s", r] || 1 === s && ["m"] || s < mn.m && ["mm", s] || 1 === a && ["h"] || a < mn.h && ["hh", a] || 1 === o && ["d"] || o < mn.d && ["dd", o] || 1 === u && ["M"] || u < mn.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
    return c[2] = e, c[3] = +t > 0, c[4] = n, oe.apply({}, c)
  }

  function le(t, e, n) {
    var i, r = n - e,
      s = n - t.day();
    return s > r && (s -= 7), r - 7 > s && (s += 7), i = we(t).add(s, "d"), {
      week: Math.ceil(i.dayOfYear() / 7),
      year: i.year()
    }
  }

  function ce(t, e, n, i, r) {
    var s, a, o = se(t, 0, 1).getUTCDay();
    return o = 0 === o ? 7 : o, n = null != n ? n : r, s = r - o + (o > i ? 7 : 0) - (r > o ? 7 : 0), a = 7 * (e - 1) + (n - r) + s + 1, {
      year: a > 0 ? t : t - 1,
      dayOfYear: a > 0 ? a : O(t - 1) + a
    }
  }

  function he(e) {
    var n, i = e._i,
      r = e._f;
    return e._locale = e._locale || we.localeData(e._l), null === i || r === t && "" === i ? we.invalid({
      nullInput: !0
    }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)), we.isMoment(i) ? new f(i, !0) : (r ? x(r) ? K(e) : V(e) : ie(e), n = new f(e), n._nextDay && (n.add(1, "d"), n._nextDay = t), n))
  }

  function fe(t, e) {
    var n, i;
    if (1 === e.length && x(e[0]) && (e = e[0]), !e.length) return we();
    for (n = e[0], i = 1; i < e.length; ++i) e[i][t](n) && (n = e[i]);
    return n
  }

  function de(t, e) {
    var n;
    return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), A(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t)
  }

  function pe(t, e) {
    return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
  }

  function me(t, e, n) {
    return "Month" === e ? de(t, n) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
  }

  function _e(t, e) {
    return function (n) {
      return null != n ? (me(this, t, n), we.updateOffset(this, e), this) : pe(this, t)
    }
  }

  function ge(t) {
    return 400 * t / 146097
  }

  function ve(t) {
    return 146097 * t / 400
  }

  function ye(t) {
    we.duration.fn[t] = function () {
      return this._data[t]
    }
  }

  function be(t) {
    "undefined" == typeof ender && (xe = Se.moment, Se.moment = t ? s("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", we) : we)
  }
  for (var we, xe, Te, ke = "2.9.0", Se = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Ce = Math.round, De = Object.prototype.hasOwnProperty, Me = 0, Ae = 1, Pe = 2, Oe = 3, Ee = 4, Re = 5, je = 6, Le = {}, Ne = [], Ie = "undefined" != typeof module && module && module.exports, Ye = /^\/?Date\((\-?\d+)/i, Fe = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, $e = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, ze = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, qe = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, He = /\d\d?/, Ue = /\d{1,3}/, We = /\d{1,4}/, Be = /[+\-]?\d{1,6}/, Ge = /\d+/, Xe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Qe = /Z|[\+\-]\d\d:?\d\d/gi, Ve = /T/i, Ze = /[\+\-]?\d+/, Je = /[\+\-]?\d+(\.\d{1,3})?/, Ke = /\d/, tn = /\d\d/, en = /\d{3}/, nn = /\d{4}/, rn = /[+-]?\d{6}/, sn = /[+-]?\d+/, an = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, on = "YYYY-MM-DDTHH:mm:ssZ", un = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], ln = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], cn = /([\+\-]|\d\d)/gi, hn = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), {
      Milliseconds: 1,
      Seconds: 1e3,
      Minutes: 6e4,
      Hours: 36e5,
      Days: 864e5,
      Months: 2592e6,
      Years: 31536e6
    }), fn = {
      ms: "millisecond",
      s: "second",
      m: "minute",
      h: "hour",
      d: "day",
      D: "date",
      w: "week",
      W: "isoWeek",
      M: "month",
      Q: "quarter",
      y: "year",
      DDD: "dayOfYear",
      e: "weekday",
      E: "isoWeekday",
      gg: "weekYear",
      GG: "isoWeekYear"
    }, dn = {
      dayofyear: "dayOfYear",
      isoweekday: "isoWeekday",
      isoweek: "isoWeek",
      weekyear: "weekYear",
      isoweekyear: "isoWeekYear"
    }, pn = {}, mn = {
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
    }, _n = "DDD w W M D d".split(" "), gn = "M D H h m s w W".split(" "), vn = {
      M: function () {
        return this.month() + 1
      },
      MMM: function (t) {
        return this.localeData().monthsShort(this, t)
      },
      MMMM: function (t) {
        return this.localeData().months(this, t)
      },
      D: function () {
        return this.date()
      },
      DDD: function () {
        return this.dayOfYear()
      },
      d: function () {
        return this.day()
      },
      dd: function (t) {
        return this.localeData().weekdaysMin(this, t)
      },
      ddd: function (t) {
        return this.localeData().weekdaysShort(this, t)
      },
      dddd: function (t) {
        return this.localeData().weekdays(this, t)
      },
      w: function () {
        return this.week()
      },
      W: function () {
        return this.isoWeek()
      },
      YY: function () {
        return g(this.year() % 100, 2)
      },
      YYYY: function () {
        return g(this.year(), 4)
      },
      YYYYY: function () {
        return g(this.year(), 5)
      },
      YYYYYY: function () {
        var t = this.year(),
          e = t >= 0 ? "+" : "-";
        return e + g(Math.abs(t), 6)
      },
      gg: function () {
        return g(this.weekYear() % 100, 2)
      },
      gggg: function () {
        return g(this.weekYear(), 4)
      },
      ggggg: function () {
        return g(this.weekYear(), 5)
      },
      GG: function () {
        return g(this.isoWeekYear() % 100, 2)
      },
      GGGG: function () {
        return g(this.isoWeekYear(), 4)
      },
      GGGGG: function () {
        return g(this.isoWeekYear(), 5)
      },
      e: function () {
        return this.weekday()
      },
      E: function () {
        return this.isoWeekday()
      },
      a: function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), !0)
      },
      A: function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), !1)
      },
      H: function () {
        return this.hours()
      },
      h: function () {
        return this.hours() % 12 || 12
      },
      m: function () {
        return this.minutes()
      },
      s: function () {
        return this.seconds()
      },
      S: function () {
        return M(this.milliseconds() / 100)
      },
      SS: function () {
        return g(M(this.milliseconds() / 10), 2)
      },
      SSS: function () {
        return g(this.milliseconds(), 3)
      },
      SSSS: function () {
        return g(this.milliseconds(), 3)
      },
      Z: function () {
        var t = this.utcOffset(),
          e = "+";
        return 0 > t && (t = -t, e = "-"), e + g(M(t / 60), 2) + ":" + g(M(t) % 60, 2)
      },
      ZZ: function () {
        var t = this.utcOffset(),
          e = "+";
        return 0 > t && (t = -t, e = "-"), e + g(M(t / 60), 2) + g(M(t) % 60, 2)
      },
      z: function () {
        return this.zoneAbbr()
      },
      zz: function () {
        return this.zoneName()
      },
      x: function () {
        return this.valueOf()
      },
      X: function () {
        return this.unix()
      },
      Q: function () {
        return this.quarter()
      }
    }, yn = {}, bn = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], wn = !1; _n.length;) Te = _n.pop(), vn[Te + "o"] = u(vn[Te], Te);
  for (; gn.length;) Te = gn.pop(), vn[Te + Te] = o(vn[Te], 2);
  vn.DDDD = o(vn.DDD, 3), p(h.prototype, {
    set: function (t) {
      var e, n;
      for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e;
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    },
    _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    months: function (t) {
      return this._months[t.month()]
    },
    _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    monthsShort: function (t) {
      return this._monthsShort[t.month()]
    },
    monthsParse: function (t, e, n) {
      var i, r, s;
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
        if (r = we.utc([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
        if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
        if (!n && this._monthsParse[i].test(t)) return i
      }
    },
    _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    weekdays: function (t) {
      return this._weekdays[t.day()]
    },
    _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    weekdaysShort: function (t) {
      return this._weekdaysShort[t.day()]
    },
    _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    weekdaysMin: function (t) {
      return this._weekdaysMin[t.day()]
    },
    weekdaysParse: function (t) {
      var e, n, i;
      for (this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
        if (this._weekdaysParse[e] || (n = we([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
    },
    _longDateFormat: {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY LT",
      LLLL: "dddd, MMMM D, YYYY LT"
    },
    longDateFormat: function (t) {
      var e = this._longDateFormat[t];
      return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (t) {
        return t.slice(1)
      }), this._longDateFormat[t] = e), e
    },
    isPM: function (t) {
      return "p" === (t + "").toLowerCase().charAt(0)
    },
    _meridiemParse: /[ap]\.?m?\.?/i,
    meridiem: function (t, e, n) {
      return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    },
    _calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    calendar: function (t, e, n) {
      var i = this._calendar[t];
      return "function" == typeof i ? i.apply(e, [n]) : i
    },
    _relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    relativeTime: function (t, e, n, i) {
      var r = this._relativeTime[n];
      return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t)
    },
    pastFuture: function (t, e) {
      var n = this._relativeTime[t > 0 ? "future" : "past"];
      return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
    },
    ordinal: function (t) {
      return this._ordinal.replace("%d", t)
    },
    _ordinal: "%d",
    _ordinalParse: /\d{1,2}/,
    preparse: function (t) {
      return t
    },
    postformat: function (t) {
      return t
    },
    week: function (t) {
      return le(t, this._week.dow, this._week.doy).week
    },
    _week: {
      dow: 0,
      doy: 6
    },
    firstDayOfWeek: function () {
      return this._week.dow
    },
    firstDayOfYear: function () {
      return this._week.doy
    },
    _invalidDate: "Invalid date",
    invalidDate: function () {
      return this._invalidDate
    }
  }), we = function (e, n, r, s) {
    var a;
    return "boolean" == typeof r && (s = r, r = t), a = {}, a._isAMomentObject = !0, a._i = e, a._f = n, a._l = r, a._strict = s, a._isUTC = !1, a._pf = i(), he(a)
  }, we.suppressDeprecationWarnings = !1, we.createFromInputFallback = s("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) {
    t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
  }), we.min = function () {
    var t = [].slice.call(arguments, 0);
    return fe("isBefore", t)
  }, we.max = function () {
    var t = [].slice.call(arguments, 0);
    return fe("isAfter", t)
  }, we.utc = function (e, n, r, s) {
    var a;
    return "boolean" == typeof r && (s = r, r = t), a = {}, a._isAMomentObject = !0, a._useUTC = !0, a._isUTC = !0, a._l = r, a._i = e, a._f = n, a._strict = s, a._pf = i(), he(a).utc()
  }, we.unix = function (t) {
    return we(1e3 * t)
  }, we.duration = function (t, e) {
    var i, r, s, a, o = t,
      u = null;
    return we.isDuration(t) ? o = {
      ms: t._milliseconds,
      d: t._days,
      M: t._months
    } : "number" == typeof t ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (u = Fe.exec(t)) ? (i = "-" === u[1] ? -1 : 1, o = {
      y: 0,
      d: M(u[Pe]) * i,
      h: M(u[Oe]) * i,
      m: M(u[Ee]) * i,
      s: M(u[Re]) * i,
      ms: M(u[je]) * i
    }) : (u = $e.exec(t)) ? (i = "-" === u[1] ? -1 : 1, s = function (t) {
      var e = t && parseFloat(t.replace(",", "."));
      return (isNaN(e) ? 0 : e) * i
    }, o = {
      y: s(u[2]),
      M: s(u[3]),
      d: s(u[4]),
      h: s(u[5]),
      m: s(u[6]),
      s: s(u[7]),
      w: s(u[8])
    }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (a = y(we(o.from), we(o.to)), o = {}, o.ms = a.milliseconds, o.M = a.months), r = new d(o), we.isDuration(t) && n(t, "_locale") && (r._locale = t._locale), r
  }, we.version = ke, we.defaultFormat = on, we.ISO_8601 = function () {}, we.momentProperties = Ne, we.updateOffset = function () {}, we.relativeTimeThreshold = function (e, n) {
    return mn[e] === t ? !1 : n === t ? mn[e] : (mn[e] = n, !0)
  }, we.lang = s("moment.lang is deprecated. Use moment.locale instead.", function (t, e) {
    return we.locale(t, e)
  }), we.locale = function (t, e) {
    var n;
    return t && (n = "undefined" != typeof e ? we.defineLocale(t, e) : we.localeData(t), n && (we.duration._locale = we._locale = n)), we._locale._abbr
  }, we.defineLocale = function (t, e) {
    return null !== e ? (e.abbr = t, Le[t] || (Le[t] = new h), Le[t].set(e), we.locale(t), Le[t]) : (delete Le[t], null)
  }, we.langData = s("moment.langData is deprecated. Use moment.localeData instead.", function (t) {
    return we.localeData(t)
  }), we.localeData = function (t) {
    var e;
    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return we._locale;
    if (!x(t)) {
      if (e = I(t)) return e;
      t = [t]
    }
    return N(t)
  }, we.isMoment = function (t) {
    return t instanceof f || null != t && n(t, "_isAMomentObject")
  }, we.isDuration = function (t) {
    return t instanceof d
  };
  for (Te = bn.length - 1; Te >= 0; --Te) D(bn[Te]);
  we.normalizeUnits = function (t) {
    return S(t)
  }, we.invalid = function (t) {
    var e = we.utc(0 / 0);
    return null != t ? p(e._pf, t) : e._pf.userInvalidated = !0, e
  }, we.parseZone = function () {
    return we.apply(null, arguments).parseZone()
  }, we.parseTwoDigitYear = function (t) {
    return M(t) + (M(t) > 68 ? 1900 : 2e3)
  }, we.isDate = T, p(we.fn = f.prototype, {
    clone: function () {
      return we(this)
    },
    valueOf: function () {
      return +this._d - 6e4 * (this._offset || 0)
    },
    unix: function () {
      return Math.floor(+this / 1e3)
    },
    toString: function () {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    },
    toDate: function () {
      return this._offset ? new Date(+this) : this._d
    },
    toISOString: function () {
      var t = we(this).utc();
      return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : z(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    },
    toArray: function () {
      var t = this;
      return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
    },
    isValid: function () {
      return j(this)
    },
    isDSTShifted: function () {
      return this._a ? this.isValid() && k(this._a, (this._isUTC ? we.utc(this._a) : we(this._a)).toArray()) > 0 : !1
    },
    parsingFlags: function () {
      return p({}, this._pf)
    },
    invalidAt: function () {
      return this._pf.overflow
    },
    utc: function (t) {
      return this.utcOffset(0, t)
    },
    local: function (t) {
      return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(this._dateUtcOffset(), "m")), this
    },
    format: function (t) {
      var e = z(this, t || we.defaultFormat);
      return this.localeData().postformat(e)
    },
    add: b(1, "add"),
    subtract: b(-1, "subtract"),
    diff: function (t, e, n) {
      var i, r, s = Y(t, this),
        a = 6e4 * (s.utcOffset() - this.utcOffset());
      return e = S(e), "year" === e || "month" === e || "quarter" === e ? (r = l(this, s), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (i = this - s, r = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - a) / 864e5 : "week" === e ? (i - a) / 6048e5 : i), n ? r : _(r)
    },
    from: function (t, e) {
      return we.duration({
        to: this,
        from: t
      }).locale(this.locale()).humanize(!e)
    },
    fromNow: function (t) {
      return this.from(we(), t)
    },
    calendar: function (t) {
      var e = t || we(),
        n = Y(e, this).startOf("day"),
        i = this.diff(n, "days", !0),
        r = -6 > i ? "sameElse" : -1 > i ? "lastWeek" : 0 > i ? "lastDay" : 1 > i ? "sameDay" : 2 > i ? "nextDay" : 7 > i ? "nextWeek" : "sameElse";
      return this.format(this.localeData().calendar(r, this, we(e)))
    },
    isLeapYear: function () {
      return E(this.year())
    },
    isDST: function () {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    },
    day: function (t) {
      var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != t ? (t = ae(t, this.localeData()), this.add(t - e, "d")) : e
    },
    month: _e("Month", !0),
    startOf: function (t) {
      switch (t = S(t)) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0)
      }
      return "week" === t ? this.weekday(0) : "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    },
    endOf: function (e) {
      return e = S(e), e === t || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    },
    isAfter: function (t, e) {
      var n;
      return e = S("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = we.isMoment(t) ? t : we(t), +this > +t) : (n = we.isMoment(t) ? +t : +we(t), n < +this.clone().startOf(e))
    },
    isBefore: function (t, e) {
      var n;
      return e = S("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = we.isMoment(t) ? t : we(t), +t > +this) : (n = we.isMoment(t) ? +t : +we(t), +this.clone().endOf(e) < n)
    },
    isBetween: function (t, e, n) {
      return this.isAfter(t, n) && this.isBefore(e, n)
    },
    isSame: function (t, e) {
      var n;
      return e = S(e || "millisecond"), "millisecond" === e ? (t = we.isMoment(t) ? t : we(t), +this === +t) : (n = +we(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
    },
    min: s("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (t) {
      return t = we.apply(null, arguments), this > t ? this : t
    }),
    max: s("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (t) {
      return t = we.apply(null, arguments), t > this ? this : t
    }),
    zone: s("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function (t, e) {
      return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }),
    utcOffset: function (t, e) {
      var n, i = this._offset || 0;
      return null != t ? ("string" == typeof t && (t = U(t)), Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && e && (n = this._dateUtcOffset()), this._offset = t, this._isUTC = !0, null != n && this.add(n, "m"), i !== t && (!e || this._changeInProgress ? w(this, we.duration(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, we.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : this._dateUtcOffset()
    },
    isLocal: function () {
      return !this._isUTC
    },
    isUtcOffset: function () {
      return this._isUTC
    },
    isUtc: function () {
      return this._isUTC && 0 === this._offset
    },
    zoneAbbr: function () {
      return this._isUTC ? "UTC" : ""
    },
    zoneName: function () {
      return this._isUTC ? "Coordinated Universal Time" : ""
    },
    parseZone: function () {
      return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(U(this._i)), this
    },
    hasAlignedHourOffset: function (t) {
      return t = t ? we(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0
    },
    daysInMonth: function () {
      return A(this.year(), this.month())
    },
    dayOfYear: function (t) {
      var e = Ce((we(this).startOf("day") - we(this).startOf("year")) / 864e5) + 1;
      return null == t ? e : this.add(t - e, "d")
    },
    quarter: function (t) {
      return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    },
    weekYear: function (t) {
      var e = le(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
      return null == t ? e : this.add(t - e, "y")
    },
    isoWeekYear: function (t) {
      var e = le(this, 1, 4).year;
      return null == t ? e : this.add(t - e, "y")
    },
    week: function (t) {
      var e = this.localeData().week(this);
      return null == t ? e : this.add(7 * (t - e), "d")
    },
    isoWeek: function (t) {
      var e = le(this, 1, 4).week;
      return null == t ? e : this.add(7 * (t - e), "d")
    },
    weekday: function (t) {
      var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == t ? e : this.add(t - e, "d")
    },
    isoWeekday: function (t) {
      return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
    },
    isoWeeksInYear: function () {
      return P(this.year(), 1, 4)
    },
    weeksInYear: function () {
      var t = this.localeData()._week;
      return P(this.year(), t.dow, t.doy)
    },
    get: function (t) {
      return t = S(t), this[t]()
    },
    set: function (t, e) {
      var n;
      if ("object" == typeof t)
        for (n in t) this.set(n, t[n]);
      else t = S(t), "function" == typeof this[t] && this[t](e);
      return this
    },
    locale: function (e) {
      var n;
      return e === t ? this._locale._abbr : (n = we.localeData(e), null != n && (this._locale = n), this)
    },
    lang: s("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
      return e === t ? this.localeData() : this.locale(e)
    }),
    localeData: function () {
      return this._locale
    },
    _dateUtcOffset: function () {
      return 15 * -Math.round(this._d.getTimezoneOffset() / 15)
    }
  }), we.fn.millisecond = we.fn.milliseconds = _e("Milliseconds", !1), we.fn.second = we.fn.seconds = _e("Seconds", !1), we.fn.minute = we.fn.minutes = _e("Minutes", !1), we.fn.hour = we.fn.hours = _e("Hours", !0), we.fn.date = _e("Date", !0), we.fn.dates = s("dates accessor is deprecated. Use date instead.", _e("Date", !0)), we.fn.year = _e("FullYear", !0), we.fn.years = s("years accessor is deprecated. Use year instead.", _e("FullYear", !0)), we.fn.days = we.fn.day, we.fn.months = we.fn.month, we.fn.weeks = we.fn.week, we.fn.isoWeeks = we.fn.isoWeek, we.fn.quarters = we.fn.quarter, we.fn.toJSON = we.fn.toISOString, we.fn.isUTC = we.fn.isUtc, p(we.duration.fn = d.prototype, {
    _bubble: function () {
      var t, e, n, i = this._milliseconds,
        r = this._days,
        s = this._months,
        a = this._data,
        o = 0;
      a.milliseconds = i % 1e3, t = _(i / 1e3), a.seconds = t % 60, e = _(t / 60), a.minutes = e % 60, n = _(e / 60), a.hours = n % 24, r += _(n / 24), o = _(ge(r)), r -= _(ve(o)), s += _(r / 30), r %= 30, o += _(s / 12), s %= 12, a.days = r, a.months = s, a.years = o
    },
    abs: function () {
      return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this
    },
    weeks: function () {
      return _(this.days() / 7)
    },
    valueOf: function () {
      return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * M(this._months / 12)
    },
    humanize: function (t) {
      var e = ue(this, !t, this.localeData());
      return t && (e = this.localeData().pastFuture(+this, e)), this.localeData().postformat(e)
    },
    add: function (t, e) {
      var n = we.duration(t, e);
      return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
    },
    subtract: function (t, e) {
      var n = we.duration(t, e);
      return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
    },
    get: function (t) {
      return t = S(t), this[t.toLowerCase() + "s"]()
    },
    as: function (t) {
      var e, n;
      if (t = S(t), "month" === t || "year" === t) return e = this._days + this._milliseconds / 864e5, n = this._months + 12 * ge(e), "month" === t ? n : n / 12;
      switch (e = this._days + Math.round(ve(this._months / 12)), t) {
      case "week":
        return e / 7 + this._milliseconds / 6048e5;
      case "day":
        return e + this._milliseconds / 864e5;
      case "hour":
        return 24 * e + this._milliseconds / 36e5;
      case "minute":
        return 24 * e * 60 + this._milliseconds / 6e4;
      case "second":
        return 24 * e * 60 * 60 + this._milliseconds / 1e3;
      case "millisecond":
        return Math.floor(24 * e * 60 * 60 * 1e3) + this._milliseconds;
      default:
        throw new Error("Unknown unit " + t)
      }
    },
    lang: we.fn.lang,
    locale: we.fn.locale,
    toIsoString: s("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () {
      return this.toISOString()
    }),
    toISOString: function () {
      var t = Math.abs(this.years()),
        e = Math.abs(this.months()),
        n = Math.abs(this.days()),
        i = Math.abs(this.hours()),
        r = Math.abs(this.minutes()),
        s = Math.abs(this.seconds() + this.milliseconds() / 1e3);
      return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (t ? t + "Y" : "") + (e ? e + "M" : "") + (n ? n + "D" : "") + (i || r || s ? "T" : "") + (i ? i + "H" : "") + (r ? r + "M" : "") + (s ? s + "S" : "") : "P0D"
    },
    localeData: function () {
      return this._locale
    },
    toJSON: function () {
      return this.toISOString()
    }
  }), we.duration.fn.toString = we.duration.fn.toISOString;
  for (Te in hn) n(hn, Te) && ye(Te.toLowerCase());
  we.duration.fn.asMilliseconds = function () {
    return this.as("ms")
  }, we.duration.fn.asSeconds = function () {
    return this.as("s")
  }, we.duration.fn.asMinutes = function () {
    return this.as("m")
  }, we.duration.fn.asHours = function () {
    return this.as("h")
  }, we.duration.fn.asDays = function () {
    return this.as("d")
  }, we.duration.fn.asWeeks = function () {
    return this.as("weeks")
  }, we.duration.fn.asMonths = function () {
    return this.as("M")
  }, we.duration.fn.asYears = function () {
    return this.as("y")
  }, we.locale("en", {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (t) {
      var e = t % 10,
        n = 1 === M(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
      return t + n
    }
  }), Ie ? module.exports = we : "function" == typeof define && define.amd ? (define(function (t, e, n) {
    return n.config && n.config() && n.config().noGlobal === !0 && (Se.moment = xe), we
  }), be(!0)) : be()
}.call(this),
  function (t) {
    "function" == typeof define && define.amd ? define(["moment"], t) : "object" == typeof exports ? module.exports = t(require("../moment")) : t(("undefined" != typeof global ? global : this).moment)
  }(function (t) {
    function e(t, e, n) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [t + " Tage", t + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [t + " Monate", t + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [t + " Jahre", t + " Jahren"]
      };
      return e ? i[n][0] : i[n][1]
    }
    return t.defineLocale("de", {
      months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
      monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
      weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
      weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
      weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D. MMMM YYYY",
        LLL: "D. MMMM YYYY LT",
        LLLL: "dddd, D. MMMM YYYY LT"
      },
      calendar: {
        sameDay: "[Heute um] LT [Uhr]",
        sameElse: "L",
        nextDay: "[Morgen um] LT [Uhr]",
        nextWeek: "dddd [um] LT [Uhr]",
        lastDay: "[Gestern um] LT [Uhr]",
        lastWeek: "[letzten] dddd [um] LT [Uhr]"
      },
      relativeTime: {
        future: "in %s",
        past: "vor %s",
        s: "ein paar Sekunden",
        m: e,
        mm: "%d Minuten",
        h: e,
        hh: "%d Stunden",
        d: e,
        dd: e,
        M: e,
        MM: e,
        y: e,
        yy: e
      },
      ordinalParse: /\d{1,2}\./,
      ordinal: "%d.",
      week: {
        dow: 1,
        doy: 4
      }
    })
  }),
  function (t) {
    "function" == typeof define && define.amd ? define(["moment"], t) : "object" == typeof exports ? module.exports = t(require("../moment")) : t(("undefined" != typeof global ? global : this).moment)
  }(function (t) {
    return t.defineLocale("fr", {
      months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
      monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
      weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
      weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
      weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "LT:ss",
        L: "DD/MM/YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY LT",
        LLLL: "dddd D MMMM YYYY LT"
      },
      calendar: {
        sameDay: "[Aujourd'hui \xe0] LT",
        nextDay: "[Demain \xe0] LT",
        nextWeek: "dddd [\xe0] LT",
        lastDay: "[Hier \xe0] LT",
        lastWeek: "dddd [dernier \xe0] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "dans %s",
        past: "il y a %s",
        s: "quelques secondes",
        m: "une minute",
        mm: "%d minutes",
        h: "une heure",
        hh: "%d heures",
        d: "un jour",
        dd: "%d jours",
        M: "un mois",
        MM: "%d mois",
        y: "un an",
        yy: "%d ans"
      },
      ordinalParse: /\d{1,2}(er|)/,
      ordinal: function (t) {
        return t + (1 === t ? "er" : "")
      },
      week: {
        dow: 1,
        doy: 4
      }
    })
  }),
  function (t) {
    "function" == typeof define && define.amd ? define(["moment"], t) : "object" == typeof exports ? module.exports = t(require("../moment")) : t(("undefined" != typeof global ? global : this).moment)
  }(function (t) {
    var e = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    return t.defineLocale("es", {
      months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
      monthsShort: function (t, i) {
        return /-MMM-/.test(i) ? n[t.month()] : e[t.month()]
      },
      weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
      weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
      weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_S\xe1".split("_"),
      longDateFormat: {
        LT: "H:mm",
        LTS: "LT:ss",
        L: "DD/MM/YYYY",
        LL: "D [de] MMMM [de] YYYY",
        LLL: "D [de] MMMM [de] YYYY LT",
        LLLL: "dddd, D [de] MMMM [de] YYYY LT"
      },
      calendar: {
        sameDay: function () {
          return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextDay: function () {
          return "[ma\xf1ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        nextWeek: function () {
          return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastDay: function () {
          return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        lastWeek: function () {
          return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
        },
        sameElse: "L"
      },
      relativeTime: {
        future: "en %s",
        past: "hace %s",
        s: "unos segundos",
        m: "un minuto",
        mm: "%d minutos",
        h: "una hora",
        hh: "%d horas",
        d: "un d\xeda",
        dd: "%d d\xedas",
        M: "un mes",
        MM: "%d meses",
        y: "un a\xf1o",
        yy: "%d a\xf1os"
      },
      ordinalParse: /\d{1,2}\xba/,
      ordinal: "%d\xba",
      week: {
        dow: 1,
        doy: 4
      }
    })
  }),
  function () {
    function t() {
      var t = /\(([a-z]{3,4})\)/i,
        e = (new Date).toString(),
        n = e.match(t);
      return n ? n[1].toUpperCase() : void 0
    }

    function e() {
      var t = moment(),
        e = t.format("Z"),
        i = t.isDST() ? "T" : "F";
      return n[e + i]
    }
    var n = {
      "+02:00T": "CEST",
      "+01:00F": "CET",
      "+01:00T": "BST",
      "-00:00F": "GMT",
      "-03:00T": "ADT",
      "-04:00F": "AST",
      "-04:00T": "EDT",
      "-05:00F": "EST",
      "-05:00T": "CDT",
      "-06:00F": "CST",
      "-06:00T": "MDT",
      "-07:00F": "MST",
      "-07:00T": "PDT",
      "-08:00F": "PST",
      "-08:00T": "AKDT",
      "-09:00F": "AKST",
      "-09:00T": "HADT",
      "-10:00F": "HAST",
      "+11:00T": "AEDT",
      "+10:00F": "AEST",
      "+10:30T": "ACDT",
      "+09:30F": "ACST",
      "+09:00T": "AWDT",
      "+08:00F": "AWST"
    };
    moment.fn.zoneAbbr = function () {
      return t() || e() || this.format("Z")
    }
  }(), moment.locale("en", {
    longDateFormat: {
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      ll: "MMM D YYYY",
      LLL: "MMMM D YYYY LT",
      LLLL: "dddd, MMMM D YYYY LT"
    }
  }), _.each(I18n.translations, function (t, e) {
    moment.locale(e, {
      months: _.compact(t.date.month_names),
      monthsShort: _.compact(t.date.abbr_month_names),
      weekdays: _.compact(t.date.day_names),
      weekdaysShort: _.compact(t.date.abbr_day_names),
      weekdaysMin: _.compact(t.date.abbr_day_names)
    })
  }), moment.locale(I18n.locale), $(".js-adjust-time").livequery(function () {
    var t = $(this),
      e = moment(t.attr("datetime"));
    t.text(e.format(t.data("format"))), t.removeClass("invisible-if-js")
  }), instrument_function(function (t) {
    ! function () {
      function e(t) {
        var e, n = document.cookie.split(/; */);
        for (t += "=", e = 0; e < n.length; e += 1)
          if (0 === n[e].indexOf(t)) return decodeURIComponent(n[e].substr(t.length));
        return null
      }

      function n(t, e, n, i) {
        var r = t + "=" + encodeURIComponent(e),
          s = "";
        i = i || "/", "number" == typeof n && (n = new Date(n)), n && (s += "; expires=" + n.toGMTString()), s += "; path=" + i, document.cookie = r + s
      }

      function i(t, e) {
        n(t, null, 0, e)
      }
      t.read_cookie = e, t.destroy_cookie = i, t.write_cookie = n
    }()
  })(this), instrument_function(function () {
    $.parseEscapedJSON = function (t) {
      return t = t.replace(/[\u2028\u2029]/g, " ").replace(/&#39;/g, "'"), $.parseJSON(_.unescape(t))
    }
  })(this),
  function () {
    function t() {}
    t.extend = function (t) {
      function e() {
        this.constructor = n
      }
      var n = function () {
        this.initialize.apply(this, arguments)
      };
      for (var i in this) this.hasOwnProperty(i) && (n[i] = _.isFunction(this[i]) ? this[i] : _.clone(this[i]));
      return e.prototype = this.prototype, n.prototype = new e, n.__super__ = this.prototype, t && (n.prototype.initialize = t), n
    }, t.prototype.initialize = function () {}, window.Class = t
  }(),
  function () {
    var t = Class.extend(function (t) {
      var e = this,
        n = arguments;
      this.data = {}, t && this.set(t), _.each(this.constructor.initializers, function (t) {
        t.apply(e, n)
      }), this.data.id && this.constructor.records && (this.constructor.records[this.data.id] = this), this.constructor._broadcast({
        "new": this.data
      })
    });
    t._computed_values = {}, _.extend(t, {
      listen: function (t, e) {
        var n = this;
        return _.isObject(t) && _.each(t, function (t, e) {
          n.listen(e, t)
        }), "undefined" == typeof this.listeners && (this.listeners = {}), "undefined" == typeof this.listeners._global && (this.listeners._global = []), "function" == typeof t ? void this.listeners._global.push(t) : ("undefined" == typeof this.listeners[t] && (this.listeners[t] = []), this.listeners[t].push(e), this)
      },
      _broadcast: function (t, e, n) {
        "undefined" == typeof this.listeners && (this.listeners = {}), "undefined" == typeof this.listeners._global && (this.listeners._global = []);
        var i, r = this;
        if (e = e || "", _.each(_.keys(t), function (i) {
            "object" != typeof t[i] || null === t[i] || _.isArray(t[i]) || r._broadcast(t[i], e + i + ".", n), "undefined" != typeof r.listeners[e + i] && _.each(r.listeners[e + i], function (e) {
              e.call(r, t, n)
            })
          }), !e)
          for (i = 0; i < this.listeners._global.length; i += 1) this.listeners._global[i].call(this, t, n)
      },
      on_initialize: function (t) {
        "undefined" == typeof this.initializers && (this.initializers = []), this.initializers.push(t)
      },
      get_computed_values: function () {
        return this._computed_values
      },
      set_computed_value: function (t, e, n) {
        var i = this;
        this._computed_values[t] = e, n && _.isArray(n.changes_on) && _.each(n.changes_on, function (e) {
          i.prototype.on_change(e, function () {
            var e = {};
            e[t] = this.get(t), this._broadcast(e)
          })
        })
      }
    }), t.prototype.on_change = t.prototype.listen = t.listen, t.prototype.change = function () {
      this._broadcast({})
    }, t.prototype._broadcast = t._broadcast, t.prototype.set = function (t, e, n) {
      function i(t, e) {
        var n = {};
        for (var r in e) e.hasOwnProperty(r) && ("object" == typeof e[r] && null !== e[r] ? n[r] = t ? i(t[r], e[r]) : e[r] : t && t[r] === e[r] || (n[r] = e[r]));
        return n
      }

      function r(t, e) {
        var n = {},
          i = t.shift();
        return n[i] = t.length ? r(t, e) : e, n
      }
      var s, a;
      return "object" == typeof t ? (s = t, n = e) : s = "string" == typeof t ? r(t.split("."), e) : {}, n || (n = {}), a = i(this.data, s), this.data = n.overwrite ? _.extend(this.data, s) : jQuery.extend(!0, this.data, s), "undefined" != typeof n.silent && n.silent || this._broadcast(a, void 0, n), this
    }, t.prototype.replace = function (t, e, n) {
      return n = n || {}, n.silent = !0, this.set(t, null, n), delete n.silent, this.set(t, e, n)
    }, t.prototype.get = function (t) {
      if ("string" == typeof t) {
        if ("function" == typeof this.constructor.get_computed_values()[t]) return this.constructor.get_computed_values()[t].call(this.data);
        var e = t.split("."),
          n = this.data;
        return _.each(e, function (t) {
          n = n[t]
        }), _.clone(n)
      }
      return jQuery.extend(!0, {}, this.data, this.compute_values())
    }, t.prototype.compute_values = function () {
      var t = this.data,
        e = {};
      return _.each(this.constructor.get_computed_values(), function (n, i) {
        e[i] = n.call(t)
      }), e
    }, window.Model = t
  }(), instrument_function(function (t) {
    ! function () {
      function e(t, e) {
        var n, i;
        return n = _(t).map(function (t, n) {
          var r = !1;
          return n.match(/^\!/) && (r = !0, n = n.replace(/^\!/, "")), _.isArray(t) || (t = [t]), t = _(t).map(function (t) {
            return t + ""
          }), i = _(t).include(e[n] + ""), r ? !i : i
        }), _(n).inject(function (t, e) {
          return t || e
        }, n[0])
      }

      function n(t, n) {
        if (_.isArray(t)) {
          var i = _(t).map(function (t) {
            return e(t, n)
          });
          return _(i).inject(function (t, e) {
            return t && e
          }, i[0])
        }
      }

      function i(e, i) {
        var s, a, o = "",
          u = $(e),
          l = u.data("conditions"),
          c = u.attr("itemprop");
        "undefined" != typeof c ? o = c.match(/\[(\w*)\]/)[1] : u.data("attr") && (o = u.data("attr")), "undefined" != typeof l ? ("string" == typeof l && (l = JSON.parse(l)), a = n(l, i), s = a ? JSON.parse(u.data("render")) : "", u.data("evaluation") !== a && (u.html(s), u.data("evaluation", a), s.length && r(u, "Project", i))) : "undefined" != typeof o && "undefined" != typeof i[o] && (u.data("value", i[o]), u.attr("data-value", i[o]), t.refresh_node(u))
      }

      function r(t, e, n) {
        $(t).find("." + e + n.id).each(function (t, e) {
          i(e, n)
        })
      }

      function s(t) {
        this.template = t, this.conditions = []
      }

      function a(t) {
        var e;
        return "string" == typeof t && (e = {}, e[t] = !0, t = e), t
      }
      var o, u = {};
      t.Schwamm = u, o = {
        money: function (t) {
          return t = _.defaults({}, t, {
            precision: 0
          }), formatters.money(t.value, _.omit(t, "format", "value"))
        },
        shorter_money: function (t) {
          return t.value < 100 ? t.precision = 2 : (t.precision = 0, t.value = Math.floor(t.value)), this.money(t)
        },
        number: function (t) {
          return t = _.defaults({}, t, {
            precision: 0
          }), formatters.format_number(t.value, _.omit(t, "format", "value"))
        },
        pluralize: function (t) {
          return formatters.pluralize(t.word, t.value)
        },
        percent: function (t) {
          var e = parseFloat(t.value) / parseFloat(t.of) * 100;
          return formatters.percent(e, _.omit(t, "format", "value", "of"))
        },
        time_ago_in_words: function (t) {
          if (!t.value) return "?";
          ("number" == typeof t.value || "string" == typeof t.value && t.value.match(/^\d+$/)) && (t.value = parseInt(1e3 * t.value, 10));
          var e, n, i, r = moment(t.value),
            s = Math.floor(moment().diff(r) / 1e3);
          return $.each(formatters.distance_date_intervals, function (t, n) {
            return e = n, e.min > s ? !1 : void 0
          }), n = {
            m: Math.round(s / 60),
            h: Math.round(s / 3600),
            d: Math.round(s / 86400),
            t: r.format("MMMM D"),
            y: r.format("LL")
          }, i = I18n.t(e.i18n_key, {
            count: n[e.count_key]
          }), i.match(/NaN|undefined/) ? "" : i
        },
        distance_date: function (t) {
          return this.time_ago_in_words(t)
        }
      }, t.refresh_node = function (t) {
        var e, n = t.data("format");
        n = t.data("format"), e = n && "function" == typeof o[n] ? o[n](t.data()) : t.data("value"), t.html(e)
      }, t.update_record = function (t, e) {
        var n = ["state", "ended", "is_starred"],
          i = $("." + t + e.id + "_cxt");
        i.each(function (r, s) {
          _.each(n, function (n) {
            var r, a, o;
            r = new RegExp(t + "-" + n + "\\S+\\s?", "g"), a = $(s).attr("class").match(r).join(" "), o = t + "-" + n + "-" + e[n], i.removeClass(a), i.addClass(o)
          })
        }), r(document, t, e)
      }, u.FormattingHelpers = o, u.presenter = function (t, e, n) {
        var i = new Schnurrbart(t, e),
          r = {},
          s = {};
        if ($.isArray(n)) $.each(n, function (t, e) {
          r[e] = e
        });
        else {
          if ("object" != typeof n) return;
          r = n
        }
        return $.each(r, function (t, e) {
          var n;
          $.isArray(e) || (e = [e]), n = i.hasOwnProperty(t) ? t : "tag", s[t] = i[n].apply(i, e)
        }), s
      }, Schnurrbart = function (t, e) {
        this.model_name = t, this.proxy = e, this.class_name = t + this.proxy.id, this.constructor.schnurrbarts[this.class_name] = this
      }, "undefined" != typeof exports && (exports.Schnurrbart = Schnurrbart), Schnurrbart.schnurrbarts = {}, Schnurrbart.prototype.tag = function (t, e) {
        e || (e = {});
        var n;
        return e.format ? this.format(t, e) : (n = this.proxy[t], this.render_tag(t, n, e))
      }, Schnurrbart.prototype.pluralize = function (t, e) {
        return this.format_on(e, {
          format: "pluralize",
          word: t
        })
      }, Schnurrbart.prototype.format_on = function (t, e) {
        return e || (e = {}), e.attr = t, this.format(null, e)
      }, Schnurrbart.prototype.format = function (t, e) {
        var n, i = t || e.attr;
        return i && (e = $.extend({
          value: this.proxy[i]
        }, e)), $.inArray(e.format, formatters.currency_formats) >= 0 && "undefined" == typeof e.currency && (e.currency = this.proxy.currency), n = this.formatting_helper(e), this.render_tag(t, n, e)
      }, Schnurrbart.prototype.render_tag = function (t, e, n, i) {
        n || (n = {});
        var r, s = this.base_html_options(t, n);
        return r = $("<data>"), r.attr(s), r.html(e), i ? r : r[0].outerHTML
      }, Schnurrbart.prototype.base_html_options = function (t, e) {
        e || (e = {});
        var n = {
          "class": this.class_name
        };
        return $.extend(n, this.data_attributes(e)), t && (n.itemprop = this.itemprop(t)), n
      }, Schnurrbart.prototype.itemprop = function (t) {
        return this.model_name + "[" + t + "]"
      }, Schnurrbart.prototype.data_attributes = function (t) {
        t || (t = {});
        var e = {};
        return $.each(t, function (t, n) {
          e["data-" + t] = n
        }), e
      }, Schnurrbart.prototype.formatting_helper = function (t) {
        return u.FormattingHelpers[t.format](t)
      }, Schnurrbart.prototype["if"] = function (t) {
        var e = new s(this);
        return e["if"](t)
      }, Schnurrbart.prototype.if_not = function (t) {
        var e = new s(this);
        return e.if_not(t)
      }, Schnurrbart.context_methods = {
        Project: {
          state: ["live", "started", "submitted", "canceled", "suspended", "successful", "failed", "purged"],
          is_starred: [!0],
          ended: [!0]
        }
      }, Schnurrbart.prototype.context_classes = function () {
        var t = this.constructor.context_methods[this.model_name],
          e = [],
          n = this;
        return e.push(this.class_name + "_cxt"), _.each(t, function (t, i) {
          e.push(n.model_name + "-" + i.replace(/\W/g, "") + "-" + n.proxy[i])
        }), e.join(" ")
      }, s.prototype["if"] = function (t) {
        return this.condition("and", !0, t), this
      }, s.prototype.and = s.prototype["if"], s.prototype.if_not = function (t) {
        return this.condition("and", !1, t), this
      }, s.prototype.unless = s.prototype.if_not, s.prototype.and_not = s.prototype.if_not, s.prototype.or = function (t) {
        return this.condition("or", !0, t), this
      }, s.prototype.or_not = function (t) {
        return this.condition("or", !1, t), this
      }, s.prototype.then = function () {
        var t = this;
        return function () {
          return function (e, n) {
            return t.value = n(e), t.html()
          }
        }
      }, s.prototype.condition = function (t, e, n) {
        var i;
        _.isObject(n) || (i = {}, i[n] = !0, n = i), e === !1 && _.each(_(n).keys(), function (t) {
          n["!" + t] = n[t], delete n[t]
        });
        var r;
        return "or" === t ? (r = a(this.conditions[this.conditions.length - 1]), n = a(n), this.conditions[this.conditions.length - 1] = $.extend(!0, r, n)) : "and" === t && this.conditions.push(n), this
      }, s.prototype.evaluation = function () {
        return "undefined" == typeof this.cached_evaluation && (this.cached_evaluation = n(this.conditions, this.template.proxy)), this.cached_evaluation
      }, s.prototype.content = function () {
        return this.evaluation() ? this.value : ""
      }, s.prototype.html = function () {
        var t = $("<data>");
        return t.attr(this.html_options()), t.html(this.content()), t[0].outerHTML
      }, s.prototype.html_options = function () {
        return {
          "class": this.template.class_name,
          "data-conditions": JSON.stringify(this.conditions),
          "data-render": JSON.stringify(this.value),
          "data-evaluation": n
        }
      }
    }()
  })(this), ApplicationModel = Model.extend(), ApplicationModel.on_initialize(function () {
    this.data.id && (this.constructor.records[this.data.id] = this)
  }), _.extend(ApplicationModel, {
    records: {},
    find: function (t) {
      var e = this;
      return _.isArray(t) ? _.compact(_.map(t, function (t) {
        return e.records[t]
      })) : this.records[t]
    },
    every: function (t) {
      _.each(this.records, t), this.listen("new", function (e) {
        t.call(this, e["new"])
      })
    },
    has: function (t, e) {
      function n(t) {
        return "object" != typeof t ? t = [t] : t.get && (t = [t.get("id")]), t
      }
      if ("undefined" == typeof this.prototype["has_" + t]) {
        var i = e.through;
        this.prototype[t] = [], this.on_initialize(function () {
          this.on_change(t + "_fetched", function (e) {
            var n = e[t + "_fetched"] || [],
              r = this[t],
              s = _.compact(_.map(n, function (t) {
                if (t && t.id && !_.include(r, t.id)) {
                  var e = new root[i](t);
                  return e.get("id")
                }
              }));
            this["set_" + t](_.union(r, s))
          })
        }), this.prototype["get_" + t] = function () {
          return root[i].find(this[t])
        }, this.prototype["has_" + t] = function (e) {
          return e = n(e), e.length && 0 === _(this[t]).difference(e).length
        }, this.prototype["add_" + t] = function (e) {
          e = n(e), e = _(e).difference(this[t]), e.length && this["set_" + t](_.union(this[t], e))
        }, this.prototype["remove_" + t] = function (e) {
          e = n(e), e = _(e).intersection(this[t]), e.length && this["set_" + t](_(this[t]).difference(e))
        }, this.prototype["set_" + t] = function (e) {
          if (e = n(e), !_.isEqual(_.clone(e).sort(), _.clone(this[t]).sort())) {
            this[t] = e;
            var i = {};
            i[t] = e, this._broadcast(i)
          }
        }
      }
    }
  });
var app_models = ["Backing", "Checkout", "Comment", "Post", "Project", "User", "ZendeskUser"];
_.each(app_models, function (t) {
    root[t] = ApplicationModel.extend()
  }), Project.on_initialize(function () {
    "function" == typeof update_record && this.on_change(function () {
      update_record("Project", this.get())
    })
  }), Project.has("creator", {
    through: "User"
  }), Project.has("backers", {
    through: "User"
  }), Project.set_computed_value("usd_pledged", function () {
    return this.pledged * this.static_usd_rate
  }, {
    changes_on: ["pledged"]
  }), User.has("created_projects", {
    through: "Project"
  }), User.has("backed_projects", {
    through: "Project"
  }), User.has("backings", {
    through: "Backing"
  }), User.prototype.api_url = function (t, e) {
    var n = this.get("urls").api.user;
    if (n) return "string" == typeof t && (n = n.replace(/([^\?]*)(.*)/, function (e, n, i) {
      return n + "/" + t + i
    })), (e || "undefined" == typeof e && t === !0) && api_oauth_token && (n = oauth_url(n).replace(/http:/, "https:")), n
  }, Comment.on_initialize(function () {
    "function" == typeof update_record && this.on_change(function () {
      update_record("Comment", this.get())
    })
  }), Post.set_computed_value("post_likes", function () {
    return this.likes_count <= 0 ? "" : I18n.t("library.models.app.likes_count", {
      count: this.likes_count,
      formatted_count: formatters.format_number(this.likes_count, {
        precision: 0
      })
    })
  }, {
    changes_on: ["likes_count", "has_liked"]
  }), Post.set_computed_value("post_likes_namepile", function () {
    var t, e;
    if (this.likes_count <= 0) return "";
    if (t = [], t = _.map(this.likers, function (t) {
        return '<a href="' + t.urls.web.user + '" title="' + _.escape(t.name) + '">' + _.escape(t.name) + "</a>"
      }), this.has_liked) {
      if (1 === this.likes_count) return I18n.t("library.models.app.You_like_this_update");
      t.unshift("undefined" == typeof current_user ? I18n.t("library.models.app.You") : '<a href="' + current_user.data.urls.web.user + '" title="' + I18n.t("library.models.app.You") + '">' + I18n.t("library.models.app.You") + "</a>")
    }
    return e = parseInt(this.likes_count, 10) - t.length, e > 0 && t.push(this.urls && this.urls.web && this.urls.web.likes ? '<a href="' + this.urls.web.likes + '" title="' + I18n.t("library.models.app.see_names") + '" id="full_namepile">' + I18n.t("library.models.app.other_people_count", {
      count: e,
      formatted_count: formatters.format_number(e, {
        precision: 0
      })
    }) + "</a>" : I18n.t("library.models.app.more_people_count", {
      count: e,
      formatted_count: formatters.format_number(e, {
        precision: 0
      })
    })), I18n.t("library.models.app.names_count_like_this_update", {
      names: formatters.to_sentence(t),
      count: this.likes_count,
      formatted_count: formatters.format_number(this.likes_count, {
        precision: 0
      })
    })
  }, {
    changes_on: ["likes_count", "likers", "has_liked"]
  }), Post.on_initialize(function () {
    "function" == typeof update_record && this.on_change(function () {
      update_record("Post", this.get())
    })
  }),
  function () {
    $(function () {
      "string" == typeof current_user && (root.current_user = new User($.parseEscapedJSON(current_user)))
    })
  }(), instrument_function(function (t) {
    ! function () {
      "string" == typeof current_project && (t.current_project = new Project($.parseEscapedJSON(current_project)))
    }()
  })(this), instrument_function(function (t) {
    ! function () {
      "string" == typeof current_location && (t.current_location = new Project($.parseEscapedJSON(current_location)))
    }()
  })(this),
  function () {
    var t = {};
    $(function () {
      function e(t) {
        return /Windows/i.test(t) ? /Phone/i.test(t) ? "Windows Mobile" : "Windows" : /(iPhone|iPad|iPod)/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /(Blackberry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Mac/i.test(t) ? "Mac OS X" : /Linux/.test(t) ? "Linux" : ""
      }

      function n(t, e) {
        return -1 !== t.indexOf(e)
      }

      function i(t, e, i) {
        return e = e || "", i ? n(t, "Mini") ? "Opera Mini" : "Opera" : /(Blackberry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : n(t, "FBIOS") ? "Facebook Mobile" : n(t, "Chrome") ? "Chrome" : n(t, "CriOS") ? "Chrome iOS" : n(e, "Apple") ? n(t, "Mobile") ? "Mobile Safari" : "Safari" : n(t, "Android") ? "Android Mobile" : n(t, "Konqueror") ? "Konqueror" : n(t, "Firefox") ? "Firefox" : n(t, "MSIE") || n(t, "Trident/index.html") ? "Internet Explorer" : n(t, "Gecko") ? "Mozilla" : ""
      }

      function r(t) {
        var e = t.split("https://www.kickstarter.com/");
        return e.legth >= 3 ? e[2] : ""
      }

      function s(t) {
        return /iPad/.test(t) ? "iPad" : /iPod/i.test(t) ? "iPod Touch" : /iPhone/i.test(t) ? "iPhone" : /(Blackberry|PlayBook|BB10)/i.test(t) ? "BlackBerry" : /Windows Phone/i.test(t) ? "Windows Phone" : /Android/i.test(t) ? "Android" : ""
      }

      function a(t) {
        var e = {};
        return _.each(t, function (t, n) {
          _.isString(t) && t.length > 0 && (e[n] = t)
        }), e
      }

      function o() {
        var t = navigator.userAgent;
        return _.extend(a({
          $os: e(t),
          $browser: i(t, navigator.vendor, window.opera),
          $referrer: document.referrer,
          $referring_domain: r(document.referrer),
          $device: s(t)
        }), {
          $screen_height: screen.height,
          $screen_width: screen.width
        })
      }

      function u(t, e) {
        var n = _.extend({}, o(), {
            distinct_id: root.visitor_id
          }, e),
          i = {
            event: t,
            properties: n
          },
          r = JSON.stringify(i);
        root.koala_debug && (window.console.log("KOALA REQUEST:"), window.console.log(i)), $.ajax({
          type: "POST",
          url: koala_endpoint,
          data: r,
          contentType: "text/plain; charset=UTF-8"
        })
      }
      "true" === KSR.store.getItem("koala_debug") && (root.koala_debug = !0), t.track = u, root.koala = t
    })
  }(),
  function () {
    var t = [];
    root.track = function () {
      t.push(arguments)
    }, $(function () {
      function e(t, e) {
        var n = {};
        return _.each(_.keys(e), function (i) {
          n[t + "_" + i] = e[i]
        }), n
      }

      function n(t) {
        var n = "function" == typeof t.get ? t.get() : t,
          i = {
            backers_count: n.backers_count,
            country: n.country,
            currency: n.currency,
            deadline: n.deadline,
            goal: n.goal,
            last_update_published_at: n.last_update_published_at,
            launched_at: n.launched_at,
            name: n.name,
            pid: n.id,
            pledged: n.pledged,
            profile_state: n.profile.state,
            state: n.state,
            updates_count: n.updates_count
          },
          r = moment.unix(n.deadline);
        return n.category && (i.category_name = n.category.name, i.parent_category = n.category.parent ? n.category.parent.name : n.category.name), n.location && (i.location = n.location.name), i.hours_remaining = _.max([r.diff(moment(), "hours", !0), 0]), i.duration = r.diff(moment.unix(n.launched_at), "days", !0), i.percent_raised = n.pledged / n.goal, n.rewards && (i.rewards_count = n.rewards.count), i.has_video = null !== n.video, i = e("project", i), i.user_is_backer = n.is_backing, i.user_has_starred = n.is_starred, i.user_is_project_creator = "undefined" != typeof current_user && current_user.get("id") === n.creator.id, i
      }

      function i(t) {
        var n = "function" == typeof t.get ? t.get() : t,
          i = _.pick(n, ["amount", "shipping_amount", "location_id"]),
          r = n.reward ? _.pick(n.reward, ["estimated_delivery_on", "id", "minimum", "reward", "shipping_preference", "shipping_enabled"]) : {};
        return r = e("reward", r), _.extend(i, r), i = e("checkout", i)
      }

      function r(t, e) {
        var r = _.extend({
          page_id: $("body").attr("id"),
          ref_tag: URI().query(!0).ref,
          landing_page_url: document.URL
        }, _.contains(["undefined", "string"], typeof current_project) ? {} : n(current_project), !_.contains(["undefined", "string"], typeof current_checkout) && current_checkout.get("amount") && current_checkout.get("reward") ? i(current_checkout) : {}, _.contains(["undefined", "string"], typeof current_variants) ? {} : {
          current_variants: current_variants
        }, a, e);
        mixpanel.track(t, r), koala.track(t, r)
      }

      function s(t, e, i) {
        window.setTimeout(function () {
          mixpanel.track_links(t, e, function (t) {
            var e = $(t);
            return _.extend({
              selected_link: e.attr("data-original_text") ? e.data("original_text") : $.trim(e.text()),
              page_id: $("body").attr("id")
            }, _.contains(["undefined", "string"], typeof current_project) ? {} : n(current_project), i)
          })
        }, 1)
      }
      var a, o, u;
      "undefined" != typeof mixpanel_id && ("true" === KSR.store.getItem("mixpanel_debug") && (root.mixpanel_debug = !0), mixpanel.init(mixpanel_id, {
        debug: mixpanel_debug
      }), u = read_cookie("ios_mp_distinct_id"), root.visitor_id = u ? u : read_cookie("vis"), mixpanel.identify(root.visitor_id), mixpanel.track_pageview(), a = {
        client_type: $("body.native-app-request").length ? "native" : "web",
        client_platform: $("body.ios").length ? "ios" : $("body.android").length ? "android" : void 0,
        device_format: $("body.phone").length ? "phone" : $("body.tablet").length ? "tablet" : "desktop",
        apple_pay_capable: $("body.apple-pay-capable").length > 0,
        ip_address: current_ip,
        ip_datacenter: current_ip_datacenter,
        window_inner_width: window.innerWidth,
        window_inner_height: window.innerHeight,
        screen_width: screen.width,
        screen_height: screen.height,
        screen_avail_width: screen.availWidth,
        screen_avail_height: screen.availHeight,
        user_logged_in: "undefined" != typeof current_user,
        user_country: "undefined" != typeof current_location ? current_location.get("country") : void 0,
        iphone_uuid: "undefined" != typeof ios_app_uuid ? ios_app_uuid : void 0,
        enabled_features: _.keys(enabled_features),
        browser_language: I18n.browser_language,
        chosen_language: I18n.chosen_language,
        calculated_language: I18n.calculated_language,
        display_language: I18n.display_language
      }, o = read_cookie("user_analytics_properties"), null !== o && (_.extend(a, $.parseJSON(o)), mixpanel.name_tag(a.user_uid)), _.each(t, function (t) {
        r.apply(this, t)
      }), root.track = r, root.track_links = s, root.mixpanel_project = n, root.mixpanel_checkout = i, root.namespace_keys = e)
    })
  }(),
  function (t) {
    var e = function () {
      return !1 === t.support.boxModel && t.support.objectAll && $support.leadingWhitespace
    }();
    t.jGrowl = function (e, n) {
      0 == t("#jGrowl").size() && t('<div id="jGrowl"></div>').addClass(n && n.position ? n.position : t.jGrowl.defaults.position).appendTo("body"), t("#jGrowl").jGrowl(e, n)
    }, t.fn.jGrowl = function (e, n) {
      if (t.isFunction(this.each)) {
        var i = arguments;
        return this.each(function () {
          void 0 == t(this).data("jGrowl.instance") && (t(this).data("jGrowl.instance", t.extend(new t.fn.jGrowl, {
            notifications: [],
            element: null,
            interval: null
          })), t(this).data("jGrowl.instance").startup(this)), t.isFunction(t(this).data("jGrowl.instance")[e]) ? t(this).data("jGrowl.instance")[e].apply(t(this).data("jGrowl.instance"), t.makeArray(i).slice(1)) : t(this).data("jGrowl.instance").create(e, n)
        })
      }
    }, t.extend(t.fn.jGrowl.prototype, {
      defaults: {
        pool: 0,
        header: "",
        group: "",
        sticky: !1,
        position: "top-right",
        glue: "after",
        theme: "default",
        themeState: "highlight",
        corners: "10px",
        check: 250,
        life: 3e3,
        closeDuration: "normal",
        openDuration: "normal",
        easing: "swing",
        closer: !0,
        closeTemplate: "&times;",
        closerTemplate: "<div>[ close all ]</div>",
        log: function () {},
        beforeOpen: function () {},
        afterOpen: function () {},
        open: function () {},
        beforeClose: function () {},
        close: function () {},
        animateOpen: {
          opacity: "show"
        },
        animateClose: {
          opacity: "hide"
        }
      },
      notifications: [],
      element: null,
      interval: null,
      create: function (e, n) {
        var n = t.extend({}, this.defaults, n);
        "undefined" != typeof n.speed && (n.openDuration = n.speed, n.closeDuration = n.speed), this.notifications.push({
          message: e,
          options: n
        }), n.log.apply(this.element, [this.element, e, n])
      },
      render: function (e) {
        var n = this,
          i = e.message,
          r = e.options;
        r.themeState = "" == r.themeState ? "" : "ui-state-" + r.themeState;
        var e = t('<div class="jGrowl-notification ' + r.themeState + " ui-corner-all" + (void 0 != r.group && "" != r.group ? " " + r.group : "") + '"><div class="jGrowl-close">' + r.closeTemplate + '</div><div class="jGrowl-header">' + r.header + '</div><div class="jGrowl-message">' + i + "</div></div>").data("jGrowl", r).addClass(r.theme).children("div.jGrowl-close").bind("click.jGrowl", function () {
          t(this).parent().trigger("jGrowl.beforeClose")
        }).parent();
        t(e).bind("mouseover.jGrowl", function () {
          t("div.jGrowl-notification", n.element).data("jGrowl.pause", !0)
        }).bind("mouseout.jGrowl", function () {
          t("div.jGrowl-notification", n.element).data("jGrowl.pause", !1)
        }).bind("jGrowl.beforeOpen", function () {
          0 != r.beforeOpen.apply(e, [e, i, r, n.element]) && t(this).trigger("jGrowl.open")
        }).bind("jGrowl.open", function () {
          0 != r.open.apply(e, [e, i, r, n.element]) && ("after" == r.glue ? t("div.jGrowl-notification:last", n.element).after(e) : t("div.jGrowl-notification:first", n.element).before(e), t(this).animate(r.animateOpen, r.openDuration, r.easing, function () {
            t.support.opacity === !1 && this.style.removeAttribute("filter"), null != t(this).data("jGrowl") && (t(this).data("jGrowl").created = new Date), t(this).trigger("jGrowl.afterOpen")
          }))
        }).bind("jGrowl.afterOpen", function () {
          r.afterOpen.apply(e, [e, i, r, n.element])
        }).bind("jGrowl.beforeClose", function () {
          0 != r.beforeClose.apply(e, [e, i, r, n.element]) && t(this).trigger("jGrowl.close")
        }).bind("jGrowl.close", function () {
          t(this).data("jGrowl.pause", !0), t(this).animate(r.animateClose, r.closeDuration, r.easing, function () {
            t.isFunction(r.close) ? r.close.apply(e, [e, i, r, n.element]) !== !1 && t(this).remove() : t(this).remove()
          })
        }).trigger("jGrowl.beforeOpen"), "" != r.corners && void 0 != t.fn.corner && t(e).corner(r.corners), t("div.jGrowl-notification:parent", n.element).size() > 1 && 0 == t("div.jGrowl-closer", n.element).size() && 0 != this.defaults.closer && t(this.defaults.closerTemplate).addClass("jGrowl-closer " + this.defaults.themeState + " ui-corner-all").addClass(this.defaults.theme).appendTo(n.element).animate(this.defaults.animateOpen, this.defaults.speed, this.defaults.easing).bind("click.jGrowl", function () {
          t(this).siblings().trigger("jGrowl.beforeClose"), t.isFunction(n.defaults.closer) && n.defaults.closer.apply(t(this).parent()[0], [t(this).parent()[0]])
        })
      },
      update: function () {
        t(this.element).find("div.jGrowl-notification:parent").each(function () {
          void 0 != t(this).data("jGrowl") && void 0 != t(this).data("jGrowl").created && t(this).data("jGrowl").created.getTime() + parseInt(t(this).data("jGrowl").life) < (new Date).getTime() && 1 != t(this).data("jGrowl").sticky && (void 0 == t(this).data("jGrowl.pause") || 1 != t(this).data("jGrowl.pause")) && t(this).trigger("jGrowl.beforeClose")
        }), this.notifications.length > 0 && (0 == this.defaults.pool || t(this.element).find("div.jGrowl-notification:parent").size() < this.defaults.pool) && this.render(this.notifications.shift()), t(this.element).find("div.jGrowl-notification:parent").size() < 2 && t(this.element).find("div.jGrowl-closer").animate(this.defaults.animateClose, this.defaults.speed, this.defaults.easing, function () {
          t(this).remove()
        })
      },
      startup: function (n) {
        this.element = t(n).addClass("jGrowl").append('<div class="jGrowl-notification"></div>'), this.interval = setInterval(function () {
          t(n).data("jGrowl.instance").update()
        }, parseInt(this.defaults.check)), e && t(this.element).addClass("ie6")
      },
      shutdown: function () {
        t(this.element).removeClass("jGrowl").find("div.jGrowl-notification").remove(), clearInterval(this.interval)
      },
      close: function () {
        t(this.element).find("div.jGrowl-notification").each(function () {
          t(this).trigger("jGrowl.beforeClose")
        })
      }
    }), t.jGrowl.defaults = t.fn.jGrowl.prototype.defaults
  }(jQuery), instrument_function(function (t) {
    ! function () {
      var e = {
        J: 74,
        K: 75,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        DEL: 46,
        TAB: 9,
        ENTER: 13,
        SPACE: 32,
        ESC: 27,
        COMMA: 188,
        PAGEUP: 33,
        PAGEDOWN: 34,
        BACKSPACE: 8,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        CMD_LEFT: 91,
        CMD_RIGHT: 93,
        WINDOWS_LEFT: 91,
        WINDOWS_RIGHT: 92,
        WINDOWS: 93
      };
      e.NOT_INPUT = [e.UP, e.DOWN, e.RIGHT, e.LEFT, e.TAB, e.ENTER, e.ESC, e.SHIFT, e.CTRL, e.ALT, e.CMD_LEFT, e.CMD_RIGHT, e.WINDOWS_LEFT, e.WINDOWS_RIGHT, e.WINDOWS, 224, 17], t.KEY = e
    }()
  })(this);
var $growl_section = $("#growl_section");
$growl_section.on("click", function (t) {
  var e;
  $(t.target).is($(this)) && (e = $(this), e.fadeOut("fast"), e.removeClass("sticky"), e.find("div.jGrowl-notification:parent").each(function () {
    $(this).data("jGrowl").sticky = !1
  }))
}), $(document).on("keydown", function (t) {
  t.which === KEY.ESC && $growl_section.is(":visible") && hideGrowlSection()
}), root.growl = growl, instrument_function(function (t) {
  t.define_namespace = function (t, e) {
    $(function () {
      var n = $(t);
      n.length && e(n)
    })
  }
})(this);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, n) {
        var i = function (t) {
            var e, n = [],
              i = t.length;
            for (e = 0; e !== i; n.push(t[e++]));
            return n
          },
          r = function (t, e, i) {
            n.call(this, t, e, i), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
          },
          s = 1e-10,
          a = n._internals,
          o = a.isSelector,
          u = a.isArray,
          l = r.prototype = n.to({}, .1, {}),
          c = [];
        r.version = "1.14.2", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = n.killTweensOf, r.getTweensOf = n.getTweensOf, r.lagSmoothing = n.lagSmoothing, r.ticker = n.ticker, r.render = n.render, l.invalidate = function () {
          return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), n.prototype.invalidate.call(this)
        }, l.updateTo = function (t, e) {
          var i, r = this.ratio,
            s = this.vars.immediateRender || t.immediateRender;
          e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
          for (i in t) this.vars[i] = t[i];
          if (this._initted || s)
            if (e) this._initted = !1;
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && n._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
            var a = this._time;
            this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
          } else if (this._time > 0 || s) {
            this._initted = !1, this._init();
            for (var o, u = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= u, l.s = o - l.c, l = l._next
          }
          return this
        }, l.render = function (t, e, n) {
          this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
          var i, r, o, u, l, h, f, d, p = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._time,
            _ = this._totalTime,
            g = this._cycle,
            v = this._duration,
            y = this._rawPrevTime;
          if (t >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (i = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === s) && y !== t && (n = !0, y > s && (r = "onReverseComplete")), this._rawPrevTime = d = !e || t || y === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === v && y > 0 && y !== s) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0), this._rawPrevTime = d = !e || t || y === t ? t : s)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (u = v + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (l = this._time / v, h = this._easeType, f = this._easePower, (1 === h || 3 === h && l >= .5) && (l = 1 - l), 3 === h && (l *= 2), 1 === f ? l *= l : 2 === f ? l *= l * l : 3 === f ? l *= l * l * l : 4 === f && (l *= l * l * l * l), this.ratio = 1 === h ? 1 - l : 2 === h ? l : this._time / v < .5 ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !n && g === this._cycle) return void(_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = _, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
            this._time && !i ? this.ratio = this._ease.getRatio(this._time / v) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
          }
          for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
          this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== _ || i) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || c), 0 === v && this._rawPrevTime === s && d !== s && (this._rawPrevTime = 0))
        }, r.to = function (t, e, n) {
          return new r(t, e, n)
        }, r.from = function (t, e, n) {
          return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new r(t, e, n)
        }, r.fromTo = function (t, e, n, i) {
          return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new r(t, e, i)
        }, r.staggerTo = r.allTo = function (t, e, s, a, l, h, f) {
          a = a || 0;
          var d, p, m, _, g = s.delay || 0,
            v = [],
            y = function () {
              s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), l.apply(f || this, h || c)
            };
          for (u(t) || ("string" == typeof t && (t = n.selector(t) || t), o(t) && (t = i(t))), t = t || [], 0 > a && (t = i(t), t.reverse(), a *= -1), d = t.length - 1, m = 0; d >= m; m++) {
            p = {};
            for (_ in s) p[_] = s[_];
            p.delay = g, m === d && l && (p.onComplete = y), v[m] = new r(t[m], e, p), g += a
          }
          return v
        }, r.staggerFrom = r.allFrom = function (t, e, n, i, s, a, o) {
          return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, r.staggerTo(t, e, n, i, s, a, o)
        }, r.staggerFromTo = r.allFromTo = function (t, e, n, i, s, a, o, u) {
          return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, r.staggerTo(t, e, i, s, a, o, u)
        }, r.delayedCall = function (t, e, n, i, s) {
          return new r(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: n,
            onCompleteScope: i,
            onReverseComplete: e,
            onReverseCompleteParams: n,
            onReverseCompleteScope: i,
            immediateRender: !1,
            useFrames: s,
            overwrite: 0
          })
        }, r.set = function (t, e) {
          return new r(t, 0, e)
        }, r.isTweening = function (t) {
          return n.getTweensOf(t, !0).length > 0
        };
        var h = function (t, e) {
            for (var i = [], r = 0, s = t._first; s;) s instanceof n ? i[r++] = s : (e && (i[r++] = s), i = i.concat(h(s, e)), r = i.length), s = s._next;
            return i
          },
          f = r.getAllTweens = function (e) {
            return h(t._rootTimeline, e).concat(h(t._rootFramesTimeline, e))
          };
        r.killAll = function (t, n, i, r) {
          null == n && (n = !0), null == i && (i = !0);
          var s, a, o, u = f(0 != r),
            l = u.length,
            c = n && i && r;
          for (o = 0; l > o; o++) a = u[o], (c || a instanceof e || (s = a.target === a.vars.onComplete) && i || n && !s) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, r.killChildTweensOf = function (t, e) {
          if (null != t) {
            var s, l, c, h, f, d = a.tweenLookup;
            if ("string" == typeof t && (t = n.selector(t) || t), o(t) && (t = i(t)), u(t))
              for (h = t.length; --h > -1;) r.killChildTweensOf(t[h], e);
            else {
              s = [];
              for (c in d)
                for (l = d[c].target.parentNode; l;) l === t && (s = s.concat(d[c].tweens)), l = l.parentNode;
              for (f = s.length, h = 0; f > h; h++) e && s[h].totalTime(s[h].totalDuration()), s[h]._enabled(!1, !1)
            }
          }
        };
        var d = function (t, n, i, r) {
          n = n !== !1, i = i !== !1, r = r !== !1;
          for (var s, a, o = f(r), u = n && i && r, l = o.length; --l > -1;) a = o[l], (u || a instanceof e || (s = a.target === a.vars.onComplete) && i || n && !s) && a.paused(t)
        };
        return r.pauseAll = function (t, e, n) {
          d(!0, t, e, n)
        }, r.resumeAll = function (t, e, n) {
          d(!1, t, e, n)
        }, r.globalTimeScale = function (e) {
          var i = t._rootTimeline,
            r = n.ticker.time;
          return arguments.length ? (e = e || s, i._startTime = r - (r - i._startTime) * i._timeScale / e, i = t._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / e, i._timeScale = t._rootTimeline._timeScale = e, e) : i._timeScale
        }, l.progress = function (t) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
        }, l.totalProgress = function (t) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
        }, l.time = function (t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, l.duration = function (e) {
          return arguments.length ? t.prototype.duration.call(this, e) : this._duration
        }, l.totalDuration = function (t) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, l.repeat = function (t) {
          return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, l.repeatDelay = function (t) {
          return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, l.yoyo = function (t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, r
      }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, n) {
        var i = function (t) {
            e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var n, i, r = this.vars;
            for (i in r) n = r[i], o(n) && -1 !== n.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(n));
            o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
          },
          r = 1e-10,
          s = n._internals,
          a = s.isSelector,
          o = s.isArray,
          u = s.lazyTweens,
          l = s.lazyRender,
          c = [],
          h = _gsScope._gsDefine.globals,
          f = function (t) {
            var e, n = {};
            for (e in t) n[e] = t[e];
            return n
          },
          d = function (t, e, n, i) {
            var r = t._timeline._totalTime;
            (e || !this._forcingPlayhead) && (t._timeline.pause(t._startTime), e && e.apply(i || t._timeline, n || c), this._forcingPlayhead && t._timeline.seek(r))
          },
          p = function (t) {
            var e, n = [],
              i = t.length;
            for (e = 0; e !== i; n.push(t[e++]));
            return n
          },
          m = i.prototype = new e;
        return i.version = "1.14.2", m.constructor = i, m.kill()._gc = m._forcingPlayhead = !1, m.to = function (t, e, i, r) {
          var s = i.repeat && h.TweenMax || n;
          return e ? this.add(new s(t, e, i), r) : this.set(t, i, r)
        }, m.from = function (t, e, i, r) {
          return this.add((i.repeat && h.TweenMax || n).from(t, e, i), r)
        }, m.fromTo = function (t, e, i, r, s) {
          var a = r.repeat && h.TweenMax || n;
          return e ? this.add(a.fromTo(t, e, i, r), s) : this.set(t, r, s)
        }, m.staggerTo = function (t, e, r, s, o, u, l, c) {
          var h, d = new i({
            onComplete: u,
            onCompleteParams: l,
            onCompleteScope: c,
            smoothChildTiming: this.smoothChildTiming
          });
          for ("string" == typeof t && (t = n.selector(t) || t), t = t || [], a(t) && (t = p(t)), s = s || 0, 0 > s && (t = p(t), t.reverse(), s *= -1), h = 0; h < t.length; h++) r.startAt && (r.startAt = f(r.startAt)), d.to(t[h], e, f(r), h * s);
          return this.add(d, o)
        }, m.staggerFrom = function (t, e, n, i, r, s, a, o) {
          return n.immediateRender = 0 != n.immediateRender, n.runBackwards = !0, this.staggerTo(t, e, n, i, r, s, a, o)
        }, m.staggerFromTo = function (t, e, n, i, r, s, a, o, u) {
          return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, this.staggerTo(t, e, i, r, s, a, o, u)
        }, m.call = function (t, e, i, r) {
          return this.add(n.delayedCall(0, t, e, i), r)
        }, m.set = function (t, e, i) {
          return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new n(t, 0, e), i)
        }, i.exportRoot = function (t, e) {
          t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
          var r, s, a = new i(t),
            o = a._timeline;
          for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, e && r instanceof n && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
          return o.add(a, 0), a
        }, m.add = function (r, s, a, u) {
          var l, c, h, f, d, p;
          if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
            if (r instanceof Array || r && r.push && o(r)) {
              for (a = a || "normal", u = u || 0, l = s, c = r.length, h = 0; c > h; h++) o(f = r[h]) && (f = new i({
                tweens: f
              })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += u;
              return this._uncache(!0)
            }
            if ("string" == typeof r) return this.addLabel(r, s);
            if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
            r = n.delayedCall(0, r)
          }
          if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
            for (d = this, p = d.rawTime() > r._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
          return this
        }, m.remove = function (e) {
          if (e instanceof t) return this._remove(e, !1);
          if (e instanceof Array || e && e.push && o(e)) {
            for (var n = e.length; --n > -1;) this.remove(e[n]);
            return this
          }
          return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
        }, m._remove = function (t, n) {
          e.prototype._remove.call(this, t, n);
          var i = this._last;
          return i ? this._time > i._startTime + i._totalDuration / i._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, m.append = function (t, e) {
          return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, m.insert = m.insertMultiple = function (t, e, n, i) {
          return this.add(t, e || 0, n, i)
        }, m.appendMultiple = function (t, e, n, i) {
          return this.add(t, this._parseTimeOrLabel(null, e, !0, t), n, i)
        }, m.addLabel = function (t, e) {
          return this._labels[t] = this._parseTimeOrLabel(e), this
        }, m.addPause = function (t, e, n, i) {
          return this.call(d, ["{self}", e, n, i], this, t)
        }, m.removeLabel = function (t) {
          return delete this._labels[t], this
        }, m.getLabelTime = function (t) {
          return null != this._labels[t] ? this._labels[t] : -1
        }, m._parseTimeOrLabel = function (e, n, i, r) {
          var s;
          if (r instanceof t && r.timeline === this) this.remove(r);
          else if (r && (r instanceof Array || r.push && o(r)))
            for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
          if ("string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof e && null == this._labels[n] ? e - this.duration() : 0, i);
          if (n = n || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
          else {
            if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? i ? this._labels[e] = this.duration() + n : n : this._labels[e] + n;
            n = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, i) : this.duration()
          }
          return Number(e) + n
        }, m.seek = function (t, e) {
          return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
        }, m.stop = function () {
          return this.paused(!0)
        }, m.gotoAndPlay = function (t, e) {
          return this.play(t, e)
        }, m.gotoAndStop = function (t, e) {
          return this.pause(t, e)
        }, m.render = function (t, e, n) {
          this._gc && this._enabled(!0, !1);
          var i, s, a, o, h, f = this._dirty ? this.totalDuration() : this._totalDuration,
            d = this._time,
            p = this._startTime,
            m = this._timeScale,
            _ = this._paused;
          if (t >= f ? (this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== d && this._first || n || h) {
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c)), this._time >= d)
              for (i = this._first; i && (a = i._next, !this._paused || _);)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = a;
            else
              for (i = this._last; i && (a = i._prev, !this._paused || _);)(i._active || i._startTime <= d && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = a;
            this._onUpdate && (e || (u.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c))), o && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (u.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || c)))
          }
        }, m._hasPausedChild = function () {
          for (var t = this._first; t;) {
            if (t._paused || t instanceof i && t._hasPausedChild()) return !0;
            t = t._next
          }
          return !1
        }, m.getChildren = function (t, e, i, r) {
          r = r || -9999999999;
          for (var s = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof n ? e !== !1 && (s[o++] = a) : (i !== !1 && (s[o++] = a), t !== !1 && (s = s.concat(a.getChildren(!0, e, i)), o = s.length))), a = a._next;
          return s
        }, m.getTweensOf = function (t, e) {
          var i, r, s = this._gc,
            a = [],
            o = 0;
          for (s && this._enabled(!0, !0), i = n.getTweensOf(t), r = i.length; --r > -1;)(i[r].timeline === this || e && this._contains(i[r])) && (a[o++] = i[r]);
          return s && this._enabled(!1, !0), a
        }, m.recent = function () {
          return this._recent
        }, m._contains = function (t) {
          for (var e = t.timeline; e;) {
            if (e === this) return !0;
            e = e.timeline
          }
          return !1
        }, m.shiftChildren = function (t, e, n) {
          n = n || 0;
          for (var i, r = this._first, s = this._labels; r;) r._startTime >= n && (r._startTime += t), r = r._next;
          if (e)
            for (i in s) s[i] >= n && (s[i] += t);
          return this._uncache(!0)
        }, m._kill = function (t, e) {
          if (!t && !e) return this._enabled(!1, !1);
          for (var n = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(t, e) && (r = !0);
          return r
        }, m.clear = function (t) {
          var e = this.getChildren(!1, !0, !0),
            n = e.length;
          for (this._time = this._totalTime = 0; --n > -1;) e[n]._enabled(!1, !1);
          return t !== !1 && (this._labels = {}), this._uncache(!0)
        }, m.invalidate = function () {
          for (var e = this._first; e;) e.invalidate(), e = e._next;
          return t.prototype.invalidate.call(this)
        }, m._enabled = function (t, n) {
          if (t === this._gc)
            for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
          return e.prototype._enabled.call(this, t, n)
        }, m.totalTime = function () {
          this._forcingPlayhead = !0;
          var e = t.prototype.totalTime.apply(this, arguments);
          return this._forcingPlayhead = !1, e
        }, m.duration = function (t) {
          return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, m.totalDuration = function (t) {
          if (!arguments.length) {
            if (this._dirty) {
              for (var e, n, i = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (i -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), n = r._startTime + r._totalDuration / r._timeScale, n > i && (i = n), r = e;
              this._duration = this._totalDuration = i, this._dirty = !1
            }
            return this._totalDuration
          }
          return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
        }, m.usesFrames = function () {
          for (var e = this._timeline; e._timeline;) e = e._timeline;
          return e === t._rootFramesTimeline
        }, m.rawTime = function () {
          return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, i
      }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, n) {
        var i = function (e) {
            t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
          },
          r = 1e-10,
          s = [],
          a = e._internals,
          o = a.lazyTweens,
          u = a.lazyRender,
          l = new n(null, null, 1, 0),
          c = i.prototype = new t;
        return c.constructor = i, c.kill()._gc = !1, i.version = "1.14.2", c.invalidate = function () {
          return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
        }, c.addCallback = function (t, n, i, r) {
          return this.add(e.delayedCall(0, t, i, r), n)
        }, c.removeCallback = function (t, e) {
          if (t)
            if (null == e) this._kill(null, t);
            else
              for (var n = this.getTweensOf(t, !1), i = n.length, r = this._parseTimeOrLabel(e); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
          return this
        }, c.tweenTo = function (t, n) {
          n = n || {};
          var i, r, a, o = {
            ease: l,
            overwrite: n.delay ? 2 : 1,
            useFrames: this.usesFrames(),
            immediateRender: !1
          };
          for (r in n) o[r] = n[r];
          return o.time = this._parseTimeOrLabel(t), i = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, i, o), o.onStart = function () {
            a.target.paused(!0), a.vars.time !== a.target.time() && i === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), n.onStart && n.onStart.apply(n.onStartScope || a, n.onStartParams || s)
          }, a
        }, c.tweenFromTo = function (t, e, n) {
          n = n || {}, t = this._parseTimeOrLabel(t), n.startAt = {
            onComplete: this.seek,
            onCompleteParams: [t],
            onCompleteScope: this
          }, n.immediateRender = n.immediateRender !== !1;
          var i = this.tweenTo(e, n);
          return i.duration(Math.abs(i.vars.time - t) / this._timeScale || .001)
        }, c.render = function (t, e, n) {
          this._gc && this._enabled(!0, !1);
          var i, a, l, c, h, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._duration,
            m = this._time,
            _ = this._totalTime,
            g = this._startTime,
            v = this._timeScale,
            y = this._rawPrevTime,
            b = this._paused,
            w = this._cycle;
          if (t >= d ? (this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, c = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (h = !0, y > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === p && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (c = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : (0 === p && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (f = p + this._repeatDelay, this._cycle = this._totalTime / f >> 0, 0 !== this._cycle && this._cycle === this._totalTime / f && this._cycle--, this._time = this._totalTime - this._cycle * f, this._yoyo && 0 !== (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
            var x = this._yoyo && 0 !== (1 & w),
              T = x === (this._yoyo && 0 !== (1 & this._cycle)),
              k = this._totalTime,
              S = this._cycle,
              C = this._rawPrevTime,
              D = this._time;
            if (this._totalTime = w * p, this._cycle < w ? x = !x : this._totalTime += p, this._time = m, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : p, this.render(m, e, 0 === p), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), T && (m = x ? p + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !b) return;
            this._time = D, this._totalTime = k, this._cycle = S, this._rawPrevTime = C
          }
          if (!(this._time !== m && this._first || n || h)) return void(_ !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
          if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== _ && t > 0 && (this._active = !0), 0 === _ && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= m)
            for (i = this._first; i && (l = i._next, !this._paused || b);)(i._active || i._startTime <= this._time && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = l;
          else
            for (i = this._last; i && (l = i._prev, !this._paused || b);)(i._active || i._startTime <= m && !i._paused && !i._gc) && (i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (t - i._startTime) * i._timeScale, e, n) : i.render((t - i._startTime) * i._timeScale, e, n)), i = l;
          this._onUpdate && (e || (o.length && u(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s))), c && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (a && (o.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this.vars[c].apply(this.vars[c + "Scope"] || this, this.vars[c + "Params"] || s)))
        }, c.getActive = function (t, e, n) {
          null == t && (t = !0), null == e && (e = !0), null == n && (n = !1);
          var i, r, s = [],
            a = this.getChildren(t, e, n),
            o = 0,
            u = a.length;
          for (i = 0; u > i; i++) r = a[i], r.isActive() && (s[o++] = r);
          return s
        }, c.getLabelAfter = function (t) {
          t || 0 !== t && (t = this._time);
          var e, n = this.getLabelsArray(),
            i = n.length;
          for (e = 0; i > e; e++)
            if (n[e].time > t) return n[e].name;
          return null
        }, c.getLabelBefore = function (t) {
          null == t && (t = this._time);
          for (var e = this.getLabelsArray(), n = e.length; --n > -1;)
            if (e[n].time < t) return e[n].name;
          return null
        }, c.getLabelsArray = function () {
          var t, e = [],
            n = 0;
          for (t in this._labels) e[n++] = {
            time: this._labels[t],
            name: t
          };
          return e.sort(function (t, e) {
            return t.time - e.time
          }), e
        }, c.progress = function (t, e) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, c.totalProgress = function (t, e) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, c.totalDuration = function (e) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, c.time = function (t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, c.repeat = function (t) {
          return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function (t) {
          return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function (t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, c.currentLabel = function (t) {
          return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, i
      }, !0),
      function () {
        var t = 180 / Math.PI,
          e = [],
          n = [],
          i = [],
          r = {},
          s = function (t, e, n, i) {
            this.a = t, this.b = e, this.c = n, this.d = i, this.da = i - t, this.ca = n - t, this.ba = e - t
          },
          a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
          o = function (t, e, n, i) {
            var r = {
                a: t
              },
              s = {},
              a = {},
              o = {
                c: i
              },
              u = (t + e) / 2,
              l = (e + n) / 2,
              c = (n + i) / 2,
              h = (u + l) / 2,
              f = (l + c) / 2,
              d = (f - h) / 8;
            return r.b = u + (t - u) / 4, s.b = h + d, r.c = s.a = (r.b + s.b) / 2, s.c = a.a = (h + f) / 2, a.b = f - d, o.b = c + (i - c) / 4, a.c = o.a = (a.b + o.b) / 2, [r, s, a, o]
          },
          u = function (t, r, s, a, u) {
            var l, c, h, f, d, p, m, _, g, v, y, b, w, x = t.length - 1,
              T = 0,
              k = t[0].a;
            for (l = 0; x > l; l++) d = t[T], c = d.a, h = d.d, f = t[T + 1].d, u ? (y = e[l], b = n[l], w = (b + y) * r * .25 / (a ? .5 : i[l] || .5), p = h - (h - c) * (a ? .5 * r : 0 !== y ? w / y : 0), m = h + (f - h) * (a ? .5 * r : 0 !== b ? w / b : 0), _ = h - (p + ((m - p) * (3 * y / (y + b) + .5) / 4 || 0))) : (p = h - (h - c) * r * .5, m = h + (f - h) * r * .5, _ = h - (p + m) / 2), p += _, m += _, d.c = g = p, d.b = 0 !== l ? k : k = d.a + .6 * (d.c - d.a), d.da = h - c, d.ca = g - c, d.ba = k - c, s ? (v = o(c, k, g, h), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, k = m;
            d = t[T], d.b = k, d.c = k + .4 * (d.d - k), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = k - d.a, s && (v = o(d.a, k, d.c, d.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
          },
          l = function (t, i, r, a) {
            var o, u, l, c, h, f, d = [];
            if (a)
              for (t = [a].concat(t), u = t.length; --u > -1;) "string" == typeof (f = t[u][i]) && "=" === f.charAt(1) && (t[u][i] = a[i] + Number(f.charAt(0) + f.substr(2)));
            if (o = t.length - 2, 0 > o) return d[0] = new s(t[0][i], 0, 0, t[-1 > o ? 0 : 1][i]), d;
            for (u = 0; o > u; u++) l = t[u][i], c = t[u + 1][i], d[u] = new s(l, 0, 0, c), r && (h = t[u + 2][i], e[u] = (e[u] || 0) + (c - l) * (c - l), n[u] = (n[u] || 0) + (h - c) * (h - c));
            return d[u] = new s(t[u][i], 0, 0, t[u + 1][i]), d
          },
          c = function (t, s, o, c, h, f) {
            var d, p, m, _, g, v, y, b, w = {},
              x = [],
              T = f || t[0];
            h = "string" == typeof h ? "," + h + "," : a, null == s && (s = 1);
            for (p in t[0]) x.push(p);
            if (t.length > 1) {
              for (b = t[t.length - 1], y = !0, d = x.length; --d > -1;)
                if (p = x[d], Math.abs(T[p] - b[p]) > .05) {
                  y = !1;
                  break
                }
              y && (t = t.concat(), f && t.unshift(f), t.push(t[1]), f = t[t.length - 3])
            }
            for (e.length = n.length = i.length = 0, d = x.length; --d > -1;) p = x[d], r[p] = -1 !== h.indexOf("," + p + ","), w[p] = l(t, p, r[p], f);
            for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), n[d] = Math.sqrt(n[d]);
            if (!c) {
              for (d = x.length; --d > -1;)
                if (r[p])
                  for (m = w[x[d]], v = m.length - 1, _ = 0; v > _; _++) g = m[_ + 1].da / n[_] + m[_].da / e[_], i[_] = (i[_] || 0) + g * g;
              for (d = i.length; --d > -1;) i[d] = Math.sqrt(i[d])
            }
            for (d = x.length, _ = o ? 4 : 1; --d > -1;) p = x[d], m = w[p], u(m, s, o, c, r[p]), y && (m.splice(0, _), m.splice(m.length - _, _));
            return w
          },
          h = function (t, e, n) {
            e = e || "soft";
            var i, r, a, o, u, l, c, h, f, d, p, m = {},
              _ = "cubic" === e ? 3 : 2,
              g = "soft" === e,
              v = [];
            if (g && n && (t = [n].concat(t)), null == t || t.length < _ + 1) throw "invalid Bezier data";
            for (f in t[0]) v.push(f);
            for (l = v.length; --l > -1;) {
              for (f = v[l], m[f] = u = [], d = 0, h = t.length, c = 0; h > c; c++) i = null == n ? t[c][f] : "string" == typeof (p = t[c][f]) && "=" === p.charAt(1) ? n[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), g && c > 1 && h - 1 > c && (u[d++] = (i + u[d - 2]) / 2), u[d++] = i;
              for (h = d - _ + 1, d = 0, c = 0; h > c; c += _) i = u[c], r = u[c + 1], a = u[c + 2], o = 2 === _ ? 0 : u[c + 3], u[d++] = p = 3 === _ ? new s(i, r, a, o) : new s(i, (2 * r + i) / 3, (2 * r + a) / 3, a);
              u.length = d
            }
            return m
          },
          f = function (t, e, n) {
            for (var i, r, s, a, o, u, l, c, h, f, d, p = 1 / n, m = t.length; --m > -1;)
              for (f = t[m], s = f.a, a = f.d - s, o = f.c - s, u = f.b - s, i = r = 0, c = 1; n >= c; c++) l = p * c, h = 1 - l, i = r - (r = (l * l * a + 3 * h * (l * o + h * u)) * l), d = m * n + c - 1, e[d] = (e[d] || 0) + i * i
          },
          d = function (t, e) {
            e = e >> 0 || 6;
            var n, i, r, s, a = [],
              o = [],
              u = 0,
              l = 0,
              c = e - 1,
              h = [],
              d = [];
            for (n in t) f(t[n], a, e);
            for (r = a.length, i = 0; r > i; i++) u += Math.sqrt(a[i]), s = i % e, d[s] = u, s === c && (l += u, s = i / e >> 0, h[s] = d, o[s] = l, u = 0, d = []);
            return {
              length: l,
              lengths: o,
              segments: h
            }
          },
          p = _gsScope._gsDefine.plugin({
            propName: "bezier",
            priority: -1,
            version: "1.3.3",
            API: 2,
            global: !0,
            init: function (t, e, n) {
              this._target = t, e instanceof Array && (e = {
                values: e
              }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
              var i, r, s, a, o, u = e.values || [],
                l = {},
                f = u[0],
                p = e.autoRotate || n.vars.orientToBezier;
              this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
              for (i in f) this._props.push(i);
              for (s = this._props.length; --s > -1;) i = this._props[s], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof t[i], l[i] = r ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(t[i]), o || l[i] !== u[0][i] && (o = l);
              if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(u, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : h(u, e.type, l), this._segCount = this._beziers[i].length, this._timeRes) {
                var m = d(this._beziers, this._timeRes);
                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
              }
              if (p = this._autoRotate)
                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                  for (a = 0; 3 > a; a++) i = p[s][a], this._func[i] = "function" == typeof t[i] ? t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)] : !1;
                  i = p[s][2], this._initialRotations[s] = this._func[i] ? this._func[i].call(this._target) : this._target[i]
                }
              return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
            },
            set: function (e) {
              var n, i, r, s, a, o, u, l, c, h, f = this._segCount,
                d = this._func,
                p = this._target,
                m = e !== this._startRatio;
              if (this._timeRes) {
                if (c = this._lengths, h = this._curSeg, e *= this._length, r = this._li, e > this._l2 && f - 1 > r) {
                  for (l = f - 1; l > r && (this._l2 = c[++r]) <= e;);
                  this._l1 = c[r - 1], this._li = r, this._curSeg = h = this._segments[r], this._s2 = h[this._s1 = this._si = 0]
                } else if (e < this._l1 && r > 0) {
                  for (; r > 0 && (this._l1 = c[--r]) >= e;);
                  0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = h = this._segments[r], this._s1 = h[(this._si = h.length - 1) - 1] || 0, this._s2 = h[this._si]
                }
                if (n = r, e -= this._l1, r = this._si, e > this._s2 && r < h.length - 1) {
                  for (l = h.length - 1; l > r && (this._s2 = h[++r]) <= e;);
                  this._s1 = h[r - 1], this._si = r
                } else if (e < this._s1 && r > 0) {
                  for (; r > 0 && (this._s1 = h[--r]) >= e;);
                  0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = h[r], this._si = r
                }
                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
              } else n = 0 > e ? 0 : e >= 1 ? f - 1 : f * e >> 0, o = (e - n * (1 / f)) * f;
              for (i = 1 - o, r = this._props.length; --r > -1;) s = this._props[r], a = this._beziers[s][n], u = (o * o * a.da + 3 * i * (o * a.ca + i * a.ba)) * o + a.a, this._round[s] && (u = Math.round(u)), d[s] ? p[s](u) : p[s] = u;
              if (this._autoRotate) {
                var _, g, v, y, b, w, x, T = this._autoRotate;
                for (r = T.length; --r > -1;) s = T[r][2], w = T[r][3] || 0, x = T[r][4] === !0 ? 1 : t, a = this._beziers[T[r][0]], _ = this._beziers[T[r][1]], a && _ && (a = a[n], _ = _[n], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = _.a + (_.b - _.a) * o, b = _.b + (_.c - _.b) * o, v += (b - v) * o, b += (_.c + (_.d - _.c) * o - b) * o, u = m ? Math.atan2(b - v, y - g) * x + w : this._initialRotations[r], d[s] ? p[s](u) : p[s] = u)
              }
            }
          }),
          m = p.prototype;
        p.bezierThrough = c, p.cubicToQuadratic = o, p._autoCSS = !0, p.quadraticToCubic = function (t, e, n) {
          return new s(t, (2 * e + t) / 3, (2 * e + n) / 3, n)
        }, p._cssRegister = function () {
          var t = _gsScope._gsDefine.globals.CSSPlugin;
          if (t) {
            var e = t._internals,
              n = e._parseToProxy,
              i = e._setPluginRatio,
              r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
              parser: function (t, e, s, a, o, u) {
                e instanceof Array && (e = {
                  values: e
                }), u = new p;
                var l, c, h, f = e.values,
                  d = f.length - 1,
                  m = [],
                  _ = {};
                if (0 > d) return o;
                for (l = 0; d >= l; l++) h = n(t, f[l], a, o, u, d !== l), m[l] = h.end;
                for (c in e) _[c] = e[c];
                return _.values = m, o = new r(t, "bezier", 0, 0, h.pt, 2), o.data = h, o.plugin = u, o.setRatio = i, 0 === _.autoRotate && (_.autoRotate = !0), !_.autoRotate || _.autoRotate instanceof Array || (l = _.autoRotate === !0 ? 0 : Number(_.autoRotate), _.autoRotate = null != h.end.left ? [["left", "top", "rotation", l, !1]] : null != h.end.x ? [["x", "y", "rotation", l, !1]] : !1), _.autoRotate && (a._transform || a._enableTransforms(!1), h.autoRotate = a._target._gsTransform), u._onInitTween(h.proxy, _, a._tween), o
              }
            })
          }
        }, m._roundProps = function (t, e) {
          for (var n = this._overwriteProps, i = n.length; --i > -1;)(t[n[i]] || t.bezier || t.bezierThrough) && (this._round[n[i]] = e)
        }, m._kill = function (t) {
          var e, n, i = this._props;
          for (e in this._beziers)
            if (e in t)
              for (delete this._beziers[e], delete this._func[e], n = i.length; --n > -1;) i[n] === e && i.splice(n, 1);
          return this._super._kill.call(this, t)
        }
      }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
        var n, i, r, s, a = function () {
            t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
          },
          o = {},
          u = a.prototype = new t("css");
        u.constructor = a, a.version = "1.14.2", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", u = "px", a.suffixMap = {
          top: u,
          right: u,
          bottom: u,
          left: u,
          width: u,
          height: u,
          fontSize: u,
          padding: u,
          margin: u,
          perspective: u,
          lineHeight: ""
        };
        var l, c, h, f, d, p, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          v = /(?![+-]?\d*\.?\d+|e[+-]\d+)[^0-9]/g,
          y = /(?:\d|\-|\+|=|#|\.)*/g,
          b = /opacity *= *([^)]*)/i,
          w = /opacity:([^;]*)/i,
          x = /alpha\(opacity *=.+?\)/i,
          T = /^(rgb|hsl)/,
          k = /([A-Z])/g,
          S = /-([a-z])/gi,
          C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          D = function (t, e) {
            return e.toUpperCase()
          },
          M = /(?:Left|Right|Width)/i,
          A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          P = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          O = /,(?=[^\)]*(?:\(|$))/gi,
          E = Math.PI / 180,
          R = 180 / Math.PI,
          j = {},
          L = document,
          N = L.createElement("div"),
          I = L.createElement("img"),
          Y = a._internals = {
            _specialProps: o
          },
          F = navigator.userAgent,
          $ = function () {
            var t, e = F.indexOf("Android"),
              n = L.createElement("div");
            return h = -1 !== F.indexOf("Safari") && -1 === F.indexOf("Chrome") && (-1 === e || Number(F.substr(e + 8, 1)) > 3), d = h && Number(F.substr(F.indexOf("Version/index.html") + 8, 1)) < 6, f = -1 !== F.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(F)) && (p = parseFloat(RegExp.$1)), n.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = n.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
          }(),
          z = function (t) {
            return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          },
          q = function (t) {
            window.console && console.log(t)
          },
          H = "",
          U = "",
          W = function (t, e) {
            e = e || N;
            var n, i, r = e.style;
            if (void 0 !== r[t]) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + t];);
            return i >= 0 ? (U = 3 === i ? "ms" : n[i], H = "-" + U.toLowerCase() + "-", U + t) : null
          },
          B = L.defaultView ? L.defaultView.getComputedStyle : function () {},
          G = a.getStyle = function (t, e, n, i, r) {
            var s;
            return $ || "opacity" !== e ? (!i && t.style[e] ? s = t.style[e] : (n = n || B(t)) ? s = n[e] || n.getPropertyValue(e) || n.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : z(t)
          },
          X = Y.convertToPixels = function (t, n, i, r, s) {
            if ("px" === r || !r) return i;
            if ("auto" === r || !i) return 0;
            var o, u, l, c = M.test(n),
              h = t,
              f = N.style,
              d = 0 > i;
            if (d && (i = -i), "%" === r && -1 !== n.indexOf("border")) o = i / 100 * (c ? t.clientWidth : t.clientHeight);
            else {
              if (f.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && h.appendChild) f[c ? "borderLeftWidth" : "borderTopWidth"] = i + r;
              else {
                if (h = t.parentNode || L.body, u = h._gsCache, l = e.ticker.frame, u && c && u.time === l) return u.width * i / 100;
                f[c ? "width" : "height"] = i + r
              }
              h.appendChild(N), o = parseFloat(N[c ? "offsetWidth" : "offsetHeight"]), h.removeChild(N), c && "%" === r && a.cacheWidths !== !1 && (u = h._gsCache = h._gsCache || {}, u.time = l, u.width = o / i * 100), 0 !== o || s || (o = X(t, n, i, r, !0))
            }
            return d ? -o : o
          },
          Q = Y.calculateOffset = function (t, e, n) {
            if ("absolute" !== G(t, "position", n)) return 0;
            var i = "left" === e ? "Left" : "Top",
              r = G(t, "margin" + i, n);
            return t["offset" + i] - (X(t, e, parseFloat(r), r.replace(y, "")) || 0)
          },
          V = function (t, e) {
            var n, i, r = {};
            if (e = e || B(t, null))
              if (n = e.length)
                for (; --n > -1;) r[e[n].replace(S, D)] = e.getPropertyValue(e[n]);
              else
                for (n in e) r[n] = e[n];
            else if (e = t.currentStyle || t.style)
              for (n in e) "string" == typeof n && void 0 === r[n] && (r[n.replace(S, D)] = e[n]);
            return $ || (r.opacity = z(t)), i = Pe(t, e, !1), r.rotation = i.rotation, r.skewX = i.skewX, r.scaleX = i.scaleX, r.scaleY = i.scaleY, r.x = i.x, r.y = i.y, Te && (r.z = i.z, r.rotationX = i.rotationX, r.rotationY = i.rotationY, r.scaleZ = i.scaleZ), r.filters && delete r.filters, r
          },
          Z = function (t, e, n, i, r) {
            var s, a, o, u = {},
              l = t.style;
            for (a in n) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (s = n[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (u[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[a] || "" === e[a].replace(v, "") ? s : 0 : Q(t, a), void 0 !== l[a] && (o = new he(l, a, l[a], o)));
            if (i)
              for (a in i) "className" !== a && (u[a] = i[a]);
            return {
              difs: u,
              firstMPT: o
            }
          },
          J = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
          },
          K = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          te = function (t, e, n) {
            var i = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = J[e],
              s = r.length;
            for (n = n || B(t, null); --s > -1;) i -= parseFloat(G(t, "padding" + r[s], n, !0)) || 0, i -= parseFloat(G(t, "border" + r[s] + "Width", n, !0)) || 0;
            return i
          },
          ee = function (t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
            var n = t.split(" "),
              i = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
              r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
            return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === i || isNaN(parseFloat(i)) && -1 === (i + "").indexOf("=")) && (i = "50%"), e && (e.oxp = -1 !== i.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === i.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(i.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), i + " " + r + (n.length > 2 ? " " + n[2] : "")
          },
          ne = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
          },
          ie = function (t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
          },
          re = function (t, e, n, i) {
            var r, s, a, o, u = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, s = t.split("_"), a = Number(s[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : R) - ("=" === t.charAt(1) ? 0 : e), s.length && (i && (i[n] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = e + a), u > o && o > -u && (o = 0), o
          },
          se = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          ae = function (t, e, n) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (n - e) * t * 6 : .5 > t ? n : 2 > 3 * t ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
          },
          oe = a.parseColor = function (t) {
            var e, n, i, r, s, a;
            return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), se[t] ? se[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), n = t.charAt(2), i = t.charAt(3), t = "#" + e + e + n + n + i + i), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, a = Number(t[2]) / 100, n = .5 >= a ? a * (s + 1) : a + s - a * s, e = 2 * a - n, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, n), t[1] = ae(r, e, n), t[2] = ae(r - 1 / 3, e, n), t) : (t = t.match(m) || se.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : se.black
          },
          ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (u in se) ue += "|" + u + "\\b";
        ue = new RegExp(ue + ")", "gi");
        var le = function (t, e, n, i) {
            if (null == t) return function (t) {
              return t
            };
            var r, s = e ? (t.match(ue) || [""])[0] : "",
              a = t.split(s).join("").match(g) || [],
              o = t.substr(0, t.indexOf(a[0])),
              u = ")" === t.charAt(t.length - 1) ? ")" : "",
              l = -1 !== t.indexOf(" ") ? " " : ",",
              c = a.length,
              h = c > 0 ? a[0].replace(m, "") : "";
            return c ? r = e ? function (t) {
              var e, f, d, p;
              if ("number" == typeof t) t += h;
              else if (i && O.test(t)) {
                for (p = t.replace(O, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
                return p.join(",")
              }
              if (e = (t.match(ue) || [s])[0], f = t.split(e).join("").match(g) || [], d = f.length, c > d--)
                for (; ++d < c;) f[d] = n ? f[(d - 1) / 2 | 0] : a[d];
              return o + f.join(l) + l + e + u + (-1 !== t.indexOf("inset") ? " inset" : "")
            } : function (t) {
              var e, s, f;
              if ("number" == typeof t) t += h;
              else if (i && O.test(t)) {
                for (s = t.replace(O, "|").split("|"), f = 0; f < s.length; f++) s[f] = r(s[f]);
                return s.join(",")
              }
              if (e = t.match(g) || [], f = e.length, c > f--)
                for (; ++f < c;) e[f] = n ? e[(f - 1) / 2 | 0] : a[f];
              return o + e.join(l) + u
            } : function (t) {
              return t
            }
          },
          ce = function (t) {
            return t = t.split(","),
              function (e, n, i, r, s, a, o) {
                var u, l = (n + "").split(" ");
                for (o = {}, u = 0; 4 > u; u++) o[t[u]] = l[u] = l[u] || l[(u - 1) / 2 >> 0];
                return r.parse(e, o, s, a)
              }
          },
          he = (Y._setPluginRatio = function (t) {
            this.plugin.setRatio(t);
            for (var e, n, i, r, s = this.data, a = s.proxy, o = s.firstMPT, u = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : u > e && e > -u && (e = 0), o.t[o.p] = e, o = o._next;
            if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === t)
              for (o = s.firstMPT; o;) {
                if (n = o.t, n.type) {
                  if (1 === n.type) {
                    for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                    n.e = r
                  }
                } else n.e = n.s + n.xs0;
                o = o._next
              }
          }, function (t, e, n, i, r) {
            this.t = t, this.p = e, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
          }),
          fe = (Y._parseToProxy = function (t, e, n, i, r, s) {
            var a, o, u, l, c, h = i,
              f = {},
              d = {},
              p = n._transform,
              m = j;
            for (n._transform = null, j = e, i = c = n.parse(t, e, i, r), j = m, s && (n._transform = p, h && (h._prev = null, h._prev && (h._prev._next = null))); i && i !== h;) {
              if (i.type <= 1 && (o = i.p, d[o] = i.s + i.c, f[o] = i.s, s || (l = new he(i, "s", o, l, i.r), i.c = 0), 1 === i.type))
                for (a = i.l; --a > 0;) u = "xn" + a, o = i.p + "_" + u, d[o] = i.data[u], f[o] = i[u], s || (l = new he(i, u, o, l, i.rxp[u]));
              i = i._next
            }
            return {
              proxy: f,
              end: d,
              firstMPT: l,
              pt: c
            }
          }, Y.CSSPropTween = function (t, e, i, r, a, o, u, l, c, h, f) {
            this.t = t, this.p = e, this.s = i, this.c = r, this.n = u || e, t instanceof fe || s.push(this.n), this.r = l, this.type = o || 0, c && (this.pr = c, n = !0), this.b = void 0 === h ? i : h, this.e = void 0 === f ? i + r : f, a && (this._next = a, a._prev = this)
          }),
          de = a.parseComplex = function (t, e, n, i, r, s, a, o, u, c) {
            n = n || s || "", a = new fe(t, e, 0, 0, a, c ? 2 : 1, null, !1, o, n, i), i += "";
            var h, f, d, p, g, v, y, b, w, x, k, S, C = n.split(", ").join(",").split(" "),
              D = i.split(", ").join(",").split(" "),
              M = C.length,
              A = l !== !1;
            for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (C = C.join(" ").replace(O, ", ").split(" "), D = D.join(" ").replace(O, ", ").split(" "), M = C.length), M !== D.length && (C = (s || "").split(" "), M = C.length), a.plugin = u, a.setRatio = c, h = 0; M > h; h++)
              if (p = C[h], g = D[h], b = parseFloat(p), b || 0 === b) a.appendXtra("", b, ne(g, b), g.replace(_, ""), A && -1 !== g.indexOf("px"), !0);
              else if (r && ("#" === p.charAt(0) || se[p] || T.test(p))) S = "," === g.charAt(g.length - 1) ? ")," : ")", p = oe(p), g = oe(g), w = p.length + g.length > 6, w && !$ && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(D[h]).join("transparent")) : ($ || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", p[0], g[0] - p[0], ",", !0, !0).appendXtra("", p[1], g[1] - p[1], ",", !0).appendXtra("", p[2], g[2] - p[2], w ? "," : S, !0), w && (p = p.length < 4 ? 1 : p[3], a.appendXtra("", p, (g.length < 4 ? 1 : g[3]) - p, S, !1)));
            else if (v = p.match(m)) {
              if (y = g.match(_), !y || y.length !== v.length) return a;
              for (d = 0, f = 0; f < v.length; f++) k = v[f], x = p.indexOf(k, d), a.appendXtra(p.substr(d, x - d), Number(k), ne(y[f], k), "", A && "px" === p.substr(x + k.length, 2), 0 === f), d = x + k.length;
              a["xs" + a.l] += p.substr(d)
            } else a["xs" + a.l] += a.l ? " " + p : p;
            if (-1 !== i.indexOf("=") && a.data) {
              for (S = a.xs0 + a.data.s, h = 1; h < a.l; h++) S += a["xs" + h] + a.data["xn" + h];
              a.e = S + a["xs" + h]
            }
            return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
          },
          pe = 9;
        for (u = fe.prototype, u.l = u.pr = 0; --pe > 0;) u["xn" + pe] = 0, u["xs" + pe] = "";
        u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, n, i, r, s) {
          var a = this,
            o = a.l;
          return a["xs" + o] += s && o ? " " + t : t || "", n || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = i || "", o > 0 ? (a.data["xn" + o] = e + n, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, n, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
            s: e + n
          }, a.rxp = {}, a.s = e, a.c = n, a.r = r, a)) : (a["xs" + o] += e + (i || ""), a)
        };
        var me = function (t, e) {
            e = e || {}, this.p = e.prefix ? W(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
          },
          _e = Y._registerComplexSpecialProp = function (t, e, n) {
            "object" != typeof e && (e = {
              parser: n
            });
            var i, r, s = t.split(","),
              a = e.defaultValue;
            for (n = n || [a], i = 0; i < s.length; i++) e.prefix = 0 === i && e.prefix, e.defaultValue = n[i] || a, r = new me(s[i], e)
          },
          ge = function (t) {
            if (!o[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              _e(t, {
                parser: function (t, n, i, r, s, a, u) {
                  var l = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                  return l ? (l._cssRegister(), o[i].parse(t, n, i, r, s, a, u)) : (q("Error: " + e + " js file not loaded."), s)
                }
              })
            }
          };
        u = me.prototype, u.parseComplex = function (t, e, n, i, r, s) {
          var a, o, u, l, c, h, f = this.keyword;
          if (this.multi && (O.test(n) || O.test(e) ? (o = e.replace(O, "|").split("|"), u = n.replace(O, "|").split("|")) : f && (o = [e], u = [n])), u) {
            for (l = u.length > o.length ? u.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, n = u[a] = u[a] || this.dflt, f && (c = e.indexOf(f), h = n.indexOf(f), c !== h && (n = -1 === h ? u : o, n[a] += " " + f));
            e = o.join(", "), n = u.join(", ")
          }
          return de(t, this.p, e, n, this.clrs, this.dflt, i, this.pr, r, s)
        }, u.parse = function (t, e, n, i, s, a) {
          return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), s, a)
        }, a.registerSpecialProp = function (t, e, n) {
          _e(t, {
            parser: function (t, i, r, s, a, o) {
              var u = new fe(t, r, 0, 0, a, 2, r, !1, n);
              return u.plugin = o, u.setRatio = e(t, i, s._tween, r), u
            },
            priority: n
          })
        };
        var ve, ye = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
          be = W("transform"),
          we = H + "transform",
          xe = W("transformOrigin"),
          Te = null !== W("perspective"),
          ke = Y.Transform = function () {
            this.skewY = 0
          },
          Se = window.SVGElement,
          Ce = function (t, e, n) {
            var i, r = L.createElementNS("http://www.w3.org/2000/svg", t),
              s = /([a-z])([A-Z])/g;
            for (i in n) r.setAttributeNS(null, i.replace(s, "$1-$2").toLowerCase(), n[i]);
            return e.appendChild(r), r
          },
          De = document.documentElement,
          Me = function () {
            var t, e, n, i = p || /Android/i.test(F) && !window.chrome;
            return L.createElementNS && !i && (t = Ce("svg", De), e = Ce("rect", t, {
              width: 100,
              height: 50,
              x: 100
            }), n = e.getBoundingClientRect().left, e.style[xe] = "50% 50%", e.style[be] = "scale(0.5,0.5)", i = n === e.getBoundingClientRect().left, De.removeChild(t)), i
          }(),
          Ae = function (t, e, n) {
            var i = t.getBBox();
            e = ee(e).split(" "), n.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * i.width : parseFloat(e[0])) + i.x, n.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * i.height : parseFloat(e[1])) + i.y
          },
          Pe = Y.getTransform = function (t, e, n, i) {
            if (t._gsTransform && n && !i) return t._gsTransform;
            var s, o, u, l, c, h, f, d, p, m, _, g, v, y = n ? t._gsTransform || new ke : new ke,
              b = y.scaleX < 0,
              w = 2e-5,
              x = 1e5,
              T = 179.99,
              k = T * E,
              S = Te ? parseFloat(G(t, xe, e, !1, "0 0 0").split(" ")[2]) || y.zOrigin || 0 : 0,
              C = parseFloat(a.defaultTransformPerspective) || 0;
            if (be ? s = G(t, we, e, !0) : t.currentStyle && (s = t.currentStyle.filter.match(A), s = s && 4 === s.length ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), y.x || 0, y.y || 0].join(",") : ""), s && "none" !== s && "matrix(1, 0, 0, 1, 0, 0)" !== s) {
              for (o = (s || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], u = o.length; --u > -1;) l = Number(o[u]), o[u] = (c = l - (l |= 0)) ? (c * x + (0 > c ? -.5 : .5) | 0) / x + l : l;
              if (16 === o.length) {
                var D = o[8],
                  M = o[9],
                  P = o[10],
                  O = o[12],
                  j = o[13],
                  L = o[14];
                if (y.zOrigin && (L = -y.zOrigin, O = D * L - o[12], j = M * L - o[13], L = P * L + y.zOrigin - o[14]), !n || i || null == y.rotationX) {
                  var N, I, Y, F, $, z, q, H = o[0],
                    U = o[1],
                    W = o[2],
                    B = o[3],
                    X = o[4],
                    Q = o[5],
                    V = o[6],
                    Z = o[7],
                    J = o[11],
                    K = Math.atan2(V, P),
                    te = -k > K || K > k;
                  y.rotationX = K * R, K && (F = Math.cos(-K), $ = Math.sin(-K), N = X * F + D * $, I = Q * F + M * $, Y = V * F + P * $, D = X * -$ + D * F, M = Q * -$ + M * F, P = V * -$ + P * F, J = Z * -$ + J * F, X = N, Q = I, V = Y), K = Math.atan2(D, H), y.rotationY = K * R, K && (z = -k > K || K > k, F = Math.cos(-K), $ = Math.sin(-K), N = H * F - D * $, I = U * F - M * $, Y = W * F - P * $, M = U * $ + M * F, P = W * $ + P * F, J = B * $ + J * F, H = N, U = I, W = Y), K = Math.atan2(U, Q), y.rotation = K * R, K && (q = -k > K || K > k, F = Math.cos(-K), $ = Math.sin(-K), H = H * F + X * $, I = U * F + Q * $, Q = U * -$ + Q * F, V = W * -$ + V * F, U = I), q && te ? y.rotation = y.rotationX = 0 : q && z ? y.rotation = y.rotationY = 0 : z && te && (y.rotationY = y.rotationX = 0), y.scaleX = (Math.sqrt(H * H + U * U) * x + .5 | 0) / x, y.scaleY = (Math.sqrt(Q * Q + M * M) * x + .5 | 0) / x, y.scaleZ = (Math.sqrt(V * V + P * P) * x + .5 | 0) / x, y.skewX = 0, y.perspective = J ? 1 / (0 > J ? -J : J) : 0, y.x = O, y.y = j, y.z = L
                }
              } else if (!(Te && !i && o.length && y.x === o[4] && y.y === o[5] && (y.rotationX || y.rotationY) || void 0 !== y.x && "none" === G(t, "display", e))) {
                var ee = o.length >= 6,
                  ne = ee ? o[0] : 1,
                  ie = o[1] || 0,
                  re = o[2] || 0,
                  se = ee ? o[3] : 1;
                y.x = o[4] || 0, y.y = o[5] || 0, h = Math.sqrt(ne * ne + ie * ie), f = Math.sqrt(se * se + re * re), d = ne || ie ? Math.atan2(ie, ne) * R : y.rotation || 0, p = re || se ? Math.atan2(re, se) * R + d : y.skewX || 0, m = h - Math.abs(y.scaleX || 0), _ = f - Math.abs(y.scaleY || 0), Math.abs(p) > 90 && Math.abs(p) < 270 && (b ? (h *= -1, p += 0 >= d ? 180 : -180, d += 0 >= d ? 180 : -180) : (f *= -1, p += 0 >= p ? 180 : -180)), g = (d - y.rotation) % 180, v = (p - y.skewX) % 180, (void 0 === y.skewX || m > w || -w > m || _ > w || -w > _ || g > -T && T > g && g * x | !1 || v > -T && T > v && v * x | !1) && (y.scaleX = h, y.scaleY = f, y.rotation = d, y.skewX = p), Te && (y.rotationX = y.rotationY = y.z = 0, y.perspective = C, y.scaleZ = 1)
              }
              y.zOrigin = S;
              for (u in y) y[u] < w && y[u] > -w && (y[u] = 0)
            } else y = {
              x: 0,
              y: 0,
              z: 0,
              scaleX: 1,
              scaleY: 1,
              scaleZ: 1,
              skewX: 0,
              skewY: 0,
              perspective: C,
              rotation: 0,
              rotationX: 0,
              rotationY: 0,
              zOrigin: 0
            };
            return n && (t._gsTransform = y), y.svg = Se && t instanceof Se && t.parentNode instanceof Se, y.svg && (Ae(t, G(t, xe, r, !1, "50% 50%") + "", y), ve = a.useSVGTransformAttr || Me), y.xPercent = y.yPercent = 0, y
          },
          Oe = function (t) {
            var e, n, i = this.data,
              r = -i.rotation * E,
              s = r + i.skewX * E,
              a = 1e5,
              o = (Math.cos(r) * i.scaleX * a | 0) / a,
              u = (Math.sin(r) * i.scaleX * a | 0) / a,
              l = (Math.sin(s) * -i.scaleY * a | 0) / a,
              c = (Math.cos(s) * i.scaleY * a | 0) / a,
              h = this.t.style,
              f = this.t.currentStyle;
            if (f) {
              n = u, u = -l, l = -n, e = f.filter, h.filter = "";
              var d, m, _ = this.t.offsetWidth,
                g = this.t.offsetHeight,
                v = "absolute" !== f.position,
                w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + u + ", M21=" + l + ", M22=" + c,
                x = i.x + _ * i.xPercent / 100,
                T = i.y + g * i.yPercent / 100;
              if (null != i.ox && (d = (i.oxp ? _ * i.ox * .01 : i.ox) - _ / 2, m = (i.oyp ? g * i.oy * .01 : i.oy) - g / 2, x += d - (d * o + m * u), T += m - (d * l + m * c)), v ? (d = _ / 2, m = g / 2, w += ", Dx=" + (d - (d * o + m * u) + x) + ", Dy=" + (m - (d * l + m * c) + T) + ")") : w += ", sizingMethod='auto expand')", h.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(P, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === u && 0 === l && 1 === c && (v && -1 === w.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && h.removeAttribute("filter")), !v) {
                var k, S, C, D = 8 > p ? 1 : -1;
                for (d = i.ieOffsetX || 0, m = i.ieOffsetY || 0, i.ieOffsetX = Math.round((_ - ((0 > o ? -o : o) * _ + (0 > u ? -u : u) * g)) / 2 + x), i.ieOffsetY = Math.round((g - ((0 > c ? -c : c) * g + (0 > l ? -l : l) * _)) / 2 + T), pe = 0; 4 > pe; pe++) S = K[pe], k = f[S], n = -1 !== k.indexOf("px") ? parseFloat(k) : X(this.t, S, parseFloat(k), k.replace(y, "")) || 0, C = n !== i[S] ? 2 > pe ? -i.ieOffsetX : -i.ieOffsetY : 2 > pe ? d - i.ieOffsetX : m - i.ieOffsetY, h[S] = (i[S] = Math.round(n - C * (0 === pe || 2 === pe ? 1 : D))) + "px"
              }
            }
          },
          Ee = Y.set3DTransformRatio = function (t) {
            var e, n, i, r, s, a, o, u, l, c, h, d, p, m, _, g, v, y, b, w, x, T, k, S = this.data,
              C = this.t.style,
              D = S.rotation * E,
              M = S.scaleX,
              A = S.scaleY,
              P = S.scaleZ,
              O = S.x,
              R = S.y,
              j = S.z,
              L = S.perspective;
            if ((1 === t || 0 === t) && "auto" === S.force3D && !(S.rotationY || S.rotationX || 1 !== P || L || j)) return void Re.call(this, t);
            if (f) {
              var N = 1e-4;
              N > M && M > -N && (M = P = 2e-5), N > A && A > -N && (A = P = 2e-5), !L || S.z || S.rotationX || S.rotationY || (L = 0)
            }
            if (D || S.skewX) y = Math.cos(D), b = Math.sin(D), e = y, s = b, S.skewX && (D -= S.skewX * E, y = Math.cos(D), b = Math.sin(D), "simple" === S.skewType && (w = Math.tan(S.skewX * E), w = Math.sqrt(1 + w * w), y *= w, b *= w)), n = -b, a = y;
            else {
              if (!(S.rotationY || S.rotationX || 1 !== P || L || S.svg)) return void(C[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + R + "px," + j + "px)" + (1 !== M || 1 !== A ? " scale(" + M + "," + A + ")" : ""));
              e = a = 1, n = s = 0
            }
            h = 1, i = r = o = u = l = c = d = p = m = 0, _ = L ? -1 / L : 0, g = S.zOrigin, v = 1e5, D = S.rotationY * E, D && (y = Math.cos(D), b = Math.sin(D), l = h * -b, p = _ * -b, i = e * b, o = s * b, h *= y, _ *= y, e *= y, s *= y), D = S.rotationX * E, D && (y = Math.cos(D), b = Math.sin(D), w = n * y + i * b, x = a * y + o * b, T = c * y + h * b, k = m * y + _ * b, i = n * -b + i * y, o = a * -b + o * y, h = c * -b + h * y, _ = m * -b + _ * y, n = w, a = x, c = T, m = k), 1 !== P && (i *= P, o *= P, h *= P, _ *= P), 1 !== A && (n *= A, a *= A, c *= A, m *= A), 1 !== M && (e *= M, s *= M, l *= M, p *= M), g && (d -= g, r = i * d, u = o * d, d = h * d + g), S.svg && (r += S.xOrigin - (S.xOrigin * e + S.yOrigin * n), u += S.yOrigin - (S.xOrigin * s + S.yOrigin * a)), r = (w = (r += O) - (r |= 0)) ? (w * v + (0 > w ? -.5 : .5) | 0) / v + r : r, u = (w = (u += R) - (u |= 0)) ? (w * v + (0 > w ? -.5 : .5) | 0) / v + u : u, d = (w = (d += j) - (d |= 0)) ? (w * v + (0 > w ? -.5 : .5) | 0) / v + d : d, C[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(e * v | 0) / v, (s * v | 0) / v, (l * v | 0) / v, (p * v | 0) / v, (n * v | 0) / v, (a * v | 0) / v, (c * v | 0) / v, (m * v | 0) / v, (i * v | 0) / v, (o * v | 0) / v, (h * v | 0) / v, (_ * v | 0) / v, r, u, d, L ? 1 + -d / L : 1].join(",") + ")"
          },
          Re = Y.set2DTransformRatio = function (t) {
            var e, n, i, r, s, a, o, u, l, c, h, f = this.data,
              d = this.t,
              p = d.style,
              m = f.x,
              _ = f.y;
            return !(f.rotationX || f.rotationY || f.z || f.force3D === !0 || "auto" === f.force3D && 1 !== t && 0 !== t) || f.svg && ve || !Te ? (r = f.scaleX, s = f.scaleY, void(f.rotation || f.skewX || f.svg ? (e = f.rotation * E, n = e - f.skewX * E, i = 1e5, a = Math.cos(e) * r, o = Math.sin(e) * r, u = Math.sin(n) * -s, l = Math.cos(n) * s, f.svg && (m += f.xOrigin - (f.xOrigin * a + f.yOrigin * u), _ += f.yOrigin - (f.xOrigin * o + f.yOrigin * l), h = 1e-6, h > m && m > -h && (m = 0), h > _ && _ > -h && (_ = 0)), c = (a * i | 0) / i + "," + (o * i | 0) / i + "," + (u * i | 0) / i + "," + (l * i | 0) / i + "," + m + "," + _ + ")", f.svg && ve ? d.setAttribute("transform", "matrix(" + c) : p[be] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(" : "matrix(") + c) : p[be] = (f.xPercent || f.yPercent ? "translate(" + f.xPercent + "%," + f.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + s + "," + m + "," + _ + ")")) : (this.setRatio = Ee, void Ee.call(this, t))
          };
        _e("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
          parser: function (t, e, n, i, s, o, u) {
            if (i._transform) return s;
            var l, c, h, f, d, p, m, _ = i._transform = Pe(t, r, !0, u.parseTransform),
              g = t.style,
              v = 1e-6,
              y = ye.length,
              b = u,
              w = {};
            if ("string" == typeof b.transform && be) h = N.style, h[be] = b.transform, h.display = "block", h.position = "absolute", L.body.appendChild(N), l = Pe(N, null, !1), L.body.removeChild(N);
            else if ("object" == typeof b) {
              if (l = {
                  scaleX: ie(null != b.scaleX ? b.scaleX : b.scale, _.scaleX),
                  scaleY: ie(null != b.scaleY ? b.scaleY : b.scale, _.scaleY),
                  scaleZ: ie(b.scaleZ, _.scaleZ),
                  x: ie(b.x, _.x),
                  y: ie(b.y, _.y),
                  z: ie(b.z, _.z),
                  xPercent: ie(b.xPercent, _.xPercent),
                  yPercent: ie(b.yPercent, _.yPercent),
                  perspective: ie(b.transformPerspective, _.perspective)
                }, m = b.directionalRotation, null != m)
                if ("object" == typeof m)
                  for (h in m) b[h] = m[h];
                else b.rotation = m;
                "string" == typeof b.x && -1 !== b.x.indexOf("%") && (l.x = 0, l.xPercent = ie(b.x, _.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (l.y = 0, l.yPercent = ie(b.y, _.yPercent)), l.rotation = re("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : _.rotation, _.rotation, "rotation", w), Te && (l.rotationX = re("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", w), l.rotationY = re("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", w)), l.skewX = null == b.skewX ? _.skewX : re(b.skewX, _.skewX), l.skewY = null == b.skewY ? _.skewY : re(b.skewY, _.skewY), (c = l.skewY - _.skewY) && (l.skewX += c, l.rotation += c)
            }
            for (Te && null != b.force3D && (_.force3D = b.force3D, p = !0), _.skewType = b.skewType || _.skewType || a.defaultSkewType, d = _.force3D || _.z || _.rotationX || _.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, d || null == b.scale || (l.scaleZ = 1); --y > -1;) n = ye[y], f = l[n] - _[n], (f > v || -v > f || null != b[n] || null != j[n]) && (p = !0, s = new fe(_, n, _[n], f, s), n in w && (s.e = w[n]), s.xs0 = 0, s.plugin = o, i._overwriteProps.push(s.n));
            return f = b.transformOrigin, f && _.svg && (Ae(t, f, l), s = new fe(_, "xOrigin", _.xOrigin, l.xOrigin - _.xOrigin, s, -1, "transformOrigin"), s.b = _.xOrigin, s.e = s.xs0 = l.xOrigin, s = new fe(_, "yOrigin", _.yOrigin, l.yOrigin - _.yOrigin, s, -1, "transformOrigin"), s.b = _.yOrigin, s.e = s.xs0 = l.yOrigin, f = "0px 0px"), (f || Te && d && _.zOrigin) && (be ? (p = !0, n = xe, f = (f || G(t, n, r, !1, "50% 50%")) + "", s = new fe(g, n, 0, 0, s, -1, "transformOrigin"), s.b = g[n], s.plugin = o, Te ? (h = _.zOrigin, f = f.split(" "), _.zOrigin = (f.length > 2 && (0 === h || "0px" !== f[2]) ? parseFloat(f[2]) : h) || 0, s.xs0 = s.e = f[0] + " " + (f[1] || "50%") + " 0px", s = new fe(_, "zOrigin", 0, 0, s, -1, s.n), s.b = h, s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = f) : ee(f + "", _)), p && (i._transformType = _.svg && ve || !d && 3 !== this._transformType ? 2 : 3), s
          },
          prefix: !0
        }), _e("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset"
        }), _e("borderRadius", {
          defaultValue: "0px",
          parser: function (t, e, n, s, a) {
            e = this.format(e);
            var o, u, l, c, h, f, d, p, m, _, g, v, y, b, w, x, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
              k = t.style;
            for (m = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), o = e.split(" "), u = 0; u < T.length; u++) this.p.indexOf("border") && (T[u] = W(T[u])), h = c = G(t, T[u], r, !1, "0px"), -1 !== h.indexOf(" ") && (c = h.split(" "), h = c[0], c = c[1]), f = l = o[u], d = parseFloat(h), v = h.substr((d + "").length), y = "=" === f.charAt(1), y ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), g = f.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(f), g = f.substr((p + "").length)), "" === g && (g = i[n] || v), g !== v && (b = X(t, "borderLeft", d, v), w = X(t, "borderTop", d, v), "%" === g ? (h = b / m * 100 + "%", c = w / _ * 100 + "%") : "em" === g ? (x = X(t, "borderLeft", 1, "em"), h = b / x + "em", c = w / x + "em") : (h = b + "px", c = w + "px"), y && (f = parseFloat(h) + p + g, l = parseFloat(c) + p + g)), a = de(k, T[u], h + " " + c, f + " " + l, !1, "0px", a);
            return a
          },
          prefix: !0,
          formatter: le("0px 0px 0px 0px", !1, !0)
        }), _e("backgroundPosition", {
          defaultValue: "0 0",
          parser: function (t, e, n, i, s, a) {
            var o, u, l, c, h, f, d = "background-position",
              m = r || B(t, null),
              _ = this.format((m ? p ? m.getPropertyValue(d + "-x") + " " + m.getPropertyValue(d + "-y") : m.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
              g = this.format(e);
            if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && (f = G(t, "backgroundImage").replace(C, ""), f && "none" !== f)) {
              for (o = _.split(" "), u = g.split(" "), I.setAttribute("src", f), l = 2; --l > -1;) _ = o[l], c = -1 !== _.indexOf("%"), c !== (-1 !== u[l].indexOf("%")) && (h = 0 === l ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[l] = c ? parseFloat(_) / 100 * h + "px" : parseFloat(_) / h * 100 + "%");
              _ = o.join(" ")
            }
            return this.parseComplex(t.style, _, g, s, a)
          },
          formatter: ee
        }), _e("backgroundSize", {
          defaultValue: "0 0",
          formatter: ee
        }), _e("perspective", {
          defaultValue: "0px",
          prefix: !0
        }), _e("perspectiveOrigin", {
          defaultValue: "50% 50%",
          prefix: !0
        }), _e("transformStyle", {
          prefix: !0
        }), _e("backfaceVisibility", {
          prefix: !0
        }), _e("userSelect", {
          prefix: !0
        }), _e("margin", {
          parser: ce("marginTop,marginRight,marginBottom,marginLeft")
        }), _e("padding", {
          parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), _e("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function (t, e, n, i, s, a) {
            var o, u, l;
            return 9 > p ? (u = t.currentStyle, l = 8 > p ? " " : ",", o = "rect(" + u.clipTop + l + u.clipRight + l + u.clipBottom + l + u.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, s, a)
          }
        }), _e("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0
        }), _e("autoRound,strictUnits", {
          parser: function (t, e, n, i, r) {
            return r
          }
        }), _e("border", {
          defaultValue: "0px solid #000",
          parser: function (t, e, n, i, s, a) {
            return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), s, a)
          },
          color: !0,
          formatter: function (t) {
            var e = t.split(" ");
            return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
          }
        }), _e("borderWidth", {
          parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), _e("float,cssFloat,styleFloat", {
          parser: function (t, e, n, i, r) {
            var s = t.style,
              a = "cssFloat" in s ? "cssFloat" : "styleFloat";
            return new fe(s, a, 0, 0, r, -1, n, !1, 0, s[a], e)
          }
        });
        var je = function (t) {
          var e, n = this.t,
            i = n.filter || G(this.data, "filter") || "",
            r = this.s + this.c * t | 0;
          100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), e = !G(this.data, "filter")) : (n.filter = i.replace(x, ""), e = !0)), e || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(b, "opacity=" + r))
        };
        _e("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, n, i, s, a) {
            var o = parseFloat(G(t, "opacity", r, !1, "1")),
              u = t.style,
              l = "autoAlpha" === n;
            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === G(t, "visibility", r) && 0 !== e && (o = 0), $ ? s = new fe(u, "opacity", o, e - o, s) : (s = new fe(u, "opacity", 100 * o, 100 * (e - o), s), s.xn1 = l ? 1 : 0, u.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = a, s.setRatio = je), l && (s = new fe(u, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", i._overwriteProps.push(s.n), i._overwriteProps.push(n)), s
          }
        });
        var Le = function (t, e) {
            e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
          },
          Ne = function (t) {
            if (this.t._gsClassPT = this, 1 === t || 0 === t) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, n = this.t.style; e;) e.v ? n[e.p] = e.v : Le(n, e.p), e = e._next;
              1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
          };
        _e("className", {
          parser: function (t, e, i, s, a, o, u) {
            var l, c, h, f, d, p = t.getAttribute("class") || "",
              m = t.style.cssText;
            if (a = s._classNamePT = new fe(t, i, 0, 0, a, 2), a.setRatio = Ne, a.pr = -11, n = !0, a.b = p, c = V(t, r), h = t._gsClassPT) {
              for (f = {}, d = h.data; d;) f[d.p] = 1, d = d._next;
              h.setRatio(1)
            }
            return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), s._tween._duration && (t.setAttribute("class", a.e), l = Z(t, c, V(t), u, f), t.setAttribute("class", p), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = s.parse(t, l.difs, a, o)), a
          }
        });
        var Ie = function (t) {
          if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var e, n, i, r, s = this.t.style,
              a = o.transform.parse;
            if ("all" === this.e) s.cssText = "", r = !0;
            else
              for (e = this.e.split(" ").join("").split(","), i = e.length; --i > -1;) n = e[i], o[n] && (o[n].parse === a ? r = !0 : n = "transformOrigin" === n ? xe : o[n].p), Le(s, n);
            r && (Le(s, be), this.t._gsTransform && delete this.t._gsTransform)
          }
        };
        for (_e("clearProps", {
            parser: function (t, e, i, r, s) {
              return s = new fe(t, i, 0, 0, s, 2), s.setRatio = Ie, s.e = e, s.pr = -10, s.data = r._tween, n = !0, s
            }
          }), u = "bezier,throwProps,physicsProps,physics2D".split(","), pe = u.length; pe--;) ge(u[pe]);
        u = a.prototype, u._firstPT = null, u._onInitTween = function (t, e, o) {
          if (!t.nodeType) return !1;
          this._target = t, this._tween = o, this._vars = e, l = e.autoRound, n = !1, i = e.suffixMap || a.suffixMap, r = B(t, ""), s = this._overwriteProps;
          var u, f, p, m, _, g, v, y, b, x = t.style;
          if (c && "" === x.zIndex && (u = G(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (m = x.cssText, u = V(t, r), x.cssText = m + ";" + e, u = Z(t, u, V(t)).difs, !$ && w.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, x.cssText = m), this._firstPT = f = this.parse(t, e, null), this._transformType) {
            for (b = 3 === this._transformType, be ? h && (c = !0, "" === x.zIndex && (v = G(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(x, "zIndex", 0)), d && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : x.zoom = 1, p = f; p && p._next;) p = p._next;
            y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, p), y.setRatio = b && Te ? Ee : be ? Re : Oe, y.data = this._transform || Pe(t, r, !0), s.pop()
          }
          if (n) {
            for (; f;) {
              for (g = f._next, p = m; p && p.pr > f.pr;) p = p._next;
              (f._prev = p ? p._prev : _) ? f._prev._next = f: m = f, (f._next = p) ? p._prev = f : _ = f, f = g
            }
            this._firstPT = m
          }
          return !0
        }, u.parse = function (t, e, n, s) {
          var a, u, c, h, f, d, p, m, _, g, v = t.style;
          for (a in e) d = e[a], u = o[a], u ? n = u.parse(t, d, a, this, n, s, e) : (f = G(t, a, r) + "", _ = "string" == typeof d, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || _ && T.test(d) ? (_ || (d = oe(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), n = de(v, a, f, d, !0, "transparent", n, 0, s)) : !_ || -1 === d.indexOf(" ") && -1 === d.indexOf(",") ? (c = parseFloat(f), p = c || 0 === c ? f.substr((c + "").length) : "", ("" === f || "auto" === f) && ("width" === a || "height" === a ? (c = te(t, a, r), p = "px") : "left" === a || "top" === a ? (c = Q(t, a, r), p = "px") : (c = "opacity" !== a ? 0 : 1, p = "")), g = _ && "=" === d.charAt(1), g ? (h = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), h *= parseFloat(d), m = d.replace(y, "")) : (h = parseFloat(d), m = _ ? d.substr((h + "").length) || "" : ""), "" === m && (m = a in i ? i[a] : p), d = h || 0 === h ? (g ? h + c : h) + m : e[a], p !== m && "" !== m && (h || 0 === h) && c && (c = X(t, a, c, p), "%" === m ? (c /= X(t, a, 100, "%") / 100, e.strictUnits !== !0 && (f = c + "%")) : "em" === m ? c /= X(t, a, 1, "em") : "px" !== m && (h = X(t, a, h, m), m = "px"), g && (h || 0 === h) && (d = h + c + m)), g && (h += c), !c && 0 !== c || !h && 0 !== h ? void 0 !== v[a] && (d || d + "" != "NaN" && null != d) ? (n = new fe(v, a, h || c || 0, 0, n, -1, a, !1, 0, f, d), n.xs0 = "none" !== d || "display" !== a && -1 === a.indexOf("Style") ? d : f) : q("invalid " + a + " tween value: " + e[a]) : (n = new fe(v, a, c, h - c, n, 0, a, l !== !1 && ("px" === m || "zIndex" === a), 0, f, d), n.xs0 = m)) : n = de(v, a, f, d, !0, null, n, 0, s)), s && n && !n.plugin && (n.plugin = s);
          return n
        }, u.setRatio = function (t) {
          var e, n, i, r = this._firstPT,
            s = 1e-6;
          if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
              for (; r;) {
                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                  if (1 === r.type)
                    if (i = r.l, 2 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                    else if (3 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                else if (4 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                else if (5 === i) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                else {
                  for (n = r.xs0 + e + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                  r.t[r.p] = n
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                else r.t[r.p] = e + r.xs0;
                r = r._next
              } else
                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
            else
              for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
        }, u._enableTransforms = function (t) {
          this._transform = this._transform || Pe(this._target, r, !0), this._transformType = this._transform.svg && ve || !t && 3 !== this._transformType ? 2 : 3
        };
        var Ye = function () {
          this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        u._addLazySet = function (t, e, n) {
          var i = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
          i.e = n, i.setRatio = Ye, i.data = this
        }, u._linkCSSP = function (t, e, n, i) {
          return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, i = !0), n ? n._next = t : i || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = n), t
        }, u._kill = function (e) {
          var n, i, r, s = e;
          if (e.autoAlpha || e.alpha) {
            s = {};
            for (i in e) s[i] = e[i];
            s.opacity = 1, s.autoAlpha && (s.visibility = 1)
          }
          return e.className && (n = this._classNamePT) && (r = n.xfirst, r && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
        };
        var Fe = function (t, e, n) {
          var i, r, s, a;
          if (t.slice)
            for (r = t.length; --r > -1;) Fe(t[r], e, n);
          else
            for (i = t.childNodes, r = i.length; --r > -1;) s = i[r], a = s.type, s.style && (e.push(V(s)), n && n.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Fe(s, e, n)
        };
        return a.cascadeTo = function (t, n, i) {
          var r, s, a, o = e.to(t, n, i),
            u = [o],
            l = [],
            c = [],
            h = [],
            f = e._internals.reservedProps;
          for (t = o._targets || o.target, Fe(t, l, h), o.render(n, !0), Fe(t, c), o.render(0, !0), o._enabled(!0), r = h.length; --r > -1;)
            if (s = Z(h[r], l[r], c[r]), s.firstMPT) {
              s = s.difs;
              for (a in i) f[a] && (s[a] = i[a]);
              u.push(e.to(h[r], n, s))
            }
          return u
        }, t.activate([a]), a
      }, !0),
      function () {
        var t = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            priority: -1,
            API: 2,
            init: function (t, e, n) {
              return this._tween = n, !0
            }
          }),
          e = t.prototype;
        e._onInitAllProps = function () {
          for (var t, e, n, i = this._tween, r = i.vars.roundProps instanceof Array ? i.vars.roundProps : i.vars.roundProps.split(","), s = r.length, a = {}, o = i._propLookup.roundProps; --s > -1;) a[r[s]] = 1;
          for (s = r.length; --s > -1;)
            for (t = r[s], e = i._firstPT; e;) n = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), n && (n._prev = e._prev), e._prev ? e._prev._next = n : i._firstPT === e && (i._firstPT = n), e._next = e._prev = null, i._propLookup[t] = o), e = n;
          return !1
        }, e._add = function (t, e, n, i) {
          this._addTween(t, e, n, n + i, e, !0), this._overwriteProps.push(e)
        }
      }(), _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.3.3",
        init: function (t, e) {
          var n, i, r;
          if ("function" != typeof t.setAttribute) return !1;
          this._target = t, this._proxy = {}, this._start = {}, this._end = {};
          for (n in e) this._start[n] = this._proxy[n] = i = t.getAttribute(n), r = this._addTween(this._proxy, n, parseFloat(i), e[n], n), this._end[n] = r ? r.s + r.c : e[n], this._overwriteProps.push(n);
          return !0
        },
        set: function (t) {
          this._super.setRatio.call(this, t);
          for (var e, n = this._overwriteProps, i = n.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --i > -1;) e = n[i], this._target.setAttribute(e, r[e] + "")
        }
      }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function (t, e) {
          "object" != typeof e && (e = {
            rotation: e
          }), this.finals = {};
          var n, i, r, s, a, o, u = e.useRadians === !0 ? 2 * Math.PI : 360,
            l = 1e-6;
          for (n in e) "useRadians" !== n && (o = (e[n] + "").split("_"), i = o[0], r = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof i && "=" === i.charAt(1) ? r + parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2)) : Number(i) || 0, a = s - r, o.length && (i = o.join("_"), -1 !== i.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== i.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== i.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > l || -l > a) && (this._addTween(t, n, r, r + a, n), this._overwriteProps.push(n)));
          return !0
        },
        set: function (t) {
          var e;
          if (1 !== t) this._super.setRatio.call(this, t);
          else
            for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
      })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
        var e, n, i, r = _gsScope.GreenSockGlobals || _gsScope,
          s = r.com.greensock,
          a = 2 * Math.PI,
          o = Math.PI / 2,
          u = s._class,
          l = function (e, n) {
            var i = u("easing." + e, function () {}, !0),
              r = i.prototype = new t;
            return r.constructor = i, r.getRatio = n, i
          },
          c = t.register || function () {},
          h = function (t, e, n, i) {
            var r = u("easing." + t, {
              easeOut: new e,
              easeIn: new n,
              easeInOut: new i
            }, !0);
            return c(r, t), r
          },
          f = function (t, e, n) {
            this.t = t, this.v = e, n && (this.next = n, n.prev = this, this.c = n.v - e, this.gap = n.t - t)
          },
          d = function (e, n) {
            var i = u("easing." + e, function (t) {
                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
              }, !0),
              r = i.prototype = new t;
            return r.constructor = i, r.getRatio = n, r.config = function (t) {
              return new i(t)
            }, i
          },
          p = h("Back", d("BackOut", function (t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
          }), d("BackIn", function (t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
          }), d("BackInOut", function (t) {
            return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
          })),
          m = u("easing.SlowMo", function (t, e, n) {
            e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = n === !0
          }, !0),
          _ = m.prototype = new t;
        return _.constructor = m, _.getRatio = function (t) {
          var e = t + (.5 - t) * this._p;
          return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), _.config = m.config = function (t, e, n) {
          return new m(t, e, n)
        }, e = u("easing.SteppedEase", function (t) {
          t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), _ = e.prototype = new t, _.constructor = e, _.getRatio = function (t) {
          return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, _.config = e.config = function (t) {
          return new e(t)
        }, n = u("easing.RoughEase", function (e) {
          e = e || {};
          for (var n, i, r, s, a, o, u = e.taper || "none", l = [], c = 0, h = 0 | (e.points || 20), d = h, p = e.randomize !== !1, m = e.clamp === !0, _ = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) n = p ? Math.random() : 1 / h * d, i = _ ? _.getRatio(n) : n, "none" === u ? r = g : "out" === u ? (s = 1 - n, r = s * s * g) : "in" === u ? r = n * n * g : .5 > n ? (s = 2 * n, r = s * s * .5 * g) : (s = 2 * (1 - n), r = s * s * .5 * g), p ? i += Math.random() * r - .5 * r : d % 2 ? i += .5 * r : i -= .5 * r, m && (i > 1 ? i = 1 : 0 > i && (i = 0)), l[c++] = {
            x: n,
            y: i
          };
          for (l.sort(function (t, e) {
              return t.x - e.x
            }), o = new f(1, 1, null), d = h; --d > -1;) a = l[d], o = new f(a.x, a.y, o);
          this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
        }, !0), _ = n.prototype = new t, _.constructor = n, _.getRatio = function (t) {
          var e = this._prev;
          if (t > e.t) {
            for (; e.next && t >= e.t;) e = e.next;
            e = e.prev
          } else
            for (; e.prev && t <= e.t;) e = e.prev;
          return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, _.config = function (t) {
          return new n(t)
        }, n.ease = new n, h("Bounce", l("BounceOut", function (t) {
          return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function (t) {
          return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function (t) {
          var e = .5 > t;
          return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), h("Circ", l("CircOut", function (t) {
          return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function (t) {
          return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function (t) {
          return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), i = function (e, n, i) {
          var r = u("easing." + e, function (t, e) {
              this._p1 = t || 1, this._p2 = e || i, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0),
            s = r.prototype = new t;
          return s.constructor = r, s.getRatio = n, s.config = function (t, e) {
            return new r(t, e)
          }, r
        }, h("Elastic", i("ElasticOut", function (t) {
          return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), i("ElasticIn", function (t) {
          return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), i("ElasticInOut", function (t) {
          return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) * .5 + 1
        }, .45)), h("Expo", l("ExpoOut", function (t) {
          return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function (t) {
          return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function (t) {
          return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), h("Sine", l("SineOut", function (t) {
          return Math.sin(t * o)
        }), l("SineIn", function (t) {
          return -Math.cos(t * o) + 1
        }), l("SineInOut", function (t) {
          return -.5 * (Math.cos(Math.PI * t) - 1)
        })), u("easing.EaseLookup", {
          find: function (e) {
            return t.map[e]
          }
        }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(n, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), p
      }, !0)
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  function (t, e) {
    "use strict";
    var n = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!n.TweenLite) {
      var i, r, s, a, o, u = function (t) {
          var e, i = t.split("."),
            r = n;
          for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
          return r
        },
        l = u("com.greensock"),
        c = 1e-10,
        h = function (t) {
          var e, n = [],
            i = t.length;
          for (e = 0; e !== i; n.push(t[e++]));
          return n
        },
        f = function () {},
        d = function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (n) {
            return null != n && (n instanceof Array || "object" == typeof n && !!n.push && t.call(n) === e)
          }
        }(),
        p = {},
        m = function (i, r, s, a) {
          this.sc = p[i] ? p[i].sc : [], p[i] = this, this.gsClass = null, this.func = s;
          var o = [];
          this.check = function (l) {
            for (var c, h, f, d, _ = r.length, g = _; --_ > -1;)(c = p[r[_]] || new m(r[_], [])).gsClass ? (o[_] = c.gsClass, g--) : l && c.sc.push(this);
            if (0 === g && s)
              for (h = ("com.greensock." + i).split("."), f = h.pop(), d = u(h.join("."))[f] = this.gsClass = s.apply(s, o), a && (n[f] = d, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function () {
                  return d
                }) : i === e && "undefined" != typeof module && module.exports && (module.exports = d)), _ = 0; _ < this.sc.length; _++) this.sc[_].check()
          }, this.check(!0)
        },
        _ = t._gsDefine = function (t, e, n, i) {
          return new m(t, e, n, i)
        },
        g = l._class = function (t, e, n) {
          return e = e || function () {}, _(t, [], function () {
            return e
          }, n), e
        };
      _.globals = n;
      var v = [0, 0, 1, 1],
        y = [],
        b = g("easing.Ease", function (t, e, n, i) {
          this._func = t, this._type = n || 0, this._power = i || 0, this._params = e ? v.concat(e) : v
        }, !0),
        w = b.map = {},
        x = b.register = function (t, e, n, i) {
          for (var r, s, a, o, u = e.split(","), c = u.length, h = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
            for (s = u[c], r = i ? g("easing." + s, null, !0) : l.easing[s] || {}, a = h.length; --a > -1;) o = h[a], w[s + "." + o] = w[o + s] = r[o] = t.getRatio ? t : t[o] || new t
        };
      for (s = b.prototype, s._calcEnd = !1, s.getRatio = function (t) {
          if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
          var e = this._type,
            n = this._power,
            i = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
          return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === e ? 1 - i : 2 === e ? i : .5 > t ? i / 2 : 1 - i / 2
        }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = i.length; --r > -1;) s = i[r] + ",Power" + r, x(new b(null, null, 1, r), s, "easeOut", !0), x(new b(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), x(new b(null, null, 3, r), s, "easeInOut");
      w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
      var T = g("events.EventDispatcher", function (t) {
        this._listeners = {}, this._eventTarget = t || this
      });
      s = T.prototype, s.addEventListener = function (t, e, n, i, r) {
        r = r || 0;
        var s, u, l = this._listeners[t],
          c = 0;
        for (null == l && (this._listeners[t] = l = []), u = l.length; --u > -1;) s = l[u], s.c === e && s.s === n ? l.splice(u, 1) : 0 === c && s.pr < r && (c = u + 1);
        l.splice(c, 0, {
          c: e,
          s: n,
          up: i,
          pr: r
        }), this !== a || o || a.wake()
      }, s.removeEventListener = function (t, e) {
        var n, i = this._listeners[t];
        if (i)
          for (n = i.length; --n > -1;)
            if (i[n].c === e) return void i.splice(n, 1)
      }, s.dispatchEvent = function (t) {
        var e, n, i, r = this._listeners[t];
        if (r)
          for (e = r.length, n = this._eventTarget; --e > -1;) i = r[e], i && (i.up ? i.c.call(i.s || n, {
            type: t,
            target: n
          }) : i.c.call(i.s || n))
      };
      var k = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        C = Date.now || function () {
          return (new Date).getTime()
        },
        D = C();
      for (i = ["ms", "moz", "webkit", "o"], r = i.length; --r > -1 && !k;) k = t[i[r] + "RequestAnimationFrame"], S = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
      g("Ticker", function (t, e) {
        var n, i, r, s, u, l = this,
          h = C(),
          d = e !== !1 && k,
          p = 500,
          m = 33,
          _ = function (t) {
            var e, a, o = C() - D;
            o > p && (h += o - m), D += o, l.time = (D - h) / 1e3, e = l.time - u, (!n || e > 0 || t === !0) && (l.frame++, u += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (r = i(_)), a && l.dispatchEvent("tick")
          };
        T.call(l), l.time = l.frame = 0, l.tick = function () {
          _(!0)
        }, l.lagSmoothing = function (t, e) {
          p = t || 1 / c, m = Math.min(e, p, 0)
        }, l.sleep = function () {
          null != r && (d && S ? S(r) : clearTimeout(r), i = f, r = null, l === a && (o = !1))
        }, l.wake = function () {
          null !== r ? l.sleep() : l.frame > 10 && (D = C() - p + 5), i = 0 === n ? f : d && k ? k : function (t) {
            return setTimeout(t, 1e3 * (u - l.time) + 1 | 0)
          }, l === a && (o = !0), _(2)
        }, l.fps = function (t) {
          return arguments.length ? (n = t, s = 1 / (n || 60), u = this.time + s, void l.wake()) : n
        }, l.useRAF = function (t) {
          return arguments.length ? (l.sleep(), d = t, void l.fps(n)) : d
        }, l.fps(t), setTimeout(function () {
          d && (!r || l.frame < 5) && l.useRAF(!1)
        }, 1500)
      }), s = l.Ticker.prototype = new l.events.EventDispatcher, s.constructor = l.Ticker;
      var M = g("core.Animation", function (t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, H) {
          o || a.wake();
          var n = this.vars.useFrames ? q : H;
          n.add(this, n._time), this.vars.paused && this.paused(!0)
        }
      });
      a = M.ticker = new l.Ticker, s = M.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
      var A = function () {
        o && C() - D > 2e3 && a.wake(), setTimeout(A, 2e3)
      };
      A(), s.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
      }, s.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0)
      }, s.resume = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!1)
      }, s.seek = function (t, e) {
        return this.totalTime(Number(t), e !== !1)
      }, s.restart = function (t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
      }, s.reverse = function (t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
      }, s.render = function () {}, s.invalidate = function () {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
      }, s.isActive = function () {
        var t, e = this._timeline,
          n = this._startTime;
        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= n && t < n + this.totalDuration() / this._timeScale
      }, s._enabled = function (t, e) {
        return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
      }, s._kill = function () {
        return this._enabled(!1, !1)
      }, s.kill = function (t, e) {
        return this._kill(t, e), this
      }, s._uncache = function (t) {
        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
      }, s._swapSelfInParams = function (t) {
        for (var e = t.length, n = t.concat(); --e > -1;) "{self}" === t[e] && (n[e] = this);
        return n
      }, s.eventCallback = function (t, e, n, i) {
        if ("on" === (t || "").substr(0, 2)) {
          var r = this.vars;
          if (1 === arguments.length) return r[t];
          null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[t + "Scope"] = i), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
      }, s.delay = function (t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
      }, s.duration = function (t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
      }, s.totalDuration = function (t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
      }, s.time = function (t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
      }, s.totalTime = function (t, e, n) {
        if (o || a.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
          if (0 > t && !n && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
            this._dirty && this.totalDuration();
            var i = this._totalDuration,
              r = this._timeline;
            if (t > i && !n && (t = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
              for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
          }
          this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), j.length && U())
        }
        return this
      }, s.progress = s.totalProgress = function (t, e) {
        return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
      }, s.startTime = function (t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
      }, s.endTime = function (t) {
        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
      }, s.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
          var e = this._pauseTime,
            n = e || 0 === e ? e : this._timeline.totalTime();
          this._startTime = n - (n - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
      }, s.reversed = function (t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
      }, s.paused = function (t) {
        if (!arguments.length) return this._paused;
        if (t != this._paused && this._timeline) {
          o || t || a.wake();
          var e = this._timeline,
            n = e.rawTime(),
            i = n - this._pauseTime;
          !t && e.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? n : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
      };
      var P = g("core.SimpleTimeline", function (t) {
        M.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
      });
      s = P.prototype = new M, s.constructor = P, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function (t, e) {
        var n, i;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
          for (i = t._startTime; n && n._startTime > i;) n = n._prev;
        return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
      }, s._remove = function (t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
      }, s.render = function (t, e, n) {
        var i, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; r;) i = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, n) : r.render((t - r._startTime) * r._timeScale, e, n)), r = i
      }, s.rawTime = function () {
        return o || a.wake(), this._totalTime
      };
      var O = g("TweenLite", function (e, n, i) {
          if (M.call(this, n, i), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
          this.target = e = "string" != typeof e ? e : O.selector(e) || e;
          var r, s, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
            u = this.vars.overwrite;
          if (this._overwrite = u = null == u ? z[O.defaultOverwrite] : "number" == typeof u ? u >> 0 : z[u], (o || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
            for (this._targets = a = h(e), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++) s = a[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(h(s))) : (this._siblings[r] = W(s, this, !1), 1 === u && this._siblings[r].length > 1 && G(s, this, null, 1, this._siblings[r])) : (s = a[r--] = O.selector(s), "string" == typeof s && a.splice(r + 1, 1)) : a.splice(r--, 1);
          else this._propLookup = {}, this._siblings = W(e, this, !1), 1 === u && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
          (this.vars.immediateRender || 0 === n && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
        }, !0),
        E = function (e) {
          return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        R = function (t, e) {
          var n, i = {};
          for (n in t) $[n] || n in e && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!I[n] || I[n] && I[n]._autoCSS) || (i[n] = t[n], delete t[n]);
          t.css = i
        };
      s = O.prototype = new M, s.constructor = O, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, O.version = "1.14.2", O.defaultEase = s._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = a, O.autoSleep = !0, O.lagSmoothing = function (t, e) {
        a.lagSmoothing(t, e)
      }, O.selector = t.$ || t.jQuery || function (e) {
        var n = t.$ || t.jQuery;
        return n ? (O.selector = n, n(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
      };
      var j = [],
        L = {},
        N = O._internals = {
          isArray: d,
          isSelector: E,
          lazyTweens: j
        },
        I = O._plugins = {},
        Y = N.tweenLookup = {},
        F = 0,
        $ = N.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1
        },
        z = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          "true": 1,
          "false": 0
        },
        q = M._rootFramesTimeline = new P,
        H = M._rootTimeline = new P,
        U = N.lazyRender = function () {
          var t, e = j.length;
          for (L = {}; --e > -1;) t = j[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
          j.length = 0
        };
      H._startTime = a.time, q._startTime = a.frame, H._active = q._active = !0, setTimeout(U, 1), M._updateRoot = O.render = function () {
        var t, e, n;
        if (j.length && U(), H.render((a.time - H._startTime) * H._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), j.length && U(), !(a.frame % 120)) {
          for (n in Y) {
            for (e = Y[n].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
            0 === e.length && delete Y[n]
          }
          if (n = H._first, (!n || n._paused) && O.autoSleep && !q._first && 1 === a._listeners.tick.length) {
            for (; n && n._paused;) n = n._next;
            n || a.sleep()
          }
        }
      }, a.addEventListener("tick", M._updateRoot);
      var W = function (t, e, n) {
          var i, r, s = t._gsTweenID;
          if (Y[s || (t._gsTweenID = s = "t" + F++)] || (Y[s] = {
              target: t,
              tweens: []
            }), e && (i = Y[s].tweens, i[r = i.length] = e, n))
            for (; --r > -1;) i[r] === e && i.splice(r, 1);
          return Y[s].tweens
        },
        B = function (t, e, n, i) {
          var r, s, a = t.vars.onOverwrite;
          return a && (r = a(t, e, n, i)), a = O.onOverwrite, a && (s = a(t, e, n, i)), r !== !1 && s !== !1
        },
        G = function (t, e, n, i, r) {
          var s, a, o, u;
          if (1 === i || i >= 4) {
            for (u = r.length, s = 0; u > s; s++)
              if ((o = r[s]) !== e) o._gc || B(o, e) && o._enabled(!1, !1) && (a = !0);
              else if (5 === i) break;
            return a
          }
          var l, h = e._startTime + c,
            f = [],
            d = 0,
            p = 0 === e._duration;
          for (s = r.length; --s > -1;)(o = r[s]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || X(e, 0, p), 0 === X(o, l, p) && (f[d++] = o)) : o._startTime <= h && o._startTime + o.totalDuration() / o._timeScale > h && ((p || !o._initted) && h - o._startTime <= 2e-10 || (f[d++] = o)));
          for (s = d; --s > -1;)
            if (o = f[s], 2 === i && o._kill(n, t, e) && (a = !0), 2 !== i || !o._firstPT && o._initted) {
              if (2 !== i && !B(o, e)) continue;
              o._enabled(!1, !1) && (a = !0)
            }
          return a
        },
        X = function (t, e, n) {
          for (var i = t._timeline, r = i._timeScale, s = t._startTime; i._timeline;) {
            if (s += i._startTime, r *= i._timeScale, i._paused) return -100;
            i = i._timeline
          }
          return s /= r, s > e ? s - e : n && s === e || !t._initted && 2 * c > s - e ? c : (s += t.totalDuration() / t._timeScale / r) > e + c ? 0 : s - e - c
        };
      s._init = function () {
        var t, e, n, i, r, s = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          u = !!s.immediateRender,
          l = s.ease;
        if (s.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
          for (i in s.startAt) r[i] = s.startAt[i];
          if (r.overwrite = !1, r.immediateRender = !0, r.lazy = u && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = O.to(this.target, 0, r), u)
            if (this._time > 0) this._startAt = null;
            else if (0 !== o) return
        } else if (s.runBackwards && 0 !== o)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
          else {
            0 !== this._time && (u = !1), n = {};
            for (i in s) $[i] && "autoCSS" !== i || (n[i] = s[i]);
            if (n.overwrite = 0, n.data = "isFromStart", n.lazy = u && s.lazy !== !1, n.immediateRender = u, this._startAt = O.to(this.target, 0, n), u) {
              if (0 === this._time) return
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
          }
        if (this._ease = l = l ? l instanceof b ? l : "function" == typeof l ? new b(l, s.easeParams) : w[l] || O.defaultEase : O.defaultEase, s.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
          for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, a);
        if (e && O._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
          for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
        this._onUpdate = s.onUpdate, this._initted = !0
      }, s._initProps = function (e, n, i, r) {
        var s, a, o, u, l, c;
        if (null == e) return !1;
        L[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && I.css && this.vars.autoCSS !== !1 && R(this.vars, e);
        for (s in this.vars) {
          if (c = this.vars[s], $[s]) c && (c instanceof Array || c.push && d(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
          else if (I[s] && (u = new I[s])._onInitTween(e, this.vars[s], this)) {
            for (this._firstPT = l = {
                _next: this._firstPT,
                t: u,
                p: "setRatio",
                s: 0,
                c: 1,
                f: !0,
                n: s,
                pg: !0,
                pr: u._priority
              }, a = u._overwriteProps.length; --a > -1;) n[u._overwriteProps[a]] = this._firstPT;
            (u._priority || u._onInitAllProps) && (o = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0)
          } else this._firstPT = n[s] = l = {
            _next: this._firstPT,
            t: e,
            p: s,
            f: "function" == typeof e[s],
            n: s,
            pg: !1,
            pr: 0
          }, l.s = l.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), l.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - l.s || 0;
          l && l._next && (l._next._prev = l)
        }
        return r && this._kill(r, e) ? this._initProps(e, n, i, r) : this._overwrite > 1 && this._firstPT && i.length > 1 && G(e, this, n, this._overwrite, i) ? (this._kill(n, e), this._initProps(e, n, i, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
      }, s.render = function (t, e, n) {
        var i, r, s, a, o = this._time,
          u = this._duration,
          l = this._rawPrevTime;
        if (t >= u) this._totalTime = this._time = u, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (i = !0, r = "onComplete"), 0 === u && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === c) && l !== t && (n = !0, l > c && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : c);
        else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === u && l > 0 && l !== c) && (r = "onReverseComplete", i = this._reversed), 0 > t && (this._active = !1, 0 === u && (this._initted || !this.vars.lazy || n) && (l >= 0 && (n = !0), this._rawPrevTime = a = !e || t || l === t ? t : c)), this._initted || (n = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
          var h = t / u,
            f = this._easeType,
            d = this._easePower;
          (1 === f || 3 === f && h >= .5) && (h = 1 - h), 3 === f && (h *= 2), 1 === d ? h *= h : 2 === d ? h *= h * h : 3 === d ? h *= h * h * h : 4 === d && (h *= h * h * h * h), this.ratio = 1 === f ? 1 - h : 2 === f ? h : .5 > t / u ? h / 2 : 1 - h / 2
        } else this.ratio = this._ease.getRatio(t / u);
        if (this._time !== o || n) {
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!n && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, j.push(this), void(this._lazy = [t, e]);
            this._time && !i ? this.ratio = this._ease.getRatio(this._time / u) : i && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
          }
          for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === u) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
          this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, n), e || (this._time !== o || i) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, n), i && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === u && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
        }
      }, s._kill = function (t, e, n) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
        var i, r, s, a, o, u, l, c, h;
        if ((d(e) || E(e)) && "number" != typeof e[0])
          for (i = e.length; --i > -1;) this._kill(t, e[i]) && (u = !0);
        else {
          if (this._targets) {
            for (i = this._targets.length; --i > -1;)
              if (e === this._targets[i]) {
                o = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                break
              }
          } else {
            if (e !== this.target) return !1;
            o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
          }
          if (o) {
            if (l = t || o, c = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), n && (O.onOverwrite || this.vars.onOverwrite)) {
              for (s in l) o[s] && (h || (h = []), h.push(s));
              if (!B(this, n, e, h)) return !1
            }
            for (s in l)(a = o[s]) && (a.pg && a.t._kill(l) && (u = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), c && (r[s] = 1);
            !this._firstPT && this._initted && this._enabled(!1, !1)
          }
        }
        return u
      }, s.invalidate = function () {
        return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], M.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this
      }, s._enabled = function (t, e) {
        if (o || a.wake(), t && this._gc) {
          var n, i = this._targets;
          if (i)
            for (n = i.length; --n > -1;) this._siblings[n] = W(i[n], this, !0);
          else this._siblings = W(this.target, this, !0)
        }
        return M.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
      }, O.to = function (t, e, n) {
        return new O(t, e, n)
      }, O.from = function (t, e, n) {
        return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new O(t, e, n)
      }, O.fromTo = function (t, e, n, i) {
        return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new O(t, e, i)
      }, O.delayedCall = function (t, e, n, i, r) {
        return new O(e, 0, {
          delay: t,
          onComplete: e,
          onCompleteParams: n,
          onCompleteScope: i,
          onReverseComplete: e,
          onReverseCompleteParams: n,
          onReverseCompleteScope: i,
          immediateRender: !1,
          useFrames: r,
          overwrite: 0
        })
      }, O.set = function (t, e) {
        return new O(t, 0, e)
      }, O.getTweensOf = function (t, e) {
        if (null == t) return [];
        t = "string" != typeof t ? t : O.selector(t) || t;
        var n, i, r, s;
        if ((d(t) || E(t)) && "number" != typeof t[0]) {
          for (n = t.length, i = []; --n > -1;) i = i.concat(O.getTweensOf(t[n], e));
          for (n = i.length; --n > -1;)
            for (s = i[n], r = n; --r > -1;) s === i[r] && i.splice(n, 1)
        } else
          for (i = W(t).concat(), n = i.length; --n > -1;)(i[n]._gc || e && !i[n].isActive()) && i.splice(n, 1);
        return i
      }, O.killTweensOf = O.killDelayedCallsTo = function (t, e, n) {
        "object" == typeof e && (n = e, e = !1);
        for (var i = O.getTweensOf(t, e), r = i.length; --r > -1;) i[r]._kill(n, t)
      };
      var Q = g("plugins.TweenPlugin", function (t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
      }, !0);
      if (s = Q.prototype, Q.version = "1.10.1", Q.API = 2, s._firstPT = null, s._addTween = function (t, e, n, i, r, s) {
          var a, o;
          return null != i && (a = "number" == typeof i || "=" !== i.charAt(1) ? Number(i) - n : parseInt(i.charAt(0) + "1", 10) * Number(i.substr(2))) ? (this._firstPT = o = {
            _next: this._firstPT,
            t: t,
            p: e,
            s: n,
            c: a,
            f: "function" == typeof t[e],
            n: r || e,
            r: s
          }, o._next && (o._next._prev = o), o) : void 0
        }, s.setRatio = function (t) {
          for (var e, n = this._firstPT, i = 1e-6; n;) e = n.c * t + n.s, n.r ? e = Math.round(e) : i > e && e > -i && (e = 0), n.f ? n.t[n.p](e) : n.t[n.p] = e, n = n._next
        }, s._kill = function (t) {
          var e, n = this._overwriteProps,
            i = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else
            for (e = n.length; --e > -1;) null != t[n[e]] && n.splice(e, 1);
          for (; i;) null != t[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
          return !1
        }, s._roundProps = function (t, e) {
          for (var n = this._firstPT; n;)(t[this._propName] || null != n.n && t[n.n.split(this._propName + "_").join("")]) && (n.r = e), n = n._next
        }, O._onPluginEvent = function (t, e) {
          var n, i, r, s, a, o = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; o;) {
              for (a = o._next, i = r; i && i.pr > o.pr;) i = i._next;
              (o._prev = i ? i._prev : s) ? o._prev._next = o: r = o, (o._next = i) ? i._prev = o : s = o, o = a
            }
            o = e._firstPT = r
          }
          for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (n = !0), o = o._next;
          return n
        }, Q.activate = function (t) {
          for (var e = t.length; --e > -1;) t[e].API === Q.API && (I[(new t[e])._propName] = t[e]);
          return !0
        }, _.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
          var e, n = t.propName,
            i = t.priority || 0,
            r = t.overwriteProps,
            s = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps"
            },
            a = g("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function () {
              Q.call(this, n, i), this._overwriteProps = r || []
            }, t.global === !0),
            o = a.prototype = new Q(n);
          o.constructor = a, a.API = t.API;
          for (e in s) "function" == typeof t[e] && (o[s[e]] = t[e]);
          return a.version = t.version, Q.activate([a]), a
        }, i = t._gsQueue) {
        for (r = 0; r < i.length; r++) i[r]();
        for (s in p) p[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
      }
      o = !1
    }
  }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
  function (t, e, n, i) {
    "use strict";

    function r(t, e, n) {
      return setTimeout(c(t, n), e)
    }

    function s(t, e, n) {
      return Array.isArray(t) ? (a(t, n[e], n), !0) : !1
    }

    function a(t, e, n) {
      var r;
      if (t)
        if (t.forEach) t.forEach(e, n);
        else if (t.length !== i)
        for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
      else
        for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
    }

    function o(t, e, n) {
      for (var r = Object.keys(e), s = 0; s < r.length;)(!n || n && t[r[s]] === i) && (t[r[s]] = e[r[s]]), s++;
      return t
    }

    function u(t, e) {
      return o(t, e, !0)
    }

    function l(t, e, n) {
      var i, r = e.prototype;
      i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && o(i, n)
    }

    function c(t, e) {
      return function () {
        return t.apply(e, arguments)
      }
    }

    function h(t, e) {
      return typeof t == ce ? t.apply(e ? e[0] || i : i, e) : t
    }

    function f(t, e) {
      return t === i ? e : t
    }

    function d(t, e, n) {
      a(g(e), function (e) {
        t.addEventListener(e, n, !1)
      })
    }

    function p(t, e, n) {
      a(g(e), function (e) {
        t.removeEventListener(e, n, !1)
      })
    }

    function m(t, e) {
      for (; t;) {
        if (t == e) return !0;
        t = t.parentNode
      }
      return !1
    }

    function _(t, e) {
      return t.indexOf(e) > -1
    }

    function g(t) {
      return t.trim().split(/\s+/g)
    }

    function v(t, e, n) {
      if (t.indexOf && !n) return t.indexOf(e);
      for (var i = 0; i < t.length;) {
        if (n && t[i][n] == e || !n && t[i] === e) return i;
        i++
      }
      return -1
    }

    function y(t) {
      return Array.prototype.slice.call(t, 0)
    }

    function b(t, e, n) {
      for (var i = [], r = [], s = 0; s < t.length;) {
        var a = e ? t[s][e] : t[s];
        v(r, a) < 0 && i.push(t[s]), r[s] = a, s++
      }
      return n && (i = e ? i.sort(function (t, n) {
        return t[e] > n[e]
      }) : i.sort()), i
    }

    function w(t, e) {
      for (var n, r, s = e[0].toUpperCase() + e.slice(1), a = 0; a < ue.length;) {
        if (n = ue[a], r = n ? n + s : e, r in t) return r;
        a++
      }
      return i
    }

    function x() {
      return pe++
    }

    function T(t) {
      var e = t.ownerDocument;
      return e.defaultView || e.parentWindow
    }

    function k(t, e) {
      var n = this;
      this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
        h(t.options.enable, [t]) && n.handler(e)
      }, this.init()
    }

    function S(t) {
      var e, n = t.options.inputClass;
      return new(e = n ? n : ge ? F : ve ? q : _e ? U : Y)(t, C)
    }

    function C(t, e, n) {
      var i = n.pointers.length,
        r = n.changedPointers.length,
        s = e & ke && i - r === 0,
        a = e & (Ce | De) && i - r === 0;
      n.isFirst = !!s, n.isFinal = !!a, s && (t.session = {}), n.eventType = e, D(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
    }

    function D(t, e) {
      var n = t.session,
        i = e.pointers,
        r = i.length;
      n.firstInput || (n.firstInput = P(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = P(e) : 1 === r && (n.firstMultiple = !1);
      var s = n.firstInput,
        a = n.firstMultiple,
        o = a ? a.center : s.center,
        u = e.center = O(i);
      e.timeStamp = de(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = L(o, u), e.distance = j(o, u), M(n, e), e.offsetDirection = R(e.deltaX, e.deltaY), e.scale = a ? I(a.pointers, i) : 1, e.rotation = a ? N(a.pointers, i) : 0, A(n, e);
      var l = t.element;
      m(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
    }

    function M(t, e) {
      var n = e.center,
        i = t.offsetDelta || {},
        r = t.prevDelta || {},
        s = t.prevInput || {};
      (e.eventType === ke || s.eventType === Ce) && (r = t.prevDelta = {
        x: s.deltaX || 0,
        y: s.deltaY || 0
      }, i = t.offsetDelta = {
        x: n.x,
        y: n.y
      }), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
    }

    function A(t, e) {
      var n, r, s, a, o = t.lastInterval || e,
        u = e.timeStamp - o.timeStamp;
      if (e.eventType != De && (u > Te || o.velocity === i)) {
        var l = o.deltaX - e.deltaX,
          c = o.deltaY - e.deltaY,
          h = E(u, l, c);
        r = h.x, s = h.y, n = fe(h.x) > fe(h.y) ? h.x : h.y, a = R(l, c), t.lastInterval = e
      } else n = o.velocity, r = o.velocityX, s = o.velocityY, a = o.direction;
      e.velocity = n, e.velocityX = r, e.velocityY = s, e.direction = a
    }

    function P(t) {
      for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
        clientX: he(t.pointers[n].clientX),
        clientY: he(t.pointers[n].clientY)
      }, n++;
      return {
        timeStamp: de(),
        pointers: e,
        center: O(e),
        deltaX: t.deltaX,
        deltaY: t.deltaY
      }
    }

    function O(t) {
      var e = t.length;
      if (1 === e) return {
        x: he(t[0].clientX),
        y: he(t[0].clientY)
      };
      for (var n = 0, i = 0, r = 0; e > r;) n += t[r].clientX, i += t[r].clientY, r++;
      return {
        x: he(n / e),
        y: he(i / e)
      }
    }

    function E(t, e, n) {
      return {
        x: e / t || 0,
        y: n / t || 0
      }
    }

    function R(t, e) {
      return t === e ? Me : fe(t) >= fe(e) ? t > 0 ? Ae : Pe : e > 0 ? Oe : Ee
    }

    function j(t, e, n) {
      n || (n = Ne);
      var i = e[n[0]] - t[n[0]],
        r = e[n[1]] - t[n[1]];
      return Math.sqrt(i * i + r * r)
    }

    function L(t, e, n) {
      n || (n = Ne);
      var i = e[n[0]] - t[n[0]],
        r = e[n[1]] - t[n[1]];
      return 180 * Math.atan2(r, i) / Math.PI
    }

    function N(t, e) {
      return L(e[1], e[0], Ie) - L(t[1], t[0], Ie)
    }

    function I(t, e) {
      return j(e[0], e[1], Ie) / j(t[0], t[1], Ie)
    }

    function Y() {
      this.evEl = Fe, this.evWin = $e, this.allow = !0, this.pressed = !1, k.apply(this, arguments)
    }

    function F() {
      this.evEl = He, this.evWin = Ue, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function $() {
      this.evTarget = Be, this.evWin = Ge, this.started = !1, k.apply(this, arguments)
    }

    function z(t, e) {
      var n = y(t.touches),
        i = y(t.changedTouches);
      return e & (Ce | De) && (n = b(n.concat(i), "identifier", !0)), [n, i]
    }

    function q() {
      this.evTarget = Qe, this.targetIds = {}, k.apply(this, arguments)
    }

    function H(t, e) {
      var n = y(t.touches),
        i = this.targetIds;
      if (e & (ke | Se) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
      var r, s, a = y(t.changedTouches),
        o = [],
        u = this.target;
      if (s = n.filter(function (t) {
          return m(t.target, u)
        }), e === ke)
        for (r = 0; r < s.length;) i[s[r].identifier] = !0, r++;
      for (r = 0; r < a.length;) i[a[r].identifier] && o.push(a[r]), e & (Ce | De) && delete i[a[r].identifier], r++;
      return o.length ? [b(s.concat(o), "identifier", !0), o] : void 0
    }

    function U() {
      k.apply(this, arguments);
      var t = c(this.handler, this);
      this.touch = new q(this.manager, t), this.mouse = new Y(this.manager, t)
    }

    function W(t, e) {
      this.manager = t, this.set(e)
    }

    function B(t) {
      if (_(t, en)) return en;
      var e = _(t, nn),
        n = _(t, rn);
      return e && n ? nn + " " + rn : e || n ? e ? nn : rn : _(t, tn) ? tn : Ke
    }

    function G(t) {
      this.id = x(), this.manager = null, this.options = u(t || {}, this.defaults), this.options.enable = f(this.options.enable, !0), this.state = sn, this.simultaneous = {}, this.requireFail = []
    }

    function X(t) {
      return t & cn ? "cancel" : t & un ? "end" : t & on ? "move" : t & an ? "start" : ""
    }

    function Q(t) {
      return t == Ee ? "down" : t == Oe ? "up" : t == Ae ? "left" : t == Pe ? "right" : ""
    }

    function V(t, e) {
      var n = e.manager;
      return n ? n.get(t) : t
    }

    function Z() {
      G.apply(this, arguments)
    }

    function J() {
      Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function K() {
      Z.apply(this, arguments)
    }

    function te() {
      G.apply(this, arguments), this._timer = null, this._input = null
    }

    function ee() {
      Z.apply(this, arguments)
    }

    function ne() {
      Z.apply(this, arguments)
    }

    function ie() {
      G.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function re(t, e) {
      return e = e || {}, e.recognizers = f(e.recognizers, re.defaults.preset), new se(t, e)
    }

    function se(t, e) {
      e = e || {}, this.options = u(e, re.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = S(this), this.touchAction = new W(this, this.options.touchAction), ae(this, !0), a(e.recognizers, function (t) {
        var e = this.add(new t[0](t[1]));
        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
      }, this)
    }

    function ae(t, e) {
      var n = t.element;
      a(t.options.cssProps, function (t, i) {
        n.style[w(n.style, i)] = e ? t : ""
      })
    }

    function oe(t, n) {
      var i = e.createEvent("Event");
      i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
    }
    var ue = ["", "webkit", "moz", "MS", "ms", "o"],
      le = e.createElement("div"),
      ce = "function",
      he = Math.round,
      fe = Math.abs,
      de = Date.now,
      pe = 1,
      me = /mobile|tablet|ip(ad|hone|od)|android/i,
      _e = "ontouchstart" in t,
      ge = w(t, "PointerEvent") !== i,
      ve = _e && me.test(navigator.userAgent),
      ye = "touch",
      be = "pen",
      we = "mouse",
      xe = "kinect",
      Te = 25,
      ke = 1,
      Se = 2,
      Ce = 4,
      De = 8,
      Me = 1,
      Ae = 2,
      Pe = 4,
      Oe = 8,
      Ee = 16,
      Re = Ae | Pe,
      je = Oe | Ee,
      Le = Re | je,
      Ne = ["x", "y"],
      Ie = ["clientX", "clientY"];
    k.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(T(this.element), this.evWin, this.domHandler)
      },
      destroy: function () {
        this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(T(this.element), this.evWin, this.domHandler)
      }
    };
    var Ye = {
        mousedown: ke,
        mousemove: Se,
        mouseup: Ce
      },
      Fe = "mousedown",
      $e = "mousemove mouseup";
    l(Y, k, {
      handler: function (t) {
        var e = Ye[t.type];
        e & ke && 0 === t.button && (this.pressed = !0), e & Se && 1 !== t.which && (e = Ce), this.pressed && this.allow && (e & Ce && (this.pressed = !1), this.callback(this.manager, e, {
          pointers: [t],
          changedPointers: [t],
          pointerType: we,
          srcEvent: t
        }))
      }
    });
    var ze = {
        pointerdown: ke,
        pointermove: Se,
        pointerup: Ce,
        pointercancel: De,
        pointerout: De
      },
      qe = {
        2: ye,
        3: be,
        4: we,
        5: xe
      },
      He = "pointerdown",
      Ue = "pointermove pointerup pointercancel";
    t.MSPointerEvent && (He = "MSPointerDown", Ue = "MSPointerMove MSPointerUp MSPointerCancel"), l(F, k, {
      handler: function (t) {
        var e = this.store,
          n = !1,
          i = t.type.toLowerCase().replace("ms", ""),
          r = ze[i],
          s = qe[t.pointerType] || t.pointerType,
          a = s == ye,
          o = v(e, t.pointerId, "pointerId");
        r & ke && (0 === t.button || a) ? 0 > o && (e.push(t), o = e.length - 1) : r & (Ce | De) && (n = !0), 0 > o || (e[o] = t, this.callback(this.manager, r, {
          pointers: e,
          changedPointers: [t],
          pointerType: s,
          srcEvent: t
        }), n && e.splice(o, 1))
      }
    });
    var We = {
        touchstart: ke,
        touchmove: Se,
        touchend: Ce,
        touchcancel: De
      },
      Be = "touchstart",
      Ge = "touchstart touchmove touchend touchcancel";
    l($, k, {
      handler: function (t) {
        var e = We[t.type];
        if (e === ke && (this.started = !0), this.started) {
          var n = z.call(this, t, e);
          e & (Ce | De) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
            pointers: n[0],
            changedPointers: n[1],
            pointerType: ye,
            srcEvent: t
          })
        }
      }
    });
    var Xe = {
        touchstart: ke,
        touchmove: Se,
        touchend: Ce,
        touchcancel: De
      },
      Qe = "touchstart touchmove touchend touchcancel";
    l(q, k, {
      handler: function (t) {
        var e = Xe[t.type],
          n = H.call(this, t, e);
        n && this.callback(this.manager, e, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: ye,
          srcEvent: t
        })
      }
    }), l(U, k, {
      handler: function (t, e, n) {
        var i = n.pointerType == ye,
          r = n.pointerType == we;
        if (i) this.mouse.allow = !1;
        else if (r && !this.mouse.allow) return;
        e & (Ce | De) && (this.mouse.allow = !0), this.callback(t, e, n)
      },
      destroy: function () {
        this.touch.destroy(), this.mouse.destroy()
      }
    });
    var Ve = w(le.style, "touchAction"),
      Ze = Ve !== i,
      Je = "compute",
      Ke = "auto",
      tn = "manipulation",
      en = "none",
      nn = "pan-x",
      rn = "pan-y";
    W.prototype = {
      set: function (t) {
        t == Je && (t = this.compute()), Ze && (this.manager.element.style[Ve] = t), this.actions = t.toLowerCase().trim()
      },
      update: function () {
        this.set(this.manager.options.touchAction)
      },
      compute: function () {
        var t = [];
        return a(this.manager.recognizers, function (e) {
          h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
        }), B(t.join(" "))
      },
      preventDefaults: function (t) {
        if (!Ze) {
          var e = t.srcEvent,
            n = t.offsetDirection;
          if (this.manager.session.prevented) return void e.preventDefault();
          var i = this.actions,
            r = _(i, en),
            s = _(i, rn),
            a = _(i, nn);
          return r || s && n & Re || a && n & je ? this.preventSrc(e) : void 0
        }
      },
      preventSrc: function (t) {
        this.manager.session.prevented = !0, t.preventDefault()
      }
    };
    var sn = 1,
      an = 2,
      on = 4,
      un = 8,
      ln = un,
      cn = 16,
      hn = 32;
    G.prototype = {
      defaults: {},
      set: function (t) {
        return o(this.options, t), this.manager && this.manager.touchAction.update(), this
      },
      recognizeWith: function (t) {
        if (s(t, "recognizeWith", this)) return this;
        var e = this.simultaneous;
        return t = V(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
      },
      dropRecognizeWith: function (t) {
        return s(t, "dropRecognizeWith", this) ? this : (t = V(t, this), delete this.simultaneous[t.id], this)
      },
      requireFailure: function (t) {
        if (s(t, "requireFailure", this)) return this;
        var e = this.requireFail;
        return t = V(t, this), -1 === v(e, t) && (e.push(t), t.requireFailure(this)), this
      },
      dropRequireFailure: function (t) {
        if (s(t, "dropRequireFailure", this)) return this;
        t = V(t, this);
        var e = v(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0
      },
      canRecognizeWith: function (t) {
        return !!this.simultaneous[t.id]
      },
      emit: function (t) {
        function e(e) {
          n.manager.emit(n.options.event + (e ? X(i) : ""), t)
        }
        var n = this,
          i = this.state;
        un > i && e(!0), e(), i >= un && e(!0)
      },
      tryEmit: function (t) {
        return this.canEmit() ? this.emit(t) : void(this.state = hn)
      },
      canEmit: function () {
        for (var t = 0; t < this.requireFail.length;) {
          if (!(this.requireFail[t].state & (hn | sn))) return !1;
          t++
        }
        return !0
      },
      recognize: function (t) {
        var e = o({}, t);
        return h(this.options.enable, [this, e]) ? (this.state & (ln | cn | hn) && (this.state = sn), this.state = this.process(e), void(this.state & (an | on | un | cn) && this.tryEmit(e))) : (this.reset(), void(this.state = hn))
      },
      process: function () {},
      getTouchAction: function () {},
      reset: function () {}
    }, l(Z, G, {
      defaults: {
        pointers: 1
      },
      attrTest: function (t) {
        var e = this.options.pointers;
        return 0 === e || t.pointers.length === e
      },
      process: function (t) {
        var e = this.state,
          n = t.eventType,
          i = e & (an | on),
          r = this.attrTest(t);
        return i && (n & De || !r) ? e | cn : i || r ? n & Ce ? e | un : e & an ? e | on : an : hn
      }
    }), l(J, Z, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Le
      },
      getTouchAction: function () {
        var t = this.options.direction,
          e = [];
        return t & Re && e.push(rn), t & je && e.push(nn), e
      },
      directionTest: function (t) {
        var e = this.options,
          n = !0,
          i = t.distance,
          r = t.direction,
          s = t.deltaX,
          a = t.deltaY;
        return r & e.direction || (e.direction & Re ? (r = 0 === s ? Me : 0 > s ? Ae : Pe, n = s != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === a ? Me : 0 > a ? Oe : Ee, n = a != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
      },
      attrTest: function (t) {
        return Z.prototype.attrTest.call(this, t) && (this.state & an || !(this.state & an) && this.directionTest(t))
      },
      emit: function (t) {
        this.pX = t.deltaX, this.pY = t.deltaY;
        var e = Q(t.direction);
        e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
      }
    }), l(K, Z, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [en]
      },
      attrTest: function (t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & an)
      },
      emit: function (t) {
        if (this._super.emit.call(this, t), 1 !== t.scale) {
          var e = t.scale < 1 ? "in" : "out";
          this.manager.emit(this.options.event + e, t)
        }
      }
    }), l(te, G, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 500,
        threshold: 5
      },
      getTouchAction: function () {
        return [Ke]
      },
      process: function (t) {
        var e = this.options,
          n = t.pointers.length === e.pointers,
          i = t.distance < e.threshold,
          s = t.deltaTime > e.time;
        if (this._input = t, !i || !n || t.eventType & (Ce | De) && !s) this.reset();
        else if (t.eventType & ke) this.reset(), this._timer = r(function () {
          this.state = ln, this.tryEmit()
        }, e.time, this);
        else if (t.eventType & Ce) return ln;
        return hn
      },
      reset: function () {
        clearTimeout(this._timer)
      },
      emit: function (t) {
        this.state === ln && (t && t.eventType & Ce ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = de(), this.manager.emit(this.options.event, this._input)))
      }
    }), l(ee, Z, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function () {
        return [en]
      },
      attrTest: function (t) {
        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & an)
      }
    }), l(ne, Z, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .65,
        direction: Re | je,
        pointers: 1
      },
      getTouchAction: function () {
        return J.prototype.getTouchAction.call(this)
      },
      attrTest: function (t) {
        var e, n = this.options.direction;
        return n & (Re | je) ? e = t.velocity : n & Re ? e = t.velocityX : n & je && (e = t.velocityY), this._super.attrTest.call(this, t) && n & t.direction && t.distance > this.options.threshold && fe(e) > this.options.velocity && t.eventType & Ce
      },
      emit: function (t) {
        var e = Q(t.direction);
        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
      }
    }), l(ie, G, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 2,
        posThreshold: 10
      },
      getTouchAction: function () {
        return [tn]
      },
      process: function (t) {
        var e = this.options,
          n = t.pointers.length === e.pointers,
          i = t.distance < e.threshold,
          s = t.deltaTime < e.time;
        if (this.reset(), t.eventType & ke && 0 === this.count) return this.failTimeout();
        if (i && s && n) {
          if (t.eventType != Ce) return this.failTimeout();
          var a = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
            o = !this.pCenter || j(this.pCenter, t.center) < e.posThreshold;
          this.pTime = t.timeStamp, this.pCenter = t.center, o && a ? this.count += 1 : this.count = 1, this._input = t;
          var u = this.count % e.taps;
          if (0 === u) return this.hasRequireFailures() ? (this._timer = r(function () {
            this.state = ln, this.tryEmit()
          }, e.interval, this), an) : ln
        }
        return hn
      },
      failTimeout: function () {
        return this._timer = r(function () {
          this.state = hn
        }, this.options.interval, this), hn
      },
      reset: function () {
        clearTimeout(this._timer)
      },
      emit: function () {
        this.state == ln && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
      }
    }), re.VERSION = "2.0.4", re.defaults = {
      domEvents: !1,
      touchAction: Je,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [[ee, {
        enable: !1
      }], [K, {
        enable: !1
      }, ["rotate"]], [ne, {
        direction: Re
      }], [J, {
        direction: Re
      }, ["swipe"]], [ie], [ie, {
        event: "doubletap",
        taps: 2
      }, ["tap"]], [te]],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var fn = 1,
      dn = 2;
    se.prototype = {
      set: function (t) {
        return o(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
      },
      stop: function (t) {
        this.session.stopped = t ? dn : fn
      },
      recognize: function (t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var n, i = this.recognizers,
            r = e.curRecognizer;
          (!r || r && r.state & ln) && (r = e.curRecognizer = null);
          for (var s = 0; s < i.length;) n = i[s], e.stopped === dn || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (an | on | un) && (r = e.curRecognizer = n), s++
        }
      },
      get: function (t) {
        if (t instanceof G) return t;
        for (var e = this.recognizers, n = 0; n < e.length; n++)
          if (e[n].options.event == t) return e[n];
        return null
      },
      add: function (t) {
        if (s(t, "add", this)) return this;
        var e = this.get(t.options.event);
        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
      },
      remove: function (t) {
        if (s(t, "remove", this)) return this;
        var e = this.recognizers;
        return t = this.get(t), e.splice(v(e, t), 1), this.touchAction.update(), this
      },
      on: function (t, e) {
        var n = this.handlers;
        return a(g(t), function (t) {
          n[t] = n[t] || [], n[t].push(e)
        }), this
      },
      off: function (t, e) {
        var n = this.handlers;
        return a(g(t), function (t) {
          e ? n[t].splice(v(n[t], e), 1) : delete n[t]
        }), this
      },
      emit: function (t, e) {
        this.options.domEvents && oe(t, e);
        var n = this.handlers[t] && this.handlers[t].slice();
        if (n && n.length) {
          e.type = t, e.preventDefault = function () {
            e.srcEvent.preventDefault()
          };
          for (var i = 0; i < n.length;) n[i](e), i++
        }
      },
      destroy: function () {
        this.element && ae(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
      }
    }, o(re, {
      INPUT_START: ke,
      INPUT_MOVE: Se,
      INPUT_END: Ce,
      INPUT_CANCEL: De,
      STATE_POSSIBLE: sn,
      STATE_BEGAN: an,
      STATE_CHANGED: on,
      STATE_ENDED: un,
      STATE_RECOGNIZED: ln,
      STATE_CANCELLED: cn,
      STATE_FAILED: hn,
      DIRECTION_NONE: Me,
      DIRECTION_LEFT: Ae,
      DIRECTION_RIGHT: Pe,
      DIRECTION_UP: Oe,
      DIRECTION_DOWN: Ee,
      DIRECTION_HORIZONTAL: Re,
      DIRECTION_VERTICAL: je,
      DIRECTION_ALL: Le,
      Manager: se,
      Input: k,
      TouchAction: W,
      TouchInput: q,
      MouseInput: Y,
      PointerEventInput: F,
      TouchMouseInput: U,
      SingleTouchInput: $,
      Recognizer: G,
      AttrRecognizer: Z,
      Tap: ie,
      Pan: J,
      Swipe: ne,
      Pinch: K,
      Rotate: ee,
      Press: te,
      on: d,
      off: p,
      each: a,
      merge: u,
      extend: o,
      inherit: l,
      bindFn: c,
      prefixed: w
    }), typeof define == ce && define.amd ? define(function () {
      return re
    }) : "undefined" != typeof module && module.exports ? module.exports = re : t[n] = re
  }(window, document, "Hammer"), define_namespace("body#years_twentyfourteen", function (t) {
    function e(t) {
      if (!l) {
        var e = $(t).find("video");
        if (e.length) {
          var n = function (t) {
              var e = $("video[video-index=" + t + "]");
              if (e.length && !e.find("source:first").attr("src")) {
                var n = e.parent();
                e.find('source[type="video/mp4"]').attr("src", n.data("mp4")), e.find('source[type="video/webm"]').attr("src", n.data("webm")), e.get(0).load()
              }
            },
            i = parseInt(e.attr("video-index"), 10);
          n(i), n(i - 1), n(i + 1)
        }
      }
    }

    function n(t) {
      if (!l) {
        var e = $(t).find("video");
        e.length && setTimeout(function () {
          return e.get(0).play()
        }, 0)
      }
    }

    function i() {
      $("audio").get(0).pause(), $("video").each(function (t, e) {
        return e.pause()
      })
    }

    function r(t) {
      $(".multi-asset-animated").removeClass("multi-asset-animated");
      var e = $(t),
        n = e.find(".multi-asset");
      n.length && e.addClass("multi-asset-animated")
    }

    function s(t) {
      var e = "." + t;
      $(e + "[data-darken=true]").length ? $("body").addClass("darken") : $("body").removeClass("darken")
    }

    function a(t, e) {
      var n = new TimelineMax,
        i = t.substring(1);
      return n.eventCallback("onComplete", function () {
        e.onCompleteCallbacks.forEach(function (t) {
          return t()
        })
      }), n.eventCallback("onStart", function () {
        e.onStartCallbacks.forEach(function (t) {
          return t()
        })
      }), n.eventCallback("onReverseComplete", function () {
        e.onReverseCompleteCallbacks.forEach(function (t) {
          return t()
        })
      }), n.addLabel(i, 0), n.to(t, 0, {
        display: "block"
      }, .1), n
    }

    function o(t) {
      var e = $(t);
      return _(e.prop("className").split(" ")).find(function (t) {
        return -1 !== t.indexOf("moment-")
      })
    }

    function u(t) {
      return t.replace("moment-", "")
    }
    track("YiR/2014 Initialize");
    var l = $("body").is(".touchable"),
      c = new TimelineMax({
        paused: !0
      }),
      h = {
        goToLabel: function (t) {
          "" !== t && (c.play(t + "-pause"), h.hideTOC(), h.setActiveLabel(t))
        },
        updateHashLabel: function (t) {
          history.pushState && history.pushState(null, null, "#" + u(t))
        },
        setActiveLabel: function (t) {
          var e = $('.moments-index-list a[href="#' + u(t) + '"]');
          if (!e.length) {
            var n = a._getPreviousLabel(t);
            return void(n && h.setActiveLabel(n))
          }
          $(".moments-index-list a").removeClass("active"), e.addClass("active")
        },
        forward: function () {
          i(), h.hideTOC(), c.play()
        },
        back: function () {
          "moment-stats" !== c.currentLabel() && (i(), h.hideTOC(), c.reverse())
        },
        toggleTOC: function () {
          $(".moments-index, .moments-index-title").toggleClass("show").toggleClass("yir-hide"), h._styleToc()
        },
        hideTOC: function () {
          $(".moments-index, .moments-index-title").removeClass("show").addClass("yir-hide"), h._styleToc()
        },
        isTOCvisible: function () {
          return $(".moments-index").is(".show")
        },
        _styleToc: function () {
          h.isTOCvisible() ? ($(".view-all").text("Hide list"), $(".logo").css("opacity", 1)) : ($(".view-all").text("View list"), $(".logo").css("opacity", ""))
        }
      };
    a.create = function (t, e) {
      var n = void 0 === arguments[2] ? {} : arguments[2];
      return a[t](e, n)
    }, a.createExit = function (t, e) {
      return a[t](e)
    }, a._getPreviousLabel = function (t) {
      var e = c.getLabelBefore(c.getLabelTime(t)) || "";
      return -1 !== e.indexOf("-pause") ? a._getPreviousLabel(e) : e
    }, a._attachVideoCallbacks = function (t, i, r) {
      r.onStartCallbacks.push(function () {
        e(t)
      }), r.onCompleteCallbacks.push(function () {
        n(t)
      }), r.onReverseCompleteCallbacks.push(function () {
        i && (e(i), n(i))
      })
    }, a._attachNavCallbacks = function (t, e, n) {
      n.onStartCallbacks.push(function () {
        h.updateHashLabel(t), h.setActiveLabel(t)
      }), n.onReverseCompleteCallbacks.push(function () {
        h.updateHashLabel(e), h.setActiveLabel(e)
      })
    }, a._attachTrackingCallbacks = function (t, e, n) {
      n.onStartCallbacks.push(function () {
        track("YiR/2014 Moment Load", {
          how: "forward",
          moment_label: t
        })
      }), n.onReverseCompleteCallbacks.push(function () {
        track("YiR/2014 Moment Load", {
          how: "reverse",
          moment_label: e
        })
      })
    }, a._attachAnimationCallbacks = function (t, e, n) {
      var i = "." + t,
        s = e ? "." + e : "";
      n.onCompleteCallbacks.push(function () {
        r(i)
      }), n.onReverseCompleteCallbacks.push(function () {
        r(s)
      })
    }, a._attachStandardCallbacks = function (t, e) {
      var n = t.substring(1),
        i = a._getPreviousLabel(n);
      a._attachTrackingCallbacks(n, i, e), a._attachNavCallbacks(n, i, e), a._attachAnimationCallbacks(n, i, e);
      var r = i ? "." + i + " .asset:last" : !1;
      a._attachVideoCallbacks(t + " .asset:first", r, e), e.onStartCallbacks.push(function () {
        s(n)
      }), e.onReverseCompleteCallbacks.push(function () {
        s(i)
      })
    }, a.main = function (t, e) {
      var n = e.duration || .5;
      return a._attachStandardCallbacks(t, e), a(t, e).from(t + " .copy-1", n, {
        right: "-100%"
      }, .1).from(t + " .copy-1 .wrap", n, {
        opacity: 0
      }, .1).from(t + " .asset-1", n, {
        left: "-100%"
      }, .1)
    }, a.fadein = function (t, e) {
      var n = e.duration || .75;
      return a._attachStandardCallbacks(t, e), a(t, e).from(t + " .copy-1", n, {
        opacity: 0
      }, .1).from(t + " .copy-1 .wrap", n, {
        opacity: 0
      }, .1).from(t + " .asset-1", n, {
        opacity: 0
      }, .1)
    }, a.fadeinFinal = function (t, e) {
      var n = e.duration || .75;
      return a._attachStandardCallbacks(t, e), a(t, e).from(t + " .copy-1", n, {
        opacity: 0
      }, .1).from(t + " .copy-1 .wrap", n, {
        opacity: 0
      }, .1).from(t + " .asset-1", n, {
        opacity: 0
      }, .1).to(".trigger-forward", n, {
        opacity: 0
      }, .1).to(".trigger-forward", n, {
        display: "none"
      }, 1)
    }, a.introSlide = function (t, e) {
      var n = e.duration || .75;
      return a._attachStandardCallbacks(t, e), a(t, e).set(".trigger-backward, .view-all, .social", {
        opacity: 0
      }).set(".logo", {
        display: "none"
      }).to(".moment-intro-text", n, {
        opacity: 1
      }, .1).from(t + " .copy-1", n, {
        opacity: 0
      }, .1).from(t + " .copy-1 .wrap", n, {
        opacity: 0
      }, .1).from(t + " .asset-1", n, {
        opacity: 0
      }, .1)
    }, a.fadeinFirst = function (t, e) {
      var n = e.duration || .75;
      return a._attachStandardCallbacks(t, e), a(t, e).set(".logo", {
        display: "block"
      }).to(".moment-intro-text", n, {
        opacity: 0
      }, .1).to(".view-all, .social", n, {
        opacity: 1
      }, .1).to(".logo", n, {
        opacity: .3
      }, .1).from(".trigger-backward", n, {
        opacity: 0
      }, .1).from(t + " .copy-1", n, {
        opacity: 0
      }, .1).from(t + " .copy-1 .wrap", n, {
        opacity: 0
      }, .1).from(t + " .asset-1", n, {
        opacity: 0
      }, .1).addCallback(function () {
        $(".trigger-forward, .trigger-backward, .logo").css("opacity", "")
      })
    }, a.sub = function (t, e) {
      var n = void 0 === arguments[2] ? {} : arguments[2],
        i = n.duration || .5,
        r = e - 1;
      return a._attachVideoCallbacks(t + " .asset-" + e, t + " .asset-" + r, n), a(t, n).from(t + " .asset-" + e, i, {
        left: "-100%"
      }, 0).to(t + " .copy-" + r + " .wrap", i, {
        opacity: 0
      }, 0).from(t + " .copy-" + e + " .wrap", i, {
        opacity: 0
      }, .25)
    }, a.leave = function (t) {
      return (new TimelineMax).to(t + " .copy", .25, {
        opacity: 0
      }, 0).to(t, .25, {
        opacity: 0
      }, .5).to(t, .25, {
        display: "none"
      }, .5)
    }, a.fadeout = function (t) {
      return (new TimelineMax).to(t + " .copy", .75, {
        opacity: 0
      }, .1).to(t, .75, {
        opacity: 0
      }, .1).to(t, .75, {
        display: "none"
      }, .1).addCallback(function () {
        $(".trigger-forward, .trigger-backward").css("opacity", "")
      })
    };
    var f, d = {};
    $(".moment").each(function (t, e) {
      var n = $(e),
        i = $(".copy", n),
        r = o(e),
        s = "." + r,
        u = {
          onStartCallbacks: [],
          onCompleteCallbacks: [],
          onReverseCompleteCallbacks: []
        },
        l = n.data("enterTransition") || "main",
        h = n.data("exitTransition") || "leave";
      if (t > 0 && c.add(a.createExit(h, "." + f), r), n.data("onstart") && u.onStartCallbacks.push(d[n.data("onstart")]), c.add(a.create(l, s, u), r), c.addPause(r + "-pause"), i.length > 1)
        for (var p = 2; p <= i.length; p += 1) {
          var m = {
            onStartCallbacks: [],
            onCompleteCallbacks: [],
            onReverseCompleteCallbacks: []
          };
          c.add(a.sub(s, p, m)), c.addPause()
        }
      f = r
    });
    var p = $(".moment[data-chapter]").toArray().map(function (t) {
        return {
          chapter: $(t).data("chapter"),
          href: u(o(t))
        }
      }),
      m = $(".moments-index-list");
    if (p.forEach(function (t) {
        var e = t.href,
          n = t.chapter,
          i = $("<a>").attr("href", "#" + e).text(n);
        m.append($("<li>").append(i))
      }), $(".view-all").click(function () {
        h.toggleTOC(), track("YiR/2014 Table of contents toggle", {
          open: h.isTOCvisible()
        })
      }), $(".js-trigger-forward").on("click", function (t) {
        t.preventDefault(), h.forward(), track("YiR/2014 Next", {
          keypress: !1
        })
      }), $(".js-trigger-backward").on("click", function (t) {
        t.preventDefault(), h.back(), track("YiR/2014 Previous", {
          keypress: !1
        })
      }), $(document).keydown(function (t) {
        switch (t.which) {
        case 37:
        case 38:
          h.back(), track("YiR/2014 Previous", {
            keypress: !0
          });
          break;
        case 39:
        case 40:
          h.forward(), track("YiR/2014 Next", {
            keypress: !0
          });
          break;
        default:
          return
        }
        t.preventDefault()
      }), l) {
      var g = new Hammer(document.getElementById("years_twentyfourteen"));
      g.on("panleft", function () {
        h.isTOCvisible() || (h.forward(), track("YiR/2014 Next", {
          keypress: !1,
          swipe: !0
        }))
      }), g.on("panright", function () {
        h.isTOCvisible() || (h.back(), track("YiR/2014 Previous", {
          keypress: !1,
          swipe: !0
        }))
      })
    }
    l ? $("video").detach() : $("video").each(function (t, e) {
      $(e).attr("video-index", t)
    }), $(".moment-lou-reed button").click(function () {
      $(".moment-lou-reed audio").get(0).play()
    }), $(window).on("hashchange", function () {
      var t = window.location.hash.substring(1);
      t || (t = "intro"), t = "moment-" + t, h.goToLabel(t), s(t);
      var i = "." + t + " .asset:first";
      e(i), n(i), r("." + t), track("YiR/2014 Moment Load", {
        how: "url",
        moment_label: t
      })
    }).trigger("hashchange"), $(".copy p").each(function (t, e) {
      var n = $(e);
      n.find("span").length && (n = n.find("span:last")), n.html(n.text().replace(/\s(?=[^\s]*$)/g, "&nbsp;"))
    }), $(".asset, .multi-asset").toArray().forEach(function (t) {
      $(t).css("backgroundImage")
    }), t.find(".js-facebook-share").on("click", function (t) {
      if (t.preventDefault(), track("YiR/2014 Show Share", {
          share_type: "facebook"
        }), "undefined" != typeof FB) {
        var e = $(this).attr("href");
        FB.ui({
          method: "share",
          href: e,
          display: "popup"
        }, function (t) {
          t && "undefined" == typeof t.error_code ? (growl({
            success: I18n.t("onloads.views.years.twentyfourteen.Facebook_post_was_published")
          }), track("YiR/2014 Share", {
            share_type: "facebook"
          })) : growl({
            notice: I18n.t("onloads.views.years.twentyfourteen.Facebook_post_was_not_published")
          })
        })
      }
    }), $("video").each(function (t, e) {
      var n = $(e),
        i = n.data("aspect-ratio") || 16 / 9,
        r = $(window);
      n.parent(".asset").css("background-image", "none");
      var s;
      r.on("resize", function () {
        clearTimeout(s), s = setTimeout(a, 100)
      });
      var a = function () {
          var t = r.height(),
            e = r.width();
          0 !== n.parents(".half-spread").length && (e /= 2);
          var s = e / t,
            a = 1;
          s > i ? a = s / i : i > s && (a = i / s);
          var l = u(a, e, t);
          o(a, l)
        },
        o = function (t, e) {
          e = $.extend({
            x: 0,
            y: 0
          }, e);
          var i = "translate(" + Math.round(e.x) + "px," + Math.round(e.y) + "px) scale(" + t + ")";
          n.css({
            "-webkit-transform": i,
            transform: i
          })
        },
        u = function (t, e, r) {
          var s = parseInt(n.data("origin-x"), 10) || 50,
            a = parseInt(n.data("origin-y"), 10) || 50;
          l(s, a);
          var o = e / r,
            u = t * r,
            c = t * e,
            h = (s - 50) / 100,
            f = (a - 50) / 100,
            d = {};
          return o > i ? d.x = (c - e) * h : i > o && (d.y = (u - r) * f), d
        },
        l = function (t, e) {
          var i = t + "% " + e + "%";
          n.css({
            "-webkit-transform-origin": i,
            "transform-origin": i
          })
        };
      a()
    })
  }), instrument_function(function () {
    define_namespace("body#years_twentytwelve", function () {
      var t = $("#panel_content");
      ! function () {
        function e() {
          $(".panel").width($(window).width()), $(window).width() > 570 ? ($(".section").each(function () {
            var t = $(this);
            t.width($(window).width() * t.find(".panel").length)
          }), $("#panels").height($(window).height()), $("body").css({
            overflow: "hidden"
          })) : $("body").css({
            overflow: "visible"
          }), $(".video_big").width($(window).width()), $(".video_big").height($(this).parent(".panel").height());
          var t = 1.77864583333333;
          $(window).height() * t > $(window).width() ? ($(".video_big video").height($(window).height()), $(".video_big video").css({
            width: "auto",
            position: "absolute",
            top: "0px",
            "margin-top": "0px",
            left: "50%",
            "margin-left": -Math.round($(this).height() * t / 2)
          })) : ($(".video_big video").width($(window).width()), $(".video_big video").css({
            height: "auto",
            position: "absolute",
            left: "0px",
            "margin-left": "0px",
            top: "50%",
            "margin-top": -Math.round($(this).width() / t / 2)
          }))
        }
        var n = 0,
          i = t.find("li.panel").length,
          r = "";
        track("YiR/2012 Initialize"), t.serialScroll({
          items: "li.panel",
          lock: !1,
          cycle: !1,
          duration: 500,
          easing: "easeOutExpo"
        }), t.on("notify.serialScroll", function (e, s) {
          var a = t.find("li.panel").eq(s),
            o = a.closest(".section").attr("id");
          r = "#" + a.attr("id"), track("YiR/2012 Panel Load", {
            panel_index: s,
            panel_name: o
          }), s > 0 ? $("#arrows .next, #arrows .prev, header, footer").addClass("visible") : $("#arrows .next, #arrows .prev, header, footer").removeClass("visible"), history.pushState && (s > 0 ? history.pushState({
            page: s
          }, null, r) : history.pushState({
            page: s
          }, null, URI().hash("")));
          try {
            a.find(".video_autoplay").length ? (t.find("video")[0].pause(), a.find("video")[0].play(), a.find("video").on("ended", function () {
              try {
                $(this)[0].play()
              } catch (t) {}
            })) : t.find("video")[0].pause()
          } catch (u) {}
          $("header, footer, .next, .prev").removeClass("january february march april may june july august september october november december"), s > 0 && $("header, footer, .next, .prev").addClass(o), s === i - 1 ? ($("#arrows .next").hide(), $("footer").hide()) : 0 !== s && ($("#arrows .next").show(), $("footer").show()), $("#tile_view").find("li").removeClass("selected"), $("#tile_view").find("li[data-url=" + window.location.hash.substring(1) + "]").addClass("selected"), n = s
        }), $(window).on("hashchange", function () {
          r !== window.location.hash && (window.location.hash.length > 1 && t.find(window.location.hash).length && (n = $(window.location.hash).index("li.panel")), t.trigger("notify.serialScroll", [n]))
        }).trigger("hashchange"), e(), $(window).on("resize", function () {
          e(), t.trigger("goto", [n])
        }), $("#arrows .next, #intro .next").on("click", function (e) {
          e.preventDefault(), track("YiR/2012 Next", {
            keypress: !1
          }), t.trigger("next")
        }), $("#arrows .prev").on("click", function (e) {
          e.preventDefault(), track("YiR/2012 Previous", {
            keypress: !1
          }), t.trigger("prev")
        }), $("header h1 a").on("click", function (e) {
          e.preventDefault(), track("YiR/2012 Reset"), t.scrollTo("#intro"), t.trigger("notify.serialScroll", [0]), $("#tile_view_link").find(".ss-grid").removeClass("hide"), $("#tile_view_link").find(".ss-delete").addClass("hide"), $("#content").animate({
            marginTop: "0px"
          }, 800, "easeOutExpo", function () {
            $("body").css({
              overflow: "hidden"
            })
          })
        })
      }(), $(window).on("keydown", function (e) {
        switch (e.keyCode) {
        case KEY.LEFT:
          track("YiR/2012 Previous", {
            keypress: !0
          }), t.trigger("prev"), $(".video.video_flash").is(":visible") && t.find(".close_video").click();
          break;
        case KEY.RIGHT:
          track("YiR/2012 Next", {
            keypress: !0
          }), t.trigger("next"), $(".video.video_flash").is(":visible") && t.find(".close_video").click();
          break;
        case KEY.ESC:
          t.find(".close_video").click(), e.preventDefault()
        }
      });
      var e = $("#makey_c"),
        n = $("#makey_d"),
        i = $("#makey_e"),
        r = $("#makey_f");
      $(".makey").on("hover", function (t) {
        t.preventDefault(), track("Makey Makey Hover")
      }), $("#makey_makey #banana_c").on("hover", function (t) {
        t.preventDefault(), e.trigger("play")
      }), $("#makey_makey #banana_d").on("hover", function (t) {
        t.preventDefault(), n.trigger("play")
      }), $("#makey_makey #banana_e").on("hover", function (t) {
        t.preventDefault(), i.trigger("play")
      }), $("#makey_makey #banana_f").on("hover", function (t) {
        t.preventDefault(), r.trigger("play")
      }), $("#tile_view_link, #tile_view a").on("click", function () {
        $("#tile_view_link").find(".ss-grid").is(":visible") ? ($("#tile_view_link").find(".ss-grid").addClass("hide"), $("#tile_view_link").find(".ss-delete").removeClass("hide")) : ($("#tile_view_link").find(".ss-grid").removeClass("hide"), $("#tile_view_link").find(".ss-delete").addClass("hide")), "0px" === $("#content").css("marginTop") ? (track("YiR/2012 Tile View"), $("#content").animate({
          marginTop: "-" + $(window).height()
        }, 800, "easeOutExpo", function () {
          $("body").css({
            overflow: "visible"
          })
        })) : $("#content").animate({
          marginTop: "0px"
        }, 800, "easeOutExpo", function () {
          $("body").css({
            overflow: "hidden"
          })
        })
      }), t.find(".play").on("click touchstart", function (t) {
        var e = $(this).closest(".panel");
        t.preventDefault(), track("YiR/2012 Video Play", {
          panel: e.attr("id")
        }), $("#arrows").fadeOut(), $("header, footer").removeClass("visible"), e.find(".video").fadeIn(), e.find(".container").fadeOut("500", function () {
          e.find(".video-player").ksr_video().trigger("ksr_video:play")
        })
      }), t.find(".close_video").on("click", function (t) {
        t.preventDefault(), $(".video.video_flash").fadeOut("500", function () {
          $(".panel").find(".container").fadeIn()
        }), $(window).width() > 570 && ($("#arrows").fadeIn(), $("header, footer").addClass("visible")), $(".panel").find(".video-player").trigger("ksr_video:pause")
      }), $("footer").find("#mobile_share").on("click focus", function () {
        $("footer").toggleClass("share_visible")
      }), $("#share_url").click(function () {
        $(this).select()
      }), $("body").removeClass("loading"), history.pushState || $("header, footer").addClass("visible")
    })
  })(this);