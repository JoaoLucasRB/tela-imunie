import { createTheme } from "@material-ui/core/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif"
  },
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: 'rgb(241, 85, 85)'
    },
  }
});

export default defaultTheme;