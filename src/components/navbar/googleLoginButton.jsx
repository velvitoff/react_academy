import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';

import { handleTokenLogIn } from '../../services/authService';
import { setPicture, setIsLoggedIn } from '../../store/slices/userSettingsSlice';

export default function GoogleLoginButton() {
    const dispatch = useDispatch();

    const onSuccess = response => {
        handleTokenLogIn(response);
        const userObject = jwt_decode(response.credential)
        dispatch(setPicture(userObject.picture));
        dispatch(setIsLoggedIn(true));
    };

    const onError = () => {
        console.log('Login Failed');
    }

    return (
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onError}
        />
    );
}