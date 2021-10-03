import { Router } from "express";
const router = Router();

import { createRemito ,getRemito , getOneRemito , deleteRemito, asignarCobroRemito} from "../controllers/remito.controller";

router.post('/', createRemito);
router.get('/', getRemito);
router.get('/: remito_id' , getOneRemito);
router.delete('/:remito_id'  , deleteRemito);
router.put('/:remito_id',asignarCobroRemito);

export default router;