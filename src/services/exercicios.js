const RepostiorieExercicios = require('../repositories/exercicios.js');
const repositorie = new RepostiorieExercicios()

class ServiceExercicios{

    async GetNome(id){
        if(isNaN(id)){
            throw new Error('Parâmetro inválido')
        }

        return repositorie.GetNome(id);
    }

    Add(nome){
        if(!nome){
            throw new Error('Parâmetro inválido')
        }

        repositorie.Add(nome);
    }

    GetNomes(){
        return repositorie.GetNomes();
    }

    Update(nome, index){
        if(!nome || isNaN(index)){
            throw new Error('Parâmetro inválido')
        }

        repositorie.Update(nome,index)
    }

    Delete(index){
        if(isNaN(index)){
            throw new Error('Parâmetro inválido')
        }

        repositorie.Delete(index)
    }

}

module.exports = ServiceExercicios
