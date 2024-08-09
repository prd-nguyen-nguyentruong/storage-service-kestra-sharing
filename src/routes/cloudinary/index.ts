import express from "express";
import CloudinaryController from "@controllers/cloudinary";

const router = express.Router();

router.get('/images', CloudinaryController.getImages);

export default router;

