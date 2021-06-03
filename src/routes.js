// importando o express
const express = require('express');
const DashboardController = require('./controllers/DashboardController');
const UserController = require('./controllers/UserController');
const authMiddleware = require('./middlewares/auth');

// atribuindo as funcionalidades de rotas para rotuer
const rotuer = express.Router();

// capturando todos os usuários da minha base de dados
rotuer.get('/users', UserController.index);

// Armazenando um usuário na minha base de dados
rotuer.post('/users', UserController.store)

rotuer.post('/users/find', UserController.find);

rotuer.post('/authenticate', UserController.authenticate)

//middleware de autenticacao
rotuer.use(authMiddleware);

rotuer.get('/', DashboardController.index);



// exportando as requisições existentes neste arquivo
module.exports = rotuer;