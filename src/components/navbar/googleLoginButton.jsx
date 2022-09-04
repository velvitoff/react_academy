import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';

import { handleTokenLogIn } from '../../services/authService';
import { setIsLoggedIn } from '../../store/slices/userSettingsSlice';
import { ButtonBase } from '@mui/material';

export default function GoogleLoginButton() {
    const dispatch = useDispatch();

    const onSuccess = response => {
        handleTokenLogIn(response.access_token);
        dispatch(setIsLoggedIn(true));
    };

    const onError = () => {
        console.log('Login Failed');
    }

    const login = useGoogleLogin({
        onSuccess: onSuccess,
        onError: onError,
        flow: 'implicit',
        scope: "email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/blogger https://www.googleapis.com/auth/blogger.readonly"
    });


    return (
        <ButtonBase>
            <Typography
                onClick={login}
                color="primary.contrastText"
                fontSize="1.3rem">
                Log In
            </Typography>
        </ButtonBase>
    );
}