import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { switchThemeToDark, switchThemeToLight } from '../../store/slices/userSettingsSlice';
import { themes } from '../../utils/constants/customThemes';

const themeSelector = createSelector(
    state => state.userSettings.theme,
    themeName => themes[themeName] || themes.default
);

export default function ThemeSwitch() {

    const theme = useSelector(themeSelector);
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleLightSwitch = () => {
        setChecked(false);
        dispatch(switchThemeToLight());
    }

    const handleDarkSwitch = () => {
        setChecked(true);
        dispatch(switchThemeToDark());
    }

    return (
        <Box sx={{ flexGrow: 0, marginRight: 4 }}>
            {checked
                ?
                <IconButton onClick={handleLightSwitch}>
                    <DarkModeIcon sx={{ color: theme.palette.primary.iconColor }} />
                </IconButton>
                :
                <IconButton onClick={handleDarkSwitch}>
                    <LightModeIcon sx={{ color: theme.palette.primary.iconColor }} />
                </IconButton>
            }
        </Box>
    );
}