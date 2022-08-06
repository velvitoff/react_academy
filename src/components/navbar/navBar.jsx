import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import CustomLogo from './customLogo';
import NavList from './navList';
import ProfilePicture from './profilePicture';
import ThemeSwitch from './themeSwitch';

export default function NavBar(props) {

  return (
    <AppBar
      sx={{
        height: 70
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <CustomLogo />
          <NavList />
          <ThemeSwitch />
          <ProfilePicture />

        </Toolbar>
      </Container>

    </AppBar>
  );

}
