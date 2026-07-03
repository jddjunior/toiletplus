export type GalleryCase = {
  slug: string;
  title: string;
  location: string;
  service: string;
  timeframe: string;
  before: { label: string; detail: string };
  after: { label: string; detail: string };
};

export const galleryCases: GalleryCase[] = [
  {
    slug: "algae-bloom-recovery",
    title: "Two-week vacation, one swampy pool",
    location: "Pompano Beach",
    service: "Green Pool Recovery",
    timeframe: "4 days",
    before: { label: "Deep green, near-zero visibility", detail: "Algae bloom across floor and walls, filter clogged" },
    after: { label: "Clear, swim-ready blue", detail: "Balanced chemistry, filter media replaced" },
  },
  {
    slug: "post-storm-cleanup",
    title: "Storm debris after a summer squall",
    location: "Deerfield Beach",
    service: "Storm & Hurricane Cleanup",
    timeframe: "1 day",
    before: { label: "Leaves, branches, cloudy water", detail: "Chemistry knocked out of balance by runoff" },
    after: { label: "Debris-free and rebalanced", detail: "Ready to swim same evening" },
  },
  {
    slug: "neglected-rental-property",
    title: "Rental property, no service for months",
    location: "Coconut Creek",
    service: "Green Pool Recovery",
    timeframe: "5 days",
    before: { label: "Black-green water, stained tile", detail: "Salt cell scaled over, pump barely running" },
    after: { label: "Crystal clear, equipment restored", detail: "Salt cell descaled, new weekly route started" },
  },
  {
    slug: "weekly-route-handoff",
    title: "Inconsistent care from a previous company",
    location: "Lighthouse Point",
    service: "Weekly Cleaning & Maintenance",
    timeframe: "Ongoing",
    before: { label: "Cloudy, inconsistent chlorine levels", detail: "Skipped visits, no equipment checks" },
    after: { label: "Consistently clear, week after week", detail: "Same technician, same day, every week" },
  },
];
