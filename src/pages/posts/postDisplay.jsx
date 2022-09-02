import React from 'react';
import moment from 'moment';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Localize from '../../components/common/localize';

export default function PostDisplay({ post }) {
    return (
        <Card
            sx={{ maxWidth: '90%', minWidth: '60%' }}
            variant="outlined"
        >
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <Typography gutterBottom variant="h5" component="div">
                        {post.title}
                    </Typography>
                    <MoreHorizIcon />
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                        src={post.author.image.url}
                        sx={{ width: 26, height: 26 }}
                    />
                    <Typography color="text.secondary">{post.author.displayName}</Typography>
                    <Typography color="text.secondary">
                        <Localize input={moment(post.published).fromNow()} />
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}