import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    "name":{
        type:String,
        trim:true,
        required:true
    },
    "email":{
        type:String,
        trim:true,
        unique:true,
        required:true
    },

    "phone":{
        type:String,
        trim: true,
        required:true
    }
})

export default mongoose.model("user",userSchema)