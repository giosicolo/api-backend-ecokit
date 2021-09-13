import { Router } from 'express'
const router = Router();

import { getVendedores, getOneVendedor } from '../controllers/vendedor.controller'

// Routes
router.get('/', getVendedores);
router.get('/:legajo_id', getOneVendedor);

export default router;