const { request, response } = require("express");
const Usuario = require("../models/users");
var bcrypt = require("bcryptjs");

const usersGET = async (req = request, res = response) => {
  try {
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo GET",
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo GET");
  }
};

const usersPOST = async (req = request, res = response) => {
  try {
    //Vamos a insertar en la base de datos un registro

    //Los datos que nos envia el front end vienen en el body del
    //request
    const body = req.body;

    //Desestructuramos lo que viene en el body
    const { name, email, password, rol, google } = req.body;

    //creo un objeto del tipo
    //const usuario= new Usuario(body);

    //Vamos a encriptar la clave, necesito un inst un paquete llamado bcryptjs

    const usuario = new Usuario({ name, email, password, rol, google });

    //creamos las vueltas del  encriptado
    const salt = bcrypt.genSaltSync();

    //Encriptamos el password
    usuario.password = bcrypt.hashSync(password, salt);

    //Vamos a revisar que el correo no se duplique al enviar una peticion
    // Tomamos la instancia de la base de datos y revisamos si existe

    //Vamos a revisar que el email sea valido
    //descarmagos el express-validator

    //Registro en la base de datos
    await usuario.save();

    //Retornamos el resultado de la llamada
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo POST",
      usuario,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo POST");
  }
};

const usersPUT = async (req = request, res = response) => {
  try {
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo PUT",
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo PUT");
  }
};

const usersDELETE = async (req = request, res = response) => {
  try {
    res.json({
      ok: 200,
      msg: "Mensaje desde el metodo DELETE",
    });
  } catch (err) {
    console.log(err);
    throw new Error("Error en el metodo DELETE");
  }
};

module.exports = {
  usersGET,
  usersPOST,
  usersPUT,
  usersDELETE,
};
