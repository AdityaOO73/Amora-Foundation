import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// @desc  Save contact form message
// @route POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ success: true, message: "Message received!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;

