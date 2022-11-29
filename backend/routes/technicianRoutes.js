const express = require("express");
const technicianRouter = express.Router();
const technicianController = require("../controllers/technicianController");
const { authAdmin } = require("../middleware/empAuth");

technicianRouter.post("/register", technicianController.technicianRegister);
technicianRouter.post("/login", technicianController.signTechnician);
technicianRouter.get("/",  technicianController.allTechnicians);
technicianRouter.get("/:id",  technicianController.getTechnician);
technicianRouter.delete("/:id",  technicianController.deleteTechnician);

module.exports = technicianRouter;
