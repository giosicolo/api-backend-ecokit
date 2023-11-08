import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Planta from "./planta";
import Empresa from "./empresa";
import Ubicacion from "./ubicacion";

const Yacimiento = sequalize.define('yacimiento',{
    nombre_id : {
        type: Sequelize.TEXT,
        primaryKey: true,
    },
    cant_operadores:{
        type: Sequelize.INTEGER,
    },
    cant_banios_quimicos:{
        type: Sequelize.INTEGER,
    },
    telefono_contacto:{
        type: Sequelize.TEXT,
    },
    empresa_id : {
        type: Sequelize.TEXT,
        foreignKey: true,
    },
    ubicacion_id : {
        type: Sequelize.TEXT,
        foreignKey: true,
    },
    
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'yacimiento'
});


/*Planta.belongsTo(Yacimiento, {foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});
Yacimiento.hasMany(Planta,{foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});*/

Yacimiento.belongsTo(Empresa, {foreignKey: 'empresa_id', sourceKey: 'empresa_id'});
Empresa.hasMany(Yacimiento,{foreignKey: 'empresa_id', sourceKey: 'empresa_id'});


/*Yacimiento.belongsTo(Ubicacion, {foreignKey: 'nombre_id', sourceKey: 'nombre_id'});
Ubicacion.hasMany(Yacimiento,{foreignKey: 'ubicacion_id', sourceKey: 'ubicacion_id'});
*/

export default Yacimiento;