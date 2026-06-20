import * as React from 'react';

export interface GuaranteeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  /** Use "navy" when placed on a dark band. */
  tone?: 'blue' | 'navy';
}

/** Promise/guarantee block — icon, title, one-line proof. */
export function GuaranteeCard(props: GuaranteeCardProps): JSX.Element;
