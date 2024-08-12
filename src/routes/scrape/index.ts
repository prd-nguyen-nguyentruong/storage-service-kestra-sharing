import express from "express";
import ScrapeController from "@controllers/scrape";

const router = express.Router();

router.get('/status', ScrapeController.getStatus);

export default router;

