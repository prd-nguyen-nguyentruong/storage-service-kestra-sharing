import express from "express";
import cloudinaryRouter from "@routes/cloudinary";


const router = express.Router();

router.use('/cloudinary', cloudinaryRouter);

export default router;