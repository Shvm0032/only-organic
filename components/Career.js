import { Briefcase, TrendingUp, Globe } from 'lucide-react';

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
    <section id="career" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Career</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our team and be part of a mission-driven company that is making a positive
            impact on people's health and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4 text-emerald-700">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Open Positions</h3>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
              >
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{position.title}</h4>
                  <p className="text-gray-600 text-sm">
                    {position.department} • {position.location} • {position.type}
                  </p>
                </div>
                <button className="px-6 py-2 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
