const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Employer } = require("../models/employerModel");
const { validateEmployer } = require("../helpers/employerValidator");
const { validEmployer } = require("../helpers/employerLogin");

//getEmployers

async function allEmployers(req, res) {
  try {
    const employers = await Employer.find({});
    res.status(200).send(employers);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}

//register employer

async function employerRegister(req, res) {
  const { error } = validateEmployer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //check if user exists
    let user = await Employer.findOne({ email: req.body.email });
    if (user) res.status(400).send("User with that email already exist..");

    const { fullName, email, phoneNumber, location, password } = req.body;

    employer = new Employer({
      fullName,
      email,
      phoneNumber,
      location,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    employer.password = await bcrypt.hash(employer.password, salt);

    await employer.save();

    //generating a token

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(
      {
        _id: employer._id,
        fullName: employer.fullName,
        email: employer.email,
        phoneNumber: employer.phoneNumber,
        location: employer.location,
        isAdmin: employer.isAdmin,
      },
      secretKey
    );

    //   return success response
    return res.status(200).send(token);
    
  } catch (error) {
    res.status(500).send(error.message);
  }
}

//sign employer

async function signEmployer(req, res) {
  const { error } = validEmployer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //check if employer exists

    let employer = await Employer.findOne({ email: req.body.email });
    if (!employer) {
     return res.status(400).send("invalid email ...");
    }
    //compare password

    const validEmployer = await bcrypt.compare(req.body.password, employer.password);

    if (!validEmployer) {
      return res.status(400).send("Invalid password ...");
    }

    //generating a token

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(
      {
        _id: employer._id,
        fullName: employer.fullName,
        email: employer.email,
        phoneNumber: employer.phoneNumber,
        location: employer.location,
        isAdmin: employer.isAdmin,
      },
      secretKey
    );

    //   return success response
    if(token){
      res.status(200).send(token);
    }
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}

//delete employer

async function deleteEmployer(req, res) {
  try {
    const user = await Employer.findById(req.params.id);
    if (!user) return res.status(404).send("User not found..");
    const deleteAUser = await Employer.findByIdAndDelete(req.params.id);
    res.status(200).send({
      message: "User deleted...",
    });
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
}

module.exports = {
  employerRegister,
  signEmployer,
  allEmployers,
  deleteEmployer,
};
