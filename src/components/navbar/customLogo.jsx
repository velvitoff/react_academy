import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Box from '@mui/material/Box';

import { PATHS } from '../../utils/constants/paths';

export default function CustomLogo() {
    return (
        <Box style={{display:'flex', flexDirection:'row', alignItems: 'center'}}>
            <IconButton href={PATHS.root} style={{ backgroundColor: 'transparent' }}>
                <LogoDevIcon fontSize="large" sx={{ color: "#FFFFFF", display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            </IconButton>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                BLOG
            </Typography>



            <LogoDevIcon fontSize="large" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                BLOG
            </Typography>

        </Box>
    );
}