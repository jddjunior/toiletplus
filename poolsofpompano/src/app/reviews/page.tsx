import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewCard } from "@/components/ReviewCard";
import { FinalCta } from "@/components/FinalCta";
import { reviews } from "@/lib/data/reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what Pompano Beach and Broward County homeowners say about POOLS of Pompano's weekly pool cleaning and repair service.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-brand-950 py-16">
        <Container className="text-center">
          <div className="mx-auto flex items-center justify-center gap-1 text-sun-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            What Broward County homeowners say
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-brand-100/90">
            We don&apos;t win every customer with the lowest price. We win by showing
            up, being straight about pricing, and answering the phone.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Reviews" title="Recent feedback" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCta title="Want to be our next review?" />
    </>
  );
}
