require('dotenv').config(); // populates process.env with our custom key/value pairs

const express = require('express');
const morgan = require('morgan');

const client = require('./database/connection');

const port = process.env.PORT || 8080;
const app = express();

// middleware
app.use(morgan('dev'));

// GET /villains
app.get('/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      const villains = response.rows;
      // res.render('villains', { villains })
      res.json(villains);
    });
});

// GET /villains/:id
app.get('/villains/:id', (req, res) => {
  const id = req.params.id;
  client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      const villain = response.rows[0];
      res.json(villain);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
