const { Contact } = require("../models/contactModel");
const { validateContact } = require("../helpers/contactValidator");

async function saveContact(req, res){
    const { error } = validateContact(req.body);
  if (error) return res.status(400).send(error.details[0].message);
    try {
        const { firstName, lastName, email, subject, message } = req.body;

    const contact = new Contact({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

     await contact.save();
       res.status(200).send(contact)
    } catch (error) {
        console.log(error)
    }
}  


module.exports = {
  saveContact
}