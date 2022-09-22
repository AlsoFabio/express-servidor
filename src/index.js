const express = require("express");
require("dotenv").config();
const mongo = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

mongo
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("CONECTADO A MONGO ATLRAS"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(require("./rutas/rutas-home"));
app.use(require('./rutas/user-rutas'));

app.listen(port, () => console.log(`Conectado al puerto http://localhost:${port}`));
