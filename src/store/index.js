import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from './slices/userSettingsSlice';
import bloggerSettingsReducer from './slices/bloggerSettingsSlice';

const store = configureStore({
    reducer: {
        userSettings: userSettingsReducer,
        bloggerSettings: bloggerSettingsReducer
    },
});

export default store;