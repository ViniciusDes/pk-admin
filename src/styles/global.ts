import styled, { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import { theme } from './theme';

export default createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
  //ssss
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

  }
  *:focus{
    outline: 0;
  }

  html {
    font-size: 100%;

    @media screen and (max-width: 1366px) {
      font-size: 81.25%;
    }

    @media screen and (max-width: 1080px) {
      font-size: 62.5%;
    }
  }

  html, body, #root{
    width: 100%;
    height: 100%;
    text-rendering: optimizelegibility;
    background-color: ${({ theme }) => theme.colors.white};
  }
  body{
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font-family: 'Poppins', sans-serif;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray}
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
  }


  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none
  }

  button:hover {
    cursor: pointer
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .textDefault {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
  } 

  #root {
    height: 100vh;
  }
 
  .Mui-selected, .Mui-checked{
    color: ${theme.colors.primary} !important;
  }

  .MuiTabs-indicator {
    background-color: ${theme.colors.primary} !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${transparentize(0.8, theme.colors.secondary)}!important;
  }

  .MuiInputBase-input {
    color: rgb(87, 87, 86)!important;
    padding: 0.81rem 0.9rem!important;
  }

  .MuiAutocomplete-inputFocused.css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input {
    padding-top: 0!important;
    padding-bottom: 0!important;
  }

  .MuiOutlinedInput-root.Mui-focused {
      /* border: 1px solid red!important; */
    .MuiOutlinedInput-notchedOutline{
      border: ${({ theme }) => `1px solid ${theme.colors.primary}`}!important;
      box-shadow: 0px 0px 4px rgba(24, 144, 255, 0.5);
    }
  }
`;

interface RowProps {
  jContent?: string;
  algItems?: string;
  algISelf?: string;
  pd?: string;
  mg?: string;
  gap?: string;
  flWrap?: boolean;
  wd?: string;
  fl?: string | number;
}
export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: ${({ flWrap }) => (flWrap ? 'wrap' : 'nowrap')};
  justify-content: ${({ jContent }) => jContent ?? 'start'};
  align-items: ${({ algItems }) => algItems ?? 'start'};
  align-self: ${({ algISelf }) => algISelf ?? 'unset'};
  padding: ${({ pd }) => pd ?? '0'};
  margin: ${({ mg }) => mg ?? '0'};
  gap: ${({ gap }) => gap ?? '0'};
  width: ${({ wd }) => wd && wd};
  flex: ${({ wd, fl }) => (!wd && !fl ? 1 : fl)};
`;

interface ColProps {
  jContent?: string;
  algItems?: string;
  algISelf?: string;
  pd?: string;
  mg?: string;
  hgt?: string;
  gap?: string;
  wd?: string;
  minWd?: string;
  fl?: string | number;
}
export const Col = styled.div<ColProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ jContent }) => jContent ?? 'start'};
  align-items: ${({ algItems }) => algItems ?? 'start'};
  align-self: ${({ algISelf }) => algISelf ?? 'unset'};
  padding: ${({ pd }) => pd ?? '0'};
  margin: ${({ mg }) => mg ?? '0'};
  gap: ${({ gap }) => gap ?? '0'};
  min-width: ${({ minWd }) => minWd ?? '0'};
  width: ${({ wd }) => wd && wd};
  height: ${({ hgt }) => hgt ?? 'auto'};
  flex: ${({ wd, fl }) => (!wd && !fl ? 1 : fl)};
`;

interface IconButtonProps {
  mg?: string;
}
export const IconButton = styled.button<IconButtonProps>`
  border: none;
  background-color: transparent;

  margin: ${({ mg }) => mg ?? 0};
`;
