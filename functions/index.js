const functions = require('firebase-functions');
const cors = require('cors');

const app = require('express')();

app.use(cors());

const orderRoute = require('./routes/orderRoute')

app.use('/v1/user/order', orderRoute);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app)
