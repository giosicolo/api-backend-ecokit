"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _registrarMantenimiento = require("../controllers/registrarMantenimiento.controller");
var router = (0, _express.Router)();
router.post('/altaMantenimiento', _registrarMantenimiento.altaMantenimiento);
router.get('/obtenerAlquileresActivos', _registrarMantenimiento.obtenerAlquileresActivos);
router.get('/yaExisteServicio/:alquiler_id/:planta_id', _registrarMantenimiento.yaExisteServicio);
var _default = exports["default"] = router;