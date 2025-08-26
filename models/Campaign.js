import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  goal: Number,
  raised: { type: Number, default: 0 },
});

export default mongoose.model("Campaign", campaignSchema);

