import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { path } from '../../utils/constants/path';
import Localize from '../common/localize';
import { Stack } from '@mui/material';

const pageList = [
  { title: "Blogs", link: path.BLOGS }
];

export default function NavList() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {pageList.map((page) => (
            <MenuItem key={page.title} onClick={handleCloseNavMenu}>
              <Link to={page.link} style={{ textDecoration: 'none' }}>
                <Typography
                  textAlign="center"
                  color="text.dropDownContrast"
                >
                  <Localize input={page.title} />
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Stack direction='row' spacing={1.5}>
          {pageList.map((page) => (
            <Link
              to={page.link}
              key={page.title}
              style={{ textDecoration: 'none' }}
            >
              <Typography variant="h6" color="text.appBarContrast">
                <Localize input={page.title} />
              </Typography>
            </Link>
          ))}
        </Stack>
      </Box>


    </>
  );
}