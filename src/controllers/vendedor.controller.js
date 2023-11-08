import Vendedor from '../models/Vendedor';


/*
CREATE VENDEDOR NO SE USA POR AHORA YA QUE NO TENEMOS TRANSACCIONES QUE LOS DEN DE ALTA
LOS MANEJAMOS YA CARGADOS EN LA BD

export async function createVendedor(req, res) {
    const { nombre} = req.body;
    try {
        let newVendedor = await Vendedor.create({
            nombre
        }, {
            fields: ['nombre']
        })
        if (newAlquiler) {
            return res.json({
                message: 'Vendedor created successfully',
                data: newAlquiler
            });
        }
    } catch (error) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }

};*/

export async function getVendedores(req, res) {
    try {
        const vendedores = await Vendedor.findAll();
        res.json({
            data: vendedores
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneVendedor(req, res) {
    try {
        const { legajo_id } = req.params;
        const vendedor = await Vendedor.findOne({
            where: {
                legajo_id
            }
        });
        res.json({
            data: vendedor
        });
    } catch (error) {
        console.log(error);
    }
};

/*

AL IGUAL QUE EL CREATE VENDEDOR NO SE ACTUALIZA NI SE ELIMINARIA

export async function deleteVendedor(req, res) {
    const { legajo_id } = req.params;
    const deleteRowCount = await Vendedor.destroy({
        where: {
            legajo_id
        }
    });
    res.json({
        message: 'Vendedor eliminado satisfactoriamente'
    })
}

export async function updateVendedor(req, res) {
    const { legajo_id } = req.params;
    const { nombre } = req.body;

    const vendedor = await Vendedor.findAll({
        attributes: ['nombre'],
        where: { id }
    });

    if (vendedor.length) {
        Vendedor.forEach(async vendedor => {
            await Vendedor.update({
                nombre
            })
        });
    };

    return res.json({
        message: 'Proyecto actualizado correctamente',
        data: vendedor
    });
}*/