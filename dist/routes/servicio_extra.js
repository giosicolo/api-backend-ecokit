"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _servicio_extra = require("../controllers/servicio_extra.controller");
var router = (0, _express.Router)();
router.post('/', _servicio_extra.createServicio_extra);
router.get('/', _servicio_extra.getServicio_extra);
router.get('/:servicio_extra_id', _servicio_extra.getOneServicio_extra);
router["delete"]('/:servicio_extra_id', _servicio_extra.deleteServicio_extra);
//router.put('/:remito_id',asignarCobroRemito);
var _default = exports["default"] = router;