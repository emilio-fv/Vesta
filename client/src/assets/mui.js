import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0e1111'
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;