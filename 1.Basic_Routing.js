const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to Home page");
});

app.get('/about',(req,res)=>{
    res.status(200).send('Welcome to about page');
})

app.listen(5000,()=>{
  console.log("Listening on Port 5000");
});