const express = require('express')

const listaControllers = require('../controllers/listaControllers')

const router = express.Router()

router.post('/add', listaControllers.createTarefa)
router.put('/:id', listaControllers.updateTarefa)
router.delete('/:id', listaControllers.deleteTarefa)
router.get('/:id', listaControllers.getTarefaById)
router.get('/', listaControllers.getTarefas)

module.exports = router