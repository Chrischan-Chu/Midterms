var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("You have successfully created your second app!");
});
var server2 = app.listen(2001, function() {
    var host = server2.address().address
    var port = server2.address().port

    console.log('Example app listening at http://%s:%s', host, port);
});