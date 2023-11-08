import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";
import Alquiler from "./Alquiler";
import Planta from "./Planta";


const Pertenece = sequalize.define('pertenece',{
    pertenece_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fecha_inicio:{
        type: Sequelize.DATE,
    },
    fecha_fin:{
        type: Sequelize.DATE,
    },
    planta_id:{
        type: Sequelize.INTEGER,
    },
    alquiler_id: {
        type: Sequelize.INTEGER,
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'pertenece'
});

Pertenece.hasOne(Alquiler, {foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});
Alquiler.hasMany(Pertenece, {foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});
Pertenece.hasOne(Planta, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Planta.belongsTo(Pertenece, {foreignKey: 'planta_id', sourceKey: 'planta_id'});

export default Pertenece;