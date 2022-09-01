import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { handleTokenLogIn } from '../../services/authService';
import { setIsLoggedIn } from '../../store/slices/userSettingsSlice';

export default function GoogleLoginButton() {
    const dispatch = useDispatch();

    const onSuccess = response => {
        console.log(response);
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
        <Button onClick={login}>
            
        </Button>
    );
}