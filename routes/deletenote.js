const express = require("express");

const router = express.Router();

const noteController = require("../controller/note_controller");

router.delete("/", noteController.delete);
router.delete("/:noteId", noteController.delete);

module.exports = router;