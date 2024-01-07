const mongoose=require("mongoose")

const mondbUrl="mongodb+srv://Lucifer:3Q7GiwExLa26VpUV@cluster0.ubl86kq.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}