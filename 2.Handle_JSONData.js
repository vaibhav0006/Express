const express = require('express');

const app = express();


//Purpose: This method is used to send JSON responses to the client. It automatically sets the Content-Type header to application/json and converts the JSON data into a string before sending it.
//Usage: It is commonly used when you want to send JSON data as a response, such as API responses.

app.get('/', (req, res) => {
  const data = { name: "John", age: 30 };
  res.send(data);
});

//Purpose: This method is more versatile and can be used to send various types of data in the response, such as strings, HTML, JSON, etc. It does not set the Content-Type header automatically, so you need to specify it explicitly if required.
//Usage: It is used when you want to send non-JSON data or when you need more control over the Content-Type header.

app.get("/", (req, res) => {
  const data = { name: "John", age: 30 };
  json.send(data);
});

// How we can change content-type itself

// Using res.type():
app.get("/json", (req, res) => {
  const jsonData = { name: "John", age: 30 };
  res.type("json").send(jsonData);
});

app.get("/xml", (req, res) => {
  const xmlData = "<user><name>John</name><age>30</age></user>";
  res.type("xml").send(xmlData);
});

// Using res.set():
app.get("/json", (req, res) => {
  const jsonData = { name: "John", age: 30 };
  res.set("Content-Type", "application/json").send(jsonData);
});

app.get("/xml", (req, res) => {
  const xmlData = "<user><name>John</name><age>30</age></user>";
  res.set("Content-Type", "application/xml").send(xmlData);
});

app.listen(5000,()=>{
  console.log("Listening on Port 5000");
});