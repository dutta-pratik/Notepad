const Note = require("../models/notes");

module.exports.createNote = async function(req, res){
    try
    {
        await Note.create({
            note: req.body.note,
            user: req.user.id
        }, function(err){
            
            if(err){
                console.log("Error in creating notes");
            }
            return res.status(200).json({
                message: "Note Created",
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
        let notes = await Note.find(
            
            {user: req.user.id}
            
        );
        console.log(notes);
        return res.status(200).json({
            message: "List of Posts",
            notes: notes
            
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
        let removeNote = await Note.findById(req.params.noteId);
        
        if(removeNote.user._id == req.user.id){
            removeNote.remove();

            return res.status(200).json({
                message: "Post Deleted!",
                removedNote: removeNote
            });
        }else{
            return res.json(401, {
                message: "You not able to delete this Note"
            });
        }
        
    }catch(err){
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};

module.exports.edit = async function(req, res){
    try
    {
        const note = await Note.findById(req.params.noteId);
        if(note.user._id == req.user.id){
            let updateNote = await Note.updateOne(
                {_id: req.params.noteId},
                {$set: {note: req.body.note}}
            );
            return res.status(200).json({
                message: "Post Updated",
                updatedNote: updateNote
            });
        }else{
            return res.json(401, {
                message: "You are not authorized to Update this note!"
            });
        }
    }catch(err){
        res.json(500, {
            message: "Internal Server Error"
        });
    }

}