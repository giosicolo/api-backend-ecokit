import Empresa from '../models/Empresa';

export async function createEmpresa(req, res) {
    const { empresa_id,cuit,telefono,email } = req.body;
    try {
        let newEmpresa = await Empresa.create({
            empresa_id,
            cuit,
            telefono,
            email
        }, {
            fields: ['empresa_id','cuit','telefono','email']
        })
        if (newEmpresa) {
            return res.json({
                message: 'Empresa created successfully',
                data: newEmpresa
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

export async function getEmpresas(req, res) {
    try {
        const empresas = await Empresa.findAll();
        res.json({
            data: empresas
        });
    } catch (error) {
        console.log(error);
    }
};

export async function getOneEmpresa(req, res) {
    try {
        const { empresa_id } = req.params;
        const empresa = await Empresa.findOne({
            where: {
                empresa_id
            }
        });
        res.json({
            data: empresa
        });
    } catch (error) {
        console.log(error);
    }
};

export async function deleteEmpresa(req, res) {
    const { empresa_id } = req.params;
    const deleteRowCount = await Empresa.destroy({
        where: {
            empresa_id
        }
    });
    res.json({
        message: 'Empresa eliminada satisfactoriamente'
    })
};

export async function updateEmpresa(req, res) {
    const { empresa_id } = req.params;
    const { nombre_id, latitud,longitud,comentarios } = req.body;

    const empresa = await Empresa.findAll({
        attributes: ['empresa_id','cuit','telefono','email'],
        where: { empresa_id }
    });

    if (empresa.length) {
        empresa.forEach(async empresa => {
            await empresa.update({
                empresa_id,
                cuit,
                telefono,
                email
            })
        });
    };

    return res.json({
        message: 'Empresa actualizado correctamente',
        data: project
    });
} ; 

export async function existeEmpresa(req, res) {
    const { empresa_id } = req.params;
    const empresa = await Empresa.findAll({
        attributes: ['empresa_id'],
        where: { empresa_id }
    });

    if (empresa.length) {
       //Si existe la empresa
       res.status(200).json({
        message: 'Si existe la empresa.',
        data: empresa
      });
      return res 
    }else {
        res.status(500).json({
            message: 'No existe la empresa.',
            data: null
        });
        return res
    }

    
}






