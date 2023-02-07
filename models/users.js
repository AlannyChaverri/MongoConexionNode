//Necesitamos recuperar un Schema y un modelo de Moongose
const { Schema, model } = require("mongoose");

const SchemaUser = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es un campo requerido"],
  },

  email: {
    type: String,
    required: [true, "El email es un campo requerido"],
  },

  password: {
    type: String,
    required: [true, "El password es un campo requerido"],
  },

  rol: {
    type: String,
    required: [true, "El rol es un campo requerido"],
  },

  google: {
    type: Boolean,
    default: false,
  },
});

//Creamos un metodo sobre escrito para devolver el usuario pero
//con menos valores de los que se necesita para comprobar que lo
//registramos
SchemaUser.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();
  return user;
};
module.exports = model("user", SchemaUser);
