const nomes = new Array("Alpha", "Beta", "Charlie")
const Pessoa = require('../models/exercicios')

class RepostiorieExercicios{

    async GetNome(id){
        return Pessoa.findOne({
            where: { id }
        })
    }

    Add(nome){
        console.log(`NOME: ${nome}`)
        nomes.push(nome)
    }

    GetNomes(){
        return nomes
    }

    Update(nome, index){
        nomes[index] = nome
    }

    Delete(index){
        nomes.splice(index,1)
    }
}

module.exports = RepostiorieExercicios