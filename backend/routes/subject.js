const express = require('express');
const Router = express.Router();

const subject = require('../data/contact_subject.json');

Router.get('/', (req, res) => {

  res.json(subject); 
});

module.exports = Router;
﻿

 