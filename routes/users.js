var express = require('express');
var router = express.Router();

var UserHandler = require('../handlers/UserHandler');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/getInfo', function (req, res, next) {
    //res.send('respond with a resource');
    UserHandler.getInfo(req, res, next)
});

router.post('/getInfo', function (req, res, next) {
    //res.send('respond with a resource');
    UserHandler.getInfo(req, res, next)
});

module.exports = router;
