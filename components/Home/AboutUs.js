import { Leaf, Heart, Users } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      icon: <Leaf className="w-12 h-12 text-[#1A5235]" />,
      title: 'Sustainable',
      description: 'We prioritize eco-friendly practices in everything we do, from sourcing to packaging.',
    },
    {
      icon: <Heart className="w-12 h-12 text-[#1A5235]" />,
      title: 'Quality First',
      description: 'Every product is carefully selected and tested to meet our high standards.',
    },
    {
      icon: <Users className="w-12 h-12 text-[#1A5235]" />,
      title: 'Community Driven',
      description: 'We work closely with local farmers and communities to ensure fair practices.',
    },
  ];

  return (
    <section id="about" className="pt-10 pb-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-[#1A5235] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Only Organic, we are passionate about bringing you the finest organic products
            while maintaining our commitment to sustainability and ethical practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-emerald-50 to-green-50"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
