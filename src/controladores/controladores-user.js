const userSchema = require("../models/user-model");

const ctrlUser = {};

// generar un uuario
ctrlUser.postUSER = (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((datos) => res.json(datos))
    .catch((error) => res.json({ message: error }));
};

// encontrar todos los usuarios
ctrlUser.getUSERS = (req, res) => {
  userSchema
    .find()
    .then((datos) => res.json(datos))
    .catch((error) => res.json({ message: error }));
};

// encontrar un usuario
ctrlUser.getUSER = (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((datos) => res.json(datos))
    .catch((error) => res.json({ message: error }));
};

// actualizar un usuario
ctrlUser.putUSER = (req, res) => {
  const { id } = req.params;
  const { username, password, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { username, password, email } })
    .then((datos) => res.json(datos))
    .catch((error) => res.json({ message: error }));
};

// eliminar un usuario
ctrlUser.deleteUSER = (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((datos) => res.json(datos))
    .catch((error) => res.json({ message: error }));
};
module.exports = ctrlUser;
