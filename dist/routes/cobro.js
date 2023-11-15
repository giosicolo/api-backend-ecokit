"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cobro = require("../controllers/cobro.controller");
var _empresa = require("../controllers/empresa.controller");
var _alquiler = require("../controllers/alquiler.controller");
var _remito = require("../controllers/remito.controller");
var router = (0, _express.Router)();
router.post('/', _cobro.createCobro);
router.get('/', _cobro.getCobro);
router.get('/: nro_operacion_id', _cobro.getOneCobro);
router["delete"]('/:nro_operacion_id', _cobro.deleteCobro);

//Registrar Cobro
router.get('/registrar_cobro/verificar_empresa/:empresa_id', _empresa.existeEmpresa);
router.get('/registrar_cobro/get_alquileres_empresa_fecha/:empresa_id&:fecha_ingresada', _alquiler.getAlquileresEmpresaFecha);
router.get('/registrar_cobro/get_remito_sin_pago_alquiler/:alquiler_id', _alquiler.getRemitosSinPagoAlquiler);
router.post('/registrar_cobro', _cobro.createCobro);
router.put('/registrar_cobro/asociar_cobro_remito/:alquiler_id&:remito_id&:nro_operacion_id', _remito.asignarCobroRemito);

//router.get('/registrar_cobro/getAlquileresByEmpresaJoinRemitoSinPagoEnFecha/:empresa_id&:fecha_ingresada', getAlquileresByEmpresaJoinRemitoSinPagoEnFecha);

//Obtener cobros mensuales
router.get('/obtener_cobros_mensuales/get_alquileres_inicio_fin_en_fecha/:mes&:anio', _alquiler.getAlquileresMesAnio);
router.get('/obtener_cobros_mensuales/get_remitos_con_pago_por_alquiler_en_fecha/:alquiler_id&:mes&:anio', _remito.getRemitosByAlquiler);
router.get('/obtener_cobros_mensuales/get_plantas_por_alquiler_id/:alquiler_id', _alquiler.getPlantasByAlquiler);
router.get('/obtener_cobros_mensuales/get_servicios_y_mantenimientos_por_remito/:remito_id', _remito.getServiciosAndMantenimientosByRemito);
var _default = exports["default"] = router;