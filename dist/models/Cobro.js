"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Cobro = _database.sequalize.define('cobro', {
  nro_operacion_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fecha: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'cobro'
});

//Falta agregar Relacion con yacimeinto
var _default = exports["default"] = Cobro;