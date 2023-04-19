# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Render pages differently based on language preference
- [x] Login user with email and password
- [x] Clearing cookies (user logout)

### The problem with HTTP
* stateless protocol
* neither party is required to remember any previous conversation/interaction
* the solution is cookies
* key/value pair stored by the browser
* specific to one domain localhost:3000 localhost:3001
* get sent along for the ride with EVERY HTTP request


GET /login # serves up the login form
POST /login # determine if the user is who they say they are
GET /protected # protected against non-logged in users
POST /logout # log the user out











