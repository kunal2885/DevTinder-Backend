const express = require("express")
const app = express()
app.use("/hello",(req,res)=>{
    res.send("hello from express server")
})
app.use("/test",(req,res)=>{
    res.send("hello from test")
})

app.use("/",(req,res)=>{
    res.send("namaste from home page")
})

app.listen(8088,()=>{
    console.log("server is up and listening to requests on port 8088")
})