/**
 * Created by Coolspan on 2016/4/4.
 */

var userHanlder = {};

userHanlder.getInfo = function (req, res, next) {
    //console.log(req.params)//URL
    console.log(req.body)//POST
    console.log(req.query)//GET
    res.json({"name": req.query.name})
    //next()
}
module.exports = userHanlder;