const routes = require('express').Router();
const url='/home';
const { 
    getHOME,
    postHOME,
    putHOME,
    deleteHOME
} = require('../controladores/controladores-home');


routes.get(url,getHOME);
routes.post(url,postHOME);
routes.put(url,putHOME);
routes.delete(url,deleteHOME);

module.exports=routes;