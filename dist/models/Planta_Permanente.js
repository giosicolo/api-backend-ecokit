"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _Planta = _interopRequireDefault(require("./Planta"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Planta_Permanente = _database.sequalize.define('planta_permanente', {
  planta_permanente_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  planta_id: {
    type: _sequelize["default"].INTEGER,
    foreignKey: true
  },
  dimensiones_translado: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'planta_permantente'
});
_Planta["default"].belongsTo(Planta_Permanente, {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
Planta_Permanente.belongsTo(_Planta["default"], {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
var _default = exports["default"] = Planta_Permanente;