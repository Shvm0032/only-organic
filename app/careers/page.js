import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CareersDetails from '../../components/Careers/CareersDetails';


export default function Careers() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CareersDetails />
      </main>
      <Footer />
    </div>
  );
}
