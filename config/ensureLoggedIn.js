const LoggedIn = (req,res,next)=>{
    if (req.auth)next()
    else{
    res.status(403)
res.send()
}}
module.exports = LoggedIn
