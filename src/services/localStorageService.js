export const setLanguageToStorage = (language) => {
    window.localStorage.setItem('language', language);
}

export const getLanguageFromStorage = () => {
    return window.localStorage.getItem('language');
}

export const setThemeToStorage = (theme) => {
    window.localStorage.setItem('theme', theme);
}

export const getThemeFromStorage = () => {
    return window.localStorage.getItem('theme');
}