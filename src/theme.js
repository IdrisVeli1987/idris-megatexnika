import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 192, 31, 1)",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "capitalize",
          color: "black",
          borderColor: "black",
          minWidth: 150,
          "&:hover": {
            backgroundColor: "rgba(255, 192, 31, 1)",
          },
        },
      },
    },
  },
});
