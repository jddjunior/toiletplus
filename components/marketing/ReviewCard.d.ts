import * as React from 'react';

export interface ReviewCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Whole-star rating 1–5. */
  rating?: number;
  quote: string;
  author: string;
  location?: string;
  /** Source label, default "Google". */
  source?: string;
}

/** Customer testimonial card with stars and author. */
export function ReviewCard(props: ReviewCardProps): JSX.Element;
