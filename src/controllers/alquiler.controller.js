const date = require('date-and-time');
const { Op } = require("sequelize");
import Alquiler from '../models/Alquiler';



export async function createAlquiler(req, res) {
    const { fecha_inicio, fecha_fin, monto_base, vendedor_id , empresa_id } = req.body;
    try {
        let newAlquiler = await Alquiler.create({
            fecha_inicio,
            fecha_fin,
            monto_base,
            vendedor_id,
            empresa_id
        }, {
            fields: ['fecha_inicio', 'fecha_fin', 'monto_base', 'vendedor_id', 'empresa_id']
        })
        if (newAlquiler) {
            return res.json({
                message: 'Alquiler created successfully',
                data: newAlquiler
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

};

export async function getAlquiler(req, res) {
    try {
        const alquileres = await Alquiler.findAll();
        res.json({
            data: alquileres
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneAlquiler(req, res) {
    try {
        const { alquiler_id } = req.params;
        const alquiler = await Alquiler.findOne({
            where: {
                alquiler_id
            }
        });
        res.json({
            data: alquiler
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteAlquiler(req, res) {
    const { alquiler_id } = req.params;
    const deleteRowCount = await Alquiler.destroy({
        where: {
            alquiler_id
        }
    });
    res.json({
        message: 'Alquiler eliminado satisfactoriamente'
    })
}

export async function updateAlquiler(req, res) {
    const { alquiler_id } = req.params;
    const { fecha_inicio, fecha_fin, monto_base, vendedor_id , empresa_id } = req.body;

    const alquiler = await Alquiler.findAll({
        attributes: ['alquiler_id', 'fecha_inicio','monto_base', 'fecha_fin', 'vendedor_id', 'empresa_id'],
        where: { alquiler_id }
    });

    if (alquiler.length) {
        alquiler.forEach(async alquiler => {
            await alquiler.update({
                fecha_inicio,
                fecha_fin,
                monto_base,
                vendedor_id,
                empresa_id
            })
        });
    };

    return res.json({
        message: 'Alquiler actualizado correctamente',
        data: alquiler
    });
};

export async function getAlquileresVigentes(req, res) {
    const {empresa_id } = req.params;

       const alquileres = await Alquiler.findAll({
        where: {
            [Op.and]: [
                { empresa_id },
                 { fecha_fin:{
                    [Op.is]: null
                    }
                }
            ]
            }
        });

        if(alquileres.length){
            return res.status(200).json({
                message: 'Alquileres Vigentes para la empresa '+empresa_id+' encontrados',
                data: alquileres
            });
        }else{
            return res.status(500).json({
                message: 'NO Existen Alquileres Vigentes para la empresa '+empresa_id,
                data: null
            });        }

    
};

export async function verificarRemitoDuplicado(req, res) {
    const { alquiler_id, fecha_ingresada } = req.params;

    console.log(req.params)
    var fechaIngresada=new Date(fecha_ingresada);
    fechaIngresada.setDate(fechaIngresada.getDate() + 1);

    const valueFechaIngresada = date.format(fechaIngresada,'YYYY-MM-DD');

    const remitos = await Remito.findAll({
        where: {
            [Op.and]: [
                { alquiler_id },
                {'fecha' : {[Op.eq]: valueFechaIngresada}
            }]
            }
        });

        if(remitos.length){
            //Notificar error Existen remitos asociados a este alquiler y fecha
            //formulario_error(402)
            return res.status(200).json({
                message: 'formulario_error(402) Existen remitos asociados a este alquiler '+alquiler_id+' y fecha '+valueFechaIngresada,
                data: remitos
            });  

        }else{
            return res.status(500).json({
                message: 'No hay remitos vigentes para el alquiler '+alquiler_id+'y fecha '+valueFechaIngresada,
                data: null
            });       
         }

    
}

;

export async function getMantenimientosYServiciosExtras(req, res) {
    const { alquiler_id, fecha_ingresada } = req.params;

    var fechaIngresada=new Date(fecha_ingresada);
    fechaIngresada.setDate(fechaIngresada.getDate() + 1);

    const valueFechaIngresada = date.format(fechaIngresada,'YYYY-MM-DD');

       const mantenimientos = await Mantenimiento.findAll({
        where: {
            [Op.and]: [
                { alquiler_id },
                {'fecha' : {[Op.eq]: valueFechaIngresada}
            }]
            }
        });

        const serviciosExtras = await Servicio_extra.findAll({
            where: {
                [Op.and]: [
                    { alquiler_id },
                    {'fecha' : {[Op.eq]: valueFechaIngresada}
                }]
                }
            });


            var montoMantenimientos=0;
            for(var i=0;i<mantenimientos.length;i++){
                montoMantenimientos=montoMantenimientos+mantenimientos[i].monto;
            }

            var montoServiciosExtras=0;
            for(var i=0;i<serviciosExtras.length;i++){
                montoServiciosExtras=montoServiciosExtras+serviciosExtras[i].monto;
            }


            if(mantenimientos.length && serviciosExtras.length){
                return res.status(200).json({
                    message: 'Mantenimientos y servicios extras del alquiler '+alquiler_id+' fecha '+fecha_ingresada,
                    data: {mantenimientos: mantenimientos,montoMantenimientos:montoMantenimientos, servicios_extras: serviciosExtras,montoServiciosExtras:montoServiciosExtras}
                
                }); 
            }else{
                return res.status(500).json({
                    message: 'No hay mantenimientos y servicios extras para el alquiler '+alquiler_id+'y fecha '+valueFechaIngresada,
                    data: null
                });       
            }   

              
    
};

export async function getAlquileresEmpresaFecha(req, res) {
    const { empresa_id ,fecha_ingresada} = req.params;

    var fechaIngresada=new Date(fecha_ingresada);
    fechaIngresada.setDate(fechaIngresada.getDate() + 1);

    const valueFechaIngresada = date.format(fechaIngresada,'YYYY-MM-DD');

    console.log(valueFechaIngresada)
    const alquileres = await Alquiler.findAll({
        where: {
            [Op.and]: [
                { empresa_id },
                {'fecha_fin' : {[Op.eq]: valueFechaIngresada}//cambiar a fecha_fin 
                }
            ]
            }
        });

        if(alquileres.length){
            return res.status(200).json({
                message: 'Alquileres para la empresa '+empresa_id+' en fecha '+valueFechaIngresada,
                data: alquileres
            });
        }else{
            return res.status(500).json({
                message: 'NO Existen Alquileres  para la empresa '+empresa_id+' en fecha '+valueFechaIngresada,
                data: null
            });        
        }

};

export async function getRemitosSinPagoAlquiler(req, res) {
    const { alquiler_id } = req.params;

  
    const remitos = await Remito.findAll({
        where: {
            [Op.and]: [
                { alquiler_id },
                { nro_operacion_id:{
                    [Op.is]: null
                        }
                }
            ]
            }
        });

        if(remitos.length){
            return res.status(200).json({
                message: 'Remitos parael alquiler '+alquiler_id,
                data: remitos
            });
        }else{
            return res.status(500).json({
                message: 'NO Existen Remitos para el alquiler '+alquiler_id,
                data: null
            });        
        }

};

export async function getAlquileresMesAnio(req, res) {
    const { mes, anio } = req.params;

    const alquileres = await Alquiler.findAll({
        where: {
            [Op.and]: [
                {'fecha_inicio' : {
                    [Op.between]: [`${anio}-${mes}-01`,`${anio}-${mes}-31`]}
                },
                { 'fecha_fin':{
                    [Op.between]: [`${anio}-${mes}-01`,`${anio}-${mes}-31`]}
                }
            ]
            }
        });

        if(alquileres.length){
            return res.json({
                message: 'Alquileres para el mes '+mes+' y año '+anio,
                data: alquileres
            });
        }else{
            return res.json({
                message: 'Formulario_Error(402) - NO Existen Alquileres para el mes '+mes+' y año '+anio,
                data: null
            });        
        }

}


export async function getPlantasByAlquiler(req, res) {
    const { alquiler_id } = req.params;

    const plantas = await Planta.findAll({
        where: {
            [Op.and]: [
                { alquiler_id }
            ]
            }
        });

        if(plantas.length){
            return res.json({
                message: 'Plantas para el alquiler '+alquiler_id,
                data: plantas
            });
        }else{
            return res.json({
                message: 'NO Existen Plantas para el alquiler '+alquiler_id,
                data: null
            });        
        }

}






