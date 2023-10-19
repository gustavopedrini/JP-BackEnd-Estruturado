const ServicePessoa = require('../services/pessoa.js');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const config = require('../config')
const service = new ServicePessoa();

class ControllerPessoa{

    async Login(req, res){ 
        const {email, senha} = req.body; // mesma coisa que fazer: ( const email = req.body.email; | const senha = req.body.senha ), porém tudo em uma linha.

        if(!email || !senha){
            res.status(401).json({
                message: "E-mail ou senha inválido"
            })
        }

        const { dataValues: pessoa} = await service.GetPessoaPorEmail(email)

        if(!pessoa){
            res.status(401).json({
                message: "E-mail ou senha inválido"
            })
        }
        
        if(!(await bcrypt.compare(senha, pessoa.senha))){
            res.status(401).json({
                message: "E-mail ou senha inválido"
            })
        }

        const token = jwt.sign({ // passar permissão aqui (desafio)
            id: pessoa.id,
            email: pessoa.email,
            nome: pessoa.nome
        },
            config.secret
        )

        res.json({
            token
        })
    }

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