# Midterm Project Kickoff

### Pick a Project

### User Stories
* describes what a user can and cannot do in the app
* As a ____, I can _____, because _______

* As a logged in user, I can see a list of available maps, because I'm interested in things in my area
* As a logged in user, I can add many points to my map, because I want to share those locations with others

/planning/user-stories.md

### Identify our Nouns
* nouns === tables
* ERD => how are the nouns related
* lowest fidelity possible

/planning/erd.png
/planning/erd-stretch.png

### Routes
* BREAD routes for each table
* Remember REST

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

PUT => replace a resource entirely
PATCH => replace a piece of a resource

/planning/routes.md

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo (MVD)
* What features can we show off in 5 mins?
* If you're not going to show it, don't build it

### Mockup/Wireframe
* lowest fidelity possible

/planning/wireframe-1.png
/planning/homepage.png

### User Login
* Don't do it

```js
app.get('/login/:id', (req, res) => {
  // plaintext cookies
  res.cookie('user_id', req.params.id);

  // encrypted cookies
  req.session.user_id = req.params.id;

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
* Back End: Node, Express, Postgres
* Front End: HTML, CSS, JS, jQuery, flexbox, bootstrap

### Skeleton

### SPA vs MPA
* up to you
* not mutually exclusive

### Git
* have a plan
* merge conflicts
* please don't code on master/main

### Communication
* scrum channel

### Splitting up the work
* pair program
* vertical slice
* horizontal slice





















