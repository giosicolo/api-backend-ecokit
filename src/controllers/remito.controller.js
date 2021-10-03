import Cobro from '../models/Cobro';
import Remito from '../models/Remito';


export async function createRemito(req, res) {
    const { monto, conformidad,fecha,empresa_id,alquiler_id } = req.body;
    try {
        let newRemito = await Remito.create({
            monto,
            conformidad,
            fecha,
            empresa_id,
            alquiler_id
        }, {
            fields: [ 'monto', 'conformidad' , 'fecha' , 'empresa_id' , ' alquiler_id']
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
}

export async function asignarCobroRemito(req, res) {
    const { remito_id } = req.params;
    const { cobro_id } = req.body;

    const remito = await Remito.findAll({
        attributes: ['remito_id', 'cobro_id'],
        where: { id }
    });

    if (remito.length) {
        remito.forEach(async remito => {
            await Remito.update({
                cobro_id
            })
        });
    };

    return res.json({
        message: 'Cobro asignado a Remito correctamente',
        data: alquiler
    });
}