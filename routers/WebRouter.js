const router=require('express').Router();
const {User}=require('../models/index')
const ApiResponse=require('./ApiResponse')
const {generateToken}=require('../config/JWTConfig')

const {Category,Product}=require('../models/index')

    router.get("/listcate",async(request,response)=>{
        const list =await Category.findAll();
        response.json(new ApiResponse(true,"category list" ,list))
    })

    router.get("/listproduct",async(request,response)=>{
       const list =await Product.findAll();
        response.json(new ApiResponse(true,"product list" ,list))
    })
    router.get("/listproductbycate/:cate",async(request,response)=>{
        const Category=request.params.cate;
        const list =await Product.findAll(
           { where:{Category}}
        );
        response.json(new ApiResponse(true,"product list" ,list))
    })

     router.post("/register",async(request,response)=>
      {
        try{
        const obj=request.body;
        obj.role="customer"
        obj.status=true;  

        await User.create(obj);
        response.json(new ApiResponse(true,"User Regisetered Successfully"));
        }
        catch(err)
        {
           response.json(new ApiResponse(false,"User Registration Failed"));
        }});



     router.post("/login",async(request,response)=>
          {
        const{email,password}=request.body;
        const user=await User.findOne(
            {where:{email,password}
            })
        if(user)
        {
            const token=generateToken(user.email,user.role)
            response.json(new ApiResponse(true,"Login Succesfull",{
                name : user.name,
                role : user.role,
                token 
            }))
        }else
        {
            response.json(new ApiResponse(false,"Login failed",err))
        }
        })

module.exports=router;