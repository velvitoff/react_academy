import React from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Box from '@mui/material/Box';

import { PATH } from '../../utils/constants/path';

export default function CustomLogo() {

    const theme = useTheme();

    return (
        <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Link to={PATH.ROOT}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                    <LogoDevIcon fontSize="large" sx={{ color: theme.palette.primary.iconColor, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                </IconButton>
            </Link>
            <Typography
                variant="h6"
                noWrap
                component="a"
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
                <Link to={PATH.ROOT} style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>BLOG</Link>
            </Typography>



            <Link to={PATH.ROOT}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                    <LogoDevIcon fontSize="large" sx={{ color: theme.palette.primary.iconColor, display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                </IconButton>
            </Link>
            <Typography
                variant="h5"
                noWrap
                component="a"
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
                <Link to={PATH.ROOT} style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>BLOG</Link>
            </Typography>

        </Box>
    );
}