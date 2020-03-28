/*****************IMPORTING PACKAGE*******************************/
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

/*****************EXPORTING ROUTER*******************************/
const User = require("../models/user");

/*****************KEY AND AUTH HEADERBEARER*******************************/
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "A23XWqes"
}

/****************USING PASSPORT JWT*********************************/
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    User.findById(jwtPayLoad._id, function(err, user){
        if(err){console.log("Error in finding user from JWT", err);}

        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    });

}));

/*****************EXPORTING PASSPORT*******************************/
module.exports = passport;
