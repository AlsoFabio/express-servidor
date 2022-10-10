const taskSchema = require("../models/tasks-model");

const ctrlTask = {};

// mostrar tareas
ctrlTask.getTasks = async (req, res) => {
  const tarea = await taskSchema.find();
  try {
    return res.render('index', {tarea});
  } catch (error) {
    return res.json({error:error.message});
  }
};

// mostrar una tarea
ctrlTask.getTask = async (req, res) => {
  const id = req.params._id;
  const tarea = await taskSchema.findById( id );
  try {
    return res.json('index', {tarea});
  } catch (error) {
    return res.json({error:error.message});
  }
};
// agregar tareas
ctrlTask.postTask = async (req, res) => {
  try {
    const { taskname, description } = req.body;
    const newTask = new taskSchema({
      taskname,
      description,
    });

    const task = await newTask.save();
    return res.json({task});
  } catch (error) {
    res.status(404).json({error:error.message});
  }
};

// actualizar tarea
ctrlTask.putTask = async (req, res) => {
  const id = req.params._id;
  const { taskname, description } = req.body;
  try {
  const tarea = await taskSchema.findByIdAndUpdate(
    id,
    { taskname, description }
  );
    return res.json({tarea});
  } catch (error) {
    return res.json({error:error.message});
  }
};

// cambiar estado
ctrlTask.deleteTaskStatus = async (req, res) => {
  const id = req.params._id;
  const tarea = await taskSchema.findByIdAndUpdate( id , { status: false });
  try {
    return res.json({tarea});
  } catch (error) {
    return res.json({error:error.message});
  }
};

// eliminar una tarea
ctrlTask.deleteTask = async (req, res) => {
  const id = req.params._id;
  const tarea = await taskSchema.findByIdAndDelete( id );
  try {
    return res.json({tarea});
  } catch (error) {
    return res.json({error:error.message});
  }
};
module.exports = ctrlTask;
