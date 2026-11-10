import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#EBF6FC",
      100: "#D3EEF8",
      200: "#A6D9EF",
      300: "#5BB8DC",
      400: "#1A9CCF",
      500: "#0B82B4",
      600: "#086F9A",
      700: "#085A7C",
      800: "#083850",
      900: "#062636",
    },
  },
  fonts: {
    heading: "var(--font-plus-jakarta), sans-serif",
    body: "var(--font-plus-jakarta), sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#F6FAFD",
        color: "#153C4B",
      },
    },
  },
  radii: {
    card: "1.25rem",
    pill: "999px",
  },
});

export default theme;
