# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a remote server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a remote server
- [x] All without refreshing the browser

### AJAX / AJAJ
* Asynchronous Javascript And XML
* make HTTP requests via Javascript
* XHR object
* XMLHTTPRequest object

* eXtensible Markup Language

<user>
  <username>alice</username>
  <password>1234</password>
</user>

{
  "username": "alice",
  "password": "1234"
}

```js
$.ajax({
  method: 'GET',
  url: '/tweets',
  success: (response) => {},
  error: (err) => {}
});

$.ajax({
  method: 'GET',
  url: '/tweets',
}).then((response) => {})
  .catch((err) => {});
```















