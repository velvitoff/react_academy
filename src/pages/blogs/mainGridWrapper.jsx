import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function MainGridWrapper({children}){
    return(
        <Box sx={{ mt: 12, ml: 3, mr: 3 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="flex-start" alignItems="center">
                {children}
            </Grid>
        </Box>
    );
}