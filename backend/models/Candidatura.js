const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Usuario = require('./Usuario');
const Vaga = require('./Vaga');

const Candidatura = sequelize.define('Candidatura', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  status: { type: DataTypes.ENUM('pendente', 'aprovada', 'rejeitada'), defaultValue: 'pendente' }
}, { timestamps: true });

Candidatura.belongsTo(Usuario, { as: 'jovem', foreignKey: 'jovemId' });
Candidatura.belongsTo(Vaga, { as: 'vaga', foreignKey: 'vagaId' });

Usuario.hasMany(Candidatura, { foreignKey: 'jovemId' });
Vaga.hasMany(Candidatura, { foreignKey: 'vagaId' });

module.exports = Candidatura;
