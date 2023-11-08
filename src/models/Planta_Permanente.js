import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Planta from "./Planta";

const Planta_Permanente = sequalize.define('planta_permanente',{
    planta_permanente_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    planta_id : {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    dimensiones_translado:{
        type: Sequelize.INTEGER,
    },
   
    
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'planta_permantente'
});


Planta.belongsTo(Planta_Permanente,{foreignKey: 'planta_id', sourceKey: 'planta_id'});
Planta_Permanente.belongsTo(Planta,{foreignKey: 'planta_id', sourceKey: 'planta_id'});


export default Planta_Permanente;
