import Contact from "../models/Contact.js";

export const saveContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json({ success: true, message: "Message saved successfully" });
};
