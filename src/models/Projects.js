import  Sequelize  from "sequelize";
import  {sequalize, sequelize}  from "../database/database";

import Task from "./Task";

const Project = sequalize.define('projects',{
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    name:{
        type: Sequelize.TEXT,
    },
    priority:{
        type: Sequelize.INTEGER,
    },
    description:{
        type: Sequelize.TEXT,
    },
    delivery:{
        type: Sequelize.DATE,
    }},{
        timestamps: false
});

Project.hasMany(Task, {foreignKey: 'projectid', sourceKey: 'id'});
Task.belongsTo(Project,{foreignKey: 'projectid', sourceKey: 'id'});

export default Project;




