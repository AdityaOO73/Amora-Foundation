import Donation from "../models/Donation.js";
import Campaign from "../models/Campaign.js";

export const donateToCampaign = async (req, res) => {
  try {
    const { name, email, amount, campaignId } = req.body;

    const donation = new Donation({ name, email, amount, campaignId, paymentStatus: "success" });
    await donation.save();

    // Update campaign raised
    const campaign = await Campaign.findById(campaignId);
    if (campaign) {
      campaign.raised += amount;
      await campaign.save();
    }

    res.json({ success: true, message: "Donation successful!", donation, campaign });
  } catch (error) {
    res.status(500).json({ success: false, message: "Donation failed", error: error.message });
  }
};
