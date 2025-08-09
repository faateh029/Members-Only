import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
export const club_join_controller = async(req ,res)=>{
    try {
     
    const {secret} = req.body;
       let token;
       const authHeader = req.headers.authorization || req.headers.Authorization;
        if(!authHeader){
            return res.status(400).json({msg:"Token not found"});
        }
       if(authHeader && authHeader.startsWith("Bearer")){
         token = authHeader.split(" ")[1];
       }
       const decodedToken = await jwt.verify(token , process.env.JWT_SECRET  )
       req.user = decodedToken;
       if(req.user.role==="admin"||req.user.role==="member"){
        return res.json({msg:"No need to upgrade"})
       }
         if(secret===process.env.MEMBER_PASSCODE){
            const user = User.findOne({ _id: req.user._id });
             if(!user){
                return res.status(400).json({msg:"user not found"})
             }
            user.role= "member"
           await user.save();
          return res.status(200).json({msg:"role updated successfully"})            
       }
       res.status(409).json({msg:"Access not given"})    
    } catch (error) {
         return res.status(500).json({msg:error.message});
    }
}




export const create_message_controller =async (req,res)=>{
   
}