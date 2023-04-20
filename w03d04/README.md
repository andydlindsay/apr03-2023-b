# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [ ] Method Override [Stretch]

### Hashing
* one-way process
* cannot be undone
* plaintext password => hashing algo => hash 60 character string
* salt - string that gets added to the password before hashing
* "secret" + "aksdhfajksdhf8adfkjasd" => hash

### Encryption
* two-way process
* can be undone
* single key is used to encrypt and decrypt

plaintext => encryption algo => encrypted string
encrypted string => decryption algo => plaintext

                                                                                response
client <===tcp/http====> middleware ==> middleware ===> server => middleware => client
                        body-parser     cookie-session            cookie-session
                          req.body      req.session
                                          decrypt                 encrypt


req.cookies => req.session


HTTP Secure - encrypted
https://localhost:8000/protected

Monster in the Middle (MitM)

asymetric not the same key to encrypt as decrypt
public key => encrypt data sent to the server
private key => held secret by the server and used to decrypt

https://www.google.com/


### REST
* must understand RESTful architecture
* naming convention for routes
* SOAP

GET /all-the-urls
GET /one-url/:urlId
POST /create-new-url

Browse  GET   /users
Read    GET   /users/:id
Edit    POST  /users/:id
Add     POST  /users
Delete  POST  /users/:id/delete


Browse  GET    /users
Read    GET    /users/:id
Edit    PATCH  /users/:id
Add     POST   /users
Delete  DELETE /users/:id



### Other HTTP Verbs
* semantic aliases for POST
* HTML cannot use these verbs
* AJAX => JS sends/receives the HTTP requests for us

PUT => replace the resource entirely
PATCH => replaces a piece of resource
DELETE => deletes a resource



const username = 'alice';
div => section, article, aside, header, footer



https://www.google.com/search?
q=javascript&
rlz=1C1RXQR_enCA942CA942&
oq=javascript&
aqs=chrome..69i57j69i59j69i60l3j69i65l3.1422j0j1&sourceid=chrome&ie=UTF-8

req.query.q // 'javascript'

?_method=DELETE
req.query._method



