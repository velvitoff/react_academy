import { googleLogout } from '@react-oauth/google';

export const handleTokenLogIn = (token) => {
    window.localStorage.setItem('accessToken', token);
}

export const handleTokenLogOut = () => {
    window.localStorage.removeItem('accessToken');
    googleLogout();
}

export const getAccessToken = () => {
    return window.localStorage.getItem('accessToken');
}

export const getAccessTokenWithBearer = () => {
    const token = getAccessToken();
    if (!token){
        return "";
    }
    return `Bearer ${token}`;
}
