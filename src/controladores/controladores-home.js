const ctrlHOME={};

ctrlHOME.getHOME=(req,res)=>{
    res.json({
        msg:'petición GET'
    });
}
ctrlHOME.postHOME=(req,res)=>{
    res.json({
        msg:'petición POST'
    });
}
ctrlHOME.putHOME=(req,res)=>{
    res.json({
        msg:'petición PUT'
    });
}
ctrlHOME.deleteHOME=(req,res)=>{
    res.json({
        msg:'petición DELETE'
    });
}

module.exports=ctrlHOME;