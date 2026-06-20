import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  /** Leading icon node. */
  icon?: React.ReactNode;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
}

/** Labeled text input with icon, hint and error states. */
export function Input(props: InputProps): JSX.Element;
