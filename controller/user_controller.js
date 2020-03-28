const User = require("../models/user");
const jwt = require("jsonwebtoken");


module.exports.register = async function(req, res){
    try
    {
        await User.create(req.body, function(err){
            if(err){
                console.log("Error in creating User");
                return res.status(400).json({
                    message: "Error in creating User"
                });
            }
            return res.status(200).json({
                data: req.body
            });
        });
    }catch(err){
        res.json({
            message: err
        });
    }
    
}


module.exports.login = function(req, res){
    try
    {
        User.findOne({email: req.body.email}, function(err, user) {
            if(err){
                return res.status(422).json({
                    message: "Invalid username or password"
                });
            }
            if(req.body.password === user.password){
                return res.status(200).json({
                    message: "Login Successful",
                    data:{
                        token: jwt.sign(user.toJSON(), "A23XWqes", {expiresIn: "100000"})
                    }
                });
            }else{
                return res.status(422).json({
                    message: "Invalid username or password"
                });
            }   
        });
    }catch(err){
        return res.json(500, {
            message: err
        });
    }
}