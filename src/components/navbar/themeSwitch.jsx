import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { switchThemeToDark, switchThemeToLight } from '../../store/slices/userSettingsSlice';
import { selectThemeObject } from '../../store/slices/userSettingsSlice';

export default function ThemeSwitch() {
    
    const theme = useSelector(selectThemeObject);
    const dispatch = useDispatch();

    const handleLightSwitch = () => {
        dispatch(switchThemeToLight());
    }

    const handleDarkSwitch = () => {
        dispatch(switchThemeToDark());
    }

    return (
        <>
            {theme.name === 'dark' &&
                <IconButton onClick={handleLightSwitch}>
                    <DarkModeIcon sx={{ color: theme.palette.primary.iconColor }} />
                </IconButton>
            }
            {theme.name === 'light' &&
                <IconButton onClick={handleDarkSwitch}>
                    <LightModeIcon sx={{ color: theme.palette.primary.iconColor }} />
                </IconButton>
            }
        </>
    );
}