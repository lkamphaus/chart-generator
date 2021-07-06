var controller = require('./controllers');
var router = require('express').Router();

router.get('/charts', controller.charts.get);

module.exports = router;