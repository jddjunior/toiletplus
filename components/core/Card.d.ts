import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Lift on hover — use for clickable cards. */
  hover?: boolean;
  /** Inner padding in px. */
  pad?: number;
  /** Rendered element. */
  as?: any;
}

/** Generic surface card with the brand's border + cool shadow. */
export function Card(props: CardProps): JSX.Element;
