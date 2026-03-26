//all the validation logic 
const validator = require("validator")
const validateSignup = (req)=>{
    const {firstname, lastname , emailid ,password} = req.body
    if(!firstname || !lastname){
        throw new Error("enter your correct first and lastname")
    }
    else if(!validator.isEmail(emailid)){
        throw new Error("enter a valid email")
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("enter a strong password")
    }

}
module.exports = {validateSignup}