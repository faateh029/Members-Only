import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';
import { userRouter } from './routes/userRoute.js';
import {authRouter} from './routes/authRoute.js';
import requestLogger from './middleware/requestLogger.js';
import { dbConnect } from './config/dbConnect.js';
dotenv.config();
dbConnect();
const app = express();
app.use(express.json());
app.use(requestLogger);
app.use('/auth' , authRouter);
app.use('/users' , userRouter);
app.use(errorHandler)
const port=process.env.PORT||7002;
app.listen(port , ()=>{
    console.log("server running on app.js")
})