import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { FinalCta } from "@/components/FinalCta";
import { cities } from "@/lib/data/cities";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "POOLS of Pompano runs weekly pool cleaning routes across Pompano Beach, Deerfield Beach, Lighthouse Point, Coconut Creek, Margate, and Lauderdale-by-the-Sea.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-brand-950 py-16">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sun-300">
            Service Areas
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Where we run weekly routes
          </h1>
          <p className="mt-4 max-w-xl text-brand-100/90">
            {business.name} is based in {business.addressRegion} with regular
            weekly routes across the surrounding coastal communities. Just outside
            these areas? Call us — we&apos;re often still able to help.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-brand-950">{city.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {city.county}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-brand-800/75">{city.blurb}</p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-brand-600 group-hover:gap-2.5 transition-all">
                  Service details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
