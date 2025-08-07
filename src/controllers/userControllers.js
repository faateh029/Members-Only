import {User} from '../models/userModel.js';
export const clubjoinController = async (req , res)=>{
  const {secretKey} = req.body ;
  if(!secretKey){
    return res.status(404).json({msg:"no secret key found"})
    }
  if(secretKey===process.env.CLUB_SECRET_PASSCODE){
   
  await User.findByIdAndUpdate(req.user._id, {role:"member"});
  return res.status(200).json({msg:"Hi Member"});
  }
 res.status(409).json({msg:"Access denied"});
}