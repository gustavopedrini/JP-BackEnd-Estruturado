const RepostioriePessoa = require('../repositories/pessoa.js');
const repositorie = new RepostioriePessoa()

class ServicePessoa{

    async GetNome(id){
        if(isNaN(id)){
            throw new Error('Parâmetro inválido')
        }

        return repositorie.GetNome(id);
    }

    async GetPessoas(){
        return repositorie.GetPessoas();
    }

    async Add(nome, email, senha){
        if(!nome || !email || !senha){
            throw new Error('Parâmetros inválidos')
        }

        repositorie.Add(nome, email, senha);
    }

    async Update(nome, email, senha, id){
        if(isNaN(id)){
            throw new Error('Parâmetros inválidos')
        }

        repositorie.Update(nome, email, senha, id)
    }

    async Delete(id){
        if(isNaN(id)){
            throw new Error('Parâmetro inválido')
        }

        repositorie.Delete(id)
    }

}

module.exports = ServicePessoa
