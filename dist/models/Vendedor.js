"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Vendedor = _database.sequalize.define('vendedor', {
  legajo_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  },
  telefono: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'vendedor'
});
var _default = exports["default"] = Vendedor;