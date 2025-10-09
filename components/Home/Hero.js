'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const slides = [
    '/Assets/home-slider/slider-1.jpg',
    '/Assets/home-slider/slider-2.jpg',
    '/Assets/home-slider/slider-3.jpg',
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative overflow-hidden">
      {/* 🔹 Background Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* 🔹 Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* 🔹 Content */}
      <div className="relative z-10 py-20 sm:py-32 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-[#1CAD5A]">Only Organic</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Your trusted partner for pure, natural, and sustainably sourced organic products.
              We believe in delivering quality that nurtures both people and planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#what-we-do"
                className="px-8 py-3 bg-[#1A5235] text-white font-semibold rounded-lg hover:bg-emerald-800 transition-transform transform hover:scale-95 shadow-lg"
              >
                Explore Our Products
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-[#1A5235] font-semibold rounded-lg border-2 border-[#1A5235] transition-transform transform hover:scale-95 hover:bg-gray-50 shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition z-20"
      >
        <ChevronLeft className="w-6 h-6 text-[#1A5235]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition z-20"
      >
        <ChevronRight className="w-6 h-6 text-[#1A5235]" />
      </button>
    </section>
  );
}
