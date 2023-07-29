const express = require("express");
const app = express();

//To set the view engine
app.set("view engine", "hbs");

//Template Engine Route
app.get("/",(req,res)=>{
  res.render("index",{
    channelName : "Vaibhav Rajput",
  })
})

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
