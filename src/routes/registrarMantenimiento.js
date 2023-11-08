import { Router } from "express";
const router = Router();

import { obtenerAlquileresActivos, yaExisteServicio, altaMantenimiento } from "../controllers/registrarMantenimiento.controller";

router.post('/altaMantenimiento', altaMantenimiento);
router.get('/obtenerAlquileresActivos', obtenerAlquileresActivos);
router.get('/yaExisteServicio/:alquiler_id/:planta_id', yaExisteServicio);

export default router;