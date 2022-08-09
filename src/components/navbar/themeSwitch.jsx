import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { switchThemeToDark, switchThemeToLight } from '../../store/slices/userSettingsSlice';

const themeSelector = createSelector(
    state => state.userSettings.theme,
    theme => theme
  );

export default function ThemeSwitch() {

    const userTheme = useSelector(themeSelector);
    const theme = useTheme();
    const dispatch = useDispatch();


    const handleLightSwitch = () => {
        dispatch(switchThemeToLight())
    }

    const handleDarkSwitch = () => {
        dispatch(switchThemeToDark())
    }

    return (
        <Box sx={{ flexGrow: 0, marginRight: 4 }}>
            {userTheme === 'light' &&
                <IconButton onClick={handleDarkSwitch}>
                    <LightModeIcon sx={{color: theme.palette.primary.iconColor}}/>
                </IconButton>
            }
            {userTheme === 'dark' &&
                <IconButton onClick={handleLightSwitch}>
                    <DarkModeIcon sx={{color: theme.palette.primary.iconColor}} />
                </IconButton>
            }
        </Box>
    );
}