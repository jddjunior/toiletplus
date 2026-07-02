import './globals.css';
import { BookingProvider } from './components/BookingProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const metadata = {
  title: {
    default: 'Toilet Plus — Local Plumbers, Done Right',
    template: '%s | Toilet Plus',
  },
  description:
    'Licensed local plumbers for drain cleaning, water heaters, leak detection, sewer lines, fixtures, and repiping. Upfront flat-rate pricing, 24/7 emergency service.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
