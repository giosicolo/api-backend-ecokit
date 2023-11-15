"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _alquiler = _interopRequireDefault(require("./alquiler"));
var _planta = _interopRequireDefault(require("./planta"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Mantenimiento = _database.sequalize.define('mantenimiento', {
  mantenimiento_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fecha: {
    type: _sequelize["default"].DATE
  },
  duracion: {
    type: _sequelize["default"].INTEGER
  },
  observaciones: {
    type: _sequelize["default"].TEXT
  },
  hora: {
    type: _sequelize["default"].TEXT
  },
  alquiler_id: {
    type: _sequelize["default"].INTEGER,
    foreignKey: true
  },
  planta_id: {
    type: _sequelize["default"].INTEGER,
    foreignKey: true
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'mantenimiento'
});
_alquiler["default"].hasMany(Mantenimiento, {
  foreignKey: 'alquiler_id',
  sourceKey: 'alquiler_id'
});
Mantenimiento.belongsTo(_alquiler["default"], {
  foreignKey: 'alquiler_id',
  sourceKey: 'alquiler_id'
});
_planta["default"].hasMany(Mantenimiento, {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
Mantenimiento.belongsTo(_planta["default"], {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
var _default = exports["default"] = Mantenimiento;