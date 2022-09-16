const express =require('express');
require('dotenv').config();
const app=express();
const port=process.env.PORT || 3000;



app.use(require('./rutas/rutas'))

app.listen(port,()=>console.log(`Conectado al puerto ${port}`))
