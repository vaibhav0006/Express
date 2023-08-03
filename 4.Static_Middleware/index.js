const express = require("express")
const app = express()
const path = require('path')
 
const staticPath = path.join(__dirname,"/")

//express.static(root, [options])

app.use(express.static(staticPath))

app.get("/",(req,res) =>{
  res.send("hello world");
})


app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
