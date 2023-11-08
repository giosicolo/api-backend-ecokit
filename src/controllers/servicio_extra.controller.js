import Cobro from '../models/Cobro';
import Servicio from '../models/Servicio_extra';


export async function createServicio_extra(req, res) {
    const { fecha, monto, descripcion , remito_id } = req.body;
    try {
        let newServicio = await Servicio.create({ 
            fecha,
            monto,
            descripcion,
            remito_id
        }, {
            fields: [ 'fecha', 'monto', 'descripcion' , 'remito_id' ]
        })
        if (newServicio) {
            return res.json({
                message: 'servicio_extra created successfully',
                data: newServicio
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

export async function getServicio_extra(req, res) {
    try {
        const servicios = await Servicio.findAll();
        res.json({
            data: servicios
        });
    } catch (error) {
        console.log(error);
    }
};

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

