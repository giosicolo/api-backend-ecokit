"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _plantas = _interopRequireDefault(require("./plantas"));
var _Planta = _interopRequireDefault(require("./Planta"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Planta_Movil = _database.sequalize.define('planta_movil', {
  planta_movil_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  planta_id: {
    type: _sequelize["default"].INTEGER,
    foreignKey: true
  },
  estado_rorado: {
    type: _sequelize["default"].TEXT
  },
  dimensiones_instaladas: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'planta_movil'
});
_Planta["default"].belongsTo(Planta_Movil, {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
Planta_Movil.belongsTo(_Planta["default"], {
  foreignKey: 'planta_id',
  sourceKey: 'planta_id'
});
var _default = exports["default"] = Planta_Movil;