import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/assets/frock1.jpg",
    title: "New Collection 2025",
    subtitle: "Stylish & Comfortable Baby Wear",
  },
  {
    id: 2,
    image: "/assets/frock2.jpg",
    title: "Fancy Froks & Suits",
    subtitle: "Perfect for Every Occasion",
  },
  {
    id: 3,
    image: "/assets/frock3.jpg",
    title: "Limited Edition",
    subtitle: "Grab Before It's Gone",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="pt-0 mt-0 mb-8">
      <div className="relative w-full h-96 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-10 bg-black bg-opacity-40 text-white p-4 rounded">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-1">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
