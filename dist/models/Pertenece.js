"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _Alquiler = _interopRequireDefault(require("./Alquiler"));
var _Planta = _interopRequireDefault(require("./Planta"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Pertenece = _database.sequalize.define('pertenece', {
  pertenece_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fecha_inicio: {
    type: _sequelize["default"].DATE
  },
  fecha_fin: {
    type: _sequelize["default"].DATE
  },
  planta_id: {
    type: _sequelize["default"].INTEGER
  },
  alquiler_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'pertenece'
});
Pertenece.hasOne(_Alquiler["default"], {
  foreignKey: 'alquiler_id',
  sourceKey: 'alquiler_id'
});
_Alquiler["default"].hasMany(Pertenece, {
  foreignKey: 'alquiler_id',
  sourceKey: 'alquiler_id'
});
Pertenece.hasOne(_Planta["default"], {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
_Planta["default"].belongsTo(Pertenece, {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
var _default = exports["default"] = Pertenece;