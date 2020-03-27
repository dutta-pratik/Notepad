const port = 8000;
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

const app = express();

app.use(bodyParser.json());

// app.use(express.urlencoded({extended: true}));

app.use("/", require("./routes/index"));


app.listen(port, function(err){
    if(err){
        console.log("Error while running server, ", err);
    }
    console.log("Server is up and running at port", port);
});