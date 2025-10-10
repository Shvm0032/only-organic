import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "../../data/blogs";
import Image from "next/image";

export default function AllBlogs() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Blogs
          </h2>
          <div className="w-24 h-1 bg-[#1A5235] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, tips, and stories about
            organic living, sustainability, and healthy choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}           // Make sure path is correct (e.g., /images/blogs/...)
                  alt={post.title}
                  fill                        // fill the parent div
                  className="object-cover rounded-t-lg"
                  priority                   // optional, for important images
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-emerald-100 text-[#1A5235] rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title & Excerpt */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="flex items-center gap-1 text-[#1A5235] font-semibold hover:text-emerald-800 transition-colors"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
