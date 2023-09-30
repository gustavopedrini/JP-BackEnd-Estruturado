const Pessoa = require('../models/pessoa')

class RepostioriePessoa{

    async GetNome(id){
        return Pessoa.findOne({
            where: { id }
        })
    }

    async GetPessoas(){
        return Pessoa.findAll()
    }

    async Add(nome, email, senha){
        Pessoa.create({
            nome: nome,
            email: email,
            senha: senha
        });
    }

    async Update(nome, email, senha, id){
        Pessoa.update({
            nome: nome,
            email: email,
            senha: senha,
        },{
            where: { id }
        })
    }

    async Delete(id){
        Pessoa.destroy({
            where: { id }
        })
    }
}

module.exports = RepostioriePessoa