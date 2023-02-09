const Usuario = require("../models/users");

const db_ExistEmail = async (email = "") => {
  const existEmail = await Usuario.findOne({ email }).exec();
  if (existEmail) {
    console.log("Entre al email exist");
    throw new Error("El email ya existe");
  }
};

module.exports = {
  db_ExistEmail,
};
