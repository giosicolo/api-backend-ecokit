"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _registrarServicioExtra = require("../controllers/registrarServicioExtra.controller");
var router = (0, _express.Router)();
router.post('/altaServicioExtra', _registrarServicioExtra.altaServicioExtra);
router.get('/obtenerAlquileresActivos', _registrarServicioExtra.obtenerAlquileresActivos);
router.get('/yaExisteServicio/:alquiler_id/:planta_id', _registrarServicioExtra.yaExisteServicio);
var _default = exports["default"] = router;