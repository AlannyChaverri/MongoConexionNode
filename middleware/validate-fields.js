const { validationResult } = require("express-validator");

const validate_fields = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json(error);
  }
  next();
};

module.exports = {
  validate_fields,
};
