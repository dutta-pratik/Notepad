const User = require("../models/user");

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
        })
    }
    
}


module.exports.login = function(req, res){
    try
    {
        User.findOne({email: req.body.email}, function(err, user) {
            if(err){
                console.log("error in login");
                return res.status(401).json({
                    message: "error in login"
                });
            } 

            if(req.body.password === user.password){
                    return res.status(200).json({
                        message: "Login Successful"
                    });
            }else{
                    return res.status(401).json({
                        message: "Login Unuccessful"
                    });
            }   
        });
    }catch(err){
        res.json({
            message: err
        })
    }
}