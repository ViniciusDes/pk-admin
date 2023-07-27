import React from 'react';
import { LabelComponent } from './styles';
import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({ children }) => {
  return <LabelComponent>{children}</LabelComponent>;
};

export default Label;
