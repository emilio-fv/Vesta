import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#161c1c',
      light: '#C7BCC2',
      darkText: '#000000',
      lightText: '#e3f2fd',
      sale: '#B02D28'
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;