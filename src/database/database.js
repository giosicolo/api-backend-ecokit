import { Sequelize } from "sequelize";

export const sequalize = new Sequelize(
    'postgres',
    'postgres',
    'android2.2',
    {
        host:'localhost',
        dialect:'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000,
        },
        loggin: false 
});

