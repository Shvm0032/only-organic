"use client";
import { products } from "../../data/products";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-[#248754] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10"
    onClick={onClick}
  >
    <ChevronRight className="text-white" />
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-[#248754] w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10"
    onClick={onClick}
  >
    <ChevronLeft className="text-white" />
  </div>
);

export default function CardSliderSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const truncateDescription = (text) => {
    const words = text.split(" ");
    if (words.length <= 15) return text;
    return words.slice(0, 15).join(" ") + "...";
  };

  return (
    <section className="py-12 bg-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Products
        </h2>
        <div className="w-24 h-1 bg-[#1A5235] mx-auto mb-8"></div>

        {/* Slider */}
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {truncateDescription(product.description)}
                    </p>
                  </div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-auto bg-[#248754] hover:bg-[#1A5235] text-white font-semibold py-2 px-4 rounded transition-colors text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Show All Products Button */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-block bg-[#248754] hover:bg-[#1A5235] text-white font-semibold py-3 px-8 rounded-full transition-transform transform hover:scale-95 duration-200"
          >
            Show All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
