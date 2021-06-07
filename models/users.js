const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    familyName:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    nationalCode:{
        type:String,
        minlength:3,
        maxlenght:11
    },
    sex:{
        type:String,
        enum:['male' , 'female'],
        default:'male'
    },
    isManager:{
        type:Boolean,
        default:false
    },
    birthDay:{
        type:Date,
        required:true

    }
})

module.exports = mongoose.model('user' , User);