import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { FinalCta } from "@/components/FinalCta";
import { Button } from "@/components/Button";
import { services } from "@/lib/data/services";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pool Cleaning Services",
  description:
    "Weekly pool cleaning, green pool recovery, equipment repair, and storm cleanup for Pompano Beach and Broward County homeowners.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-950 py-16">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sun-300">
            Services
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Four things we do really well
          </h1>
          <p className="mt-4 max-w-xl text-brand-100/90">
            No bloated service menu. Just the work that keeps a Pompano Beach pool
            clean, balanced, and running — done consistently, by the same
            technician every time.
          </p>
          <div className="mt-8">
            <Button href={business.phoneHref} variant="outlineOnDark" icon={<Phone className="h-4 w-4" />}>
              {business.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Not sure what you need?"
            title="Start with the free assessment"
            description="Most homeowners aren't sure whether they need weekly cleaning, a one-time green pool recovery, or an equipment repair. Tell us what's going on and we'll tell you honestly which service fits — or if you need more than one."
            align="center"
          />
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3.5 text-sm font-bold text-brand-950 shadow-lg shadow-sun-500/20 hover:bg-sun-400"
            >
              Get My Free Pool Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
