import { useEffect, useState, useMemo, useCallback } from "react";
import { Header, Footer } from "../Components";
import axios from "axios";
import { FaBullseye, FaHandHoldingHeart } from "react-icons/fa";

const CampaignGrid = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  // For donation modal
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState("");

  const setDemoCampaigns = useCallback(() => {
    setCampaigns([
      {
        _id: "1",
        title: "Support Education",
        description:
          "Help children from underprivileged backgrounds get access to books, uniforms, and quality education.",
        image: "/education.png",
        goal: 50000,
        raised: 20000,
      },
      {
        _id: "2",
        title: "Healthcare Aid",
        description:
          "Provide medicines, health checkups, and emergency medical kits to rural families.",
        image: "/healthcare.png",
        goal: 70000,
        raised: 30000,
      },
      {
        _id: "3",
        title: "Food for All",
        description:
          "Distribute nutritious meals daily to homeless families and children in need.",
        image: "/food.png",
        goal: 40000,
        raised: 15000,
      },
      {
        _id: "4",
        title: "Clean Water Project",
        description:
          "Install handpumps and water purifiers in villages to provide clean drinking water.",
        image: "/water.png",
        goal: 60000,
        raised: 25000,
      },
      {
        _id: "5",
        title: "Empowering Women",
        description:
          "Provide skill training and micro-financing opportunities to empower women entrepreneurs.",
        image: "/female.png",
        goal: 80000,
        raised: 40000,
      },
      {
        _id: "6",
        title: "Tree Plantation Drive",
        description:
          "Plant 10,000 trees across urban and rural areas to fight climate change.",
        image: "/tree.png",
        goal: 30000,
        raised: 12000,
      },
      {
        _id: "7",
        title: "Disaster Relief",
        description:
          "Provide emergency supplies, food, and shelter to families affected by natural disasters.",
        image: "/disaster.png",
        goal: 90000,
        raised: 50000,
      },
      {
        _id: "8",
        title: "Animal Welfare",
        description:
          "Rescue stray animals, provide medical treatment, and build safe shelters for them.",
        image: "/animal.png",
        goal: 45000,
        raised: 22000,
      },
    ]);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/campaigns")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setCampaigns(res.data);
        } else {
          setDemoCampaigns();
        }
      })
      .catch(() => {
        setDemoCampaigns();
      })
      .finally(() => setLoading(false));
  }, [setDemoCampaigns]);

  // Handle donation submit
  const handleDonate = (e) => {
    e.preventDefault();
    const amount = parseInt(donationAmount);

    if (!amount || amount <= 0) return;

    setCampaigns((prev) =>
      prev.map((camp) =>
        camp._id === selectedCampaign._id
          ? {
              ...camp,
              raised: camp.raised + amount,
              goal: camp.goal - amount > 0 ? camp.goal - amount : 0, // if you want goal to decrease
            }
          : camp
      )
    );

    // Reset modal
    setSelectedCampaign(null);
    setDonationAmount("");
  };

  const campaignCards = useMemo(() => {
    return campaigns.map((campaign) => {
      const progress =
        (campaign.raised / campaign.goal) * 100 > 100
          ? 100
          : (campaign.raised / campaign.goal) * 100;

      return (
        <div
          key={campaign._id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
        >
          {/* Image */}
          <img
            src={campaign.image}
            alt={campaign.title}
            loading="lazy"
            className="w-full h-52 object-cover"
          />

          {/* Content */}
          <div className="p-6 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {campaign.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
              {campaign.description}
            </p>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>
                  <FaBullseye className="inline mr-1 text-blue-600" />
                  Goal: ₹{campaign.goal.toLocaleString()}
                </span>
                <span>
                  <FaHandHoldingHeart className="inline mr-1 text-green-600" />
                  Raised: ₹{campaign.raised.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Donate Button */}
            <button
              onClick={() => setSelectedCampaign(campaign)}
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition"
            >
              Donate Now
            </button>
          </div>
        </div>
      );
    });
  }, [campaigns]);

  return (
    <>
      <Header />
      <div className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          🌍 Our Campaigns
        </h2>

        {loading ? (
          // Skeleton Loader
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow animate-pulse p-6"
              >
                <div className="w-full h-52 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-300 rounded mb-4 w-5/6"></div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {campaignCards}
          </div>
        )}
      </div>

      {/* Donation Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-xl w-96 text-center animate-fade-in">
            <h3 className="text-xl font-bold mb-4">
              Donate to {selectedCampaign.title}
            </h3>
            <form onSubmit={handleDonate} className="space-y-4">
              <input
                type="number"
                min="1"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount (₹)"
                required
              />
              <div className="flex gap-4 justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition"
                >
                  Confirm Donation
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCampaign(null)}
                  className="bg-gray-200 px-6 py-2 rounded-lg shadow hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default CampaignGrid;

