import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2d2d2d',
      iconColor: '#fafafa'
    },
    secondary: {
      main: '#de4747',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#282831',
      iconColor: '#fafafa'
    },
    secondary: {
      main: '#de4747',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
  },
});


export const themes = {
  default: lightTheme,
  light: lightTheme,
  dark: darkTheme
}