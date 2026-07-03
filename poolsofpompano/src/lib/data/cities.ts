export type City = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  zips: string[];
};

export const cities: City[] = [
  {
    slug: "pompano-beach",
    name: "Pompano Beach",
    county: "Broward County",
    blurb:
      "Our home base. Most of our weekly routes run through Pompano Beach neighborhoods from Highland Beach Club to Cypress Harbor.",
    zips: ["33060", "33062", "33064", "33069"],
  },
  {
    slug: "deerfield-beach",
    name: "Deerfield Beach",
    county: "Broward County",
    blurb:
      "We run weekly routes through Deerfield Beach several days a week, from the Cove to the west-side communities off Powerline Road.",
    zips: ["33441", "33442"],
  },
  {
    slug: "lighthouse-point",
    name: "Lighthouse Point",
    county: "Broward County",
    blurb:
      "Waterfront homes with saltwater systems are common here — our techs are comfortable with salt cells, spillovers, and larger equipment pads.",
    zips: ["33064"],
  },
  {
    slug: "coconut-creek",
    name: "Coconut Creek",
    county: "Broward County",
    blurb:
      "From the Wynmoor community to newer builds near Coconut Creek Parkway, we service both community pools and private backyard pools.",
    zips: ["33063", "33066", "33073"],
  },
  {
    slug: "margate",
    name: "Margate",
    county: "Broward County",
    blurb:
      "A steady weekly route across Margate's older established neighborhoods, including screened and unscreened pools alike.",
    zips: ["33063", "33068"],
  },
  {
    slug: "lauderdale-by-the-sea",
    name: "Lauderdale-by-the-Sea",
    county: "Broward County",
    blurb:
      "Smaller lots and tighter equipment pads near the coast — we schedule these stops on our early coastal route.",
    zips: ["33308"],
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}
