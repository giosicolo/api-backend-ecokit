const express = require('express');
const router = express.Router();
const mantenimientoController = require('../controllers/mantenimiento.controller');

router.get('/mantenimientos', mantenimientoController.obtenerTodosLosMantenimientos);

router.get('/mantenimientos/:id', mantenimientoController.obtenerMantenimientoPorId);

router.post('/mantenimientos', mantenimientoController.crearMantenimiento);

router.delete('/mantenimientos/:id', mantenimientoController.borrarMantenimientoPorId);

module.exports = router;
