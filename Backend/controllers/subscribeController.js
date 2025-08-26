import Subscriber from "../models/Subscriber.js";

export const subscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    res.json({ success: false, message: "Already subscribed!" });
  }
};
