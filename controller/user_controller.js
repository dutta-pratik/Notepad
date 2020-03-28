/*************IMPORTING MODEL & PACKAGE****************************/
const User = require("../models/user");
const jwt = require("jsonwebtoken");


/**********EXPORTING FUNCTION FOR register ROUTE******************/
module.exports.register = async function(req, res){
    try
    {
        let existUser = await User.findOne({email: req.body.email});
        if(existUser){
            return res.status(400).json({
                message: "User Already Exist with this Email"
            });
        }else{
            await User.create(req.body, function(err){
                if(err){
                    console.log(err);
                    return res.status(400).json({
                        message: "Error in creating User"
                        
                    });
                }
                return res.status(201).json({
                    message: "User Created",
                    data: req.body
                });
            });
        }
    }catch(err){
        res.json(500,{
            message: "Internal Server Error"
        });
    }
    
}


/**********EXPORTING FUNCTION FOR login ROUTE******************/
module.exports.login = async function(req, res){
    try
    {
        await User.findOne({email: req.body.email}, function(err, user) {
            if(err){
                return res.status(422).json({
                    message: "Invalid username or password"
                });
            }

            if(user && req.body.password === user.password){
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
            message: "Internal Sever Error"
        });
    }
}