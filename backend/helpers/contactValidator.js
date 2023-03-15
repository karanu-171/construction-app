const Joi = require("joi");

//contact validation

exports.validateContact = (contact) => {
  const schema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    subject: Joi.string().required(),
    message: Joi.string().required()
  });

  return schema.validate(contact);
};
