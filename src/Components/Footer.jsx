import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-6">
      <div className="container mx-auto text-center px-4">
        <p className="mb-2 font-medium">
          &copy; 2025 Amora Help Foundation. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="flex items-center space-x-2 hover:underline text-white/90 hover:text-white"
          >
            <FaFacebook className="text-blue-500 text-xl" />
            <span>Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:underline text-white/90 hover:text-white"
          >
            <FaInstagram className="text-pink-500 text-xl" />
            <span>Instagram</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:underline text-white/90 hover:text-white"
          >
            <FaTwitter className="text-sky-400 text-xl" />
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


