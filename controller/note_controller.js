const Note = require("../models/notes");

module.exports.createNote = async function(req, res){
    try
    {
        await Note.create(req.body, function(err){
        if(err){
            console.log("erro in creating notes");
        }
        return res.status(200).json({
            data: req.body
        });

        });
    }catch(err){
        res.json({
            message: err
        })
    }
};

module.exports.getNote = async function(req, res){
    try
    {
        let notes = await Note.find({}).sort("-createdAt").populate("user");
        console.log(notes);
        return res.status(200).json({
            data: {
                notes
            }
        });
    }catch(err){
        res.json({
            message: err
        })
    }
};

module.exports.delete = async function(req, res){
    try
    {
        let removeNote = await Note.findByIdAndRemove(req.params.noteId);
        return res.status(200).json({
            data: {
                removeNote
            }
        });
    }catch(err){
        res.json({
            message: err
        })
    }
};

module.exports.edit = async function(req, res){
    try
    {
        let updateNote = await Note.updateOne(
        {_id: req.params.noteId},
        {$set: {note: req.body.note}}
        );
        return res.status(200).json({
            data: {
                updateNote
            }
        });
    }catch(err){
        res.json({
            message: err
        })
    }

}