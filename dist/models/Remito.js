"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Remito = _database.sequalize.define('remito', {
  remito_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  monto: {
    type: _sequelize["default"].FLOAT
  },
  conformidad: {
    type: _sequelize["default"].BOOLEAN
  },
  fecha: {
    type: _sequelize["default"].DATE
  },
  cobro_id: {
    type: _sequelize["default"].INTEGER
  },
  alquiler_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'remito'
});

//Falta agregar Relacion con yacimeinto
var _default = exports["default"] = Remito;