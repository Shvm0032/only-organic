import './globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Only Organic - Pure & Natural Products',
  description: 'Your trusted source for organic and natural products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />           {/* Appears on every page */}
        <main>{children}</main>
        <Footer />           {/* Appears on every page */}
      </body>
    </html>
  );
}
