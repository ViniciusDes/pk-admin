import { LabelHTMLAttributes, ReactElement } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: string | number | boolean | ReactElement;
}
