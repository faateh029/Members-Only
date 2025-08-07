import mongoose from 'mongoose';
const userScheema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
     role:{
        type:String,
        enum:["user","member","admin"],
        default:"user"
     }
},
{
    timestamps:false
})

export const user = mongoose.model("User" , userScheema);