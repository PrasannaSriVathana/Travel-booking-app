import express from "express";
import Hotel from "../models/hotels.js";
import { createError } from "../utils/error.js";
import {createRoom,deleteRoom, getAllRoom, getRoom, updateRoom} from "../controllers/rooms.js";
import { verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE

router.post("/:hotelid",verifyAdmin, createRoom);

//UPDATE

router.put("/:id",verifyAdmin,updateRoom);


//DELETE

router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//GET

router.get("/:id",getRoom);

//GET ALL

router.get("/",getAllRoom);

export default router;