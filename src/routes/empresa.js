import { Router } from "express";
const router = Router();

import { createEmpresa , updateEmpresa , getEmpresas , getOneEmpresa , deleteEmpresa } from "../controllers/empresa.controller";

router.post('/', createEmpresa);
router.get('/', getEmpresas);
router.get('/:empresa_id' , getOneEmpresa);
router.delete('/:empresa_id'  , deleteEmpresa);
router.put('/:empresa_id', updateEmpresa);

export default router;