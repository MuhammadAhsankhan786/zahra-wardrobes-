import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <h2 className="text-pink-600 font-bold text-xl">
          Zahra&apos;s Wardrobe
        </h2>

        {/* Links */}
        <div className="flex gap-6 text-gray-700">
          <a href="/" className="hover:text-pink-600 transition">
            Home
          </a>
          <a href="/products" className="hover:text-pink-600 transition">
            Products
          </a>
          <a href="/about" className="hover:text-pink-600 transition">
            About
          </a>
          <a href="/contact" className="hover:text-pink-600 transition">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://wa.me/923442013217"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/zahra_s_wardrobe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@zahra_s_wardrobe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-800 transition"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-4 border-t border-pink-200 pt-4">
        © {new Date().getFullYear()} Zahra&apos;s Wardrobe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
