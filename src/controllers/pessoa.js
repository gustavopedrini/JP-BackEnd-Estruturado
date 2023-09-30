const ServicePessoa = require('../services/pessoa.js');
const service = new ServicePessoa();

class ControllerPessoa{

    async GetNome(req, res){
        try{
            const resultado = await service.GetNome(req.params.id)
            res.status(200).json({
                nomes: resultado
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async GetPessoas(_, res){
        try{
            const resultado = await service.GetPessoas()
            res.status(200).json({
                nomes: resultado
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async Add(req, res){
        try{
            const resultado = await service.Add(req.body.nome, req.body.email, req.body.senha)
            res.status(200).json({
                adicionado: resultado
            })
            
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async Update(req, res){
        try{
            const resultado = await service.Update(req.body.nome, req.body.email, req.body.senha, req.params.id)
            res.status(200).json({
                alterado: resultado
            })

        }catch(error){
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }

    async Delete(req,res){
        try{
            const resultado = await service.Delete(req.params.id)
            res.status(200).json({
                nomes: resultado
            })
        }catch{
            console.log(error)
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = ControllerPessoa