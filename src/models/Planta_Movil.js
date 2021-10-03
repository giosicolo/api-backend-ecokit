import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Plantas from "./plantas";

const Planta_Movil = sequalize.define('planta_movil',{
    planta_movil_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    planta_id : {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    capacidad:{
        type: Sequelize.INTEGER,
    },
   
    
});

Plantas.belongsTo(Planta_Movil,{foreignKey: 'planta_id', sourceKey: 'planta_id'});
Planta_Movil.belongsTo(Plantas,{foreignKey: 'planta_id', sourceKey: 'planta_id'});



export default Planta_Movil;
