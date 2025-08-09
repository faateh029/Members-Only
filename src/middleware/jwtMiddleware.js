import jwt from 'jsonwebtoken';
import logger from '../config/logger.js';
export const verifyToken = async (req , res , next)=>{
    try {
    const headerToken = req.headers.authorization ||req.headers.Authorization;
    let accessToken ;
    if(!headerToken){
        const error = new Error("token not found")
          throw error;
    }
    if(headerToken&&headerToken.startsWith("Bearer")){
         accessToken = headerToken.split(" ")[1];
    }
    const decodedToken= jwt.verify(accessToken,process.env.JWT_SECRET
    );
    console.log(decodedToken);
    req.user = decodedToken;
    console.log(req.user._id);

    next();   
    } catch (error) {
         next(error);   
    }
}
