import { Typography } from '@mui/material';
import React from 'react';

export default function PostTitle({text}) {
    return (
        <Typography variant="h4" textAlign="center">
            {text}
        </Typography>
    );
}