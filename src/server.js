// importando o express
const express = require('express');

// importando o arquivo de rotas criado
const routes = require('./routes');

// conectando com a base de dados
require('./database');

// passando o express para uma variável
const app = express();

// permitindo que o express entenda arquivos do tipo json
app.use(express.json());

// usando as rotas criadas dentro do arquivo routes.js
app.use(routes);

// rodando a aplicação
app.listen(3333);