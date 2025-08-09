import logger from '../config/logger.js';

 const errorHandler = (err,req,res,next)=>{
   logger.error(`ERROR: ${err.message}-${req.method} ${req.orignalUrl}`);
   const statusCode = err.statusCode || 500
   res.status(statusCode).json({msg:err.message||"something went wrong"})
      next();

}

export default errorHandler;