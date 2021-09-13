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
});

//Falta agregar Relacion con yacimeinto

export default Cobro;