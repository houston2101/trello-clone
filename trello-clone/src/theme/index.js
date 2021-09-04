import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components";
export const customTheme = extendTheme({
  colors: {
    blue: {
      100: "#5D8F9C",
      200: "#93A7AD",
      300: "#4A707A",
    },
    transparent: "transparent",
    grey: {
      100: "#D9D7D7",
      200: "#C5C5C5",
      800: "#626262",
      900: "#142F32",
    },
    red: {
      100: "#BD3D3D",
    },
  },
  fontSizes: {
    xs: "14px",
    s: "18px",
    m: "24px",
    l: "32px",
    xl: "36px",
    "2xl": "40px",
    "3xl": "48px",
  },

  fonts: {
    body: "Montserrat",
    heading: "Montserrat",
    mono: "Montserrat",
  },

  breakpoints: {
    xxl: "1440px",
    xl: "1280px",
    lg: "992px",
    md: "768px",
    sm: "576px",
  },
  components: {
    Button,
  },
});
