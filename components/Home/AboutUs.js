import Image from "next/image";
import { Leaf, Heart, Users } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: <Leaf className="w-12 h-12 text-white" />,
      title: "Sustainable",
      description:
        "We prioritize eco-friendly practices in everything we do, from sourcing to packaging.",
    },
    {
      icon: <Heart className="w-12 h-12 text-white" />,
      title: "Quality First",
      description:
        "Every product is carefully selected and tested to meet our high standards.",
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Community Driven",
      description:
        "We work closely with local farmers and communities to ensure fair practices.",
    },
  ];

  return (
    <section id="about" className="pt-10 pb-16 bg-[#F3F4F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Horizontal Section */}
        <div className="flex flex-col lg:flex-row items-center mb-16 gap-8">
          {/* Left: Heading & Description */}
          <div className="lg:w-1/2 flex flex-col justify-center h-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Only Organic
            </h2>
            <p className="text-lg text-justify text-gray-600">
              At Only Organic, we are passionate about bringing you the finest organic products, carefully sourced from trusted farms and crafted with care. Our commitment to sustainability, ethical practices, and exceptional quality ensures that every product you receive is not only good for you but also good for the planet. We strive to create a healthier lifestyle for our customers while supporting local communities and promoting eco-friendly practices.

            </p>
          </div>

          {/* Right: Image */}
          <div className="lg:w-1/2 h-full flex justify-center">
            <Image
              src="/Assets/organic.jpg" // replace with your image path
              alt="About Only Organic"
              width={500}
              height={400}
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-xl  transition-shadow bg-[#1A5235]"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-100 mb-3">{value.title}</h3>
              <p className="text-gray-200">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
