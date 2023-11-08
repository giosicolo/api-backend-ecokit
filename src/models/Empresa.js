import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Yacimiento from "./yacimiento";
import Remito from "./remito";
import Alquiler from "./alquiler";


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
    }
    ,cuit:{
        type: Sequelize.TEXT,
    },
    contacto:{
        type: Sequelize.TEXT,
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'empresa'
});

/*Yacimiento.belongsTo(Empresa, {foreignKey: 'empresa_id', sourceKey: 'empresa_id'});
Empresa.hasMany(Yacimiento,{foreignKey: 'empresa_id', sourceKey: 'empresa_id'});
*/
Remito.belongsTo(Empresa, {foreignKey: 'empresa_id', sourceKey: 'empresa_id'});
Empresa.hasMany(Remito,{foreignKey: 'empresa_id', sourceKey: 'empresa_id'});

Alquiler.belongsTo(Alquiler, {foreignKey: 'empresa_id', sourceKey: 'empresa_id'});
Empresa.hasMany(Alquiler,{foreignKey: 'empresa_id', sourceKey: 'empresa_id'});

export default Empresa;