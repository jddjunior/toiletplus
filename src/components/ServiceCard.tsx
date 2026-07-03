import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col rounded-2xl border border-brand-100 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5"
    >
      <span className="absolute right-5 top-5 font-mono text-xs font-semibold text-brand-200">
        0{index + 1}
      </span>
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-6 w-6" strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-brand-950">{service.shortName}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-800/75">{service.summary}</p>
      <span className="mt-5 flex items-center gap-1.5 text-sm font-bold text-brand-600 group-hover:gap-2.5 transition-all">
        Learn more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
