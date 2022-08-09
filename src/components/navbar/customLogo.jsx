import React from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Stack from '@mui/material/Stack';

import { path } from '../../utils/constants/path';


export default function CustomLogo() {

    const theme = useTheme();

    return (
        <Stack spacing={0} direction="row" alignItems="center">
            <Link to={path.ROOT}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                    <LogoDevIcon fontSize="large" sx={{ color: theme.palette.primary.iconColor, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                </IconButton>
            </Link>
            <Typography
                variant="h6"
                noWrap
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
                <Link to={path.ROOT} style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>BLOG</Link>
            </Typography>



            <Link to={path.ROOT}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                    <LogoDevIcon fontSize="large" sx={{ color: theme.palette.primary.iconColor, display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                </IconButton>
            </Link>
            <Typography
                variant="h5"
                noWrap
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
                <Link to={path.ROOT} style={{ textDecoration: 'none', color: theme.palette.primary.contrastText }}>BLOG</Link>
            </Typography>

        </Stack>
    );
}