import React, { useState } from 'react';
import Box from '@mui/system/Box';
import Pagination from '@mui/material/Pagination';

import PostDisplay from './postDisplay';
import Localize from '../../components/common/localize';

export default function PostsList({ items, blogId, deletePostCallback }) {

    return (
        <>
            {items.length === 0
                ?
                <Box sx={{ mt: 2 }}>
                    <Localize input={"No posts to display"} />
                </Box>
                :
                items.map((item) => (
                    <Box key={item.id} sx={{ mt: 1, mb: 1 }}>
                        <PostDisplay blogId={blogId} post={item} deletePostCallback={deletePostCallback} />
                    </Box>
                ))
            }
        </>
    );
}