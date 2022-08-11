import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/system';

import { selectThemeObject } from '../../store/slices/userSettingsSlice';

export default function UserSettingsProvider({ children }){
    const theme = useSelector(selectThemeObject);

    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}