import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#282831',
    },
    secondary: {
      main: '#de4747',
    },
    warning: {
      main: '#e89311',
    },
    success: {
      main: '#3fb543',
    }
  },
});

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#282831',
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
  },
});


export const themes = {
  light: lightTheme,
  dark: darkTheme,
  default: lightTheme
}