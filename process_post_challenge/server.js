var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + 'index.html');
});

app.post('/process_post', urlencodedParser, function(req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        id_number:req.body.id_number,
        gender:req.body.gender,
        age:req.body.age,
        favorite_food:req.body.favorite_food,
        hobby:req.body.hobby,
        comments:req.body.comments
    };
        console.log(response);
        res.end(JSON.stringify(response));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});