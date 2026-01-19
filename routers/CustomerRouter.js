const router=require('express').Router();
const ApiResponse=require('./ApiResponse')

//custom middlware to check auth androle can be added here
router.use((request,response,next)=>
{
if(request.loginuser.role=='customer')
    next();
else
    response.json(new ApiResponse(false,"unauthorized request"))
});


module.exports=router;
