import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#7546e4",
    },
  },
  typography: {
    fontFamily: "yekan",
    allVariants: {
      color: "#F3F3F3",
    },
    body1: {
      fontSize: "16px",
      [theme.breakpoints.up("xs")]: {
        fontSize: "13px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "14px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "16px",
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "18px",
      },
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#D5D5D5",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5329b4",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5329b4",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9467ff",
          },
          "&.Mui-focused": {
            color: "#e5e5e5",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#D5D5D5",
          "&.Mui-focused": {
            color: "#a077ff",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fontSize: "15px",
            borderRadius: "4px",
            border: "1px solid #5329b4",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            textAlign: "right",
            fontSize: "15px",
          },
        },
      },
    },
  },
});

export default customTheme;
