const mongoose = require("mongoose")

const connectDb = async ()=>{
    await mongoose.connect("mongodb+srv://kunalphogat38_db_user:5Ak6UZlhmvPXVcAA@namastenodejs.splbqn4.mongodb.net/devTinder")
}

module.exports = connectDb

