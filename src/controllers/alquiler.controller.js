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
        where: { id }
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
}