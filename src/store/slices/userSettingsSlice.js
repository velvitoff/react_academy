import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light',
    language: 'English'
};

export const userSettingsSlice = createSlice({
    name: 'userSettings',
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
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
});

export const {
    switchThemeToLight,
    switchThemeToDark,
    switchThemeToOpposite,
    setLanguage
} = userSettingsSlice.actions;

export default userSettingsSlice.reducer;