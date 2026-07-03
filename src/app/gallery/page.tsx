import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { BeforeAfterCard } from "@/components/BeforeAfterCard";
import { FinalCta } from "@/components/FinalCta";
import { galleryCases } from "@/lib/data/gallery";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "See real before-and-after results from POOLS of Pompano: green pool recovery, storm cleanup, and weekly maintenance across Pompano Beach and Broward County.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-950 py-16">
        <Container>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-sun-300">Gallery</p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Before &amp; after, not before-and-hope
          </h1>
          <p className="mt-4 max-w-xl text-brand-100/90">
            A look at the kind of turnarounds we handle every week — green
            pools brought back to blue, storm debris cleared, and routes that
            stay consistent instead of going quiet.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Recent results"
            title="What a turnaround actually looks like"
            description="Every case starts with the same free walkthrough: we look at the water and equipment, then tell you honestly what it'll take and how long."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {galleryCases.map((item) => (
              <BeforeAfterCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCta title="Have a pool that needs a turnaround?" />
    </>
  );
}
