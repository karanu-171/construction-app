const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const multer = require("multer")
const { Technician } = require("../models/technicianModel");
const { validateTechnician } = require("../helpers/technicianValidator");
const { validTechnician } = require("../helpers/technicianLogin");
//const cloudinary = require("../utils/cloudinary");


//getTechnicians

async function allTechnicians(req, res) {
  try {
    // const technicians = await Technician.find({approved:"yes"});
    const technicians = await Technician.find({});
    res.status(200).send(technicians);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}

//getTechnician

async function getTechnician(req, res) {
  const technicianId = req.params.id
  try {
    const technician = await Technician.findById(technicianId)
    res.status(200).send(technician);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}


async function technicianRegister(req, res) {
  const { error } = validateTechnician(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { fullName, email, phoneNumber, password, confirmPassword, gender, location, idNumber, profile, idPhoto, 
    registerAs, specialization, experience, refereeName,refereeNumber, } = req.body;
  try {
    //check if technician exists
    let user = await Technician.findOne({ email: email });
    if (user) res.status(400).send("User with that email already exist..");

    // const result = await cloudinary.uploader.upload(profile, {
    //   folder: "products"
    // })
    // const results = await cloudinary.uploader.upload(idPhoto, {
    //   folder: "products"
    // })

    const technician = new Technician({
      fullName,
      email,
      phoneNumber,
      password,
      confirmPassword,
      gender,
      location,
      idNumber,
      profile, 
      idPhoto,
      registerAs,
      specialization,
      experience,
      refereeName,
      refereeNumber
    });

    const salt = await bcrypt.genSalt(10);

    technician.password = await bcrypt.hash(technician.password, salt);

    await technician.save();

    //generating a token

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(
      {
        _id: technician._id,
        name: technician.name,
        email: technician.email,
        phoneNumber: technician.phoneNumber,
      },
      secretKey
    );

    //   return success response
    res.send(token);
  } catch (error) {
    res.send(error.message);
    console.log(error);
  }
}

//sign technician

async function signTechnician(req, res) {
  const { error } = validTechnician(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //check if technician exists

    let technician = await Technician.findOne({ email: req.body.email });
    if (!technician){ 
      res.status(400).send("invalid email or password ..")
  }

    //compare password

    const validTechnician = await bcrypt.compare(req.body.password, technician.password);

    if (!validTechnician) return res.status(400).send("Invalid email or password..");

    //generating a token

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(
      {
        _id: technician._id,
        fullName: technician.fullName,
        email: technician.email,
        phoneNumber: technician.phoneNumber,
      },
      secretKey
    );

    //   return success response
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}

//delete technician

async function deleteTechnician(req, res) {
  try {
    const user = await Technician.findById(req.params.id);
    if (!user) return res.status(404).send("User not found..");
    const deleteAUser = await Technician.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: "User deleted...",
    });
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}


module.exports = {
  technicianRegister,
  signTechnician,
  allTechnicians,
  getTechnician,
  deleteTechnician,
};
