const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    note:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
});

const Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;