const express = require("express");
const contactSchema = require("../Models/contacts");
const router = express.Router();

//crear nuevo contacto
router.post("/contact", (req, res) => {
  var contact = new contactSchema();
  const date = new Date().toISOString();
  contact.email = req.body.email;
  contact.comment = req.body.comment;
  contact.date = date;
  contact.contacted = false;
  contact
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
