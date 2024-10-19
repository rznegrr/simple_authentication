import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const customTheme = createTheme({
  // breakpoints: {
  //   values: {
  //     xs: 0 ,
  //     sm: 640,
  //     md: 768,
  //     lg: 1024,
  //     xl: 1280,
  //   },
  // },
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
    body1:{
      fontSize: '16px', // مقدار پیش‌فرض
      [theme.breakpoints.up('xs')]: {
        fontSize: '13px', // برای xs
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px', // برای sm
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '16px', // برای md
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '16px', // برای lg
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '18px', // برای xl
      },
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#D5D5D5",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5329b4", // رنگ کادر عادی
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5329b4", // رنگ کادر در هاور
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9467ff", // رنگ کادر هنگام فوکوس
          },
          "&.Mui-focused": {
            color: "#e5e5e5", // رنگ متن هنگام فوکوس
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#D5D5D5", // رنگ label در حالت عادی
          "&.Mui-focused": {
            color: "#a077ff", // رنگ label هنگام فوکوس
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fontSize: "15px", // سایز چک‌باکس
            borderRadius: "4px", // تغییر شعاع لبه‌ها (گرد کردن)
            border: "1px solid #5329b4", // افزودن یا تغییر border
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& input': {
            textAlign: 'right', // راست‌چین کردن متن ورودی و placeholder
            fontSize: '15px'
          },
        },
      },
    },
  },
});

export default customTheme;
