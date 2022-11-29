const express = require("express")
const contactRouter = express.Router();

const contactController = require("../controllers/contactControllers")

contactRouter.post("/", contactController.saveContact)

module.exports = contactRouter;