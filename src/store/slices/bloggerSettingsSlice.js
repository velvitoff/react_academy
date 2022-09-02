import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    activeBlog: "1506626784522515067",
    activeBlogName: "DevBlog"
};

export const bloggerSettingsSlice = createSlice({
    name: 'bloggerSettings',
    initialState,
    reducers: {
        setActiveBlog: (state, action) => {
            state.activeBlog = action.payload
        },
        setActiveBlogName: (state, action) => {
            state.activeBlogName = action.payload
        }
    }
});

export const {
    setActiveBlog,
    setActiveBlogName
} = bloggerSettingsSlice.actions;

export const selectActiveBlogId = state => state.bloggerSettings.activeBlog;
export const selectActiveBlogName = state => state.bloggerSettings.activeBlogName;

export default bloggerSettingsSlice.reducer;