var express = require('express');
var router = express.Router();
var videoController = require('../controllers/videos.controller');

// getAll
router.get('/all', videoController.getAllVideos);
router.get('/all/:id', videoController.getVideoByCandidate);

module.exports = router;
