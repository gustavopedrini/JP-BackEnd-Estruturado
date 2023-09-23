const nomes = new Array("Alpha", "Beta", "Charlie")

class RepostiorieExercicios{

    GetNome(index){
        return nomes[index]
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