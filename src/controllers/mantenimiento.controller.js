import Mantenimiento from '../models/Mantenimiento';
import Planta from '../models/Planta';

export async function createMantenimiento(req, res) {
    const { mantenimiento_id,fecha,duracion,observaciones,hora,alquiler_id,planta_id } = req.body;
    try {
        let newMantenimiento = await Mantenimiento.create({
            mantenimiento_id,
            fecha,duracion,
            observaciones,
            hora,
            alquiler_id,
            planta_id 
        }, {
            fields: ['mantenimiento_id','fecha','duracion','observaciones','hora','alquiler_id','planta_id' ]
        })
        if (newMantenimiento) {
            return res.json({
                message: 'Mantenimiento created successfully',
                data: newMantenimiento
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

export async function getMantenimientos(req, res) {
    try {
        const mantenimientos = await Mantenimiento.findAll({include: Planta});
        res.json({
            data: mantenimientos
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneMantenimiento(req, res) {
    try {
        const { mantenimiento_id } = req.params;
        const mantenimiento = await Mantenimiento.findOne({
            where: {
                mantenimiento_id
            }
        });
        res.json({
            data: mantenimiento
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteMantenimiento(req, res) {
    const { mantenimiento_id } = req.params;
    const deleteRowCount = await Mantenimiento.destroy({
        where: {
            mantenimiento_id
        }
    });
    res.json({
        message: 'Mantenimiento eliminado satisfactoriamente'
    })
}

export async function updateMantenimiento(req, res) {
    const { mantenimiento_id } = req.params;
    const {fecha,duracion,observaciones,hora,alquiler_id,planta_id } = req.body;

    const mantenimiento = await Mantenimiento.findAll({
        attributes: [ 'mantenimiento_id','fecha','duracion','observaciones','hora','alquiler_id','planta_id'],
        where: { mantenimiento_id }
    });

    if (mantenimiento.length) {
        mantenimiento.forEach(async empresa => {
            await empresa.update({
                fecha,
                duracion,
                observaciones,
                hora,
                alquiler_id,
                planta_id 
            })
        });
    };

    return res.json({
        message: 'Mantenimiento actualizado correctamente',
        data: project
    });
}
