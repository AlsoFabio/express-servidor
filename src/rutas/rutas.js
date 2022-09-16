const routes = require('express').Router();

const { 
    getHOME,
    postHOME,
    putHOME,
    deleteHOME
} = require('../controladores/controladores-home');


routes.get('/home',getHOME);
routes.post('/home',postHOME);
routes.put('/home',putHOME);
routes.delete('/home',deleteHOME);

module.exports=routes;