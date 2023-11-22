import Cobro from '../models/Cobro';
import Remito from '../models/Remito';


export async function createRemito(req, res) {
    const { monto, conformidad,fecha,empresa_id,alquiler_id, detalle } = req.body;
    try {
        let newRemito = await Remito.create({
            monto,
            conformidad,
            detalle,
            fecha,
            empresa_id,
            alquiler_id
        }, {
            fields: [ 'monto', 'conformidad','detalle' , 'fecha' , 'empresa_id' , ' alquiler_id']
        })
        if (newRemito) {
            return res.json({
                message: 'Remito created successfully',
                data: newRemito
            });
        }
    } catch (error) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

};

export async function getRemito(req, res) {
    try {
        const remitos = await Remito.findAll();
        res.json({
            data: remitos
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneRemito(req, res) {
    try {
        const { remito_id } = req.params;
        console.log(remito_id);
        const remito = await Remito.findOne({
            where: {
                remito_id
            }
        });
        res.json({
            data: remito
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteRemito(req, res) {
    const { remito_id } = req.params;
    const deleteRowCount = await Remito.destroy({
        where: {
            remito_id
        }
    });
    res.json({
        message: 'Remito eliminado satisfactoriamente'
    })
};

export async function asignarCobroRemito(req, res) {
    const { remito_id, alquiler_id,nro_operacion_id } = req.params;

    const remito = await Remito.findAll({
        attributes: ['alquiler_id','remito_id','nro_operacion_id'],
        where: { alquiler_id,remito_id }
    });

    if (remito.length) {

        remito.forEach(async unRemito => {

            var unAlquilerId=unRemito.alquiler_id;
            var unRemitoId=unRemito.remito_id;

            await unRemito.update(
                {nro_operacion_id},
                {
                where: { unAlquilerId,remito_id }

                }
            )
        });
    };

    return res.status(200).json({
        message: 'Cobro asignado a Remito correctamente',
        data: remito
    });
};

export async function getRemitosByAlquiler(req, res) {

    const { alquiler_id,mes,anio } = req.params;

    const remitos = await Remito.findAll({
        where: { 
            alquiler_id,
            nro_operacion_id: {[Op.not]: null},
            'fecha':{
                [Op.between]: [`${anio}-${mes}-01`,`${anio}-${mes}-30`]
            }
            
        }
    });

    var suma=0;
    remitos.forEach(unRemito => {
        suma=suma+unRemito.monto;
    });

    res.json({
        data: remitos, sumatoria_monto: suma
    });

};

export async function getServiciosAndMantenimientosByRemito(req, res) {
    const { remito_id } = req.params;
    const servicios_extra = await Servicios_extra.findAll({
        where: {
            remito_id
        }
    });
    const mantenimientos = await Mantenimiento.findAll({
        where: {
            remito_id
        }
    });

    var suma_servicios=0;
    servicios_extra.forEach(unServicio => {
        suma_servicios=suma_servicios+unServicio.monto;
    });

    var suma_mantenimientos=0;
    mantenimientos.forEach(unMantenimiento => {
        suma_mantenimientos=suma_mantenimientos+unMantenimiento.monto;
    });


    res.json({
        data: {
            servicios_extra: servicios_extra,
            suma_servicios:suma_servicios,
            mantenimientos,
            suma_mantenimientos:suma_mantenimientos
        }
    });
};



export async function getAllRemitos(req, res) {
    try {
        const remitos = await Remito.findAll();
        res.json({
            data: remitos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something went wrong',
            data: {}
        });
    }
}