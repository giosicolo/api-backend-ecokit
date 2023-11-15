"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _Alquiler = _interopRequireDefault(require("./Alquiler"));
var _Planta = _interopRequireDefault(require("./Planta"));
var _Remito = _interopRequireDefault(require("./Remito"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Servicio_extra = _database.sequalize.define('servicio_extra', {
  servicio_extra_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fecha: {
    type: _sequelize["default"].DATE
  },
  monto: {
    type: _sequelize["default"].FLOAT
  },
  descripcion: {
    type: _sequelize["default"].TEXT
  },
  remito_id: {
    type: _sequelize["default"].INTEGER
  },
  alquiler_id: {
    type: _sequelize["default"].INTEGER
  },
  planta_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'servicio_extra'
});
Servicio_extra.hasOne(_Alquiler["default"], {
  foreignKey: 'alquiler_id',
  sourceKey: 'alquiler_id'
});
_Alquiler["default"].belongsTo(Servicio_extra, {
  foreignKey: 'alquiler_id',
  sourceKey: 'alquiler_id'
});
Servicio_extra.hasOne(_Planta["default"], {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
_Planta["default"].belongsTo(Servicio_extra, {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
Servicio_extra.hasOne(_Remito["default"], {
  foreignKey: 'remito_id',
  sourceKey: 'remito_id'
});
_Remito["default"].belongsTo(Servicio_extra, {
  foreignKey: 'remito_id',
  sourceKey: 'remito_id'
});
var _default = exports["default"] = Servicio_extra;