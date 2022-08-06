import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    lang: 'English'
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        switchThemeToLight: (state) => {
            state.theme = 'light'
        },
        switchThemeToDark: (state) => {
            state.theme = 'dark'
        },
        switchThemeToOpposite: (state) => {
            if (state.theme === 'light')
                state.theme = 'dark'
            else if (state.theme === 'dark')
                state.theme = 'light'
        },
        setLang: (state, action) => {
            state.lang = action.payload
        }
    }
});

export const {
    switchThemeToLight,
    switchThemeToDark,
    switchThemeToOpposite,
    setLang
} = userSlice.actions;

export default userSlice.reducer;