import type { LucideIcon } from "lucide-react";
import { Droplets, Sparkles, Wrench, CloudRain } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  bullets: string[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "weekly-cleaning",
    name: "Weekly Pool Cleaning & Maintenance",
    shortName: "Weekly Cleaning",
    icon: Droplets,
    summary:
      "Skimmed, brushed, vacuumed, and chemically balanced on the same day every week — with a photo update after every visit.",
    description:
      "This is the service most Pompano Beach homeowners actually need: a standing weekly visit that keeps the water clear and the equipment healthy without you thinking about it. Same technician, same day, every time.",
    bullets: [
      "Skim, brush, and vacuum every visit",
      "Test and balance chlorine, pH, and alkalinity",
      "Empty skimmer and pump baskets",
      "Check filter pressure and backwash when needed",
      "Inspect pump, salt cell, and equipment pad for early warning signs",
      "Photo + note left after every cleaning",
    ],
    keywords: [
      "weekly pool cleaning Pompano Beach",
      "pool maintenance service Pompano Beach FL",
      "residential pool cleaning near me",
    ],
  },
  {
    slug: "green-pool-recovery",
    name: "Green Pool & Algae Recovery",
    shortName: "Green Pool Recovery",
    icon: Sparkles,
    summary:
      "Shock treatments and filter resets that turn an algae-green pool back to swimmable blue in days, not weeks.",
    description:
      "Came back from vacation to a swamp? Pool sat too long between owners or services? We run a structured shock-and-filter recovery process built for Florida heat, not a generic one-size-fits-all treatment.",
    bullets: [
      "Free on-site water and equipment assessment",
      "Shock treatment sized to your pool's actual chemistry",
      "Filter deep-clean or media replacement if needed",
      "Daily or every-other-day follow-up until the water clears",
      "Clear timeline given upfront — no open-ended guessing",
    ],
    keywords: [
      "green pool cleanup Pompano Beach",
      "algae removal pool service",
      "pool shock treatment Broward County",
    ],
  },
  {
    slug: "repairs-equipment",
    name: "Pool Equipment Repair",
    shortName: "Equipment Repair",
    icon: Wrench,
    summary:
      "Pumps, filters, heaters, and salt systems repaired by CPO-certified techs who explain the real problem before touching anything.",
    description:
      "Strange noise from the pump? Salt cell throwing an error? We diagnose before we quote, so you know exactly what's wrong and what it costs before any work starts.",
    bullets: [
      "Pump and motor diagnosis and repair",
      "Filter and DE/cartridge system service",
      "Salt chlorine generator troubleshooting",
      "Heater diagnostics and repair",
      "Plumbing leak detection around pads and returns",
      "Upfront pricing before work begins",
    ],
    keywords: [
      "pool pump repair Pompano Beach",
      "pool equipment repair Broward County",
      "salt cell repair near me",
    ],
  },
  {
    slug: "storm-cleanup",
    name: "Storm & Hurricane Pool Cleanup",
    shortName: "Storm Cleanup",
    icon: CloudRain,
    summary:
      "Debris removal and chemical rebalancing after South Florida storms — included in the plan, not billed as a surprise emergency fee.",
    description:
      "After a named storm or heavy rain event, pools fill with debris and the chemistry gets knocked out of balance fast. We prioritize existing weekly customers first, then open up storm cleanup slots to the neighborhood.",
    bullets: [
      "Debris and leaf removal after storms",
      "Full chemical rebalance post-storm",
      "Equipment check for storm damage",
      "Priority scheduling for existing weekly customers",
      "Flat storm-cleanup rate, quoted before we start",
      "Pre-season equipment check offered every May, ahead of hurricane season",
    ],
    keywords: [
      "hurricane pool cleanup Pompano Beach",
      "storm debris pool cleaning Florida",
      "post storm pool service",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
