"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _remito = require("../controllers/remito.controller");
var _empresa = require("../controllers/empresa.controller");
var _alquiler = require("../controllers/alquiler.controller");
var router = (0, _express.Router)();
router.post('/', _remito.createRemito);
router.get('/', _remito.getRemito);
router.get('/all', _remito.getAllRemitos);
router.get('/: remito_id', _remito.getOneRemito);
router["delete"]('/:remito_id', _remito.deleteRemito);
router.put('/:remito_id', _remito.asignarCobroRemito);

//Registrar Remito
router.get('/registrar_remito/existe_empresa/:empresa_id', _empresa.existeEmpresa);
router.get('/registrar_remito/get_alquileres_vigentes/:empresa_id', _alquiler.getAlquileresVigentes);
router.get('/registrar_remito/get_alquileres_vigentes/', _alquiler.getAlquileresVigentesSinEmpresa);
router.get('/registrar_remito/verificar_remitos_duplicados/:alquiler_id&:fecha_ingresada', _alquiler.verificarRemitoDuplicado);
router.get('/registrar_remito/get_mantenimientos_y_serv_extra/:alquiler_id&:fecha_ingresada', _alquiler.getMantenimientosYServiciosExtras);
router.post('/registrar_remito', _remito.createRemito);
//router.put('/registrar_remito/asociar_remito_alquiler', ); Se asocia el remito al alquiler en el createRemito arriba
var _default = exports["default"] = router;