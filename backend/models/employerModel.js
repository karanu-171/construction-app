const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({

    profPic: String,
    fullName: String,
    phoneNumber: String,
    email: String,
    location: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false
    },
    date:{
        type:Date,
        default:Date.now
    },
    isLoggedIn: {
      type: Boolean,  
      default: false
    },
    
});

const Employer = mongoose.model("Employer", employerSchema);

exports.Employer = Employer;
