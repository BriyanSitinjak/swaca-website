import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "var(--font-plus-jakarta), sans-serif",
    body: "var(--font-plus-jakarta), sans-serif",
  },
});

export default theme;
