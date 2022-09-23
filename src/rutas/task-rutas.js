const routes = require("express").Router();
const { getTasks, getTask, postTask, putTask, deleteTask, deleteTaskStatus } = require("../controladores/controladores-task");

routes.get("/tareas", getTasks);
routes.get("/tareas/:id", getTask);
routes.post("/tareas", postTask);
routes.put("/tareas/:id", putTask);
routes.delete("/tareas/estado/:id", deleteTaskStatus);
routes.delete("/tareas/:id", deleteTask);

module.exports = routes;
