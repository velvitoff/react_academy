import React from 'react';
import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import StyledHomeBox from './styledHomeBox';
import Localize from './../../components/common/localize';
import './home.css';
import { selectIsLoggedIn } from '../../store/slices/userSettingsSlice';

export default function Home() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <StyledHomeBox className="center" >
                <Stack direction="column" spacing={2} sx={{textAlign: 'center'}}>
                    <Typography variant="h4">
                        <Localize input="Welcome to DevBlog" />
                    </Typography>
                    <Typography variant="h6">
                        <Localize input="Use this website to edit your blogs on the Blogger platform" />
                    </Typography>
                    <Typography variant="h6">
                        <Localize input={isLoggedIn? "Switch to Blogs page to continue" : "Log in to your account to start"} />
                    </Typography>
                </Stack>
            </StyledHomeBox>
    );
}