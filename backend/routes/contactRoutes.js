const express = require("express")
const contactRouter = express.Router();

const contactController = require("../controllers/contactControllers")

contactRouter.post("/", contactController.saveContact)
contactRouter.get("/", contactController.getContact)

module.exports = contactRouter;