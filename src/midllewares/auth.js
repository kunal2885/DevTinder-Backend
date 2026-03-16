const adminAuth = (req,res,next)=>{
    console.log("checking the authorization of admin")
    const token = "xyz"
    const isAuthorized = token === 'xyz'
    if(!isAuthorized){
        res.status(401).send("unauthorized access")
    }
    else{
        next()
    }
}

const userAuth =  (req,res,next)=>{
    console.log("checking the authorization of user")
    const token = "xyz"
    const isAuthorized = token === 'xyz'
    if(!isAuthorized){
        res.status(401).send("unauthorized access")
    }
    else{
        next()
    }
}

module.exports = {adminAuth , userAuth}