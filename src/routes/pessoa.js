const express = require('express');
const ControllerExercicio = require('../controllers/pessoa');
const authMiddleware = require('../middleware/auth');

const controller = new ControllerExercicio();
const router = express.Router();

router.post('/api/login', controller.Login)
router.get('/api/nome/:id', authMiddleware, controller.GetNome)
router.post('/api/pessoa', authMiddleware, controller.Add)
router.post('/api/pessoas', authMiddleware, controller.GetPessoas)
router.put('/api/pessoa/:id', authMiddleware, controller.Update)
router.delete('/api/pessoa/:id', authMiddleware, controller.Delete)

module.exports = router