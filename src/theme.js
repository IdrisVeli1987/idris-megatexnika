import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 192, 31, 1)",
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "none",
          margin: "5px",
          padding: "5px",
          color: "rgba(53, 53, 53, 1)"
        },
      },
    },
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
