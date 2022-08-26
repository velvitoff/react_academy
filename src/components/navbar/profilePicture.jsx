import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { selectPicture } from '../../store/slices/userSettingsSlice';
import { Menu, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';

import Localize from '../common/localize';
import { handleTokenLogOut } from '../../services/authService';
import { setPicture, setIsLoggedIn } from '../../store/slices/userSettingsSlice';

export default function ProfilePicture() {
    const dispatch = useDispatch();
    const picture = useSelector(selectPicture);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLogOut = () => {
        handleTokenLogOut();
        dispatch(setIsLoggedIn(false));
        dispatch(setPicture(""));
    }

    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open account">
                    <IconButton sx={{ p: 0 }} onClick={handleOpenNavMenu}>
                        <Avatar src={picture} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                <MenuItem key="Log out" onClick={handleCloseNavMenu}>
                    <Typography
                        textAlign="center"
                        onClick={handleLogOut}
                    >
                        <Localize input="Log out" />
                    </Typography>
                </MenuItem>
            </Menu>
        </>
    );
}