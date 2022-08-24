import React from 'react';
import { useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/system/Box';

import DevBlogLogo from './devBlogLogo';
import NavList from './navList';
import ProfilePicture from './profilePicture';
import ThemeSwitch from './themeSwitch';
import LanguageDropdown from './languageDropdown';
import { selectIsLoggedIn } from '../../store/slices/userSettingsSlice';
import GoogleLoginButton from '../common/googleLoginButton';

export default function NavBar(props) {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar sx={{ height: 70 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DevBlogLogo />
          <Box sx={{ ml: 3, flexGrow: 1 }}> <NavList /> </Box>
          <LanguageDropdown />
          <ThemeSwitch />
          <Box sx={{ ml: 3 }}>
            {isLoggedIn ? <ProfilePicture /> : <GoogleLoginButton/>}
          </Box>
        </Toolbar>
      </Container>

    </AppBar>
  );
}
