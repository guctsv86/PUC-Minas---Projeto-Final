const express = require('express');
const router = express.Router();

// Dados de exemplo (mock)
const assentos = [
  { id: 1, assento: '1A', disponivel: true },
  { id: 2, assento: '1B', disponivel: false },
  { id: 3, assento: '2A', disponivel: true },
  { id: 4, assento: '2B', disponivel: true }
];

// Rota para obter todos os assentos
// Obter assentos disponíveis
router.get('/:idRoteiro', (req, res) => {
  const idRoteiro = req.params.idRoteiro;
  // Mock de dados
  const assentos = [
    { numero: '12A', status: 'livre' },
    { numero: '12B', status: 'ocupado' },
    { numero: '13A', status: 'livre' }
  ];
  res.json(assentos);
});

// Rota para verificar a disponibilidade de um assento específico
router.get('/:id', (req, res) => {
  const assento = assentos.find(a => a.id === parseInt(req.params.id));

  if (assento) {
    res.json(assento);
  } else {
    res.status(404).json({ message: 'Assento não encontrado' });
  }
});

// Rota para reservar um assento
router.put('/:id', (req, res) => {
  const assento = assentos.find(a => a.id === parseInt(req.params.id));

  if (assento) {
    if (assento.disponivel) {
      assento.disponivel = false;
      res.json({ message: 'Assento reservado com sucesso', assento });
    } else {
      res.status(400).json({ message: 'Assento já está reservado' });
    }
  } else {
    res.status(404).json({ message: 'Assento não encontrado' });
  }
});

// Exportar o roteador
module.exports = router;
