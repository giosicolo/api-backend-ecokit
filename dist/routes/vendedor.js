"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _vendedor = require("../controllers/vendedor.controller");
var router = (0, _express.Router)();
// Routes
router.get('/', _vendedor.getVendedores);
router.get('/:legajo_id', _vendedor.getOneVendedor);
var _default = exports["default"] = router;