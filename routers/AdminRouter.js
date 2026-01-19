const router=require('express').Router();
const ApiResponse=require('./ApiResponse')
const {Op}=require('sequelize')
const path=require('path')
const {Category,Product,User}=require('../models/index');

//custom middlware
router.use((request,response,next)=>
    {
if(request.loginuser.role=='admin')
    next();
else
    response.json(new ApiResponse(false,"unauthorized request"))
});
//******************category*********************
router.post("/savecate",async(request,response)=>
    {
try{
    const cate= await Category.create(request.body);
    response.json(new ApiResponse(true,"category  saved",cate))
}catch(err){
 response.json(new ApiResponse(false,"category not saved",err))
}
   })
//****************user */******************* */
router.get("/listuser",async (request,response)=>
    {
const list= await User.findAll({
    where:{
        email:{ 
            [Op.ne]:request.loginuser.email
        }},
        attributes:{
            exclude:["password","role","createdAt","updatedAt"]
        }
        });
        response.json(new ApiResponse(true,"user list",list))

})

  // ********************* Product *****************************
router.post("/saveproduct",async (request,response)=>
{
    try{
        const data = request.body;

        const file = request.files.image;
        
        const fileName = Date.now() + path.extname(file.name);  
        
        const dirPath = path.join("/products",fileName)
        const imgPath = path.join(__dirname,"../","assets",dirPath);

        file.mv(imgPath);
        
        const cate = await Product.create({
            ...request.body,
            image : dirPath
        });
        response.json(new ApiResponse(true,"Product Saved",cate));
    }catch(err){
        response.json(new ApiResponse(false,"Product Not Save",err));
    }
});

module.exports = router;