import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Alquiler from "./alquiler";
import Planta from "./planta";


const Mantenimiento = sequalize.define('mantenimiento',{
    mantenimiento_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fecha:{
        type: Sequelize.DATE,
    },
    duracion:{
        type: Sequelize.INTEGER,
    },
    observaciones:{
        type: Sequelize.TEXT,
    },
    hora:{
        type: Sequelize.TEXT,
    },
    alquiler_id:{
        type: Sequelize.INTEGER,
        foreignKey: true

    },
    planta_id:{
        type: Sequelize.INTEGER,
        foreignKey: true

    }} , 
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'mantenimiento'
    });

Alquiler.hasMany(Mantenimiento, {foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});
Mantenimiento.belongsTo(Alquiler,{foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});

Planta.hasMany(Mantenimiento, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Mantenimiento.belongsTo(Planta,{foreignKey: 'planta_id', sourceKey: 'planta_id'});

export default Mantenimiento;