const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Company = require('../models/company');
const company = require('../models/company');
// const app = require('../app');

router.get('/getAll' ,function(req , res){
    // res.status(200).send(company.find({});
    Company.find({} , function(err , companies){
        if(err) res.status(500).send("there was an error getting companies!");
        res.status(200).send(companies);
    })
});

router.post('/createCompany' , function(req , res){
    // res.send(req.body.name);
    new Company({
        name:req.body.name,
        registrationId : req.body.regId,
        city:req.body.city,
        state:req.body.state,
        phoneNumber:req.body.phoneNumber
    }).save((err,newCompany)=>{
        if(err) res.status(503).send(err);
        res.status(200).send(newCompany);
    });
});
router.put('/updateCompany' , (req, res)=>{
    company.findOneAndUpdate({_id:req.body.id} , {name: req.body.name} , (err, company)=>{
        if(err) res.status(500).send(err);
        res.send(company)
    });
});

router.delete('/deleteCompany' , (req, res)=>{
    Company.findByIdAndDelete({_id:req.body.id} , (err,  company)=>{
        if(err) res.status(500).send("there was an error in deleting company!");
        res.send(company);
    });
});


module.exports = router;