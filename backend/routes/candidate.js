var express = require('express');
var router = express.Router();
var candidateController = require('../controllers/candidate.controller');

// getAll
router.get('/all', candidateController.getAllCandidate);

module.exports = router;
