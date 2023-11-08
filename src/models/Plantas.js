import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Alquiler from "./alquiler";
import Mantenimiento from "./mantenimiento";
import Yacimiento from "./yacimiento";
import Servicio_extra from "./servicio_extra";


const Planta = sequalize.define('planta',{
    planta_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    capacidad:{
        type: Sequelize.INTEGER,
    },
    modelo:{
        type: Sequelize.TEXT,
    },
    disponibilidad:{
        type: Sequelize.TEXT,
    },
    monto_fijo:{
        type: Sequelize.DOUBLE,
    },
    yacimiento_id:{
        type: Sequelize.TEXT,
        foreignKey: true

    }},{
        timestamps: false,
        freezeTableName: true,
        tableName: 'planta'
    }
);


/*
Planta.belongsTo(Alquiler,{foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});
Alquiler.hasMany(Planta, {foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});

Planta.hasMany(Mantenimiento, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Mantenimiento.belongsTo(Planta,{foreignKey: 'planta_id', sourceKey: 'planta_id'});

Planta.belongsTo(Yacimiento, {foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});
Yacimiento.hasMany(Planta,{foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});

Servicio_extra.belongsTo(Planta, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Planta.hasMany(Servicio_extra,{foreignKey: 'planta_id', sourceKey: 'planta_id'});
*/
export default Planta;