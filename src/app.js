const express = require("express")
const app = express()

app.get("/user/:userid/:password/:username",(req,res)=>{
    //console.log(req.query)// to read query parameters
    console.log(req.params)//to handle and read dynamic routes
    res.send({
        "firstname": "kunal",
        "lastname" : "phogat"
    })
})

//advance routing
app.get("/*fly$/",(req,res)=>{
    res.send("hello from abc route")
})
app.post("/user",(req,res)=>{
    //creating and saving the user logic
    res.send("saved the user details successfully")
})
app.delete("/user",(req,res)=>{
    res.send("deleted the user successfully")
})
app.put("/user",(req,res)=>{
    res.send("update the user info in db")
})
app.use("/test",(req,res)=>{
    res.send("testing route /test/...")
})


//order of routes matters a lot 

app.listen(8088,()=>{
    console.log("server is up and listening to requests on port 8088")
})