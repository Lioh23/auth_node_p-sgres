// importando o sequelize
const Sequelize = require('sequelize');

//importando as configurações do database
const dbConfig = require('../config/database');

const User = require('../models/User')

// conectando com a base de dados
const connection = new Sequelize(dbConfig);

User.init(connection);

// exportar a conexão
module.exports = connection;