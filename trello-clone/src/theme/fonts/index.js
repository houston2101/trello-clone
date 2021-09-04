import * as React from "react";

import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
            font-display: block;
            src: url('../fonts/montserrat-Regular.woff2') format('woff2'),
            url('../fonts/montserrat-Regular.woff') format('woff'),
            url('../fonts/montserrat-regular.ttf') format('ttf');
        }
    `}
  />
);

export default Fonts;
