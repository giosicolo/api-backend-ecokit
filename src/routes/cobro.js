import { Router } from "express";
const router = Router();

import { createCobro ,getCobro , getOneCobro , deleteCobro,} from "../controllers/cobro.controller";
import { existeEmpresa} from "../controllers/empresa.controller";
import { getAlquileresEmpresaFecha,getRemitosSinPagoAlquiler,getAlquileresMesAnio,getPlantasByAlquiler,getAlquileresByEmpresaJoinRemitoSinPagoEnFecha} from "../controllers/alquiler.controller";
import { asignarCobroRemito,getRemitosByAlquiler,getServiciosAndMantenimientosByRemito} from "../controllers/remito.controller";


router.post('/', createCobro);
router.get('/', getCobro);
router.get('/: nro_operacion_id' , getOneCobro);
router.delete('/:nro_operacion_id'  , deleteCobro);

//Registrar Cobro
router.get('/registrar_cobro/verificar_empresa/:empresa_id', existeEmpresa);
router.get('/registrar_cobro/get_alquileres_empresa_fecha/:empresa_id&:fecha_ingresada', getAlquileresEmpresaFecha);
router.get('/registrar_cobro/get_remito_sin_pago_alquiler/:alquiler_id', getRemitosSinPagoAlquiler);
router.post('/registrar_cobro', createCobro);
router.put('/registrar_cobro/asociar_cobro_remito/:alquiler_id&:remito_id&:nro_operacion_id', asignarCobroRemito);

//router.get('/registrar_cobro/getAlquileresByEmpresaJoinRemitoSinPagoEnFecha/:empresa_id&:fecha_ingresada', getAlquileresByEmpresaJoinRemitoSinPagoEnFecha);


//Obtener cobros mensuales
router.get('/obtener_cobros_mensuales/get_alquileres_inicio_fin_en_fecha/:mes&:anio',getAlquileresMesAnio)
router.get('/obtener_cobros_mensuales/get_remitos_con_pago_por_alquiler_en_fecha/:alquiler_id&:mes&:anio',getRemitosByAlquiler)
router.get('/obtener_cobros_mensuales/get_plantas_por_alquiler_id/:alquiler_id',getPlantasByAlquiler)
router.get('/obtener_cobros_mensuales/get_servicios_y_mantenimientos_por_remito/:remito_id',getServiciosAndMantenimientosByRemito)

export default router;