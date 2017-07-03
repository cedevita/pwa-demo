const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
// const gcm = require('node-gcm');
const app = express();
const PORT = 3017;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const vapidKeys = webpush.generateVAPIDKeys();

// Prints 2 URL Safe Base64 Encoded Strings
console.log(vapidKeys.publicKey, vapidKeys.privateKey);

const notifyUsers = (req, res) => {

}

// To serve static assests in root dir
app.use(express.static(__dirname));

// To allow cross origin request
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// To serve index.html page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/notify', notifyUsers);

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
