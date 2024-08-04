// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // or 'light'
    primary: {
      main: "#fffff",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default theme;
