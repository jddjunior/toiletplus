import * as React from 'react';

export interface RatingBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Score out of 5 (supports fractional fill). */
  value?: number;
  /** Number of reviews. */
  count?: number;
  /** Source label, e.g. "Google Reviews". */
  label?: string;
  size?: 'md' | 'lg';
}

/** Star + score + count trust chip used in hero and reviews. */
export function RatingBadge(props: RatingBadgeProps): JSX.Element;
