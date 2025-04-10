const jwt = require('jsonwebtoken')
const verifyJWT = (req, res, next)=> {
    const authHeader = req.headers.authorization || req.headers.Authorization
    if(!authHeader?.startsWith('Bearer ')  || authHeader==="Bearer null"){
        return res.status(401).json({message : 'Unauthorized'})
    }
    const token = authHeader.split(' ')[1]

    // if(authHeader==="Bearer null"){
    //     return res.status(401).json({message : 'Unauthorized'})
    // }
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded)=>{
            if(err){
                return res.status(403).json({message: 'Forbidden'})
            }
            req.supplier = decoded
            if(!req.supplier)   
                return res.status(401).json({message: 'Not a supplier'})       
            next()
        }
    )
}
module.exports = verifyJWT

