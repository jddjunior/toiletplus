import type { Metadata } from "next";
import { Award, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FinalCta } from "@/components/FinalCta";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "POOLS of Pompano is a locally-owned pool cleaning and repair company serving Pompano Beach and Broward County, FL.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: Clock,
    title: "We show up when we say we will",
    body: "Set weekly day, same technician, every time. If a visit ever has to move, you hear about it first.",
  },
  {
    icon: ShieldCheck,
    title: "Straight answers, not upsells",
    body: "We tell you what your pool actually needs and price it honestly before we touch anything.",
  },
  {
    icon: Award,
    title: "CPO-certified technicians",
    body: "Every technician on our routes is Certified Pool Operator trained, not a subcontractor we've never met.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-950 py-16">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sun-300">About Us</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            A local pool company that actually answers the phone
          </h1>
          <p className="mt-4 max-w-xl text-brand-100/90">
            {business.name} is locally owned and operated in {business.addressRegion}.
            We built this company around one idea: homeowners deserve a pool service
            that&apos;s reliable, honest about pricing, and easy to reach.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Our story"
              title="Started because Broward County pool owners deserved better"
              description="After hearing the same story over and over — pool guys who ghosted, chemicals left wrong, surprise invoices — we built routes around a simple standard: the same certified technician, on the same day, every week, with a photo to prove it."
            />
            <p className="mt-6 text-base leading-relaxed text-brand-800/85">
              Today we run weekly routes across {business.addressRegion} and the
              surrounding coastal communities, handling everything from routine
              maintenance to green pool recovery, equipment repair, and storm cleanup.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="grid gap-5">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-950">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-800/75">{value.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50/60 py-16">
        <Container className="flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-900 text-white">
            <MapPin className="h-5 w-5" />
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-brand-950">
            Proudly based in {business.addressRegion}
          </h2>
          <p className="mt-3 max-w-lg text-sm text-brand-800/80">
            Serving Pompano Beach, Deerfield Beach, Lighthouse Point, Coconut Creek,
            Margate, and Lauderdale-by-the-Sea.
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
