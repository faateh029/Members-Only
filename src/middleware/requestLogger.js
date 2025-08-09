import logger from '../config/logger.js';

 const requestLogger = async (req , res)=>{
    logger.info(`${req.method} ${req.originalUrl}`)
    next();
}
export default requestLogger; 