"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _alquiler = _interopRequireDefault(require("./routes/alquiler"));
var _vendedor = _interopRequireDefault(require("./routes/vendedor"));
var _cobro = _interopRequireDefault(require("./routes/cobro"));
var _remito = _interopRequireDefault(require("./routes/remito"));
var _pertenece = _interopRequireDefault(require("./routes/pertenece"));
var _servicio_extra = _interopRequireDefault(require("./routes/servicio_extra"));
var _empresa = _interopRequireDefault(require("./routes/empresa"));
var _registrarServicioExtra = _interopRequireDefault(require("./routes/registrarServicioExtra"));
var _mantenimiento = _interopRequireDefault(require("./routes/mantenimiento"));
var _altaAlquiler = _interopRequireDefault(require("./routes/altaAlquiler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Importar rutas

var generator = require('./index.js');
var path = require('path');
var cors = require('cors');
var app = (0, _express["default"])();
var expressOasGenerator = require('express-oas-generator');

//middlewares
expressOasGenerator.handleResponses(app, {});
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:5173'],
  credentials: true
}));

//rutas
app.use('/api/alquiler', _alquiler["default"]);
app.use('/api/vendedor', _vendedor["default"]);
app.use('/api/cobro', _cobro["default"]);
app.use('/api/remito', _remito["default"]);
app.use('/api/pertenece', _pertenece["default"]);
app.use('/api/servicio_extra', _servicio_extra["default"]);
app.use('/api/empresa', _empresa["default"]);
app.use('/api/mantenimiento', _mantenimiento["default"]);
app.use('/api/registrarServicioExtra', _registrarServicioExtra["default"]);
app.use('/api/altaAlquiler', _altaAlquiler["default"]);
expressOasGenerator.handleRequests();
var _default = exports["default"] = app;