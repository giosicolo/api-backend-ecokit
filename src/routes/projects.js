import { Router } from "express";
const router = Router();

import { createProject , getProjects , getOneProject, deleteProject, updateProyect} from "../controllers/project.controller";

router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id' , getOneProject);
router.delete('/:id'  , deleteProject);
router.put('/:id', updateProyect);

export default router;