const express = require("express")
const app = express()


app.use("/user",(req,res,next)=>{
    console.log("Route handler")
    //res.send("Response!!!")
    next()  
},[(req,res,next)=>{
    console.log("Route handler 2")
    //res.send("Response 2")
    next()
},(req,res,next)=>{
    console.log("Route handler 3")
    //res.send("Response 3")
    next()
},
(req,res,next)=>{
    console.log("Route handler 4")
    res.send("Response 4")
    next()
}])


//order of routes matters a lot 

app.listen(8088,()=>{
    console.log("server is up and listening to requests on port 8088")
})