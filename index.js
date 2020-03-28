const port = 8000;
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt");

const db = require("./config/mongoose");

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));


app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/index"));


app.listen(port, function(err){
    if(err){
        console.log("Error while running server, ", err);
    }
    console.log("Server is up and running at port", port);
});