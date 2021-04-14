import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    white: "#fff",
    black: "#000",
    cyan: "#47585B",
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
  //  quando não especificado todos os breakpoints, os hooks que os utilizam se comportam de forma estranha
  //  reproduzir removendo xl e 2xl e usando o useBreakpointValue, e depois analisando o console
  breakpoints: {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
    "2xl": "1400px",
  },
  fontSizes: {
    sm: "0.875rem",
    md: "1.125rem",
    lg: "1.25rem",
    xl: "1.5rem",
    "2xl": "2.25rem",
  },
});
