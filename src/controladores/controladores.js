const ctrl={};

ctrl.ctrlGET=(req,res)=>{
    res.json({
        msg:'petición GET'
    });
}
ctrl.ctrlPOST=(req,res)=>{
    res.json({
        msg:'petición POST'
    });
}
ctrl.ctrlPUT=(req,res)=>{
    res.json({
        msg:'petición PUT'
    });
}
ctrl.ctrlDELETE=(req,res)=>{
    res.json({
        msg:'petición DELETE'
    });
}

module.exports=ctrl;