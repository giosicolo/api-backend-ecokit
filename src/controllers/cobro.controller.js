import Cobro from '../models/Cobro';


export async function createCobro(req, res) {
    const { fecha } = req.body;
    try {
        let newCobro = await Cobro.create({
            fecha
        }, {
            fields: ['fecha']
        })
        if (newCobro) {
            return res.json({
                message: 'Cobro created successfully',
                data: newCobro
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

export async function getCobro(req, res) {
    try {
        const cobro = await Cobro.findAll();
        res.json({
            data: cobro
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneCobro(req, res) {
    try {
        const { nro_operacion_id } = req.params;
        const cobro = await Cobro.findOne({
            where: {
                nro_operacion_id
            }
        });
        res.json({
            data: cobro
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteCobro(req, res) {
    const { nro_operacion_id } = req.params;
    const deleteRowCount = await Cobro.destroy({
        where: {
            nro_operacion_id
        }
    });
    res.json({
        message: 'Cobro eliminado satisfactoriamente'
    })
}


//POR AHORA LO DEJO COMENTADO YA QUE ME PARECE INNECESARIO
/*
export async function updateCobro(req, res) {
    const { nro_operacion_id } = req.params;
    const { fecha } = req.body;

    const cobro = await Cobro.findAll({
        attributes: ['nro_operacion_id','fecha'],
        where: { nro_operacion_id }
    });

    if (cobro.length) {
        cobro.forEach(async cobro => {
            await Cobro.update({
                fecha
            })
        });
    };

    return res.json({
        message: 'Cobro actualizado correctamente',
        data: cobro
    });
} */