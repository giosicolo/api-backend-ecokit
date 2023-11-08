import { Router } from "express";
const router = Router();

import { createAlquiler ,getAlquiler , getOneAlquiler , deleteAlquiler, updateAlquiler} from "../controllers/alquiler.controller";

router.post('/', createAlquiler);
router.get('/', getAlquiler);
router.get('/: alquiler_id' , getOneAlquiler);
router.delete('/:alquiler_id'  , deleteAlquiler);
router.put('/:alquiler_id', updateAlquiler);

export default router;