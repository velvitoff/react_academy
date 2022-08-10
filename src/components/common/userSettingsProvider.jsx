import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/system';

import { selectTheme } from '../../store/slices/userSettingsSlice';

export default function UserSettingsProvider({ child }){
    const theme = useSelector(selectTheme);

    return(
        <ThemeProvider theme={theme}>
            {child}
        </ThemeProvider>
    );
}