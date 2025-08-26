import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  campaignId: { type: mongoose.Schema.Types.ObjectId, ref: "Campaign" },
  paymentStatus: { type: String, default: "pending" }, // pending, success, failed
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Donation", donationSchema);
