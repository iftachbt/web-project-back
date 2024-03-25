import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const themeBox = createTheme({
  palette: {
    primary: {
      light: grey[600],
      main: grey[500],
      dark: grey[600],
      contrastText: "#fff",
    },
  },
});
