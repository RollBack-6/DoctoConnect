// /Import Mongoose 
const mongoose = require("mongoose")

// Creating user schema
const Doctor = new mongoose.Schema({

    userName:{
        type : string ,
        required : true 
    },
    photo:{
        type : string,
        required : flase
    },
    firstName:{
        type : string ,
        required : true 
    },
    lastName:{
        type : string ,
        required : false 
    },
    localAddress:{
        type : string ,
        required : true 
    },
    phoneNumber:{
        type : Number ,
        required : false 
    },
    email:{
        type : string ,
        required : true 
    },
    Aadhar:{
        type : Number ,
        required : true 
    },
    licenceNumber:{
        type : string ,
        required : true 
    },
    hospital:[{
        type : string ,
        default : "",
        required : false 
    }],

})

// Creating Model in the database 
const DocterModel = mongoose.model("Doctor",Doctor);

module.exports = DocterModel;