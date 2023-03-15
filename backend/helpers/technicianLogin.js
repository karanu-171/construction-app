const Joi = require("joi");

//technician validation

exports.validTechnician = (technician) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(technician);
};
