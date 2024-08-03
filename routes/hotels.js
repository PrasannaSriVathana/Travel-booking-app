import express from "express";
import Hotel from "../models/hotels.js";
import { createError } from "../utils/error.js";
import {countByType,countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel} from "../controllers/hotels.js";
import { verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE

router.post("/",verifyAdmin, createHotel);

//UPDATE

router.put("/:id",verifyAdmin,updateHotel);


//DELETE

router.delete("/find/:id",verifyAdmin,deleteHotel);

//GET

router.get("/find/:id",getHotel);

//GET ALL

router.get("/",getAllHotel);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);

export default router;