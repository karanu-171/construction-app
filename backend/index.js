const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',
  parameterLimit: 100000,
  extended: true 
}));

require("dotenv").config();

app.use("/employer", require("./routes/employerRoutes"));
app.use("/technician", require("./routes/technicianRoutes"));
app.use("/contact", require("./routes/contactRoutes"));

const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

mongoose.set('strictQuery', false);
mongoose
  .connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db connection established");
  })
  .catch((error) => {
    console.error("Mongodb connection failed:", error.message);
  });
