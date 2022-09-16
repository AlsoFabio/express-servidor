const userSchema = require("../models/user-model");

const ctrlUser = {};

ctrlUser.postUSER = (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((datos) => res.json(datos))
    .catch((error) => res.json({ message: error }));
};

module.exports=ctrlUser;