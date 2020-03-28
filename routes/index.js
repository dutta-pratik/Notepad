/****************IMPORTING PACKAGE*******************************/
const express = require("express");
const passport = require("passport");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const noteController = require("../controller/note_controller");
const userController = require("../controller/user_controller");

/**********************MAKING ROUTES*****************************/
router.post("/newNote",passport.authenticate('jwt', {session:false}), noteController.createNote);

router.get("/getNote",passport.authenticate('jwt', {session:false}), noteController.getNote);

router.use("/editNote", require("./editnote"));

router.use("/deleteNote", require("./deletenote"));

router.post("/register", userController.register);

router.post("/login", userController.login);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;