import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";


const Planta = sequalize.define('planta',{
    planta_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    capacidad:{
        type: Sequelize.INTEGER,
    },
    disponibilidad:{
        type: Sequelize.BOOLEAN,
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'planta'
});


export default Planta;


