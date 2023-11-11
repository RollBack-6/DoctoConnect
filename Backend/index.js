// Import Packages
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const app = express();

// Port specification 
const port = 5555  
const url = "mongodb+srv://root:root@doctoconnect.qq9iqwv.mongodb.net/?retryWrites=true&w=majority"

// Connexting MongoDB database
mongoose.connect(url,{});

// Display text on the route
app.get("/", async(request , response)=>{
    response.send("GET API is working ")
})
// Running app on desired port 
app.listen(port,()=>{
    console.log("Your app is listening on PORT" + port);
})