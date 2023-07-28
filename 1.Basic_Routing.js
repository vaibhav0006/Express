const express = require('express');
const app = express();
// API
// get - read
// post - create
// put - update
// delete - delete
// app.get(route,callabck);

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello, this is home page</h1>
    <h2>Hello, this is home page</h2>
  `);
});

//The callnack function has 2 paremeters request(req) and response (res).
//The request object represents the HTTP request and It has properties for the request query string,
//paremeters, body, HTTP headers.
//The response object represents the HTTP response.


app.get('/about',(req,res)=>{
    res.send('Hello, this is about page');
})
app.get('/about',(req,res)=>{
    res.status(200).send('Welcome to about page');
})

In most cases, both approaches will have the same effect, and the client will receive a response with a status code of 200 along with the provided message.
The difference between them lies in how you handle the HTTP status codes:

If you want to explicitly set a specific HTTP status code, like 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc., 
you can use res.status(code).send(data) or res.sendStatus(code) methods.

If you don't need to set a specific status code and want to use the default status of 200, you can use res.send(data) directly.

app.listen(5000,()=>{
  console.log("Listening on Port 5000");
});
