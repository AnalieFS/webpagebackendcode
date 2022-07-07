const express = require('express');
const mongoose = require('mongoose');
const userContact = require('./Routes/Contact');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//Middleware config
app.use(express.json());
app.use('/api', userContact);


app.get("/", (req, res) => {
  res.send("WELCOME");
});

// MongoDB Conn
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => console.log("Error connection" + error));

app.listen(port, () =>
  console.log("Connection Succesfull")
);
