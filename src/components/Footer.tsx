import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { business } from "@/lib/constants";
import { services } from "@/lib/data/services";
import { cities } from "@/lib/data/cities";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

function FacebookGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.28-.12-2.25 0-3.8 1.37-3.8 3.9v2.18H7.9v2.96h2.56V21h3.04Z" />
    </svg>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-brand-200/80">
            Weekly pool cleaning, green pool recovery, equipment repair, and storm
            cleanup for {business.serviceRadius}.
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sun-300">
            <ShieldCheck className="h-4 w-4" />
            Licensed &amp; insured · CPO-certified
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={business.social.facebook}
              aria-label="Facebook"
              className="rounded-full border border-white/15 p-2 text-white/80 hover:border-white/40 hover:text-white"
            >
              <FacebookGlyph />
            </a>
            <a
              href={business.social.instagram}
              aria-label="Instagram"
              className="rounded-full border border-white/15 p-2 text-white/80 hover:border-white/40 hover:text-white"
            >
              <InstagramGlyph />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-brand-100/85 hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
            Service Areas
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={`/service-areas/${c.slug}`} className="text-brand-100/85 hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-300">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2 font-semibold text-white">
                <Phone className="h-4 w-4 text-sun-400" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 text-brand-100/85 hover:text-white">
                <Mail className="h-4 w-4 text-sun-400" />
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2 text-brand-100/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" />
              Serving {business.addressRegion} &amp; surrounding Broward County
            </li>
          </ul>
          <div className="mt-5 space-y-1 text-xs text-brand-200/70">
            {business.hours.map((h) => (
              <p key={h.days}>
                <span className="font-semibold text-brand-100">{h.days}:</span> {h.time}
              </p>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-brand-300/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/service-areas" className="hover:text-white">
              Service Areas
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
