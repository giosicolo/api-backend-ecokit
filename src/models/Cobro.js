import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";


const Cobro = sequalize.define('cobro',{
    nro_operacion_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fecha:{
        type: Sequelize.DATE,
    }
},{
    timestamps: false,
    freezeTableName: true,
    tableName: 'cobro'
});

//Falta agregar Relacion con yacimeinto

export default Cobro;