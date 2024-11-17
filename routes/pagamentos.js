const express = require('express');
const router = express.Router();

// Dados simulados para pagamento
let pagamentos = [
  { id: 1, usuarioId: 123, valor: 199.99, status: 'pendente' },
  { id: 2, usuarioId: 456, valor: 99.99, status: 'pago' }
];

// Rota para obter todos os pagamentos
router.get('/', (req, res) => {
  res.json(pagamentos);
});

// Rota para obter um pagamento específico por ID
router.get('/:id', (req, res) => {
  const pagamento = pagamentos.find(p => p.id === parseInt(req.params.id));
  
  if (pagamento) {
    res.json(pagamento);
  } else {
    res.status(404).json({ message: 'Pagamento não encontrado' });
  }
});

// Rota para realizar um pagamento (exemplo básico)
router.post('/', (req, res) => {
  const { usuarioId, valor } = req.body;
  
  if (!usuarioId || !valor) {
    return res.status(400).json({ message: 'Informações incompletas para o pagamento' });
  }

  // Simulando um pagamento com status "pago"
  const novoPagamento = {
    id: pagamentos.length + 1,
    usuarioId,
    valor,
    status: 'pago'
  };

  pagamentos.push(novoPagamento);
  res.status(201).json({ message: 'Pagamento realizado com sucesso', novoPagamento });
});

// Rota para atualizar o status do pagamento (exemplo)
router.put('/:id', (req, res) => {
  const pagamento = pagamentos.find(p => p.id === parseInt(req.params.id));

  if (pagamento) {
    pagamento.status = req.body.status || pagamento.status;
    res.json({ message: 'Status do pagamento atualizado', pagamento });
  } else {
    res.status(404).json({ message: 'Pagamento não encontrado' });
  }
});

// Exportar o roteador
module.exports = router;
