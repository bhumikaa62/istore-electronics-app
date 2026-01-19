const jwt = require('jsonwebtoken')

const expiry = "35m";
const secret = "bdc5e2b2-9563-4398-874a-7e5e68276750";

function generateToken(email,role)
{
    const token = jwt.sign({email,role},secret,{ expiresIn: expiry });  
    return token;    
}

function verifyToken(token,callback)
{
    jwt.verify(token,secret,(err,tokenData)=>
        {
            
                callback(err,tokenData)
            
        })
}

module.exports = {generateToken,verifyToken}
