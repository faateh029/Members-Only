import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';
import requestLogger from './middleware/requestLogger.js';
import { dbConnect } from './config/dbConnect.js';
dotenv.config();
dbConnect();
const app = express();
app.use(express.json());
app.use(logger);

app.use(errorHandler)
const port=process.env.PORT;
app.listen(port , ()=>{
    console.log("server running on app.js")
})