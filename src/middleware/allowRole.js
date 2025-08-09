 const allowedRoles =  (...roles)=>{
     return (req , res,next)=>{
  if(roles.includes(req.user.role)){
        return next();
      }else{
        return res.status(409).json({msg:"access denied"});
      }
     } 
}

export default allowedRoles;