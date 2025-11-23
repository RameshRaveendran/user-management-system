// load env
require('dotenv').config();

// core & third-party imports
const express = require('express');

// local imports (DB)
const connectDB = require('./db/connect');


// app initialization
const app = express();
const PORT = process.env.PORT || 3000;


// implement db
connectDB();














// start the server
app.listen(PORT , () => {
    console.log("=======================================");
    console.log(`\Server started on http://localhost:${PORT}`);
    console.log("=======================================");

})