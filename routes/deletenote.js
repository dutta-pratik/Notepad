/****************IMPORTING PACKAGE*******************************/
const express = require("express");
const passport = require("passport");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const noteController = require("../controller/note_controller");

/************MAKING ROUTE FOR DELETE*****************************/
router.delete("/:noteId", passport.authenticate("jwt", {session: false}), noteController.delete);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;