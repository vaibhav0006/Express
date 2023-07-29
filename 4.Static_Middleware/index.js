const express = require("express")
const path = require('path')
const app = express()
 
const staticPath = path.join(__dirname,"/")

app.use(express.static(staticPath));

app.get("/",(req,res) =>{
  res.send("hello world");
})


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
