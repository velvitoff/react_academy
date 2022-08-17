import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import StyledTypography from './styledTypography';
import StyledLogoDevIcon from './styledLogoDevIcon';
import { path } from '../../../utils/constants/path';

export default function DevBlogLogo() {
    const theme = useTheme();

    return (
        <Stack direction="row" alignItems="center">
            <Link to={path.ROOT}>
                <StyledLogoDevIcon fontSize="large" sx={{ mr: 0.5, mt: 1 }} />
            </Link>

            <StyledTypography variant='h5' noWrap>
                <Link
                    to={path.ROOT}
                    style={{
                        textDecoration: 'none',
                        color: theme.palette.primary.contrastText
                    }}
                >
                    BLOG
                </Link>
            </StyledTypography>
        </Stack >
    );
}