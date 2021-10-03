import { Router } from "express";
const router = Router();

import { createServicio_extra ,getServicio_extra , getOneServicio_extra , deleteServicio_extra} from "../controllers/servicio_extra.controller";

router.post('/',createServicio_extra );
router.get('/', getServicio_extra);
router.get('/:servicio_extra_id' , getOneServicio_extra);
router.delete('/:servicio_extra_id'  , deleteServicio_extra);
//router.put('/:remito_id',asignarCobroRemito);

export default router;