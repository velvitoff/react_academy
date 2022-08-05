import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        theme: 'light',
        lang: 'English'
    }
};

export const userSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchThemeToLight: (state) => {
            state.user.theme = 'light'
        },
        switchThemeToDark: (state) => {
            state.user.theme = 'dark'
        },
        setLang: (state, action) => {
            state.user.lang = action.payload
        }
    }
});

export const {
    switchThemeToLight,
    switchThemeToDark,
    setLang
} = userSlice.actions;

export default userSlice.reducer;