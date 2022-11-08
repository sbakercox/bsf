const express = require('express')
const dotenv = require('dotenv')
const app = express();
const connectDB = require('./config/db')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const flash = require("express-flash");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

const PORT = process.env.PORT || 3000

//LOAD CONFIG
dotenv.config({path: './config/config.env'})

//LOAD PASSPORT
require('./config/ps')(passport)

//CONNECT TO DATABASE
connectDB()

//DATA LOGGING
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//SETTING EJS
app.set("view engine", "ejs");

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use forms for put / delete
app.use(methodOverride("_method"));

// SESSIONS
app.use(
    session({
      secret: "sickaduck",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

// PASSPORT MIDDLEWARE
app.use(passport.initialize())
app.use(passport.session())

//FLASH MESSAGING 
app.use(flash());

//SETTING STATIC FOLDER
app.use(express.static("public"));

//ROUTES
app.use('/', require('./routes/main'))
app.use('/auth', require('./routes/auth'))
app.use('/dash', require('./routes/dash'))

//CHECK PORT
app.listen(PORT, () => {
	console.log(`Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`);
});