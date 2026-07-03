export const business = {
  name: "POOLS of Pompano",
  shortName: "POOLSofPompano",
  tagline: "Pompano's pool, cleaned like clockwork.",
  phoneDisplay: "(954) 476-7665",
  phoneHref: "tel:+19544767665",
  phoneVanity: "476-POOL",
  email: "hello@poolsofpompano.com",
  addressRegion: "Pompano Beach, FL",
  serviceRadius: "Pompano Beach & the surrounding coast",
  hours: [
    { days: "Monday – Saturday", time: "7:00 AM – 6:00 PM" },
    { days: "Sunday", time: "Closed (emergencies only)" },
  ],
  social: {
    facebook: "https://facebook.com/poolsofpompano",
    instagram: "https://instagram.com/poolsofpompano",
  },
  founded: 2016,
} as const;

export const siteUrl = "https://poolsofpompano.vercel.app";
