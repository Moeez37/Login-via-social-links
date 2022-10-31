const facebookStrateg=require('passport-facebook').Strategy;
module.exports= (passport)=>
{
    passport.use(new facebookStrateg({
        clientID:"5744082878991041",
        clientSecret:"d38e263547a1c47cc15e758981c7d4fb",
        callbackURL:"http://localhost:3000/facebook/callback"
        ,profileFields:['name','email']
    },(token,refreshToken,profile,done)=>{
        done(null,profile.__json);
    }))
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(obj, done) {
        done(null, obj);
      });
};