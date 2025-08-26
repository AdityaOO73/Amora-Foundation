import React, { useState, useEffect } from "react";
import { Footer, Header } from "../Components";
import {
  FaHandHoldingHeart,
  FaSchool,
  FaHeartbeat,
  FaUsers,
  FaUtensils,
  FaEnvelope,
  FaTrophy,
  FaGlobe,
  FaHandsHelping,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [mealsCount, setMealsCount] = useState(0);
  const [educationCount, setEducationCount] = useState(0);
  const [familiesCount, setFamiliesCount] = useState(0);

  const quotes = [
    `"This foundation changed my life. I was able to go to school and dream big again." - Maria, 12`,
    `"Thanks to the support, I can now support my family with dignity." - Ahmed, 15`,
    `"I found hope and a future here that I never thought was possible." - Lila, 13`,
    `"Education seemed impossible, but now I'm top of my class!" - Samir, 11`,
    `"The kindness and support helped me believe in myself again." - Amina, 14`,
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    const animateCount = (target, setter, duration = 20000) => {
      const fps = 60;
      const totalSteps = Math.floor((duration / 1000) * fps);
      let currentStep = 0;

      const step = () => {
        currentStep++;
        const progress = Math.min(currentStep / totalSteps, 1);
        setter(Math.floor(target * progress));
        if (progress < 1) requestAnimationFrame(step);
      };

      step();
    };

    animateCount(10000, setMealsCount);
    animateCount(1200, setEducationCount);
    animateCount(800, setFamiliesCount);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.elements.newsletterEmail.value.trim();

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setModalMessage(data.message || "Subscribed!");
      setShowModal(true);
      e.target.reset();
    } catch (err) {
      setModalMessage("❌ Something went wrong. Try again.");
      setShowModal(true);
    }

    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url(/Hope1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg max-w-2xl animate-fade-in">
          <FaHandHoldingHeart className="mx-auto text-white text-6xl mb-4 animate-bounce" />
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
            Together We Can Make a Difference
          </h2>
          <p className="text-lg mb-6 text-white">
            Support children, families, and communities around the world.
          </p>
          <a
            href="/donate"
            className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Donate Now ❤️
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Empowering vulnerable communities through{" "}
            <span className="font-semibold text-blue-600">education</span>,{" "}
            <span className="font-semibold text-green-600">healthcare</span>, and{" "}
            <span className="font-semibold text-indigo-600">sustainability programs</span>.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                img: "/education.png",
                icon: <FaSchool className="text-4xl text-blue-600 mx-auto mb-4" />,
                title: "Quality Education",
                desc: "Providing children access to schools, learning resources, and a brighter future.",
              },
              {
                img: "/healthcare.png",
                icon: <FaHeartbeat className="text-4xl text-red-500 mx-auto mb-4" />,
                title: "Healthcare for All",
                desc: "Delivering essential medical aid, clean water, and wellness programs.",
              },
              {
                img: "/community.png",
                icon: <FaUsers className="text-4xl text-indigo-600 mx-auto mb-4" />,
                title: "Community Support",
                desc: "Supporting families with food, housing, and opportunities for sustainable living.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-1 hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-xl mb-6"
                />
                {item.icon}
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-10">Our Achievements</h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <FaTrophy className="text-yellow-500 text-5xl mx-auto mb-4" />
              <h4 className="text-2xl font-bold">Best NGO Award 2023</h4>
              <p className="text-gray-600">Recognized nationally for our sustainable impact.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <FaGlobe className="text-blue-600 text-5xl mx-auto mb-4" />
              <h4 className="text-2xl font-bold">Serving 12+ Countries</h4>
              <p className="text-gray-600">Expanding support globally with active programs.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
              <FaHandsHelping className="text-green-600 text-5xl mx-auto mb-4" />
              <h4 className="text-2xl font-bold">50,000+ Volunteers</h4>
              <p className="text-gray-600">A strong network of changemakers across regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
            Featured Campaigns
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                img: "/childEdu.png",
                title: "Educate a Child",
                desc: "Help children access quality education and build a better future.",
                icon: <FaSchool className="text-blue-600 text-4xl mb-3 mx-auto" />,
              },
              {
                img: "/healthAll.png",
                title: "Healthcare for All",
                desc: "Deliver essential medical aid to underserved communities.",
                icon: <FaHeartbeat className="text-red-500 text-4xl mb-3 mx-auto" />,
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition"
              >
                <img src={c.img} alt={c.title} className="h-56 w-full object-cover" />
                <div className="p-6 text-center">
                  {c.icon}
                  <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
                  <p className="text-gray-600 mb-4">{c.desc}</p>
                  <a
                    href="/campaigns"
                    className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md"
                  >
                    Support
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Impact</h3>
          <ul className="flex flex-wrap justify-center gap-12 text-lg font-medium text-gray-700">
            <li className="flex flex-col items-center">
              <FaUtensils className="text-blue-600 text-4xl mb-2 animate-pulse" />
              <strong className="block text-3xl text-blue-600">
                {mealsCount}+
              </strong>
              meals provided
            </li>
            <li className="flex flex-col items-center">
              <FaSchool className="text-green-600 text-4xl mb-2 animate-pulse" />
              <strong className="block text-3xl text-green-600">
                {educationCount}+
              </strong>
              children educated
            </li>
            <li className="flex flex-col items-center">
              <FaUsers className="text-indigo-600 text-4xl mb-2 animate-pulse" />
              <strong className="block text-3xl text-indigo-600">
                {familiesCount}+
              </strong>
              families helped
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
        <div className="p-8 rounded-lg text-center max-w-3xl mx-auto bg-white/10 shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Stories of Hope</h3>
          <blockquote className="italic text-lg font-semibold duration-500 min-h-[70px] flex items-center justify-center transition-all">
            <FiCheckCircle className="mr-2 text-yellow-300" />
            {quotes[quoteIndex]}
          </blockquote>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="p-8 rounded-lg text-center m-6 max-w-3xl lg:mx-auto bg-white shadow-lg border border-blue-100">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Subscribe to Our Newsletter
          </h3>
          <p className="mb-6 text-gray-600">
            Stay updated on{" "}
            <span className="font-semibold text-blue-600">Amora’s latest projects</span> and{" "}
            <span className="font-semibold text-green-600">impact stories</span>.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-full sm:flex-1">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  name="newsletterEmail"
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-2 px-8 rounded-full hover:scale-105 transition-all duration-300 shadow-md"
              >
                Subscribe 🚀
              </button>
            </div>
          </form>

          {showModal && (
            <div className="mt-6 bg-blue-50 border border-blue-300 text-blue-800 px-6 py-4 rounded shadow-md inline-block animate-fade-in">
              {modalMessage}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
