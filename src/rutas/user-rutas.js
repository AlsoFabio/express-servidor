const routes = require("express").Router();
const { postUSER } = require("../controladores/controladores-user");

routes.post('/crear-usuario', postUSER);

module.exports = routes;
