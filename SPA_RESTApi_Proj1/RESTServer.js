//OS: Windows 10
//Code tested in Google Chrome Version 81.0.4044.129 (Official Build) (64-bit)
//run with "$ node RESTServer.js"

//From John Keating  CS230 Lecture 20.01-05 REST
const express = require('express'); // we're making an ExpressJS App
const bodyParser = require('body-parser'); // we'll use body-parser extensively
const app = express(); // create the ExpressJS app

//From John Keating CS230 Lecture 22.01-05
const hbs = require('hbs'); // use hbs view engine
const path = require('path'); // use the path module (for views)

// parse the different kinds of requests (content-type) the app handles
// use the "use" method to set up the body-parser middlewear
app.use(bodyParser.json()) // application/json
app.use(bodyParser.urlencoded({ extended: true })) // application/x-www-form-urlencoded

require('./routes/client.routes.js')(app);
require('./routes/therapist.routes.js')(app);
require('./routes/session.routes.js')(app);

app.set('views',path.join(__dirname,'views')); // set the views directory
app.set('view engine', 'hbs'); // set the view engine to hbs
app.use('/assets',express.static(__dirname + '/public')); // set public folder as "static" for

// listen for requests on port 3000
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

// Set up Mongoose and our Database connection
const dbConnect = require('./config/connect.js');
const mongoose = require('mongoose');
// Set up connection to the database
mongoose.connect(dbConnect.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the MongoDB database");
}).catch(err => {
    console.log('Unable to connect to the MongoDB database', err);
    process.exit();
});