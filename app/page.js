import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhatWeDo from '@/components/WhatWeDo';
import Career from '@/components/Career';
import Blogs from '@/components/Blogs';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <WhatWeDo />
        <Career />
        <Blogs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
