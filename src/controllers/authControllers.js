import {User} from '../models/userModel.js';
import logger from '../config/logger.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const signupController = async (req , res , next)=>{
  try {
   const {fullname,email,password,confirmPassword ,secretKey} = req.body;
   if(password!=confirmPassword){
    //return res.status(400).json({msg:"passwords do not match"});
    const error = new Error("Passwords do not match");
    throw error;
   }
   const validateEmail = await User.findOne({email});
   if(validateEmail){
    //return res.status(409).json({msg:"Email already in use"});
     const error = new Error("email already in use");
    throw error;
   }
   const hashPass= await bcryptjs.hash(password , 10);
   
   const userData = {
    fullname ,
    email,
    password:hashPass,
    role:"user" 
   }
   if(secretKey===process.env.MEMBER_PASSCODE){
    userData.role = "member";
   }else if (secretKey===process.env.ADMIN_PASSCODE){
    userData.role="admin";
   }
    const newUser= new User(userData);
    await newUser.save();

    const accessToken = jwt.sign(
    {
    user_id:newUser._id 
   , email:newUser.email 
   , role:newUser.role
    }
    , process.env.JWT_SECRET , 
    {
      expiresIn:"1h"
    });

    res.status(200).json( 
      {token:accessToken ,
        user:{
              fullname:fullname,
              email:email
             }
      })  
    
  } catch (error) {
      next(error); 
  }
   
}

export const loginController = async (req , res)=>{
    const {email , password} = req.body;
    const validateUser = await User.findOne({email});
    if(!validateUser){
        const error = new Error("invalid credentials");
    throw error;
    }
    const isPassValid = await bcryptjs.compare(password , validateUser.password);
    if(!isPassValid){
       const error = new Error("invalid credentials");
    throw error;
    }
    const accessToken =  jwt.sign(
          {
          user_id:validateUser._id ,
          email:validateUser.email ,
          role:validateUser.role
           } , 
          process.env.JWT_SECRET  , 
          {expiresIn:"1h"}
           );
    res.status(201).json({
        msg:"User logged in successfully",
        token:accessToken
    })
}