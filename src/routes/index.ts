import express from "express";
import cloudinaryRouter from "@routes/cloudinary";
import scrapeRouter from "@routes/scrape";


const router = express.Router();

router.use('/cloudinary', cloudinaryRouter);

router.use('/scrape', scrapeRouter);

export default router;