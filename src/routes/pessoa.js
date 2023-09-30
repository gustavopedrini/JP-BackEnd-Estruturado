const express = require('express')
const ControllerPessoa = require('../controllers/pessoa.js')

const controller = new ControllerPessoa()
const router = express.Router()

router.get('/api/nome/:id', controller.GetNome)
router.post('/api/pessoa', controller.Add)
router.post('/api/pessoas', controller.GetPessoas)
router.put('/api/pessoa/:id', controller.Update)
router.delete('/api/pessoa/:id', controller.Delete)

module.exports = router