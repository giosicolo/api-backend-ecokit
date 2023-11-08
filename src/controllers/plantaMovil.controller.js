import PlantaMovil from '../models/Planta_Movil';

export async function createPlantaMovil(req, res) {
    const { planta_movil_id, planta_id, estado_rodado, dimensiones_instaladas } = req.body;
    try {
        let newPlantaMovil = await PlantaMovil.create({
            planta_movil_id, 
            planta_id, 
            estado_rodado, 
            dimensiones_instaladas
        }, {
            fields: ['planta_movil_id', 'planta_id', 'estado_rodado', 'dimensiones_instaladas']
        })
        if (newPlantaMovil) {
            return res.json({
                message: 'PlantaMovil created successfully',
                data: newPlantaMovil
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

export async function getPlantasMoviles(req, res) {
    try {
        const plantasMoviles = await PlantaMovil.findAll();
        res.json({
            data: plantasMoviles
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOnePlantaMovil(req, res) {
    try {
        const { planta_movil_id, planta_id } = req.params;
        const plantaMovil = await PlantaMovil.findOne({
            where: {
                planta_movil_id,
                planta_id
            }
        });
        res.json({
            data: plantaMovil
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deletePlantaMovil(req, res) {
    const { planta_movil_id, planta_id } = req.params;
    const deleteRowCount = await PlantaMovil.destroy({
        where: {
            planta_movil_id,
            planta_id
        }
    });
    res.json({
        message: 'PlantaMovil eliminada satisfactoriamente'
    })
}

export async function updatePlantaMovil(req, res) {
    const { planta_movil_id, planta_id } = req.params;
    const {estado_rodado, dimensiones_instaladas } = req.body;

    const plantaMovil = await PlantaMovil.findAll({
        attributes: ['estado_rodado', 'dimensiones_instaladas'],
        where: { 
            planta_movil_id,
            planta_id
        }
    });

    if (plantaMovil.length) {
        plantaMovil.forEach(async plantaMovil => {
            await plantaMovil.update({
                estado_rodado, dimensiones_instaladas 
            })
        });
    };

    return res.json({
        message: 'Planta Movil actualizada correctamente',
        data: project
    });
}
