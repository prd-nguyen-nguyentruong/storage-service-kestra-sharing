import express from "express";
import UserController from "@controllers/user";

const router = express.Router();

router.get('/users', UserController.getUser);

export default router;

