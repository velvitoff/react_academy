import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import Localize from '../../components/common/localize';
import IconDropdown from './iconDropdown';
import { path } from './../../utils/constants/path';

export default function PostDisplay({ blogId, post }) {
    return (
        <Card
            sx={{ maxWidth: '90vw', minWidth: '60vw', minHeight: '15vh' }}
            variant="outlined"
        >
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <Link to={`${path.POST}/${blogId}/${post.id}`} style={{ textDecoration: 'none' }}>
                        <Typography gutterBottom variant="h5" component="div" color="text.primary">
                            {post.title}
                        </Typography>
                    </Link>
                    <IconDropdown />
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