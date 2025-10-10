import { products } from "../../data/products";
import Image from "next/image";
import Link from "next/link";

export default function AllProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 line-clamp-3 mb-3">{product.description}</p>
                <p className="text-[#1A5235] font-semibold mb-3">{product.price}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-block bg-[#248754] text-white px-4 py-2 rounded hover:bg-[#1A5235] transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
