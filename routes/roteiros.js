const express = require('express');
const router = express.Router();

// Obter todos os roteiros disponíveis
router.get('/', (req, res) => {
    res.json([
        { id: 1, origem: 'São Paulo', destino: 'Rio de Janeiro', preco: 199.99 },
        { id: 2, origem: 'Curitiba', destino: 'Florianópolis', preco: 99.99 }
    ]);
});

// Outras operações (GET, POST, DELETE, etc.)
module.exports = router;