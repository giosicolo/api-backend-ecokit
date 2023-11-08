import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Yacimiento from "./yacimiento";

const Ubicacion = sequalize.define('ubicacion',{
    nombre_id : {
        type: Sequelize.TEXT,
        primaryKey: true,
    },
    latitud:{
        type: Sequelize.TEXT,
    },
    longitud:{
        type: Sequelize.TEXT,
    },
    comentarios:{
        type: Sequelize.TEXT,
    },
    
});


/*
Yacimiento.belongsTo(Ubicacion, {foreignKey: 'nombre_id', sourceKey: 'nombre_id'});
Ubicacion.hasMany(Yacimiento,{foreignKey: 'ubicacion_id', sourceKey: 'ubicacion_id'});
*/

export default Ubicacion;