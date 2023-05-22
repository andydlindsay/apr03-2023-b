### Getting the PhotoLabs backend to run
1. `cd backend` then run `npm install`
2. Import the database connection into `application.js` and pass to routers

```js
// inside /backend/src/application.js
const db = require('./db/index');

app.use("/api", photos(db));
app.use("/api", topics(db));
```

3. Add static middleware to `application.js` to serve up images

```js
// inside /backend/src/application.js
app.use(express.static(path.join(__dirname, "public")));
```

4. Create a `.env.development` in `backend` based off the README

```conf
PGHOST=localhost
PGUSER=development
PGDATABASE=photolabs_development
PGPASSWORD=development
PGPORT=5432
```

5. Update the `.gitignore` to include the new `.env.development` file
6. Update the config object to use the keys from the `.env` 

```js
// inside /backend/src/db/index.js
const client = new pg.Client({
  // connectionString: process.env.DATABASE_URL || "",

  host: process.env.PGHOST,
  name: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,

  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});
```

7. Start the server with `npm start`
8. Visit `http://localhost:8001/api/debug/reset` to recreate and reseed the database tables
9. Test the `/api/photos` and `/api/topics` endpoints
