import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";


const Pertenece = sequalize.define('pertenece',{
    pertenece_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fecha_inicio:{
        type: Sequelize.DATE,
    },
    fecha_fin:{
        type: Sequelize.DATE,
    },
    planta_id:{
        type: Sequelize.INTEGER,
    },
    alquiler_id: {
        type: Sequelize.INTEGER,
    }
});

//Falta agregar Relaciones

export default Pertenece;