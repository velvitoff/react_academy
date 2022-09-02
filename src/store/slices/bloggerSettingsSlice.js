import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeBlog: "1506626784522515067"
};

export const bloggerSettingsSlice = createSlice({
    name: 'bloggerSettings',
    initialState,
    reducers: {
        setActiveBlog: (state, action) => {
            state.activeBlog = action.payload
        }
    }
});

export const {
    setActiveBlog
} = bloggerSettingsSlice.actions;

export const selectActiveBlogId = state => state.bloggerSettings.activeBlog;

export default bloggerSettingsSlice.reducer;