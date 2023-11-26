import mongoose from "mongoose";

export const Dbconnection=async (DB)=>{
   return await mongoose.connect(DB,{
    retryWrites:true,
    w:"majority"
   })
}


export default mongoose;