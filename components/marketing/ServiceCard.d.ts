import * as React from 'react';

export interface ServiceCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Icon node (e.g. a Lucide <svg/>). */
  icon?: React.ReactNode;
  /** Service name, e.g. "Drain Cleaning". */
  title: string;
  /** Mono index stamp shown top-right, e.g. "01". */
  index?: string;
  href?: string;
  /** Link label; defaults to "Learn more". */
  linkLabel?: string;
}

/**
 * Service tile for the homepage services grid.
 * @startingPoint section="Marketing" subtitle="Service grid tile" viewport="360x260"
 */
export function ServiceCard(props: ServiceCardProps): JSX.Element;
