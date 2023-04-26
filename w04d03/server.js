const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

// database
const coffees = [
  {
    id: 'abc',
    name: 'Maxwell House',
    flavour: 'bold',
    aroma: 'strong'
  },
  {
    id: 'def',
    name: 'Latte',
    flavour: 'vanilla',
    aroma: 'mild'
  },
  {
    id: 'ghi',
    name: 'Mocha',
    flavour: 'chocolate',
    aroma: 'dark roast'
  },
];

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// GET /coffees
app.get('/coffees', (req, res) => {
  res.json(coffees);
});

// POST /coffees
app.post('/coffees', (req, res) => {
  const name = req.body.name;
  const flavour = req.body.flavour;
  const aroma = req.body.aroma;

  const id = Math.random().toString(36).substring(2, 5);

  const newCoffee = {
    id: id,
    name: name,
    flavour: flavour,
    aroma: aroma
  };

  coffees.push(newCoffee);

  res.status(201).send();
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
