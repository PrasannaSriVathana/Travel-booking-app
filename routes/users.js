import express from "express";
import Hotel from "../models/hotels.js";
import { createError } from "../utils/error.js";
import { deleteUser, getAllUser, getUser, updateUser } from "../controllers/users.js";
import { verifyToken,verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//    res.send("hello user! you are logged in")
//})

//router.get("/checkuser/:id", verifyUser,(req,res,next)=>{
//    res.send("hello user,you are logged in and you can delete your account")
//})

//router.get("/checkadmin/:id", verifyAdmin,(req,res,next)=>{
//    res.send("hello admin,you are logged in and you can delete your account")
//})


//UPDATE

router.put("/:id",verifyUser,updateUser);


//DELETE

router.delete("/:id",verifyUser,deleteUser);

//GET

router.get("/:id",verifyUser,getUser);

//GET ALL

router.get("/",verifyAdmin,getAllUser);

export default router;