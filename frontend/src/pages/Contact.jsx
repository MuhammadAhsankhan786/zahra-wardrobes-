import React from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 space-y-6 pt-28">
      <h1 className="text-3xl font-bold text-pink-600">Contact Us</h1>
      <p className="text-gray-600 text-center max-w-md">
        Have a question or want to place an order? Reach out to us on any of the
        platforms below 👇
      </p>

      {/* Social Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/923442013217"
          className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
        >
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/zahra_s_wardrobe"
          className="bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-600"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@zahra_s_wardrobe"
          className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800"
        >
          TikTok
        </a>
      </div>

      {/* Location */}
      <div className="text-center text-gray-700">
        <p className="font-semibold">📍 Location</p>
        <p>Karachi, Pakistan</p>
      </div>

      {/* Email */}
      <div className="text-center text-gray-700">
        <p className="font-semibold">📧 Email</p>
        <p>zahraswardrobe@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
