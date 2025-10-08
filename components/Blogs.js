import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blogs() {
  const blogPosts = [
    {
      title: '10 Benefits of Switching to Organic Food',
      excerpt: 'Discover how organic food can transform your health and wellbeing with these scientifically-backed benefits.',
      author: 'Sarah Johnson',
      date: 'Oct 5, 2025',
      category: 'Health',
    },
    {
      title: 'Sustainable Farming: The Future of Agriculture',
      excerpt: 'Learn about the innovative practices that are shaping the future of sustainable and organic farming.',
      author: 'Michael Chen',
      date: 'Oct 2, 2025',
      category: 'Environment',
    },
    {
      title: 'How to Start Your Organic Journey',
      excerpt: 'A comprehensive guide for beginners looking to transition to an organic lifestyle step by step.',
      author: 'Emily Rodriguez',
      date: 'Sep 28, 2025',
      category: 'Lifestyle',
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Blogs</h2>
          <div className="w-24 h-1 bg-emerald-700 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, tips, and stories about organic living,
            sustainability, and healthy choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-400 to-green-600"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <button className="flex items-center gap-1 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
