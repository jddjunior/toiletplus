import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. `accent` (red) is reserved for emergency / call-now urgency. */
  variant?: 'primary' | 'accent' | 'navy' | 'outline' | 'ghost' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  /** Full-width. */
  block?: boolean;
  /** Icon node before the label (e.g. a Lucide <svg>). */
  iconLeft?: React.ReactNode;
  /** Icon node after the label. */
  iconRight?: React.ReactNode;
  /** Override the rendered element. Auto-uses <a> when `href` is set. */
  as?: any;
  href?: string;
}

/**
 * Pill action button in the Toilet Plus brand.
 * @startingPoint section="Core" subtitle="Buttons — primary, accent, outline" viewport="520x120"
 */
export function Button(props: ButtonProps): JSX.Element;
