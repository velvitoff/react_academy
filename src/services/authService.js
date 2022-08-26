export const handleTokenLogIn = (response) => {
    window.localStorage.setItem('accessToken', response.credential);
}

export const handleTokenLogOut = () => {
    window.localStorage.removeItem('accessToken');
}
