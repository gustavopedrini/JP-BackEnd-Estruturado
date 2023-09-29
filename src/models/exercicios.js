const sequelize = require('../database')
const { DataTypes } = require('sequelize');

const Pessoa = sequelize.define('pessoas', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true
    },

    senha: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    createdAt: false,
    updatedAt: false
}) // VAI DEFINIR UMA TABELA PARA ESSA CLASSE

module.exports = Pessoa