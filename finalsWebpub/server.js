const express = require('express');
const app = express();
app.use(express.static('public'));
const dishes = require('./data');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public' + '/index.html');
});

app.get('/dishes', (req, res) => {
    res.send(dishes);
});

app.get('/dishes/:type', (req, res) => {
    const dish = dishes.find(d => d.type === (req.params.type));
    if (dish) {
      res.send(dish);
    } else {
      res.status(404).send('Record not found');
    }
  });

app.use((req, res) => {
    res.status(404).send("Record not found");
});

app.listen(3000, () => console.log('http://localhost:3000'));