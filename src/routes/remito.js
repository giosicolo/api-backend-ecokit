import { Router } from "express";
const router = Router();

import { createRemito ,getRemito , getOneRemito , deleteRemito, asignarCobroRemito} from "../controllers/remito.controller";
import { existeEmpresa } from "../controllers/empresa.controller";
import { getAlquileresVigentes,verificarRemitoDuplicado, getMantenimientosYServiciosExtras } from "../controllers/alquiler.controller";

router.post('/', createRemito);
router.get('/', getRemito);
router.get('/: remito_id' , getOneRemito);
router.delete('/:remito_id'  , deleteRemito);
router.put('/:remito_id',asignarCobroRemito);

//Registrar Remito
router.get('/registrar_remito/existe_empresa/:empresa_id', existeEmpresa);
router.get('/registrar_remito/get_alquileres_vigentes/:empresa_id', getAlquileresVigentes);
router.get('/registrar_remito/verificar_remitos_duplicados/:alquiler_id&:fecha_ingresada', verificarRemitoDuplicado);
router.get('/registrar_remito/get_mantenimientos_y_serv_extra/:alquiler_id&:fecha_ingresada', getMantenimientosYServiciosExtras);
router.post('/registrar_remito', createRemito);
//router.put('/registrar_remito/asociar_remito_alquiler', ); Se asocia el remito al alquiler en el createRemito arriba

export default router;
