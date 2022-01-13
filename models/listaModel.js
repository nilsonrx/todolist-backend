const mongoose = require('mongoose')

const Tarefa = new mongoose.Schema ({

    titulo: {type: String, required: true},
    descricao: {type: String, required: true},
    prioridade: {type: String, required: true},
    status:{type: String, required: true},
    prazo:{type: String, required:true},
    datadecriacao:{type:Date, default:Date.now},

})

module.exports = mongoose.model('tarefa', Tarefa)