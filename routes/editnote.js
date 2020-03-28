/****************IMPORTING PACKAGE*******************************/
const express = require("express");
const passport = require("passport");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const noteController = require("../controller/note_controller");

/************MAKING ROUTE FOR UPDATE*****************************/
router.patch("/:noteId", passport.authenticate('jwt', {session:false}), noteController.edit);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;