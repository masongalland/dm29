require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , cors = require('cors')
    , session = require('express-session');

const app = express();

//MIDDLEWARE
app.use(bodyParser.json())
app.use(cors())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


//AUTHENTICATION
passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
    done(null, profile)
}))
//THIS IS INVOKED ONE TIME TO SET THINGS UP
passport.serializeUser(function(profile, done) {
    done(null, profile)
})
//USER COMES FROM SESSION - THIS IS INVOKED FOR EVERY ENDPOINT
passport.deserializeUser(function(profile, done) {
    done(null, profile)
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/private',
    failureRedirect: 'http://localhost:3000/#/'
}))

app.get('/auth/me', (req, res) => {
    if(!req.user) {
        return res.status(401).send('User not found')
    } else {
        return res.status(200).send(req.user);
    }
})

app.get('/auth/logout', (req, res) => {
    req.logOut() //Passport gives us this to terminate a login session. 
    return res.redirect(302, '/#/'); //res.redirect comes from Express to redirect the user to the given url. 302 is the default status code for res.redirect. 
})

const PORT = 3535

app.listen(PORT, ()=> console.log(`listening on port: ${PORT}`))