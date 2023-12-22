const mongoose = require("mongoose");
const {v1:uuid} = require("uuid");

const doctorSchema = new mongoose.Schema({
    _id:{
        type:String,
        default:uuid,
    },
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    phone_no:{
        type:Number,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    active:{
        type:Boolean,
        default:true,
    },
    
});

const doctorModel = mongoose.model("doctor",doctorSchema);
module.exports = doctorModel;