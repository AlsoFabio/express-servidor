const routes = require('express').Router();

const { 
    ctrlGET,
    ctrlPOST,
    ctrlPUT,
    ctrlDELETE
} = require('../controladores/controladores');


routes.get('/home',ctrlGET);
routes.post('/home',ctrlPOST);
routes.put('/home',ctrlPUT);
routes.delete('/home',ctrlDELETE);

module.exports=routes;