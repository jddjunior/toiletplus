import { Quote, Star } from "lucide-react";
import type { Review } from "@/lib/data/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-0.5 text-sun-500">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <Quote className="mt-3 h-6 w-6 text-brand-200" />
      <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-brand-900/90">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-bold text-brand-950">
        {review.name}
        <span className="ml-1 font-medium text-brand-600">— {review.location}</span>
      </figcaption>
    </figure>
  );
}
