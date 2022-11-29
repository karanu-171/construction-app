const express = require("express");
const employerRouter = express.Router();
const employerController = require("../controllers/employerController");
const { authAdmin } = require("../middleware/empAuth");

employerRouter.post("/register", employerController.employerRegister);
employerRouter.post("/login", employerController.signEmployer);
employerRouter.get("/",  employerController.allEmployers);
employerRouter.delete("/:id",  employerController.deleteEmployer);

module.exports = employerRouter;
