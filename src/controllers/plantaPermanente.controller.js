import PlantaPermanente from '../models/Planta_Permanente';

export async function createPlantaPermanente(req, res) {
    const { planta_permanente_id, planta_id, dimensiones_translado } = req.body;
    try {
        let newPlantaPermanente = await PlantaPermanente.create({
            planta_permanente_id, 
            planta_id, 
            dimensiones_translado
        }, {
            fields: ['planta_permanente_id', 'planta_id', 'dimensiones_translado']
        })
        if (newPlantaPermanente) {
            return res.json({
                message: 'PlantaPermanente created successfully',
                data: newPlantaPermanente
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

export async function getPlantasPermanentees(req, res) {
    try {
        const plantasPermanentees = await PlantaPermanente.findAll();
        res.json({
            data: plantasPermanentes
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOnePlantaPermanente
(req, res) {
    try {
        const { planta_permanente_id, planta_id } = req.params;
        const plantaPermanente = await PlantaPermanente.findOne({
            where: {
                planta_permanente_id,
                planta_id
            }
        });
        res.json({
            data: plantaPermanente
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deletePlantaPermanente(req, res) {
    const { planta_permanente_id, planta_id } = req.params;
    const deleteRowCount = await PlantaPermanente.destroy({
        where: {
            planta_permanente_id,
            planta_id
        }
    });
    res.json({
        message: 'PlantaPermanente eliminada satisfactoriamente'
    })
}

export async function updatePlantaPermanente(req, res) {
    const { planta_permanente_id, planta_id } = req.params;
    const {dimensiones_translado } = req.body;

    const plantaPermanente = await PlantaPermanente.findAll({
        attributes: ['dimensiones_translado'],
        where: { 
            planta_permanente_id,
            planta_id
        }
    });

    if (plantaPermanente.length) {
        plantaPermanente.forEach(async plantaPermanente => {
            await plantaPermanente.update({
                dimensiones_translado 
            })
        });
    };

    return res.json({
        message: 'Planta Permanente actualizada correctamente',
        data: project
    });
}
