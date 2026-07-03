"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business } from "@/lib/constants";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-800 transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-brand-900"
          >
            <Phone className="h-4 w-4 text-sun-600" strokeWidth={2.5} />
            {business.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-sun-500 px-5 py-2.5 text-sm font-bold text-brand-950 shadow-md shadow-sun-500/30 transition-colors hover:bg-sun-400"
          >
            Free Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md p-2 text-brand-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-brand-100 bg-white px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base font-semibold text-brand-900 hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={business.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand-900 px-5 py-3 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4" />
            Call {business.phoneDisplay}
          </a>
        </div>
      ) : null}
    </header>
  );
}
