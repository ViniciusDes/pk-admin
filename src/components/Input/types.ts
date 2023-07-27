/* eslint-disable no-unused-vars */
import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import { BeforeMaskedStateChangeStates, InputState } from 'react-input-mask';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  mask?: string | (string | RegExp)[];
  error?: string | any;
  value?: string | number;
  marginVertical?: string;
  marginHorizontal?: string;
  showPassword?: boolean;
  backgroundWhite?: boolean;
  control?: any;
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
  leftIcon?: React.ComponentType<IconBaseProps>;
  rightIcon?: React.ComponentType<IconBaseProps>;
  register?: any;
  onlyBorderBottom?: boolean;
}
