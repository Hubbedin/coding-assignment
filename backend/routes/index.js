var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();

router.get('/dashboard', (req, res, next) => res.send("It's work!"));
router.get('/', function(req, res, next) {
  const api = process.env.API_V1;
  res.redirect(301, `${api}/candidate/logged_in`);
});

module.exports = router;
