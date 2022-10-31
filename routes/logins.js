const passport=require('passport');
const express=require('express');
const router=express.Router();
router.get('login/google', passport.authenticate('google', {
    scope: [ 'email' ]
  }));
router.get('/oauth2/redirect/google',
  passport.authenticate('google', { failureRedirect: '/login', failureMessage: true,successRedirect:'/presignup' }),
  function(req, res) {
    res.redirect('/');
  });
router.get("auth/facebook",passport.authenticate('facebook',{scope:'email'}));
router.get('/facebook/callback',passport.authenticate("facebook",{successRedirect: "/prelogin",failureRedirect: "/presignup" }));
router.get('/',(req,res)=>{
    res.render('login');
})
module.exports=router;
