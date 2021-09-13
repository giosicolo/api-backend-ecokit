import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";


const Empresa = sequalize.define('empresa',{
    empresa_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    razon_social:{
        type: Sequelize.TEXT,
    },
    direccion:{
        type: Sequelize.TEXT,
    },
    cuit:{
        type: Sequelize.TEXT,
    },
    yacimiento_id: {
        type: Sequelize.INTEGER,
    }
});

//Falta agregar Relacion con yacimeinto

export default Empresa;