const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    activo: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports=model('user',userSchema)