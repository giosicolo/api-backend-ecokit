"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _alquiler = require("../controllers/alquiler.controller");
var router = (0, _express.Router)();
router.post('/', _alquiler.createAlquiler);
router.get('/', _alquiler.getAlquiler);
router.get('/: alquiler_id', _alquiler.getOneAlquiler);
router["delete"]('/:alquiler_id', _alquiler.deleteAlquiler);
router.put('/:alquiler_id', _alquiler.updateAlquiler);
var _default = exports["default"] = router;