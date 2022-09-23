const express = require("express");
require("dotenv").config();
const mongo = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3000;

mongo
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("CONECTADO A MONGO ATLRAS"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use(morgan());
app.use(cors());
app.use(require("./rutas/rutas-home"));
app.use(require('./rutas/user-rutas'));
app.use(require('./rutas/task-rutas'));

app.listen(port, () => console.log(`Conectado al puerto http://localhost:${port}`));
