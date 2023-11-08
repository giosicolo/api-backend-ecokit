import { Router } from "express";
const router = Router();

import {crearAlquiler,cambiarDisponibilidadPlantaOcupada ,actualizarContactoEmpresa, obtenerPlantasPermanentesParaAsignar, obtenerPlantasMovilesParaAsignar, obtenerVendedores, obtenerEmpresasConYacimiento } from "../controllers/altaAlquiler.controller";

router.get('/obtenerEmpresasConYacimiento', obtenerEmpresasConYacimiento);
router.get('/obtenerVendedores', obtenerVendedores);
router.get('/obtenerPlantasMovilesParaAsignar/:nroPlantas/:capacidad', obtenerPlantasMovilesParaAsignar);
router.get('/obtenerPlantasPermanentesParaAsignar/:nroPlantas/:capacidad', obtenerPlantasPermanentesParaAsignar);
router.put('/actualizarContactoEmpresa/:empresa_id' , actualizarContactoEmpresa);
router.put('/cambiarDisponibilidadPlanta/:planta_id' , cambiarDisponibilidadPlantaOcupada);
router.post('/crearAlquiler', crearAlquiler);


//Esquema del Alquiler 
/**
 * @swagger
 *  components:
 *      schemas:
 *          Alquiler:
 *              type: object
 *              properties:               
 *                  alquiler_id:
 *                      type: integer
 *                  fecha_inicio:
 *                      type: date
 *                  fecha_fin:
 *                      type: date 
 *                  monto_base:
 *                      type: integer
 *                  vendedor_id:
 *                      type: integer
 *                  empresa_id:
 *                      type: integer
 *              required:
 *                  -fecha_inicio
 *                  -fecha_fin
 *                  -monto_base
 *                  -vendedor_id
 *                  -empresa_id
 *              example:
 *                  fecha_inicio: 2020/05/05
 *                  fecha_fin: 2021/06/07
 *                  monto_base: 46000
 *                  vendedor_id: 5
 *                  empresa_id: 10
 *  */ 

/**
 * @swagger 
 * /api/altaAlquiler/crearAlquiler:
 *  post:
 *      summary: Crea un nuevo alquiler en la BD
 *      tags: [Alquiler]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Alquiler'
 *      responses:
 *          200:
 *              description: Nuevo alquiler creado exitosamente
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Alquiler'
 *          500: 
 *              description: Error en los parametros ingresados
 * 
 * */






export default router;