import { ShoppingBag, Truck, Award, Recycle } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      icon: <ShoppingBag className="w-10 h-10" />,
      title: 'Organic Products',
      description: 'Wide range of certified organic food, beverages, and lifestyle products.',
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery service ensuring products arrive fresh.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Certified Quality',
      description: 'All products meet international organic certification standards.',
    },
    {
      icon: <Recycle className="w-10 h-10" />,
      title: 'Eco Packaging',
      description: 'Sustainable and recyclable packaging to minimize environmental impact.',
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-[#1A5235] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive organic solutions for conscious consumers who care about
            their health and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 text-center"
            >
              <div className="flex justify-center mb-4 text-[#1A5235]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
