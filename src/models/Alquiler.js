import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";


const Alquiler = sequalize.define('alquiler',{
    alquiler_id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    fecha_inicio:{
        type: Sequelize.DATE,
    },
    fecha_fin:{
        type: Sequelize.DATE,
    },
    monto_base:{
        type: Sequelize.INTEGER,
    },
    remito_id: {
        type: Sequelize.INTEGER,
    },
    vendedor_id: {
        type: Sequelize.INTEGER,
    },
    empresa_id: {
        type: Sequelize.INTEGER,
    },
    servicio_extra_id: {
        type: Sequelize.INTEGER,
    },
    mantenimiento_id: {
        type: Sequelize.INTEGER,
    }

});

//Falta agregar Relaciones

export default Alquiler;