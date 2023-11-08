import Empresa from "../models/empresa";
import Vendedor from "../models/Vendedor";
import Yacimiento from "../models/yacimiento";
import Planta_Movil from "../models/Planta_Movil";
import Planta_Permanente from "../models/Planta_Movil";
import Planta from "../models/Planta";
import Alquiler from "../models/Alquiler";

export async function obtenerEmpresasConYacimiento(req, res) {
    try {
        const { Op, where } = require("sequelize");
        const empresas = await Empresa.findAll({
            include: [
                {
                    model: Yacimiento, required: true,
                    attributes: ['nombre_id', 'ubicacion_id']
                }
            ]
        }
        );
        if (empresas.length) {
        return res.status(200).json({
            data: empresas
        });
    }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'No se pudieron obtener los alquileres',
            data: {}
        });
    }
}

export async function obtenerVendedores(req, res) {
    try {
        const { Op } = require("sequelize");
        const vendedores = await Vendedor.findAll();
        res.json({
            data: vendedores
        });
    } catch (error) {
        console.log(error);
    }
}


export async function obtenerPlantasMovilesParaAsignar(req, res) {
    try {
        const { nroPlantas , capacidad } = req.params;
        const { Op } = require("sequelize");
        const plantas = await Planta.findAndCountAll({
            where: {
                'disponibilidad': { [Op.eq]: true },
                'capacidad': { [Op.gte]: capacidad}
            }, limit: nroPlantas, include: [{
                model: Planta_Movil, required: true,
            }],
        });
        const plantasFinal = [];
        console.log(plantas.count);
        if (nroPlantas <= plantas.count) {
            var i = 0;
            while (i < nroPlantas) {
                plantasFinal.push(plantas.rows[i]);
                i = i + 1;
            }
            res.status(200).json({
                data: plantasFinal
            });
        }
        else {
            res.status(500).json({
                mesagge: "NO HAY SUFICIENTES PLANTAS MOVILES PARA SATISFACER ESTE ALQUILER",
                data: null
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export async function obtenerPlantasPermanentesParaAsignar(req, res) {
    try {
        const { nroPlantas , capacidad } = req.params;
        const { Op } = require("sequelize");
        const plantas = await Planta.findAndCountAll({
            where: {
                'disponibilidad': { [Op.eq]: true },
                'capacidad': { [Op.gte]: capacidad}
            }, limit: nroPlantas, include: [{
                model: Planta_Permanente, required: true,
            }],
        });
        const plantasFinal = [];
        console.log(plantas.count);
        if (nroPlantas <= plantas.count) {
            var i = 0;
            while (i < nroPlantas) {
                plantasFinal.push(plantas.rows[i]);
                i = i + 1;
            }
            res.status(200).json({
                data: plantasFinal
            });
        }
        else {
            res.status(500).json({
                mesagge: "NO HAY SUFICIENTES PLANTAS PERMANENTES PARA SATISFACER ESTE ALQUILER",
                data: null
            });
        }
    } catch (error) {
        console.log(error);
    }
}


export async function actualizarContactoEmpresa(req, res) {
    
    try {
    const { empresa_id } = req.params;
    const { contacto } = req.body;

    const empresa = await Empresa.findAll({
        attributes: ['empresa_id','cuit','contacto'],
        where: { empresa_id }
    });


    //Verificar que el contacto tenga la forma deseada para que sea admitido
    if (empresa.length) {
        empresa.forEach(async empresa => {
            await empresa.update({
                contacto
            })
        });
    };

return res.status(200).json({
    message: 'Contacto de Empresa actualizado correctamente',
    data: empresa
});}
catch(error){
}};

export async function cambiarDisponibilidadPlantaOcupada(req, res) {
    const { planta_id } = req.params;
    const planta = await Planta.findAll({
        attributes: ['planta_id','disponibilidad'],
        where: { planta_id }
    });
    //Se podria verificar primero que el id sea valido.
    if (planta.length) {
        planta.forEach(async planta => {
            await planta.update({
                'disponibilidad': false,
            })
        });
    
    return res.status(200).json({
        message: 'Disponibilidad de Planta actualizada correctamente',
        data: planta
    });

} else{
    return res.status(200).json({
        message: 'La Disponibilidad de La Planta no se pudo Actualizar',
        data: planta
}); }


};


export async function crearAlquiler(req, res) {
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
            return res.status(200).json({
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