import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center pt-28">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">About Us</h1>
      <p className="text-gray-700 leading-relaxed text-lg">
        Welcome to <span className="font-semibold">Zahra&apos;s Wardrobe</span>{" "}
        🌸 We bring you stylish, trendy, and premium-quality outfits that make
        you feel confident and beautiful every day.
        <br />
        <br />
        Our mission is simple: to provide unique fashion pieces at affordable
        prices while ensuring comfort and elegance. Whether you’re looking for
        casual wear, party wear, or seasonal collections, we’ve got you covered!
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-pink-500">
            ✨ Trendy Designs
          </h2>
          <p className="text-gray-600 mt-2">
            We stay ahead with modern fashion that suits your style.
          </p>
        </div>
        <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-pink-500">
            💎 Premium Quality
          </h2>
          <p className="text-gray-600 mt-2">
            Every piece is handpicked to ensure the best quality for you.
          </p>
        </div>
        <div className="bg-pink-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-pink-500">
            ❤️ Customer Love
          </h2>
          <p className="text-gray-600 mt-2">
            Our customers are our family, and we serve with love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
