// Express is needed
const express = require('express');
// app will be what I use for express functionality in the server
const app = express();
// I am bringing in my dog controller
const dogController = require('./controllers/dogs');

// Set up middleware so that I can have EJS views that expects a directory I call views to contain ejs
app.set('view engine', 'ejs');

// Sets up that I can use my dog controller routes AND that they're above other routes so will be read first
app.use('', dogController);

// Rest of my generic routes. Maybe a home route, a wildcard for annoying users and one or two others
app.get('/hi', function (req, res) {
    // query info from database
    // pass it to the ejs file
    res.render('hi.ejs');
});

app.get('/*', function(req, res) {
    res.send(`<h2>You are trying to go to a bad URL. Go back to my site now or else by clicking <a href='http://localhost:4000/dogs'>HERE</a></h2>`)
});

// app.get('/add/:num1/:num2', function(req, res) {
//     console.log(req.params);
//     res.send(`${req.params.num1} + ${req.params.num2} = ${parseInt(req.params.num1) + parseInt(req.params.num2)}`)
// })

// app.get('/:params/:secondParam', function(req, res) {
//     console.log(req.params);
//     res.send(`<h1>My first paremeter is ${req.params.params} and my second paremeter is ${req.params.secondParam}`)
// });


app.listen(4000, function () {
    console.log(`I am listening on port 4000`);
});