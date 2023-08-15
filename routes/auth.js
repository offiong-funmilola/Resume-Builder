const express = require('express');
const passport = require('passport');
const bodyParser = require("body-parser");
const LocalStrategy = require('passport-local');

const app = express();
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(csrf());
app.use(passport.initialize());
app.use(passport.session());



const UserController = require('../controllers/UserController');
const UserService = require('../services/UserService')

passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    async function(email, password, done) {
        let user = await UserService.validateUser(email, password)
        if (user) { return done(null, user.purge()); }
        if (!user) { return done(null, false, { message: 'Credentials not valid' }); }
    }
));

// Use session
passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, email: user.email });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});

// Auth Routes
router.post('/api/v1/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if (err) { return next(err) }
        if (!user) { return res.status(401).json({ success: false, message: "Authentication failed!"}) }
        req.logIn(user, (err) => {
            if (err) { return next(err) }
            return res.status(200).json({
                message: "User created successfully",
                user: req.user
            });                
        })
    })(req, res, next)
});

router.post('/api/v1/register', UserController.register);

router.post('/api/v1/auth', (req, res) => {
    if (req.user) {
        return res.status(200).json({
            success: true,
            user: req.user
        })
    }
    res.status(401).json({
        success: false,
        message: "Authentication required!"
    })
})

router.post('/api/v1/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.status(200).json({success: true, message: 'Logout successful'});
    });
});

module.exports = router;
