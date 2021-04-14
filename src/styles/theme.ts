import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#fff",
    black: "#000",
    text: "#47585B",
    highlight: "#FFBA08",
    highlightAlpha: "rgba(255,186,8,0.5)",
    grayAlpha: "rgba(153,153,153, 0.5)",
    gray: {
      50: "#F5F8FA",
      100: "#DADADA",
      200: "#999999",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "text",
      },
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  breakpoints: {
    sm: "375px",
    md: "768px",
    lg: "1024px",
  },
  fontSizes: {
    sm: "0.875rem",
    md: "1.125rem",
    lg: "1.25rem",
  },
});
