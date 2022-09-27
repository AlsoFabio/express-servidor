const express = require("express");
require("dotenv").config();
const mongo = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
require('ejs');
const path = require('path');

const app = express();

// configuracion de variabbles de entorno
const port = process.env.PORT || 3000;

// coneccion a la bd
mongo
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("CONECTADO AL MONGOLO ATLAS"))
  .catch((error) => console.log(error));

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// motor de plantillas ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// rutas
app.use(require("./rutas/rutas-home"));
app.use(require('./rutas/user-rutas'));
app.use(require('./rutas/task-rutas'));

app.listen(port, () => console.log(`Conectado al puerto http://localhost:${port}`));
