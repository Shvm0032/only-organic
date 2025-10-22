import { Briefcase, TrendingUp, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Career() {
  const positions = [
    {
      title: 'Product Manager',
      department: 'Product Development',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      title: 'Sustainability Coordinator',
      department: 'Operations',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Competitive Benefits',
      description: 'Health insurance, retirement plans, and wellness programs.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement programs.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options.',
    },
  ];

  return (
    <section
      id="career"
      className="relative py-16 bg-[#EFFDF7]"
      style={{
        backgroundImage: "url('/Assets/careers.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Career</h2>
          <div className="w-24 h-1 bg-[#1A5235] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our team and be part of a mission-driven company that is making a positive
            impact on people's health and the environment.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 border bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4 text-[#1A5235]">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <Link
            href="/careers"
            className="inline-block bg-[#1A5235] text-white font-medium py-3 px-8 rounded-md 
                       hover:bg-[#15452C] transform hover:scale-95 transition-all duration-300"
          >
            View Open Positions
          </Link>
        </div>
      </div>
    </section>
  );
}
