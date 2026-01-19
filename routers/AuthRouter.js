const router = require('express').Router();
const ApiResponse = require('./ApiResponse');
const {verifyToken} = require('../config/JWTConfig');

const adminRouter = require('./AdminRouter');
const custRouter = require('./CustomerRouter');

// Custom Middleware
router.use((request,response,next)=>
{
   const header = request.headers.authorization;
   if(header==undefined || header==null)
    response.json(new ApiResponse(false,"Token Not Found."));
   else
   {
        const token = header.split(" ")[1];
        verifyToken(token,(err,data)=>
        {
            if(err)
                response.json(new ApiResponse(false,"Invalid or Expire Token.",err));
            else
            {
                //console.log(data);
                const {email,role} = data;
                request.loginuser = {email,role};
                next();
            }
        });
   }
});
router.use("/admin",adminRouter);
router.use("/customer",custRouter);

module.exports = router;