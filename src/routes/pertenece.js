import { Router } from "express";
const router = Router();

import { createPertenece , getPertenece, getPerteneceConAlquiler, getPerteneceConAlquileryPlanta} from "../controllers/pertenece.controller";

router.post('/', createPertenece);
router.get('/', getPerteneceConAlquiler);
//router.get('/', getPertenece);
/*router.get('/: remito_id' , getOneRemito);
router.delete('/:remito_id'  , deleteRemito);
router.put('/:remito_id',asignarCobroRemito);
*/

export default router;