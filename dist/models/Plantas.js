"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _alquiler = _interopRequireDefault(require("./alquiler"));
var _mantenimiento = _interopRequireDefault(require("./mantenimiento"));
var _yacimiento = _interopRequireDefault(require("./yacimiento"));
var _servicio_extra = _interopRequireDefault(require("./servicio_extra"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Planta = _database.sequalize.define('planta', {
  planta_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  capacidad: {
    type: _sequelize["default"].INTEGER
  },
  modelo: {
    type: _sequelize["default"].TEXT
  },
  disponibilidad: {
    type: _sequelize["default"].TEXT
  },
  monto_fijo: {
    type: _sequelize["default"].DOUBLE
  },
  yacimiento_id: {
    type: _sequelize["default"].TEXT,
    foreignKey: true
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'planta'
});

/*
Planta.belongsTo(Alquiler,{foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});
Alquiler.hasMany(Planta, {foreignKey: 'alquiler_id', sourceKey: 'alquiler_id'});

Planta.hasMany(Mantenimiento, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Mantenimiento.belongsTo(Planta,{foreignKey: 'planta_id', sourceKey: 'planta_id'});

Planta.belongsTo(Yacimiento, {foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});
Yacimiento.hasMany(Planta,{foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});

Servicio_extra.belongsTo(Planta, {foreignKey: 'planta_id', sourceKey: 'planta_id'});
Planta.hasMany(Servicio_extra,{foreignKey: 'planta_id', sourceKey: 'planta_id'});
*/
var _default = exports["default"] = Planta;