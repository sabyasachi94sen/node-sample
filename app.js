import { Dbconnection } from "./db/index.js";
import routes from "./routes/user.js";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";


const app=express()
dotenv.config();


const PORT=process.env.PORT || 3000;



(async ()=>{
    try{
    const db=await Dbconnection(process.env.MONGO_URL);
    console.log(db,"db");
    
    if(db){
        app.use(bodyParser.urlencoded({extended:true,limit:
            "50mb"
        }))
        app.use(bodyParser.json())
        app.use(express.json())
        app.use("/",routes)
        app.listen(PORT,()=>{
            console.log("connection successful");
        })
    }
}
catch(err){
   console.log("connection failed")
}
})()