const express=require('express');
const bodyparser=require('body-parser');
const session=require('express-session')
const facebooklog=require('./middleware/facebook')
const googlelog=require('./middleware/google');
const path=require('./routes/logins');
const app=express();

const passport=require('passport');

const mongoos=require('mongoose');
const mongosession=require('connect-mongodb-session')(session);
const Store=new mongosession({
    uri:'mongodb+srv://Moeez:bsef19a537@cluster0.076ljp2.mongodb.net/Loginframework?retryWrites=true&w=majority',
    collection:'sessions'
});
app.use(passport.initialize());
app.use(passport.session());
app.use(session({
    secret:'Loginsocials',
    store:Store,
    resave:false,
    saveUninitialized:
    false}));

facebooklog(passport);
googlelog(passport);
app.set("view engine","ejs");
app.set("views","views");
app.use(bodyparser.urlencoded({extended:false}));
app.use('/',path);
mongoos.connect('mongodb+srv://Moeez:bsef19a537@cluster0.076ljp2.mongodb.net/Loginframework?retryWrites=true&w=majority')
.then(result=>{
    console.log('connected!!');
    app.listen(3000);
})
.catch(error=>{
    console.log(' connection error');
    console.log(error);
});