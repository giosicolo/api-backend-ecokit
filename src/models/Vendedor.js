import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

const Vendedor = sequalize.define('vendedor',{
    legajo_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    nombre:{
        type: Sequelize.TEXT,
    },
    email:{
        type: Sequelize.TEXT,
    },
    telefono:{
        type: Sequelize.TEXT,
    }},{
        timestamps: false,
        freezeTableName: true,
        tableName: 'vendedor'
    });


export default Vendedor;