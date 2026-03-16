const express = require("express")
const app = express()


app.use("/getUser",(req,res)=>{

    //db call logic
    try{throw new Error()
    res.send("sent user data")}
    catch(err){
        res.status(500).send("some error")

    }
})

//wildcard error handling

app.use("/",(err,req,res,next)=>{
    res.status(500).send("something went wrong")
})





//order of routes matters a lot 

app.listen(8088,()=>{
    console.log("server is up and listening to requests on port 8088")
})