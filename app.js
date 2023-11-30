import { Dbconnection } from "./db/index.js";
import userRoutes from "./routes/user.js";
import uploadFileRoutes from "./routes/uploadFile.js"
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"


const app=express()
dotenv.config();


const PORT=process.env.PORT || 3002;



(async ()=>{
    try{
    const db=await Dbconnection(process.env.MONGO_URL);
    
    if(db){
        app.use(bodyParser.urlencoded({extended:true,limit:
            "50mb"
        }))
        app.use(bodyParser.json())
        app.use("/files",express.static("files"))
        app.use(express.json())
        app.use(cors({
            origin: '*'
        }))
        app.use("/",userRoutes)
        app.use("/",uploadFileRoutes)
        app.listen(PORT,()=>{
            console.log("connection successful at "+PORT);
        })
    }
}
catch(err){
   console.log("connection failed")
}
})()