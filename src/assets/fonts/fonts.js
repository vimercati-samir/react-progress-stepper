import { createGlobalStyle } from "styled-components";

import Montserrat from "./montserrat.ttf";

export default createGlobalStyle`
    @font-face {
      font-family: "Montserrat";
      src: url(${Montserrat});
    }
`;
