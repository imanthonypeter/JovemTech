const express = require('express');
const router = express.Router();
const Vaga = require('../models/Vaga');
const Usuario = require('../models/Usuario');

// Listar vagas
router.get('/', async (req, res) => {
  try {
    const vagas = await Vaga.findAll({ include: [{ model: Usuario, as: 'empresa', attributes: ['nome', 'email'] }] });
    res.json(vagas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar vaga
router.post('/', async (req, res) => {
  try {
    const { titulo, descricao, requisitos, empresaId } = req.body;
    const novaVaga = await Vaga.create({ titulo, descricao, requisitos, empresaId });
    res.status(201).json(novaVaga);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Atualizar vaga
router.put('/:id', async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) return res.status(404).json({ error: 'Vaga não encontrada' });
    
    await vaga.update(req.body);
    res.json(vaga);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Remover vaga
router.delete('/:id', async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) return res.status(404).json({ error: 'Vaga não encontrada' });
    
    await vaga.destroy();
    res.json({ message: 'Vaga removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
