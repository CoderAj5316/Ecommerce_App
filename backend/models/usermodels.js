const mongoose = require('mongoose');
const jwt=require("jsonwebtoken");

const UserSchema=new mongoose.Schema({
    name:{
           type: String,
           required:true
        },
        email:{
            type: String,
            required:true
         },
         password:{
            type: String,
            required:true
         },
         phone:{
            type: String,
            required:true
         },
         secanswer:{
            type:String,
            required:true
         },
         address:{
            type: String,
            required:true
         },
         role:{
            type: Number,
            def:0
         }

})


const Usermodel=mongoose.model("User",UserSchema);
module.exports=Usermodel;