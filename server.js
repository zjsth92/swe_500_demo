// Simple node express server
const express = require('express');
const app = express();
var path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// router
app.use(function(req, res) {
    // send index.html to start client side
    res.sendFile("index.html", { root: path.join(__dirname, '/dist/') });
});
// Start the app by listening on the default
const port = process.env.PORT || 3000;
// Heroku port
app.listen(port, function (err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("application is running on the port:" + port);
});