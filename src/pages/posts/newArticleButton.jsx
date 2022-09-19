import React from 'react';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import { path } from '../../utils/constants/path';
import Localize from '../../components/common/localize';

export default function NewArticleButton({ blogId }) {
    return (
        <Link to={`${path.POST_CREATE}/${blogId}`} style={{ textDecoration: 'none' }}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <AddIcon sx={{ color: "text.primary" }} />
                <Typography color="text.primary">
                    <Localize input="New article" />
                </Typography>
            </Stack>
        </Link>
    );
}