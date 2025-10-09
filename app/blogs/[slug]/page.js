import { blogPosts } from "../../../data/blogs";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPage({ params }) {
  const { slug } = params;
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) return <p className="text-center py-20">Blog not found</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          href="/blogs"
          className="text-[#1A5235] font-semibold hover:text-emerald-800"
        >
          ← Back to Blogs
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center lg:text-left">
        {blog.title}
      </h1>

      {/* Image */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden mb-6">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-10 justify-center lg:justify-start">
        <span className="px-4 py-2 bg-emerald-100 text-[#1A5235] rounded-full font-medium">
          {blog.category}
        </span>
        <span className="px-4 py-2">📅 {blog.date}</span>
        <span className="px-4 py-2">👤 {blog.author}</span>
      </div>

      {/* Blog content */}
      <div className="prose prose-lg text-gray-800 mx-auto sm:mx-0 px-4 lg:px-12">
        {blog.content}
      </div>
    </div>
  );
}
