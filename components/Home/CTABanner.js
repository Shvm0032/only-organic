'use client';

export default function CTABanner() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-[#248754] to-[#1A5235] text-white rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row items-center md:justify-between p-10">
          
          {/* Text Content */}
          <div className="mb-6 md:mb-0 md:flex-1">
            <h3 className="text-3xl font-bold mb-4">Discover Our Organic Range</h3>
            <p className="mb-6 text-gray-100">
              Pure, natural, and healthy products straight from the farm to your home.
            </p>
          </div>

          {/* Button Right Side */}
          <div className="md:flex md:items-center md:justify-end md:flex-1 w-full md:w-auto">
            <button className="bg-white text-[#248754] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-95">
              Shop Now
            </button>
          </div>

          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          
        </div>

      </div>
    </section>
  );
}
