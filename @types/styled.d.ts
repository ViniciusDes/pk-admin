import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      text: string;
      gray: string;
      base: string;
      primary: string;
      secondary: string;
    };
    fontSize: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xx: string;
      xxx: string;
    };
    fontFamily: {
      font: string;
    };
  }
}
