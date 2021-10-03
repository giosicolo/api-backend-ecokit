import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";


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
    }
});

//Falta agregar Relacion con yacimeinto

export default Servicio_extra;