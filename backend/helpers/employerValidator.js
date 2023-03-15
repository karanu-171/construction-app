const Joi = require("joi");

//employer validation

exports.validateEmployer = (employer) => {
  const schema = Joi.object().keys({
    fullName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    location: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref("password"),
  });

  return schema.validate(employer);
};
