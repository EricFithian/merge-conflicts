const express = require('express');
const app = express();
const dogs = ["Duke", "Zooty", "Bolt"];


app.get('/hi', function (request, response) {
    // query info from database
    // pass it to the ejs file
    response.send(`<h1>Hello class!</h1>

<p>This is here too</p>`);
});

app.get('/dogs', function(req, res) {
    res.send(`<h1>My Dogs!</h1>

<h2>${dogs[0]}</h2>
<h2>${dogs[1]}</h2>
<h2>${dogs[2]}</h2>
`)
});

app.get('/dogs/:indexOfDog', function(req, res) {
    console.log(req.params)
    res.send(`<h1>The dog for this url is ${dogs[parseInt(req.params.indexOfDog)]}`)
})

app.get('/add/:num1/:num2', function(req, res) {
    console.log(req.params);
    res.send(`${req.params.num1} + ${req.params.num2} = ${parseInt(req.params.num1) + parseInt(req.params.num2)}`)
})

// app.get('/:params/:secondParam', function(req, res) {
//     console.log(req.params);
//     res.send(`<h1>My first paremeter is ${req.params.params} and my second paremeter is ${req.params.secondParam}`)
// });


app.listen(4000, function () {
    console.log(`I am listening on port 4000`);
});