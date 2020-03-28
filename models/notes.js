/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FILES_PATH = path.join("/uploads/users/file");

/***************CREATING USER SCHEMA*****************************/
const noteSchema = new mongoose.Schema({
    note:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    file:{
        type:String
    }
},{
    timestamps: true
});

/*******SETTINGS FOR UPLOADING FILE USING MULTER****************/
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", FILES_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });


  //static functions
  noteSchema.statics.uploadedFile = multer({ storage: storage }).single("file");
  noteSchema.statics.filePath = FILES_PATH;


/******************MAKING MODEL*********************************/
const Notes = mongoose.model("Notes", noteSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Notes;