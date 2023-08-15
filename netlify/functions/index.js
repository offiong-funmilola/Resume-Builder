'use strict';
require('dotenv').config();
const serverless = require('serverless-http');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const express = require("express");
const cors = require("cors");
const path = require("path");
const multer  = require('multer');
const bufferToJSONMiddleware = require('../../lib/bufferToJSONMiddleware');
// const SQLiteStore = require('connect-sqlite3')(session);
// const csrf = require("csurf");

// Routers
const authRouter = require('../../routes/auth')
const mainRouter = require('../../routes/main')

const app = express();
const router = express.Router();

// Set up express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bufferToJSONMiddleware)
app.use(express.query());
app.use(cookieParser());
app.use(cors({credentials: true}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // store: new SQLiteStore({ db: 'sessions.db', dir: path.resolve(__dirname, 'db.sqlite') }),
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));
// app.use(csrf());
app.use(passport.initialize());
app.use(passport.session());

// For uploads
const storage = multer.diskStorage({
    destination: 'public/uploads/',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage });

// app.use(function(req, res, next) {
//     res.locals.csrfToken = req.csrfToken();
//     next();
// });

// To Handle CORS requests
router.options('*', (req, res) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With, Origin, Accept, Authorization, Access-Control-Allow-Credentials',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Credentials': "true"
    };

    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.status(200).set(headers).body('This was a preflight call!');
});

// default route
router.get('/api', (req, res) => res.status(200).json({message: 'Welcome to resume builder API'}))

// main routes
// Routers
app.use('/', authRouter);
app.use('/', mainRouter);
app.use('/', router);

module.exports.handler = serverless(app);
