"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _database = require("../database/database");
var _yacimiento = _interopRequireDefault(require("./yacimiento"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Ubicacion = _database.sequalize.define('ubicacion', {
  nombre_id: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  latitud: {
    type: _sequelize["default"].TEXT
  },
  longitud: {
    type: _sequelize["default"].TEXT
  },
  comentarios: {
    type: _sequelize["default"].TEXT
  }
});

/*
Yacimiento.belongsTo(Ubicacion, {foreignKey: 'nombre_id', sourceKey: 'nombre_id'});
Ubicacion.hasMany(Yacimiento,{foreignKey: 'ubicacion_id', sourceKey: 'ubicacion_id'});
*/
var _default = exports["default"] = Ubicacion;