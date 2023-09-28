const sequelize = require('../database')

const Pessoa = sequelize.define('pessoas', {}) // VAI DEFINIR UMA TABELA PARA ESSA CLASSE

module.exports = Pessoa