import Campaign from "../models/Campaign.js";

// Get all campaigns
export const getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
};

// Add new campaign (Admin use)
export const createCampaign = async (req, res) => {
  const campaign = new Campaign(req.body);
  await campaign.save();
  res.json({ success: true, campaign });
};

// Update campaign raised amount after donation
export const updateCampaign = async (req, res) => {
  const { id } = req.params;
  const { raised } = req.body;

  const campaign = await Campaign.findById(id);
  if (!campaign) return res.status(404).json({ error: "Campaign not found" });

  campaign.raised += raised;
  await campaign.save();

  res.json({ success: true, campaign });
};
