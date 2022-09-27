const taskSchema = require("../models/tasks-model");

const ctrlTask = {};

// mostrar tareas
ctrlTask.getTasks = async (req, res) => {
  const tarea = await taskSchema.find();
  try {
    return res.render('index',{tarea});
  } catch (error) {
    return res.json((error.message = "mal"));
  }
};

// mostrar una tarea
ctrlTask.getTask = async (req, res) => {
  const id = req.params.id;
  const tarea = await taskSchema.find({ id });
  try {
    return res.render('index',{tarea});
  } catch (error) {
    return res.json((error.message = "mal"));
  }
};
// agregar tareas
ctrlTask.postTask = async (req, res) => {
  try {
    const { taskname, description, id } = req.body;
    const newTask = new taskSchema({
      taskname,
      description,
      id,
    });

    const task = await newTask.save();
    return res.json(task);
  } catch (error) {
    res.status(404).json(error);
  }
};

// actualizar tarea
ctrlTask.putTask = async (req, res) => {
  const id = req.params.id;
  const { taskname, description } = req.body;
  try {
  const tarea = await taskSchema.findOneAndUpdate(
    id,
    { taskname, description }
  );
    return res.render('index',{tarea});
  } catch (error) {
    return res.json((error.message = "mal"));
  }
};

// cambiar estado
ctrlTask.deleteTaskStatus = async (req, res) => {
  const id = req.params.id;
  const tarea = await taskSchema.findOneAndUpdate({ id }, { status: false });
  try {
    return res.json(tarea);
  } catch (error) {
    return res.json((error.message = "mal"));
  }
};

// eliminar una tarea
ctrlTask.deleteTask = async (req, res) => {
  const id = req.params.id;
  const tarea = await taskSchema.findOneAndDelete({ id });
  try {
    return res.json(tarea);
  } catch (error) {
    return res.json((error.message = "mal"));
  }
};
module.exports = ctrlTask;
