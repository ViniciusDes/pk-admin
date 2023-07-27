import { TextareaHTMLAttributes } from 'react';

export interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  error?: any;
  value?: string | number;
  minWidth?: string | number;
  flex?: string | number;
  marginVertical?: string;
  marginHorizontal?: string;
  backgroundWhite?: boolean;
  register?: any;
  width?: string | number;
  height?: string | number;
}
