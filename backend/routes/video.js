var express = require('express');
var router = express.Router();
var videoController = require('../controllers/videos.controller');

// get
router.get('/all', videoController.getAllVideos);
router.get('/all/:id', videoController.getVideoByCandidate);

// post
router.post('/', videoController.postVideo);

module.exports = router;
