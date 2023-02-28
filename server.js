const express = require('express');
const app = express();
const dogController = require('./controllers/dogs')

// Set up middleware
app.set('view engine', 'ejs');

app.use('', dogController);

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
console.log("Joshua Pent was here, and he enjoys screwing up your code. >:)")

app.listen(4000, function () {
    console.log(`I am listening on port 4000`);
});