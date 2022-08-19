import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import { Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { selectLanguageName, selectThemeObject, setLanguage } from '../../store/slices/userSettingsSlice';
import languageNames from '../../utils/translation/languageFullNames';

export default function LanguageDropdown() {

    const theme = useSelector(selectThemeObject);
    const language = useSelector(selectLanguageName);
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleLanguageChoice = event => {
        handleCloseNavMenu();
        dispatch(setLanguage(event.target.lang));
    }

    return (
        <>
            <IconButton onClick={handleOpenNavMenu}>
                <LanguageIcon sx={{ color: theme.palette.primary.iconColor, mr: 0.5 }} />
                <Typography variant="h6" sx={{ color: theme.palette.primary.contrastText }}>{language}</Typography>
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
            >
                {Object.keys(languageNames).map((language) => (
                    <MenuItem key={language} onClick={handleLanguageChoice}>
                        <Typography
                            textAlign="center"
                            sx={{ color: theme.palette.text.primary }}
                            lang={language}
                        >
                            {languageNames[language]}
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}