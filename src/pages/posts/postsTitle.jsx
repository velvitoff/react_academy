import React from 'react';
import Typography from '@mui/material/Typography';

import Localize from '../../components/common/localize';

export default function PostsTitle({blogName}) {
    return (
        <Typography variant="h4">
            <Localize input="Posts for" /> {" " + blogName}
        </Typography>
    )
}