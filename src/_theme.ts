import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D6EFD",
    },
    secondary: {
      main: "#6C757D",
    },
    background: {
      default: "#1C1E21",
      paper: "#252525",
    },
    text: {
      primary: "#F8F9FA",
      secondary: "#ADB5BD",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Arial', sans-serif",
    fontSize: 14,
  },
});

export default theme;
