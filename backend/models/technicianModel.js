const mongoose = require("mongoose");

const technicianSchema = new mongoose.Schema({

    fullName: String,
    phoneNumber: String,
    email: String,
    password: String,
    gender: String,
    location: String,
    idNumber: String,
    profile: String,
    idPhoto: String,
    registerAs: String,
    specialization: String,
    experience: String,
    refereeName: String,
    refereeNumber: String,
    isAdmin: {
      type: Boolean,
      default: false
    },
    isLoggedIn: {
      type: Boolean,  
      default: false
    },
    date:{
        type:Date,
        default:Date.now
    },
    approved: {
      type: Boolean,
      default: false
    },
    ratings: {
      star: Number,
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Employer"}
    },
    totalRating: {
      type: String,
      default: 0
    }
});

const Technician = mongoose.model("Technician", technicianSchema);

exports.Technician = Technician;
