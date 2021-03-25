module.exports = app => {
    const pixls = require('../controllers/pixls.controller');
    var router = require('express').Router();

    //Retrieve all pixls
    router.get('/', function(req, res){
        res.send("hello world");
    } )
    router.post("/", pixls.findAll);
    router.post("/filter", pixls.findFilter );
    app.use('/api/pixls', router);
}