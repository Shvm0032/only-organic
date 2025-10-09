'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ya aap font-awesome bhi use kar sakte ho

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
  const cards = [
    { id: 1, title: "Organic Honey", description: "Pure raw honey sourced from natural farms with care and dedication.", image: "/Assets/home-slider/slider-1.jpg" },
    { id: 2, title: "Almonds", description: "High-quality almonds grown organically without pesticides or chemicals.", image: "/Assets/home-slider/slider-2.jpg" },
    { id: 3, title: "Green Tea", description: "Refreshing green tea leaves harvested from pristine gardens worldwide.", image: "/Assets/home-slider/slider-3.jpg" },
    { id: 4, title: "Olive Oil", description: "Extra virgin olive oil cold-pressed from the finest olives.", image: "/Assets/home-slider/slider-2.jpg" },
    { id: 5, title: "Herbal Soap", description: "Natural herbal soaps made with organic ingredients for healthy skin.", image: "/Assets/home-slider/slider-3.jpg" },
  ];

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
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-[#1A5235] mx-auto mb-8"></div>
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4">{truncateDescription(card.description)}</p>
                  </div>
                  <button className="mt-auto bg-[#248754] hover:bg-[#1A5235] text-white font-semibold py-2 px-4 rounded transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
