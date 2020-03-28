/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING USER SCHEMA*****************************/
const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});


/******************MAKING MODEL*********************************/
const User = mongoose.model("User", userSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = User;