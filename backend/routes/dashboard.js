const express = require('express');
const router = express.Router();
const Vaga = require('../models/Vaga');
const Candidatura = require('../models/Candidatura');
const Usuario = require('../models/Usuario');

router.get('/estatisticas', async (req, res) => {
  try {
    const totalVagas = await Vaga.count();
    const vagasAbertas = await Vaga.count({ where: { status: 'aberta' } });
    const totalCandidaturas = await Candidatura.count();
    const totalJovens = await Usuario.count({ where: { tipo: 'jovem' } });
    const totalEmpresas = await Usuario.count({ where: { tipo: 'empresa' } });

    res.json({
      totalVagas,
      vagasAbertas,
      totalCandidaturas,
      totalJovens,
      totalEmpresas
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
