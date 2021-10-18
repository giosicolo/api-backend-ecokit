import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";
import Alquiler from "./Alquiler";
import Planta from "./Planta";
import Remito from "./Remito";


const Servicio_extra = sequalize.define('servicio_extra',{
    servicio_extra_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fecha:{
        type: Sequelize.DATE,
    },
    monto:{
        type: Sequelize.FLOAT,
    },
    descripcion:{
        type: Sequelize.TEXT,
    },
    remito_id:{
        type: Sequelize.INTEGER,
    },
    alquiler_id:{
        type: Sequelize.INTEGER,
    },
    planta_id:{
        type: Sequelize.INTEGER,
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'servicio_extra'
});

Servicio_extra.hasOne(Alquiler, {foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});
Alquiler.belongsTo(Servicio_extra, {foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});
Servicio_extra.hasOne(Planta, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Planta.belongsTo(Servicio_extra, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Servicio_extra.hasOne(Remito, {foreignKey: 'remito_id', sourceKey: 'remito_id'});
Remito.belongsTo(Servicio_extra, {foreignKey: 'remito_id', sourceKey: 'remito_id'});

export default Servicio_extra;