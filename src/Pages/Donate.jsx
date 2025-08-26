import { useState } from "react";
import { Footer, Header } from "../Components";
import {
  FaLock,
  FaEnvelope,
  FaHeart,
  FaUser,
  FaShieldAlt,
  FaCheckCircle,
  FaHandsHelping,
} from "react-icons/fa";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [formData, setFormData] = useState({
    amount: "",
    frequency: "one-time",
    campaign: "general",
    name: "",
    email: "",
    anonymous: false,
  });
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleAmountClick = (value) => {
    setSelectedAmount(value);
    setFormData((prev) => ({ ...prev, amount: value }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name === "amount") setSelectedAmount("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { amount, email } = formData;

    const errors = [];
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      errors.push("⚠️ Please enter a valid donation amount.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      errors.push("⚠️ Please enter a valid email address.");
    }

    if (errors.length) {
      setModalMessage(errors.join("\n"));
      setShowModal(true);
    } else {
      try {
        const response = await fetch("http://localhost:5000/api/donate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setModalMessage("🎉 Thank you for your donation!");
        } else {
          setModalMessage("❌ Something went wrong. Please try again later.");
        }
      } catch (error) {
        setModalMessage("🌐 Network error. Please check your connection.");
      }

      setShowModal(true);
      setFormData({
        amount: "",
        frequency: "one-time",
        campaign: "general",
        name: "",
        email: "",
        anonymous: false,
      });
      setSelectedAmount("");
    }
  };

  return (
    <>
      <Header />
      <main
        className="py-12 bg-fixed bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/DonationAngel.png')" }}
      >
        <div className="bg-white/90 backdrop-blur-lg mx-auto py-10 px-6 sm:px-10 md:px-14 rounded-3xl shadow-2xl max-w-6xl">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <FaHandsHelping className="text-green-500" /> Make a Donation
          </h2>
          <p className="mb-10 text-center text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            Every contribution fuels hope 💙. Join us in supporting{" "}
            <strong>education, healthcare, food security, and clean water</strong>.
          </p>

          {/* Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Campaign Preview */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                🌍 Featured Campaigns
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["/childEdu.png", "/healthcare.png", "/food.png", "/water.png"].map(
                  (img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Campaign"
                      className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  )
                )}
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Your donation will be directed to the campaign you select, or to
                our <strong>General Fund</strong> if unspecified.
              </p>
            </div>

            {/* Donation Form */}
            <form
              className="space-y-6 bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl shadow-md"
              onSubmit={handleSubmit}
            >
              {/* Amount */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  💰 Select Amount or Enter Custom:
                </label>
                <div className="flex flex-wrap gap-3">
                  {[25, 50, 100].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => handleAmountClick(String(amt))}
                      className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition duration-300 ${
                        selectedAmount === String(amt)
                          ? "bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg scale-105"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                  <input
                    type="number"
                    name="amount"
                    placeholder="Custom"
                    value={formData.amount}
                    onChange={handleChange}
                    className="flex-1 min-w-[120px] sm:w-40 px-4 py-2 border border-gray-300 rounded-md"
                    min="1"
                  />
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  🔄 Donation Frequency:
                </label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                >
                  <option value="one-time">One-Time</option>
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>

              {/* Campaign */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  🎯 Choose a Campaign:
                </label>
                <select
                  name="campaign"
                  value={formData.campaign}
                  onChange={handleChange}
                  className="w-full border px-4 py-2 rounded-md"
                >
                  <option value="general">🌍 General Fund</option>
                  <option value="education">📚 Educate a Child</option>
                  <option value="healthcare">🏥 Healthcare for All</option>
                  <option value="relief">🤝 Disaster Relief Fund</option>
                  <option value="water">💧 Clean Water Initiatives</option>
                  <option value="food">🍲 Food Security Program</option>
                  <option value="women">👩 Women Empowerment</option>
                  <option value="environment">🌱 Environmental Sustainability</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  👤 Your Name (optional):
                </label>
                <div className="flex items-center gap-2">
                  <FaUser className="text-blue-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Ram Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-4 py-2 rounded-md"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  📧 Email Address:
                </label>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-green-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="your@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border px-4 py-2 rounded-md"
                  />
                </div>
              </div>

              {/* Anonymous */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label className="text-sm text-gray-700">
                  Donate anonymously
                </label>
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 hover:from-blue-700 hover:to-green-600 transition-all duration-300 shadow-lg flex items-center gap-2"
                >
                  <FaHeart className="text-red-400" /> Proceed to Payment
                </button>
              </div>
            </form>
          </div>

          {/* Security Note */}
          <div className="mt-10 text-sm text-gray-700 space-y-2 text-center">
            <p>
              <FaLock className="inline text-green-600 mr-1" /> All transactions
              are SSL encrypted.
            </p>
            <div className="flex justify-center gap-6 text-gray-600 mt-3">
              <div className="flex items-center gap-1">
                <FaShieldAlt className="text-blue-500" /> Secure
              </div>
              <div className="flex items-center gap-1">
                <FaCheckCircle className="text-green-500" /> Trusted
              </div>
              <div className="flex items-center gap-1">
                <FaHandsHelping className="text-pink-500" /> Impactful
              </div>
            </div>
            <p>📧 A confirmation receipt will be emailed to you.</p>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full mx-4 text-center animate-bounce"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="mb-4 text-gray-800 whitespace-pre-line">
                {modalMessage}
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded hover:from-blue-700 hover:to-green-600 transition"
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

export default Donate;


