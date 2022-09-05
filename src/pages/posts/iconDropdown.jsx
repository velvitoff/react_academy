import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Typography from '@mui/material/Typography';
import Localize from '../../components/common/localize';

export default function IconDropdown() {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleChoice = () => {
        console.log('choice');
    }

    const menuItems = [
        {text: 'choice', func: handleChoice}
    ];

    return (
        <>
            <MoreHorizIcon onClick={handleOpenNavMenu}/>
            <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.text} onClick={handleCloseNavMenu}>
                        <Typography onClick={item.func}>
                            <Localize input={item.text}/>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}