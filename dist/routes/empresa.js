"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _empresa = require("../controllers/empresa.controller");
var router = (0, _express.Router)();
router.post('/', _empresa.createEmpresa);
router.get('/', _empresa.getEmpresas);
router.get('/:empresa_id', _empresa.getOneEmpresa);
router["delete"]('/:empresa_id', _empresa.deleteEmpresa);
router.put('/:empresa_id', _empresa.updateEmpresa);
var _default = exports["default"] = router;