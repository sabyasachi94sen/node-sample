import mongoose from "mongoose";

const uploadFileSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true
    }
})

export default mongoose.model("uploadFile",uploadFileSchema)