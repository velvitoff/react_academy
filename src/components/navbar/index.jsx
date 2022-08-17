import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';

import DevBlogLogo from './devBlogLogo';
import NavList from './navList';
import ProfilePicture from './profilePicture';
import ThemeSwitch from './themeSwitch';

export default function NavBar(props) {

  return (
    <AppBar sx={{ height: 70 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <DevBlogLogo />
          <Box sx={{ ml: 3, flexGrow: 1 }}> <NavList /> </Box>
          <ThemeSwitch />
          <Box sx={{ ml: 3 }}> <ProfilePicture /> </Box>

        </Toolbar>
      </Container>

    </AppBar>
  );
}
