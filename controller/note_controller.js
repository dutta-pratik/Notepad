/****************IMPORTING MODEL*******************************/
const Note = require("../models/notes");

const fs = require("fs");
const path = require("path");

/**********EXPORTING FUNCTION FOR newNote ROUTE******************/
module.exports.createNote = async function(req, res){
    try
    {
        //Use for uploading file with note
        Note.uploadedFile(req, res, function(err){
            if(err){
                cosole.log("multer Error");
            }
            // if file is present
            if(req.file){
                Note.create({
                    note: req.body.note,
                    user: req.user.id,
                    file: Note.filePath + '/' + req.file.filename
                    }, function(err){
                        if(err){
                            console.log(err)
                            return res.status(400).json({
                                message: "Error in creating Note or Uploading File"
                            });
                        }
                        return res.status(200).json({
                            message: "Note Created and File Uploaded",
                            data: req.body,
                            file: req.file.filename
                        });
                    }
                );
            }else{
                //if file is not present
                Note.create({
                    note: req.body.note,
                    user: req.user.id
                    }, function(err){
                        if(err){
                            
                            console.log(err)
                            return res.status(400).json({
                                message: "Error in creating Note"
                            });
                        }
                        return res.status(200).json({
                            message: "Note Created",
                            data: req.body
                        });
                    }
                );
            }
        });
       
    }catch(err){
        res.json(500,{
            message: "Internal Server ERROR"
        })
    }
};

/**********EXPORTING FUNCTION FOR getNote ROUTE******************/
module.exports.getNote = async function(req, res){
    try
    {
        /***Finding List of Post for Logged In user with the help of JWT***/
        let notes = await Note.find( 
            {user: req.user.id}
        );
        if(notes.length > 0){
            return res.status(200).json({
                message: "List of Notes",
                notes: notes
                
            });
        }else{
            return res.json({
                message: "No Notes Available Till Now"
            });
        }
        

    }catch(err){
        res.json(500,{
            message: "Internal Server ERROR"
        })
    }
};

/**********EXPORTING FUNCTION FOR Delete ROUTE******************/
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
                message: "You're not able to delete this Note"
            });
        }
        
    }catch(err){
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};

/**********EXPORTING FUNCTION FOR editNote ROUTE******************/
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
        console.log(err);
        res.json(500, {
            message: "Internal Server Error"
        });
    }

}