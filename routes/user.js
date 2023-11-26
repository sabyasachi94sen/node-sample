import { createUser } from "../controller/user.js";
import express from "express"
const routes=express.Router();

routes.post("/create",createUser)

export default routes;
