const express =require("express")

const cors=require("cors")

const  app=express();
const authContoller = require('./controller/auth.controller')

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message: "Welcome to ecommerce api - node",status:true})
})

const authRouters=require("./routes/auth.route")
app.post("/signup",authContoller.register);

const userRouters=require("./routes/user.route");
app.use("/api/users",userRouters);

module.exports=app;


