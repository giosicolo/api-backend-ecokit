import Sequelize from "sequelize";
import { sequalize, sequelize } from "../database/database";

import Plantas from "./plantas";
import Planta from "./Planta";

const Planta_Movil = sequalize.define('planta_movil', {
    planta_movil_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    planta_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    estado_rorado: {
        type: Sequelize.TEXT,
    },
    dimensiones_instaladas: {
        type: Sequelize.TEXT,
    },

}, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'planta_movil'
});


Planta.belongsTo(Planta_Movil, { foreignKey: 'planta_id', sourceKey: 'planta_id' });
Planta_Movil.belongsTo(Planta, { foreignKey: 'planta_id', sourceKey: 'planta_id' });



export default Planta_Movil;
