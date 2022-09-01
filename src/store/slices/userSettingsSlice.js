import { createSlice, createSelector } from '@reduxjs/toolkit';
import { themeTokens } from '../../utils/theme/themeTokens';
import languageFullNames from '../../utils/translation/languageFullNames';
import { getAccessToken } from './../../services/authService';

const getIsLoggedIn = () => {
    const token = getAccessToken();
    return token !== undefined && token !== null && token !== 'undefined';
}

const initialState = {
    theme: 'light',
    language: 'en',
    isLoggedIn: getIsLoggedIn()
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
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload
        }
    }
});

export const {
    switchThemeToLight,
    switchThemeToDark,
    switchThemeToOpposite,
    setLanguage,
    setIsLoggedIn
} = userSettingsSlice.actions;

export const selectThemeName = state => state.userSettings.theme;
export const selectLanguage = state => state.userSettings.language;
export const selectIsLoggedIn = state => state.userSettings.isLoggedIn;

export const selectThemeObject = createSelector(
    state => state.userSettings.theme,
    themeName => themeTokens[themeName] || themeTokens.default
);

export const selectLanguageName = createSelector(
    state => state.userSettings.language,
    language => languageFullNames[language] || 'English'
);

export default userSettingsSlice.reducer;