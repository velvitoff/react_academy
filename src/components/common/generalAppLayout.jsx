import React from 'react';
import Container from '@mui/material/Box';
import { CssBaseline } from '@mui/material';
import NavBar from '../navbar';
import RoutesComponent from './../../routes';


export default function GeneralAppLayout() {
    return (
        <CssBaseline enableColorScheme>
            <NavBar />
            <Container sx={{ marginTop: '70px' }}>
                <RoutesComponent />
            </Container>
        </CssBaseline>
    );
}