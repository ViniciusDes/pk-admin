import React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    text: '#575756',
    gray: '#2D3748',
    base: '#F8F9FA',
    primary: '#1c1c1c',
    secondary: '#878787',
    background: '#f4f3f7',
  },
  fontSize: {
    xxs: '1rem',
    xs: '1.2rem',
    sm: '0.9rem',
    md: '1.6rem',
    lg: '1.8rem',
    xl: '2.4rem',
    xx: '3.6rem',
    xxx: '4.8rem',
  },
  fontFamily: {
    font: 'Poppins, sans-serif',
  },
};

export const Theme: React.FC<any> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
