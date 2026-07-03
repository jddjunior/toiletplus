import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outlineOnDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-sun-500 text-brand-950 hover:bg-sun-400 shadow-lg shadow-sun-500/20",
  secondary:
    "bg-brand-900 text-white hover:bg-brand-800",
  ghost:
    "bg-white text-brand-800 border border-brand-200 hover:border-brand-400 hover:bg-brand-50",
  outlineOnDark:
    "bg-white/0 text-white border border-white/40 hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}) {
  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-150 ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}
