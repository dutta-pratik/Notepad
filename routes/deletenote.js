const express = require("express");
const passport = require("passport");

const router = express.Router();

const noteController = require("../controller/note_controller");

router.delete("/", noteController.delete);
router.delete("/:noteId", passport.authenticate("jwt", {session: false}), noteController.delete);

module.exports = router;