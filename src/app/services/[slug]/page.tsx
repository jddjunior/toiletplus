import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { TrustBar } from "@/components/TrustBar";
import { services, getServiceBySlug } from "@/lib/data/services";
import { cities } from "@/lib/data/cities";
import { business } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${business.name}`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-brand-950 py-16">
        <Container>
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sun-300">
            <Icon className="h-7 w-7" strokeWidth={1.8} />
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-4 max-w-xl text-brand-100/90">{service.summary}</p>
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
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="How it works" title="What's included" description={service.description} />
            <ul className="mt-8 space-y-4">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-base text-brand-900/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-7">
              <h3 className="text-lg font-bold text-brand-950">Other services</h3>
              <ul className="mt-4 space-y-3">
                {otherServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-brand-800 hover:bg-white"
                    >
                      <s.icon className="h-4 w-4 text-brand-500" />
                      {s.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-brand-100 pt-6">
                <h3 className="text-sm font-bold text-brand-950">Where we service</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 hover:border-brand-400"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
