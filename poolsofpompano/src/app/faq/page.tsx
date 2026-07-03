import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCta } from "@/components/FinalCta";
import { faqs } from "@/lib/data/faqs";
import { siteUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about weekly pool cleaning, green pool recovery, pricing, and service areas for POOLS of Pompano.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...faqJsonLd, url: `${siteUrl}/faq` }) }}
      />
      <section className="bg-brand-950 py-16">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sun-300">FAQ</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Straight answers before you call
          </h1>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Common questions" title="Everything homeowners ask us" />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
