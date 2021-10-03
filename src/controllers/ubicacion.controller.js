import Ubicacion from '../models/Ubicacion';

export async function createUbicacion(req, res) {
    const { nombre_id, latitud,longitud,comentarios } = req.body;
    try {
        let newUbicacion = await Ubicacion.create({
            nombre_id,
            latitud,
            longitud,
            comentarios
        }, {
            fields: ['nombre_id', 'latitud','longitud','comentarios']
        })
        if (newUbicacion) {
            return res.json({
                message: 'Ubicacion created successfully',
                data: newUbicacion
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

export async function getUbicaciones(req, res) {
    try {
        const ubicaciones = await Ubicacion.findAll();
        res.json({
            data: ubicaciones
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneUbicacion(req, res) {
    try {
        const { nombre_id } = req.params;
        const ubicacion = await Ubicacion.findOne({
            where: {
                nombre_id
            }
        });
        res.json({
            data: ubicacion
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteUbicacion(req, res) {
    const { nombre_id } = req.params;
    const deleteRowCount = await Ubicacion.destroy({
        where: {
            nombre_id
        }
    });
    res.json({
        message: 'Ubicacion eliminada satisfactoriamente'
    })
}

export async function updateUbicacion(req, res) {
    const { nombre_id } = req.params;
    const { nombre_id, latitud,longitud,comentarios } = req.body;

    const ubicacion = await Ubicacion.findAll({
        attributes: ['nombre_id', 'latitud','longitud','comentarios'],
        where: { nombre_id }
    });

    if (ubicacion.length) {
        ubicacion.forEach(async ubicacion => {
            await ubicacion.update({
                nombre_id,
                latitud,
                longitud,
                comentarios
            })
        });
    };

    return res.json({
        message: 'Ubicacion actualizado correctamente',
        data: project
    });
}
