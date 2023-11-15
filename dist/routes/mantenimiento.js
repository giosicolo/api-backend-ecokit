"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _mantenimiento = require("../controllers/mantenimiento.controller");
var router = (0, _express.Router)();
router.post('/', _mantenimiento.createMantenimiento);
router.get('/', _mantenimiento.getMantenimientos);
router.get('/:mantenimiento_id', _mantenimiento.getOneMantenimiento);
router["delete"]('/:mantenimiento_id', _mantenimiento.deleteMantenimiento);
router.put('/:mantenimiento_id', _mantenimiento.updateMantenimiento);
var _default = exports["default"] = router;