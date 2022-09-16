import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';

export default function SkeletonBlogDisplay() {
    return (
        <Grid item>
            <Card variant="outlined" sx={{ width: '18vw', height: 160, minWidth: 180 }}>
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <CircularProgress sx={{ color: "text.hint", mt: 5 }} />
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}