"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequalize = void 0;
var _sequelize = require("sequelize");
var sequalize = exports.sequalize = new _sequelize.Sequelize('ecokitCyV',
//usuario
'postgres',
//pass
'fp', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5433,
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  loggin: false
});