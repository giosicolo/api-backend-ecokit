import { Router } from "express";
const router = Router();

import { createCobro ,getCobro , getOneCobro , deleteCobro,} from "../controllers/cobro.controller";

router.post('/', createCobro);
router.get('/', getCobro);
router.get('/: nro_operacion_id' , getOneCobro);
router.delete('/:nro_operacion_id'  , deleteCobro);


export default router;