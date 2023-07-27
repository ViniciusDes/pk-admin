import React from 'react';
import { Tooltip as TooltipMUI } from '@mui/material';
import { Container } from './styles';
import { TooltipProps } from './types';

const Tooltip: React.FC<TooltipProps> = ({ title, className = '', children }) => {
  return (
    <Container className={className}>
      <TooltipMUI title={title}>{children}</TooltipMUI>
    </Container>
  );
};

export default Tooltip;
