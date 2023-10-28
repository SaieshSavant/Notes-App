const express = require("express")
const app = express()
const port=5000;
const mongodb=require("./DB");
mongodb();

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
})


app.use(express.json());
app.use('/api',require("./addnotes"));
app.use('/api',require("./Allnotes"));
app.use('/api',require("./deletenotes"));
app.use('/api',require("./updatenotes"));
app.get('/',(req,res)=>{
  res.send("hello saiesh")
})

app.listen(port,()=> console.log(`server running at {port}`));