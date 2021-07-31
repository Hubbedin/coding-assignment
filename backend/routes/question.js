var express = require('express');
var router = express.Router();
var questionController = require('../controllers/question.controller');

// getAll
router.get('/all', questionController.getAllQuestion);

module.exports = router;
