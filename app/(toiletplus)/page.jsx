import { getServices } from '../../lib/sanity';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { HowItWorks } from './components/HowItWorks';
import { SpecStrip } from './components/SpecStrip';
import { ServicesSection } from './components/ServicesSection';
import { AreasWeServe } from './components/AreasWeServe';
import { Guarantees } from './components/Guarantees';
import { ComparisonSection } from './components/ComparisonSection';
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
      <HowItWorks />
      <SpecStrip />
      <ServicesSection services={services} />
      <AreasWeServe />
      <Guarantees />
      <ComparisonSection />
      <Reviews />
      <OffersSection />
      <HomeFAQ />
    </>
  );
}
