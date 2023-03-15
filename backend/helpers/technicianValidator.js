const Joi = require("joi");

//technician validation

exports.validateTechnician = (technician) => {
  const schema = Joi.object().keys({

    fullName: Joi.string(),
    phoneNumber: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string().min(6),
    confirmPassword: Joi.ref('password'),
    gender: Joi.string(),
    idNumber: Joi.string().min(8),
    profile: Joi.string(),
    location: Joi.string(),
    idPhoto: Joi.string(),
    registerAs: Joi.string(),
    specialization: Joi.string(),
    experience: Joi.string().max(2),
    refereeName: Joi.string(),
    refereeNumber: Joi.string()
  });

  return schema.validate(technician);
};
