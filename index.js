/********************INITIALIZING PORT*********************************/
const port = process.env.PORT || 8000;

/***************IMPORTING REQUIRED PACKAGE*****************************/
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt");
const db = require("./config/mongoose");

/******************INITIALIZING EXPRESS*******************************/
const app = express();

/*****************USING PARSER AND ENCODER***************************/
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

/******************USING PASSPORT PACKAGE****************************/
app.use(passport.initialize());
app.use(passport.session());

/*******************DIRECTING TO ROUTES******************************/
app.use("/", require("./routes/index"));

/******************CHECKING SERVER STATUS****************************/
app.listen(port, function(err){
    if(err){
        console.log("Error while running server, ", err);
    }
    console.log("Server is up and running at port", port);
});