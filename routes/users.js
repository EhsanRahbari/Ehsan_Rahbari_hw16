let express = require('express');
let router = express.Router();
const user = require('../models/users');
const bodyParser = require('body-parser')

/* GET users listing. */
router.get('/getAll', function(req, res) {
  user.find({} , (err , users)=>{
    if(err) res.status(500).send("there was an error in finding users!");
    res.status(200).send(users);
  });
});
//creating user using post reqs
router.post('/createUser' , function(req , res){
  new user({
    name:req.body.name,
    familyName:req.body.familyName,
    nationalCode:req.body.nationalCode,
    sex:req.body.sex,
    isManager:req.body.isManager,
    birthDay:req.body.birthDay
  }).save((err , user)=>{
    if(err) res.status(500).send("there was an error in saving the user");
    res.status(200).send(user);
  });
})
//trying to update the user using Put method
router.put('/updateUser' , (req, res)=>{
  user.findOneAndUpdate({_id:req.body.id} , {name: req.body.name} , (err, user)=>{
      if(err) res.status(500).send(err);
      res.send(user)
  });
});
//deleting the exact user
router.delete('/deleteUser' , (req, res)=>{
  user.findByIdAndDelete({_id:req.body.id} , (err,  User)=>{
      if(err) res.status(500).send("there was an error in deleting User!");
      res.send(User);
  });
});

module.exports = router;
