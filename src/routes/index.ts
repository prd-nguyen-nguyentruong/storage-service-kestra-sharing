import express from "express";
import cloudinaryRouter from "@routes/cloudinary";
import scrapeRouter from "@routes/scrape";
import mediaRouter from "@routes/media";


const router = express.Router();

router.use('/cloudinary', cloudinaryRouter);

router.use('/scrape', scrapeRouter);

router.use('/media', mediaRouter);

export default router;