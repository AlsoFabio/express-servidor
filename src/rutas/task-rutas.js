const routes = require("express").Router();
const { getTasks, getTask, postTask, putTask, deleteTask, deleteTaskStatus } = require("../controladores/controladores-task");

routes.get("/tareas", getTasks);
routes.get("/tareas/:_id", getTask);
routes.post("/tareas", postTask);
routes.put("/tareas/:_id", putTask);
routes.delete("/tareas/estado/:_id", deleteTaskStatus);
routes.delete("/tareas/:_id", deleteTask);

module.exports = routes;
