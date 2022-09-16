import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import StyledTypography from './styledTypography';
import StyledLogoDevIcon from './styledLogoDevIcon';
import { path } from '../../../utils/constants/path';

export default function DevBlogLogo() {
    return (
        <Stack direction="row" alignItems="center">
            <Link to={path.ROOT}>
                <StyledLogoDevIcon fontSize="large" sx={{ mr: 0.5, mt: 1 }} />
            </Link>

            <Link
                to={path.ROOT}
                style={{
                    textDecoration: 'none',
                }}
            >
                <StyledTypography variant='h5' noWrap color="primary.contrastText">
                    BLOG
                </StyledTypography>
            </Link>
        </Stack >
    );
}