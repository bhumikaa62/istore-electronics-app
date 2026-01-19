const express=require('express');
const path=require('path');
const cors = require('cors')
const fileupload=require('express-fileupload')

const webRouter=require('./routers/WebRouter');
const authRouter=require('./routers/AuthRouter')
const server=express();

server.use(
  "/products",
  express.static(path.join(__dirname, "assets/products"))
);

server.use(cors());
server.use(express.urlencoded());
server.use(express.json())
server.use(fileupload())

server.use('/istore',webRouter);
server.use('/auth',authRouter);


server.listen(8989,()=>{
    console.log("server started at 8989")
});