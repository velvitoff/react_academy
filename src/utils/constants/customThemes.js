import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#282831',
      light: '#53535a',
      dark: '#1c1c22',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#de4747',
    },
    warning: {
      main: '#e89311',
    },
    success: {
      main: '#3fb543',
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
      light: '#53535a',
      dark: '#1c1c22',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#de4747',
    },
    warning: {
      main: '#e89311',
    },
    success: {
      main: '#3fb543',
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