import React from 'react';
import './App.css';
import { Provider, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { BrowserRouter } from "react-router-dom";

import Container from '@mui/material/Box';
import { ThemeProvider } from '@mui/system';
import { CssBaseline } from '@mui/material';


import NavBar from './components/navbar/navBar';
import { themes } from './utils/constants/customThemes';
import RoutesComponent from './routes';
import store from './store';


export default function App() {

  const themeSelector = createSelector(
    state => state.userSettings.theme,
    themeName => themes[themeName] || themes.default
  );

  const WrappedApp = () => {

    const theme = useSelector(themeSelector);

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

