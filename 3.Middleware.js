const express = require("express");
const app = express();

// Middleware function to log requests
const logRequests = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Call the next() function to pass the request to the next middleware or route handler
};

// Middleware function to add a custom header
const addCustomHeader = (req, res, next) => {
  res.set("X-Custom-Header", "Hello from middleware!");
  next();
};

// Register the middleware functions
app.use(logRequests);
app.use(addCustomHeader);

// Route handler
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});

// In this example, we define two middleware functions: logRequests and addCustomHeader. 
//The logRequests middleware logs the current date, HTTP method, and requested URL for every incoming request.
//The addCustomHeader middleware adds a custom header named X-Custom-Header to the response.

// When a request comes in, it first goes through the logRequests middleware, which logs the request details and then calls next(), passing the request to the addCustomHeader middleware.
//The addCustomHeader middleware adds the custom header and again calls next() to pass the request to the route handler, which sends the response back to the client.

// So, the request-response flow is like this:

// Request comes in.
// Request goes through the logRequests middleware (logs the details).
// Request goes through the addCustomHeader middleware (adds a custom header).
// Request reaches the route handler (sends the response).
// Response goes back to the client.