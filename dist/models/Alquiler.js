"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Alquiler = _database.sequalize.define('alquiler', {
  alquiler_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  fecha_inicio: {
    type: _sequelize["default"].DATE
  },
  fecha_fin: {
    type: _sequelize["default"].DATE
  },
  monto_base: {
    type: _sequelize["default"].INTEGER
  },
  vendedor_id: {
    type: _sequelize["default"].INTEGER
  },
  empresa_id: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'alquiler'
});

//Falta agregar Relaciones
var _default = exports["default"] = Alquiler;