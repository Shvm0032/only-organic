export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-green-100 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-emerald-700">Only Organic</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            Your trusted partner for pure, natural, and sustainably sourced organic products.
            We believe in delivering quality that nurtures both people and planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#what-we-do"
              className="px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors shadow-lg"
            >
              Explore Our Products
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-emerald-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
