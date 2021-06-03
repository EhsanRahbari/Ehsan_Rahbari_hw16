const mongoose = require('mongoose');
const schema = mongoose.Schema;

const companySchema = new schema(
    {
        name:{
            type:String,
            unique:true,
            required: true,
            trim:true
        },
        registrationId:{
            type:Number,
            unique:true
        },
        city:{
            type:String,
            trim:true
        },
        state:{
            type:String,
            trim:true
        },
        registrationDate:{
            type:Date,
            default:Date.now
        },
        phoneNumber:{
            type:String,
            minlength:3,
            maxlength:11
        }
    }
);


module.exports = mongoose.model('company' , companySchema);