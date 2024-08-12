import express from "express";
import CloudinaryController from "@controllers/cloudinary";

const router = express.Router();

router.get('/raw', CloudinaryController.getRaw);

export default router;

