import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { selectThemeName, switchThemeToDark, switchThemeToLight } from '../../store/slices/userSettingsSlice';

export default function ThemeSwitch() {
    
    const themeName = useSelector(selectThemeName);
    const dispatch = useDispatch();

    const handleLightSwitch = () => {
        dispatch(switchThemeToLight());
    }

    const handleDarkSwitch = () => {
        dispatch(switchThemeToDark());
    }

    return (
        <>
            {themeName === 'dark' &&
                <IconButton onClick={handleLightSwitch}>
                    <DarkModeIcon sx={{ color: "primary.iconColor" }} />
                </IconButton>
            }
            {themeName === 'light' &&
                <IconButton onClick={handleDarkSwitch}>
                    <LightModeIcon sx={{ color: "primary.iconColor" }} />
                </IconButton>
            }
        </>
    );
}