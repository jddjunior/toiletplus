import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color role. `accent` for urgency, `green` for trust/licensing. */
  tone?: 'blue' | 'navy' | 'accent' | 'green' | 'amber' | 'gray' | 'solid';
  size?: 'sm' | 'md';
  /** Optional leading icon node. */
  icon?: React.ReactNode;
}

/** Small qualifier pill — Licensed, 24/7, Same-Day, etc. */
export function Badge(props: BadgeProps): JSX.Element;
