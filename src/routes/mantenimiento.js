import { Router } from "express";
const router = Router();

import { createMantenimiento, deleteMantenimiento , getMantenimientos , getOneMantenimiento, updateMantenimiento} from "../controllers/mantenimiento.controller";

router.post('/',createMantenimiento );
router.get('/', getMantenimientos);
router.get('/:mantenimiento_id' , getOneMantenimiento);
router.delete('/:mantenimiento_id'  , deleteMantenimiento);
router.put('/:mantenimiento_id',updateMantenimiento);

export default router;