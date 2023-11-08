import Yacimiento from '../models/Yacimiento';

export async function createYacimiento(req, res) {
    const { nombre_id, cant_operadores, cant_banios_quimicos, telefono_contacto, empresa_id, ubicacion_id } = req.body;
    try {
        let newYacimiento = await Yacimiento.create({
            nombre_id,
            cant_operadores,
            cant_banios_quimicos,
            telefono_contacto,
            empresa_id,
            ubicacion_id
        }, {
            fields: ['nombre_id','cant_operadores', 'cant_banios_quimicos', 'telefono_contacto', 'delivery','empresa_id','ubicacion_id']
        })
        if (newYacimiento) {
            return res.json({
                message: 'Yacimiento created successfully',
                data: newYacimiento
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

export async function getYacimientos(req, res) {
    try {
        const yacimientos = await Yacimiento.findAll();
        res.json({
            data: yacimientos
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneYacimiento(req, res) {
    try {
        const { nombre_id } = req.params;
        const yacimiento = await Yacimiento.findOne({
            where: {
                nombre_id
            }
        });
        res.json({
            data: yacimiento
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteYacimiento(req, res) {
    const { nombre_id } = req.params;
    const deleteRowCount = await Yacimiento.destroy({
        where: {
            nombre_id
        }
    });
    res.json({
        message: 'Yacimiento eliminado satisfactoriamente'
    })
}

export async function updateYacimiento(req, res) {
    const { nombre_id } = req.params;
    const { cant_operadores, cant_banios_quimicos, telefono_contacto, empresa_id, ubicacion_id } = req.body;

    const yacimiento = await Yacimiento.findAll({
        attributes: ['cant_operadores', 'cant_banios_quimicos', 'telefono_contacto', 'delivery','empresa_id','ubicacion_id'],
        where: { nombre_id }
    });

    if (yacimiento.length) {
        yacimiento.forEach(async yacimiento => {
            await yacimiento.update({
                cant_operadores,
                cant_banios_quimicos,
                telefono_contacto,
                empresa_id,
                ubicacion_id
            })
        });
    };

    return res.json({
        message: 'Yacimiento actualizado correctamente',
        data: project
    });
}
