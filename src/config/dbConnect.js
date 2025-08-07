import mongoose from 'mongoose';

export const dbConnect = async ()=>{
    try {
       const connect=  await mongoose.connect(process.env.CONNECTION_STRING)
       console.log(`Connection with database established`)   

    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}