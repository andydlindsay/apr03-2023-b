const bcrypt = require('bcryptjs');

// bcrypt.genSalt(10)
//   .then((salt) => {
//     console.log('async salt:', salt);
//   });

// bcrypt.genSalt(10, (err, salt) => {
//   if (err) console.log(err);

//   console.log('callback salt:', salt);
// });

const plaintextPassword = 'secret';

const salt = bcrypt.genSaltSync(10);
console.log('sync salt: ', salt);

// bcrypt.hash(plaintextPassword, '$2a$10$blzksVkYKVLCVr.gX6YCT.')
//   .then((hash) => {
//     console.log('async hash:', hash);
//   });

const hash = bcrypt.hashSync(plaintextPassword, salt);
console.log('sync hash:', hash);

const userPasswordFromDb = '$2a$10$OW64MgjsQwA7XFVZC/JoNu5cBkLcVJLGWst40BuKz8gat2Ll886BG';

const result = bcrypt.compareSync('secret', userPasswordFromDb);
console.log('result', result);
