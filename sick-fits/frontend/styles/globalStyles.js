import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: radnika_next;
    src: url('./static/radnikanext-medium-webfont.woff2')
    format(woff2);
    font-weigth: normal;
    font-stryle: normal;
  }
  html{
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  body{
    font-family: radnika_next;
    padding: 0;
    margin:0;
    font-size: 1.5rem;
    line-height: 2;
    a{
      text-decoration: none;
      color: ${theme.black};
    }
  }
`;

export default GlobalStyles;
