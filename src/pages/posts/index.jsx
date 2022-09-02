import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { selectActiveBlogId } from '../../store/slices/bloggerSettingsSlice';
import PostsList from './postsList';
import BlogsSwitchMenu from './blogsSwitchMenu';

export default function Posts() {

    const blogId = useSelector(selectActiveBlogId);

    return (
        <Box sx={{ mt: 15 }} textAlign="center">
            <BlogsSwitchMenu blogId={blogId}/>
            <PostsList blogId={blogId} />
        </Box>
    );
}