import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './config/dbConnect';
dotenv.config();
dbConnect();
const app = express();
app.use(express.json());



const port=process.env.PORT;
app.listen(port , ()=>{
    console.log("server running on app.js")
})