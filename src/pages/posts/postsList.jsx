import React from 'react';
import moment from 'moment';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Localize from '../../components/common/localize';

export default function PostsList({ items }) {

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2.5}
        >
            {items.map((item) => (
                <Card
                    sx={{ maxWidth: '60%', minWidth: '60%' }}
                    key={item.id}
                    variant="outlined"
                >
                    <CardContent>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title}
                            </Typography>
                            <MoreHorizIcon />
                        </Stack>

                        <Stack direction="row" alingItems="center" spacing={1}>
                            <Avatar
                                src={item.author.image.url}
                                sx={{ width: 26, height: 26 }}
                            />
                            <Typography color="text.secondary">{item.author.displayName}</Typography>
                            <Typography color="text.secondary">
                                <Localize input={moment(item.published).fromNow()} />
                            </Typography>
                        </Stack>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    );
}