"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const testimonials = [
    {
      review:
        "Only Organic products have completely changed my lifestyle. The quality is outstanding and delivery is always on time!",
      name: "Sarah Johnson",
      designation: "Health Coach",
    },
    {
      review:
        "I love how fresh and natural their products are. Highly recommended to anyone who values purity and authenticity.",
      name: "Michael Smith",
      designation: "Nutritionist",
    },
    {
      review:
        "Great experience! Their organic range is top-notch and customer service is very supportive.",
      name: "Priya Sharma",
      designation: "Organic Farmer",
    },
    {
      review:
        "Amazing products and great packaging. Definitely sticking with Only Organic for all my household needs.",
      name: "Aarav Patel",
      designation: "Chef",
    },
  ];

  return (
    <section className="py-16 bg-[#1A5235]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-2">
          What Our Customers Say
        </h2>
        {/* Divider */}
        <div className="w-20 h-1 bg-white mx-auto mb-10"></div>

        {/* Slider Wrapper (for proper button positioning) */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            className="swiper-button-prev absolute top-1/2 -translate-y-1/2 left-2 sm:left-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A5235] shadow-md hover:bg-[#15452C] hover:text-white transition-all duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="swiper-button-next absolute top-1/2 -translate-y-1/2 right-2 sm:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A5235] shadow-md hover:bg-[#15452C] hover:text-white transition-all duration-300"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white h-full rounded-lg shadow-md p-6 flex flex-col justify-between ">
                  <p className="text-gray-600 italic text-left mb-6">“{item.review}”</p>
                  <div>
                    <h4 className="text-lg text-left font-semibold text-[#1A5235]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-left text-gray-500">{item.designation}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
