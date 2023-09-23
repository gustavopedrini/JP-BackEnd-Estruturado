const express = require('express')
const ControllerExercicios = require('../controllers/exercicios.js')

const controller = new ControllerExercicios()
const router = express.Router()

router.get('/api/nome/:index', controller.GetNome)
router.post('/api/nome', controller.Add)
router.post('/api/nomes', controller.GetNomes)
router.put('/api/nome/:index', controller.Update)
router.delete('/api/nome/:index', controller.Delete)

module.exports = router