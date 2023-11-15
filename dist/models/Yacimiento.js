"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _planta = _interopRequireDefault(require("./planta"));
var _empresa = _interopRequireDefault(require("./empresa"));
var _ubicacion = _interopRequireDefault(require("./ubicacion"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Yacimiento = _database.sequalize.define('yacimiento', {
  nombre_id: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  cant_operadores: {
    type: _sequelize["default"].INTEGER
  },
  cant_banios_quimicos: {
    type: _sequelize["default"].INTEGER
  },
  telefono_contacto: {
    type: _sequelize["default"].TEXT
  },
  empresa_id: {
    type: _sequelize["default"].TEXT,
    foreignKey: true
  },
  ubicacion_id: {
    type: _sequelize["default"].TEXT,
    foreignKey: true
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'yacimiento'
});

/*Planta.belongsTo(Yacimiento, {foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});
Yacimiento.hasMany(Planta,{foreignKey: 'yacimiento_id', sourceKey: 'yacimiento_id'});*/

Yacimiento.belongsTo(_empresa["default"], {
  foreignKey: 'empresa_id',
  sourceKey: 'empresa_id'
});
_empresa["default"].hasMany(Yacimiento, {
  foreignKey: 'empresa_id',
  sourceKey: 'empresa_id'
});

/*Yacimiento.belongsTo(Ubicacion, {foreignKey: 'nombre_id', sourceKey: 'nombre_id'});
Ubicacion.hasMany(Yacimiento,{foreignKey: 'ubicacion_id', sourceKey: 'ubicacion_id'});
*/
var _default = exports["default"] = Yacimiento;