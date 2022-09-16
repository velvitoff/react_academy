import { configureStore } from '@reduxjs/toolkit';
import userSettingsReducer from './slices/userSettingsSlice';

const store = configureStore({
    reducer: {
        userSettings: userSettingsReducer,
    },
});

export default store;