import * as dotenv from "dotenv";


dotenv.config();

export const CLOUDINARY_NAME= process.env.CLOUDINARY_NAME || "";
export const CLOUDINARY_API_KEY= process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET= process.env.CLOUDINARY_API_SECRET || "";
export const APP_PORT= process.env.APP_PORT || 3000;
export const MONGO_URL = process?.env.MONGO_URL || ''