import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. Use "dark" on navy/photo backgrounds. */
  tone?: 'light' | 'dark';
  /** Show the "Toilet+" wordmark next to the mark. */
  showWordmark?: boolean;
  /** Mark height in px; wordmark scales from this. */
  size?: number;
  /** Render as an anchor wrapping the lockup. */
  href?: string;
}

/**
 * The Toilet Plus brand lockup.
 * @startingPoint section="Brand" subtitle="Logo mark + wordmark" viewport="320x80"
 */
export function Logo(props: LogoProps): JSX.Element;
