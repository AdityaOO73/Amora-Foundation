import express from "express";
import { donateToCampaign } from "../controllers/donationController.js";

const router = express.Router();
router.post("/", donateToCampaign);

export default router;
