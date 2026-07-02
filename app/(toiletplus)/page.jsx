import { getServices } from '../../lib/sanity';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { SpecStrip } from './components/SpecStrip';
import { ServicesSection } from './components/ServicesSection';
import { Guarantees } from './components/Guarantees';
import { Reviews } from './components/Reviews';
import { OffersSection } from './components/OffersSection';
import { HomeFAQ } from './components/HomeFAQ';

export const revalidate = 60;

export default async function HomePage() {
  const services = await getServices();

  return (
    <>
      <Hero />
      <TrustBar />
      <SpecStrip />
      <ServicesSection services={services} />
      <Guarantees />
      <Reviews />
      <OffersSection />
      <HomeFAQ />
    </>
  );
}
