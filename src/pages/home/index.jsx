import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export default function Home(){

    const theme = useTheme();

    return(
        <Box sx={{backgroundColor: theme.palette.background.default}}>
            <p>Home</p>
        </Box>
    );
}