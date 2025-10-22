import Hero from '../components/Home/Hero';
import AboutUs from '../components/Home/AboutUs';
import WhatWeDo from '../components/Home/WhatWeDo';
import Career from '../components/Home/Career';
import Blogs from '../components/Home/Blogs';
import Products from '../components/Home/Products';
import CTABanner from '../components/Home/CTABanner';
import Reviews from '../components/Home/Reviews';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <AboutUs />
        <WhatWeDo />
        <Products />
        <Career />
        <Blogs />
        <Reviews/>
        <CTABanner />
      </main>
    </div>
  );
}
