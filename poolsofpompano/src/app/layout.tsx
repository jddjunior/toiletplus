import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { business, siteUrl } from "@/lib/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Pool Cleaning & Repair in Pompano Beach, FL`,
    template: `%s | ${business.name}`,
  },
  description:
    "Weekly pool cleaning, green pool recovery, equipment repair, and storm cleanup for Pompano Beach, Deerfield Beach, Lighthouse Point, and Broward County. Licensed, insured, and CPO-certified. Free quotes.",
  keywords: [
    "pool cleaning Pompano Beach",
    "pool service Pompano Beach FL",
    "weekly pool maintenance Broward County",
    "green pool cleanup",
    "pool equipment repair Pompano Beach",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} | Pool Cleaning & Repair in Pompano Beach, FL`,
    description:
      "Weekly pool cleaning, green pool recovery, equipment repair, and storm cleanup for Pompano Beach & Broward County. Licensed, insured, CPO-certified. Free quotes.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Pool Cleaning & Repair in Pompano Beach, FL`,
    description:
      "Weekly pool cleaning, green pool recovery, equipment repair, and storm cleanup for Pompano Beach & Broward County.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  description:
    "Weekly pool cleaning, green pool recovery, equipment repair, and storm cleanup serving Pompano Beach and Broward County, FL.",
  url: siteUrl,
  telephone: business.phoneHref.replace("tel:", ""),
  email: business.email,
  priceRange: "$$",
  areaServed: [
    "Pompano Beach, FL",
    "Deerfield Beach, FL",
    "Lighthouse Point, FL",
    "Coconut Creek, FL",
    "Margate, FL",
    "Lauderdale-by-the-Sea, FL",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pompano Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  sameAs: [business.social.facebook, business.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-16 lg:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
