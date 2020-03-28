/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING USER SCHEMA*****************************/
const noteSchema = new mongoose.Schema({
    note:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
});

/******************MAKING MODEL*********************************/
const Notes = mongoose.model("Notes", noteSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Notes;