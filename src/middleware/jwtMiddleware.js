import jwt from 'jsonwebtoken';
export const verifyToken = async (req , res , next)=>{
    try {
    const headerToken = req.headers.authorization ||req.headers.Authorization;
    let accessToken ;
    if(!headerToken){
        return res.status(404).json({msg:"token not found"});
    }
    if(headerToken&&headerToken.startsWith("Bearer")){
         accessToken = headerToken.split(" ")[1];
    }
    const decodedToken= jwt.verify(accessToken,process.env.JWT_SECRET);
    req.user = decodedToken;
    next();   
    } catch (error) {
         return res.status(500).json({msg:"Internal Server Error"});   
    }
}

export const isAdmin = async (req,res,next)=>{
    if(req.user.role==="admin"){
       return next();
    }
    res.status(409).json({msg:"access denied"});
}