"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _yacimiento = _interopRequireDefault(require("./yacimiento"));
var _remito = _interopRequireDefault(require("./remito"));
var _alquiler = _interopRequireDefault(require("./alquiler"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Empresa = _database.sequalize.define('empresa', {
  empresa_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  razon_social: {
    type: _sequelize["default"].TEXT
  },
  direccion: {
    type: _sequelize["default"].TEXT
  },
  cuit: {
    type: _sequelize["default"].TEXT
  },
  contacto: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'empresa'
});

/*Yacimiento.belongsTo(Empresa, {foreignKey: 'empresa_id', sourceKey: 'empresa_id'});
Empresa.hasMany(Yacimiento,{foreignKey: 'empresa_id', sourceKey: 'empresa_id'});
*/
_remito["default"].belongsTo(Empresa, {
  foreignKey: 'empresa_id',
  sourceKey: 'empresa_id'
});
Empresa.hasMany(_remito["default"], {
  foreignKey: 'empresa_id',
  sourceKey: 'empresa_id'
});
_alquiler["default"].belongsTo(_alquiler["default"], {
  foreignKey: 'empresa_id',
  sourceKey: 'empresa_id'
});
Empresa.hasMany(_alquiler["default"], {
  foreignKey: 'empresa_id',
  sourceKey: 'empresa_id'
});
var _default = exports["default"] = Empresa;