const express = require("express")
const connectDb = require("./config/database")
const User = require("./models/user")
const app = express()
app.post("/signup",async (req,res)=>{
    const user = new User({
        firstname : "akshay",
        lastname : "saini",
        email: 'akshay@gmail.com',
        password : "namaste20",
        age : 24,
        gender : "male"
    })
    try{
        res.send("user added successfully")
        await user.save()
    }
    catch(err){
        res.status(400).send("error while adding the user")
    }
})

connectDb().then(()=>{
    console.log("Database connected successfully")
    app.listen(8088,()=>{
    console.log("server is up and listening to requests on port 8088")
})
})
.catch((err)=>{
    console.error("Database did not connect")
})


