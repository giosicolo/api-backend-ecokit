import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";


const Remito = sequalize.define('remito',{
    remito_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    monto:{
        type: Sequelize.FLOAT,
    },
    conformidad:{
        type: Sequelize.BOOLEAN,
    },
    fecha:{
        type: Sequelize.DATE,
    },
    cobro_id: {
        type: Sequelize.INTEGER,
    },
    
    alquiler_id: {
        type: Sequelize.INTEGER,
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'remito'
});

//Falta agregar Relacion con yacimeinto

export default Remito;

