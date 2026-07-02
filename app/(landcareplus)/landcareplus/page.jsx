import { getServices } from '../../../lib/sanity-landcareplus';
import { Hero } from './components/Hero';
import { SpecStrip } from './components/SpecStrip';
import { ServicesSection } from './components/ServicesSection';
import { Guarantees } from './components/Guarantees';
import { Reviews } from './components/Reviews';

export const revalidate = 60;

export default async function HomePage() {
  const services = await getServices();

  return (
    <>
      <Hero />
      <SpecStrip />
      <ServicesSection services={services} />
      <Guarantees />
      <Reviews />
    </>
  );
}
