import mongoose from "mongoose"

const messageSchema = new mongoose.Scheema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    timeStamp: {
        type:date ,
        default:Date.now()
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

export const message = mongoose.model("message" , messageSchema);