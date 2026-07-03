// Sample / placeholder reviews for demo purposes.
// Replace with real customer reviews (and a live Google Reviews feed) before launch.
export type Review = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    location: "Pompano Beach",
    rating: 5,
    quote:
      "Our last guy ghosted us for three weeks before we found out. These guys text a photo every single Thursday. Small thing, but it's the first pool service that's actually felt reliable.",
  },
  {
    name: "Denise R.",
    location: "Deerfield Beach",
    rating: 5,
    quote:
      "Came home from a two-week trip to a swamp. They had it swimmable again in four days and explained exactly what happened with the filter. No lecture, just fixed it.",
  },
  {
    name: "Alan K.",
    location: "Lighthouse Point",
    rating: 5,
    quote:
      "Salt cell was throwing errors for months with our old company. Diagnosed it in one visit, quoted the fix on the spot, no upsell games.",
  },
  {
    name: "Priya S.",
    location: "Coconut Creek",
    rating: 5,
    quote:
      "Same tech every week, which sounds small until you've dealt with a rotating cast of strangers in your backyard. Water's been perfect since we switched.",
  },
];
