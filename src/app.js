const express = require("express")
const app = express()
const {adminAuth , userAuth} = require("./midllewares/auth")

app.use("/admin",adminAuth)
app.post("/user/login",(req,res)=>{
    res.send("user logged in successfully")
})
app.use("/user",userAuth,(req,res)=>{
    res.send("sent user data")
})


app.get("/admin/getAllData",(req,res)=>{
    res.send("all data sent")
})
app.get("/admin/delete",(req,res)=>{
    res.send("deleted a user")
})


//order of routes matters a lot 

app.listen(8088,()=>{
    console.log("server is up and listening to requests on port 8088")
})