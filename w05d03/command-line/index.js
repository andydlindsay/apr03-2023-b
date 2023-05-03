require('dotenv').config();
const pg = require('pg');

// const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // many clients; managed (5 connections by default)

const verb = process.argv[2];
// console.log('verb', verb);

const Client = pg.Client;

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const client = new Client(config);

client.connect();

const id = process.argv[3];

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    // client.query(`SELECT * FROM movie_villains WHERE id = ${id};`)
    client.query(`SELECT * FROM movie_villains WHERE villain = $1;`, [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newName = process.argv[4];
    const query = 'UPDATE movie_villains SET villain = $1 WHERE id = $2;';
    client.query(query, [newName, id])
      .then(() => {
        console.log('villain updated successfully');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const movieName = process.argv[4];

    const query2 = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';
    client.query(query2, [villainName, movieName])
      .then(() => {
        console.log(`${villainName} has a terrible backstory`);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain has been defeated');
        client.end();
      });
    break;

  default:
    console.log('please enter a BREAD verb');
    client.end();
}



