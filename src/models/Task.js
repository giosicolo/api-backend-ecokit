import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

const Task = sequalize.define('task',{
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name:{
        type: Sequelize.TEXT,
    },
    done:{
        type: Sequelize.BOOLEAN,
    },
    projectid:{
        type: Sequelize.INTEGER,
    }
},{
        timestamps: false
});

export default Task;