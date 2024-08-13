import express from "express";
import MediaController from "@controllers/media";

const router = express.Router();

router.post('/raw', MediaController.insertRaw);

export default router;

