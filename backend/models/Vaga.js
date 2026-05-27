const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Usuario = require('./Usuario');

const Vaga = sequelize.define('Vaga', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titulo: { type: DataTypes.STRING, allowNull: false },
  descricao: { type: DataTypes.TEXT, allowNull: false },
  requisitos: { type: DataTypes.TEXT },
  status: { type: DataTypes.ENUM('aberta', 'fechada'), defaultValue: 'aberta' },
}, { timestamps: true });

Vaga.belongsTo(Usuario, { as: 'empresa', foreignKey: 'empresaId' });
Usuario.hasMany(Vaga, { foreignKey: 'empresaId' });

module.exports = Vaga;
