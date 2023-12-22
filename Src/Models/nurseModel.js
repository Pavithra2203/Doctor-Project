const mongoose = require("mongoose");
const {v1:uuid} = require("uuid");

const nurseSchema = new mongoose.Schema({
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
    doctorId:{
        type:String,
    },
});

const nurseModel = mongoose.model("nurse",nurseSchema);
module.exports = nurseModel;