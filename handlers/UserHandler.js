/**
 * Created by Coolspan on 2016/4/4.
 */

var userHanlder = {};


var SSDB = require('./SSDB');
var ssdb = SSDB.connect("127.0.0.1", "8888", 30 * 1000,function(){
    console.error("-----------------------")
});
userHanlder.getInfo = function (req, res, next) {
    //console.log(req.params)//URL
    console.log(req.body)//POST
    console.log(req.query)//GET

    ssdb.set('a', new Date(), function () {
        console.log('set a');
    });

    ssdb.get('a', function (err, val) {
        console.log('get a = ' + val);
        //ssdb.close();
    });


    res.json({"name": req.query.name})
    //next()
}


module.exports = userHanlder;