var express = require('express');
var router = express.Router();

router.get('/dashboard', (req, res, next) => res.send("It's work!"));
router.get('/', function(req, res, next) {
  const isLogout = req.query.is_logout;

  res.status(200).json({
    time: Date.now(),
    success: true,
    isLogout
  })
});

module.exports = router;
