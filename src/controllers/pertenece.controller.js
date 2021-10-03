import Pertenece from '../models/Pertenece';


export async function createPertenece(req, res) {
    const { fecha_inicio, fecha_fin, alquiler_id, planta_id } = req.body;
    try {
        let newPertenece = await Pertenece.create({ 
            fecha_inicio,
            fecha_fin,
            alquiler_id,
            planta_id
        }, {
            fields: [ 'fecha_inicio', 'fecha_fin', 'alquiler_id' , 'planta_id' ]
        })
        if (newPertenece) {
            return res.json({
                message: 'relacion entre alquiler y planta created successfully',
                data: newPertenece
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


/*
PORQUE LISTARIA TODOS LAS PLANTAS ALQUILADAS SIN PEDIR UN CLIENTE 

export async function getPertenece(req, res) {
    try {
        const pertenecen = await Pertenece.findAll();
        res.json({
            data: pertenecen
        });
    } catch (error) {
        console.log(error);
    }
};
*/



/*

REVISAR SI TIENEN UTILIDAD

export async function getOneServicio_extra(req, res) {
    try {
        const { servicio_extra_id } = req.params;
        const servicio = await Servicio.findOne({
            where: {
                servicio_extra_id
            }
        });
        res.json({
            data: servicio
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteServicio_extra(req, res) {
    const { servicio_extra_id } = req.params;
    const deleteRowCount = await Servicio.destroy({
        where: {
            servicio_extra_id
        }
    });
    res.json({
        message: 'Servicio_extra eliminado satisfactoriamente'
    })
}

*/