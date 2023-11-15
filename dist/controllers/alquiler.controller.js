"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAlquiler = createAlquiler;
exports.deleteAlquiler = deleteAlquiler;
exports.getAlquiler = getAlquiler;
exports.getAlquileresEmpresaFecha = getAlquileresEmpresaFecha;
exports.getAlquileresMesAnio = getAlquileresMesAnio;
exports.getAlquileresVigentes = getAlquileresVigentes;
exports.getAlquileresVigentesSinEmpresa = getAlquileresVigentesSinEmpresa;
exports.getMantenimientosYServiciosExtras = getMantenimientosYServiciosExtras;
exports.getOneAlquiler = getOneAlquiler;
exports.getPlantasByAlquiler = getPlantasByAlquiler;
exports.getRemitosSinPagoAlquiler = getRemitosSinPagoAlquiler;
exports.updateAlquiler = updateAlquiler;
exports.verificarRemitoDuplicado = verificarRemitoDuplicado;
var _Alquiler = _interopRequireDefault(require("../models/Alquiler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var date = require('date-and-time');
var _require = require("sequelize"),
  Op = _require.Op;
function createAlquiler(_x, _x2) {
  return _createAlquiler.apply(this, arguments);
}
function _createAlquiler() {
  _createAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, fecha_inicio, fecha_fin, monto_base, vendedor_id, empresa_id, newAlquiler;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, fecha_inicio = _req$body.fecha_inicio, fecha_fin = _req$body.fecha_fin, monto_base = _req$body.monto_base, vendedor_id = _req$body.vendedor_id, empresa_id = _req$body.empresa_id;
          _context.prev = 1;
          _context.next = 4;
          return _Alquiler["default"].create({
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            monto_base: monto_base,
            vendedor_id: vendedor_id,
            empresa_id: empresa_id
          }, {
            fields: ['fecha_inicio', 'fecha_fin', 'monto_base', 'vendedor_id', 'empresa_id']
          });
        case 4:
          newAlquiler = _context.sent;
          if (!newAlquiler) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.json({
            message: 'Alquiler created successfully',
            data: newAlquiler
          }));
        case 7:
          _context.next = 13;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
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
  return _createAlquiler.apply(this, arguments);
}
;
function getAlquiler(_x3, _x4) {
  return _getAlquiler.apply(this, arguments);
}
function _getAlquiler() {
  _getAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var alquileres;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _Alquiler["default"].findAll();
        case 3:
          alquileres = _context2.sent;
          res.json({
            data: alquileres
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
  return _getAlquiler.apply(this, arguments);
}
;
function getOneAlquiler(_x5, _x6) {
  return _getOneAlquiler.apply(this, arguments);
}
function _getOneAlquiler() {
  _getOneAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var alquiler_id, alquiler;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          alquiler_id = req.params.alquiler_id;
          _context3.next = 4;
          return _Alquiler["default"].findOne({
            where: {
              alquiler_id: alquiler_id
            }
          });
        case 4:
          alquiler = _context3.sent;
          res.json({
            data: alquiler
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
  return _getOneAlquiler.apply(this, arguments);
}
;
function deleteAlquiler(_x7, _x8) {
  return _deleteAlquiler.apply(this, arguments);
}
function _deleteAlquiler() {
  _deleteAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var alquiler_id, deleteRowCount;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          alquiler_id = req.params.alquiler_id;
          _context4.next = 3;
          return _Alquiler["default"].destroy({
            where: {
              alquiler_id: alquiler_id
            }
          });
        case 3:
          deleteRowCount = _context4.sent;
          res.json({
            message: 'Alquiler eliminado satisfactoriamente'
          });
        case 5:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _deleteAlquiler.apply(this, arguments);
}
function updateAlquiler(_x9, _x10) {
  return _updateAlquiler.apply(this, arguments);
}
function _updateAlquiler() {
  _updateAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var alquiler_id, _req$body2, fecha_inicio, fecha_fin, monto_base, vendedor_id, empresa_id, alquiler;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          alquiler_id = req.params.alquiler_id;
          _req$body2 = req.body, fecha_inicio = _req$body2.fecha_inicio, fecha_fin = _req$body2.fecha_fin, monto_base = _req$body2.monto_base, vendedor_id = _req$body2.vendedor_id, empresa_id = _req$body2.empresa_id;
          _context6.next = 4;
          return _Alquiler["default"].findAll({
            attributes: ['alquiler_id', 'fecha_inicio', 'monto_base', 'fecha_fin', 'vendedor_id', 'empresa_id'],
            where: {
              alquiler_id: alquiler_id
            }
          });
        case 4:
          alquiler = _context6.sent;
          if (alquiler.length) {
            alquiler.forEach( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(alquiler) {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return alquiler.update({
                        fecha_inicio: fecha_inicio,
                        fecha_fin: fecha_fin,
                        monto_base: monto_base,
                        vendedor_id: vendedor_id,
                        empresa_id: empresa_id
                      });
                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              }));
              return function (_x27) {
                return _ref.apply(this, arguments);
              };
            }());
          }
          ;
          return _context6.abrupt("return", res.json({
            message: 'Alquiler actualizado correctamente',
            data: alquiler
          }));
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _updateAlquiler.apply(this, arguments);
}
;
function getAlquileresVigentes(_x11, _x12) {
  return _getAlquileresVigentes.apply(this, arguments);
}
function _getAlquileresVigentes() {
  _getAlquileresVigentes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var empresa_id, alquileres;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          empresa_id = req.params.empresa_id;
          _context7.next = 3;
          return _Alquiler["default"].findAll({
            where: _defineProperty({}, Op.and, [{
              empresa_id: empresa_id
            }, {
              fecha_fin: _defineProperty({}, Op.is, null)
            }])
          });
        case 3:
          alquileres = _context7.sent;
          if (!alquileres.length) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            message: 'Alquileres Vigentes para la empresa ' + empresa_id + ' encontrados',
            data: alquileres
          }));
        case 8:
          return _context7.abrupt("return", res.status(500).json({
            message: 'NO Existen Alquileres Vigentes para la empresa ' + empresa_id,
            data: null
          }));
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _getAlquileresVigentes.apply(this, arguments);
}
;
function getAlquileresVigentesSinEmpresa(_x13, _x14) {
  return _getAlquileresVigentesSinEmpresa.apply(this, arguments);
}
function _getAlquileresVigentesSinEmpresa() {
  _getAlquileresVigentesSinEmpresa = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var empresa_id, alquileres;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          empresa_id = req.params.empresa_id;
          _context8.next = 3;
          return _Alquiler["default"].findAll({});
        case 3:
          alquileres = _context8.sent;
          if (!alquileres.length) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            message: 'Alquileres Vigentes encontrados',
            data: alquileres
          }));
        case 8:
          return _context8.abrupt("return", res.status(500).json({
            message: 'NO Existen Alquileres vigentes',
            data: null
          }));
        case 9:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _getAlquileresVigentesSinEmpresa.apply(this, arguments);
}
;
function verificarRemitoDuplicado(_x15, _x16) {
  return _verificarRemitoDuplicado.apply(this, arguments);
}
function _verificarRemitoDuplicado() {
  _verificarRemitoDuplicado = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$params, alquiler_id, fecha_ingresada, fechaIngresada, valueFechaIngresada, remitos;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$params = req.params, alquiler_id = _req$params.alquiler_id, fecha_ingresada = _req$params.fecha_ingresada;
          console.log(req.params);
          fechaIngresada = new Date(fecha_ingresada);
          fechaIngresada.setDate(fechaIngresada.getDate() + 1);
          valueFechaIngresada = date.format(fechaIngresada, 'YYYY-MM-DD');
          _context9.next = 7;
          return Remito.findAll({
            where: _defineProperty({}, Op.and, [{
              alquiler_id: alquiler_id
            }, {
              'fecha': _defineProperty({}, Op.eq, valueFechaIngresada)
            }])
          });
        case 7:
          remitos = _context9.sent;
          if (!remitos.length) {
            _context9.next = 12;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            message: 'formulario_error(402) Existen remitos asociados a este alquiler ' + alquiler_id + ' y fecha ' + valueFechaIngresada,
            data: remitos
          }));
        case 12:
          return _context9.abrupt("return", res.status(500).json({
            message: 'No hay remitos vigentes para el alquiler ' + alquiler_id + 'y fecha ' + valueFechaIngresada,
            data: null
          }));
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _verificarRemitoDuplicado.apply(this, arguments);
}
;
function getMantenimientosYServiciosExtras(_x17, _x18) {
  return _getMantenimientosYServiciosExtras.apply(this, arguments);
}
function _getMantenimientosYServiciosExtras() {
  _getMantenimientosYServiciosExtras = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$params2, alquiler_id, fecha_ingresada, fechaIngresada, valueFechaIngresada, mantenimientos, serviciosExtras, montoMantenimientos, i, montoServiciosExtras;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$params2 = req.params, alquiler_id = _req$params2.alquiler_id, fecha_ingresada = _req$params2.fecha_ingresada;
          fechaIngresada = new Date(fecha_ingresada);
          fechaIngresada.setDate(fechaIngresada.getDate() + 1);
          valueFechaIngresada = date.format(fechaIngresada, 'YYYY-MM-DD');
          _context10.next = 6;
          return Mantenimiento.findAll({
            where: _defineProperty({}, Op.and, [{
              alquiler_id: alquiler_id
            }, {
              'fecha': _defineProperty({}, Op.eq, valueFechaIngresada)
            }])
          });
        case 6:
          mantenimientos = _context10.sent;
          _context10.next = 9;
          return Servicio_extra.findAll({
            where: _defineProperty({}, Op.and, [{
              alquiler_id: alquiler_id
            }, {
              'fecha': _defineProperty({}, Op.eq, valueFechaIngresada)
            }])
          });
        case 9:
          serviciosExtras = _context10.sent;
          montoMantenimientos = 0;
          for (i = 0; i < mantenimientos.length; i++) {
            montoMantenimientos = montoMantenimientos + mantenimientos[i].monto;
          }
          montoServiciosExtras = 0;
          for (i = 0; i < serviciosExtras.length; i++) {
            montoServiciosExtras = montoServiciosExtras + serviciosExtras[i].monto;
          }
          if (!(mantenimientos.length && serviciosExtras.length)) {
            _context10.next = 18;
            break;
          }
          return _context10.abrupt("return", res.status(200).json({
            message: 'Mantenimientos y servicios extras del alquiler ' + alquiler_id + ' fecha ' + fecha_ingresada,
            data: {
              mantenimientos: mantenimientos,
              montoMantenimientos: montoMantenimientos,
              servicios_extras: serviciosExtras,
              montoServiciosExtras: montoServiciosExtras
            }
          }));
        case 18:
          return _context10.abrupt("return", res.status(500).json({
            message: 'No hay mantenimientos y servicios extras para el alquiler ' + alquiler_id + 'y fecha ' + valueFechaIngresada,
            data: null
          }));
        case 19:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _getMantenimientosYServiciosExtras.apply(this, arguments);
}
;
function getAlquileresEmpresaFecha(_x19, _x20) {
  return _getAlquileresEmpresaFecha.apply(this, arguments);
}
function _getAlquileresEmpresaFecha() {
  _getAlquileresEmpresaFecha = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$params3, empresa_id, fecha_ingresada, fechaIngresada, valueFechaIngresada, alquileres;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$params3 = req.params, empresa_id = _req$params3.empresa_id, fecha_ingresada = _req$params3.fecha_ingresada;
          fechaIngresada = new Date(fecha_ingresada);
          fechaIngresada.setDate(fechaIngresada.getDate() + 1);
          valueFechaIngresada = date.format(fechaIngresada, 'YYYY-MM-DD');
          console.log(valueFechaIngresada);
          _context11.next = 7;
          return _Alquiler["default"].findAll({
            where: _defineProperty({}, Op.and, [{
              empresa_id: empresa_id
            }, {
              'fecha_fin': _defineProperty({}, Op.eq, valueFechaIngresada) //cambiar a fecha_fin 
            }])
          });
        case 7:
          alquileres = _context11.sent;
          if (!alquileres.length) {
            _context11.next = 12;
            break;
          }
          return _context11.abrupt("return", res.status(200).json({
            message: 'Alquileres para la empresa ' + empresa_id + ' en fecha ' + valueFechaIngresada,
            data: alquileres
          }));
        case 12:
          return _context11.abrupt("return", res.status(500).json({
            message: 'NO Existen Alquileres  para la empresa ' + empresa_id + ' en fecha ' + valueFechaIngresada,
            data: null
          }));
        case 13:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _getAlquileresEmpresaFecha.apply(this, arguments);
}
;
function getRemitosSinPagoAlquiler(_x21, _x22) {
  return _getRemitosSinPagoAlquiler.apply(this, arguments);
}
function _getRemitosSinPagoAlquiler() {
  _getRemitosSinPagoAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var alquiler_id, remitos;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          alquiler_id = req.params.alquiler_id;
          _context12.next = 3;
          return Remito.findAll({
            where: _defineProperty({}, Op.and, [{
              alquiler_id: alquiler_id
            }, {
              nro_operacion_id: _defineProperty({}, Op.is, null)
            }])
          });
        case 3:
          remitos = _context12.sent;
          if (!remitos.length) {
            _context12.next = 8;
            break;
          }
          return _context12.abrupt("return", res.status(200).json({
            message: 'Remitos parael alquiler ' + alquiler_id,
            data: remitos
          }));
        case 8:
          return _context12.abrupt("return", res.status(500).json({
            message: 'NO Existen Remitos para el alquiler ' + alquiler_id,
            data: null
          }));
        case 9:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _getRemitosSinPagoAlquiler.apply(this, arguments);
}
;
function getAlquileresMesAnio(_x23, _x24) {
  return _getAlquileresMesAnio.apply(this, arguments);
}
function _getAlquileresMesAnio() {
  _getAlquileresMesAnio = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var _req$params4, mes, anio, alquileres;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _req$params4 = req.params, mes = _req$params4.mes, anio = _req$params4.anio;
          _context13.next = 3;
          return _Alquiler["default"].findAll({
            where: _defineProperty({}, Op.and, [{
              'fecha_inicio': _defineProperty({}, Op.between, ["".concat(anio, "-").concat(mes, "-01"), "".concat(anio, "-").concat(mes, "-31")])
            }, {
              'fecha_fin': _defineProperty({}, Op.between, ["".concat(anio, "-").concat(mes, "-01"), "".concat(anio, "-").concat(mes, "-31")])
            }])
          });
        case 3:
          alquileres = _context13.sent;
          if (!alquileres.length) {
            _context13.next = 8;
            break;
          }
          return _context13.abrupt("return", res.json({
            message: 'Alquileres para el mes ' + mes + ' y año ' + anio,
            data: alquileres
          }));
        case 8:
          return _context13.abrupt("return", res.json({
            message: 'Formulario_Error(402) - NO Existen Alquileres para el mes ' + mes + ' y año ' + anio,
            data: null
          }));
        case 9:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _getAlquileresMesAnio.apply(this, arguments);
}
function getPlantasByAlquiler(_x25, _x26) {
  return _getPlantasByAlquiler.apply(this, arguments);
}
function _getPlantasByAlquiler() {
  _getPlantasByAlquiler = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var alquiler_id, plantas;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          alquiler_id = req.params.alquiler_id;
          _context14.next = 3;
          return Planta.findAll({
            where: _defineProperty({}, Op.and, [{
              alquiler_id: alquiler_id
            }])
          });
        case 3:
          plantas = _context14.sent;
          if (!plantas.length) {
            _context14.next = 8;
            break;
          }
          return _context14.abrupt("return", res.json({
            message: 'Plantas para el alquiler ' + alquiler_id,
            data: plantas
          }));
        case 8:
          return _context14.abrupt("return", res.json({
            message: 'NO Existen Plantas para el alquiler ' + alquiler_id,
            data: null
          }));
        case 9:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _getPlantasByAlquiler.apply(this, arguments);
}