const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const company = require('../models/company');
// const app = require('../app');



router.post('/createCompany' , function(req , res){
    // res.send(req.body.name);
    new company({
        name:req.body.name,
        registrationId : req.body.regId,
        city:req.body.city,
        state:req.body.state,
        phoneNumber:req.body.phoneNumber
    }).save((err,newCompany)=>{
        if(err) res.status(503).send("there was an error in saving!");
        res.status(200).send(newCompany);
    });
});


module.exports = router;