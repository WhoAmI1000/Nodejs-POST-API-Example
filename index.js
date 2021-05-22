const express = require('express'); // Require express
const bodyParser = require('body-parser'); // Require body-parser
const path = require('path'); // Require path

const app = express(); // Define app
const port = 8000; // Define port. You may change this to change the port the app runs on. Change this if you get an error stating the port is already in use.
if (isNaN(port)) process.exit(1); // Will exit the program if the port is invalid

app.use(express.urlencoded({ extended: false })); // Configure the app
app.use(express.json()); // Configure the app again
app.use(bodyParser.text()); // Configure the app yet again

var json = { message: "Hello World!" }; // Define our JSON responses, you can put these directly in res.send() too
var json_post = { message: "Hello World!", message2: "You used a POST request!" }; // Define another JSON response

app.get('/', function(req, res) { // Will run when app receives a GET request to http://localhost:(PORT)/
    res.sendFile(path.join(process.cwd() + '/index.html')); // Will send the index.html file
});

app.all('/api/helloworld/', function(req, res) { // app.all() will run when the app receives ANY form of request to the specified address.
    res.send(json); // Send our JSON variable.
});

app.post('/api/helloworld/post_only', function(req, res) { // Will run when the app receives a POST request to the specified address.
    console.log('Got POST request!'); // Log to the console
    res.send(json_post); // Send the JSON data
});

app.listen(port, () => { // Configure the app to start listening
    console.log(`App listening at http://localhost:${port}/`); // Log the app's address in the console.
});