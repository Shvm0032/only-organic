import { products } from "../../../data/products";
import Image from "next/image";
import Link from "next/link";

// ✅ ye add kar:
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return <div className="text-center py-20 text-gray-600">Product not found.</div>;
  }

  const suggestions = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-2xl text-[#1A5235] font-semibold mb-6">{product.price}</p>
            <button className="bg-[#248754] hover:bg-[#1A5235] text-white px-6 py-3 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>
        </div>

        {/* Suggestions Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestions.map((p) => (
              <div key={p.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-[#1A5235] font-semibold hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
