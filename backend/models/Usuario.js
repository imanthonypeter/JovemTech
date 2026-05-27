const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Usuario = sequelize.define('Usuario', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  senha: { type: DataTypes.STRING, allowNull: false }, // Simulação (sem bcrypt por simplicidade inicial)
  tipo: { type: DataTypes.ENUM('empresa', 'jovem'), allowNull: false }
}, { timestamps: true });

module.exports = Usuario;
