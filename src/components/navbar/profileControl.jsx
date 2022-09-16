import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../store/slices/userSettingsSlice';
import ProfilePicture from './profilePicture';
import GoogleLoginButton from './googleLoginButton';

export default function ProfileControl() {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            {isLoggedIn ? <ProfilePicture /> : <GoogleLoginButton />}
        </>
    );
}