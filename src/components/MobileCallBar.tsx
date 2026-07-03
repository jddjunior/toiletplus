import { Phone, Sparkles } from "lucide-react";
import { business } from "@/lib/constants";
import Link from "next/link";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-brand-100 bg-white/95 backdrop-blur lg:hidden">
      <a
        href={business.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-brand-100 py-3.5 text-sm font-bold text-brand-900"
      >
        <Phone className="h-4 w-4 text-sun-600" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-sun-500 py-3.5 text-sm font-bold text-brand-950"
      >
        <Sparkles className="h-4 w-4" />
        Free Quote
      </Link>
    </div>
  );
}
