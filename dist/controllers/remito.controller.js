"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asignarCobroRemito = asignarCobroRemito;
exports.createRemito = createRemito;
exports.deleteRemito = deleteRemito;
exports.getAllRemitos = getAllRemitos;
exports.getOneRemito = getOneRemito;
exports.getRemito = getRemito;
exports.getRemitosByAlquiler = getRemitosByAlquiler;
exports.getServiciosAndMantenimientosByRemito = getServiciosAndMantenimientosByRemito;
var _Cobro = _interopRequireDefault(require("../models/Cobro"));
var _Remito = _interopRequireDefault(require("../models/Remito"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function createRemito(_x, _x2) {
  return _createRemito.apply(this, arguments);
}
function _createRemito() {
  _createRemito = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, monto, conformidad, fecha, empresa_id, alquiler_id, newRemito;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, monto = _req$body.monto, conformidad = _req$body.conformidad, fecha = _req$body.fecha, empresa_id = _req$body.empresa_id, alquiler_id = _req$body.alquiler_id;
          _context.prev = 1;
          _context.next = 4;
          return _Remito["default"].create({
            monto: monto,
            conformidad: conformidad,
            fecha: fecha,
            empresa_id: empresa_id,
            alquiler_id: alquiler_id
          }, {
            fields: ['monto', 'conformidad', 'fecha', 'empresa_id', ' alquiler_id']
          });
        case 4:
          newRemito = _context.sent;
          if (!newRemito) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.json({
            message: 'Remito created successfully',
            data: newRemito
          }));
        case 7:
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(e);
          res.status(500).json({
            message: 'Something goes wrong',
            data: {}
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _createRemito.apply(this, arguments);
}
;
function getRemito(_x3, _x4) {
  return _getRemito.apply(this, arguments);
}
function _getRemito() {
  _getRemito = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var remitos;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _Remito["default"].findAll();
        case 3:
          remitos = _context2.sent;
          res.json({
            data: remitos
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getRemito.apply(this, arguments);
}
;
function getOneRemito(_x5, _x6) {
  return _getOneRemito.apply(this, arguments);
}
function _getOneRemito() {
  _getOneRemito = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var remito_id, remito;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          remito_id = req.params.remito_id;
          _context3.next = 4;
          return _Remito["default"].findOne({
            where: {
              remito_id: remito_id
            }
          });
        case 4:
          remito = _context3.sent;
          res.json({
            data: remito
          });
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOneRemito.apply(this, arguments);
}
;
function deleteRemito(_x7, _x8) {
  return _deleteRemito.apply(this, arguments);
}
function _deleteRemito() {
  _deleteRemito = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var remito_id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          remito_id = req.params.remito_id;
          _context4.next = 3;
          return _Remito["default"].destroy({
            where: {
              remito_id: remito_id
            }
          });
        case 3:
          deleteRowCount = _context4.sent;
          res.json({
            message: 'Remito eliminado satisfactoriamente'
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _deleteRemito.apply(this, arguments);
}
;
function asignarCobroRemito(_x9, _x10) {
  return _asignarCobroRemito.apply(this, arguments);
}
function _asignarCobroRemito() {
  _asignarCobroRemito = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$params, remito_id, alquiler_id, nro_operacion_id, remito;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$params = req.params, remito_id = _req$params.remito_id, alquiler_id = _req$params.alquiler_id, nro_operacion_id = _req$params.nro_operacion_id;
          _context6.next = 3;
          return _Remito["default"].findAll({
            attributes: ['alquiler_id', 'remito_id', 'nro_operacion_id'],
            where: {
              alquiler_id: alquiler_id,
              remito_id: remito_id
            }
          });
        case 3:
          remito = _context6.sent;
          if (remito.length) {
            remito.forEach( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(unRemito) {
                var unAlquilerId, unRemitoId;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      unAlquilerId = unRemito.alquiler_id;
                      unRemitoId = unRemito.remito_id;
                      _context5.next = 4;
                      return unRemito.update({
                        nro_operacion_id: nro_operacion_id
                      }, {
                        where: {
                          unAlquilerId: unAlquilerId,
                          remito_id: remito_id
                        }
                      });
                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x17) {
                return _ref.apply(this, arguments);
              };
            }());
          }
          ;
          return _context6.abrupt("return", res.status(200).json({
            message: 'Cobro asignado a Remito correctamente',
            data: remito
          }));
        case 7:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _asignarCobroRemito.apply(this, arguments);
}
;
function getRemitosByAlquiler(_x11, _x12) {
  return _getRemitosByAlquiler.apply(this, arguments);
}
function _getRemitosByAlquiler() {
  _getRemitosByAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$params2, alquiler_id, mes, anio, remitos, suma;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$params2 = req.params, alquiler_id = _req$params2.alquiler_id, mes = _req$params2.mes, anio = _req$params2.anio;
          _context7.next = 3;
          return _Remito["default"].findAll({
            where: {
              alquiler_id: alquiler_id,
              nro_operacion_id: _defineProperty({}, Op.not, null),
              'fecha': _defineProperty({}, Op.between, ["".concat(anio, "-").concat(mes, "-01"), "".concat(anio, "-").concat(mes, "-30")])
            }
          });
        case 3:
          remitos = _context7.sent;
          suma = 0;
          remitos.forEach(function (unRemito) {
            suma = suma + unRemito.monto;
          });
          res.json({
            data: remitos,
            sumatoria_monto: suma
          });
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _getRemitosByAlquiler.apply(this, arguments);
}
;
function getServiciosAndMantenimientosByRemito(_x13, _x14) {
  return _getServiciosAndMantenimientosByRemito.apply(this, arguments);
}
function _getServiciosAndMantenimientosByRemito() {
  _getServiciosAndMantenimientosByRemito = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var remito_id, servicios_extra, mantenimientos, suma_servicios, suma_mantenimientos;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          remito_id = req.params.remito_id;
          _context8.next = 3;
          return Servicios_extra.findAll({
            where: {
              remito_id: remito_id
            }
          });
        case 3:
          servicios_extra = _context8.sent;
          _context8.next = 6;
          return Mantenimiento.findAll({
            where: {
              remito_id: remito_id
            }
          });
        case 6:
          mantenimientos = _context8.sent;
          suma_servicios = 0;
          servicios_extra.forEach(function (unServicio) {
            suma_servicios = suma_servicios + unServicio.monto;
          });
          suma_mantenimientos = 0;
          mantenimientos.forEach(function (unMantenimiento) {
            suma_mantenimientos = suma_mantenimientos + unMantenimiento.monto;
          });
          res.json({
            data: {
              servicios_extra: servicios_extra,
              suma_servicios: suma_servicios,
              mantenimientos: mantenimientos,
              suma_mantenimientos: suma_mantenimientos
            }
          });
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _getServiciosAndMantenimientosByRemito.apply(this, arguments);
}
;
function getAllRemitos(_x15, _x16) {
  return _getAllRemitos.apply(this, arguments);
}
function _getAllRemitos() {
  _getAllRemitos = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var remitos;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _Remito["default"].findAll();
        case 3:
          remitos = _context9.sent;
          res.json({
            data: remitos
          });
          _context9.next = 11;
          break;
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
          res.status(500).json({
            message: 'Something went wrong',
            data: {}
          });
        case 11:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return _getAllRemitos.apply(this, arguments);
}