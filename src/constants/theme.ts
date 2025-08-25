import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    coruscant: [
      "#f8f0d6",
      "#f2e1a8",
      "#edd27a",
      "#e8c34c",
      "#e3b41e",
      "#daa520",
      "#c1931c",
      "#a88118",
      "#8f6f14",
      "#765d10",
    ],
    background: [
      "#f5f5f5",
      "#e9e9e9",
      "#d9d9d9",
      "#c4c4c4",
      "#9d9d9d",
      "#6c6c6c",
      "#424242",
      "#2d2d2d",
      "#1a1a1a",
      "#0c0c0c",
    ],
  },
  primaryColor: "coruscant",
  other: {
    textShadow: {
      light: "1px 1px 2px rgba(0,0,0,0.5)",
      medium: "1px 1px 2px rgba(0,0,0,0.7)",
      strong: "2px 2px 4px rgba(0,0,0,0.7)",
    },
  },
});
