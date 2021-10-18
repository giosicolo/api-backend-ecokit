import { Router } from "express";
const router = Router();

import { obtenerAlquileresActivos , yaExisteServicio, altaServicioExtra} from "../movements/registrarServicioExtra";

router.post('/altaServicioExtra', altaServicioExtra);
router.get('/obtenerAlquileresActivos', obtenerAlquileresActivos);
router.get('/yaExisteServicio/:alquiler_id/:planta_id', yaExisteServicio);
//router.get('/: remito_id' , getOneRemito);
//router.delete('/:remito_id'  , deleteRemito);
//router.put('/:remito_id',asignarCobroRemito);

export default router;