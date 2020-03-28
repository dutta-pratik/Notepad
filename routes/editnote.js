const express = require("express");
const passport = require("passport");
const router = express.Router();

const noteController = require("../controller/note_controller");

router.patch("/", noteController.edit);
router.patch("/:noteId", passport.authenticate('jwt', {session:false}), noteController.edit);

module.exports = router;