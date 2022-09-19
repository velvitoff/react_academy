import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { handleTokenLogIn } from '../../services/authService';
import { setIsLoggedIn } from '../../store/slices/userSettingsSlice';
import { ButtonBase } from '@mui/material';
import { path } from '../../utils/constants/path';
import Localize from '../common/localize';

export default function GoogleLoginButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSuccess = response => {
        handleTokenLogIn(response.access_token);
        dispatch(setIsLoggedIn(true));
        navigate(path.BLOGS);
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
                fontSize="1.3rem"
            >
                <Localize input="Log In"/>
            </Typography>
        </ButtonBase>
    );
}