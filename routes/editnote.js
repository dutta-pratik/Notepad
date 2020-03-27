const express = require("express");

const router = express.Router();

const noteController = require("../controller/note_controller");

router.patch("/", noteController.edit);
router.patch("/:noteId", noteController.edit);

module.exports = router;