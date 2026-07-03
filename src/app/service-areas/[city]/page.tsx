import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { FinalCta } from "@/components/FinalCta";
import { TrustBar } from "@/components/TrustBar";
import { cities, getCityBySlug } from "@/lib/data/cities";
import { services } from "@/lib/data/services";
import { business } from "@/lib/constants";

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return {
    title: `Pool Cleaning in ${city.name}, FL`,
    description: `Weekly pool cleaning, green pool recovery, and equipment repair for ${city.name}, FL homeowners. Licensed, insured, CPO-certified. Free quotes.`,
    alternates: { canonical: `/service-areas/${city.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== city.slug);

  return (
    <>
      <section className="bg-brand-950 py-16">
        <Container>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sun-300">
            <MapPin className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Pool Cleaning in {city.name}, FL
          </h1>
          <p className="mt-4 max-w-xl text-brand-100/90">{city.blurb}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get Your Free Quote
            </Button>
            <Button href={business.phoneHref} variant="outlineOnDark" icon={<Phone className="h-4 w-4" />}>
              {business.phoneDisplay}
            </Button>
          </div>
          <div className="mt-10">
            <TrustBar light />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow={`${city.county} · ${city.zips.join(", ")}`}
            title={`What we do for ${city.name} pool owners`}
            description="The same four services, run on a consistent weekly schedule for this area."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container>
          <h2 className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Other areas we service
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/service-areas/${c.slug}`}
                className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 hover:border-brand-400"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title={`See what your ${city.name} pool actually needs.`}
        note={`Now scheduling new weekly routes in ${city.name}.`}
      />
    </>
  );
}
