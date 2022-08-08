import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

import Container from '@mui/material/Box';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';


import NavBar from './components/navbar/navBar';
import { themes } from './utils/constants/customThemes';
import RoutesComponent from './routes';
import store from './store';


export default function App() {


  const WrappedApp = () => {

    const themeText = useSelector(state => state.user.theme);
    const theme = themes[themeText] || themes.default

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme>

          <NavBar />

          <Container sx={{ marginTop: '70px' }}>
            <RoutesComponent />
          </Container>

        </CssBaseline>

      </ThemeProvider>
    );
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <WrappedApp/>
      </BrowserRouter>
    </Provider>
  );
}

