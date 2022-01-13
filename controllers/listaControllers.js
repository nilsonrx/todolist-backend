const Tarefa = require("../models/listaModel");

createTarefa = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "A tarefa deve ser fornecida",
    });
  }

  const tarefa = new Tarefa(body);

  if (!tarefa) {
    return res.status(400).json({ success: false, error: err });
  }

  tarefa
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: tarefa._id,
        message: "Tarefa criada com sucesso",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Tarefa não foi adicionada",
      });
    });
};

updateTarefa = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "Sua tarefa foi atualizada com sucesso",
    });
  }
  await Tarefa
    .updateOne({ _id: req.params.id }, body)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: "Tarefa atualizada!",
      });
    })
    .catch((error) => {
        console.log(error);
      return res.status(404).json({
        error,
        message: "Tarefa não atualizada!",
      });
    
    });
};

deleteTarefa = async (req, res) => {
  await Tarefa.findOneAndDelete({ _id: req.params.id }, (err, tarefa) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!Tarefa) {
      return res
        .status(404)
        .json({ success: false, error: `Tarefa não encontrada` });
    }

    return res.status(200).json({ success: true, data: tarefa });
  }).catch((err) => console.log(err));
};

getTarefaById = async (req, res) => {
  await Tarefa.findById(req.params.id, (err, tarefa) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!tarefa) {
      return res
        .status(404)
        .json({ success: false, error: `Tarefa não encontrada` });
    }
    return res.status(200).json({ success: true, data: tarefa });
  }).catch((err) => console.log(err));
};

getTarefas = async (req, res) => {
  await Tarefa.find({}, (err, tarefas) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!tarefas.length) {
      return res
        .status(404)
        .json({ success: false, error: `Tarefa não encontrada` });
    }
    return res.status(200).json({ success: true, data: tarefas });
  }).catch((err) => console.log(err));
};

module.exports = {
  createTarefa,
  updateTarefa,
  deleteTarefa,
  getTarefas,
  getTarefaById,
};
