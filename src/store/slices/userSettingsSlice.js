import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getLanguageFromStorage, getThemeFromStorage, setLanguageToStorage, setThemeToStorage } from '../../services/localStorageService';
import { themeTokens } from '../../utils/theme/themeTokens';
import languageFullNames from '../../utils/translation/languageFullNames';
import { getAccessToken } from './../../services/authService';

const getIsLoggedIn = () => {
    const token = getAccessToken();
    return !!token;
}

const getLanguage = () => {
    const lang = getLanguageFromStorage();
    if(!lang){
        return 'en';
    }
    return lang;
}

const getTheme = () => {
    const theme = getThemeFromStorage();
    if(!theme){
        return 'light';
    }
    return theme;
}

const initialState = {
    theme: getTheme(),
    language: getLanguage(),
    isLoggedIn: getIsLoggedIn()
};

export const userSettingsSlice = createSlice({
    name: 'userSettings',
    initialState,
    reducers: {
        switchThemeToLight: (state) => {
            setThemeToStorage('light');
            state.theme = 'light'
        },
        switchThemeToDark: (state) => {
            setThemeToStorage('dark');
            state.theme = 'dark'
        },
        setLanguage: (state, action) => {
            setLanguageToStorage(action.payload);
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