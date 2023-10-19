const Pessoa = require('../models/pessoa')
const bcrypt = require("bcrypt")

class RepostioriePessoa{

    async GetNome(id){
        return Pessoa.findOne({
            where: { id }
        })
    }

    async GetPessoaPorEmail(email){
        return Pessoa.findOne({
            where: { email }
        })
    }

    async GetPessoas(){
        return Pessoa.findAll()
    }

    async Add(nome, email, senha){
        const hashSenha = await bcrypt.hash(pessoa.senha, 10)

        const result = await Pessoa.create(
            {...pessoa, senha: hashSenha} // quebra a variavel
        )

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