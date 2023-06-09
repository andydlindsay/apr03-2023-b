const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const languages = require('./languages.json'); // JSON.parse()
// console.log(languages);

const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "1234",
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "5678",
  },
};

const app = express();
const port = 8000;

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(cookieParser()); // populates req.cookies
app.use(express.urlencoded({ extended: false })); // populates req.body

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // console.log(req.body);

  // pull the info off the body object
  const email = req.body.email;
  const password = req.body.password;

  // did we NOT receive an email and/or password
  if (!email || !password) {
    return res.status(400).send('Please provide an email AND a password');
  }

  // lookup the user based off the email provided
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found our user!!!
      foundUser = user;
    }
  }

  // did we NOT find a user
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // does the provided password NOT match the one from the database
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path! The user is who they say they are!
  // set a cookie and redirect the user
  res.cookie('userId', foundUser.id);

  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // do they have a cookie?
  const userId = req.cookies.userId;

  if (!userId) {
    return res.status(401).send('you must be logged in to see this page');
  }

  // lookup the user based off their cookie
  const user = users[userId];

  const templateVars = {
    user: user
  };

  // render the protected template
  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the userId cookie
  res.clearCookie('userId');

  // redirect the user
  res.redirect('/login');
});

// GET /languages/:languagePref
app.get('/languages/:languagePref', (req, res) => {
  const languagePref = req.params.languagePref;

  // set a cookie
  res.cookie('languageChoice', languagePref);

  // respond in some way
  res.redirect('/home');
});

// GET /home
app.get('/home', (req, res) => {
  // console.log(req.cookies);
  const languagePreference = req.cookies.languageChoice; // read the cookie's value

  const templateVars = {
    heading: languages.homeHeadings[languagePreference],
    body: languages.homeBodies[languagePreference]
  };

  res.render('home', templateVars);
});

// GET /about
app.get('/about', (req, res) => {
  const languagePreference = req.cookies.languageChoice;

  const templateVars = {
    heading: languages.aboutHeadings[languagePreference],
    body: languages.aboutBodies[languagePreference]
  };

  res.render('about', templateVars);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
