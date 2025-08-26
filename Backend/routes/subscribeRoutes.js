import express from "express";
import { subscribeEmail } from "../controllers/subscribeController.js";

const router = express.Router();
router.post("/", subscribeEmail);

export default router;
