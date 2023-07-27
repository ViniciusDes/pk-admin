import { ButtonHTMLAttributes } from 'react';

export enum Sizes {
  SMALL,
  MEDIUM,
  LARGER,
}

export interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  width?: string;
  height?: string;
  marginVertical?: string;
  marginHorizontal?: string;
  loading?: boolean;
  size?: keyof typeof Sizes | Sizes;
  color?: string;
  bckColor?: string;
  rounded?: boolean;
  onlyText?: boolean;
  shadow?: boolean;
}

export type ContainerProps = Omit<CustomButtonProps, 'loading'>;
