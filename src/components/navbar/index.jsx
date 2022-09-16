import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';

import DevBlogLogo from './devBlogLogo';
import NavList from './navList';
import ThemeSwitch from './themeSwitch';
import LanguageDropdown from './languageDropdown';
import ProfileControl from './profileControl';

export default function NavBar() {

  return (
    <AppBar sx={{ height: 70 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <DevBlogLogo />
          <Box sx={{ ml: 3, flexGrow: 1 }}> <NavList /> </Box>
          <LanguageDropdown />
          <ThemeSwitch />
          <Box sx={{ ml: 2 }}> <ProfileControl /> </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
