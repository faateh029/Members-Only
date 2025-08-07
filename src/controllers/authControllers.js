import {User} from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const signupController = async (req , res)=>{
   const {fullname,email,password,confirmPassword} = req.body;
   if(password!=confirmPassword){
    return res.status(400).json({msg:"passwords do not match"});
   }
   const validateEmail = await User.findOne({email});
   if(validateEmail){
    return res.status(409).json({msg:"Email already in use"});
   }
   const hashPass= await bcryptjs.hash(password , 10);
   const userData = {
    fullname ,
    email,
    password:hashPass,
   }

   const newUser= new User(userData);
    await newUser.save();
    const accessToken = jwt.sign({user_id:_id , email , role} , process.env.JWT_SECRET , {expiresIn:"1h"});
   res.status(200).json(  {token:accessToken 
    ,user:{fullname:fullname,
                         email:email,
                        }})  
   
}

export const loginController = async (req , res)=>{
    const {email , password} = req.body;

    
}