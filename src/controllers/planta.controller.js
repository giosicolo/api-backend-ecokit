import Planta from '../models/Planta';

export async function createPlanta(req, res) {
    const { planta_id, capacidad, modelo, disponibilidad, monto_fijo, yacimiento_id } = req.body;
    try {
        let newPlanta = await Planta.create({
            planta_id,
            capacidad,
            modelo,
            disponibilidad,
            monto_fijo,
            yacimiento_id 
        }, {
            fields: ['planta_id', 'capacidad', 'modelo', 'disponibilidad', 'monto_fijo', 'yacimiento_id' ]
        })
        if (newPlanta) {
            return res.json({
                message: 'Planta created successfully',
                data: newPlanta
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

export async function getPlantas(req, res) {
    try {
        const plantas = await Planta.findAll();
        res.json({
            data: plantas
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOnePlanta(req, res) {
    try {
        const { planta_id } = req.params;
        const planta = await Planta.findOne({
            where: {
                planta_id
            }
        });
        res.json({
            data: planta
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deletePlanta(req, res) {
    const { planta_id } = req.params;
    const deleteRowCount = await Planta.destroy({
        where: {
            planta_id
        }
    });
    res.json({
        message: 'Planta eliminada satisfactoriamente'
    })
}

export async function updatePlanta(req, res) {
    const { planta_id } = req.params;
    const { cant_operadores, cant_banios_quimicos, telefono_contacto, empresa_id, ubicacion_id } = req.body;

    const planta = await Planta.findAll({
        attributes: ['capacidad', 'modelo', 'disponibilidad', 'monto_fijo', 'yacimiento_id' ],
        where: { planta_id }
    });

    if (planta.length) {
        planta.forEach(async planta => {
            await planta.update({
                capacidad,
                modelo,
                disponibilidad,
                monto_fijo,
                yacimiento_id 
            })
        });
    };

    return res.json({
        message: 'Planta actualizada correctamente',
        data: project
    });
}
