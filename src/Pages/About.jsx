import React, { useState, useEffect } from "react";
import { Footer, Header } from "../Components";
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaHandshake,
  FaLeaf,
  FaUsers,
  FaShieldAlt,
  FaHandsHelping,
} from "react-icons/fa";

const About = () => {
  const sliderImages = [
    "/about1.png",
    "/about2.png",
    "/about3.png",
    "/about4.png",
    "/about1.png",
    "/about2.png",
    "/about3.png",
    "/about4.png",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 2000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-inter text-gray-800">
      <Header />

      {/* Hero Slider Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src={sliderImages[current]}
          alt="About Amora"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            About Amora Help Foundation
          </h2>
          <p className="text-sm md:text-lg max-w-2xl">
            Dedicated to empowering communities and building a brighter future
            for all.
          </p>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-6 flex justify-center w-full space-x-2">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg shadow flex items-start space-x-4">
            <FaBullseye className="text-blue-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                Our Mission
              </h3>
              <p>
                To uplift vulnerable communities by providing sustainable
                solutions in education, healthcare, and livelihood, fostering
                self-reliance and dignity.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg shadow flex items-start space-x-4">
            <FaEye className="text-green-600 text-3xl mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                Our Vision
              </h3>
              <p>
                A world where every individual has the opportunity to thrive,
                free from poverty, illiteracy, and preventable diseases, living
                a life of hope and promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center text-blue-800 mb-8">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Compassion",
                desc: "We act with empathy and kindness, driven by a deep desire to alleviate suffering.",
                icon: <FaHeart className="text-red-500 text-3xl" />,
              },
              {
                title: "Integrity",
                desc: "We uphold the highest ethical standards, ensuring transparency and accountability.",
                icon: <FaShieldAlt className="text-yellow-500 text-3xl" />,
              },
              {
                title: "Empowerment",
                desc: "We believe in fostering self-sufficiency and empowering individuals to grow.",
                icon: <FaUsers className="text-blue-500 text-3xl" />,
              },
              {
                title: "Collaboration",
                desc: "We work hand-in-hand with communities, partners, and donors to achieve shared goals.",
                icon: <FaHandshake className="text-green-600 text-3xl" />,
              },
              {
                title: "Sustainability",
                desc: "We implement long-term solutions that respect the environment and ensure lasting change.",
                icon: <FaLeaf className="text-green-500 text-3xl" />,
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-lg shadow flex flex-col items-start space-y-2"
              >
                {value.icon}
                <h4 className="text-lg font-semibold text-blue-700">
                  {value.title}
                </h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Journey</h3>
          <p className="mb-4 font-semibold">
            Founded in 2015 by a group of passionate humanitarians, Amora Help
            Foundation began as a small initiative to provide emergency relief.
            Over the years, we have grown into a comprehensive organization,
            expanding our reach to include long-term development programs in
            education, healthcare, and sustainable agriculture across various
            regions.
          </p>
          <p className="font-semibold">
            Our commitment remains steadfast: to create lasting change and
            empower individuals to build better lives for themselves and their
            communities.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Aditya Roy",
                role: "Founder",
                img: "/Aditya.png",
                desc: "Driving the vision and strategic direction.",
                icon: <FaHandsHelping className="text-green-600 text-xl" />,
              },
              {
                name: "Raj Prabhakar",
                role: "Program Director",
                img: "/Raj.png",
                desc: "Overseeing all impactful programs and initiatives.",
                icon: <FaBullseye className="text-blue-600 text-xl" />,
              },
              {
                name: "Sumitra Saha",
                role: "Outreach Coordinator",
                img: "/Sumitra.png",
                desc: "Connecting with communities and building partnerships.",
                icon: <FaUsers className="text-pink-500 text-xl" />,
              },
              {
                name: "Nawraj Singh",
                role: "Finance Lead",
                img: "/Navraj.png",
                desc: "Ensuring responsible fund and resource management.",
                icon: <FaShieldAlt className="text-yellow-600 text-xl" />,
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg shadow text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-2"
                />
                <h4 className="font-bold text-blue-700 flex justify-center items-center space-x-2">
                  {member.icon}
                  <span>{member.name}</span>
                </h4>
                <p className="text-sm font-medium text-gray-600">
                  {member.role}
                </p>
                <p className="text-xs font-semibold mt-1">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helping Partners */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-8">
            Our Helping Partners
          </h3>
          <div className="overflow-hidden relative">
            <div
              className="flex space-x-12"
              style={{
                animation: "marquee 20s linear infinite",
                width: "max-content",
              }}
            >
              {[
                "/partner1.png",
                "/partner2.png",
                "/partner3.png",
                "/partner4.png",
                "/partner5.png",
                "/partner1.png",
                "/partner2.png",
                "/partner3.png",
                "/partner4.png",
                "/partner5.png",
              ].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  className="h-16 object-contain"
                />
              ))}
              {/* repeat for smooth loop */}
              {[
                "/partner1.png",
                "/partner2.png",
                "/partner3.png",
                "/partner4.png",
                "/partner5.png",
                "/partner1.png",
                "/partner2.png",
                "/partner3.png",
                "/partner4.png",
                "/partner5.png",
              ].map((logo, idx) => (
                <img
                  key={idx + "clone"}
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  className="h-16 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default About;
