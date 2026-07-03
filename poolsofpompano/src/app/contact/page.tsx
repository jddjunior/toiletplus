import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { TrustBar } from "@/components/TrustBar";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Get a free pool cleaning quote for your Pompano Beach or Broward County home. Call, text, or send your details and we'll respond within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
            Contact
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-brand-950 sm:text-5xl">
            See what your pool actually needs
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-800/80">
            Call, text, or send your details below. We&apos;ll get back to you within
            one business day to schedule a free on-site assessment — no
            commitment required.
          </p>

          <div className="mt-8 space-y-4">
            <a href={business.phoneHref} className="flex items-center gap-3 text-base font-bold text-brand-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Phone className="h-4 w-4" />
              </span>
              {business.phoneDisplay}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-base font-semibold text-brand-800">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Mail className="h-4 w-4" />
              </span>
              {business.email}
            </a>
            <div className="flex items-start gap-3 text-base text-brand-800">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <MapPin className="h-4 w-4" />
              </span>
              Serving {business.serviceRadius}
            </div>
            <div className="flex items-start gap-3 text-base text-brand-800">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                {business.hours.map((h) => (
                  <p key={h.days}>
                    <span className="font-semibold text-brand-950">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10">
            <TrustBar />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
