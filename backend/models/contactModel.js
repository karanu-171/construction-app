const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    email: String,
    subject: String,
    message: String
});

const Contact = mongoose.model("Contact", contactSchema);

exports.Contact = Contact;
