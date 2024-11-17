const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/proximaParada', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.log('Erro de conexão ao MongoDB:', err);
});

// Inicializando o Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());  // Para processar JSON

// Rotas
const roteirosRouter = require('./routes/roteiros');
const assentosRouter = require('./routes/assentos');
const pagamentosRouter = require('./routes/pagamentos');

// Usando as rotas
app.use('/api/roteiros', roteirosRouter);
app.use('/api/assentos', assentosRouter);
app.use('/api/pagamentos', pagamentosRouter);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

