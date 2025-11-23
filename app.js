// load env
require('dotenv').config();

// core & third-party imports
const express = require('express');
// session configuration
const session = require('express-session');
const  MongoStore = require('connect-mongo');


// local imports (DB)
const connectDB = require('./db/connect');
const cookieParser = require('cookie-parser');


// app initialization
const app = express();
const PORT = process.env.PORT || 3000;


// implement db
connectDB();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(require('nocache')());

// session handling
app.use(
  session({
    secret: process.env.SESSION_SECRET,              // session secret key
    resave: false,                                   // do not save if nothing changed
    saveUninitialized: false,                        // do not create empty sessions

    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,               // store sessions in MongoDB
      collectionName: 'sessions',
    }),

    cookie: {
      httpOnly: true,                                 // JS cannot access cookie
      maxAge: 1000 * 60 * 60 * 24,                    // 1 day
      secure: process.env.NODE_ENV === "production",  // only https in prod
    }
  })
);












// start the server
app.listen(PORT , () => {
    console.log("=======================================");
    console.log(`\Server started on http://localhost:${PORT}`);
    console.log("=======================================");

})