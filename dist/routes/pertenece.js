"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _pertenece = require("../controllers/pertenece.controller");
var router = (0, _express.Router)();
router.post('/', _pertenece.createPertenece);
router.get('/', _pertenece.getPerteneceConAlquiler);
//router.get('/', getPertenece);
/*router.get('/: remito_id' , getOneRemito);
router.delete('/:remito_id'  , deleteRemito);
router.put('/:remito_id',asignarCobroRemito);
*/
var _default = exports["default"] = router;