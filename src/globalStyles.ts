import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${styledNormalize}
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;
