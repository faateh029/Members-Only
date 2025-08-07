import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    timeStamp: {
        type:Date ,
        default:Date.now()
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

export const message = mongoose.model("Message" , messageSchema);