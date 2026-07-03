import { ArrowRight } from "lucide-react";
import type { GalleryCase } from "@/lib/data/gallery";

export function BeforeAfterCard({ item }: { item: GalleryCase }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-end gap-1 bg-[linear-gradient(160deg,#3a4a1a_0%,#5c6b1f_55%,#8a9a3a_100%)] p-5 text-white">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">Before</span>
          <p className="text-sm font-bold leading-snug">{item.before.label}</p>
          <p className="text-xs leading-snug text-white/80">{item.before.detail}</p>
        </div>
        <div className="flex flex-col justify-end gap-1 bg-[linear-gradient(160deg,#0b3347_0%,#106681_55%,#3fbdd9_100%)] p-5 text-white">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-sun-300">After</span>
          <p className="text-sm font-bold leading-snug">{item.after.label}</p>
          <p className="text-xs leading-snug text-white/80">{item.after.detail}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 p-5">
        <div>
          <h3 className="text-sm font-bold text-brand-950">{item.title}</h3>
          <p className="mt-0.5 text-xs text-brand-600">
            {item.location} · {item.service}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700">
          {item.timeframe}
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </div>
  );
}
