const express = require('express');
const app = express();

// API
// get - read
// post - create
// put - update
// delete - delete

// app.get(route,callabck);

//multiple lines
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello, this is home page</h1>
    <h2>Hello, this is home page</h2>
  `);
});

//Single Lines
app.get('/', (req, res) => {
  res.send("<h1>Hello, this is home page</h1><h2>Hello, this is home page</h2>");
});

app.get('/', (req, res) => {
  const htmlContent = "<h1>Welcome to Home page</h1><p>This is some additional content.</p>";
  res.send(htmlContent);
});

//The callnack function has 2 paremeters request(req) and response (res).
//The request object represents the HTTP request and It has properties for the request query string,
//paremeters, body, HTTP headers.
//The response object represents the HTTP response.


app.get('/about',(req,res)=>{
    res.send('Hello, this is about page');
})
app.get('/about',(req,res)=>{
    res.status(200).send("Welcome to about page");
})

                                 // res.send() vs res.status(200).send();
// In most cases, both approaches will have the same effect, and the client will receive a response with a status code of 200 
// along with the provided message.
// The difference between them lies in how you handle the HTTP status codes:

// If you want to explicitly set a specific HTTP status code, like 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc., 
// you can use res.status(code).send(data) or res.sendStatus(code) methods.

// If you don't need to set a specific status code and want to use the default status of 200, you can use res.send(data) directly.

app.get('/', (req, res) => {
  res.send("<h1>Welcome to Home page</h1>");
  res.send("<h1>Welcome to Home page</h1>");
});

// When you call res.send() multiple times within the same route handler, only the first call will have an effect,
// and subsequent calls will be ignored. This is because an HTTP response can only be sent once.

app.get('/', (req, res) => {
  res.write("<h1>Welcome to Home page<h1/>");
  res.write("<h1>Welcome to Home page<h1/>");
  res.end();
});

                                            //res.write() vs res.send()
// response.write(): This method is typically used in low-level server APIs or frameworks that provide fine-grained 
// control over the HTTP response. It allows you to write data to the response stream in chunks. You can use it to send
// multiple chunks of data or partial responses, useful when dealing with streaming large files or data.

app.listen(5000,()=>{
  console.log("Listening on Port 5000");
});
