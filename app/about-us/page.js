import Header from '@/components/Header';
import ContactUs from '../../components/Contact/ContactUs';
import Footer from '@/components/Footer';


export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
