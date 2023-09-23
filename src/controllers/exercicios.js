const ServiceExercicios = require('../services/exercicios.js');
const service = new ServiceExercicios();

class ControllerExercicios{

    GetNome(req, res){
        try{
            const resultado = service.GetNome(req.params.index)
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

    Add(req, res){
        try{
            const resultado = service.Add(req.body.nome)
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

    GetNomes(_, res){
        try{
            const resultado = service.GetNomes()
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

    Update(req, res){
        try{
            const resultado = service.Update(req.body.nome, req.params.index)
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

    Delete(req,res){
        try{
            const resultado = service.Delete(req.params.index)
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

module.exports = ControllerExercicios