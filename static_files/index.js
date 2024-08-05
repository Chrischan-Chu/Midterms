var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('You have successfully created second app!');
});


var server2 = app.listen(8082, function() {
var host = server2.address().address;
var port = server2.address().port;

console.log("Example app listening at http://%s:%s", host, port);
});