!(function (t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.geolib = n())
    : (t.geolib = n());
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    var n = {};
    function r(e) {
      if (n[e]) return n[e].exports;
      var i = (n[e] = { i: e, l: !1, exports: {} });
      return t[e].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = t),
      (r.c = n),
      (r.d = function (t, n, e) {
        r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
      }),
      (r.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (r.t = function (t, n) {
        if ((1 & n && (t = r(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (
          (r.r(e),
          Object.defineProperty(e, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var i in t)
            r.d(
              e,
              i,
              function (n) {
                return t[n];
              }.bind(null, i)
            );
        return e;
      }),
      (r.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return r.d(n, "a", n), n;
      }),
      (r.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (r.p = ""),
      r((r.s = 0))
    );
  })([
    function (t, n, r) {
      "use strict";
      r.r(n),
        r.d(n, "computeDestinationPoint", function () {
          return F;
        }),
        r.d(n, "convertArea", function () {
          return C;
        }),
        r.d(n, "convertDistance", function () {
          return k;
        }),
        r.d(n, "convertSpeed", function () {
          return T;
        }),
        r.d(n, "decimalToSexagesimal", function () {
          return R;
        }),
        r.d(n, "findNearest", function () {
          return Y;
        }),
        r.d(n, "getAreaOfDesiredArea", function () {
          return Z;
        }),
        r.d(n, "getBounds", function () {
          return G;
        }),
        r.d(n, "getBoundsOfDistance", function () {
          return V;
        }),
        r.d(n, "getCenter", function () {
          return U;
        }),
        r.d(n, "getCenterOfBounds", function () {
          return z;
        }),
        r.d(n, "getCompassDirection", function () {
          return J;
        }),
        r.d(n, "getCoordinateKey", function () {
          return m;
        }),
        r.d(n, "getCoordinateKeys", function () {
          return S;
        }),
        r.d(n, "getDistance", function () {
          return _;
        }),
        r.d(n, "getDistanceFromLine", function () {
          return Q;
        }),
        r.d(n, "getGreatCircleBearing", function () {
          return tt;
        }),
        r.d(n, "getLatitude", function () {
          return A;
        }),
        r.d(n, "getLongitude", function () {
          return I;
        }),
        r.d(n, "getPathLength", function () {
          return rt;
        }),
        r.d(n, "getPreciseDistance", function () {
          return et;
        }),
        r.d(n, "getRhumbLineBearing", function () {
          return H;
        }),
        r.d(n, "getRoughCompassDirection", function () {
          return it;
        }),
        r.d(n, "getSpeed", function () {
          return ot;
        }),
        r.d(n, "isDecimal", function () {
          return v;
        }),
        r.d(n, "isPointInLine", function () {
          return ut;
        }),
        r.d(n, "isPointInDesiredArea", function () {
          return at;
        }),
        r.d(n, "isPointNearLine", function () {
          return ct;
        }),
        r.d(n, "isPointWithinRadius", function () {
          return ft;
        }),
        r.d(n, "isSexagesimal", function () {
          return p;
        }),
        r.d(n, "isValidCoordinate", function () {
          return j;
        }),
        r.d(n, "isValidLatitude", function () {
          return N;
        }),
        r.d(n, "isValidLongitude", function () {
          return P;
        }),
        r.d(n, "orderByDistance", function () {
          return K;
        }),
        r.d(n, "sexagesimalToDecimal", function () {
          return y;
        }),
        r.d(n, "toDecimal", function () {
          return L;
        }),
        r.d(n, "toRad", function () {
          return W;
        }),
        r.d(n, "toDeg", function () {
          return D;
        }),
        r.d(n, "wktToDesiredArea", function () {
          return dt;
        }),
        r.d(n, "sexagesimalPattern", function () {
          return e;
        }),
        r.d(n, "earthRadius", function () {
          return i;
        }),
        r.d(n, "MINLAT", function () {
          return o;
        }),
        r.d(n, "MAXLAT", function () {
          return u;
        }),
        r.d(n, "MINLON", function () {
          return a;
        }),
        r.d(n, "MAXLON", function () {
          return c;
        }),
        r.d(n, "longitudeKeys", function () {
          return f;
        }),
        r.d(n, "latitudeKeys", function () {
          return s;
        }),
        r.d(n, "altitudeKeys", function () {
          return l;
        }),
        r.d(n, "distanceConversion", function () {
          return d;
        }),
        r.d(n, "timeConversion", function () {
          return h;
        }),
        r.d(n, "areaConversion", function () {
          return g;
        });
      var e =
          /^([0-9]{1,3})??\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['???]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["???]\s*)?([NEOSW]?)$/,
        i = 6378137,
        o = -90,
        u = 90,
        a = -180,
        c = 180,
        f = ["lng", "lon", "longitude", 0],
        s = ["lat", "latitude", 1],
        l = ["alt", "altitude", "elevation", "elev", 2],
        d = {
          m: 1,
          km: 0.001,
          cm: 100,
          mm: 1e3,
          mi: 1 / 1609.344,
          sm: 1 / 1852.216,
          ft: 100 / 30.48,
          in: 100 / 2.54,
          yd: 1 / 0.9144,
        },
        h = { m: 60, h: 3600, d: 86400 },
        g = {
          m2: 1,
          km2: 1e-6,
          ha: 1e-4,
          a: 0.01,
          ft2: 10.763911,
          yd2: 1.19599,
          in2: 1550.0031,
        };
      (g.sqm = g.m2),
        (g.sqkm = g.km2),
        (g.sqft = g.ft2),
        (g.sqyd = g.yd2),
        (g.sqin = g.in2);
      var m = function (t, n) {
          return n.reduce(function (n, r) {
            if (null == t)
              throw new Error("'".concat(t, "' is no valid coordinate."));
            return Object.prototype.hasOwnProperty.call(t, r) &&
              void 0 !== r &&
              void 0 === n
              ? ((n = r), r)
              : n;
          }, void 0);
        },
        v = function (t) {
          var n = t.toString().trim();
          return !isNaN(parseFloat(n)) && parseFloat(n) === Number(n);
        },
        p = function (t) {
          return e.test(t.toString().trim());
        },
        y = function (t) {
          var n = new RegExp(e).exec(t);
          if (null == n)
            throw new Error("Given value is not in sexagesimal format");
          var r = Number(n[2]) / 60 || 0,
            i = Number(n[4]) / 3600 || 0,
            o = parseFloat(n[1]) + r + i;
          return ["S", "W"].includes(n[7]) ? -o : o;
        };
      function b(t, n) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          n &&
            (e = e.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            r.push.apply(r, e);
        }
        return r;
      }
      function M(t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? b(Object(r), !0).forEach(function (n) {
                O(t, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : b(Object(r)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(r, n)
                );
              });
        }
        return t;
      }
      function O(t, n, r) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = r),
          t
        );
      }
      var S = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : { longitude: f, latitude: s, altitude: l },
            r = m(t, n.longitude),
            e = m(t, n.latitude),
            i = m(t, n.altitude);
          return M({ latitude: e, longitude: r }, i ? { altitude: i } : {});
        },
        N = function t(n) {
          return v(n) ? !(parseFloat(n) > u || n < o) : !!p(n) && t(y(n));
        },
        P = function t(n) {
          return v(n) ? !(parseFloat(n) > c || n < a) : !!p(n) && t(y(n));
        },
        j = function (t) {
          var n = S(t),
            r = n.latitude,
            e = n.longitude;
          if (Array.isArray(t) && t.length >= 2) return P(t[0]) && N(t[1]);
          if (void 0 === r || void 0 === e) return !1;
          var i = t[e],
            o = t[r];
          return void 0 !== o && void 0 !== i && !1 !== N(o) && !1 !== P(i);
        };
      function w(t, n) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          n &&
            (e = e.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            r.push.apply(r, e);
        }
        return r;
      }
      function x(t) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? w(Object(r), !0).forEach(function (n) {
                E(t, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(r, n)
                );
              });
        }
        return t;
      }
      function E(t, n, r) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = r),
          t
        );
      }
      var L = function t(n) {
          if (v(n)) return Number(n);
          if (p(n)) return y(n);
          if (j(n)) {
            var r = S(n);
            return Array.isArray(n)
              ? n.map(function (n, r) {
                  return [0, 1].includes(r) ? t(n) : n;
                })
              : x(
                  x(
                    x({}, n),
                    r.latitude && E({}, r.latitude, t(n[r.latitude]))
                  ),
                  r.longitude && E({}, r.longitude, t(n[r.longitude]))
                );
          }
          return Array.isArray(n)
            ? n.map(function (n) {
                return j(n) ? t(n) : n;
              })
            : n;
        },
        A = function (t, n) {
          var r = m(t, s);
          if (null != r) {
            var e = t[r];
            return !0 === n ? e : L(e);
          }
        },
        I = function (t, n) {
          var r = m(t, f);
          if (null != r) {
            var e = t[r];
            return !0 === n ? e : L(e);
          }
        },
        W = function (t) {
          return (t * Math.PI) / 180;
        },
        D = function (t) {
          return (180 * t) / Math.PI;
        },
        F = function (t, n, r) {
          var e =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 6371e3,
            i = A(t),
            o = I(t),
            u = n / e,
            f = W(r),
            s = W(i),
            l = W(o),
            d = Math.asin(
              Math.sin(s) * Math.cos(u) +
                Math.cos(s) * Math.sin(u) * Math.cos(f)
            ),
            h =
              l +
              Math.atan2(
                Math.sin(f) * Math.sin(u) * Math.cos(s),
                Math.cos(u) - Math.sin(s) * Math.sin(d)
              ),
            g = D(h);
          return (
            (g < a || g > c) &&
              ((h = ((h + 3 * Math.PI) % (2 * Math.PI)) - Math.PI), (g = D(h))),
            { latitude: D(d), longitude: g }
          );
        },
        C = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "m",
            r = g[n];
          if (r) return t * r;
          throw new Error("Invalid unit used for area conversion.");
        },
        k = function (t) {
          var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "m",
            r = d[n];
          if (r) return t * r;
          throw new Error("Invalid unit used for distance conversion.");
        },
        T = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "kmh";
          switch (n) {
            case "kmh":
              return t * h.h * d.km;
            case "mph":
              return t * h.h * d.mi;
            default:
              return t;
          }
        };
      function q(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
            var r = [],
              e = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var u, a = t[Symbol.iterator]();
                !(e = (u = a.next()).done) &&
                (r.push(u.value), !n || r.length !== n);
                e = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                e || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(t, n) ||
          (function (t, n) {
            if (!t) return;
            if ("string" == typeof t) return $(t, n);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return $(t, n);
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function $(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
        return e;
      }
      var B = function (t) {
          var n = Math.pow(10, 12);
          return Math.round(t * n) / n;
        },
        R = function (t) {
          var n = q(t.toString().split("."), 2),
            r = n[0],
            e = n[1],
            i = Math.abs(Number(r)),
            o = B(60 * Number("0." + (e || 0))),
            u = Math.floor(o),
            a = B(60 * (o % u || 0));
          return (
            i +
            "?? " +
            Number(u.toFixed(6))
              .toString()
              .split(".")
              .map(function (t, n) {
                return 0 === n ? t.padStart(2, "0") : t;
              })
              .join(".") +
            "' " +
            Number(a.toFixed(4))
              .toString()
              .split(".")
              .map(function (t, n) {
                return 0 === n ? t.padStart(2, "0") : t;
              })
              .join(".") +
            '"'
          );
        },
        X = function (t) {
          return t > 1 ? 1 : t < -1 ? -1 : t;
        },
        _ = function (t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          r = void 0 === r || isNaN(r) ? 1 : r;
          var e = A(t),
            o = I(t),
            u = A(n),
            a = I(n),
            c =
              Math.acos(
                X(
                  Math.sin(W(u)) * Math.sin(W(e)) +
                    Math.cos(W(u)) * Math.cos(W(e)) * Math.cos(W(o) - W(a))
                )
              ) * i;
          return Math.round(c / r) * r;
        },
        K = function (t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _;
          return (
            (r = "function" == typeof r ? r : _),
            n.slice().sort(function (n, e) {
              return r(t, n) - r(t, e);
            })
          );
        },
        Y = function (t, n) {
          return K(t, n)[0];
        },
        Z = function (t) {
          var n = 0;
          if (t.length > 2) {
            for (var r, e, o, u = 0; u < t.length; u++) {
              u === t.length - 2
                ? ((r = t.length - 2), (e = t.length - 1), (o = 0))
                : u === t.length - 1
                ? ((r = t.length - 1), (e = 0), (o = 1))
                : ((r = u), (e = u + 1), (o = u + 2));
              var a = I(t[r]),
                c = A(t[e]),
                f = I(t[o]);
              n += (W(f) - W(a)) * Math.sin(W(c));
            }
            n = (n * i * i) / 2;
          }
          return Math.abs(n);
        },
        G = function (t) {
          if (!1 === Array.isArray(t) || 0 === t.length)
            throw new Error("No points were given.");
          return t.reduce(
            function (t, n) {
              var r = A(n),
                e = I(n);
              return {
                maxLat: Math.max(r, t.maxLat),
                minLat: Math.min(r, t.minLat),
                maxLng: Math.max(e, t.maxLng),
                minLng: Math.min(e, t.minLng),
              };
            },
            { maxLat: -1 / 0, minLat: 1 / 0, maxLng: -1 / 0, minLng: 1 / 0 }
          );
        },
        V = function (t, n) {
          var r,
            e,
            f = A(t),
            s = I(t),
            l = W(f),
            d = W(s),
            h = n / i,
            g = l - h,
            m = l + h,
            v = W(u),
            p = W(o),
            y = W(c),
            b = W(a);
          if (g > p && m < v) {
            var M = Math.asin(Math.sin(h) / Math.cos(l));
            (r = d - M) < b && (r += 2 * Math.PI),
              (e = d + M) > y && (e -= 2 * Math.PI);
          } else (g = Math.max(g, p)), (m = Math.min(m, v)), (r = b), (e = y);
          return [
            { latitude: D(g), longitude: D(r) },
            { latitude: D(m), longitude: D(e) },
          ];
        },
        U = function (t) {
          if (!1 === Array.isArray(t) || 0 === t.length) return !1;
          var n = t.length,
            r = t.reduce(
              function (t, n) {
                var r = W(A(n)),
                  e = W(I(n));
                return {
                  X: t.X + Math.cos(r) * Math.cos(e),
                  Y: t.Y + Math.cos(r) * Math.sin(e),
                  Z: t.Z + Math.sin(r),
                };
              },
              { X: 0, Y: 0, Z: 0 }
            ),
            e = r.X / n,
            i = r.Y / n,
            o = r.Z / n;
          return {
            longitude: D(Math.atan2(i, e)),
            latitude: D(Math.atan2(o, Math.sqrt(e * e + i * i))),
          };
        },
        z = function (t) {
          var n = G(t),
            r = n.minLat + (n.maxLat - n.minLat) / 2,
            e = n.minLng + (n.maxLng - n.minLng) / 2;
          return {
            latitude: parseFloat(r.toFixed(6)),
            longitude: parseFloat(e.toFixed(6)),
          };
        },
        H = function (t, n) {
          var r = W(I(n)) - W(I(t)),
            e = Math.log(
              Math.tan(W(A(n)) / 2 + Math.PI / 4) /
                Math.tan(W(A(t)) / 2 + Math.PI / 4)
            );
          return (
            Math.abs(r) > Math.PI &&
              (r = r > 0 ? -1 * (2 * Math.PI - r) : 2 * Math.PI + r),
            (D(Math.atan2(r, e)) + 360) % 360
          );
        },
        J = function (t, n) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : H,
            e = "function" == typeof r ? r(t, n) : H(t, n);
          if (isNaN(e))
            throw new Error(
              "Could not calculate bearing for given points. Check your bearing function"
            );
          switch (Math.round(e / 22.5)) {
            case 1:
              return "NNE";
            case 2:
              return "NE";
            case 3:
              return "ENE";
            case 4:
              return "E";
            case 5:
              return "ESE";
            case 6:
              return "SE";
            case 7:
              return "SSE";
            case 8:
              return "S";
            case 9:
              return "SSW";
            case 10:
              return "SW";
            case 11:
              return "WSW";
            case 12:
              return "W";
            case 13:
              return "WNW";
            case 14:
              return "NW";
            case 15:
              return "NNW";
            default:
              return "N";
          }
        },
        Q = function (t, n, r) {
          var e = _(n, t),
            i = _(t, r),
            o = _(n, r),
            u = Math.acos(X((e * e + o * o - i * i) / (2 * e * o))),
            a = Math.acos(X((i * i + o * o - e * e) / (2 * i * o)));
          return u > Math.PI / 2 ? e : a > Math.PI / 2 ? i : Math.sin(u) * e;
        },
        tt = function (t, n) {
          var r = A(n),
            e = I(n),
            i = A(t),
            o = I(t);
          return (
            (D(
              Math.atan2(
                Math.sin(W(e) - W(o)) * Math.cos(W(r)),
                Math.cos(W(i)) * Math.sin(W(r)) -
                  Math.sin(W(i)) * Math.cos(W(r)) * Math.cos(W(e) - W(o))
              )
            ) +
              360) %
            360
          );
        };
      function nt(t) {
        return (nt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var rt = function (t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _;
          return t.reduce(
            function (t, r) {
              return (
                "object" === nt(t) &&
                  null !== t.last &&
                  (t.distance += n(r, t.last)),
                (t.last = r),
                t
              );
            },
            { last: null, distance: 0 }
          ).distance;
        },
        et = function (t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
          r = void 0 === r || isNaN(r) ? 1 : r;
          var e,
            o,
            u,
            a,
            c,
            f,
            s,
            l = A(t),
            d = I(t),
            h = A(n),
            g = I(n),
            m = 6356752.314245,
            v = 1 / 298.257223563,
            p = W(g - d),
            y = Math.atan((1 - v) * Math.tan(W(parseFloat(l)))),
            b = Math.atan((1 - v) * Math.tan(W(parseFloat(h)))),
            M = Math.sin(y),
            O = Math.cos(y),
            S = Math.sin(b),
            N = Math.cos(b),
            P = p,
            j = 100;
          do {
            var w = Math.sin(P),
              x = Math.cos(P);
            if (
              0 ===
              (f = Math.sqrt(
                N * w * (N * w) + (O * S - M * N * x) * (O * S - M * N * x)
              ))
            )
              return 0;
            (e = M * S + O * N * x),
              (o = Math.atan2(f, e)),
              (c = e - (2 * M * S) / (a = 1 - (u = (O * N * w) / f) * u)),
              isNaN(c) && (c = 0);
            var E = (v / 16) * a * (4 + v * (4 - 3 * a));
            (s = P),
              (P =
                p +
                (1 - E) * v * u * (o + E * f * (c + E * e * (2 * c * c - 1))));
          } while (Math.abs(P - s) > 1e-12 && --j > 0);
          if (0 === j) return NaN;
          var L = (a * (i * i - m * m)) / (m * m),
            D = 1 + (L / 16384) * (4096 + L * (L * (320 - 175 * L) - 768)),
            F = (L / 1024) * (256 + L * (L * (74 - 47 * L) - 128)),
            C =
              F *
              f *
              (c +
                (F / 4) *
                  (e * (2 * c * c - 1) -
                    (F / 6) * c * (4 * f * f - 3) * (4 * c * c - 3))),
            k = m * D * (o - C);
          return Math.round(k / r) * r;
        },
        it = function (t) {
          return /^NNE|NE|NNW|N$/.test(t)
            ? "N"
            : /^ENE|E|ESE|SE$/.test(t)
            ? "E"
            : /^SSE|S|SSW|SW$/.test(t)
            ? "S"
            : /^WSW|W|WNW|NW$/.test(t)
            ? "W"
            : void 0;
        },
        ot = function (t, n) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : _,
            e = r(t, n),
            i = Number(n.time) - Number(t.time),
            o = (e / i) * 1e3;
          return o;
        },
        ut = function (t, n, r) {
          return _(n, t) + _(t, r) === _(n, r);
        },
        at = function (t, n) {
          for (var r = !1, e = n.length, i = -1, o = e - 1; ++i < e; o = i)
            ((I(n[i]) <= I(t) && I(t) < I(n[o])) ||
              (I(n[o]) <= I(t) && I(t) < I(n[i]))) &&
              A(t) <
                ((A(n[o]) - A(n[i])) * (I(t) - I(n[i]))) / (I(n[o]) - I(n[i])) +
                  A(n[i]) &&
              (r = !r);
          return r;
        },
        ct = function (t, n, r, e) {
          return Q(t, n, r) < e;
        },
        ft = function (t, n, r) {
          return _(t, n) < r;
        };
      function st(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
            var r = [],
              e = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var u, a = t[Symbol.iterator]();
                !(e = (u = a.next()).done) &&
                (r.push(u.value), !n || r.length !== n);
                e = !0
              );
            } catch (t) {
              (i = !0), (o = t);
            } finally {
              try {
                e || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(t, n) ||
          (function (t, n) {
            if (!t) return;
            if ("string" == typeof t) return lt(t, n);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return lt(t, n);
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function lt(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
        return e;
      }
      var dt = function (t) {
        if (!t.startsWith("DesiredArea")) throw new Error("Invalid wkt.");
        return t
          .slice(t.indexOf("(") + 2, t.indexOf(")"))
          .split(", ")
          .map(function (t) {
            var n = st(t.split(" "), 2),
              r = n[0],
              e = n[1];
            return { longitude: parseFloat(r), latitude: parseFloat(e) };
          });
      };
    },
  ]);
});
