import { Sequelize } from "sequelize";

export const sequalize = new Sequelize(
    'ecokitCyV',
    //usuario
    'postgres',
    //pass
    'fp',
    {
        host:'localhost',
        dialect:'postgres',
        port: 5433, 
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,
        },
        loggin: false 
});

