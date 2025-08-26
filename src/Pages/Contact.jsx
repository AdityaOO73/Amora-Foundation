import { useState } from "react";
import { Footer, Header } from "../Components";
import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaRegCommentDots,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      name.trim() &&
      email.trim() &&
      message.trim() &&
      emailPattern.test(email)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setModalMessage(
        "⚠️ Please fill out all required fields with valid information."
      );
      setShowModal(true);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setModalMessage(
          "✅ Your message has been sent successfully! We will get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setModalMessage("⚠️ Something went wrong. Please try again later.");
      }
    } catch (error) {
      setModalMessage("🚨 Server error. Please try again later.");
    }

    setShowModal(true);
  };

  return (
    <>
      <Header />
      <main
        className="py-12 bg-fixed bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/contact.png')" }}
      >
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 mx-auto py-10 px-6 sm:px-10 md:px-12 rounded-3xl shadow-2xl max-w-5xl">
          {/* Page Title */}
          <h2 className="text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent flex justify-center items-center gap-2">
            <FaPaperPlane /> Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-10">
            💬 Have questions, feedback, or need assistance? We’d love to hear
            from you!
          </p>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl shadow-md"
          >
            <div>
              <label className="block text-sm font-medium mb-1">
                <FaUser className="inline mr-2 text-blue-600" /> Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInput}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                <FaEnvelope className="inline mr-2 text-green-600" /> Email
              </label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInput}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
                placeholder="your@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                <FaTag className="inline mr-2 text-purple-600" /> Subject
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleInput}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                <FaRegCommentDots className="inline mr-2 text-pink-600" />{" "}
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInput}
                rows="5"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-500"
                placeholder="Write your message here..."
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-2 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                <FaPaperPlane /> Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-12 text-gray-700 text-center space-y-4">
            <h3 className="text-2xl font-semibold text-[#00356B]">
              📍 Get in Touch
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600 mt-4">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-green-600" /> info@amorahelpfoundation.org
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-600" /> +1 (033) 123-4567
              </p>
            </div>
            <p className="flex items-center justify-center gap-2">
              <FaMapMarkerAlt className="text-red-500" /> 123 Netaji Street, New
              Town, Kolkata 700001
            </p>
            <p className="flex items-center justify-center gap-2">
              <FaClock className="text-purple-600" /> Mon-Fri, 9AM - 5PM
            </p>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.382408863485!2d88.4241!3d22.5796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzQ2LjYiTiA4OMKwMjUnMjYuOCJF!5e0!3m2!1sen!2sin!4v16123456789"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>

          {/* Social Links */}
          <div className="mt-10 text-center">
            <h3 className="text-xl font-semibold mb-3 text-[#00356B]">
              🌐 Follow Us
            </h3>
            <div className="flex justify-center gap-8 text-2xl">
              <a href="#" className="text-blue-600 hover:scale-125 transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-pink-500 hover:scale-125 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-blue-400 hover:scale-125 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-blue-700 hover:scale-125 transition">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center w-11/12 max-w-md animate-bounce">
              <p className="text-gray-800 mb-3">{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-2 bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-full hover:scale-105 transition"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Contact;

