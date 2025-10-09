import Header from '@/components/Header';
import ContactUs from '../../components/Contact/ContactUs';
import Footer from '@/components/Footer';


export default function Contact() {
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
