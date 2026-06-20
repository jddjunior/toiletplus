import * as React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  required?: boolean;
  hint?: string;
  error?: string;
}

/** Native select styled to match Input, with brand chevron. */
export function Select(props: SelectProps): JSX.Element;
