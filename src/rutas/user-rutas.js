const routes = require("express").Router();

const {
  postUSER,
  getUSER,
  getUSERS,
  putUSER,
  deleteUSER,
} = require("../controladores/controladores-user");
const url = "/usuarios";

routes.post(url, postUSER);
routes.get(url, getUSERS);
routes.get(url + "/:id", getUSER);
routes.put(url + "/:id", putUSER);
routes.delete(url + "/:id", deleteUSER);

module.exports = routes;
