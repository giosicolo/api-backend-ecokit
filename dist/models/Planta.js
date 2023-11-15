"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Planta = _database.sequalize.define('planta', {
  planta_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  capacidad: {
    type: _sequelize["default"].INTEGER
  },
  disponibilidad: {
    type: _sequelize["default"].BOOLEAN
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'planta'
});
var _default = exports["default"] = Planta;