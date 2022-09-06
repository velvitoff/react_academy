import React from 'react';
import { Stack } from '@mui/material';

export default function MainStackWrapper({ children }) {
    return (
        <Stack
            mt={10}
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2.5}
        >
            {children}
        </Stack>
    );
}