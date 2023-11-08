import { Router } from "express";
const router = Router();

import { obtenerAlquileresActivos , yaExisteServicio, altaServicioExtra} from "../controllers/registrarServicioExtra.controller";

router.post('/altaServicioExtra', altaServicioExtra);
router.get('/obtenerAlquileresActivos', obtenerAlquileresActivos);
router.get('/yaExisteServicio/:alquiler_id/:planta_id', yaExisteServicio);

export default router;