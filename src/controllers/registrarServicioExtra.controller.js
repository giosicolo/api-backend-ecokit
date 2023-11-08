import Alquiler from '../models/Alquiler';
import moment from 'moment';
import Servicio_extra from '../models/Servicio_extra';
import Pertenece from '../models/Pertenece';
import Planta from '../models/Planta';

export async function obtenerAlquileresActivos(req, res) {
    try {
        //const { alquiler_id } = req.params;
        const { Op } = require("sequelize");
        const alquiler = await Alquiler.findAll({
            include: [{
                model: Pertenece,
                include: Planta
            }],
            where: {
                'fecha_fin': { [Op.gt]: moment().format("YYYY-MM-DD") }
            }
        });
        return res.status(200).json({
            data: alquiler
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudieron obtener los alquileres Activos',
            data: null
        });
    }
};

export async function yaExisteServicio(req, res) {
    try {
        const { alquiler_id, planta_id } = req.params;
        const { Op } = require("sequelize");
        const servicio_extra = await Servicio_extra.findAndCountAll({
            where: {
                'fecha': moment().format("YYYY-MM-DD"),
                alquiler_id,
                planta_id
            }
        });
        if (servicio_extra.count > 0) {
            return res.status(500).json({
                message: 'SERVICIOS EXTRA en ALQUILER ' + alquiler_id + ' para la PLANTA ' + planta_id + ' EN LA FECHA DE HOY',
                data: servicio_extra.count
            });
        }else{
            return res.status(200).json({
                message: 'SERVICIOS EXTRA en ALQUILER ' + alquiler_id + ' para la PLANTA ' + planta_id + ' EN LA FECHA DE HOY',
                data: servicio_extra.count
            });
        }   
    } catch (error) {
        console.log(error);
    }
}

export async function altaServicioExtra(req, res) {
    const { servicio_extra_id, fecha, monto, descripcion, planta_id, alquiler_id } = req.body;
    try {
        let newServicio = await Servicio_extra.create({
            servicio_extra_id,
            fecha,
            monto,
            descripcion,
            planta_id,
            alquiler_id

        }, {
            fields: ['servicio_extra_id', 'fecha', 'monto', 'descripcion', 'planta_id', 'alquiler_id']
        })
        //Check Valores!!
        if (newServicio) {
            return res.status(200).json({
                message: 'servicio_extra Creado',
                data: newServicio
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'No se pudo crear el servicio extra',
            data: {}
        });
    }

};

/*
export async function altaServicioExtra(req, res) {
    const {servicio_extra_id, fecha, monto, descripcion , planta_id , alquiler_id } = req.body;
    try {
        let newServicio = await Servicio_extra.create({
            servicio_extra_id,
            fecha,
            monto,
            descripcion,
            planta_id,
            alquiler_id

        }, {
            fields: [ 'servicio_extra_id' ,'fecha', 'monto', 'descripcion' , 'planta_id' , 'alquiler_id' ]
        })
        if (newServicio) {
            return res.json({
                message: 'servicio_extra Creado',
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

}; */
