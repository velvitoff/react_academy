import React from 'react';
import moment from 'moment';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

import Localize from '../../components/common/localize';
import { path } from './../../utils/constants/path';

export default function BlogDisplay({ blog }) {
    return (
        <Grid item>
            <Link to={`${path.POSTS}/${blog.id}`} style={{ textDecoration: 'none' }}>
                <Card variant="outlined" sx={{ width: '18vw', height: 160, minWidth: 180 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {blog.name}
                        </Typography>
                        <Typography sx={{ mb: 0.2 }} color="text.secondary">
                            {blog.description !== "" ? blog.description : <Localize input="No decription" />}
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            <Localize input={`${blog.posts.totalItems} articles`} />
                        </Typography>
                        <Typography color="text.secondary">
                            <Localize input={`Last updated ${moment(blog.updated).fromNow()}`} />
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}