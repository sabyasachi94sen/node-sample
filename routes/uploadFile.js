import { getFiles, uploadFile } from "../controller/uploadFile.js";
import express from "express";
import multer from "multer";
import path from "path"

const routes=express.Router();
const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'/node-sample/files/')        
    },
    filename:function(req,file,cb){
        console.log(file,"fs");
        const uniqueSuffix= `${Date.now()}`;
        cb(null,uniqueSuffix+file.originalname)
    }
})

const upload=multer({storage:storage})
upload.fields([{name: "file",maxCount:1}])

routes.post("/upload-files",upload.single("file"),uploadFile)

routes.get("/get-files",getFiles)

export default routes;
