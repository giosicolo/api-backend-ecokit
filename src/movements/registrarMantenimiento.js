import Alquiler from '../models/Alquiler';
import moment from 'moment';
import Pertenece from '../models/Pertenece';
import Planta from '../models/Planta';
import Mantenimiento from '../models/Mantenimiento';


export async function obtenerAlquileresActivos(req, res) {
    try {
        //const { alquiler_id } = req.params;
        const { Op } = require("sequelize");
        const alquiler = await Alquiler.findAll({ 
            include: [{
                model :Pertenece,
                include: Planta
            }] , 
            where: {
                'fecha_fin' : {[Op.gt]: moment().format("YYYY-MM-DD")}
            }
        });
        res.json({
            data: alquiler
        });
    } catch (error) {
        console.log(error);
    }
};


//ESTA FUNCION ES PARA VERIFICAR SI EN UNA PLANTA ESPECIFICA DEL ALQUILER QUE ELEGIMOS ANTERIORMENTE
//YA SE LE HIZO MANTENIMIENTO EN EL DIA DE LA FECHA
export async function yaExisteMantenimiento(req, res){
    try {
        const { alquiler_id , planta_id  } = req.params;
        const { Op } = require("sequelize");
        const servicio_extra = await Mantenimiento.findAndCountAll({
            where: {
                'fecha' :  moment().format("YYYY-MM-DD"),
                alquiler_id,
                planta_id 
            }
        });
        res.json({
            message: 'MANTENIMIENTOS en ALQUILER ' + alquiler_id + ' para la PLANTA ' + planta_id  + ' EN LA FECHA DE HOY',
            data: servicio_extra.count
        });
    } catch (error) {
        console.log(error);
    }
}

export async function altaMantenimiento(req, res) {
    const {mantenimiento_id, fecha, monto, descripcion , planta_id , alquiler_id } = req.body;
    try {
        let newMantenimiento = await Mantenimiento.create({ 
            mantenimiento_id,
            fecha,
            duracion,
            observaciones,
            hora,
            planta_id,
            alquiler_id
            
        }, {
            fields: [ 'mantenimiento_id' ,'fecha', 'duracion', 'observaciones' , 'hora' ,'descripcion' , 'planta_id' , 'alquiler_id' ]
        })
        if (newMantenimiento) {
            return res.json({
                message: 'Mantenimiento Creado',
                data: newServicio
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


