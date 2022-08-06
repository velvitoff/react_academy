import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { switchThemeToDark, switchThemeToLight } from '../../store/slices/userSlice';


export default function ThemeSwitch() {

    const themeText = useSelector(state => state.user.theme);
    const theme = useTheme();
    const dispatch = useDispatch();


    const handleLightSwitch = () => {
        dispatch(switchThemeToLight())
    }

    const handleDarkSwitch = () => {
        dispatch(switchThemeToDark())
    }

    return (
        <Box sx={{ flexGrow: 0.02 }}>
            {themeText === 'light' &&
                <IconButton onClick={handleDarkSwitch}>
                    <LightModeIcon sx={{color: theme.palette.primary.contrastText}}/>
                </IconButton>
            }
            {themeText === 'dark' &&
                <IconButton onClick={handleLightSwitch}>
                    <DarkModeIcon sx={{color: theme.palette.primary.contrastText}} />
                </IconButton>
            }
        </Box>
    );
}