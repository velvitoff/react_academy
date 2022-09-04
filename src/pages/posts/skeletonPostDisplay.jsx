import { Card } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function SkeletonPostDisplay() {
    return (
        <Card
            sx={{ maxWidth: '90%', minWidth: '60%', height: '14vh' }}
            variant="outlined"
        >
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <CircularProgress sx={{color: "text.hint", mt: '4vh'}}/>
            </Box>
        </Card>
    );
}