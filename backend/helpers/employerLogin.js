const Joi = require("joi");

//employer validation

exports.validEmployer = (employer) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  return schema.validate(employer);
};
